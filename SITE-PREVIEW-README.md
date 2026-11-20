# Anna Trocka — Website

Die öffentliche Website wird aus `preview/anna-geo-website` über GitHub Pages bereitgestellt. Aktuelle Basis-URL: https://annatrocka306.github.io/AnnaTrocka-GEO/

Seit 23. Oktober 2026 ist die Website zur Indexierung freigegeben. Die 27 Sprachseiten enthalten selbstreferenzierende Canonical-URLs, DE/EN/RU-Sprachverknüpfungen und sind in `sitemap.xml` aufgeführt. Der Einstieg im Stammverzeichnis leitet zur deutschen Startseite weiter. Eine Aufnahme in Suchergebnisse wird nicht garantiert.

Keine Webanalyse, Werbeskripte, eingebetteten Drittanbieter-Widgets, Nutzerkonten oder Kontaktformulare. Kein Cookie-Einwilligungsdialog. Rechtsinformationen stehen unter den jeweiligen Impressum-/Datenschutz-Seiten.

Die Datei `robots.txt` im Projektverzeichnis steuert nicht den gesamten github.io-Host. Es besteht keine bekannte Sperre am Host-Stamm. Vor Anschluss einer eigenen Domain sind Canonical-, OpenGraph-, Hreflang- und Sitemap-URLs sowie die dann maßgebliche robots.txt anzupassen.

Fachliche Originaldateien und `main` bleiben bei Website-Änderungen unberührt.

## Octopus site services update — 2026-11-20

- Services landing pages: `geo-pass/{de,ru,en}/services/index.html`.
- Dedicated product pages under `services/geo-pass/`, `services/articles/`, `services/website/` on all three languages.
- Website product draft prices: mapping €19.90 once; first page €150; each further page €90. This is a planned product; the self-editing interface is not yet implemented or offered for ordering.
- Original pricing pages and content are retained and linked; the longer homepage FAQ (13 questions per language) has been relocated verbatim to `geo-pass/{de,ru,en}/faq/index.html`.
- Service menu links added to existing principal informational pages; service pages and FAQs are still marked `noindex,nofollow` consistent with the existing Octopus development preview.
- Archive branch: `archive/octopus-services-before-2026-11-20`.
- This records source updates only; externally served GitHub Pages deployment / browser rendering must be verified separately.

## Octopus visual & CTA refinements — 2026-11-20

- Product cards on the three localized homepages and services overview pages now use compact, generic, business-appropriate icons, not hotel imagery. Palette: cream / coffee-brown / bronze, matching the existing site CSS rather than neon orange or green.
- The three product buttons use larger, lighter-weight labels with darker, higher-contrast backgrounds.
- The approved green Octopus CTA is displayed at a larger size beneath the homepage introductory text. Language-specific illustrated assets are `octopus-cta-green.webp` (DE), `octopus-cta-green-ru.webp` and `octopus-cta-green-en.webp` under `geo-pass/assets/`.
- The floating homepage CTA reuses the same green illustration, with no redundant HTML label, and appears only after the `#plattform` section enters the viewer's screen. Implementation: `geo-pass/assets/octopus-cta-visibility.js` plus scoped CSS overrides. Keyboard accessibility follows floating-CTA visibility.
- Existing original assets were preserved for rollback. `main`, domain configuration, service pricing and GEO Pass forms were not changed.
- Source-level QA: all six changed home/overview HTML pages have exactly one H1; every image/link/script local path resolves to a repository file; the three new icons, all three localized CTA assets and the scroll activation script are present in the release commit.
- Browser rendering, scroll animation and GitHub Pages propagation still require live visual verification; no claim of browser deployment validation is made here.
