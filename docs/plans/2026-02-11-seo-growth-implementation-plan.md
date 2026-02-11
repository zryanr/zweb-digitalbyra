# SEO Growth Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement a full Norway-first SEO foundation in the Next.js site, including technical SEO fixes, expanded information architecture, and long-form conversion-oriented content.

**Architecture:** Move from single-page anchor architecture to a route-based service IA with dedicated money pages, legal pages, local and industry landing pages, case pages, and expanded blog content. Centralize metadata generation so canonical, OG, Twitter, and schema outputs remain consistent across routes. Keep existing visual system and reuse header/footer/contact modules.

**Tech Stack:** Next.js App Router, TypeScript, Metadata API, JSON-LD via script tag component, static content data files.

### Task 1: P0 Domain and SEO Infrastructure
- Modify: `lib/constants.ts`
- Modify: `app/layout.tsx`
- Modify: `app/robots.ts`
- Modify: `app/sitemap.ts`
- Modify: `next.config.mjs`
- Create: `lib/seo.ts`
- Create: `app/opengraph-image.tsx`
- Create: `app/twitter-image.tsx`

### Task 2: Broken Link and Indexability Fixes
- Create: `app/personvern/page.tsx`
- Create: `app/vilkar/page.tsx`
- Modify: `components/footer.tsx`

### Task 3: Route-Based Money Pages and IA
- Create: `app/nettside-for-bedrift/page.tsx`
- Create: `app/webdesign-byra/page.tsx`
- Create: `app/wordpress-nettside/page.tsx`
- Create: `app/webflow-nettside/page.tsx`
- Create: `app/nettbutikk/page.tsx`
- Create: `app/seo-for-nettsider/page.tsx`
- Create: `app/drift-og-vedlikehold/page.tsx`
- Create: `app/priser/page.tsx`
- Create: `app/kontakt/page.tsx`
- Modify: `components/header.tsx`
- Modify: `components/hero.tsx`

### Task 4: Case and Supporting SEO Pages
- Create: `lib/cases.ts`
- Create: `app/case/page.tsx`
- Create: `app/case/[slug]/page.tsx`
- Create: `app/bransjer/handverker/page.tsx`
- Create: `app/bransjer/advokat/page.tsx`
- Create: `app/lokalt/oslo-webdesign/page.tsx`
- Create: `app/lokalt/bergen-webdesign/page.tsx`
- Create: `app/lokalt/trondheim-webdesign/page.tsx`
- Create: `app/guider/nettside-pris/page.tsx`
- Create: `app/guider/wordpress-vs-webflow/page.tsx`
- Create: `app/guider/seo-for-lansering/page.tsx`

### Task 5: Blog and Internal Linking Expansion
- Modify: `lib/blog.ts`
- Modify: `components/blog-article-content.tsx`
- Modify: `components/blog-cta.tsx`
- Modify: `app/blog/page.tsx`
- Modify: `app/blog/[slug]/page.tsx`

### Task 6: Verification
- Run: `npm run test`
- Run: `npm run build`
- Validate: `curl` checks for `robots.txt`, `sitemap.xml`, legal pages, and selected new routes
