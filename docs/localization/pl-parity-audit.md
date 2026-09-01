# pl Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its Polish counterpart, produced during the `feat/localization-pl` programme.
Base state verified against `origin/main` before this branch started, which
already carries the complete pt-BR, French, Spanish, German, Italian, Arabic
and Russian localizations.

- **Audit date:** 2026-09-01
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (`/pt-br`),
  `fr` (`/fr`), `es` (`/es`), `de` (`/de`), `it` (`/it`), `ar` (`/ar`),
  `ru` (`/ru`), `pl` (`/pl`, published by this work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/pl/routes.ts` and `routes.guides.ts`.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR / fr / es / de / it / ar / ru indexable public pages (each) | 174 |
| New pl indexable public pages | 174 |
| **Total indexable URLs (9 published locales × 174)** | **1566** |
| Polish parity | **100.0% (174/174)** |
| Exclusions | 0 |

## Inventory by route family

| Category | Route ids | EN example | pl example | pl count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/pl` | 1 |
| `hub` | 8 | `/pdf-editor`... | `/pl/edytor-pdf` | 8 |
| `tool` | 12 | `/compress-pdf` | `/pl/kompresuj-pdf` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/pl/poradniki/jak-skompresowac-pdf` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/pl/porownania/pdf-czy-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/pl/przypadki-uzycia/freelancerzy` | 2 |
| `legal` | 2 | `/privacy-policy` | `/pl/polityka-prywatnosci` | 2 |
| `meta` | 1 | `/contact` | `/pl/kontakt` | 1 |
| **Total** | **174** | | | **174** |

`guide` = the `/guides` index page plus **144 individual guides**, all fully
translated with full informational depth.

### Slug policy: ASCII, diacritics stripped

Every Polish slug strips diacritics (ą→a, ć→c, ę→e, ł→l, ń→n, ó→o, ś→s, ź→z,
ż→z) — e.g. `kompresuj-pdf`, not a slug carrying "ł"/"ż" — the same principle
already established for pt-BR/fr/es/de/it/ar/ru: avoid percent-encoded URLs
in links, sharing and analytics. Prose keeps every diacritic in full.

### Hubs (8/8)

`pdf-editor` → `edytor-pdf`, `pdf-converter` → `konwerter-pdf`,
`sign-pdf` → `podpisz-pdf`, `scan-to-pdf` → `skanuj-do-pdf`,
`pdf-security` → `bezpieczenstwo-pdf`, `pdf-for-business` → `pdf-dla-firm`,
`pdf-for-students` → `pdf-dla-studentow`, `pdf-forms` → `formularze-pdf`.

`compress-pdf` continues to be excluded from every locale's hub registry —
pre-existing dead code, not a pl-specific gap.

### Tools (12/12)

Every Polish tool page imports the **exact same converter component** as
its English, Portuguese, French, Spanish, German, Italian, Arabic and
Russian counterparts — verified by diffing the import lists. No conversion
logic duplicated for pl.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx` → `porownania/pdf-czy-docx`, `compare/pdf-vs-jpg` →
`porownania/pdf-czy-jpg`, `compare/pdf-app-vs-online-pdf-tools` →
`porownania/aplikacja-pdf-czy-narzedzia-online`;
`use-cases/freelancers` → `przypadki-uzycia/freelancerzy`,
`use-cases/remote-work` → `przypadki-uzycia/praca-zdalna`.

### Legal and interface (3/3)

`privacy-policy` → `polityka-prywatnosci`, `terms` → `regulamin`, `contact`
→ `kontakt`. Operator identity, addresses, contact email and app
identifiers unchanged (hrhelperg s.r.o., Husitská 502/36, Praha 3,
info@hrhelperg.com). The privacy policy uses **RODO**, the established
Polish acronym for GDPR (Rozporządzenie o Ochronie Danych Osobowych) —
same regulation, EU-established controller, matching the decision already
made for German (DSGVO), French (RGPD) and Italian (RGPD).

### Site chrome

Header navigation, footer, breadcrumbs, FAQ headings, related-guide and
cluster headings, trust badges, CTA labels, error/validation messages,
"Pobierz ponownie" / "Zacznij od nowa", and the language switcher are all
translated via `src/lib/i18n/dictionaries/site.pl.ts`. No English fragment
is assembled at runtime.

## Architectural decisions and issues found during this programme

### HowTo schema detection

Polish how-to titles use an imperative-style opener rather than a lexical
"how to" phrase, so `isProceduralGuide` in `src/content/schema.ts` was not
extended for Polish — it relies on `PROCEDURAL_LOCALES_BY_ROUTE_ID`
fallback the way locales without a reliable lexical opener already do (see
the German entry in that set). No regex was added or needed.

### English tool names left untranslated in guide prose — found and fixed

The guide-content agents were instructed to use `src/content/it/guides/`
only as a **structural** template and translate wording fresh from the
English source. In practice, 30 of the 144 Polish guide files (175
instances) picked up literal English tool-brand references from the
Italian corpus anyway — "Compress PDF", "Merge PDF", "Extract PDF Pages"
and similar, left untranslated in body prose, `related` labels and
`parentHub` labels. Investigation traced this to Italian itself: the same
pattern exists in the already-merged `it` locale (`grep` found 22 Italian
guide files with identical untranslated English tool names), while every
other already-shipped locale (es, fr, de, ru, ar) correctly translates
these. This is Italian-specific tech debt, not a sitewide convention, and
it propagated into Polish because Italian was used as the structural
template. Fixed with a scripted, priority-ordered whole-word replacement
(longest phrases first) mapping every English tool name to its
already-established Polish short name (from `src/lib/i18n/dictionaries/
tools.pl.ts` and `src/content/pl/routes.ts`) — e.g. `Compress PDF` →
`Kompresuj PDF`, `Extract PDF Pages` → `Wyodrębnij strony PDF`. Re-verified
with a full cross-locale English-leakage scan of the built HTML output
afterward: zero remaining hits beyond two legitimate exceptions (the
shared, pre-existing English `Hero.tsx` app-store-badge string common to
every locale, and genuine third-party product names "DocuSign"/"Adobe
Sign" in `how-to-send-contracts-as-pdf`, correctly left untranslated).

### Duplicate h1 with German's contact page — found and fixed

The build-output SEO check failed on first run: `/pl/kontakt` and
`/de/kontakt` shared the literal h1 "Kontakt" (the word is identical in
both languages). Fixed by giving the Polish contact page a fuller,
distinct h1 — "Skontaktuj się z nami" — matching the pattern already used
by French (`Nous contacter`, not the bare "Contact") to avoid an
across-locale h1 collision. Re-ran the build and SEO check after the fix:
clean.

### Missing guide file — found and fixed

One guide (`best-pdf-compression-settings`, the first entry of the second
parallel content-writing batch) was dropped between two batches' file
ranges and never written. Caught by the guide-index generator reporting
143 guides instead of 144. Written directly, following the same template
and terminology policy as the rest of the batch; the generated index was
then rebuilt to the correct 144.

## Exclusions

**None specific to Polish.** `src/content/hubs/compress-pdf.ts` remains
pre-existing dead code, absent from every locale's hub registry alike.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files
(including the new `(pl)/not-found.tsx`), `robots.ts`, the 45 sitemap
route handlers, `opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`, `es`, `de`, `it`, `ar`, `ru`, `pl`. Declared
but unpublished (architectural readiness only, zero pages/hreflang/sitemap
entries — asserted by `tests/i18n/routeMap.test.ts` and
`tests/indexnow.test.ts`): `ja`, `id`, `cs`, `tr`. (`cs` ships in a
parallel branch, `feat/localization-cs`, from the same base — not yet
merged as of this audit, so it still reads as unpublished from `pl`'s
point of view.)

## Verification performed

- `npx tsc --noEmit` — clean.
- `npx eslint .` — clean.
- `npx vitest run` — 420/420 tests passing.
- `npx next build` — clean production build, all 174 Polish routes
  statically generated (30 static + 144 guide pages under
  `/pl/poradniki/[slug]`).
- `node scripts/seo/check-build-seo.mjs` — all build-output SEO checks
  passed; 1566 prerendered pages crawled across all 9 published locales.
- Guide manifest verbatim-match: every one of the 144 Polish guide files'
  `h1`/`description` diffed byte-for-byte against
  `src/content/pl/routes.guides.ts` — 0 mismatches, 0 duplicate ids, 0
  duplicate slugs.
- Terminology sweep: "prześlij"/"wgraj" reviewed everywhere they appear —
  every instance describes a genuine external transfer, never this site's
  own local tool's own add-file step. "spłaszcz-" reviewed everywhere —
  every instance is the genuine rasterize-to-image sense, never the
  forms-locking sense (which correctly uses "utrwalić").
- English-tool-name sweep and fix (see above) — re-verified zero remaining
  after the fix.
- Cross-locale/English-leakage scan of the built HTML output
  (`.next/server/app/pl/**/*.html`) for common English UI markers — zero
  hits beyond the pre-existing, intentionally-English App Store badge
  string shared by every locale, and genuine third-party product names.

## Recommendation

**MERGE.** Full parity (174/174), all automated checks pass, native-quality
editorial translation throughout, no shared PDF-processing logic forked.
Two real defects were found and fixed during this programme (untranslated
tool names inherited from Italian's structural template, and a duplicate
h1 with German) — both confirmed resolved by re-running the full
verification suite. Not deployed — awaiting explicit merge instruction per
the established per-locale workflow.
