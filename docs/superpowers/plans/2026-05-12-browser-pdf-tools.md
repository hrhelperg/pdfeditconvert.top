# Browser PDF Tools Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add six free, fully client-side PDF tools (image→pdf, merge, split, rotate, pdf→images, watermark) to pdfeditconvert.top so the site offers real utility in addition to its SEO funnel — without backend, accounts, database, or file upload.

**Architecture:** Each tool gets a server-rendered SEO landing page (Hero → tool slot → privacy note → how-to → use cases → limitations → related → FAQ → app CTA) plus a `"use client"` interactive component that lazy-imports `pdf-lib` / `pdfjs-dist` only when the user processes files. The two routes that already exist as hub pages (`/merge-pdf`, `/split-pdf`) keep their copy but switch to the new `ToolPage` layout so the interactive tool sits between Hero and SEO body. Files never leave the browser; WebmasterID and App Store / Google Play CTAs remain global and untouched.

**Tech Stack:** Next.js 16.2.6 (App Router) · React 19 · TypeScript · Tailwind v4 · `pdf-lib` (manipulation) · `pdfjs-dist` (rendering pages to images) · Vitest + jsdom for unit tests.

---

## File Structure

**New / modified directories:**
```
src/
  app/
    image-to-pdf/page.tsx          (NEW)
    pdf-to-images/page.tsx         (NEW)
    rotate-pdf/page.tsx            (NEW)
    add-watermark-to-pdf/page.tsx  (NEW)
    pdf-tools/page.tsx             (NEW — tools index)
    merge-pdf/page.tsx             (MODIFY — switch to ToolPage)
    split-pdf/page.tsx             (MODIFY — switch to ToolPage)
  components/
    sections/
      ToolPage.tsx                 (NEW — SEO + tool slot layout)
    tools/
      ImageToPdfTool.tsx           (NEW — "use client")
      MergePdfTool.tsx             (NEW — "use client")
      SplitPdfTool.tsx             (NEW — "use client")
      RotatePdfTool.tsx            (NEW — "use client")
      PdfToImagesTool.tsx          (NEW — "use client")
      WatermarkPdfTool.tsx         (NEW — "use client")
      primitives/
        DropZone.tsx               (NEW — "use client", drag/drop file input)
        FileChip.tsx               (NEW — file row with remove/reorder)
        ProcessButton.tsx          (NEW — primary action, busy state)
        ToolShell.tsx              (NEW — bordered card wrapping a tool)
        PrivacyNote.tsx            (NEW — server component, reusable copy)
        ToolError.tsx              (NEW — error pill)
  content/
    tools/
      index.ts                     (NEW — re-exports)
      image-to-pdf.ts              (NEW — ToolContent)
      merge-pdf.ts                 (NEW — ToolContent; replaces hub use)
      split-pdf.ts                 (NEW — ToolContent)
      rotate-pdf.ts                (NEW — ToolContent)
      pdf-to-images.ts             (NEW — ToolContent)
      add-watermark-to-pdf.ts      (NEW — ToolContent)
    schema.ts                      (MODIFY — add softwareWebApplicationSchema())
  lib/
    routes.ts                      (MODIFY — add "tool" category + 5 routes, update /merge-pdf and /split-pdf)
    tools/
      validate.ts                  (NEW — file validators, size helpers)
      pageRange.ts                 (NEW — parse "1-3,5,7-9" → number[])
      download.ts                  (NEW — trigger browser download)
      pdfjs.ts                     (NEW — lazy-load pdfjs-dist + worker)
      pdfLib.ts                    (NEW — lazy-load pdf-lib)
  types/
    content.ts                     (MODIFY — add RouteCategory "tool" + ToolContent type)
public/
  pdfjs/
    pdf.worker.min.mjs             (NEW — copied via postinstall)
scripts/
  copy-pdfjs-worker.mjs            (NEW — postinstall script)
tests/
  pageRange.test.ts                (NEW)
  validate.test.ts                 (NEW)
  ToolPage.test.tsx                (NEW)
  toolRoutes.test.ts               (NEW)
```

**Responsibilities:**
- `ToolPage` is a server component that takes `content: ToolContent` and a `toolSlot: ReactNode` so SEO copy is server-rendered and the interactive part is a client child.
- Each `*Tool.tsx` is `"use client"`; PDF libs are loaded via `await import()` inside event handlers — never at module scope — so they ship only when a user processes a file.
- `lib/tools/pdfjs.ts` centralises `pdfjs-dist` worker setup so each tool doesn't redo it.
- Validators and `pageRange` parsing live in pure modules so they're trivially testable.

---

## Task 1: Install libraries and configure pdfjs worker

**Files:**
- Modify: `package.json`
- Create: `scripts/copy-pdfjs-worker.mjs`
- Create: `public/pdfjs/.gitkeep`

- [ ] **Step 1: Install dependencies**

Run:
```bash
npm install pdf-lib@^1.17.1 pdfjs-dist@^4.8.69
```
Expected: dependencies added, lockfile updated, no errors. If versions have moved on, use the latest stable majors that match these APIs.

- [ ] **Step 2: Add postinstall worker copy script**

Create `scripts/copy-pdfjs-worker.mjs`:
```js
import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const src = resolve(root, "node_modules/pdfjs-dist/build/pdf.worker.min.mjs");
const destDir = resolve(root, "public/pdfjs");
const dest = resolve(destDir, "pdf.worker.min.mjs");

await mkdir(destDir, { recursive: true });
await copyFile(src, dest);
console.log(`[copy-pdfjs-worker] ${src} → ${dest}`);
```

- [ ] **Step 3: Wire it into package.json**

Edit `package.json` `scripts` block — add `"postinstall"` and run the script once now:
```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "typecheck": "tsc --noEmit",
  "test": "vitest run",
  "test:watch": "vitest",
  "postinstall": "node scripts/copy-pdfjs-worker.mjs"
}
```

- [ ] **Step 4: Run the script and verify the worker exists**

Run:
```bash
npm run postinstall
ls public/pdfjs/pdf.worker.min.mjs
```
Expected: file exists. Add `public/pdfjs/.gitkeep` if you prefer to commit the directory only; the worker file should be committed too so production builds without re-running install still ship it.

- [ ] **Step 5: Commit**
```bash
git add package.json package-lock.json scripts/ public/pdfjs/
git commit -m "feat(tools): install pdf-lib + pdfjs-dist and ship pdfjs worker"
```

---

## Task 2: Extend route + content types for tools

**Files:**
- Modify: `src/types/content.ts`
- Modify: `src/lib/routes.ts`

- [ ] **Step 1: Add `tool` category and `ToolContent` interface**

In `src/types/content.ts`, change `RouteCategory` to include `"tool"`:
```ts
export type RouteCategory =
  | "core"
  | "hub"
  | "tool"
  | "guide"
  | "compare"
  | "use-case"
  | "legal"
  | "meta";
```

Append to the same file:
```ts
export interface ToolUseCase {
  title: string;
  body: string;
}

export interface ToolLimitation {
  title: string;
  body: string;
}

export interface ToolContent {
  slug: string;
  hero: {
    eyebrow: string;
    h1: string;
    highlight?: string;
    lead: string;
  };
  privacyNote: string;
  howTo: { heading: string; steps: StepItem[] };
  useCases: { heading: string; items: ToolUseCase[] };
  limitations: { heading: string; items: ToolLimitation[] };
  related: RelatedLink[];
  faq: FaqItem[];
  appCta: { heading: string; sub: string };
}
```

- [ ] **Step 2: Add 5 new routes and re-categorise the 2 existing ones**

In `src/lib/routes.ts`, change the category of `/merge-pdf` and `/split-pdf` from `"hub"` to `"tool"` (leave title/description as-is for now — Task 4 will refine descriptions), and add a `// Tools` block before the legal block:

```ts
  // Tools (browser-based, free, no upload)
  {
    path: "/pdf-tools",
    title: "Free PDF Tools — Browser-Based, No Upload Needed",
    description:
      "Free PDF tools that run entirely in your browser. Merge, split, rotate, watermark, convert images to PDF and PDFs to images — your files never leave your device.",
    category: "tool",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/image-to-pdf",
    title: "Image to PDF — Convert JPG, PNG, WebP to PDF in Your Browser",
    description:
      "Combine JPG, PNG and WebP images into a single PDF directly in your browser. Free, no upload, no signup — files stay on your device.",
    category: "tool",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/rotate-pdf",
    title: "Rotate PDF — Fix Page Orientation in Your Browser",
    description:
      "Rotate all or selected pages of a PDF by 90°, 180° or 270° directly in your browser. Free and private — files never leave your device.",
    category: "tool",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/pdf-to-images",
    title: "PDF to Images — Export PDF Pages as PNG or JPG",
    description:
      "Turn any PDF into PNG or JPG images, page by page, in your browser. Free, no upload, no account — runs entirely on your device.",
    category: "tool",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/add-watermark-to-pdf",
    title: "Add Watermark to PDF — Free, Private, In-Browser",
    description:
      "Add a text watermark to every page of a PDF directly in your browser. Free, no upload, no signup — files stay on your device.",
    category: "tool",
    priority: 0.8,
    changeFrequency: "monthly",
  },
```

Then update `/merge-pdf` and `/split-pdf` entries — change `category: "hub"` to `category: "tool"` and update titles to mention browser-based + free:

