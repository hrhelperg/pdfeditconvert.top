import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-jpg-to-pdf",
  h1: "How to Convert JPG to PDF (One File, In Order)",
  description:
    "Combine one or many JPG photos into a single PDF in your browser. Best for receipts, IDs and photographed documents — with honest notes on quality and iPhone HEIC.",
  updated: "2026-05-23",
  intro: [
    "JPG is the format your camera and most websites hand you, which makes it the most common starting point for \"turn this into a PDF.\" The reason to convert is almost always the same: a single JPG is awkward to send as a document. Multiple JPGs are worse — five separate receipt photos in an email is something an accountant quietly resents. One PDF, pages in order, is what people actually want to receive.",
    "This guide uses the free Image to PDF tool, which combines JPG files into one PDF directly in your browser — nothing is uploaded. It's ideal for receipts, ID photos, screenshots and pictures of paper documents you need to bundle and send.",
    "JPG is a lossy photo format, so it's worth knowing what carries across cleanly and what doesn't before you rely on it for anything that needs to be readable.",
  ],
  steps: [
    {
      title: "Open the Image to PDF tool",
      body: "Go to the Image to PDF tool in your browser. It accepts JPG, PNG and WebP and runs entirely on your device — no upload, no account.",
    },
    {
      title: "Add your JPG files",
      body: "Drag your photos onto the drop zone or click to choose them. Add as many as you need; each image becomes one page of the PDF.",
    },
    {
      title: "Put them in the right order",
      body: "Use the up and down arrows on each row to sequence the pages. For a multi-page document this is the step that matters most — page two of a contract behind page one.",
    },
    {
      title: "Create the PDF",
      body: "Click Create PDF. Each image is placed on its own page sized to fit the photo, and the combined file is generated locally.",
    },
    {
      title: "Download and rename",
      body: "The PDF downloads automatically. Give it a descriptive name before sending — \"Receipts-March.pdf\" beats \"IMG_4821.pdf\" in someone's inbox.",
    },
    {
      title: "Compress it if it's heading to email",
      body: "Photo-based PDFs get large fast. If the file is over a typical 25 MB attachment limit, run it through the Compress PDF tool before sending.",
    },
  ],
  tips: [
    "Crop and straighten each photo before converting. The tool sizes pages to the image, so a crooked photo means a crooked page.",
    "Good, even lighting beats any filter for document photos. Avoid shadows from your own hand or phone falling across the page.",
    "JPG compresses photos well but smears fine text and sharp edges. For screenshots or anything with crisp lettering, PNG keeps the text cleaner — see the PNG to PDF guide.",
    "iPhone photos are often saved as HEIC, not JPG. The browser tool needs JPG, PNG or WebP, so either switch your camera to \"Most Compatible\" in Settings, or use the PDF Editor app, which reads HEIC directly.",
    "A photo of a document is not a searchable scan — there's no text layer, so you can't search or copy the words. Use a scanning workflow if that matters.",
  ],
  mobileNote:
    "Most JPGs start life on a phone, which is exactly where the PDF Editor app shines: it pulls photos straight from your camera roll (including HEIC), turns them into a PDF, and can scan fresh pages with edge detection — no desktop round-trip needed.",
  faq: [
    {
      q: "Can I combine several JPGs into one PDF?",
      a: "Yes — that's the main use. Add all your images, drag them into order, and they become consecutive pages of a single PDF.",
    },
    {
      q: "Are my photos uploaded anywhere?",
      a: "No. The conversion runs in your browser on your own device. Your images never leave it, which matters for IDs and personal documents.",
    },
    {
      q: "My iPhone photos won't load — why?",
      a: "They're probably HEIC files, which the browser tool doesn't read. Change your camera format to \"Most Compatible\" in Settings → Camera → Formats, or use the PDF Editor app, which handles HEIC.",
    },
    {
      q: "Will the PDF be searchable?",
      a: "No. A converted photo is an image with no text layer, so the words can't be searched or selected. For a searchable document, scan with text recognition using the PDF Editor app.",
    },
    {
      q: "Why is my PDF so large?",
      a: "High-resolution phone photos are big, and several of them add up quickly. Run the result through the Compress PDF tool to get it under email and upload limits.",
    },
  ],
  related: [
    { label: "Image to PDF — combine JPGs in your browser", path: "/image-to-pdf" },
    { label: "Compress PDF — shrink the result for email", path: "/compress-pdf" },
    { label: "How to convert PNG to PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "How to convert photos to PDF on iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
