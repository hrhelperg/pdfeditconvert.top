# 19 SEO Long-Tail Guides — Design Spec

**Date:** 2026-05-14
**Project:** pdfeditconvert.top
**Goal:** Build topical authority around PDFs by adding 19 hand-written long-tail guides under `/guides/[slug]`, with consistent SEO plumbing, internal linking, and CTAs that lead with the in-browser PDF tools (where one matches the topic) and route mobile-intent users to the App Store / Google Play.

**Revision history**
- 2026-05-14 v1: 21 new guides; 9 overlaps with existing guides skipped.
- 2026-05-14 v2: after rebasing on a remote that added browser PDF tools and 2 new compare pages, 2 more overlaps surfaced (`pdf-vs-jpg-for-documents` ↔ `/compare/pdf-vs-jpg`, `pdf-app-vs-online-pdf-tools` ↔ `/compare/pdf-app-vs-online-pdf-tools`). Both dropped. Final scope = **19 new guides**. CTA strategy updated: browser tool first where one exists, app CTA second.

## Background

The repo ships:
- 10 guides at `/guides/<slug>` rendered by `GuidePage` fed by `GuideContent`-shaped TypeScript files in `src/content/guides/`.
- 3 compare pages at `/compare/<slug>` (`pdf-vs-docx`, `pdf-vs-jpg`, `pdf-app-vs-online-pdf-tools`).
- A browser-side PDF tools cluster at `/pdf-tools` with working in-browser tools: `/merge-pdf`, `/split-pdf`, `/rotate-pdf`, `/add-watermark-to-pdf`, `/pdf-to-images`, `/image-to-pdf`. Files never leave the device.

The marketing brief asked for 30 articles. After mapping against existing pages, 11 of the requested slugs collide with content that already lives on the site:

| Requested | Already exists |
| --- | --- |
| `how-to-edit-pdf-on-iphone` | `/guides/how-to-edit-pdf-on-iphone` |
| `how-to-edit-pdf-on-android` | `/guides/how-to-edit-pdf-on-android` |
| `how-to-scan-documents-to-pdf` | `/guides/how-to-scan-documents-to-pdf` |
| `how-to-merge-pdf-files-on-phone` | `/guides/how-to-merge-pdf-files` |
| `how-to-compress-pdf-without-losing-quality` | `/guides/how-to-compress-pdf` |
| `how-to-protect-pdf-before-sharing` | `/guides/how-to-protect-pdf-file` |
| `how-to-sign-pdf-on-iphone` | `/guides/how-to-sign-pdf-on-phone` (combined) |
| `how-to-sign-pdf-on-android` | `/guides/how-to-sign-pdf-on-phone` (combined) |
| `pdf-vs-docx-when-to-use-each` | `/guides/pdf-vs-docx` |
| `pdf-vs-jpg-for-documents` | `/compare/pdf-vs-jpg` |
| `pdf-app-vs-online-pdf-tools` | `/compare/pdf-app-vs-online-pdf-tools` |

User decision: skip all 11 overlaps. Final scope = **19 new guides**, no changes to the existing guides, compare pages, or tool pages.

## Scope

### Final slug list (19)

Guides that have a matching browser tool — these lead with the tool CTA:

1. `how-to-split-pdf-on-iphone` → `/split-pdf` (also works in-browser)
2. `how-to-convert-image-to-pdf` → `/image-to-pdf`
3. `how-to-convert-pdf-to-images` → `/pdf-to-images`
4. `how-to-add-watermark-to-pdf` → `/add-watermark-to-pdf`
5. `how-to-rotate-pdf-pages` → `/rotate-pdf`

Guides that lead with the mobile app (no matching browser tool yet):