`/merge-pdf`:
```ts
title: "Merge PDF — Combine PDFs in Your Browser (Free, No Upload)",
description:
  "Combine multiple PDFs into a single file directly in your browser. Free, no signup, no upload — your files never leave your device.",
```

`/split-pdf`:
```ts
title: "Split PDF — Extract Pages in Your Browser (Free, No Upload)",
description:
  "Split a PDF by page range directly in your browser. Free, no signup, no upload — your files stay on your device.",
```

- [ ] **Step 3: Add `routesByCategory("tool")` test**

Create `tests/toolRoutes.test.ts`:
```ts
import { describe, expect, it } from "vitest";
import { ROUTES, routesByCategory } from "@/lib/routes";

describe("tool routes", () => {
  it("includes the six tool pages plus the index", () => {
    const tools = routesByCategory("tool").map((r) => r.path).sort();
    expect(tools).toEqual(
      [
        "/add-watermark-to-pdf",
        "/image-to-pdf",
        "/merge-pdf",
        "/pdf-to-images",
        "/pdf-tools",
        "/rotate-pdf",
        "/split-pdf",
      ].sort(),
    );
  });

  it("every tool route exposes a non-empty title and description", () => {
    for (const r of routesByCategory("tool")) {
      expect(r.title.length).toBeGreaterThan(10);
      expect(r.description.length).toBeGreaterThan(40);
    }
  });

  it("all tool routes are in the global ROUTES list (so sitemap picks them up)", () => {
    const tools = routesByCategory("tool").map((r) => r.path);
    for (const p of tools) expect(ROUTES.some((r) => r.path === p)).toBe(true);
  });
});
```

- [ ] **Step 4: Run tests**

Run:
```bash
npm run test -- tests/toolRoutes.test.ts
```
Expected: 3 tests pass.

- [ ] **Step 5: Commit**
```bash
git add src/types/content.ts src/lib/routes.ts tests/toolRoutes.test.ts
git commit -m "feat(tools): add tool route category and ToolContent type"
```

---

## Task 3: Helper modules (validate, pageRange, download, lazy loaders)

**Files:**
- Create: `src/lib/tools/validate.ts`
- Create: `src/lib/tools/pageRange.ts`
- Create: `src/lib/tools/download.ts`
- Create: `src/lib/tools/pdfjs.ts`
- Create: `src/lib/tools/pdfLib.ts`
- Create: `tests/pageRange.test.ts`
- Create: `tests/validate.test.ts`

- [ ] **Step 1: Failing tests for pageRange**

Create `tests/pageRange.test.ts`:
```ts
import { describe, expect, it } from "vitest";
import { parsePageRange } from "@/lib/tools/pageRange";

describe("parsePageRange", () => {
  it("parses single page", () => {
    expect(parsePageRange("3", 10)).toEqual([3]);
  });
  it("parses comma list", () => {
    expect(parsePageRange("1,3,5", 10)).toEqual([1, 3, 5]);
  });
  it("parses ranges", () => {
    expect(parsePageRange("2-5", 10)).toEqual([2, 3, 4, 5]);
  });
  it("merges ranges and singles, dedupes, sorts", () => {
    expect(parsePageRange("5,1-3,2", 10)).toEqual([1, 2, 3, 5]);
  });
  it("clamps to totalPages and ignores zero / negative", () => {
    expect(parsePageRange("0-3,9-15", 10)).toEqual([1, 2, 3, 9, 10]);
  });
  it("throws on completely invalid input", () => {
    expect(() => parsePageRange("abc", 10)).toThrow();
  });
  it("throws on empty input", () => {
    expect(() => parsePageRange("", 10)).toThrow();
  });
});
```

Run:
```bash
npm run test -- tests/pageRange.test.ts
```
Expected: FAIL (module not found).

- [ ] **Step 2: Implement pageRange**

Create `src/lib/tools/pageRange.ts`:
```ts
export function parsePageRange(input: string, totalPages: number): number[] {
  if (!input.trim()) {
    throw new Error("Enter at least one page or range, e.g. 1-3,5.");
  }
  const pages = new Set<number>();
  for (const raw of input.split(",")) {
    const part = raw.trim();
    if (!part) continue;
    const range = part.match(/^(\d+)\s*-\s*(\d+)$/);
    if (range) {
      const start = Math.max(1, Number(range[1]));
      const end = Math.min(totalPages, Number(range[2]));
      if (start > end) continue;
      for (let p = start; p <= end; p++) pages.add(p);
      continue;
    }
    if (/^\d+$/.test(part)) {
      const n = Number(part);
      if (n >= 1 && n <= totalPages) pages.add(n);
      continue;
    }
    throw new Error(`"${part}" is not a valid page or range.`);
  }
  if (pages.size === 0) {
    throw new Error("No pages matched. Use values between 1 and " + totalPages + ".");
  }
  return [...pages].sort((a, b) => a - b);
}
```

Run:
```bash
npm run test -- tests/pageRange.test.ts
```
Expected: all 7 tests pass.

- [ ] **Step 3: Failing tests for validate**

Create `tests/validate.test.ts`:
```ts
import { describe, expect, it } from "vitest";
import { assertPdf, assertImage, MAX_SINGLE_FILE_MB, formatBytes } from "@/lib/tools/validate";

const file = (name: string, type: string, size = 1024) =>
  new File([new Uint8Array(size)], name, { type });

describe("assertPdf", () => {
  it("accepts application/pdf", () => {
    expect(() => assertPdf(file("a.pdf", "application/pdf"))).not.toThrow();
  });
  it("rejects non-pdf", () => {
    expect(() => assertPdf(file("a.png", "image/png"))).toThrow(/PDF/);
  });
  it("rejects oversized files", () => {
    const big = file("big.pdf", "application/pdf", MAX_SINGLE_FILE_MB * 1024 * 1024 + 1);
    expect(() => assertPdf(big)).toThrow(/too large/i);
  });
});

describe("assertImage", () => {
  it("accepts jpg/png/webp", () => {
    expect(() => assertImage(file("a.jpg", "image/jpeg"))).not.toThrow();
    expect(() => assertImage(file("a.png", "image/png"))).not.toThrow();
    expect(() => assertImage(file("a.webp", "image/webp"))).not.toThrow();
  });
  it("rejects gif", () => {
    expect(() => assertImage(file("a.gif", "image/gif"))).toThrow(/JPG|PNG|WebP/);
  });
});

describe("formatBytes", () => {
  it("formats KB and MB", () => {
    expect(formatBytes(1024)).toBe("1.0 KB");
    expect(formatBytes(1024 * 1024)).toBe("1.0 MB");
  });
});
```

Run:
```bash
npm run test -- tests/validate.test.ts
```
Expected: FAIL.

- [ ] **Step 4: Implement validate**

Create `src/lib/tools/validate.ts`:
```ts
export const MAX_SINGLE_FILE_MB = 100;
export const MAX_FILES = 30;

const PDF_TYPES = new Set(["application/pdf"]);
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function assertSize(file: File) {
  const mb = file.size / (1024 * 1024);
  if (mb > MAX_SINGLE_FILE_MB) {
    throw new Error(
      `"${file.name}" is too large (${mb.toFixed(1)} MB). Limit is ${MAX_SINGLE_FILE_MB} MB per file because everything is processed in your browser.`,
    );
  }
}

export function assertPdf(file: File) {
  if (!PDF_TYPES.has(file.type) && !/\.pdf$/i.test(file.name)) {
    throw new Error(`"${file.name}" is not a PDF.`);
  }
  assertSize(file);
}

export function assertImage(file: File) {
  if (!IMAGE_TYPES.has(file.type)) {
    throw new Error(`"${file.name}" is not a supported image. Use JPG, PNG or WebP.`);
  }
  assertSize(file);
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
```

Run:
```bash
npm run test -- tests/validate.test.ts
```
Expected: all tests pass.

- [ ] **Step 5: Create download + lazy loader helpers**

Create `src/lib/tools/download.ts`:
```ts
export function downloadBlob(data: Uint8Array | Blob, filename: string, mime = "application/octet-stream") {
  const blob = data instanceof Blob ? data : new Blob([data], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
```

Create `src/lib/tools/pdfLib.ts`:
```ts
export async function loadPdfLib() {
  return await import("pdf-lib");
}
```

Create `src/lib/tools/pdfjs.ts`:
```ts
let configured = false;

export async function loadPdfJs() {
  const pdfjs = await import("pdfjs-dist");
  if (!configured) {
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";
    configured = true;
  }
  return pdfjs;
}
```

- [ ] **Step 6: Commit**
```bash
git add src/lib/tools/ tests/pageRange.test.ts tests/validate.test.ts
git commit -m "feat(tools): add file validators, page-range parser, and pdf lib lazy loaders"
```

---

## Task 4: Shared tool UI primitives

**Files:**
- Create: `src/components/tools/primitives/ToolShell.tsx`
- Create: `src/components/tools/primitives/DropZone.tsx`
- Create: `src/components/tools/primitives/FileChip.tsx`
- Create: `src/components/tools/primitives/ProcessButton.tsx`
- Create: `src/components/tools/primitives/PrivacyNote.tsx`
- Create: `src/components/tools/primitives/ToolError.tsx`

- [ ] **Step 1: ToolShell (wraps every tool in a premium card)**

