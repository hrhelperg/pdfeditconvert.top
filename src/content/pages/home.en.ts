import type { HomeContent } from "@/types/content";

/** English homepage copy, lifted verbatim out of the old page component. */
export const HOME_EN: HomeContent = {
  heroEyebrow: "Free browser PDF tools",
  heroH1Before: "Convert, Merge & Edit PDFs ",
  heroH1Highlight: "in Seconds",
  heroH1After: "",
  heroLead:
    "Free browser-based PDF tools with private, local processing — nothing is uploaded to a server.",
  trust: [
    "Files are processed locally in your browser",
    "No upload, no account, no watermark",
    "Free — works on mobile and desktop",
  ],
  browseAllToolsLabel: "Browse all PDF tools →",
  toolsEyebrow: "Free, in your browser",
  toolsHeading: "Every PDF tool you need — no upload required.",
  toolsLead:
    "Merge, split, rotate, watermark and convert PDFs without leaving the page. Every tool runs locally in your browser.",
  toolBadge: "Free tool",
  tools: [
    { id: "image-to-pdf", label: "Image to PDF", desc: "Combine JPG, PNG, WebP into one PDF." },
    { id: "merge-pdf", label: "Merge PDF", desc: "Combine PDFs into one document." },
    { id: "split-pdf", label: "Split PDF", desc: "Extract pages by range." },
    { id: "rotate-pdf", label: "Rotate PDF", desc: "Fix sideways pages." },
    { id: "pdf-to-images", label: "PDF to images", desc: "Export pages as PNG or JPG." },
    { id: "add-watermark-to-pdf", label: "Add watermark", desc: "Stamp text across every page." },
    { id: "compress-pdf", label: "Compress PDF", desc: "Shrink file size for email and upload." },
    { id: "pdf-to-word", label: "PDF to Word", desc: "Extract text into an editable .docx." },
    { id: "word-to-pdf", label: "Word to PDF", desc: "Turn a .docx or .txt into a clean PDF." },
    {
      id: "reorder-pdf-pages",
      label: "Reorder PDF pages",
      desc: "Preview and rearrange pages, then download.",
    },
    {
      id: "extract-pdf-pages",
      label: "Extract PDF pages",
      desc: "Save selected pages or ranges as a new PDF.",
    },
  ],
  appBandEyebrow: "Also on iPhone & Android · five everyday tools",
  featureBand: [
    { key: "edit", label: "Edit", sub: "Text, images, pages" },
    { key: "convert", label: "Convert", sub: "Word, JPG, PNG" },
    { key: "secure", label: "Secure", sub: "Password protect" },
    { key: "scan", label: "Scan", sub: "Paper to PDF" },
    { key: "organize", label: "Organize", sub: "Reorder, split" },
  ],
  hubsHeading: "Everything you do with PDFs — explained.",
  hubsLead:
    "Practical guides and workflows for the things people actually do with PDFs every day.",
  hubs: [
    { id: "pdf-editor", label: "PDF Editor", desc: "Edit text, images and pages." },
    { id: "pdf-converter", label: "PDF Converter", desc: "Convert to Word, JPG, PNG and more." },
    { id: "compress-pdf", label: "Compress PDF", desc: "Shrink files without losing quality." },
    { id: "sign-pdf", label: "Sign PDF", desc: "Add a signature from your phone." },
    { id: "scan-to-pdf", label: "Scan to PDF", desc: "Turn paper into clean PDFs." },
    { id: "pdf-security", label: "PDF Security", desc: "Protect documents with a password." },
    { id: "pdf-for-business", label: "PDF for Business", desc: "Contracts and invoices on the go." },
    { id: "pdf-for-students", label: "PDF for Students", desc: "Notes, highlights and study guides." },
    { id: "pdf-forms", label: "PDF Forms", desc: "Fill, sign and save fillable PDFs." },
  ],
  guidesHeading: "Most-read guides",
  guideBadge: "Guide",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "How to edit a PDF on iPhone" },
    { id: "guides/how-to-edit-pdf-on-android", label: "How to edit a PDF on Android" },
    { id: "guides/how-to-compress-pdf", label: "How to compress a PDF" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "How to sign a PDF on your phone" },
  ],
  browseAllGuidesLabel: "Browse all {count} PDF guides →",
  finalCtaHeading: "Take PDF Editor with you.",
  finalCtaSub: "Free on iOS and Android. No account required to get started.",
  faq: [
    {
      q: "Is PDF Editor free?",
      a: "Yes. The core editing, scanning, compressing and signing features are free. Some advanced features unlock with PDF Editor Pro.",
    },
    {
      q: "Does it work without an internet connection?",
      a: "Core editing, page management, signing and compression all work offline. Cloud sync and OCR may require a connection.",
    },
    {
      q: "Which devices are supported?",
      a: "PDF Editor is available on iPhone and iPad (iOS 16+) and Android phones and tablets (Android 9+).",
    },
    {
      q: "Are my files private?",
      a: "Yes. Files stay on your device unless you choose to share them. We do not upload your documents to our servers.",
    },
    {
      q: "Can I use this for legal documents?",
      a: "Many users sign and share contracts using PDF Editor. We don't provide legal advice — check local rules on electronic signatures before relying on one for critical documents.",
    },
  ],
};
