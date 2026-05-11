import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "How to Scan Documents to PDF with Your Phone",
  description:
    "Use your phone camera to scan multi-page documents into clean PDFs. Mobile workflow with edge detection and OCR.",
  updated: "2026-05-11",
  intro: [
    "Phones make great document scanners once you stop using the default camera. The right app handles edge detection, perspective correction, and OCR — turning a photo into a clean, searchable PDF that looks scanned, not snapshotted.",
    "This guide uses the PDF Editor app on iPhone or Android. Both platforms produce equivalent results for everyday document scanning.",
  ],
  steps: [
    {
      title: "Open the scanner",
      body: "Tap the Scan tile on the home screen of PDF Editor.",
    },
    {
      title: "Aim at the document",
      body: "Hold the phone roughly above the page. The app finds the edges automatically.",
    },
    {
      title: "Let it auto-capture",
      body: "The camera pulses when framing is right, then captures. You can also tap manually.",
    },
    {
      title: "Adjust the detected corners",
      body: "Fine-tune the edges if needed. Perspective correction kicks in after.",
    },
    {
      title: "Add more pages",
      body: "Tap the page counter to capture additional pages. They stitch into one PDF.",
    },
    {
      title: "Save with OCR",
      body: "Pick a filename. OCR runs in the background, making the saved PDF searchable.",
    },
  ],
  tips: [
    "Place the document on a contrasting surface (dark folder under white paper) — edge detection works much better.",
    "Avoid direct overhead lighting that causes glare. Diffuse light is best.",
    "For receipts, use the Black-and-white filter to dramatically reduce file size.",
  ],
  mobileNote:
    "The whole scan-and-save flow takes under 30 seconds even for a multi-page document. Compared to walking to a flatbed scanner, the phone wins for everyday business needs.",
  faq: [
    {
      q: "Is scan quality as good as a flatbed scanner?",
      a: "For everyday documents, yes. For archival photo scanning or fine print, flatbeds still win.",
    },
    {
      q: "What languages does OCR support?",
      a: "All major Latin-script languages plus Cyrillic, Greek, Arabic, Chinese, Japanese, and Korean.",
    },
  ],
  related: [
    { label: "Scan to PDF — full overview", path: "/scan-to-pdf" },
    {
      label: "Edit the scanned PDF afterward",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "Use cases — business", path: "/use-cases/business" },
  ],
  parentHub: { label: "Scan to PDF", path: "/scan-to-pdf" },
};

export default content;
