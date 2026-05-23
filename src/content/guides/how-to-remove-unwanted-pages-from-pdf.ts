import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-remove-unwanted-pages-from-pdf",
  h1: "How to Remove Unwanted Pages From a PDF",
  description:
    "Drop blank pages, cover sheets or irrelevant sections from a PDF in your browser by keeping only the pages you want. Clean files, private process.",
  updated: "2026-05-23",
  intro: [
    "Plenty of PDFs arrive with pages you don't want: a fax cover sheet, a blank page the scanner threw in, a terms-and-conditions appendix nobody asked for, or duplicate pages from a sloppy merge. Sending the document with that clutter still attached looks careless and, occasionally, leaks information you'd rather not share.",
    "The cleanest way to remove pages in the browser is to keep the ones you want. This guide uses the free Extract PDF Pages tool: instead of deleting unwanted pages one by one, you list the pages to keep, and everything else is simply left out of the new file. It runs entirely on your device — nothing is uploaded.",
    "The result is a tidy PDF with only the pages that belong, and your original stays intact in case you got a page number wrong.",
  ],
  steps: [
    {
      title: "Identify the pages to remove",
      body: "Open the PDF and note which pages are unwanted — the blank page 2, the cover sheet, the duplicate at the end. Then work out which pages you want to keep.",
    },
    {
      title: "Open the Extract PDF Pages tool",
      body: "Go to the Extract PDF Pages tool in your browser. It runs on your device with no upload or account.",
    },
    {
      title: "Add your PDF",
      body: "Drag the file onto the drop zone or click to choose it. The tool loads the page count so you can be precise.",
    },
    {
      title: "List the pages you want to keep",
      body: "Enter the pages and ranges to keep — for example 1, 3–7, 9. The unwanted pages aren't listed, so they don't appear in the result.",
    },
    {
      title: "Create the cleaned-up PDF",
      body: "Run the extraction. The tool builds a new file containing only the pages you kept, in order.",
    },
    {
      title: "Check and save",
      body: "Open the new PDF, confirm the unwanted pages are gone and nothing important went with them, then save it with a clear name.",
    },
  ],
  tips: [
    "Removing pages by keeping the rest is the reliable browser method — you describe what you want, not what to delete, which avoids off-by-one slips.",
    "Watch for blank pages from scanners. A document feeder often inserts a blank between double-sided originals; those are the easiest pages to forget to drop.",
    "Removing a page is also a privacy step. Internal notes, pricing you didn't mean to share, or a previous recipient's details can hide on pages you don't need to send.",
    "Verify page numbers against the document itself. A cover page can offset the count so that \"page 5\" in your head is page 6 in the file.",
    "Keep the original. If you accidentally drop a page you needed, the untouched source is right there to redo from.",
  ],
  mobileNote:
    "Trimming a stray page before forwarding a document from your phone is a few taps in the PDF Editor app, which deletes pages directly and works offline — so the cover sheet or blank page never makes it into the copy you send.",
  faq: [
    {
      q: "How do I delete pages using a browser tool?",
      a: "Keep the pages you want with the Extract PDF Pages tool. By listing only the pages to keep, the unwanted ones are left out of the new file — a clean way to remove pages without a delete step.",
    },
    {
      q: "Will my original file be changed?",
      a: "No. The tool creates a new PDF and leaves the source untouched, so a mistake is easy to undo by starting again.",
    },
    {
      q: "Is the file uploaded anywhere?",
      a: "No. Everything runs in your browser on your device, which matters when the pages you're removing contain sensitive information.",
    },
    {
      q: "Can I remove non-consecutive pages?",
      a: "Yes. Keep a mix of individual pages and ranges, like 1, 4, 8–10, and every page you didn't list is dropped.",
    },
    {
      q: "What if I want to delete pages directly instead?",
      a: "The PDF Editor mobile app lets you tap and delete specific pages, which some people find more intuitive than the keep-what-you-want approach.",
    },
  ],
  related: [
    { label: "Extract PDF Pages — keep only what you want", path: "/extract-pdf-pages" },
    { label: "Split PDF — divide a file by range", path: "/split-pdf" },
    { label: "How to extract pages from a PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "How to organize PDF files", path: "/guides/how-to-organize-pdf-files" },
  ],
  parentHub: { label: "Extract PDF Pages", path: "/extract-pdf-pages" },
};

export default content;
