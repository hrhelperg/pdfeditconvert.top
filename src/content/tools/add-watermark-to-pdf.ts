import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "Add watermark",
    h1: "Add a text watermark to every page of a PDF.",
    highlight: "every page",
    lead: "Stamp CONFIDENTIAL, DRAFT, or your own text across every page of a PDF — diagonally and translucently, just like you'd want.",
  },
  privacyNote:
    "Your file is processed locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to add a watermark",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a single PDF, or click to choose it." },
      { title: "Type your watermark", body: "Up to ~40 characters works best. Examples: CONFIDENTIAL, DRAFT, Sample." },
      { title: "Adjust opacity and angle", body: "Lower opacity for subtle, higher for prominent. 45° works for most layouts." },
      { title: "Download", body: "We rebuild the PDF locally with the watermark on every page." },
    ],
  },
  useCases: {
    heading: "When watermarks are useful",
    items: [
      { title: "Drafts in review", body: "Mark documents as DRAFT before circulating to avoid confusion." },
      { title: "Confidential leaks", body: "Stamp CONFIDENTIAL before sharing sensitive contracts or financials." },
      { title: "Sample materials", body: "Watermark portfolio samples so they can't be reused without permission." },
      { title: "Internal-only documents", body: "Mark documents not intended for external distribution." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "Text watermarks only", body: "This tool stamps text. For image or logo watermarks, use the PDF Editor mobile app." },
      { title: "Standard fonts only", body: "We use the built-in Helvetica font so the output stays portable. Custom fonts aren't embedded." },
      { title: "Watermarks can be removed", body: "A watermark is not legal protection. It deters casual misuse, not determined editing." },
    ],
  },
  related: [
    { label: "Merge PDF files", path: "/merge-pdf" },
    { label: "Split PDF", path: "/split-pdf" },
    { label: "Rotate PDF", path: "/rotate-pdf" },
    { label: "All free PDF tools", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Is my file uploaded?", a: "No. Watermarking runs entirely in your browser; nothing leaves your device." },
    { q: "Can I use a different font?", a: "Not in this tool — we use Helvetica so the output is portable. For custom fonts, use the PDF Editor mobile app." },
    { q: "Does the watermark go on every page?", a: "Yes. The same text is centred diagonally on every page." },
    { q: "Can a watermark be removed?", a: "By someone with the right tools, yes. A watermark deters casual misuse but isn't a security feature." },
  ],
  appCta: {
    heading: "Need image or logo watermarks?",
    sub: "PDF Editor for iPhone and Android supports custom fonts, images and per-page placement.",
  },
};

export default content;
