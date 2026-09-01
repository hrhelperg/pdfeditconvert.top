# Multilingual SEO audit — 2026-09-01

Full indexation audit of all 13 published locales (2,262 indexable pages)
after the `tr` merge completed the localization programme. Every finding
below was verified against **real built HTML** in `.next/server/app`, not
inferred from source.

Locales: `en` (site root, no prefix), `pt-BR`, `es`, `fr`, `de`, `ja`, `id`,
`ar`, `ru`, `pl`, `cs`, `it`, `tr` — 174 pages each.

## Headline

The load-bearing indexation machinery was already correct and is confirmed
so at corpus scale. Four real defects were found and fixed; the largest had
been silently suppressing structured data on 380 pages.

| Area | Verdict |
| --- | --- |
| hreflang reciprocity, x-default, self-canonical | correct on all 2,262 pages |
| Sitemaps, robots, IndexNow, noindex hygiene | correct; 2,262 URLs, 0 duplicates |
| Duplicate titles / descriptions / H1s | 0 sitewide |
| Untranslated metadata leaking into 12 locales | 0 |
| Internal link graph (orphans, broken links, cross-locale leakage) | 0 defects |
| **HowTo structured data** | **broken in 5 locales — fixed** |
| **Title width / double-branding** | **1,599 over budget — 804 fixed** |
| **Hardcoded English in shared components** | **108 pages — fixed** |
| **`og:locale` format** | **wrong on all 2,262 — fixed** |

## Fixed in this branch

### 1. HowTo schema was absent in 5 of 13 locales (380 pages)

`isProceduralGuide()` tested a per-language title opener (`^how to`,
`^cómo`, `^как`, …) and fell back to the **English** regex for any locale
absent from both of its tables. `ja`, `id`, `pl`, `cs` and `tr` were in
neither, so the English pattern ran against Japanese, Indonesian, Polish,
Czech and Turkish titles and never matched — those locales emitted **zero**
`HowTo` nodes across ~76 procedural guides each.

Two parity-audit documents asserted this was handled; both were wrong and
have been corrected in place (`ja-parity-audit.md`, `cs-parity-audit.md`).
Nothing in lint, typecheck, the 532-test suite, the build, or
`check-build-seo.mjs` covered it.

The heuristic also over-matched where it did run: `"Cómo funcionan los
formularios PDF"` ("how PDF forms work") is an explainer, not a procedure,
yet took `HowTo` in `es` and `ru` while the same page took none in `en`,
`de` or `ar`. Seven route ids had a different schema type depending on the
language.

**Fix:** decide from the English slug (`how-to-*`, plus one named
exception), identically for every locale. Whether a page is a procedure is
a property of the page, not of the language it is written in. This deletes
~40 lines of per-language regex reasoning.

**Result:** all 13 locales now emit exactly **76** `HowTo` pages.

Note this is not a lost-rich-result issue — Google retired HowTo rich
results in 2023. What was lost is page-type disambiguation for Google's
semantic layer and AI-answer surfaces, plus schema consistency across
hreflang clusters, which audit crawlers flag.

### 2. 1,599 of 2,262 titles (70.7%) exceeded the SERP width budget

The brand suffix `" | PDF Editor"` was appended unconditionally via Next's
`title.template`. It cost 13 characters on titles that were already too
long, and double-branded the 52 titles that already opened with the product
name (`"PDF Editor — … | PDF Editor"`).

**Fix:** `seo()` now emits an explicit absolute title through
`brandedTitle()`, which appends the suffix only when the result still fits,
and never when the title already names the brand. Width is measured in
Latin-character equivalents — CJK counts double, Arabic half — because a
plain character count badly under-flags Japanese (a 56-character `ja` title
can render wider than a 100-character English one) and over-flags Arabic.

**Result:** over-budget titles **1,599 → 795**; double-branded titles
**52 → 0**. The remaining 795 need per-page copy shortening (see Open
items).

### 3. Hardcoded English text on 108 non-English pages

`Hero.tsx` rendered the literal string `"Available on iOS and Android ·
Free to try"` — visible body copy, not a hidden attribute — on all 8 hub
pages plus the tools index in every locale. These are the highest-value
category landing pages on the site. `StoreButtons` and `Breadcrumbs`
likewise fell back to English `aria-label`s in every locale.

This string had been repeatedly dismissed as a known false positive during
the localization waves' leakage scans, because it sits next to the App
Store badge and reads like chrome. It is not chrome; it is untranslated
visible copy.

**Fix:** added `store.availability` and `breadcrumbs.ariaLabel` to the site
dictionary contract and all 13 dictionaries, and threaded them through
`Hero`, `StoreButtons` and all 9 `Breadcrumbs` call sites.

**Result:** 108 → 0.

### 4. `og:locale` used BCP-47 instead of Open Graph's format

Every page emitted `og:locale` as `de`, `pt-BR`, `ar` — but Open Graph
requires `language_TERRITORY` (`de_DE`, `pt_BR`). Facebook and LinkedIn
discard an unrecognized value and default to `en_US`, so every localized
share preview claimed to be English.