Create `src/components/tools/primitives/ToolShell.tsx`:
```tsx
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function ToolShell({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[--color-border] bg-[--color-surface] shadow-[var(--shadow-card)] p-6 md:p-8",
        className,
      )}
    >
      <div className="mb-6 flex items-start gap-4">
        <div
          aria-hidden
          className="h-10 w-10 rounded-xl bg-[--color-brand] text-white grid place-items-center font-bold"
        >
          PDF
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[--color-ink] leading-tight">{title}</h2>
          {subtitle ? (
            <p className="text-sm text-[--color-muted] mt-1">{subtitle}</p>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: DropZone**

Create `src/components/tools/primitives/DropZone.tsx`:
```tsx
"use client";

import { useRef, useState, type DragEvent } from "react";
import { cn } from "@/lib/cn";
import { UploadCloud } from "lucide-react";

export function DropZone({
  accept,
  multiple = false,
  onFiles,
  label,
  hint,
}: {
  accept: string;
  multiple?: boolean;
  onFiles: (files: File[]) => void;
  label: string;
  hint: string;
}) {
  const [hover, setHover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
      onDragOver={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onDragLeave={() => setHover(false)}
      onDrop={onDrop}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-10 cursor-pointer transition-colors",
        hover
          ? "border-[--color-brand] bg-[rgba(229,9,20,0.04)]"
          : "border-[--color-border] hover:border-[--color-brand-2] hover:bg-[--color-bg]",
      )}
    >
      <UploadCloud className="h-8 w-8 text-[--color-brand]" aria-hidden />
      <span className="font-semibold text-[--color-ink]">{label}</span>
      <span className="text-sm text-[--color-muted]">{hint}</span>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => handle(e.currentTarget.files)}
        className="sr-only"
      />
    </label>
  );
}
```

- [ ] **Step 3: FileChip with remove + optional reorder**

Create `src/components/tools/primitives/FileChip.tsx`:
```tsx
"use client";

import { X, ChevronUp, ChevronDown } from "lucide-react";
import { formatBytes } from "@/lib/tools/validate";

export function FileChip({
  name,
  size,
  onRemove,
  onMoveUp,
  onMoveDown,
}: {
  name: string;
  size: number;
  onRemove: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
}) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-xl border border-[--color-border] bg-[--color-bg] px-3 py-2">
      <div className="min-w-0">
        <p className="truncate font-medium text-[--color-ink]">{name}</p>
        <p className="text-xs text-[--color-muted]">{formatBytes(size)}</p>
      </div>
      <div className="flex items-center gap-1">
        {onMoveUp ? (
          <button
            type="button"
            aria-label={`Move ${name} up`}
            onClick={onMoveUp}
            className="p-1 rounded hover:bg-[--color-surface]"
          >
            <ChevronUp className="h-4 w-4 text-[--color-muted]" />
          </button>
        ) : null}
        {onMoveDown ? (
          <button
            type="button"
            aria-label={`Move ${name} down`}
            onClick={onMoveDown}
            className="p-1 rounded hover:bg-[--color-surface]"
          >
            <ChevronDown className="h-4 w-4 text-[--color-muted]" />
          </button>
        ) : null}
        <button
          type="button"
          aria-label={`Remove ${name}`}
          onClick={onRemove}
          className="p-1 rounded hover:bg-[--color-surface]"
        >
          <X className="h-4 w-4 text-[--color-muted]" />
        </button>
      </div>
    </li>
  );
}
```

- [ ] **Step 4: ProcessButton + ToolError + PrivacyNote**

Create `src/components/tools/primitives/ProcessButton.tsx`:
```tsx
"use client";

import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

export function ProcessButton({
  busy,
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { busy?: boolean }) {
  return (
    <button
      type="button"
      disabled={busy || rest.disabled}
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white bg-[--color-brand] hover:bg-[--color-brand-2] disabled:opacity-60 disabled:cursor-not-allowed transition-colors",
        className,
      )}
    >
      {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
      {children}
    </button>
  );
}
```

Create `src/components/tools/primitives/ToolError.tsx`:
```tsx
import { AlertCircle } from "lucide-react";

export function ToolError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">
      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
      <span>{message}</span>
    </p>
  );
}
```

Create `src/components/tools/primitives/PrivacyNote.tsx`:
```tsx
import { ShieldCheck } from "lucide-react";

export function PrivacyNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[--color-border] bg-[--color-bg] p-5 flex gap-3 items-start">
      <ShieldCheck className="h-5 w-5 text-[--color-brand] shrink-0 mt-0.5" aria-hidden />
      <p className="text-sm text-[--color-ink] leading-relaxed">{children}</p>
    </div>
  );
}
```

- [ ] **Step 5: Quick build sanity check**

Run:
```bash
npm run typecheck
```
Expected: 0 errors. If `lucide-react` lacks a named export, swap to the available icon.

- [ ] **Step 6: Commit**
```bash
git add src/components/tools/primitives
git commit -m "feat(tools): add shared tool UI primitives (shell, dropzone, file chip, button, error, privacy note)"
```

---

## Task 5: ToolPage layout component

**Files:**
- Create: `src/components/sections/ToolPage.tsx`
- Modify: `src/content/schema.ts`
- Create: `tests/ToolPage.test.tsx`

- [ ] **Step 1: Add SoftwareApplication-style schema helper**

In `src/content/schema.ts`, append:
```ts
export function webApplicationSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: ORG,
  };
}
```

- [ ] **Step 2: Failing test for ToolPage**

Create `tests/ToolPage.test.tsx`:
```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ToolPage } from "@/components/sections/ToolPage";
import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "demo-tool",
  hero: { eyebrow: "Demo", h1: "Run this thing", lead: "It does stuff." },
  privacyNote: "Your files stay on your device.",
  howTo: {
    heading: "How to use",
    steps: [{ title: "Open", body: "Click upload." }],
  },
  useCases: { heading: "When to use", items: [{ title: "Case", body: "Body" }] },
  limitations: { heading: "Limits", items: [{ title: "Limit", body: "Body" }] },
  related: [{ label: "Related", path: "/x" }],
  faq: [{ q: "Q?", a: "A." }],
  appCta: { heading: "Get the app", sub: "Free on iOS and Android." },
};

describe("ToolPage", () => {
  it("renders H1 and privacy note in initial HTML (server)", () => {
    render(<ToolPage content={content} toolSlot={<div data-testid="slot">tool</div>} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Run this thing");
    expect(screen.getByText(/files stay on your device/i)).toBeInTheDocument();
    expect(screen.getByTestId("slot")).toBeInTheDocument();
  });

  it("renders FAQ items", () => {
    render(<ToolPage content={content} toolSlot={<div />} />);
    expect(screen.getByText("Q?")).toBeInTheDocument();
  });

  it("renders related links", () => {
    render(<ToolPage content={content} toolSlot={<div />} />);
    expect(screen.getByRole("link", { name: /Related/ })).toHaveAttribute("href", "/x");
  });
});
```

Run:
```bash
npm run test -- tests/ToolPage.test.tsx
```
Expected: FAIL (component not found).

- [ ] **Step 3: Implement ToolPage**

Create `src/components/sections/ToolPage.tsx`:
```tsx
import Link from "next/link";
import type { ReactNode } from "react";
import type { ToolContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Hero } from "@/components/sections/Hero";
import { Steps } from "@/components/sections/Steps";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PrivacyNote } from "@/components/tools/primitives/PrivacyNote";
import {
  breadcrumbSchema,
  faqSchema,
  webApplicationSchema,
} from "@/content/schema";

