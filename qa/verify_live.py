"""Confirm the deployed commit, then check all 27 language URLs on the public site."""
import concurrent.futures
import json
import os
import time
from urllib.parse import urljoin
import urllib.request
import xml.etree.ElementTree as ET

base = os.environ.get('SITE_URL', 'https://annatrocka306.github.io/AnnaTrocka-GEO/').rstrip('/') + '/'
expected = os.environ['GITHUB_SHA']
for attempt in range(12):
    try:
        with urllib.request.urlopen(urljoin(base, 'build.json') + '?commit=' + expected, timeout=15) as r:
            if json.load(r).get('commit') == expected:
                break
    except Exception:
        pass
    if attempt == 11:
        raise SystemExit('Live deployment version could not be confirmed')
    time.sleep(5)
with urllib.request.urlopen(urljoin(base, 'sitemap.xml'), timeout=20) as r:
    sitemap = ET.fromstring(r.read())
urls = [n.text for n in sitemap.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]


def check(url):
    with urllib.request.urlopen(url, timeout=20) as r:
        body = r.read().decode()
        if r.status != 200 or 'content="noindex' in body or 'noindex' in (r.headers.get('X-Robots-Tag') or ''):
            raise RuntimeError('Live page failed: ' + url)
    return url


with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    checked = list(pool.map(check, urls))
print(f'Live commit {expected} confirmed; {len(checked)} canonical pages reachable. This does not prove indexing.')
