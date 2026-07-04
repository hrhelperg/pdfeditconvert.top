# PDF Knowledge Graph — Phase A Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a domain-agnostic Knowledge Graph content system and Phase A — the PDF Encyclopedia (~250 definitional pages under `/pdf-encyclopedia/`) — reusing the existing site architecture.

**Architecture:** A new `KnowledgeContent` type feeds a `KNOWLEDGE` registry (one file per entry, barrel index). Knowledge→knowledge edges are **slug-based** and resolved through the registry (referential integrity is test-enforced); knowledge→site edges (tools/guides) are **path-based** `RelatedLink`s validated against `ROUTES`. A dynamic route `/pdf-encyclopedia/[slug]` mirrors the existing `/guides/[slug]` pattern; a bespoke `KnowledgeHubPage` indexes entries by cluster. Pages emit Article + Breadcrumb + FAQ + DefinedTerm JSON-LD — never HowTo.

**Tech Stack:** Next.js 16 App Router (static export via `generateStaticParams`), React 19, TypeScript (strict), Vitest + Testing Library, existing `seo()`/`ROUTES`/`JsonLd`/`schema.ts`.

**Spec:** `docs/superpowers/specs/2026-07-04-pdf-knowledge-graph-phase-a-design.md`

## Global Constraints

- **No second content system.** Reuse `ROUTES`, `seo()`, `JsonLd`, `AppCTA`, `StoreButtons`, `Breadcrumbs`, `ArticleLayout`, `Prose`, `FAQ`, `RelatedGuides`, sitemap, `schema.ts`. New code is a type + registry + one page template + one hub + one schema builder + one route category — an extension, not a parallel system.
- **KnowledgeContent stays domain-agnostic** — Phases B–H (formats, printing, ZIP, fax) reuse it verbatim; nothing PDF-specific in the type.
- **Graph edges for knowledge pages are slug-based**; **tool/guide links are path-based** `RelatedLink`.
- **Rendering order is fixed** (see Task 5): definition → intro → specification → keyFacts → sections → misconceptions → inline CTA → FAQ → See also → Related → final CTA.
- **Deduplication against existing routes is mandatory** before any entry ships (Task 13).
- **WebmasterID untouched:** never modify `src/app/layout.tsx`, `wm_b6f7wz6b9y2o5qzo`, or `https://webmasterid-ingest-api.vercel.app/api/events`. Never send file names or document content to analytics.
- **Canonical host untouched:** do not change `SITE_URL` (`https://pdfeditconvert.top`), `metadataBase`, canonical logic, robots, or the sitemap route-generation logic.
- **Do not modify tool runtime code** (anything under `src/components/tools/`, `src/lib/tools/`, `src/app/*` tool pages).
- **No fabricated facts.** PDF spec content is verifiable (ISO 32000, PDF/A/X/UA/E/VT). Uncertain → phrase conservatively or omit. No invented statistics, no fake benchmarks, no legal/medical advice.
- **Every page unique:** title, description, H1, intro, sections, FAQ, related, intent. No doorway pages, no keyword stuffing, no "best"/superlative claims.
- **Primary CTA is PDF Editor** (iOS `id6747341672`, Android `com.helperg.editor.documents`). No ZIP/Printer/Fax CTAs in Phase A.
- **Commit after every task.** Run lint + typecheck + vitest before each commit; run `npm run build` at each wave boundary.
- **No auto-merge.** Phase ends with a report and waits for approval.

---

## File Structure

**Create:**
- `src/content/knowledge/index.ts` — `KNOWLEDGE` registry + graph helpers.
- `src/content/knowledge/_clusters.ts` — the 10 cluster definitions.
- `src/content/knowledge/_manifest.ts` — the deduplicated slug manifest (Task 13).
- `src/content/knowledge/<slug>.ts` — one per entry (Waves 1–10).
- `src/content/knowledge-hub.ts` — hub landing content (non-entry).
- `src/components/sections/KnowledgePage.tsx` — entry renderer.
- `src/components/sections/KnowledgeHubPage.tsx` — cluster-indexed hub renderer.
- `src/app/pdf-encyclopedia/page.tsx` — hub route.
- `src/app/pdf-encyclopedia/[slug]/page.tsx` — entry route.
- `tests/knowledge/_fixture.ts` — shared test fixture factory.
- `tests/knowledge/{schema,registry,graphIntegrity,routeParity,metadataUniqueness,fieldValidity,cannibalization,sitemap,knowledgePage,hub}.test.ts(x)`

**Modify:**
- `src/types/content.ts` — add Knowledge types + `"reference"` category.
- `src/content/schema.ts` — add `definedTermSchema`.
- `src/components/sections/RelatedGuides.tsx` — add optional `cta` prop (backward-compatible).
- `src/lib/routes.ts` — add hub entry (Task 7) + ~250 entry routes (Waves 1–10).

---

## Task 1: Knowledge types + `"reference"` category

**Files:**
- Modify: `src/types/content.ts`

**Interfaces:**
- Produces: `KnowledgeContent`, `KnowledgeCluster`, `KnowledgeSearchIntent`, `KnowledgeDifficulty`, `KnowledgeSection`, `KeyFact`, `KnowledgeMisconception`, `SpecificationMeta`, `KnowledgeGraphEdges`; extends `RouteCategory` with `"reference"`.

- [ ] **Step 1: Add `"reference"` to `RouteCategory`**

In `src/types/content.ts`, change the `RouteCategory` union to include `"reference"`:

```ts
export type RouteCategory =
  | "core"
  | "hub"
  | "tool"
  | "guide"
  | "compare"
  | "use-case"
  | "legal"
  | "meta"
  | "reference";
```

- [ ] **Step 2: Append the Knowledge types** (after the existing `ToolContent` block)

```ts
export type KnowledgeCluster =
  | "foundations"
  | "standards"
  | "text-fonts"
  | "graphics-color"
  | "images-compression"
  | "interactivity"
  | "security"
  | "accessibility"
  | "metadata-tooling"
  | "print-geometry";

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
  claim: string; // the common but wrong belief
  truth: string; // the correction
}

export interface SpecificationMeta {
  iso?: string;
  introduced?: string;
  latestVersion?: string;
  typicalUsage?: string;
  relatedStandards?: string[]; // knowledge slugs
}

export interface KnowledgeGraphEdges {
  parentConcept?: string; // knowledge slug
  childConcepts?: string[]; // knowledge slugs
  relatedConcepts?: string[]; // knowledge slugs
  relatedStandards?: string[]; // knowledge slugs
  relatedFormats?: string[]; // knowledge slugs
  relatedTools?: RelatedLink[]; // existing site routes
  relatedGuides?: RelatedLink[]; // existing site routes
}

export interface KnowledgeContent {
  slug: string;
  h1: string;
  cluster: KnowledgeCluster;
  aliases: string[];
  definition: string;
  description: string;
  searchIntent: KnowledgeSearchIntent;
  difficulty: KnowledgeDifficulty;
  updated: string; // ISO date — publication / last content change
  reviewed: string; // ISO date — editorial review
  intro: string[];
  sections: KnowledgeSection[];
  keyFacts?: KeyFact[];
  specification?: SpecificationMeta;
  misconceptions?: KnowledgeMisconception[];
  faq: FaqItem[];
  graph: KnowledgeGraphEdges;
  seeAlso: string[]; // 5–8 knowledge slugs
  parentHub: RelatedLink;
}
```

- [ ] **Step 3: Typecheck**

Run: `npm run typecheck`
Expected: PASS (no consumers yet; types compile).

- [ ] **Step 4: Commit**

```bash
git add src/types/content.ts
git commit -m "feat(knowledge): add domain-agnostic KnowledgeContent types + reference category"
```

---

## Task 2: `definedTermSchema` builder

**Files:**
- Modify: `src/content/schema.ts`
- Test: `tests/knowledge/schema.test.ts`

**Interfaces:**
- Produces: `definedTermSchema({ term, aliases, definition, path }) => object`

- [ ] **Step 1: Write the failing test**

