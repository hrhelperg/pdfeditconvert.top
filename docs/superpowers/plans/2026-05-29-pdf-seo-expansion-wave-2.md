# PDF SEO Expansion Wave 2 — Implementation Plan

> **For agentic workers:** Inline batched execution. Six commits, one per cluster group. Run lint + typecheck + vitest after every group before committing.

**Goal:** Add 54 new typed guide pages across 6 topical clusters (problem-fix, business workflows, student workflows, privacy/trust, format comparisons, commercial intent) to deepen topical authority around PDF workflows.

**Architecture:** Each guide is a `GuideContent` typed `.ts` file at `src/content/guides/<slug>.ts`, imported and registered in `src/content/guides/index.ts`, with a matching `RouteEntry` in `src/lib/routes.ts` (drives sitemap + metadata). `GuidePage` already emits Article/Breadcrumb/HowTo/FAQ JSON-LD and renders App Store + Google Play CTAs — no per-page work for either. WebmasterID untouched.

**Tech:** Next.js 16.2.6 App Router, TypeScript, Vitest, Tailwind v4.

---

## Skipped slugs (6) — cannibalization with existing guides

| Planned | Collides with | Reason |
|---|---|---|
| `why-is-my-pdf-file-so-big` | `why-is-my-pdf-so-large` | Same query intent |
| `why-is-my-pdf-sideways` | `how-to-fix-sideways-pdf-pages` | Same fix, different question framing |
| `best-pdf-tools-for-students` | `best-pdf-tools-for-students` | Exact slug duplicate |
| `pdf-vs-jpeg` | `pdf-vs-jpg-for-documents` + `/compare/pdf-vs-jpg` | JPG/JPEG synonyms |
| `when-to-use-pdf-vs-word` | `when-to-use-pdf-instead-of-docx` | Same query intent |
| `browser-based-pdf-tools-vs-cloud-pdf-tools` | `browser-based-pdf-tools-vs-upload-tools` | Upload = cloud in PDF tool taxonomy |

Net new pages: **54**.

---

## Existing tools/hubs available for `parentHub` and `related` links

**Hubs** (`category: "hub"`): `/pdf-editor`, `/pdf-converter`, `/sign-pdf`, `/scan-to-pdf`, `/pdf-security`, `/pdf-for-business`, `/pdf-for-students`

**Tools** (`category: "tool"`): `/compress-pdf`, `/pdf-to-word`, `/word-to-pdf`, `/reorder-pdf-pages`, `/extract-pdf-pages`, `/merge-pdf`, `/split-pdf`, `/pdf-tools`, `/image-to-pdf`, `/rotate-pdf`, `/pdf-to-images`, `/add-watermark-to-pdf`

Tests enforce: each guide must have ≥1 tool/hub link in parentHub ∪ related.

---

## Slug manifest with parentHub assignment

### Group 1 — Problems & Fixes (10)
| Slug | parentHub |
|---|---|
| `why-wont-my-pdf-open` | `/pdf-tools` |
| `why-is-my-pdf-blank` | `/pdf-tools` |
| `why-cant-i-edit-a-pdf` | `/pdf-editor` |
| `why-is-my-pdf-blurry` | `/pdf-to-images` |
| `how-to-fix-a-corrupted-pdf` | `/pdf-tools` |
| `how-to-fix-pdf-printing-issues` | `/pdf-tools` |
| `how-to-fix-pdf-upload-errors` | `/compress-pdf` |
| `how-to-fix-pdf-formatting-problems` | `/pdf-converter` |
| `how-to-fix-scanned-pdf-quality` | `/scan-to-pdf` |
| `how-to-fix-pdf-font-issues` | `/pdf-converter` |

