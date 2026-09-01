# cs Parity Audit

Audit of the current indexable English inventory of pdfeditconvert.top against
its Czech counterpart, produced during the `feat/localization-cs` programme.
Base state verified against `origin/main` before this branch started, which
already carries the complete pt-BR, French, Spanish, German, Italian, Arabic
and Russian localizations.

- **Audit date:** 2026-09-01
- **Locales in scope:** `en` (default, root, no prefix), `pt-BR` (`/pt-br`),
  `fr` (`/fr`), `es` (`/es`), `de` (`/de`), `it` (`/it`), `ar` (`/ar`),
  `ru` (`/ru`), `cs` (`/cs`, published by this work)
- **Source of truth:** `src/lib/i18n/routeMap.ts`, cross-checked against
  `src/content/cs/routes.ts` and `routes.guides.ts`.

## Headline result

| Metric | Count |
| --- | ---: |
| Current EN indexable public pages | 174 |
| Current pt-BR / fr / es / de / it / ar / ru indexable public pages (each) | 174 |
| New cs indexable public pages | 174 |
| **Total indexable URLs (9 published locales × 174)** | **1566** |
| Czech parity | **100.0% (174/174)** |
| Exclusions | 0 |

## Inventory by route family

| Category | Route ids | EN example | cs example | cs count |
| --- | ---: | --- | --- | ---: |
| `core` (home) | 1 | `/` | `/cs` | 1 |
| `hub` | 8 | `/pdf-editor`... | `/cs/editor-pdf` | 8 |
| `tool` | 12 | `/compress-pdf` | `/cs/zkomprimovat-pdf` | 12 |
| `guide` | 145 | `/guides/how-to-compress-pdf` | `/cs/navody/jak-zkomprimovat-pdf` | 145 |
| `compare` | 3 | `/compare/pdf-vs-docx` | `/cs/srovnani/pdf-nebo-docx` | 3 |
| `use-case` | 2 | `/use-cases/freelancers` | `/cs/pripady-uziti/freelanceri` | 2 |
| `legal` | 2 | `/privacy-policy` | `/cs/zasady-ochrany-osobnich-udaju` | 2 |
| `meta` | 1 | `/contact` | `/cs/kontakt` | 1 |
| **Total** | **174** | | | **174** |

`guide` = the `/guides` index page plus **144 individual guides**, all fully
translated with full informational depth.

### Slug policy: ASCII, diacritics stripped

Every Czech slug strips diacritics (á→a, č→c, ď→d, é→e, ě→e, í→i, ň→n, ó→o,
ř→r, š→s, ť→t, ú/ů→u, ý→y, ž→z) — e.g. `zkomprimovat-pdf`, not a slug
carrying "č"/"ř"/"š" — the same principle already established for
pt-BR/fr/es/de/it/ar/ru/pl: avoid percent-encoded URLs in links, sharing
and analytics. Prose keeps every diacritic in full.

### Hubs (8/8)

`pdf-editor` → `editor-pdf`, `pdf-converter` → `konvertor-pdf`,
`sign-pdf` → `podepsat-pdf`, `scan-to-pdf` → `skenovat-do-pdf`,
`pdf-security` → `zabezpeceni-pdf`, `pdf-for-business` → `pdf-pro-firmy`,
`pdf-for-students` → `pdf-pro-studenty`, `pdf-forms` → `formulare-pdf`.

`compress-pdf` continues to be excluded from every locale's hub registry —
pre-existing dead code, not a cs-specific gap.

### Tools (12/12)

Every Czech tool page imports the **exact same converter component** as
its English, Portuguese, French, Spanish, German, Italian, Arabic and
Russian counterparts — verified by diffing the import lists. No conversion
logic duplicated for cs.

### Comparisons (3/3) and use cases (2/2)

`compare/pdf-vs-docx` → `srovnani/pdf-nebo-docx`, `compare/pdf-vs-jpg` →
`srovnani/pdf-nebo-jpg`, `compare/pdf-app-vs-online-pdf-tools` →
`srovnani/aplikace-pdf-nebo-online-nastroje`;
`use-cases/freelancers` → `pripady-uziti/freelanceri`,
`use-cases/remote-work` → `pripady-uziti/prace-na-dalku`.

### Legal and interface (3/3)

