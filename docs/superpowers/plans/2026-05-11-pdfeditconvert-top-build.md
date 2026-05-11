# pdfeditconvert.top Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready SEO-first Next.js content site at pdfeditconvert.top that funnels organic traffic into the mobile PDF Editor app via App Store and Google Play.

**Architecture:** Next.js 15 App Router with static-first rendering, typed content modules under `src/content/`, shared SEO helpers + JSON-LD builders, route registry feeding sitemap + internal-link components. Server Components by default; client components only for Header (mobile menu) and FAQ (accordion). WebmasterID analytics in root layout via Next.js SDK with `next/script` fallback.

**Tech Stack:** Next.js 15, TypeScript (strict), Tailwind CSS v4, Geist Sans (`geist` package), `lucide-react` icons, `@webmasterid/sdk-next` (fallback `next/script`), Vitest + Testing Library for tests, Vercel deploy.

**Spec:** `docs/superpowers/specs/2026-05-11-pdfeditconvert-top-design.md`

---

## File structure overview

```
~/Desktop/pdfeditconvert-top/
├── .gitignore
├── .eslintrc.json          # extends next/core-web-vitals
├── README.md
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── vitest.config.ts
├── public/
│   ├── pdf-editor-logo.png            # full lockup (user-provided)
│   ├── pdf-editor-wordmark.svg
│   ├── pdf-editor-mark.svg
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── icon-192.png icon-512.png
│   ├── og/default.png
│   └── badges/{app-store-badge.svg,google-play-badge.svg}
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # fonts, header, footer, WebmasterID, default metadata
│   │   ├── page.tsx                   # homepage
│   │   ├── globals.css                # tokens, base, prose
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── opengraph-image.tsx        # default OG image
│   │   ├── pdf-editor/page.tsx
│   │   ├── pdf-converter/page.tsx
│   │   ├── compress-pdf/page.tsx
│   │   ├── merge-pdf/page.tsx
│   │   ├── split-pdf/page.tsx
│   │   ├── sign-pdf/page.tsx
│   │   ├── scan-to-pdf/page.tsx
│   │   ├── pdf-security/page.tsx
│   │   ├── pdf-for-business/page.tsx
│   │   ├── pdf-for-students/page.tsx
│   │   ├── guides/
│   │   │   ├── page.tsx               # guides index
│   │   │   └── [slug]/page.tsx        # dynamic guide renderer
│   │   ├── compare/[slug]/page.tsx
│   │   ├── use-cases/[slug]/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── primitives/                # Button Card Badge Container Section Prose
│   │   ├── layout/                    # Header Footer
│   │   ├── seo/                       # JsonLd Breadcrumbs
│   │   ├── sections/                  # Hero FeatureGrid AppCTA StoreButtons
│   │   │                                RelatedGuides FAQ ArticleLayout
│   │   │                                UseCaseCards CompareTable SEOContentSection
│   │   └── icons/                     # AppStoreBadge.tsx GooglePlayBadge.tsx
│   ├── content/
│   │   ├── site.ts                    # global constants
│   │   ├── schema.ts                  # JSON-LD builders
│   │   ├── hubs/                      # one .ts per hub
│   │   ├── guides/                    # one .ts per guide
│   │   ├── compare/                   # one .ts per comparison
│   │   ├── use-cases/                 # one .ts per use case
│   │   └── legal/                     # privacy + terms structured content
│   ├── lib/
│   │   ├── cn.ts                      # className util (clsx + tailwind-merge)
│   │   ├── routes.ts                  # central route registry
│   │   └── seo.ts                     # generateMetadata helper
│   └── types/
│       └── content.ts                 # shared content types
└── tests/
    ├── sitemap.test.ts                # sitemap completeness vs routes registry
    ├── seo.test.ts                    # canonicals & metadata shape
    ├── schema.test.ts                 # JSON-LD output validity
    ├── FAQ.test.tsx                   # accordion behaviour
    ├── Header.test.tsx                # mobile menu toggle
    └── StoreButtons.test.tsx          # links + aria
```

---

## Task list (33 tasks)

Sections:

- **A. Foundation** (Tasks 1–6): scaffold, tooling, tokens, lib
- **B. Components** (Tasks 7–14): primitives, sections, SEO components
- **C. Layout & SEO infra** (Tasks 15–18): root layout, sitemap, robots, OG image
- **D. Content modules** (Tasks 19–22): site.ts, schema, hub/guide content
- **E. Pages – full content** (Tasks 23–26): homepage, hubs, guides
- **F. Pages – stubs** (Tasks 27–28): remaining hubs, guides, compare, use-cases
- **G. Legal, contact, 404** (Task 29)
- **H. Tests + final verification + git** (Tasks 30–33)

---

## A. Foundation

### Task 1: Initialize Next.js project

**Files:**
- Create: `~/Desktop/pdfeditconvert-top/package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `.gitignore`, `README.md`

- [ ] **Step 1: Scaffold via create-next-app (non-interactive)**

Run from `~/Desktop`:

```bash
cd ~/Desktop && npx --yes create-next-app@latest pdfeditconvert-top \
  --typescript --tailwind --app --src-dir --eslint --no-import-alias --use-npm --turbopack
```

Expected: project scaffolded into existing `~/Desktop/pdfeditconvert-top/` directory (already contains `docs/` from the spec phase — the installer preserves it).

If the installer refuses because the directory is non-empty, instead:

```bash
mkdir -p /tmp/pdfeditconvert-bootstrap && cd /tmp/pdfeditconvert-bootstrap && \
  npx --yes create-next-app@latest pdfeditconvert-top \
  --typescript --tailwind --app --src-dir --eslint --no-import-alias --use-npm --turbopack && \
  rsync -a /tmp/pdfeditconvert-bootstrap/pdfeditconvert-top/ ~/Desktop/pdfeditconvert-top/ && \
  rm -rf /tmp/pdfeditconvert-bootstrap
```

- [ ] **Step 2: Verify dev server boots**

```bash
cd ~/Desktop/pdfeditconvert-top && npm run dev
```

Expected: dev server listening on `http://localhost:3000`. Visit it, see the default Next.js welcome. Kill with Ctrl+C.

- [ ] **Step 3: Edit `next.config.ts` for production posture**

```ts
import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default config;
```

- [ ] **Step 4: Replace generated README**

```markdown
# pdfeditconvert.top

Premium SEO-first PDF knowledge hub and funnel for the mobile PDF Editor app.

- Live: https://pdfeditconvert.top
- App Store: https://apps.apple.com/app/id6747341672
- Google Play: https://play.google.com/store/apps/details?id=com.helperg.editor.documents

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Test

```bash
npm test
```

See `docs/superpowers/specs/` for the design spec and `docs/superpowers/plans/` for the build plan.
```

- [ ] **Step 5: Sanity-check tooling versions**

```bash
node -v && npm -v && cat package.json | grep -E '"next"|"typescript"|"tailwindcss"'
```

Expected: Node ≥ 20, Next ≥ 15, Tailwind ≥ 4, TypeScript ≥ 5.

- [ ] **Step 6: Commit (do not push)**

```bash
cd ~/Desktop/pdfeditconvert-top && git add -A && \
  git commit -m "chore: scaffold Next.js 15 + Tailwind v4 + TS"
```

Note: `create-next-app` initializes git. If it didn't, run `git init -b main` first.

---

### Task 2: Install runtime + dev dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Add runtime deps**

```bash
cd ~/Desktop/pdfeditconvert-top && npm install \
  geist \
  lucide-react \
  clsx \
  tailwind-merge
```

- [ ] **Step 2: Add WebmasterID SDK (best-effort; fallback handled at integration time)**

```bash
npm install @webmasterid/sdk-next || echo "SDK not on npm — will fall back to next/script tag"
```

If install fails, note in `docs/superpowers/plans/decisions.md`:

```markdown
- 2026-05-11: @webmasterid/sdk-next not installable. Using next/script fallback per spec §9.
```

- [ ] **Step 3: Add dev deps for testing**

```bash
npm install -D \
  vitest \
  @vitest/coverage-v8 \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  jsdom \
  @types/node
```

- [ ] **Step 4: Add scripts to `package.json`**

Edit `scripts` section to be exactly:

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "vitest run",
  "test:watch": "vitest"
}
```

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "chore: add geist, lucide, vitest, testing-library deps"
```

---

### Task 3: Configure Vitest

**Files:**
- Create: `vitest.config.ts`, `tests/setup.ts`

- [ ] **Step 1: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    globals: true,
    css: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- [ ] **Step 2: Create `tests/setup.ts`**

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 3: Add path alias to `tsconfig.json`**

In `compilerOptions.paths`, ensure exactly:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

- [ ] **Step 4: Smoke-test Vitest**

Create `tests/smoke.test.ts`:

```ts
import { describe, it, expect } from "vitest";

describe("smoke", () => {
  it("runs", () => {
    expect(1 + 1).toBe(2);
  });
});
```

Run:

```bash
npm test
```

Expected: 1 passed.

- [ ] **Step 5: Remove smoke test and commit**

```bash
rm tests/smoke.test.ts && git add -A && git commit -m "chore: configure vitest with jsdom + testing-library"
```

---

### Task 4: Define design tokens and globals.css

**Files:**
- Replace: `src/app/globals.css`

- [ ] **Step 1: Replace contents of `src/app/globals.css`**

```css
@import "tailwindcss";

@theme inline {
  /* Brand palette */
  --color-brand: #E50914;
  --color-brand-2: #EF1D26;
  --color-brand-soft: #FEE2E2;

  /* Neutral */
  --color-ink: #0B1220;
  --color-muted: #4B5563;
  --color-border: #E5E7EB;
  --color-bg: #F8FAFC;
  --color-surface: #FFFFFF;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  /* Shadow */
  --shadow-card: 0 1px 2px rgba(11, 18, 32, 0.04), 0 1px 3px rgba(11, 18, 32, 0.06);
  --shadow-card-hover: 0 4px 12px rgba(229, 9, 20, 0.08), 0 2px 6px rgba(11, 18, 32, 0.06);
  --shadow-elevated: 0 12px 32px rgba(11, 18, 32, 0.08);

  /* Container */
  --container-max: 1152px;
}

:root {
  color-scheme: light;
}

html, body {
  background: var(--color-bg);
  color: var(--color-ink);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: var(--color-brand);
  color: white;
}

/* Prose (article body styling) */
.prose {
  color: var(--color-ink);
  line-height: 1.7;
  font-size: 1.0625rem;
}
.prose h2 {
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}
.prose h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
}
.prose p { margin-bottom: 1.1rem; }
.prose ul, .prose ol { margin: 1rem 0 1.25rem; padding-left: 1.25rem; }
.prose ul { list-style: disc; }
.prose ol { list-style: decimal; }
.prose li { margin-bottom: 0.4rem; }
.prose a {
  color: var(--color-brand);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
}
.prose a:hover { color: var(--color-brand-2); }
.prose strong { color: var(--color-ink); font-weight: 600; }
.prose code {
  background: var(--color-brand-soft);
  color: var(--color-ink);
  padding: 0.1rem 0.35rem;
  border-radius: 6px;
  font-size: 0.9em;
}

/* Focus ring */
:focus-visible {
  outline: 2px solid var(--color-brand);
  outline-offset: 2px;
  border-radius: 4px;
}
```

- [ ] **Step 2: Verify Tailwind v4 picks up tokens**

Add a tiny check to homepage temporarily — edit `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="p-10">
      <div className="rounded-2xl bg-[--color-surface] border border-[--color-border] shadow-card p-6">
        <h1 className="text-3xl font-bold text-[--color-ink]">
          PDF <span className="text-[--color-brand]">Editor</span>
        </h1>
      </div>
    </main>
  );
}
```

Run `npm run dev`, visit `http://localhost:3000`. Expected: two-tone heading with red "Editor", white card with subtle shadow, light background.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat(design): brand tokens, prose styles, focus ring"
```

---

### Task 5: Build core lib utilities

**Files:**
- Create: `src/lib/cn.ts`, `src/lib/routes.ts`, `src/lib/seo.ts`, `src/types/content.ts`
- Create: `tests/seo.test.ts`

- [ ] **Step 1: Write `src/lib/cn.ts`**

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Write `src/types/content.ts`**

```ts
export type RouteCategory =
  | "core"
  | "hub"
  | "guide"
  | "compare"
  | "use-case"
  | "legal"
  | "meta";