### Group 2 — Business / Office Workflows (12)
| Slug | parentHub |
|---|---|
| `best-pdf-tools-for-remote-work` | `/pdf-for-business` |
| `best-pdf-tools-for-office-documents` | `/pdf-for-business` |
| `best-pdf-workflow-for-teams` | `/pdf-for-business` |
| `how-to-share-pdfs-with-clients` | `/pdf-for-business` |
| `how-to-prepare-pdf-for-business-use` | `/pdf-for-business` |
| `how-to-send-contracts-as-pdf` | `/sign-pdf` |
| `how-to-organize-work-documents-as-pdf` | `/pdf-tools` |
| `how-to-manage-invoices-as-pdf` | `/pdf-for-business` |
| `how-to-create-client-ready-pdf-files` | `/pdf-for-business` |
| `pdf-workflows-for-small-business` | `/pdf-for-business` |
| `pdf-workflows-for-consultants` | `/pdf-for-business` |
| `pdf-workflows-for-agencies` | `/pdf-for-business` |

### Group 3 — Student / Education (9)
| Slug | parentHub |
|---|---|
| `how-to-submit-homework-as-pdf` | `/pdf-for-students` |
| `how-to-scan-notes-to-pdf` | `/scan-to-pdf` |
| `how-to-compress-pdf-for-school-portals` | `/compress-pdf` |
| `how-to-convert-lecture-notes-to-pdf` | `/pdf-converter` |
| `how-to-organize-study-materials-as-pdf` | `/pdf-for-students` |
| `how-to-share-study-notes-as-pdf` | `/pdf-for-students` |
| `how-to-edit-class-documents-as-pdf` | `/pdf-editor` |
| `pdf-workflow-for-university-students` | `/pdf-for-students` |
| `how-to-create-digital-study-pdfs` | `/pdf-for-students` |

### Group 4 — Privacy / Security / Trust (9)
| Slug | parentHub |
|---|---|
| `are-online-pdf-tools-safe` | `/pdf-tools` |
| `how-to-protect-sensitive-pdf-files` | `/pdf-security` |
| `how-to-share-pdf-files-privately` | `/pdf-security` |
| `privacy-first-document-workflows` | `/pdf-tools` |
| `local-browser-pdf-processing-explained` | `/pdf-tools` |
| `do-online-pdf-tools-store-files` | `/pdf-tools` |
| `how-to-avoid-uploading-sensitive-documents` | `/pdf-security` |
| `secure-pdf-workflows-for-business` | `/pdf-security` |
| `browser-based-document-processing-benefits` | `/pdf-tools` |

### Group 5 — Format Comparisons (8)
| Slug | parentHub |
|---|---|
| `pdf-vs-google-docs` | `/pdf-converter` |
| `pdf-vs-docx-for-business` | `/pdf-for-business` |
| `pdf-vs-images-for-sharing-documents` | `/image-to-pdf` |
| `pdf-vs-png` | `/pdf-to-images` |
| `best-format-for-sharing-documents` | `/pdf-tools` |
| `why-pdf-is-still-popular` | `/pdf-tools` |
| `when-to-use-scanned-pdf` | `/scan-to-pdf` |
| `editable-pdf-vs-flat-pdf` | `/pdf-editor` |

### Group 6 — High Commercial Intent (6)
| Slug | parentHub |
|---|---|
| `best-free-pdf-tools` | `/pdf-tools` |
| `free-browser-based-pdf-tools` | `/pdf-tools` |
| `best-pdf-tools-without-upload` | `/pdf-tools` |
| `best-private-pdf-tools` | `/pdf-tools` |
| `free-pdf-tools-for-iphone` | `/pdf-tools` |
| `free-pdf-tools-for-android` | `/pdf-tools` |

---

## Per-group execution recipe

For each group:

1. Add a `// Wave 2 — <group name>` block of `RouteEntry` objects to [src/lib/routes.ts](src/lib/routes.ts), placed right before the `// Compare` block. Title + description must be globally unique (test enforces). Use `category: "guide"`, `priority: 0.6` (commercial-intent and high-volume problem-fix entries get `0.65`), `changeFrequency: "monthly"`.

2. Create one `.ts` content file per slug at [src/content/guides/](src/content/guides/) with `slug`, `h1`, `description`, `updated: "2026-05-29"`, `intro` (3 paragraphs), `steps` (5–7 items), `tips` (4–6 bullets), `mobileNote`, `faq` (5 items), `related` (3–5 cross-links), `parentHub`. Distinct intros — no copy-paste opener.

3. Add import + `GUIDES` record entry to [src/content/guides/index.ts](src/content/guides/index.ts) in the matching `// Wave 2 — <group>` block.

