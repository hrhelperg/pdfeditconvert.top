# Indexation recovery audit — August 2026

Site: `pdfeditconvert.top` · Branch: `fix/indexation-recovery` · Date: 2026-08-25

Presenting symptom: live for over a month, 174 substantive URLs, roughly 4
pages indexed in Search Console.

## Executive diagnosis

| Rank | Cause | Confidence | Evidence |
| --- | --- | --- | --- |
| **Critical** | Canonical host conflict: every canonical, sitemap entry and robots directive named the apex, which `307`-redirected to `www` | **PROVEN** | 44 of 44 sampled URLs: apex `307` → www, www `200`, canonical → apex. Full record in [`canonical-host.md`](canonical-host.md) |
| **High** | `lastmod` was a build timestamp — every deploy claimed all 176 URLs had just changed | **PROVEN** | Production sitemap: 176 `<lastmod>` values, 1 distinct (`2026-07-04T16:44:56.942Z`); source was `lastModified: new Date()` |
| **Medium** | IndexNow submissions pointed `host` and `keyLocation` at the redirecting origin | **PROVEN** | Key file: `200` on www, `307` on apex. Submissions could not validate reliably |
| **Medium** | Single flat sitemap made the failure undiagnosable per page type | **PROVEN** (as a diagnostic gap, not a cause) | One sitemap can only report "N of 176" in Search Console |
| **Low** | Authority concentrated away from the differentiated pages; 14 guides with one in-content inbound link; a Tier 2 page at click depth 3 | **LIKELY** contributor to crawl priority | Link-graph crawl of built HTML |
| **Low** | `HowTo` schema on 68 non-procedural guides; `/contact` rendering 252 characters | **POSSIBLE** minor quality signals | Build crawl |
| — | Content cannibalisation | **RULED OUT** | Max TF-IDF cosine between any two pages: **0.362**; no cluster ≥ 0.40; zero pairs above 0.18 on 4-gram Jaccard |
| — | Thin or templated content | **RULED OUT** | Median 760 words of server-rendered editorial text; no duplicate titles, descriptions or H1s anywhere |
| — | Robots blocking, `noindex`, or `X-Robots-Tag` | **RULED OUT** | `robots.txt` allows all; all 174 pages emit `index, follow`; no `X-Robots-Tag` on any sampled response |
| — | JavaScript-dependent content / soft 404s | **RULED OUT** | All 174 pages statically prerendered; full content present with JS disabled |
| — | Missing or broken routes | **RULED OUT** | Registry ↔ content ↔ sitemap ↔ build output: exact parity, no dangling entries |

The critical cause is sufficient on its own. It applied to 100% of URLs
simultaneously, is independent of content, and produces precisely the observed
outcome. The rest are real but secondary; none of them would keep a healthy site
at 4 indexed pages.

**Note on scope.** A previous audit raised the apex/www area and was told the
Vercel configuration was correct. This finding is not a restatement of that
hypothesis — it is fresh measurement, reproducible with
`node scripts/seo/check-canonical-host.mjs`, showing the apex actively
redirecting. Everything else in this report was investigated independently and
several plausible hypotheses were ruled out on evidence rather than assumed.

## Inventory

| Category | Count | Sitemap group |
| --- | ---: | --- |
| Homepage | 1 | hubs |
| Topic hubs | 8 | hubs |
| Browser tools | 11 | tools |
| Tools index (`/pdf-tools`) | 1 | tools |
| Guides | 144 | guides |
| Guides index (`/guides`) | 1 | guides |
| Comparison pages | 3 | comparisons |
| Use-case pages | 2 | comparisons |
| Legal | 2 | pages |
| Contact | 1 | pages |
| **Total indexable** | **174** | |
| Intentionally `noindex` | 0 | — |
| Redirecting URLs | 2 | excluded from all sitemaps |

Before this branch: 176 routes. Two were consolidated (see below).
Registry, content registries, generated sitemaps and prerendered build output
agree exactly — there is no discrepancy to reconcile.

## Live crawl findings (pre-fix, production)

44 URLs sampled across every template. Uniform result:

