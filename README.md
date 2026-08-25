# pdfeditconvert.top

Premium SEO-first PDF knowledge hub and funnel for the mobile PDF Editor app.

- Live: https://www.pdfeditconvert.top
- App Store: https://apps.apple.com/app/id6747341672
- Google Play: https://play.google.com/store/apps/details?id=com.helperg.editor.documents

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Test

```bash
npm test
```

## SEO and indexation

Canonical URLs derive from a single `SITE_URL` export in `src/lib/routes.ts`,
overridable with `NEXT_PUBLIC_SITE_URL`. It must always name the origin that
answers `200` — see `docs/seo/canonical-host.md` for why, and
`docs/seo/indexation-audit-2026-08.md` for the full audit.

```bash
npm run seo:check-host   # verify the live canonical host (no build needed)
npm run build
npm run seo:check        # assert SEO invariants over the built HTML
npm run seo:crawl        # dump the internal-link graph and page inventory
```

`docs/seo/indexation-priority.md` holds the Tier 1 / Tier 2 map, backed by
`src/lib/indexation.ts` and enforced by the gates above.

## IndexNow

The site verifies IndexNow ownership via `public/<key>.txt`, served at
`<SITE_URL>/<key>.txt`. To notify IndexNow-compatible search
engines after content changes, run the submission script manually (it is
never part of build or deploy):

```bash
INDEXNOW_KEY=your-indexnow-key npm run indexnow:submit
```

Add `--dry-run` (`npm run indexnow:submit -- --dry-run`) to preview the URL
list without submitting. The script reads every non-hidden route from
`src/lib/routes.ts` and submits URLs on the canonical host only.

Environment variables:

```bash
INDEXNOW_KEY=your-indexnow-key  # set in Vercel → Environment Variables
```

See `docs/superpowers/specs/` for the design spec and `docs/superpowers/plans/` for the build plan.