Create `tests/knowledge/schema.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { definedTermSchema } from "@/content/schema";

describe("definedTermSchema", () => {
  it("produces a DefinedTerm with aliases, description and set membership", () => {
    const s = definedTermSchema({
      term: "PDF/A",
      aliases: ["PDF A", "ISO 19005", "Archival PDF"],
      definition: "An ISO-standardised version of PDF for long-term archiving.",
      path: "/pdf-encyclopedia/pdf-a",
    });
    expect(s["@type"]).toBe("DefinedTerm");
    expect(s.name).toBe("PDF/A");
    expect(s.alternateName).toEqual(["PDF A", "ISO 19005", "Archival PDF"]);
    expect(s.url).toBe("https://pdfeditconvert.top/pdf-encyclopedia/pdf-a");
    expect(s.inDefinedTermSet.name).toBe("PDF Encyclopedia");
    expect(s.inDefinedTermSet.url).toBe(
      "https://pdfeditconvert.top/pdf-encyclopedia",
    );
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/knowledge/schema.test.ts`
Expected: FAIL — `definedTermSchema is not a function`.

- [ ] **Step 3: Implement the builder**

Append to `src/content/schema.ts`:

```ts
export function definedTermSchema({
  term,
  aliases,
  definition,
  path,
}: {
  term: string;
  aliases: string[];
  definition: string;
  path: string;
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

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/knowledge/schema.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/content/schema.ts tests/knowledge/schema.test.ts
git commit -m "feat(knowledge): add definedTermSchema JSON-LD builder"
```

---

## Task 3: Cluster definitions

**Files:**
- Create: `src/content/knowledge/_clusters.ts`
- Test: `tests/knowledge/registry.test.ts` (created here; extended in Task 4)

**Interfaces:**
- Produces: `CLUSTERS: Record<KnowledgeCluster, { title: string; blurb: string; order: number }>`, `CLUSTER_ORDER: KnowledgeCluster[]`

- [ ] **Step 1: Write the failing test**

Create `tests/knowledge/registry.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { CLUSTERS, CLUSTER_ORDER } from "@/content/knowledge/_clusters";

describe("knowledge clusters", () => {
  it("defines exactly 10 clusters with unique ascending order", () => {
    expect(CLUSTER_ORDER).toHaveLength(10);
    const orders = CLUSTER_ORDER.map((k) => CLUSTERS[k].order);
    expect(new Set(orders).size).toBe(10);
    expect([...orders].sort((a, b) => a - b)).toEqual(orders);
  });
  it("every cluster has a title and blurb", () => {
    for (const key of CLUSTER_ORDER) {
      expect(CLUSTERS[key].title.length).toBeGreaterThan(0);
      expect(CLUSTERS[key].blurb.length).toBeGreaterThan(0);
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/knowledge/registry.test.ts`
Expected: FAIL — cannot resolve `_clusters`.

- [ ] **Step 3: Implement `_clusters.ts`**

```ts
import type { KnowledgeCluster } from "@/types/content";

export const CLUSTERS: Record<
  KnowledgeCluster,
  { title: string; blurb: string; order: number }
> = {
  foundations: {
    title: "Format foundations & file structure",
    blurb: "What a PDF is made of — objects, the cross-reference table, versions and the document catalog.",
    order: 1,
  },
  standards: {
    title: "ISO standards & subsets",
    blurb: "The PDF/A, PDF/X, PDF/UA, PDF/E and PDF/VT families and how conformance works.",
    order: 2,
  },
  "text-fonts": {
    title: "Text, fonts & encoding",
    blurb: "How PDFs store type — embedding, subsetting, CID fonts, encoding and text extraction.",
    order: 3,
  },
  "graphics-color": {
    title: "Graphics, color & rendering",
    blurb: "Color spaces, ICC profiles, transparency and how a PDF is drawn to the screen or press.",
    order: 4,
  },
  "images-compression": {
    title: "Images & compression",
    blurb: "The filters that shrink PDFs — Flate, JPEG, JBIG2, CCITT — and how optimization works.",
    order: 5,
  },
  interactivity: {
    title: "Interactivity: forms, annotations & links",
    blurb: "AcroForms, XFA, annotation types, bookmarks, actions and appearance streams.",
    order: 6,
  },
  security: {
    title: "Security, signatures & permissions",
    blurb: "Encryption, passwords, permission flags, redaction and digital signatures.",
    order: 7,
  },
  accessibility: {
    title: "Accessibility & structure",
    blurb: "Tagged PDF, the structure tree, reading order and what makes a PDF usable with assistive tech.",
    order: 8,
  },
  "metadata-tooling": {
    title: "Metadata, extraction & tooling concepts",
    blurb: "Document metadata, XMP, searchable PDF, OCR concepts and validation.",
    order: 9,
  },
  "print-geometry": {
    title: "Page geometry & print production",
    blurb: "Page boxes, sizes, rotation, optional-content layers, preflight and print-ready PDF.",
    order: 10,
  },
};

export const CLUSTER_ORDER = (
  Object.keys(CLUSTERS) as KnowledgeCluster[]
).sort((a, b) => CLUSTERS[a].order - CLUSTERS[b].order);
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/knowledge/registry.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/content/knowledge/_clusters.ts tests/knowledge/registry.test.ts
git commit -m "feat(knowledge): define the 10 PDF encyclopedia clusters"
```

---

## Task 4: Registry + graph helpers

**Files:**
- Create: `src/content/knowledge/index.ts`
- Create: `tests/knowledge/_fixture.ts`
- Modify: `tests/knowledge/registry.test.ts`

**Interfaces:**
- Consumes: `KNOWLEDGE` (starts empty until waves).
- Produces:
  - `KNOWLEDGE: Record<string, KnowledgeContent>`
  - `knowledgePath(slug: string): string` → `/pdf-encyclopedia/${slug}`
  - `allKnowledgeSlugs(): string[]`
  - `knowledgeRef(slug: string): RelatedLink` (throws on unknown slug)
  - `resolveRefs(slugs: string[] | undefined): RelatedLink[]`
  - `entriesByCluster(cluster: KnowledgeCluster): KnowledgeContent[]`
  - `makeKnowledgeFixture(overrides?): KnowledgeContent` (test helper)

- [ ] **Step 1: Create the shared fixture factory**

Create `tests/knowledge/_fixture.ts`:

```ts
import type { KnowledgeContent } from "@/types/content";

let n = 0;
/** Build a valid KnowledgeContent for tests. Override any field. */
export function makeKnowledgeFixture(
  overrides: Partial<KnowledgeContent> = {},
): KnowledgeContent {
  n += 1;
  const slug = overrides.slug ?? `fixture-${n}`;
  return {
    slug,
    h1: `Fixture ${n}`,
    cluster: "foundations",
    aliases: [`alias-${n}`],
    definition: `Definition ${n}.`,
    description: `Description ${n} that is unique enough for tests.`,
    searchIntent: "definition",
    difficulty: "Beginner",
    updated: "2026-07-04",
    reviewed: "2026-07-04",
    intro: [`Intro paragraph ${n}.`],
    sections: [{ heading: `Section ${n}`, body: [`Body ${n}.`] }],
    faq: [{ q: `Q${n}?`, a: `A${n}.` }],
    graph: {},
    seeAlso: [],
    parentHub: { label: "PDF Encyclopedia", path: "/pdf-encyclopedia" },
    ...overrides,
  };
}
```

- [ ] **Step 2: Write the failing helper tests** (append to `tests/knowledge/registry.test.ts`)

```ts
import {
  knowledgePath,
  knowledgeRef,
  resolveRefs,
  allKnowledgeSlugs,
  KNOWLEDGE,
} from "@/content/knowledge";

describe("knowledge registry helpers", () => {
  it("knowledgePath builds the encyclopedia path", () => {
    expect(knowledgePath("pdf-a")).toBe("/pdf-encyclopedia/pdf-a");
  });
  it("knowledgeRef throws on an unknown slug", () => {
    expect(() => knowledgeRef("does-not-exist-xyz")).toThrow(/Unknown knowledge slug/);
  });
  it("resolveRefs maps known slugs and is empty for undefined", () => {
    expect(resolveRefs(undefined)).toEqual([]);
    for (const slug of allKnowledgeSlugs()) {
      expect(resolveRefs([slug])[0]).toEqual({
        label: KNOWLEDGE[slug].h1,
        path: knowledgePath(slug),
      });
    }
  });
});
```

