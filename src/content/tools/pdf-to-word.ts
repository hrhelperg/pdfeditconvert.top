import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDF to Word",
    h1: "Convert a PDF to editable Word — in your browser.",
    highlight: "in your browser",
    lead: "Pull the text out of a PDF into an editable .docx you can rework in Word, Google Docs or Pages. Honest text conversion — no fake 'perfect layout' promises.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to convert PDF to Word",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a text-based PDF, or click to choose one." },
      { title: "Convert", body: "Click Convert to Word. The selectable text is extracted locally in your browser." },
      { title: "Download", body: "A .docx file downloads automatically — open and edit it anywhere." },
      { title: "Clean up", body: "Re-apply headings and layout in your editor. The text is yours to restructure." },
    ],
  },
  useCases: {
    heading: "When this is the right tool",
    items: [
      { title: "Reuse contract wording", body: "Lift clauses from a PDF contract into an editable draft instead of retyping." },
      { title: "Repurpose a report", body: "Move the body text of a PDF report into a document you can restructure." },
      { title: "Quote and cite", body: "Extract passages for notes, summaries or citations without manual transcription." },
      { title: "Fix a PDF you no longer have the source for", body: "Recover editable text when the original .docx is long gone." },
    ],
  },
  limitations: {
    heading: "Honest limitations",
    items: [
      { title: "No layout preservation", body: "This extracts text only. Columns, tables, exact spacing, fonts and images are not reproduced — you re-apply formatting in your editor." },
      { title: "Scanned PDFs won't work", body: "Image-only / scanned PDFs have no text layer. OCR isn't available in the browser; use the PDF Editor mobile app for scans." },
      { title: "Complex documents need cleanup", body: "Heavily designed PDFs (multi-column, footnotes) extract as a readable text stream that you'll want to tidy up." },
    ],
  },
  related: [
    { label: "Word to PDF — the reverse", path: "/word-to-pdf" },
    { label: "PDF to images", path: "/pdf-to-images" },
    { label: "All free PDF tools", path: "/pdf-tools" },
    { label: "PDF vs DOCX — which to use", path: "/compare/pdf-vs-docx" },
    {
      label: "How to convert a PDF to Word",
      path: "/guides/how-to-convert-pdf-to-word",
    },
  ],
  faq: [
    { q: "Is my file uploaded?", a: "No. Text extraction runs entirely in your browser. Your PDF never leaves your device." },
    { q: "Will the Word file look exactly like the PDF?", a: "No — and we won't pretend otherwise. This is a practical text conversion. Layout, fonts, columns and images are not preserved; you re-apply formatting in your editor." },
    { q: "It says no text was found — why?", a: "Your PDF is probably a scan or image-only file with no text layer. Browser tools can't OCR it; the PDF Editor mobile app can." },
    { q: "What format do I get?", a: "A standard .docx file that opens in Microsoft Word, Google Docs, Pages and LibreOffice." },
    { q: "Can I convert it back?", a: "Yes — use Word to PDF to turn your edited .docx back into a PDF." },
  ],
  appCta: {
    heading: "Need PDF tools on the go?",
    sub: "PDF Editor for iPhone and Android converts, edits and signs documents from your phone.",
  },
};

export default content;