export interface RouteEntry {
  path: string;          // canonical path, leading slash
  title: string;         // <title> (without brand suffix)
  description: string;   // meta description, 140-160 chars
  category: RouteCategory;
  priority: number;      // 0.0-1.0 for sitemap
  changeFrequency:
    | "always" | "hourly" | "daily" | "weekly"
    | "monthly" | "yearly" | "never";
  hidden?: boolean;      // exclude from sitemap (e.g. 404)
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FeatureItem {
  icon: string;          // lucide icon name
  title: string;
  body: string;
}

export interface StepItem {
  title: string;
  body: string;
}

export interface RelatedLink {
  label: string;
  path: string;
}

export interface HubContent {
  slug: string;
  hero: {
    eyebrow?: string;
    h1: string;
    lead: string;
    primaryCta: { label: string; href: string };
  };
  problem: { heading: string; paragraphs: string[] };
  features: { heading: string; items: FeatureItem[] };
  steps: { heading: string; items: StepItem[] };
  mobileUseCase: { heading: string; body: string };
  faq: FaqItem[];
  related: RelatedLink[];
  appCta: { heading: string; sub: string };
}

export interface GuideContent {
  slug: string;
  h1: string;
  description: string;
  updated: string;       // ISO date
  intro: string[];       // paragraphs
  steps: StepItem[];
  tips: string[];
  mobileNote: string;
  faq: FaqItem[];
  related: RelatedLink[];
  parentHub: RelatedLink;
}

export interface CompareContent {
  slug: string;
  h1: string;
  description: string;
  intro: string[];
  rows: { feature: string; left: string; right: string }[];
  leftLabel: string;
  rightLabel: string;
  whenLeft: string[];
  whenRight: string[];
  faq: FaqItem[];
  related: RelatedLink[];
}

export interface UseCaseContent {
  slug: string;
  h1: string;
  description: string;
  intro: string[];
  workflows: { title: string; body: string }[];
  appPitch: string;
  related: RelatedLink[];
}
```

- [ ] **Step 3: Write `src/lib/routes.ts`**

```ts
import type { RouteEntry } from "@/types/content";

export const SITE_URL = "https://pdfeditconvert.top";

export const ROUTES: RouteEntry[] = [
  { path: "/", title: "PDF Editor — Edit, Convert, Sign and Scan PDFs on Mobile",
    description: "All-in-one PDF solution for work, study and life. Edit, convert, compress, merge, sign and scan PDFs from your phone with PDF Editor for iOS and Android.",
    category: "core", priority: 1.0, changeFrequency: "weekly" },

  // Hubs
  { path: "/pdf-editor", title: "PDF Editor — Edit Text, Images and Pages on Mobile",
    description: "Edit PDFs on your iPhone or Android: change text, add images, rearrange pages and sign documents. See how the PDF Editor app makes mobile editing effortless.",
    category: "hub", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pdf-converter", title: "PDF Converter — Convert PDFs to Word, JPG, PNG and More",
    description: "Convert PDFs to Word, Excel, JPG, PNG and back. Learn the cleanest mobile workflow with the PDF Editor app on iOS and Android.",
    category: "hub", priority: 0.9, changeFrequency: "monthly" },
  { path: "/compress-pdf", title: "Compress PDF — Shrink PDF File Size Without Losing Quality",
    description: "Make PDFs smaller for email, upload and storage. A simple guide to compressing PDFs on mobile with the PDF Editor app.",
    category: "hub", priority: 0.9, changeFrequency: "monthly" },
  { path: "/merge-pdf", title: "Merge PDF Files — Combine Multiple PDFs Into One",
    description: "Combine PDF documents into a single file in seconds. Step-by-step mobile workflow with the PDF Editor app for iPhone and Android.",
    category: "hub", priority: 0.9, changeFrequency: "monthly" },
  { path: "/split-pdf", title: "Split PDF — Separate Pages Into New Documents",
    description: "Split a PDF into individual pages or custom ranges. Quick guide to splitting PDFs on mobile with the PDF Editor app.",
    category: "hub", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sign-pdf", title: "Sign PDF — Add Electronic Signatures on Phone",
    description: "Sign PDFs from your phone with a real handwritten signature or typed name. Legally accepted in most workflows. Try the PDF Editor app.",
    category: "hub", priority: 0.9, changeFrequency: "monthly" },
  { path: "/scan-to-pdf", title: "Scan to PDF — Turn Paper Documents Into Clean PDFs",
    description: "Use your phone camera to scan documents, IDs and receipts into clean, searchable PDFs. The PDF Editor app handles edge detection automatically.",
    category: "hub", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pdf-security", title: "PDF Security — Password Protect and Encrypt PDFs",
    description: "Protect sensitive PDFs with passwords and encryption. Practical guide to securing documents on iPhone and Android.",
    category: "hub", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pdf-for-business", title: "PDF for Business — Contracts, Invoices and Workflows",
    description: "How small teams use PDFs for contracts, invoices and approvals. Modern mobile-first workflows with the PDF Editor app.",
    category: "hub", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pdf-for-students", title: "PDF for Students — Notes, Highlights and Study Guides",
    description: "Use PDFs for lecture notes, highlights and study guides. Smart mobile workflows with the PDF Editor app on iOS and Android.",
    category: "hub", priority: 0.7, changeFrequency: "monthly" },

  // Guides
  { path: "/guides", title: "PDF Guides — How-to Articles and Tutorials",
    description: "Practical, mobile-first PDF tutorials: edit, convert, compress, merge, sign and protect documents on iPhone and Android.",
    category: "guide", priority: 0.7, changeFrequency: "weekly" },
  { path: "/guides/how-to-edit-pdf-on-iphone", title: "How to Edit a PDF on iPhone (2026 Guide)",
    description: "Edit text, add images and rearrange pages of a PDF directly on iPhone. Step-by-step walkthrough using the PDF Editor app.",
    category: "guide", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guides/how-to-edit-pdf-on-android", title: "How to Edit a PDF on Android (2026 Guide)",
    description: "Edit PDFs on Android: change text, insert pages and sign documents. Clear step-by-step instructions using the PDF Editor app.",
    category: "guide", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guides/how-to-compress-pdf", title: "How to Compress a PDF (Without Losing Quality)",
    description: "Reduce PDF file size for email or upload without quality loss. Mobile-friendly tutorial using the PDF Editor app.",
    category: "guide", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guides/how-to-merge-pdf-files", title: "How to Merge PDF Files on Phone or Desktop",
    description: "Combine multiple PDFs into one document. Step-by-step mobile workflow with the PDF Editor app.",
    category: "guide", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides/how-to-sign-pdf-on-phone", title: "How to Sign a PDF on Your Phone",
    description: "Add legal electronic signatures to PDFs from your iPhone or Android. Practical guide using the PDF Editor app.",
    category: "guide", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides/how-to-scan-documents-to-pdf", title: "How to Scan Documents to PDF with Your Phone",
    description: "Use your phone camera to scan multi-page documents into clean PDFs. Mobile workflow with edge detection and OCR.",
    category: "guide", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides/best-pdf-app-for-students", title: "Best PDF App for Students (2026)",
    description: "What students need from a PDF app: notes, highlights, signatures and free conversions. Honest evaluation criteria.",
    category: "guide", priority: 0.6, changeFrequency: "monthly" },
  { path: "/guides/best-pdf-app-for-business", title: "Best PDF App for Business (2026)",
    description: "What small teams should look for in a PDF app: signatures, contracts, security and collaboration on mobile.",
    category: "guide", priority: 0.6, changeFrequency: "monthly" },
  { path: "/guides/pdf-vs-docx", title: "PDF vs DOCX — Which Format Should You Use?",
    description: "When to choose PDF over DOCX and vice versa. Clear comparison of editability, fidelity, signing and sharing.",
    category: "guide", priority: 0.6, changeFrequency: "monthly" },
  { path: "/guides/how-to-protect-pdf-file", title: "How to Password Protect a PDF File",
    description: "Add password protection and encryption to a PDF on mobile or desktop. Practical guide using the PDF Editor app.",
    category: "guide", priority: 0.7, changeFrequency: "monthly" },

  // Compare
  { path: "/compare/pdf-vs-docx", title: "PDF vs DOCX — Feature-by-Feature Comparison",
    description: "Compare PDF and DOCX across editability, fidelity, signing, security and sharing. Pick the right format for the job.",
    category: "compare", priority: 0.6, changeFrequency: "monthly" },
  { path: "/compare/pdf-vs-jpg", title: "PDF vs JPG — When to Use Each Format",
    description: "PDF vs JPG: when to scan, when to photograph. Compare quality, file size, OCR and document workflow fit.",
    category: "compare", priority: 0.5, changeFrequency: "monthly" },
  { path: "/compare/pdf-app-vs-online-pdf-tools", title: "PDF Apps vs Online PDF Tools — Which Is Better?",
    description: "Native PDF apps vs browser-based tools: speed, privacy and offline access compared.",
    category: "compare", priority: 0.5, changeFrequency: "monthly" },

  // Use cases
  { path: "/use-cases/students", title: "PDF Editor for Students — Notes, Highlights and Study",
    description: "How students use the PDF Editor app for lecture notes, highlights, signatures and study guides.",
    category: "use-case", priority: 0.6, changeFrequency: "monthly" },
  { path: "/use-cases/business", title: "PDF Editor for Business — Contracts and Invoices",
    description: "How small businesses use the PDF Editor app for contracts, invoices and approvals on mobile.",
    category: "use-case", priority: 0.6, changeFrequency: "monthly" },
  { path: "/use-cases/freelancers", title: "PDF Editor for Freelancers — Proposals and Signed Documents",
    description: "Workflows freelancers love: proposals, signed agreements and invoices, all from a phone.",
    category: "use-case", priority: 0.6, changeFrequency: "monthly" },
  { path: "/use-cases/remote-work", title: "PDF Editor for Remote Work — Documents Anywhere",
    description: "Work with documents on the go: scan, sign and share PDFs from any device, any location.",
    category: "use-case", priority: 0.6, changeFrequency: "monthly" },

  // Legal & meta
  { path: "/privacy-policy", title: "Privacy Policy",
    description: "How pdfeditconvert.top and hrhelperg s.r.o. handle your data.",
    category: "legal", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", title: "Terms of Service",
    description: "Terms governing your use of pdfeditconvert.top.",
    category: "legal", priority: 0.3, changeFrequency: "yearly" },
  { path: "/contact", title: "Contact — PDF Editor by hrhelperg s.r.o.",
    description: "Get in touch with the team behind PDF Editor. Email info@hrhelperg.com.",
    category: "meta", priority: 0.4, changeFrequency: "yearly" },
];

export function getRoute(path: string): RouteEntry {
  const r = ROUTES.find((x) => x.path === path);
  if (!r) throw new Error(`Unknown route: ${path}`);
  return r;
}

export function routesByCategory(category: RouteEntry["category"]) {
  return ROUTES.filter((r) => r.category === category && !r.hidden);
}
```

- [ ] **Step 4: Write `src/lib/seo.ts`**

```ts
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/routes";

const BRAND = "PDF Editor";

interface SeoInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function seo({
  title,
  description,
  path,
  ogImage = "/og/default.png",
  type = "website",
  publishedTime,
  modifiedTime,
}: SeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullOg = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND,
      type,
      images: [{ url: fullOg, width: 1200, height: 630, alt: BRAND }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullOg],
    },
    robots: { index: true, follow: true },
  };
}

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "PDF Editor — Edit, Convert, Sign and Scan PDFs",
      template: "%s | PDF Editor",
    },
    description:
      "All-in-one PDF solution for work, study and life. Edit, convert, compress, merge, sign and scan PDFs from your phone.",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: undefined, // can be added later
  };
}
```

- [ ] **Step 5: Write `tests/seo.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { seo } from "@/lib/seo";

describe("seo()", () => {
  it("sets canonical to absolute URL on pdfeditconvert.top", () => {
    const m = seo({
      title: "Compress PDF",
      description: "Shrink PDFs without quality loss.",
      path: "/compress-pdf",
    });
    expect(m.alternates?.canonical).toBe("https://pdfeditconvert.top/compress-pdf");
  });

  it("uses default OG image when none provided", () => {
    const m = seo({ title: "x", description: "y", path: "/" });
    const og = (m.openGraph?.images as any)[0];
    expect(og.url).toBe("https://pdfeditconvert.top/og/default.png");
  });

  it("supports article type with publishedTime", () => {
    const m = seo({
      title: "x", description: "y", path: "/guides/x",
      type: "article", publishedTime: "2026-05-11T00:00:00.000Z",
    });
    expect(m.openGraph?.type).toBe("article");
  });
});
```

- [ ] **Step 6: Run tests**

```bash
npm test
```

Expected: 3 passed.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat(lib): routes registry, seo helper, content types, cn util"
```

---

### Task 6: Add typecheck script and verify

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Add `typecheck` script to `package.json`**

```json
"typecheck": "tsc --noEmit"
```

- [ ] **Step 2: Run typecheck**

```bash
npm run typecheck
```

Expected: no errors.

- [ ] **Step 3: Commit if changes**

```bash
git add -A && git commit -m "chore: add typecheck script" || echo "no changes"
```

---

## B. Components

### Task 7: Primitive components — Container, Section, Button, Card, Badge, Prose

**Files:**
- Create: `src/components/primitives/Container.tsx`, `Section.tsx`, `Button.tsx`, `Card.tsx`, `Badge.tsx`, `Prose.tsx`

- [ ] **Step 1: Create `Container.tsx`**

