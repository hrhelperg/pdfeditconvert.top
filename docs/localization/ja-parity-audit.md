# ja Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its Japanese counterpart, produced during the `feat/localization-ja` programme.
Base state verified against `origin/main` before this branch started, which
already carries the complete pt-BR, French, Spanish, German, Italian, Arabic,
Russian and Czech localizations.

- **Audit date:** 2026-09-01
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (`/pt-br`),
  `fr` (`/fr`), `es` (`/es`), `de` (`/de`), `it` (`/it`), `ar` (`/ar`),
  `ru` (`/ru`), `cs` (`/cs`), `ja` (`/ja`, published by this work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/ja/routes.ts` and `routes.guides.ts`.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR / fr / es / de / it / ar / ru / cs indexable public pages (each) | 174 |
| New ja indexable public pages | 174 |
| **Total indexable URLs (10 published locales × 174)** | **1740** |
| Japanese parity | **100.0% (174/174)** |
| Exclusions | 0 |

## Inventory by route family

| Category | Route ids | EN example | ja example | ja count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/ja` | 1 |
| `hub` | 8 | `/pdf-editor`... | `/ja/pdf-editor` | 8 |
| `tool` | 12 | `/compress-pdf` | `/ja/pdf-asshuku` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/ja/guides/pdf-asshuku-hoho` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/ja/compare/pdf-tai-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/ja/use-cases/furiiransu` | 2 |
| `legal` | 2 | `/privacy-policy` | `/ja/privacy-policy` | 2 |
| `meta` | 1 | `/contact` | `/ja/contact` | 1 |
| **Total** | **174** | | | **174** |

`guide` = the `/guides` index page plus **144 individual guides**, all fully
translated with full informational depth.

### Slug policy: romanized, with a narrow loanword exception

Every Japanese slug is romanized ASCII (`pdf-asshuku` for "PDF圧縮",
`pdf-tai-docx` for "PDFとDOCX") — the same avoid-percent-encoded-URLs
principle established for every other non-Latin-script locale on this
site. Section **prefixes** (`guides/`, `compare/`, `use-cases/`) are a
deliberate Japanese-specific exception: they reuse the English site's own
segments rather than a translated prefix, since these read as ordinary
loanwords to a Japanese reader. Individual route slugs are only allowed to
match their English id verbatim when the underlying term is a **single**
katakana loanword rendered in its plain English spelling (`pdf-editor`,
`privacy-policy` — the same class of exception `it`'s `pdf-editor` and
`fr`'s `guides`/`contact` already established) — never for a reused
compound English phrase. See "Untranslated-slug defect" below for how this
was enforced.

### Hubs (8/8)

`pdf-editor` → `pdf-editor` (loanword exception), `pdf-converter` →
`pdf-konbata`, `sign-pdf` → `pdf-shomei`, `scan-to-pdf` →
`sukyan-shite-pdf`, `pdf-security` → `pdf-anzen`, `pdf-for-business` →
`bijinesu-muke-pdf`, `pdf-for-students` → `gakusei-muke-pdf`, `pdf-forms`
→ `pdf-form`.

`compress-pdf` continues to be excluded from every locale's hub registry —
pre-existing dead code, not a ja-specific gap.

### Tools (12/12)

Every Japanese tool page imports the **exact same converter component** as
its English, Portuguese, French, Spanish, German, Italian, Arabic, Russian
and Czech counterparts — verified by diffing the import lists. No
conversion logic duplicated for ja.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx` → `compare/pdf-tai-docx`, `compare/pdf-vs-jpg` →
`compare/pdf-tai-jpg`, `compare/pdf-app-vs-online-pdf-tools` →
`compare/pdf-app-tai-online-tool`; `use-cases/freelancers` →
`use-cases/furiiransu`, `use-cases/remote-work` →
`use-cases/rimoto-waku`.

### Legal and interface (3/3)

`privacy-policy` → `privacy-policy` (loanword exception — プライバシー
ポリシー is the direct katakana rendering, not an untranslated leftover),
`terms` → `riyou-kiyaku` (利用規約, the genuine native Japanese legal term
— unlike "privacy policy," "terms of service" is not commonly kept as an
English loanword in Japanese, so this one was romanized rather than kept
in English), `contact` → `contact` (already allowlisted sitewide).
Operator identity, addresses, contact email and app identifiers unchanged
(hrhelperg s.r.o., Husitská 502/36, Praha 3, info@hrhelperg.com). The
privacy policy keeps **GDPR** with a one-time Japanese gloss on first
mention（一般データ保護規則（GDPR）） — Japan has its own data-protection
law (個人情報保護法, APPI), but that is a different, narrower Japanese
statute; the operator is EU-established, so GDPR is the regulation that
actually applies, the same treatment already used for Arabic, Russian and
Czech.

### Site chrome

Header navigation, footer, breadcrumbs, FAQ headings, related-guide and
cluster headings, trust badges, CTA labels, error/validation messages, and
the language switcher are all translated via
`src/lib/i18n/dictionaries/site.ja.ts`. No English fragment is assembled
at runtime.

## Architectural decisions and issues found during this programme

### HowTo schema detection

Japanese guide titles do not open with a single reliable lexical "how to"
phrase the way Spanish's "Cómo…" or Italian's "Come…" do — the site's
convention instead phrases titles as descriptive です・ます sentences or
noun phrases ending in 方法/やり方 ("how"), which vary in position rather
than always opening the string. `isProceduralGuide()` in
`src/content/schema.ts` was therefore **not** extended for Japanese; it
relies on the `PROCEDURAL_LOCALES_BY_ROUTE_ID` route-id-based fallback the
same way German already does, rather than a fragile locale-specific
opener regex. No regex was added or needed.

> **Correction (2026-09-01, multilingual SEO audit).** This section was
> wrong. Japanese was never actually added to `PROCEDURAL_LOCALES_BY_ROUTE_ID`, which contained only `de`. A parse of the built HTML found **zero `HowTo` nodes in
> `ja`** across all 144 guides — the locale was in neither
> `PROCEDURAL_OPENERS` nor `PROCEDURAL_LOCALES_BY_ROUTE_ID`, so it fell
> through to the *English* regex, which cannot match a Japanese title.
> `isProceduralGuide()` has since been rewritten to key off the English
> slug for every locale identically, and
> `tests/seo/multilingualSeo.test.ts` now pins that behaviour.

### Untranslated-slug defect — found and fixed (15 instances)

`tests/i18n/routeMap.test.ts` has a standing regression test, "never
reuses an English slug verbatim," that flags any localized route whose
slug is byte-identical to its English route id (a strong signal of a
copy-paste bug), allowlisting only a handful of genuine cross-language
coincidences. My own hand-written `src/content/ja/routes.ts` initially
reused the literal English route id as the slug for **15** routes —
`scan-to-pdf`, `pdf-security`, `pdf-for-business`, `pdf-for-students`,
`pdf-forms`, `pdf-tools`, `terms`, all 3 `compare/*` entries, both
`use-cases/*` entries, and 4 guide slugs
(`guides/pdf-vs-docx`, `guides/pdf-vs-google-docs`, `guides/pdf-vs-png`,
`guides/mobile-pdf-form-workflow`) — a broader version of the same
"structural template absorbs untranslated English" pattern documented
below, except this time self-inflicted in hand-written content rather
than agent-generated content. The regression test caught all of them on
the first `vitest run`. Fixed by properly romanizing each into genuine
Japanese search phrasing (`bijinesu-muke-pdf`, `pdf-tai-docx`,
`sukyan-shite-pdf`, `riyou-kiyaku`, etc.) rather than allowlisting them —
allowlisting was reserved for the two genuinely defensible cases
(`pdf-editor`, `privacy-policy`), matching the existing precedent-based
exception policy already used for `it`/`fr`. The corresponding app-route
folder names and `routes.guides.ts` slugs were updated to match, then the
full manifest was swept programmatically for any remaining exact-match
violations: zero found.

### English tool names left untranslated in guide prose — found and fixed proactively

The previous locale wave (pl/cs) discovered that guide-content agents
using `src/content/it/guides/` as a structural template sometimes absorbed
literal untranslated English tool-brand names from Italian itself (a
real, unfixed `it`-only bug, confirmed absent from es/fr/de/ru/ar). Every
agent prompt on this wave carried an explicit warning about this exact
failure mode up front, including a self-verification grep step. Three of
the four guide-content batches reported zero hits from the start; one
batch (guides 1–36) still initially reproduced the pattern despite the
warning, then caught and fixed it itself mid-task by cross-checking
against the site's own already-shipped `ja/tools/`, `ja/hubs/` and
`ja/routes.ts` naming and running two scripted global replacements (173 +
24 occurrences). A final independent sweep across all 144 guide files plus
hubs/compare/use-cases/tools, run after every batch completed, confirmed
zero remaining hits sitewide.

## Exclusions

**None specific to Japanese.** `src/content/hubs/compress-pdf.ts` remains
pre-existing dead code, absent from every locale's hub registry alike.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files
(including the new `(ja)/not-found.tsx`), `robots.ts`, the 50 sitemap
route handlers, `opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`, `es`, `de`, `it`, `ar`, `ru`, `cs`, `ja`.
Declared but unpublished (architectural readiness only, zero
pages/hreflang/sitemap entries — asserted by `tests/i18n/routeMap.test.ts`
and `tests/indexnow.test.ts`): `id`, `pl`, `tr`. (`pl` ships in a parallel
branch, `feat/localization-pl`, from an earlier base — not yet merged as
of this audit.)

## Verification performed

- `npx tsc --noEmit` — clean.
- `npx eslint .` — clean.
- `npx vitest run` — 448/448 tests passing.
- `npx next build` — clean production build, all 174 Japanese routes
  statically generated (30 static + 144 guide pages under
  `/ja/guides/[slug]`); built HTML confirmed to emit `<html lang="ja"
  dir="ltr" ...>`.
- `node scripts/seo/check-build-seo.mjs` — all build-output SEO checks
  passed; 1740 prerendered pages crawled across all 10 published locales.
- Guide manifest verbatim-match: every one of the 144 Japanese guide
  files' `h1`/`description` diffed byte-for-byte against
  `src/content/ja/routes.guides.ts` — 0 mismatches, 0 duplicate ids, 0
  duplicate slugs.
- Slug-verbatim-reuse sweep: programmatic check of all 174 manifest
  entries (30 + 144) for any slug matching its English route id outside
  the two allowlisted loanword exceptions — 0 violations after fixes (see
  above).
- Terminology sweep: 「アップロード」reviewed everywhere it appears across
  every content wave — every instance describes a genuine external
  transfer, never this site's own local tool's own add-file step (always
  「追加」). 「平坦化」reviewed everywhere — every instance is the genuine
  rasterize-to-image sense, never the forms-locking sense (which correctly
  uses 「固定する」).
- English-tool-name sweep (see above) — re-verified zero remaining hits
  across guides, hubs, compare, use-cases and tools after all agents
  completed.
- Cross-locale/English-leakage scan of the built HTML output
  (`.next/server/app/ja/**/*.html`) for common English UI markers — zero
  hits beyond the pre-existing, intentionally-English App Store badge
  string shared by every locale.

## Recommendation

**MERGE.** Full parity (174/174), all automated checks pass, native-quality
editorial translation throughout, no shared PDF-processing logic forked.
Two classes of real defect were found and fixed during this programme (15
untranslated-slug violations in the hand-written manifest, caught by the
sitewide regression test; one guide batch's initial untranslated-tool-name
slip, caught by the batch's own explicit self-verification step) — both
confirmed resolved by re-running the full verification suite. Not
deployed — awaiting explicit merge instruction per the established
per-locale workflow.
