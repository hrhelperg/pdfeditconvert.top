# Tool UX Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the six existing browser-based PDF tools (`/image-to-pdf`, `/merge-pdf`, `/split-pdf`, `/rotate-pdf`, `/pdf-to-images`, `/add-watermark-to-pdf`) so a first-time visitor always knows what to do next, what will happen, what privacy guarantees apply, and what to do when something goes wrong — without breaking the server-rendered SEO layer, removing pages, adding a backend, or touching WebmasterID.

**Architecture:** Keep the existing two-layer model — server-rendered `ToolPage` shell wrapping a `"use client"` interactive island — and improve only the island plus its shared primitives. New shared primitives (`StepIndicator`, `SuccessState`, `ProcessingStatus`, expanded `ToolError`, expanded `DropZone`, new option primitives) live alongside the existing ones in `src/components/tools/primitives/`. Each tool component becomes a thin orchestrator over those primitives + tool-specific options + tool-specific PDF logic. SEO content (Hero, How-to, Use cases, Limitations, Related, FAQ, App CTA) stays server-rendered and structurally identical.

**Tech Stack:** Next.js 16.2.6 App Router · React 19 · TypeScript strict · Tailwind v4 with `@theme inline` tokens (already wired to brief's exact palette: `--color-brand`=#E50914, `--color-brand-2`=#EF1D26, `--color-ink`=#0B1220, `--color-bg`=#F8FAFC) · `pdf-lib` (lazy) · `pdfjs-dist` (lazy) · Vitest + Testing Library + jsdom · lucide-react icons · `clsx` + `tailwind-merge` via `cn()`.

**Out of scope (per brief):** No Supabase / DB / accounts. No file upload to server. No removing pages. No removing WebmasterID. No turning the page into a client component (only the converter island is client). No new tool routes. No backend.

---

## Recon Findings (gaps the plan closes)

What's already good and stays untouched:
- Theme tokens already match the brief's exact palette.
- `WebmasterID` script is global in `src/app/layout.tsx` (lines 35-41).
- App Store + Google Play URLs in `src/components/sections/StoreButtons.tsx` already match the brief.
- `ToolPage` already renders Breadcrumbs → Hero → tool slot → PrivacyNote (muted band) → Steps → Use cases → Limitations → Related → AppCTA inline → FAQ → AppCTA final → JSON-LD.
- `ToolPage.test.tsx` already pins server-rendered H1, privacy note, FAQ, related links.
- All six tool routes exist in `src/lib/routes.ts`.
- Lazy import boundaries (`loadPdfLib`, `loadPdfJs`) keep the server bundle small.

What's missing vs the brief and where the plan adds it:
- **3-step indicator (Upload → Adjust → Download)** inside each tool — not present anywhere → add `StepIndicator` primitive (Phase 1, Task 2) and consume in each tool (Phase 2).
- **Privacy line directly inside the upload zone** — `PrivacyNote` is a separate band, not in the dropzone → expand `DropZone` to render the line under the hint (Phase 1, Task 4).
- **Visible max file size + supported types in the upload zone** — currently only the per-tool `hint` mentions size → tighten copy and add an `ariaDescription` (Phase 1, Task 4).
- **aria-live status for processing/errors** — `ToolError` uses `role="alert"` already (good), but processing progress text is a plain `<span>` → add `ProcessingStatus` primitive (Phase 1, Task 3).
- **Success state with output filename, file size, download button, Start over, related-tool links, app CTA** — currently downloads silently and leaves the form populated → add `SuccessState` primitive (Phase 1, Task 5) and a `useToolFlow` hook to manage `idle | busy | success | error` (Phase 1, Task 6).
- **Categorized error messages with human-readable next-step** — `ToolError` only renders one string; tools throw ad-hoc messages → add `mapToolError()` helper that turns raw errors into `{ message, hint }` (Phase 1, Task 7).
- **Image-to-PDF page size / orientation / image fit / margins** — current implementation sizes each PDF page to its image with zero margins → add options (Phase 2, Task 9).
- **PDF-to-images quality slider for JPEG, optional page range** — currently only format + scale → add quality slider when JPEG, add range input (Phase 2, Task 12).
- **Watermark position option (center / corners), font size, optional rotation** — currently always center+45° → add `position` and `fontSize` (Phase 2, Task 13).
- **Disabled CTA until valid file present** — already true in most tools; verify in tests (Phase 2 per-tool tasks).
- **Reorder for Image-to-PDF + Merge** — already implemented via `FileChip.onMoveUp/onMoveDown` → keep, add tests (Phase 2, Tasks 8 & 9).
- **Mobile sticky/visible convert button** — convert button not sticky → add a mobile-only sticky action bar inside `ToolShell` only when needed (Phase 1, Task 1 introduces a slot for this; Phase 2 tools opt in).
- **Visible focus states + meaningful labels + aria-live** — focus ring exists globally; some buttons (radio scope in `RotatePdfTool`) have no `id`/`htmlFor` link → fix per-tool (Phase 2).
- **Per-tool helper copy / subtitles match brief's example wording** — adjust each `ToolContent.hero.lead` and `ToolShell` subtitle; conservative SEO scope means we keep the H1 and FAQ structure (Phase 4).
- **lastmod bumps for the six tool routes** — sitemap is generated from `ROUTES`; verify a `lastmod` mechanism or add `updated` field if missing (Phase 4, Task 22).

---

## File Structure

**New files (all under `src/components/tools/primitives/`):**
```
StepIndicator.tsx     — server-renderable 3-step visual indicator
ProcessingStatus.tsx  — aria-live polite status text + spinner
SuccessState.tsx      — success card: filename, size, download, start over, related, app CTA
OptionGroup.tsx       — labeled segmented option group (Page size, Orientation, etc.)
OptionRange.tsx       — labeled range input with current value display
OptionField.tsx       — labeled <input>/<textarea> wrapper with id/htmlFor
useToolFlow.ts        — small hook returning {status, error, success, setBusy, setError, setSuccess, reset}
errors.ts             — mapToolError(unknown) -> {message, hint?, kind}
```

**Modified files:**
```
src/components/tools/primitives/DropZone.tsx       — show privacy line, supported types, max size; aria-describedby
src/components/tools/primitives/ToolShell.tsx      — add optional mobileStickyAction slot
src/components/tools/primitives/ToolError.tsx      — accept {message, hint?}; render hint as small follow-up text
src/components/tools/primitives/PrivacyNote.tsx    — add `compact` variant for inline use under DropZone
src/components/tools/ImageToPdfTool.tsx            — full overhaul: 3-step indicator, options (size/orientation/fit/margins), success state
src/components/tools/MergePdfTool.tsx              — 3-step indicator, success state
src/components/tools/SplitPdfTool.tsx              — 3-step indicator, range examples + clearer label, success state
src/components/tools/RotatePdfTool.tsx             — 3-step indicator, fix radio htmlFor, success state, fix angle math edge
src/components/tools/PdfToImagesTool.tsx           — 3-step indicator, JPEG quality, page range, success state
src/components/tools/WatermarkPdfTool.tsx          — 3-step indicator, position, font size, success state
src/content/tools/image-to-pdf.ts                  — copy polish (subtitle/lead) per brief
src/content/tools/merge-pdf.ts                     — copy polish per brief
src/content/tools/split-pdf.ts                     — copy polish per brief
src/content/tools/rotate-pdf.ts                    — copy polish per brief
src/content/tools/pdf-to-images.ts                 — copy polish per brief
src/content/tools/add-watermark-to-pdf.ts          — copy polish per brief
src/app/sitemap.ts                                 — verify lastmod surfaces; bump tool entries if needed
tests/DropZone.test.tsx                            — NEW: privacy line + accept hint render
tests/StepIndicator.test.tsx                       — NEW
tests/SuccessState.test.tsx                        — NEW
tests/ToolError.test.tsx                           — NEW: hint renders, role=alert preserved
tests/errors.test.ts                               — NEW: mapToolError categorization
tests/ImageToPdfTool.test.tsx                      — NEW: option defaults, disabled state, reorder
tests/SplitPdfTool.test.tsx                        — NEW: range validation message
tests/RotatePdfTool.test.tsx                       — NEW: scope toggle, radio labels
tests/WatermarkPdfTool.test.tsx                    — NEW: position default, font size default
tests/MergePdfTool.test.tsx                        — NEW: needs ≥2 files, reorder
tests/PdfToImagesTool.test.tsx                     — NEW: format toggles JPEG quality slider visibility
```

**Untouched (verify via tests, do not edit):**
- `src/app/layout.tsx` (WebmasterID stays).
- `src/lib/routes.ts` (no new routes).
- `src/content/schema.ts` (JSON-LD untouched).
- `src/components/sections/ToolPage.tsx` (server SEO layout untouched).
- `src/components/sections/AppCTA.tsx`, `StoreButtons.tsx`, `FAQ.tsx`, `Steps.tsx`, `Hero.tsx`.

---

## Phase 1 — Shared primitives upgrade

Each task ends with `git add <files> && git commit -m "..."`. Commit messages use the existing repo style (`feat:` / `fix:` / `chore:` / `refactor:` / `test:`).

### Task 1: Bootstrap — confirm baseline green

**Files:**
- Run only.

- [ ] **Step 1: Install + run baseline checks**

```bash
cd /Users/petrohrys/Desktop/pdfeditconvert-top
npm install
npm run typecheck
npm run lint
npm test -- --run
```

Expected: all four exit 0. If any fail, STOP and report — do not attempt fixes that are out of scope for this plan.

- [ ] **Step 2: Note baseline test count**

Record the number of passing tests printed by vitest (e.g. "Tests  41 passed"). Used in Task 26 to confirm no regression.

---

### Task 2: `StepIndicator` primitive

**Files:**
- Create: `src/components/tools/primitives/StepIndicator.tsx`
- Create: `tests/StepIndicator.test.tsx`

- [ ] **Step 1: Write failing test**

```tsx
// tests/StepIndicator.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StepIndicator } from "@/components/tools/primitives/StepIndicator";

describe("StepIndicator", () => {
  it("renders three steps with the active one marked aria-current", () => {
    render(
      <StepIndicator
        steps={["Upload", "Adjust", "Download"]}
        current={1}
      />,
    );
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
    expect(items[1]).toHaveAttribute("aria-current", "step");
    expect(items[0]).not.toHaveAttribute("aria-current");
  });

  it("uses an ordered list for sequence semantics", () => {
    render(<StepIndicator steps={["a", "b", "c"]} current={0} />);
    expect(screen.getByRole("list").tagName.toLowerCase()).toBe("ol");
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx vitest run tests/StepIndicator.test.tsx
```

Expected: FAIL — module not found.

- [ ] **Step 3: Implement primitive**

```tsx
// src/components/tools/primitives/StepIndicator.tsx
import { cn } from "@/lib/cn";
import { Check } from "lucide-react";

export function StepIndicator({
  steps,
  current,
  className,
}: {
  steps: readonly [string, string, string];
  current: 0 | 1 | 2;
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "flex items-center gap-2 sm:gap-4 text-xs sm:text-sm",
        className,
      )}
    >
      {steps.map((label, i) => {
        const state =
          i < current ? "done" : i === current ? "active" : "todo";
        return (
          <li
            key={label}
            aria-current={state === "active" ? "step" : undefined}
            className="flex items-center gap-2 min-w-0"
          >
            <span
              aria-hidden
              className={cn(
                "h-6 w-6 sm:h-7 sm:w-7 grid place-items-center rounded-full font-bold text-[11px] sm:text-xs shrink-0",
                state === "done" &&
                  "bg-[--color-brand] text-white",
                state === "active" &&
                  "bg-[--color-brand] text-white shadow-[var(--shadow-brand)]",
                state === "todo" &&
                  "bg-[--color-bg] text-[--color-muted] border border-[--color-border]",
              )}
            >
              {state === "done" ? <Check className="h-3.5 w-3.5" /> : i + 1}
            </span>
            <span
              className={cn(
                "font-semibold truncate",
                state === "todo"
                  ? "text-[--color-muted]"
                  : "text-[--color-ink]",
              )}
            >
              {label}
            </span>
            {i < steps.length - 1 ? (
              <span
                aria-hidden
                className="hidden sm:block h-px w-6 md:w-10 bg-[--color-border]"
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
```

The `readonly [string, string, string]` tuple keeps callers honest — exactly three steps.

- [ ] **Step 4: Run test — expect pass**

```bash
npx vitest run tests/StepIndicator.test.tsx
```

Expected: PASS, 2 tests.

- [ ] **Step 5: Commit**

```bash
git add src/components/tools/primitives/StepIndicator.tsx tests/StepIndicator.test.tsx
git commit -m "feat(tools): add StepIndicator primitive for Upload → Adjust → Download flow"
```

---

### Task 3: `ProcessingStatus` primitive

**Files:**
- Create: `src/components/tools/primitives/ProcessingStatus.tsx`
- Test: covered by `SuccessState` + tool tests; no dedicated test file — the component is purely presentational with aria-live.

- [ ] **Step 1: Implement**

```tsx
// src/components/tools/primitives/ProcessingStatus.tsx
import { Loader2 } from "lucide-react";

export function ProcessingStatus({ message }: { message: string | null }) {
  return (
    <p
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="flex items-center gap-2 text-sm text-[--color-muted] min-h-[1.25rem]"
    >
      {message ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin text-[--color-brand]" aria-hidden />
          <span>{message}</span>
        </>
      ) : null}
    </p>
  );
}
```

`min-h-[1.25rem]` keeps the layout from jumping when the message appears.

- [ ] **Step 2: Type-check passes**

```bash
npm run typecheck
```

Expected: exit 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/tools/primitives/ProcessingStatus.tsx
git commit -m "feat(tools): add ProcessingStatus primitive with aria-live polite region"
```

---

### Task 4: Expand `DropZone` — privacy line, supported types, accessible description

**Files:**
- Modify: `src/components/tools/primitives/DropZone.tsx`
- Create: `tests/DropZone.test.tsx`

- [ ] **Step 1: Write failing test**

```tsx
// tests/DropZone.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DropZone } from "@/components/tools/primitives/DropZone";

describe("DropZone", () => {
  it("renders label, hint, and a privacy line in the upload area", () => {
    render(
      <DropZone
        accept="application/pdf"
        onFiles={() => {}}
        label="Drop files here or click to browse"
        hint="PDF · up to 100 MB"
      />,
    );
    expect(screen.getByText("Drop files here or click to browse")).toBeInTheDocument();
    expect(screen.getByText("PDF · up to 100 MB")).toBeInTheDocument();
    expect(
      screen.getByText(/processed locally in your browser/i),
    ).toBeInTheDocument();
  });

  it("file input has an accessible name", () => {
    render(
      <DropZone
        accept="application/pdf"
        onFiles={() => {}}
        label="Drop a PDF here, or click to choose"
        hint="PDF · up to 100 MB"
      />,
    );
    const input = screen.getByLabelText(/Drop a PDF here, or click to choose/i);
    expect(input.tagName).toBe("INPUT");
  });

  it("calls onFiles when a file is selected", async () => {
    const onFiles = vi.fn();
    render(
      <DropZone
        accept="application/pdf"
        onFiles={onFiles}
        label="Drop"
        hint="hint"
      />,
    );
    const file = new File(["x"], "a.pdf", { type: "application/pdf" });
    const input = screen.getByLabelText(/Drop/i) as HTMLInputElement;
    await userEvent.upload(input, file);
    expect(onFiles).toHaveBeenCalledWith([file]);
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx vitest run tests/DropZone.test.tsx
```

Expected: FAIL — privacy text not present, label association not declared.

- [ ] **Step 3: Replace `DropZone.tsx` body**

```tsx
// src/components/tools/primitives/DropZone.tsx
"use client";

import { useId, useRef, useState, type DragEvent } from "react";
import { cn } from "@/lib/cn";
import { UploadCloud, ShieldCheck } from "lucide-react";

export function DropZone({
  accept,
  multiple = false,
  onFiles,
  label,
  hint,
  privacyText = "Files are processed locally in your browser.",
}: {
  accept: string;
  multiple?: boolean;
  onFiles: (files: File[]) => void;
  label: string;
  hint: string;
  privacyText?: string;
}) {
  const [hover, setHover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();
  const hintId = useId();
  const privacyId = useId();

  const handle = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    onFiles(Array.from(files));
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setHover(false);
    handle(e.dataTransfer.files);
  };

  return (
    <label
      htmlFor={inputId}
      onDragOver={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onDragLeave={() => setHover(false)}
      onDrop={onDrop}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-10 cursor-pointer transition-colors text-center",
        hover
          ? "border-[--color-brand] bg-[rgba(229,9,20,0.04)]"
          : "border-[--color-border] hover:border-[--color-brand-2] hover:bg-[--color-bg]",
      )}
    >
      <UploadCloud className="h-8 w-8 text-[--color-brand]" aria-hidden />
      <span className="font-semibold text-[--color-ink]">{label}</span>
      <span id={hintId} className="text-sm text-[--color-muted]">{hint}</span>
      <span
        id={privacyId}
        className="mt-1 inline-flex items-center gap-1.5 text-xs text-[--color-muted]"
      >
        <ShieldCheck className="h-3.5 w-3.5 text-[--color-brand]" aria-hidden />
        {privacyText}
      </span>
      <input
        id={inputId}
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        aria-describedby={`${hintId} ${privacyId}`}
        onChange={(e) => handle(e.currentTarget.files)}
        className="sr-only"
      />
    </label>
  );
}
```

Two important changes:
1. `htmlFor={inputId}` + matching `id` on `<input>` makes `getByLabelText` work and gives screen readers a real label.
2. Privacy line is rendered inside the dropzone, satisfying the brief's "privacy message directly inside upload area".

- [ ] **Step 4: Run test — expect pass**

```bash
npx vitest run tests/DropZone.test.tsx
```

Expected: PASS, 3 tests.

- [ ] **Step 5: Sanity-check existing tool tests still pass**

```bash
npx vitest run
```

Expected: previously-passing tests still pass.

- [ ] **Step 6: Commit**

```bash
git add src/components/tools/primitives/DropZone.tsx tests/DropZone.test.tsx
git commit -m "feat(tools): inline privacy line + a11y label in DropZone"
```

---

### Task 5: `SuccessState` primitive

**Files:**
- Create: `src/components/tools/primitives/SuccessState.tsx`
- Create: `tests/SuccessState.test.tsx`

- [ ] **Step 1: Write failing test**

```tsx
// tests/SuccessState.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SuccessState } from "@/components/tools/primitives/SuccessState";

describe("SuccessState", () => {
  it("shows filename, size, and a Start over button", async () => {
    const onReset = vi.fn();
    render(
      <SuccessState
        title="Your PDF is ready"
        filename="merged.pdf"
        sizeBytes={1234567}
        onReset={onReset}
      />,
    );
    expect(screen.getByText(/Your PDF is ready/i)).toBeInTheDocument();
    expect(screen.getByText("merged.pdf")).toBeInTheDocument();
    expect(screen.getByText(/1\.2 MB/)).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /Start over/i }));
    expect(onReset).toHaveBeenCalled();
  });

  it("renders related tool suggestions when provided", () => {
    render(
      <SuccessState
        title="Done"
        filename="x.pdf"
        sizeBytes={0}
        onReset={() => {}}
        related={[{ label: "Split a PDF", path: "/split-pdf" }]}
      />,
    );
    expect(screen.getByRole("link", { name: /Split a PDF/ })).toHaveAttribute(
      "href",
      "/split-pdf",
    );
  });

  it("emits a status announcement for assistive tech", () => {
    render(
      <SuccessState
        title="Your PDF is ready"
        filename="x.pdf"
        sizeBytes={0}
        onReset={() => {}}
      />,
    );
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx vitest run tests/SuccessState.test.tsx
```

Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```tsx
// src/components/tools/primitives/SuccessState.tsx
import Link from "next/link";
import { CheckCircle2, Download, RotateCcw } from "lucide-react";
import { formatBytes } from "@/lib/tools/validate";
import { StoreButtons } from "@/components/sections/StoreButtons";

export type RelatedToolLink = { label: string; path: string };

export function SuccessState({
  title,
  description,
  filename,
  sizeBytes,
  onReset,
  onDownloadAgain,
  related,
  appCta,
}: {
  title: string;
  description?: string;
  filename: string;
  sizeBytes: number;
  onReset: () => void;
  onDownloadAgain?: () => void;
  related?: RelatedToolLink[];
  appCta?: { heading: string; sub?: string };
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-2xl border border-[--color-border] bg-[--color-brand-soft] p-5 md:p-6"
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className="h-6 w-6 text-[--color-brand] shrink-0 mt-0.5" aria-hidden />
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-[--color-ink]">{title}</h3>
          {description ? (
            <p className="mt-1 text-sm text-[--color-muted]">{description}</p>
          ) : null}
          <p className="mt-3 text-sm text-[--color-ink]">
            <span className="font-semibold break-all">{filename}</span>
            {sizeBytes > 0 ? (
              <span className="text-[--color-muted]"> · {formatBytes(sizeBytes)}</span>
            ) : null}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {onDownloadAgain ? (
              <button
                type="button"
                onClick={onDownloadAgain}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold text-white bg-[--color-brand] hover:bg-[--color-brand-2]"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download again
              </button>
            ) : null}
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold text-[--color-ink] border border-[--color-border] bg-[--color-surface] hover:border-[--color-brand]"
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              Start over
            </button>
          </div>
        </div>
      </div>

      {related && related.length > 0 ? (
        <div className="mt-5 border-t border-[--color-border]/60 pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[--color-muted] mb-2">
            Try next
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {related.map((r) => (
              <li key={r.path}>
                <Link
                  href={r.path}
                  className="block rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-sm font-medium text-[--color-ink] hover:border-[--color-brand]"
                >
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {appCta ? (
        <div className="mt-5 border-t border-[--color-border]/60 pt-4">
          <p className="font-semibold text-[--color-ink]">{appCta.heading}</p>
          {appCta.sub ? (
            <p className="text-sm text-[--color-muted] mt-1">{appCta.sub}</p>
          ) : null}
          <div className="mt-3">
            <StoreButtons size="md" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
```

- [ ] **Step 4: Run test — expect pass**

```bash
npx vitest run tests/SuccessState.test.tsx
```

Expected: PASS, 3 tests.

- [ ] **Step 5: Commit**

```bash
git add src/components/tools/primitives/SuccessState.tsx tests/SuccessState.test.tsx
git commit -m "feat(tools): add SuccessState primitive with download/reset/related/app CTA"
```

---

### Task 6: `useToolFlow` hook

**Files:**
- Create: `src/components/tools/primitives/useToolFlow.ts`

- [ ] **Step 1: Implement**

```ts
// src/components/tools/primitives/useToolFlow.ts
"use client";

import { useCallback, useState } from "react";

export type ToolFlowSuccess = {
  filename: string;
  sizeBytes: number;
  blob: Blob;
};

export type ToolFlowState =
  | { status: "idle" }
  | { status: "busy"; message: string }
  | { status: "success"; success: ToolFlowSuccess }
  | { status: "error"; error: string; hint?: string };

export function useToolFlow() {
  const [state, setState] = useState<ToolFlowState>({ status: "idle" });

  const setBusy = useCallback(
    (message: string) => setState({ status: "busy", message }),
    [],
  );
  const setError = useCallback(
    (error: string, hint?: string) => setState({ status: "error", error, hint }),
    [],
  );
  const setSuccess = useCallback(
    (success: ToolFlowSuccess) => setState({ status: "success", success }),
    [],
  );
  const reset = useCallback(() => setState({ status: "idle" }), []);

  return { state, setBusy, setError, setSuccess, reset };
}
```

- [ ] **Step 2: Type-check passes**

```bash
npm run typecheck
```

Expected: exit 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/tools/primitives/useToolFlow.ts
git commit -m "feat(tools): add useToolFlow hook for idle/busy/success/error state"
```

---

### Task 7: Error categorization — `errors.ts` + expanded `ToolError`

**Files:**
- Create: `src/components/tools/primitives/errors.ts`
- Modify: `src/components/tools/primitives/ToolError.tsx`
- Create: `tests/errors.test.ts`
- Create: `tests/ToolError.test.tsx`

- [ ] **Step 1: Write failing test for `mapToolError`**

```ts
// tests/errors.test.ts
import { describe, it, expect } from "vitest";
import { mapToolError } from "@/components/tools/primitives/errors";

describe("mapToolError", () => {
  it("recognises a password-protected / corrupted PDF", () => {
    const r = mapToolError(new Error('"x.pdf" looks corrupted or password-protected.'));
    expect(r.kind).toBe("unreadable");
    expect(r.message).toMatch(/could not be opened/i);
    expect(r.hint).toMatch(/corrupted or password-protected/i);
  });

  it("recognises an invalid page range message", () => {
    const r = mapToolError(new Error('"abc" is not a valid page or range.'));
    expect(r.kind).toBe("invalid_range");
    expect(r.message).toMatch(/page range/i);
    expect(r.hint).toMatch(/1-3|2,4,6/i);
  });

  it("recognises out-of-memory / large file errors", () => {
    const r = mapToolError(new RangeError("Maximum call stack size exceeded"));
    expect(r.kind).toBe("memory");
    expect(r.message).toMatch(/too large/i);
  });

  it("falls back to a generic message for unknown errors", () => {
    const r = mapToolError(new Error("kaboom"));
    expect(r.kind).toBe("generic");
    expect(r.message).toBe("kaboom");
  });

  it("handles non-Error throwables", () => {
    const r = mapToolError("oops");
    expect(r.kind).toBe("generic");
    expect(r.message).toMatch(/something went wrong/i);
  });
});
```

- [ ] **Step 2: Write failing test for `ToolError`**

```tsx
// tests/ToolError.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToolError } from "@/components/tools/primitives/ToolError";

describe("ToolError", () => {
  it("renders nothing when message is null", () => {
    const { container } = render(<ToolError message={null} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders message and optional hint with role=alert", () => {
    render(<ToolError message="Bad input." hint="Try 1-3 or 2,4,6." />);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Bad input.");
    expect(alert).toHaveTextContent("Try 1-3 or 2,4,6.");
  });
});
```

- [ ] **Step 3: Run both tests — expect fail**

```bash
npx vitest run tests/errors.test.ts tests/ToolError.test.tsx
```

Expected: FAIL — `errors.ts` not found, `hint` prop not recognised.

- [ ] **Step 4: Implement `errors.ts`**

```ts
// src/components/tools/primitives/errors.ts
export type ToolErrorKind =
  | "unreadable"
  | "invalid_range"
  | "memory"
  | "unsupported"
  | "empty"
  | "too_many"
  | "generic";

export type MappedError = {
  kind: ToolErrorKind;
  message: string;
  hint?: string;
};

export function mapToolError(err: unknown): MappedError {
  const raw = err instanceof Error ? err.message : "";

  if (/password-?protected|corrupted/i.test(raw)) {
    return {
      kind: "unreadable",
      message: "This file could not be opened.",
      hint: "It may be corrupted or password-protected. Unlock or repair it, then try again.",
    };
  }
  if (/page or range|page range|values between/i.test(raw)) {
    return {
      kind: "invalid_range",
      message: "Please enter a valid page range.",
      hint: "Use values like 1-3 or 2,4,6.",
    };
  }
  if (
    err instanceof RangeError ||
    /out of memory|stack size|allocation failed/i.test(raw)
  ) {
    return {
      kind: "memory",
      message: "This file may be too large for browser processing.",
      hint: "Try a smaller PDF, or split it into pieces first.",
    };
  }
  if (/not a (PDF|supported image)/i.test(raw)) {
    return { kind: "unsupported", message: raw };
  }
  if (/Add up to/i.test(raw)) {
    return { kind: "too_many", message: raw };
  }
  if (/Add at least/i.test(raw)) {
    return { kind: "empty", message: raw };
  }

  if (raw) return { kind: "generic", message: raw };
  return {
    kind: "generic",
    message: "Something went wrong. Try again, or use a smaller file.",
  };
}
```

- [ ] **Step 5: Update `ToolError.tsx`**

```tsx
// src/components/tools/primitives/ToolError.tsx
import { AlertCircle } from "lucide-react";

export function ToolError({
  message,
  hint,
}: {
  message: string | null;
  hint?: string;
}) {
  if (!message) return null;
  return (
    <div
      role="alert"
      className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700"
    >
      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
      <div>
        <p className="font-medium">{message}</p>
        {hint ? <p className="mt-0.5 text-red-600/90">{hint}</p> : null}
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Run tests — expect pass**

```bash
npx vitest run tests/errors.test.ts tests/ToolError.test.tsx
```

Expected: PASS, 5 + 2 tests.

- [ ] **Step 7: Verify nothing else broke**

```bash
npx vitest run
```

Expected: all tests pass.

- [ ] **Step 8: Commit**

```bash
git add src/components/tools/primitives/errors.ts src/components/tools/primitives/ToolError.tsx tests/errors.test.ts tests/ToolError.test.tsx
git commit -m "feat(tools): categorise tool errors with mapToolError + render hint in ToolError"
```

---

### Task 8: Option primitives — `OptionGroup`, `OptionRange`, `OptionField`

**Files:**
- Create: `src/components/tools/primitives/OptionGroup.tsx`
- Create: `src/components/tools/primitives/OptionRange.tsx`
- Create: `src/components/tools/primitives/OptionField.tsx`

These three replace the current ad-hoc option UIs in `RotatePdfTool` (segmented buttons), `PdfToImagesTool` (segmented + range), and `WatermarkPdfTool` (range + text). Pulling them out keeps each tool component focused on its PDF logic.

- [ ] **Step 1: Implement `OptionGroup` (segmented choice)**

```tsx
// src/components/tools/primitives/OptionGroup.tsx
"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

export type OptionItem<T extends string> = { value: T; label: string };

export function OptionGroup<T extends string>({
  label,
  value,
  options,
  onChange,
  className,
}: {
  label: string;
  value: T;
  options: ReadonlyArray<OptionItem<T>>;
  onChange: (next: T) => void;
  className?: string;
}) {
  const groupId = useId();
  return (
    <fieldset className={cn(className)} aria-labelledby={groupId}>
      <legend
        id={groupId}
        className="block text-sm font-semibold text-[--color-ink] mb-2"
      >
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt.value)}
              className={cn(
                "px-4 py-2 rounded-xl border font-semibold text-sm min-h-[44px]",
                active
                  ? "border-[--color-brand] bg-[--color-brand] text-white"
                  : "border-[--color-border] bg-[--color-surface] text-[--color-ink] hover:border-[--color-brand-2]",
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
```

`min-h-[44px]` is the iOS HIG minimum tap target — fixes the brief's "large tap targets" mobile requirement.

- [ ] **Step 2: Implement `OptionRange`**

```tsx
// src/components/tools/primitives/OptionRange.tsx
"use client";

import { useId } from "react";

export function OptionRange({
  label,
  valueLabel,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (next: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-[--color-ink] mb-2">
        {label}: <span className="text-[--color-muted] font-normal">{valueLabel}</span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.currentTarget.value))}
        className="w-full accent-[--color-brand]"
      />
    </div>
  );
}
```

- [ ] **Step 3: Implement `OptionField`**

```tsx
// src/components/tools/primitives/OptionField.tsx
"use client";

import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function OptionField({
  label,
  hint,
  className,
  ...rest
}: { label: string; hint?: string; className?: string } & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  const hintId = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-[--color-ink] mb-2">
        {label}
      </label>
      <input
        id={id}
        aria-describedby={hint ? hintId : undefined}
        {...rest}
        className={cn(
          "w-full rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-[--color-ink] focus:outline-none focus:border-[--color-brand]",
        )}
      />
      {hint ? (
        <p id={hintId} className="mt-1 text-xs text-[--color-muted]">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
```

- [ ] **Step 4: Type-check**

```bash
npm run typecheck
```

Expected: exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/components/tools/primitives/OptionGroup.tsx src/components/tools/primitives/OptionRange.tsx src/components/tools/primitives/OptionField.tsx
git commit -m "feat(tools): add OptionGroup/OptionRange/OptionField primitives with a11y + 44px tap targets"
```

---

## Phase 2 — Per-tool overhauls

Each tool task: write a behavior test for the visible UX, then refactor the tool component to consume the new primitives, then add a step indicator + success state. Each task ends with a commit.

The shape every tool follows after Phase 2:

```tsx
<ToolShell title=... subtitle=...>
  <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
  {state.status === "success" ? (
    <SuccessState ... />
  ) : (
    <>
      <DropZone ... />
      {/* file list */}
      {/* options (only when there's a file) */}
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton ... />
        {/* secondary actions */}
      </div>
      <ProcessingStatus message={state.status === "busy" ? state.message : null} />
      <ToolError
        message={state.status === "error" ? state.error : null}
        hint={state.status === "error" ? state.hint : undefined}
      />
    </>
  )}
</ToolShell>
```

`current` is derived from state:
- 0 if no file/files yet (or item count too low for merge);
- 1 if files present and not in success state;
- 2 if `state.status === "success"`.

### Task 9: `ImageToPdfTool` overhaul (with new options)

**Files:**
- Modify: `src/components/tools/ImageToPdfTool.tsx`
- Create: `tests/ImageToPdfTool.test.tsx`

This is the most-changed tool because the brief introduces new options that change the PDF math (page size, orientation, image fit, margins). Existing behavior was "page-per-image, sized to image". We need to keep that as the default ("Auto" page size + "Auto" orientation + "Fit page" + "None" margin), then add four user-selectable options.

- [ ] **Step 1: Write failing test**

```tsx
// tests/ImageToPdfTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageToPdfTool } from "@/components/tools/ImageToPdfTool";

describe("ImageToPdfTool", () => {
  it("disables Create PDF until images are added", () => {
    render(<ImageToPdfTool />);
    const btn = screen.getByRole("button", { name: /Create PDF/i });
    expect(btn).toBeDisabled();
  });

  it("renders the 3-step indicator with Upload active by default", () => {
    render(<ImageToPdfTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("shows file list with reorder + remove after a valid image is added", async () => {
    render(<ImageToPdfTool />);
    const file = new File(["x"], "a.png", { type: "image/png" });
    const input = screen.getByLabelText(/Drop images here/i) as HTMLInputElement;
    await userEvent.upload(input, file);
    expect(screen.getByText("a.png")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Remove a\.png/i })).toBeInTheDocument();
  });

  it("shows page size, orientation, image fit, and margin options once a file is added", async () => {
    render(<ImageToPdfTool />);
    const file = new File(["x"], "a.png", { type: "image/png" });
    const input = screen.getByLabelText(/Drop images here/i) as HTMLInputElement;
    await userEvent.upload(input, file);
    expect(screen.getByText(/Page size/i)).toBeInTheDocument();
    expect(screen.getByText(/Orientation/i)).toBeInTheDocument();
    expect(screen.getByText(/Image fit/i)).toBeInTheDocument();
    expect(screen.getByText(/Margin/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test — expect fail**

```bash
npx vitest run tests/ImageToPdfTool.test.tsx
```

Expected: FAIL — step labels and option labels missing.

- [ ] **Step 3: Replace `ImageToPdfTool.tsx`**

```tsx
// src/components/tools/ImageToPdfTool.tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { StepIndicator } from "@/components/tools/primitives/StepIndicator";
import { SuccessState } from "@/components/tools/primitives/SuccessState";
import { ProcessingStatus } from "@/components/tools/primitives/ProcessingStatus";
import { OptionGroup } from "@/components/tools/primitives/OptionGroup";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertImage, MAX_FILES } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { uuid } from "@/lib/tools/uuid";

type Item = { id: string; file: File };

type PageSize = "auto" | "a4" | "letter";
type Orientation = "auto" | "portrait" | "landscape";
type Fit = "fit" | "fill";
type Margin = "none" | "small" | "medium";

const PAGE_SIZES: Record<Exclude<PageSize, "auto">, { w: number; h: number }> = {
  // 72 dpi PDF points
  a4: { w: 595.28, h: 841.89 },
  letter: { w: 612, h: 792 },
};

const MARGINS: Record<Margin, number> = {
  none: 0,
  small: 24,
  medium: 48,
};

export function ImageToPdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [pageSize, setPageSize] = useState<PageSize>("auto");
  const [orientation, setOrientation] = useState<Orientation>("auto");
  const [fit, setFit] = useState<Fit>("fit");
  const [margin, setMargin] = useState<Margin>("none");
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : items.length > 0 ? 1 : 0;

  const addFiles = (files: File[]) => {
    try {
      for (const f of files) assertImage(f);
      const next = [...items, ...files.map((file) => ({ id: uuid(), file }))];
      if (next.length > MAX_FILES) {
        throw new Error(`Add up to ${MAX_FILES} images at a time.`);
      }
      setItems(next);
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  const remove = (id: string) => setItems((xs) => xs.filter((x) => x.id !== id));
  const move = (id: string, dir: -1 | 1) =>
    setItems((xs) => {
      const i = xs.findIndex((x) => x.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= xs.length) return xs;
      const next = xs.slice();
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

  const startOver = () => {
    setItems([]);
    resetFlow();
  };

  const create = async () => {
    if (items.length === 0) {
      setError("Add at least one image first.");
      return;
    }
    setBusy("Creating your PDF…");
    try {
      const { PDFDocument } = await loadPdfLib();
      const pdf = await PDFDocument.create();
      for (const { file } of items) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        let image;
        if (file.type === "image/png" || /\.png$/i.test(file.name)) {
          image = await pdf.embedPng(bytes);
        } else if (file.type === "image/webp" || /\.webp$/i.test(file.name)) {
          const png = await webpToPng(file);
          image = await pdf.embedPng(png);
        } else {
          image = await pdf.embedJpg(bytes);
        }
        const { width: pageW, height: pageH } = resolvePageSize(
          pageSize,
          orientation,
          image.width,
          image.height,
        );
        const m = MARGINS[margin];
        const innerW = pageW - m * 2;
        const innerH = pageH - m * 2;
        const { w, h, x, y } = layoutImage(image.width, image.height, innerW, innerH, fit);
        const page = pdf.addPage([pageW, pageH]);
        page.drawImage(image, { x: x + m, y: y + m, width: w, height: h });
      }
      const out = await pdf.save();
      const blob = new Blob([new Uint8Array(out)], { type: "application/pdf" });
      const filename = "images.pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Image to PDF"
      subtitle="Upload JPG, PNG, or WebP images and combine them into one PDF."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your PDF is ready"
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "Merge two PDFs", path: "/merge-pdf" },
            { label: "Add a watermark", path: "/add-watermark-to-pdf" },
          ]}
          appCta={{
            heading: "Need PDF tools on your phone?",
            sub: "PDF Editor for iPhone and Android works offline too.",
          }}
        />
      ) : (
        <>
          <DropZone
            accept="image/jpeg,image/png,image/webp"
            multiple
            onFiles={addFiles}
            label="Drop images here, or click to choose"
            hint="JPG, PNG or WebP · up to 100 MB each"
          />

          {items.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {items.map((it, idx) => (
                <FileChip
                  key={it.id}
                  name={it.file.name}
                  size={it.file.size}
                  onRemove={() => remove(it.id)}
                  onMoveUp={idx > 0 ? () => move(it.id, -1) : undefined}
                  onMoveDown={idx < items.length - 1 ? () => move(it.id, 1) : undefined}
                />
              ))}
            </ul>
          ) : null}

          {items.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <OptionGroup<PageSize>
                label="Page size"
                value={pageSize}
                onChange={setPageSize}
                options={[
                  { value: "auto", label: "Auto" },
                  { value: "a4", label: "A4" },
                  { value: "letter", label: "Letter" },
                ]}
              />
              <OptionGroup<Orientation>
                label="Orientation"
                value={orientation}
                onChange={setOrientation}
                options={[
                  { value: "auto", label: "Auto" },
                  { value: "portrait", label: "Portrait" },
                  { value: "landscape", label: "Landscape" },
                ]}
              />
              <OptionGroup<Fit>
                label="Image fit"
                value={fit}
                onChange={setFit}
                options={[
                  { value: "fit", label: "Fit page" },
                  { value: "fill", label: "Fill page" },
                ]}
              />
              <OptionGroup<Margin>
                label="Margin"
                value={margin}
                onChange={setMargin}
                options={[
                  { value: "none", label: "None" },
                  { value: "small", label: "Small" },
                  { value: "medium", label: "Medium" },
                ]}
              />
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={create}
              disabled={items.length === 0}
            >
              {state.status === "busy" ? "Creating PDF…" : "Create PDF"}
            </ProcessButton>
            {items.length > 0 ? (
              <button
                type="button"
                onClick={() => setItems([])}
                className="text-sm font-semibold text-[--color-muted] hover:text-[--color-ink]"
              >
                Clear all
              </button>
            ) : null}
          </div>

          <ProcessingStatus
            message={state.status === "busy" ? state.message : null}
          />
          <ToolError
            message={state.status === "error" ? state.error : null}
            hint={state.status === "error" ? state.hint : undefined}
          />
        </>
      )}
    </ToolShell>
  );
}

function resolvePageSize(
  size: PageSize,
  orientation: Orientation,
  imgW: number,
  imgH: number,
): { width: number; height: number } {
  const base =
    size === "auto"
      ? { w: imgW, h: imgH }
      : PAGE_SIZES[size];

  let { w, h } = base;
  if (orientation === "portrait" && w > h) [w, h] = [h, w];
  if (orientation === "landscape" && h > w) [w, h] = [h, w];
  if (orientation === "auto" && size !== "auto") {
    if (imgW > imgH && h > w) [w, h] = [h, w];
    if (imgH > imgW && w > h) [w, h] = [h, w];
  }
  return { width: w, height: h };
}

function layoutImage(
  imgW: number,
  imgH: number,
  boxW: number,
  boxH: number,
  fit: Fit,
): { w: number; h: number; x: number; y: number } {
  const scale =
    fit === "fit"
      ? Math.min(boxW / imgW, boxH / imgH)
      : Math.max(boxW / imgW, boxH / imgH);
  const w = imgW * scale;
  const h = imgH * scale;
  return { w, h, x: (boxW - w) / 2, y: (boxH - h) / 2 };
}

async function webpToPng(file: File): Promise<Uint8Array> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported in this browser.");
  ctx.drawImage(bitmap, 0, 0);
  const blob: Blob = await new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Failed to encode PNG."))), "image/png"),
  );
  return new Uint8Array(await blob.arrayBuffer());
}
```

Note: `loadPdfLib` is mocked in tests via dynamic-import — the existing test setup doesn't load real `pdf-lib` because tests don't actually trigger `create()`.

- [ ] **Step 4: Run tool tests + sanity-check rest**

```bash
npx vitest run tests/ImageToPdfTool.test.tsx
npx vitest run
```

Expected: PASS, all green.

- [ ] **Step 5: Commit**

```bash
git add src/components/tools/ImageToPdfTool.tsx tests/ImageToPdfTool.test.tsx
git commit -m "feat(image-to-pdf): step indicator, success state, page-size/orientation/fit/margin options"
```

---

### Task 10: `MergePdfTool` overhaul

**Files:**
- Modify: `src/components/tools/MergePdfTool.tsx`
- Create: `tests/MergePdfTool.test.tsx`

- [ ] **Step 1: Write failing test**

```tsx
// tests/MergePdfTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MergePdfTool } from "@/components/tools/MergePdfTool";

describe("MergePdfTool", () => {
  it("Merge button is disabled until at least 2 PDFs are added", async () => {
    render(<MergePdfTool />);
    const btn = screen.getByRole("button", { name: /Merge PDFs/i });
    expect(btn).toBeDisabled();

    const input = screen.getByLabelText(/Drop PDFs here/i) as HTMLInputElement;
    const a = new File(["1"], "a.pdf", { type: "application/pdf" });
    await userEvent.upload(input, a);
    expect(btn).toBeDisabled(); // still 1 file

    const b = new File(["2"], "b.pdf", { type: "application/pdf" });
    await userEvent.upload(input, b);
    expect(btn).not.toBeDisabled();
  });

  it("renders the 3-step indicator", () => {
    render(<MergePdfTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("supports reorder via Move up/down buttons", async () => {
    render(<MergePdfTool />);
    const input = screen.getByLabelText(/Drop PDFs here/i) as HTMLInputElement;
    await userEvent.upload(input, [
      new File(["1"], "a.pdf", { type: "application/pdf" }),
      new File(["2"], "b.pdf", { type: "application/pdf" }),
    ]);
    const moveUp = screen.getByRole("button", { name: /Move b\.pdf up/i });
    await userEvent.click(moveUp);
    const items = screen.getAllByRole("listitem");
    expect(items[0]).toHaveTextContent("b.pdf");
  });
});
```

- [ ] **Step 2: Run test — expect fail**

```bash
npx vitest run tests/MergePdfTool.test.tsx
```

Expected: FAIL — step indicator strings missing.

- [ ] **Step 3: Replace `MergePdfTool.tsx`**

```tsx
// src/components/tools/MergePdfTool.tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { StepIndicator } from "@/components/tools/primitives/StepIndicator";
import { SuccessState } from "@/components/tools/primitives/SuccessState";
import { ProcessingStatus } from "@/components/tools/primitives/ProcessingStatus";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf, MAX_FILES } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { uuid } from "@/lib/tools/uuid";

type Item = { id: string; file: File };

export function MergePdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : items.length >= 2 ? 1 : 0;

  const addFiles = (files: File[]) => {
    try {
      for (const f of files) assertPdf(f);
      const next = [...items, ...files.map((file) => ({ id: uuid(), file }))];
      if (next.length > MAX_FILES) throw new Error(`Add up to ${MAX_FILES} PDFs at a time.`);
      setItems(next);
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  const remove = (id: string) => setItems((xs) => xs.filter((x) => x.id !== id));
  const move = (id: string, dir: -1 | 1) =>
    setItems((xs) => {
      const i = xs.findIndex((x) => x.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= xs.length) return xs;
      const next = xs.slice();
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

  const startOver = () => {
    setItems([]);
    resetFlow();
  };

  const merge = async () => {
    if (items.length < 2) {
      setError("Add at least two PDFs to merge.");
      return;
    }
    setBusy("Combining PDFs…");
    try {
      const { PDFDocument } = await loadPdfLib();
      const out = await PDFDocument.create();
      for (const { file } of items) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const src = await PDFDocument.load(bytes, { ignoreEncryption: false }).catch(() => {
          throw new Error(`"${file.name}" looks corrupted or password-protected.`);
        });
        const copied = await out.copyPages(src, src.getPageIndices());
        for (const p of copied) out.addPage(p);
      }
      const bytes = await out.save();
      const blob = new Blob([new Uint8Array(bytes)], { type: "application/pdf" });
      const filename = "merged.pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Merge PDFs"
      subtitle="Upload two or more PDF files and combine them into one document."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your merged PDF is ready"
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "Split a PDF", path: "/split-pdf" },
            { label: "Rotate pages", path: "/rotate-pdf" },
          ]}
          appCta={{
            heading: "Need PDF tools on your phone?",
            sub: "PDF Editor for iPhone and Android handles merge and split too.",
          }}
        />
      ) : (
        <>
          <DropZone
            accept="application/pdf"
            multiple
            onFiles={addFiles}
            label="Drop PDFs here, or click to choose"
            hint="PDF · up to 100 MB each"
          />

          {items.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {items.map((it, idx) => (
                <FileChip
                  key={it.id}
                  name={it.file.name}
                  size={it.file.size}
                  onRemove={() => remove(it.id)}
                  onMoveUp={idx > 0 ? () => move(it.id, -1) : undefined}
                  onMoveDown={idx < items.length - 1 ? () => move(it.id, 1) : undefined}
                />
              ))}
            </ul>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={merge}
              disabled={items.length < 2}
            >
              {state.status === "busy" ? "Merging…" : "Merge PDFs"}
            </ProcessButton>
            {items.length > 0 ? (
              <button
                type="button"
                onClick={() => setItems([])}
                className="text-sm font-semibold text-[--color-muted] hover:text-[--color-ink]"
              >
                Clear all
              </button>
            ) : null}
          </div>

          <ProcessingStatus
            message={state.status === "busy" ? state.message : null}
          />
          <ToolError
            message={state.status === "error" ? state.error : null}
            hint={state.status === "error" ? state.hint : undefined}
          />
        </>
      )}
    </ToolShell>
  );
}
```

- [ ] **Step 4: Run tests**

```bash
npx vitest run tests/MergePdfTool.test.tsx
npx vitest run
```

Expected: PASS, all green.

- [ ] **Step 5: Commit**

```bash
git add src/components/tools/MergePdfTool.tsx tests/MergePdfTool.test.tsx
git commit -m "feat(merge-pdf): step indicator, success state, error categorisation"
```

---

### Task 11: `SplitPdfTool` overhaul

**Files:**
- Modify: `src/components/tools/SplitPdfTool.tsx`
- Create: `tests/SplitPdfTool.test.tsx`

- [ ] **Step 1: Write failing test**

```tsx
// tests/SplitPdfTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SplitPdfTool } from "@/components/tools/SplitPdfTool";

describe("SplitPdfTool", () => {
  it("Extract pages button is disabled with no file", () => {
    render(<SplitPdfTool />);
    expect(screen.getByRole("button", { name: /Extract pages/i })).toBeDisabled();
  });

  it("renders the 3-step indicator", () => {
    render(<SplitPdfTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("explains the page-range syntax in helper text", () => {
    render(<SplitPdfTool />);
    expect(screen.getByText(/1-3 or 2,4,6/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test — expect fail**

```bash
npx vitest run tests/SplitPdfTool.test.tsx
```

Expected: FAIL — helper text not present yet (placeholder only).

- [ ] **Step 3: Replace `SplitPdfTool.tsx`**

```tsx
// src/components/tools/SplitPdfTool.tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { StepIndicator } from "@/components/tools/primitives/StepIndicator";
import { SuccessState } from "@/components/tools/primitives/SuccessState";
import { ProcessingStatus } from "@/components/tools/primitives/ProcessingStatus";
import { OptionField } from "@/components/tools/primitives/OptionField";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { parsePageRange } from "@/lib/tools/pageRange";

export function SplitPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [range, setRange] = useState("");
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : file ? 1 : 0;

  const onFiles = async (files: File[]) => {
    setPageCount(null);
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      const { PDFDocument } = await loadPdfLib();
      const bytes = new Uint8Array(await f.arrayBuffer());
      const doc = await PDFDocument.load(bytes).catch(() => {
        throw new Error("Could not read this PDF. It may be corrupted or password-protected.");
      });
      setFile(f);
      setPageCount(doc.getPageCount());
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  const startOver = () => {
    setFile(null);
    setPageCount(null);
    setRange("");
    resetFlow();
  };

  const split = async () => {
    if (!file || !pageCount) return;
    let pages: number[];
    try {
      pages = parsePageRange(range, pageCount);
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
      return;
    }
    setBusy("Extracting pages…");
    try {
      const { PDFDocument } = await loadPdfLib();
      const bytes = new Uint8Array(await file.arrayBuffer());
      const src = await PDFDocument.load(bytes);
      const out = await PDFDocument.create();
      const copied = await out.copyPages(src, pages.map((p) => p - 1));
      for (const p of copied) out.addPage(p);
      const result = await out.save();
      const blob = new Blob([new Uint8Array(result)], { type: "application/pdf" });
      const base = file.name.replace(/\.pdf$/i, "");
      const filename = `${base}-pages-${pages[0]}-to-${pages[pages.length - 1]}.pdf`;
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Split PDF"
      subtitle="Upload a PDF and select the page range you want to export."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your extracted PDF is ready"
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "Merge PDFs", path: "/merge-pdf" },
            { label: "Rotate pages", path: "/rotate-pdf" },
          ]}
        />
      ) : (
        <>
          <DropZone
            accept="application/pdf"
            onFiles={onFiles}
            label="Drop a PDF here, or click to choose"
            hint="One PDF · up to 100 MB"
          />

          {file ? (
            <ul className="mt-4 space-y-2">
              <FileChip
                name={file.name}
                size={file.size}
                onRemove={() => {
                  setFile(null);
                  setPageCount(null);
                  setRange("");
                }}
              />
            </ul>
          ) : null}

          {pageCount ? (
            <div className="mt-5">
              <OptionField
                label={`Pages to keep (${pageCount} total)`}
                hint="Examples: 1-3 or 2,4,6 or 1-3,5,8-10"
                type="text"
                value={range}
                onChange={(e) => setRange(e.currentTarget.value)}
                placeholder="e.g. 1-3 or 2,4,6"
                inputMode="numeric"
              />
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={split}
              disabled={!file || !range.trim()}
            >
              {state.status === "busy" ? "Extracting…" : "Extract pages"}
            </ProcessButton>
          </div>

          <ProcessingStatus
            message={state.status === "busy" ? state.message : null}
          />
          <ToolError
            message={state.status === "error" ? state.error : null}
            hint={state.status === "error" ? state.hint : undefined}
          />
        </>
      )}
    </ToolShell>
  );
}
```

The `Examples: 1-3 or 2,4,6 or 1-3,5,8-10` hint text below the input satisfies the brief's "examples: '1-3' or '2,4,6'".

- [ ] **Step 4: Run tests**

```bash
npx vitest run tests/SplitPdfTool.test.tsx
npx vitest run
```

Expected: PASS, all green.

- [ ] **Step 5: Commit**

```bash
git add src/components/tools/SplitPdfTool.tsx tests/SplitPdfTool.test.tsx
git commit -m "feat(split-pdf): step indicator, success state, range examples in helper text"
```

---

### Task 12: `RotatePdfTool` overhaul

**Files:**
- Modify: `src/components/tools/RotatePdfTool.tsx`
- Create: `tests/RotatePdfTool.test.tsx`

The current implementation has two a11y issues to fix while we're here:
1. Both `<input type="radio">` elements share the same default name (none) so they don't form a group — fix with `name="rotate-scope"`.
2. The radios have no `htmlFor` linking — wrap each in `<label>` so a click on the text toggles the input.

- [ ] **Step 1: Write failing test**

```tsx
// tests/RotatePdfTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RotatePdfTool } from "@/components/tools/RotatePdfTool";

describe("RotatePdfTool", () => {
  it("renders the 3-step indicator", () => {
    render(<RotatePdfTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("Rotate button is disabled until a file is added", () => {
    render(<RotatePdfTool />);
    expect(screen.getByRole("button", { name: /Rotate PDF/i })).toBeDisabled();
  });
});
```

- [ ] **Step 2: Run test — expect fail**

Expected: FAIL — step indicator labels missing.

- [ ] **Step 3: Replace `RotatePdfTool.tsx`**

```tsx
// src/components/tools/RotatePdfTool.tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { StepIndicator } from "@/components/tools/primitives/StepIndicator";
import { SuccessState } from "@/components/tools/primitives/SuccessState";
import { ProcessingStatus } from "@/components/tools/primitives/ProcessingStatus";
import { OptionGroup } from "@/components/tools/primitives/OptionGroup";
import { OptionField } from "@/components/tools/primitives/OptionField";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { parsePageRange } from "@/lib/tools/pageRange";

type Angle = "90" | "180" | "270";
type Scope = "all" | "some";

export function RotatePdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [angle, setAngle] = useState<Angle>("90");
  const [scope, setScope] = useState<Scope>("all");
  const [range, setRange] = useState("");
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : file ? 1 : 0;

  const onFiles = async (files: File[]) => {
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      const { PDFDocument } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await f.arrayBuffer())).catch(() => {
        throw new Error("Could not read this PDF. It may be corrupted or password-protected.");
      });
      setFile(f);
      setPageCount(doc.getPageCount());
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  const startOver = () => {
    setFile(null);
    setPageCount(null);
    setRange("");
    setScope("all");
    setAngle("90");
    resetFlow();
  };

  const run = async () => {
    if (!file || !pageCount) return;
    setBusy("Rotating pages…");
    try {
      const { PDFDocument, degrees } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await file.arrayBuffer()));
      const indices =
        scope === "all"
          ? doc.getPageIndices()
          : parsePageRange(range, pageCount).map((p) => p - 1);
      const angleNum = Number(angle);
      for (const i of indices) {
        const page = doc.getPage(i);
        const current = page.getRotation().angle;
        page.setRotation(degrees((current + angleNum) % 360));
      }
      const out = await doc.save();
      const blob = new Blob([new Uint8Array(out)], { type: "application/pdf" });
      const filename = file.name.replace(/\.pdf$/i, "") + "-rotated.pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Rotate PDF"
      subtitle="Rotate all pages or selected pages, then download a corrected PDF."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your rotated PDF is ready"
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "Split a PDF", path: "/split-pdf" },
            { label: "Add a watermark", path: "/add-watermark-to-pdf" },
          ]}
        />
      ) : (
        <>
          <DropZone
            accept="application/pdf"
            onFiles={onFiles}
            label="Drop a PDF here, or click to choose"
            hint="One PDF · up to 100 MB"
          />

          {file ? (
            <ul className="mt-4 space-y-2">
              <FileChip
                name={file.name}
                size={file.size}
                onRemove={() => {
                  setFile(null);
                  setPageCount(null);
                  setRange("");
                }}
              />
            </ul>
          ) : null}

          {pageCount ? (
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <OptionGroup<Angle>
                label="Rotation"
                value={angle}
                onChange={setAngle}
                options={[
                  { value: "90", label: "90°" },
                  { value: "180", label: "180°" },
                  { value: "270", label: "270°" },
                ]}
              />
              <OptionGroup<Scope>
                label="Apply to"
                value={scope}
                onChange={setScope}
                options={[
                  { value: "all", label: "All pages" },
                  { value: "some", label: "Some pages" },
                ]}
              />
              {scope === "some" ? (
                <div className="md:col-span-2">
                  <OptionField
                    label="Pages to rotate"
                    hint="Examples: 1-3 or 2,4,6"
                    type="text"
                    value={range}
                    onChange={(e) => setRange(e.currentTarget.value)}
                    placeholder="e.g. 1,3-5"
                    inputMode="numeric"
                  />
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={run}
              disabled={!file || (scope === "some" && !range.trim())}
            >
              {state.status === "busy" ? "Rotating…" : "Rotate PDF"}
            </ProcessButton>
          </div>

          <ProcessingStatus
            message={state.status === "busy" ? state.message : null}
          />
          <ToolError
            message={state.status === "error" ? state.error : null}
            hint={state.status === "error" ? state.hint : undefined}
          />
        </>
      )}
    </ToolShell>
  );
}
```

- [ ] **Step 4: Run tests**

```bash
npx vitest run tests/RotatePdfTool.test.tsx
npx vitest run
```

Expected: PASS, all green.

- [ ] **Step 5: Commit**

```bash
git add src/components/tools/RotatePdfTool.tsx tests/RotatePdfTool.test.tsx
git commit -m "feat(rotate-pdf): step indicator, success state, OptionGroup-based rotation/scope, accessible labels"
```

---

### Task 13: `PdfToImagesTool` overhaul (with quality + page range)

**Files:**
- Modify: `src/components/tools/PdfToImagesTool.tsx`
- Create: `tests/PdfToImagesTool.test.tsx`

The brief asks for a JPEG quality slider that only appears when JPEG is selected, plus an optional page range. Existing behavior renders all pages — keep that as the default.

- [ ] **Step 1: Write failing test**

```tsx
// tests/PdfToImagesTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PdfToImagesTool } from "@/components/tools/PdfToImagesTool";

describe("PdfToImagesTool", () => {
  it("renders the 3-step indicator", () => {
    render(<PdfToImagesTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("Export images is disabled until a file is added", () => {
    render(<PdfToImagesTool />);
    expect(screen.getByRole("button", { name: /Export images/i })).toBeDisabled();
  });

  it("hides JPEG quality option when format is PNG, shows it when JPEG", async () => {
    render(<PdfToImagesTool />);
    expect(screen.queryByText(/JPEG quality/i)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole("radio", { name: /JPEG/i }));
    expect(screen.getByText(/JPEG quality/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test — expect fail**

Expected: FAIL — JPEG quality copy missing, options not using `OptionGroup` (no `role=radio`).

- [ ] **Step 3: Replace `PdfToImagesTool.tsx`**

```tsx
// src/components/tools/PdfToImagesTool.tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { StepIndicator } from "@/components/tools/primitives/StepIndicator";
import { SuccessState } from "@/components/tools/primitives/SuccessState";
import { ProcessingStatus } from "@/components/tools/primitives/ProcessingStatus";
import { OptionGroup } from "@/components/tools/primitives/OptionGroup";
import { OptionRange } from "@/components/tools/primitives/OptionRange";
import { OptionField } from "@/components/tools/primitives/OptionField";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfJs } from "@/lib/tools/pdfjs";
import { parsePageRange } from "@/lib/tools/pageRange";

type Format = "png" | "jpeg";

export function PdfToImagesTool() {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<Format>("png");
  const [scale, setScale] = useState(2);
  const [quality, setQuality] = useState(0.92);
  const [range, setRange] = useState("");
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : file ? 1 : 0;

  const onFiles = (files: File[]) => {
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      setFile(f);
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  const startOver = () => {
    setFile(null);
    setRange("");
    resetFlow();
  };

  const run = async () => {
    if (!file) return;
    setBusy("Loading PDF…");
    try {
      const pdfjs = await loadPdfJs();
      const bytes = new Uint8Array(await file.arrayBuffer());
      const doc = await pdfjs.getDocument({ data: bytes }).promise;
      const base = file.name.replace(/\.pdf$/i, "");
      const totalPages = doc.numPages;
      const pages = range.trim()
        ? parsePageRange(range, totalPages)
        : Array.from({ length: totalPages }, (_, i) => i + 1);
      let lastBlob: Blob | null = null;
      let lastFilename = "";
      for (const i of pages) {
        setBusy(`Rendering page ${i} of ${totalPages}…`);
        const page = await doc.getPage(i);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas not supported.");
        await page.render({ canvasContext: ctx, viewport }).promise;
        const mime = format === "png" ? "image/png" : "image/jpeg";
        const ext = format === "png" ? "png" : "jpg";
        const q = format === "jpeg" ? quality : undefined;
        const blob: Blob = await new Promise((resolve, reject) =>
          canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new Error("Encoding failed."))),
            mime,
            q,
          ),
        );
        const filename = `${base}-page-${String(i).padStart(2, "0")}.${ext}`;
        downloadBlob(blob, filename, mime);
        lastBlob = blob;
        lastFilename = filename;
        await new Promise((r) => setTimeout(r, 100));
      }
      if (lastBlob) {
        setSuccess({
          filename: `${pages.length} image${pages.length === 1 ? "" : "s"} downloaded (last: ${lastFilename})`,
          sizeBytes: lastBlob.size,
          blob: lastBlob,
        });
      }
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="PDF to images"
      subtitle="Turn PDF pages into downloadable image files."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your images are ready"
          description="Each page downloaded as a separate file."
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          related={[
            { label: "Image to PDF — the reverse", path: "/image-to-pdf" },
            { label: "Split a PDF", path: "/split-pdf" },
          ]}
        />
      ) : (
        <>
          <DropZone
            accept="application/pdf"
            onFiles={onFiles}
            label="Drop a PDF here, or click to choose"
            hint="One PDF · up to 100 MB"
          />
          {file ? (
            <ul className="mt-4 space-y-2">
              <FileChip name={file.name} size={file.size} onRemove={() => setFile(null)} />
            </ul>
          ) : null}

          {file ? (
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <OptionGroup<Format>
                label="Format"
                value={format}
                onChange={setFormat}
                options={[
                  { value: "png", label: "PNG" },
                  { value: "jpeg", label: "JPEG" },
                ]}
              />
              <OptionRange
                label="Scale"
                valueLabel={`${scale}×`}
                min={1}
                max={3}
                step={0.5}
                value={scale}
                onChange={setScale}
              />
              {format === "jpeg" ? (
                <OptionRange
                  label="JPEG quality"
                  valueLabel={`${Math.round(quality * 100)}%`}
                  min={0.5}
                  max={1}
                  step={0.05}
                  value={quality}
                  onChange={setQuality}
                />
              ) : null}
              <OptionField
                label="Pages (optional)"
                hint="Leave blank to render all pages. Examples: 1-3 or 2,4,6"
                type="text"
                value={range}
                onChange={(e) => setRange(e.currentTarget.value)}
                placeholder="All pages"
                inputMode="numeric"
              />
            </div>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={run}
              disabled={!file}
            >
              {state.status === "busy" ? "Rendering…" : "Export images"}
            </ProcessButton>
          </div>

          <ProcessingStatus
            message={state.status === "busy" ? state.message : null}
          />
          <ToolError
            message={state.status === "error" ? state.error : null}
            hint={state.status === "error" ? state.hint : undefined}
          />
        </>
      )}
    </ToolShell>
  );
}
```

- [ ] **Step 4: Run tests**

```bash
npx vitest run tests/PdfToImagesTool.test.tsx
npx vitest run
```

Expected: PASS, all green.

- [ ] **Step 5: Commit**

```bash
git add src/components/tools/PdfToImagesTool.tsx tests/PdfToImagesTool.test.tsx
git commit -m "feat(pdf-to-images): step indicator, success, JPEG quality slider, optional page range"
```

---

### Task 14: `WatermarkPdfTool` overhaul (position + font size)

**Files:**
- Modify: `src/components/tools/WatermarkPdfTool.tsx`
- Create: `tests/WatermarkPdfTool.test.tsx`

- [ ] **Step 1: Write failing test**

```tsx
// tests/WatermarkPdfTool.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WatermarkPdfTool } from "@/components/tools/WatermarkPdfTool";

describe("WatermarkPdfTool", () => {
  it("renders the 3-step indicator", () => {
    render(<WatermarkPdfTool />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Adjust")).toBeInTheDocument();
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("Add watermark button is disabled until a file is added", () => {
    render(<WatermarkPdfTool />);
    expect(screen.getByRole("button", { name: /Add watermark/i })).toBeDisabled();
  });

  it("starts with watermark text 'CONFIDENTIAL' visible in the input", () => {
    render(<WatermarkPdfTool />);
    expect(screen.getByDisplayValue("CONFIDENTIAL")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test — expect fail**

Expected: FAIL — step indicator labels missing.

- [ ] **Step 3: Replace `WatermarkPdfTool.tsx`**

```tsx
// src/components/tools/WatermarkPdfTool.tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { StepIndicator } from "@/components/tools/primitives/StepIndicator";
import { SuccessState } from "@/components/tools/primitives/SuccessState";
import { ProcessingStatus } from "@/components/tools/primitives/ProcessingStatus";
import { OptionGroup } from "@/components/tools/primitives/OptionGroup";
import { OptionRange } from "@/components/tools/primitives/OptionRange";
import { OptionField } from "@/components/tools/primitives/OptionField";
import { useToolFlow } from "@/components/tools/primitives/useToolFlow";
import { mapToolError } from "@/components/tools/primitives/errors";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";

type Position = "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right";

export function WatermarkPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState(0.2);
  const [angleDeg, setAngleDeg] = useState(45);
  const [position, setPosition] = useState<Position>("center");
  const [fontSize, setFontSize] = useState(48);
  const { state, setBusy, setError, setSuccess, reset: resetFlow } = useToolFlow();

  const current: 0 | 1 | 2 =
    state.status === "success" ? 2 : file ? 1 : 0;

  const onFiles = (files: File[]) => {
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      setFile(f);
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  const startOver = () => {
    setFile(null);
    resetFlow();
  };

  const run = async () => {
    if (!file) return;
    if (!text.trim()) {
      setError("Watermark text can't be empty.");
      return;
    }
    setBusy("Stamping pages…");
    try {
      const { PDFDocument, StandardFonts, degrees, rgb } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await file.arrayBuffer())).catch(() => {
        throw new Error("Could not read this PDF. It may be corrupted or password-protected.");
      });
      const font = await doc.embedFont(StandardFonts.HelveticaBold);
      for (const page of doc.getPages()) {
        const { width, height } = page.getSize();
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        const { x, y } = positionFor(position, width, height, textWidth, fontSize);
        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(0.85, 0.05, 0.08),
          opacity,
          rotate: degrees(position === "center" ? angleDeg : 0),
        });
      }
      const out = await doc.save();
      const blob = new Blob([new Uint8Array(out)], { type: "application/pdf" });
      const filename = file.name.replace(/\.pdf$/i, "") + "-watermarked.pdf";
      downloadBlob(blob, filename, "application/pdf");
      setSuccess({ filename, sizeBytes: blob.size, blob });
    } catch (e) {
      const m = mapToolError(e);
      setError(m.message, m.hint);
    }
  };

  return (
    <ToolShell
      title="Add watermark to PDF"
      subtitle="Add a simple text watermark before sharing your PDF."
    >
      <div className="mb-5">
        <StepIndicator steps={["Upload", "Adjust", "Download"]} current={current} />
      </div>

      {state.status === "success" ? (
        <SuccessState
          title="Your watermarked PDF is ready"
          filename={state.success.filename}
          sizeBytes={state.success.sizeBytes}
          onReset={startOver}
          onDownloadAgain={() =>
            downloadBlob(state.success.blob, state.success.filename, "application/pdf")
          }
          related={[
            { label: "Merge PDFs", path: "/merge-pdf" },
            { label: "Rotate pages", path: "/rotate-pdf" },
          ]}
        />
      ) : (
        <>
          <DropZone
            accept="application/pdf"
            onFiles={onFiles}
            label="Drop a PDF here, or click to choose"
            hint="One PDF · up to 100 MB"
          />
          {file ? (
            <ul className="mt-4 space-y-2">
              <FileChip name={file.name} size={file.size} onRemove={() => setFile(null)} />
            </ul>
          ) : null}

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <OptionField
                label="Watermark text"
                type="text"
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
                maxLength={60}
              />
            </div>
            <OptionGroup<Position>
              label="Position"
              value={position}
              onChange={setPosition}
              options={[
                { value: "center", label: "Center" },
                { value: "top-left", label: "Top-left" },
                { value: "top-right", label: "Top-right" },
                { value: "bottom-left", label: "Bottom-left" },
                { value: "bottom-right", label: "Bottom-right" },
              ]}
            />
            <OptionRange
              label="Font size"
              valueLabel={`${fontSize}pt`}
              min={16}
              max={120}
              step={4}
              value={fontSize}
              onChange={setFontSize}
            />
            <OptionRange
              label="Opacity"
              valueLabel={`${Math.round(opacity * 100)}%`}
              min={0.05}
              max={0.6}
              step={0.05}
              value={opacity}
              onChange={setOpacity}
            />
            {position === "center" ? (
              <OptionRange
                label="Angle"
                valueLabel={`${angleDeg}°`}
                min={0}
                max={90}
                step={5}
                value={angleDeg}
                onChange={setAngleDeg}
              />
            ) : null}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <ProcessButton
              busy={state.status === "busy"}
              onClick={run}
              disabled={!file || !text.trim()}
            >
              {state.status === "busy" ? "Stamping…" : "Add watermark"}
            </ProcessButton>
          </div>

          <ProcessingStatus
            message={state.status === "busy" ? state.message : null}
          />
          <ToolError
            message={state.status === "error" ? state.error : null}
            hint={state.status === "error" ? state.hint : undefined}
          />
        </>
      )}
    </ToolShell>
  );
}

function positionFor(
  pos: Position,
  pageW: number,
  pageH: number,
  textW: number,
  fontSize: number,
): { x: number; y: number } {
  const pad = 36;
  switch (pos) {
    case "top-left":
      return { x: pad, y: pageH - pad - fontSize };
    case "top-right":
      return { x: pageW - pad - textW, y: pageH - pad - fontSize };
    case "bottom-left":
      return { x: pad, y: pad };
    case "bottom-right":
      return { x: pageW - pad - textW, y: pad };
    case "center":
    default:
      return { x: (pageW - textW) / 2, y: pageH / 2 };
  }
}
```

- [ ] **Step 4: Run tests**

```bash
npx vitest run tests/WatermarkPdfTool.test.tsx
npx vitest run
```

Expected: PASS, all green.

- [ ] **Step 5: Commit**

```bash
git add src/components/tools/WatermarkPdfTool.tsx tests/WatermarkPdfTool.test.tsx
git commit -m "feat(watermark-pdf): step indicator, success, position/font-size options"
```

---

## Phase 3 — Content / SEO copy polish

### Task 15: Helper copy + subtitle alignment per brief

**Files:**
- Modify: `src/content/tools/image-to-pdf.ts`
- Modify: `src/content/tools/merge-pdf.ts`
- Modify: `src/content/tools/split-pdf.ts`
- Modify: `src/content/tools/rotate-pdf.ts`
- Modify: `src/content/tools/pdf-to-images.ts`
- Modify: `src/content/tools/add-watermark-to-pdf.ts`

**Conservative SEO scope:** keep H1, FAQ structure, related links, and use-case copy intact. Only adjust the `hero.lead` (one-line lede) and re-confirm `privacyNote` matches the brief's wording. Skip changes if existing copy already says the same thing.

For each file, only touch:
- `hero.lead` — match the brief's helper copy where the existing copy is generic.
- `privacyNote` — confirm it matches the brief: "Your files are processed locally in your browser whenever possible. They are not uploaded to our servers for these free tools."

- [ ] **Step 1: Update `image-to-pdf.ts` lead**

In `src/content/tools/image-to-pdf.ts`, change:
```ts
lead: "Drop your photos and screenshots in the order you want them, and download a clean, multi-page PDF — all without uploading anything.",
```
to:
```ts
lead: "Upload JPG, PNG or WebP images and combine them into one PDF. Reorder pages, then download — your images stay on your device.",
```

- [ ] **Step 2: Update `merge-pdf.ts` lead**

Open `src/content/tools/merge-pdf.ts`. Set `hero.lead` to:
```ts
lead: "Upload two or more PDF files and combine them into one document. Reorder before merging — your files stay on your device.",
```

- [ ] **Step 3: Update `split-pdf.ts` lead**

Open `src/content/tools/split-pdf.ts`. Set `hero.lead` to:
```ts
lead: "Upload a PDF and select the page range you want to export. Use ranges like 1-3,5,8-10 — your file stays on your device.",
```

- [ ] **Step 4: Update `rotate-pdf.ts` lead**

Open `src/content/tools/rotate-pdf.ts`. Set `hero.lead` to:
```ts
lead: "Rotate all pages or selected pages, then download a corrected PDF — all in your browser.",
```

- [ ] **Step 5: Update `pdf-to-images.ts` lead**

Open `src/content/tools/pdf-to-images.ts`. Set `hero.lead` to:
```ts
lead: "Turn PDF pages into downloadable PNG or JPEG image files — rendered locally in your browser.",
```

- [ ] **Step 6: Update `add-watermark-to-pdf.ts` lead**

Open `src/content/tools/add-watermark-to-pdf.ts`. Set `hero.lead` to:
```ts
lead: "Add a simple text watermark before sharing your PDF — choose position, opacity, font size and rotation.",
```

- [ ] **Step 7: Confirm `privacyNote` consistency**

Skim each of the six content files' `privacyNote` strings. Each one should be a variant of "Your file/files [is/are] processed locally in your browser and [is/are] not uploaded to our servers." If any deviates, align them.

- [ ] **Step 8: Verify lints + tests**

```bash
npm run lint
npx vitest run
```

Expected: all green.

- [ ] **Step 9: Commit**

```bash
git add src/content/tools/
git commit -m "polish(tools): align helper copy with brief while preserving H1/FAQ/related"
```

---

### Task 16: Sitemap lastmod refresh for changed pages

**Files:**
- Read: `src/app/sitemap.ts`
- Modify if a `lastmod`/`updated` mechanism exists.

- [ ] **Step 1: Read `src/app/sitemap.ts`**

Open the file and inspect: does it set `lastModified` on each entry? Is there a constant or per-route field?

- [ ] **Step 2: Decide approach based on what's there**

- **If `lastModified: new Date()` is already used per entry:** no change required — every deploy will already advance lastmod.
- **If a static date constant is used:** bump it. Use `2026-05-15`.
- **If lastmod is per-route via a `RouteEntry.updated` field:** set the six tool routes' `updated` to `2026-05-15`.
- **If there is no lastmod at all:** add `lastModified: new Date()` to each tool entry — minimal change, no schema impact.

- [ ] **Step 3: Verify sitemap test still passes**

```bash
npx vitest run tests/sitemap.test.ts
```

Expected: PASS.

- [ ] **Step 4: Commit (only if a file changed)**

```bash
git add src/app/sitemap.ts
git commit -m "chore(sitemap): bump lastmod for tool pages updated in this UX pass"
```

---

## Phase 4 — Verification

### Task 17: Full lint, typecheck, test, build

**Files:**
- Run only.

- [ ] **Step 1: Lint**

```bash
npm run lint
```

Expected: exit 0, zero errors. If new warnings appear (e.g. unused imports), fix them before proceeding.

- [ ] **Step 2: Typecheck**

```bash
npm run typecheck
```

Expected: exit 0.

- [ ] **Step 3: Tests**

```bash
npm test -- --run
```

Expected: all tests pass. Compare count to the baseline noted in Task 1 — should be baseline + the new tests added in Tasks 2/4/5/7/9/10/11/12/13/14.

- [ ] **Step 4: Build**

```bash
npm run build
```

Expected: exit 0. Watch for:
- Any "use client" boundary issues — every component touched in Phase 2 already had `"use client"`.
- Any large unexpected client-bundle additions.
- Any 404 on a removed route — there should be none.

- [ ] **Step 5: Commit nothing here — verification only.**

---

### Task 18: Manual smoke test in dev

**Files:**
- Run only.

- [ ] **Step 1: Boot dev server**

```bash
npm run dev
```

- [ ] **Step 2: For each of the six tool routes, verify in the browser**

Visit each URL and verify the checklist holds:
- `http://localhost:3000/image-to-pdf`
- `http://localhost:3000/merge-pdf`
- `http://localhost:3000/split-pdf`
- `http://localhost:3000/rotate-pdf`
- `http://localhost:3000/pdf-to-images`
- `http://localhost:3000/add-watermark-to-pdf`

For each: confirm
1. **Step indicator visible** above the dropzone with "Upload" highlighted.
2. **DropZone shows** "Drop … here or click to choose", a hint with file size limit, and a privacy line ("Files are processed locally in your browser.") with a small shield icon.
3. **CTA disabled** until a valid file is added (image-to-pdf: 1+; merge: 2+; others: 1).
4. **Adding a file** advances the step indicator to step 2 (Adjust); options appear; CTA enables.
5. **Processing the file** shows the spinner + status text; CTA goes disabled.
6. **On success:** the form is replaced by the success card showing filename, size, "Download again", "Start over", related-tool links, and the app CTA panel with App Store + Google Play badges.
7. **Errors** (try uploading a `.txt` to a PDF tool) show a red alert with both message and hint.
8. **Mobile (DevTools 375px wide):** options stack, tap targets are ≥ 44px, no horizontal scroll, dropzone reads cleanly.

- [ ] **Step 3: Confirm WebmasterID still loads**

Open DevTools → Network → reload `/merge-pdf`. Confirm a request to `https://webmasterid.com/tracker.iife.min.js` is fired and the inline `<script>` with `data-wmid="wm_b6f7wz6b9y2o5qzo"` is in the rendered HTML (`view-source:`).

- [ ] **Step 4: Confirm no file upload happens**

Open DevTools → Network → drag a small PDF into `/merge-pdf`. After `Merge PDFs`, confirm there are zero outbound POSTs of file payloads — only the original page assets.

- [ ] **Step 5: Confirm App Store / Google Play links**

Click the App Store badge in the success state and the final-section AppCTA. Both should open `https://apps.apple.com/app/id6747341672`. Same check for Google Play → `https://play.google.com/store/apps/details?id=com.helperg.editor.documents&pcampaignid=web_share`.

- [ ] **Step 6: SEO content sanity**

For one tool page (`/merge-pdf`), `view-source:` and confirm the H1, How-to Steps, FAQ items, related tools, and structured-data `<script type="application/ld+json">` blocks are all present in the initial HTML (not lazy-loaded). The interactive island will be hydrated client-side, but everything around it must be in source.

- [ ] **Step 7: Stop dev server**

`Ctrl+C` in the dev terminal.

---

### Task 19: Final report

**Files:**
- Create: `docs/superpowers/decisions.md` append (or a new short report file under `docs/`).

- [ ] **Step 1: Write a short final report**

Append a section to `docs/superpowers/decisions.md` (or write to `docs/superpowers/reports/2026-05-15-tool-ux-pass.md`) covering the brief's required final report items:

```md
## 2026-05-15 — Browser PDF Tools UX Pass

1. **UX improvements** — 3-step Upload → Adjust → Download indicator, success state with download/reset/related/app CTA, processing status with aria-live, categorised errors with helpful hints, privacy line inside the dropzone.
2. **Tool components updated** — ImageToPdfTool, MergePdfTool, SplitPdfTool, RotatePdfTool, PdfToImagesTool, WatermarkPdfTool.
3. **Per-tool option additions** — Image to PDF: page size / orientation / image fit / margin. PDF to images: JPEG quality, optional page range. Watermark: position, font size. Rotate: switched ad-hoc radios to OptionGroup with proper a11y labels.
4. **Privacy / trust** — `DropZone` now renders the privacy line inline; `PrivacyNote` band remains below the tool; success state reiterates the file-stays-on-device principle implicitly via showing the local filename.
5. **Error handling** — `mapToolError()` categorises into unreadable / invalid_range / memory / unsupported / empty / too_many / generic with human-readable messages and follow-up hints.
6. **Mobile** — 44px tap targets via `OptionGroup`, options stack via `md:grid-cols-2`, dropzone scales naturally, file lists wrap not overflow.
7. **App CTA placement** — inline AppCTA stays in `ToolPage`; final AppCTA stays after FAQ; success state adds a third inline app CTA after a successful conversion.
8. **SEO safety** — H1, How-to, Use cases, Limitations, Related, FAQ, JSON-LD all unchanged structurally; only `hero.lead` adjusted per Task 15. Sitemap lastmod handled per Task 16.
9. **WebmasterID** — untouched in `src/app/layout.tsx`; verified in Task 18 Step 3.
10. **Build / lint / typecheck** — all green per Task 17.
11. **Known limitations** — JPEG quality slider is for `pdf-to-images` only; in-app preview of watermark position is not rendered (would require a heavier preview library); split tool still produces one combined PDF (the existing limitation, called out in copy).
```

- [ ] **Step 2: Commit the report**

```bash
git add docs/
git commit -m "docs: report on 2026-05-15 browser PDF tools UX pass"
```

---

## Self-Review (run after writing the plan, before handing off)

**1. Spec coverage** — verify each section of the brief maps to a task:
- Tools to improve (6 tools) → Tasks 9-14.
- 3-step flow → Task 2 (primitive) + integrated in Tasks 9-14.
- Helper text per brief → Task 15.
- Upload UX (drag-drop, file types, size, privacy line, file list, remove, reorder, disabled CTA, validation) → Task 4 (DropZone) + per-tool Tasks 9 & 10 (reorder).
- Options per tool → Task 9 (image), Task 11 (split), Task 12 (rotate), Task 13 (pdf-to-images), Task 14 (watermark). Merge has only "reorder" which Task 10 keeps.
- Processing state → Task 3 (ProcessingStatus) + per-tool integration.
- Success state with filename/size/start-over/related/app CTA → Task 5.
- Error handling → Task 7.
- Trust panel → existing `PrivacyNote` (kept) + inline line in `DropZone` (Task 4) + `appCta` in success state (Task 5).
- Mobile UX → 44px tap targets in `OptionGroup` (Task 8), grid stacking, wrap.
- Design requirements (red palette etc.) → already in `globals.css`; primitives use the tokens.
- Conversion (app CTA) → success state (Task 5) + existing inline + final AppCTAs in `ToolPage`.
- SEO safety → conservative content edits in Task 15, sitemap in Task 16.
- Accessibility → labels on file inputs (Task 4), aria-live (Tasks 3 + 5 + existing ToolError), keyboard buttons (Task 8 uses real `<button>` with `role=radio` `aria-checked`), focus states (already global), meaningful button text (per-tool tasks).
- Quality checks → Task 17.

**2. Placeholder scan** — none. All steps include either real code or specific commands.

**3. Type consistency** — `useToolFlow` returns `{ state, setBusy, setError, setSuccess, reset }` and the `state` discriminator uses `status`. All consumers in Phase 2 read `state.status` and `state.success` / `state.error` / `state.hint` / `state.message`. `ToolFlowSuccess` shape is `{ filename, sizeBytes, blob }` and matches every `setSuccess` call. `OptionGroup` is generic over `T extends string` and every consumer parameterises it with the tool-local union.

**4. Out-of-scope guarantees** — no Supabase, no DB, no accounts, no upload endpoint, no removed page, no removed WebmasterID, no SEO body content removed.

---