```tsx
import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  size = "lg",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "lg" && "max-w-[1152px]",
        size === "md" && "max-w-[880px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Create `Section.tsx`**

```tsx
import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  tone = "default",
  id,
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "muted" | "brand-soft";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone === "muted" && "bg-[--color-bg]",
        tone === "brand-soft" && "bg-[--color-brand-soft]",
        className,
      )}
    >
      {children}
    </section>
  );
}
```

- [ ] **Step 3: Create `Button.tsx`**

```tsx
import { cn } from "@/lib/cn";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand] focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-[--color-brand] text-white hover:bg-[--color-brand-2]",
  secondary:
    "bg-[--color-surface] text-[--color-ink] border border-[--color-border] hover:border-[--color-brand]",
  ghost: "text-[--color-ink] hover:text-[--color-brand]",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button(
  props: Common & React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink(
  props: Common & { href: string; external?: boolean; ariaLabel?: string },
) {
  const { variant = "primary", size = "md", className, children, href, external, ariaLabel } = props;
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 4: Create `Card.tsx`**

```tsx
import { cn } from "@/lib/cn";
import Link from "next/link";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[--color-surface] border border-[--color-border]",
        "shadow-[var(--shadow-card)] p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-2xl bg-[--color-surface] border border-[--color-border]",
        "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
        "transition-shadow p-6 group",
        className,
      )}
    >
      {children}
    </Link>
  );
}
```

- [ ] **Step 5: Create `Badge.tsx`**

```tsx
import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full",
        tone === "neutral" && "bg-[--color-bg] text-[--color-muted] border border-[--color-border]",
        tone === "brand" && "bg-[--color-brand-soft] text-[--color-brand]",
        className,
      )}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 6: Create `Prose.tsx`**

```tsx
import { cn } from "@/lib/cn";

export function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("prose", className)}>{children}</div>;
}
```

- [ ] **Step 7: Typecheck and commit**

```bash
npm run typecheck && git add -A && git commit -m "feat(components): primitives — Container Section Button Card Badge Prose"
```

---

### Task 8: StoreButtons component + badges + test

**Files:**
- Create: `src/components/sections/StoreButtons.tsx`
- Create: `public/badges/app-store-badge.svg`, `public/badges/google-play-badge.svg`
- Create: `tests/StoreButtons.test.tsx`

- [ ] **Step 1: Create `public/badges/app-store-badge.svg`**

Inline SVG following the Apple "Download on the App Store" guidelines (black pill, white text). Save as `public/badges/app-store-badge.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 60" role="img" aria-label="Download on the App Store">
  <rect width="180" height="60" rx="10" fill="#000"/>
  <g fill="#fff">
    <path d="M40.7 31.3c0-3.5 2.9-5.2 3-5.3-1.6-2.4-4.2-2.7-5.1-2.7-2.2-.2-4.2 1.3-5.3 1.3-1.1 0-2.8-1.3-4.6-1.2-2.4 0-4.6 1.4-5.8 3.5-2.5 4.3-.6 10.7 1.8 14.2 1.2 1.7 2.6 3.6 4.5 3.6 1.8-.1 2.5-1.2 4.7-1.2 2.2 0 2.8 1.2 4.7 1.1 1.9 0 3.2-1.8 4.4-3.5 1.4-2 2-3.9 2-4 0 0-3.8-1.4-3.8-5.8zM37.3 21c1-1.2 1.7-2.9 1.5-4.6-1.5.1-3.3 1-4.3 2.2-1 1.1-1.8 2.8-1.6 4.5 1.6.1 3.4-.8 4.4-2.1z"/>
    <text x="55" y="27" font-family="Helvetica,Arial,sans-serif" font-size="10" font-weight="400">Download on the</text>
    <text x="55" y="44" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="700">App Store</text>
  </g>
</svg>
```

- [ ] **Step 2: Create `public/badges/google-play-badge.svg`**

Save as `public/badges/google-play-badge.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" role="img" aria-label="Get it on Google Play">
  <rect width="200" height="60" rx="10" fill="#000"/>
  <g transform="translate(14 14)">
    <path d="M0 0v32l16-16L0 0z" fill="#5BC9F4"/>
    <path d="M0 0l24 14L16 16 0 0z" fill="#FFCE03"/>
    <path d="M0 32l16-16 8 2L0 32z" fill="#FF5252"/>
    <path d="M24 14l10 6c2 1 2 4 0 5l-10 5-8-2 8-14z" fill="#03DA00"/>
  </g>
  <g fill="#fff">
    <text x="58" y="26" font-family="Helvetica,Arial,sans-serif" font-size="10" font-weight="400">GET IT ON</text>
    <text x="58" y="44" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="700">Google Play</text>
  </g>
</svg>
```

(Placeholder badges. User can replace with official Apple/Google asset-kit SVGs by overwriting these two files — no code changes needed.)

- [ ] **Step 3: Create `src/components/sections/StoreButtons.tsx`**

```tsx
import { cn } from "@/lib/cn";

const APP_STORE = "https://apps.apple.com/app/id6747341672";
const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.helperg.editor.documents&pcampaignid=web_share";

type Size = "md" | "lg";

const sizes: Record<Size, { width: number; height: number }> = {
  md: { width: 156, height: 52 },
  lg: { width: 180, height: 60 },
};

export function StoreButtons({
  size = "md",
  align = "left",
  className,
  appStoreLabel = "Download PDF Editor on the App Store",
  googlePlayLabel = "Get PDF Editor on Google Play",
}: {
  size?: Size;
  align?: "left" | "center";
  className?: string;
  appStoreLabel?: string;
  googlePlayLabel?: string;
}) {
  const { width, height } = sizes[size];
  return (
    <div
      className={cn(
        "flex flex-wrap gap-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      <a
        href={APP_STORE}
        target="_blank"
        rel="noopener"
        aria-label={appStoreLabel}
        className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand] rounded-xl"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/badges/app-store-badge.svg"
          alt=""
          width={width}
          height={height}
          loading="eager"
          decoding="async"
        />
      </a>
      <a
        href={GOOGLE_PLAY}
        target="_blank"
        rel="noopener"
        aria-label={googlePlayLabel}
        className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand] rounded-xl"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/badges/google-play-badge.svg"
          alt=""
          width={Math.round(width * (200 / 180))}
          height={height}
          loading="eager"
          decoding="async"
        />
      </a>
    </div>
  );
}
```

(Use `<img>` rather than `next/image` because these are tiny SVGs and we want zero JS overhead.)

- [ ] **Step 4: Create `tests/StoreButtons.test.tsx`**

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StoreButtons } from "@/components/sections/StoreButtons";

describe("StoreButtons", () => {
  it("renders App Store link with descriptive aria-label", () => {
    render(<StoreButtons />);
    const a = screen.getByLabelText(/App Store/i);
    expect(a).toHaveAttribute("href", expect.stringContaining("apps.apple.com"));
    expect(a).toHaveAttribute("target", "_blank");
    expect(a).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("renders Google Play link with bundle id", () => {
    render(<StoreButtons />);
    const a = screen.getByLabelText(/Google Play/i);
    expect(a.getAttribute("href")).toContain(
      "com.helperg.editor.documents",
    );
  });
});
```

- [ ] **Step 5: Run tests**

```bash
npm test
```

Expected: 5 passed (3 seo + 2 StoreButtons).

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat(components): StoreButtons + placeholder Apple/Google badges"
```

---

### Task 9: AppCTA, FeatureGrid, Hero, RelatedGuides sections

**Files:**
- Create: `src/components/sections/AppCTA.tsx`, `FeatureGrid.tsx`, `Hero.tsx`, `RelatedGuides.tsx`

- [ ] **Step 1: Create `AppCTA.tsx`**

```tsx
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { StoreButtons } from "@/components/sections/StoreButtons";

type Variant = "hero" | "inline" | "final";

