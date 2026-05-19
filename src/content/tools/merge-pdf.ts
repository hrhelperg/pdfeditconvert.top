import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "Merge PDF",
    h1: "Combine PDFs into one document — in your browser.",
    highlight: "in your browser",
    lead: "Upload two or more PDF files and combine them into one document. Reorder before merging — your files stay on your device.",
  },
  privacyNote:
    "Your files are processed locally in your browser and are not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to merge PDFs",
    steps: [
      { title: "Add your PDFs", body: "Drag and drop two or more PDFs, or click to choose them from your device." },
      { title: "Reorder if needed", body: "Use the arrows on each row to put pages in the right sequence before merging." },
      { title: "Merge", body: "Click Merge PDFs. Your files are combined locally in your browser." },
      { title: "Download", body: "The combined PDF downloads automatically. Rename it after saving." },
    ],
  },
  useCases: {
    heading: "When merging is the right call",
    items: [
      { title: "Send one file, not five", body: "Customers, accountants and lawyers prefer one document over a thread of attachments." },
      { title: "Bundle quote + contract + invoice", body: "Build a single audit-friendly file from documents created in different tools." },
      { title: "Pack scanned pages", body: "Combine page-by-page scans of a passport, ID or contract into a single document a portal will accept." },
      { title: "Compose a report", body: "Stitch a cover page, a body PDF, and supporting appendices into one deliverable." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "Password-protected PDFs", body: "Locked files can't be merged in-browser. Unlock with the source app first, or use the PDF Editor mobile app." },
      { title: "Very large bundles", body: "Browsers run out of memory long before native apps do. For 50+ files or huge scans, use the PDF Editor app." },
      { title: "Bookmarks and form fields", body: "Some embedded structures (form fields, annotations) may flatten on merge. The mobile app preserves them better." },
    ],
  },
  related: [
    { label: "Split PDF — the reverse", path: "/split-pdf" },
    { label: "Rotate PDF pages", path: "/rotate-pdf" },
    { label: "Compress a PDF", path: "/compress-pdf" },
    { label: "All free PDF tools", path: "/pdf-tools" },
    { label: "Guide: how to merge PDFs", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    { q: "Are my files uploaded?", a: "No. The merge runs entirely in your browser. Your files never leave your device." },
    { q: "Is there a limit on how many PDFs I can merge?", a: "There's no hard cap, but we recommend keeping a single batch under 30 files or ~500 MB total so the browser stays responsive." },
    { q: "Can I merge password-protected PDFs?", a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app, which supports protected files." },
    { q: "Will the original formatting change?", a: "No. Each source page is preserved exactly. Only the page order and the wrapping document change." },
    { q: "Can I unmerge it later?", a: "Yes. Use the Split PDF tool to break any merged file back into pages or ranges." },
  ],
  appCta: {
    heading: "Need PDF tools on the go?",
    sub: "PDF Editor for iPhone and Android merges, signs and scans PDFs from your phone.",
  },
};

export default content;