export function ToolPage({
  content,
  toolSlot,
}: {
  content: ToolContent;
  toolSlot: ReactNode;
}) {
  const path = `/${content.slug}`;
  const crumbLabel = content.hero.eyebrow;

  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: crumbLabel }]} />
      </Container>

      <Hero
        eyebrow={content.hero.eyebrow}
        h1={content.hero.h1}
        highlight={content.hero.highlight}
        lead={content.hero.lead}
      />

      <Section>
        <Container size="md">{toolSlot}</Container>
      </Section>

      <Section tone="muted">
        <Container size="md">
          <PrivacyNote>{content.privacyNote}</PrivacyNote>
        </Container>
      </Section>

      <Steps heading={content.howTo.heading} items={content.howTo.steps} />

      <Section>
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-8">
            {content.useCases.heading}
          </h2>
          <ul className="grid md:grid-cols-2 gap-5">
            {content.useCases.items.map((it) => (
              <li
                key={it.title}
                className="rounded-2xl border border-[--color-border] bg-[--color-surface] p-5 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-semibold text-[--color-ink] mb-1">{it.title}</h3>
                <p className="text-[--color-muted] leading-relaxed">{it.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container size="md">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[--color-ink] mb-6">
            {content.limitations.heading}
          </h2>
          <ul className="space-y-3">
            {content.limitations.items.map((it) => (
              <li key={it.title} className="text-[--color-muted] leading-relaxed">
                <strong className="text-[--color-ink]">{it.title}.</strong> {it.body}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container size="md">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[--color-ink] mb-6">
            Related PDF tools
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {content.related.map((r) => (
              <li key={r.path}>
                <Link
                  href={r.path}
                  className="block rounded-xl border border-[--color-border] bg-[--color-surface] px-4 py-3 font-medium text-[--color-ink] hover:border-[--color-brand]"
                >
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <AppCTA variant="inline" heading={content.appCta.heading} sub={content.appCta.sub} />

      <FAQ items={content.faq} />

      <AppCTA variant="final" heading={content.appCta.heading} sub={content.appCta.sub} />

      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: crumbLabel, path },
          ]),
          faqSchema(content.faq),
          webApplicationSchema({
            name: content.hero.h1,
            description: content.hero.lead,
            path,
          }),
        ]}
      />
    </>
  );
}
```

Check `Section` to confirm it accepts a `tone` prop. If it doesn't, drop the `tone` prop from the two usages above — the page is still readable without alternating tones.

- [ ] **Step 4: Run tests**

Run:
```bash
npm run test -- tests/ToolPage.test.tsx
```
Expected: 3 tests pass. If `Section` doesn't accept `tone`, fix and rerun.

- [ ] **Step 5: Commit**
```bash
git add src/components/sections/ToolPage.tsx src/content/schema.ts tests/ToolPage.test.tsx
git commit -m "feat(tools): add ToolPage layout with privacy note, use cases, limitations and WebApplication schema"
```

---

## Task 6: Image to PDF tool

**Files:**
- Create: `src/content/tools/image-to-pdf.ts`
- Create: `src/components/tools/ImageToPdfTool.tsx`
- Create: `src/app/image-to-pdf/page.tsx`

- [ ] **Step 1: Content**

Create `src/content/tools/image-to-pdf.ts`:
```ts
import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Image to PDF",
    h1: "Turn JPG, PNG and WebP images into a single PDF.",
    highlight: "single PDF",
    lead: "Drop your photos and screenshots in the order you want them, and download a clean, multi-page PDF — all without uploading anything.",
  },
  privacyNote:
    "Your files are processed locally in your browser and are not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to use the Image to PDF tool",
    steps: [
      { title: "Add your images", body: "Drag and drop JPG, PNG or WebP files, or click to pick them from your device." },
      { title: "Reorder if needed", body: "Use the up and down arrows on each row to put pages in the right sequence." },
      { title: "Generate the PDF", body: "Click Create PDF. Your images become pages of a single document, sized to fit each image." },
      { title: "Download", body: "The generated PDF downloads automatically. You can rename it after saving." },
    ],
  },
  useCases: {
    heading: "When this tool is useful",
    items: [
      { title: "Photo receipts and expenses", body: "Stack a month of receipts into one PDF before sending to an accountant." },
      { title: "ID and passport scans", body: "Combine front and back into a single document a government portal will accept." },
      { title: "Screenshots into a report", body: "Bundle a series of UI screenshots into a tidy review document." },
      { title: "Whiteboard photos", body: "Turn a sequence of photos from a meeting into one document team members can flip through." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "JPG, PNG and WebP only", body: "HEIC, AVIF, GIF and TIFF are not supported in-browser. Convert first or use the mobile app." },
      { title: "Browser memory", body: "Very large batches (hundreds of high-resolution photos) may slow down older devices." },
      { title: "No OCR", body: "Text inside images is not extracted. For searchable PDFs, scan with the PDF Editor app." },
    ],
  },
  related: [
    { label: "Merge PDF files", path: "/merge-pdf" },
    { label: "PDF to images", path: "/pdf-to-images" },
    { label: "All free PDF tools", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Are my images uploaded anywhere?", a: "No. Everything runs in your browser. Your images never leave your device." },
    { q: "Is there a file-size limit?", a: "Yes — each file is capped at 100 MB so your browser stays responsive. The PDF Editor mobile app handles larger batches with hardware acceleration." },
    { q: "Can I change page size?", a: "Each page matches its image's pixel dimensions, so aspect ratios stay correct. For uniform A4 output, use the PDF Editor app." },
    { q: "Does this work on iPhone and Android?", a: "Yes, in any modern mobile browser. For frequent use, the PDF Editor app is faster and supports HEIC photos straight from your camera roll." },
  ],
  appCta: {
    heading: "Need this on your phone every week?",
    sub: "PDF Editor for iPhone and Android scans, organises, and signs PDFs offline.",
  },
};

export default content;
```

- [ ] **Step 2: Tool component**

Create `src/components/tools/ImageToPdfTool.tsx`:
```tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertImage, MAX_FILES } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";

type Item = { id: string; file: File };

