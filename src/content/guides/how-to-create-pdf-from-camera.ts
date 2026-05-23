import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-pdf-from-camera",
  h1: "How to Create a PDF From Your Camera",
  description:
    "Turn a camera shot into a PDF — and why a proper scan beats a raw photo. Quick capture for receipts and whiteboards, scanning for documents.",
  updated: "2026-05-23",
  intro: [
    "Pointing your camera at something and getting a PDF out is the fastest way to capture the physical world as a document — a receipt, a whiteboard after a meeting, a page from a book, a notice on a wall. But there's a real difference between a raw photo wrapped in a PDF and a proper scan, and knowing which you need saves you from a wonky, glare-streaked result.",
    "This guide covers both: quick capture, where a camera photo becomes a PDF page using the free Image to PDF tool, and proper scanning, where the PDF Editor app detects the document's edges, corrects the angle, and can recognise the text. Both run on your device with nothing uploaded.",
    "For a snapshot you just need on file, quick capture is fine. For anything that has to look like a document — flat, square, legible — scanning is worth the extra moment.",
  ],
  steps: [
    {
      title: "Decide: quick capture or proper scan",
      body: "A receipt for your own records can be a quick photo. A document you'll send or need to read clearly deserves a proper scan with edge detection and angle correction.",
    },
    {
      title: "Quick capture: photograph it well",
      body: "Shoot straight down in even light, filling the frame with the page and avoiding shadows from your hand or phone. A good photo makes a good PDF page.",
    },
    {
      title: "Turn the photo into a PDF",
      body: "Open the Image to PDF tool, add the photo (or several), put them in order, and create the PDF. Each shot becomes a page.",
    },
    {
      title: "Proper scan: use the app's scanner",
      body: "In the PDF Editor app, use the scan feature. It finds the document's edges automatically, straightens the perspective, and cleans up the page so it reads like a scan, not a snapshot.",
    },
    {
      title: "Capture multiple pages in sequence",
      body: "For a multi-page document, the scanner lets you shoot page after page into one PDF, keeping them in order as you go.",
    },
    {
      title: "Make it searchable if you need to",
      body: "A raw photo has no text layer. The app can run text recognition so the captured pages become searchable — useful for anything you'll later need to find by its contents.",
    },
  ],
  tips: [
    "A raw photo is a picture of a document; a scan is a corrected, flattened, legible version. Match the effort to how the result will be used.",
    "Even lighting and a straight-down angle do more for a captured page than any filter. Glare and shadow are easier to avoid than to fix.",
    "A dark, plain background behind the page helps edge detection find the document cleanly.",
    "Captured photos and scans alike can be large — compress the PDF if it's heading to email or an upload portal.",
    "Quick capture has no searchable text. If you'll need to search the document later, scan with text recognition instead of just photographing it.",
  ],
  mobileNote:
    "Your camera is already in your hand, which is why capturing documents is a phone-native task. The PDF Editor app scans with automatic edge detection, multi-page capture and text recognition — all offline — turning whatever's in front of you into a clean, shareable PDF on the spot.",
  faq: [
    {
      q: "What's the difference between photographing and scanning a document?",
      a: "A photo is a raw image wrapped in a PDF — fine for quick records. A scan detects the page edges, corrects the angle and flattens it so it reads like a real document. Scan anything you'll send or need to read clearly.",
    },
    {
      q: "Can I make a PDF from a single camera photo?",
      a: "Yes. Take the photo, then use the Image to PDF tool to turn it (or several) into a PDF, one page per shot.",
    },
    {
      q: "Will a camera-made PDF be searchable?",
      a: "Not from a raw photo — there's no text layer. The PDF Editor app can run text recognition while scanning so the result is searchable.",
    },
    {
      q: "Are my captured documents uploaded?",
      a: "No. Both the Image to PDF tool and the app's scanner work on your device, so the captured documents stay private.",
    },
    {
      q: "How do I capture several pages into one PDF?",
      a: "Use the app's scanner, which lets you shoot page after page into a single document and keeps them in order. The Image to PDF tool also combines multiple photos into one file.",
    },
  ],
  related: [
    { label: "Scan to PDF — capture paper with your camera", path: "/scan-to-pdf" },
    { label: "Image to PDF — turn photos into a PDF", path: "/image-to-pdf" },
    { label: "How to scan documents to PDF with your phone", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "How to convert photos to PDF on iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Scan to PDF", path: "/scan-to-pdf" },
};

export default content;
