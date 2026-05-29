import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-iphone",
  h1: "How to Make a PDF Smaller on iPhone",
  description:
    "Shrink a PDF on your iPhone using a browser tool or the PDF Editor app. Why iPhone scans get huge and how to get them under sending limits.",
  updated: "2026-05-23",
  intro: [
    "iPhones produce gorgeous, enormous files. The same high-resolution camera and scanner that make your documents look sharp also make the PDFs heavy — a few scanned pages can sail past an email limit before you've added anything else. So \"make this PDF smaller on my iPhone\" is a very common, very specific need.",
    "This guide covers two reliable routes that both work on iPhone. The first is the free Compress PDF tool in Safari, which runs on your device with nothing uploaded. The second is the PDF Editor app, which compresses offline and handles password-protected files the browser can't.",
    "Either way, the goal is the same: a file small enough to email or upload that still reads cleanly — without sending your document off to someone else's server to get there.",
  ],
  steps: [
    {
      title: "Find the PDF in Files",
      body: "Locate the document in the Files app or wherever it lives — a scan you made, an attachment you saved, a converted photo bundle.",
    },
    {
      title: "Open the Compress PDF tool in Safari",
      body: "Go to the Compress PDF tool. It runs in the browser on your iPhone and processes the file on the device — nothing is uploaded.",
    },
    {
      title: "Add the PDF and choose a level",
      body: "Tap to select the file, then pick a level. Recommended suits most cases; choose Strong only if you need it smaller still.",
    },
    {
      title: "Compress and check the size",
      body: "Run it and read the before-and-after size. iPhone scans typically drop a lot in one pass because they're image-heavy.",
    },
    {
      title: "Save it back to Files or share it",
      body: "Use the share icon to save the smaller PDF to Files or send it straight on. Keep the original until you've confirmed the result reads well.",
    },
    {
      title: "For protected files, use the app",
      body: "The browser can't compress password-protected PDFs. The PDF Editor app handles those offline, and is faster for files you compress often.",
    },
  ],
  tips: [
    "iPhone scans are big because they're high-resolution images. That's also why they compress so well — the savings are largest on exactly these files.",
    "Shooting documents in \"Most Compatible\" format (Settings → Camera → Formats) produces JPGs that are easier to compress and share than HEIC.",
    "Compression rasterises pages, so the smaller copy won't have selectable text. Keep the original if you need to search or copy from it.",
    "Browser memory on a phone is more limited than on a laptop. For very large PDFs, the PDF Editor app is the more reliable route.",
    "Always save the compressed file under a new name so your sharp original stays intact on the device.",
  ],
  mobileNote:
    "This is a phone-first task, and the PDF Editor app is built for it: compress offline, no upload, support for protected files, and a direct hand-off to Mail, Messages or the share sheet. For documents you shrink regularly, it's quicker than the browser each time.",
  faq: [
    {
      q: "Why are my iPhone PDFs so large?",
      a: "iPhone scans and photos are high-resolution images, and a PDF made from several of them is essentially a stack of big pictures. That's why they exceed email limits — and why they compress so effectively.",
    },
    {
      q: "Can I compress a PDF on iPhone without an app?",
      a: "Yes. The Compress PDF tool runs in Safari and processes the file on your device, so you can shrink a PDF without installing anything.",
    },
    {
      q: "Is my document uploaded when I use the browser tool?",
      a: "No. It's processed locally on your iPhone. Nothing is sent to a server, which matters for personal or financial documents.",
    },
    {
      q: "Will the text still be selectable afterwards?",
      a: "No. Compression re-renders pages as images, removing the selectable text layer. Keep the original if you need searchable text.",
    },
    {
      q: "What about password-protected PDFs?",
      a: "The browser can't process those. Use the PDF Editor app, which opens and compresses protected files offline.",
    },
  ],
  related: [
    { label: "Compress PDF — shrink in your browser", path: "/compress-pdf" },
    { label: "How to make a PDF smaller on Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
    { label: "How to reduce PDF file size for email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "How to edit a PDF on iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
