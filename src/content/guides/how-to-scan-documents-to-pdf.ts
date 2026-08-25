import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "How to Scan Documents to PDF with Your Phone",
  description:
    "Use your phone camera to scan multi-page documents into clean PDFs. Mobile workflow with edge detection and OCR.",
  updated: "2026-05-11",
  intro: [
    "Phones make excellent document scanners once you stop using the default camera. The right app handles edge detection, perspective correction, contrast adjustment, and OCR — turning a hand-held photo into a clean, searchable PDF that looks scanned rather than snapshotted.",
    "This guide walks through the document-scanning workflow in the PDF Editor app on iPhone or Android. Both platforms produce equivalent results. We'll cover everyday cases: receipts, signed forms, multi-page contracts, IDs, and the times when scanning beats walking to a flatbed scanner.",
    "By the end you'll have a repeatable scanning routine that works in less than ideal lighting, produces files that accountants and legal teams accept without question, and keeps everything on-device.",
  ],
  steps: [
    {
      title: "Open the scanner",
      body: "Tap the Scan tile on the home screen of the PDF Editor app. The camera viewfinder opens with edge detection active.",
    },
    {
      title: "Place the document on a contrasting surface",
      body: "Edge detection works best when there's clear contrast between the page and the surface behind it. Put white paper on a dark surface or vice versa.",
    },
    {
      title: "Aim the phone over the page",
      body: "Hold the phone roughly above the document. The app draws a blue outline around the detected edges. When the outline is steady, it auto-captures.",
    },
    {
      title: "Auto-capture or tap manually",
      body: "The camera pulses and snaps when framing is right. If the auto-capture is missing the edges, tap the manual capture button. You can always adjust the corners next.",
    },
    {
      title: "Adjust the detected corners",
      body: "Drag the corner handles to fine-tune the edges if needed. Perspective correction kicks in after this step, producing a rectangular page from the angled shot.",
    },
    {
      title: "Apply a filter",
      body: "Pick Color, Greyscale, or Black-and-White. For receipts and forms, B&W shrinks the file significantly without quality loss. For documents with photos or color elements, stick with Color.",
    },
    {
      title: "Add more pages",
      body: "Tap the page counter at the bottom of the screen to capture additional pages. Each new capture appends to the current PDF. Reorder pages from the thumbnail strip if needed.",
    },
    {
      title: "Save the PDF",
      body: "Tap Done, give the file a meaningful name, and save. OCR runs in the background, making the resulting PDF searchable. You can then share, print, or upload to a cloud drive.",
    },
  ],
  tips: [
    "Diffuse, even lighting beats bright overhead lighting — direct light creates glare on glossy paper or laminated forms.",
    "Place the document flat. Curved pages (like an open book) cause text distortion that perspective correction can't fully fix.",
    "For receipts, the Black-and-White filter typically reduces the file size by 60-80% with no readability loss.",
    "If you scan IDs or passports, save the resulting PDF into a password-protected folder or apply a PDF password before sharing.",
    "The auto-capture works in under a second when framing is good. If it's struggling, the lighting or contrast is probably the issue.",
  ],
  mobileNote:
    "The complete scan-and-save flow takes under 30 seconds for a multi-page document. Compared to walking to a flatbed scanner, downloading scanner software, and managing email attachments, the phone wins decisively for everyday business needs. The output is the same standard searchable PDF every accounting tool and document system accepts.",
  faq: [
    {
      q: "Is the scan quality as good as a flatbed scanner?",
      a: "For everyday documents — receipts, contracts, IDs, forms — yes, with proper lighting and a flat document. For archival photo scanning or fine print on glossy paper, a dedicated flatbed still wins.",
    },
    {
      q: "What languages does OCR support?",
      a: "All major Latin-script languages (English, Spanish, French, German, Italian, Portuguese, Dutch, Czech, Polish, etc.) plus Cyrillic, Greek, Arabic, Chinese, Japanese, and Korean. Recognition quality is highest for clean printed text and lower for handwriting.",
    },
    {
      q: "Can I scan an ID or passport?",
      a: "Yes. The app produces a clean, deskewed scan ready for KYC uploads or any document submission. Apply a password to the resulting PDF if you're emailing it.",
    },
    {
      q: "Does scanning work offline?",
      a: "Yes. Edge detection, perspective correction, and filtering run on-device. OCR runs locally for major languages; less common languages may download a recognition model on first use.",
    },
    {
      q: "How big are scanned PDFs?",
      a: "A typical 5-page document in B&W mode lands around 200-400 KB. The same scan in full color is usually 1-2 MB. Compression can reduce these further if you need to email them.",
    },
  ],
  related: [
    { label: "Scan to PDF — full overview", path: "/scan-to-pdf" },
    {
      label: "Edit the scanned PDF afterward",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF for Business", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Scan to PDF", path: "/scan-to-pdf" },
};

export default content;
