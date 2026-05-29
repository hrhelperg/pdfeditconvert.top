import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-png",
  h1: "PDF vs PNG — Multi-Page Documents vs Single Sharp Images",
  description:
    "PDF wins for multi-page documents; PNG wins for single, sharp, transparent-background images. The clear rules and the conversion between them.",
  updated: "2026-05-29",
  intro: [
    "PDF and PNG are both excellent at what they're for, and they're for different things. PDF holds multi-page documents with selectable text, embedded fonts, signatures and structure. PNG holds single bitmap images with lossless compression and transparency support. Each is the wrong tool for the other's job, and the confusion mostly comes from people using PNG to send something that's really a document.",
    "PNG shines when you need a sharp, exact, single image — a logo with transparent background, a screenshot, a diagram, a graph. The pixels are the data; there's no underlying text. PDF shines when you need pages, fonts, text selection, or any kind of multi-step structure.",
    "This guide gives the clear rules of when to use each, the conversion between them in both directions, and the cases where the choice is genuinely a judgment call.",
  ],
  steps: [
    {
      title: "Use PDF for anything multi-page",
      body: "Any document with two or more pages should be a PDF, not a sequence of PNGs. PDF holds the pages together, preserves order, and presents as a single file the recipient can read sequentially.",
    },
    {
      title: "Use PNG for single sharp images with transparency",
      body: "Logos on transparent backgrounds, diagrams, screenshots — PNG is the right format. Lossless compression keeps text and lines crisp; alpha channel supports transparency.",
    },
    {
      title: "Don't use PNG for photographic content",
      body: "Photos are large in PNG and don't benefit from the lossless compression. JPG handles photos with similar visual quality at a fraction of the size.",
    },
    {
      title: "Convert PDF to PNG to extract pages as images",
      body: "PDF to Images exports each PDF page as a high-resolution PNG. Useful when you need a page as a single image for slides, web pages, or design tools.",
    },
    {
      title: "Convert PNG to PDF to package screenshots into a document",
      body: "PNG to PDF or Image to PDF combines PNG screenshots into a single PDF. Useful when you've taken many screenshots and want to share them as one ordered file.",
    },
    {
      title: "For text-heavy single pages, PDF is still better",
      body: "Even a single page of text content benefits from PDF over PNG — text stays selectable, file size is smaller, and the recipient can copy from the file.",
    },
  ],
  tips: [
    "PNG of a screenshot is fine; PNG of a multi-page document is wrong. Multi-page belongs in PDF.",
    "If your PNG has photos, switch to JPG — same visual quality, much smaller file.",
    "PNG → PDF conversion preserves the image at full resolution; no quality loss.",
    "PDF → PNG conversion lets you set the resolution. Higher is sharper but larger; 2× scale is usually the right balance.",
    "Don't 'export to PNG' a document you have as PDF unless you specifically need the image format. The PDF is more useful.",
  ],
  mobileNote:
    "Phones often capture content as PNG screenshots that should really be a PDF. The PDF Editor app combines PNG screenshots into a single PDF on-device, useful for sharing multiple captures as one ordered file rather than a scattered set.",
  faq: [
    {
      q: "When should I use PNG instead of PDF?",
      a: "When you need a single, sharp image, especially with transparency. Logos, diagrams, screenshots, charts that go into other documents.",
    },
    {
      q: "Is PDF or PNG smaller for a single page?",
      a: "Depends on content. Text-heavy single page: PDF wins. Image-heavy single page: similar or PNG slightly larger because lossless.",
    },
    {
      q: "Can I edit a PNG inside a PDF?",
      a: "Yes — the PDF holds the PNG and you can manipulate the image with PDF editing tools. Useful for adding logos or screenshots into a document.",
    },
    {
      q: "Why doesn't PNG support multiple pages?",
      a: "PNG is fundamentally an image format. Multi-page document formats (PDF, TIFF) are designed for that purpose. PNG isn't.",
    },
    {
      q: "What if I have many PNGs to share?",
      a: "Image to PDF combines them into one ordered PDF. Recipients get a single file instead of a folder of attachments.",
    },
  ],
  related: [
    { label: "PDF to Images — export pages as PNG or JPG", path: "/pdf-to-images" },
    { label: "Image to PDF — combine PNGs into a single PDF", path: "/image-to-pdf" },
    { label: "How to convert PNG to PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "How to convert PDF to PNG", path: "/guides/how-to-convert-pdf-to-png" },
  ],
  parentHub: { label: "PDF to Images — export pages as PNG or JPG", path: "/pdf-to-images" },
};

export default content;
