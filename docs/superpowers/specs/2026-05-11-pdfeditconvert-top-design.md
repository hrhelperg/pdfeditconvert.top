# pdfeditconvert.top — Design Spec

**Date:** 2026-05-11
**Domain:** https://pdfeditconvert.top
**Repo:** https://github.com/hrhelperg/pdfeditconvert.top
**Local path:** `~/Desktop/pdfeditconvert-top`
**Deploy target:** Vercel
**Status:** Design approved — awaiting final spec review before plan-writing

---

## 1. Purpose

Build a premium SEO-first PDF knowledge hub and content site that:

- Acts as a trustworthy authority on PDF workflows.
- Funnels organic traffic into the mobile PDF Editor app (App Store + Google Play).
- Scales as a long-term content/SEO asset (40+ pages over time).
- Reads as a real product company, not AI-generated filler.

Out of scope for this initial build:
- No in-browser PDF editor (the app is the product; the site is editorial + funnel).
- No user accounts, payments, or backend.
- No i18n (English only for v1).
- No CMS — content lives in typed TS modules, easy to migrate to a CMS later.

---

## 2. Tech stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG-first, native metadata API, route-based co-location |
| Language | TypeScript (strict) | Type-safe content modules + schema builders |
| Styling | Tailwind CSS v4 | Token-driven, zero runtime, smallest bundle |
| Fonts | Geist Sans via the `geist` package (wraps `next/font`) | Self-hosted, no layout shift, no Google Fonts request |
| Icons | `lucide-react` | Tree-shakeable, consistent stroke icons matching the logo style |
| Analytics | `@webmasterid/sdk-next` (fallback: `next/script`) | Spec-mandated tracker |
| Hosting | Vercel | Best Next.js fit; user already chose |
| Package manager | npm | pnpm not installed locally |
| Node | >= 20 LTS | Required by Next.js 15 |

No state management library. No client component beyond Header (mobile menu) and FAQ (accordion).

---

## 3. Brand & design system

### Logo
- Source: user-supplied `~/Downloads/pdf-editor-logo.png` (full lockup with brand mark, two-tone wordmark, feature row, tagline, store badges).
- Site uses three derived variants:
  1. **Full lockup** — `public/pdf-editor-logo.png` (homepage hero, social OG fallback).
  2. **Wordmark only** — `public/pdf-editor-wordmark.svg` (header). Two-tone: "PDF" in `--color-brand`, "Editor" in `--color-ink`.
  3. **Icon mark** (the red rounded square with "PDF EDITOR" white on red) — `public/pdf-editor-mark.svg` plus `favicon.ico`, `apple-touch-icon.png`, and OG fallback square.

### Color tokens
```css
--color-brand:        #E50914;  /* primary red */
--color-brand-2:      #EF1D26;  /* secondary red, hovers/accents */
--color-ink:          #0B1220;  /* primary text */
--color-muted:        #4B5563;  /* secondary text */
--color-border:       #E5E7EB;
--color-bg:           #F8FAFC;  /* page background */
--color-surface:      #FFFFFF;  /* card background */
--color-brand-soft:   #FEE2E2;  /* tinted backgrounds for callouts */
```

### Typography
- Font: Geist Sans (self-hosted via `geist` package, swap fallback to system sans).
- Display sizes via `clamp()` for fluid scaling.
- Body base: 16px / line-height 1.65 for prose; 1.5 for UI.
- Headings: 700 weight, tight tracking (`-0.02em`).

### Radius & shadow scale
- Radius: `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`, `--radius-xl: 24px`.
- Shadow: subtle, warm-tinted on hover. Three steps (`shadow-card`, `shadow-card-hover`, `shadow-elevated`).

### Layout primitives
- `Container` — max-w-6xl (1152px), responsive horizontal gutter (16/24/32px at sm/md/lg).
- `Section` — vertical rhythm wrapper (py-16 md:py-24).
- `Prose` — article-styled `<div>` with custom Tailwind typography styles matching the brand.

### Component primitives
- `Button` — variants: `primary` (red), `secondary` (outline), `ghost`; sizes `md` and `lg`.
- `Card` — white surface, border, rounded-2xl, hover-shadow.
- `Badge` — small label, used for "Free", "iOS · Android" etc.

