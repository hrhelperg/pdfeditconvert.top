import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "compress-pdf-without-losing-too-much-quality",
  h1: "How to Compress a PDF Without Losing Too Much Quality",
  description:
    "Find the sweet spot between file size and quality. How compression levels trade detail for size, and how to pick the lightest one that still works.",
  updated: "2026-05-23",
  intro: [
    "There's an honest tension at the heart of PDF compression: smaller files mean less detail. Any tool promising big savings with zero quality loss is selling you something. The realistic goal isn't \"no loss\" — it's \"no loss you'll notice for this purpose.\" A document destined for screen reading can lose detail a print job can't.",
    "This guide is about finding that sweet spot using the free Compress PDF tool, which runs in your browser with nothing uploaded and shows the size saving for each level. Rather than reaching for maximum compression by reflex, you'll learn to pick the lightest level that still looks right.",
    "Getting this balance correct means files that send and upload without complaint, and still look the way you'd want when someone actually opens them.",
  ],
  steps: [
    {
      title: "Define \"good enough\" for this document",
      body: "Decide how the file will be used. On-screen reading tolerates more compression than printing; a portfolio piece needs more detail than an expense receipt. The use sets your quality floor.",
    },
    {
      title: "Open the Compress PDF tool",
      body: "Go to the Compress PDF tool. It processes the file on your device and reports the size saving, so you can judge the trade-off directly.",
    },
    {
      title: "Start with the lightest level",
      body: "Try Low or Recommended first, not Strong. The instinct to maximise compression usually overshoots — you often hit your size target with detail to spare.",
    },
    {
      title: "Compare quality and size",
      body: "Open the result and look at the pages, especially images and fine text. Note the size saved. If quality is fine and you're under your limit, you're done.",
    },
    {
      title: "Step up only if needed",
      body: "Still too big? Move one level stronger and re-check. Stepping up gradually finds the lightest setting that meets your size goal without over-degrading.",
    },
    {
      title: "Keep the original",
      body: "Save the compressed copy under a new name. Compression is one-way — the detail it removes is gone — so the untouched original is your safety net.",
    },
  ],
  tips: [
    "Reach for the lightest level first and step up only if you must. Most people over-compress and degrade files more than the size target required.",
    "Match quality to purpose: screen-only documents survive heavy compression that would ruin something headed for print.",
    "Compression rasterises pages, so the output loses selectable text. If you need searchable text more than a smaller file, that's a reason to keep the original or compress less.",
    "Text-heavy PDFs barely shrink no matter the level, because there's little image data — don't crank the level expecting savings that aren't there.",
    "Compress once. Compressing an already-compressed file stacks loss without meaningful size gains.",
  ],
  mobileNote:
    "Judging the size-versus-quality trade-off is easy on the phone with the PDF Editor app: compress offline, preview the pages, and dial the level up or down before sharing — no upload, and protected files are supported too.",
  faq: [
    {
      q: "Can I compress a PDF with no quality loss at all?",
      a: "Not meaningfully — useful compression is lossy. The realistic aim is no loss you'll notice for the document's purpose. Lighter levels keep more detail; pick the lightest that still looks right.",
    },
    {
      q: "Which level keeps the most quality?",
      a: "Low keeps the most detail, then Recommended, with Strong the smallest and roughest. Start light and only step up if you're still over your size target.",
    },
    {
      q: "Why do my images look soft after compressing?",
      a: "Image compression discards fine detail to save space, and stronger levels discard more. Step back to a lighter level if the softening is noticeable for your use.",
    },
    {
      q: "Does compressing remove searchable text?",
      a: "Yes — pages are re-rendered as images, which removes the selectable text layer. If searchable text matters more than size, keep the original or compress less aggressively.",
    },
    {
      q: "Should I compress a file more than once?",
      a: "No. A second pass adds quality loss for little extra savings. Compress once at the right level and keep the original.",
    },
  ],
  related: [
    { label: "Compress PDF — control the level", path: "/compress-pdf" },
    { label: "Best PDF compression settings", path: "/guides/best-pdf-compression-settings" },
    { label: "How to compress a PDF without losing quality", path: "/guides/how-to-compress-pdf" },
    { label: "Why is my PDF so large?", path: "/guides/why-is-my-pdf-so-large" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
