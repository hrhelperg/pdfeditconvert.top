import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-word-to-pdf",
  h1: "How to Convert Word to PDF (Keep the Layout Locked)",
  description:
    "Turn a .docx or .txt file into a clean, shareable PDF in your browser. Why PDF is the right format to send, and what to check before exporting.",
  updated: "2026-05-23",
  intro: [
    "Sending a Word document to someone outside your own setup is a small gamble. They might open it in a different version of Word, in Google Docs, or on a phone with no office app at all — and the layout you carefully arranged can shift, reflow, or simply refuse to open. Converting to PDF removes that gamble. A PDF looks the same everywhere and can't be accidentally edited.",
    "This guide covers turning a .docx or .txt file into a PDF using the free Word to PDF tool, which runs in your browser with nothing uploaded. It's the right move whenever a document is finished and headed to someone else: a quote, a cover letter, an invoice, a signed form, a report for a client.",
    "We'll also cover the handful of things worth checking before you export, so the PDF you send is the one you meant to send.",
  ],
  steps: [
    {
      title: "Finish editing in Word first",
      body: "A PDF is a snapshot, not a working document. Make every change you intend to make in Word, Google Docs or Pages before converting — fixing typos after export means re-converting.",
    },
    {
      title: "Open the Word to PDF tool",
      body: "Go to the Word to PDF tool in your browser. There's nothing to install and no sign-up; the conversion happens on your device.",
    },
    {
      title: "Add your .docx or .txt file",
      body: "Drag the file onto the drop zone or click to select it. Plain .txt files convert too — handy for turning notes or logs into a tidy document.",
    },
    {
      title: "Convert and download",
      body: "Click Convert to PDF. The tool renders your document and the PDF downloads automatically, ready to attach or upload.",
    },
    {
      title: "Open the PDF and proofread it",
      body: "Always open the result before sending. Confirm page breaks land sensibly, headings sit where you expect, and nothing got cut off at a margin.",
    },
    {
      title: "Rename it to something descriptive",
      body: "\"Invoice-Acme-2026-05.pdf\" tells the recipient what they're looking at; \"Document1.pdf\" doesn't. A clear filename also helps it surface later in a search.",
    },
  ],
  tips: [
    "Stick to common fonts (Calibri, Arial, Times New Roman, Inter). Exotic fonts can be substituted during conversion and shift your layout.",
    "If your document relies on a specific page size, set it in Word before converting rather than expecting the tool to guess.",
    "Converting to PDF does not encrypt or lock the file against copying — it just stops casual editing. For real protection, add a password separately.",
    "Complex Word features like embedded comments, tracked changes and macros are not part of a PDF. Accept or remove tracked changes first so they don't appear in the output.",
    "For a document you'll need to edit again later, keep the .docx. The PDF is the send-out copy, not your master.",
  ],
  mobileNote:
    "Need to send a finished document from your phone? The PDF Editor app turns documents into PDFs, signs them, and shares them straight from the share sheet — useful when a contract has to go back before you're near a desk.",
  faq: [
    {
      q: "Will my formatting survive the conversion?",
      a: "For ordinary documents with common fonts, yes — that's the whole point of PDF. The one thing to watch is unusual fonts, which may be substituted. Open the PDF and check before sending.",
    },
    {
      q: "Can I convert a .txt file too?",
      a: "Yes. Plain text files convert into a clean, readable PDF, which is a quick way to make notes, logs or exported data presentable.",
    },
    {
      q: "Is my document uploaded anywhere?",
      a: "No. The conversion runs in your browser on your own device, so the file never leaves it. That matters for contracts, invoices and anything with personal details.",
    },
    {
      q: "Does converting to PDF protect the document?",
      a: "It prevents casual editing and keeps the layout fixed, but it is not encryption. If you need to stop the file being opened or copied, add a password — converting alone won't do that.",
    },
    {
      q: "Can I edit the PDF afterwards?",
      a: "PDFs are for fixes and signatures, not heavy rewriting. If you need to make big changes, edit the original .docx and re-export, or convert the PDF back to Word.",
    },
  ],
  related: [
    { label: "Word to PDF — convert in your browser", path: "/word-to-pdf" },
    { label: "PDF to Word — the reverse conversion", path: "/pdf-to-word" },
    { label: "How to convert PDF to Word", path: "/guides/how-to-convert-pdf-to-word" },
    { label: "When to use PDF instead of DOCX", path: "/guides/when-to-use-pdf-instead-of-docx" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
