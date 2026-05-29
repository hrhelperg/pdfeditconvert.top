import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-png-to-pdf",
  h1: "How to Convert PNG to PDF (Crisp Screenshots and Graphics)",
  description:
    "Turn PNG screenshots, diagrams and graphics into a single PDF in your browser. Why PNG keeps text sharp, and what happens to transparency.",
  updated: "2026-05-23",
  intro: [
    "PNG is the format you get when you take a screenshot, export a chart, or save a graphic with sharp edges. Unlike JPG, it's lossless, so text and fine lines stay crisp instead of getting smeared by compression. That makes PNG the right starting point when you want to bundle screenshots or diagrams into a PDF that stays readable.",
    "This guide uses the free Image to PDF tool to combine PNG files into one document, directly in your browser with nothing uploaded. Typical jobs: a sequence of UI screenshots for a review, exported charts for a report, or a graphic someone needs as a printable, shareable file rather than a loose image.",
    "There's one PNG-specific quirk worth knowing — transparency — and we'll cover what happens to it when a PNG becomes a PDF page.",
  ],
  steps: [
    {
      title: "Open the Image to PDF tool",
      body: "Go to the Image to PDF tool in your browser. It handles PNG, JPG and WebP, and runs entirely on your device with no upload or account.",
    },
    {
      title: "Add your PNG files",
      body: "Drag the screenshots or graphics onto the drop zone, or click to select them. Each PNG becomes one page of the resulting PDF.",
    },
    {
      title: "Order the pages",
      body: "Use the up and down arrows to arrange the screenshots into the sequence that tells the story — step one before step two.",
    },
    {
      title: "Generate the PDF",
      body: "Click Create PDF. The tool places each image on its own page at the image's dimensions and builds the combined file locally.",
    },
    {
      title: "Download the document",
      body: "The PDF downloads automatically. Rename it to match its contents so it's easy to find and obvious to whoever opens it.",
    },
    {
      title: "Check the pages render sharply",
      body: "Open the PDF and zoom in on any text. PNG keeps lettering crisp, so screenshots of dashboards, code or terms should stay legible.",
    },
  ],
  tips: [
    "PNG is the better choice than JPG whenever the image contains text, UI, or sharp lines — JPG compression softens exactly those edges.",
    "Transparent areas of a PNG don't stay transparent in a PDF page; they render against white. If you designed a logo on a transparent background, it'll sit on white, which is usually fine.",
    "Full-page screenshots can be tall and thin. They convert fine, but consider cropping to the part that matters so the page isn't mostly empty.",
    "PNG files are larger than JPGs for the same image. A long run of high-resolution screenshots can make a hefty PDF — compress it if you'll email the result.",
    "For a uniform page size (everything fitted to A4) rather than pages sized to each image, the PDF Editor app gives you that control.",
  ],
  mobileNote:
    "Screenshots pile up on phones. The PDF Editor app turns a batch of them into a single PDF in a few taps, and lets you annotate or highlight the important part before you share — handy for bug reports and quick reviews on the move.",
  faq: [
    {
      q: "Why choose PNG over JPG for a PDF?",
      a: "PNG is lossless, so text, screenshots and diagrams stay sharp. JPG is lossy and softens fine edges. If your images contain lettering or UI, PNG produces a cleaner PDF.",
    },
    {
      q: "What happens to transparent backgrounds?",
      a: "A PDF page isn't transparent, so transparent regions render against white. A logo or icon with a transparent background will simply sit on a white page.",
    },
    {
      q: "Are my files uploaded?",
      a: "No. Everything runs in your browser on your device. Your screenshots and graphics never leave it.",
    },
    {
      q: "Can I mix PNG and JPG in the same PDF?",
      a: "Yes. The tool accepts PNG, JPG and WebP together, so you can combine a screenshot, a photo and an exported chart into one document.",
    },
    {
      q: "The PDF came out large — what can I do?",
      a: "PNG pages are heavy. Run the file through the Compress PDF tool to bring it under email and upload limits, accepting a small quality trade-off.",
    },
  ],
  related: [
    { label: "Image to PDF — combine PNGs in your browser", path: "/image-to-pdf" },
    { label: "PDF to images — the reverse", path: "/pdf-to-images" },
    { label: "How to convert JPG to PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "How to convert WebP to PDF", path: "/guides/how-to-convert-webp-to-pdf" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