6. `how-to-organize-pdf-files`
7. `how-to-annotate-pdf-on-mobile`
8. `how-to-fill-out-pdf-forms-on-phone`
9. `how-to-reduce-pdf-file-size-for-email`
10. `how-to-prepare-pdf-for-printing`
11. `how-to-send-large-pdf-files`
12. `how-to-create-pdf-from-photos`
13. `how-to-combine-scans-into-one-pdf`
14. `how-to-edit-pdf-metadata`
15. `how-to-manage-pdfs-on-iphone-and-android`

Workflow / opinion guides (lead with app, link to relevant tools):

16. `best-pdf-workflow-for-students`
17. `best-pdf-workflow-for-freelancers`
18. `best-pdf-workflow-for-small-business`
19. `common-pdf-mistakes-to-avoid`

Each guide targets 900–1,500 words, hand-written, unique step lists, unique mistakes, unique FAQs.

### Out of scope
- Editing or removing the existing 10 guides
- Editing or removing any PDF tool, compare, or use-case page
- Removing WebmasterID, App Store, or Google Play CTAs
- Sitemap / robots.txt restructuring (additions only)
- Routing/middleware changes
- Adding new compare or use-case pages

## Architecture

### 1. `GuideContent` type extension (`src/types/content.ts`)
Six optional fields, no breaking change to the existing 10 guides:

```ts
export interface GuideContent {
  // existing fields
  slug: string;
  h1: string;
  description: string;
  updated: string;
  intro: string[];
  steps: StepItem[];
  tips: string[];
  mobileNote: string;
  faq: FaqItem[];
  related: RelatedLink[];
  parentHub: RelatedLink;

  // new optional fields
  whatYouNeed?: string[];
  body?: { heading: string; paragraphs: string[] }[];
  privacyNote?: string;
  commonMistakes?: { title: string; body: string }[];
  relatedTools?: RelatedLink[];
  // In-content CTA for guides that have a matching browser tool.
  // Renders as a styled callout between intro and steps. Optional;
  // app-led guides omit it and rely on the global AppCTA.
  primaryTool?: { label: string; path: string; subline?: string };
}
```

### 2. `GuidePage` renderer (`src/components/sections/GuidePage.tsx`)
Render new sections only when present. New render order:

1. `intro` (existing)
2. `primaryTool` callout (new, rendered if present — brand-red card with "Try it now in your browser" + tool link)
3. `whatYouNeed` (new, bullet list)
4. `Steps` (existing component)
5. `body` (new, long-form prose with subheadings)
6. inline `AppCTA` with `mobileNote` (existing slot)
7. `privacyNote` (new, single short paragraph in a tinted card)
8. `tips` (existing)
9. `commonMistakes` (new, titled-paragraph list)
10. `relatedTools` (new, separate RelatedGuides-style cards labelled "Related PDF tools")
11. `FAQ` (existing)
12. `RelatedGuides` for `[parentHub, ...related]` (existing)
13. final `AppCTA` with varied heading per-guide (existing slot)

The existing `AppCTA` component already drives the App Store + Google Play CTAs site-wide. Variation in CTA copy is achieved by overriding the `heading` + `sub` props per page (varied wording supplied in each guide file).

### 3. Routes registry (`src/lib/routes.ts`)
One entry per new guide, category `"guide"`, priority `0.7`, `changeFrequency` `"monthly"`. Sitemap auto-picks them up since `src/app/sitemap.ts` iterates `ROUTES`.

### 4. Guides index page (`src/app/guides/page.tsx`)
Add cards for the 19 new guides. Group/order to keep the page scannable (suggested groups: "Editing & annotation", "Compression & sharing", "Conversion", "Organization & metadata", "Workflow guides", "Gotchas & comparisons"). Existing 10 guides preserved.

### 5. Footer (`src/components/layout/Footer.tsx` or equivalent)
Add a small curated subset of the new guides to the footer link cluster. The full list lives on `/guides`; the footer surfaces 4–6 high-intent ones (e.g. add-watermark, convert-image-to-pdf, send-large-pdf, rotate-pdf-pages).