- [ ] **Step 3: Run to verify it fails**

Run: `npx vitest run tests/knowledge/registry.test.ts`
Expected: FAIL — cannot resolve `@/content/knowledge`.

- [ ] **Step 4: Implement the registry**

Create `src/content/knowledge/index.ts`:

```ts
import type {
  KnowledgeCluster,
  KnowledgeContent,
  RelatedLink,
} from "@/types/content";

// Entries are registered here as waves land, e.g.:
//   import pdfA from "@/content/knowledge/pdf-a";
// and added to the map below. Keep alphabetical by slug.

const ENTRIES: KnowledgeContent[] = [
  // (populated by Waves 1–10)
];

export const KNOWLEDGE: Record<string, KnowledgeContent> = Object.fromEntries(
  ENTRIES.map((e) => [e.slug, e]),
);

export function knowledgePath(slug: string): string {
  return `/pdf-encyclopedia/${slug}`;
}

export function allKnowledgeSlugs(): string[] {
  return Object.keys(KNOWLEDGE);
}

export function knowledgeRef(slug: string): RelatedLink {
  const entry = KNOWLEDGE[slug];
  if (!entry) throw new Error(`Unknown knowledge slug referenced: ${slug}`);
  return { label: entry.h1, path: knowledgePath(slug) };
}

export function resolveRefs(slugs: string[] | undefined): RelatedLink[] {
  return (slugs ?? []).map(knowledgeRef);
}

export function entriesByCluster(
  cluster: KnowledgeCluster,
): KnowledgeContent[] {
  return ENTRIES.filter((e) => e.cluster === cluster).sort((a, b) =>
    a.h1.localeCompare(b.h1),
  );
}
```

- [ ] **Step 5: Run to verify it passes**

Run: `npx vitest run tests/knowledge/registry.test.ts`
Expected: PASS (helper tests pass; the `resolveRefs` loop is vacuous while empty).

- [ ] **Step 6: Commit**

```bash
git add src/content/knowledge/index.ts tests/knowledge/_fixture.ts tests/knowledge/registry.test.ts
git commit -m "feat(knowledge): add KNOWLEDGE registry and slug-resolution helpers"
```

---

## Task 5: `KnowledgePage` entry renderer

**Files:**
- Create: `src/components/sections/KnowledgePage.tsx`
- Modify: `src/components/sections/RelatedGuides.tsx` (add optional `cta`)
- Test: `tests/knowledge/knowledgePage.test.tsx`

**Interfaces:**
- Consumes: `KnowledgeContent`, `resolveRefs`, `knowledgeRef`, schema builders.
- Produces: `KnowledgePage({ content }: { content: KnowledgeContent })`. Renders in the fixed order: definition → intro → specification → keyFacts → sections → misconceptions → inline CTA → FAQ → See also → Related → final CTA. Emits Article + Breadcrumb + FAQ + DefinedTerm JSON-LD (no HowTo).

- [ ] **Step 1: Extend `RelatedGuides` with an optional `cta`** (backward-compatible)

In `src/components/sections/RelatedGuides.tsx`, change the signature and the sub-label:

```tsx
export function RelatedGuides({
  heading = "Related guides",
  items,
  cta = "Read the guide →",
}: {
  heading?: string;
  items: RelatedLink[];
  cta?: string;
}) {
```

and replace the hard-coded `Read the guide →` span text with `{cta}`.

- [ ] **Step 2: Write the failing render test**

Create `tests/knowledge/knowledgePage.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { KnowledgePage } from "@/components/sections/KnowledgePage";
import { makeKnowledgeFixture } from "./_fixture";

describe("KnowledgePage", () => {
  it("renders definition, misconceptions and See also, and emits DefinedTerm not HowTo", () => {
    const content = makeKnowledgeFixture({
      slug: "sample",
      h1: "Sample Concept",
      definition: "Sample is a test concept.",
      misconceptions: [{ claim: "Sample is X.", truth: "Sample is actually Y." }],
    });
    const { container } = render(<KnowledgePage content={content} />);

    expect(screen.getByRole("heading", { level: 1, name: "Sample Concept" })).toBeInTheDocument();
    expect(screen.getByText("Sample is a test concept.")).toBeInTheDocument();
    expect(screen.getByText(/Common misconceptions/i)).toBeInTheDocument();

    const ld = [...container.querySelectorAll('script[type="application/ld+json"]')]
      .map((s) => s.textContent ?? "")
      .join("");
    expect(ld).toContain('"DefinedTerm"');
    expect(ld).not.toContain('"HowTo"');
  });
});
```

- [ ] **Step 3: Run to verify it fails**

Run: `npx vitest run tests/knowledge/knowledgePage.test.tsx`
Expected: FAIL — cannot resolve `KnowledgePage`.

- [ ] **Step 4: Implement `KnowledgePage.tsx`**

```tsx
import type { KnowledgeContent } from "@/types/content";
import { ArticleLayout } from "@/components/sections/ArticleLayout";
import { Prose } from "@/components/primitives/Prose";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQ } from "@/components/sections/FAQ";
import { RelatedGuides } from "@/components/sections/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { knowledgePath, resolveRefs } from "@/content/knowledge";
import {
  articleSchema,
  breadcrumbSchema,
  definedTermSchema,
  faqSchema,
} from "@/content/schema";

export function KnowledgePage({ content }: { content: KnowledgeContent }) {
  const path = knowledgePath(content.slug);
  const related = [
    ...resolveRefs(content.graph.relatedConcepts),
    ...resolveRefs(content.graph.relatedStandards),
    ...resolveRefs(content.graph.relatedFormats),
    ...(content.graph.relatedTools ?? []),
    ...(content.graph.relatedGuides ?? []),
    ...(content.graph.parentConcept ? resolveRefs([content.graph.parentConcept]) : []),
    ...resolveRefs(content.graph.childConcepts),
  ];
  // Deduplicate by path, preserving order.
  const relatedUnique = related.filter(
    (r, i) => related.findIndex((x) => x.path === r.path) === i,
  );
  const seeAlso = resolveRefs(content.seeAlso);

  return (
    <>
      <ArticleLayout
        crumbs={[
          { label: "Home", href: "/" },
          { label: "PDF Encyclopedia", href: "/pdf-encyclopedia" },
          { label: content.h1 },
        ]}
        h1={content.h1}
        updated={content.updated}
      >
        <p className="text-sm text-[--color-muted] -mt-4 mb-6">
          {content.difficulty}
          {content.aliases.length ? ` · Also known as: ${content.aliases.join(", ")}` : ""}
          {` · Reviewed `}
          <time dateTime={content.reviewed}>
            {new Date(content.reviewed).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>

        <p className="text-lg font-semibold text-[--color-ink] border-l-4 border-[--color-brand] pl-4 mb-8">
          {content.definition}
        </p>

        <Prose>
          {content.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>

        {content.specification ? (
          <dl className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 rounded-lg bg-[--color-surface] p-6">
            {content.specification.iso ? (
              <div>
                <dt className="text-sm font-semibold text-[--color-muted]">ISO</dt>
                <dd className="text-[--color-ink]">{content.specification.iso}</dd>
              </div>
            ) : null}
            {content.specification.introduced ? (
              <div>
                <dt className="text-sm font-semibold text-[--color-muted]">Introduced</dt>
                <dd className="text-[--color-ink]">{content.specification.introduced}</dd>
              </div>
            ) : null}
            {content.specification.latestVersion ? (
              <div>
                <dt className="text-sm font-semibold text-[--color-muted]">Latest version</dt>
                <dd className="text-[--color-ink]">{content.specification.latestVersion}</dd>
              </div>
            ) : null}
            {content.specification.typicalUsage ? (
              <div>
                <dt className="text-sm font-semibold text-[--color-muted]">Typical usage</dt>
                <dd className="text-[--color-ink]">{content.specification.typicalUsage}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {content.keyFacts?.length ? (
          <ul className="my-8 space-y-2 list-disc pl-5 text-[--color-muted]">
            {content.keyFacts.map((f) => (
              <li key={f.label}>
                <span className="font-semibold text-[--color-ink]">{f.label}:</span> {f.value}
              </li>
            ))}
          </ul>
        ) : null}

        {content.sections.map((s) => (
          <section key={s.heading} className="my-8">
            <h2 className="text-2xl font-bold text-[--color-ink] mb-4">{s.heading}</h2>
            <Prose>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Prose>
          </section>
        ))}

        {content.misconceptions?.length ? (
          <section className="my-10">
            <h2 className="text-2xl font-bold text-[--color-ink] mb-4">Common misconceptions</h2>
            <ul className="space-y-4">
              {content.misconceptions.map((m) => (
                <li key={m.claim}>
                  <p className="font-semibold text-[--color-ink]">✗ {m.claim}</p>
                  <p className="text-[--color-muted]">✓ {m.truth}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <AppCTA variant="inline" heading="Work with PDFs on your phone" sub="PDF Editor is free on iOS and Android." />
      </ArticleLayout>

      <FAQ items={content.faq} />

      {seeAlso.length ? (
        <RelatedGuides heading="See also" items={seeAlso} cta="Explore →" />
      ) : null}
      {relatedUnique.length ? (
        <RelatedGuides heading="Related" items={relatedUnique} cta="Learn more →" />
      ) : null}

      <AppCTA variant="final" heading="Take PDF Editor with you." sub="Free on iOS and Android." />

      <JsonLd
        data={[
          articleSchema({
            title: content.h1,
            description: content.description,
            path,
            datePublished: content.updated,
            dateModified: content.reviewed,
          }),
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "PDF Encyclopedia", path: "/pdf-encyclopedia" },
            { label: content.h1, path },
          ]),
          definedTermSchema({
            term: content.h1,
            aliases: content.aliases,
            definition: content.definition,
            path,
          }),
          faqSchema(content.faq),
        ]}
      />
    </>
  );
}
```

