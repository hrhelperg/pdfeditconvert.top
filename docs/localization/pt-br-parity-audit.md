# pt-BR Parity Audit

Audit of the indexable English inventory of pdfeditconvert.top against its
Brazilian Portuguese counterpart, produced during the `feat/localization-pt-br`
programme.

- **Audit date:** 2026-08-31
- **Locales in scope:** `en` (default, root, no prefix) and `pt-BR` (prefix `/pt-br`)
- **Source of truth:** `src/lib/i18n/routeMap.ts` — the centralized typed route
  manifest. Every number below is derived from it, not from a manual count.

## Headline result

| Metric | Count |
| --- | ---: |
| Indexable English public pages | 174 |
| Translatable (in scope for pt-BR) | 174 |
| pt-BR counterparts shipped | 174 |
| **Parity** | **100.0%** |
| Intentionally excluded | 0 |
| Silently skipped route groups | 0 |

Every indexable English URL has a Portuguese counterpart at a distinct,
explicitly-declared localized slug. No route family was dropped, deferred, or
partially translated.

## Inventory by route family

| Category | Route ids | English example | pt-BR example | pt-BR |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/pt-br` | 1 |
| `hub` | 8 | `/pdf-tools` | `/pt-br/ferramentas-pdf` | 8 |
| `tool` | 12 | `/compress-pdf` | `/pt-br/comprimir-pdf` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/pt-br/guias/como-comprimir-pdf` | 145 |
| `compare` | 3 | `/compare/pdf-vs-jpg` | `/pt-br/comparacoes/pdf-ou-jpg` | 3 |
| `use-case` | 2 | `/use-cases/students` | `/pt-br/casos-de-uso/estudantes` | 2 |
| `legal` | 2 | `/privacy-policy` | `/pt-br/politica-de-privacidade` | 2 |
| `meta` | 1 | `/contact` | `/pt-br/contato` | 1 |
| **Total** | **174** | | | **174** |

The `guide` count of 145 is the `/guides` index page plus **144 individual
guides**. All 144 guides are fully translated — none summarised, truncated, or
replaced with an English fallback.

### Hubs (8/8)

`pdf-tools`, `pdf-converter`, `pdf-editor`, `pdf-security`, `pdf-forms`,
`pdf-for-business`, `pdf-for-students`, `scan-to-pdf`.

### Tools (12/12)

`compress-pdf`, `merge-pdf`, `split-pdf`, `rotate-pdf`, `image-to-pdf`,
`pdf-to-images`, `pdf-to-word`, `word-to-pdf`, `add-watermark-to-pdf`,
`reorder-pdf-pages`, `extract-pdf-pages`, `sign-pdf`.

Every Portuguese tool page mounts the **same converter component** as its
English counterpart. No conversion logic was duplicated, forked, or reimplemented
for pt-BR — only the strings differ, resolved server-side from
`src/lib/i18n/dictionaries/tools.pt-BR.ts` and passed as props.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-jpg`, `compare/pdf-vs-docx`, `compare/pdf-vs-png`;
`use-cases/students`, `use-cases/small-business`.

### Legal and interface (3/3)

`privacy-policy`, `terms`, `contact`. Legal translations preserve legal meaning
and leave the operator identity, addresses, contact email, app identifiers and
external URLs unchanged. Where a Brazilian reader is governed by different law,
the Portuguese text names it (LGPD alongside GDPR; MP 2.200-2/2001 and Lei
14.063/2020 for electronic signatures; ICP-Brasil for qualified signing; Lei
9.610/98 for copying textbooks) — no legal fact was invented, and the underlying
legal entity is unchanged.

### Site chrome

Header navigation, footer link groups, breadcrumbs, FAQ headings, related-guide
and cluster headings, trust badges, CTA labels, error and validation messages,
"Download again" / "Start over" affordances, and the language switcher are all
translated via `src/lib/i18n/dictionaries/site.pt-BR.ts`. No English fragment
is assembled at runtime — every user-visible string is a whole localized phrase,
with `fmt()` for interpolation and `plural()` (backed by `Intl.PluralRules`) for
counts.

## Exclusions

**None.** No public, indexable route was excluded from Portuguese.

One item is worth recording because it looks like an exclusion and is not:

- `src/content/hubs/compress-pdf.ts` exists in the English content tree but is
  **pre-existing dead code** — no page imports it, and `/compress-pdf` is a tool
  route, not a hub. It is deliberately absent from both the English and the
  Portuguese hub registries so this audit cannot claim a hub that has no page.
  It was dead before this programme and remains untouched by it.

## Non-indexable surfaces (out of scope by definition)

These have no canonical URL and are therefore not parity-bearing pages, but each
still renders in the reader's locale:

- `app/global-not-found.tsx` and the per-locale `not-found.tsx` files
- `robots.ts`, the nine sitemap route handlers, `opengraph-image`, `icon`,
  `apple-icon`

## Unpublished locales

`es`, `fr`, `de`, `ja`, `id`, `ar`, `ru`, `pl`, `cs` are declared in
`src/lib/i18n/locales.ts` with `published: false`. They are architectural
readiness only: **no page, no hreflang link, and no sitemap entry is generated
for any of them**, and `tests/i18n/routeMap.test.ts` asserts this.

## How parity is enforced

Parity is not a one-time count — it is a test gate. `tests/i18n/routeMap.test.ts`
fails the build if any of the following stops holding:

- every route id in `ROUTE_IDS` resolves in every published locale
- no two routes in a locale share a path, title, or description
- no pt-BR route reuses the English title, description, or slug (with a small
  documented allowlist for genuinely shared product-name slugs such as
  `pdf-ou-jpg`)
- hreflang is reciprocal in both directions and `x-default` points at the
  English canonical
- unpublished locales resolve to `null` and contribute zero routes

Adding a locale therefore cannot silently ship a partial translation.
