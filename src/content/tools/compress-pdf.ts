import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "Compress PDF",
    h1: "Make PDFs smaller — in your browser.",
    highlight: "in your browser",
    lead: "Shrink a PDF so it fits email and upload limits. Pick a compression level, see exactly how much you saved, and download — your file never leaves your device.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to compress a PDF",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a PDF, or click to choose one from your device." },
      { title: "Pick a level", body: "Low keeps the most detail; Recommended balances size and quality; Strong is smallest." },
      { title: "Compress", body: "Click Compress PDF. Pages are re-rendered and re-encoded locally in your browser." },
      { title: "Download", body: "See the before/after size and reduction percentage, then download the smaller file." },
    ],
  },
  useCases: {
    heading: "When compression helps most",
    items: [
      { title: "Email size limits", body: "Get a scanned contract or brochure under a 10 MB or 25 MB attachment cap." },
      { title: "Upload forms and portals", body: "Government and HR portals often reject files over a few megabytes — this fixes that." },
      { title: "Scanned documents", body: "Phone scans are huge. Image-heavy PDFs shrink dramatically with strong compression." },
      { title: "Storage and sharing", body: "Keep archives lean and make links download faster for the recipient." },
    ],
  },
  limitations: {
    heading: "Honest limitations",
    items: [
      { title: "Text becomes an image", body: "Compression re-renders each page as an image, so text is no longer selectable or searchable in the output. Keep the original if you need that." },
      { title: "Text-only PDFs barely shrink", body: "If a PDF is already mostly text or vector graphics, there's little to compress — we keep your original unchanged rather than hand back a larger file." },
      { title: "Very large or locked PDFs", body: "Browsers run out of memory long before native apps. Password-protected PDFs can't be processed in-browser — use the PDF Editor mobile app." },
    ],
  },
  related: [
    { label: "Merge PDFs", path: "/merge-pdf" },
    { label: "Split a PDF", path: "/split-pdf" },
    { label: "Extract PDF pages", path: "/extract-pdf-pages" },
    { label: "All free PDF tools", path: "/pdf-tools" },
    { label: "Guide: how to compress a PDF", path: "/guides/how-to-compress-pdf" },
  ],
  faq: [
    { q: "Is my file uploaded?", a: "No. Compression runs entirely in your browser using your device's CPU. Your file never leaves your device." },
    { q: "How much smaller will my PDF get?", a: "It depends on the content. Scanned and image-heavy PDFs often shrink 50–90%. Text-only PDFs may not shrink at all — in that case we keep your original." },
    { q: "Will quality drop?", a: "Yes, somewhat — this is lossy compression. Lower levels keep more detail. We never claim 'no quality loss'; pick the level that looks acceptable for your use." },
    { q: "Why is text no longer selectable after compressing?", a: "To get real size savings in the browser, each page is rasterized to an image. If you need selectable text, keep the original or use a lighter level." },
    { q: "Can I compress a password-protected PDF?", a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app, which supports protected files." },
  ],
  appCta: {
    heading: "Need PDF tools on the go?",
    sub: "PDF Editor for iPhone and Android compresses, signs and shares PDFs from your phone.",
  },
};

export default content;
