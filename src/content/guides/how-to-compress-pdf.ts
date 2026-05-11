import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "How to Compress a PDF Without Losing Quality",
  description:
    "Reduce PDF file size for email or upload — step-by-step using the PDF Editor app on iPhone or Android.",
  updated: "2026-05-11",
  intro: [
    "Every email service still has an attachment limit. Gmail caps at 25 MB. Outlook hits a wall around 20 MB. Slack and most messaging apps stop accepting around 25 MB too. Real-world PDFs — quotes with photos, scanned contracts, reports with charts — sail past those limits easily.",
    "There are two ways to make a PDF smaller. The wrong way is to print-to-PDF at a lower quality setting, which degrades text and signatures permanently. The right way is to recompress the images and re-encode the fonts inside the file, leaving text crisp while shaving 60–90% off the file size.",
    "This guide walks through the right way using the PDF Editor app on iPhone or Android. The steps are the same on both platforms. You'll end up with a file that's small enough to send and still looks identical to the original at any zoom level.",
  ],
  steps: [
    {
      title: "Open the PDF Editor app",
      body: "Launch the app from your home screen. Tap the Compress tile on the home screen.",
    },
    {
      title: "Import the PDF",
      body: "Tap Add File. Pick from Files / iCloud (iPhone) or via the file picker (Android). You can also share a PDF from any app into PDF Editor.",
    },
    {
      title: "Choose a quality preset",
      body: "Three presets cover almost every case. Balanced works for most files. Pick Small for files you'll email or upload. Pick High when the result needs to be print-ready.",
    },
    {
      title: "Preview the compressed result",
      body: "Tap Preview. The app shows the original and compressed file size side by side, plus thumbnails of the first few pages. Zoom in to check text crispness.",
    },
    {
      title: "Compare to the original",
      body: "Flip between original and compressed pages. If anything looks degraded (rare with Balanced), try a different preset.",
    },
    {
      title: "Save or share",
      body: "Save the compressed file with a new name (so the original stays intact) or share it directly via email, Drive, or any messaging app.",
    },
  ],
  tips: [
    "If a file is dominated by scanned pages, the Small preset can produce reductions of 90%+ without visible quality loss.",
    "For PDFs full of mostly-text, compression gains are smaller (10–30%) — the file is already efficient.",
    "Splitting a huge PDF before compressing makes the operation faster on older phones and gives you more flexibility on sending.",
    "Always keep the original until you've confirmed the compressed file looks right — once compressed, the original quality is gone.",
    "Compressed PDFs preserve searchable text and signatures. The compression targets images and font tables, not the content layer.",
  ],
  mobileNote:
    "Compression runs entirely on-device. You can compress a sensitive contract on a flight, with airplane mode on, and not a byte of it leaves your phone.",
  faq: [
    {
      q: "How much smaller will my PDF get?",
      a: "Image-heavy or scanned PDFs typically shrink by 60–90%. Text-heavy PDFs shrink less, often 10–30%. The app shows the exact size before and after.",
    },
    {
      q: "Will images become blurry?",
      a: "Balanced and High keep images crisp at normal viewing zoom. Small applies stronger image compression — fine for email, but you'll notice slight softening if you zoom way in.",
    },
    {
      q: "Can I compress a password-protected PDF?",
      a: "Yes, once you enter the password. The app handles the decryption, compresses the content, and can re-apply protection on save.",
    },
    {
      q: "What's the difference between compressing and zipping?",
      a: "Zipping wraps a PDF in another container but rarely shrinks it — PDFs already use internal compression. Proper PDF compression rewrites the file's internal images and fonts, which is the only way to get real size savings.",
    },
    {
      q: "Can I batch-compress multiple PDFs?",
      a: "Yes. Add several files in one session and the app processes them one after the other, applying the same preset to each.",
    },
  ],
  related: [
    { label: "Compress PDF — full overview", path: "/compress-pdf" },
    { label: "PDF Converter", path: "/pdf-converter" },
    {
      label: "How to merge PDF files",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