export function ImageToPdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addFiles = (files: File[]) => {
    setError(null);
    try {
      for (const f of files) assertImage(f);
      const next = [...items, ...files.map((file) => ({ id: crypto.randomUUID(), file }))];
      if (next.length > MAX_FILES) {
        throw new Error(`Add up to ${MAX_FILES} images at a time.`);
      }
      setItems(next);
    } catch (e) {
      setError((e as Error).message);
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

  const create = async () => {
    setError(null);
    if (items.length === 0) {
      setError("Add at least one image first.");
      return;
    }
    setBusy(true);
    try {
      const { PDFDocument } = await loadPdfLib();
      const pdf = await PDFDocument.create();
      for (const { file } of items) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        let image;
        if (file.type === "image/png" || /\.png$/i.test(file.name)) {
          image = await pdf.embedPng(bytes);
        } else if (file.type === "image/webp" || /\.webp$/i.test(file.name)) {
          // pdf-lib can't embed WebP directly — re-encode via canvas to PNG
          const png = await webpToPng(file);
          image = await pdf.embedPng(png);
        } else {
          image = await pdf.embedJpg(bytes);
        }
        const page = pdf.addPage([image.width, image.height]);
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
      }
      const out = await pdf.save();
      downloadBlob(out, "images.pdf", "application/pdf");
    } catch (e) {
      setError((e as Error).message || "We couldn't create your PDF. Try fewer or smaller images.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="Image to PDF" subtitle="Combine JPG, PNG and WebP images into one document.">
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
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton busy={busy} onClick={create} disabled={items.length === 0}>
          {busy ? "Creating PDF…" : "Create PDF"}
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
      <ToolError message={error} />
    </ToolShell>
  );
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

- [ ] **Step 3: Page**

Create `src/app/image-to-pdf/page.tsx`:
```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { ImageToPdfTool } from "@/components/tools/ImageToPdfTool";
import content from "@/content/tools/image-to-pdf";

const route = getRoute("/image-to-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<ImageToPdfTool />} />;
}
```

- [ ] **Step 4: Manual verification**

Run:
```bash
npm run dev
```
Open http://localhost:3000/image-to-pdf. Confirm:
- Hero, privacy note, how-to, use cases, limitations, related, FAQ, App CTA all render.
- Drop 2-3 JPGs → list appears.
- Click Create PDF → file downloads.
- View source: H1, intro paragraph, FAQ questions are present in initial HTML (no JS execution required).

- [ ] **Step 5: Commit**
```bash
git add src/content/tools/image-to-pdf.ts src/components/tools/ImageToPdfTool.tsx src/app/image-to-pdf/
git commit -m "feat(tools): add /image-to-pdf with browser-only JPG/PNG/WebP conversion"
```

---

## Task 7: Merge PDF tool (replaces existing hub page)

**Files:**
- Create: `src/content/tools/merge-pdf.ts`
- Create: `src/components/tools/MergePdfTool.tsx`
- Modify: `src/app/merge-pdf/page.tsx`

- [ ] **Step 1: Content**

Create `src/content/tools/merge-pdf.ts`. Reuse copy from the existing `src/content/hubs/merge-pdf.ts` where it still applies, but adapt to the `ToolContent` shape and shift it from "do this in the app" to "do this here, in your browser, and the app also exists for mobile":
```ts
import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "Merge PDF",
    h1: "Combine PDFs into one document — in your browser.",
    highlight: "in your browser",
    lead: "Stack scans, quotes, contracts and one-off pages into a single PDF without sending them to a server. Drag, drop, reorder, merge.",
  },
  privacyNote:
    "Your files are processed locally in your browser and are not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to merge PDFs",
    steps: [
      { title: "Add your PDFs", body: "Drag and drop two or more PDFs, or click to choose them from your device." },
      { title: "Reorder if needed", body: "Use the arrows on each row to put pages in the right sequence before merging." },
      { title: "Merge", body: "Click Merge PDFs. Your files are combined locally in your browser." },
      { title: "Download", body: "The combined PDF downloads automatically. Rename it after saving." },
    ],
  },
  useCases: {
    heading: "When merging is the right call",
    items: [
      { title: "Send one file, not five", body: "Customers, accountants and lawyers prefer one document over a thread of attachments." },
      { title: "Bundle quote + contract + invoice", body: "Build a single audit-friendly file from documents created in different tools." },
      { title: "Pack scanned pages", body: "Combine page-by-page scans of a passport, ID or contract into a single document a portal will accept." },
      { title: "Compose a report", body: "Stitch a cover page, a body PDF, and supporting appendices into one deliverable." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "Password-protected PDFs", body: "Locked files can't be merged in-browser. Unlock with the source app first, or use the PDF Editor mobile app." },
      { title: "Very large bundles", body: "Browsers run out of memory long before native apps do. For 50+ files or huge scans, use the PDF Editor app." },
      { title: "Bookmarks and form fields", body: "Some embedded structures (form fields, annotations) may flatten on merge. The mobile app preserves them better." },
    ],
  },
  related: [
    { label: "Split PDF — the reverse", path: "/split-pdf" },
    { label: "Rotate PDF pages", path: "/rotate-pdf" },
    { label: "All free PDF tools", path: "/pdf-tools" },
    { label: "Guide: how to merge PDFs", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    { q: "Are my files uploaded?", a: "No. The merge runs entirely in your browser. Your files never leave your device." },
    { q: "Is there a limit on how many PDFs I can merge?", a: "There's no hard cap, but we recommend keeping a single batch under 30 files or ~500 MB total so the browser stays responsive." },
    { q: "Can I merge password-protected PDFs?", a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app, which supports protected files." },
    { q: "Will the original formatting change?", a: "No. Each source page is preserved exactly. Only the page order and the wrapping document change." },
    { q: "Can I unmerge it later?", a: "Yes. Use the Split PDF tool to break any merged file back into pages or ranges." },
  ],
  appCta: {
    heading: "Need PDF tools on the go?",
    sub: "PDF Editor for iPhone and Android merges, signs and scans PDFs from your phone.",
  },
};

export default content;
```

- [ ] **Step 2: Tool component**

Create `src/components/tools/MergePdfTool.tsx`:
```tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertPdf, MAX_FILES } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";

type Item = { id: string; file: File };

export function MergePdfTool() {
  const [items, setItems] = useState<Item[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addFiles = (files: File[]) => {
    setError(null);
    try {
      for (const f of files) assertPdf(f);
      const next = [...items, ...files.map((file) => ({ id: crypto.randomUUID(), file }))];
      if (next.length > MAX_FILES) throw new Error(`Add up to ${MAX_FILES} PDFs at a time.`);
      setItems(next);
    } catch (e) {
      setError((e as Error).message);
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

  const merge = async () => {
    setError(null);
    if (items.length < 2) {
      setError("Add at least two PDFs to merge.");
      return;
    }
    setBusy(true);
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
      downloadBlob(bytes, "merged.pdf", "application/pdf");
    } catch (e) {
      setError((e as Error).message || "Merge failed. Try fewer or smaller files.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="Merge PDFs" subtitle="Combine multiple PDFs into a single document.">
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
        <ProcessButton busy={busy} onClick={merge} disabled={items.length < 2}>
          {busy ? "Merging…" : "Merge PDFs"}
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
      <ToolError message={error} />
    </ToolShell>
  );
}
```

- [ ] **Step 3: Switch the page to ToolPage**

Replace contents of `src/app/merge-pdf/page.tsx`:
```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { MergePdfTool } from "@/components/tools/MergePdfTool";
import content from "@/content/tools/merge-pdf";

const route = getRoute("/merge-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<MergePdfTool />} />;
}
```

The old `src/content/hubs/merge-pdf.ts` is now unused. Delete it to keep the codebase honest:
```bash
git rm src/content/hubs/merge-pdf.ts
```

- [ ] **Step 4: Manual verification**

Run `npm run dev`, visit `/merge-pdf`. Confirm:
- Hero, privacy note, how-to, related, FAQ visible in initial HTML.
- Drop two test PDFs → list appears.
- Click Merge → file downloads, opens correctly.

- [ ] **Step 5: Commit**
```bash
git add src/content/tools/merge-pdf.ts src/components/tools/MergePdfTool.tsx src/app/merge-pdf/page.tsx
git rm src/content/hubs/merge-pdf.ts
git commit -m "feat(tools): /merge-pdf now actually merges PDFs in the browser"
```

---

## Task 8: Split PDF tool (replaces existing hub page)

**Files:**
- Create: `src/content/tools/split-pdf.ts`
- Create: `src/components/tools/SplitPdfTool.tsx`
- Modify: `src/app/split-pdf/page.tsx`
- Delete: `src/content/hubs/split-pdf.ts`

- [ ] **Step 1: Content**

Create `src/content/tools/split-pdf.ts`:
```ts
import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Split PDF",
    h1: "Extract pages from a PDF — privately, in your browser.",
    highlight: "in your browser",
    lead: "Pick any pages or ranges (e.g. 1-3,5,8-10) and download them as a new PDF. Your file never leaves your device.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to split a PDF",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a single PDF, or click to choose it." },
      { title: "Enter page ranges", body: "Type pages and ranges separated by commas. Example: 1-3,5,8-10." },
      { title: "Split", body: "Click Extract Pages. We build a new PDF with just those pages, locally." },
      { title: "Download", body: "The new PDF downloads automatically. Rename it after saving." },
    ],
  },
  useCases: {
    heading: "When splitting is the right call",
    items: [
      { title: "Send just the relevant pages", body: "Share only the contract clause that matters, not the entire document." },
      { title: "Separate a scanned batch", body: "Break a multi-document scan back into individual files." },
      { title: "Pull a single page from a report", body: "Extract one chart or table without exposing the rest of the file." },
      { title: "Build a cleaner attachment", body: "Trim cover pages, blank pages or appendices before emailing." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "Password-protected PDFs", body: "Locked files can't be split in-browser. Unlock first or use the PDF Editor app." },
      { title: "Very large files", body: "Browsers may run out of memory on documents over a few hundred megabytes." },
      { title: "No per-range output", body: "This tool exports one combined PDF containing the chosen pages. For multiple output files, run it twice." },
    ],
  },
  related: [
    { label: "Merge PDF — the reverse", path: "/merge-pdf" },
    { label: "Rotate PDF pages", path: "/rotate-pdf" },
    { label: "PDF to images", path: "/pdf-to-images" },
    { label: "All free PDF tools", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Are my files uploaded?", a: "No. Splitting runs entirely in your browser; your file never leaves your device." },
    { q: "What's the page-range syntax?", a: "Comma-separated pages and ranges. Example: 1-3,5,8-10 keeps pages 1, 2, 3, 5, 8, 9 and 10." },
    { q: "Can I split a password-protected PDF?", a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app." },
    { q: "Will the output keep original quality?", a: "Yes — pages are copied byte-for-byte. No re-rendering, no quality loss." },
  ],
  appCta: {
    heading: "Splitting on the go?",
    sub: "PDF Editor for iPhone and Android splits and merges PDFs from your phone.",
  },
};

export default content;
```

- [ ] **Step 2: Tool component**

Create `src/components/tools/SplitPdfTool.tsx`:
```tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { parsePageRange } from "@/lib/tools/pageRange";

export function SplitPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [range, setRange] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFiles = async (files: File[]) => {
    setError(null);
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
      setError((e as Error).message);
    }
  };

  const split = async () => {
    setError(null);
    if (!file || !pageCount) return;
    let pages: number[];
    try {
      pages = parsePageRange(range, pageCount);
    } catch (e) {
      setError((e as Error).message);
      return;
    }
    setBusy(true);
    try {
      const { PDFDocument } = await loadPdfLib();
      const bytes = new Uint8Array(await file.arrayBuffer());
      const src = await PDFDocument.load(bytes);
      const out = await PDFDocument.create();
      const copied = await out.copyPages(src, pages.map((p) => p - 1));
      for (const p of copied) out.addPage(p);
      const result = await out.save();
      const base = file.name.replace(/\.pdf$/i, "");
      downloadBlob(result, `${base}-pages-${pages[0]}-to-${pages[pages.length - 1]}.pdf`, "application/pdf");
    } catch (e) {
      setError((e as Error).message || "Split failed. Try a smaller file.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="Split PDF" subtitle="Extract pages or ranges into a new document.">
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
          <label className="block text-sm font-semibold text-[--color-ink] mb-2">
            Pages to keep ({pageCount} total)
          </label>
          <input
            type="text"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            placeholder="e.g. 1-3,5,8-10"
            className="w-full rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-[--color-ink] focus:outline-none focus:border-[--color-brand]"
          />
        </div>
      ) : null}
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton busy={busy} onClick={split} disabled={!file || !range.trim()}>
          {busy ? "Extracting…" : "Extract pages"}
        </ProcessButton>
      </div>
      <ToolError message={error} />
    </ToolShell>
  );
}
```

- [ ] **Step 3: Page**

Replace `src/app/split-pdf/page.tsx`:
```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { SplitPdfTool } from "@/components/tools/SplitPdfTool";
import content from "@/content/tools/split-pdf";

const route = getRoute("/split-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<SplitPdfTool />} />;
}
```

- [ ] **Step 4: Manual verification**

`npm run dev` → `/split-pdf`. Drop a PDF, enter `1-2` → download contains 2 pages.

- [ ] **Step 5: Commit**
```bash
git add src/content/tools/split-pdf.ts src/components/tools/SplitPdfTool.tsx src/app/split-pdf/page.tsx
git rm src/content/hubs/split-pdf.ts
git commit -m "feat(tools): /split-pdf now extracts page ranges in the browser"
```

---

## Task 9: Rotate PDF tool

**Files:**
- Create: `src/content/tools/rotate-pdf.ts`
- Create: `src/components/tools/RotatePdfTool.tsx`
- Create: `src/app/rotate-pdf/page.tsx`

- [ ] **Step 1: Content**

Create `src/content/tools/rotate-pdf.ts`:
```ts
import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "Rotate PDF",
    h1: "Fix sideways PDF pages — in your browser.",
    highlight: "in your browser",
    lead: "Rotate every page by 90°, 180° or 270°, or pick specific pages. Your file never leaves your device.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to rotate a PDF",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a single PDF, or click to choose it." },
      { title: "Choose an angle", body: "Pick 90°, 180° or 270° (clockwise)." },
      { title: "Choose which pages", body: "Rotate every page, or enter page numbers (e.g. 1,3-5)." },
      { title: "Rotate and download", body: "Click Rotate. We rebuild the PDF locally with the new orientation." },
    ],
  },
  useCases: {
    heading: "When rotating is the right call",
    items: [
      { title: "Phone scans landed sideways", body: "Camera-roll scans often save in landscape — flip them in one click." },
      { title: "Mixed orientation reports", body: "Wide tables on landscape pages mixed into a portrait report? Fix them without re-scanning." },
      { title: "Passports and ID cards", body: "Ensure every page reads the same way before a government portal complains." },
      { title: "Receipts and invoices", body: "Make a stack of receipt photos readable in one direction before merging." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "Password-protected PDFs", body: "Locked files can't be rotated in-browser. Unlock first, or use the PDF Editor mobile app." },
      { title: "Per-page custom angles", body: "This tool applies one angle at a time. For mixed angles, run it twice with different page selections." },
      { title: "Annotations and form fields", body: "Rotation may visually shift overlays. The mobile app handles annotations more cleanly." },
    ],
  },
  related: [
    { label: "Merge PDF files", path: "/merge-pdf" },
    { label: "Split PDF", path: "/split-pdf" },
    { label: "Add watermark to PDF", path: "/add-watermark-to-pdf" },
    { label: "All free PDF tools", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Is my file uploaded?", a: "No. Rotation runs entirely in your browser; nothing leaves your device." },
    { q: "Can I rotate only some pages?", a: "Yes. Use the page-selection field, e.g. 1,3-5,9." },
    { q: "Does rotation reduce quality?", a: "No. Pages are kept byte-for-byte; we just set the rotation metadata." },
    { q: "Can I rotate a password-protected PDF?", a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app." },
  ],
  appCta: {
    heading: "Rotate from your phone too.",
    sub: "PDF Editor for iPhone and Android edits, rotates and signs PDFs offline.",
  },
};

export default content;
```

- [ ] **Step 2: Tool component**

Create `src/components/tools/RotatePdfTool.tsx`:
```tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";
import { parsePageRange } from "@/lib/tools/pageRange";

type Angle = 90 | 180 | 270;

export function RotatePdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [angle, setAngle] = useState<Angle>(90);
  const [scope, setScope] = useState<"all" | "some">("all");
  const [range, setRange] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFiles = async (files: File[]) => {
    setError(null);
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
      setError((e as Error).message);
    }
  };

  const run = async () => {
    setError(null);
    if (!file || !pageCount) return;
    setBusy(true);
    try {
      const { PDFDocument, degrees } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await file.arrayBuffer()));
      const indices =
        scope === "all"
          ? doc.getPageIndices()
          : parsePageRange(range, pageCount).map((p) => p - 1);
      for (const i of indices) {
        const page = doc.getPage(i);
        const current = page.getRotation().angle;
        page.setRotation(degrees((current + angle) % 360));
      }
      const out = await doc.save();
      downloadBlob(out, file.name.replace(/\.pdf$/i, "") + "-rotated.pdf", "application/pdf");
    } catch (e) {
      setError((e as Error).message || "Rotation failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="Rotate PDF" subtitle="Rotate all or selected pages by 90°, 180° or 270°.">
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
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-[--color-ink] mb-2">Angle</label>
            <div className="flex gap-2">
              {[90, 180, 270].map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAngle(a as Angle)}
                  className={`px-4 py-2 rounded-xl border font-semibold ${
                    angle === a
                      ? "border-[--color-brand] bg-[--color-brand] text-white"
                      : "border-[--color-border] bg-[--color-surface] text-[--color-ink]"
                  }`}
                >
                  {a}°
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[--color-ink] mb-2">Scope</label>
            <div className="flex gap-2 items-center">
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" checked={scope === "all"} onChange={() => setScope("all")} />
                All pages
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" checked={scope === "some"} onChange={() => setScope("some")} />
                Some pages
              </label>
            </div>
            {scope === "some" ? (
              <input
                type="text"
                value={range}
                onChange={(e) => setRange(e.target.value)}
                placeholder="e.g. 1,3-5"
                className="mt-2 w-full rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-[--color-ink] focus:outline-none focus:border-[--color-brand]"
              />
            ) : null}
          </div>
        </div>
      ) : null}
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton busy={busy} onClick={run} disabled={!file || (scope === "some" && !range.trim())}>
          {busy ? "Rotating…" : "Rotate PDF"}
        </ProcessButton>
      </div>
      <ToolError message={error} />
    </ToolShell>
  );
}
```

- [ ] **Step 3: Page**

Create `src/app/rotate-pdf/page.tsx`:
```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { RotatePdfTool } from "@/components/tools/RotatePdfTool";
import content from "@/content/tools/rotate-pdf";

const route = getRoute("/rotate-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<RotatePdfTool />} />;
}
```

- [ ] **Step 4: Manual verification**

`/rotate-pdf` — load a PDF, choose 90°, rotate all → downloads with pages on their side.

- [ ] **Step 5: Commit**
```bash
git add src/content/tools/rotate-pdf.ts src/components/tools/RotatePdfTool.tsx src/app/rotate-pdf/
git commit -m "feat(tools): add /rotate-pdf with selective page rotation"
```

---

## Task 10: PDF to images tool

**Files:**
- Create: `src/content/tools/pdf-to-images.ts`
- Create: `src/components/tools/PdfToImagesTool.tsx`
- Create: `src/app/pdf-to-images/page.tsx`

- [ ] **Step 1: Content**

Create `src/content/tools/pdf-to-images.ts`:
```ts
import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF to images",
    h1: "Export each PDF page as a PNG or JPG.",
    highlight: "PNG or JPG",
    lead: "Render every page of a PDF as a sharp image, ready to drop into a slide deck or a chat. Files stay on your device.",
  },
  privacyNote:
    "Your file is rendered locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to convert PDF to images",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a single PDF, or click to choose it." },
      { title: "Pick format", body: "Choose PNG for clean text and transparency, or JPG for smaller files." },
      { title: "Pick scale", body: "Higher scale = sharper images, larger files. 2× is usually right." },
      { title: "Download", body: "Each page downloads as a separate image." },
    ],
  },
  useCases: {
    heading: "When this tool is useful",
    items: [
      { title: "Drop a page into Slack", body: "Image previews render inline where PDFs don't." },
      { title: "Reuse a chart in a deck", body: "Pull one page out and paste it into a slide." },
      { title: "Make thumbnails", body: "Build a contact sheet of PDF pages for quick review." },
      { title: "Web previews", body: "Use rendered images as lightweight previews on a website." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "Browser memory", body: "Very large PDFs at high scale can exhaust memory. Try 1.5× scale or split the PDF first." },
      { title: "Password-protected PDFs", body: "Encrypted files can't be rendered. Unlock first, or use the PDF Editor mobile app." },
      { title: "Vector content becomes raster", body: "Images don't preserve searchable text. Keep the original PDF for that." },
    ],
  },
  related: [
    { label: "Image to PDF — the reverse", path: "/image-to-pdf" },
    { label: "Split PDF", path: "/split-pdf" },
    { label: "All free PDF tools", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Is my file uploaded?", a: "No. Rendering runs entirely in your browser; nothing leaves your device." },
    { q: "PNG or JPG — which should I pick?", a: "PNG is sharper for text and supports transparency. JPG is smaller and fine for photos and full-page screenshots." },
    { q: "What does scale mean?", a: "How many image pixels per PDF point. 2× yields sharp results on retina screens. 3× is large but very crisp." },
    { q: "Can I get a single ZIP of all pages?", a: "Not yet — pages download one by one. For batch export, the PDF Editor mobile app is faster." },
  ],
  appCta: {
    heading: "Need PDF tools offline?",
    sub: "PDF Editor for iPhone and Android renders pages instantly with hardware acceleration.",
  },
};

export default content;
```

- [ ] **Step 2: Tool component**

Create `src/components/tools/PdfToImagesTool.tsx`:
```tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfJs } from "@/lib/tools/pdfjs";

type Format = "png" | "jpeg";

export function PdfToImagesTool() {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<Format>("png");
  const [scale, setScale] = useState(2);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onFiles = (files: File[]) => {
    setError(null);
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      setFile(f);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const run = async () => {
    setError(null);
    if (!file) return;
    setBusy(true);
    setProgress("Loading PDF…");
    try {
      const pdfjs = await loadPdfJs();
      const bytes = new Uint8Array(await file.arrayBuffer());
      const doc = await pdfjs.getDocument({ data: bytes }).promise;
      const base = file.name.replace(/\.pdf$/i, "");
      for (let i = 1; i <= doc.numPages; i++) {
        setProgress(`Rendering page ${i} of ${doc.numPages}…`);
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
        const quality = format === "jpeg" ? 0.92 : undefined;
        const blob: Blob = await new Promise((resolve, reject) =>
          canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new Error("Encoding failed."))),
            mime,
            quality,
          ),
        );
        downloadBlob(blob, `${base}-page-${String(i).padStart(2, "0")}.${ext}`, mime);
        // Yield to the browser so downloads stagger and the UI doesn't lock.
        await new Promise((r) => setTimeout(r, 100));
      }
      setProgress(`Done — ${doc.numPages} image${doc.numPages === 1 ? "" : "s"} downloaded.`);
    } catch (e) {
      setError((e as Error).message || "Rendering failed. Try a smaller PDF or lower scale.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="PDF to images" subtitle="Render each page as a PNG or JPG.">
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
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-[--color-ink] mb-2">Format</label>
          <div className="flex gap-2">
            {(["png", "jpeg"] as Format[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFormat(f)}
                className={`px-4 py-2 rounded-xl border font-semibold uppercase ${
                  format === f
                    ? "border-[--color-brand] bg-[--color-brand] text-white"
                    : "border-[--color-border] bg-[--color-surface] text-[--color-ink]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[--color-ink] mb-2">
            Scale: {scale}×
          </label>
          <input
            type="range"
            min={1}
            max={3}
            step={0.5}
            value={scale}
            onChange={(e) => setScale(Number(e.currentTarget.value))}
            className="w-full"
          />
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton busy={busy} onClick={run} disabled={!file}>
          {busy ? "Rendering…" : "Export images"}
        </ProcessButton>
        {progress ? <span className="text-sm text-[--color-muted]">{progress}</span> : null}
      </div>
      <ToolError message={error} />
    </ToolShell>
  );
}
```

- [ ] **Step 3: Page**

Create `src/app/pdf-to-images/page.tsx`:
```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { PdfToImagesTool } from "@/components/tools/PdfToImagesTool";
import content from "@/content/tools/pdf-to-images";

const route = getRoute("/pdf-to-images");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<PdfToImagesTool />} />;
}
```

- [ ] **Step 4: Manual verification**

`/pdf-to-images` — load a 3-page PDF, scale 2, PNG → three PNGs download.

- [ ] **Step 5: Commit**
```bash
git add src/content/tools/pdf-to-images.ts src/components/tools/PdfToImagesTool.tsx src/app/pdf-to-images/
git commit -m "feat(tools): add /pdf-to-images using pdfjs-dist for in-browser rendering"
```

---

## Task 11: Watermark PDF tool

**Files:**
- Create: `src/content/tools/add-watermark-to-pdf.ts`
- Create: `src/components/tools/WatermarkPdfTool.tsx`
- Create: `src/app/add-watermark-to-pdf/page.tsx`

- [ ] **Step 1: Content**

Create `src/content/tools/add-watermark-to-pdf.ts`:
```ts
import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "Add watermark",
    h1: "Add a text watermark to every page of a PDF.",
    highlight: "every page",
    lead: "Stamp CONFIDENTIAL, DRAFT, or your own text across every page of a PDF — diagonally and translucently, just like you'd want.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to add a watermark",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a single PDF, or click to choose it." },
      { title: "Type your watermark", body: "Up to ~40 characters works best. Examples: CONFIDENTIAL, DRAFT, Sample." },
      { title: "Adjust opacity and angle", body: "Lower opacity for subtle, higher for prominent. 45° works for most layouts." },
      { title: "Download", body: "We rebuild the PDF locally with the watermark on every page." },
    ],
  },
  useCases: {
    heading: "When watermarks are useful",
    items: [
      { title: "Drafts in review", body: "Mark documents as DRAFT before circulating to avoid confusion." },
      { title: "Confidential leaks", body: "Stamp CONFIDENTIAL before sharing sensitive contracts or financials." },
      { title: "Sample materials", body: "Watermark portfolio samples so they can't be reused without permission." },
      { title: "Internal-only documents", body: "Mark documents not intended for external distribution." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "Text watermarks only", body: "This tool stamps text. For image or logo watermarks, use the PDF Editor mobile app." },
      { title: "Standard fonts only", body: "We use the built-in Helvetica font so the output stays portable. Custom fonts aren't embedded." },
      { title: "Watermarks can be removed", body: "A watermark is not legal protection. It deters casual misuse, not determined editing." },
    ],
  },
  related: [
    { label: "Merge PDF files", path: "/merge-pdf" },
    { label: "Split PDF", path: "/split-pdf" },
    { label: "Rotate PDF", path: "/rotate-pdf" },
    { label: "All free PDF tools", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Is my file uploaded?", a: "No. Watermarking runs entirely in your browser; nothing leaves your device." },
    { q: "Can I use a different font?", a: "Not in this tool — we use Helvetica so the output is portable. For custom fonts, use the PDF Editor mobile app." },
    { q: "Does the watermark go on every page?", a: "Yes. The same text is centred diagonally on every page." },
    { q: "Can a watermark be removed?", a: "By someone with the right tools, yes. A watermark deters casual misuse but isn't a security feature." },
  ],
  appCta: {
    heading: "Need image or logo watermarks?",
    sub: "PDF Editor for iPhone and Android supports custom fonts, images and per-page placement.",
  },
};

