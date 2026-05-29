import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-iphone",
  h1: "How to Convert Photos to PDF on iPhone",
  description:
    "Turn iPhone photos into a single PDF — including the HEIC format quirk that trips people up. The browser route and the faster in-app route.",
  updated: "2026-05-23",
  intro: [
    "Turning photos into a PDF on an iPhone is something people reach for constantly — a photographed contract, a stack of receipts for an expense claim, both sides of an ID for a form. The job is simple, but there's one iPhone-specific catch that causes most of the frustration: by default, your iPhone saves photos as HEIC, not JPG, and a lot of tools don't read HEIC.",
    "This guide covers two reliable routes. The first uses the free Image to PDF tool in Safari, which works once your photos are in a supported format. The second uses the PDF Editor app, which reads HEIC straight from your camera roll and skips the format dance entirely.",
    "Pick whichever fits the moment — but know the HEIC detail first, because it's the thing that turns a 30-second task into a confusing one.",
  ],
  steps: [
    {
      title: "Decide your photo format",
      body: "Open Settings → Camera → Formats. \"High Efficiency\" saves HEIC; \"Most Compatible\" saves JPG. Switching to Most Compatible makes new photos work everywhere, including browser tools.",
    },
    {
      title: "Convert existing HEIC photos if needed",
      body: "Already shot in HEIC? Either re-export them as JPG (open in Photos, share, choose a JPG-producing option) or skip straight to the app route below, which reads HEIC directly.",
    },
    {
      title: "Open the Image to PDF tool in Safari",
      body: "Go to the Image to PDF tool. It accepts JPG, PNG and WebP and runs entirely on your device — nothing is uploaded.",
    },
    {
      title: "Add your photos and order them",
      body: "Tap to choose photos from your library, then use the arrows to sequence them. Page order matters for multi-page documents like a two-page contract.",
    },
    {
      title: "Create and save the PDF",
      body: "Tap Create PDF. When it downloads, use the share icon to save it into the Files app or send it on directly.",
    },
    {
      title: "Or use the PDF Editor app for HEIC and scanning",
      body: "The app reads HEIC photos from your camera roll, turns them into a PDF, and can also capture fresh pages with edge detection — no format conversion required.",
    },
  ],
  tips: [
    "The single biggest cause of \"my photos won't convert\" on iPhone is HEIC. Switch to Most Compatible, or use the app, and the problem disappears.",
    "Crop each photo in the Photos app before converting — the page is sized to the image, so trimming the background gives a tidier document.",
    "For receipts and IDs, shoot on a dark, flat surface in even light. Glare and shadows are harder to fix than to avoid.",
    "A photo turned into a PDF is not a searchable scan. If you need to search the text, use the app's scanning feature, which can recognise text.",
    "If the finished PDF is too big to email, run it through the Compress PDF tool — phone photos make heavy pages.",
  ],
  mobileNote:
    "This whole workflow lives on your phone, which is exactly what the PDF Editor app is built for: HEIC straight from the camera roll, on-device conversion with nothing uploaded, plus scanning and signing in the same place. For anything you do more than once, it's the faster route.",
  faq: [
    {
      q: "Why won't my iPhone photos load into the converter?",
      a: "They're saved as HEIC, which most browser tools don't read. Switch to \"Most Compatible\" in Settings → Camera → Formats for new photos, or use the PDF Editor app, which reads HEIC directly.",
    },
    {
      q: "Can I combine several photos into one PDF?",
      a: "Yes. Add all of them, drag them into order, and each photo becomes a page of a single PDF.",
    },
    {
      q: "Are my photos uploaded to a server?",
      a: "No. The browser tool processes everything on your device, and the app does too. Your photos stay private — important for IDs and personal documents.",
    },
    {
      q: "Will the PDF be searchable?",
      a: "Not from a plain photo — there's no text layer. Use the scanning feature in the PDF Editor app to produce a document with recognised, searchable text.",
    },
    {
      q: "The PDF is too big to email — what do I do?",
      a: "High-resolution iPhone photos make large pages. Run the file through the Compress PDF tool to bring it under the attachment limit.",
    },
  ],
  related: [
    { label: "Image to PDF — convert photos in your browser", path: "/image-to-pdf" },
    { label: "Scan to PDF — capture paper with your camera", path: "/scan-to-pdf" },
    { label: "How to convert photos to PDF on Android", path: "/guides/how-to-convert-photos-to-pdf-on-android" },
    { label: "How to convert JPG to PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
