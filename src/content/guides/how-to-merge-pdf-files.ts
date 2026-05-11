import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-merge-pdf-files",
  h1: "How to Merge PDF Files on Phone or Desktop",
  description:
    "Combine multiple PDFs into one document. Step-by-step mobile workflow with the PDF Editor app.",
  updated: "2026-05-11",
  intro: [
    "Combining PDFs is one of the most common document operations a small business or student needs. Whether it's scanned receipts going to an accountant, research papers being bundled for a deadline, or a quote being stitched together with its supporting documents, sending one tidy file beats juggling five attachments.",
    "This guide shows how to merge PDFs on your phone using the PDF Editor app for iPhone or Android. The flow is the same on both platforms: import the files, drag them into the order you want, and export one combined PDF. The whole operation usually takes under a minute.",
    "If you'd prefer to merge on a desktop, the principles transfer to most modern PDF tools. The mobile flow is the focus here because it's where most real-world merges happen — between meetings, at customer sites, or in transit.",
  ],
  steps: [
    {
      title: "Open the PDF Editor app",
      body: "Launch the app and tap the Merge tile on the home screen. No account is required to start.",
    },
    {
      title: "Add the files you want to combine",
      body: "Tap the + button. Import each PDF from Files, iCloud Drive, Google Drive, OneDrive, or by sharing from any other app. You can mix sources freely.",
    },
    {
      title: "Reorder the queue",
      body: "Long-press any item in the queue and drag it to the right position. The order in the queue is the order in the final file. Double-check the sequence before merging.",
    },
    {
      title: "Rotate any landscape pages",
      body: "If some source files were scanned sideways, tap the rotate icon next to each affected item so the merged document reads correctly.",
    },
    {
      title: "(Optional) Add a cover page",
      body: "Tap Add Cover to insert a simple title page with date and a one-line headline. Useful when the merged document is going to a client.",
    },
    {
      title: "Tap Merge",
      body: "The app combines all files into a single PDF and shows the result for review. Merging happens on-device, so even password-protected sources stay private.",
    },
    {
      title: "Review the merged file",
      body: "Scroll through to make sure pages are in order and orientation is correct. Use the Pages thumbnail view to quickly verify.",
    },
    {
      title: "Save or share",
      body: "Save to Files, sync to a cloud drive, or share directly via email, AirDrop, or any messaging app. Pick a descriptive filename — 'Contract-with-Annex-2026-05.pdf' beats 'Document(3).pdf' when the file shows up in someone's inbox.",
    },
  ],
  tips: [
    "Add a cover page when the merged document goes to an external recipient — it makes the bundle feel intentional rather than improvised.",
    "Rotate sideways-scanned pages before merging instead of after — fixing orientation later means re-exporting the whole file.",
    "If the merged PDF is going to be emailed, follow up with the Compress tool so the result fits under typical 25 MB attachment limits.",
    "Bookmark merged sections via the Pages view so the recipient can jump straight to the relevant part of a longer document.",
    "Keep the original source files until you've confirmed the merge looks right — never delete the originals from the same session.",
  ],
  mobileNote:
    "Mobile merging works particularly well when scans and digital PDFs need to be combined — the app handles both in a single queue, and you can capture a fresh scan on the spot to add to the merge. That's an awkward operation on desktop and a one-tap operation on a phone.",
  faq: [
    {
      q: "Is there a maximum number of files I can merge?",
      a: "There's no hard limit. Very large batches (50+ files) take longer on older phones but the app handles real-world merges without trouble. If you hit performance issues, split the job into two merges and combine the results.",
    },
    {
      q: "Can I merge a Word document with a PDF?",
      a: "Yes, indirectly. Convert the Word doc to PDF first using the Convert tile, then add the result to the merge queue alongside your other PDFs.",
    },
    {
      q: "What happens with password-protected source files?",
      a: "Enter the password when prompted. The app handles decryption locally; the merged output can be left unprotected or re-protected with a password of your choice.",
    },
    {
      q: "Will the original formatting change after merging?",
      a: "No. Each source page is preserved exactly. Only the page order changes, and a wrapper PDF is built around them.",
    },
    {
      q: "Can I undo a merge?",
      a: "Yes. The Split PDF feature breaks any PDF — merged or original — back into individual pages or ranges. The originals are never modified during a merge.",
    },
  ],
  related: [
    { label: "Merge PDF — full overview", path: "/merge-pdf" },
    { label: "Split PDF — the reverse operation", path: "/split-pdf" },
    {
      label: "How to compress a PDF after merging",
      path: "/guides/how-to-compress-pdf",
    },
  ],
  parentHub: { label: "Merge PDF", path: "/merge-pdf" },
};

export default content;
