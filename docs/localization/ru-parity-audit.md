# ru Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its Russian counterpart, produced during the `feat/localization-ru` programme.
Base state verified against `origin/main` before this branch started, which
already carries the complete pt-BR, French, Spanish, German and Italian
localizations.

- **Audit date:** 2026-09-01
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (`/pt-br`),
  `fr` (`/fr`), `es` (`/es`), `de` (`/de`), `it` (`/it`), `ru` (`/ru`,
  published by this work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/ru/routes.ts` and `routes.guides.ts`.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR / fr / es / de / it indexable public pages (each) | 174 |
| New ru indexable public pages | 174 |
| **Total indexable URLs (7 published locales × 174)** | **1218** |
| Russian parity | **100.0% (174/174)** |
| Exclusions | 0 |

## Inventory by route family

| Category | Route ids | EN example | ru example | ru count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/ru` | 1 |
| `hub` | 8 | `/pdf-editor`... | `/ru/redaktor-pdf` | 8 |
| `tool` | 12 | `/compress-pdf` | `/ru/szhat-pdf` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/ru/instrukcii/kak-szhat-pdf-bez-poteri-kachestva` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/ru/sravnenie/pdf-ili-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/ru/scenarii-ispolzovaniya/frilansery` | 2 |
| `legal` | 2 | `/privacy-policy` | `/ru/politika-konfidentsialnosti` | 2 |
| `meta` | 1 | `/contact` | `/ru/kontakty` | 1 |
| **Total** | **174** | | | **174** |

`guide` = the `/guides` index page plus **144 individual guides**, all fully
translated with full informational depth.

### Hubs (8/8)

`pdf-editor` → `redaktor-pdf`, `pdf-converter` → `konverter-pdf`,
`sign-pdf` → `podpisat-pdf`, `scan-to-pdf` → `skanirovat-v-pdf`,
`pdf-security` → `bezopasnost-pdf`, `pdf-for-business` → `pdf-dlya-biznesa`,
`pdf-for-students` → `pdf-dlya-studentov`, `pdf-forms` → `formy-pdf`.

`compress-pdf` continues to be excluded from every locale's hub registry —
pre-existing dead code, not a ru-specific gap.

### Tools (12/12)

Every Russian tool page imports the **exact same converter component** as
its English, Portuguese, French, Spanish, German and Italian counterparts —
verified by diffing the import lists. No conversion logic duplicated for ru.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx` → `sravnenie/pdf-ili-docx`, `compare/pdf-vs-jpg` →
`sravnenie/pdf-ili-jpg`, `compare/pdf-app-vs-online-pdf-tools` →
`sravnenie/prilozhenie-pdf-ili-onlain-instrumenty`;
`use-cases/freelancers` → `scenarii-ispolzovaniya/frilansery`,
`use-cases/remote-work` → `scenarii-ispolzovaniya/udalyonnaya-rabota`.

### Legal and interface (3/3)

`privacy-policy` → `politika-konfidentsialnosti`, `terms` →
`usloviya-ispolzovaniya`, `contact` → `kontakty`. Operator identity,
addresses, contact email and app identifiers unchanged (hrhelperg s.r.o.,
Husitská 502/36, Praha 3, info@hrhelperg.com). The privacy policy cites
**GDPR** directly (with a one-time Russian gloss on first mention) rather
than Russian domestic data-protection law (152-ФЗ) — the operator is an
EU-established company and GDPR is the regulation that actually applies,
regardless of the reader's own country.

### Site chrome

Header navigation, footer, breadcrumbs, FAQ headings, related-guide and
cluster headings, trust badges, CTA labels, error/validation messages,
"Скачать ещё раз" / "Начать заново", and the language switcher are all
translated via `src/lib/i18n/dictionaries/site.ru.ts`. No English fragment
is assembled at runtime.

## Architectural note carried over from the Arabic wave

`isProceduralGuide()` (`src/content/schema.ts`) uses `\s` rather than `\b`
after the locale-specific "how to" opener (`/^как\s/i`). JS regex `\b` is a
transition between `\w` (`[A-Za-z0-9_]`) and non-`\w`, and Cyrillic letters
are not in `\w` — so `\b` never matches on either side of an all-Cyrillic
word, silently failing to detect any Russian procedural guide at all. This
was caught before any content was written by testing the regex directly
against a sample title, not discovered after the fact. Verified against the
full 144-guide manifest: 141/144 titles beginning with "Как" correspond
exactly to an English slug starting with `how-to-`; the 3 exceptions
(`local-browser-pdf-processing-explained`, `how-pdf-forms-work`,
`fix-pdf-form-errors`) are deliberate, legitimate editorial choices — each
guide is genuinely a walkthrough even though its English title doesn't
literally start with "How to" — matching the same kind of exception already
present in the pt-BR, fr, es and it data.

## Terminology-policy corrections found during content authoring

Guide-writing agents caught and fixed two genuine ambiguity bugs against the
site's own "скачать (download) / загрузить (upload) stay a clean opposite
pair" rule, both now consistent across the whole `src/content/ru` tree:

1. **The manifest itself** used «загрузка» (upload-flavored) to mean a
   *corrupted download* in two guide titles/descriptions
   (`why-wont-my-pdf-open`, `how-to-fix-a-corrupted-pdf`) — fixed to
   «скачивание» in both the manifest and the corresponding content files,
   which had already been written against the old text.
2. **17 guide bodies** translated the tool UI's "drop zone" as «область
   загрузки» ("upload area") when describing this site's own local
   drag-and-drop control — which falsely implies a network transfer the
   tool doesn't perform. Fixed to the neutral «выделенную область»
   ("designated area"). Two further instances of "Инструмент загружает
   количество страниц" ("the tool uploads/loads the page count") were
   reworded to «считывает» (reads).

## Exclusions

**None specific to Russian.** `src/content/hubs/compress-pdf.ts` remains
pre-existing dead code, absent from every locale's hub registry alike.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files
(including the new `(ru)/not-found.tsx`), `robots.ts`, the 35 sitemap route
handlers, `opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`, `es`, `de`, `it`, `ru`. Declared but
unpublished (architectural readiness only, zero pages/hreflang/sitemap
entries — asserted by `tests/i18n/routeMap.test.ts` and
`tests/indexnow.test.ts`): `ja`, `id`, `ar`, `pl`, `cs`, `tr`. (`ar` ships in
a parallel branch, `feat/localization-ar`, from the same base — not yet
merged as of this audit, so it still reads as unpublished from `ru`'s point
of view.)

## Verification performed

- `npx tsc --noEmit` — clean.
- `npx eslint .` — clean.
- `npx vitest run` — 364/364 tests passing.
- `npx next build` — clean production build, all 174 Russian routes
  statically generated (30 static + 144 guide pages under
  `/ru/instrukcii/[slug]`).
- `node scripts/seo/check-build-seo.mjs` — all build-output SEO checks
  passed; 1218 prerendered pages crawled across all 7 published locales.
- Guide manifest verbatim-match: every one of the 144 Russian guide files'
  `h1`/`description` diffed byte-for-byte against
  `src/content/ru/routes.guides.ts` — 0 mismatches.
- Typography sweep: no stray escaped straight quotes anywhere in
  `src/content/ru` — «ёлочки» used consistently for every genuine quote.
- Cross-locale/English-leakage scan of the built HTML output
  (`.next/server/app/ru/**/*.html`) for common English UI markers — zero
  hits beyond the pre-existing, intentionally-English App Store badge
  aria-label shared by every locale.

## Recommendation

**MERGE.** Full parity (174/174), all automated checks pass, native-quality
editorial translation throughout, no shared PDF-processing logic forked. Not
deployed — awaiting explicit merge instruction per the established
per-locale workflow.
