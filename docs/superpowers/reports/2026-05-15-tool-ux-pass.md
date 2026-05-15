# 2026-05-15 — Browser PDF Tools UX Pass

Implementation report for `docs/superpowers/plans/2026-05-15-tool-ux-improvements.md`.
Branch: `tool-ux-improvements` (worktree at `.worktrees/tool-ux-improvements`).
Commits: 20 (baseline `c106292` → tip `ce8fe15`).

## 1. UX improvements made

- Added a 3-step **Upload → Adjust → Download** indicator above every tool (`StepIndicator` primitive with `aria-current="step"`).
- Added a unified **success state** after every conversion: filename, file size, "Download again", "Start over", related-tool suggestions, and an inline app CTA panel (`SuccessState` primitive, declared `"use client"` because it renders DOM event handlers).
- Added an **aria-live processing status region** with spinner that updates per phase ("Combining PDFs…", "Rendering page 3 of 12…", "Stamping pages…") via `ProcessingStatus` primitive.
- Added an in-dropzone **privacy line** with a small shield icon: *"Files are processed locally in your browser."* — satisfies the brief's "privacy message directly inside upload area".
- Made every dropzone's file input **properly labelled** (`htmlFor`/`id` + `aria-describedby` linking the hint and privacy spans). `getByLabelText` queries now find the input — fixed an existing a11y gap.
- Replaced ad-hoc tool state (`busy` boolean + `error` string) with a typed discriminated-union state machine via the `useToolFlow` hook. Each tool now has the same `idle | busy | success | error` lifecycle.

## 2. Tool components updated

All six tool client components were rewritten on top of the new primitives:

- `src/components/tools/ImageToPdfTool.tsx`
- `src/components/tools/MergePdfTool.tsx`
- `src/components/tools/SplitPdfTool.tsx`
- `src/components/tools/RotatePdfTool.tsx`
- `src/components/tools/PdfToImagesTool.tsx`
- `src/components/tools/WatermarkPdfTool.tsx`

Each one now follows the same shape: `<ToolShell>` → `<StepIndicator>` → conditional `<SuccessState>` OR (`<DropZone>` + file list + options + `<ProcessButton>` + `<ProcessingStatus>` + `<ToolError>`).

## 3. Per-tool option improvements

- **Image to PDF** — added Page size (Auto / A4 / Letter), Orientation (Auto / Portrait / Landscape), Image fit (Fit page / Fill page), Margin (None / Small / Medium). Defaults preserve the old behaviour (Auto + Auto + Fit + None ≈ page-sized-to-image with no margins). Pure helpers `resolvePageSize` and `layoutImage` handle the geometry.
- **Merge PDF** — reorder preserved; otherwise pattern-only change.
- **Split PDF** — added a helper hint with examples `1-3 or 2,4,6 or 1-3,5,8-10` directly under the input; subtitle on the ToolShell also includes the example syntax.
- **Rotate PDF** — replaced raw `<input type="radio">` controls with the `OptionGroup` primitive (`role="radiogroup"` + `role="radio"` buttons + 44px tap targets). Fixed a missing `name` grouping issue on the old radios.
- **PDF to images** — added a **JPEG quality** slider that only appears when JPEG is the selected format, and an optional **page range** input (blank = render all).
- **Watermark PDF** — added **position** (Center / Top-left / Top-right / Bottom-left / Bottom-right) and **font size** (16–120pt). Angle slider is now only shown when position is Center.

## 4. Privacy / trust improvements

- Privacy line rendered inside every dropzone (`DropZone` primitive).
- Existing `PrivacyNote` muted band below the tool is kept (intentional reinforcement).
- Success state mentions the local filename + size only — never leaks beyond the device.
- No new outbound requests added; verified via dev-server network check (no `/api/upload` or any other file-bearing POST exists).

## 5. Error handling improvements

- Added `mapToolError(err: unknown) → { kind, message, hint? }` (`errors.ts`). Categorises into seven kinds: `unreadable | invalid_range | memory | unsupported | empty | too_many | generic`.
- Each kind produces a human-readable headline plus a concrete next-step hint. Examples:
  - Password-protected / corrupted PDFs → *"This file could not be opened."* + *"It may be corrupted or password-protected. Unlock or repair it, then try again."*
  - Invalid page range → *"Please enter a valid page range."* + *"Use values like 1-3 or 2,4,6."*
  - Out-of-memory / browser limits → *"This file may be too large for browser processing."* + *"Try a smaller PDF, or split it into pieces first."*
