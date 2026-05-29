import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-android",
  h1: "How to Convert Photos to PDF on Android",
  description:
    "Turn Android photos into one PDF using a browser tool or the built-in Print-to-PDF route. Plus the faster in-app workflow with scanning.",
  updated: "2026-05-23",
  intro: [
    "Android gives you more than one way to turn photos into a PDF, which is both a blessing and a source of confusion — the steps differ between Samsung, Pixel, Xiaomi and the rest. The good news is there's a route that works the same on every Android phone: a browser tool that runs on your device and doesn't care which manufacturer made it.",
    "This guide covers that universal browser route using the free Image to PDF tool, the built-in \"Print to PDF\" trick that's hiding in the share menu, and the PDF Editor app for when you want photos, scanning and signing in one place.",
    "Android photos are usually saved as JPG, so you generally avoid the format headaches that iPhone users hit — but we'll flag the one exception worth knowing.",
  ],
  steps: [
    {
      title: "Open the Image to PDF tool in your browser",
      body: "Go to the Image to PDF tool in Chrome or your browser of choice. It works on any Android phone regardless of brand, and processes images on your device — nothing uploaded.",
    },
    {
      title: "Add your photos",
      body: "Tap to select photos from your gallery or files. JPG and PNG both work; each image becomes one page.",
    },
    {
      title: "Order the pages",
      body: "Use the arrows to arrange the photos. For a multi-page document, double-check the sequence before creating the file.",
    },
    {
      title: "Create and save the PDF",
      body: "Tap Create PDF. The file downloads to your phone; save it to Files or your preferred cloud drive, or share it straight away.",
    },
    {
      title: "Alternative: use Print to PDF",
      body: "Open photos in Google Photos or your gallery, tap Share → Print, then choose \"Save as PDF\" as the printer. This bundles selected images into a PDF without any tool, though you get less control over order.",
    },
    {
      title: "Or use the PDF Editor app",
      body: "The app combines gallery photos into a PDF, scans fresh pages with automatic edge detection, and lets you sign — all offline, all on-device.",
    },
  ],
  tips: [
    "The browser route behaves identically across Samsung, Pixel, Xiaomi and others, so it's the one to remember if you switch phones or help someone on a different brand.",
    "The Print-to-PDF trick is great in a pinch but gives little control over page order — use the Image to PDF tool when sequence matters.",
    "Crop photos in your gallery first. Pages are sized to the image, so trimming gives a cleaner document.",
    "Most Android cameras save JPG, but some save HEIF/HEIC in high-efficiency mode. If a photo won't load, check your camera settings or use the PDF Editor app.",
    "Large galleries of high-resolution photos make big PDFs. Compress the result before emailing it.",
  ],
  mobileNote:
    "Android document work happens on the phone, and the PDF Editor app keeps it there: combine gallery photos, scan paper with edge detection, sign, and share — offline and without uploading anything. For repeat tasks it's quicker than the browser each time.",
  faq: [
    {
      q: "Does the browser method work on every Android phone?",
      a: "Yes. Because the tool runs in the browser, it behaves the same on Samsung, Pixel, Xiaomi and any other Android device — unlike built-in features that vary by manufacturer.",
    },
    {
      q: "What's the difference between Print-to-PDF and the tool?",
      a: "Print-to-PDF is built into Android's share menu and needs no tool, but offers little control over page order. The Image to PDF tool lets you sequence pages precisely, which matters for multi-page documents.",
    },
    {
      q: "Are my photos uploaded anywhere?",
      a: "No. The Image to PDF tool and the PDF Editor app both process photos on your device. Your images stay private.",
    },
    {
      q: "My photos won't load into the tool — why?",
      a: "Some Android phones save HEIF/HEIC in high-efficiency mode, which browser tools may not read. Switch your camera to standard JPG, or use the PDF Editor app.",
    },
    {
      q: "Can I make the PDF searchable?",
      a: "A plain photo has no text layer. To get searchable text, scan the document with the PDF Editor app's text recognition rather than just photographing it.",
    },
  ],
  related: [
    { label: "Image to PDF — convert photos in your browser", path: "/image-to-pdf" },
    { label: "Scan to PDF — capture paper with your camera", path: "/scan-to-pdf" },
    { label: "How to convert photos to PDF on iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
    { label: "How to convert JPG to PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
