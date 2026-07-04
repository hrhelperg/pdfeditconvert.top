# PDF Knowledge Graph — Phase A Design

**Date:** 2026-07-04
**Project:** pdfeditconvert.top
**Goal:** Establish a long-term Knowledge Graph content system and ship Phase A — the PDF Encyclopedia (~250 authoritative, definitional reference pages) — reusing the existing site architecture without introducing a second content system.

## Background

The site already has a mature SEO content architecture: a `ROUTES` registry (`src/lib/routes.ts`), a `seo()` metadata helper, a sitemap that enumerates `ROUTES`, JSON-LD builders (`src/content/schema.ts`), and per-type content systems for guides, hubs, tools, compares, and use-cases. There are **176 existing routes**, overwhelmingly **how-to guides** (~145) plus 8 hubs, ~11 tools, 3 compares, 4 use-cases.

The audit found essentially **no reference/definitional layer**: there is no "PDF/A", "PDF color spaces", "how PDF compression works", or "ISO 32000" page. The existing pages answer *"how do I do X"*; they do not answer *"what is X / how does it work / what does the spec say."* Phase A fills that gap.

This is the first phase of an eight-phase program (~1,200–1,500 pages) spanning PDF, printing, ZIP, and fax. The content model built here must therefore be a **Knowledge Graph** general enough to power all four domains later without a redesign.

## Approved decisions

1. **URL namespace:** `/pdf-encyclopedia/[slug]`, with a cluster hub at `/pdf-encyclopedia`.
2. **Content model:** a new `KnowledgeContent` type (Article + Breadcrumb + FAQ + DefinedTerm schema, **never** HowTo). Reuses all existing primitives; it is an *extension* of the architecture, not a parallel system.
3. **Rollout:** the full ~250 Phase A pages in one push, single review at the end. No auto-merge.

### Knowledge Graph refinements (approved 2026-07-04)

The content model is `KnowledgeContent` (not `ReferenceContent`) because the system will eventually hold concepts, standards, specifications, comparisons, technologies, file formats, workflows, APIs, software, and operating systems — "Knowledge" scales; "Reference" does not. Every entry carries:

- **Graph edges** — `parentConcept`, `childConcepts`, `relatedConcepts`, `relatedStandards`, `relatedFormats`, `relatedTools`, `relatedGuides` — for future navigation, recommendations, and semantic internal linking.
- **`aliases`** — alternate names (e.g. PDF/A → "PDF A", "ISO 19005", "Archival PDF") for future search and internal linking.
- **`searchIntent`** — a controlled facet (definition, concept, standard, comparison, security, format, history, printing, metadata, rendering, …) for future filtering/recommendations.
- **`difficulty`** — Beginner / Intermediate / Advanced, for navigation and UX.
- **`reviewed`** — editorial-review date, separate from the `updated` publication date.
- **`seeAlso`** — a dedicated section of 5–8 *highly* relevant knowledge pages, distinct from generic related links.
- **`misconceptions`** — a "Common misconceptions" section (e.g. "PDF/A is not PDF/X") that adds unique value and reduces repetitive FAQs.
- **`specification`** — optional structured spec metadata (ISO, introduced, latest version, typical usage, related standards) for standards and technical concepts.

## Scope

### In
1. New `KnowledgeContent` type and supporting types in `src/types/content.ts`.
2. New `"reference"` value in `RouteCategory`.
3. New content directory `src/content/knowledge/` (one file per entry) + a barrel index `src/content/knowledge/index.ts` exposing `KNOWLEDGE: Record<slug, KnowledgeContent>` plus graph-resolution helpers.
4. New cluster hub content + page: `/pdf-encyclopedia`.
5. New dynamic route: `src/app/pdf-encyclopedia/[slug]/page.tsx` (mirrors the guides route pattern).
6. New `KnowledgePage` section component (reuses existing primitives).
7. New `definedTermSchema` builder in `src/content/schema.ts`; reuse `articleSchema`/`breadcrumbSchema`/`faqSchema`.
8. ~251 new `ROUTES` entries (1 hub + ~250 entries), all apex, all in the sitemap automatically.
9. ~250 authored Phase A knowledge entries across 10 sub-clusters (final count may land 240–260 after dedup).
10. New vitest suites: metadata uniqueness, schema correctness (no HowTo), and **graph referential integrity**.
11. Phase A production report.

