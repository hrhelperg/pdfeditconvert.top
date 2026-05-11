import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "Compress PDF",
    h1: "Shrink PDF size without losing quality.",
    highlight: "Shrink",
    lead: "Most PDFs are larger than they need to be. Trim them for email, upload, and storage — without the blurry-text trade-off you get from print-to-PDF tricks.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Why PDFs get so big",
    paragraphs: [
      "Three things make PDFs heavy: high-resolution images, embedded fonts, and scanned pages saved at print quality. Most documents have at least one of those, which is how a five-page contract ends up at 18 MB and bounces off Gmail's 25 MB attachment limit.",
      "The common workaround — print to PDF at lower quality, or take screenshots and reassemble — works but degrades the document. Text gets fuzzy. Signatures look smudged. Once you've done that to a contract or invoice, you can't get the original quality back.",
      "Proper compression rewrites images at sensible resolutions, subsets fonts, and re-encodes scanned pages without distorting them. The result keeps text crisp at any zoom level and shrinks the file by 60–90% on typical documents.",
    ],
  },
  features: {
    heading: "What the PDF Editor app does",
    items: [
      {
        icon: "Zap",
        title: "Smart compression",
        body: "Automatically detects image-heavy vs text-heavy PDFs and applies the right strategy.",
      },
      {
        icon: "Sliders",
        title: "Three quality presets",
        body: "High (minimal compression), balanced (best for most files), and small (aggressive size reduction).",
      },
      {
        icon: "Eye",
        title: "Preview before saving",
        body: "Compare original and compressed side by side. See the size drop and the visual diff.",
      },
      {
        icon: "ScanLine",
        title: "Optimized for scans",
        body: "Scanned pages get a separate treatment — black-and-white conversion or smart re-encoding.",
      },
      {
        icon: "Layers",
        title: "Batch compress",
        body: "Queue multiple PDFs and compress them with one tap. Useful for archiving receipts or invoices.",
      },
      {
        icon: "Lock",
        title: "Keeps your file private",
        body: "All compression runs on-device. No upload to a third-party service.",
      },
    ],
  },
  steps: {
    heading: "How to compress a PDF",
    items: [
      {
        title: "Open the PDF Editor app",
        body: "Tap the Compress tile on the home screen.",
      },
      {
        title: "Add the PDF you want to compress",
        body: "Import from Files, iCloud Drive, Google Drive, or any app via the share sheet.",
      },
      {
        title: "Pick a preset",
        body: "Balanced works for almost everything. Use Small for email-bound files, High when print quality matters.",
      },
      {
        title: "Tap Compress",
        body: "The app shows progress and the resulting file size. Most files take a few seconds.",
      },
      {
        title: "Compare and save",
        body: "Preview pages, confirm quality is still good, then save or share.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Compressing on the go",
    body: "The classic 'this attachment is too large' moment usually happens on a phone — at an airport, in a cab, mid-conversation. Doing it natively means you're not bouncing your contract through a web tool you've never heard of just to email it. Compress, attach, send — all from the same app.",
  },
  faq: [
    {
      q: "How much smaller can a PDF get?",
      a: "Typically 60–90% smaller. Image-heavy PDFs see the biggest reductions; text-only PDFs are already small and benefit less.",
    },
    {
      q: "Will I lose quality?",
      a: "Balanced mode keeps text and signatures crisp. Small mode applies stronger image compression — fine for email, less ideal if you'll print on glossy paper.",
    },
    {
      q: "Does it work on scanned PDFs?",
      a: "Yes. Scanned PDFs often compress dramatically because the original images are at print resolution. The app re-encodes them to a sensible screen-friendly size.",
    },
    {
      q: "Can it compress password-protected PDFs?",
      a: "Yes, as long as you can open the file. Enter the password when prompted, compress, then re-apply protection on save if needed.",
    },
    {
      q: "Why not just zip the PDF?",
      a: "Zipping a PDF rarely helps — PDFs already use internal compression. Recompressing the images and fonts inside the PDF is the only effective approach.",
    },
  ],
  related: [
    {
      label: "Full step-by-step: how to compress a PDF",
      path: "/guides/how-to-compress-pdf",
    },
    { label: "Convert PDF to other formats", path: "/pdf-converter" },
    { label: "PDF security and encryption", path: "/pdf-security" },
  ],
  appCta: {
    heading: "Compress PDFs on the go.",
    sub: "Free for everyday use. Available on iOS and Android.",
  },
};

export default content;
