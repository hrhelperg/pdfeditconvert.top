import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-extract-pages-from-pdf",
  h1: "How to Extract Pages From a PDF",
  description:
    "Pull specific pages or ranges out of a PDF into a new file, in your browser. Perfect for sending just the pages someone needs.",
  updated: "2026-05-23",
  intro: [
    "Extracting pages is the answer to a very specific need: someone wants part of a document, not the whole thing. The bank needs page 3, the form needs the signature page, the proposal review only concerns the pricing section. Forwarding the entire 40-page file and saying \"see page 12\" is lazy and, for anything sensitive, careless.",
    "This guide uses the free Extract PDF Pages tool, which lets you pick the pages you want and save them as a brand-new PDF — all in your browser, with nothing uploaded. The original stays untouched; you just get a clean file containing only what you chose.",
    "It's one of the most useful PDF operations precisely because it doubles as a privacy tool: you send exactly the pages required and nothing else.",
  ],
  steps: [
    {
      title: "Open the Extract PDF Pages tool",
      body: "Go to the Extract PDF Pages tool in your browser. It runs entirely on your device — no upload, no account.",
    },
    {
      title: "Add your PDF",
      body: "Drag the file onto the drop zone or click to select it. The tool loads the page count so you can choose precisely.",
    },
    {
      title: "Choose the pages you want",
      body: "Enter individual pages or ranges — for example 3, then 8–10. Only the pages you list end up in the new file.",
    },
    {
      title: "Create the new PDF",
      body: "Run the extraction. The tool builds a fresh PDF containing just your selected pages, in the order you chose.",
    },
    {
      title: "Download and name it",
      body: "Save the extracted file with a name that says what it is — \"Signature-page.pdf\" or \"Pricing-section.pdf\".",
    },
    {
      title: "Confirm before you send",
      body: "Open the new PDF and check it contains only the intended pages. This is the moment to catch an off-by-one page number before it reaches someone.",
    },
  ],
  tips: [
    "Extract when you want a few pages collected into one new file; split when you want to break a document into several files. Match the tool to the goal.",
    "Extracting is a quiet privacy win: sending only the relevant pages means no accidental exposure of the rest of the document.",
    "Double-check page numbers against the document, not the PDF viewer's index — cover pages and inserts can shift the count by one.",
    "The original is never modified, so you can extract different page sets from the same file as many times as you need.",
    "To remove pages and keep the rest, extract the pages you want to keep — that's the cleanest way to drop a few unwanted pages.",
  ],
  mobileNote:
    "Need to send just the signed page back from your phone? The PDF Editor app extracts and shares specific pages in a few taps, offline — so the right page goes out without forwarding the whole confidential file.",
  faq: [
    {
      q: "How is extracting different from splitting?",
      a: "Extracting collects the pages you choose into a single new file. Splitting breaks a PDF into multiple separate files. Use extract to gather specific pages, split to divide a document.",
    },
    {
      q: "Can I pick non-consecutive pages?",
      a: "Yes. List individual pages and ranges together, like 1, 4, 9–12, and the new PDF contains exactly those pages in that order.",
    },
    {
      q: "Does extracting change the original?",
      a: "No. The source PDF is left intact; the tool creates a new file. You can run as many extractions as you like from the same original.",
    },
    {
      q: "Is my file uploaded?",
      a: "No. Extraction runs in your browser on your device, so confidential documents stay private.",
    },
    {
      q: "How do I remove pages instead of keeping them?",
      a: "Extract the pages you want to keep — the unwanted ones simply aren't included. That's the simplest route to dropping a few pages from a PDF.",
    },
  ],
  related: [
    { label: "Extract PDF Pages — pull pages in your browser", path: "/extract-pdf-pages" },
    { label: "Split PDF — divide a file by range", path: "/split-pdf" },
    { label: "How to split a PDF into separate files", path: "/guides/how-to-split-pdf-files" },
    { label: "How to remove unwanted pages from a PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Extract PDF Pages", path: "/extract-pdf-pages" },
};

export default content;
