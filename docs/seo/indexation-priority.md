# Indexation priority map

The operational answer to "which URLs genuinely deserve indexing, and how
clearly does the architecture say so?" — not "how many URLs can we expose".

The tier lists are code, not prose: they live in `src/lib/indexation.ts` and are
enforced by `tests/seo/indexationGates.test.ts` and `npm run seo:check`. A tiered
URL must be in the route registry, indexable, present in exactly one sitemap
group, within click depth 2 of the homepage, and carry a minimum number of
in-content inbound links (3 for Tier 1, 2 for Tier 2). Editing the list without
satisfying those conditions fails the build gates.

Inbound counts below are measured from the HTML `next build` emits, counting
only in-content links — the sitewide header and footer are excluded, because a
boilerplate link present on all 174 pages says nothing about relevance.

Tiers are a commitment about internal architecture and monitoring. They are not
a prediction about what Google will index.

## Tier 1 — 14 URLs

The pages that must be indexed first: the three entry points, the seven browser
tools with the clearest standalone demand, and the four hubs that own a content
cluster and convert to the app.

The browser tools are weighted heavily because they are the only genuinely
differentiated asset here. Everything else on the site is an article about PDFs,
of which the web has many; a tool that converts a file entirely on the user's
device, with nothing uploaded, is a different kind of page and the one worth
earning links to.

