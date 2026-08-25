# Post-deploy checklist

Repository access cannot substitute for Search Console. Once
`fix/indexation-recovery` is merged and deployed, these are the steps only the
operator can take.

## 1. Verify the fix landed (5 minutes, do this first)

```bash
npm run seo:check-host
```

Every line must read PASS. If any canonical still names a host that redirects,
stop — nothing below will help until that is true.

Then spot-check by hand:

```bash
curl -sI https://www.pdfeditconvert.top/pdf-tools | head -1        # expect 200
curl -s  https://www.pdfeditconvert.top/robots.txt                 # Sitemap: must be on the canonical host
curl -s  https://www.pdfeditconvert.top/sitemap.xml | head -5      # expect <sitemapindex>
```

## 2. Decide the canonical host, once

Read `canonical-host.md` and pick option A (keep `www`, already in effect) or
option B (make the apex canonical). Do not leave it ambiguous, and do not
change it again afterwards — repeated host changes are worse than either choice.

If staying on `www`: change the apex → www redirect from `307` to `308` in the
Vercel domain settings. It is currently temporary, which discourages Google from
consolidating signals.

## 3. Search Console

- **Use a Domain property** (`pdfeditconvert.top`), not a URL-prefix property.
  A Domain property covers apex and `www` together, so the host decision cannot
  hide data from you. Add it if it does not exist; verification is a DNS TXT
  record.
- **Remove the old sitemap submission** (`/sitemap.xml` under the previous
  property, if one exists) and **submit `https://www.pdfeditconvert.top/sitemap.xml`**
  — the index only. Do not submit the five child sitemaps individually;
  Search Console discovers and reports them from the index, which is the whole
  point of the split.
- **URL Inspection → Request Indexing** for Tier 1 only, in this order:
  `/`, `/pdf-tools`, `/guides`, `/compress-pdf`, `/merge-pdf`, `/pdf-to-word`,
  `/pdf-editor`, `/pdf-forms`. That is roughly a day's quota. Do not submit the
  whole site by hand — it does not scale and it is not what fixed the problem.
- On each inspection, confirm the report shows **User-declared canonical** and
  **Google-selected canonical** as the *same* URL. That specific agreement is
  the thing that was broken.

## 4. Run IndexNow once, after deploy

```bash
INDEXNOW_KEY=... npm run indexnow:submit -- --dry-run   # check the host first
INDEXNOW_KEY=... npm run indexnow:submit
```

This notifies Bing and Yandex. It has no effect on Google — do not read a
successful submission as progress on the actual problem.

## 5. What to watch, and for how long

Check weekly, not daily. Expect nothing in week one; Google re-crawls a
low-authority domain slowly, and the redirect conflict has to age out of its
index first.

In **Pages → Why pages aren't indexed**, these three categories should shrink.
They are the fingerprint of the canonical conflict:

- *Page with redirect*
- *Alternate page with proper canonical tag*
- *Duplicate without user-selected canonical*

Watch alongside them:

- **Sitemaps report** — per-sitemap discovered vs. indexed. This is why the
  sitemap was split; `sitemap-tools.xml` moving while `sitemap-guides.xml` does
  not is a different situation from both being stuck, and needs a different
  response.
- **Settings → Crawl stats** — total crawl requests and the average response.
  A rise here is the earliest real signal, and it precedes indexing.

Collect over four to six weeks: weekly indexed count, the three exclusion
categories above, per-sitemap coverage, and crawl requests per day. That is the
evidence base for the next decision.

## 6. Do not

- Do not publish the next content cluster until the release gate in
  `indexation-priority.md` is met. The existing 174 URLs have not yet
  demonstrated they can earn indexation.
- Do not resubmit sitemaps repeatedly. Once is enough; resubmission is not a
  nudge.
- Do not change the canonical host again after step 2.
- Do not treat any indexed-page number as a promise. Nothing in this work can
  guarantee a Google outcome or a date — it removes a specific, proven blocker
  and makes the site legible. What Google does next is Google's call.
