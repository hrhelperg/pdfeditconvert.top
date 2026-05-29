import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-formatting-problems",
  h1: "How to Fix PDF Formatting Issues (Wrapping, Margins, Spacing)",
  description:
    "When a PDF's layout looks broken — text reflowing, margins off, spacing mangled — the fix usually lives in the source document, not the PDF. The cleanest workflow to get a good-looking export.",
  updated: "2026-05-29",
  intro: [
    "Bad PDF formatting almost always traces back to the moment of export. The PDF itself doesn't reflow anything — it locks the page exactly as it was at save time. So if the spacing's wrong, the margins are off, or the table broke across pages, the source file was already producing that result.",
    "The fix, almost always, is to go back to the source — Word, Pages, Google Docs, design tool — adjust the layout, and re-export. That's frustrating when the source isn't yours, but it's the cleanest path. The alternatives — converting to Word, editing the PDF directly, or 'fixing' with a different viewer — each lose something the original had.",
    "This guide walks the common formatting symptoms and the realistic fix for each, including the workflows that produce clean PDFs the first time.",
  ],
  steps: [
    {
      title: "Identify whether it's a content or a render issue",
      body: "Open the PDF in two different viewers. If both show the same broken layout, the file is the source of the problem. If one renders correctly, you have a viewer issue, not a formatting issue.",
    },
    {
      title: "Fix layout in the source document, not the PDF",
      body: "Open the Word, Pages or Docs file, fix the margins, spacing or table, then re-export to PDF. The fixed source produces a fixed PDF directly. Editing a PDF to patch layout fights the format.",
    },
    {
      title: "Re-export with explicit paper size",
      body: "Auto-fit settings often produce surprises. Set paper size (Letter or A4), margins (1 inch or 25 mm) and orientation explicitly in the source application before exporting.",
    },
    {
      title: "Convert to Word only for heavy text rewrites",
      body: "PDF to Word in your browser pulls the text out for re-editing. The conversion loses some layout — accept that as the trade for getting text editing back. After cleanup, re-export to PDF for sharing.",
    },
    {
      title: "Use page-level tools for structural fixes",
      body: "If only some pages are wrong — a misordered scan, a duplicated cover, a sideways insert — Reorder PDF Pages, Extract PDF Pages and Rotate PDF fix the structure without touching text formatting.",
    },
    {
      title: "Re-export to PDF before sharing",
      body: "Once layout is fixed in the source, export fresh rather than re-saving an existing PDF. The cleanest export comes directly from the application that made the document.",
    },
  ],
  tips: [
    "Print preview in Word or Pages shows the same page break behavior the PDF will. Fix bad breaks before exporting, not after.",
    "Tables that split awkwardly are a paragraph-formatting issue in the source, not a PDF problem. Use 'keep with next' to bind a header row to its content.",
    "Don't open a PDF in Word for editing — Word converts it, often badly. Use the original source if you have it, or PDF to Word only when you don't.",
    "Pasted content from the web often brings background formatting. Strip it before exporting (paste-as-plain-text) to avoid surprise borders and colors in the PDF.",
    "If you only have the PDF and can't go back to the source, accept that layout cleanup will be partial. Prioritize the changes the reader will notice first.",
  ],
  mobileNote:
    "Mobile PDF formatting problems often come from documents made on desktop and exported with the wrong target paper. The PDF Editor app lets you rotate, reorder and crop pages on the phone — useful for cleaning up structural issues even when you can't fix the source.",
  faq: [
    {
      q: "Why does my PDF look different from the Word version?",
      a: "Usually because of fonts, paper size, or print-area settings during export. Re-exporting with explicit paper size and embedded fonts produces a PDF that matches the source.",
    },
    {
      q: "Can I edit text in a PDF to fix spacing?",
      a: "You can edit individual characters and words, but reflowing paragraphs is hard because PDFs treat text as positioned blocks. Fix in the source if possible.",
    },
    {
      q: "Why does my converted PDF-to-Word look broken?",
      a: "PDFs encode layout, not flow. Conversion turns them back into flow but the structural cues are gone. Expect to do real cleanup on a converted file.",
    },
    {
      q: "Why do my tables split awkwardly across pages?",
      a: "Almost always a paragraph-formatting issue in the source. 'Keep with next' and 'don't break across pages' settings in Word fix most splits before export.",
    },
    {
      q: "Does compressing affect formatting?",
      a: "No. Compression touches images, not layout. A compressed PDF has the same formatting as the original — just smaller embedded images.",
    },
  ],
  related: [
    { label: "PDF to Word — convert for heavy text fixes", path: "/pdf-to-word" },
    { label: "Word to PDF — re-export cleanly", path: "/word-to-pdf" },
    { label: "How to fix PDF font issues", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "How to fix PDF printing problems", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "PDF Converter — Word, JPG, PNG and back", path: "/pdf-converter" },
};

export default content;