### Visual references from the logo
- Round-corner squares everywhere (mark style → cards, image frames, feature icons).
- Two-tone headings (red highlight word + ink rest) for the homepage hero H1.
- Five-feature icon strip ("Edit · Convert · Secure · Scan · Organize") on the homepage — mirrors the logo's feature row.
- Tagline "All-in-One PDF Solution for Work, Study & Life" reserved for homepage hero subhead.

---

## 4. Information architecture

### Routes (full sitemap)
```
/                                                # homepage
/pdf-editor                                      # hub
/pdf-converter                                   # hub
/compress-pdf                                    # hub
/merge-pdf                                       # hub
/split-pdf                                       # hub
/sign-pdf                                        # hub
/scan-to-pdf                                     # hub
/pdf-security                                    # hub
/pdf-for-business                                # hub
/pdf-for-students                                # hub
/guides                                          # guides index
/guides/how-to-edit-pdf-on-iphone                # guide
/guides/how-to-edit-pdf-on-android               # guide
/guides/how-to-compress-pdf                      # guide
/guides/how-to-merge-pdf-files                   # guide
/guides/how-to-sign-pdf-on-phone                 # guide
/guides/how-to-scan-documents-to-pdf             # guide
/guides/best-pdf-app-for-students                # guide
/guides/best-pdf-app-for-business                # guide
/guides/pdf-vs-docx                              # guide
/guides/how-to-protect-pdf-file                  # guide
/compare/pdf-vs-docx                             # comparison
/compare/pdf-vs-jpg                              # comparison
/compare/pdf-app-vs-online-pdf-tools             # comparison
/use-cases/students                              # use case
/use-cases/business                              # use case
/use-cases/freelancers                           # use case
/use-cases/remote-work                           # use case
/privacy-policy
/terms
/contact
/sitemap.xml                                     # generated
/robots.txt                                      # generated
```

### Linking strategy
- **Homepage** links to all 10 hubs and 4 featured guides.
- **Hubs** link to: 3-5 related guides, 1-2 sibling hubs, 1 use-case.
- **Guides** link to: their parent hub, 2-3 sibling guides, 1 comparison page (when relevant).
- **Comparisons** link to: both hubs they compare, 1 related guide.
- **Use-cases** link to: 3-4 hubs, 2 related guides.
- **Footer** has strategic deep links to the 7 highest-priority pages plus legal + contact.

Central registry: `src/lib/routes.ts` exports all routes as typed objects. Sitemap and internal-link components consume this so new routes auto-propagate.

---

## 5. Folder layout

```
src/
  app/
    layout.tsx                    # root layout: fonts, header, footer, WebmasterID, default metadata
    page.tsx                      # homepage
    pdf-editor/page.tsx
    pdf-converter/page.tsx
    compress-pdf/page.tsx
    merge-pdf/page.tsx
    split-pdf/page.tsx
    sign-pdf/page.tsx
    scan-to-pdf/page.tsx
    pdf-security/page.tsx
    pdf-for-business/page.tsx
    pdf-for-students/page.tsx
    guides/
      page.tsx                    # index of all guides
      [slug]/page.tsx             # dynamic guide renderer, generateStaticParams from content/guides
    compare/
      [slug]/page.tsx
    use-cases/
      [slug]/page.tsx
    privacy-policy/page.tsx
    terms/page.tsx
    contact/page.tsx
    sitemap.ts                    # generates sitemap.xml from routes registry
    robots.ts                     # generates robots.txt
    not-found.tsx                 # 404 page
    globals.css                   # tokens, base styles, prose
  components/
    Header.tsx                    # client (mobile menu toggle)
    Footer.tsx
    Hero.tsx
    FeatureGrid.tsx
    AppCTA.tsx                    # variants: hero | inline | final
    StoreButtons.tsx              # App Store + Google Play badges
    RelatedGuides.tsx
    FAQ.tsx                       # client (accordion) + FAQPage schema
    Breadcrumbs.tsx
    ArticleLayout.tsx
    UseCaseCards.tsx
    CompareTable.tsx
    SEOContentSection.tsx
    JsonLd.tsx                    # typed schema.org renderer
    Container.tsx Section.tsx Prose.tsx
    Button.tsx Card.tsx Badge.tsx
  content/
    site.ts                       # brand constants, store URLs, social, contact (info@hrhelperg.com)
    hubs/                         # one file per hub page
      pdf-editor.ts
      pdf-converter.ts
      ...
    guides/                       # one file per guide
      how-to-edit-pdf-on-iphone.ts
      ...
    compare/                      # one file per comparison
    use-cases/                    # one file per use case
    legal/                        # privacy + terms boilerplate
    schema.ts                     # JSON-LD builders (organization, article, howTo, faq, breadcrumb)
  lib/
    seo.ts                        # generateMetadata helper
    routes.ts                     # central route registry
    cn.ts                         # className util
  types/
    content.ts                    # shared content types
public/
  pdf-editor-logo.png             # full lockup
  pdf-editor-wordmark.svg
  pdf-editor-mark.svg
  favicon.ico
  apple-touch-icon.png
  og/                             # generated OG images
    default.png
  badges/
    app-store-badge.svg
    google-play-badge.svg
docs/
  superpowers/specs/2026-05-11-pdfeditconvert-top-design.md  (this file)
```

