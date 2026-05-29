import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-word",
  h1: "How to Convert a PDF to Word (Editable DOCX)",
  description:
    "Pull the text out of a PDF into an editable Word document in your browser. What converts cleanly, what needs cleanup, and when scans won't work.",
  updated: "2026-05-23",
  intro: [
    "Most people who want to \"convert a PDF to Word\" actually want one thing: the text back, in a document they can edit. Maybe the original .docx is long gone, maybe a colleague only sent the PDF, or maybe you need to lift a few clauses out of a contract without retyping them. That's a text-extraction job, and it's faster than it sounds.",
    "This guide uses the free PDF to Word tool, which runs entirely in your browser — your file is never uploaded. It reads the text layer out of a PDF and hands you a .docx you can open in Word, Google Docs, Pages or LibreOffice. What it does not do is rebuild the original layout pixel for pixel, and it's worth knowing that up front so the result doesn't surprise you.",
    "Below is the practical workflow, the kinds of PDFs that convert well, and the honest cases where you'll either need to clean up afterwards or reach for a different approach entirely.",
  ],
  steps: [
    {
      title: "Open the PDF to Word tool",
      body: "Go to the PDF to Word tool. Nothing to install, no account — the converter loads in your browser and processes the file on your own device.",
    },
    {
      title: "Add your PDF",
      body: "Drag the PDF onto the drop zone or click to choose it. Use a text-based PDF — one where you can select and copy text in any viewer. If text doesn't highlight when you try to select it, the file is a scan and won't convert (see the limitations below).",
    },
    {
      title: "Run the conversion",
      body: "Click Convert to Word. The tool walks the PDF's text layer and rebuilds it as a flowing .docx. For a typical multi-page document this takes a few seconds.",
    },
    {
      title: "Download the .docx",
      body: "The Word file downloads automatically. Open it in whichever editor you prefer — the text comes through as editable paragraphs you can restructure freely.",
    },
    {
      title: "Re-apply formatting",
      body: "Headings, bold, columns and spacing usually need a pass by hand. Re-mark your headings with your editor's heading styles, restore any tables, and the document is yours again.",
    },
    {
      title: "Reinsert images if you need them",
      body: "Text extraction doesn't carry images across. If the original had a logo, chart or photo you need, drop it back in from the source PDF — export the page as an image first if necessary.",
    },
  ],
  tips: [
    "Check selectability first: if you can't highlight text in the PDF, it's a scanned image and text extraction will return nothing usable.",
    "Simple, single-column documents (letters, memos, plain reports) convert the cleanest. Heavily designed PDFs with multiple columns and footnotes extract as one readable stream you'll want to tidy.",
    "Don't expect tables to survive intact — they usually arrive as runs of text. Rebuild important tables in your editor rather than fighting the extracted version.",
    "Keep the original PDF open side by side while you reformat. It's far faster to glance at the source than to guess at the intended structure.",
    "If you only need a few sentences, copy them straight from a PDF viewer instead of converting the whole file — converting is for when you need most of the document back.",
  ],
  mobileNote:
    "Working from your phone? The PDF Editor app converts and edits documents on the go, and unlike a browser it can run text recognition on scanned pages — useful when the PDF you received is really a photo of a printout rather than a digital document.",
  faq: [
    {
      q: "Will the Word file look exactly like the PDF?",
      a: "No, and no honest tool should promise that. This is a text conversion: fonts, columns, exact spacing and images are not reproduced. You get the words back as editable paragraphs and re-apply formatting in your editor.",
    },
    {
      q: "It says no text was found — what went wrong?",
      a: "Your PDF is almost certainly a scan or an image-only file with no text layer. Browser tools can't read text out of an image. The PDF Editor mobile app can run text recognition on scans, which is the route to take there.",
    },
    {
      q: "Is my document uploaded to a server?",
      a: "No. The extraction runs locally in your browser, so the PDF never leaves your device. That makes it safe to use for contracts and other sensitive files.",
    },
    {
      q: "What file format do I get back?",
      a: "A standard .docx that opens in Microsoft Word, Google Docs, Apple Pages and LibreOffice. You can re-export it to PDF later if you need to.",
    },
    {
      q: "Can I convert it back to PDF when I'm done editing?",
      a: "Yes — use the Word to PDF tool to turn your finished .docx back into a clean, shareable PDF.",
    },
  ],
  related: [
    { label: "PDF to Word — convert in your browser", path: "/pdf-to-word" },
    { label: "Word to PDF — the reverse conversion", path: "/word-to-pdf" },
    { label: "How to convert Word to PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF vs DOCX — which format to use", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