export function AppCTA({
  variant = "final",
  heading,
  sub,
}: {
  variant?: Variant;
  heading: string;
  sub?: string;
}) {
  if (variant === "inline") {
    return (
      <div className="my-10 rounded-2xl border border-[--color-border] bg-[--color-surface] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 shadow-[var(--shadow-card)]">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[--color-ink]">{heading}</h3>
          {sub ? <p className="text-[--color-muted] mt-1">{sub}</p> : null}
        </div>
        <StoreButtons size="md" />
      </div>
    );
  }
  if (variant === "hero") {
    return (
      <div className="space-y-5">
        <StoreButtons size="lg" />
        {sub ? (
          <p className="text-sm text-[--color-muted]">{sub}</p>
        ) : null}
      </div>
    );
  }
  return (
    <Section tone="brand-soft">
      <Container size="md" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink]">
          {heading}
        </h2>
        {sub ? (
          <p className="mt-3 text-lg text-[--color-muted]">{sub}</p>
        ) : null}
        <div className="mt-7 flex justify-center">
          <StoreButtons size="lg" align="center" />
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Create `FeatureGrid.tsx`**

```tsx
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import * as Icons from "lucide-react";
import type { FeatureItem } from "@/types/content";

function Icon({ name }: { name: string }) {
  const Comp = (Icons as any)[name] ?? Icons.Sparkles;
  return <Comp className="h-6 w-6 text-[--color-brand]" aria-hidden />;
}

export function FeatureGrid({
  heading,
  sub,
  items,
  cols = 3,
}: {
  heading?: string;
  sub?: string;
  items: FeatureItem[];
  cols?: 2 | 3 | 4 | 5;
}) {
  const gridCols =
    cols === 5
      ? "md:grid-cols-3 lg:grid-cols-5"
      : cols === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : cols === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3";

  return (
    <Section>
      <Container>
        {heading ? (
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink]">
              {heading}
            </h2>
            {sub ? <p className="mt-3 text-lg text-[--color-muted]">{sub}</p> : null}
          </div>
        ) : null}
        <ul className={`grid grid-cols-1 ${gridCols} gap-6`}>
          {items.map((f) => (
            <li
              key={f.title}
              className="rounded-2xl bg-[--color-surface] border border-[--color-border] p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[--color-brand-soft] mb-4">
                <Icon name={f.icon} />
              </div>
              <h3 className="text-lg font-semibold text-[--color-ink]">{f.title}</h3>
              <p className="mt-2 text-[--color-muted] leading-relaxed">{f.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 3: Create `Hero.tsx`**

```tsx
import { Container } from "@/components/primitives/Container";
import { StoreButtons } from "@/components/sections/StoreButtons";
import Link from "next/link";

export function Hero({
  eyebrow,
  h1,
  highlight,
  lead,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow?: string;
  h1: string;             // e.g. "Edit PDFs on your phone"
  highlight?: string;     // word inside h1 to highlight red
  lead: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const renderH1 = () => {
    if (!highlight) return h1;
    const parts = h1.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-[--color-brand]">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-16">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-wide text-[--color-brand] mb-4">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-[--color-ink]">
            {renderH1()}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[--color-muted] leading-relaxed">{lead}</p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <StoreButtons size="lg" />
            {secondaryHref ? (
              <Link
                href={secondaryHref}
                className="text-sm font-semibold text-[--color-ink] hover:text-[--color-brand]"
              >
                {secondaryLabel ?? "Learn more"} →
              </Link>
            ) : null}
          </div>
          <p className="mt-6 text-sm text-[--color-muted]">
            Available on iOS and Android · Free to try
          </p>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4: Create `RelatedGuides.tsx`**

```tsx
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { CardLink } from "@/components/primitives/Card";
import type { RelatedLink } from "@/types/content";

export function RelatedGuides({
  heading = "Related guides",
  items,
}: {
  heading?: string;
  items: RelatedLink[];
}) {
  if (!items.length) return null;
  return (
    <Section tone="muted">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[--color-ink] mb-8">
          {heading}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((r) => (
            <li key={r.path}>
              <CardLink href={r.path}>
                <span className="text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                  {r.label}
                </span>
                <span className="block mt-3 text-sm text-[--color-muted]">
                  Read the guide →
                </span>
              </CardLink>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 5: Typecheck + commit**

```bash
npm run typecheck && git add -A && git commit -m "feat(components): Hero FeatureGrid AppCTA RelatedGuides"
```

---

### Task 10: FAQ, Breadcrumbs, JsonLd

**Files:**
- Create: `src/components/sections/FAQ.tsx`
- Create: `src/components/seo/Breadcrumbs.tsx`, `src/components/seo/JsonLd.tsx`
- Create: `tests/FAQ.test.tsx`

- [ ] **Step 1: Create `FAQ.tsx` (client component, accordion)**

```tsx
"use client";

import { useState } from "react";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import type { FaqItem } from "@/types/content";

export function FAQ({
  heading = "Frequently asked questions",
  items,
}: {
  heading?: string;
  items: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <Container size="md">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-10">
          {heading}
        </h2>
        <ul className="divide-y divide-[--color-border] rounded-2xl border border-[--color-border] bg-[--color-surface] shadow-[var(--shadow-card)] overflow-hidden">
          {items.map((it, idx) => {
            const isOpen = open === idx;
            return (
              <li key={it.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold text-[--color-ink] hover:bg-[--color-bg]"
                  onClick={() => setOpen(isOpen ? null : idx)}
                >
                  <span>{it.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform text-[--color-muted]",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  className={cn(
                    "px-6 pb-5 text-[--color-muted] leading-relaxed",
                    !isOpen && "hidden",
                  )}
                >
                  {it.a}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Create `Breadcrumbs.tsx`**

```tsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-[--color-muted]">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
            {c.href ? (
              <Link href={c.href} className="hover:text-[--color-brand]">
                {c.label}
              </Link>
            ) : (
              <span className="text-[--color-ink] font-medium">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

- [ ] **Step 3: Create `JsonLd.tsx`**

```tsx
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

- [ ] **Step 4: Create `tests/FAQ.test.tsx`**

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FAQ } from "@/components/sections/FAQ";

const items = [
  { q: "Is the app free?", a: "Yes, with optional Pro features." },
  { q: "Does it work offline?", a: "Yes, core editing is offline." },
];

describe("FAQ", () => {
  it("first item is open by default", () => {
    render(<FAQ items={items} />);
    expect(screen.getByText(/with optional Pro features/i)).toBeVisible();
  });

  it("clicking second question opens it and closes the first", async () => {
    const user = userEvent.setup();
    render(<FAQ items={items} />);
    await user.click(screen.getByRole("button", { name: /Does it work offline/i }));
    expect(screen.getByText(/core editing is offline/i)).toBeVisible();
    expect(screen.queryByText(/with optional Pro features/i)).not.toBeVisible();
  });
});
```

- [ ] **Step 5: Run tests + commit**

```bash
npm test && git add -A && git commit -m "feat(components): FAQ, Breadcrumbs, JsonLd + accordion tests"
```

---

### Task 11: Header (with mobile menu) + test

**Files:**
- Create: `src/components/layout/Header.tsx`
- Create: `tests/Header.test.tsx`

- [ ] **Step 1: Create `Header.tsx`**

```tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { ButtonLink } from "@/components/primitives/Button";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "PDF Editor", href: "/pdf-editor" },
  { label: "Convert", href: "/pdf-converter" },
  { label: "Compress", href: "/compress-pdf" },
  { label: "Merge", href: "/merge-pdf" },
  { label: "Sign", href: "/sign-pdf" },
  { label: "Guides", href: "/guides" },
];

const APP_STORE = "https://apps.apple.com/app/id6747341672";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-[--color-surface]/85 backdrop-blur border-b border-[--color-border]">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5" aria-label="PDF Editor home">
          <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[--color-brand] text-white text-[10px] font-bold leading-none tracking-tight">
            PDF
          </span>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-[--color-brand]">PDF</span>
            <span className="text-[--color-ink]"> Editor</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-[--color-ink] hover:text-[--color-brand]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href={APP_STORE}
            external
            variant="primary"
            size="md"
            ariaLabel="Download PDF Editor on the App Store"
          >
            Get the app
          </ButtonLink>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-[--color-bg]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "md:hidden border-t border-[--color-border] bg-[--color-surface]",
          !open && "hidden",
        )}
      >
        <Container className="py-4">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-[--color-ink] hover:bg-[--color-bg]"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <ButtonLink
                href={APP_STORE}
                external
                variant="primary"
                size="md"
                className="w-full"
                ariaLabel="Download PDF Editor on the App Store"
              >
                Get the app
              </ButtonLink>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Create `tests/Header.test.tsx`**

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/layout/Header";

describe("Header", () => {
  it("mobile menu is closed by default", () => {
    render(<Header />);
    const toggle = screen.getByLabelText(/Open menu/i);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("clicking the toggle opens the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByLabelText(/Open menu/i));
    expect(screen.getByLabelText(/Close menu/i)).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
```

- [ ] **Step 3: Run tests + commit**

```bash
npm test && git add -A && git commit -m "feat(layout): Header with sticky bar and mobile menu"
```

---

### Task 12: Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Create `Footer.tsx`**

```tsx
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { StoreButtons } from "@/components/sections/StoreButtons";
import { routesByCategory } from "@/lib/routes";

const PRODUCT = [
  { label: "PDF Editor", href: "/pdf-editor" },
  { label: "PDF Converter", href: "/pdf-converter" },
  { label: "Compress PDF", href: "/compress-pdf" },
  { label: "Merge PDF", href: "/merge-pdf" },
  { label: "Sign PDF", href: "/sign-pdf" },
  { label: "Scan to PDF", href: "/scan-to-pdf" },
];

const LEARN = [
  { label: "All guides", href: "/guides" },
  { label: "Edit PDF on iPhone", href: "/guides/how-to-edit-pdf-on-iphone" },
  { label: "Edit PDF on Android", href: "/guides/how-to-edit-pdf-on-android" },
  { label: "Compress PDF", href: "/guides/how-to-compress-pdf" },
  { label: "Merge PDFs", href: "/guides/how-to-merge-pdf-files" },
  { label: "PDF vs DOCX", href: "/compare/pdf-vs-docx" },
];

const COMPANY = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[--color-ink] text-white">
      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[--color-brand] text-white text-[10px] font-bold leading-none">
                PDF
              </span>
              <span className="text-lg font-bold">
                <span className="text-[--color-brand]">PDF</span>{" "}
                <span className="text-white">Editor</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              All-in-One PDF Solution for Work, Study & Life. Edit, convert, sign and scan PDFs from your phone.
            </p>
            <div className="mt-6">
              <StoreButtons size="md" />
            </div>
          </div>

          <FooterCol title="Product" items={PRODUCT} />
          <FooterCol title="Learn" items={LEARN} />
          <FooterCol title="Company" items={COMPANY} />
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/60">
          <p>© {year} hrhelperg s.r.o. All rights reserved.</p>
          <p>
            Husitská 502/36, Žižkov, 130 00 Praha 3 ·{" "}
            <a href="mailto:info@hrhelperg.com" className="hover:text-white">
              info@hrhelperg.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.href}>
            <Link
              href={i.href}
              className="text-sm text-white/70 hover:text-white"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Typecheck + commit**

```bash
npm run typecheck && git add -A && git commit -m "feat(layout): Footer with product/learn/company columns + StoreButtons"
```

---

### Task 13: ArticleLayout, CompareTable, UseCaseCards, SEOContentSection

**Files:**
- Create: `src/components/sections/ArticleLayout.tsx`, `CompareTable.tsx`, `UseCaseCards.tsx`, `SEOContentSection.tsx`

- [ ] **Step 1: Create `ArticleLayout.tsx`**

```tsx
import { Container } from "@/components/primitives/Container";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";

export function ArticleLayout({
  crumbs,
  h1,
  updated,
  children,
}: {
  crumbs: Crumb[];
  h1: string;
  updated?: string;       // ISO date
  children: React.ReactNode;
}) {
  return (
    <article className="pt-10 pb-4">
      <Container size="md">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-[--color-ink]">
          {h1}
        </h1>
        {updated ? (
          <p className="mt-3 text-sm text-[--color-muted]">
            Last updated{" "}
            <time dateTime={updated}>
              {new Date(updated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        ) : null}
        <div className="mt-8">{children}</div>
      </Container>
    </article>
  );
}
```

- [ ] **Step 2: Create `CompareTable.tsx`**

```tsx
import { Check, X } from "lucide-react";

export function CompareTable({
  leftLabel,
  rightLabel,
  rows,
}: {
  leftLabel: string;
  rightLabel: string;
  rows: { feature: string; left: string; right: string }[];
}) {
  const renderCell = (v: string) => {
    if (v === "yes") return <Check className="h-5 w-5 text-[--color-brand]" aria-label="yes" />;
    if (v === "no") return <X className="h-5 w-5 text-[--color-muted]" aria-label="no" />;
    return <span className="text-sm text-[--color-ink]">{v}</span>;
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-[--color-border] bg-[--color-surface] shadow-[var(--shadow-card)] my-10">
      <table className="w-full text-left">
        <thead className="bg-[--color-bg] text-sm">
          <tr>
            <th className="p-4 font-semibold text-[--color-ink]">Feature</th>
            <th className="p-4 font-semibold text-[--color-ink]">{leftLabel}</th>
            <th className="p-4 font-semibold text-[--color-ink]">{rightLabel}</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {rows.map((r, i) => (
            <tr key={r.feature} className={i % 2 ? "bg-[--color-bg]" : ""}>
              <td className="p-4 font-medium text-[--color-ink]">{r.feature}</td>
              <td className="p-4">{renderCell(r.left)}</td>
              <td className="p-4">{renderCell(r.right)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

- [ ] **Step 3: Create `UseCaseCards.tsx`**

```tsx
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import * as Icons from "lucide-react";

export interface UseCaseCard {
  icon: string;
  title: string;
  body: string;
  href: string;
}

export function UseCaseCards({
  heading,
  items,
}: {
  heading: string;
  items: UseCaseCard[];
}) {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-10">
          {heading}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((c) => {
            const Icon = (Icons as any)[c.icon] ?? Icons.Layers;
            return (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="block h-full rounded-2xl border border-[--color-border] bg-[--color-surface] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
                >
                  <Icon className="h-7 w-7 text-[--color-brand]" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-[--color-ink]">{c.title}</h3>
                  <p className="mt-2 text-sm text-[--color-muted] leading-relaxed">{c.body}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 4: Create `SEOContentSection.tsx`** (generic prose block for "why it matters" sections)

```tsx
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Prose } from "@/components/primitives/Prose";

export function SEOContentSection({
  heading,
  paragraphs,
  tone = "default",
}: {
  heading: string;
  paragraphs: string[];
  tone?: "default" | "muted";
}) {
  return (
    <Section tone={tone}>
      <Container size="md">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-6">
          {heading}
        </h2>
        <Prose>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 5: Typecheck + commit**

```bash
npm run typecheck && git add -A && git commit -m "feat(components): ArticleLayout, CompareTable, UseCaseCards, SEOContentSection"
```

---

### Task 14: Steps section (numbered workflow)

**Files:**
- Create: `src/components/sections/Steps.tsx`

- [ ] **Step 1: Create `Steps.tsx`**

```tsx
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import type { StepItem } from "@/types/content";

export function Steps({
  heading,
  items,
  variant = "section",
}: {
  heading: string;
  items: StepItem[];
  variant?: "section" | "inline";
}) {
  const list = (
    <ol className="space-y-6">
      {items.map((s, i) => (
        <li key={s.title} className="flex gap-5">
          <span className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[--color-brand] text-white font-bold">
            {i + 1}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-[--color-ink]">
              {s.title}
            </h3>
            <p className="mt-1.5 text-[--color-muted] leading-relaxed">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );

  if (variant === "inline") {
    return (
      <div className="my-10">
        <h3 className="text-xl font-bold text-[--color-ink] mb-6">{heading}</h3>
        {list}
      </div>
    );
  }

  return (
    <Section tone="muted">
      <Container size="md">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-10">
          {heading}
        </h2>
        {list}
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Typecheck + commit**

```bash
npm run typecheck && git add -A && git commit -m "feat(components): Steps section (numbered workflow list)"
```

---

## C. Layout & SEO infra

### Task 15: Schema.org JSON-LD builders + tests

**Files:**
- Create: `src/content/schema.ts`
- Create: `tests/schema.test.ts`

- [ ] **Step 1: Create `src/content/schema.ts`**

```ts
import { SITE_URL } from "@/lib/routes";

const BRAND = "PDF Editor";
const APP_STORE = "https://apps.apple.com/app/id6747341672";
const GOOGLE_PLAY =
  "https://play.google.com/store/apps/details?id=com.helperg.editor.documents&pcampaignid=web_share";
const ORG = {
  "@type": "Organization",
  name: "hrhelperg s.r.o.",
  url: SITE_URL,
  logo: `${SITE_URL}/pdf-editor-mark.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Husitská 502/36",
    addressLocality: "Praha",
    postalCode: "130 00",
    addressCountry: "CZ",
  },
  email: "info@hrhelperg.com",
};

export function organizationSchema() {
  return { "@context": "https://schema.org", ...ORG };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: SITE_URL,
    publisher: ORG,
  };
}

export function softwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: BRAND,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: [APP_STORE, GOOGLE_PLAY],
    publisher: ORG,
  };
}

export function breadcrumbSchema(
  items: { label: string; path?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.path ? { item: `${SITE_URL}${it.path}` } : {}),
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: `${SITE_URL}${path}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: ORG,
    publisher: ORG,
  };
}

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { title: string; body: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}
```

- [ ] **Step 2: Create `tests/schema.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import {
  organizationSchema,
  breadcrumbSchema,
  howToSchema,
  faqSchema,
  softwareAppSchema,
} from "@/content/schema";

describe("schema builders", () => {
  it("organization includes Czech address", () => {
    const s = organizationSchema() as any;
    expect(s.address.addressCountry).toBe("CZ");
    expect(s.email).toBe("info@hrhelperg.com");
  });

  it("breadcrumb numbers positions from 1", () => {
    const b = breadcrumbSchema([
      { label: "Home", path: "/" },
      { label: "Compress PDF", path: "/compress-pdf" },
    ]) as any;
    expect(b.itemListElement[0].position).toBe(1);
    expect(b.itemListElement[1].position).toBe(2);
  });

  it("howTo renders each step with position", () => {
    const h = howToSchema({
      name: "Compress",
      description: "Compress a PDF",
      steps: [{ title: "Open", body: "Open the app." }],
    }) as any;
    expect(h.step[0].position).toBe(1);
    expect(h.step[0].name).toBe("Open");
  });

  it("faq emits Question/Answer pairs", () => {
    const f = faqSchema([{ q: "Q?", a: "A." }]) as any;
    expect(f.mainEntity[0]["@type"]).toBe("Question");
    expect(f.mainEntity[0].acceptedAnswer.text).toBe("A.");
  });

  it("software app includes both store URLs", () => {
    const s = softwareAppSchema() as any;
    expect(s.downloadUrl).toContain("https://apps.apple.com/app/id6747341672");
    expect(s.downloadUrl.join(",")).toContain("com.helperg.editor.documents");
  });
});
```

- [ ] **Step 3: Run tests + commit**

```bash
npm test && git add -A && git commit -m "feat(seo): schema.org JSON-LD builders + tests"
```

---

### Task 16: Root layout (fonts, header, footer, WebmasterID)

**Files:**
- Replace: `src/app/layout.tsx`
- Modify: `src/app/page.tsx` (restore proper placeholder homepage; full homepage is built in Task 23)

- [ ] **Step 1: Replace `src/app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/content/schema";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = rootMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-[--color-brand] text-white px-4 py-2 rounded-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />

        {/* Global JSON-LD: Organization + WebSite */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />

        {/* WebmasterID — tag-based fallback (works whether or not @webmasterid/sdk-next is installed) */}
        <Script
          id="webmasterid-tracker"
          src="https://webmasterid.com/tracker.iife.min.js"
          data-wmid="wm_b6f7wz6b9y2o5qzo"
          data-endpoint="https://webmasterid-ingest-api.vercel.app/api/events"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Restore a minimal homepage placeholder**

Edit `src/app/page.tsx` to:

```tsx
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";

export const metadata = (() => {
  const r = getRoute("/");
  return seo({ title: r.title, description: r.description, path: r.path });
})();

export default function HomePage() {
  return (
    <div className="py-20 text-center">
      <p className="text-sm text-[--color-muted]">Homepage scaffold — full content lands in Task 23.</p>
    </div>
  );
}
```

- [ ] **Step 3: Boot the dev server and visually verify**

```bash
npm run dev
```

Visit `http://localhost:3000`. Expected:
- Sticky header with two-tone logo and nav.
- Skip link appears on Tab.
- Footer with dark background, columns, store buttons.
- View source: `<script id="webmasterid-tracker" ...>` present after body content.
- View source: JSON-LD blocks for Organization + WebSite present.

Kill dev server.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat(app): root layout with fonts, header, footer, WebmasterID, root JSON-LD"
```

---

### Task 17: Sitemap, robots, OG image route + tests

**Files:**
- Create: `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/opengraph-image.tsx`
- Create: `tests/sitemap.test.ts`

- [ ] **Step 1: Create `src/app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.filter((r) => !r.hidden).map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
```

- [ ] **Step 2: Create `src/app/robots.ts`**

```ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
```

- [ ] **Step 3: Create `src/app/opengraph-image.tsx`** (default OG card)

```tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PDF Editor — Edit, Convert, Sign and Scan PDFs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%",
          background: "#FFFFFF",
          display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "flex-start",
          padding: "80px",
          fontFamily: "Inter, system-ui, -apple-system, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{
            width: 84, height: 84, borderRadius: 18,
            background: "#E50914", color: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, fontWeight: 800,
          }}>PDF</div>
          <div style={{ fontSize: 48, fontWeight: 800, color: "#0B1220" }}>
            <span style={{ color: "#E50914" }}>PDF</span> Editor
          </div>
        </div>
        <div style={{
          marginTop: 40, fontSize: 56, fontWeight: 800,
          color: "#0B1220", lineHeight: 1.1, maxWidth: 1000,
        }}>
          All-in-One PDF Solution<br/>for Work, Study & Life.
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#4B5563" }}>
          pdfeditconvert.top
        </div>
      </div>
    ),
    { ...size },
  );
}
```

- [ ] **Step 4: Create `tests/sitemap.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import { ROUTES } from "@/lib/routes";

describe("sitemap", () => {
  it("includes every non-hidden route", () => {
    const entries = sitemap();
    const expected = ROUTES.filter((r) => !r.hidden).length;
    expect(entries).toHaveLength(expected);
  });

  it("every URL is absolute on pdfeditconvert.top", () => {
    const entries = sitemap();
    for (const e of entries) {
      expect(e.url).toMatch(/^https:\/\/pdfeditconvert\.top/);
    }
  });

  it("priority is between 0 and 1", () => {
    for (const e of sitemap()) {
      expect(e.priority).toBeGreaterThanOrEqual(0);
      expect(e.priority).toBeLessThanOrEqual(1);
    }
  });
});
```

- [ ] **Step 5: Run tests**

```bash
npm test
```

Expected: all green.

- [ ] **Step 6: Boot dev server and verify sitemap/robots**

```bash
npm run dev
```

Visit:
- `http://localhost:3000/sitemap.xml` — XML sitemap with every route.
- `http://localhost:3000/robots.txt` — allow all + sitemap pointer.
- `http://localhost:3000/opengraph-image` — branded 1200×630 PNG.

Kill dev server.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat(seo): sitemap, robots, dynamic OG image + sitemap tests"
```

---

### Task 18: 404 page

**Files:**
- Create: `src/app/not-found.tsx`

- [ ] **Step 1: Create `src/app/not-found.tsx`**

```tsx
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { ButtonLink } from "@/components/primitives/Button";

const SUGGEST = [
  { label: "PDF Editor", href: "/pdf-editor" },
  { label: "Compress PDF", href: "/compress-pdf" },
  { label: "Merge PDF", href: "/merge-pdf" },
  { label: "Sign PDF", href: "/sign-pdf" },
];

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-[--color-brand]">
        404
      </p>
      <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
        Page not found
      </h1>
      <p className="mt-4 text-lg text-[--color-muted] max-w-xl">
        The page you’re looking for doesn’t exist or has moved. Try one of these instead:
      </p>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
        {SUGGEST.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block rounded-xl border border-[--color-border] bg-[--color-surface] p-4 hover:border-[--color-brand]"
            >
              <span className="font-semibold text-[--color-ink]">{s.label}</span>
              <span className="block text-sm text-[--color-muted]">Open guide →</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <ButtonLink href="/" variant="primary" size="lg">
          Back to homepage
        </ButtonLink>
      </div>
    </Container>
  );
}
```

- [ ] **Step 2: Verify in dev**

```bash
npm run dev
```

Visit `http://localhost:3000/this-route-does-not-exist` — see branded 404. Kill dev server.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat(app): branded 404 page with suggested hubs"
```

---

## D. Content modules

### Task 19: site.ts global constants

**Files:**
- Create: `src/content/site.ts`

- [ ] **Step 1: Create `src/content/site.ts`**

```ts
export const SITE = {
  name: "PDF Editor",
  tagline: "All-in-One PDF Solution for Work, Study & Life",
  url: "https://pdfeditconvert.top",
  contactEmail: "info@hrhelperg.com",
  company: {
    legalName: "hrhelperg s.r.o.",
    address: {
      street: "Husitská 502/36",
      district: "Žižkov",
      postalCode: "130 00",
      city: "Praha 3",
      country: "Czech Republic",
    },
  },
  app: {
    appStore: "https://apps.apple.com/app/id6747341672",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.helperg.editor.documents&pcampaignid=web_share",
    bundleId: "com.helperg.editor.documents",
  },
  features: ["Edit", "Convert", "Secure", "Scan", "Organize"] as const,
};
```

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat(content): site.ts global constants (brand, company, app links)"
```

---

### Task 20: Hub content briefs — author 7 full-content hub modules

**Files:**
- Create: `src/content/hubs/pdf-editor.ts`, `pdf-converter.ts`, `compress-pdf.ts`, `merge-pdf.ts`, `sign-pdf.ts`, `scan-to-pdf.ts`, `pdf-security.ts`

**Authoring rules — apply to every hub module:**

- Tone: practical, no marketing puff. No "revolutionary", "world-class". Address the reader as "you".
- No fabricated stats, no fake studies. If a claim needs a number, use a qualitative one ("most users", "many small teams") or omit.
- Each `hero.lead` is 1-2 sentences (≤ 180 chars).
- Each `problem.paragraphs` is 2-3 paragraphs, ~80-110 words each. Explain the *real* friction the workflow has without good tools — concretely.
- `features.items`: 3-6 items. `icon` is a valid `lucide-react` icon name. `body` is 1-2 sentences.
- `steps.items`: 4-6 steps. Each step is a real action: "Open the PDF Editor app", "Tap Compress", etc. Mobile-flavored.
- `mobileUseCase.body`: 2 paragraphs about doing this on a phone specifically.
- `faq`: 4-6 Q/A pairs targeting common Google "People Also Ask" queries.
- `related`: 3 entries pointing to actual existing routes (use `lib/routes.ts` paths).
- `appCta.heading`: 4-7 words, action-oriented; vary across pages.
- The TS shape MUST exactly match the `HubContent` interface in `src/types/content.ts`.

**Content briefs per hub** (the executor uses these as prompts to write the prose):

#### `pdf-editor.ts`
- Primary keyword: "PDF editor" / "edit PDF on mobile".
- `hero.h1`: "Edit PDFs anywhere, on any phone." `highlight` candidate: "PDFs".
- Problem: editing PDFs used to require a desktop app or a clunky website upload. On mobile, people resort to screenshots and emailing files back to themselves.
- Features (icons in parens): Text editing (`TextCursor`), Image insertion (`ImagePlus`), Page reorder (`Move`), Signatures (`Signature`), Forms (`FormInput`), Markup (`Highlighter`).
- Steps: Open app → Open PDF → Tap text/image to edit → Adjust → Save/Share.
- Mobile use case: editing while commuting, at meetings, between classes.
- FAQ topics: free vs paid, offline editing, file size limits, encrypted PDFs, exporting changes.
- Related: `/guides/how-to-edit-pdf-on-iphone`, `/guides/how-to-edit-pdf-on-android`, `/sign-pdf`.
- `appCta.heading`: "Edit PDFs on your phone in seconds".

#### `pdf-converter.ts`
- Primary keyword: "PDF converter" / "convert PDF to Word".
- `hero.h1`: "Convert PDFs to the format you actually need." `highlight`: "actually".
- Problem: people get PDFs when they need DOCX (for editing), JPG (for messaging apps), or PNG (for slides). Stock converters lose formatting; online ones leak sensitive content.
- Features: PDF → Word, PDF → JPG/PNG, PDF → Excel, Word → PDF, Image → PDF, Batch conversion.
- Steps: Pick file → Choose output format → Tap convert → Save or share.
- FAQ: formats supported, accuracy with scanned PDFs, offline conversion, OCR for scanned text.
- Related: `/guides/pdf-vs-docx`, `/compare/pdf-vs-jpg`, `/pdf-editor`.

#### `compress-pdf.ts`
- Primary keyword: "compress PDF".
- `hero.h1`: "Shrink PDF size without losing quality." `highlight`: "Shrink".
- Problem: email attachment limits, Slack 25 MB limit, Whatsapp limits; people resort to print-to-PDF tricks that lose quality.
- Features: Smart compression, Quality presets (high/balanced/small), Batch compression, Image-heavy optimization, Scanned document compression, Preview before save.
- Steps: Open → Add PDF → Pick preset → Compress → Inspect → Save.
- FAQ: how much smaller, quality loss, scanned vs digital PDFs, password-protected files.
- Related: `/guides/how-to-compress-pdf`, `/pdf-converter`, `/pdf-security`.

#### `merge-pdf.ts`
- Primary keyword: "merge PDF" / "combine PDFs".
- `hero.h1`: "Combine PDFs into one tidy document." `highlight`: "tidy".
- Problem: scanned pages arrive one-per-file; quotes/invoices are stitched together by hand; people email five attachments when one would do.
- Features: Drag-to-reorder, Insert pages from photos, Bookmark merged sections, Add cover page, Combine with rotation, Export single file.
- Steps: Add files → Drag to reorder → Add cover (optional) → Merge → Save/Share.
- FAQ: maximum files, password-protected PDFs, mixing scans and digital, formatting changes.
- Related: `/guides/how-to-merge-pdf-files`, `/split-pdf`, `/pdf-editor`.

#### `sign-pdf.ts`
- Primary keyword: "sign PDF on phone".
- `hero.h1`: "Sign PDFs from your phone in seconds." `highlight`: "seconds".
- Problem: printing → signing → scanning → emailing back is absurd in 2026; some companies still ask for it; people need a quick, legally accepted alternative.
- Features: Handwritten signature, Typed signature, Initial stamps, Date stamps, Multi-signature workflows, Auditable export.
- Steps: Open PDF → Tap Sign → Draw or type signature → Place + resize → Export signed copy.
- Mobile use case: stylus on iPad/iPhone, finger signing.
- FAQ: legal validity (general guidance, not legal advice), eIDAS / ESIGN mention without specifics, encryption.
- Related: `/guides/how-to-sign-pdf-on-phone`, `/pdf-security`, `/use-cases/freelancers`.

#### `scan-to-pdf.ts`
- Primary keyword: "scan to PDF".
- `hero.h1`: "Turn paper into clean, searchable PDFs." `highlight`: "clean".
- Problem: phone photos of documents look terrible — uneven lighting, perspective distortion, no OCR. People still email camera-roll JPGs to accountants.
- Features: Auto edge detection, Perspective correction, Multi-page scans, OCR (searchable text), Black-and-white / color modes, Auto-naming.
- Steps: Open scanner → Aim at page → Auto-capture → Adjust corners → Add more pages → Save as PDF.
- FAQ: scan quality vs flatbed, multi-page reliability, OCR languages, scanning receipts/IDs.
- Related: `/guides/how-to-scan-documents-to-pdf`, `/pdf-editor`, `/use-cases/business`.

#### `pdf-security.ts`
- Primary keyword: "PDF security" / "password protect PDF".
- `hero.h1`: "Protect sensitive PDFs the right way." `highlight`: "right way".
- Problem: people share passport scans, contracts and invoices without protection; weak passwords; "secure" means nothing without encryption.
- Features: Password protection, AES-256 encryption, Restrict copy/print, Redaction, Watermarks, Locked links sharing.
- Steps: Open PDF → Tap Protect → Pick password → Choose restrictions → Save protected copy.
- FAQ: removing password, sharing password safely, watermark vs encryption, recovery.
- Related: `/guides/how-to-protect-pdf-file`, `/sign-pdf`, `/pdf-for-business`.

- [ ] **Step 1: For each hub above, create a `src/content/hubs/<slug>.ts` file that exports `default` as a `HubContent` object**

Reference shape (every hub module looks like this):

```ts
import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "Compress PDF",
    h1: "Shrink PDF size without losing quality.",
    lead: "Most PDFs are larger than they need to be. Trim them for email, upload and storage — without the blurry-text trade-off.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: { heading: "Why PDFs get so big", paragraphs: ["…", "…"] },
  features: {
    heading: "What the PDF Editor app does",
    items: [
      { icon: "Gauge", title: "Smart compression", body: "…" },
      { icon: "Sliders", title: "Quality presets", body: "…" },
      // …
    ],
  },
  steps: {
    heading: "How to compress a PDF",
    items: [
      { title: "Open the PDF Editor app", body: "…" },
      // …
    ],
  },
  mobileUseCase: {
    heading: "Compressing on the go",
    body: "…",
  },
  faq: [
    { q: "How much smaller can a PDF get?", a: "…" },
    // 4-6 total
  ],
  related: [
    { label: "How to compress a PDF (step-by-step)", path: "/guides/how-to-compress-pdf" },
    { label: "Convert PDF to other formats", path: "/pdf-converter" },
    { label: "PDF security and encryption", path: "/pdf-security" },
  ],
  appCta: {
    heading: "Compress PDFs on the go",
    sub: "Free for everyday use. Available on iOS and Android.",
  },
};

export default content;
```

- [ ] **Step 2: Typecheck and commit incrementally**

After each hub module is written, run:

```bash
npm run typecheck && git add -A && git commit -m "content(hubs): <slug>"
```

Replace `<slug>` per file. Seven commits total for this task.

---

### Task 21: Guide content — author 3 full guide modules

**Files:**
- Create: `src/content/guides/how-to-edit-pdf-on-iphone.ts`, `how-to-edit-pdf-on-android.ts`, `how-to-compress-pdf.ts`

**Authoring rules:**
- Tone & rules identical to Task 20.
- `intro`: 2-3 paragraphs, ~80-110 words each. State who the guide is for, what they'll learn, and any prerequisites (e.g., "iOS 17+").
- `steps`: 6-10 numbered steps. Each step is concrete.
- `tips`: 3-5 short tips (1-2 sentences each).
- `mobileNote`: 1 paragraph specific to mobile quirks (file picker, share sheet, iCloud Drive).
- `faq`: 4-6 Q/A pairs.
- `related`: 3 entries — must point to existing routes.
- `parentHub`: the hub this guide belongs to.
- `updated`: `"2026-05-11"`.

**Briefs:**

#### `how-to-edit-pdf-on-iphone.ts`
- Parent hub: `/pdf-editor` (label "PDF Editor").
- Steps cover: install/open app → open PDF (Files / Mail / iCloud) → edit text → add image → rearrange pages → sign → export.
- Tips: tap-and-hold to select, use double-tap zoom for precision, redo gestures.
- Mobile note: iOS Files integration, sharing back to Mail/Notes.
- FAQ: editing scanned PDFs, free vs paid, Apple Pencil, dark-mode PDFs.

#### `how-to-edit-pdf-on-android.ts`
- Parent hub: `/pdf-editor`.
- Steps cover: install → open PDF via Storage Access Framework → text edit → image insert → page reorder → fill form → save as new file.
- Tips: split-screen on tablets, S Pen support note (without overpromising), file naming.
- FAQ: works on older Android, Google Drive integration, password-protected PDFs, OneDrive.

#### `how-to-compress-pdf.ts`
- Parent hub: `/compress-pdf`.
- Steps cover: open app → import PDF → choose preset → preview → compare sizes → save → share.
- Tips: when to choose "small" vs "balanced", how scanned PDFs differ, splitting before compressing huge files.
- FAQ: typical reduction, image quality, password-protected files, ZIP vs compress.

- [ ] **Step 1: Reference shape**

```ts
import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "How to compress a PDF without losing quality",
  description: "Reduce PDF file size for email or upload — step-by-step using the PDF Editor app on iPhone or Android.",
  updated: "2026-05-11",
  intro: ["…", "…"],
  steps: [
    { title: "Open the PDF Editor app", body: "…" },
    // …
  ],
  tips: ["…", "…", "…"],
  mobileNote: "…",
  faq: [{ q: "…", a: "…" }],
  related: [
    { label: "Compress PDF — full overview", path: "/compress-pdf" },
    { label: "PDF Converter", path: "/pdf-converter" },
    { label: "How to merge PDF files", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
```

- [ ] **Step 2: After each guide, typecheck + commit**

```bash
npm run typecheck && git add -A && git commit -m "content(guides): <slug>"
```

---

### Task 22: Stub content for remaining routes

**Files:**
- Create: one `src/content/guides/<slug>.ts` per remaining guide route
- Create: one `src/content/compare/<slug>.ts` per `/compare/*` route
- Create: one `src/content/use-cases/<slug>.ts` per `/use-cases/*` route
- Create: `src/content/hubs/split-pdf.ts`, `pdf-for-business.ts`, `pdf-for-students.ts`

**Rules:**
- Each stub module exports a fully-typed object with **real** intro/lead text (~80-100 words, not lorem ipsum).
- Each stub has at least 3 valid `related` links pointing at existing routes.
- Stubs have empty or minimal `features` and `steps` arrays — just enough for the page renderer to work without crashing. Use `[]` only where the page renderer handles it; otherwise include 1 placeholder item with real (not "coming soon") text.

- [ ] **Step 1: Stub all remaining hub modules** (`split-pdf`, `pdf-for-business`, `pdf-for-students`) — same `HubContent` shape, shorter copy.

- [ ] **Step 2: Stub remaining guide modules** (the 7 guides not done in Task 21) — same `GuideContent` shape, shorter copy.

- [ ] **Step 3: Stub all compare modules** (3 files) — `CompareContent` shape. Each has `rows` with at least 4 real comparison features (e.g., editability: yes/no, encryption: yes/yes, etc.).

- [ ] **Step 4: Stub all use-case modules** (4 files) — `UseCaseContent` shape. Each `workflows` array has at least 3 entries with real titles + 1-sentence bodies.

- [ ] **Step 5: Typecheck + commit**

```bash
npm run typecheck && git add -A && git commit -m "content(stubs): minimal real content for remaining hubs, guides, compare, use-cases"
```

---

## E. Pages

### Task 23: Homepage

**Files:**
- Replace: `src/app/page.tsx`

- [ ] **Step 1: Replace `src/app/page.tsx`**

```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { CardLink } from "@/components/primitives/Card";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { softwareAppSchema, faqSchema } from "@/content/schema";
import { SITE } from "@/content/site";
import { Pencil, Files, ShieldCheck, ScanLine, LayoutGrid } from "lucide-react";

const route = getRoute("/");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

const HUBS = [
  { label: "PDF Editor", href: "/pdf-editor", desc: "Edit text, images and pages." },
  { label: "PDF Converter", href: "/pdf-converter", desc: "Convert to Word, JPG, PNG and more." },
  { label: "Compress PDF", href: "/compress-pdf", desc: "Shrink files without losing quality." },
  { label: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into one." },
  { label: "Split PDF", href: "/split-pdf", desc: "Separate pages into new files." },
  { label: "Sign PDF", href: "/sign-pdf", desc: "Add a signature from your phone." },
  { label: "Scan to PDF", href: "/scan-to-pdf", desc: "Turn paper into clean PDFs." },
  { label: "PDF Security", href: "/pdf-security", desc: "Protect documents with a password." },
  { label: "PDF for Business", href: "/pdf-for-business", desc: "Contracts and invoices on the go." },
  { label: "PDF for Students", href: "/pdf-for-students", desc: "Notes, highlights and study guides." },
];

const FEATURED_GUIDES = [
  { label: "How to edit a PDF on iPhone", href: "/guides/how-to-edit-pdf-on-iphone" },
  { label: "How to edit a PDF on Android", href: "/guides/how-to-edit-pdf-on-android" },
  { label: "How to compress a PDF", href: "/guides/how-to-compress-pdf" },
  { label: "How to sign a PDF on your phone", href: "/guides/how-to-sign-pdf-on-phone" },
];

const FAQ_ITEMS = [
  {
    q: "Is PDF Editor free?",
    a: "Yes. The core editing, scanning, compressing and signing features are free. Some advanced features unlock with PDF Editor Pro.",
  },
  {
    q: "Does it work without an internet connection?",
    a: "Core editing, page management, signing and compression all work offline. Cloud sync and OCR may require a connection.",
  },
  {
    q: "Which devices are supported?",
    a: "PDF Editor is available on iPhone and iPad (iOS 16+) and Android phones and tablets (Android 9+).",
  },
  {
    q: "Are my files private?",
    a: "Yes. Files stay on your device unless you choose to share them. We do not upload your documents to our servers.",
  },
  {
    q: "Can I use this for legal documents?",
    a: "Many users sign and share contracts using PDF Editor. We don't provide legal advice — check local rules on electronic signatures before relying on one for critical documents.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={SITE.features.join(" · ")}
        h1="Edit PDFs anywhere. From your phone."
        highlight="phone"
        lead={`${SITE.tagline}. Scan paper, sign contracts, compress files and convert formats — all from a single app on iOS and Android.`}
        secondaryHref="/guides"
        secondaryLabel="Read the guides"
      />

      {/* Five-feature strip mirroring the logo */}
      <Section>
        <Container>
          <ul className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            {[
              { icon: Pencil, label: "Edit" },
              { icon: Files, label: "Convert" },
              { icon: ShieldCheck, label: "Secure" },
              { icon: ScanLine, label: "Scan" },
              { icon: LayoutGrid, label: "Organize" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-2.5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[--color-brand-soft]">
                  <Icon className="h-6 w-6 text-[--color-brand]" aria-hidden />
                </span>
                <span className="font-semibold text-[--color-ink]">{label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Hubs grid */}
      <Section tone="muted">
        <Container>
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink]">
              Everything you do with PDFs — explained.
            </h2>
            <p className="mt-3 text-lg text-[--color-muted]">
              Practical guides and workflows for the things people actually do with PDFs every day.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HUBS.map((h) => (
              <li key={h.href}>
                <CardLink href={h.href}>
                  <span className="text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                    {h.label}
                  </span>
                  <span className="block mt-2 text-sm text-[--color-muted]">{h.desc}</span>
                </CardLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Featured guides */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-10">
            Most-read guides
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_GUIDES.map((g) => (
              <li key={g.href}>
                <CardLink href={g.href}>
                  <span className="text-sm font-semibold uppercase tracking-wide text-[--color-brand]">
                    Guide
                  </span>
                  <span className="block mt-2 text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                    {g.label}
                  </span>
                </CardLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <AppCTA
        variant="final"
        heading="Take PDF Editor with you."
        sub="Free on iOS and Android. No account required to get started."
      />

      <FAQ items={FAQ_ITEMS} />

      <JsonLd data={[softwareAppSchema(), faqSchema(FAQ_ITEMS)]} />
    </>
  );
}
```

- [ ] **Step 2: Verify in dev**

```bash
npm run dev
```

Visit `http://localhost:3000`. Expected: full homepage layout, two-tone hero, five-feature strip, 10 hub cards, 4 guide cards, AppCTA, FAQ. View source: `SoftwareApplication` + `FAQPage` JSON-LD blocks present.

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat(home): full homepage with hero, hubs grid, guides, AppCTA, FAQ + JSON-LD"
```

---

### Task 24: Generic hub page renderer (used by all hub routes)

**Files:**
- Create: `src/components/sections/HubPage.tsx`

- [ ] **Step 1: Create `HubPage.tsx`** — single component every hub route uses

```tsx
import type { HubContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Hero } from "@/components/sections/Hero";
import { SEOContentSection } from "@/components/sections/SEOContentSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Steps } from "@/components/sections/Steps";
import { AppCTA } from "@/components/sections/AppCTA";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { FAQ } from "@/components/sections/FAQ";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/content/schema";

export function HubPage({ content }: { content: HubContent }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: content.hero.eyebrow ?? content.hero.h1, },
  ];

  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={crumbs} />
      </Container>

      <Hero
        eyebrow={content.hero.eyebrow}
        h1={content.hero.h1}
        lead={content.hero.lead}
      />

      <SEOContentSection
        heading={content.problem.heading}
        paragraphs={content.problem.paragraphs}
        tone="muted"
      />

      <FeatureGrid
        heading={content.features.heading}
        items={content.features.items}
        cols={3}
      />

      <Steps
        heading={content.steps.heading}
        items={content.steps.items}
      />

      <Section>
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-ink] mb-6">
            {content.mobileUseCase.heading}
          </h2>
          <p className="text-lg text-[--color-muted] leading-relaxed">
            {content.mobileUseCase.body}
          </p>
          <AppCTA
            variant="inline"
            heading={content.appCta.heading}
            sub={content.appCta.sub}
          />
        </Container>
      </Section>

      <RelatedGuides items={content.related} />

      <FAQ items={content.faq} />

      <AppCTA
        variant="final"
        heading={content.appCta.heading}
        sub={content.appCta.sub}
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: content.hero.eyebrow ?? content.hero.h1, path: `/${content.slug}` },
          ]),
          faqSchema(content.faq),
        ]}
      />
    </>
  );
}
```

- [ ] **Step 2: Wire every hub `page.tsx`** under `src/app/<hub>/page.tsx` to the renderer

Use this template (substitute `<slug>`):

```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { HubPage } from "@/components/sections/HubPage";
import content from "@/content/hubs/<slug>";

