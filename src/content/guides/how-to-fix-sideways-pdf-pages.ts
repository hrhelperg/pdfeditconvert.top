import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-sideways-pdf-pages",
  h1: "How to Fix Sideways or Upside-Down PDF Pages",
  description:
    "Permanently straighten PDF pages that open sideways or upside down, in your browser. Why rotating your screen doesn't help and what actually fixes it.",
  updated: "2026-05-23",
  intro: [
    "You open a PDF and a page is lying on its side. You rotate it in the viewer, it looks fine — then you send it, and the recipient sees it sideways again. That's the trap: rotating in a viewer often only changes how you see it, not how the page is stored. To fix it for everyone, you have to rotate the page itself and save the change.",
    "This guide does exactly that with the free Rotate PDF tool, which turns pages 90, 180 or 270 degrees and bakes the correction into a new file, all in your browser with nothing uploaded. Whether one page is wrong or a whole scan came out in landscape, this is the permanent fix.",
    "We'll also cover why pages end up sideways in the first place, so you can stop it happening at the source — usually a scanner or a phone held the wrong way.",
  ],
  steps: [
    {
      title: "Open the Rotate PDF tool",
      body: "Go to the Rotate PDF tool in your browser. It saves the rotation into the file itself, so the fix sticks for every viewer — no upload, no account.",
    },
    {
      title: "Add the PDF",
      body: "Drag the file onto the drop zone or click to choose it. The tool shows the pages so you can see which are sideways or upside down.",
    },
    {
      title: "Find the affected pages",
      body: "Note which pages are wrong and how far off they are — a quarter turn, a half turn. In a long scan it may be every page; in a report, maybe just one wide table.",
    },
    {
      title: "Rotate to upright",
      body: "Apply 90° to a page on its side, 180° to an upside-down page, or 270° to one turned the other way, until the content reads normally.",
    },
    {
      title: "Verify, then download",
      body: "Confirm every corrected page is upright and you didn't disturb pages that were already fine, then export the fixed PDF.",
    },
    {
      title: "Fix it at the source next time",
      body: "Sideways pages usually come from a scanner feeding pages in landscape or a phone held the wrong way. Adjusting the scan orientation or how you hold the phone prevents the problem recurring.",
    },
  ],
  tips: [
    "Rotating in a PDF viewer often only changes your view, not the saved file — which is why the page looks sideways again to the recipient. Saving a rotated copy is what actually fixes it.",
    "Only rotate the pages that are genuinely wrong. A correctly wide landscape table (a spreadsheet, a chart) is meant to be that way; rotating it makes things worse.",
    "If the whole scan is landscape, a single 90° rotation applied to every page usually sets it right in one move.",
    "Fix rotation before reordering or merging — it's much easier to judge sequence and combine documents when every page is upright.",
    "Keep the original. Over-rotating is easy to do; redoing from the untouched file is quicker than rotating back and forth.",
  ],
  mobileNote:
    "Sideways pages almost always originate on a phone, and that's the fastest place to fix them. The PDF Editor app rotates pages with a tap and saves the correction into the file, offline — so a freshly scanned document is upright before it ever leaves your hands.",
  faq: [
    {
      q: "Why does the page look fixed for me but sideways for others?",
      a: "Rotating in a viewer usually only changes your on-screen view, not how the page is stored. To fix it for everyone, rotate the page and save a new file — which is what the Rotate PDF tool does.",
    },
    {
      q: "How much should I rotate?",
      a: "90° for a page on its side, 180° for upside down, 270° for one turned the opposite way. Choose the amount that brings the content upright.",
    },
    {
      q: "Will fixing rotation reduce quality?",
      a: "No. Rotating changes orientation only; the page content and resolution are unchanged.",
    },
    {
      q: "Is my file uploaded?",
      a: "No. The rotation runs in your browser on your device, so the file stays private.",
    },
    {
      q: "How do I stop pages scanning sideways?",
      a: "Set your scanner to detect or match the page orientation, or hold your phone so the page fills the frame upright. Fixing it at capture saves the rotation step later.",
    },
  ],
  related: [
    { label: "Rotate PDF — straighten pages in your browser", path: "/rotate-pdf" },
    { label: "How to rotate pages in a PDF", path: "/guides/how-to-rotate-pdf-pages" },
    { label: "How to scan documents to PDF with your phone", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "How to reorder pages in a PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Rotate PDF", path: "/rotate-pdf" },
};

export default content;