- [ ] **Step 5: Run to verify it passes**

Run: `npx vitest run tests/knowledge/knowledgePage.test.tsx`
Expected: PASS.

- [ ] **Step 6: Confirm existing RelatedGuides tests still pass**

Run: `npx vitest run tests/`
Expected: PASS (the `cta` default preserves existing "Read the guide →" behavior).

- [ ] **Step 7: Commit**

```bash
git add src/components/sections/KnowledgePage.tsx src/components/sections/RelatedGuides.tsx tests/knowledge/knowledgePage.test.tsx
git commit -m "feat(knowledge): add KnowledgePage renderer with fixed section order and DefinedTerm schema"
```

---

## Task 6: Entry route `/pdf-encyclopedia/[slug]`

**Files:**
- Create: `src/app/pdf-encyclopedia/[slug]/page.tsx`

**Interfaces:**
- Consumes: `KNOWLEDGE`, `KnowledgePage`, `seo`, `getRoute`.
- Produces: static params for every knowledge slug; per-page metadata.

- [ ] **Step 1: Implement the route** (mirrors `src/app/guides/[slug]/page.tsx`)

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KNOWLEDGE } from "@/content/knowledge";
import { KnowledgePage } from "@/components/sections/KnowledgePage";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";

export async function generateStaticParams() {
  return Object.keys(KNOWLEDGE).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = KNOWLEDGE[slug];
  if (!entry) return {};
  const path = `/pdf-encyclopedia/${slug}`;
  try {
    const r = getRoute(path);
    return seo({
      title: r.title,
      description: r.description,
      path,
      type: "article",
      publishedTime: entry.updated,
      modifiedTime: entry.reviewed,
    });
  } catch {
    return seo({
      title: entry.h1,
      description: entry.description,
      path,
      type: "article",
      publishedTime: entry.updated,
      modifiedTime: entry.reviewed,
    });
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = KNOWLEDGE[slug];
  if (!entry) notFound();
  return <KnowledgePage content={entry} />;
}
```

- [ ] **Step 2: Typecheck + build**

Run: `npm run typecheck && npm run build`
Expected: PASS. With `KNOWLEDGE` empty, the route generates zero params (valid — no pages yet).

- [ ] **Step 3: Commit**

```bash
git add src/app/pdf-encyclopedia/[slug]/page.tsx
git commit -m "feat(knowledge): add /pdf-encyclopedia/[slug] dynamic route"
```

---

## Task 7: Encyclopedia hub (`/pdf-encyclopedia`)

**Files:**
- Create: `src/content/knowledge-hub.ts`
- Create: `src/components/sections/KnowledgeHubPage.tsx`
- Create: `src/app/pdf-encyclopedia/page.tsx`
- Modify: `src/lib/routes.ts` (add the hub `RouteEntry`)
- Test: `tests/knowledge/hub.test.tsx`

**Interfaces:**
- Consumes: `CLUSTERS`, `CLUSTER_ORDER`, `entriesByCluster`, `HUB` copy.
- Produces: `KnowledgeHubPage()` rendering hero + 10 cluster blocks that list each cluster's live entries (grows as waves land — never broken links).

- [ ] **Step 1: Add the hub route entry** to `src/lib/routes.ts` (in the Hubs section)

```ts
  {
    path: "/pdf-encyclopedia",
    title: "PDF Encyclopedia — How PDF Actually Works",
    description:
      "A plain-English reference to the PDF format: standards, fonts, color, compression, forms, security and accessibility. Definitions, specs and how each piece works.",
    category: "hub",
    priority: 0.8,
    changeFrequency: "weekly",
  },
```

- [ ] **Step 2: Add hub copy** — create `src/content/knowledge-hub.ts`

```ts
export const KNOWLEDGE_HUB = {
  eyebrow: "PDF Encyclopedia",
  h1: "How PDF actually works",
  lead: "A plain-English reference to the PDF format — the standards, the file structure, and the pieces that decide how a document looks, prints and protects itself. Start with a concept or browse by area.",
  intro:
    "PDF is an open ISO standard with decades of history and a deep set of features. These entries explain each concept on its own terms: what it is, how it works, and what it means in practice — with links to the tools and step-by-step guides when you want to do something, not just understand it.",
};
```

- [ ] **Step 3: Write the failing hub test**

Create `tests/knowledge/hub.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { KnowledgeHubPage } from "@/components/sections/KnowledgeHubPage";
import { CLUSTER_ORDER, CLUSTERS } from "@/content/knowledge/_clusters";

describe("KnowledgeHubPage", () => {
  it("renders the hero and all 10 cluster headings", () => {
    render(<KnowledgeHubPage />);
    expect(screen.getByRole("heading", { level: 1, name: /How PDF actually works/i })).toBeInTheDocument();
    for (const key of CLUSTER_ORDER) {
      expect(screen.getByText(CLUSTERS[key].title)).toBeInTheDocument();
    }
  });
});
```

- [ ] **Step 4: Run to verify it fails**

Run: `npx vitest run tests/knowledge/hub.test.tsx`
Expected: FAIL — cannot resolve `KnowledgeHubPage`.

- [ ] **Step 5: Implement `KnowledgeHubPage.tsx`**

```tsx
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Hero } from "@/components/sections/Hero";
import { CardLink } from "@/components/primitives/Card";
import { AppCTA } from "@/components/sections/AppCTA";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/content/schema";
import { CLUSTER_ORDER, CLUSTERS } from "@/content/knowledge/_clusters";
import { entriesByCluster, knowledgePath } from "@/content/knowledge";
import { KNOWLEDGE_HUB } from "@/content/knowledge-hub";

export function KnowledgeHubPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "PDF Encyclopedia" }]} />
      </Container>
      <Hero eyebrow={KNOWLEDGE_HUB.eyebrow} h1={KNOWLEDGE_HUB.h1} lead={KNOWLEDGE_HUB.lead} />
      <Section>
        <Container>
          <p className="max-w-3xl text-[--color-muted] mb-12">{KNOWLEDGE_HUB.intro}</p>
          {CLUSTER_ORDER.map((key) => {
            const entries = entriesByCluster(key);
            if (!entries.length) return null;
            return (
              <div key={key} className="mb-14">
                <h2 className="text-2xl font-bold text-[--color-ink]">{CLUSTERS[key].title}</h2>
                <p className="text-[--color-muted] mt-1 mb-6">{CLUSTERS[key].blurb}</p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {entries.map((e) => (
                    <li key={e.slug}>
                      <CardLink href={knowledgePath(e.slug)}>
                        <span className="text-base font-semibold text-[--color-ink] group-hover:text-[--color-brand]">
                          {e.h1}
                        </span>
                        <span className="block mt-3 text-sm text-[--color-muted]">{e.definition}</span>
                      </CardLink>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </Section>
      <AppCTA variant="final" heading="Put it into practice." sub="PDF Editor is free on iOS and Android." />
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "PDF Encyclopedia", path: "/pdf-encyclopedia" },
          ]),
        ]}
      />
    </>
  );
}
```

- [ ] **Step 6: Implement the hub route** — create `src/app/pdf-encyclopedia/page.tsx`

```tsx
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { KnowledgeHubPage } from "@/components/sections/KnowledgeHubPage";

