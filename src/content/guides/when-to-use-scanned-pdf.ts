import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-scanned-pdf",
  h1: "When to Use a Scanned PDF (and When Not To)",
  description:
    "Scanned PDFs solve a specific problem — paper-to-digital. They're also bigger, less searchable, and harder to edit. When the trade is worth it.",
  updated: "2026-05-29",
  intro: [
    "Scanned PDFs solve one specific problem: converting paper to a digital file that can be shared, archived and viewed on any device. They do that well. But they're also larger than equivalent typed PDFs, not searchable without OCR, harder to edit, and frequently lower-resolution than the source. Scanning a document that exists digitally is almost always the wrong move.",
    "The right rule is short. Scan paper that has no digital source. Don't scan anything you already have as a Word document, a screenshot, or a PDF export. The temptation to print-then-scan to 'lock' a document is understandable but usually unnecessary — a direct PDF export does the same thing better.",
    "This guide walks the when-to-scan and the when-not-to. Most of it is intuitive once stated; the issue is that the temptation to scan is often stronger than the actual need.",
  ],
  steps: [
    {
      title: "Use scanned PDF when the only source is paper",
      body: "Old contracts, handwritten notes, paper receipts, mailed documents, signed-by-hand forms. Anything that exists physically and needs to become digital. Scan to PDF on your phone or a flatbed produces a clean PDF.",
    },
    {
      title: "Don't scan documents you have digitally",
      body: "If you have the Word doc, the source PDF, or the export, use those. Printing-then-scanning loses fidelity, makes the file bigger, and removes searchability. There's no benefit.",
    },
    {
      title: "Don't scan to 'lock' a document",
      body: "Re-exporting from the source to PDF locks the content. Scanning doesn't add security; it removes searchability and text quality without making the file harder to alter.",
    },
    {
      title: "Use OCR if you scan and need searchability",
      body: "OCR converts the scanned images of text into searchable underlying text. Without it, scanned PDFs are pictures of words — readable but not searchable.",
    },
    {
      title: "Compress scans before sharing",
      body: "Scanned PDFs are the largest PDFs you'll commonly encounter. Compress PDF in your browser shrinks them dramatically without obvious quality loss, especially on text-only documents.",
    },
    {
      title: "Scan at the right resolution",
      body: "200–300 DPI for documents that will be read on screen. 300 DPI for anything that might be printed. 600 DPI is photo-quality and wastes space on text.",
    },
  ],
  tips: [
    "Most 'I need to scan this' moments turn out to be 'I have this digitally and forgot'. Look for the source first.",
    "A direct PDF export is cleaner than a scanned print-out in every measurable way: sharper, smaller, searchable, editable.",
    "Phone scans now match flatbed quality for ordinary documents with edge detection and contrast adjustment.",
    "OCR'd scans are searchable but not text-perfect. Treat OCR output as approximate, not authoritative.",
    "Don't scan to make a fresh file 'look official'. The format is the same; nobody cares whether it was scanned or exported.",
  ],
  mobileNote:
    "Phones are the right tool for everyday scanning — the camera is on you, edge detection produces clean results, and the resulting PDF is usable immediately. The PDF Editor app's scan flow is built for this, with multi-page capture and on-device cleanup.",
  faq: [
    {
      q: "Should I scan a document I have as a Word file?",
      a: "No. Export it to PDF directly. Scanning loses resolution, makes the file bigger, and removes searchability.",
    },
    {
      q: "Is a scanned PDF more 'official' than an exported one?",
      a: "No. They're both PDFs. Officialness comes from signatures and content, not from scanning origin.",
    },
    {
      q: "When does scanning genuinely help?",
      a: "When the source is paper. Mailed contracts, handwritten notes, paper forms with handwriting. Scanning is the only way to digitize those.",
    },
    {
      q: "Should I OCR every scan?",
      a: "Yes if your tool supports it. Searchable scans are far more useful long-term, and the OCR doesn't change the visible appearance.",
    },
    {
      q: "How big should a scanned PDF be?",
      a: "A few hundred KB to a few MB for typical documents. Scans much larger than that benefit from compression.",
    },
  ],
  related: [
    { label: "Scan to PDF — phone-camera scanning", path: "/scan-to-pdf" },
    { label: "How to scan documents to PDF with your phone", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "How to fix scanned PDF quality", path: "/guides/how-to-fix-scanned-pdf-quality" },
    { label: "Editable PDF vs flat PDF", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "Scan to PDF — phone-camera scanning", path: "/scan-to-pdf" },
};

export default content;
