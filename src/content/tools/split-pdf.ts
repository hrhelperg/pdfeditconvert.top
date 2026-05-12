import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Split PDF",
    h1: "Extract pages from a PDF — privately, in your browser.",
    highlight: "in your browser",
    lead: "Pick any pages or ranges (e.g. 1-3,5,8-10) and download them as a new PDF. Your file never leaves your device.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to split a PDF",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a single PDF, or click to choose it." },
      { title: "Enter page ranges", body: "Type pages and ranges separated by commas. Example: 1-3,5,8-10." },
      { title: "Split", body: "Click Extract Pages. We build a new PDF with just those pages, locally." },
      { title: "Download", body: "The new PDF downloads automatically. Rename it after saving." },
    ],
  },
  useCases: {
    heading: "When splitting is the right call",
    items: [
      { title: "Send just the relevant pages", body: "Share only the contract clause that matters, not the entire document." },
      { title: "Separate a scanned batch", body: "Break a multi-document scan back into individual files." },
      { title: "Pull a single page from a report", body: "Extract one chart or table without exposing the rest of the file." },
      { title: "Build a cleaner attachment", body: "Trim cover pages, blank pages or appendices before emailing." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "Password-protected PDFs", body: "Locked files can't be split in-browser. Unlock first or use the PDF Editor app." },
      { title: "Very large files", body: "Browsers may run out of memory on documents over a few hundred megabytes." },
      { title: "No per-range output", body: "This tool exports one combined PDF containing the chosen pages. For multiple output files, run it twice." },
    ],
  },
  related: [
    { label: "Merge PDF — the reverse", path: "/merge-pdf" },
    { label: "Rotate PDF pages", path: "/rotate-pdf" },
    { label: "PDF to images", path: "/pdf-to-images" },
    { label: "All free PDF tools", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Are my files uploaded?", a: "No. Splitting runs entirely in your browser; your file never leaves your device." },
    { q: "What's the page-range syntax?", a: "Comma-separated pages and ranges. Example: 1-3,5,8-10 keeps pages 1, 2, 3, 5, 8, 9 and 10." },
    { q: "Can I split a password-protected PDF?", a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app." },
    { q: "Will the output keep original quality?", a: "Yes — pages are copied byte-for-byte. No re-rendering, no quality loss." },
  ],
  appCta: {
    heading: "Splitting on the go?",
    sub: "PDF Editor for iPhone and Android splits and merges PDFs from your phone.",
  },
};

export default content;