const route = getRoute("/<slug>");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <HubPage content={content} />;
}
```

Create one of these for every hub route:
- `/pdf-editor`, `/pdf-converter`, `/compress-pdf`, `/merge-pdf`, `/split-pdf`, `/sign-pdf`, `/scan-to-pdf`, `/pdf-security`, `/pdf-for-business`, `/pdf-for-students`.

- [ ] **Step 3: Boot dev and spot-check**

```bash
npm run dev
```

Visit `/pdf-editor`, `/compress-pdf`, `/sign-pdf`. Expected: breadcrumbs, hero, problem section, feature grid, numbered steps, mobile section, related guides, FAQ, final AppCTA, JSON-LD in source.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat(hubs): shared HubPage renderer + all 10 hub routes"
```

---

### Task 25: Guides — dynamic [slug] route + guides index

**Files:**
- Create: `src/app/guides/page.tsx`, `src/app/guides/[slug]/page.tsx`
- Create: `src/components/sections/GuidePage.tsx`
- Create: `src/content/guides/index.ts` (registry)

- [ ] **Step 1: Create `src/content/guides/index.ts`**

```ts
import type { GuideContent } from "@/types/content";

// Static imports so Next.js can statically analyse all slugs
import howToEditIphone from "@/content/guides/how-to-edit-pdf-on-iphone";
import howToEditAndroid from "@/content/guides/how-to-edit-pdf-on-android";
import howToCompress from "@/content/guides/how-to-compress-pdf";
import howToMerge from "@/content/guides/how-to-merge-pdf-files";
import howToSign from "@/content/guides/how-to-sign-pdf-on-phone";
import howToScan from "@/content/guides/how-to-scan-documents-to-pdf";
import bestForStudents from "@/content/guides/best-pdf-app-for-students";
import bestForBusiness from "@/content/guides/best-pdf-app-for-business";
import pdfVsDocx from "@/content/guides/pdf-vs-docx";
import howToProtect from "@/content/guides/how-to-protect-pdf-file";

export const GUIDES: Record<string, GuideContent> = {
  "how-to-edit-pdf-on-iphone": howToEditIphone,
  "how-to-edit-pdf-on-android": howToEditAndroid,
  "how-to-compress-pdf": howToCompress,
  "how-to-merge-pdf-files": howToMerge,
  "how-to-sign-pdf-on-phone": howToSign,
  "how-to-scan-documents-to-pdf": howToScan,
  "best-pdf-app-for-students": bestForStudents,
  "best-pdf-app-for-business": bestForBusiness,
  "pdf-vs-docx": pdfVsDocx,
  "how-to-protect-pdf-file": howToProtect,
};
```