- HTTP: apex `307` → www on 44/44; www `200` on 44/44
- Canonical: self-referential but on the redirecting apex host, 44/44
- Robots meta: `index, follow`, 44/44 · `X-Robots-Tag`: absent, 44/44
- Title / description / H1: present and unique on all 44
- Structured data: present on all templates
- Content without JavaScript: full on all 44

The pages themselves were healthy. Only the host they claimed to be at was wrong.

## Cannibalisation findings

All 176 pages compared pairwise on rendered editorial text (header, footer and
scripts stripped) using both 4-gram Jaccard and TF-IDF cosine over unigrams and
bigrams.

- 4-gram Jaccard ≥ 0.18: **0 pairs**. There is no templated or copy-pasted prose.
- TF-IDF cosine ≥ 0.30: **6 pairs**, maximum 0.362. Connected components at
  ≥ 0.40: **none**.

The six flagged pairs, with verdicts:

| Pair | Cosine | Verdict |
| --- | ---: | --- |
| `how-to-print-a-filled-pdf-form` ↔ `pdf-form-not-printing-correctly` | 0.362 | **KEEP SEPARATE** — procedure vs. failure diagnosis, distinct queries |
| `best-pdf-form-app-for-android` ↔ `…-for-iphone` | 0.358 | **KEEP SEPARATE** — platform is the query in this niche |
| `how-to-sign-pdf-on-phone` ↔ `/sign-pdf` | 0.354 | **KEEP SEPARATE** — guide vs. hub, standard pairing |
| `how-to-save-a-filled-pdf-form` ↔ `why-pdf-form-wont-save` | 0.341 | **KEEP SEPARATE** — how-to vs. problem/fix |
| `free-pdf-tools-for-android` ↔ `…-for-iphone` | 0.327 | **KEEP SEPARATE** — platform variants |
| `how-to-fix-sideways-pdf-pages` ↔ `how-to-rotate-pdf-pages` | 0.309 | **REVIEW LATER** — closest to genuine overlap; monitor which one Google selects before acting |

Separately, title-level analysis surfaced two pairs the body comparison missed,
where the *intent* duplicates even though the wording does not:

| Pair | Title similarity | Action taken |
| --- | ---: | --- |
| `/pdf-for-students` ↔ `/use-cases/students` | 0.89 | **CONSOLIDATE** → `308` to the hub |
| `/pdf-for-business` ↔ `/use-cases/business` | 0.88 | **CONSOLIDATE** → `308` to the hub |

`/use-cases/freelancers` and `/use-cases/remote-work` were kept: no hub competes
for those audiences, so redirecting them would discard intent rather than
concentrate it.

## Thin / low-value findings

| Outcome | Count | Detail |
| --- | ---: | --- |
| Kept | 171 | Median 760 words of real editorial text; no keyword-permutation shells found |
| Improved | 3 | `/contact` (252 → 1,276 rendered chars), `/pdf-tools` (added cluster + hub routing), `/guides` (restructured into topical clusters) |
| Merged / redirected | 2 | `/use-cases/students`, `/use-cases/business` |
| Noindexed | 0 | No evidence justified suppressing any page |
| Removed | 0 | — |

No page was mass-noindexed. The audit deliberately did not use word count as a
quality proxy; the only page flagged as too thin was flagged because 252
characters is close enough to empty to read as a soft 404, and it was fixed by
adding genuine information rather than removed.

## Internal-link findings

Measured on the prerendered HTML, counting in-content links only — the sitewide
header and footer are excluded, since a link on all 174 pages carries no
relevance signal.

| Metric | Before | After |
| --- | ---: | ---: |
| Guides with ≤ 1 in-content inbound link | 14 | **0** |
| In-content inbound links to guides (total) | 544 | **678** |
| In-content inbound links to Tier 1 | 566 | **592** |
| In-content inbound links to the 11 tools | 154 | **163** |
| In-content outbound links from the 8 hubs | 34 | **128** |
| Pages at click depth 3 | 2 | **1** |
| In-content orphans | 3 | **1** (`/contact`, footer-linked by design) |
| Maximum click depth | 3 | 3 |

