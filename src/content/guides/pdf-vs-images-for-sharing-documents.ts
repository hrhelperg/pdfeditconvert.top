import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-images-for-sharing-documents",
  h1: "PDF vs Images for Sharing Documents (JPG, PNG, HEIC)",
  description:
    "When a JPG, PNG or HEIC of a document is wrong — and what makes PDF the right format for anything beyond a quick screenshot.",
  updated: "2026-05-29",
  intro: [
    "A surprising amount of business and school work gets sent as image files — JPGs of contracts, HEIC photos of handouts, PNG screenshots of receipts. It feels quicker than producing a PDF, the phone makes it easy, and the recipient can usually still read it. But images of documents are the wrong format for almost every actual document workflow.",
    "PDFs and document images serve different purposes. PDFs are multi-page, searchable, printable, signable, archivable, and don't break on rotation. Images are single-page, not searchable, often huge in file size, and frequently come out blurry, sideways or with the wrong color. For anything beyond a single quick share, PDFs do the job better.",
    "This guide walks why, when the image-of-document approach actually works (it does, sometimes), and the simple conversion path when you want the PDF version.",
  ],
  steps: [
    {
      title: "Recognize when an image of a document is wrong",
      body: "Multi-page document: wrong format. Document that needs to be printed: wrong format. Document that needs to be searchable: wrong format. Anything formal that will go in a file: wrong format.",
    },
    {
      title: "Recognize the small set of cases where an image is fine",
      body: "Single-page, ephemeral, casual. Quick photo of a receipt to a friend, screenshot of a confirmation page, snapshot of a handwritten note to yourself. The image is the right format when it's not really a document yet.",
    },
    {
      title: "Convert with Image to PDF when the share becomes a document",
      body: "Image to PDF combines JPG, PNG and WebP into a PDF in your browser. The image becomes searchable later if OCR'd; it stays as one file rather than many.",
    },
    {
      title: "Use the right tool for the source",
      body: "Photos → Image to PDF. Scanned pages → Scan to PDF. Word/Pages document → Word to PDF. Each source format has the cleanest conversion route.",
    },
    {
      title: "Handle iPhone HEIC specifically",
      body: "iPhone defaults to HEIC, which not every recipient can open. Convert HEIC → JPG → PDF, or use a tool that handles HEIC directly. The PDF Editor app's scan flow handles HEIC natively.",
    },
    {
      title: "Compress thoughtfully",
      body: "Compress PDF if the resulting file is huge. Photo-to-PDF conversions inherit the photo's resolution, which is often more than needed for a document.",
    },
  ],
  tips: [
    "JPG of a portrait document on a phone is the wrong format. Rotate the phone or use a scan app — the result is dramatically more readable.",
    "PNG screenshots can convert to PDF cleanly but JPG photos of paper documents are usually better off going through a scan app for edge detection.",
    "Don't send multiple JPGs as a multi-page document. Combine them into one PDF; recipients lose track of multi-attachment threads.",
    "HEIC is iOS-default but rejected by many web portals and email clients. Convert before sharing if you don't know the recipient's setup.",
    "Photos of laptop screens are the worst case — moire, glare, low resolution. Use the export PDF feature instead of photographing the screen.",
  ],
  mobileNote:
    "Phones are where image-of-document mistakes happen most. The PDF Editor app's scan flow detects pages and produces clean PDFs from the start, so a quick share becomes a proper document without an extra conversion step.",
  faq: [
    {
      q: "Why is a photo of a document worse than a PDF?",
      a: "Photos are single-page, often skewed, not searchable, can be huge file size, and rotation/format issues hide the content. PDF solves all of those.",
    },
    {
      q: "Is JPG ever acceptable for a document?",
      a: "For single-page casual shares, yes — quick receipt to a friend, screenshot to a colleague. For anything formal or multi-page, no.",
    },
    {
      q: "What about HEIC?",
      a: "iPhone's default format, but not universally supported. Convert to JPG or PDF before sharing if the recipient isn't on Apple devices.",
    },
    {
      q: "How do I combine multiple photos into one PDF?",
      a: "Image to PDF combines JPG, PNG and WebP into a single PDF in your browser. Set order before adding; the resulting PDF preserves it.",
    },
    {
      q: "Will PDF make the file bigger?",
      a: "Depends on the source. A JPG of a document → PDF with no recompression is about the same size. Compress PDF reduces if needed.",
    },
  ],
  related: [
    { label: "Image to PDF — combine photos into one file", path: "/image-to-pdf" },
    { label: "PDF vs JPG for documents", path: "/guides/pdf-vs-jpg-for-documents" },
    { label: "How to convert JPG to PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "How to convert photos to PDF on iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Image to PDF — combine photos into PDF", path: "/image-to-pdf" },
};

export default content;
