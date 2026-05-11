import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Split PDF",
    h1: "Split a PDF into separate, sendable documents.",
    highlight: "separate",
    lead: "Pull individual pages out, separate sections by chapter, or break a huge document into smaller files — without uploading anything to a website.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "When splitting is the right move",
    paragraphs: [
      "Some PDFs are too long to be useful as one file. A 200-page lease that needs to be sent in 20-page chunks to fit attachment limits. A scanned book where you only need chapter three for an essay. A combined invoice export that needs to be split per client so each one receives only their own.",
      "Online splitting tools handle this, with the usual privacy trade-offs: your file gets uploaded, sits on someone else's server, and the output downloads back. That's fine for non-sensitive documents but inappropriate for contracts, IDs, or client lists where the per-client split is the whole point of the operation.",
      "A native split is faster, doesn't upload your file, and lets you preview thumbnails before extracting. The output is a set of clean, separate PDFs you can name and share independently. The originals never leave your device.",
    ],
  },
  features: {
    heading: "Split however the document is structured",
    items: [
      {
        icon: "Scissors",
        title: "Page-by-page split",
        body: "Break a PDF into one file per page. Useful for archiving individual receipts or invoices from a combined export.",
      },
      {
        icon: "Layers",
        title: "Custom range split",
        body: "Define ranges (pages 1-5, 6-10, 11-end) and get a separate PDF per range. Best for splitting reports or books into chapters.",
      },
      {
        icon: "Bookmark",
        title: "Split by bookmarks",
        body: "If the PDF has bookmarks, the app can split at each top-level bookmark automatically — perfect for ebook-style documents.",
      },
      {
        icon: "Eye",
        title: "Preview before splitting",
        body: "See thumbnails of every page so you know exactly what's going into each output file. Reorder or skip pages from the preview.",
      },
      {
        icon: "FileText",
        title: "Auto-naming",
        body: "Output files get sensible names based on the source and the page range — no manual renaming required.",
      },
      {
        icon: "Lock",
        title: "Inherit or remove protection",
        body: "If the source PDF is password-protected, the split outputs can inherit the password or be saved unprotected. Your choice per split.",
      },
    ],
  },
  steps: {
    heading: "How to split a PDF",
    items: [
      {
        title: "Open the PDF Editor app",
        body: "Tap the Split tile on the home screen.",
      },
      {
        title: "Pick the PDF",
        body: "Import from Files, iCloud Drive, Google Drive, or any sharing app. Unlocked or password-protected files both work.",
      },
      {
        title: "Choose split mode",
        body: "Page-by-page (one file per page), custom ranges (define them in a simple form), or split by bookmarks if the document has them.",
      },
      {
        title: "Preview the output",
        body: "Thumbnails show what each split file will contain. Adjust if needed.",
      },
      {
        title: "Tap Split and save",
        body: "The app produces a separate PDF for each output and offers to save them all to a folder, share them in bulk, or upload to a cloud drive.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Splitting on the go",
    body: "When a customer asks for just the relevant pages of a longer document, splitting on your phone is faster than digging up the original on a laptop and re-editing it. Two taps and the right pages are ready to send. The original stays untouched, which matters for compliance and audit trails.",
  },
  faq: [
    {
      q: "Will the split files have the same quality as the original?",
      a: "Yes. Splitting copies pages without re-encoding. The output is byte-identical to the original at the page level — fonts, images, layout, and embedded data all preserved.",
    },
    {
      q: "Can I split a password-protected PDF?",
      a: "Yes, once you unlock it with the password. The split outputs can inherit the same password, be saved with a different password, or be left unprotected — your choice per split job.",
    },
    {
      q: "What if I only need one page?",
      a: "Use the range-split mode with a single-page range, or use the Extract Page tool from the editing view for a one-tap export of a specific page.",
    },
    {
      q: "Can I undo a split if I get the ranges wrong?",
      a: "The original is never modified. If the split outputs are wrong, just delete them and start over with the same source file.",
    },
    {
      q: "Is there a maximum file size for splitting?",
      a: "No artificial limit. Very large PDFs (500+ pages with heavy graphics) take longer to process on older phones, but there's no cap on input file size.",
    },
  ],
  related: [
    { label: "Merge PDFs — the reverse operation", path: "/merge-pdf" },
    { label: "Compress PDFs to email easier", path: "/compress-pdf" },
    { label: "PDF Editor — full overview", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Split PDFs in seconds.",
    sub: "Free on iOS and Android. No upload, no waiting room.",
  },
};

export default content;
