# ZWEB Norway SEO + Conversion Plan (2026-02-18)

## Scope
- Market: Norway-first (Bokmål, SMB bedriftseiere)
- Goal: Increase visibility + leads for nettside/webdesign/pris/byrå/WordPress/Webflow/nettbutikk/SEO/drift intent.
- Stack context: Next.js App Router on Vercel.

## Assumptions and unknowns
- We do not have direct access to Google Search Console, GA4, or CRM attribution.
- SERP snapshots are based on public web queries on 2026-02-18 and can vary by location/device.
- We validated live site indexability/crawlability, but ranking impact still depends on backlinks, authority, and user behavior.

## External observations (Norway intent)
- Commercial queries are crowded by local agencies + aggregator pages (for example Ocast and Byråguiden list pages).
- "Nettside pris" and "WordPress vs Webflow" SERPs reward deep comparison content (often with calculators, matrices, and FAQs).
- Local queries (Oslo/Bergen/Trondheim) show exact-match or city-focused landing pages.

## Live technical snapshot (zweb.no)
- `https://zweb.no` redirects to `https://www.zweb.no/`.
- `robots.txt` and `sitemap.xml` are present and valid.
- Core metadata and schema are present across core pages.
- Lighthouse run (2026-02-18):
  - Mobile performance 98, LCP 2.3s.
  - Desktop performance 99, LCP 0.5s.
- Main snippet weakness before this update: many meta descriptions were too short and several titles were overly long.

## What was implemented in code
1. Metadata quality and snippet control
- Improved title handling so long titles do not always inherit brand suffix and get truncated.
- Expanded under-length meta descriptions on core landing/guide/legal pages.

2. Structured data improvements
- Added stronger global metadata signals and entity IDs in layout schema.
- Upgraded blog article schema from generic `Article` to `BlogPosting` with `wordCount`, `articleSection`, `about`, and richer mentions.
- Added `BreadcrumbList` + `ItemList` schema on blog index.

3. Conversion/messaging updates
- Rewrote hero and key homepage copy to be less generic and more buyer-intent focused.
- Reduced potentially weak proof-style claims and tightened CTA language.

4. Content upgrades
- Reworked `WordPress vs Webflow` post into a stronger purchase-intent guide (TCO, governance, decision matrix, updated sources).
- Added a new local-intent article targeting `webdesign oslo/bergen/trondheim` comparison intent.

## Next steps requiring data access
- Pull top queries + low-CTR pages from GSC and rewrite titles/descriptions for the worst 20 URLs first.
- Track lead events by landing page and query class (price/platform/local/seo/drift).
- Add monthly content refresh cycle for pages with impressions but low clicks.

## Sources used
- https://www.zweb.no/
- https://www.zweb.no/robots.txt
- https://www.zweb.no/sitemap.xml
- https://duckduckgo.com/
- https://webaas.no/nettside-pris/
- https://www.innovena.no/cms-sammenligning/wordpress-vs-webflow/
- https://www.webpluss.no/nettsidevedlikehold-og-support/
- https://byråguiden.no/webdesign/webdesign
- https://ocast.com/no/agencies/web-design
- https://developers.google.com/search/docs
- https://developer.wordpress.org/
- https://help.webflow.com/hc/en-us
