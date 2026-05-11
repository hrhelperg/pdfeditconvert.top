import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-merge-pdf-files",
  h1: "How to Merge PDF Files on Phone or Desktop",
  description:
    "Combine multiple PDFs into one document. Step-by-step mobile workflow with the PDF Editor app.",
  updated: "2026-05-11",
  intro: [
    "Combining PDFs is one of the most common operations a small business or student needs. Whether it's scanned receipts going to an accountant or research papers being bundled for a deadline, having one tidy file beats juggling attachments.",
    "This guide shows how to merge PDFs on your phone using the PDF Editor app. The same steps work on iPhone and Android. If you need to merge on desktop instead, most modern PDF tools support a similar drag-and-drop flow.",
  ],
  steps: [
    {
      title: "Open the PDF Editor app",
      body: "Tap the Merge tile on the home screen.",
    },
    {
      title: "Add the files you want to combine",
      body: "Import each PDF via Files, iCloud Drive, Google Drive, or by sharing from any app.",
    },
    {
      title: "Reorder the queue",
      body: "Long-press any item and drag it to the right position. The order in the queue is the order in the final file.",
    },
    {
      title: "Tap Merge",
      body: "The app combines the files and shows the result for review.",
    },
    {
      title: "Save or share",
      body: "Save to Files or share directly via email, Drive, or any messaging app.",
    },
  ],
  tips: [
    "Add a cover page if the merged document goes to an external recipient — it makes the bundle obvious.",
    "Rotate landscape pages before merging if some files were scanned sideways.",
    "Bookmark merged sections so the recipient can jump straight to the relevant part.",
  ],
  mobileNote:
    "Mobile merging works particularly well when scans and digital PDFs need to be combined — the app handles both in a single queue.",
  faq: [
    {
      q: "Is there a maximum number of files?",
      a: "No hard limit. Very large merges (50+ files) just take a bit longer.",
    },
    {
      q: "Can I merge a Word doc with a PDF?",
      a: "Convert the Word doc to PDF first (Convert tile), then add it to the merge queue.",
    },
  ],
  related: [
    { label: "Merge PDF — full overview", path: "/merge-pdf" },
    { label: "Split PDF — the reverse", path: "/split-pdf" },
    { label: "Compress PDF", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "Merge PDF", path: "/merge-pdf" },
};

export default content;
