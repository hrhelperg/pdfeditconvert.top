import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "Word to PDF",
    h1: "Convert Word to PDF — in your browser.",
    highlight: "in your browser",
    lead: "Turn a .docx or .txt file into a clean, shareable PDF. Runs entirely on your device — your document is never uploaded.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to convert Word to PDF",
    steps: [
      { title: "Add your document", body: "Drag and drop a .docx or .txt file, or click to choose one." },
      { title: "Convert", body: "Click Convert to PDF. The text is read and laid into a PDF locally in your browser." },
      { title: "Download", body: "A clean A4 PDF downloads automatically." },
      { title: "Share", body: "Send a format that looks the same everywhere and can't be accidentally edited." },
    ],
  },
  useCases: {
    heading: "When this is the right tool",
    items: [
      { title: "Send an uneditable copy", body: "Share a draft as a PDF so recipients can't accidentally change it." },
      { title: "Submit an application", body: "Many portals require PDF, not .docx — convert before uploading." },
      { title: "Archive plain notes", body: "Turn .txt logs or notes into a tidy, paginated PDF for records." },
      { title: "Print-ready handoff", body: "Produce a consistent A4 PDF from a simple document." },
    ],
  },
  limitations: {
    heading: "Honest limitations",
    items: [
      { title: "Text-focused conversion", body: "We extract and re-flow the document text into a clean PDF. Original fonts, images, tables and exact .docx spacing are not reproduced." },
      { title: "No legacy .doc", body: "Old binary .doc files can't be parsed in the browser. Save as .docx first." },
      { title: "Unusual characters simplified", body: "The built-in PDF font covers Latin text; some special characters are simplified so conversion never fails." },
    ],
  },
  related: [
    { label: "PDF to Word — the reverse", path: "/pdf-to-word" },
    { label: "Image to PDF", path: "/image-to-pdf" },
    { label: "Merge PDFs", path: "/merge-pdf" },
    { label: "All free PDF tools", path: "/pdf-tools" },
    {
      label: "How to convert Word to PDF",
      path: "/guides/how-to-convert-word-to-pdf",
    },
  ],
  faq: [
    { q: "Is my file uploaded?", a: "No. The conversion runs entirely in your browser. Your document never leaves your device." },
    { q: "Will the PDF look exactly like my Word file?", a: "No — and we won't claim it does. This is a clean text-first conversion: fonts, images, tables and exact spacing from the .docx are not reproduced." },
    { q: "Which files are supported?", a: "Modern Word .docx and plain .txt. Legacy binary .doc is not supported — save it as .docx first." },
    { q: "Is there a size limit?", a: "Up to 100 MB per file, because everything is processed in your browser's memory." },
    { q: "Can I convert the PDF back to Word?", a: "Yes — use PDF to Word to extract the text back into an editable .docx." },
  ],
  appCta: {
    heading: "Need PDF tools on the go?",
    sub: "PDF Editor for iPhone and Android converts, signs and shares documents from your phone.",
  },
};

export default content;
