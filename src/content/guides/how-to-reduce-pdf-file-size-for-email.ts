import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-file-size-for-email",
  h1: "How to Reduce PDF File Size for Email",
  description:
    "Get a PDF under Gmail and Outlook attachment limits. The real caps, why scans blow past them, and how to shrink a file so it sends.",
  updated: "2026-05-23",
  intro: [
    "Email attachment limits haven't moved much in years, but the documents we attach keep getting heavier. Gmail stops you at 25 MB. Outlook draws the line around 20 MB. The recipient's server might cap lower still. So you attach a scanned contract or a photo-filled report, hit send, and it bounces — or worse, silently fails.",
    "This guide is about getting a PDF small enough to actually send. It uses the free Compress PDF tool, which runs in your browser with nothing uploaded, and covers the practical decisions: which compression level, when to compress versus split, and what to do when even compression isn't enough.",
    "The good news is that the files most likely to bounce — scans and image-heavy PDFs — are exactly the ones that compress the most.",
  ],
  steps: [
    {
      title: "Check how far over the limit you are",
      body: "Note the file size and your target. Gmail caps at 25 MB, Outlook around 20 MB, and some corporate servers lower. Knowing the gap tells you how aggressive to be.",
    },
    {
      title: "Open the Compress PDF tool",
      body: "Go to the Compress PDF tool in your browser. It processes the file on your device — nothing is uploaded, which matters for documents you'd email.",
    },
    {
      title: "Add the PDF and pick a level",
      body: "Start with Recommended. It balances size and quality and is enough for most files. Drop to Strong only if you're still over the limit.",
    },
    {
      title: "Compress and read the new size",
      body: "Run it and check the before-and-after figures. Scanned documents often fall well under 25 MB in one pass.",
    },
    {
      title: "If it's still too big, split it",
      body: "When a single document can't get small enough, use the Split PDF tool to send it as two or three smaller files — often more practical than crushing quality further.",
    },
    {
      title: "Attach and send",
      body: "Attach the compressed (or split) file. Open it once first to confirm it still reads cleanly at the level you chose.",
    },
  ],
  tips: [
    "Recommended level clears most email limits with quality to spare. Reserve Strong for files that are still over after the first pass.",
    "Scans and photo-heavy PDFs shrink the most; a text-only document is already small, so if it's huge, look for embedded images or fonts as the cause.",
    "If compression alone won't get you there, splitting the document beats degrading it into illegibility — two readable halves are better than one rough whole.",
    "Compression rasterises pages, so the sent copy won't have selectable text. If the recipient needs to copy text, send the original another way and a compressed preview by email.",
    "When even a compressed file is too big, a shared cloud link is the honest answer — see the guide on sending large PDF files.",
  ],
  mobileNote:
    "Most bounced attachments happen when you're firing off a document from your phone between other things. The PDF Editor app compresses offline and shares straight to your mail app, so a scan that's too big becomes a sendable file without leaving your inbox.",
  faq: [
    {
      q: "What's the actual email attachment limit?",
      a: "Gmail caps at 25 MB, Outlook around 20 MB, and some company mail servers lower still. Aim comfortably under your recipient's limit, not just your own.",
    },
    {
      q: "Why is my PDF too big to email in the first place?",
      a: "Almost always scanned pages or embedded photos. Each scanned page is essentially a high-resolution image, and a handful of them quickly exceed 25 MB.",
    },
    {
      q: "Which compression level should I use for email?",
      a: "Start with Recommended — it clears most limits while keeping the document readable. Move to Strong only if you're still over after the first pass.",
    },
    {
      q: "Is my file uploaded when I compress it?",
      a: "No. The Compress PDF tool runs in your browser on your device, so the document stays private even as you prepare it to send.",
    },
    {
      q: "What if compression still isn't enough?",
      a: "Split the PDF into smaller files, or share a cloud link instead of an attachment. Both beat compressing a document until it's unreadable.",
    },
  ],
  related: [
    { label: "Compress PDF — shrink for email", path: "/compress-pdf" },
    { label: "How to send large PDF files", path: "/guides/how-to-send-large-pdf-files" },
    { label: "How to compress a PDF online without uploading", path: "/guides/how-to-compress-pdf-online" },
    { label: "How to split a PDF into separate files", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
