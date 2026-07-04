# Phase A — PDF Encyclopedia Topic Manifest

**Date:** 2026-07-04
**Source of truth:** `src/content/knowledge/_manifest.ts` (`MANIFEST`, 250 entries)
**Gate:** `tests/knowledge/cannibalization.test.ts`

The manifest is the approved, deduplicated topic list every authoring wave draws
from. Each slug is a **reference/definitional** concept (what is X / how does it
work / what does the spec say) — none duplicate an existing how-to guide, tool,
hub, or compare route.

## Count by cluster (250 total)

| Cluster | Count |
|---|---|
| foundations | 30 |
| standards | 25 |
| text-fonts | 26 |
| graphics-color | 26 |
| images-compression | 26 |
| interactivity | 25 |
| security | 26 |
| accessibility | 22 |
| metadata-tooling | 22 |
| print-geometry | 22 |
| **Total** | **250** |

## Dedup method

- Regenerated the existing route list (`grep -oE 'path: "[^"]+"' src/lib/routes.ts`) — 177 routes after adding the hub.
- Every candidate slug checked against: top-level paths, `/pdf-encyclopedia/*`, and `/guides/*` tails. The cannibalization gate enforces all three automatically.
- Intent separation: reference vs how-to. Where a topic overlaps an existing how-to guide/tool, the encyclopedia entry takes the **spec/structural angle** and cross-links to the guide/tool via `relatedGuides`/`relatedTools` rather than repeating it.

## Skipped (deduped) candidates

Candidate reference topics dropped because an existing route already owns the
intent (the encyclopedia links to these instead of re-covering them):

| Candidate | Existing route it defers to | Reason |
|---|---|---|
| "what is a pdf form" | `/guides/what-is-a-pdf-form` | Existing guide owns the definitional intent |
| "how pdf forms work" | `/guides/how-pdf-forms-work` | Existing guide covers structure at a reader level |
| "editable vs fillable pdf" | `/guides/editable-pdf-vs-fillable-pdf` | Existing guide owns the comparison |
| "editable vs flat pdf" | `/guides/editable-pdf-vs-flat-pdf` | Existing guide owns the comparison |
| "can you edit a pdf form" | `/guides/can-you-edit-a-pdf-form` | Existing guide owns the intent |
| "pdf vs docx" (reference) | `/compare/pdf-vs-docx`, `/guides/pdf-vs-docx` | Compare + guide already own it |
| "pdf vs jpg" (reference) | `/compare/pdf-vs-jpg` | Compare route owns it |
| "watermarks in pdf" (how-to) | `/add-watermark-to-pdf`, `/guides/how-to-add-watermark-to-pdf` | Tool + guide own it; encyclopedia covers structure only where distinct (folded into annotations) |
| "compress pdf" (how-to) | `/compress-pdf`, compression guides | Tool + guides own the action; encyclopedia covers *how compression works* (`pdf-compression`, filters) instead |

Note: the encyclopedia DOES cover the **mechanisms** behind these (e.g.
`acroform`, `pdf-form-fields`, `pdf-compression`, `flate-decode`) because those
are spec concepts with no existing reference page — a different intent from the
how-to guides above.

## Full slug list

See `MANIFEST` in `src/content/knowledge/_manifest.ts` — grouped by cluster with
`searchIntent`, `difficulty`, and `parentConcept` for each entry. Cluster
anchors (parent of their cluster): `portable-document-format`,
`pdf-standards-overview`, `pdf-fonts`, `pdf-color`, `pdf-compression`,
`pdf-interactive-features`, `pdf-security-model`, `tagged-pdf`, `pdf-metadata`,
`pdf-page-geometry`.

## Known adjustments
- Final published count may land 240–250 if any topic proves unverifiable during
  authoring (content rule: skip/log rather than invent). Any drop is recorded in
  the production report.
