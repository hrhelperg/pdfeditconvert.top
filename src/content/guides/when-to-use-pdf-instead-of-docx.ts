import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-pdf-instead-of-docx",
  h1: "When to Use PDF Instead of DOCX (A Decision Checklist)",
  description:
    "You have a Word document — should you send it as PDF instead? A quick checklist of the moments PDF is the right call, and how to convert.",
  updated: "2026-05-23",
  intro: [
    "You've finished a document in Word, and now there's a small decision: send the .docx as-is, or convert it to PDF first? It's easy to default to whatever's in front of you, but the wrong choice has consequences — a layout that breaks on someone else's screen, a price a client quietly edits, a draft mistaken for final. This guide is about recognising the moments when PDF is clearly the better send.",
    "Rather than a broad format comparison, this is a focused decision checklist: a set of signals that mean \"convert to PDF before sending.\" When none of them apply, your DOCX is fine as it is. When one does, the free Word to PDF tool converts it on your device in seconds.",
    "Run the checklist a few times and it becomes instinct — you'll know at a glance whether a document should leave as Word or as PDF.",
  ],
  steps: [
    {
      title: "Is the document final?",
      body: "If it's done and not meant to be edited — a signed letter, a finished report, a submission — send PDF. DOCX invites changes you don't want once a document is finished.",
    },
    {
      title: "Does the layout need to stay exactly as designed?",
      body: "Brochures, CVs, anything where spacing and fonts matter should go as PDF. DOCX can reflow on a different Word version or in Google Docs, breaking your careful layout.",
    },
    {
      title: "Could the recipient edit it to your disadvantage?",
      body: "Quotes, invoices, contracts — anywhere a number or term could be altered — belong in PDF. It stops casual edits and keeps a fixed record of what you sent.",
    },
    {
      title: "Might they not have Word?",
      body: "PDF opens natively on every phone, tablet and computer. If you're unsure the recipient has an office app, PDF guarantees they can read it without installing anything.",
    },
    {
      title: "Is it going into an archive?",
      body: "For long-term storage, PDF renders the same in ten years; DOCX can drift across Word versions. Archive as PDF, keep the DOCX as your editable master.",
    },
    {
      title: "If any answer is yes, convert it",
      body: "Open the Word to PDF tool, add your .docx, and download the PDF — on your device, nothing uploaded. Keep the original Word file for future edits.",
    },
  ],
  tips: [
    "Keep DOCX when the document is still being worked on, needs comments or track changes, or the recipient is meant to edit it. PDF is for finished, fixed documents.",
    "Always hold on to the editable .docx. The PDF is the send-out copy; the Word file is your master for the next revision.",
    "Accept or remove tracked changes before converting, or they may appear in the PDF for everyone to see.",
    "Converting to PDF locks the layout but doesn't encrypt the file. If it needs real protection, add a password as a separate step.",
    "If a recipient asks for an 'editable PDF', they usually mean DOCX — check before assuming, then send the right one.",
  ],
  mobileNote:
    "Deciding to send PDF often happens away from your desk, when a finished document needs to go out now. The PDF Editor app converts and sends from your phone, so you can lock a document and email it without waiting to get back to a computer.",
  faq: [
    {
      q: "When should I send a PDF instead of a Word file?",
      a: "When the document is final, the layout must stay fixed, the recipient could edit it to your disadvantage, they might not have Word, or it's going into an archive. Any of those means convert to PDF.",
    },
    {
      q: "When is it better to keep DOCX?",
      a: "When the document is still being written, needs comments or track changes, or the recipient is supposed to edit it. DOCX is the working format; PDF is the finished one.",
    },
    {
      q: "Will converting to Word-to-PDF change my layout?",
      a: "For documents with common fonts, no — that's the point of PDF. Watch only for unusual fonts, which can be substituted. Open the PDF and check before sending.",
    },
    {
      q: "Does sending a PDF protect the document?",
      a: "It prevents casual editing and fixes the layout, but it isn't encryption. For real protection against opening or copying, add a password separately.",
    },
    {
      q: "Where can I see a fuller PDF vs DOCX comparison?",
      a: "See the PDF vs DOCX guide and comparison for a broader look at how the two formats differ across editing, fidelity and signing.",
    },
  ],
  related: [
    { label: "Word to PDF — convert in your browser", path: "/word-to-pdf" },
    { label: "PDF vs DOCX — which format to use", path: "/guides/pdf-vs-docx" },
    { label: "How to convert Word to PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF vs DOCX — feature comparison", path: "/compare/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
