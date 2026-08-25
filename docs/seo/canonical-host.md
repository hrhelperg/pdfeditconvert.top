# Canonical host — evidence and decision

**Status:** root cause of the Aug 2026 indexation incident. Fixed in-repo;
one optional operator action remains.

## What was measured

All requests below were made against production on 2026-08-25, before any
change in this branch was deployed. They are reproducible with
`node scripts/seo/check-canonical-host.mjs`.

| Request | Result |
| --- | --- |
| `GET https://pdfeditconvert.top/` | `307` → `https://www.pdfeditconvert.top/` |
| `GET https://pdfeditconvert.top/pdf-tools` | `307` → `https://www.pdfeditconvert.top/pdf-tools` |
| `GET https://www.pdfeditconvert.top/` | `200` |
| `GET https://www.pdfeditconvert.top/pdf-tools` | `200` |
| Canonical tag on every `www` page | `https://pdfeditconvert.top/...` (apex) |
| `robots.txt` (served on `www`) | `Host: https://pdfeditconvert.top`, `Sitemap: https://pdfeditconvert.top/sitemap.xml` |
| Sitemap `<loc>` values | 176 of 176 on the apex |
| IndexNow `keyLocation` | apex — the key file itself answered `307` on the apex, `200` on `www` |

Sampled across 44 URLs covering every template (homepage, tools hub, all 11
browser tools, all 8 topic hubs, guides old and new, comparisons, use cases,
legal). The pattern held for 44 of 44: apex `307`, www `200`, canonical → apex.

## Why this suppresses indexation

The site declared a canonical URL that redirects away from the page declaring
it. Googlebot's sequence was:

1. Discover `https://pdfeditconvert.top/sitemap.xml` (from `robots.txt`) — `307` to www.
2. Read 176 apex URLs from it — each `307` to www.
3. Fetch the www page — which says "my canonical is the apex URL you just got redirected away from."

There is no coherent answer to "which URL should I index?", so the expected
Search Console outcome is a pile of *Page with redirect*, *Alternate page with
proper canonical tag* and *Duplicate without user-selected canonical* — with a
handful of URLs indexed where Google guessed. That matches the observed ~4
indexed pages, sitewide and independent of content quality, which is why no
content-side explanation was needed to account for it.

The redirect is `307` (temporary) rather than `308` (permanent), which further
discourages Google from consolidating signals onto either host.

A previous audit raised the apex/www area and it was checked and reported
correct. The measurements above are fresh, reproducible, and contradict that
conclusion — which is the only basis on which this was reopened.

## What changed in the repository

`SITE_URL` now resolves to the origin that actually answers `200`:

```ts
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pdfeditconvert.top"
).replace(/\/+$/, "");
```

Everything absolute derives from it — canonical tags, OpenGraph URLs, JSON-LD,
sitemap entries, `robots.txt`, IndexNow. After deploy the site is internally
coherent with no infrastructure change at all.

## The remaining operator choice

Both resolutions are one step. Pick one; do not do both.

**A — keep www as canonical (already in effect after deploying this branch).**
Nothing more to do, except two hygiene items:

- Change the apex → www redirect from `307` to `308` in the Vercel domain
  settings, so it is a permanent signal.
- In Search Console, use a **Domain property** (`pdfeditconvert.top`) rather
  than a URL-prefix property. A Domain property covers both hosts, so no data
  is lost by the canonical host being `www`.

**B — make the apex canonical (matches the original branding intent).**
In Vercel, set the apex as the primary domain serving `200` and redirect
`www` → apex with a `308`. Then set `NEXT_PUBLIC_SITE_URL=https://pdfeditconvert.top`
in the project's environment variables and redeploy. No code change.

Either way, verify with:

```bash
npm run seo:check-host
```

It fails if the canonical host redirects, if a canonical tag disagrees with the
URL it was served at, or if `robots.txt` or the sitemaps reference the other host.
