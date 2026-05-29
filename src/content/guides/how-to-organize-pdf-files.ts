import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-pdf-files",
  h1: "How to Organize PDF Files (A Practical Workflow)",
  description:
    "Bring order to messy PDFs: merge related files, reorder pages, drop clutter and name things properly. A repeatable workflow using free browser tools.",
  updated: "2026-05-23",
  intro: [
    "\"Organize my PDFs\" usually means one of two things: tidy up a single messy document, or wrangle a folder full of related files into something coherent. Both come down to the same handful of moves — combine what belongs together, get pages in the right order, remove what doesn't belong, and name everything so you can find it later.",
    "This guide lays out a repeatable workflow built from free browser tools, each running on your device with nothing uploaded. None of the individual steps is complicated; the value is in doing them in the right order so you're not redoing work.",
    "Think of it less as a single tool and more as a routine you can apply to any pile of documents — a tax folder, a project's paperwork, a stack of scans — to turn chaos into something you'd be happy to hand over.",
  ],
  steps: [
    {
      title: "Take stock of what you have",
      body: "List the files and what each contains. Decide what the finished result should look like — one combined document, or several clean files — before touching anything.",
    },
    {
      title: "Combine files that belong together",
      body: "Use the Merge PDF tool to join related documents into one, in the order you want. A contract and its annexes, a report and its appendix — one file each.",
    },
    {
      title: "Fix the page order",
      body: "Run the Reorder PDF Pages tool on anything that came out of sequence — reversed scans, sections in the wrong place — until each document reads correctly.",
    },
    {
      title: "Remove the clutter",
      body: "Drop blank pages, cover sheets and duplicates by keeping only the pages you want with the Extract PDF Pages tool.",
    },
    {
      title: "Straighten sideways pages",
      body: "Use the Rotate PDF tool on any pages that scanned in landscape or upside down so the whole document reads upright.",
    },
    {
      title: "Name and store consistently",
      body: "Give every file a descriptive, dated name — \"Invoice-Acme-2026-05.pdf\" — and file it in a sensible folder. Consistent names are what make a collection searchable months later.",
    },
  ],
  tips: [
    "Do it in order: merge, reorder, remove, rotate, name. Naming first then merging means renaming again; reordering before removing wastes effort on pages you'll drop.",
    "Adopt one naming convention and stick to it. \"Type-Who-Date\" (Invoice-Acme-2026-05) sorts and searches far better than ad-hoc names.",
    "Keep originals in a separate folder until the organized versions are confirmed good. Tidying is reversible only if you didn't overwrite the source.",
    "Compress at the very end if the files are heading to email or a portal — there's no point compressing a document you're about to restructure.",
    "Browser memory limits very large jobs. For hundreds of pages or files, the PDF Editor app handles the heavy lifting more comfortably.",
  ],
  mobileNote:
    "A lot of document mess starts on the phone — scans, screenshots, emailed attachments. The PDF Editor app lets you merge, reorder, trim and rename in one place, offline, so you can keep things tidy as they arrive instead of facing a pile later.",
  faq: [
    {
      q: "What's the right order to organize a messy PDF?",
      a: "Merge related files first, then reorder pages, then remove clutter, then fix rotation, and finally name and store. Working in that order avoids redoing steps.",
    },
    {
      q: "Are these tools private?",
      a: "Yes. The merge, reorder, extract and rotate tools all run in your browser on your device — nothing is uploaded, which matters for personal or financial paperwork.",
    },
    {
      q: "How should I name PDF files?",
      a: "Use a consistent, descriptive pattern with a date, like \"Type-Who-Date.pdf\". Consistency is what makes a folder searchable and sortable later.",
    },
    {
      q: "Can I organize a large batch at once?",
      a: "Browser tools handle everyday volumes well, but very large batches can strain memory. The PDF Editor app is built for bigger jobs and works offline.",
    },
    {
      q: "Should I compress while organizing?",
      a: "Compress last, once the document is finalised and only if it needs to fit email or upload limits. Compressing mid-process just gets undone by later edits.",
    },
  ],
  related: [
    { label: "All free PDF tools", path: "/pdf-tools" },
    { label: "Merge PDF — combine files", path: "/merge-pdf" },
    { label: "How to reorder pages in a PDF", path: "/guides/how-to-reorder-pdf-pages" },
    { label: "How to remove unwanted pages from a PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "All free PDF tools", path: "/pdf-tools" },
};

export default content;
