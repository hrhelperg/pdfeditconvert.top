# Build decisions log

## 2026-05-11 — Initial build

### WebmasterID
- `@webmasterid/sdk-next` does not exist on npm (404). Used the `next/script` tag fallback per spec §9.
- Loaded via `next/script` with `strategy="afterInteractive"` in `src/app/layout.tsx`.
- Single tag in the DOM. App Router's `next/script` preserves it across client navigation without duplication.

### Favicons
- Neither ImageMagick nor rsvg-convert is installed on this machine.
- Used Next.js' file-convention icon API instead: `src/app/icon.tsx` (32×32) and `src/app/apple-icon.tsx` (180×180). Both use `ImageResponse` to generate PNGs at build time from JSX — no native image tools required.
- Removed the default `src/app/favicon.ico` so Next.js doesn't ship the create-next-app placeholder.
- Removed the `icons` field from `rootMetadata()` in `src/lib/seo.ts` because the file convention auto-emits the `<link rel="icon">` tags.

### Logo
- User-supplied lockup logo not yet placed at `public/pdf-editor-logo.png`. The site renders fine without it (header uses the inline brand mark; OG image is generated from code). To drop the user's logo in, save the original PNG as `~/Desktop/pdfeditconvert-top/public/pdf-editor-logo.png`. It will be picked up the next time it's referenced.
- Created `public/pdf-editor-mark.svg` (icon mark) and `public/pdf-editor-wordmark.svg` (wordmark) as SVG placeholders matching the brand colors. The schema.org Organization references `/pdf-editor-mark.svg`.

### Store badges
- Used placeholder SVGs in `public/badges/` for the App Store and Google Play badges. They render correctly but should be swapped for the official Apple/Google asset-kit SVGs before public launch.
- Code does not need to change — overwriting the two SVG files in `public/badges/` is enough.

### Build verification
- Production build: 39 routes prerendered, all static. No errors.
- Test suite: 17/17 passing.
- Lint: clean.
- JSON-LD verified in initial HTML of homepage, hubs, guides. Types present: Organization, WebSite, MobileApplication, BreadcrumbList, Article, HowTo, FAQPage, ListItem, Question, Answer.
- Sitemap: 30 routes, all absolute URLs on pdfeditconvert.top.
- Robots: allow all, sitemap pointer, host header.

### Manual follow-ups for the user
- Save the official logo at `public/pdf-editor-logo.png`.
- Replace placeholder store badges in `public/badges/` with the official Apple/Google asset-kit SVGs.
- Run Lighthouse against the deployed site (mobile) and record scores back to this file once on Vercel.
- Review and customize `src/content/legal/privacy.ts` and `src/content/legal/terms.ts` with any company-specific clauses or DPO info.

### Manual: Lighthouse
Lighthouse is a browser-based audit that cannot be run from the CLI in this build session. Once the site is deployed to Vercel:
1. Open the production URL in Chrome.
2. DevTools → Lighthouse → Mobile + all categories → Analyze.
3. Record scores for `/`, `/compress-pdf`, and `/guides/how-to-compress-pdf` back into this file.