### 6. Homepage internal links
The homepage already has a "Most-read guides" list (`src/app/page.tsx` ~lines 42–45) pointing at 4 existing guides. Leave those in place; do not rotate new long-tail guides into this list. The full discovery surface for the 19 new guides is `/guides`, footer, and intra-guide internal links.

### 7. SEO / schema (no structural change)
- Each guide gets unique `title` + `description` via `seo()` (already wired through `getRoute(path)`).
- `JsonLd` already emits Article + Breadcrumb + FAQ + HowTo schema per guide page. New guides inherit this automatically.
- Canonical, Open Graph, Twitter metadata: emitted by existing `seo()`.

### 8. Sitemap and robots
- `sitemap.ts` iterates `ROUTES`, so each new route is included automatically.
- `lastmod` derives from `guide.updated` already, set per file.
- `robots.ts` is untouched; new pages are indexable by default.

### 9. WebmasterID
Already global. No changes.

### 10. CTA strategy (browser tool + app)

Two CTA patterns depending on whether a matching browser tool exists:

**Pattern A — Tool-matched guides (5 articles).** The `body` includes an in-content "Try it now in your browser" callout linking to the matching tool (`/split-pdf`, `/image-to-pdf`, `/pdf-to-images`, `/add-watermark-to-pdf`, `/rotate-pdf`). The final `AppCTA` then pitches the mobile app for on-the-go use. Order: browser-tool first, app second.

**Pattern B — App-led guides (14 articles).** The inline and final `AppCTA` are the primary CTA. `relatedTools` still surfaces the closest browser tool plus `/pdf-tools` as a discovery hub.

Across all 19 guides: per-guide variation in `mobileNote` and final-CTA `heading` (e.g. "Edit PDFs on iPhone", "Try PDF Editor for everyday document work", "Scan, edit, and organize documents") so the same exact-match anchor doesn't repeat. The existing global `AppCTA` component already renders both App Store and Google Play links — no component change needed for the app side. The tool-CTA callout uses a plain styled `<a>` or `<Link>` matching the brand red.

## Content standard (per article)

Each of the 19 guides must include:

- **Unique H1** and **unique meta title + description**
- **Intro:** 2–4 short paragraphs framing the problem and what the article delivers (no fluff)
- **`whatYouNeed`** bullets when there's a real prerequisite (skipped only for opinion/comparison pieces)
- **`steps`:** 6–10 step items, unique to the topic
- **`body`** sections: 1–3 subheaded prose sections that carry the bulk of the word count
- **`mobileNote`** for the inline CTA
- **`privacyNote`** for any article that involves uploading or sharing files
- **`tips`:** 4–8 practical, topic-specific tips
- **`commonMistakes`:** 3–5 titled mistakes with one-line explanations
- **`relatedTools`:** 1–3 internal links to actual hubs (`/pdf-editor`, `/merge-pdf`, `/split-pdf`, `/compress-pdf`, `/sign-pdf`, `/scan-to-pdf`, `/pdf-converter`, `/pdf-security`, etc.)
- **`related`:** 2–4 other guides (mix of existing 10 + new 19)
- **`parentHub`:** 1 hub the guide reports up to
- **`faq`:** 4–6 honest Q/A pairs
- Word count: 900–1,500

## Internal-linking map (final, 19 guides)

`/pdf-tools` is added as a recurring `relatedTools` entry on every guide (the discovery hub for the in-browser tools). The first column is the *primary* tool/hub the article points at; the rest are supporting links.