export default content;
```

- [ ] **Step 2: Tool component**

Create `src/components/tools/WatermarkPdfTool.tsx`:
```tsx
"use client";

import { useState } from "react";
import { DropZone } from "@/components/tools/primitives/DropZone";
import { FileChip } from "@/components/tools/primitives/FileChip";
import { ProcessButton } from "@/components/tools/primitives/ProcessButton";
import { ToolError } from "@/components/tools/primitives/ToolError";
import { ToolShell } from "@/components/tools/primitives/ToolShell";
import { assertPdf } from "@/lib/tools/validate";
import { downloadBlob } from "@/lib/tools/download";
import { loadPdfLib } from "@/lib/tools/pdfLib";

export function WatermarkPdfTool() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState(0.2);
  const [angleDeg, setAngleDeg] = useState(45);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFiles = (files: File[]) => {
    setError(null);
    const f = files[0];
    if (!f) return;
    try {
      assertPdf(f);
      setFile(f);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const run = async () => {
    setError(null);
    if (!file) return;
    if (!text.trim()) {
      setError("Watermark text can't be empty.");
      return;
    }
    setBusy(true);
    try {
      const { PDFDocument, StandardFonts, degrees, rgb } = await loadPdfLib();
      const doc = await PDFDocument.load(new Uint8Array(await file.arrayBuffer())).catch(() => {
        throw new Error("Could not read this PDF. It may be corrupted or password-protected.");
      });
      const font = await doc.embedFont(StandardFonts.HelveticaBold);
      for (const page of doc.getPages()) {
        const { width, height } = page.getSize();
        const fontSize = Math.min(width, height) / Math.max(text.length / 2, 8);
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        const x = (width - textWidth) / 2;
        const y = height / 2;
        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(0.85, 0.05, 0.08),
          opacity,
          rotate: degrees(angleDeg),
        });
      }
      const out = await doc.save();
      downloadBlob(out, file.name.replace(/\.pdf$/i, "") + "-watermarked.pdf", "application/pdf");
    } catch (e) {
      setError((e as Error).message || "Watermarking failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <ToolShell title="Add watermark to PDF" subtitle="Stamp text across every page.">
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
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="md:col-span-3">
          <label htmlFor="wm-text" className="block text-sm font-semibold text-[--color-ink] mb-2">
            Watermark text
          </label>
          <input
            id="wm-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            maxLength={60}
            className="w-full rounded-xl border border-[--color-border] bg-[--color-surface] px-3 py-2 text-[--color-ink] focus:outline-none focus:border-[--color-brand]"
          />
        </div>
        <div>
          <label htmlFor="wm-op" className="block text-sm font-semibold text-[--color-ink] mb-2">
            Opacity: {Math.round(opacity * 100)}%
          </label>
          <input
            id="wm-op"
            type="range"
            min={0.05}
            max={0.6}
            step={0.05}
            value={opacity}
            onChange={(e) => setOpacity(Number(e.currentTarget.value))}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="wm-angle" className="block text-sm font-semibold text-[--color-ink] mb-2">
            Angle: {angleDeg}°
          </label>
          <input
            id="wm-angle"
            type="range"
            min={0}
            max={90}
            step={5}
            value={angleDeg}
            onChange={(e) => setAngleDeg(Number(e.currentTarget.value))}
            className="w-full"
          />
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <ProcessButton busy={busy} onClick={run} disabled={!file || !text.trim()}>
          {busy ? "Stamping…" : "Add watermark"}
        </ProcessButton>
      </div>
      <ToolError message={error} />
    </ToolShell>
  );
}
```

- [ ] **Step 3: Page**

Create `src/app/add-watermark-to-pdf/page.tsx`:
```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { WatermarkPdfTool } from "@/components/tools/WatermarkPdfTool";
import content from "@/content/tools/add-watermark-to-pdf";

const route = getRoute("/add-watermark-to-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<WatermarkPdfTool />} />;
}
```

- [ ] **Step 4: Manual verification**

`/add-watermark-to-pdf` — load a PDF, default text "CONFIDENTIAL" → download has watermark on every page.

- [ ] **Step 5: Commit**
```bash
git add src/content/tools/add-watermark-to-pdf.ts src/components/tools/WatermarkPdfTool.tsx src/app/add-watermark-to-pdf/
git commit -m "feat(tools): add /add-watermark-to-pdf with adjustable opacity and angle"
```

---

## Task 12: /pdf-tools index page + footer / homepage links

**Files:**
- Create: `src/app/pdf-tools/page.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/app/page.tsx` (only if there's a natural slot — see step 4)

- [ ] **Step 1: Build the index page**

Create `src/app/pdf-tools/page.tsx`:
```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { seo } from "@/lib/seo";
import { getRoute, routesByCategory } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Hero } from "@/components/sections/Hero";
import { AppCTA } from "@/components/sections/AppCTA";
import { PrivacyNote } from "@/components/tools/primitives/PrivacyNote";

