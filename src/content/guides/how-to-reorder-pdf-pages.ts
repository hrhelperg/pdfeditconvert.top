import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reorder-pdf-pages",
  h1: "How to Reorder Pages in a PDF",
  description:
    "Rearrange PDF pages into the right sequence in your browser. Fix scans that came out backwards or merged files that landed out of order.",
  updated: "2026-05-23",
  intro: [
    "Pages end up in the wrong order more often than you'd think. A document feeder pulls a stack and scans it back-to-front. A merge drops two files together but in the wrong sequence. An appendix that should sit at the end lands in the middle. Whatever the cause, the fix is the same: rearrange the pages until the document reads the way it should.",
    "This guide uses the free Reorder PDF Pages tool, which previews every page and lets you move them with simple controls, directly in your browser — nothing is uploaded. You see thumbnails, shuffle them into place, and download the corrected file.",
    "It's a small operation with an outsized effect: a document in the right order reads as intentional, while one in the wrong order makes the whole thing look careless.",
  ],
  steps: [
    {
      title: "Open the Reorder PDF Pages tool",
      body: "Go to the Reorder PDF Pages tool in your browser. It runs on your device — no upload, no account.",
    },
    {
      title: "Add your PDF",
      body: "Drag the file onto the drop zone or click to choose it. The tool renders a thumbnail of every page so you can see the current order at a glance.",
    },
    {
      title: "Spot what's out of place",
      body: "Scan the thumbnails for pages that are reversed, misplaced or duplicated. Knowing the target order before you start makes the moves quick.",
    },
    {
      title: "Move pages into the right sequence",
      body: "Use the controls to shift each page to its correct position. Work from the front of the document toward the back so positions stay predictable.",
    },
    {
      title: "Review the new order",
      body: "Read through the thumbnails top to bottom once more. The sequence shown is the sequence you'll get in the file.",
    },
    {
      title: "Download the corrected PDF",
      body: "Export the reordered file and save it with a clear name. Keep the original until you've confirmed the new order is right.",
    },
  ],
  tips: [
    "If a whole scan came out reversed, reordering fixes the sequence — but a sideways page is a rotation problem, handled by the Rotate PDF tool instead.",
    "Reorder before you compress or convert. It's easier to get the structure right first, then run the heavier operations on the finished document.",
    "Work front-to-back when moving pages so each move doesn't shuffle the positions you've already set.",
    "For documents that combine several sources, reorder right after merging while the intended structure is still fresh in your mind.",
    "Keep the original file. If a reorder goes wrong, it's far quicker to start again from the untouched source.",
  ],
  mobileNote:
    "Reordering on a phone is a thumbnail-dragging job, and the PDF Editor app makes it tactile: press, drag, drop, done — offline and without uploading the file. Handy right after scanning, when pages often need a quick reshuffle.",
  faq: [
    {
      q: "Can I fix a scan that came out in reverse order?",
      a: "Yes. Reordering lets you flip the sequence so the last-scanned page returns to the front. If pages are also rotated, fix orientation with the Rotate PDF tool.",
    },
    {
      q: "Does reordering change the page content?",
      a: "No. Only the sequence changes — each page's content and orientation stay exactly as they were.",
    },
    {
      q: "Is my PDF uploaded?",
      a: "No. Reordering runs in your browser on your device, so the file stays private.",
    },
    {
      q: "Can I delete pages while reordering?",
      a: "Reordering is about sequence. To drop pages, extract the ones you want to keep with the Extract PDF Pages tool, which leaves the unwanted pages out.",
    },
    {
      q: "Will the original file be affected?",
      a: "No. The tool produces a new, reordered PDF and leaves your source untouched, so you can retry from the original if needed.",
    },
  ],
  related: [
    { label: "Reorder PDF Pages — rearrange in your browser", path: "/reorder-pdf-pages" },
    { label: "Rotate PDF — fix sideways pages", path: "/rotate-pdf" },
    { label: "How to organize PDF files", path: "/guides/how-to-organize-pdf-files" },
    { label: "How to merge PDF files", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Reorder PDF Pages", path: "/reorder-pdf-pages" },
};

export default content;
