# PDF Tools — Production Audit

- **Date:** 2026-05-19
- **Commit audited:** `2e641ec` (local `main` == `origin/main`)
- **Live deploy parity:** confirmed current — `/reorder-pdf-pages`,
  `/extract-pdf-pages`, `/pdf-to-word` all serve 200 and appear in the live
  sitemap, so production is running the audited commit.
- **Method:** static code audit + full regression suite + headless-Chrome
  functional sweep of all 11 tool routes on a production build of the exact
  deployed commit + direct live HTTP/SEO checks.

---

## 1. Executive summary

The platform is **healthy and production-ready**. All 11 browser tools work
end-to-end with no console errors, no broken chunks, and — verified by
network capture — **zero file uploads or non-local processing**. Regression
is fully green (lint, typecheck, 105 tests, build). Privacy claims are
accurate.

Two **High** SEO/social issues exist (broken Open Graph image sitewide; a
canonical/host mismatch). Neither blocks tool usage. No Critical issues.

**Go/No-Go: GO.** Ship-safe today; fix the two High SEO items promptly.

---

## 2. Critical issues

**None.** No tool-blocking defects. Every route renders the converter above
the fold, uploads, processes locally, shows success, Download again, Start
over, related tools, and App Store/Google Play CTAs, with no console errors
or broken imports.

---

## 3. High-priority issues

### H1 — Open Graph / Twitter image 404 sitewide
`src/lib/seo.ts` hardcodes `ogImage = "/og/default.png"`. That asset does
not exist (`public/og/` is empty). Live verification:

- `<meta property="og:image" content="https://pdfeditconvert.top/og/default.png">` → **HTTP 404**
- `<meta name="twitter:image" ...>` → same 404
- The framework route `app/opengraph-image.tsx` **works**:
  `GET /opengraph-image` → `200 image/png`.

Impact: every shared/previewed link (social, chat, search snippets) has a
broken image. Recommended fix (small, safe, one place): in `seo.ts` default
`ogImage` to the working dynamic route (`/opengraph-image`) — or drop the
explicit `openGraph.images`/`twitter.images` so Next's file-based
`opengraph-image.tsx` is used — or add a real `public/og/default.png`.
Not applied (audit-first; behavior choice belongs to owner).

### H2 — Canonical / host mismatch (apex vs www)
`SITE_URL = "https://pdfeditconvert.top"` (apex) drives every canonical,
sitemap URL, OG URL, robots `host`, and schema URL. But the apex
**307-redirects to `https://www.pdfeditconvert.top`**:

- `GET https://pdfeditconvert.top/` → `307` → `https://www.pdfeditconvert.top/`
- Emitted canonical on `/merge-pdf`: `https://pdfeditconvert.top/merge-pdf`
  (a redirecting, non-final URL on a different host than where content is
  actually served).

Impact: search engines receive a canonical that 307s to another host;
sitemap and schema disagree with the served host. This dilutes indexing
signals. Fix is a **host/infra decision** (either redirect `www → apex` so
apex is canonical and matches `SITE_URL`, or set `SITE_URL` to the `www`
host). Not applied — flips every canonical/sitemap/schema URL and depends
on the intended indexed host + domain config.

---

## 4. Medium-priority issues

- **M1 — Converter sits ~492px from top.** Above the fold on standard
  desktop (≥900px) and verified on 844px mobile in earlier rounds, but
  borderline on short laptop/landscape viewports (the hero rail + ToolShell
  title/StepIndicator precede the drop zone). Consider tightening the hero
  band vertical padding so the drop zone clears the fold on ~700px heights.
- **M2 — HowTo schema unused.** `schema.ts` exports `howToSchema()` and
  every tool's content has structured `howTo.steps`, but `ToolPage`
  injects only breadcrumb + FAQ + WebApplication. Adding HowTo JSON-LD is a
  low-risk rich-result opportunity.
- **M3 — Regression gap for the issues that actually recur.** The two
  production incidents this cycle (pdfjs worker/version skew; docx dynamic
  import shape) and the OG/canonical class are not guarded by CI. jsdom
  can't run pdfjs/canvas, so true conversion is only covered by manual
  browser verification. Recommend a lightweight test asserting
  `seo()` produces an `og:image` whose path is served, and a test pinning
  `SITE_URL` to the deployed host.

---

## 5. Low-priority polish

- **L1** — `ToolError` uses raw Tailwind `bg-red-50/text-red-700` rather
  than brand tokens; cosmetically off-palette (functionally fine, readable).
- **L2** — Build summary (Turbopack) doesn't surface First-Load-JS sizes in
  CI logs; add explicit bundle reporting if size budgets matter.
- **L3** — `ToolError` relies on `role="alert"` (implicit assertive); fine,
  but an explicit `aria-live` would be belt-and-suspenders.

---

## 6. Per-tool audit (production build of `2e641ec`, headless Chrome)

Legend: Tool=above-fold tool & upload input present · Flow=upload→options→
action→processing→success · DA=Download again · SO=Start over · Rel=related
links · App=App Store+Google Play · Err=console/page errors · Net=non-local
or upload network during conversion.

