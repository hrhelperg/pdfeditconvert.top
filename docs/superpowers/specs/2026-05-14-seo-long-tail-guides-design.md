# 21 SEO Long-Tail Guides — Design Spec

**Date:** 2026-05-14
**Project:** pdfeditconvert.top
**Goal:** Build topical authority around PDFs by adding 21 hand-written long-tail guides under `/guides/[slug]`, with consistent SEO plumbing, internal linking, and varied App Store / Google Play CTAs that support conversion to the mobile PDF Editor app.

## Background

The repo already ships 10 guides at `/guides/<slug>` rendered by a single `GuidePage` component fed by `GuideContent`-shaped TypeScript files in `src/content/guides/`. The marketing brief asked for 30 articles, but 9 of the requested slugs duplicate or near-duplicate existing guides:

| Requested | Already exists |
| --- | --- |
| `how-to-edit-pdf-on-iphone` | same |
| `how-to-edit-pdf-on-android` | same |
| `how-to-scan-documents-to-pdf` | same |
| `how-to-merge-pdf-files-on-phone` | `how-to-merge-pdf-files` |
| `how-to-compress-pdf-without-losing-quality` | `how-to-compress-pdf` |
| `how-to-protect-pdf-before-sharing` | `how-to-protect-pdf-file` |
| `how-to-sign-pdf-on-iphone` | `how-to-sign-pdf-on-phone` (combined) |
| `how-to-sign-pdf-on-android` | `how-to-sign-pdf-on-phone` (combined) |
| `pdf-vs-docx-when-to-use-each` | `pdf-vs-docx` |

User decision: skip the 9 overlaps. Final scope = **21 new guides**, no changes to the existing 10.

## Scope

### Final slug list (21)

1. `how-to-split-pdf-on-iphone`
2. `how-to-convert-image-to-pdf`
3. `how-to-convert-pdf-to-images`
4. `how-to-add-watermark-to-pdf`
5. `how-to-rotate-pdf-pages`
6. `how-to-organize-pdf-files`
7. `how-to-annotate-pdf-on-mobile`
8. `how-to-fill-out-pdf-forms-on-phone`
9. `how-to-reduce-pdf-file-size-for-email`
10. `best-pdf-workflow-for-students`
11. `best-pdf-workflow-for-freelancers`
12. `best-pdf-workflow-for-small-business`
13. `pdf-app-vs-online-pdf-tools`
14. `pdf-vs-jpg-for-documents`
15. `common-pdf-mistakes-to-avoid`
16. `how-to-prepare-pdf-for-printing`
17. `how-to-send-large-pdf-files`
18. `how-to-create-pdf-from-photos`
19. `how-to-combine-scans-into-one-pdf`
20. `how-to-edit-pdf-metadata`
21. `how-to-manage-pdfs-on-iphone-and-android`

Each guide targets 900–1,500 words, hand-written, unique step lists, unique mistakes, unique FAQs.

### Out of scope
- Editing or removing the existing 10 guides
- Editing or removing any PDF tool hub
- Removing WebmasterID, App Store, or Google Play CTAs
- Sitemap / robots.txt restructuring (additions only)
- Routing/middleware changes
- Compare or use-case content additions

## Architecture