const route = getRoute("/pdf-encyclopedia");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <KnowledgeHubPage />;
}
```

- [ ] **Step 7: Run hub test + typecheck + build**

Run: `npx vitest run tests/knowledge/hub.test.tsx && npm run typecheck && npm run build`
Expected: PASS. Hub renders hero + intro; cluster blocks are empty-guarded until entries exist.

- [ ] **Step 8: Commit**

```bash
git add src/content/knowledge-hub.ts src/components/sections/KnowledgeHubPage.tsx src/app/pdf-encyclopedia/page.tsx src/lib/routes.ts tests/knowledge/hub.test.tsx
git commit -m "feat(knowledge): add /pdf-encyclopedia hub with cluster-indexed entry listing"
```

---

## Task 8: Metadata-uniqueness gate

**Files:**
- Test: `tests/knowledge/metadataUniqueness.test.ts`

- [ ] **Step 1: Write the test**

```ts
import { describe, it, expect } from "vitest";
import { KNOWLEDGE } from "@/content/knowledge";
import { ROUTES } from "@/lib/routes";

const entries = Object.values(KNOWLEDGE);

describe("knowledge metadata uniqueness", () => {
  it("every entry has a unique slug, h1 and description", () => {
    const dup = (xs: string[]) =>
      xs.filter((x, i) => xs.indexOf(x) !== i);
    expect(dup(entries.map((e) => e.slug))).toEqual([]);
    expect(dup(entries.map((e) => e.h1))).toEqual([]);
    expect(dup(entries.map((e) => e.description))).toEqual([]);
  });

  it("no entry h1 or description collides with an existing route title/description", () => {
    const titles = new Set(ROUTES.map((r) => r.title));
    const descs = new Set(ROUTES.map((r) => r.description));
    for (const e of entries) {
      // The entry's OWN route title may match its h1 by design; compare against
      // routes that are NOT this entry's own route.
      const own = `/pdf-encyclopedia/${e.slug}`;
      const foreignTitles = new Set(
        ROUTES.filter((r) => r.path !== own).map((r) => r.title),
      );
      const foreignDescs = new Set(
        ROUTES.filter((r) => r.path !== own).map((r) => r.description),
      );
      expect(foreignTitles.has(e.h1)).toBe(false);
      expect(foreignDescs.has(e.description)).toBe(false);
    }
    // Reference the sets so lint keeps them meaningful.
    expect(titles.size).toBeGreaterThan(0);
    expect(descs.size).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run** — `npx vitest run tests/knowledge/metadataUniqueness.test.ts` → PASS (vacuous while empty; meaningful as waves land).

- [ ] **Step 3: Commit**

```bash
git add tests/knowledge/metadataUniqueness.test.ts
git commit -m "test(knowledge): enforce metadata uniqueness across entries and routes"
```

---

## Task 9: Schema-correctness gate (no HowTo)

**Files:**
- Test: `tests/knowledge/schemaShape.test.tsx`

- [ ] **Step 1: Write the test** — render every entry (plus the fixture) and assert JSON-LD contains DefinedTerm + Article + FAQPage + BreadcrumbList and never HowTo.

```tsx
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { KnowledgePage } from "@/components/sections/KnowledgePage";
import { KNOWLEDGE } from "@/content/knowledge";
import { makeKnowledgeFixture } from "./_fixture";

function ldOf(node: HTMLElement): string {
  return [...node.querySelectorAll('script[type="application/ld+json"]')]
    .map((s) => s.textContent ?? "")
    .join("");
}

describe("knowledge schema shape", () => {
  const samples = [makeKnowledgeFixture({ slug: "z" }), ...Object.values(KNOWLEDGE)];
  it.each(samples.map((c) => [c.slug, c] as const))(
    "%s emits DefinedTerm/Article/FAQ/Breadcrumb and no HowTo",
    (_slug, content) => {
      const { container } = render(<KnowledgePage content={content} />);
      const ld = ldOf(container);
      expect(ld).toContain('"DefinedTerm"');
      expect(ld).toContain('"Article"');
      expect(ld).toContain('"FAQPage"');
      expect(ld).toContain('"BreadcrumbList"');
      expect(ld).not.toContain('"HowTo"');
    },
  );
});
```

- [ ] **Step 2: Run** — `npx vitest run tests/knowledge/schemaShape.test.tsx` → PASS.

- [ ] **Step 3: Commit**

```bash
git add tests/knowledge/schemaShape.test.tsx
git commit -m "test(knowledge): assert DefinedTerm schema and forbid HowTo on knowledge pages"
```

---

## Task 10: Graph referential-integrity gate

**Files:**
- Test: `tests/knowledge/graphIntegrity.test.ts`

- [ ] **Step 1: Write the test**

```ts
import { describe, it, expect } from "vitest";
import { KNOWLEDGE } from "@/content/knowledge";
import { ROUTES } from "@/lib/routes";

const entries = Object.values(KNOWLEDGE);
const slugs = new Set(Object.keys(KNOWLEDGE));
const routePaths = new Set(ROUTES.map((r) => r.path));

const knowledgeSlugFields = (e: (typeof entries)[number]) => [
  ...(e.graph.parentConcept ? [e.graph.parentConcept] : []),
  ...(e.graph.childConcepts ?? []),
  ...(e.graph.relatedConcepts ?? []),
  ...(e.graph.relatedStandards ?? []),
  ...(e.graph.relatedFormats ?? []),
  ...(e.specification?.relatedStandards ?? []),
  ...e.seeAlso,
];

describe("knowledge graph integrity", () => {
  it("every knowledge-slug edge points to a real entry", () => {
    for (const e of entries) {
      for (const target of knowledgeSlugFields(e)) {
        expect(slugs.has(target), `${e.slug} → ${target}`).toBe(true);
      }
    }
  });

  it("no entry references itself", () => {
    for (const e of entries) {
      expect(knowledgeSlugFields(e)).not.toContain(e.slug);
    }
  });

  it("every relatedTools/relatedGuides path is a real route", () => {
    for (const e of entries) {
      for (const link of [
        ...(e.graph.relatedTools ?? []),
        ...(e.graph.relatedGuides ?? []),
        e.parentHub,
      ]) {
        expect(routePaths.has(link.path), `${e.slug} → ${link.path}`).toBe(true);
      }
    }
  });

  it("seeAlso has 5–8 curated entries", () => {
    for (const e of entries) {
      expect(e.seeAlso.length).toBeGreaterThanOrEqual(5);
      expect(e.seeAlso.length).toBeLessThanOrEqual(8);
    }
  });

  it("no entry is orphaned — each is a seeAlso/graph target of another entry", () => {
    if (entries.length < 2) return; // skip until the graph is populated
    const referenced = new Set<string>();
    for (const e of entries) for (const t of knowledgeSlugFields(e)) referenced.add(t);
    for (const e of entries) {
      expect(referenced.has(e.slug), `orphan: ${e.slug}`).toBe(true);
    }
  });
});
```

- [ ] **Step 2: Run** — `npx vitest run tests/knowledge/graphIntegrity.test.ts` → PASS (orphan + seeAlso checks are vacuous/guarded while empty; enforced once waves land).

- [ ] **Step 3: Commit**

```bash
git add tests/knowledge/graphIntegrity.test.ts
git commit -m "test(knowledge): enforce graph referential integrity, seeAlso count and no orphans"
```

---

## Task 11: Registry/route parity gate

**Files:**
- Test: `tests/knowledge/routeParity.test.ts`

- [ ] **Step 1: Write the test**

```ts
import { describe, it, expect } from "vitest";
import { KNOWLEDGE } from "@/content/knowledge";
import { ROUTES } from "@/lib/routes";

describe("knowledge ↔ ROUTES parity", () => {
  const refRoutes = ROUTES.filter((r) => r.category === "reference");

  it("every knowledge entry has a matching reference route", () => {
    for (const slug of Object.keys(KNOWLEDGE)) {
      const path = `/pdf-encyclopedia/${slug}`;
      expect(refRoutes.some((r) => r.path === path), `missing route: ${path}`).toBe(true);
    }
  });

  it("every reference route has a matching knowledge entry", () => {
    for (const r of refRoutes) {
      const slug = r.path.replace("/pdf-encyclopedia/", "");
      expect(KNOWLEDGE[slug], `missing entry: ${r.path}`).toBeDefined();
    }
  });

  it("each reference route title matches its entry h1-derived route title", () => {
    for (const r of refRoutes) {
      const slug = r.path.replace("/pdf-encyclopedia/", "");
      expect(KNOWLEDGE[slug].description).toBe(r.description);
    }
  });
});
```

- [ ] **Step 2: Run** — `npx vitest run tests/knowledge/routeParity.test.ts` → PASS.

- [ ] **Step 3: Commit**

```bash
git add tests/knowledge/routeParity.test.ts
git commit -m "test(knowledge): enforce KNOWLEDGE↔ROUTES parity for reference pages"
```

---

## Task 12: Field-validity gate

**Files:**
- Test: `tests/knowledge/fieldValidity.test.ts`

- [ ] **Step 1: Write the test**

```ts
import { describe, it, expect } from "vitest";
import { KNOWLEDGE } from "@/content/knowledge";

const INTENTS = new Set([
  "definition", "concept", "standard", "specification", "comparison",
  "security", "format", "history", "printing", "metadata", "rendering",
  "accessibility", "workflow",
]);
const DIFF = new Set(["Beginner", "Intermediate", "Advanced"]);
const isoDate = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));

describe("knowledge field validity", () => {
  it.each(Object.values(KNOWLEDGE).map((e) => [e.slug, e] as const))(
    "%s has valid enums, dates and non-empty prose",
    (_slug, e) => {
      expect(INTENTS.has(e.searchIntent)).toBe(true);
      expect(DIFF.has(e.difficulty)).toBe(true);
      expect(isoDate(e.updated)).toBe(true);
      expect(isoDate(e.reviewed)).toBe(true);
      expect(e.aliases.length).toBeGreaterThanOrEqual(1);
      expect(e.intro.join("").length).toBeGreaterThan(60);
      expect(e.sections.length).toBeGreaterThanOrEqual(3);
      expect(e.sections.every((s) => s.body.join("").length > 40)).toBe(true);
      expect(e.faq.length).toBeGreaterThanOrEqual(3);
      expect(e.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    },
  );
});
```

- [ ] **Step 2: Run** — `npx vitest run tests/knowledge/fieldValidity.test.ts` → PASS.

- [ ] **Step 3: Commit**

```bash
git add tests/knowledge/fieldValidity.test.ts
git commit -m "test(knowledge): validate enums, ISO dates and minimum prose depth"
```

---

## Task 13: Deduplication / cannibalization gate + topic manifest

**Files:**
- Create: `src/content/knowledge/_manifest.ts`
- Create: `docs/superpowers/plans/2026-07-04-phase-a-topic-manifest.md`
- Test: `tests/knowledge/cannibalization.test.ts`

**Interfaces:**
- Produces: `MANIFEST: { slug: string; cluster: KnowledgeCluster; searchIntent: KnowledgeSearchIntent; difficulty: KnowledgeDifficulty; h1: string; parentConcept?: string }[]` — the approved, deduplicated ~250-topic list; the single source of truth waves author against.

- [ ] **Step 1: Produce the deduplicated manifest**

Author `src/content/knowledge/_manifest.ts` with the full ~250 topics. Each candidate topic MUST be checked against the existing 176 routes (see `existing_paths.txt` produced during the audit, regenerate with the command below). Rules:
  - Drop any topic whose search intent duplicates an existing guide/tool/hub/compare; record it in the manifest doc's "Skipped (deduped)" table with the existing route it defers to.
  - Reference intent only ("what is / how does it work / spec"), never "how to".
  - Slugs unique, kebab-case, not colliding with any existing route path.

Regenerate the existing-paths list:

```bash
grep -oE 'path: "[^"]+"' src/lib/routes.ts | sed 's/path: //; s/"//g' | sort > /tmp/existing_paths.txt
```

`_manifest.ts` shape:

```ts
import type {
  KnowledgeCluster,
  KnowledgeDifficulty,
  KnowledgeSearchIntent,
} from "@/types/content";

export interface ManifestEntry {
  slug: string;
  h1: string;
  cluster: KnowledgeCluster;
  searchIntent: KnowledgeSearchIntent;
  difficulty: KnowledgeDifficulty;
  parentConcept?: string;
}

export const MANIFEST: ManifestEntry[] = [
  // Wave 1 — foundations
  { slug: "portable-document-format", h1: "Portable Document Format (PDF)", cluster: "foundations", searchIntent: "definition", difficulty: "Beginner" },
  { slug: "iso-32000", h1: "ISO 32000", cluster: "foundations", searchIntent: "standard", difficulty: "Intermediate", parentConcept: "portable-document-format" },
  // ... ~250 total, grouped by wave/cluster ...
];
```

Also write `docs/superpowers/plans/2026-07-04-phase-a-topic-manifest.md` with: the full slug list grouped by cluster; a "Skipped (deduped)" table (candidate → existing route it defers to → reason); and the final count.

- [ ] **Step 2: Write the cannibalization test**

```ts
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { MANIFEST } from "@/content/knowledge/_manifest";
import { ROUTES } from "@/lib/routes";
import { KNOWLEDGE } from "@/content/knowledge";

const existingPaths = new Set(ROUTES.map((r) => r.path));

describe("cannibalization / dedup gate", () => {
  it("no manifest slug collides with a non-reference existing route path", () => {
    for (const m of MANIFEST) {
      const asTopLevel = `/${m.slug}`;
      const nonRef = ROUTES.filter((r) => r.category !== "reference").map((r) => r.path);
      expect(nonRef).not.toContain(asTopLevel);
      expect(nonRef).not.toContain(`/pdf-encyclopedia/${m.slug}`);
    }
  });

  it("manifest slugs are unique", () => {
    const slugs = MANIFEST.map((m) => m.slug);
    expect(slugs.filter((s, i) => slugs.indexOf(s) !== i)).toEqual([]);
  });

  it("every shipped knowledge entry is in the approved manifest", () => {
    const manifestSlugs = new Set(MANIFEST.map((m) => m.slug));
    for (const slug of Object.keys(KNOWLEDGE)) {
      expect(manifestSlugs.has(slug), `unlisted entry: ${slug}`).toBe(true);
    }
  });

  it("the encyclopedia does not re-cover an existing guide's exact slug intent", () => {
    // Guard: no manifest slug equals an existing /guides/<slug> tail.
    const guideTails = new Set(
      [...existingPaths].filter((p) => p.startsWith("/guides/")).map((p) => p.replace("/guides/", "")),
    );
    for (const m of MANIFEST) expect(guideTails.has(m.slug), `dupe of guide: ${m.slug}`).toBe(false);
  });
});
```

- [ ] **Step 3: Run** — `npx vitest run tests/knowledge/cannibalization.test.ts` → PASS.

- [ ] **Step 4: Commit**

```bash
git add src/content/knowledge/_manifest.ts docs/superpowers/plans/2026-07-04-phase-a-topic-manifest.md tests/knowledge/cannibalization.test.ts
git commit -m "feat(knowledge): add deduplicated Phase A topic manifest + cannibalization gate"
```

> **CHECKPOINT:** The manifest is the approved topic list. Pause here for review before authoring waves if desired.

---

## Task 14: Sitemap validation gate

**Files:**
- Test: `tests/knowledge/sitemap.test.ts`

- [ ] **Step 1: Write the test** — reuse the existing sitemap by importing it and asserting every knowledge route appears once, apex, deduped.

```ts
import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import { KNOWLEDGE } from "@/content/knowledge";

describe("sitemap includes knowledge routes", () => {
  const urls = sitemap().map((e) => e.url);

  it("has no duplicate URLs", () => {
    expect(urls.filter((u, i) => urls.indexOf(u) !== i)).toEqual([]);
  });

  it("contains the hub and every knowledge entry, all apex", () => {
    expect(urls).toContain("https://pdfeditconvert.top/pdf-encyclopedia");
    for (const slug of Object.keys(KNOWLEDGE)) {
      const u = `https://pdfeditconvert.top/pdf-encyclopedia/${slug}`;
      expect(urls).toContain(u);
      expect(u.startsWith("https://pdfeditconvert.top/")).toBe(true);
      expect(u).not.toContain("www.");
    }
  });
});
```

- [ ] **Step 2: Run** — `npx vitest run tests/knowledge/sitemap.test.ts` → PASS.

- [ ] **Step 3: Commit**

```bash
git add tests/knowledge/sitemap.test.ts
git commit -m "test(knowledge): assert knowledge routes appear once and apex in the sitemap"
```

> **INFRASTRUCTURE COMPLETE.** Tasks 1–14 ship a working, tested Knowledge Graph system with zero published entries. Run the full gate once (`npm run lint && npm run typecheck && npx vitest run && npm run build`) and confirm green before starting Wave 1.

---

## Task 15: Wave 1 — Foundations (~25 entries) — AUTHORING TEMPLATE

This task defines the **repeatable per-wave procedure**. Waves 2–10 (Task 16) execute the identical Steps A–H against their own manifest slice.

**Files (per wave):**
- Create: `src/content/knowledge/<slug>.ts` (one per entry in the wave's cluster)
- Modify: `src/content/knowledge/index.ts` (import + add to `ENTRIES`)
- Modify: `src/lib/routes.ts` (one `RouteEntry` per entry)

**Per-entry authoring contract (Definition of Done):**
Each `<slug>.ts` default-exports a `KnowledgeContent` satisfying ALL of:
- `slug`/`cluster`/`searchIntent`/`difficulty` copied from the manifest row.
- Unique `h1`, `description` (≤ 160 chars, unique across the whole site), `definition` (one sentence, ≤ ~200 chars, answers "what is X").
- `aliases`: ≥ 1 real synonym/alternate name (feeds DefinedTerm + future search).
- `intro`: 2–3 unique paragraphs framing the concept.
- `sections`: ≥ 3, each a real heading + ≥ 1 substantial paragraph; the substance of the page. Factually correct, spec-grounded, no invented numbers.
- `keyFacts`: include where scannable facts exist (optional).
- `specification`: include for standards/technical concepts (ISO, introduced, latestVersion, typicalUsage, relatedStandards slugs). Omit where not applicable.
- `misconceptions`: include ≥ 1 where a common confusion exists (e.g. "PDF/A is not PDF/X"). Optional but encouraged.
- `faq`: ≥ 3 unique Q&A, distinct from `misconceptions`.
- `graph`: wire real edges — `parentConcept` (per manifest), `childConcepts`/`relatedConcepts`/`relatedStandards`/`relatedFormats` as slugs that EXIST (or will exist by end of phase; author cross-wave edges only to already-shipped or same-wave slugs to keep the gate green mid-phase — see Step F), `relatedTools`/`relatedGuides` as `RelatedLink` to REAL existing routes.
- `seeAlso`: 5–8 curated, highly-relevant knowledge slugs (must exist by the time the wave's gate runs).
- `parentHub`: `{ label: "PDF Encyclopedia", path: "/pdf-encyclopedia" }`.
- `updated`/`reviewed`: today's ISO date.
- Primary CTA is PDF Editor (handled by the renderer — do not add other app CTAs).

**Worked exemplar** — the gold-standard shape every entry follows (`src/content/knowledge/iso-32000.ts`):

```ts
import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  slug: "iso-32000",
  h1: "ISO 32000",
  cluster: "foundations",
  aliases: ["ISO 32000-1", "ISO 32000-2", "PDF ISO standard"],
  definition:
    "ISO 32000 is the international standard that defines the PDF file format, published by the International Organization for Standardization.",
  description:
    "ISO 32000 is the ISO standard that defines PDF. How it relates to Adobe's original spec, the 32000-1 and 32000-2 parts, and why standardisation matters.",
  searchIntent: "standard",
  difficulty: "Intermediate",
  updated: "2026-07-04",
  reviewed: "2026-07-04",
  intro: [
    "PDF began as a proprietary format created by Adobe in 1993. In 2008 Adobe handed the specification to the International Organization for Standardization, and PDF became an open standard: ISO 32000.",
    "That handover matters. It means no single company controls the format, any developer can implement it, and documents saved today have a published, stable specification behind them — a big part of why PDF is trusted for archiving and exchange.",
  ],
  sections: [
    {
      heading: "From Adobe spec to ISO standard",
      body: [
        "Adobe published the PDF Reference for years as the definitive description of the format. ISO 32000-1 (2008) took that reference — PDF 1.7 — and republished it as an international standard with only editorial changes, so implementations did not have to change.",
      ],
    },
    {
      heading: "The two parts: 32000-1 and 32000-2",
      body: [
        "ISO 32000-1 corresponds to PDF 1.7. ISO 32000-2 defines PDF 2.0, first published in 2017 and revised in 2020, adding features around encryption, digital signatures, and structure while deprecating some older constructs.",
      ],
    },
    {
      heading: "Why standardisation matters in practice",
      body: [
        "Because the format is an open ISO standard, a PDF is not tied to one vendor's software. Multiple independent readers can render the same file consistently, and specialised subsets (PDF/A, PDF/X, PDF/UA) build on the same base standard for archiving, print, and accessibility.",
      ],
    },
  ],
  keyFacts: [
    { label: "Published by", value: "ISO (International Organization for Standardization)" },
    { label: "First edition", value: "ISO 32000-1:2008 (based on PDF 1.7)" },
    { label: "Current PDF 2.0", value: "ISO 32000-2 (2017, revised 2020)" },
  ],
  specification: {
    iso: "ISO 32000",
    introduced: "2008",
    latestVersion: "ISO 32000-2 (2020)",
    typicalUsage: "The base standard all PDF software and PDF subsets build on.",
    relatedStandards: ["pdf-a", "pdf-x", "pdf-ua"],
  },
  misconceptions: [
    {
      claim: "Adobe still owns and controls the PDF format.",
      truth:
        "Adobe created PDF but transferred the specification to ISO in 2008. PDF is now an open international standard anyone can implement.",
    },
  ],
  faq: [
    { q: "Is PDF an open standard?", a: "Yes. Since 2008 PDF has been defined by the open ISO 32000 standard, not by a single company." },
    { q: "What is the difference between ISO 32000-1 and 32000-2?", a: "32000-1 defines PDF 1.7; 32000-2 defines PDF 2.0, adding newer encryption, signature and structure features." },
    { q: "Do I need to know ISO 32000 to use PDFs?", a: "No — it matters to software developers. For everyday use, the benefit is that any compliant app opens your files the same way." },
  ],
  graph: {
    parentConcept: "portable-document-format",
    relatedConcepts: ["pdf-file-structure", "pdf-versions"],
    relatedStandards: ["pdf-a", "pdf-x", "pdf-ua"],
    relatedGuides: [{ label: "PDF vs DOCX", path: "/guides/pdf-vs-docx" }],
  },
  seeAlso: [
    "portable-document-format",
    "pdf-versions",
    "pdf-file-structure",
    "pdf-a",
    "pdf-x",
    "pdf-ua",
  ],
  parentHub: { label: "PDF Encyclopedia", path: "/pdf-encyclopedia" },
};