- [ ] **Step 2: Create `src/components/sections/GuidePage.tsx`**

```tsx
import type { GuideContent } from "@/types/content";
import { ArticleLayout } from "@/components/sections/ArticleLayout";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Steps } from "@/components/sections/Steps";
import { Prose } from "@/components/primitives/Prose";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
} from "@/content/schema";

export function GuidePage({ content }: { content: GuideContent }) {
  const path = `/guides/${content.slug}`;
  return (
    <>
      <ArticleLayout
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: content.h1 },
        ]}
        h1={content.h1}
        updated={content.updated}
      >
        <Prose>
          {content.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>

        <Steps heading="Step by step" items={content.steps} variant="inline" />

        {content.tips.length ? (
          <div className="my-10">
            <h3 className="text-xl font-bold text-[--color-ink] mb-4">Tips</h3>
            <ul className="space-y-2 list-disc pl-5 text-[--color-muted]">
              {content.tips.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        ) : null}

        <AppCTA
          variant="inline"
          heading="Try it on your phone"
          sub={content.mobileNote}
        />
      </ArticleLayout>

      <FAQ items={content.faq} />
      <RelatedGuides items={[content.parentHub, ...content.related]} />
      <AppCTA
        variant="final"
        heading="Take PDF Editor with you."
        sub="Free on iOS and Android."
      />

      <JsonLd
        data={[
          articleSchema({
            title: content.h1,
            description: content.description,
            path,
            datePublished: content.updated,
          }),
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "Guides", path: "/guides" },
            { label: content.h1, path },
          ]),
          howToSchema({
            name: content.h1,
            description: content.description,
            steps: content.steps,
          }),
          faqSchema(content.faq),
        ]}
      />
    </>
  );
}
```