---

## 6. Page anatomy

### Homepage
1. Header (sticky, transparent → white on scroll).
2. Hero — two-tone H1, tagline subhead, primary CTA (App Store + Google Play store buttons), trust row ("Available on iOS · Android · Free to try").
3. Five-feature strip — "Edit · Convert · Secure · Scan · Organize" with icons (matches logo feature row).
4. Hubs grid — 10 hub cards in a responsive grid (2 / 3 / 4 cols).
5. Why people use it — 3-column feature explainer.
6. Featured guides — 4 guide cards.
7. AppCTA (final variant) — big section with logo, headline "Take PDF Editor with you", store buttons.
8. FAQ — 5 questions, FAQPage schema.
9. Footer.

### Hub page (e.g. `/compress-pdf`)
1. Header.
2. Breadcrumbs (Home / Compress PDF).
3. Hero — H1, lead paragraph, primary CTA (store buttons), secondary link to top guide.
4. Problem framing — 2-3 paragraphs on why this matters.
5. FeatureGrid — what the app/feature actually does.
6. Step-by-step workflow — numbered list with mobile-screenshot-friendly steps.
7. Mobile use case — paragraph + AppCTA (inline variant).
8. RelatedGuides — 3 cards.
9. FAQ — 4-6 questions, FAQPage schema.
10. AppCTA (final variant).
11. Footer.

### Guide page (e.g. `/guides/how-to-compress-pdf`)
- Uses `ArticleLayout` which wraps content in `<article>` with breadcrumbs, H1, last-updated date, table of contents (anchor links), and `Article` + `HowTo` (where step-by-step) JSON-LD.
- Body: intro → numbered steps → tips → "On mobile" subsection with inline AppCTA → FAQ → related guides → final AppCTA.

### Comparison page (e.g. `/compare/pdf-vs-docx`)
- Hero, intro, comparison table (`CompareTable`), pros/cons of each, when to pick which, related guides, AppCTA, FAQ.

### Use-case page (e.g. `/use-cases/students`)
- Hero (audience-specific), top 5 PDF workflows for that audience, app feature highlights, testimonial-style quote (no fabricated names — generic), AppCTA, related guides.

### Legal pages
- Privacy policy + terms get real boilerplate referencing HRHelperg s.r.o. and the mobile app; placeholders flagged with `[[FILL IN]]` markers for user to confirm legal details.

### 404
- Branded, with search-style suggestions: link to homepage and top 4 hubs.

---

## 7. SEO implementation

### Metadata
- `generateMetadata` per route via shared `lib/seo.ts` helper. Signature:
  ```ts
  seo({
    title: string,           // page title without brand suffix
    description: string,     // 140-160 chars
    path: string,            // canonical path, leading slash
    ogImage?: string,        // path under /og, defaults to /og/default.png
    type?: 'website' | 'article',
    publishedTime?: string,  // ISO date, for articles
    modifiedTime?: string,
  })
  ```
- Title template: `${title} | PDF Editor` (root layout sets `template`).
- Default OG image: branded social card built from the logo mark + page title.

### Structured data
- **Root layout**: Organization + WebSite (with SearchAction) — emitted once.
- **Homepage**: + SoftwareApplication (the mobile PDF Editor) referencing both store URLs and aggregateRating if available (omit if unknown — no fabrication).
- **Hubs**: WebPage + BreadcrumbList.
- **Guides**: Article + BreadcrumbList + HowTo (when guide is a step-by-step). FAQPage if FAQ exists.
- **Comparisons**: WebPage + BreadcrumbList.
- **Use-cases**: WebPage + BreadcrumbList.

JSON-LD is emitted via the `<JsonLd>` component which serializes typed objects from `content/schema.ts` builders. No string concatenation.