export default content;
```

**Per-wave procedure:**

- [ ] **Step A: Confirm the wave's slug slice** from `MANIFEST` (filter by cluster / wave). List the exact slugs to author.
- [ ] **Step B: Author each `<slug>.ts`** to the contract above. For factual accuracy, ground every claim in the real PDF/ISO specification; when unsure, phrase conservatively or omit — never invent numbers, dates, or capabilities.
- [ ] **Step C: Register entries** — add imports + `ENTRIES` items in `src/content/knowledge/index.ts` (alphabetical by slug).
- [ ] **Step D: Add routes** — one `RouteEntry` per entry in `src/lib/routes.ts` under a `// Knowledge — <cluster>` comment block:

```ts
  {
    path: "/pdf-encyclopedia/iso-32000",
    title: "ISO 32000 — The International Standard That Defines PDF",
    description:
      "ISO 32000 is the ISO standard that defines PDF. How it relates to Adobe's original spec, the 32000-1 and 32000-2 parts, and why standardisation matters.",
    category: "reference",
    priority: 0.6,
    changeFrequency: "monthly",
  },
```
The route `description` MUST equal the entry's `description` (enforced by Task 11).

- [ ] **Step E: Wire the graph** — set `graph`/`seeAlso` edges. Only reference slugs already shipped (earlier waves) or authored in THIS wave, so the integrity gate stays green. Backfill richer cross-wave edges in a later pass if needed.
- [ ] **Step F: Run the wave gate**

