# es Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its Spanish counterpart, produced during the `feat/localization-es` programme.
Base state verified against `origin/main` before this branch started, which
already carries the complete pt-BR and French localizations.

- **Audit date:** 2026-09-01
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (`/pt-br`),
  `fr` (`/fr`), `es` (`/es`, published by this work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/es/routes.ts` and `routes.guides.ts`.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR indexable public pages | 174 |
| Current fr indexable public pages | 174 |
| New es indexable public pages | 174 |
| **Total indexable URLs (en + pt-BR + fr + es)** | **696** |
| Spanish parity | **100.0% (174/174)** |
| Exclusions | 0 |

The baseline did not change since the French launch (still 174 English
routes), so no inventory drifted between programmes.

## Inventory by route family

| Category | Route ids | EN example | es example | es count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/es` | 1 |
| `hub` | 8 | `/pdf-tools`... | `/es/editor-de-pdf` | 8 |
| `tool` | 12 | `/compress-pdf` | `/es/comprimir-pdf` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/es/guias/como-comprimir-un-pdf` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/es/comparativas/pdf-o-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/es/casos-de-uso/autonomos` | 2 |
| `legal` | 2 | `/privacy-policy` | `/es/politica-de-privacidad` | 2 |
| `meta` | 1 | `/contact` | `/es/contacto` | 1 |
| **Total** | **174** | | | **174** |

`guide` = the `/guides` index page plus **144 individual guides**, all fully
translated with full informational depth.

### Hubs (8/8)

`pdf-editor` → `editor-de-pdf`, `pdf-converter` → `convertidor-de-pdf`,
`sign-pdf` → `firmar-pdf`, `scan-to-pdf` → `escanear-a-pdf`, `pdf-security` →
`seguridad-de-pdf`, `pdf-for-business` → `pdf-para-empresas`,
`pdf-for-students` → `pdf-para-estudiantes`, `pdf-forms` → `formularios-pdf`.

`compress-pdf` continues to be excluded from every locale's hub registry —
pre-existing dead code, not an es-specific gap.

### Tools (12/12)

Every Spanish tool page imports the **exact same converter component** as its
English, Portuguese and French counterparts — verified by diffing the import
lists. No conversion logic duplicated for es.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx`, `compare/pdf-vs-jpg`,
`compare/pdf-app-vs-online-pdf-tools`; `use-cases/freelancers` →
`casos-de-uso/autonomos`, `use-cases/remote-work` →
`casos-de-uso/trabajo-remoto`.

### Legal and interface (3/3)

`privacy-policy`, `terms`, `contact`. Operator identity, addresses, contact
email and app identifiers unchanged (hrhelperg s.r.o., Husitská 502/36,
Praha 3, info@hrhelperg.com). The privacy policy uses **RGPD**, the
established Spanish name for GDPR — same regulation, EU-established
controller, not invented, matching the decision already made for French.

### Site chrome

Header navigation, footer, breadcrumbs, FAQ headings, related-guide and
cluster headings, trust badges, CTA labels, error/validation messages,
"Descargar de nuevo" / "Empezar de nuevo", and the language switcher are all
translated via `src/lib/i18n/dictionaries/site.es.ts`. No English fragment is
assembled at runtime.

## Exclusions

**None specific to Spanish.** `src/content/hubs/compress-pdf.ts` remains
pre-existing dead code, absent from every locale's hub registry alike.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files
(including the new `(es)/not-found.tsx`), `robots.ts`, the 20 sitemap route
handlers, `opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`, `es`. Declared but unpublished
(architectural readiness only, zero pages/hreflang/sitemap entries —
asserted by `tests/i18n/routeMap.test.ts` and `tests/indexnow.test.ts`):
`de`, `ja`, `id`, `ar`, `ru`, `pl`, `cs`, `it`, `tr`.

## Spanish-specific verification (beyond the standard parity gate)

Two checks unique to this locale, run in addition to the standard manifest
match:

- **Inverted question marks.** Every `¿` must be paired with a `?` in the
  same file — verified programmatically across all 157 es content files
  (144 guides + 8 hubs + 3 comparisons + 2 use cases): **0 imbalances**.
  This is the typography rule most likely to be silently dropped by a
  translator working fast, so it is checked mechanically rather than by
  spot-reading.
- **Typography (§5 of the terminology policy).** Spanish prose rarely needs
  an apostrophe at all; a bare ASCII `'` anywhere in es content almost always
  signals leftover machine-translation artifacts or copy-paste from another
  locale. Verified **0 straight apostrophes** across all es content files
  and all rendered page bodies.

## How parity is enforced

`tests/i18n/routeMap.test.ts` fails the build if any of the following stops
holding, for **every** published locale including es:

- every route id resolves in the locale; no duplicate path/title/description
- no es route reuses the English title, description, or slug verbatim
- category, priority and change frequency inherit from the English source;
  `lastModified` defaults to the locale's own **publication date**
  (`LOCALE_PUBLISHED_AT.es = "2026-08-31"`... `"2026-09-01"` at time of
  build), not the English route's date
- hreflang is reciprocal in all four directions and `x-default` points at
  the English canonical
- unpublished locales resolve to `null`/empty and contribute zero routes

`tests/i18n/esToolRoutePages.test.tsx` additionally renders all 11 Spanish
tool pages and asserts a working upload zone, the correct Spanish
action-button label, and that tool copy/errors/related-link resolution are
genuinely translated.

Four tests written for the pt-BR/fr launches had hardcoded `"es"` as *the*
example unpublished locale (true at the time, false once this branch
published it) — found and fixed as part of this work (see the
`test(i18n): add Spanish tool route gate...` commit) rather than left to
silently pass for the wrong reason.
