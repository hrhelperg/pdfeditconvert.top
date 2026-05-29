import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-document-workflows",
  h1: "Privacy-First Document Workflows (End-to-End Without Uploads)",
  description:
    "An entire document workflow — capture, edit, sign, send, archive — that keeps files on your devices and out of third-party servers. The realistic shape and the tools.",
  updated: "2026-05-29",
  intro: [
    "Most document workflows leak. You scan a sensitive paper with one app, upload it to compress with a website, email it through a third-party 'enhance' tool, and end up with three or four servers holding copies of something you thought stayed yours. Each step is convenient; the cumulative privacy cost is large and invisible.",
    "A privacy-first workflow doesn't refuse modern tools — it picks the ones that don't move your files. The capture happens on your camera. The compression and editing happen in your browser. The signing happens in an app on your phone. The transfer happens through a channel you trust. At no point does the document live on a stranger's server.",
    "This guide describes the end-to-end shape, the tools that fit at each step, and where local processing genuinely can't cover (which is a smaller set than most people think). It's the realistic privacy-first workflow, not the absolutist one.",
  ],
  steps: [
    {
      title: "Capture: scan locally with your phone",
      body: "Scan to PDF on your phone runs the camera and the page-detection on-device. No upload, no cloud processing. The PDF you produce starts and stays local until you decide to share.",
    },
    {
      title: "Edit and clean up in a browser tab",
      body: "Compress PDF, Reorder PDF Pages, Extract PDF Pages, Rotate PDF, Add Watermark to PDF — all run in the browser. The file is read by JavaScript on your machine; the server never sees the content.",
    },
    {
      title: "Sign with a real signature, locally",
      body: "Sign PDF or the PDF Editor app captures a drawn signature on your device and embeds it into the file. No third-party signing platform sees the document.",
    },
    {
      title: "Share through a trusted channel",
      body: "AirDrop, Signal, encrypted email, end-to-end encrypted messaging. The channel encrypts the transfer; the recipient receives the file without it passing through an intermediary that can read it.",
    },
    {
      title: "Archive on encrypted storage",
      body: "Local drive with full-disk encryption, or zero-knowledge cloud backup. Don't store sensitive PDFs in plain cloud storage — that's a server reading your files.",
    },
    {
      title: "Audit and delete on a schedule",
      body: "Quarterly walk through sensitive PDFs. Delete what you no longer need. Each retained sensitive file is a small ongoing risk; reducing the inventory reduces the exposure.",
    },
  ],
  tips: [
    "Capture, edit and sign can all happen on a single device. The fewer device hops, the smaller the leak surface.",
    "Verify a 'browser-based' tool actually runs locally before trusting it. Devtools network tab is the quickest check.",
    "Encrypt sensitive PDFs with passwords even when sharing through encrypted channels. Defense in depth.",
    "Avoid 'send link' file-share services for sensitive material. The link is a server-side handle; the file lives on someone else's disk.",
    "Don't print sensitive PDFs unless you must. The printer queue and the paper are both additional copies you have to track.",
  ],
  mobileNote:
    "Privacy-first workflows are easier on a phone than people think. The PDF Editor app handles capture, edit, sign and share locally on iOS and Android, so a sensitive document can move from paper to a recipient without ever touching a third-party server.",
  faq: [
    {
      q: "Can a real workflow really stay local?",
      a: "For most steps, yes. Capture, compress, edit, sign and ordinary transfer can all happen without uploads. Some operations (high-quality OCR, advanced redaction) sometimes need server help; pick those tools carefully if you need them.",
    },
    {
      q: "Isn't all this paranoid?",
      a: "Not for sensitive material. The uploads-everywhere workflow worked when documents were less sensitive and breaches were rarer. Both have changed. The privacy-first workflow takes the same time once it's habit.",
    },
    {
      q: "How do I know a browser tool is actually local?",
      a: "Open devtools, network tab, add a file. If you don't see a large outbound upload, it's processing locally. The tools on this site fit that pattern.",
    },
    {
      q: "What about backups?",
      a: "Zero-knowledge cloud backup (the provider can't read your files) is fine. Plain cloud backup of sensitive PDFs isn't private — the provider can read everything.",
    },
    {
      q: "Where does the workflow break?",
      a: "Two places: when a workflow demands a specific paid platform (regulated industries), and when the recipient uses an uploading workflow on their end. Privacy depends on both sides.",
    },
  ],
  related: [
    { label: "PDF tools — browser-based, no upload", path: "/pdf-tools" },
    { label: "Privacy-first PDF tools", path: "/guides/privacy-first-pdf-tools" },
    { label: "Local browser PDF processing, explained", path: "/guides/local-browser-pdf-processing-explained" },
    { label: "Browser-based document processing benefits", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "PDF tools — free, browser-based", path: "/pdf-tools" },
};

export default content;