### Out
- WebmasterID (`wm_b6f7wz6b9y2o5qzo`), the ingest endpoint, canonical host, `metadataBase`, `SITE_URL`, robots, and the existing sitemap route-generation logic — all untouched.
- Rebuilding or restyling existing guides/hubs/tools/compares/use-cases.
- Phases B–H (conversion, workflows, printing, ZIP, fax, comparisons, troubleshooting) — future phases reuse this same `KnowledgeContent` model.
- A live search UI or recommendation engine — Phase A only *populates* the graph fields; consuming them is future work.
- Auto-merge. The phase ends with a report and waits for approval.

## Information architecture

```
/pdf-encyclopedia                 → cluster hub (HubContent), links to all 10 sub-clusters
/pdf-encyclopedia/[slug]          → ~250 KnowledgeContent entries
```

- Hub `RouteEntry`: `category: "hub"`, `priority: 0.8`, `changeFrequency: "weekly"`.
- Entry `RouteEntry`: `category: "reference"`, `priority: 0.5–0.7` (by depth/importance), `changeFrequency: "monthly"`.
- Sitemap, robots, and `seo()` pick these up unchanged because they already map over `ROUTES`.
- Breadcrumb: Home → PDF Encyclopedia → {entry h1}.

## Content model

New types in `src/types/content.ts`:

```ts
export type KnowledgeSearchIntent =
  | "definition"
  | "concept"
  | "standard"
  | "specification"
  | "comparison"
  | "security"
  | "format"
  | "history"
  | "printing"
  | "metadata"
  | "rendering"
  | "accessibility"
  | "workflow";

export type KnowledgeDifficulty = "Beginner" | "Intermediate" | "Advanced";

export interface KnowledgeSection {
  heading: string;
  body: string[];
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface KnowledgeMisconception {
  /** The common but wrong belief, stated plainly. */
  claim: string;
  /** The correction. */
  truth: string;
}

export interface SpecificationMeta {
  iso?: string;              // e.g. "ISO 19005"
  introduced?: string;       // e.g. "2005"
  latestVersion?: string;    // e.g. "PDF/A-4 (2020)"
  typicalUsage?: string;     // e.g. "Long-term archiving of documents"
  relatedStandards?: string[]; // knowledge slugs
}

/**
 * Knowledge-graph edges. Concept/standard/format edges reference other
 * knowledge entries BY SLUG (resolved to title+path via the KNOWLEDGE
 * registry — validated for referential integrity). Tool/guide edges point at
 * existing site routes via RelatedLink { label, path } (validated against ROUTES).
 */
export interface KnowledgeGraphEdges {
  parentConcept?: string;        // knowledge slug
  childConcepts?: string[];      // knowledge slugs
  relatedConcepts?: string[];    // knowledge slugs
  relatedStandards?: string[];   // knowledge slugs
  relatedFormats?: string[];     // knowledge slugs
  relatedTools?: RelatedLink[];  // existing tool routes
  relatedGuides?: RelatedLink[]; // existing guide routes
}

export interface KnowledgeContent {
  slug: string;
  h1: string;
  aliases: string[];                 // alternate names / synonyms
  definition: string;                // one-sentence DefinedTerm answer + lead
  description: string;               // unique meta description
  searchIntent: KnowledgeSearchIntent;
  difficulty: KnowledgeDifficulty;
  updated: string;                   // publication / last content change (ISO date)
  reviewed: string;                  // editorial review date (ISO date)
  intro: string[];                   // unique framing paragraphs
  sections: KnowledgeSection[];      // the substance (prose, not steps)
  keyFacts?: KeyFact[];              // scannable spec facts (no invented numbers)
  specification?: SpecificationMeta; // optional; for standards/technical concepts
  misconceptions?: KnowledgeMisconception[]; // "Common misconceptions"
  faq: FaqItem[];
  graph: KnowledgeGraphEdges;
  seeAlso: string[];                 // 5–8 knowledge slugs (curated, highly relevant)
  parentHub: RelatedLink;            // { label: "PDF Encyclopedia", path: "/pdf-encyclopedia" }
}
```

