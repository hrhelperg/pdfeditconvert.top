# id Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its Indonesian counterpart, produced during the `feat/localization-id`
programme. Base state verified against `origin/main` before this branch
started, which already carries the complete pt-BR, French, Spanish, German,
Italian, Arabic, Russian, Czech and Polish localizations.

- **Audit date:** 2026-09-01
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (`/pt-br`),
  `fr` (`/fr`), `es` (`/es`), `de` (`/de`), `it` (`/it`), `ar` (`/ar`),
  `ru` (`/ru`), `cs` (`/cs`), `pl` (`/pl`), `id` (`/id`, published by this
  work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/id/routes.ts` and `routes.guides.ts`.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR / fr / es / de / it / ar / ru / cs / pl indexable public pages (each) | 174 |
| New id indexable public pages | 174 |
| **Total indexable URLs (11 published locales × 174)** | **1914** |
| Indonesian parity | **100.0% (174/174)** |
| Exclusions | 0 |

## Inventory by route family

| Category | Route ids | EN example | id example | id count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/id` | 1 |
| `hub` | 8 | `/pdf-editor`... | `/id/editor-pdf` | 8 |
| `tool` | 12 | `/compress-pdf` | `/id/kompres-pdf` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/id/panduan/cara-mengompres-pdf` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/id/perbandingan/pdf-atau-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/id/kasus-penggunaan/pekerja-lepas` | 2 |
| `legal` | 2 | `/privacy-policy` | `/id/kebijakan-privasi` | 2 |
| `meta` | 1 | `/contact` | `/id/kontak` | 1 |
| **Total** | **174** | | | **174** |

`guide` = the `/guides` index page plus **144 individual guides**, all fully
translated with full informational depth.

### Slug policy: fully translated, zero verbatim reuse by construction

Every Indonesian slug is genuine Indonesian phrasing — `kompres-pdf` for
"compress-pdf", `pdf-untuk-bisnis` for "pdf-for-business",
`perbandingan/pdf-atau-docx` for "compare/pdf-vs-docx". Unlike Japanese,
Indonesian gets **no** loanword-based exception: this locale's manifest was
written to fail `tests/i18n/routeMap.test.ts`'s "never reuses an English
slug verbatim" check by construction rather than lean on the sitewide
allowlist (`pdf-editor`, `guides`, `contact`, `privacy-policy`), following
the lesson from the immediately preceding `ja` wave, where 15 hand-written
slugs initially reused English verbatim. Confirmed by a full 174-entry
programmatic sweep: zero exact matches.

### Hubs (8/8)

`pdf-editor` → `editor-pdf`, `pdf-converter` → `konverter-pdf`,
`sign-pdf` → `tanda-tangan-pdf`, `scan-to-pdf` → `pindai-ke-pdf`,
`pdf-security` → `keamanan-pdf`, `pdf-for-business` → `pdf-untuk-bisnis`,
`pdf-for-students` → `pdf-untuk-pelajar`, `pdf-forms` → `formulir-pdf`.

`compress-pdf` continues to be excluded from every locale's hub registry —
pre-existing dead code, not an id-specific gap.

### Tools (12/12)

Every Indonesian tool page imports the **exact same converter component**
as its English, Portuguese, French, Spanish, German, Italian, Arabic,
Russian, Czech and Polish counterparts — verified by diffing the import
lists. No conversion logic duplicated for id.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx` → `perbandingan/pdf-atau-docx`, `compare/pdf-vs-jpg`
→ `perbandingan/pdf-atau-jpg`, `compare/pdf-app-vs-online-pdf-tools` →
`perbandingan/aplikasi-pdf-atau-alat-online`; `use-cases/freelancers` →
`kasus-penggunaan/pekerja-lepas`, `use-cases/remote-work` →
`kasus-penggunaan/kerja-jarak-jauh`.

### Legal and interface (3/3)

`privacy-policy` → `kebijakan-privasi`, `terms` → `syarat-ketentuan`,
`contact` → `kontak`. Operator identity, addresses, contact email and app
identifiers unchanged (hrhelperg s.r.o., Husitská 502/36, Praha 3,
info@hrhelperg.com). The privacy policy keeps **GDPR** with a one-time
Indonesian gloss on first mention ("GDPR, regulasi perlindungan data Uni
Eropa") — Indonesia has its own data-protection law (UU PDP), but that is
a different, narrower Indonesian statute; the operator is EU-established,
so GDPR is the regulation that actually applies, the same treatment
already used for Arabic, Russian, Czech and Japanese.

### Site chrome

Header navigation, footer, breadcrumbs, FAQ headings, related-guide and
cluster headings, trust badges, CTA labels, error/validation messages, and
the language switcher are all translated via
`src/lib/i18n/dictionaries/site.id.ts`. No English fragment is assembled
at runtime.

## Architectural decisions and issues found during this programme

### Slug-verbatim-reuse regression test — designed against proactively

The immediately preceding `ja` wave found and fixed 15 hand-written slugs
that reused English route ids verbatim. Every dispatch prompt on this
wave (routes.ts manifest and the guide-manifest agent) carried an explicit
warning about this exact failure mode, with the guide-manifest agent
additionally required to run the check as a self-verification step before
reporting done. Result: the hand-written 30-entry manifest and the
144-entry guide manifest both passed the check on the first `vitest run`
— zero violations, zero rework needed this time.

### `split-pdf` naming inconsistency — found and fixed (12 files)

The terminology doc's own glossary (§1: "to split → membagi") and the
hand-written route manifest (`slug: "pisah-pdf"`, title "Pisah PDF")
disagreed with each other — a self-inflicted inconsistency I introduced by
writing the glossary entry and the route manifest at different times
without cross-checking them. This split two different downstream agents
onto two different Indonesian names for the same tool: the dictionaries
agent picked up "Bagi PDF" (from the glossary), the tool-content agent
picked up "Pisah PDF" (by cross-referencing the already-written route
manifest). Caught during a manual site-name-consistency audit (comparing
every tool's `routes.ts` title against its `tools.id.ts` `actionIdle`
button label) before dispatching the guide-content wave — verified against
Polish's already-shipped `split-pdf` (where the route title and action
button match exactly, "Podziel PDF") to confirm the site's real
convention. Standardized on **"Bagi PDF"** (the more pervasively-used
term — present in the dictionary, the nav, and every other tool's
cross-link — versus "Pisah PDF," which existed only in the route
manifest and one hero line): fixed the route manifest's slug (`pisah-pdf`
→ `bagi-pdf`) and title, the tool content's own hero eyebrow, 11 related-
link labels across 8 other tool/guide files, and the app-route folder
name. Guide-content agents dispatched after this fix picked up "Bagi PDF"
correctly from the start; one agent's batch (already in flight) noticed
the fix via a live file-change notification mid-task and adjusted its
remaining files automatically.

### English tool-name and app-UI-element leaks — found and fixed (5 instances)

The by-now-familiar Italian-template tool-brand-name leak (see prior
waves' audits) was proactively warned against in every dispatch prompt and
one guide-content batch still initially reproduced it in its first 12
files before self-correcting (cross-checked 8 already-shipped locales this
time, the most thorough self-correction of any wave so far). A final
independent sweep across all 144 guides plus hubs/compare/use-cases/tools
confirmed zero remaining literal-tool-name hits — but the same
cross-locale leakage scan surfaced a **different**, more subtle instance
of the same underlying pattern: three hub pages referenced this site's own
in-app UI elements by their literal English name instead of the
established Indonesian one — "Ketuk ubin Scan" / "Ketuk ubin Convert" /
"Ketuk Convert" (describing the mobile app's own home-screen tiles) and
"gunakan alat Merge" (×2, describing this site's own Merge PDF tool by
name mid-sentence). Confirmed as a real bug, not a legitimate exception,
by checking the equivalent line in already-shipped German ("Tippe auf die
Kachel **Scannen**") and Spanish ("Toca la casilla **Escanear**") — both
translate the tile name. Fixed to "Ketuk ubin Pindai" / "Ketuk ubin
Konversi" / "Ketuk Konversi" / "gunakan alat Gabung PDF". Two remaining
English-looking leakage-scan hits were verified as genuinely legitimate
and left as-is: "DocuSign, Adobe Sign" (real third-party product names)
and "File → Download → Dokumen PDF" (the literal, unlocalized menu path
inside Google Docs' own UI, not this site's).

## Exclusions

**None specific to Indonesian.** `src/content/hubs/compress-pdf.ts`
remains pre-existing dead code, absent from every locale's hub registry
alike.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files
(including the new `(id)/not-found.tsx`), `robots.ts`, the 55 sitemap
route handlers, `opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`, `es`, `de`, `it`, `ar`, `ru`, `cs`, `pl`,
`id`. Declared but unpublished (architectural readiness only, zero
pages/hreflang/sitemap entries — asserted by `tests/i18n/routeMap.test.ts`
and `tests/indexnow.test.ts`): `ja`, `tr`. (`ja` ships in a parallel
branch, `feat/localization-ja`, from an earlier base — not yet merged as
of this audit.)

## Verification performed

- `npx tsc --noEmit` — clean.
- `npx eslint .` — clean.
- `npx vitest run` — 476/476 tests passing.
- `npx next build` — clean production build, all 174 Indonesian routes
  statically generated (30 static + 144 guide pages under
  `/id/panduan/[slug]`); built HTML confirmed to emit `<html lang="id"
  dir="ltr" ...>`.
- `node scripts/seo/check-build-seo.mjs` — all build-output SEO checks
  passed; 1914 prerendered pages crawled across all 11 published locales.
- Guide manifest verbatim-match: every one of the 144 Indonesian guide
  files' `h1`/`description` diffed byte-for-byte against
  `src/content/id/routes.guides.ts` — 0 mismatches, 0 duplicate ids, 0
  duplicate slugs.
- Slug-verbatim-reuse sweep: programmatic check of all 174 manifest
  entries for any slug matching its English route id outside the sitewide
  allowlist — 0 violations.
- Terminology sweep: "Unggah"/"mengunggah" reviewed everywhere it appears
  across every content wave — every instance describes a genuine external
  transfer, never this site's own local tool's own add-file step (always
  "Tambahkan"). "meratakan" reviewed everywhere — every instance is the
  genuine rasterize-to-image sense, never the forms-locking sense (which
  correctly uses "mengunci").
- Site-name-consistency audit: every tool's `routes.ts` title
  cross-checked against its `tools.id.ts` `actionIdle` button label —
  found and fixed the `split-pdf` inconsistency (see above).
- English-tool-name and app-UI-element sweep (see above) — re-verified
  zero remaining hits across guides, hubs, compare, use-cases and tools
  after the fixes.
- Cross-locale/English-leakage scan of the built HTML output
  (`.next/server/app/id/**/*.html`) for common English UI markers — zero
  hits beyond the pre-existing, intentionally-English App Store badge
  string shared by every locale, the deliberately-kept "Watermark"
  loanword (§1 of the terminology doc), genuine third-party product names,
  and a literal reference to Google Docs' own unlocalized menu.

## Recommendation

**MERGE.** Full parity (174/174), all automated checks pass, native-quality
editorial translation throughout, no shared PDF-processing logic forked.
Three classes of real defect were found and fixed during this programme
(a self-inflicted tool-naming inconsistency between the glossary and the
hand-written manifest; the familiar Italian-template tool-name leak,
self-corrected more thoroughly than any prior wave; and a newly-observed
app-UI-element leak surfaced by the leakage scan) — all confirmed resolved
by re-running the full verification suite. The slug-verbatim-reuse
regression that required rework on the previous (`ja`) wave did not
recur here, validating the proactive-warning approach. Not deployed —
awaiting explicit merge instruction per the established per-locale
workflow.
