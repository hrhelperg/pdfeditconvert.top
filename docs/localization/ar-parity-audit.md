# ar Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its Arabic counterpart, produced during the `feat/localization-ar` programme.
Base state verified against `origin/main` before this branch started, which
already carries the complete pt-BR, French, Spanish, German and Italian
localizations. **This is the site's first right-to-left (RTL) locale.**

- **Audit date:** 2026-09-01
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (`/pt-br`),
  `fr` (`/fr`), `es` (`/es`), `de` (`/de`), `it` (`/it`), `ar` (`/ar`,
  published by this work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/ar/routes.ts` and `routes.guides.ts`.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR / fr / es / de / it indexable public pages (each) | 174 |
| New ar indexable public pages | 174 |
| **Total indexable URLs (7 published locales × 174)** | **1218** |
| Arabic parity | **100.0% (174/174)** |
| Exclusions | 0 |

## Inventory by route family

| Category | Route ids | EN example | ar example | ar count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/ar` | 1 |
| `hub` | 8 | `/pdf-editor`... | `/ar/muharrir-pdf` | 8 |
| `tool` | 12 | `/compress-pdf` | `/ar/daght-pdf` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/ar/adilla/kayfiyyat-dght-pdf` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/ar/muqaranat/pdf-aw-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/ar/halat-alistikhdam/almustaqilleen` | 2 |
| `legal` | 2 | `/privacy-policy` | `/ar/siyasat-alkhususiya` | 2 |
| `meta` | 1 | `/contact` | `/ar/ittisal` | 1 |
| **Total** | **174** | | | **174** |

`guide` = the `/guides` index page plus **144 individual guides**, all fully
translated with full informational depth.

### Slug policy: romanized, not native Arabic script

Every Arabic slug is ASCII-transliterated (e.g. `muharrir-pdf`, not `محرر-pdf`
or a percent-encoded native-script slug) — a deliberate decision, documented
in `docs/localization/ar-terminology.md` §6, that extends the same principle
already established for pt-BR/fr/es/de/it: avoid percent-encoded URLs in
links, sharing, and analytics, even though native-script slugs are
technically supported by the route map and would render correctly in a
modern browser's address bar.

### Hubs (8/8)

`pdf-editor` → `muharrir-pdf`, `pdf-converter` → `muhawwil-pdf`,
`sign-pdf` → `tawqee-pdf`, `scan-to-pdf` → `mash-ila-pdf`,
`pdf-security` → `amaan-pdf`, `pdf-for-business` → `pdf-lilaamal`,
`pdf-for-students` → `pdf-liltullab`, `pdf-forms` → `namathij-pdf`.

`compress-pdf` continues to be excluded from every locale's hub registry —
pre-existing dead code, not an ar-specific gap.

### Tools (12/12)

Every Arabic tool page imports the **exact same converter component** as
its English, Portuguese, French, Spanish, German and Italian counterparts —
verified by diffing the import lists. No conversion logic duplicated for ar.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx` → `muqaranat/pdf-aw-docx`, `compare/pdf-vs-jpg` →
`muqaranat/pdf-aw-jpg`, `compare/pdf-app-vs-online-pdf-tools` →
`muqaranat/tatbeeq-pdf-aw-adawat-online`; `use-cases/freelancers` →
`halat-alistikhdam/almustaqilleen`, `use-cases/remote-work` →
`halat-alistikhdam/al-amal-an-buad`.

### Legal and interface (3/3)

`privacy-policy` → `siyasat-alkhususiya`, `terms` →
`sharoot-alistikhdam`, `contact` → `ittisal`. Operator identity,
addresses, contact email and app identifiers unchanged (hrhelperg s.r.o.,
Husitská 502/36, Praha 3, info@hrhelperg.com). The privacy policy uses the
full gloss **"اللائحة العامة لحماية البيانات (GDPR)"** on first mention —
there is no single established Arabic-script acronym for GDPR the way
DSGVO/RGPD are established in German/French/Italian/Spanish, so the English
acronym is kept alongside a plain-language Arabic gloss. The regulation
applies because the controller is established in the EU, regardless of the
reader's own country.

### Site chrome

Header navigation, footer, breadcrumbs, FAQ headings, related-guide and
cluster headings, trust badges, CTA labels, error/validation messages,
"تنزيل مرة أخرى" / "البدء من جديد", and the language switcher are all
translated via `src/lib/i18n/dictionaries/site.ar.ts`. No English fragment
is assembled at runtime.

## Architectural work: enabling the site's first RTL locale

Every locale shipped before this one (pt-BR, fr, es, de, it) is
left-to-right, so RTL was entirely unexercised in this codebase. An
up-front audit (before any content was written) found the direction/lang
wiring already correct — `SiteDocument.tsx` reads `LOCALES[locale].direction`
and applies `dir={config.direction}` on `<html>`, confirmed in the built
output: `<html lang="ar" dir="rtl" ...>`. Seven small, additive fixes were
needed in shared layout components (safe for every other locale — pure
logical-property/RTL-variant additions, no LTR rendering changed):

- `src/app/globals.css` — `.callout` border: `border-left` → `border-inline-start`.
- `src/components/sections/AppCTA.tsx` — accent bar: `border-l-4 border-l-[--color-brand] ... border-r` → `border-s-4 border-s-[--color-brand] ... border-e`.
- `src/components/tools/primitives/PrivacyNote.tsx` — same accent-bar fix, used on every tool page.
- `src/components/sections/FAQ.tsx` — `text-left` → `text-start` on every FAQ question, sitewide.
- `src/components/sections/CompareTable.tsx` — `text-left` → `text-start` on the comparison table.
- `src/components/sections/ComparePage.tsx` — `pl-5` → `ps-5` on two "when to pick" lists.
- `src/components/seo/Breadcrumbs.tsx` — the `ChevronRight` separator gained `rtl:rotate-180` so the glyph itself mirrors under RTL instead of pointing the wrong way (flexbox row order already auto-reverses; the icon didn't).

**Content-level RTL rule:** several dictionary/content strings bake a
literal arrow character directly into a "continue reading" label
(`readTheGuide: "Leer la guía →"` in Spanish, for example). Arabic reading
continues **leftward**, so every one of these uses **←** (U+2190), never →
— applied in `site.ar.ts`, `home.ar.ts`, and `NOT_FOUND_AR`, and verified
with a project-wide grep for a stray → in Arabic content (zero hits).

## HowTo schema detection — the same `\b`-vs-`\s` bug found for German, now also for Arabic

`isProceduralGuide()` (`src/content/schema.ts`) uses `\s` rather than `\b`
after the locale-specific "how to" opener (`/^كيفية\s/`). JS regex `\b` is a
transition between `\w` (`[A-Za-z0-9_]`) and non-`\w`, and Arabic letters
are not in `\w` — so `\b` never matches on either side of an all-Arabic
word, silently failing to detect any Arabic procedural guide at all. This
was caught before any content was written by testing the regex directly
against a sample title (`/^كيفية\b/i` returns `false` against "كيفية تحرير
ملف PDF" — confirmed with a one-line Node check), not discovered after the
fact. Verified against the full 144-guide manifest: all Arabic "كيفية"
titles correspond exactly to an English slug starting with `how-to-`.

## Exclusions

**None specific to Arabic.** `src/content/hubs/compress-pdf.ts` remains
pre-existing dead code, absent from every locale's hub registry alike.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files
(including the new `(ar)/not-found.tsx`), `robots.ts`, the 35 sitemap route
handlers, `opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`, `es`, `de`, `it`, `ar`. Declared but
unpublished (architectural readiness only, zero pages/hreflang/sitemap
entries — asserted by `tests/i18n/routeMap.test.ts` and
`tests/indexnow.test.ts`): `ja`, `id`, `ru`, `pl`, `cs`, `tr`. (`ru` ships in
a parallel branch, `feat/localization-ru`, from the same base — not yet
merged as of this audit, so it still reads as unpublished from `ar`'s point
of view.)

## Verification performed

- `npx tsc --noEmit` — clean.
- `npx eslint .` — clean.
- `npx vitest run` — 364/364 tests passing.
- `npx next build` — clean production build, all 174 Arabic routes
  statically generated (30 static + 144 guide pages under
  `/ar/adilla/[slug]`); built HTML confirmed to emit
  `<html lang="ar" dir="rtl" ...>`.
- `node scripts/seo/check-build-seo.mjs` — all build-output SEO checks
  passed; 1218 prerendered pages crawled across all 7 published locales.
- Guide manifest verbatim-match: every one of the 144 Arabic guide files'
  `h1`/`description` diffed byte-for-byte against
  `src/content/ar/routes.guides.ts` — 0 mismatches.
- Typography sweep: project-wide scan for a Latin `,`/`;`/`?` immediately
  adjacent to Arabic script anywhere in `src/content/ar`,
  `src/lib/i18n/dictionaries/{site,tools}.ar.ts`,
  `src/content/pages/{home,misc}.ar.ts` — zero hits. No Eastern
  Arabic-Indic digits found anywhere (Western Arabic numerals used
  throughout, per policy).
- Cross-locale/English-leakage scan of the built HTML output
  (`.next/server/app/ar/**/*.html`) for common English UI markers — zero
  hits beyond the pre-existing, intentionally-English App Store badge
  aria-label shared by every locale.

## Recommendation

**MERGE.** Full parity (174/174), all automated checks pass, native-quality
editorial translation throughout, no shared PDF-processing logic forked,
and the site's RTL support is now proven end-to-end in a real production
build. Not deployed — awaiting explicit merge instruction per the
established per-locale workflow.