Notes:
- Graph/`seeAlso`/`specification.relatedStandards` reference **knowledge slugs**, resolved at render time through the registry (`knowledgeRef(slug) → { h1, path } | throws`). This gives referential integrity we can assert in tests.
- `relatedTools`/`relatedGuides` reference **existing routes** via `RelatedLink`, validated against `ROUTES`.
- `KnowledgeContent` is deliberately superset-general so Phases B–H (formats, printing, ZIP, fax) reuse it verbatim. Only the topic data and route namespace change per phase.

## Knowledge graph resolution & registry

`src/content/knowledge/index.ts`:

```ts
export const KNOWLEDGE: Record<string, KnowledgeContent> = { /* imported entries */ };

export function knowledgePath(slug: string): string {
  return `/pdf-encyclopedia/${slug}`;
}

/** Resolve a knowledge slug to a nav link; throws if the slug is unknown. */
export function knowledgeRef(slug: string): RelatedLink {
  const entry = KNOWLEDGE[slug];
  if (!entry) throw new Error(`Unknown knowledge slug referenced: ${slug}`);
  return { label: entry.h1, path: knowledgePath(slug) };
}

/** All entries whose graph/seeAlso reference a given slug (reverse edges). */
export function backlinksTo(slug: string): string[] { /* ... */ }
```

The `KnowledgePage` component resolves `graph.*` slug arrays and `seeAlso` through `knowledgeRef` so authors only maintain slugs, never duplicate titles/paths.

## Rendering — `KnowledgePage`

Reuses `ArticleLayout`, `Prose`, `FAQ`, `AppCTA`, `RelatedGuides`, `Breadcrumbs`, `JsonLd`. Section order:

1. Breadcrumb (Home → PDF Encyclopedia → h1) + H1 + "Updated / Reviewed" line + difficulty + aliases (as a subtle "Also known as" line).
2. `definition` as a highlighted lead, then `intro` prose.
3. `specification` block (if present) — a compact definition list (ISO, introduced, latest version, typical usage, related standards as links).
4. `keyFacts` (if present) — scannable label/value list.
5. `sections[]` — the body prose.
6. "Common misconceptions" (if present) — claim (struck/flagged) → truth.
7. Inline `AppCTA` (PDF Editor) — natural, not forced.
8. FAQ.
9. "See also" — the curated 5–8 `seeAlso` knowledge links (its own prominent section).
10. "Related" — grouped graph edges: related concepts / standards / formats / tools / guides + parent/child navigation.
11. Final `AppCTA`.

JSON-LD emitted: `articleSchema` (using `updated` as published, `reviewed`→`dateModified`), `breadcrumbSchema`, `faqSchema`, and new `definedTermSchema({ term: h1, aliases, definition, path })`. **No HowTo.**

New schema builder:

