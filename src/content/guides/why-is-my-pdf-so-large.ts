import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-so-large",
  h1: "Why Is My PDF So Large? (And How to Fix It)",
  description:
    "The real reasons a PDF balloons in size — scans, embedded photos, fonts and more — and the right fix for each, using free browser tools.",
  updated: "2026-05-23",
  intro: [
    "A ten-page document has no business being 60 MB, yet PDFs balloon all the time. Before you reach for a compressor, it's worth understanding why a file got so big — because the right fix depends on the cause, and the wrong fix can crush a document that didn't need crushing.",
    "This guide is a short diagnosis. It walks through the usual culprits behind a bloated PDF, how to tell which one you're dealing with, and the most effective response to each. Most fixes use the free, in-browser tools on this site, all of which run on your device with nothing uploaded.",
    "By the end you'll know whether your file needs compression, page removal, or simply re-exporting from the source — and you'll stop over-compressing documents out of habit.",
  ],
  steps: [
    {
      title: "Suspect scanned pages first",
      body: "Scans are the number-one cause. Each scanned page is a full-resolution image, so a few of them dwarf a text document. If your PDF came from a scanner or phone camera, this is almost certainly why.",
    },
    {
      title: "Check for embedded photos and graphics",
      body: "High-resolution photos, screenshots and charts placed in a document carry their full pixel data. A report with a dozen large images can be enormous even if the text is short.",
    },
    {
      title: "Consider embedded fonts and design assets",
      body: "Documents that embed multiple full font families, or were exported from heavy design software, carry extra weight in fonts and vector assets that the content doesn't visibly need.",
    },
    {
      title: "Look for leftover or hidden content",
      body: "Duplicate pages from a sloppy merge, blank scanner inserts, or revision history can pad a file. Removing pages you don't need is sometimes the simplest size win.",
    },
    {
      title: "Apply the matching fix",
      body: "For scans and photos, compress with the Compress PDF tool. For clutter, drop pages with the Extract PDF Pages tool. For a text document that's mysteriously huge, re-export it from the source application.",
    },
    {
      title: "Re-check the size",
      body: "Confirm the file landed where you need it. If it's still large after compressing a scan-heavy file, a stronger level or splitting the document is the next step.",
    },
  ],
  tips: [
    "Match the fix to the cause: compression helps image-heavy files; it does almost nothing for a text-only PDF that's large for some other reason.",
    "A text-only document that's surprisingly big usually has embedded fonts or hidden objects — re-exporting from the source app often shrinks it more cleanly than compression.",
    "Scanning at 600 DPI when 200–300 would do is a common, avoidable cause of huge files. Lower the scan resolution at the source for documents you'll share.",
    "Removing unneeded pages can cut size without touching quality at all — worth checking before you compress.",
    "Don't compress reflexively. If a file is already a reasonable size, compressing just degrades it for no real gain.",
  ],
  mobileNote:
    "Phone scans are the classic offender — high-resolution images saved as a PDF. The PDF Editor app lets you scan at a sensible resolution from the start and compress offline, so documents don't balloon in the first place and shrink easily when they do.",
  faq: [
    {
      q: "What makes a PDF large most of the time?",
      a: "Scanned pages and embedded photos. Each is a full-resolution image, so a handful of them outweighs a long text document many times over.",
    },
    {
      q: "Why is my text-only PDF still big?",
      a: "Likely embedded fonts, hidden objects, or content left over from edits and merges. Re-exporting from the source application, or removing unneeded pages, often helps more than compression.",
    },
    {
      q: "Will compression always shrink my file?",
      a: "No. Compression targets image data, so scan- and photo-heavy PDFs shrink a lot while text- or vector-only files barely change. If a text file is huge, the cause is elsewhere.",
    },
    {
      q: "Does removing pages reduce size?",
      a: "Yes, especially if the removed pages are scans or images. Dropping clutter with the Extract PDF Pages tool can cut size without affecting the quality of what remains.",
    },
    {
      q: "How do I stop scans being so large?",
      a: "Scan at 200–300 DPI rather than 600 for documents you'll share, and the files start much smaller. The PDF Editor app lets you control scan quality up front.",
    },
  ],
  related: [
    { label: "Compress PDF — shrink image-heavy files", path: "/compress-pdf" },
    { label: "Extract PDF Pages — remove clutter", path: "/extract-pdf-pages" },
    { label: "How to compress a scanned PDF", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Best PDF compression settings", path: "/guides/best-pdf-compression-settings" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
