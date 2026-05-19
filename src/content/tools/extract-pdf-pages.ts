import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "extract-pdf-pages",
  hero: {
    eyebrow: "Extract PDF pages",
    h1: "Extract pages from a PDF — in your browser.",
    highlight: "in your browser",
    lead: "Upload a PDF, type the pages or ranges you want, and download a new PDF with only those pages. Everything runs on your device.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to extract PDF pages",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a PDF, or click to choose one. We'll show its total page count." },
      { title: "Enter pages", body: "Type single pages and ranges, e.g. 1-3,5,8-10. The selected count updates as you type." },
      { title: "Extract", body: "Click Extract pages. A new PDF with only those pages is built locally." },
      { title: "Download", body: "The extracted PDF downloads automatically." },
    ],
  },
  useCases: {
    heading: "When extracting helps",
    items: [
      { title: "Share only what's needed", body: "Send a single section, chapter or signed page instead of the whole document." },
      { title: "Pull a form or receipt", body: "Grab the one page a portal asks for without exposing the rest." },
      { title: "Split out a chapter", body: "Create a focused PDF from a long report or book for study or review." },
      { title: "Build a custom packet", body: "Reorder a selection by listing pages in the order you want them." },
    ],
  },
  limitations: {
    heading: "Honest limitations",
    items: [
      { title: "Password-protected PDFs", body: "Encrypted files can't be opened in the browser. Unlock them first, or use the PDF Editor mobile app." },
      { title: "Pages outside the range", body: "Page numbers above the document length are ignored; if nothing valid is selected you'll get a clear error." },
      { title: "Very large PDFs", body: "Browsers run out of memory long before native apps. For huge files, use the PDF Editor app." },
    ],
  },
  related: [
    { label: "Split a PDF", path: "/split-pdf" },
    { label: "Reorder PDF pages", path: "/reorder-pdf-pages" },
    { label: "Compress a PDF", path: "/compress-pdf" },
    { label: "Merge PDFs", path: "/merge-pdf" },
  ],
  faq: [
    { q: "Are my files uploaded?", a: "No. Extraction runs entirely in your browser. Your file never leaves your device." },
    { q: "What page formats can I enter?", a: "Single pages and ranges separated by commas: 1-3, 2,4,6, or 1-2,5,8-10. Spaces are fine." },
    { q: "What happens with an invalid range?", a: "Invalid tokens are rejected with a clear message; out-of-range numbers are ignored. If nothing valid remains you're told why." },
    { q: "Can I repeat or reorder pages?", a: "Yes. List pages in the order you want them; repeating a page produces it more than once." },
    { q: "Does extracting change quality?", a: "No. Selected pages are copied exactly as-is — text stays selectable and nothing is recompressed." },
  ],
  appCta: {
    heading: "Need PDF tools on the go?",
    sub: "PDF Editor for iPhone and Android extracts, splits and signs PDFs from your phone.",
  },
};

export default content;
