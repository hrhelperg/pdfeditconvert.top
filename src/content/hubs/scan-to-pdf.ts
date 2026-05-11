import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "scan-to-pdf",
  hero: {
    eyebrow: "Scan to PDF",
    h1: "Turn paper into clean, searchable PDFs.",
    highlight: "clean",
    lead: "Use your phone camera to scan receipts, IDs, contracts, and multi-page documents. Auto edge detection, perspective correction, and OCR — done in seconds, on-device.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Why phone photos of documents look bad",
    paragraphs: [
      "Taking a picture of a contract with the default camera produces a JPG that's blown out by ceiling lights, warped by the angle you held the phone at, and shows the surface behind the page. It's the wrong shape, the wrong contrast, and not searchable. Anyone you send it to has to squint.",
      "Email a JPG like that to an accountant and you'll get a polite request for 'a proper PDF'. The reason is real: receipt JPGs can't be indexed, can't be OCR'd by their bookkeeping software, and frequently don't pass document upload validators.",
      "A document scanner app rebuilds the photo into what it should look like: rectangular, contrast-corrected, deskewed, and saved as a PDF with hidden text behind it. Multi-page documents become a single file, not twelve camera-roll JPGs.",
    ],
  },
  features: {
    heading: "Scan like it's a real scanner",
    items: [
      {
        icon: "ScanLine",
        title: "Auto edge detection",
        body: "The app finds the document edges automatically and snaps the scan when the framing is right.",
      },
      {
        icon: "Maximize",
        title: "Perspective correction",
        body: "Skewed angles get straightened. The result looks shot from directly above.",
      },
      {
        icon: "Layers",
        title: "Multi-page scans",
        body: "Capture page after page in sequence. The app stitches them into one PDF.",
      },
      {
        icon: "ScanText",
        title: "OCR (searchable text)",
        body: "Recognize the words inside scanned pages so the resulting PDF is searchable and copyable.",
      },
      {
        icon: "Sun",
        title: "Smart filters",
        body: "Color, black-and-white, or document-optimized filters to handle lighting issues.",
      },
      {
        icon: "Tag",
        title: "Auto-naming",
        body: "The app suggests filenames based on the document content — receipts, contracts, IDs.",
      },
    ],
  },
  steps: {
    heading: "How to scan a document to PDF",
    items: [
      {
        title: "Open the scanner",
        body: "Tap the Scan tile on the home screen of the PDF Editor app.",
      },
      {
        title: "Aim at the document",
        body: "Hold the phone roughly above the page. The app finds the edges and pulses when ready.",
      },
      {
        title: "Let it auto-capture",
        body: "Or tap manually. The capture is instant.",
      },
      {
        title: "Adjust corners if needed",
        body: "Fine-tune the detected edges before the perspective is corrected.",
      },
      {
        title: "Add more pages",
        body: "Tap the page counter to continue. The app stitches them in order.",
      },
      {
        title: "Save as PDF",
        body: "Pick a filename (or accept the auto-suggestion) and save. OCR runs in the background.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Scanning where you are",
    body: "Receipts get scanned at the table, contracts at the meeting room, IDs at airport check-in. The whole point is that you don't carry a flatbed in your bag. A document scanner on your phone is the closest substitute and, for everyday business needs, completely sufficient.",
  },
  faq: [
    {
      q: "Is the scan quality as good as a flatbed scanner?",
      a: "For everyday business documents — receipts, contracts, IDs, forms — yes. For archival photo scanning or fine print on glossy paper, a flatbed is still better.",
    },
    {
      q: "How reliable is multi-page scanning?",
      a: "Very reliable. The app keeps capturing until you stop, and you can reorder or delete pages before saving.",
    },
    {
      q: "What languages does OCR support?",
      a: "All major Latin-script languages, plus Cyrillic, Greek, Arabic, Chinese, Japanese, Korean. Recognition quality varies by lighting and page condition.",
    },
    {
      q: "Can I scan IDs and passports?",
      a: "Yes. The app produces a clean, deskewed scan you can save or share. For security, keep ID scans in a protected folder or apply a password to the resulting PDF.",
    },
    {
      q: "Does it work offline?",
      a: "Scanning and edge detection run on-device. OCR for some less-common languages may require a connection on first use to download the model.",
    },
  ],
  related: [
    {
      label: "Step-by-step: how to scan documents to PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    { label: "Edit the scanned PDF after the fact", path: "/pdf-editor" },
    {
      label: "Scanning workflows for business",
      path: "/use-cases/business",
    },
  ],
  appCta: {
    heading: "Scan documents straight from your camera.",
    sub: "Free on iOS and Android. Scans stay on your device.",
  },
};

export default content;
