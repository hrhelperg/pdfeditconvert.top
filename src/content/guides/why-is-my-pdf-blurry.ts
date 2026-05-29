import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blurry",
  h1: "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
  description:
    "Blurry PDFs come from low-resolution scans, aggressive compression or a bad export — not from the format itself. How to tell which cause you're dealing with and how to get sharpness back.",
  updated: "2026-05-29",
  intro: [
    "PDFs themselves don't blur anything. The format happily holds razor-sharp vector text and high-resolution images. So when a PDF looks soft, fuzzy or pixelated, the blur came from something specific: a low-resolution capture, a compression pass that went too far, or an export setting that flattened crisp content into bitmaps.",
    "Knowing which of those caused your file matters, because the fixes are completely different. You can't 'un-compress' a file that was already squashed, but you can re-export from the source, re-scan at a better resolution, or pick a different conversion tool. And for some files, the blur is only on screen — the original is still there at full quality, just rendered down by the viewer.",
    "This guide separates the causes and walks the practical fix for each, including when there's nothing to be done short of going back to the source.",
  ],
  steps: [
    {
      title: "Zoom in and look at the edges",
      body: "Sharp edges on text but blurry on images means the text is vector (clean) and only photos are degraded — usually from compression. Blurry text means the whole page is a raster image, which points at a scan or print-to-image export.",
    },
    {
      title: "Check the original capture resolution",
      body: "Scans below 150 DPI look blurry no matter what. 200–300 DPI is the safe range for documents you'll read on screen; 600 is overkill for everything except archival work and printing photos.",
    },
    {
      title: "Investigate whether compression was overdone",
      body: "Files reduced to 'extreme' compression often look fine at 100% zoom and terrible at 200%. If you have the pre-compression original, you can re-compress at a milder setting — the Compress PDF tool lets you trade size for clarity.",
    },
    {
      title: "Re-export from the source if you have it",
      body: "Documents created in Word, Pages, Google Docs or design tools should be exported as PDF directly from the source, not printed-to-PDF from a screen capture. Direct export keeps text vector and crisp.",
    },
    {
      title: "Re-scan with sharper settings",
      body: "If a scan is the problem and you still have the paper, redo it at 300 DPI with good lighting. Phone scans benefit hugely from a single page placed flat with even light — clean capture beats post-processing.",
    },
    {
      title: "Confirm the file isn't just being downscaled on screen",
      body: "Some viewers downsample for performance and look soft until you zoom in. Export a page to PNG with PDF to Images at 2× or 3× scale — if the PNG is sharp, your viewer was lying.",
    },
  ],
  tips: [
    "Text that selects with your cursor is vector text and shouldn't be blurry. If it is, your viewer is rendering down — try a different viewer before re-exporting.",
    "Phone screenshots inserted into a document are already low-resolution. They'll always look soft in a PDF; there's no fix short of re-capturing larger.",
    "Don't compress a file twice. Repeated compression compounds blur. Keep the original, compress once for sharing, archive the source.",
    "JPEG-heavy PDFs blur worse than PNG-heavy ones at the same compression — JPEG is lossy by design. PNG screenshots stay sharper longer.",
    "If you only have a blurry version, OCR can sometimes recover readable text even when the image looks fuzzy. The text will be clean even if the image isn't.",
  ],
  mobileNote:
    "Phone-captured PDFs blur most often from shaky hands, low light or bad framing. The PDF Editor app's scan flow includes auto-edge detection and stabilization, so a single steady capture per page produces a sharp document the first time.",
  faq: [
    {
      q: "Is blur caused by the PDF format itself?",
      a: "No. PDF stores text as vectors and images at their source resolution. Blur comes from the source — low DPI, aggressive compression or a screen-capture export.",
    },
    {
      q: "Can I sharpen a blurry PDF after the fact?",
      a: "Only barely. Some image processing can fake sharpness on photos, but you can't add detail that wasn't captured. The honest fix is to redo the source step.",
    },
    {
      q: "Why is my compressed PDF blurry only on some pages?",
      a: "Compression hits image-heavy pages hardest. Text-only pages stay sharp. If only some pages are blurry, they're the ones with photos, charts or scans.",
    },
    {
      q: "What scan resolution should I use?",
      a: "200–300 DPI for documents you'll read on screen. 300 DPI for anything you might print. 600 DPI only for photos and archival.",
    },
    {
      q: "Why does the PDF look fine at 100% but blurry at 200%?",
      a: "It was either rasterized at low resolution or compressed past the point where zooming reveals the loss. There's no way to get the detail back without re-exporting.",
    },
  ],
  related: [
    { label: "Compress PDF — pick milder settings for sharper output", path: "/compress-pdf" },
    { label: "PDF to Images — export pages at high resolution", path: "/pdf-to-images" },
    { label: "Best PDF compression settings", path: "/guides/best-pdf-compression-settings" },
    { label: "How to fix scanned PDF quality", path: "/guides/how-to-fix-scanned-pdf-quality" },
  ],
  parentHub: { label: "PDF to Images — sharp page exports", path: "/pdf-to-images" },
};

export default content;