| Guide | Primary tool | Related tools | Related guides | Parent hub |
| --- | --- | --- | --- | --- |
| split-pdf-on-iphone | /split-pdf | /pdf-tools, /pdf-editor | merge-pdf-files, organize-pdf-files | /pdf-editor |
| convert-image-to-pdf | /image-to-pdf | /pdf-tools, /pdf-converter | create-pdf-from-photos, combine-scans-into-one-pdf | /pdf-converter |
| convert-pdf-to-images | /pdf-to-images | /pdf-tools, /pdf-converter | edit-pdf-metadata, send-large-pdf-files | /pdf-converter |
| add-watermark-to-pdf | /add-watermark-to-pdf | /pdf-tools, /pdf-security | protect-pdf-file, annotate-pdf-on-mobile | /pdf-security |
| rotate-pdf-pages | /rotate-pdf | /pdf-tools, /pdf-editor | organize-pdf-files, combine-scans-into-one-pdf | /pdf-editor |
| organize-pdf-files | /pdf-editor | /pdf-tools, /merge-pdf | merge-pdf-files, manage-pdfs-on-iphone-and-android | /pdf-editor |
| annotate-pdf-on-mobile | /pdf-editor | /pdf-tools | fill-out-pdf-forms-on-phone, edit-pdf-on-iphone | /pdf-editor |
| fill-out-pdf-forms-on-phone | /pdf-editor | /sign-pdf, /pdf-tools | annotate-pdf-on-mobile, sign-pdf-on-phone | /pdf-editor |
| reduce-pdf-file-size-for-email | /compress-pdf | /pdf-tools | send-large-pdf-files, compress-pdf | /compress-pdf |
| prepare-pdf-for-printing | /pdf-editor | /rotate-pdf, /pdf-tools | rotate-pdf-pages, organize-pdf-files | /pdf-editor |
| send-large-pdf-files | /compress-pdf | /pdf-tools, /pdf-security | reduce-pdf-file-size-for-email, protect-pdf-file | /compress-pdf |
| create-pdf-from-photos | /image-to-pdf | /scan-to-pdf, /pdf-tools | convert-image-to-pdf, combine-scans-into-one-pdf | /scan-to-pdf |
| combine-scans-into-one-pdf | /scan-to-pdf | /merge-pdf, /pdf-tools | scan-documents-to-pdf, merge-pdf-files | /scan-to-pdf |
| edit-pdf-metadata | /pdf-editor | /pdf-tools | organize-pdf-files, protect-pdf-file | /pdf-editor |
| manage-pdfs-on-iphone-and-android | /pdf-editor | /pdf-tools | edit-pdf-on-iphone, edit-pdf-on-android | /pdf-editor |
| best-pdf-workflow-for-students | /pdf-editor | /pdf-tools, /pdf-converter | best-pdf-app-for-students, annotate-pdf-on-mobile | /pdf-editor |
| best-pdf-workflow-for-freelancers | /pdf-editor | /sign-pdf, /pdf-tools | sign-pdf-on-phone, fill-out-pdf-forms-on-phone | /pdf-editor |
| best-pdf-workflow-for-small-business | /pdf-editor | /pdf-converter, /pdf-tools | best-pdf-app-for-business, manage-pdfs-on-iphone-and-android | /pdf-editor |
| common-pdf-mistakes-to-avoid | /pdf-editor | /pdf-security, /pdf-tools | protect-pdf-file, send-large-pdf-files | /pdf-editor |

