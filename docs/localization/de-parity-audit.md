# de Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its German counterpart, produced during the `feat/localization-de` programme.
Base state verified against `origin/main` before this branch started, which
already carries the complete pt-BR, French and Spanish localizations.

- **Audit date:** 2026-09-01
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (`/pt-br`),
  `fr` (`/fr`), `es` (`/es`), `de` (`/de`, published by this work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/de/routes.ts` and `routes.guides.ts`.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR indexable public pages | 174 |
| Current fr indexable public pages | 174 |
| Current es indexable public pages | 174 |
| New de indexable public pages | 174 |
| **Total indexable URLs (en + pt-BR + fr + es + de)** | **870** |
| German parity | **100.0% (174/174)** |
| Exclusions | 0 |

The baseline did not change since the Spanish launch (still 174 English
routes), so no inventory drifted between programmes.

## Inventory by route family

| Category | Route ids | EN example | de example | de count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/de` | 1 |
| `hub` | 8 | `/pdf-editor`... | `/de/pdf-editor` | 8 |
| `tool` | 12 | `/compress-pdf` | `/de/pdf-komprimieren` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/de/anleitungen/pdf-komprimieren` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/de/vergleiche/pdf-oder-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/de/anwendungsfaelle/freiberufler` | 2 |
| `legal` | 2 | `/privacy-policy` | `/de/datenschutz` | 2 |
| `meta` | 1 | `/contact` | `/de/kontakt` | 1 |
| **Total** | **174** | | | **174** |

`guide` = the `/guides` index page plus **144 individual guides**, all fully
translated with full informational depth.

### Hubs (8/8)

`pdf-editor` → `pdf-editor` (kept — "Editor" is standard German tech
vocabulary, allowlisted as a genuinely shared term, not an untranslated
leftover; see `tests/i18n/routeMap.test.ts`), `pdf-converter` →
`pdf-konverter`, `sign-pdf` → `pdf-unterschreiben`, `scan-to-pdf` →
`pdf-scannen`, `pdf-security` → `pdf-sicherheit`, `pdf-for-business` →
`pdf-fuer-unternehmen`, `pdf-for-students` → `pdf-fuer-studierende`,
`pdf-forms` → `pdf-formulare`.

`compress-pdf` continues to be excluded from every locale's hub registry —
pre-existing dead code, not a de-specific gap.

### Tools (12/12)

Every German tool page imports the **exact same converter component** as its
English, Portuguese, French and Spanish counterparts — verified by diffing
the import lists. No conversion logic duplicated for de.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx` → `vergleiche/pdf-oder-docx`, `compare/pdf-vs-jpg` →
`vergleiche/pdf-oder-jpg`, `compare/pdf-app-vs-online-pdf-tools` →
`vergleiche/pdf-app-oder-online-tools`; `use-cases/freelancers` →
`anwendungsfaelle/freiberufler`, `use-cases/remote-work` →
`anwendungsfaelle/remote-arbeit`.

### Legal and interface (3/3)

`privacy-policy` → `datenschutz`, `terms` → `nutzungsbedingungen`, `contact`
→ `kontakt`. Operator identity, addresses, contact email and app identifiers
unchanged (hrhelperg s.r.o., Husitská 502/36, Praha 3, info@hrhelperg.com).
The privacy policy uses **DSGVO**, the established German name for GDPR —
same regulation, EU-established controller, not invented, matching the
decision already made for French and Spanish.

### Site chrome

Header navigation, footer, breadcrumbs, FAQ headings, related-guide and
cluster headings, trust badges, CTA labels, error/validation messages,
"Erneut herunterladen" / "Neu starten", and the language switcher are all
translated via `src/lib/i18n/dictionaries/site.de.ts`. No English fragment is
assembled at runtime.

## Architectural decisions made during this programme

### HowTo schema detection for German procedural guides

Every other published locale (pt-BR, fr, es) detects a "procedural" guide —
one that qualifies for `HowTo` JSON-LD — with a per-locale regex over the
translated `<h1>`, keyed off the same lexical opener the English source uses
("How to…" → "Como…" / "Comment…" / "Cómo…"). German does not have an
equivalent natural opener: idiomatic German how-to titles are
infinitive/object-first noun phrases with the verb at the end ("PDF
komprimieren", "PDF-Formular ausfüllen"), not a "Wie man…" construction, so
there is no stable prefix to test against. Forcing an artificial "Wie…"
opener onto ~90 titles purely to satisfy a schema-detection regex would have
been worse copy than the schema is worth.

Fix (`src/content/schema.ts`, `isProceduralGuide`): German is the first
locale to detect proceduralness structurally instead of lexically — via the
English route id (`englishSlug.startsWith("how-to-")`) rather than the
localized title text. This is strictly more robust for German (title
phrasing carries zero risk of drifting out of sync with the detection rule)
and does not touch the existing regex-based behavior for any other locale.
`GuidePage.tsx` now passes `content.slug` through as an optional third
argument; every other locale ignores it and keeps its original regex path.

### `upload` terminology — loanword, not a lapse into English

The first draft of `docs/localization/de-terminology.md` banned the bare
English noun "Upload" outright, mirroring the Romance-locale policies. In
practice, "Upload" is a fully naturalized German loanword (*der Upload*,
*das Upload-Portal*) that professional German tech writing uses constantly,
including in noun-compound positions ("Upload-Fehler", "Upload-Portal")
where the purely native alternative ("Hochlade-Fehler") reads distinctly
less natural. ~90 instances across the manifest and guide content converged
on this phrasing independently. The policy was revised (§2) to keep the
substantive rule — "hochladen"/"Upload" must never describe this site's own
local tool doing something it does not do — while allowing the loanword
noun freely wherever it is negated ("ohne Upload") or describes a genuine
external transfer (a school portal, a third-party "online" tool). Every one
of the ~90 instances was manually reviewed against this rule; none
misdescribes this site's own tools.

## Exclusions

**None specific to German.** `src/content/hubs/compress-pdf.ts` remains
pre-existing dead code, absent from every locale's hub registry alike.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files
(including the new `(de)/not-found.tsx`), `robots.ts`, the 25 sitemap route
handlers, `opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`, `es`, `de`. Declared but unpublished
(architectural readiness only, zero pages/hreflang/sitemap entries —
asserted by `tests/i18n/routeMap.test.ts` and `tests/indexnow.test.ts`):
`ja`, `id`, `ar`, `ru`, `pl`, `cs`, `it`, `tr`. (`it` ships in a parallel
branch, `feat/localization-it`, from the same base — not yet merged as of
this audit, so it still reads as unpublished from `de`'s point of view.)

## Verification performed

- `npx tsc --noEmit` — clean.
- `npx eslint .` — clean.
- `npx vitest run` — 308/308 tests passing (one pre-existing shared-slug
  assertion updated to allowlist `pdf-editor`, see `tests/i18n/routeMap.test.ts`).
- `npx next build` — clean production build, all 174 German routes
  statically generated (30 static + 144 guide pages under `/de/anleitungen/[slug]`).
- `node scripts/seo/check-build-seo.mjs` — all build-output SEO checks
  passed; 870 prerendered pages crawled across all 5 published locales.
- Guide manifest verbatim-match: every one of the 144 German guide files'
  `h1`/`description` diffed byte-for-byte against
  `src/content/de/routes.guides.ts` — 0 mismatches.
- Typography sweep: no stray straight quotes (`"`) used as a German
  „…" closing mark anywhere in `src/content/de` — 196 instances across 54
  files normalized to the correct U+201C closing quote.
- Cross-locale/English-leakage scan of the built HTML output
  (`.next/server/app/de/**/*.html`) for common English UI markers — zero
  hits beyond the pre-existing, intentionally-English App Store badge
  aria-label shared by every locale.

## Recommendation

**MERGE.** Full parity (174/174), all automated checks pass, native-quality
editorial translation throughout, no shared PDF-processing logic forked. Not
deployed — awaiting explicit merge instruction per the established
per-locale workflow.
