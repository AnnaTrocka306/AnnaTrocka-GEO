# Anna Trocka — Website-Prototyp (DE)

**Status:** unveröffentlichter Prototyp in GitHub-Branch `preview/anna-geo-website`; keine Änderungen an den bestehenden GEO-Dokumenten in `main`. Alle Seiten sind HTML-first und benötigen keinen Build-Prozess.

## Vorschau ohne eigene Domain

GitHub Pages kann bei Bedarf unter **Settings → Pages → Deploy from a branch → `preview/anna-geo-website` → `/(root)`** veröffentlicht werden, wenn das Konto/Repository dies erlaubt. Die später mögliche URL ist `https://annatrocka306.github.io/AnnaTrocka-GEO/`; erst nach Einschalten und Statusbestätigung als **live** ausgeben.

**Achtung:** GitHub Pages ist öffentlich. Die Seiten enthalten absichtlich `<meta name="robots" content="noindex,follow">`, weil Anbieterkennzeichnung, Datenschutz, tatsächliche Tests, Bildquellen, Canonical und echtes Hosting noch nicht final sind. `noindex` ersetzt keine Authentifizierung. Ein öffentlich zugänglicher Preview ist **nicht** vertraulich. Bei rechtlicher Unklarheit den Preview nicht publizieren, sondern lokal `index.html` öffnen. Kein `robots.txt` an einem Projekt-Unterpfad kann Host-weite Regeln garantieren. Nach Umzug auf die richtige Domain: `noindex` entfernen, Canonical-/OpenGraph-URL, sitemap und site-root robots sauber generieren.

## Dateien

- `index.html` (Einstieg zu `/de/`)
- `de/index.html` (Startseite)
- `de/methodik/index.html`, `de/hotels/index.html`, `de/fallstudien/index.html`, `de/ueber-mich/index.html`
- `de/kontakt/index.html`, `de/impressum/index.html`, `de/datenschutz/index.html`, `de/barrierefreiheit/index.html`
- `assets/site.css` und `assets/icon.svg`

Interne Links sind **relativ**, sodass GitHub-Pages-Projektpfade und eine spätere eigene Domain funktionieren. **Keine Abhängigkeiten, keine Build- oder JS-Pflicht für den Hauptinhalt.**

## SEO/GEO und Barrierefreiheit

Semantisches HTML, Linktexte, SEO-Titel und Beschreibungen, sichtbare H1/H2-Hierarchie, unabhängige fachliche Aussagen, JSON-LD `Person`, responsive Layout, Tastatur-Skiplink, Kontrast, Fokusstil, reduced-motion. Bilder von Unsplash dienen ausschließlich als **Symbolbilder** und dürfen nicht als echte Fotos von Personen oder den untersuchten Hotels verstanden werden. Lizenz und dauerhafte Bereitstellung vor Produktivstart prüfen; besser eigene genehmigte Bilder im Repository speichern.

GSC/Bing/GA4/IndexNow, Domain, korrektes `canonical`, produktive `sitemap.xml`, vollständige `BlogPosting`-Datensätze, überprüfte BFSG/WCAG-Konformität, rechtsgültiges Impressum und Datenschutz sind **offen** und werden nicht als umgesetzt behauptet. Analyse- und Tracking-Cookies sind in der Vorschau nicht eingebaut. Die zentrale GEO-Methodik und Cases bleiben in originalen Markdown-Dateien; die Website ist redaktionelle Zusammenfassung mit Quellenlinks, **keine Neufassung der Methodik**.

## Quellen

- `docs/methodology/GEO_Methodik_Anna_Trocka_Base.md`
- `docs/case-studies/Hotel-in-ChatGPT-sichtbar-machen.md` (laufend)
- `docs/case-studies/Waldorf_Astoria_Dubai_Palm_Jumeirah_GEO_Audit_DE.md` (in Bearbeitung)
- `docs/case-studies/Trocka_GEO для отелей_Предварительный аудит_AXXOS.md` (Entwurf)
- `docs/knowledge-base/Knowledge_Dictionary/` und KI-GEO-Insider auf Blogger.

## Abnahme für nächsten Schritt

1. Sichttest Desktop/Mobile und Tastatur/Screenreader, Farben, Kontrast, externe Bilder/Lizenzen.
2. Inhaltlich persönliche Vorstellung, Aussagegrenzen, Fallstudien und Kontaktadressen freigeben.
3. Tatsächliche GitHub Pages Preview nur bei expliziter Entscheidung aktivieren (öffentlich!) und URL aufrufbar prüfen.
4. Bei Produktivsetzung Domain, rechtsgültige Seiten, technische Crawl-Freigabe, echte HTTPS/Cloudflare-Regeln, Search Console/Bing, IndexNow, Consent vor GA4, strukturierte Daten pro Seitentyp, GSC/Bing-Monitoring.

**Keine existierende Datei im GitHub-Stammverzeichnis wurde verändert.**
