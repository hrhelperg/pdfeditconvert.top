# SEO + Indexation Automation Layer — Design Spec

**Date:** 2026-05-14
**Project:** pdfeditconvert.top
**Goal:** Harden the existing SEO foundation and add automation so regressions surface before deploy and search engines (Google, Bing, IndexNow consumers) can rediscover updated content reliably.

## Background

The repo already has the major building blocks:

- **Central registry**: `src/lib/routes.ts` exports `ROUTES: RouteEntry[]` (38 routes today) with `path`, `title`, `description`, `category`, `priority`, `changeFrequency`, `hidden?`.
- **Sitemap**: `src/app/sitemap.ts` reads `ROUTES`, filters `hidden`, emits at `/sitemap.xml`.
- **Robots**: `src/app/robots.ts` allows `/`, references `/sitemap.xml`.
- **Metadata helper**: `src/lib/seo.ts` returns Next `Metadata` with title, description, `alternates.canonical`, Open Graph, Twitter, `robots: { index: true, follow: true }`.
- **Schema helpers**: `src/content/schema.ts` — `websiteSchema`, `organizationSchema` (hrhelperg s.r.o.), `softwareAppSchema`, `articleSchema`, `breadcrumbSchema`, `faqSchema`, `howToSchema`, `webApplicationSchema`. `JsonLd` component renders an array.
- **Global emission**: `Organization` + `WebSite` schemas emit on every page via `app/layout.tsx`. `SoftwareApplication` emits on homepage. `Article` + `Breadcrumb` + `FAQ` + `HowTo` emit on guides. `WebApplication` emits on tool pages.
- **WebmasterID**: `app/layout.tsx` includes the global tracker (`wm_b6f7wz6b9y2o5qzo`, endpoint `https://webmasterid-ingest-api.vercel.app/api/events`). Not touched by this work.

This spec covers what's missing: per-route `lastModified`, an explicit `indexable` flag, validation scripts, internal-link checking, IndexNow scaffolding, and documentation.

## Scope

### In
1. Extend `RouteEntry` with `lastModified` (ISO date string) and `indexable?: boolean` (default `true`).
2. Backfill `lastModified` for the 38 existing routes (single dated backfill = `2026-05-14`).
3. Sitemap reads `lastModified` per route instead of `new Date()`.
4. Extend `seo()` helper to accept `indexable` and emit `robots: { index: false, follow: false }` when false.
5. Optional `seo:robots` helper: pages can opt into `noindex` (e.g. `/contact` thank-you flows in the future). Current 38 routes stay indexable.
6. New `scripts/seo-check.mjs` and `npm run seo:check`.
7. New `scripts/check-internal-links.mjs` and `npm run seo:links`.
8. New `scripts/indexnow-submit.mjs` and `npm run seo:indexnow`. Reads `INDEXNOW_KEY` from env; no-op without it; honors a `--dry-run` flag.
9. New `docs/seo/` cluster: architecture, add-a-guide, add-a-tool, checks, indexnow.
10. `.env.example` entry for `INDEXNOW_KEY` (no key invented).

### Out
- Rebuilding the registry, sitemap, robots, metadata, schema, or `JsonLd` (they already work).
- Removing or restructuring existing pages, routes, or CTAs.
- Touching WebmasterID, App Store, or Google Play references.
- Submitting URLs to IndexNow automatically (the script defaults to dry-run; CI integration is a follow-up).
- The 19 new SEO guides — that's the separate spec `2026-05-14-seo-long-tail-guides-design.md`. This work lands first.

### Sequencing
This SEO automation layer lands **before** the 19 new guides. Reasons:
- New `lastModified` field becomes routine for the 19 guide route entries — no backfill needed.
- `seo:check` catches issues in the new guides at PR time.
- One PR for infra; one PR for content. Cleaner reviews.

## Architecture

### 1. `RouteEntry` extension (`src/types/content.ts`)