- [ ] **Step 3: Create `src/app/guides/[slug]/page.tsx`**

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDES } from "@/content/guides";
import { GuidePage } from "@/components/sections/GuidePage";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";

export async function generateStaticParams() {
  return Object.keys(GUIDES).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES[slug];
  if (!guide) return {};
  const path = `/guides/${slug}`;
  // Use the route registry entry as the canonical source of title/description
  try {
    const r = getRoute(path);
    return seo({
      title: r.title,
      description: r.description,
      path,
      type: "article",
      publishedTime: guide.updated,
      modifiedTime: guide.updated,
    });
  } catch {
    return seo({
      title: guide.h1,
      description: guide.description,
      path,
      type: "article",
      publishedTime: guide.updated,
      modifiedTime: guide.updated,
    });
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = GUIDES[slug];
  if (!guide) notFound();
  return <GuidePage content={guide} />;
}
```

- [ ] **Step 4: Create `src/app/guides/page.tsx`** (guides index)

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { CardLink } from "@/components/primitives/Card";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { GUIDES } from "@/content/guides";

const route = getRoute("/guides");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function GuidesIndex() {
  const items = Object.values(GUIDES);
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
      </Container>
      <Container className="pt-10 pb-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
          PDF Guides
        </h1>
        <p className="mt-4 text-lg text-[--color-muted] max-w-2xl">
          Practical, mobile-first tutorials for editing, converting, compressing, signing and protecting PDFs.
        </p>
      </Container>
      <Section>
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((g) => (
              <li key={g.slug}>
                <CardLink href={`/guides/${g.slug}`}>
                  <span className="text-sm font-semibold uppercase tracking-wide text-[--color-brand]">
                    Guide
                  </span>
                  <span className="block mt-2 text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                    {g.h1}
                  </span>
                  <span className="block mt-2 text-sm text-[--color-muted]">
                    {g.description}
                  </span>
                </CardLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Step 5: Verify in dev**

```bash
npm run dev
```

Visit `/guides`, `/guides/how-to-compress-pdf`. Expected: index lists all guide cards; guide page shows breadcrumbs, H1, last-updated date, steps, tips, inline AppCTA, FAQ, related guides, final AppCTA, and Article+HowTo+FAQPage+BreadcrumbList JSON-LD blocks.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat(guides): dynamic [slug] route + GuidePage renderer + guides index"
```

---

### Task 26: Compare and use-case dynamic routes

**Files:**
- Create: `src/app/compare/[slug]/page.tsx`, `src/app/use-cases/[slug]/page.tsx`
- Create: `src/components/sections/ComparePage.tsx`, `UseCasePage.tsx`
- Create: `src/content/compare/index.ts`, `src/content/use-cases/index.ts`

- [ ] **Step 1: Create `src/content/compare/index.ts`** following the same pattern as guides index (static imports keyed by slug). Slugs: `pdf-vs-docx`, `pdf-vs-jpg`, `pdf-app-vs-online-pdf-tools`.

- [ ] **Step 2: Create `src/content/use-cases/index.ts`** with slugs: `students`, `business`, `freelancers`, `remote-work`.

- [ ] **Step 3: Create `src/components/sections/ComparePage.tsx`**

```tsx
import type { CompareContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Prose } from "@/components/primitives/Prose";
import { CompareTable } from "@/components/sections/CompareTable";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/content/schema";

export function ComparePage({ content }: { content: CompareContent }) {
  const path = `/compare/${content.slug}`;
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Compare", href: "/" },
          { label: content.h1 },
        ]} />
      </Container>
      <Container className="pt-10 pb-2" size="md">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
          {content.h1}
        </h1>
        <Prose className="mt-6">
          {content.intro.map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
        <CompareTable
          leftLabel={content.leftLabel}
          rightLabel={content.rightLabel}
          rows={content.rows}
        />
        <div className="grid md:grid-cols-2 gap-8 my-10">
          <div>
            <h2 className="text-xl font-bold text-[--color-ink] mb-3">
              When to pick {content.leftLabel}
            </h2>
            <ul className="list-disc pl-5 text-[--color-muted] space-y-1.5">
              {content.whenLeft.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[--color-ink] mb-3">
              When to pick {content.rightLabel}
            </h2>
            <ul className="list-disc pl-5 text-[--color-muted] space-y-1.5">
              {content.whenRight.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </Container>
      <FAQ items={content.faq} />
      <RelatedGuides items={content.related} />
      <AppCTA variant="final" heading="Edit PDFs on your phone." sub="Free on iOS and Android." />
      <JsonLd data={[
        breadcrumbSchema([
          { label: "Home", path: "/" },
          { label: content.h1, path },
        ]),
        faqSchema(content.faq),
      ]} />
    </>
  );
}
```

- [ ] **Step 4: Create `src/components/sections/UseCasePage.tsx`**

```tsx
import type { UseCaseContent } from "@/types/content";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Prose } from "@/components/primitives/Prose";
import { AppCTA } from "@/components/sections/AppCTA";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/content/schema";

export function UseCasePage({ content }: { content: UseCaseContent }) {
  const path = `/use-cases/${content.slug}`;
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Use cases", href: "/" },
          { label: content.h1 },
        ]} />
      </Container>
      <Container className="pt-10 pb-2" size="md">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
          {content.h1}
        </h1>
        <Prose className="mt-6">
          {content.intro.map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </Container>
      <Section tone="muted">
        <Container size="md">
          <h2 className="text-3xl font-bold text-[--color-ink] mb-8">
            Workflows that pay off
          </h2>
          <ul className="space-y-6">
            {content.workflows.map((w) => (
              <li key={w.title}>
                <h3 className="text-lg font-semibold text-[--color-ink]">{w.title}</h3>
                <p className="mt-1.5 text-[--color-muted] leading-relaxed">{w.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Container size="md" className="py-16">
        <p className="text-lg text-[--color-muted] leading-relaxed">{content.appPitch}</p>
        <AppCTA variant="inline" heading="Try it on your phone" />
      </Container>
      <RelatedGuides items={content.related} />
      <AppCTA variant="final" heading="Take PDF Editor with you." sub="Free on iOS and Android." />
      <JsonLd data={breadcrumbSchema([
        { label: "Home", path: "/" },
        { label: content.h1, path },
      ])} />
    </>
  );
}
```

- [ ] **Step 5: Create `src/app/compare/[slug]/page.tsx`**

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPARE } from "@/content/compare";
import { ComparePage } from "@/components/sections/ComparePage";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";

export async function generateStaticParams() {
  return Object.keys(COMPARE).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const c = COMPARE[slug];
  if (!c) return {};
  const r = getRoute(`/compare/${slug}`);
  return seo({ title: r.title, description: r.description, path: r.path });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = COMPARE[slug];
  if (!c) notFound();
  return <ComparePage content={c} />;
}
```

- [ ] **Step 6: Create `src/app/use-cases/[slug]/page.tsx`** — mirror Step 5 with `USE_CASES`, `UseCasePage`, `/use-cases/${slug}` paths.

- [ ] **Step 7: Verify**

```bash
npm run dev
```

Visit `/compare/pdf-vs-docx` and `/use-cases/students`. Expected: breadcrumbs, content, table or workflows, AppCTA, JSON-LD.

- [ ] **Step 8: Commit**

```bash
git add -A && git commit -m "feat(routes): compare and use-cases dynamic routes + renderers"
```

---

## F. Stub pages (no new tasks)

The stub hubs (`split-pdf`, `pdf-for-business`, `pdf-for-students`) reuse the `HubPage` renderer with the shorter content from Task 22 — already wired up by Task 24. The stub guides, comparisons, and use cases use the same dynamic renderers from Tasks 25–26 and the stub content from Task 22.

No additional code is needed here. If you find a stub page renders awkwardly because of empty arrays (e.g. `features.items: []`), update the renderer to handle empties gracefully and commit as `fix(<page>): handle empty <field>`.

---

## G. Legal, contact

### Task 27: Privacy policy and Terms pages

**Files:**
- Create: `src/content/legal/privacy.ts`, `src/content/legal/terms.ts`
- Create: `src/app/privacy-policy/page.tsx`, `src/app/terms/page.tsx`

- [ ] **Step 1: Create `src/content/legal/privacy.ts`**

```ts
export const PRIVACY_UPDATED = "2026-05-11";

export const PRIVACY_SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: "Who we are",
    body: [
      "pdfeditconvert.top is operated by hrhelperg s.r.o., a Czech limited liability company with registered office at Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic. You can reach us at info@hrhelperg.com.",
    ],
  },
  {
    heading: "What this website collects",
    body: [
      "This website is informational. It does not require you to create an account, upload documents, or share personal information to read any page.",
      "We use a privacy-friendly analytics tool (WebmasterID) to understand which pages are visited and how readers find us. It records the URL of the page you visit, your approximate region and device type, and the referring site. It does not place advertising cookies and does not build a profile of you across other websites.",
    ],
  },
  {
    heading: "What the mobile app collects",
    body: [
      "The PDF Editor mobile app may store data locally on your device (files you open, your settings) and may sync files to your chosen cloud service (iCloud, Google Drive, etc.) if you enable that. See the app's privacy disclosures on the App Store and Google Play for the authoritative list.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "We use a small number of cookies and similar storage for basic site functionality and analytics. We do not use advertising cookies.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "If you are in the EU/EEA you have rights under the GDPR including access, correction, deletion, restriction and portability. Email info@hrhelperg.com to exercise them.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy can be sent to info@hrhelperg.com.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "We may update this policy. Significant changes will be highlighted on this page along with a new 'last updated' date.",
    ],
  },
  // [[FILL IN]] additional sections if you appoint a DPO, EU representative,
  // sub-processors list, or change tracker. Add a "Data we share" section
  // if/when you integrate third-party services beyond analytics.
];
```

- [ ] **Step 2: Create `src/content/legal/terms.ts`**

```ts
export const TERMS_UPDATED = "2026-05-11";