```ts
export function definedTermSchema({ term, aliases, definition, path }: {
  term: string; aliases: string[]; definition: string; path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term,
    alternateName: aliases,
    description: definition,
    url: `${SITE_URL}${path}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "PDF Encyclopedia",
      url: `${SITE_URL}/pdf-encyclopedia`,
    },
  };
}
```

## Topic taxonomy (~250, deduplicated)

Ten spec-grounded sub-clusters. Exact slugs finalized in the implementation plan; a dedup pass against the existing 176 routes runs first (overlaps become `relatedGuides`/`relatedTools` edges, not new pages; skips are logged in the report).

| # | Sub-cluster | ~Count | Representative topics |
|---|---|---|---|
| 1 | Format foundations & file structure | 25 | ISO 32000, PDF versions 1.0–2.0, objects, xref table, trailer, document catalog, content streams, linearized PDF |
| 2 | ISO standards & subsets | 25 | PDF/A (A-1/2/3/4), PDF/X (X-1a/3/4), PDF/UA, PDF/E, PDF/VT, conformance levels, output intents |
| 3 | Text, fonts & encoding | 25 | font embedding/subsetting, Type1/TrueType/OpenType, CID fonts, CMap, ToUnicode, standard-14 fonts, text extraction |
| 4 | Graphics, color & rendering | 25 | DeviceRGB/CMYK/Gray, ICC profiles, spot color, transparency, blend modes, rendering intent, XObjects, shadings |
| 5 | Images & compression | 25 | Flate, LZW, DCTDecode (JPEG), JPXDecode, CCITT, JBIG2, downsampling, optimization, linearization |
| 6 | Interactivity: forms, annotations, links | 25 | AcroForm, XFA, field types, annotation types, bookmarks/outlines, actions, appearance streams, FDF/XFDF |
| 7 | Security, signatures & permissions | 25 | RC4/AES encryption, user vs owner passwords, permission flags, redaction, PAdES, LTV, DSS, certifying signatures |
| 8 | Accessibility & structure | 20 | tagged PDF, structure tree, reading order, alt text, role mapping, MCID, WCAG-and-PDF |
| 9 | Metadata, extraction & tooling concepts | 20 | Info dict, XMP, searchable PDF, OCR (concept), page labels, thumbnails, validation, repair (concept) |
| 10 | Page geometry, print production & misc | 20 | MediaBox/CropBox/BleedBox/TrimBox/ArtBox, page sizes, rotation, OCG layers, preflight, trapping, portfolios |

## Cannibalization & dedup rules

- Reference intent (*what is / how does it work / spec*) vs existing how-to intent (*how do I do it*). Different namespace, no title overlap.
- Every candidate slug is checked against `existing_paths.txt` (all 176 routes). Near-duplicate intent → dropped, logged, and linked instead of reworded.
- A knowledge page touching an existing tool/guide **links to it** (`relatedTools`/`relatedGuides`) rather than repeating steps or CTAs-as-content.
- Within the cluster: each `slug` unique; no two entries share a `searchIntent`+topic that collapses to the same query.

## Product promotion (natural)

Phase A is PDF-domain → primary CTA stays **PDF Editor** (iOS `id6747341672`, Android `com.helperg.editor.documents`) via existing `AppCTA`/`StoreButtons`. ZIP/Printer/Fax apps are **not** injected into PDF reference pages; they belong to Phases D–F. No "best", no fake comparisons, no invented capabilities.

## Validation & QA gates

Automated (new vitest suites, matching existing SEO test style in `tests/`):
- **Metadata uniqueness:** every knowledge entry has a unique `h1`, `description`, and route `title`; none collide with each other or with existing `ROUTES`.
- **Schema correctness:** knowledge pages emit Article/Breadcrumb/FAQ/DefinedTerm and **never** HowTo; DefinedTerm carries aliases.
- **Graph referential integrity:** every `parentConcept`/`childConcepts`/`relatedConcepts`/`relatedStandards`/`relatedFormats`/`seeAlso`/`specification.relatedStandards` slug exists in `KNOWLEDGE`; every `relatedTools`/`relatedGuides` path exists in `ROUTES`; no entry is orphaned (each is reachable from the hub and/or another entry); `seeAlso` has 5–8 items.
- **Registry/route parity:** every `KNOWLEDGE` slug has a matching `ROUTES` entry at `/pdf-encyclopedia/<slug>` and vice-versa.
- **Field validity:** `searchIntent`/`difficulty` within enums; `updated`/`reviewed` are ISO dates; required prose fields non-empty.

Program gates (must all pass before the report): duplicate-title/description audit · cannibalization audit · metadata audit · schema audit · internal-link audit · sitemap audit · `npm run lint` · `npm run typecheck` · `npx vitest run` · `npm run build`.

## Production approach & honesty constraint

Because it is ~250 pages at a real quality bar, production is driven by orchestrated agent workflows: fan-out authoring by sub-cluster → adversarial dedup + factual-accuracy + quality verification → assembly into typed content files + `ROUTES` entries → full QA gate suite.

**Hard constraint — no fabricated facts.** PDF-spec content is verifiable (ISO 32000 and the PDF/A/X/UA/E/VT families are real, dated standards). Anything uncertain is phrased conservatively or omitted. No invented statistics, no fake benchmarks, no legal or medical advice. `keyFacts`/`specification` carry only established, checkable values.

## Phase A production report (delivered at the end)

Pages added · skipped duplicates (with reasons) · cannibalization analysis · internal-link/graph summary · sitemap additions · schema verification · metadata verification · App CTA verification · WebmasterID-untouched confirmation · lint · typecheck · tests · build · known limitations · recommendations for Phase B.

## Known limitations

- Graph fields are *populated* in Phase A but not yet *consumed* by a live search/recommendation UI (future work; the data model is ready for it).
- Final page count may land 240–260 after dedup; the report states the exact number and every skip.
- Reference depth is calibrated to authoritative-but-accessible (MDN/Microsoft-Learn register), not a re-typesetting of ISO 32000.