### 1. `GuideContent` type extension (`src/types/content.ts`)
Five optional fields, no breaking change to the existing 10 guides:

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
}
```

### 2. `GuidePage` renderer (`src/components/sections/GuidePage.tsx`)
Render new sections only when present. New render order:

1. `intro` (existing)
2. `whatYouNeed` (new, list)
3. `Steps` (existing component)
4. `body` (new, long-form prose with subheadings)
5. inline `AppCTA` with `mobileNote` (existing slot)
6. `privacyNote` (new, single short paragraph in a tinted card)
7. `tips` (existing)
8. `commonMistakes` (new, titled-paragraph list)
9. `relatedTools` (new, separate RelatedGuides-style cards labelled "Related PDF tools")
10. `FAQ` (existing)
11. `RelatedGuides` for `[parentHub, ...related]` (existing)
12. final `AppCTA` with varied heading per-guide (existing slot)

The existing `AppCTA` component already drives the App Store + Google Play CTAs site-wide. Variation in CTA copy is achieved by overriding the `heading` + `sub` props per page (varied wording supplied in each guide file).

### 3. Routes registry (`src/lib/routes.ts`)
One entry per new guide, category `"guide"`, priority `0.7`, `changeFrequency` `"monthly"`. Sitemap auto-picks them up since `src/app/sitemap.ts` iterates `ROUTES`.

### 4. Guides index page (`src/app/guides/page.tsx`)
Add cards for the 21 new guides. Group/order to keep the page scannable (e.g. "Editing & annotation", "Compression & sharing", "Conversion", "Organization", "Workflow guides", "Comparisons & gotchas").

### 5. Footer (`src/components/layout/Footer.tsx` or equivalent)
Add a small curated subset of the new guides to the footer link cluster. The full list lives on `/guides`; the footer surfaces 4–6 high-intent ones (e.g. add-watermark, convert-image-to-pdf, send-large-pdf, rotate-pdf-pages).

### 6. Homepage internal links
The homepage already has a "Most-read guides" list (`src/app/page.tsx` ~lines 42–45) pointing at 4 existing guides. Leave those in place; do not rotate new long-tail guides into this list. The full discovery surface for the 21 new guides is `/guides`, footer, and intra-guide internal links.

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

### 10. App Store / Google Play CTAs
Existing global `AppCTA` component renders both links. Per-guide variation is in `mobileNote` (inline CTA `sub`) and `final AppCTA heading`. Each new guide supplies a varied phrase (e.g. "Edit PDFs on iPhone", "Try PDF Editor for everyday document work", "Scan, edit, and organize documents") so the same exact-match anchor doesn't repeat across all 21 pages.

## Content standard (per article)

Each of the 21 guides must include:

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
- **`related`:** 2–4 other guides (mix of existing 10 + new 21)
- **`parentHub`:** 1 hub the guide reports up to
- **`faq`:** 4–6 honest Q/A pairs
- Word count: 900–1,500

## Internal-linking map (highlights)

| Guide | Related tools (hubs) | Related guides (sample) |
| --- | --- | --- |
| split-pdf-on-iphone | /split-pdf, /pdf-editor | merge-pdf-files, organize-pdf-files |
| convert-image-to-pdf | /pdf-converter, /scan-to-pdf | create-pdf-from-photos, combine-scans-into-one-pdf |
| convert-pdf-to-images | /pdf-converter | edit-pdf-metadata, send-large-pdf-files |
| add-watermark-to-pdf | /pdf-editor, /pdf-security | protect-pdf-file, annotate-pdf-on-mobile |
| rotate-pdf-pages | /pdf-editor | organize-pdf-files, combine-scans-into-one-pdf |
| organize-pdf-files | /pdf-editor | merge-pdf-files, manage-pdfs-on-iphone-and-android |
| annotate-pdf-on-mobile | /pdf-editor | fill-out-pdf-forms-on-phone, edit-pdf-on-iphone |
| fill-out-pdf-forms-on-phone | /pdf-editor, /sign-pdf | annotate-pdf-on-mobile, sign-pdf-on-phone |
| reduce-pdf-file-size-for-email | /compress-pdf | send-large-pdf-files, compress-pdf |
| send-large-pdf-files | /compress-pdf | reduce-pdf-file-size-for-email |
| prepare-pdf-for-printing | /pdf-editor | rotate-pdf-pages, organize-pdf-files |
| create-pdf-from-photos | /scan-to-pdf, /pdf-converter | convert-image-to-pdf, combine-scans-into-one-pdf |
| combine-scans-into-one-pdf | /scan-to-pdf, /merge-pdf | scan-documents-to-pdf, merge-pdf-files |
| edit-pdf-metadata | /pdf-editor | organize-pdf-files |
| manage-pdfs-on-iphone-and-android | /pdf-editor | edit-pdf-on-iphone, edit-pdf-on-android |
| best-pdf-workflow-for-students | /pdf-editor | best-pdf-app-for-students, annotate-pdf-on-mobile |
| best-pdf-workflow-for-freelancers | /pdf-editor, /sign-pdf | sign-pdf-on-phone, fill-out-pdf-forms-on-phone |
| best-pdf-workflow-for-small-business | /pdf-editor, /pdf-converter | best-pdf-app-for-business, manage-pdfs-on-iphone-and-android |
| pdf-app-vs-online-pdf-tools | /pdf-editor, /pdf-security | best-pdf-app-for-business, common-pdf-mistakes-to-avoid |
| pdf-vs-jpg-for-documents | /pdf-converter | pdf-vs-docx, convert-image-to-pdf |
| common-pdf-mistakes-to-avoid | /pdf-editor, /pdf-security | protect-pdf-file, send-large-pdf-files |

Every guide also internal-links to `/guides` (the index) via breadcrumbs (existing) and to the parent hub via `parentHub`.

## Content safety rules

Each guide must:

- Avoid invented statistics, fake benchmarks, fake feature claims.
- Avoid legal, tax, or medical advice. Where users might expect it (signing, metadata, sharing), use neutral phrasing.
- Use honest limitation language: "Some files may not process correctly", "Very large PDFs can be limited by browser memory", "Password-protected files may require unlocking before editing".
- Not claim that all features work on every file or every device.

## Files changed

### New (24)
- 21 content files: `src/content/guides/<slug>.ts`
- 1 design spec: `docs/superpowers/specs/2026-05-14-seo-long-tail-guides-design.md` (this file)
- 1 implementation plan: `docs/superpowers/plans/2026-05-14-seo-long-tail-guides-plan.md` (next step)

### Modified
- `src/types/content.ts` — extend `GuideContent` with 5 optional fields
- `src/components/sections/GuidePage.tsx` — render new sections when present
- `src/content/guides/index.ts` — register 21 new guides
- `src/lib/routes.ts` — register 21 new routes
- `src/app/guides/page.tsx` — add cards for 21 new guides
- `src/components/layout/Footer.tsx` — add a small curated set of new guides to the existing guides cluster
- `src/app/page.tsx` — the homepage already renders a "Most-read guides" list (lines ~42–45). Leave the existing 4 entries; do not add new ones here (the curated short list belongs on the homepage; the full list lives at `/guides`). No homepage change required.

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
6. Spot-check sitemap output includes the 21 new paths.

Lint, typecheck, and build must pass before declaring done.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Optional-field extension breaks existing 10 guides | All new fields are optional; render conditionally; existing files compile unchanged. Regression-check 1 existing guide page during dev. |
| 21 hand-written articles drift into similar phrasing | Maintain a small per-guide voice plan: each article gets unique opening hook, unique mistakes list, unique FAQ angle. No copy-paste paragraphs. |
| App CTA wording feels repetitive | Each guide supplies its own `mobileNote` + final-CTA heading from the brief's varied-anchor list. |
| Word-count drift below 900 or above 1,500 | Use `body[]` to carry the bulk of prose; trim if a section feels padded rather than expanding to hit count. |
| Internal links to a hub that doesn't exist | Verify every `relatedTools` path against `ROUTES` during plumbing pass. |
| Long single session loses focus near the end | Pace: type+renderer+routes+index first, then write guides in batches of 5 with a brief progress check between batches. |

## Definition of done

- [ ] 21 new guides accessible at `/guides/<slug>`, each between 900 and 1,500 words.
- [ ] `GuideContent` extended; existing 10 guides still build and render unchanged.
- [ ] `ROUTES` includes 21 new entries with unique title + description.
- [ ] `src/app/guides/page.tsx` index lists all guides (existing 10 + new 21).
- [ ] Footer surfaces a small curated subset of the new guides.
- [ ] Every new guide has Article + Breadcrumb + FAQ + HowTo schema emitted (auto via `GuidePage`).
- [ ] Every new guide internal-links to 1–3 hubs, 2–4 guides, and includes varied App Store + Google Play CTAs.
- [ ] WebmasterID integration unchanged.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build` pass.
- [ ] Final report: routes added, files added/modified, schema confirmation, WebmasterID confirmation, validation results, known limitations.