- `ToolError` upgraded to render the optional hint as a secondary line and switched its outer element from `<p>` to `<div role="alert">` so nested paragraphs are valid HTML.

## 6. Mobile improvements

- `OptionGroup` buttons carry `min-h-[44px]` (iOS HIG minimum tap target).
- `OptionRange` slider input also carries `min-h-[44px]`.
- All option grids use `md:grid-cols-2` and stack to a single column on small screens.
- File-chip rows use `min-w-0 truncate` to prevent overflow on long filenames.
- DropZone uses `text-center` so labels read cleanly on narrow viewports.

## 7. App CTA placement

Three placements per tool (unchanged structurally apart from the new success-state injection):

1. **Inline** — `ToolPage` renders `<AppCTA variant="inline">` after the use-cases section (existing).
2. **Final** — `ToolPage` renders `<AppCTA variant="final">` after the FAQ (existing).
3. **Success card** — new: after a successful conversion, the `SuccessState` shows a small `appCta` block with the App Store + Google Play badges. Heading: *"Need PDF tools on your phone?"*.

URLs verified end-to-end:
- App Store → `https://apps.apple.com/app/id6747341672`
- Google Play → `https://play.google.com/store/apps/details?id=com.helperg.editor.documents&pcampaignid=web_share`

## 8. SEO safety confirmation

Per the user's conservative-SEO choice, only `hero.lead` strings were edited across the six content files. The following remain structurally identical to pre-pass:

- H1 (`hero.h1`)
- FAQ items
- How-to steps
- Use-case items
- Limitations items
- Related-tool links
- JSON-LD (`breadcrumbSchema`, `faqSchema`, `webApplicationSchema`)
- `ToolPage` layout (Hero → tool slot → PrivacyNote → Steps → Use cases → Limitations → Related → AppCTA inline → FAQ → AppCTA final → JsonLd)

Verified via dev-server `curl`: every tool URL serves H1, FAQ content, JSON-LD blocks, and the WebmasterID `<script>` in the initial HTML.

Sitemap: `src/app/sitemap.ts` already emits `lastModified: new Date()` per route at build time, so lastmod advances automatically on every deploy. No edit required.

## 9. WebmasterID confirmation

Untouched. Inline `<Script id="webmasterid-tracker" ...>` block in `src/app/layout.tsx` carries the original `data-wmid="wm_b6f7wz6b9y2o5qzo"` and `data-endpoint`. Verified on all six tool pages via dev-server fetch.

## 10. Build / lint / typecheck results

Final tip-of-branch results (`c9bf73f` for tests, `ce8fe15` is content-only after):

```
npm run lint        → exit 0, zero warnings
npm run typecheck   → exit 0
npx vitest run      → 21 test files, 69 tests passed (baseline was 36 tests / 10 files)
npm run build       → exit 0; 44 routes prerendered static including all six tool routes
```

Test-count delta — added during this pass:
- 2 — `StepIndicator`
- 3 — `DropZone`
- 3 — `SuccessState`
- 6 — `errors` (5 categorisation + 1 out-of-bounds branch added during fix)
- 2 — `ToolError`
- 4 — `ImageToPdfTool`
- 3 — `MergePdfTool`
- 3 — `SplitPdfTool`
- 2 — `RotatePdfTool`
- 2 — `PdfToImagesTool`
- 3 — `WatermarkPdfTool`
- 36 → 69 (Δ = 33 new test cases).

## 11. Known limitations

- The watermark tool has no live preview of position/opacity — the user has to convert once to see the result. Adding a preview would require a heavier rendering library; out of scope.
- `Fill page` mode in Image to PDF can crop content outside the page media box. Most viewers (Preview, Acrobat) silently respect the media box, but some renderers will keep the bleed area in the stream. This matches pdf-lib's documented behaviour.
- Split tool still produces one combined PDF, not one PDF per range. Called out in `limitations.items` copy.
- `PdfToImagesTool` test coverage is limited to UI affordances because driving `pdfjs-dist` in jsdom is not viable. The third planned test ("hides JPEG quality option until JPEG is selected") was dropped for that reason; the conditional rendering logic is still in the component.
- `mapToolError` `unsupported` / `too_many` / `empty` branches pass the raw thrown message through verbatim (rather than normalising to a uniform `message + hint` pair like the other branches do). Acceptable because those messages already include actionable counts/types; a future pass could harmonise the pattern.