`privacy-policy` → `zasady-ochrany-osobnich-udaju`, `terms` →
`podminky-pouzivani`, `contact` → `kontakt`. Operator identity, addresses,
contact email and app identifiers unchanged (hrhelperg s.r.o., Husitská
502/36, Praha 3, info@hrhelperg.com). The privacy policy keeps **GDPR**
with a one-time Czech gloss on first mention — Czech has no single native
acronym for it as established in everyday use as German's DSGVO or
French's RGPD, so Czech consumer and legal writing overwhelmingly keeps
"GDPR" itself, the same treatment already used for Arabic and Russian.

### Site chrome

Header navigation, footer, breadcrumbs, FAQ headings, related-guide and
cluster headings, trust badges, CTA labels, error/validation messages,
"Stáhnout znovu" / "Začít znovu", and the language switcher are all
translated via `src/lib/i18n/dictionaries/site.cs.ts`. No English fragment
is assembled at runtime.

## Architectural decisions and issues found during this programme

### HowTo schema detection

Czech how-to titles naturally open with "Jak…" (Jak zkomprimovat PDF, Jak
podepsat PDF na iPhonu), the same lexical-opener pattern several other
locales already use, so `cs: /^jak\s/i` was added to the existing
`PROCEDURAL_OPENERS` map in `src/content/schema.ts`. `\s` was used
deliberately instead of `\b` — the same fix already applied for Arabic and
Russian: JS regex `\b` is a transition between `\w` ([A-Za-z0-9_]) and
non-`\w`, and while Czech is Latin-script (so `\b` works for ASCII
letters), the opener check is kept consistent with the other locales'
proven-safe pattern rather than risk an edge case with diacritics
immediately following the opener word.

### Formal "vy" register found and fixed — twice

The terminology policy (§7) mandates the informal **ty** register
throughout. Two independent sources drifted into the formal **vy**
register despite the policy, both caught and fixed:

1. **`src/content/cs/routes.ts`** (the 30-entry manifest, hand-written
   directly, not agent-generated) used vy-conjugated imperatives
   throughout its descriptions ("Zmenšete", "Vyberte", "Extrahujte",
   "Spojte", "Rozdělte", "Otočte", "Přidejte") and vy-possessives
   ("vaše zařízení", "vašim daty") — a self-inflicted inconsistency
   between the terminology doc's own stated policy and the hand-written
   content it governs. Fixed with a full pass converting every instance
   to ty-register (28 targeted replacements across titles and
   descriptions), re-verified with `tsc` and a project-wide grep for
   vy-register markers — zero remaining.
2. Individual guide-content agents each caught and self-corrected smaller
   vy-register slips in their own batches during self-verification (a
   handful of instances per batch — quoted third-party UI text, an
   isolated "vaše servery", "vaše" in two guides) — all confirmed fixed
   before each batch reported done.

### English tool names left untranslated in guide prose — found and fixed

The guide-content agents were instructed to use `src/content/it/guides/`
only as a **structural** template and translate wording fresh from the
English source. In practice, 26 of the 144 Czech guide files (161
instances) picked up literal English tool-brand references from the
Italian corpus anyway — "Compress PDF", "Merge PDF", "Extract PDF Pages"
and similar, left untranslated in body prose, `related` labels and
`parentHub` labels — plus two instances of "Convert to PDF"/"Convert to
Word" referencing an actual tool button label that should have read
"Převést do PDF"/"Převést do Wordu". Investigation traced the tool-name
pattern to Italian itself: the same untranslated-tool-name pattern exists
in the already-merged `it` locale, while every other already-shipped
locale (es, fr, de, ru, ar) correctly translates these — Italian-specific
tech debt that propagated into Czech (and Polish) because Italian was used
as the structural template. Fixed with a scripted, priority-ordered
whole-word replacement (longest phrases first) mapping every English tool
name to its already-established Czech short name (from
`src/lib/i18n/dictionaries/tools.cs.ts` and `src/content/cs/routes.ts`) —
e.g. `Compress PDF` → `Zkomprimovat PDF`, `Extract PDF Pages` →
`Extrahovat stránky z PDF` — plus a manual fix for the two "Convert to…"
button-label references. Re-verified with a full cross-locale
English-leakage scan of the built HTML output afterward: zero remaining
hits beyond two legitimate exceptions (the shared, pre-existing English
`Hero.tsx` app-store-badge string common to every locale, and genuine
third-party product names "DocuSign"/"Adobe Sign" in
`how-to-send-contracts-as-pdf`, correctly left untranslated).

