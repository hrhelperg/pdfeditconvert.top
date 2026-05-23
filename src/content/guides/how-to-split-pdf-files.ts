import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-split-pdf-files",
  h1: "How to Split a PDF Into Separate Files",
  description:
    "Break one large PDF into smaller files by page range, in your browser. When to split versus extract, and how to keep the originals safe.",
  updated: "2026-05-23",
  intro: [
    "Splitting a PDF is what you do when one file is trying to be several documents at once: a scanned bundle that's really a contract plus its appendices, a 200-page report you only need one chapter of, or a merged batch that has to go back out as individual files. Rather than send the whole thing and ask people to find their part, you split it.",
    "This guide uses the free Split PDF tool, which divides a PDF by page range directly in your browser — nothing is uploaded. It's a fast, private way to turn one file into the smaller pieces you actually need to send or store.",
    "We'll also clear up a common point of confusion: the difference between splitting a PDF and extracting pages, because the right tool depends on what you're trying to end up with.",
  ],
  steps: [
    {
      title: "Open the Split PDF tool",
      body: "Go to the Split PDF tool in your browser. It runs on your device — no upload, no account.",
    },
    {
      title: "Add your PDF",
      body: "Drag the file onto the drop zone or click to choose it. The tool reads the page count so you can split by range.",
    },
    {
      title: "Decide where the document breaks",
      body: "Look at the page numbers and identify the boundaries — for example, pages 1–10 are the contract, 11–24 the appendix. Plan the ranges before you split.",
    },
    {
      title: "Enter the page range to split out",
      body: "Specify the range you want as its own file. Repeat for each section you need to peel off.",
    },
    {
      title: "Download each piece",
      body: "The tool produces a new PDF for the range you chose. Save each with a clear, section-specific name.",
    },
    {
      title: "Keep the original intact",
      body: "Splitting doesn't modify the source — your original PDF stays whole on your device. Hold on to it until you've confirmed every split came out right.",
    },
  ],
  tips: [
    "Split when you want several separate documents; extract when you want to pull a few pages into one new file. They sound similar but produce different results.",
    "Note the page boundaries before you start. Splitting a long report is much faster when you already know that the methodology starts on page 31.",
    "Name each split file for its contents, not its range — \"Appendix-B.pdf\" is more useful to a recipient than \"pages-25-40.pdf\".",
    "Splitting a huge PDF first also makes other operations faster: compressing or converting a 15-page section beats wrestling with the full 300-page file.",
    "Password-protected PDFs can't be processed in the browser. Remove the password first, or use the PDF Editor app, which supports protected files.",
  ],
  mobileNote:
    "On a phone, splitting is often about sending the right slice to the right person from wherever you are. The PDF Editor app splits, extracts and shares in a few taps, and works offline — useful when you're on site and need to send just the signed pages back.",
  faq: [
    {
      q: "What's the difference between split and extract?",
      a: "Splitting breaks one PDF into multiple separate files by range. Extracting pulls selected pages into a single new file. Use split to divide a document, extract to collect specific pages.",
    },
    {
      q: "Does splitting change my original file?",
      a: "No. The source PDF is untouched — the tool creates new files for the ranges you choose. Keep the original until you've checked the results.",
    },
    {
      q: "Is my PDF uploaded?",
      a: "No. Splitting runs in your browser on your device, so the file never leaves it — safe for contracts and confidential reports.",
    },
    {
      q: "How many pieces can I split a PDF into?",
      a: "As many as you need — repeat the range selection for each section. Very large PDFs may strain browser memory, in which case the PDF Editor app is the better option.",
    },
    {
      q: "Can I split a password-protected PDF?",
      a: "Not in the browser. Remove the password first, or use the PDF Editor mobile app, which can open protected files.",
    },
  ],
  related: [
    { label: "Split PDF — divide a file in your browser", path: "/split-pdf" },
    { label: "Extract PDF pages — pull pages into a new file", path: "/extract-pdf-pages" },
    { label: "How to extract pages from a PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "How to merge PDF files", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Split PDF", path: "/split-pdf" },
};

export default content;
