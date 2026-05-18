# Tool Page — Conversion-First Presentation Hierarchy

Date: 2026-05-18
Branch: `tool-ux-improvements`
Scope: presentation hierarchy only. Shared tool logic, tool components, and
primitives are accepted as-is and MUST NOT change.

## Problem

Tool routes (`/image-to-pdf`, `/merge-pdf`, `/split-pdf`, `/rotate-pdf`,
`/pdf-to-images`, `/add-watermark-to-pdf`) still read like a blog/doc site
rather than a real PDF tool platform:

- **Mobile:** the hero band stacks single-column with marketing copy
  (eyebrow pill → large H1 → lead → 3 trust bullets) rendered *before* the
  converter, pushing the tool off the first screen.
- **Desktop:** the band grid is `minmax(0,1fr) / minmax(0,560px)` — the
  marketing column is equal/wider than the tool, so the converter reads as a
  side widget instead of the primary element.
- **Branding:** brand presence on the tool screen is only a 48px mark inside
  the card; no wordmark/lockup on the band, weak product feel.

All six routes render through one shared component:
`src/components/sections/ToolPage.tsx`.

## Decision

Tool-dominant rail (user-approved):

- Converter is the dominant above-the-fold element on **desktop and mobile**.
- Marketing copy demoted to a slim supporting rail; H1 retained for SEO.
- SEO content (Steps, use cases, limitations, related, FAQ) stays below the
  tool, unchanged.

## Design

Single file: `src/components/sections/ToolPage.tsx`. One supporting touch:
`src/components/tools/primitives/ToolShell.tsx` for brand emphasis. No other
files change.

### Hero band layout

- **DOM order:** tool slot rendered **first**, supporting copy second. This
  guarantees mobile (single column) shows the converter immediately, with H1 +
  one-line lead + trust bullets appearing directly below it.
- **Desktop grid (lg+):** `grid-cols-[minmax(0,1.6fr)_minmax(0,360px)]` —
  tool occupies the wide (~62%) left column; supporting rail is the narrow
  right column. `lg:items-start`; tool keeps `lg:sticky lg:top-24`.
- The H1 stays an `<h1>` (one per page, SEO/breadcrumb integrity preserved).
  Lead trimmed to a single sentence in the rail. The three trust bullets
  (`Files processed locally`, `No upload/account/watermark`,
  `Free — mobile + desktop`) remain in the rail.
- Reduce band vertical padding so the converter clears the fold on common
  laptop viewports (≈ `py-6 md:py-10`).

### Branding

- Add the existing **PDF Editor wordmark** (`/pdf-editor-wordmark.svg`) at the
  top of the band so the page reads as a product surface.
- Band keeps `--gradient-brand-soft`; strengthen the product read with the
  existing brand-deep accent on the converter card edge.
- `ToolShell`: keep the BrandMark; ensure the top accent strip uses
  `--gradient-brand` and the title hierarchy stays prominent. No structural
  change to the card's children.

### Out of scope (unchanged)

- All `src/components/tools/*Tool.tsx` and `tools/primitives/*` logic & markup.
- Steps / use cases / limitations / related / FAQ / JsonLd sections.
- Routing, content files, SEO metadata, schema.

## Acceptance criteria

1. On a 390×844 mobile viewport, the converter card (drop zone + action
   button visible) appears within the first screen, above any marketing prose.
2. On a 1280×800 desktop viewport, the converter is the visually dominant
   element of the band (wide column); marketing copy is a slim rail.
3. Exactly one `<h1>` per tool page; breadcrumbs unchanged.
4. SEO sections still render, in the same order, below the band.
5. PDF Editor wordmark visible on the band; page reads as a tool platform.
6. `npm run typecheck`, `npm run lint`, and `npm test` pass.
7. Change is confined to `ToolPage.tsx` (+ minor `ToolShell.tsx`); no tool
   logic touched.
