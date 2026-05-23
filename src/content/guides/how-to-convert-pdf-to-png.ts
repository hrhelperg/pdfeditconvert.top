import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-png",
  h1: "How to Convert PDF to PNG (Sharp, Lossless Page Images)",
  description:
    "Export PDF pages as high-quality PNG images in your browser. Why PNG keeps text and diagrams crisp, plus scale and transparency notes.",
  updated: "2026-05-23",
  intro: [
    "When you need a page of a PDF as an image and the page is full of text, a table, or a diagram, PNG is the format to reach for. It's lossless, so the lettering stays sharp instead of getting fuzzy edges — the difference is obvious the moment you zoom in on a converted invoice or a schematic.",
    "This guide uses the free PDF to Images tool, which renders each PDF page as a downloadable image in your browser, with nothing uploaded. PNG is one of its two output formats and the one to pick whenever clarity beats file size.",
    "Below: how to get the sharpest result without bloating the file, when PNG is worth choosing over JPG, and what to keep in mind about page images in general.",
  ],
  steps: [
    {
      title: "Open the PDF to Images tool",
      body: "Go to the PDF to Images tool. It renders pages locally in your browser — no upload, no account.",
    },
    {
      title: "Add your PDF",
      body: "Drag the PDF onto the drop zone or click to choose it. The tool prepares every page for export.",
    },
    {
      title: "Choose PNG as the format",
      body: "Select PNG. It's lossless and keeps text, tables and line art crisp — the right choice for documents, diagrams and anything you'll zoom into.",
    },
    {
      title: "Set the scale for sharpness",
      body: "Pick a scale: 2× is sharp on most screens, 3× is extra crisp for print or large display but produces big files. Match the scale to how the image will actually be viewed.",
    },
    {
      title: "Export the pages",
      body: "Run the conversion. Each page downloads as its own PNG, ready to embed in a document, deck or web page.",
    },
    {
      title: "Use the page you need",
      body: "Keep the PNG you wanted and discard the rest. For a long PDF, splitting it first leaves fewer files to manage.",
    },
  ],
  tips: [
    "Choose PNG over JPG whenever the page has text, tables or sharp lines — JPG's compression visibly softens those edges.",
    "PNG files are larger than JPGs. If you're exporting many pages and size matters more than crispness, JPG is the pragmatic choice.",
    "A PDF page has no transparency, so the exported PNG sits on a solid white background even though PNG supports transparency.",
    "Higher scale doesn't improve a low-quality source. If the PDF itself contains a blurry scan, a 3× PNG just renders the blur at higher resolution.",
    "Page images aren't searchable — there's no text layer. Keep the original PDF if you'll need to find or copy the words later.",
  ],
  mobileNote:
    "Pulling a crisp page image out of a PDF on your phone is handy for slides, design references and bug reports. The PDF Editor app renders pages with hardware acceleration and lets you mark up the image before sharing — faster than emailing the file to yourself to handle later.",
  faq: [
    {
      q: "Why pick PNG instead of JPG?",
      a: "PNG is lossless, so text, tables and diagrams stay sharp. JPG is smaller but softens fine edges. For document pages you'll zoom into, PNG is the better choice.",
    },
    {
      q: "Do I get one PNG per page?",
      a: "Yes. Every page is rendered and downloaded as a separate PNG file. Keep the ones you need and discard the rest.",
    },
    {
      q: "Is my PDF uploaded anywhere?",
      a: "No. Rendering happens entirely in your browser, so the file stays on your device.",
    },
    {
      q: "Why is my PNG so large?",
      a: "PNG is lossless and high scale multiplies the pixel count. Lower the scale or switch to JPG if file size is a concern.",
    },
    {
      q: "Can I export a password-protected PDF?",
      a: "Not in the browser — encrypted files can't be rendered. Remove the password first, or use the PDF Editor mobile app.",
    },
  ],
  related: [
    { label: "PDF to Images — export pages in your browser", path: "/pdf-to-images" },
    { label: "Image to PDF — the reverse", path: "/image-to-pdf" },
    { label: "How to convert PDF to JPG", path: "/guides/how-to-convert-pdf-to-jpg" },
    { label: "How to extract pages from a PDF", path: "/guides/how-to-extract-pages-from-pdf" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
