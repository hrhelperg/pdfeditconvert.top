# it Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its Italian counterpart, produced during the `feat/localization-it` programme.
Base state verified against `origin/main` before this branch started, which
already carries the complete pt-BR, French and Spanish localizations.

- **Audit date:** 2026-09-01
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (`/pt-br`),
  `fr` (`/fr`), `es` (`/es`), `it` (`/it`, published by this work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/it/routes.ts` and `routes.guides.ts`.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR indexable public pages | 174 |
| Current fr indexable public pages | 174 |
| Current es indexable public pages | 174 |
| New it indexable public pages | 174 |
| **Total indexable URLs (en + pt-BR + fr + es + it)** | **870** |
| Italian parity | **100.0% (174/174)** |
| Exclusions | 0 |

The baseline did not change since the Spanish launch (still 174 English
routes), so no inventory drifted between programmes.

## Inventory by route family

| Category | Route ids | EN example | it example | it count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/it` | 1 |
| `hub` | 8 | `/pdf-editor`... | `/it/editor-pdf` | 8 |
| `tool` | 12 | `/compress-pdf` | `/it/comprimi-pdf` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/it/guide/come-comprimere-un-pdf` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/it/confronti/pdf-o-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/it/casi-duso/liberi-professionisti` | 2 |
| `legal` | 2 | `/privacy-policy` | `/it/informativa-sulla-privacy` | 2 |
| `meta` | 1 | `/contact` | `/it/contatti` | 1 |
| **Total** | **174** | | | **174** |

`guide` = the `/guides` index page plus **144 individual guides**, all fully
translated with full informational depth.

### Hubs (8/8)

`pdf-editor` → `editor-pdf`, `pdf-converter` → `convertitore-pdf`,
`sign-pdf` → `firma-pdf`, `scan-to-pdf` → `scansiona-in-pdf`,
`pdf-security` → `sicurezza-pdf`, `pdf-for-business` →
`pdf-per-le-aziende`, `pdf-for-students` → `pdf-per-studenti`,
`pdf-forms` → `moduli-pdf`.

`compress-pdf` continues to be excluded from every locale's hub registry —
pre-existing dead code, not an it-specific gap.

### Tools (12/12)

Every Italian tool page imports the **exact same converter component** as
its English, Portuguese, French and Spanish counterparts — verified by
diffing the import lists. No conversion logic duplicated for it.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx` → `confronti/pdf-o-docx`, `compare/pdf-vs-jpg` →
`confronti/pdf-o-jpg`, `compare/pdf-app-vs-online-pdf-tools` →
`confronti/app-pdf-o-strumenti-online`; `use-cases/freelancers` →
`casi-duso/liberi-professionisti`, `use-cases/remote-work` →
`casi-duso/lavoro-da-remoto`.

### Legal and interface (3/3)

`privacy-policy` → `informativa-sulla-privacy`, `terms` →
`termini-di-utilizzo`, `contact` → `contatti`. Operator identity, addresses,
contact email and app identifiers unchanged (hrhelperg s.r.o., Husitská
502/36, Praha 3, info@hrhelperg.com). The privacy policy uses **RGPD**, the
established Italian name for GDPR — same regulation, EU-established
controller, not invented, matching the decision already made for French and
Spanish.

### Site chrome

Header navigation, footer, breadcrumbs, FAQ headings, related-guide and
cluster headings, trust badges, CTA labels, error/validation messages,
"Scarica di nuovo" / "Ricomincia", and the language switcher are all
translated via `src/lib/i18n/dictionaries/site.it.ts`. No English fragment
is assembled at runtime.

## Architectural decisions made during this programme

### HowTo schema detection

Unlike German (published in a parallel branch from the same base), Italian
needed no change to `isProceduralGuide` in `src/content/schema.ts` — Italian
how-to titles naturally open with "Come…" (Come comprimere un PDF, Come
firmare un PDF su iPhone), the same lexical-opener pattern pt-BR, fr and es
already use, so `it: /^come\b/i` was added to the existing `PROCEDURAL_OPENERS`
map as a one-line addition. Verified against the full 144-guide manifest:
143/144 titles beginning with "Come" correspond exactly to an English slug
starting with `how-to-`, and the one exception (`how-pdf-forms-work`,
translated as "Come funzionano i moduli PDF…") is a deliberate, legitimate
editorial choice — the guide is genuinely a walkthrough even though its
English title doesn't literally start with "How to" — matching the same
kind of exception already present in the pt-BR, fr and es data.

### Typography — apostrophe density

Italian elision (*un'immagine*, *l'app*, *dell'app*) is far more frequent
than in French or Spanish, so the terminology doc flagged this as the
highest-risk typography rule up front rather than as an afterthought. Every
agent wave was instructed to self-verify with a `grep -n "'"` pass before
reporting done; a final project-wide sweep after all content landed
confirmed zero stray straight apostrophes across every file in
`src/content/it`, `src/lib/i18n/dictionaries/{site,tools}.it.ts`,
`src/content/pages/{home,misc}.it.ts`, and `src/content/it/routes.ts` (one
remaining batch of 10 straight apostrophes was found and fixed in
`routes.ts` itself during final verification — the hand-written manifest
had not been through the same automated sweep the guide content had).

### `editable-pdf-vs-flat-pdf` terminology note

The manifest's own required h1 uses "PDF piatto" rather than the
terminology policy's §3-suggested "PDF non modificabile"/"PDF immagine".
Since the h1 was already fixed and verbatim, the guide content keeps "PDF
piatto" as the primary term (matching the mandated h1) while still
surfacing "immagine di una pagina" / "PDF immagine" as clarifying synonyms,
consistent with the policy's actual intent rather than its literal wording.

## Exclusions

**None specific to Italian.** `src/content/hubs/compress-pdf.ts` remains
pre-existing dead code, absent from every locale's hub registry alike.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files
(including the new `(it)/not-found.tsx`), `robots.ts`, the 25 sitemap route
handlers, `opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`, `es`, `it`. Declared but unpublished
(architectural readiness only, zero pages/hreflang/sitemap entries —
asserted by `tests/i18n/routeMap.test.ts` and `tests/indexnow.test.ts`):
`de`, `ja`, `id`, `ar`, `ru`, `pl`, `cs`, `tr`. (`de` ships in a parallel
branch, `feat/localization-de`, from the same base — not yet merged as of
this audit, so it still reads as unpublished from `it`'s point of view.)

## Verification performed

- `npx tsc --noEmit` — clean.
- `npx eslint .` — clean.
- `npx vitest run` — 308/308 tests passing.
- `npx next build` — clean production build, all 174 Italian routes
  statically generated (30 static + 144 guide pages under `/it/guide/[slug]`).
- `node scripts/seo/check-build-seo.mjs` — all build-output SEO checks
  passed; 870 prerendered pages crawled across all 5 published locales.
- Guide manifest verbatim-match: every one of the 144 Italian guide files'
  `h1`/`description` diffed byte-for-byte against
  `src/content/it/routes.guides.ts` — 0 mismatches.
- Apostrophe sweep: project-wide `grep` for straight ASCII `'` across every
  Italian content, dictionary and manifest file — 0 remaining after fixing
  `routes.ts` (see above).
- Cross-locale/English-leakage scan of the built HTML output
  (`.next/server/app/it/**/*.html`) for common English UI markers — zero
  hits beyond the pre-existing, intentionally-English App Store badge
  aria-label shared by every locale.

## Recommendation

**MERGE.** Full parity (174/174), all automated checks pass, native-quality
editorial translation throughout, no shared PDF-processing logic forked. Not
deployed — awaiting explicit merge instruction per the established
per-locale workflow.
