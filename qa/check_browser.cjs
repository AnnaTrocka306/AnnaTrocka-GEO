const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const reportDir = path.join(root, 'qa-report');
const base = 'http://127.0.0.1:4173/AnnaTrocka-GEO/';
const manifest = JSON.parse(fs.readFileSync(path.join(reportDir, 'static.json'))).public_manifest;
const pages = manifest.map(x => x.path).filter(x => /^(de|en|ru)\/.*index\.html$/.test(x));
const failures = [], warnings = [];
const server = spawn('python3', ['-m', 'http.server', '4173', '--bind', '127.0.0.1', '--directory', path.join(root, '_qa_site')], { stdio: 'ignore' });
let browser;
async function ready() {
  for (let i = 0; i < 50; i++) {
    try { if ((await fetch(base)).ok) return; } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Local website server did not start');
}
(async () => {
  await ready();
  browser = await chromium.launch({ headless: true });
  for (const width of [360, 375, 390, 768, 1280]) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    let active = '';
    page.on('pageerror', error => failures.push(`${active} ${width}px: JavaScript error: ${error.message}`));
    page.on('response', response => {
      if (response.url().startsWith(base) && response.status() >= 400) failures.push(`${active}: HTTP ${response.status()} for local resource`);
    });
    await page.route('**/*', route => {
      const url = route.request().url();
      if (url.startsWith('http://127.0.0.1:4173/') || url.startsWith('data:')) return route.continue();
      failures.push(`${active}: unapproved external request (${new URL(url).hostname})`);
      return route.abort();
    });
    for (const source of pages) {
      active = source;
      const before = failures.length;
      await page.goto(base + source.replace(/index\.html$/, ''), { waitUntil: 'networkidle' });
      const state = await page.evaluate(() => ({
        width: innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        brokenImages: [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src')),
        overflowing: [...document.querySelectorAll('body *')].filter(e => {
          const r = e.getBoundingClientRect();
          return r.width > 0 && getComputedStyle(e).visibility !== 'hidden' && r.right > innerWidth + 2;
        }).slice(0, 6).map(e => `${e.tagName}.${e.className}`)
      }));
      if (state.scrollWidth > width + 2) failures.push(`${source} ${width}px: horizontal overflow (${state.scrollWidth}px), ${state.overflowing.join(', ')}`);
      for (const img of state.brokenImages) failures.push(`${source}: image did not load: ${img}`);
      if (width === 360 || width === 1280) {
        const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
        for (const violation of result.violations) {
          const message = `${source} ${width}px: ${violation.id} (${violation.impact}), ${violation.nodes.length} elements`;
          (['critical', 'serious'].includes(violation.impact) ? failures : warnings).push(message);
        }
      }
      if (width < 820) {
        const summary = page.locator('details.mobile-menu summary');
        if (await summary.count()) {
          await summary.click();
          const links = page.locator('details.mobile-menu[open] .mobile-links a');
          if (!(await links.count()) || !(await links.first().isVisible())) failures.push(`${source} ${width}px: mobile menu does not open`);
          const bounds = await page.locator('details.mobile-menu[open] .mobile-links').boundingBox();
          if (bounds && (bounds.x < -2 || bounds.x + bounds.width > width + 2)) failures.push(`${source} ${width}px: mobile menu outside viewport`);
          await summary.click();
        } else failures.push(`${source}: mobile menu missing`);
      }
      if (failures.length > before) {
        const filename = source.replaceAll('/', '_') + '-' + width + '.png';
        await page.screenshot({ path: path.join(reportDir, filename), fullPage: false });
      }
    }
    // Check that the keyboard skip link works on each language homepage.
    for (const lang of ['de', 'en', 'ru']) {
      await page.goto(base + lang + '/');
      await page.keyboard.press('Tab');
      if (!(await page.locator('.skip').evaluate(e => e === document.activeElement))) failures.push(`${lang} ${width}px: skip link is not the first keyboard control`);
      await page.keyboard.press('Enter');
      if (new URL(page.url()).hash !== '#main') failures.push(`${lang}: keyboard skip link failed`);
    }
    await context.close();
  }
})().catch(error => failures.push(`Browser checks could not complete: ${error.message}`)).finally(async () => {
  if (browser) await browser.close();
  server.kill();
  fs.writeFileSync(path.join(reportDir, 'browser.json'), JSON.stringify({ pages: pages.length, widths: [360,375,390,768,1280], failures, warnings }, null, 2));
  const summary = `\n## Browser checks\n\nErrors: ${failures.length}. Warnings: ${warnings.length}.\n\n` + [...failures, ...warnings].map(x => '- ' + x).join('\n') + '\n';
  fs.appendFileSync(path.join(reportDir, 'summary.md'), summary);
  console.log(summary);
  if (failures.length) process.exitCode = 1;
});
