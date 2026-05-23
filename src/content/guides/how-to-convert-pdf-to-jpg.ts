import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-jpg",
  h1: "How to Convert PDF to JPG (Pages as Sharable Images)",
  description:
    "Export PDF pages as JPG images in your browser. When JPG is the right choice over PNG, how scale affects quality, and where image previews beat a PDF.",
  updated: "2026-05-23",
  intro: [
    "Sometimes a PDF is the wrong container. You want to drop a single page into a Slack message where it'll preview inline, paste a chart into a slide, or post a page somewhere that only takes images. For all of that, you need the pages as JPGs, not a PDF.",
    "This guide uses the free PDF to Images tool, which renders each page of a PDF as a downloadable image, entirely in your browser with nothing uploaded. JPG is one of the two formats it offers, and it's the right pick when file size matters more than razor-sharp text.",
    "We'll cover how to choose the scale (which controls sharpness), when JPG beats PNG, and the limitation worth remembering: a JPG of a page is a flat picture, not a document.",
  ],
  steps: [
    {
      title: "Open the PDF to Images tool",
      body: "Go to the PDF to Images tool in your browser. It renders pages locally on your device — no upload, no account needed.",
    },
    {
      title: "Add your PDF",
      body: "Drag a single PDF onto the drop zone or click to choose it. The tool reads every page so it can export them as images.",
    },
    {
      title: "Choose JPG as the format",
      body: "Pick JPG. It produces smaller files than PNG and is the right choice for photos, full-page screenshots, and anywhere file size matters more than perfectly crisp text.",
    },
    {
      title: "Set the scale",
      body: "Scale controls how many pixels each page renders at. 2× is sharp on most screens; drop to 1.5× for smaller files, or go to 3× when you need a very crisp result and don't mind the size.",
    },
    {
      title: "Export the pages",
      body: "Run the conversion. Each page downloads as its own JPG file, ready to drop into a message, deck or upload form.",
    },
    {
      title: "Pick out the page you need",
      body: "If you only wanted one page, grab that JPG and delete the rest. For a long PDF, splitting it first means fewer images to sort through.",
    },
  ],
  tips: [
    "Choose JPG when the page is photo-heavy or you're optimising for size; choose PNG when the page is mostly text or line art that needs to stay crisp.",
    "Higher scale means sharper images and bigger files. There's no benefit to 3× if the image will only ever be viewed small.",
    "A JPG of a page has no text layer — the words can't be searched, selected or copied. Keep the original PDF if you'll need the text again.",
    "Very large PDFs at high scale can exhaust browser memory. If the tool struggles, drop to 1.5× scale or split the PDF first.",
    "Password-protected PDFs can't be rendered in the browser. Remove the password first, or use the PDF Editor app.",
  ],
  mobileNote:
    "On a phone, exporting a page as an image is often about sharing: image previews show up inline in chats where a PDF attachment just sits there as an icon. The PDF Editor app renders and exports pages instantly with hardware acceleration, then hands them straight to the share sheet.",
  faq: [
    {
      q: "JPG or PNG — which should I export?",
      a: "JPG for smaller files and photo-heavy pages; PNG when the page is mostly text or diagrams that must stay sharp. JPG's compression softens fine edges, which you'll notice on lettering.",
    },
    {
      q: "Will I get one image per page?",
      a: "Yes. Each PDF page is rendered and downloaded as a separate JPG. If you only need one page, keep that file and discard the others.",
    },
    {
      q: "Is my PDF uploaded?",
      a: "No. Rendering runs entirely in your browser, so the file never leaves your device.",
    },
    {
      q: "Can I search the text in the JPG afterwards?",
      a: "No. A converted page is a flat image with no text layer. To keep searchable text, hold on to the original PDF.",
    },
    {
      q: "What does the scale setting do?",
      a: "It sets how many image pixels render per PDF point. 2× looks sharp on most displays; 3× is very crisp but produces large files.",
    },
  ],
  related: [
    { label: "PDF to Images — export pages in your browser", path: "/pdf-to-images" },
    { label: "Image to PDF — the reverse", path: "/image-to-pdf" },
    { label: "How to convert PDF to PNG", path: "/guides/how-to-convert-pdf-to-png" },
    { label: "How to split a PDF into separate files", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
