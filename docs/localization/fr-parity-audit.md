# fr Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its French counterpart, produced during the `feat/localization-fr` programme.
Base state verified against `origin/main` before this branch started, which
already carries the complete pt-BR localization and the indexation-recovery
work.

- **Audit date:** 2026-08-31
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (prefix
  `/pt-br`, already published), `fr` (prefix `/fr`, published by this work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/fr/routes.ts` and `routes.guides.ts`. Every number below is
  derived from the route manifest, not from a manual count.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR indexable public pages | 174 |
| New fr indexable public pages | 174 |
| **Total indexable URLs (en + pt-BR + fr)** | **522** |
| French parity | **100.0%** (174/174) |
| Exclusions | 0 |

The baseline did not change since the pt-BR launch (still 174 English
routes), so no inventory drifted between the two localization programmes.

## Inventory by route family

| Category | Route ids | EN example | fr example | fr count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/fr` | 1 |
| `hub` | 8 | `/pdf-tools`... | `/fr/editeur-pdf` | 8 |
| `tool` | 12 | `/compress-pdf` | `/fr/compresser-pdf` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/fr/guides/comment-compresser-un-pdf` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/fr/comparatifs/pdf-ou-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/fr/cas-usage/freelances` | 2 |
| `legal` | 2 | `/privacy-policy` | `/fr/politique-de-confidentialite` | 2 |
| `meta` | 1 | `/contact` | `/fr/contact` | 1 |
| **Total** | **174** | | | **174** |

The `guide` count of 145 is the `/guides` index page plus **144 individual
guides**, all fully translated with full informational depth — none
summarized, thinned, or left as an English fallback.

### Hubs (8/8)

`pdf-editor` → `editeur-pdf`, `pdf-converter` → `convertisseur-pdf`,
`sign-pdf` → `signer-pdf`, `scan-to-pdf` → `numeriser-en-pdf`,
`pdf-security` → `securite-pdf`, `pdf-for-business` → `pdf-pour-entreprise`,
`pdf-for-students` → `pdf-pour-etudiants`, `pdf-forms` → `formulaires-pdf`.

`compress-pdf` continues to be excluded from every locale's hub registry —
see **Exclusions** below; it is not a French-specific gap.

### Tools (12/12)

`compress-pdf`, `merge-pdf`, `split-pdf`, `rotate-pdf`, `image-to-pdf`,
`pdf-to-images`, `pdf-to-word`, `word-to-pdf`, `add-watermark-to-pdf`,
`reorder-pdf-pages`, `extract-pdf-pages`, plus the `pdf-tools` index.

Every French tool page imports the **exact same converter component** as its
English and Portuguese counterparts — verified by diffing the import lists of
`src/app/(fr)/fr/compresser-pdf/page.tsx` against `src/app/(en)/compress-pdf/page.tsx`
(and the pt-BR equivalent): identical apart from the locale constant. No
conversion logic was duplicated, forked, or reimplemented for fr.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx`, `compare/pdf-vs-jpg`, `compare/pdf-app-vs-online-pdf-tools`;
`use-cases/freelancers`, `use-cases/remote-work`.

### Legal and interface (3/3)

`privacy-policy`, `terms`, `contact`. Legal translation preserves legal
meaning and leaves the operator identity, addresses, contact email, app
identifiers and external URLs unchanged (hrhelperg s.r.o., Husitská 502/36,
Praha 3, info@hrhelperg.com). The privacy policy uses **RGPD** rather than the
English acronym GDPR — the established French name for the same EU
regulation, not a different or invented one; the controller is established in
the EU regardless of the reader's own country, so the underlying legal fact
is unchanged from the English and pt-BR versions.

### Site chrome

Header navigation, footer link groups, breadcrumbs, FAQ headings,
related-guide and cluster headings, trust badges, CTA labels, error and
validation messages, "Télécharger à nouveau" / "Recommencer" affordances, and
the language switcher are all translated via
`src/lib/i18n/dictionaries/site.fr.ts`. No English fragment is assembled at
runtime — every user-visible string is a whole localized phrase, using
`fmt()` for interpolation and `plural()` (`Intl.PluralRules`) for counts.

## Exclusions

**None specific to French.** As with pt-BR, `src/content/hubs/compress-pdf.ts`
exists in the English content tree but is pre-existing dead code — no page
imports it, and `/compress-pdf` is a tool route, not a hub. It is absent from
the English, Portuguese and French hub registries alike, so this audit cannot
claim a hub that has no page in any locale.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files (including
the new `(fr)/not-found.tsx`), `robots.ts`, the 15 sitemap route handlers,
`opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`. Declared but unpublished (architectural
readiness only, zero pages/hreflang/sitemap entries — asserted by
`tests/i18n/routeMap.test.ts` and `tests/indexnow.test.ts`): `es`, `de`, `ja`,
`id`, `ar`, `ru`, `pl`, `cs`, and — newly added by this work — `it` and `tr`.

## How parity is enforced

`tests/i18n/routeMap.test.ts` fails the build if any of the following stops
holding, for **every** published locale including fr:

- every route id resolves in the locale
- no two routes in a locale share a path, title, or description
- no fr route reuses the English title, description, or slug verbatim
  (with a documented allowlist for genuinely-shared tokens: `guides` and
  `contact` are the same word in French, not an untranslated copy-paste)
- category, priority and change frequency inherit from the English source;
  `lastModified` defaults to the locale's own **publication date**
  (`LOCALE_PUBLISHED_AT`), not the English route's date — a translation
  published today is not "as fresh as May" and must not claim to be
- hreflang is reciprocal in both directions and `x-default` points at the
  English canonical
- unpublished locales resolve to `null`/empty and contribute zero routes

`tests/i18n/frToolRoutePages.test.tsx` additionally renders all 11 French
tool pages and asserts a working upload zone, the correct French action-button
label, and that tool copy/errors/related-link resolution are genuinely
translated (not equal to the English strings).

Adding a locale therefore cannot silently ship a partial or falsely-dated
translation.
