# tr Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its Turkish counterpart, produced during the `feat/localization-tr` programme.
Base state verified against `origin/main` before this branch started, which
already carries the complete pt-BR, French, Spanish, German, Italian, Arabic,
Russian, Czech, Polish and Japanese localizations.

- **Audit date:** 2026-09-01
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (`/pt-br`),
  `fr` (`/fr`), `es` (`/es`), `de` (`/de`), `it` (`/it`), `ar` (`/ar`),
  `ru` (`/ru`), `pl` (`/pl`), `cs` (`/cs`), `ja` (`/ja`), `tr` (`/tr`,
  published by this work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/tr/routes.ts` and `routes.guides.ts`.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR / fr / es / de / it / ar / ru / pl / cs / ja indexable public pages (each) | 174 |
| New tr indexable public pages | 174 |
| **Total indexable URLs (12 published locales × 174)** | **2088** |
| Turkish parity | **100.0% (174/174)** |
| Exclusions | 0 |

## Inventory by route family

| Category | Route ids | EN example | tr example | tr count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/tr` | 1 |
| `hub` | 8 | `/pdf-editor`... | `/tr/pdf-duzenleyici` | 8 |
| `tool` | 12 | `/compress-pdf` | `/tr/pdf-sikistir` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/tr/kilavuzlar/pdf-sikistirma-rehberi` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/tr/karsilastirma/pdf-veya-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/tr/kullanim-senaryolari/serbest-calisanlar` | 2 |
| `legal` | 2 | `/privacy-policy` | `/tr/gizlilik-politikasi` | 2 |
| `meta` | 1 | `/contact` | `/tr/iletisim` | 1 |
| **Total** | **174** | | | **174** |

`guide` = the `/guides` index page (`kilavuzlar`) plus **144 individual
guides**, all fully translated with full informational depth.

### Slug policy: fully translated, zero verbatim reuse

Every Turkish slug is diacritic-stripped ASCII (ç/ğ/ı/ö/ş/ü → c/g/i/o/s/u)
and translated in full — unlike the Japanese and earlier waves, the Turkish
terminology doc (`tr-terminology.md` §6) commits to a **zero verbatim-reuse
policy** from the outset, with no loanword exceptions at all, including for
`pdf-editor` and `privacy-policy` (which reused the English id in several
earlier locales). This was applied proactively: `tests/i18n/routeMap.test.ts`
"never reuses an English slug verbatim" was run immediately after writing
`src/content/tr/routes.ts`, before any content agent was dispatched, and
returned **0 violations** — the same proactive-verification approach `id`
introduced, now the standing default for every new locale.

### Hubs (8/8)

`pdf-editor` → `pdf-duzenleyici`, `pdf-converter` → `pdf-donusturucu`,
`sign-pdf` → `pdf-imzala`, `scan-to-pdf` → `pdf-tarama`, `pdf-security` →
`pdf-guvenligi`, `pdf-for-business` → `isletmeler-icin-pdf`,
`pdf-for-students` → `ogrenciler-icin-pdf`, `pdf-forms` → `pdf-formlari`.

`compress-pdf` continues to be excluded from every locale's hub registry —
pre-existing dead code, not a tr-specific gap.

### Tools (12/12)

Every Turkish tool page imports the **exact same converter component** as
its English, Portuguese, French, Spanish, German, Italian, Arabic, Russian,
Polish, Czech and Japanese counterparts — verified by diffing the import
lists. No conversion logic duplicated for tr.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx` → `karsilastirma/pdf-veya-docx`, `compare/pdf-vs-jpg`
→ `karsilastirma/pdf-veya-jpg`, `compare/pdf-app-vs-online-pdf-tools` →
`karsilastirma/pdf-uygulamasi-veya-online-araclar`; `use-cases/freelancers`
→ `kullanim-senaryolari/serbest-calisanlar`, `use-cases/remote-work` →
`kullanim-senaryolari/uzaktan-calisma`.

### Legal and interface (3/3)

`privacy-policy` → `gizlilik-politikasi`, `terms` → `kullanim-kosullari`,
`contact` → `iletisim`. Operator identity, addresses, contact email and app
identifiers unchanged (hrhelperg s.r.o., Husitská 502/36, Praha 3,
info@hrhelperg.com). The privacy policy keeps **GDPR** (not the Turkish
KVKK, a different domestic statute) with a one-time Turkish gloss on first
mention, per `tr-terminology.md` §8 — the operator is EU-established, so
GDPR is the regulation that actually applies, the same treatment already
used for Arabic, Russian, Czech and Japanese.

### Site chrome

Header navigation, footer, breadcrumbs, FAQ headings, related-guide and
cluster headings, trust badges, CTA labels, error/validation messages, and
the language switcher are all translated via
`src/lib/i18n/dictionaries/site.tr.ts`. No English fragment is assembled at
runtime.

## Architectural decisions and issues found during this programme

### Naming-consistency pre-check (carried forward from `id`)

Before dispatching content agents, every tool's title in `routes.ts` was
manually cross-checked against its `actionIdle`/`title` in `tools.tr.ts`
and its `hero.eyebrow` in the tool-content file, using Polish's
title/actionIdle match for `split-pdf` as precedent for which name should
win when two valid translations exist. Zero naming-inconsistency defects
were found this wave — the pre-check caught nothing to fix, unlike `id`
(where it caught the "Bagi PDF" vs "Pisah PDF" split).

### UI-element leak proactive warning (carried forward from `id`)

The `id` wave discovered that in-app UI element names (not just tool brand
names) can leak untranslated — e.g. a home-screen tile literally named
"Scan" or "Convert" in English, left untranslated in early Indonesian
drafts. Every Turkish wave-1 dispatch prompt (hubs/compare/use-cases agent
in particular) carried an explicit warning about this expanded bug class
and required the agent to confirm correct translation of "Tap the Scan
tile" / "Tap the Convert tile" equivalents before reporting completion. The
agent confirmed correct translation from the start; the independent
post-hoc leakage scan (below) found zero remaining instances.

### Dotted/dotless I caution (documented, not triggered)

`tr-terminology.md` §5 documents that Turkish's dotted/dotless I pair
(İ/i vs I/ı) makes any programmatic case-transform locale-sensitive — a
blind `.toUpperCase()`/`.toLowerCase()` on Turkish text corrupts it. This
was recorded as a forward-looking caution for future code changes; no bug
of this kind was found or introduced during this content-only wave.

### Zero rework-requiring defects reported by any wave-1 agent

All four wave-1 background agents (dictionaries, tool content,
hubs/compare/use-cases, guide manifest) and all four guide-content batch
agents (1–36, 37–72, 73–108, 109–144) completed cleanly on first pass, each
self-reporting zero known-bug-class hits after running the now-standard
self-verification steps (manifest byte-match diff, "yükle"/"yüklemek"
transfer-vs-tool-step grep, "düzleştir" sense-check grep, English-tool-name
grep, `tsc --noEmit`). Two batches (2/4 and 4/4) each found and
self-corrected a typography-only issue — escaped straight quotes used
instead of the curly quotes `tr-terminology.md` §5 requires — via a
scripted find-and-replace, re-verified against the manifest afterward.
Batch 3/4 found and fixed one `düzleştir`-sense violation
(`how-to-edit-class-documents-as-pdf.ts` used it for signature/form-field
locking, corrected to `kilitler`). None of these required intervention
beyond the agents' own self-correction loop.

## Exclusions

**None specific to Turkish.** `src/content/hubs/compress-pdf.ts` remains
pre-existing dead code, absent from every locale's hub registry alike.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files
(including the new `(tr)/not-found.tsx`), `robots.ts`, the 60 sitemap route
handlers, `opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`, `es`, `de`, `it`, `ar`, `ru`, `pl`, `cs`,
`ja`, `tr`. Declared but unpublished (architectural readiness only, zero
pages/hreflang/sitemap entries — asserted by `tests/i18n/routeMap.test.ts`
and `tests/indexnow.test.ts`): `id`. (`id` ships in a parallel branch,
`feat/localization-id`, from an earlier base — not yet merged as of this
audit.)

## Verification performed

- `npx tsc --noEmit` — clean.
- `npx eslint .` — clean.
- `npx vitest run --pool=forks --max-workers=1 --test-timeout=20000` —
  504/504 tests passing (43 test files).
- `npx next build` — clean production build, all 174 Turkish routes
  statically generated (30 static + 144 guide pages under
  `/tr/kilavuzlar/[slug]`); built HTML confirmed to emit `<html lang="tr"
  dir="ltr" ...>`.
- `node scripts/seo/check-build-seo.mjs` — all build-output SEO checks
  passed; 2088 prerendered pages crawled across all 12 published locales
  (12 × 174).
- Guide manifest verbatim-match: every one of the 144 Turkish guide files'
  `h1`/`description` diffed byte-for-byte against
  `src/content/tr/routes.guides.ts` — 0 mismatches, 0 duplicate ids, 0
  duplicate slugs.
- Slug-verbatim-reuse sweep: programmatic check of all 174 manifest
  entries (30 + 144) for any slug matching its English route id — 0
  violations, verified proactively before content generation began (see
  "Slug policy" above).
- Terminology sweep: "Yükle"/"yüklemek"/"yükleme" reviewed everywhere it
  appears across every content batch — every instance describes a genuine
  external transfer (portal, third-party server, cloud drive) or a correct
  negation of local processing, never this site's own local tool's own
  add-file step (always "Ekle"). "Düzleştir" reviewed everywhere — every
  remaining instance is the genuine rasterize-to-image sense, never the
  forms-locking sense (which correctly uses "kilitle").
- English-tool-name sweep across all of `src/content/tr/` (tools, hubs,
  compare, use-cases, guides) — zero hits.
- UI-element-name sweep (the `id`-wave bug class: bare English words like
  "Scan"/"Convert"/"Merge" etc.) across all Turkish content and
  dictionaries — zero real hits (one incidental match, "Adobe Sign," is a
  legitimate third-party product name).
- Cross-locale/English-leakage scan of the built HTML output
  (`.next/server/app/tr/**/*.html`) for common English UI markers — zero
  real hits beyond the pre-existing, intentionally-English App Store badge
  string shared by every locale, and the same "Adobe Sign" product-name
  mention.

## Recommendation

**MERGE.** Full parity (174/174), all automated checks pass, native-quality
editorial translation throughout, no shared PDF-processing logic forked.
Zero rework-requiring defects were found during this programme — every
wave-1 and guide-content agent completed cleanly on first pass, and the
only self-corrections were typography-only (straight vs. curly quotes) and
one isolated `düzleştir`-sense fix, both caught and fixed by the agents'
own mandated self-verification steps before reporting completion. This
validates the cumulative effect of the increasingly specific dispatch-
prompt warnings built from every prior locale wave's lessons. Not
deployed — awaiting explicit merge instruction per the established
per-locale workflow.