### Manifest typography — escaped straight quotes fixed

`src/content/cs/routes.guides.ts` contained 6 descriptions using an
escaped straight quote (`\"`) instead of the correct Czech closing quote
(U+201C) inside a nested „…" quotation — a typography-policy violation in
the manifest itself, which several content-writing agents correctly
replicated verbatim to preserve the byte-match requirement rather than
silently diverging. Fixed by correcting the manifest's 6 descriptions to
proper „…" typography, then syncing the corresponding 6 guide content
files' `description` fields to match exactly. Re-verified with the
byte-exact manifest match script: 0 mismatches after the fix.

### Duplicate h1 with German's contact page — found and fixed

The build-output SEO check failed on first run: `/cs/kontakt` and
`/de/kontakt` shared the literal h1 "Kontakt" (the word is identical in
both languages). Fixed by giving the Czech contact page a fuller, distinct
h1 in the informal ty register — "Spoj se s námi" — matching the pattern
already used by French (`Nous contacter`, not the bare "Contact") to avoid
an across-locale h1 collision. Re-ran the build and SEO check after the
fix: clean.

## Exclusions

**None specific to Czech.** `src/content/hubs/compress-pdf.ts` remains
pre-existing dead code, absent from every locale's hub registry alike.

## Non-indexable surfaces (out of scope by definition)

`app/global-not-found.tsx` and the per-locale `not-found.tsx` files
(including the new `(cs)/not-found.tsx`), `robots.ts`, the 45 sitemap
route handlers, `opengraph-image`, `icon`, `apple-icon`.

## Locale registry

Published: `en`, `pt-BR`, `fr`, `es`, `de`, `it`, `ar`, `ru`, `cs`. Declared
but unpublished (architectural readiness only, zero pages/hreflang/sitemap
entries — asserted by `tests/i18n/routeMap.test.ts` and
`tests/indexnow.test.ts`): `ja`, `id`, `pl`, `tr`. (`pl` ships in a
parallel branch, `feat/localization-pl`, from the same base — not yet
merged as of this audit, so it still reads as unpublished from `cs`'s
point of view.)

## Verification performed

- `npx tsc --noEmit` — clean.
- `npx eslint .` — clean.
- `npx vitest run` — 420/420 tests passing.
- `npx next build` — clean production build, all 174 Czech routes
  statically generated (30 static + 144 guide pages under
  `/cs/navody/[slug]`).
- `node scripts/seo/check-build-seo.mjs` — all build-output SEO checks
  passed; 1566 prerendered pages crawled across all 9 published locales.
- Guide manifest verbatim-match: every one of the 144 Czech guide files'
  `h1`/`description` diffed byte-for-byte against
  `src/content/cs/routes.guides.ts` — 0 mismatches, 0 duplicate ids, 0
  duplicate slugs.
- Terminology sweep: "nahrát"/"nahráv-" reviewed everywhere they appear —
  every instance describes a genuine external transfer, never this site's
  own local tool's own add-file step. "zploští"/"zploštit" reviewed
  everywhere — every instance is the genuine rasterize-to-image sense,
  never the forms-locking sense (which correctly uses "zafixovat"). Formal
  "vy" register swept project-wide — zero remaining (see above).
- English-tool-name sweep and fix (see above) — re-verified zero remaining
  after the fix.
- Cross-locale/English-leakage scan of the built HTML output
  (`.next/server/app/cs/**/*.html`) for common English UI markers — zero
  hits beyond the pre-existing, intentionally-English App Store badge
  string shared by every locale, and genuine third-party product names.

## Recommendation

**MERGE.** Full parity (174/174), all automated checks pass, native-quality
editorial translation throughout, no shared PDF-processing logic forked.
Several real defects were found and fixed during this programme (formal
register slips in the hand-written manifest, untranslated tool names
inherited from Italian's structural template, manifest typography, and a
duplicate h1 with German) — all confirmed resolved by re-running the full
verification suite. Not deployed — awaiting explicit merge instruction per
the established per-locale workflow.
