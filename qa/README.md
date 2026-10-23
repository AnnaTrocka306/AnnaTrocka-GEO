# Website quality checks

Scope: public website in `preview/anna-geo-website`. These checks do not certify legal compliance, factual accuracy, actual search indexing or complete security/accessibility.

- `npm ci --ignore-scripts`, `npm run check:static`: all language pages, local links/fragments, metadata, sitemap and reciprocal languages; no executable scripts, unapproved embeds, remote assets or common credential patterns in public output. Creates a hash manifest and copies only HTML, approved assets and required root files into `_qa_site/AnnaTrocka-GEO`. Repository documents and QA code are excluded from deployment.
- `npx playwright install chromium`, `npm run check:browser`: every language page at 360, 375, 390, 768 and 1280px, overflow, images, local errors, unexpected external requests, mobile menu, keyboard skip links; axe critical/serious findings block publication. Other findings are warnings. Failure screenshots and JSON reports are saved in `qa-report`.
- `npm run check:lighthouse`: mobile laboratory performance/SEO/accessibility reports for three homepages; performance thresholds are warnings. Laboratory values are not real-user INP or a guarantee of performance for every visitor.

The workflow publishes only after the quality job passes. **For this to replace automatic branch deployment, Settings → Pages → Source must be GitHub Actions.** While Source is Deploy from a branch, the old independent Pages workflow can publish regardless of these checks. This setting is not changed by adding this file.

Adding new embeds, analytics or forms requires deliberate policy and test updates after the relevant privacy review. Multiple valid phones/emails are allowed; these tests do not invent identity or legal-contact rules. External target availability, semantic image descriptions and legal text correctness still require review.

The source repository remains public: excluding files from the website artifact does not remove their existing GitHub copies or history.