```ts
export interface RouteEntry {
  path: string;
  title: string;
  description: string;
  category: RouteCategory;
  priority: number;
  changeFrequency: /* unchanged */;
  hidden?: boolean;        // existing — excludes from sitemap
  indexable?: boolean;     // NEW — default true; false => noindex,nofollow
  lastModified: string;    // NEW — ISO date (YYYY-MM-DD), required
}
```

`hidden` and `indexable` are related but distinct:
- `hidden: true` → not in sitemap (used today for routes that should not be crawled at all).
- `indexable: false` → not in sitemap **and** the page emits `robots: noindex,nofollow` via `seo({ indexable: false, ... })` at the page level. Reserved for future thin pages (e.g. an unsubscribe confirmation).
- Default: `hidden: false`, `indexable: true` → fully indexable, appears in sitemap.

Helper: `src/lib/routes.ts` exports `isIndexable(r: RouteEntry): boolean` returning `!r.hidden && r.indexable !== false`. The sitemap filters on `isIndexable`; the metadata `robots` flag is set per-page when the caller passes `indexable: false` to `seo()`.

If you need a page crawled-but-not-ranked (rare), keep `hidden: false`, `indexable: true` in the registry, and pass `indexable: false` only at the page-level `seo()` call. The split avoids one boolean having two contradictory meanings.

### 2. Backfill (`src/lib/routes.ts`)

Add `lastModified: "2026-05-14"` to every existing `RouteEntry`. Single dated backfill is honest — Google treats `lastmod` as a hint, and bulk-dating today reflects the actual fact that the site shipped a major content update on this date. New guides will supply their own date.

### 3. Sitemap (`src/app/sitemap.ts`)

```ts
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.filter(isIndexable).map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
```

### 4. Robots (`src/app/robots.ts`)

Keep current behavior. Add an explicit `disallow: ["/api/"]` rule as a precaution even though no `/api/*` routes exist today — defensive against future leaks.

```ts
return {
  rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
  sitemap: `${SITE_URL}/sitemap.xml`,
  host: SITE_URL,
};
```

### 5. `seo()` helper extension (`src/lib/seo.ts`)

Add optional `indexable?: boolean` and `modifiedTime?: string` flow-through. When `indexable === false`, emit `robots: { index: false, follow: false, noimageindex: true }`. Backwards compatible — all existing call sites continue working unchanged.

### 6. `scripts/seo-check.mjs` (`npm run seo:check`)

Node ESM script. Imports `ROUTES` and `SITE_URL` directly from compiled output? No — keep simple: re-implement the check in plain Node, reading routes via a tiny barrel export. Cleanest path:

1. Have `src/lib/routes.ts` continue to export `ROUTES` and `SITE_URL` (already does).
2. Script uses `tsx` (already a transitive dep via Next? — if not, use a pure-JS shim) to load TS at runtime. Alternative: build a small `scripts/routes-snapshot.mjs` that the TS file generates via `npm run build`'s static analysis. **Simpler decision**: use `tsx` from devDependencies; if not present, add it.

Decision: add `tsx` as a devDependency. Script reads ROUTES directly. Failing checks exit 1.

**Strict (exit 1)** failure modes:
- Indexable route with `title` missing, empty, or length < 10 or > 70
- Indexable route with `description` missing, empty, or length < 50 or > 200
- Indexable route with missing or invalid `lastModified`
- Duplicate `title` across indexable routes
- Duplicate computed canonical URL (`SITE_URL + path`)
- Route in sitemap that isn't in ROUTES (impossible by construction, but assert)
- Route in ROUTES missing from sitemap output (regression catch if sitemap.ts diverges)
- Robots output doesn't reference `/sitemap.xml`

**Warn-only (no exit code change)** modes:
- Commercial-category page (`core`, `hub`, `use-case`, `tool`) whose `page.tsx` doesn't import `AppCTA`
- Indexable route missing OG image (defaults to `/og/default.png`, which exists — warn if explicit override is broken)
- Description starts with the exact title string (low signal; usually a copy-paste mistake)

Output format:
```
seo:check
  ✓ 38 routes
  ✓ titles 38/38 unique
  ✓ descriptions 38/38 valid
  ✓ canonicals 38/38 unique
  ✓ sitemap covers 38 indexable routes
  ✓ robots references sitemap
  ⚠ /pdf-editor: AppCTA not detected in page.tsx (please verify manually)
seo:check passed (1 warning)
```

