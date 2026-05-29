import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-android",
  h1: "How to Make a PDF Smaller on Android",
  description:
    "Compress a PDF on any Android phone with a browser tool that needs no install, or the PDF Editor app. Get scans under email and upload limits.",
  updated: "2026-05-23",
  intro: [
    "Android handles PDFs differently depending on the phone — Samsung, Pixel and Xiaomi all bury the relevant settings in different places — but the need is universal: a scanned or photo-heavy PDF is too big to email or upload, and you want it smaller. The most dependable fix doesn't depend on your phone's brand at all.",
    "This guide uses the free Compress PDF tool, which runs in your browser on any Android device and processes the file locally — nothing is uploaded. It also covers the PDF Editor app for offline use and for password-protected files the browser can't touch.",
    "Because the browser route is identical across every Android phone, it's the method to remember if you switch devices or help someone on a different brand.",
  ],
  steps: [
    {
      title: "Locate the PDF",
      body: "Find the document in your Files app, Downloads, or wherever it was saved — a scan, a saved attachment, a converted photo set.",
    },
    {
      title: "Open the Compress PDF tool",
      body: "Go to the Compress PDF tool in Chrome or your browser. It runs the same on every Android phone and processes the file on your device — no upload, no account.",
    },
    {
      title: "Add the PDF and choose a level",
      body: "Select the file and pick a level: Recommended for most cases, Strong if you need it smaller. Low keeps the most detail.",
    },
    {
      title: "Compress and review",
      body: "Run it and check the before-and-after size. Image-heavy and scanned PDFs usually drop dramatically in a single pass.",
    },
    {
      title: "Save or share the result",
      body: "Save the smaller file to your device or share it directly to email or a chat app. Keep the original until you've confirmed the copy reads well.",
    },
    {
      title: "Use the app for protected or large files",
      body: "The browser can't compress password-protected PDFs and may struggle with very large ones. The PDF Editor app handles both offline.",
    },
  ],
  tips: [
    "The browser method behaves identically on Samsung, Pixel, Xiaomi and the rest, so it's the one worth remembering across devices.",
    "If a PDF is huge, it's almost certainly the scanned or photographed pages. Those are exactly what compresses best.",
    "Compression rasterises pages, so the smaller copy loses selectable text. Keep the original if you need to search or copy from it.",
    "Some Android cameras save HEIF in high-efficiency mode; standard JPG scans are easier to compress and share widely.",
    "Save the compressed PDF under a new name so the sharp original stays on the device.",
  ],
  mobileNote:
    "Compressing on the phone is what Android users actually want, and the PDF Editor app does it offline with no upload, supports password-protected files, and shares straight to your apps. For documents you shrink often, it beats reopening the browser each time.",
  faq: [
    {
      q: "Does the browser method work on every Android phone?",
      a: "Yes. Because the Compress PDF tool runs in the browser, it behaves the same on Samsung, Pixel, Xiaomi and any other Android device — unlike built-in features that vary by brand.",
    },
    {
      q: "Can I compress a PDF on Android without installing anything?",
      a: "Yes. The Compress PDF tool runs in your browser and processes the file on your device, so no install is needed.",
    },
    {
      q: "Is my file uploaded?",
      a: "No. Compression happens locally on your phone; nothing is sent to a server, which matters for personal documents.",
    },
    {
      q: "Will the text stay selectable?",
      a: "No. Pages are re-rendered as images during compression, removing the selectable text layer. Keep the original if you need it.",
    },
    {
      q: "How do I compress a password-protected PDF on Android?",
      a: "The browser can't process protected files. Use the PDF Editor app, which opens and compresses them offline.",
    },
  ],
  related: [
    { label: "Compress PDF — shrink in your browser", path: "/compress-pdf" },
    { label: "How to make a PDF smaller on iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "How to reduce PDF file size for email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "How to edit a PDF on Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
