import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-before-sharing",
  h1: "How to Prepare a PDF Before Sharing It",
  description:
    "A pre-send checklist for PDFs: trim stray pages, fix orientation, shrink the size and label drafts. Send a clean, right-sized, intentional document.",
  updated: "2026-05-23",
  intro: [
    "The minute before you hit send is the cheapest time to catch a problem with a PDF. Once it's in someone's inbox, the blank page, the sideways scan, the 40 MB size, or the internal note you forgot to remove is their problem too — and yours to apologise for. A short, deliberate pre-send pass prevents almost all of it.",
    "This guide is that pass: a practical checklist that takes a couple of minutes and uses free browser tools, each running on your device with nothing uploaded. It's aimed at the documents that actually go out to other people — quotes, contracts, applications, reports.",
    "None of this is about polish for its own sake. It's about a recipient opening your file and finding exactly what they expected, at a size they can actually receive, with nothing extra attached.",
  ],
  steps: [
    {
      title: "Confirm it's the right, final version",
      body: "Open the file and check it's the latest draft, fully edited. A PDF is a snapshot — fixing a typo after sending means resending.",
    },
    {
      title: "Remove anything that shouldn't go out",
      body: "Drop blank pages, cover sheets, internal notes and pages meant for someone else by keeping only what belongs, using the Extract PDF Pages tool.",
    },
    {
      title: "Fix orientation and order",
      body: "Use the Rotate PDF tool on sideways pages and the Reorder PDF Pages tool on anything out of sequence, so the document reads cleanly start to finish.",
    },
    {
      title: "Get the size under the limit",
      body: "If the file is heavy — scans and photos make it so — run it through the Compress PDF tool to fit typical 10–25 MB email and portal limits.",
    },
    {
      title: "Label its status if it isn't final",
      body: "If you're sharing a draft for review, add a DRAFT watermark with the Add Watermark to PDF tool so no one mistakes it for the signed version.",
    },
    {
      title: "Name it clearly and send",
      body: "Give it a descriptive, dated filename so it's obvious in the recipient's inbox and easy to find later, then attach or upload it.",
    },
  ],
  tips: [
    "The most common pre-send miss is a page that shouldn't be there — a blank, a duplicate, or a page with details meant for someone else. Check page by page.",
    "Right-size for the channel: email caps around 25 MB, many upload portals far lower. Compressing a scan-heavy file is usually the fix.",
    "A DRAFT or CONFIDENTIAL watermark sets expectations and prevents a working version being treated as final — cheap insurance on anything not yet signed.",
    "A clear filename is part of preparing the document. It's the first thing the recipient sees and the thing you'll search for later.",
    "For anything genuinely sensitive, consider a password as well — preparation isn't just tidiness, it's not over-sharing.",
  ],
  mobileNote:
    "Sending documents straight from your phone is exactly where a quick prep pass pays off. The PDF Editor app lets you trim pages, rotate, compress, watermark and rename in one place before it goes out — offline, with nothing uploaded.",
  faq: [
    {
      q: "What should I check before sending a PDF?",
      a: "That it's the final version, free of stray or sensitive pages, correctly oriented and ordered, small enough for the channel, labelled if it's a draft, and clearly named. A two-minute pass covers all of it.",
    },
    {
      q: "How do I make sure I'm not sharing the wrong pages?",
      a: "Keep only the pages that belong using the Extract PDF Pages tool, and review the result page by page. Internal notes and other recipients' details often hide on pages you don't need to send.",
    },
    {
      q: "Why does file size matter so much?",
      a: "Email services reject attachments over roughly 25 MB and many upload portals cap far lower. A scan-heavy PDF easily exceeds those, so compressing it prevents a bounce or a rejected upload.",
    },
    {
      q: "Are these preparation tools private?",
      a: "Yes. The extract, rotate, reorder, compress and watermark tools all run in your browser on your device — nothing is uploaded.",
    },
    {
      q: "Should every shared PDF be password-protected?",
      a: "No — only genuinely sensitive ones. A password adds friction for the recipient, so reserve it for documents where the contents truly need protecting.",
    },
  ],
  related: [
    { label: "Compress PDF — shrink for email", path: "/compress-pdf" },
    { label: "Add Watermark to PDF — label drafts", path: "/add-watermark-to-pdf" },
    { label: "How to reduce PDF file size for email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "How to share a PDF from your phone", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "All free PDF tools", path: "/pdf-tools" },
};

export default content;