### 7. `scripts/check-internal-links.mjs` (`npm run seo:links`)

1. Build expected URL set from ROUTES (static paths).
2. For dynamic routes (`/guides/[slug]`, `/compare/[slug]`, `/use-cases/[slug]`), expand using existing content registries: `GUIDES`, `COMPARE`, `USE_CASES`.
3. Walk `src/**/*.{ts,tsx,md,mdx}` files. Extract path-style strings via regex on:
   - `href="/..."` and `href={\`/...\`}`
   - `path: "/..."` (inside RelatedLink / RouteEntry objects)
4. Internal path = starts with `/`, not `//`, doesn't include space, doesn't include protocol.
5. Report any internal path not in expected set.
6. Cross-check ingress:
   - Every `category === "tool"` route must appear as a link from `/` (`src/app/page.tsx`) or `/pdf-tools` (`src/app/pdf-tools/page.tsx`). Warn if missing.
   - Every `category === "guide"` route must appear as a link from `/guides` (`src/app/guides/page.tsx`). Warn if missing.

Exit code: non-zero on broken links, zero on ingress warnings only.

### 8. `scripts/indexnow-submit.mjs` (`npm run seo:indexnow`)

Flow:
1. Read `INDEXNOW_KEY` from env.
2. If missing: print `"INDEXNOW_KEY not set — skipping submission. See docs/seo/indexnow.md to enable."` and exit 0.
3. Read URLs from `--urls=path/to/file` (newline-separated), `--all` (every indexable route from ROUTES), or stdin.
4. Default mode is `--dry-run` (logs request body, does not POST).
5. With `--submit`: POST to `https://api.indexnow.org/IndexNow` with:
   ```json
   {
     "host": "pdfeditconvert.top",
     "key": "<key>",
     "keyLocation": "https://pdfeditconvert.top/<key>.txt",
     "urlList": ["..."]
   }
   ```
6. Print response status. No retry loop in v1.

Safeguards:
- Refuses to submit more than 10,000 URLs per call (IndexNow protocol cap).
- Refuses to submit if any URL host ≠ `pdfeditconvert.top`.
- Never runs automatically in CI by default. CI integration is a manual decision documented in `docs/seo/indexnow.md`.

### 9. IndexNow key file

Do NOT generate a key. Instead:
- `docs/seo/indexnow.md` explains: generate a hex string (8–128 chars per IndexNow spec) → save as `public/<key>.txt` containing only the key → set `INDEXNOW_KEY=<key>` in `.env.local` and on Vercel.
- Add the key filename to `.gitignore` if it's a unique secret; for IndexNow the key file is *intentionally* public, so it's fine to commit.
- `.env.example` gets `INDEXNOW_KEY=` (empty placeholder).

### 10. Documentation

Five files under `docs/seo/`:

| File | Contents |
| --- | --- |
| `architecture.md` | Mental model: registry → sitemap → robots → metadata → schema → JsonLd. Where to add each. Where IndexNow fits. |
| `add-a-guide.md` | Step-by-step: add content file, register in `GUIDES`, add `RouteEntry` with `lastModified`, supply `parentHub` + `related`, run `npm run seo:check`. |
| `add-a-tool.md` | Same shape for browser tools: content type, page route, registry entry, link from `/pdf-tools`, ensure `webApplicationSchema` emits. |
| `checks.md` | What `seo:check` and `seo:links` verify, how to fix common failures, how to add new rules. |
| `indexnow.md` | Generate key → place file → env var → run dry-run → enable submit. Includes the policy "do not spam IndexNow". |

## Files changed

### New (8)
- `scripts/seo-check.mjs`
- `scripts/check-internal-links.mjs`
- `scripts/indexnow-submit.mjs`
- `docs/seo/architecture.md`
- `docs/seo/add-a-guide.md`
- `docs/seo/add-a-tool.md`
- `docs/seo/checks.md`
- `docs/seo/indexnow.md`

