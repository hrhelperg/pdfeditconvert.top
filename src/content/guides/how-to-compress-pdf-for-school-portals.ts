import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-for-school-portals",
  h1: "How to Compress PDF for School Portals (Strict Limits)",
  description:
    "School and university upload portals cap PDFs harder than email does. How to compress assignments to fit without crushing the readability the grader checks for.",
  updated: "2026-05-29",
  intro: [
    "School portals are some of the strictest PDF uploaders in everyday use. Where email might tolerate 25 MB, a class portal often caps at 5 MB — and K–12 systems sometimes at 2 MB. Add a few scanned pages of handwritten work to a typed assignment and you're suddenly over the limit, two minutes before deadline.",
    "Compression is the right answer, but compressing too aggressively makes the work harder to read — which is exactly what costs you points. The trick is to compress smartly: hard on the scan-heavy parts that dominate file size, gently on the typed parts that don't compress much anyway, and only as much as you need to clear the portal cap.",
    "This guide walks the realistic process, including what to compress, what to leave alone, and what to do when even maximum compression doesn't fit.",
  ],
  steps: [
    {
      title: "Check the portal's stated limit first",
      body: "Most portals list the cap; many students never look. Knowing the number changes the strategy: a 2 MB limit is tight, a 25 MB limit is generous. Aim for 80% of the cap so you have a buffer.",
    },
    {
      title: "Identify what's making the file big",
      body: "Scanned handwritten pages are the usual culprits. Each scanned page is a full-resolution image. A 20-page typed assignment is small; the same with five scanned pages might triple.",
    },
    {
      title: "Compress with Compress PDF",
      body: "Compress PDF in your browser shrinks the file on your device. Try strong compression first — modern compressors leave handwritten work readable at strong settings.",
    },
    {
      title: "Check readability after compressing",
      body: "Open the compressed file and zoom to where the grader will read. If text or diagrams look too soft, step back to medium compression and try again. Readable wins over small.",
    },
    {
      title: "If you're still over, drop unused pages",
      body: "Extract PDF Pages keeps only the pages you need. A blank back cover, a duplicate problem set, a placeholder — drop them and the file size drops with them.",
    },
    {
      title: "If still over, split into multiple uploads",
      body: "Some portals accept multiple files. Split PDF or Extract PDF Pages produces parts under the cap. Name them clearly (Assignment3_Part1.pdf, Assignment3_Part2.pdf).",
    },
  ],
  tips: [
    "Scan in grayscale, not color, before you ever compress. The pre-scan choice saves more than any post-compression can.",
    "Re-scanning at a lower DPI (200 instead of 600) shrinks the file by 5–10× without changing readability for handwritten work.",
    "Don't compress twice. Repeated compression compounds quality loss. Keep an uncompressed master, compress for upload.",
    "Avoid zipping a PDF to make it 'smaller'. Most portals reject ZIPs entirely; if they accept them, they often unzip with the same effective limit.",
    "If the portal rejects the compressed file as invalid, re-export through print-to-PDF first — that flattens it to a baseline PDF every portal accepts.",
  ],
  mobileNote:
    "Phone uploads to school portals are now common, and the phone is where the scan-heavy parts of the assignment usually originate. The PDF Editor app compresses scans on-device before the upload, so the file is portal-ready before it hits a flaky cellular connection.",
  faq: [
    {
      q: "What size do most school portals accept?",
      a: "Common limits are 2 MB (some K–12), 5 MB (many high school and university portals), and 10–25 MB (more lenient university portals). Check the specific class.",
    },
    {
      q: "Does aggressive compression make text unreadable?",
      a: "Sometimes. Heavy compression on already-low-resolution scans can pixelate characters. Try strong first; back off to medium if text gets fuzzy.",
    },
    {
      q: "Should I delete blank pages?",
      a: "Yes. Extract PDF Pages or Split PDF removes them. Blank pages take real space and aren't part of the work.",
    },
    {
      q: "Can I submit a ZIP instead?",
      a: "Most school portals don't accept ZIPs. The few that do still apply size limits and may treat the ZIP as a single file with the same cap.",
    },
    {
      q: "What if my compressed file is still too big?",
      a: "Drop unused pages, re-scan in grayscale/B&W at lower DPI, or split into multiple uploads if the portal allows. Some assignments may need to be physically smaller.",
    },
  ],
  related: [
    { label: "Compress PDF — shrink in your browser", path: "/compress-pdf" },
    { label: "Split PDF — break into accepted parts", path: "/split-pdf" },
    { label: "How to submit homework as PDF", path: "/guides/how-to-submit-homework-as-pdf" },
    { label: "How to reduce PDF size before uploading", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Compress PDF — reduce size in your browser", path: "/compress-pdf" },
};

export default content;
