"""Validate and stage only approved public website files; no third-party dependencies."""
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import sys
from html.parser import HTMLParser
from urllib.parse import unquote, urljoin, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://annatrocka306.github.io/AnnaTrocka-GEO/'
PREFIX = '/AnnaTrocka-GEO/'
REPORT = ROOT / 'qa-report'
STAGE = ROOT / '_qa_site' / 'AnnaTrocka-GEO'
errors, warnings = [], []


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.ids, self.refs, self.alternates = set(), [], {}
        self.canonical, self.robots, self.jsonld = [], [], []
        self.h1, self.titles, self.descriptions = 0, 0, 0
        self.lang = None
        self.in_json = False
        self.json_text = ''
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            if a['id'] in self.ids:
                errors.append('Duplicate id: ' + a['id'])
            self.ids.add(a['id'])
        if tag == 'html':
            self.lang = a.get('lang')
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self.titles += 1
        if tag == 'meta' and a.get('name') == 'description':
            self.descriptions += bool(a.get('content', '').strip())
        if tag == 'meta' and a.get('name') == 'robots':
            self.robots.append(a.get('content', '').lower())
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical.append(a.get('href'))
        if tag == 'link' and a.get('rel') == 'alternate' and a.get('hreflang'):
            self.alternates[a['hreflang']] = a.get('href')
        if tag == 'img' and 'alt' not in a:
            errors.append('Image lacks alt attribute')
        if tag in ('iframe', 'form', 'object', 'embed'):
            errors.append('Unapproved embedded service or form: ' + tag)
        if tag == 'script':
            self.in_json = a.get('type') == 'application/ld+json'
            self.json_text = ''
            if not self.in_json:
                errors.append('Executable script requires privacy-policy review')
        for field in ('href', 'src', 'poster', 'action'):
            if a.get(field):
                self.refs.append((tag, a[field]))
        if tag == 'link' and a.get('rel') in ('preconnect', 'dns-prefetch'):
            errors.append('Unapproved external connection hint')

    def handle_data(self, data):
        if self.in_json:
            self.json_text += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.in_json:
            try:
                self.jsonld.append(json.loads(self.json_text))
            except ValueError:
                errors.append('Invalid JSON-LD')
            self.in_json = False


def fail(message):
    errors.append(message)


pages = sorted(p for lang in ('de', 'en', 'ru') for p in (ROOT / lang).rglob('*.html'))
if not pages:
    fail('No language pages found')
parsed, page_urls = {}, set()
for p in pages + [ROOT / 'index.html']:
    if p.is_symlink():
        fail('Symlink is not allowed in public output: ' + str(p.relative_to(ROOT)))
        continue
    parsed[p.resolve()] = Page(p.read_text(encoding='utf-8'))

for p in pages:
    page = parsed[p.resolve()]
    rel = p.relative_to(ROOT)
    url = BASE + rel.parent.as_posix() + '/'
    page_urls.add(url)
    if page.lang != rel.parts[0]:
        fail(str(rel) + ': incorrect document language')
    if page.canonical != [url]:
        fail(str(rel) + ': missing or inconsistent canonical')
    if page.h1 != 1 or page.titles != 1 or page.descriptions != 1:
        fail(str(rel) + ': expected one h1, title and nonempty description')
    if len(page.robots) != 1 or any(re.search(r'\b(noindex|none|nosnippet)\b|max-snippet\s*:\s*0', r) for r in page.robots):
        fail(str(rel) + ': indexing or snippet restriction')
    if not {'de', 'en', 'ru'} <= page.alternates.keys():
        fail(str(rel) + ': incomplete language alternatives')
    hrefs = [ref for _, ref in page.refs]
    if not any('/impressum/' in h or '/imprint/' in h for h in hrefs):
        fail(str(rel) + ': legal notice link missing')
    if not any('/datenschutz/' in h or '/privacy/' in h for h in hrefs):
        fail(str(rel) + ': privacy link missing')
    if not any(h.startswith('tel:') or 'wa.me/' in h for h in hrefs) and '/kontakt/' in url:
        fail(str(rel) + ': contact action missing')

assets = sorted((ROOT / 'assets').rglob('*'))
allowed_ext = {'.css', '.svg', '.webp', '.avif', '.png', '.jpg', '.jpeg', '.ico', '.woff', '.woff2'}
metadata_file = ROOT / 'assets/images/IMAGE-PROVENANCE.json'
asset_files = [p for p in assets if p.is_file() and p.suffix.lower() in allowed_ext]
for p in assets:
    if p.is_symlink():
        fail('Public asset symlink: ' + str(p.relative_to(ROOT)))
    if p.is_file() and p.suffix.lower() not in allowed_ext and p != metadata_file:
        fail('Unapproved public asset type: ' + str(p.relative_to(ROOT)))
    if p.is_file() and p.stat().st_size > 1024 * 1024:
        warnings.append('Asset exceeds 1 MiB: ' + str(p.relative_to(ROOT)))
    if p.suffix == '.css':
        css = p.read_text()
        if '@import' in css or re.search(r'url\([\s\"\']*https?://', css):
            fail('External CSS dependency requires review: ' + str(p.relative_to(ROOT)))