**Cross-links to existing compare pages** (every guide where it's a natural fit links to one of these instead of duplicating their content):
- `/compare/pdf-vs-jpg` — linked from convert-image-to-pdf, convert-pdf-to-images, create-pdf-from-photos
- `/compare/pdf-vs-docx` — linked from edit-pdf-metadata, prepare-pdf-for-printing, best-pdf-workflow-for-freelancers
- `/compare/pdf-app-vs-online-pdf-tools` — linked from common-pdf-mistakes-to-avoid, best-pdf-workflow-for-small-business, send-large-pdf-files

Every guide also internal-links to `/guides` (the index) via breadcrumbs (existing) and to the parent hub via `parentHub`.

## Content safety rules

Each guide must:

- Avoid invented statistics, fake benchmarks, fake feature claims.
- Avoid legal, tax, or medical advice. Where users might expect it (signing, metadata, sharing), use neutral phrasing.
- Use honest limitation language: "Some files may not process correctly", "Very large PDFs can be limited by browser memory", "Password-protected files may require unlocking before editing".
- Not claim that all features work on every file or every device.

## Files changed

### New (22)
- 19 content files: `src/content/guides/<slug>.ts`
- 1 design spec: `docs/superpowers/specs/2026-05-14-seo-long-tail-guides-design.md` (this file)
- 1 implementation plan: `docs/superpowers/plans/2026-05-14-seo-long-tail-guides-plan.md` (next step)

### Modified
- `src/types/content.ts` — extend `GuideContent` with 5 optional fields
- `src/components/sections/GuidePage.tsx` — render new sections when present; render the "Try it now in your browser" in-content callout when a guide supplies a primary tool link
- `src/content/guides/index.ts` — register 19 new guides
- `src/lib/routes.ts` — register 19 new routes
- `src/app/guides/page.tsx` — add cards for 19 new guides
- `src/components/layout/Footer.tsx` — add a small curated set of new guides to the existing guides cluster
- `src/app/page.tsx` — homepage already renders a "Most-read guides" list (~lines 42–45). Leave it; do not rotate new long-tail guides into this list. No homepage change required.

### Untouched
- `src/app/sitemap.ts` (auto-picks up new routes)
- `src/app/robots.ts`
- `src/components/seo/JsonLd.tsx`, `src/content/schema.ts` (existing schemas apply)
- All existing guide content files
- All PDF tool hub pages
- WebmasterID code

## Validation

After implementation:

1. `npm run lint`
2. `npm run typecheck`
3. `npm run build`
4. Spot-check rendering of 3 guides locally via `npm run dev` (one workflow-style, one how-to, one comparison).
5. Spot-check that the existing 10 guides still render correctly (regression check on the optional-fields extension).
6. Spot-check sitemap output includes the 19 new paths.

Lint, typecheck, and build must pass before declaring done.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Optional-field extension breaks existing 10 guides | All new fields are optional; render conditionally; existing files compile unchanged. Regression-check 1 existing guide page during dev. |
| 19 hand-written articles drift into similar phrasing | Maintain a small per-guide voice plan: each article gets unique opening hook, unique mistakes list, unique FAQ angle. No copy-paste paragraphs. |
| App CTA wording feels repetitive | Each guide supplies its own `mobileNote` + final-CTA heading from the brief's varied-anchor list. |
| Word-count drift below 900 or above 1,500 | Use `body[]` to carry the bulk of prose; trim if a section feels padded rather than expanding to hit count. |
| Internal links to a hub that doesn't exist | Verify every `relatedTools` path against `ROUTES` during plumbing pass. |
| Long single session loses focus near the end | Pace: type+renderer+routes+index first, then write guides in batches of 5 with a brief progress check between batches. |

## Definition of done

- [ ] 19 new guides accessible at `/guides/<slug>`, each between 900 and 1,500 words.
- [ ] `GuideContent` extended; existing 10 guides still build and render unchanged.
- [ ] `ROUTES` includes 19 new entries with unique title + description.
- [ ] `src/app/guides/page.tsx` index lists all guides (existing 10 + new 19).
- [ ] Footer surfaces a small curated subset of the new guides.
- [ ] Every new guide has Article + Breadcrumb + FAQ + HowTo schema emitted (auto via `GuidePage`).
- [ ] The 5 tool-matched guides include an in-content `primaryTool` callout linking to the matching browser tool.
- [ ] Every new guide internal-links to 1–3 hubs/tools, 2–4 guides, and includes varied App Store + Google Play CTAs.
- [ ] WebmasterID integration unchanged.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build` pass.
- [ ] Final report: routes added, files added/modified, schema confirmation, WebmasterID confirmation, validation results, known limitations.