const route = getRoute("/pdf-tools");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  const tools = routesByCategory("tool").filter((r) => r.path !== "/pdf-tools");
  return (
    <>
      <Hero
        eyebrow="Free PDF tools"
        h1="Browser-based PDF tools — your files never leave your device."
        highlight="never leave"
        lead="Merge, split, rotate, watermark and convert PDFs without uploading anything. All processing runs locally in your browser, free, no signup."
      />
      <Section>
        <Container size="md">
          <PrivacyNote>
            Every tool on this page processes your files locally in your browser. Nothing is uploaded to our servers and nothing is stored.
          </PrivacyNote>
        </Container>
      </Section>
      <Section>
        <Container>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((r) => (
              <li key={r.path}>
                <Link
                  href={r.path}
                  className="block rounded-2xl border border-[--color-border] bg-[--color-surface] p-5 shadow-[var(--shadow-card)] hover:border-[--color-brand]"
                >
                  <h3 className="font-bold text-[--color-ink] mb-1">{r.title.split("—")[0]?.trim() ?? r.title}</h3>
                  <p className="text-sm text-[--color-muted] leading-relaxed">{r.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <AppCTA variant="final" heading="Need PDF tools on mobile?" sub="Get the PDF Editor app for iPhone and Android — free." />
    </>
  );
}
```

- [ ] **Step 2: Add a Tools column to the footer**

Read `src/components/layout/Footer.tsx`. Find the existing nav columns. Add a new column titled **Free Tools** with links to all six tool routes plus `/pdf-tools`. If the footer doesn't currently have nav columns, append a new section above the legal row using the same primitives the file already uses. Keep the legal/contact area unchanged.

If a snippet helps your reader, use this shape inside Footer's columns:
```tsx
<nav aria-label="Free PDF tools">
  <h4 className="text-sm font-bold text-[--color-ink] mb-3">Free tools</h4>
  <ul className="space-y-2 text-sm text-[--color-muted]">
    <li><Link href="/pdf-tools" className="hover:text-[--color-brand]">All free tools</Link></li>
    <li><Link href="/merge-pdf" className="hover:text-[--color-brand]">Merge PDF</Link></li>
    <li><Link href="/split-pdf" className="hover:text-[--color-brand]">Split PDF</Link></li>
    <li><Link href="/rotate-pdf" className="hover:text-[--color-brand]">Rotate PDF</Link></li>
    <li><Link href="/image-to-pdf" className="hover:text-[--color-brand]">Image to PDF</Link></li>
    <li><Link href="/pdf-to-images" className="hover:text-[--color-brand]">PDF to images</Link></li>
    <li><Link href="/add-watermark-to-pdf" className="hover:text-[--color-brand]">Add watermark</Link></li>
  </ul>
</nav>
```

- [ ] **Step 3: Promote tools from the homepage**

Read `src/app/page.tsx`. If it has an obvious "explore" or hubs section, add a card or row that links to `/pdf-tools` with a short pitch: "Free browser-based PDF tools — no upload, no signup." If the homepage is fully content-driven from a typed module, prefer adding a tools row server-side here in the page file (not by mutating shared content modules) so the SEO content modules stay focused on the app funnel.

Goal: at minimum, one prominent link to `/pdf-tools` exists on the homepage above the fold or in the first scroll.

- [ ] **Step 4: Manual verification**

`/pdf-tools` shows a grid of 6 tools. Footer shows the Free Tools column on every page. Homepage has a visible link to `/pdf-tools`.

- [ ] **Step 5: Commit**
```bash
git add src/app/pdf-tools/ src/components/layout/Footer.tsx src/app/page.tsx
git commit -m "feat(tools): add /pdf-tools index, footer column, and homepage link"
```

---

## Task 13: Wire tool links into existing guide pages

**Files:**
- Modify: `src/content/guides/how-to-merge-pdf-files.ts`
- Modify: `src/content/guides/how-to-edit-pdf-on-iphone.ts` (only if it already links to tools)
- Modify: `src/content/guides/how-to-edit-pdf-on-android.ts` (same caveat)

- [ ] **Step 1: Cross-link from the merge guide**

Read `src/content/guides/how-to-merge-pdf-files.ts`. In its `related` array (or equivalent), ensure `/merge-pdf` is present with a label like "Free in-browser merge tool". If the field already references `/merge-pdf` as a hub link, update the label so users understand it's now an actual tool.

- [ ] **Step 2: Scan other guide files**

For each file in `src/content/guides/`, if it discusses splitting, rotating, or any tool we now have, append a `related` entry pointing to the new tool route. Don't force-link from unrelated guides — keep relevance high so SEO doesn't degrade.

- [ ] **Step 3: Manual verification**

Open one updated guide page and confirm the new link is rendered and clickable.

- [ ] **Step 4: Commit**
```bash
git add src/content/guides/
git commit -m "feat(tools): cross-link free tools from existing guide pages where relevant"
```

---

## Task 14: Sitemap, robots, and SEO sanity

**Files:**
- Re-run existing tests; modify only if assertions need updating.
- Modify: `tests/sitemap.test.ts` (only if it hardcodes a route count)

- [ ] **Step 1: Confirm sitemap picks up new routes**

Run:
```bash
npm run test -- tests/sitemap.test.ts
```
- Expected: passes. If the test asserts a specific route count, update it to match the new total. If it asserts route presence, no change needed.

- [ ] **Step 2: Confirm SEO metadata generation**

Run:
```bash
npm run test -- tests/seo.test.ts
```
- Expected: passes.

- [ ] **Step 3: Render sitemap locally**

Run `npm run dev`, visit http://localhost:3000/sitemap.xml. Confirm all six tool URLs and `/pdf-tools` are present.

- [ ] **Step 4: Confirm robots.txt is unchanged and still allows crawling**

Visit http://localhost:3000/robots.txt. Confirm no `Disallow` rule for `/image-to-pdf`, `/pdf-tools`, etc.

- [ ] **Step 5: Commit (only if a test was edited)**

```bash
git add tests/sitemap.test.ts
git commit -m "test(tools): align sitemap test with new tool routes"
```

---

## Task 15: Full verification before claiming done

**Files:** none (verification only)

- [ ] **Step 1: Clean install to confirm postinstall script works**

Run:
```bash
rm -rf node_modules
npm install
ls public/pdfjs/pdf.worker.min.mjs
```
Expected: worker file present after install.

- [ ] **Step 2: Typecheck**

Run:
```bash
npm run typecheck
```
Expected: 0 errors.

- [ ] **Step 3: Lint**

Run:
```bash
npm run lint
```
Expected: 0 errors (warnings acceptable if pre-existing).

- [ ] **Step 4: Tests**

Run:
```bash
npm run test
```
Expected: all green, including new pageRange, validate, ToolPage, and toolRoutes suites.

- [ ] **Step 5: Production build**

Run:
```bash
npm run build
```
Expected: build succeeds. Note the bundle size for each new route — pdf-lib and pdfjs-dist are large but should appear in route-specific chunks only (verify in the build output that the home page doesn't bloat).

- [ ] **Step 6: Smoke-test every route in a real browser**

Run `npm run start` (after build) and walk through:
- /pdf-tools (lists all six)
- /image-to-pdf (drop 2 JPGs → PDF)
- /merge-pdf (drop 2 PDFs → merged)
- /split-pdf (drop 1 PDF, range 1-2 → extracted)
- /rotate-pdf (drop 1 PDF, rotate all 90° → rotated)
- /pdf-to-images (drop 1 PDF, scale 2 PNG → images)
- /add-watermark-to-pdf (drop 1 PDF, "DRAFT" → watermarked)

For each: open DevTools → Network. Confirm **no** outgoing request carries the file payload to any server. WebmasterID tracker may fire — that's fine; confirm no file content is in its body.

- [ ] **Step 7: View-source SEO check**

For each tool route, view page source (Cmd+U) and confirm the H1, lead paragraph, and at least one FAQ question appear in initial HTML — i.e. SEO content is server-rendered, only the tool slot is client.

- [ ] **Step 8: Final commit if anything changed**

If verification surfaced fixes, commit them with descriptive messages. Otherwise, this task produces no commit.

---

## Notes for the executor

- **No fake claims.** Privacy copy must match reality. If a future change introduces server processing for any tool, separate it clearly on a different page — never mix "we process this in your browser" copy with a server endpoint.
- **WebmasterID stays global.** It's mounted in `src/app/layout.tsx`; do not duplicate it inside tool pages and do not pass file names/sizes/contents into custom events.
- **Bundle weight.** `pdf-lib` (~600 KB) and `pdfjs-dist` (~2 MB including worker) are intentionally loaded via `await import()` inside event handlers. If you find yourself top-level-importing them in a `*.tsx`, stop — that defeats the lazy strategy.
- **No backend.** No API routes, no server actions, no `fetch` to internal endpoints from tool components.
- **App CTAs.** App Store and Google Play links live in `src/content/site.ts` and render via `AppCTA` / `StoreButtons`. They appear on every tool page through `ToolPage`'s two `AppCTA` instances — leave them alone.

