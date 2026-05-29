import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-class-documents-as-pdf",
  h1: "How to Edit Class Documents as PDF (Annotate, Highlight, Sign)",
  description:
    "Class handouts, problem sets and consent forms often arrive as PDFs. How to mark them up, fill them in and return them without printing — all on phone or laptop.",
  updated: "2026-05-29",
  intro: [
    "Class documents come at you as PDFs more than any other format now. Handouts to annotate, problem sets to fill in, consent forms to sign and return, syllabi to review. The temptation is to print everything, fill it in by hand, scan it back. That works, but it's slow and produces worse-looking output than just editing the PDF directly.",
    "Modern PDF editing handles all four cases well: highlighting and annotation for reading, form-filling for problem sets and forms, signatures for permission slips, and structural edits when you need to add a page. Most of it can be done in a browser tab or a mobile app without paying for software.",
    "This guide walks each case — what the right tool is, what it does and doesn't do, and how to send back a clean filled-in copy. It assumes you don't want to print anything if you don't have to.",
  ],
  steps: [
    {
      title: "For reading and annotation: highlight and comment",
      body: "Most PDF readers (and the PDF Editor app) support highlighting, underlining and sticky-note comments. Use these for active reading; the annotations stay with the file and survive sharing.",
    },
    {
      title: "For real form fields: tap to fill",
      body: "PDFs designed as forms have actual interactive fields. Tap into each, type, move to the next. The output looks identical to printed-and-typed work.",
    },
    {
      title: "For flat PDFs (no form fields): add text boxes",
      body: "A scanned handout with no real fields needs you to overlay text boxes on the blanks. The PDF Editor app supports this; the result looks neater than handwritten responses on a print.",
    },
    {
      title: "For signatures: Sign PDF",
      body: "Sign PDF lets you draw or type a signature directly on the form. For consent forms and permission slips, a drawn signature is the right choice.",
    },
    {
      title: "For adding pages: merge",
      body: "If your response is longer than the handout's blanks allow, Merge PDF lets you append additional pages. Keep them in the right order; the original pages stay intact.",
    },
    {
      title: "Save as a new file, not over the original",
      body: "Save the filled-in version with a new name (Handout3_Completed_LastName.pdf). The blank original stays unsoiled in case you need to redo it or share with a study partner.",
    },
  ],
  tips: [
    "Test the PDF first to see if it has real form fields. If tapping a blank line opens a typing cursor, it's a real form. If nothing happens, you need a text-box overlay.",
    "Use a consistent text size for filled-in answers — matching the document's body size if you can tell.",
    "Don't print to fill in unless absolutely necessary. The scanned-back version is always less readable than digital-fill.",
    "Save before signing. A signature usually flattens parts of the file; the pre-signature version is the editable copy.",
    "Confirm filled forms by exporting to PDF after — some tools save fillable state separately and the exported PDF locks in your answers.",
  ],
  mobileNote:
    "Many class documents arrive on a phone and need to go back the same way. The PDF Editor app handles annotation, form-fill, signature and merge on iOS and Android, so a handout doesn't have to wait for laptop time to come back completed.",
  faq: [
    {
      q: "Can I edit a PDF in a browser?",
      a: "For limited cases yes — form filling and annotation work in many browsers. For text edits and structural changes, a real editor (browser-based or app) does more.",
    },
    {
      q: "Why doesn't my handout have real form fields?",
      a: "Either the professor exported without enabling them, or the file is a scan. Use text-box overlay on top of the blank lines.",
    },
    {
      q: "Are signed PDFs accepted for class forms?",
      a: "Increasingly yes. Some legal forms (specifically signed permissions in some jurisdictions) may still require ink — check the form's instructions.",
    },
    {
      q: "Should I always save as a new file?",
      a: "Yes for class work. Keeping the blank original lets you retry or share without re-downloading.",
    },
    {
      q: "How do I add a page to a PDF I'm filling out?",
      a: "Write your additional content as a separate PDF, then use Merge PDF to combine. Place the appended page where it logically belongs.",
    },
  ],
  related: [
    { label: "PDF Editor — edit text and images on mobile", path: "/pdf-editor" },
    { label: "Sign PDF — add electronic signatures", path: "/sign-pdf" },
    { label: "How to fill out PDF forms on your phone", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "How to annotate a PDF on mobile", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "PDF Editor — edit text, images and pages", path: "/pdf-editor" },
};

export default content;
