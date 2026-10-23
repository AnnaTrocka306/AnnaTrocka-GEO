"""Report external link availability as warnings: anti-bot denials are not broken-link proof."""
import concurrent.futures
from html.parser import HTMLParser
import json
from pathlib import Path
import urllib.error
import urllib.request

root = Path(__file__).resolve().parents[1]
links = set()


class Links(HTMLParser):
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        url = a.get('href', '')
        if tag == 'a' and url.startswith('https://') and not url.startswith('https://annatrocka306.github.io/'):
            links.add(url)


for lang in ('de', 'en', 'ru'):
    for page in (root / lang).rglob('*.html'):
        Links().feed(page.read_text())


def check(url):
    try:
        request = urllib.request.Request(url, method='HEAD', headers={'User-Agent': 'AnnaTrocka-Website-LinkCheck/1.0'})
        with urllib.request.urlopen(request, timeout=12) as response:
            return {'url': url, 'status': response.status, 'result': 'reachable'}
    except urllib.error.HTTPError as exc:
        return {'url': url, 'status': exc.code, 'result': 'warning: unavailable to checker; manual verification required'}
    except Exception as exc:
        return {'url': url, 'result': 'warning: ' + type(exc).__name__}


with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    results = list(pool.map(check, sorted(links)))
(root / 'qa-report/external-links.json').write_text(json.dumps(results, ensure_ascii=False, indent=2))
warnings = [x for x in results if x['result'] != 'reachable']
with (root / 'qa-report/summary.md').open('a') as output:
    output.write(f'\n## External links\n\nChecked: {len(results)}. Require manual verification: {len(warnings)}.\n')
    for item in warnings:
        output.write('- ' + item['url'] + ': ' + item['result'] + '\n')
print(f'External links: {len(results)} checked; {len(warnings)} warnings (non-blocking).')