### Sitemap & robots
- `app/sitemap.ts` returns `MetadataRoute.Sitemap` built from `lib/routes.ts`. Each entry has `lastModified` (today's date for v1; per-content modifiedAt later), `changeFrequency`, and `priority`.
- `app/robots.ts` allows all user agents, blocks nothing public, points at `https://pdfeditconvert.top/sitemap.xml`.

### Canonicals
- Set per page via `metadata.alternates.canonical` to `https://pdfeditconvert.top${path}`.

### Performance posture
- Server Components by default. Client components only where genuinely interactive (`Header`, `FAQ`).
- All images via `next/image` with explicit `width`/`height`.
- Logo and store badges in the hero use `priority` to optimize LCP.
- Fonts self-hosted via the `geist` package with `display: swap`.
- No external CSS; all styles via Tailwind.
- No analytics on critical path: WebmasterID loads `afterInteractive`.

### Accessibility
- Semantic HTML: `<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`.
- One `<h1>` per page. Heading hierarchy strict.
- `aria-label` on store badge links ("Download PDF Editor on the App Store").
- Focus states visible. Color contrast meets WCAG AA against brand red.
- Mobile menu fully keyboard accessible.

---

## 8. App CTA strategy

### StoreButtons component
- Props: `size?: 'md' | 'lg'`, `align?: 'left' | 'center'`.
- Renders two real `<a>` tags with the official store badge SVGs, `rel="noopener"`, `target="_blank"`, `aria-label` with descriptive text.
- App Store URL: `https://apps.apple.com/app/id6747341672`.
- Google Play URL: `https://play.google.com/store/apps/details?id=com.helperg.editor.documents&pcampaignid=web_share`.

### AppCTA component
- Variants:
  - `hero` — used inside the homepage hero; logo + headline + StoreButtons + trust strip.
  - `inline` — narrow, in-flow inside guide articles; one-line copy + StoreButtons.
  - `final` — full-width section before footer; bold headline, supporting line, StoreButtons.
- Copy varies per page: each page's content module supplies the headline + sub-copy so messaging stays varied across the site. No copy-paste duplication.

### Placement rules
- **Every page**: footer with persistent store buttons.
- **Homepage**: hero + final AppCTA (full).
- **Hubs**: hero (buttons under H1) + inline AppCTA mid-page + final AppCTA before footer.
- **Guides**: one inline AppCTA inside the article (after the step-by-step) + final AppCTA.
- **Use-cases / Comparisons**: inline + final.

Total CTA blocks per page ≤ 3 (excluding footer) so it doesn't feel spammy.

---

## 9. WebmasterID analytics integration

### Approach
- Primary: `@webmasterid/sdk-next` package, mounted in `app/layout.tsx`:
  ```tsx
  <WebmasterID
    siteId="wm_b6f7wz6b9y2o5qzo"
    endpoint="https://webmasterid-ingest-api.vercel.app/api/events"
  />
  ```
- Fallback if SDK isn't published / has incompatibility: `next/script` in `app/layout.tsx`:
  ```tsx
  <Script
    id="webmasterid-tracker"
    src="https://webmasterid.com/tracker.iife.min.js"
    data-wmid="wm_b6f7wz6b9y2o5qzo"
    data-endpoint="https://webmasterid-ingest-api.vercel.app/api/events"
    strategy="afterInteractive"
  />
  ```

### Verification
- Open homepage in dev, confirm:
  - Script tag appears exactly once in DOM.
  - Navigating between routes doesn't inject a second tag.
  - Network panel shows a request to the ingest endpoint on initial load / route change.
- Lighthouse run on production build: scripts marked `defer` / `afterInteractive` so they don't block LCP.

---

## 10. Content rules (governance)

- No fabricated statistics, studies, or quotes. If a claim needs a number, either state it qualitatively or omit it.
- No keyword stuffing. Each page targets one primary keyword + 2-3 long-tail variations, woven into headings and prose naturally.
- Every guide reads as if written by a product person who actually uses the tools — practical, opinionated where useful, plain English.
- Every hub explains: what the workflow is, why it's painful without good tools, how it's done (general method), how it's done in the PDF Editor app, mobile tips.
- "Last updated" date present on all guides and hubs (today's date for v1).
- One canonical "voice" across the site. Style guide notes (to keep self-consistent):
  - Address the reader as "you".
  - Active voice. Short sentences. No marketing puff like "revolutionary", "world-class", "cutting-edge".
  - Don't claim the website itself edits PDFs — the **app** does. The website is informational.

---

## 11. First-build scope

### Foundation (all built)
- Next.js + TS + Tailwind v4 + Geist setup.
- Design tokens + base components (Container, Section, Prose, Button, Card, Badge).
- All composite components (Header, Footer, Hero, FeatureGrid, StoreButtons, AppCTA, RelatedGuides, FAQ, Breadcrumbs, ArticleLayout, UseCaseCards, CompareTable, SEOContentSection, JsonLd).
- WebmasterID integration.
- SEO helpers (`lib/seo.ts`, schema builders).
- Sitemap + robots + canonical wiring.
- Logo files placed; favicon + apple-touch-icon generated.

### Pages with full editorial content (10)
1. `/` (homepage)
2. `/pdf-editor`
3. `/pdf-converter`
4. `/compress-pdf`
5. `/merge-pdf`
6. `/sign-pdf`
7. `/scan-to-pdf`
8. `/guides/how-to-edit-pdf-on-iphone`
9. `/guides/how-to-edit-pdf-on-android`
10. `/guides/how-to-compress-pdf`

### Pages stubbed (route + metadata + breadcrumbs + minimal indexable body)
All remaining routes from the sitemap. Each stub has:
- Proper `generateMetadata`.
- H1, intro paragraph (≥80 words, not "Lorem ipsum").
- Breadcrumbs.
- AppCTA.
- "More coming soon — meanwhile, see related guides" with 3 internal links so the page is not a dead end for crawlers.

This keeps the sitemap honest (no 404s) without shipping empty pages. Follow-up work expands stubs to full content.

### Legal pages
- `/privacy-policy` and `/terms` written from a generic SaaS template, referencing:
  - **Company:** hrhelperg s.r.o.
  - **Registered address:** Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic
  - **Contact email:** info@hrhelperg.com
- All other legal specifics (DPA appointed, EU representative, cookie processor list, etc.) marked with `[[FILL IN]]` comments visible to the user reviewing the source but not to readers — these can be filled in by the user post-build.

### `/contact`
- Simple page with email **info@hrhelperg.com** + links to App Store / Play / GitHub. No form in v1 (would need a backend).

---

## 12. Git & deployment

### Git
- Initialize git locally in `~/Desktop/pdfeditconvert-top`.
- `.gitignore` for Next.js standard.
- Initial commit message: `Initial scaffold and design system`.
- Add remote `origin` → `git@github.com:hrhelperg/pdfeditconvert.top.git`.
- Do NOT push — user pushes when they verify the repo exists and is empty.

### Deployment (Vercel)
- Out of scope for the build session, but the project is Vercel-ready: standard Next.js app, no special config files needed initially.
- The user connects the GitHub repo in Vercel UI, sets the custom domain `pdfeditconvert.top`, and Vercel handles SSL + CDN automatically.

---

## 13. Verification before "done"

Before declaring the build complete:

1. `npm run build` — succeeds with no errors or warnings.
2. `npm run start` — production server runs locally.
3. Open the homepage in a browser; visually verify it matches the design intent (logo, palette, layout).
4. View source on the homepage and one hub — confirm full content is in initial HTML (not hydrated).
5. Check `/sitemap.xml` and `/robots.txt` resolve and include every route.
6. Validate one page's JSON-LD with the schema.org examples in the Rich Results Test (manually — user does this).
7. Confirm WebmasterID network call fires on initial load.
8. Lighthouse run on the homepage: Performance ≥ 90, SEO = 100, Accessibility ≥ 95, Best Practices ≥ 95 (mobile).
9. Confirm no console errors on any of the 10 full pages.

---

## 14. Open items (not blockers)

- Final favicon set (16/32/48/96/180/192/512). I'll generate these from the logo mark; user can replace if they have hand-tuned versions.
- OG default image. Generated programmatically from logo + brand colors via a `/opengraph-image.tsx` route (App Router native). Falls back to `/og/default.png` if generation fails.
- Long-term: move `content/*.ts` to a CMS (Sanity, Contentlayer, or Notion via MCP) — out of scope for v1.

---

## 15. Future work (not in this build)

- Translations (EN → DE, FR, ES) using App Router i18n.
- A `/blog` section with editorial posts.
- Programmatic SEO pages (e.g., "Convert PDF to [format]" matrix).
- Email capture for the app.
- In-browser PDF preview (decompiled from app feature list).
- Search functionality (Algolia or Pagefind).
