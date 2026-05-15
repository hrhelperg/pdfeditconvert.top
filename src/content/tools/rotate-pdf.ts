import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "Rotate PDF",
    h1: "Fix sideways PDF pages — in your browser.",
    highlight: "in your browser",
    lead: "Rotate all pages or selected pages, then download a corrected PDF — all in your browser.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to rotate a PDF",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a single PDF, or click to choose it." },
      { title: "Choose an angle", body: "Pick 90°, 180° or 270° (clockwise)." },
      { title: "Choose which pages", body: "Rotate every page, or enter page numbers (e.g. 1,3-5)." },
      { title: "Rotate and download", body: "Click Rotate. We rebuild the PDF locally with the new orientation." },
    ],
  },
  useCases: {
    heading: "When rotating is the right call",
    items: [
      { title: "Phone scans landed sideways", body: "Camera-roll scans often save in landscape — flip them in one click." },
      { title: "Mixed orientation reports", body: "Wide tables on landscape pages mixed into a portrait report? Fix them without re-scanning." },
      { title: "Passports and ID cards", body: "Ensure every page reads the same way before a government portal complains." },
      { title: "Receipts and invoices", body: "Make a stack of receipt photos readable in one direction before merging." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "Password-protected PDFs", body: "Locked files can't be rotated in-browser. Unlock first, or use the PDF Editor mobile app." },
      { title: "Per-page custom angles", body: "This tool applies one angle at a time. For mixed angles, run it twice with different page selections." },
      { title: "Annotations and form fields", body: "Rotation may visually shift overlays. The mobile app handles annotations more cleanly." },
    ],
  },
  related: [
    { label: "Merge PDF files", path: "/merge-pdf" },
    { label: "Split PDF", path: "/split-pdf" },
    { label: "Add watermark to PDF", path: "/add-watermark-to-pdf" },
    { label: "All free PDF tools", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Is my file uploaded?", a: "No. Rotation runs entirely in your browser; nothing leaves your device." },
    { q: "Can I rotate only some pages?", a: "Yes. Use the page-selection field, e.g. 1,3-5,9." },
    { q: "Does rotation reduce quality?", a: "No. Pages are kept byte-for-byte; we just set the rotation metadata." },
    { q: "Can I rotate a password-protected PDF?", a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app." },
  ],
  appCta: {
    heading: "Rotate from your phone too.",
    sub: "PDF Editor for iPhone and Android edits, rotates and signs PDFs offline.",
  },
};

export default content;
