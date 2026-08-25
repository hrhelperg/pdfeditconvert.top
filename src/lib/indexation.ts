/**
 * Indexation priority tiers — the operational map for the Aug 2026 recovery.
 *
 * Not every URL deserves equal crawl attention. These tiers say which pages
 * the architecture should push hardest, and they are enforced by
 * tests/seo/indexationGates.test.ts: a Tier 1 or Tier 2 URL must exist in the
 * registry, be indexable, appear in a sitemap group, and carry real inbound
 * internal links. The prose rationale for each entry lives in
 * docs/seo/indexation-priority.md.
 *
 * Tiers are a linking and monitoring commitment, not a promise from Google.
 */

/**
 * Tier 1 — the pages the site must get indexed first. Entry points plus the
 * browser tools, which are the only genuinely differentiated assets here
 * (real client-side processing, nothing to upload).
 */
export const TIER_1: readonly string[] = [
  "/",
  "/pdf-tools",
  "/guides",
  // Working browser tools with the clearest standalone demand.
  "/compress-pdf",
  "/merge-pdf",
  "/split-pdf",
  "/pdf-to-word",
  "/word-to-pdf",
  "/image-to-pdf",
  "/pdf-to-images",
  // Topical hubs that own a cluster and convert to the app.
  "/pdf-editor",
  "/pdf-converter",
  "/pdf-forms",
  "/sign-pdf",
];

/**
 * Tier 2 — secondary priority: the remaining tools and hubs, the comparison
 * pages, and the guides that already earn the most internal links from the
 * rest of the library.
 */
export const TIER_2: readonly string[] = [
  // Remaining browser tools.
  "/rotate-pdf",
  "/add-watermark-to-pdf",
  "/reorder-pdf-pages",
  "/extract-pdf-pages",
  // Remaining hubs.
  "/scan-to-pdf",
  "/pdf-security",
  "/pdf-for-business",
  "/pdf-for-students",
  // Comparison pages — distinct informational intent, no tool equivalent.
  "/compare/pdf-vs-docx",
  "/compare/pdf-vs-jpg",
  "/compare/pdf-app-vs-online-pdf-tools",
  // Highest-connected guides, by measured editorial inbound links.
  "/guides/how-to-edit-pdf-on-iphone",
  "/guides/how-to-edit-pdf-on-android",
  "/guides/how-to-compress-pdf",
  "/guides/how-to-reduce-pdf-file-size-for-email",
  "/guides/how-to-merge-pdf-files",
  "/guides/how-to-sign-pdf-on-phone",
  "/guides/how-to-scan-documents-to-pdf",
  "/guides/how-to-protect-pdf-file",
  "/guides/how-to-convert-pdf-to-word",
  "/guides/how-to-convert-word-to-pdf",
  "/guides/how-to-convert-jpg-to-pdf",
  "/guides/pdf-vs-docx",
  // PDF Forms cluster — the largest and best-connected topical cluster.
  "/guides/what-is-a-pdf-form",
  "/guides/how-pdf-forms-work",
  "/guides/how-to-fill-out-a-pdf-form",
  "/guides/how-to-fill-pdf-forms-on-iphone",
  "/guides/how-to-fill-pdf-forms-on-android",
  "/guides/how-to-save-a-filled-pdf-form",
  "/guides/how-to-send-a-completed-pdf-form",
  "/guides/pdf-form-not-working",
  "/guides/editable-pdf-vs-flat-pdf",
  // Privacy / browser-processing angle — the site's strongest differentiator.
  "/guides/privacy-first-pdf-tools",
  "/guides/browser-based-pdf-tools-vs-upload-tools",
  "/guides/how-to-avoid-uploading-sensitive-documents",
  "/guides/best-free-pdf-tools",
  // Commercial-intent business workflows.
  "/guides/pdf-workflows-for-small-business",
  "/guides/how-to-share-pdfs-with-clients",
  "/guides/document-collection-workflows-with-pdf",
  "/guides/how-to-send-client-intake-forms",
];

/** Minimum in-content inbound links a tier must sustain to stay healthy. */
export const MIN_EDITORIAL_INBOUND = { tier1: 3, tier2: 2 } as const;