### Modified
- `src/types/content.ts` — `RouteEntry` gains `lastModified: string` and `indexable?: boolean`
- `src/lib/routes.ts` — backfill `lastModified: "2026-05-14"` on 38 entries; export `isIndexable(r)` helper
- `src/app/sitemap.ts` — use per-route `lastModified`, swap `!r.hidden` for `isIndexable(r)`
- `src/app/robots.ts` — add `disallow: ["/api/"]`
- `src/lib/seo.ts` — accept `indexable?: boolean`, emit `robots: { index: false, follow: false }` when false
- `package.json` — add `tsx` devDep, add three npm scripts: `seo:check`, `seo:links`, `seo:indexnow`
- `.env.example` — create with `INDEXNOW_KEY=` placeholder
- `.gitignore` — add `!.env.example` exception (current `.env*` rule would otherwise block the example file from being committed)

### Untouched
- `src/content/schema.ts` (schemas are fine)
- `src/components/seo/JsonLd.tsx`
- `src/app/layout.tsx` (Organization + WebSite + WebmasterID continue emitting)
- All page.tsx files (existing `seo()` calls work unchanged)
- All existing content under `src/content/`
- WebmasterID, App Store, Google Play references

## Validation

After implementation:

1. `npm run lint`
2. `npm run typecheck`
3. `npm run build` — verifies sitemap regeneration with new `lastModified` values
4. `npm run seo:check` — should pass (or have only documented warnings)
5. `npm run seo:links` — should pass for all internal hrefs
6. `curl -s http://localhost:3000/sitemap.xml | xmllint --noout -` (local server) — well-formed XML
7. `curl -s http://localhost:3000/robots.txt` — sitemap line present
8. Spot-check a guide page's view-source for Article + Breadcrumb + FAQ + HowTo JSON-LD
9. Spot-check the homepage for Organization + WebSite + SoftwareApplication JSON-LD

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Adding `lastModified` as required breaks existing routes at compile time | Backfill in the same commit. TypeScript will refuse to compile otherwise — that's the desired forcing function. |
| `seo:check` strictness fails on existing routes immediately | Audit during implementation. Likely failures: a few titles outside 10–70 char band. Fix the actual title rather than weakening the check. |
| `tsx` adds a devDep weight | Negligible; widely used in Next ecosystems. If avoiding it is preferred, fall back to JSON snapshot of ROUTES produced by a small `prebuild` step. |
| IndexNow submission spam | Default dry-run; explicit `--submit` required; per-URL host whitelist; documented "do not spam" policy. |
| Documentation drifts from code | Each doc file references the exact file path it documents. CI runs `seo:check` so the docs-described checks are real. |
| Single dated backfill (`2026-05-14`) looks artificial | Honest reflection of the fact that this is a real content-batch release. Future routes will have their own real dates. |

## Definition of done

- [ ] `RouteEntry` has `lastModified: string` (required) and `indexable?: boolean` (optional).
- [ ] All 38 existing routes have `lastModified: "2026-05-14"`.
- [ ] `isIndexable(r)` helper exists and is used by sitemap.
- [ ] `sitemap.xml` shows per-route `lastmod`.
- [ ] `robots.txt` references sitemap and disallows `/api/`.
- [ ] `seo()` accepts `indexable` and emits noindex when false.
- [ ] `npm run seo:check` exists and passes (warnings acceptable; no errors).
- [ ] `npm run seo:links` exists and passes (warnings acceptable; no errors).
- [ ] `npm run seo:indexnow` exists and no-ops without `INDEXNOW_KEY`.
- [ ] `.env.example` includes `INDEXNOW_KEY=` placeholder.
- [ ] All 5 docs under `docs/seo/` are present and accurate.
- [ ] `npm run lint`, `npm run typecheck`, `npm run build` pass.
- [ ] No existing functionality regressed: homepage renders, guides render, tools render, WebmasterID still loads, App Store + Google Play CTAs still visible.
- [ ] Final report: files changed, registry summary, sitemap status, robots status, helper summaries, link-check results, IndexNow prep status, validation output, limitations.
