import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-jpg",
  h1: "PDF vs JPG — When to Use Each Format",
  description:
    "PDF vs JPG: when to scan, when to photograph. Compare quality, file size, OCR and document workflow fit.",
  intro: [
    "JPG is a photo format. PDF is a document format. Despite that simple split, people regularly send JPGs of contracts and PDFs of single images — both choices that work but aren't ideal.",
    "This comparison helps you pick the right format for receipts, IDs, contracts, screenshots, and product photos.",
  ],
  leftLabel: "PDF",
  rightLabel: "JPG",
  rows: [
    { feature: "Multi-page support", left: "yes", right: "no" },
    { feature: "Searchable text (with OCR)", left: "yes", right: "no" },
    { feature: "Crisp at any zoom level", left: "yes", right: "no" },
    { feature: "Small file size for photos", left: "Limited", right: "yes" },
    { feature: "Universally viewable", left: "yes", right: "yes" },
    { feature: "Password protection", left: "yes", right: "no" },
    { feature: "Edit later", left: "yes", right: "Limited" },
    { feature: "Best for receipts and contracts", left: "yes", right: "no" },
    { feature: "Best for product photos", left: "no", right: "yes" },
  ],
  whenLeft: [
    "The content is a document (receipt, contract, ID, form)",
    "The output may need multiple pages",
    "You want searchable text (OCR)",
    "The recipient is an accountant or business system",
    "You may need to add a signature later",
  ],
  whenRight: [
    "The content is a photograph",
    "File size matters more than fidelity",
    "Single image, no need for multiple pages",
    "Sharing on messaging apps that prefer images",
    "Posting on social media",
  ],
  faq: [
    {
      q: "Can I convert a JPG to a PDF?",
      a: "Yes. PDF Editor (and most PDF tools) wrap JPGs into PDFs while preserving image quality.",
    },
    {
      q: "Will OCR work on a JPG-of-document?",
      a: "Better to convert to PDF first, then run OCR — the result is searchable text inside a proper document format.",
    },
    {
      q: "Why do accountants prefer PDFs?",
      a: "Their accounting tools index PDFs and ignore JPGs. PDF receipts get categorized automatically; JPGs sit in a folder.",
    },
  ],
  related: [
    { label: "PDF Converter", path: "/pdf-converter" },
    { label: "Scan to PDF", path: "/scan-to-pdf" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
