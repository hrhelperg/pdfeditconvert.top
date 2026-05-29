import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-scanned-documents-to-pdf",
  h1: "How to Convert Scanned Documents to PDF",
  description:
    "Already have scan images or photos of paper? Combine them into one PDF in your browser — plus what OCR does and why scans need it to be searchable.",
  updated: "2026-05-23",
  intro: [
    "There's an important difference between scanning a document and converting one you've already scanned. If you have a fresh stack of paper, you want a scanning workflow. But often you already have the images — a flatbed scanner dumped a folder of JPEGs, a colleague emailed photos of a signed form, or your phone's gallery is full of pictures of paperwork. The job now is to gather those into a single, tidy PDF.",
    "This guide covers exactly that: combining scan images you already have into one PDF using the free Image to PDF tool, which runs in your browser with nothing uploaded. It also explains the part people get wrong — that a converted scan is a picture of text, not searchable text, and what to do if you need the words back.",
    "If you still need to capture the paper in the first place, see the dedicated scanning guide; this one assumes the images already exist.",
  ],
  steps: [
    {
      title: "Gather your scan images",
      body: "Collect the JPG or PNG files from your scanner, email or camera roll into one place so you can add them in a single pass.",
    },
    {
      title: "Open the Image to PDF tool",
      body: "Go to the Image to PDF tool in your browser. It accepts JPG, PNG and WebP and processes everything on your device — no upload, no account.",
    },
    {
      title: "Add the images in document order",
      body: "Drag the scans onto the drop zone. Use the arrows to put pages in the right sequence — page one of the form before page two.",
    },
    {
      title: "Create the PDF",
      body: "Click Create PDF. Each scan becomes a page, and the tool combines them into one document locally.",
    },
    {
      title: "Compress if it's large",
      body: "Scans are image-heavy and the PDF can be big. Run it through Compress PDF to fit email or upload limits — scanned content shrinks a lot with little visible loss.",
    },
    {
      title: "Add searchable text if you need it",
      body: "A converted scan is an image, so the text can't be searched. To make it searchable, run text recognition (OCR) with the PDF Editor app, which adds an invisible text layer over the scan.",
    },
  ],
  tips: [
    "Straighten and crop each scan before combining — a skewed page stays skewed once it's in the PDF.",
    "Consistent resolution across pages makes a tidier document. Wildly mismatched image sizes produce pages that jump around in scale.",
    "Browser tools can combine scans but can't read the text inside them. If you need to search or copy the words, that's an OCR job, which the PDF Editor app handles.",
    "Keep colour scans for anything with stamps, highlights or signatures; switch to grayscale only when colour adds nothing, since it shrinks the file.",
    "Name the file for its contents and date. \"Lease-signed-2026-05.pdf\" is far easier to retrieve later than a string of scanner numbers.",
  ],
  mobileNote:
    "If the \"scans\" are really photos on your phone, the PDF Editor app is the shortcut: it turns camera-roll images into a PDF, can capture new pages with edge detection, and can run text recognition so the result is searchable — all without uploading anything.",
  faq: [
    {
      q: "What's the difference between this and scanning?",
      a: "Scanning captures paper into images in the first place. This guide assumes you already have the scan images and just need to combine them into one PDF. If you still need to capture the paper, use a scanning workflow.",
    },
    {
      q: "Will the text in my scanned PDF be searchable?",
      a: "Not from the conversion alone — a scan is an image, so there's no text layer. Run OCR (text recognition) with the PDF Editor app to add a searchable layer over the scan.",
    },
    {
      q: "Are my scans uploaded?",
      a: "No. The Image to PDF tool processes files in your browser on your device, so sensitive documents stay private.",
    },
    {
      q: "Why is my scanned PDF so big?",
      a: "Scans are essentially photos, and several high-resolution pages add up fast. Compress the PDF — image-heavy scans typically shrink a great deal with little visible quality loss.",
    },
    {
      q: "Can I fix a page that scanned in sideways?",
      a: "Yes. Use the Rotate PDF tool to turn the affected pages upright after combining, or fix the orientation of the source image before converting.",
    },
  ],
  related: [
    { label: "Image to PDF — combine scans in your browser", path: "/image-to-pdf" },
    { label: "Scan to PDF — capture paper with your camera", path: "/scan-to-pdf" },
    { label: "How to scan documents to PDF with your phone", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "How to compress a scanned PDF", path: "/guides/how-to-compress-scanned-pdf" },
  ],
  parentHub: { label: "Scan to PDF", path: "/scan-to-pdf" },
};

export default content;
