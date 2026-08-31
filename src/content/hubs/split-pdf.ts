import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Split PDF",
    h1: "Split a PDF into separate documents.",
    highlight: "separate",
    lead: "Pull individual pages out, separate sections by chapter, or break a huge document into smaller files — without uploading anything to a website.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "When splitting is the right move",
    paragraphs: [
      "Some PDFs are too long to be useful as one file. A 200-page lease that needs to be sent in 20-page chunks to fit attachment limits. A scanned book where you only need chapter three. A combined invoice export that needs to be split per client. Each case calls for a fast, accurate split.",
      "Online tools handle this, with the usual privacy trade-offs. A native split is faster, doesn't upload your file, and lets you preview thumbnails before extracting. The output is a set of clean, separate PDFs you can name and share as needed.",
    ],
  },
  features: {
    heading: "Split however the document is structured",
    items: [
      {
        icon: "Scissors",
        title: "Page-by-page split",
        body: "Break a PDF into one file per page. Useful for archiving individual receipts.",
      },
      {
        icon: "Layers",
        title: "Range split",
        body: "Define ranges (pages 1-5, 6-10, 11-end) and get a separate PDF per range.",
      },
      {
        icon: "Bookmark",
        title: "Split by bookmarks",
        body: "If the PDF has bookmarks, the app can split at each top-level bookmark.",
      },
      {
        icon: "Eye",
        title: "Preview before splitting",
        body: "See thumbnails of every page so you know exactly what's going into each output file.",
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
        body: "Import from Files or your cloud drive.",
      },
      {
        title: "Choose split mode",
        body: "Pick page-by-page, custom ranges, or split by bookmarks.",
      },
      {
        title: "Tap Split and save",
        body: "The app produces a separate PDF for each output and offers to save them all to a folder.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Splitting on the go",
    body: "When a customer asks for just the relevant pages of a longer document, splitting on your phone is faster than digging up the original on a laptop. Two taps and the right pages are ready to send.",
  },
  faq: [
    {
      q: "Will the split files have the same quality as the original?",
      a: "Yes. Splitting copies pages without re-encoding. The output is byte-identical to the original at the page level.",
    },
    {
      q: "Can I split a password-protected PDF?",
      a: "Yes, once you unlock it. The split outputs can either inherit the password or be saved unprotected — your choice.",
    },
    {
      q: "What if I only need one page?",
      a: "Use the range split with a single-page range, or use the Extract Page tool from the editing view for a one-tap export.",
    },
  ],
  related: [
    { label: "Merge PDFs — the reverse operation", path: "/merge-pdf" },
    { label: "Compress PDFs to email easier", path: "/compress-pdf" },
    { label: "PDF Editor — full overview", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Split PDFs in seconds.",
    sub: "Free on iOS and Android.",
  },
};

export default content;
