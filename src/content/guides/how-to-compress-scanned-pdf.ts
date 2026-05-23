import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-scanned-pdf",
  h1: "How to Compress a Scanned PDF",
  description:
    "Scanned PDFs are the easiest to shrink and the biggest offenders. How to compress them dramatically, and what happens to searchable text.",
  updated: "2026-05-23",
  intro: [
    "Scanned PDFs are the heavyweights of the document world. Every page is a full-resolution image, so a short scanned contract can outweigh a hundred-page text report. The flip side is the good news: because scans are nearly all image data, they compress more dramatically than any other kind of PDF — often by 70% or more.",
    "This guide focuses specifically on compressing scans using the free Compress PDF tool, which runs in your browser with nothing uploaded. Scans are exactly the case where browser compression shines, and where the size savings are most worth having.",
    "We'll also cover the one thing to watch with scanned documents — searchable text — so you don't accidentally lose a text layer you'd worked to create.",
  ],
  steps: [
    {
      title: "Open the Compress PDF tool",
      body: "Go to the Compress PDF tool in your browser. It processes the file on your device, so even a scanned contract stays private.",
    },
    {
      title: "Add your scanned PDF",
      body: "Drag the scan onto the drop zone or click to choose it. The tool reads it locally — nothing is uploaded.",
    },
    {
      title: "Choose a level — you can go strong here",
      body: "Scans tolerate strong compression well because they're images, not crisp vector text. Recommended often suffices; Strong can still look perfectly readable for everyday documents.",
    },
    {
      title: "Compress and check readability",
      body: "Run it and open the result. The key test for a scan is legibility — can you comfortably read the text? If yes at a strong level, take the bigger saving.",
    },
    {
      title: "Mind the searchable text layer",
      body: "If your scan was OCR-processed to be searchable, compressing it in the browser re-renders pages as images and removes that layer. Keep the searchable original if you need it.",
    },
    {
      title: "Save the smaller copy",
      body: "Save under a new name. Scanned files routinely drop well under email and upload limits in a single pass.",
    },
  ],
  tips: [
    "Scans compress the best of any PDF — if a document is huge because it's scanned, you're in luck on the size front.",
    "Because scans are images, you can usually push to a stronger level than you'd dare with a designed document and still keep it readable.",
    "If your scan had a searchable text layer from OCR, browser compression removes it. Re-run text recognition afterwards, or keep the searchable original separately.",
    "Scanning at a lower resolution (200–300 DPI) at the source produces smaller files from the start, reducing how hard you have to compress later.",
    "Color scans are larger than grayscale. If color adds nothing to the document, scanning in grayscale shrinks it before compression even begins.",
  ],
  mobileNote:
    "Scans usually start on a phone, and the PDF Editor app keeps the whole loop on-device: scan at a sensible quality, compress offline, and — unlike browser tools — run text recognition so the smaller file can still be searchable. No upload at any step.",
  faq: [
    {
      q: "How much smaller can a scanned PDF get?",
      a: "Often 70% or more. Scans are nearly all image data, which is exactly what compression targets, so they shrink far more than text-based PDFs.",
    },
    {
      q: "Will the scan still be readable after strong compression?",
      a: "Usually yes for everyday documents — scans tolerate strong compression because they're images rather than crisp vector text. Always open the result and confirm legibility.",
    },
    {
      q: "Does compressing remove the searchable text from a scan?",
      a: "If the scan was OCR-processed to be searchable, browser compression re-renders pages as images and removes that layer. Keep the searchable original, or re-run text recognition afterwards.",
    },
    {
      q: "Is my scanned document uploaded?",
      a: "No. The Compress PDF tool runs in your browser on your device, so sensitive scans like contracts and statements stay private.",
    },
    {
      q: "Can I compress a password-protected scan?",
      a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app, which compresses protected files offline.",
    },
  ],
  related: [
    { label: "Compress PDF — shrink scans in your browser", path: "/compress-pdf" },
    { label: "How to convert scanned documents to PDF", path: "/guides/how-to-convert-scanned-documents-to-pdf" },
    { label: "Why is my PDF so large?", path: "/guides/why-is-my-pdf-so-large" },
    { label: "How to scan documents to PDF with your phone", path: "/guides/how-to-scan-documents-to-pdf" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