export const TERMS_SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: "About these terms",
    body: [
      "These terms govern your use of pdfeditconvert.top, operated by hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic).",
    ],
  },
  {
    heading: "Use of the website",
    body: [
      "You may read, link to and share the pages on this website. You may not scrape large portions of the content for republication, or use the site in a way that disrupts other users.",
    ],
  },
  {
    heading: "About the PDF Editor mobile app",
    body: [
      "PDF Editor is a separate mobile application distributed via the Apple App Store and Google Play. Use of the app is governed by the app's own terms presented during installation.",
    ],
  },
  {
    heading: "No warranty",
    body: [
      "The content on pdfeditconvert.top is provided for general informational purposes and is not legal, tax, or financial advice. We make a reasonable effort to keep it accurate, but make no warranty as to its completeness or fitness for any specific purpose.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "To the maximum extent permitted by Czech and EU law, hrhelperg s.r.o. is not liable for any indirect or consequential loss arising from use of this website.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of the Czech Republic. Disputes will be resolved by the competent Czech courts.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about these terms can be sent to info@hrhelperg.com.",
    ],
  },
];
```

- [ ] **Step 3: Create `src/app/privacy-policy/page.tsx`**

```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Prose } from "@/components/primitives/Prose";
import { PRIVACY_SECTIONS, PRIVACY_UPDATED } from "@/content/legal/privacy";

const route = getRoute("/privacy-policy");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function PrivacyPage() {
  return (
    <Container size="md" className="py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-[--color-muted]">
        Last updated <time dateTime={PRIVACY_UPDATED}>{new Date(PRIVACY_UPDATED).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
      </p>
      <Prose className="mt-8">
        {PRIVACY_SECTIONS.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((p, i) => <p key={i}>{p}</p>)}
          </section>
        ))}
      </Prose>
    </Container>
  );
}
```

- [ ] **Step 4: Create `src/app/terms/page.tsx`** — same shape, using `TERMS_SECTIONS` and `TERMS_UPDATED`.

- [ ] **Step 5: Verify**

```bash
npm run dev
```

Visit `/privacy-policy` and `/terms`. Expected: breadcrumbs, H1, updated date, structured prose sections.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat(legal): privacy policy + terms with hrhelperg s.r.o. details"
```

---

### Task 28: Contact page

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Create `src/app/contact/page.tsx`**

```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StoreButtons } from "@/components/sections/StoreButtons";
import { Mail, MapPin } from "lucide-react";

const route = getRoute("/contact");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ContactPage() {
  return (
    <Container size="md" className="py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
        Contact
      </h1>
      <p className="mt-4 text-lg text-[--color-muted] max-w-xl">
        Questions, partnerships, press, or feedback on the PDF Editor app — we read every email.
      </p>

      <ul className="mt-10 space-y-5 text-[--color-ink]">
        <li className="flex items-start gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--color-brand-soft] text-[--color-brand]">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="font-semibold">Email</p>
            <a href="mailto:info@hrhelperg.com" className="text-[--color-brand] hover:underline">
              info@hrhelperg.com
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--color-brand-soft] text-[--color-brand]">
            <MapPin className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="font-semibold">Registered office</p>
            <address className="not-italic text-[--color-muted]">
              hrhelperg s.r.o.<br />
              Husitská 502/36, Žižkov<br />
              130 00 Praha 3, Czech Republic
            </address>
          </div>
        </li>
      </ul>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-[--color-ink] mb-4">Try the app</h2>
        <StoreButtons size="md" />
      </div>
    </Container>
  );
}
```

- [ ] **Step 2: Verify and commit**

```bash
npm run dev
```

Visit `/contact` — see email, address, store buttons. Then:

```bash
git add -A && git commit -m "feat(contact): contact page with email, registered office, store buttons"
```

---

## H. Tests, verification, polish, git

### Task 29: Logo + favicon assets

**Files:**
- Add: `public/pdf-editor-logo.png`, `public/pdf-editor-mark.svg`, `public/pdf-editor-wordmark.svg`, `public/favicon.ico`, `public/apple-touch-icon.png`, `public/icon-192.png`, `public/icon-512.png`

- [ ] **Step 1: Place the source logo file**

If the user-supplied logo is at `~/Downloads/pdf-editor-logo.png`:

```bash
cp ~/Downloads/pdf-editor-logo.png ~/Desktop/pdfeditconvert-top/public/pdf-editor-logo.png
```

If it isn't there, ask the user before proceeding. Do not invent or generate the file.

- [ ] **Step 2: Create the SVG icon mark**

Save as `public/pdf-editor-mark.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="PDF Editor">
  <rect width="64" height="64" rx="14" fill="#E50914"/>
  <text x="32" y="29" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF">PDF</text>
  <text x="32" y="46" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF" letter-spacing="0.5">EDITOR</text>
</svg>
```

- [ ] **Step 3: Create the SVG wordmark**

Save as `public/pdf-editor-wordmark.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 60" role="img" aria-label="PDF Editor">
  <text x="0" y="44" font-family="Inter, Helvetica, Arial, sans-serif" font-size="42" font-weight="800" fill="#E50914">PDF</text>
  <text x="100" y="44" font-family="Inter, Helvetica, Arial, sans-serif" font-size="42" font-weight="800" fill="#0B1220">Editor</text>
</svg>
```

- [ ] **Step 4: Generate favicons from `pdf-editor-mark.svg` using ImageMagick or sips**

Try ImageMagick first; if not installed, fall back to macOS `sips`.

```bash
cd ~/Desktop/pdfeditconvert-top/public

if command -v magick >/dev/null 2>&1; then
  magick pdf-editor-mark.svg -resize 32x32 favicon-32.png
  magick pdf-editor-mark.svg -resize 16x16 favicon-16.png
  magick favicon-16.png favicon-32.png favicon.ico
  magick pdf-editor-mark.svg -resize 180x180 apple-touch-icon.png
  magick pdf-editor-mark.svg -resize 192x192 icon-192.png
  magick pdf-editor-mark.svg -resize 512x512 icon-512.png
  rm favicon-16.png favicon-32.png
elif command -v rsvg-convert >/dev/null 2>&1; then
  rsvg-convert -w 180 -h 180 pdf-editor-mark.svg -o apple-touch-icon.png
  rsvg-convert -w 192 -h 192 pdf-editor-mark.svg -o icon-192.png
  rsvg-convert -w 512 -h 512 pdf-editor-mark.svg -o icon-512.png
  # favicon.ico: produce a single 32px PNG and rename if no ICO encoder available
  rsvg-convert -w 32 -h 32 pdf-editor-mark.svg -o favicon.ico
else
  echo "Neither ImageMagick nor rsvg-convert is installed."
  echo "Install with: brew install imagemagick"
  echo "Then re-run this step."
  exit 1
fi
```

- [ ] **Step 5: Verify**

```bash
cd ~/Desktop/pdfeditconvert-top && ls -la public/{favicon.ico,apple-touch-icon.png,icon-192.png,icon-512.png,pdf-editor-logo.png,pdf-editor-mark.svg,pdf-editor-wordmark.svg}
```

Expected: all listed files present with non-zero size.

Boot dev and confirm favicon shows in browser tab.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat(assets): brand logo + favicon set + apple-touch-icon + 192/512 PWA icons"
```

---

### Task 30: Final lint, typecheck and production build

**Files:** none

- [ ] **Step 1: Run lint**

```bash
cd ~/Desktop/pdfeditconvert-top && npm run lint
```

Expected: no errors. Fix any warnings you can in <10 min; if a rule is genuinely wrong for this codebase, downgrade it in `.eslintrc.json` with a comment explaining why.

- [ ] **Step 2: Run typecheck**

```bash
npm run typecheck
```

Expected: no errors.

- [ ] **Step 3: Run full test suite**

```bash
npm test
```

Expected: every test passes.

- [ ] **Step 4: Run production build**

```bash
npm run build
```

Expected: build completes; output lists every route as either `○ (Static)` or `● (SSG)`. No route should be `ƒ (Dynamic)`.

If `next build` reports any page exceeding 200 KB First Load JS, investigate which component is pulling in client code unnecessarily.

- [ ] **Step 5: Boot production server and smoke-test**

```bash
npm run start
```

Visit, in this order:
- `/`
- `/pdf-editor`
- `/compress-pdf`
- `/guides`
- `/guides/how-to-compress-pdf`
- `/compare/pdf-vs-docx`
- `/use-cases/students`
- `/privacy-policy`
- `/terms`
- `/contact`
- `/this-route-doesnt-exist` (expect 404)
- `/sitemap.xml`
- `/robots.txt`
- `/opengraph-image`

For each: no console errors, full content visible in view source (not blank shells), JSON-LD blocks present where expected.

Kill server with Ctrl+C.

- [ ] **Step 6: Commit any fixes**

```bash
git add -A && git commit -m "chore: address lint/build feedback" || echo "no changes"
```

---

### Task 31: WebmasterID verification

**Files:** none

- [ ] **Step 1: Verify tracker request fires**

```bash
npm run dev
```

Open Chrome DevTools → Network tab → filter "webmasterid". Refresh `http://localhost:3000`. Expected: at least one request to `https://webmasterid.com/tracker.iife.min.js` and a follow-up POST/GET to `https://webmasterid-ingest-api.vercel.app/api/events`.

- [ ] **Step 2: Verify no duplicate injection on client navigation**

Click a link from the homepage to `/pdf-editor`. In DevTools "Elements", search for `id="webmasterid-tracker"`. Expected: exactly one script tag (`next/script` with `strategy="afterInteractive"` mounts once at app boot).

- [ ] **Step 3: Document outcome**

Append to `docs/superpowers/plans/decisions.md` (create if missing):

```markdown
- 2026-05-11: WebmasterID verified — single tag in DOM, ingest endpoint receives events on initial load and survives client navigation.
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "docs(decisions): WebmasterID integration verified"
```

---

### Task 32: Performance pass with Lighthouse

**Files:** none

- [ ] **Step 1: Run production server**

```bash
npm run build && npm run start
```

- [ ] **Step 2: Run Lighthouse against homepage (mobile)**

In Chrome DevTools → Lighthouse → Mobile + Performance + Accessibility + Best Practices + SEO → Analyze.

Targets:
- Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO = 100

If any score misses target:
- Performance dip: check render-blocking resources, LCP candidate (likely hero text or store badge image), unused JS.
- Accessibility dip: check color contrast on red text vs background, missing alt text, focus order.
- SEO dip: check title length, meta description, canonical, structured data.

- [ ] **Step 3: Run Lighthouse against `/compress-pdf` and `/guides/how-to-compress-pdf`**

Same targets. Spot-check that hub + guide pages aren't dragged down by anything.

- [ ] **Step 4: Document scores**

Append actual scores to `docs/superpowers/plans/decisions.md`:

```markdown
- 2026-05-11 Lighthouse (mobile):
  - / — Perf X, A11y Y, BP Z, SEO W
  - /compress-pdf — …
  - /guides/how-to-compress-pdf — …
```

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "docs(decisions): Lighthouse scores logged" || echo "no changes"
```

---

### Task 33: Set up git remote (do not push)

**Files:** none

- [ ] **Step 1: Confirm git is initialized**

```bash
cd ~/Desktop/pdfeditconvert-top && git status
```

Expected: clean tree, on branch `main` (or `master`; rename to `main` if needed via `git branch -m main`).

- [ ] **Step 2: Add remote**

```bash
git remote add origin git@github.com:hrhelperg/pdfeditconvert.top.git \
  || git remote set-url origin git@github.com:hrhelperg/pdfeditconvert.top.git
git remote -v
```

Expected: `origin` listed twice (fetch + push).

- [ ] **Step 3: DO NOT push**

The plan ends here. The user verifies the remote is correct and the GitHub repo exists/is empty, then pushes themselves:

```bash
# User runs this manually:
# git push -u origin main
```

- [ ] **Step 4: Final commit (decisions log + remote note)**

Append to `docs/superpowers/plans/decisions.md`:

```markdown
- 2026-05-11: Build complete. Remote configured to git@github.com:hrhelperg/pdfeditconvert.top.git.
  User to push manually after confirming repo state.
```

```bash
git add -A && git commit -m "docs(decisions): remote configured; build ready for manual push"
```

- [ ] **Step 5: Print final status**

```bash
git log --oneline -20 && echo "---" && git remote -v
```

Expected: clean history of all task commits, remote pointing at the correct GitHub URL.

---

## Self-review (run before handoff)

Run through these against the spec `docs/superpowers/specs/2026-05-11-pdfeditconvert-top-design.md`:

- §2 Tech stack — covered in Tasks 1–3.
- §3 Brand tokens, logo variants, typography — Tasks 4 (tokens), 29 (logo + favicons), 16 (Geist mounted).
- §4 Information architecture — Task 5 (routes registry), Task 24 (hubs), 25 (guides), 26 (compare/use-cases).
- §5 Folder layout — Tasks 1–29 collectively map onto it.
- §6 Page anatomy — Hero/FeatureGrid/Steps/AppCTA/RelatedGuides/FAQ in Tasks 7–14; renderers in 23–26.
- §7 SEO infra — `seo()` (Task 5), schema (Task 15), sitemap+robots (Task 17), JSON-LD usage in renderers.
- §8 App CTA strategy — StoreButtons (Task 8), AppCTA (Task 9), placement in renderers (Tasks 23–26).
- §9 WebmasterID — Task 16 (mount), Task 31 (verify).
- §10 Content rules — codified in authoring rules for Tasks 20–22.
- §11 First-build scope — full content for 10 pages, stubs for the rest (Tasks 20–22).
- §12 Git — Tasks 1, 33.
- §13 Verification — Tasks 30–32.

No placeholders remain in the plan. All file paths are concrete. Type names are consistent (`HubContent`, `GuideContent`, `CompareContent`, `UseCaseContent`) across Tasks 5, 20, 21, 22, and the renderers in 24–26.

---

## Execution handoff

Plan complete and saved to `~/Desktop/pdfeditconvert-top/docs/superpowers/plans/2026-05-11-pdfeditconvert-top-build.md`. Two execution options:

1. **Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration.
2. **Inline Execution** — I execute tasks in this session using `superpowers:executing-plans`, with batch checkpoints for review.

Which approach?







