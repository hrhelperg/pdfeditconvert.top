import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF to images",
    h1: "Export each PDF page as a PNG or JPG.",
    highlight: "PNG or JPG",
    lead: "Turn PDF pages into downloadable PNG or JPEG image files — rendered locally in your browser.",
  },
  privacyNote:
    "Your file is rendered locally in your browser and is not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to convert PDF to images",
    steps: [
      { title: "Add your PDF", body: "Drag and drop a single PDF, or click to choose it." },
      { title: "Pick format", body: "Choose PNG for clean text and transparency, or JPG for smaller files." },
      { title: "Pick scale", body: "Higher scale = sharper images, larger files. 2× is usually right." },
      { title: "Download", body: "Each page downloads as a separate image." },
    ],
  },
  useCases: {
    heading: "When this tool is useful",
    items: [
      { title: "Drop a page into Slack", body: "Image previews render inline where PDFs don't." },
      { title: "Reuse a chart in a deck", body: "Pull one page out and paste it into a slide." },
      { title: "Make thumbnails", body: "Build a contact sheet of PDF pages for quick review." },
      { title: "Web previews", body: "Use rendered images as lightweight previews on a website." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "Browser memory", body: "Very large PDFs at high scale can exhaust memory. Try 1.5× scale or split the PDF first." },
      { title: "Password-protected PDFs", body: "Encrypted files can't be rendered. Unlock first, or use the PDF Editor mobile app." },
      { title: "Vector content becomes raster", body: "Images don't preserve searchable text. Keep the original PDF for that." },
    ],
  },
  related: [
    { label: "Image to PDF — the reverse", path: "/image-to-pdf" },
    { label: "Split PDF", path: "/split-pdf" },
    { label: "All free PDF tools", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Is my file uploaded?", a: "No. Rendering runs entirely in your browser; nothing leaves your device." },
    { q: "PNG or JPG — which should I pick?", a: "PNG is sharper for text and supports transparency. JPG is smaller and fine for photos and full-page screenshots." },
    { q: "What does scale mean?", a: "How many image pixels per PDF point. 2× yields sharp results on retina screens. 3× is large but very crisp." },
    { q: "Can I get a single ZIP of all pages?", a: "Not yet — pages download one by one. For batch export, the PDF Editor mobile app is faster." },
  ],
  appCta: {
    heading: "Need PDF tools offline?",
    sub: "PDF Editor for iPhone and Android renders pages instantly with hardware acceleration.",
  },
};

export default content;
