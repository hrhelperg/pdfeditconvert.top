import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-rotate-pdf-pages",
  h1: "How to Rotate Pages in a PDF",
  description:
    "Rotate all or selected PDF pages by 90, 180 or 270 degrees in your browser. Fix landscape scans and upside-down pages so the document reads right.",
  updated: "2026-05-23",
  intro: [
    "A PDF that opens sideways is a small but persistent annoyance. You tilt your head, or you keep rotating your phone and the page rotates with it. The fix is to rotate the page itself so it's stored upright — then it reads correctly for everyone, on every device, without anyone craning their neck.",
    "This guide uses the free Rotate PDF tool, which turns all or selected pages by 90, 180 or 270 degrees, directly in your browser with nothing uploaded. It's the right fix whether one page is wrong or the whole document came out of the scanner in landscape.",
    "Rotating is a permanent change to how the page is stored, so we'll cover how to apply it to just the pages that need it and confirm the result before you save.",
  ],
  steps: [
    {
      title: "Open the Rotate PDF tool",
      body: "Go to the Rotate PDF tool in your browser. It runs on your device — no upload, no account.",
    },
    {
      title: "Add your PDF",
      body: "Drag the file onto the drop zone or click to choose it. The tool shows the pages so you can see which ones are wrong.",
    },
    {
      title: "Decide which pages to rotate",
      body: "Rotate every page, or just the ones that are off — a single landscape table in an otherwise upright report, for instance. Note which pages and which direction.",
    },
    {
      title: "Choose the rotation amount",
      body: "Pick 90° for a page lying on its side, 180° for an upside-down page, or 270° for one rotated the other way. Apply it to your chosen pages.",
    },
    {
      title: "Check every page sits upright",
      body: "Confirm the corrected pages now read normally and you didn't accidentally rotate ones that were already fine.",
    },
    {
      title: "Download the fixed PDF",
      body: "Export the rotated file and save it with a clear name. The original stays untouched in case you need to start over.",
    },
  ],
  tips: [
    "Rotate only the pages that are wrong. Applying a blanket rotation to a document where most pages are fine just creates new problems.",
    "Landscape pages — wide tables, charts, spreadsheets exported to PDF — are often meant to be landscape. Rotate only if the content is genuinely sideways, not if it's correctly wide.",
    "If pages are both out of order and rotated, fix rotation first, then reorder — it's easier to judge sequence when every page is upright.",
    "Rotating before merging means the combined document is correct from the start, with no sideways surprises buried in the middle.",
    "Keep the original. If you rotate the wrong way, it's quicker to redo from the untouched file than to rotate back and forth.",
  ],
  mobileNote:
    "Sideways scans are most likely to happen on a phone, and that's where they're quickest to fix. The PDF Editor app rotates pages with a tap and works offline, so you can straighten a freshly scanned document before it ever leaves the device.",
  faq: [
    {
      q: "Can I rotate just one page?",
      a: "Yes. Select only the pages that are wrong and rotate those, leaving the rest of the document as it is.",
    },
    {
      q: "What rotation should I choose?",
      a: "90° for a page lying on its side, 180° for an upside-down page, and 270° for one turned the opposite way. Pick the amount that brings the content upright.",
    },
    {
      q: "Is the rotation permanent?",
      a: "It's saved into the exported file so the page reads upright everywhere. Your original stays untouched, so you can always redo it if needed.",
    },
    {
      q: "Is my PDF uploaded?",
      a: "No. Rotation runs in your browser on your device, so the file never leaves it.",
    },
    {
      q: "My scan is sideways and out of order — what first?",
      a: "Rotate the pages upright first, then use the Reorder PDF Pages tool to fix the sequence. Judging order is easier once everything is the right way up.",
    },
  ],
  related: [
    { label: "Rotate PDF — fix orientation in your browser", path: "/rotate-pdf" },
    { label: "Reorder PDF Pages — fix the sequence", path: "/reorder-pdf-pages" },
    { label: "How to fix sideways PDF pages", path: "/guides/how-to-fix-sideways-pdf-pages" },
    { label: "How to reorder pages in a PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Rotate PDF", path: "/rotate-pdf" },
};

export default content;