No effect on Google, which ignores `og:locale` and uses hreflang. Real for
social distribution.

**Fix:** added an explicit `ogLocale` per locale (declared, not derived —
`ar` carries a bare language tag with no territory) and emitted
`og:locale:alternate` for sibling editions.

### 5. Smaller fixes

- **Sitemap `x-default`** — sitemaps declared 13 hreflang annotations per
  URL while the pages' own heads declared 14. The sitemap was not a
  self-sufficient annotation source. Now 14 in both.
- **`Organization.sameAs`** — the App Store and Google Play URLs existed
  only as `downloadUrl` on 13 home pages. For a site whose entire purpose
  is funnelling to an app, the brand entity had no declared profiles. Added
  `sameAs` plus a `brand` link, since `Organization.name` is the legal
  entity (`hrhelperg s.r.o.`) while everything else says `PDF Editor`.
- **Guide heading outline** — article body sections rendered at `h3` while
  sitewide boilerplate (FAQ, Related guides) rendered at `h2`, inverting
  the outline on 1,885 pages. Promoted to `h2`; both headings carry
  explicit Tailwind classes so there is no visual change. Not a ranking
  factor, but it matters for passage extraction and screen-reader
  navigation.
- **CI gate** — `npm run seo:check` never ran in CI. The sitewide
  uniqueness protection, which is the strongest SEO tooling in this repo,
  depended on someone remembering to run it locally. Now runs after build.
- **New gates** — `tests/seo/multilingualSeo.test.ts` pins HowTo
  locale-independence, title branding, `ogLocale` format, dictionary
  completeness for the two new keys, and sitemap `x-default`. The checker
  now fails on double-branding and reports the over-budget title count.

## Investigated and deliberately not changed

- **Language switcher links to locale homes, not page equivalents.** Raised
  as a finding; it is correct by design. The static href is the target
  locale's home (always a valid URL), and hydration upgrades each href to
  the equivalent page by reading the `hreflang` tags already in the head —
  so users who open the menu do get the deep link. Server-rendering deep
  links would require every page to pass its route id into the shared
  layout, which the App Router does not support cleanly, and hreflang
  already carries the machine-readable relationship. No indexation impact.
- **"Every locale's contact page is an in-content orphan."** A checker
  artifact. `crawl-build.mjs` strips header and footer before counting, and
  every contact page is footer-linked from all 174 pages in its locale. A
  guide has no reason to link to contact in body copy. Do not "fix" this.
- **12 pages at click depth 4.** These are the remote-work use-case page in
  each non-English locale. BFS from each locale's *own* home gives an
  identical histogram for all 13 locales (`{0:1, 1:33, 2:139, 3:1}`) — the
  extra hop is the locale prefix, not a structural problem.
- **`robots.txt` `Host:` directive** — retired by Yandex in 2018, ignored
  by everyone else, and states the correct origin. Harmless.
- **Two `robots` metas on the global 404** — both say `noindex`. No
  conflict.
- **`FAQPage` yields no rich result** since Google's 2023 restriction to
  gov/health sites. The markup still does entity work; not a defect.

## Open items (content work, not code)

Ranked by value. None block indexation.

1. **795 titles still over the width budget.** Needs per-page copy
   shortening in `src/lib/routes.ts` (English) and each
   `src/content/<locale>/routes*.ts`. Concentrated in `/guides/*`.
2. **1,270 of 2,262 descriptions (56%) exceed 160 characters.** The root
   cause is the English source: it already runs to a 150-character median,
   leaving no headroom for the normal 10–20% expansion under translation.
   Fix English to a ~135-character budget first, then re-tighten per
   locale. Google rewrites over-long descriptions rather than penalizing,
   so this costs CTR control, not rankings.
3. **`Article.dateModified` always equals `datePublished`**, and localized
   copies inherit the English date — freshness signals are inert.
   `LocaleRouteEntry.lastModified` already exists and is not consumed.
4. **`Article` has no `image`.** `/opengraph-image` already exists.
5. **No `@id` entity graph** — the full `Organization` node is inlined up
   to 4× per page (~1–2 KB of avoidable HTML on every page).
6. **Use-case cluster has no hub** and `/use-cases/remote-work` has no
   inbound link from any depth-1 page. 26 URLs, the weakest-supported
   content on the site. Cheapest fix: add it to one hub's `related` array.
7. **Sitemap route handlers are generated but ungated.** Publishing a
   locale and forgetting `gen-sitemap-routes.mjs` would produce an index
   listing five 404ing URLs with green CI.

## Verification

- `npx tsc --noEmit`, `npx eslint .` — clean.
- `npx vitest run` — 542/542 passing (45 files), including the 10 new gates.
- `npx next build` — clean, 2,262 pages.
- `node scripts/seo/check-build-seo.mjs` — all checks pass.
- Post-fix corpus checks against built HTML: HowTo 76/locale × 13; hardcoded
  English hero string 0; English `aria-label="Breadcrumb"` 0; double-branded
  titles 0; `og:locale` in `xx_XX` form on all locales; sitemap `x-default`
  present with 14 `xhtml:link` per URL.