```bash
npx vitest run tests/knowledge && npm run lint && npm run typecheck
```
Expected: PASS (uniqueness, schema, graph integrity, parity, field validity, cannibalization, sitemap).

- [ ] **Step G: Build**

```bash
npm run build
```
Expected: PASS; new `/pdf-encyclopedia/<slug>` pages prerender; hub lists the new cluster.

- [ ] **Step H: Commit the wave**

```bash
git add src/content/knowledge src/lib/routes.ts
git commit -m "feat(knowledge): Wave 1 — foundations cluster (N entries)"
```

---

## Task 16: Waves 2–10 — remaining clusters

Each wave repeats Task 15 Steps A–H against its manifest slice. Author, register, route, wire graph, gate, build, commit — one commit per wave.

| Wave | Cluster | ~Count | Parent/anchor concepts | Representative slugs |
|---|---|---|---|---|
| 2 | `standards` | 25 | `iso-32000` | `pdf-a`, `pdf-a-1`, `pdf-a-2`, `pdf-a-3`, `pdf-x`, `pdf-x-1a`, `pdf-x-4`, `pdf-ua`, `pdf-e`, `pdf-vt`, `pdf-conformance-levels`, `pdf-output-intent` |
| 3 | `text-fonts` | 25 | `pdf-fonts` | `font-embedding`, `font-subsetting`, `type-1-fonts`, `truetype-in-pdf`, `opentype-in-pdf`, `cid-fonts`, `cmap`, `tounicode`, `standard-14-fonts`, `pdf-text-extraction` |
| 4 | `graphics-color` | 25 | `pdf-color` | `devicergb`, `devicecmyk`, `devicegray`, `icc-profiles-in-pdf`, `spot-color`, `pdf-transparency`, `blend-modes`, `rendering-intent`, `xobjects`, `pdf-shadings` |
| 5 | `images-compression` | 25 | `pdf-compression` | `flate-compression`, `lzw-compression`, `dctdecode-jpeg`, `jpxdecode-jpeg2000`, `ccitt-fax-compression`, `jbig2`, `image-downsampling`, `pdf-optimization`, `pdf-linearization` |
| 6 | `interactivity` | 25 | `pdf-interactive-features` | `acroform`, `xfa-forms`, `pdf-form-fields`, `pdf-annotations`, `annotation-types`, `pdf-bookmarks`, `pdf-outlines`, `pdf-actions`, `appearance-streams`, `fdf-xfdf` |
| 7 | `security` | 25 | `pdf-security-model` | `pdf-encryption`, `rc4-encryption`, `aes-in-pdf`, `user-vs-owner-password`, `pdf-permission-flags`, `pdf-redaction`, `pdf-digital-signatures`, `pades`, `ltv-signatures`, `dss` |
| 8 | `accessibility` | 20 | `tagged-pdf` | `pdf-structure-tree`, `reading-order`, `pdf-alt-text`, `role-mapping`, `marked-content-mcid`, `wcag-and-pdf`, `accessible-pdf-forms`, `pdf-artifacts` |
| 9 | `metadata-tooling` | 20 | `pdf-metadata` | `xmp-metadata`, `document-info-dictionary`, `searchable-pdf`, `pdf-ocr-concept`, `pdf-page-labels`, `pdf-thumbnails`, `pdf-validation`, `pdf-repair-concept` |
| 10 | `print-geometry` | 20 | `pdf-page-geometry` | `mediabox`, `cropbox`, `bleedbox`, `trimbox`, `artbox`, `pdf-page-sizes`, `pdf-page-rotation`, `optional-content-groups`, `pdf-preflight`, `pdf-trapping` |