| URL | Type | Parent | In-content inbound | Depth | Example link sources |
| --- | --- | --- | ---: | ---: | --- |
| [`/`](https://www.pdfeditconvert.top) | core | — | 174 | 0 | /_not-found, /add-watermark-to-pdf, /compare/pdf-app-vs-online-pdf-tools |
| [`/pdf-tools`](https://www.pdfeditconvert.top/pdf-tools) | tool | / | 41 | 1 | /add-watermark-to-pdf, /compress-pdf, /extract-pdf-pages |
| [`/guides`](https://www.pdfeditconvert.top/guides) | guide | / | 154 | 1 | /guides/are-online-pdf-tools-safe, /guides/best-format-for-sharing-documents, /guides/best-free-pdf-tools |
| [`/compress-pdf`](https://www.pdfeditconvert.top/compress-pdf) | tool | / | 28 | 1 | /_not-found, /extract-pdf-pages, /guides/best-pdf-compression-settings |
| [`/merge-pdf`](https://www.pdfeditconvert.top/merge-pdf) | tool | / | 20 | 1 | /_not-found, /add-watermark-to-pdf, /compress-pdf |
| [`/split-pdf`](https://www.pdfeditconvert.top/split-pdf) | tool | / | 17 | 1 | /add-watermark-to-pdf, /compress-pdf, /extract-pdf-pages |
| [`/pdf-to-word`](https://www.pdfeditconvert.top/pdf-to-word) | tool | / | 11 | 1 | /guides/editable-pdf-vs-flat-pdf, /guides/how-to-convert-pdf-to-word, /guides/how-to-convert-word-to-pdf |
| [`/word-to-pdf`](https://www.pdfeditconvert.top/word-to-pdf) | tool | / | 12 | 1 | /guides/best-pdf-tools-for-office-documents, /guides/how-to-convert-pdf-to-word, /guides/how-to-convert-word-to-pdf |
| [`/image-to-pdf`](https://www.pdfeditconvert.top/image-to-pdf) | tool | / | 19 | 1 | /guides/how-to-convert-jpg-to-pdf, /guides/how-to-convert-lecture-notes-to-pdf, /guides/how-to-convert-pdf-to-jpg |
| [`/pdf-to-images`](https://www.pdfeditconvert.top/pdf-to-images) | tool | / | 14 | 1 | /guides/how-to-convert-pdf-to-jpg, /guides/how-to-convert-pdf-to-png, /guides/how-to-convert-png-to-pdf |
| [`/pdf-editor`](https://www.pdfeditconvert.top/pdf-editor) | hub | / | 23 | 1 | /_not-found, /compare/pdf-app-vs-online-pdf-tools, /compare/pdf-vs-docx |
| [`/pdf-converter`](https://www.pdfeditconvert.top/pdf-converter) | hub | / | 22 | 1 | /compare/pdf-vs-docx, /compare/pdf-vs-jpg, /guides/how-to-compress-pdf |
| [`/pdf-forms`](https://www.pdfeditconvert.top/pdf-forms) | hub | / | 39 | 1 | /guides/best-pdf-form-app-for-android, /guides/best-pdf-form-app-for-iphone, /guides/can-you-edit-a-pdf-form |
| [`/sign-pdf`](https://www.pdfeditconvert.top/sign-pdf) | hub | / | 18 | 1 | /_not-found, /guides/best-pdf-tools-for-remote-work, /guides/how-to-edit-class-documents-as-pdf |
## Tier 2 — 40 URLs

Secondary priority: the remaining tools and hubs, the three comparison pages,
and the guides that already earn the most internal links from the rest of the
library. Selection is by measured connectivity plus commercial or
differentiating intent (the PDF Forms cluster, the privacy/browser-processing
angle, business workflows), not by keyword volume.

| URL | Type | Parent | In-content inbound | Depth | Example link sources |
| --- | --- | --- | ---: | ---: | --- |
| [`/rotate-pdf`](https://www.pdfeditconvert.top/rotate-pdf) | tool | / | 11 | 1 | /add-watermark-to-pdf, /guides/how-to-fix-pdf-printing-issues, /guides/how-to-fix-sideways-pdf-pages |
| [`/add-watermark-to-pdf`](https://www.pdfeditconvert.top/add-watermark-to-pdf) | tool | / | 9 | 1 | /guides/best-pdf-workflow-for-teams, /guides/how-to-add-watermark-to-pdf, /guides/how-to-manage-invoices-as-pdf |
| [`/reorder-pdf-pages`](https://www.pdfeditconvert.top/reorder-pdf-pages) | tool | / | 9 | 1 | /extract-pdf-pages, /guides/how-to-reorder-pdf-pages, /guides/how-to-rotate-pdf-pages |
| [`/extract-pdf-pages`](https://www.pdfeditconvert.top/extract-pdf-pages) | tool | / | 13 | 1 | /compress-pdf, /guides/how-to-extract-pages-from-pdf, /guides/how-to-fix-pdf-printing-issues |
| [`/scan-to-pdf`](https://www.pdfeditconvert.top/scan-to-pdf) | hub | / | 17 | 1 | /compare/pdf-vs-jpg, /guides/best-pdf-app-for-students, /guides/how-to-convert-photos-to-pdf-on-android |
| [`/pdf-security`](https://www.pdfeditconvert.top/pdf-security) | hub | / | 15 | 1 | /compare/pdf-app-vs-online-pdf-tools, /guides/best-pdf-app-for-business, /guides/best-private-pdf-tools |
| [`/pdf-for-business`](https://www.pdfeditconvert.top/pdf-for-business) | hub | / | 24 | 1 | /compare/pdf-app-vs-online-pdf-tools, /guides/best-pdf-app-for-business, /guides/best-pdf-tools-for-office-documents |
| [`/pdf-for-students`](https://www.pdfeditconvert.top/pdf-for-students) | hub | / | 9 | 1 | /guides/best-pdf-app-for-students, /guides/best-pdf-tools-for-students, /guides/how-to-create-digital-study-pdfs |
| [`/compare/pdf-vs-docx`](https://www.pdfeditconvert.top/compare/pdf-vs-docx) | compare | / | 3 | 1 | /guides/pdf-vs-docx, /guides/when-to-use-pdf-instead-of-docx, /pdf-to-word |
| [`/compare/pdf-vs-jpg`](https://www.pdfeditconvert.top/compare/pdf-vs-jpg) | compare | / | 2 | 2 | /guides/pdf-vs-jpg-for-documents, /pdf-converter |
| [`/compare/pdf-app-vs-online-pdf-tools`](https://www.pdfeditconvert.top/compare/pdf-app-vs-online-pdf-tools) | compare | / | 4 | 2 | /guides/browser-based-pdf-tools-vs-upload-tools, /guides/how-to-avoid-uploading-sensitive-documents, /guides/privacy-first-pdf-tools |
| [`/guides/how-to-edit-pdf-on-iphone`](https://www.pdfeditconvert.top/guides/how-to-edit-pdf-on-iphone) | guide | /pdf-editor | 11 | 1 | /guides/how-to-annotate-pdf-on-mobile, /guides/how-to-edit-pdf-on-android, /guides/how-to-fill-pdf-forms-on-phone |
| [`/guides/how-to-edit-pdf-on-android`](https://www.pdfeditconvert.top/guides/how-to-edit-pdf-on-android) | guide | /pdf-editor | 7 | 1 | /guides/how-to-edit-pdf-on-iphone, /guides/how-to-make-pdf-smaller-on-android, /guides/how-to-sign-pdf-on-android |
| [`/guides/how-to-compress-pdf`](https://www.pdfeditconvert.top/guides/how-to-compress-pdf) | guide | /compress-pdf | 7 | 1 | /compress-pdf, /guides/compress-pdf-without-losing-too-much-quality, /guides/how-to-compress-pdf-online |
| [`/guides/how-to-reduce-pdf-file-size-for-email`](https://www.pdfeditconvert.top/guides/how-to-reduce-pdf-file-size-for-email) | guide | /compress-pdf | 9 | 1 | /compress-pdf, /guides/how-to-compress-pdf-online, /guides/how-to-fix-pdf-upload-errors |
| [`/guides/how-to-merge-pdf-files`](https://www.pdfeditconvert.top/guides/how-to-merge-pdf-files) | guide | /merge-pdf | 7 | 1 | /guides/best-pdf-workflow-for-freelancers, /guides/how-to-compress-pdf, /guides/how-to-manage-pdf-application-forms |
| [`/guides/how-to-sign-pdf-on-phone`](https://www.pdfeditconvert.top/guides/how-to-sign-pdf-on-phone) | guide | /sign-pdf | 8 | 1 | /guides/best-pdf-workflow-for-freelancers, /guides/how-to-fill-pdf-forms-on-phone, /guides/how-to-sign-pdf-on-android |
| [`/guides/how-to-scan-documents-to-pdf`](https://www.pdfeditconvert.top/guides/how-to-scan-documents-to-pdf) | guide | /scan-to-pdf | 9 | 2 | /guides/document-collection-workflows-with-pdf, /guides/how-to-compress-scanned-pdf, /guides/how-to-convert-scanned-documents-to-pdf |
| [`/guides/how-to-protect-pdf-file`](https://www.pdfeditconvert.top/guides/how-to-protect-pdf-file) | guide | /pdf-security | 7 | 2 | /guides/how-to-add-watermark-to-pdf, /guides/how-to-protect-sensitive-pdf-files, /guides/how-to-sign-pdf-on-phone |
| [`/guides/how-to-convert-pdf-to-word`](https://www.pdfeditconvert.top/guides/how-to-convert-pdf-to-word) | guide | /pdf-converter | 3 | 1 | /guides/how-to-convert-word-to-pdf, /guides, /pdf-converter |
| [`/guides/how-to-convert-word-to-pdf`](https://www.pdfeditconvert.top/guides/how-to-convert-word-to-pdf) | guide | /pdf-converter | 4 | 2 | /guides/how-to-convert-pdf-to-word, /guides/when-to-use-pdf-instead-of-docx, /guides |
| [`/guides/how-to-convert-jpg-to-pdf`](https://www.pdfeditconvert.top/guides/how-to-convert-jpg-to-pdf) | guide | /pdf-converter | 8 | 2 | /guides/how-to-convert-photos-to-pdf-on-android, /guides/how-to-convert-photos-to-pdf-on-iphone, /guides/how-to-convert-png-to-pdf |
| [`/guides/pdf-vs-docx`](https://www.pdfeditconvert.top/guides/pdf-vs-docx) | guide | /pdf-converter | 9 | 2 | /compare/pdf-vs-docx, /guides/best-format-for-sharing-documents, /guides/how-to-convert-pdf-to-word |
| [`/guides/what-is-a-pdf-form`](https://www.pdfeditconvert.top/guides/what-is-a-pdf-form) | guide | /pdf-forms | 8 | 2 | /guides/can-you-edit-a-pdf-form, /guides/editable-pdf-vs-fillable-pdf, /guides/how-pdf-forms-work |
| [`/guides/how-pdf-forms-work`](https://www.pdfeditconvert.top/guides/how-pdf-forms-work) | guide | /pdf-forms | 7 | 2 | /guides/how-to-create-a-fillable-pdf, /guides/how-to-save-a-filled-pdf-form, /guides/pdf-form-compatibility-problems |
| [`/guides/how-to-fill-out-a-pdf-form`](https://www.pdfeditconvert.top/guides/how-to-fill-out-a-pdf-form) | guide | /pdf-forms | 9 | 1 | /guides/how-to-fill-pdf-forms-on-android, /guides/how-to-fill-pdf-forms-on-iphone, /guides/how-to-save-a-filled-pdf-form |
| [`/guides/how-to-fill-pdf-forms-on-iphone`](https://www.pdfeditconvert.top/guides/how-to-fill-pdf-forms-on-iphone) | guide | /pdf-forms | 7 | 2 | /guides/best-pdf-form-app-for-iphone, /guides/how-to-fill-government-pdf-forms-on-phone, /guides/how-to-fill-out-a-pdf-form |
| [`/guides/how-to-fill-pdf-forms-on-android`](https://www.pdfeditconvert.top/guides/how-to-fill-pdf-forms-on-android) | guide | /pdf-forms | 7 | 2 | /guides/best-pdf-form-app-for-android, /guides/how-to-fill-government-pdf-forms-on-phone, /guides/how-to-fill-out-a-pdf-form |
| [`/guides/how-to-save-a-filled-pdf-form`](https://www.pdfeditconvert.top/guides/how-to-save-a-filled-pdf-form) | guide | /pdf-forms | 8 | 2 | /guides/how-pdf-forms-work, /guides/how-to-fill-out-a-pdf-form, /guides/how-to-print-a-filled-pdf-form |
| [`/guides/how-to-send-a-completed-pdf-form`](https://www.pdfeditconvert.top/guides/how-to-send-a-completed-pdf-form) | guide | /pdf-forms | 8 | 2 | /guides/how-to-fill-government-pdf-forms-on-phone, /guides/how-to-print-a-filled-pdf-form, /guides/how-to-save-a-filled-pdf-form |
| [`/guides/pdf-form-not-working`](https://www.pdfeditconvert.top/guides/pdf-form-not-working) | guide | /pdf-forms | 10 | 2 | /guides/fix-pdf-form-errors, /guides/pdf-form-compatibility-problems, /guides/pdf-form-fields-missing |
| [`/guides/editable-pdf-vs-flat-pdf`](https://www.pdfeditconvert.top/guides/editable-pdf-vs-flat-pdf) | guide | /pdf-editor | 6 | 2 | /guides/editable-pdf-vs-fillable-pdf, /guides/what-is-a-pdf-form, /guides/when-to-use-scanned-pdf |
| [`/guides/privacy-first-pdf-tools`](https://www.pdfeditconvert.top/guides/privacy-first-pdf-tools) | guide | /pdf-security | 9 | 2 | /guides/are-online-pdf-tools-safe, /guides/best-private-pdf-tools, /guides/browser-based-document-processing-benefits |
| [`/guides/browser-based-pdf-tools-vs-upload-tools`](https://www.pdfeditconvert.top/guides/browser-based-pdf-tools-vs-upload-tools) | guide | /pdf-tools | 7 | 2 | /guides/are-online-pdf-tools-safe, /guides/browser-based-document-processing-benefits, /guides/do-online-pdf-tools-store-files |
| [`/guides/how-to-avoid-uploading-sensitive-documents`](https://www.pdfeditconvert.top/guides/how-to-avoid-uploading-sensitive-documents) | guide | /pdf-security | 6 | 2 | /guides/best-pdf-tools-without-upload, /guides/do-online-pdf-tools-store-files, /guides/how-to-protect-sensitive-pdf-files |
| [`/guides/best-free-pdf-tools`](https://www.pdfeditconvert.top/guides/best-free-pdf-tools) | guide | /pdf-tools | 6 | 2 | /guides/best-pdf-tools-without-upload, /guides/free-browser-based-pdf-tools, /guides/free-pdf-tools-for-android |
| [`/guides/pdf-workflows-for-small-business`](https://www.pdfeditconvert.top/guides/pdf-workflows-for-small-business) | guide | /pdf-for-business | 9 | 2 | /guides/best-pdf-app-for-business, /guides/best-pdf-workflow-for-teams, /guides/how-to-manage-invoices-as-pdf |
| [`/guides/how-to-share-pdfs-with-clients`](https://www.pdfeditconvert.top/guides/how-to-share-pdfs-with-clients) | guide | /pdf-for-business | 8 | 2 | /guides/best-pdf-tools-for-remote-work, /guides/how-to-create-client-ready-pdf-files, /guides/how-to-prepare-pdf-for-business-use |
| [`/guides/document-collection-workflows-with-pdf`](https://www.pdfeditconvert.top/guides/document-collection-workflows-with-pdf) | guide | /pdf-forms | 8 | 2 | /guides/how-to-manage-pdf-application-forms, /guides/how-to-send-client-intake-forms, /guides/how-to-share-a-pdf-form |
| [`/guides/how-to-send-client-intake-forms`](https://www.pdfeditconvert.top/guides/how-to-send-client-intake-forms) | guide | /pdf-forms | 8 | 2 | /guides/document-collection-workflows-with-pdf, /guides/how-to-manage-pdf-application-forms, /guides/how-to-share-a-pdf-form |
## Tier 3 — 117 URLs

The remaining 115 guides plus `/use-cases/freelancers` and
`/use-cases/remote-work`. Genuine supporting long-tail content: each hangs off a
parent hub, each is now listed on that hub's cluster section, and none is
orphaned. They are expected to be crawled and indexed more slowly than Tier 1
and 2, and that is the intended order.

Similarity analysis found no cannibalisation among them — the highest TF-IDF
cosine between any two pages on the site is 0.362 and no cluster exceeds 0.40 —
so there is no case for pruning this tier. See `indexation-audit-2026-08.md`.

## Tier 4 — 3 URLs, indexable but not promoted

`/privacy-policy`, `/terms`, `/contact`. Footer-linked utility pages with no
in-content inbound links, which is correct for what they are. They stay
indexable: for a site whose entire pitch is "your file never leaves your
device", a reachable privacy policy and a real company address are part of the
argument, not filler.

## Review triggers

Re-derive this map when any of the following happens:

- Tier 1 is substantially indexed and Tier 2 is being crawled — the gate for the
  next content expansion.
- A tool page is added, or an existing tool's behaviour changes materially.
- A guide cluster grows past roughly 40 members, at which point the cluster
  probably needs its own hub rather than a longer list.
- `npm run seo:check` reports a tiered URL falling below its inbound-link floor.
