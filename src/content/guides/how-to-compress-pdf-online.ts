import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-online",
  h1: "How to Compress a PDF Online (Without Uploading It)",
  description:
    "Shrink a PDF right in your browser — no upload, no account. How on-device compression differs from typical online tools, and the quality trade-off.",
  updated: "2026-05-23",
  intro: [
    "\"Compress PDF online\" usually conjures a familiar, slightly uncomfortable picture: upload your file to a stranger's server, wait, download the result, and hope the document you just handed over wasn't anything you cared about. There's a better version of that workflow — one that runs in the browser tab itself, so the file never leaves your device.",
    "This guide uses the free Compress PDF tool, which does its work locally using your device's own processor. It's \"online\" in the sense that you reach it through a web page, but your PDF is never sent anywhere. That distinction matters most for the documents people actually compress: scanned contracts, statements, applications.",
    "We'll walk through the steps, explain the quality trade-off honestly, and flag the kinds of files where browser compression either shines or hits a wall.",
  ],
  steps: [
    {
      title: "Open the Compress PDF tool",
      body: "Go to the Compress PDF tool in your browser. It loads in the page and processes your file on your device — no upload, no sign-up.",
    },
    {
      title: "Add your PDF",
      body: "Drag the file onto the drop zone or click to choose it. Nothing is transmitted; the file is read locally.",
    },
    {
      title: "Pick a compression level",
      body: "Low keeps the most detail, Recommended balances size and quality, Strong is smallest. For email and uploads, Recommended is the usual sweet spot.",
    },
    {
      title: "Compress",
      body: "Run it. The tool re-renders and re-encodes the pages locally, then shows the before-and-after size and the percentage saved.",
    },
    {
      title: "Check the result looks acceptable",
      body: "Open the compressed file and look at the pages. Scans should still be readable; if a level looks too rough, step back to a lighter one.",
    },
    {
      title: "Download the smaller file",
      body: "Save it as a new file so your original stays intact. The compressed copy is ready to attach or upload.",
    },
  ],
  tips: [
    "\"Online\" here doesn't mean \"uploaded\". The file is processed in your browser on your device, which is the safer way to compress anything sensitive.",
    "Compression is lossy — no honest tool claims otherwise. Lower levels keep more detail; pick the one that still looks acceptable for your use.",
    "To get real savings in the browser, the tool re-renders pages as images, so text in the output is no longer selectable or searchable. Keep the original if you need that.",
    "Text-only or vector PDFs barely shrink because there's little image data to compress — the biggest gains come from scans and photo-heavy files.",
    "Password-protected PDFs can't be processed in the browser. Remove the password first, or use the PDF Editor app, which supports protected files.",
  ],
  mobileNote:
    "Compressing a sensitive document on the move is exactly where on-device processing earns its keep. The PDF Editor app compresses entirely offline — you can shrink a contract in airplane mode and not a byte leaves your phone — and it handles password-protected files too.",
  faq: [
    {
      q: "Is my PDF actually uploaded to a server?",
      a: "No. Despite being reached through a web page, the Compress PDF tool runs in your browser and processes the file on your device. Nothing is transmitted, which makes it safe for confidential documents.",
    },
    {
      q: "How much smaller will my file get?",
      a: "It depends on content. Scanned and image-heavy PDFs often shrink 50–90%; text-only PDFs may barely change. The tool shows the exact before-and-after size.",
    },
    {
      q: "Will quality drop?",
      a: "Yes, somewhat — this is lossy compression and we don't pretend otherwise. Lower levels preserve more detail. Pick the level that looks acceptable for how the document will be used.",
    },
    {
      q: "Why can't I select the text after compressing?",
      a: "To achieve real size savings in the browser, each page is rasterised to an image, which removes the selectable text layer. If you need searchable text, keep the original or use a lighter approach.",
    },
    {
      q: "Can I compress a protected PDF this way?",
      a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app, which can open and compress protected files.",
    },
  ],
  related: [
    { label: "Compress PDF — shrink in your browser", path: "/compress-pdf" },
    { label: "How to compress a PDF without losing quality", path: "/guides/how-to-compress-pdf" },
    { label: "How to reduce PDF file size for email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Privacy-first PDF tools", path: "/guides/privacy-first-pdf-tools" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
