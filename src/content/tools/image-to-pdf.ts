import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Image to PDF",
    h1: "Turn JPG, PNG and WebP images into a single PDF.",
    highlight: "single PDF",
    lead: "Drop your photos and screenshots in the order you want them, and download a clean, multi-page PDF — all without uploading anything.",
  },
  privacyNote:
    "Your files are processed locally in your browser and are not uploaded to our servers. Nothing leaves your device.",
  howTo: {
    heading: "How to use the Image to PDF tool",
    steps: [
      { title: "Add your images", body: "Drag and drop JPG, PNG or WebP files, or click to pick them from your device." },
      { title: "Reorder if needed", body: "Use the up and down arrows on each row to put pages in the right sequence." },
      { title: "Generate the PDF", body: "Click Create PDF. Your images become pages of a single document, sized to fit each image." },
      { title: "Download", body: "The generated PDF downloads automatically. You can rename it after saving." },
    ],
  },
  useCases: {
    heading: "When this tool is useful",
    items: [
      { title: "Photo receipts and expenses", body: "Stack a month of receipts into one PDF before sending to an accountant." },
      { title: "ID and passport scans", body: "Combine front and back into a single document a government portal will accept." },
      { title: "Screenshots into a report", body: "Bundle a series of UI screenshots into a tidy review document." },
      { title: "Whiteboard photos", body: "Turn a sequence of photos from a meeting into one document team members can flip through." },
    ],
  },
  limitations: {
    heading: "Limitations",
    items: [
      { title: "JPG, PNG and WebP only", body: "HEIC, AVIF, GIF and TIFF are not supported in-browser. Convert first or use the mobile app." },
      { title: "Browser memory", body: "Very large batches (hundreds of high-resolution photos) may slow down older devices." },
      { title: "No OCR", body: "Text inside images is not extracted. For searchable PDFs, scan with the PDF Editor app." },
    ],
  },
  related: [
    { label: "Merge PDF files", path: "/merge-pdf" },
    { label: "PDF to images", path: "/pdf-to-images" },
    { label: "All free PDF tools", path: "/pdf-tools" },
  ],
  faq: [
    { q: "Are my images uploaded anywhere?", a: "No. Everything runs in your browser. Your images never leave your device." },
    { q: "Is there a file-size limit?", a: "Yes — each file is capped at 100 MB so your browser stays responsive. The PDF Editor mobile app handles larger batches with hardware acceleration." },
    { q: "Can I change page size?", a: "Each page matches its image's pixel dimensions, so aspect ratios stay correct. For uniform A4 output, use the PDF Editor app." },
    { q: "Does this work on iPhone and Android?", a: "Yes, in any modern mobile browser. For frequent use, the PDF Editor app is faster and supports HEIC photos straight from your camera roll." },
  ],
  appCta: {
    heading: "Need this on your phone every week?",
    sub: "PDF Editor for iPhone and Android scans, organises, and signs PDFs offline.",
  },
};

export default content;