| Route | Tool | Flow | DA | SO | Rel | App | Err | Net |
|---|---|---|---|---|---|---|---|---|
| /image-to-pdf | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | none | none |
| /merge-pdf | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | none | none |
| /split-pdf | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | none | none |
| /rotate-pdf | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | none | none |
| /pdf-to-images | ✅ | ✅ (5 imgs) | ✅ | ✅ | ✅ | ✅ | none | none |
| /add-watermark-to-pdf | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | none | none |
| /compress-pdf | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | none | none |
| /pdf-to-word | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | none | none |
| /word-to-pdf | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | none | none |
| /reorder-pdf-pages | ✅ (thumbs) | ✅ | ✅ | ✅ | ✅ | ✅ | none | none |
| /extract-pdf-pages | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | none | none |

All 11 pass. `suspectNetwork` was empty for every route — no non-origin
calls (beyond WebmasterID analytics/fonts) and no same-origin POSTs.

---

## 7. SEO audit

| Check | Status | Notes |
|---|---|---|
| Sitemap includes all public routes | ✅ | Auto-derived from `ROUTES` (non-hidden); 12 tool entries incl. index |
| robots.txt → sitemap, tools allowed | ✅ | `allow: "/"`, sitemap + host set, no Disallow |
| Canonical present | ⚠️ H2 | Present but apex host 307s to www |
| Metadata unique | ✅ | No duplicate titles or descriptions in `ROUTES` |
| Open Graph | ❌ H1 | og:image → 404 (`/og/default.png` missing) |
| Twitter cards | ❌ H1 | twitter:image → same 404; card type set |
| WebApplication schema | ✅ | Injected per tool, well-formed |
| FAQ schema | ✅ | Injected from content FAQ |
| Breadcrumb schema | ✅ | Home → tool |
| HowTo schema | ⚠️ M2 | Helper exists but not injected |
| SEO content server-rendered below tool | ✅ | `ToolPage`: tool slot first, Steps/use-cases/limitations/FAQ/related below |
| Accidental noindex | ✅ none | `seo()` sets `index:true, follow:true`; no overrides |
| Internal links / homepage → tools | ✅ | Homepage grid (11 cards) + `/pdf-tools` auto-list + cross-links |

---

## 8. Privacy / security audit

| Check | Status | Evidence |
|---|---|---|
| Files processed locally | ✅ | No `fetch`/XHR/`sendBeacon` in `src`; only `URL.createObjectURL` (local download) |
| No upload API endpoint | ✅ | No `app/**/route.ts`; no API routes |
| No server actions on files | ✅ | No `"use server"` anywhere in `src` |
| No third-party file processing | ✅ | docx/mammoth/pdf-lib/pdfjs all run client-side |
| File names/content not sent to WebmasterID | ✅ | Tracker is a generic page script; no code passes file data to it; network capture shows no such calls during conversions |
| Privacy copy accurate | ✅ | "processed locally / not uploaded" matches behavior; analytics disclosure in `privacy.ts` is accurate and not overclaiming |
| Object-URL leaks | ✅ | `downloadBlob` revokes after 1s; PdfToImages retains blobs in state cleared on Start over/unmount; no persistent createObjectURL |

---

## 9. Performance notes

- **Heavy libs are 100% dynamically imported** — `grep` confirms **zero**
  static imports of `pdf-lib`, `pdfjs-dist`, `docx`, `mammoth` in `src`
  (loaded via `pdfLib.ts`/`pdfjs.ts`/`officeLib.ts`/`pdfPages.ts` on action).
  The homepage embeds `ImageToPdfTool` (client) but its `pdf-lib` import is
  lazy, so it is **not** in initial JS.
- docx/mammoth load only on `/pdf-to-word` & `/word-to-pdf`; pdfjs only on
  routes that render/raster (pdf-to-images, compress, reorder); pdf-lib only
  on action.
- Images are SVG (icons/badges/brand) — negligible.
- Large-file handling: 100 MB/file guard in `validate.ts`; errors mapped to
  human messages via `mapToolError`; reorder warns large PDFs are slow.
- No memory-leak vectors found.
- Limitation: Turbopack build summary did not surface First-Load-JS byte
  sizes in the captured log; the architectural guarantee (no heavy lib in
  shared bundle) is verified, exact KB not measured (see L2).

---

## 10. Recommended fix order

1. **H1 — OG/Twitter image** (small, safe): point `seo.ts` default at the
   working `/opengraph-image` route (or remove explicit images / add the
   asset). Highest ratio of impact to risk.
2. **H2 — Canonical host**: owner decides apex vs www; then make redirect +
   `SITE_URL` agree. Re-submit sitemap after.
3. **M2 — Add HowTo JSON-LD** to `ToolPage` (helper already exists).
4. **M3 — Add CI guards**: og-image-served test; `SITE_URL`-matches-host
   test.
5. **M1 — Tighten hero band** so the drop zone clears short viewports.
6. **L1/L3 — ToolError** brand tokens + explicit `aria-live`.

---

## 11. What NOT to change

- The 11 working tools and shared primitives (`ToolShell`, `DropZone`,
  `SuccessState`, `StepIndicator`, `ProcessButton`, `useToolFlow`).
- WebmasterID analytics script (`layout.tsx`).
- App Store / Google Play links and the exact store URLs.
- The no-backend / local-only processing architecture and the
  dynamic-import strategy.
- `ROUTES`-driven sitemap/canonical/schema wiring (only the `SITE_URL`
  *value* is in question under H2, not the mechanism).
- Privacy copy (accurate as written).

---

## 12. Final go / no-go

**GO for production.** No critical or tool-blocking issues; all 11 tools
verified working end-to-end with no console errors and no file uploads;
regression fully green. The two High items (H1 broken OG image, H2
canonical/host mismatch) are SEO/social quality issues that should be fixed
promptly but do not block release or tool functionality.
