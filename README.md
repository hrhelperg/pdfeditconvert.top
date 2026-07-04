# pdfeditconvert.top

Premium SEO-first PDF knowledge hub and funnel for the mobile PDF Editor app.

- Live: https://pdfeditconvert.top
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

## IndexNow

The site verifies IndexNow ownership via `public/<key>.txt`, served at
`https://pdfeditconvert.top/<key>.txt`. To notify IndexNow-compatible search
engines after content changes, run the submission script manually (it is
never part of build or deploy):

```bash
INDEXNOW_KEY=your-indexnow-key npm run indexnow:submit
```

Add `--dry-run` (`npm run indexnow:submit -- --dry-run`) to preview the URL
list without submitting. The script reads every non-hidden route from
`src/lib/routes.ts` and submits canonical apex URLs only.

Environment variables:

```bash
INDEXNOW_KEY=your-indexnow-key  # set in Vercel → Environment Variables
```

See `docs/superpowers/specs/` for the design spec and `docs/superpowers/plans/` for the build plan.
