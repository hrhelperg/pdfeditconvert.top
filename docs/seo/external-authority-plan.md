# External authority plan

Repository changes cannot finish this job. The canonical/redirect conflict was
blocking indexation; removing it lets Google index the site, but a
one-month-old domain with essentially no referring domains will still be
crawled slowly and ranked cautiously. Crawl budget follows perceived
importance, and perceived importance comes substantially from off-site signals.

Nothing in this document is a list of links that exist. It is a list of places
where a submission is genuinely possible and appropriate, for someone to
actually go and do. Do not treat any entry as acquired until it is live.

## Targets, in priority order

Concentrate on a small set of URLs rather than spreading links across 174 pages.

1. `/` — the domain-level signal.
2. `/pdf-tools` — the single page that best explains what is on offer.
3. Three to five browser tools, chosen because they are individually
   describable and independently useful: `/merge-pdf`, `/compress-pdf`,
   `/split-pdf`, `/pdf-to-word`, `/image-to-pdf`.
4. Two or three reference assets worth citing on their own terms — see
   "Assets worth linking to" below.

## Discovery links versus authority links

These do different jobs and should not be conflated when reporting progress.

**Discovery links** get a URL crawled. They are cheap, mostly `nofollow` or
low-authority, and their value is that a crawler follows them once. Enough to
break a cold-start, not enough to rank.

**Authority links** are editorial: someone chose to reference the page because
it was useful. They are slow, cannot be requested at volume, and are what
actually moves rankings. Expect single digits in the first quarter.

## Discovery — realistic, do these first

| Channel | What it is | Notes |
| --- | --- | --- |
| Bing Webmaster Tools | Site verification and sitemap submission | Also makes IndexNow submissions meaningful; the integration already exists (`npm run indexnow:submit`) |
| App Store / Play listings | The apps already exist and can carry a website URL | Confirm both listings point at the canonical host |
| Product Hunt | One launch for the browser tool suite | A launch is a single event; plan it, do not repeat it |
| AlternativeTo | Listing as an alternative to established PDF tools | Requires an honest feature description; the no-upload angle is the differentiator |
| Slant / SaaSHub / similar directories | Software directory listings | Value is discovery, not authority — most are `nofollow` |
| GitHub | If any part of the tooling is open-sourced, its README | Only if something is genuinely published; do not manufacture a repo for a link |

## Authority — slower, needs real substance

- **Privacy and security communities.** The client-side processing claim is
  verifiable — a reader can open devtools and confirm no file leaves the
  browser. That is a concrete, checkable claim, which is the kind of thing
  privacy-focused writers and forums link to. It is the site's strongest
  editorial hook and is currently underused off-site.
- **Web-developer audiences.** "PDF manipulation entirely in the browser" is
  technically interesting (`pdf-lib`, `pdf.js`, WebAssembly constraints). A
  genuine write-up of what does and does not work client-side — including the
  honest limits already documented on the tool pages — is linkable material.
  The existing `/pdf-to-word` page already refuses to promise layout fidelity;
  that honesty is the story.
- **Small-business and freelancer publications.** The forms and client-workflow
  clusters map onto real editorial topics (sending intake forms, collecting
  signed documents) for outlets that cover freelancing and small operations.
- **University and student resources.** Study-workflow guides are a plausible
  fit for student-services resource pages, which link out routinely.
- **Journalist and researcher tooling roundups.** Handling sensitive documents
  without uploading them is a real, recurring need in that community.

## Assets worth linking to

The site currently has no page built to be cited rather than found. That is the
gap. Two candidates, both derivable from work already done and neither
requiring a new content cluster:

1. **A tested comparison of what browser-based PDF processing can and cannot
   do.** Which operations are lossless, where text extraction fails, what
   happens to scanned documents, actual size and speed limits per operation.
   This is testable, currently unpublished anywhere authoritative, and is the
   kind of reference other writers link to instead of re-testing.
2. **A plain account of what "no upload" means and how to verify it.** How to
   check in devtools that no request carries the file, what a service that does
   upload looks like on the wire, and what the trade-offs of each are — written
   fairly, including where server-side processing is legitimately better.

Both are single pages. Neither counts as content expansion under the freeze:
the freeze is on new keyword-permutation clusters, not on producing one asset
whose purpose is to be cited.

## Explicitly out of scope

Link farms, paid link placements, mass guest-post networks, PBNs, fabricated
profiles, comment spam, and reciprocal-link schemes. Beyond the policy risk,
they do not solve this site's actual problem, which is that nobody has yet had
a reason to reference it.

## What to measure

Track referring **domains**, not backlinks — a hundred links from one directory
is one signal. Review monthly:

- referring domains to `/`, `/pdf-tools`, and the tool pages, separately
- whether Googlebot crawl rate on Tier 1 rises after the first links land
  (Search Console → Settings → Crawl stats)
- which acquired links produce actual referral sessions, since a link nobody
  clicks is usually a link nobody reads

Set no target number. A realistic first quarter is a handful of directory
listings, one or two community mentions, and possibly zero editorial links —
and that would still be normal for a domain this young.
