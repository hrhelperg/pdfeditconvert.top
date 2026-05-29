import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-compression-settings",
  h1: "Best PDF Compression Settings (A Decision Guide)",
  description:
    "Which compression level for email, printing, archiving or web? A practical matrix matching settings to purpose, with honest trade-offs.",
  updated: "2026-05-23",
  intro: [
    "There's no single \"best\" compression setting — there's only the best setting for what you're about to do with the file. The level that's perfect for emailing a receipt would ruin a document headed to a print shop. So instead of a magic number, what you need is a quick way to match the setting to the purpose.",
    "This guide is that decision matrix. It maps the levels in the free Compress PDF tool — Low, Recommended and Strong — to the situations where each makes sense, and explains the trade-off behind every choice. The tool runs in your browser with nothing uploaded, and shows the size saving so you can confirm your pick.",
    "Read it once and you'll stop guessing — you'll know which level to reach for the moment you see what the document is for.",
  ],
  steps: [
    {
      title: "For email attachments: Recommended",
      body: "The default sweet spot. It clears Gmail's 25 MB and Outlook's ~20 MB limits for most files while keeping the document comfortably readable on screen.",
    },
    {
      title: "For upload portals with tight caps: Strong",
      body: "Government and HR portals often cap at a few megabytes. Strong gets you there. Scans survive it well; check designed documents stay acceptable.",
    },
    {
      title: "For printing or formal records: Low",
      body: "When the file will be printed or kept as a quality record, use Low to preserve the most detail. Only compress at all if the file genuinely needs to be smaller.",
    },
    {
      title: "For long-term archiving: minimal or none",
      body: "Archives should favour fidelity over size. Compress lightly if at all, and keep an uncompressed master — you can always shrink a copy later, but you can't restore lost detail.",
    },
    {
      title: "For web and screen-only viewing: Recommended to Strong",
      body: "Documents that will only ever be read on a screen tolerate heavier compression. Lean toward Strong for fast-loading web downloads where print quality is irrelevant.",
    },
    {
      title: "Confirm with the before-and-after size",
      body: "Whatever you pick, the tool shows the saving. If a lighter level already meets your target, take it — there's no prize for over-compressing.",
    },
  ],
  tips: [
    "Purpose first, setting second. Decide what happens to the file, then pick the level — not the other way around.",
    "Scans tolerate stronger settings than designed documents. The same Strong level that's fine for a scanned form may soften a photo-rich brochure too much.",
    "Every level rasterises pages and removes selectable text. If the document must stay searchable, that affects your choice as much as size does.",
    "Text- and vector-heavy PDFs barely shrink at any setting — there's little image data to compress, so don't expect Strong to work miracles.",
    "Keep an uncompressed master for anything important. Compression is one-way; the master lets you re-derive any size you need later.",
  ],
  mobileNote:
    "The PDF Editor app makes matching setting to purpose easy on the go: compress offline, preview the result, and adjust the level before sharing. It also supports protected files and keeps everything on-device.",
  faq: [
    {
      q: "What's the best compression setting overall?",
      a: "There isn't one — it depends on purpose. Recommended suits email, Strong suits tight upload caps and screen-only files, and Low (or no compression) suits printing and archiving.",
    },
    {
      q: "Which setting is best for emailing a PDF?",
      a: "Recommended. It clears typical 20–25 MB email limits for most files while keeping the document readable. Move to Strong only if you're still over.",
    },
    {
      q: "What should I use for a document I'll print?",
      a: "Low, or no compression at all. Printing needs detail, so preserve quality and only shrink the file if it's genuinely too large to handle.",
    },
    {
      q: "Do stronger settings remove searchable text?",
      a: "All levels re-render pages as images, which removes selectable text. If the document must stay searchable, keep the original regardless of the level you choose.",
    },
    {
      q: "Why didn't Strong shrink my text PDF much?",
      a: "Compression targets image data. A text- or vector-only PDF has little to compress, so even Strong produces small savings. That file is large for another reason.",
    },
  ],
  related: [
    { label: "Compress PDF — choose your level", path: "/compress-pdf" },
    { label: "How to compress a PDF without losing too much quality", path: "/guides/compress-pdf-without-losing-too-much-quality" },
    { label: "How to compress a scanned PDF", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "How to reduce PDF size before uploading", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
