import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "reorder-pdf-pages",
  hero: {
    eyebrow: "Reorder PDF pages",
    h1: "Reorder PDF pages — in your browser.",
    highlight: "in your browser",
    lead: "Upload a PDF, preview every page, move pages into the order you want, and download the rearranged file. Nothing is uploaded to a server.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to reorder PDF pages",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a PDF, or click to choose one from your device." },
      { title: "Review the previews", body: "Every page is rendered as a thumbnail so you can see exactly what you're moving." },
      { title: "Move pages", body: "Use the up/down arrows on each page to move it earlier or later in the document." },
      { title: "Build & download", body: "Click Reorder PDF. The rearranged PDF is built locally and downloads automatically." },
    ],
  },
  useCases: {
    heading: "When reordering helps",
    items: [
      { title: "Fix scan order", body: "Phone and scanner apps often capture pages out of sequence — put them right before sharing." },
      { title: "Move a cover or appendix", body: "Pull a cover page to the front or push supporting material to the back." },
      { title: "Reassemble a merged file", body: "After combining documents, slot pages into the exact reading order you need." },
      { title: "Prepare for print", body: "Arrange pages for booklets, handouts or double-sided printing." },
    ],
  },
  limitations: {
    heading: "Honest limitations",
    items: [
      { title: "Password-protected PDFs", body: "Encrypted files can't be opened in the browser. Unlock them first, or use the PDF Editor mobile app." },
      { title: "Very large PDFs", body: "Rendering a thumbnail for every page uses memory. Hundreds of pages may be slow or hit browser limits." },
      { title: "Thumbnails take a moment", body: "Previews are rendered page by page on your device, so big PDFs need a few seconds before you can reorder." },
    ],
  },
  related: [
    { label: "Merge PDFs", path: "/merge-pdf" },
    { label: "Split a PDF", path: "/split-pdf" },
    { label: "Rotate PDF pages", path: "/rotate-pdf" },
    { label: "Extract PDF pages", path: "/extract-pdf-pages" },
  ],
  faq: [
    { q: "Are my files uploaded?", a: "No. The PDF is rendered and rebuilt entirely in your browser. Your file never leaves your device." },
    { q: "Can I drag pages to reorder?", a: "Reordering uses clear up/down buttons on every page. This works reliably on mobile and desktop, with no tiny drag handles to fight." },
    { q: "Will page content or quality change?", a: "No. Pages are copied exactly as-is — only their order changes. Text stays selectable." },
    { q: "Why does it take a moment after upload?", a: "Each page is rendered into a preview thumbnail locally so you can see what you're moving. Larger PDFs take a little longer." },
    { q: "Can I reorder a password-protected PDF?", a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app, which supports protected files." },
  ],
  appCta: {
    heading: "Need PDF tools on the go?",
    sub: "PDF Editor for iPhone and Android reorders, merges and signs PDFs from your phone.",
  },
};

export default content;