public_files = pages + [ROOT / n for n in ('index.html', 'robots.txt', 'sitemap.xml', '.nojekyll')] + asset_files
public_set = {p.resolve() for p in public_files}
for p, page in parsed.items():
    for tag, href in page.refs:
        if href.startswith(('mailto:', 'tel:')):
            if not href.split(':', 1)[1]:
                fail('Empty contact link: ' + str(p.relative_to(ROOT)))
            continue
        resolved = urlsplit(urljoin(BASE + p.relative_to(ROOT).as_posix(), href))
        if resolved.scheme not in ('http', 'https'):
            fail('Unsupported link scheme: ' + str(p.relative_to(ROOT)))
            continue
        if resolved.netloc != 'annatrocka306.github.io':
            if tag not in ('a', 'link'):
                fail('External asset requires approval: ' + str(p.relative_to(ROOT)))
            continue
        if not resolved.path.startswith(PREFIX):
            fail('Link leaves site project prefix: ' + str(p.relative_to(ROOT)))
            continue
        target = ROOT / unquote(resolved.path[len(PREFIX):])
        if target.is_dir():
            target = target / 'index.html'
        if target.resolve() not in public_set or not target.is_file():
            fail(str(p.relative_to(ROOT)) + ': target not included in public build: ' + href)
        elif resolved.fragment and target.resolve() in parsed and unquote(resolved.fragment) not in parsed[target.resolve()].ids:
            fail(str(p.relative_to(ROOT)) + ': broken fragment: ' + href)

try:
    sitemap = ET.parse(ROOT / 'sitemap.xml')
    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    locs = [n.text for n in sitemap.findall('s:url/s:loc', ns)]
    if len(locs) != len(set(locs)) or set(locs) != page_urls:
        fail('Sitemap does not exactly match canonical language pages')
except (OSError, ET.ParseError) as exc:
    fail('Invalid sitemap: ' + type(exc).__name__)

for p in pages:
    group = parsed[p.resolve()].alternates
    for url in group.values():
        if url not in page_urls:
            fail('Unknown language alternative: ' + str(p.relative_to(ROOT)))
            continue
        target = ROOT / url[len(BASE):] / 'index.html'
        if parsed[target.resolve()].alternates != group:
            fail('Nonreciprocal language links: ' + str(p.relative_to(ROOT)))

secret_patterns = [r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----', r'gh[pousr]_[A-Za-z0-9]{30,}', r'AKIA[0-9A-Z]{16}', r'sk-(?:proj-)?[A-Za-z0-9_-]{30,}']
for p in public_files:
    if not p.is_file():
        fail('Required output file missing: ' + str(p.relative_to(ROOT)))
        continue
    if p.suffix.lower() in {'.html', '.css', '.svg', '.txt', '.xml'}:
        if any(re.search(pattern, p.read_text(encoding='utf-8')) for pattern in secret_patterns):
            fail('Possible credential in public output: ' + str(p.relative_to(ROOT)))

if metadata_file.exists():
    try:
        provenance = json.loads(metadata_file.read_text())
        for name, image in provenance.get('images', {}).items():
            if not image.get('verified_license'):
                warnings.append('Manual image-rights review remains recorded for: ' + name)
    except ValueError:
        fail('Image provenance JSON is invalid')

REPORT.mkdir(exist_ok=True)
manifest = [{'path': p.relative_to(ROOT).as_posix(), 'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in public_files if p.is_file()]
result = {'pages': len(pages), 'errors': errors, 'warnings': warnings, 'public_manifest': manifest}
(REPORT / 'static.json').write_text(json.dumps(result, ensure_ascii=False, indent=2))
(REPORT / 'summary.md').write_text('# Website checks\n\n' + f'Pages: {len(pages)}. Errors: {len(errors)}. Warnings: {len(warnings)}.\n\n' + '\n'.join('- ' + x for x in errors + warnings) + '\n')
print(f'Static checks: {len(pages)} pages; {len(errors)} errors; {len(warnings)} warnings')
for message in errors + warnings:
    print(message)
if errors:
    sys.exit(1)
if STAGE.parent.exists():
    shutil.rmtree(STAGE.parent)
STAGE.mkdir(parents=True)
for p in public_files:
    target = STAGE / p.relative_to(ROOT)
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(p, target)
(STAGE / 'build.json').write_text(json.dumps({'commit': os.environ.get('GITHUB_SHA', 'local'), 'pages': len(pages)}))
print('Public build staged from explicit allowlist; repository documents and QA files excluded.')
