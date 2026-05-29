import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-scanned-pdf-quality",
  h1: "How to Fix Scanned PDF Quality (Sharpen, Straighten, Recolor)",
  description:
    "Scanned PDFs go wrong in predictable ways: skew, washed-out contrast, dotty backgrounds, oversized files. The pre-scan adjustments and post-scan tools that actually clean them up.",
  updated: "2026-05-29",
  intro: [
    "A bad scan ruins an otherwise straightforward document. Lines crooked, contrast washed, dust dots showing through, file size huge — and the document inside is hard to read or impossible to compress further. The annoying part is that most of those problems come from setup, not from PDF itself, and avoiding them at capture is much easier than fixing them afterwards.",
    "When you do have a bad scan to fix, the realistic options are: straighten what's crooked, crop what's framed wrong, downsample what's oversized, and accept that resolution lost at capture isn't coming back. Some image-processing tools claim sharpening; in practice they make things look different, not better.",
    "This guide separates the prevention (scan it right the first time) from the recovery (what to do with the file you already have). The prevention is more important.",
  ],
  steps: [
    {
      title: "Prevent skew by feeding pages properly",
      body: "Scanners with auto-feeders skew when pages aren't square in the tray. Phone scans skew when you tilt the camera. Both are avoidable: square the page, hold the phone parallel to the paper, and the scan comes out straight.",
    },
    {
      title: "Set scan resolution to 200–300 DPI for documents",
      body: "600 DPI is photo-quality and produces enormous files for no benefit on a typed page. 150 DPI is too low — text gets soft. The 200–300 range is the sweet spot for documents you'll share, archive or print.",
    },
    {
      title: "Choose grayscale or black-and-white over color for text",
      body: "Color mode on a text document triples file size and introduces noise that compresses badly. Grayscale or B&W produces sharper, smaller, cleaner scans for anything that isn't a photo or color graphic.",
    },
    {
      title: "Use auto-contrast and auto-crop when available",
      body: "Most scanning apps include auto-contrast and edge detection. Both make a real difference: contrast removes the gray haze, edge detection crops to the page so margins are clean.",
    },
    {
      title: "Compress carefully on existing scans",
      body: "If a scanned PDF is already huge, Compress PDF in your browser can shrink it dramatically. Don't go to the extreme setting on text — it can pixelate characters. Strong-but-not-extreme is the safe choice.",
    },
    {
      title: "Rotate skewed pages with Rotate PDF",
      body: "If only a few pages are sideways or flipped, Rotate PDF straightens them in place. It can't fix small angle skew, but it handles the 90/180/270 rotations that most feeder mistakes produce.",
    },
  ],
  tips: [
    "Bright, even lighting matters more than camera quality on phone scans. A well-lit phone scan beats a poorly-lit office scanner output.",
    "Don't scan to high-DPI color and then compress hard. Scan to the right settings from the start; the file is smaller, sharper, and faster to handle.",
    "Backgrounds bleeding through (text on the reverse side of thin paper) is a paper problem, not a scan problem. Use a sheet of dark paper behind the page.",
    "Re-scanning is almost always faster than fixing. If you have the paper, fix the scan at capture rather than processing the image.",
    "Phone-scan apps that promise 'enhance' often add fake sharpening that looks worse on close inspection. A clean baseline scan beats a processed bad one.",
  ],
  mobileNote:
    "Phone scans go wrong predictably — angle, light and focus all in the user's hands. The PDF Editor app's scan flow uses real-time edge detection and contrast tuning, so each capture comes out closer to a flatbed result on the first try.",
  faq: [
    {
      q: "Why is my scanned PDF so washed out?",
      a: "Contrast was set too low at capture. Re-scan with auto-contrast on, or with the brightness/contrast adjusted manually. Post-processing helps marginally.",
    },
    {
      q: "Can I sharpen a blurry scan?",
      a: "Only in appearance. Real detail lost at capture can't be recovered. Sharpen filters change edges but don't add information.",
    },
    {
      q: "What scan resolution should I use?",
      a: "200–300 DPI for documents. 300 if you might print. Anything higher is wasted on text and just bloats the file.",
    },
    {
      q: "Should I scan in color or grayscale?",
      a: "Grayscale or B&W for text. Color only for photos and color graphics. Grayscale is sharper and far smaller.",
    },
    {
      q: "Why are my scans huge in file size?",
      a: "Usually too-high DPI plus color mode. Reduce both at capture, or compress the existing file. Scanned PDFs are the biggest beneficiaries of compression.",
    },
  ],
  related: [
    { label: "Scan to PDF — clean captures with edge detection", path: "/scan-to-pdf" },
    { label: "Compress PDF — shrink heavy scans", path: "/compress-pdf" },
    { label: "How to compress a scanned PDF", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Why is my PDF blurry?", path: "/guides/why-is-my-pdf-blurry" },
  ],
  parentHub: { label: "Scan to PDF — phone-camera scanning", path: "/scan-to-pdf" },
};

export default content;