The mechanism: every guide already declared a `parentHub`, but that edge was
only traversed upward. Exposing the reverse edge gave each hub its cluster and
each guide an inbound link from the most relevant page that exists for it.

## Sitemap changes

One flat sitemap of 176 URLs → a sitemap index over five groups:

| Sitemap | URLs |
| --- | ---: |
| `/sitemap-tools.xml` | 12 |
| `/sitemap-hubs.xml` | 9 |
| `/sitemap-guides.xml` | 145 |
| `/sitemap-comparisons.xml` | 5 |
| `/sitemap-pages.xml` | 3 |
| **`/sitemap.xml`** (index) | **174** |

Every URL returns `200`, is self-canonical, is indexable, is on the canonical
host, appears in exactly one group, and is not a redirect source — all enforced
by tests. Segmentation is for diagnosis: Search Console reports coverage per
sitemap, so this turns "N of 176" into per-type numbers.

## Lastmod findings

The previous freshness signal was **not truthful**. `sitemap.ts` used
`lastModified: new Date()`, so every deploy asserted that all 176 pages had just
changed — production showed a single identical timestamp across all 176 entries.

Now each route carries a `lastModified` derived from real history: a guide's own
`updated` field where it has one, otherwise the last commit touching the file
that renders the route. That produced 7 distinct dates. The 28 pages this branch
genuinely changed were then bumped to `2026-08-25` — determined by diffing the
rendered HTML before and after, not by assumption. Schema-only changes did not
qualify as content modifications and were not bumped.

## Canonical verdict

**Apex vs. www was a real problem — the root cause.**

Not a recycled hypothesis: reproducible production measurement, taken fresh, on
44 URLs. Resolved in-repo by pointing `SITE_URL` at the origin that answers
`200`. One optional operator action remains if the apex is preferred as
canonical — both paths documented in [`canonical-host.md`](canonical-host.md).

## Tool page findings

All 11 browser tools: `200`, self-canonical, `index, follow`, full server-rendered
content, breadcrumb + FAQ + `WebApplication` schema, click depth 1, and each one
carries the required elements (working tool first in the DOM, explanation,
inputs, outputs, honest limitations, privacy statement, workflow, FAQ, related
tools, app CTA). No conversion logic was touched.

| Tool | In-content inbound (before → after) | Cluster guides |
| --- | ---: | ---: |
| `/compress-pdf` | 27 → 28 | 13 |
| `/merge-pdf` | 19 → 20 | 1 |
| `/split-pdf` | 16 → 17 | 1 |
| `/image-to-pdf` | 18 → 19 | 1 |
| `/pdf-to-images` | 13 → 14 | 2 |
| `/extract-pdf-pages` | 12 → 13 | 2 |
| `/word-to-pdf` | 12 → 13 | 0 (+ direct guide link added) |
| `/pdf-to-word` | 11 → 12 | 0 (+ direct guide link added) |
| `/rotate-pdf` | 10 → 11 | 2 |
| `/add-watermark-to-pdf` | 8 → 9 | 1 |
| `/reorder-pdf-pages` | 8 → 9 | 1 |

## Structured data findings

- `HowTo` emitted on 144 of 144 guides, including comparisons, "best X" pages and
  problem diagnoses. Now scoped to the 76 that genuinely instruct.
- `BreadcrumbList` was missing on `/guides` and `/pdf-tools` despite both
  rendering a visible breadcrumb trail. Added.
- Audited and left unchanged: no `aggregateRating`, no review markup, no
  fabricated pricing (the free tools carry a truthful `price: "0"` Offer), no
  invented author credentials (`Article.author` is the operating company).
- All schema URLs derive from `SITE_URL`, so they follow the canonical host.

## Content expansion freeze

In effect. No new cluster was published; the 250-entry PDF Encyclopedia on
`feat/pdf-knowledge-graph-phase-a` remains unmerged and unpublished, and this
branch was cut from `main` specifically to keep it that way.

Release gate for the next expansion — all four must hold:

1. Indexed pages materially above the current ~4.
2. Tier 1 substantially indexed.
3. Evidence in Search Console that Tier 2 is being crawled.
4. No unresolved systemic indexation blocker; `npm run seo:check-host` passing
   against production.