Exact per-wave slug lists come from `_manifest.ts` (Task 13). Counts adjust after dedup; final total 240–260.

---

## Task 17: Final QA gate + production report

**Files:**
- Create: `docs/superpowers/plans/2026-07-04-phase-a-production-report.md`

- [ ] **Step 1: Run every gate clean**

```bash
npm run lint && npm run typecheck && npx vitest run && npm run build
```
Expected: all PASS. Capture the vitest summary (file/test counts) and the build's sitemap location count.

- [ ] **Step 2: Duplicate + cannibalization audit** — confirm `tests/knowledge/{metadataUniqueness,cannibalization,routeParity}.test.ts` pass; record skipped/deduped topics from the manifest doc.

- [ ] **Step 3: Schema + graph audit** — confirm `schemaShape` + `graphIntegrity` pass (DefinedTerm present, no HowTo, zero orphans, all edges resolve).

- [ ] **Step 4: Sitemap audit** — confirm the sitemap count rose by (entries + 1 hub) with zero duplicates and apex-only URLs.

- [ ] **Step 5: WebmasterID + canonical audit** — `git diff --stat origin/main` shows NO change to `src/app/layout.tsx`, robots, `SITE_URL`, `metadataBase`, or tool runtime code:

```bash
git diff --stat origin/main -- src/app/layout.tsx src/app/robots.ts src/lib/seo.ts src/components/tools src/lib/tools
```
Expected: empty (no output).

- [ ] **Step 6: Write the production report** covering: pages added (exact count) · skipped duplicates (with the route each defers to) · cannibalization analysis · internal-link/graph summary (edge counts, orphan count = 0) · sitemap additions · schema verification · metadata verification · App CTA verification (PDF Editor only) · WebmasterID-untouched confirmation · lint · typecheck · tests · build · known limitations · Phase B recommendations.

- [ ] **Step 7: Commit the report and STOP**

```bash
git add docs/superpowers/plans/2026-07-04-phase-a-production-report.md
git commit -m "docs(knowledge): Phase A production report"
```

> **DO NOT MERGE.** Push the branch and wait for approval.

---

## Self-Review (completed by plan author)

- **Spec coverage:** Architecture (T1,4), content model (T1), schema (T2,9), route/SEO (T6,8,11,14), hub/template (T5,7), production waves (T15,16), dedup/cannibalization (T13), graph integrity (T10), metadata uniqueness (T8), sitemap (T14), build/lint/typecheck/test gates (T15 Step F/G, T17), final report (T17). All 12 required plan sections mapped.
- **Domain-agnostic model:** `KnowledgeContent` has no PDF-specific fields; cluster/intent enums are extensible; Phases B–H reuse it. ✓
- **Slug-based knowledge edges / path-based tool-guide links:** enforced by types (T1) and the graph gate (T10). ✓
- **Rendering order fixed:** T5 implements definition → intro → specification → keyFacts → sections → misconceptions → CTA → FAQ → See also → Related → final CTA. ✓
- **Dedup mandatory:** T13 gate + manifest, checkpointed before waves. ✓
- **Untouched:** WebmasterID/canonical/robots/tool-runtime asserted by T17 Step 5. ✓
- **No second content system:** only a type, registry, one page template, one hub, one schema builder, one route category, plus a backward-compatible `cta` prop. ✓
- **Type consistency:** `knowledgeRef`/`resolveRefs`/`entriesByCluster`/`knowledgePath` names match across T4–T7; `definedTermSchema` signature matches T2↔T5; `MANIFEST` shape matches T13↔T15.