4. Run validation; commit; report; move to next group.

---

## Content guidelines (binding)

- **Length:** 900–1,500 words. Use sub-steps and FAQs to reach length naturally, not filler.
- **Voice:** Practical, second-person, honest about limitations. No "military-grade", "100% safe", "perfect conversion", "OCR supported" (unless tool actually does it).
- **Brand framing (moderate):** Privacy/comparison/commercial clusters lean into "runs in your browser, no upload". Problem-fix and business/student clusters mention it only when natural. Avoid identical opening sentence patterns across guides.
- **Tool linking:** Every guide must link to ≥1 real tool and 2–4 other guides. Pick from the manifest above.
- **App CTA:** Auto-injected by `GuidePage` component — do not add manually.
- **JSON-LD:** Auto-emitted by `GuidePage` — do not add manually.
- **Honest claims only:** Browser processing means files don't leave the device for the supported tools, but be explicit that some workflows (e.g. real OCR) still need server-side or app-side work.

---

## ROUTES entry pattern

```ts
{
  path: "/guides/<slug>",
  title: "<unique, ~50–65 chars, descriptive>",
  description: "<unique, ~140–160 chars, action-oriented, no duplication>",
  category: "guide",
  priority: 0.6,           // or 0.65 for problem-fix / commercial-intent
  changeFrequency: "monthly",
},
```

## Content file pattern

```ts
import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "<same as filename>",
  h1: "<sentence-case headline distinct from meta title>",
  description: "<same as ROUTES description OR a near-identical paraphrase; must remain unique vs every other guide>",
  updated: "2026-05-29",
  intro: [
    "<paragraph 1: anchor the problem in a real scenario>",
    "<paragraph 2: explain the resolution path the guide will take>",
    "<paragraph 3: honest scope — what this guide does/doesn't cover>",
  ],
  steps: [
    { title: "<short imperative>", body: "<1–3 sentences>" },
    // 4–6 more
  ],
  tips: [
    "<4–6 actionable tips, not restating steps>",
  ],
  mobileNote: "<2–3 sentences positioning the PDF Editor app as a natural mobile companion>",
  faq: [
    { q: "<question>", a: "<answer, 1–3 sentences>" },
    // 4 more
  ],
  related: [
    { label: "<descriptive link text>", path: "<existing route>" },
    // 2–4 more — at least one tool/hub
  ],
  parentHub: { label: "<hub/tool label>", path: "<assigned parentHub from manifest>" },
};

export default content;
```

---

## Test update

`tests/guides.test.tsx` floor is currently `>= 54`. After Wave 2 the registry will have 54 existing + 54 new = 108. Update the assertion to `>= 108` in the same commit that lands Group 6.

---

## Validation (run after EVERY group commit)

```bash
cd /Users/petrohrys/Desktop/pdfeditconvert-top
npm run lint
npm run typecheck
npx vitest run
```

After Group 6 also run:

```bash
npm run build
```

Fail conditions to debug immediately:
- Vitest reports duplicate titles/descriptions → rename in `routes.ts`
- Vitest reports broken internal link → slug typo in `related[]` or `parentHub`
- Typecheck error on `GuideContent` → missing field

---

## Commit conventions

```
feat(seo): add Wave 2 Group 1 — PDF problem & fix guide cluster
feat(seo): add Wave 2 Group 2 — business PDF workflow guide cluster
feat(seo): add Wave 2 Group 3 — student PDF workflow guide cluster
feat(seo): add Wave 2 Group 4 — PDF privacy & trust guide cluster
feat(seo): add Wave 2 Group 5 — PDF format comparison guide cluster
feat(seo): add Wave 2 Group 6 — commercial-intent PDF guide cluster
```

---

## What we are NOT touching

- Tool runtime code under `src/components/tools/` and `src/app/<tool>/`
- WebmasterID in `src/app/layout.tsx` and `src/content/legal/privacy.ts`
- Canonical host in `src/lib/routes.ts` (`SITE_URL`)
- Untracked WIP: `src/content/hubs/merge-pdf.ts`, `src/content/hubs/split-pdf.ts`
- Compare/use-case clusters
- `tests/` except the single floor update in `tests/guides.test.tsx`
