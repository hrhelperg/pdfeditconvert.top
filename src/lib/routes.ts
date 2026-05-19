import type { RouteEntry } from "@/types/content";

export const SITE_URL = "https://pdfeditconvert.top";

export const ROUTES: RouteEntry[] = [
  {
    path: "/",
    title: "PDF Editor — Edit, Convert, Sign and Scan PDFs on Mobile",
    description:
      "All-in-one PDF solution for work, study and life. Edit, convert, compress, merge, sign and scan PDFs from your phone with PDF Editor for iOS and Android.",
    category: "core",
    priority: 1.0,
    changeFrequency: "weekly",
  },

  // Hubs
  {
    path: "/pdf-editor",
    title: "PDF Editor — Edit Text, Images and Pages on Mobile",
    description:
      "Edit PDFs on your iPhone or Android: change text, add images, rearrange pages and sign documents. See how the PDF Editor app makes mobile editing effortless.",
    category: "hub",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/pdf-converter",
    title: "PDF Converter — Convert PDFs to Word, JPG, PNG and More",
    description:
      "Convert PDFs to Word, Excel, JPG, PNG and back. Learn the cleanest mobile workflow with the PDF Editor app on iOS and Android.",
    category: "hub",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/compress-pdf",
    title: "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
    description:
      "Shrink a PDF's file size directly in your browser with adjustable compression levels. Free, no signup, no upload — your file never leaves your device.",
    category: "tool",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/pdf-to-word",
    title: "PDF to Word — Convert PDF to Editable DOCX in Your Browser",
    description:
      "Extract a PDF's text into an editable Word (.docx) document directly in your browser. Free, no upload — an honest text conversion, not a fake layout promise.",
    category: "tool",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/word-to-pdf",
    title: "Word to PDF — Convert DOCX or TXT to PDF in Your Browser",
    description:
      "Turn a Word .docx or .txt file into a clean PDF directly in your browser. Free, no signup, no upload — your document never leaves your device.",
    category: "tool",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/reorder-pdf-pages",
    title: "Reorder PDF Pages — Rearrange Pages in Your Browser (Free, No Upload)",
    description:
      "Preview every page and drag-free reorder a PDF with simple controls, then download the rearranged file. Free, no signup, no upload — files stay on your device.",
    category: "tool",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/extract-pdf-pages",
    title: "Extract PDF Pages — Save Selected Pages as a New PDF (Free, No Upload)",
    description:
      "Pick specific pages or ranges and download a new PDF with only those pages, directly in your browser. Free, no signup, no upload — files never leave your device.",
    category: "tool",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/merge-pdf",
    title: "Merge PDF — Combine PDFs in Your Browser (Free, No Upload)",
    description:
      "Combine multiple PDFs into a single file directly in your browser. Free, no signup, no upload — your files never leave your device.",
    category: "tool",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/split-pdf",
    title: "Split PDF — Extract Pages in Your Browser (Free, No Upload)",
    description:
      "Split a PDF by page range directly in your browser. Free, no signup, no upload — your files stay on your device.",
    category: "tool",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/sign-pdf",
    title: "Sign PDF — Add Electronic Signatures on Phone",
    description:
      "Sign PDFs from your phone with a real handwritten signature or typed name. Legally accepted in most workflows. Try the PDF Editor app.",
    category: "hub",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/scan-to-pdf",
    title: "Scan to PDF — Turn Paper Documents Into Clean PDFs",
    description:
      "Use your phone camera to scan documents, IDs and receipts into clean, searchable PDFs. The PDF Editor app handles edge detection automatically.",
    category: "hub",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/pdf-security",
    title: "PDF Security — Password Protect and Encrypt PDFs",
    description:
      "Protect sensitive PDFs with passwords and encryption. Practical guide to securing documents on iPhone and Android.",
    category: "hub",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/pdf-for-business",
    title: "PDF for Business — Contracts, Invoices and Workflows",
    description:
      "How small teams use PDFs for contracts, invoices and approvals. Modern mobile-first workflows with the PDF Editor app.",
    category: "hub",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/pdf-for-students",
    title: "PDF for Students — Notes, Highlights and Study Guides",
    description:
      "Use PDFs for lecture notes, highlights and study guides. Smart mobile workflows with the PDF Editor app on iOS and Android.",
    category: "hub",
    priority: 0.7,
    changeFrequency: "monthly",
  },

  // Guides
  {
    path: "/guides",
    title: "PDF Guides — How-to Articles and Tutorials",
    description:
      "Practical, mobile-first PDF tutorials: edit, convert, compress, merge, sign and protect documents on iPhone and Android.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/guides/how-to-edit-pdf-on-iphone",
    title: "How to Edit a PDF on iPhone (2026 Guide)",
    description:
      "Edit text, add images and rearrange pages of a PDF directly on iPhone. Step-by-step walkthrough using the PDF Editor app.",
    category: "guide",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-edit-pdf-on-android",
    title: "How to Edit a PDF on Android (2026 Guide)",
    description:
      "Edit PDFs on Android: change text, insert pages and sign documents. Clear step-by-step instructions using the PDF Editor app.",
    category: "guide",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-compress-pdf",
    title: "How to Compress a PDF (Without Losing Quality)",
    description:
      "Reduce PDF file size for email or upload without quality loss. Mobile-friendly tutorial using the PDF Editor app.",
    category: "guide",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-merge-pdf-files",
    title: "How to Merge PDF Files on Phone or Desktop",
    description:
      "Combine multiple PDFs into one document. Step-by-step mobile workflow with the PDF Editor app.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-sign-pdf-on-phone",
    title: "How to Sign a PDF on Your Phone",
    description:
      "Add legal electronic signatures to PDFs from your iPhone or Android. Practical guide using the PDF Editor app.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-scan-documents-to-pdf",
    title: "How to Scan Documents to PDF with Your Phone",
    description:
      "Use your phone camera to scan multi-page documents into clean PDFs. Mobile workflow with edge detection and OCR.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-pdf-app-for-students",
    title: "Best PDF App for Students (2026)",
    description:
      "What students need from a PDF app: notes, highlights, signatures and free conversions. Honest evaluation criteria.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-pdf-app-for-business",
    title: "Best PDF App for Business (2026)",
    description:
      "What small teams should look for in a PDF app: signatures, contracts, security and collaboration on mobile.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-vs-docx",
    title: "PDF vs DOCX — Which Format Should You Use?",
    description:
      "When to choose PDF over DOCX and vice versa. Clear comparison of editability, fidelity, signing and sharing.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-protect-pdf-file",
    title: "How to Password Protect a PDF File",
    description:
      "Add password protection and encryption to a PDF on mobile or desktop. Practical guide using the PDF Editor app.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },

  // Compare
  {
    path: "/compare/pdf-vs-docx",
    title: "PDF vs DOCX — Feature-by-Feature Comparison",
    description:
      "Compare PDF and DOCX across editability, fidelity, signing, security and sharing. Pick the right format for the job.",
    category: "compare",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/compare/pdf-vs-jpg",
    title: "PDF vs JPG — When to Use Each Format",
    description:
      "PDF vs JPG: when to scan, when to photograph. Compare quality, file size, OCR and document workflow fit.",
    category: "compare",
    priority: 0.5,
    changeFrequency: "monthly",
  },
  {
    path: "/compare/pdf-app-vs-online-pdf-tools",
    title: "PDF Apps vs Online PDF Tools — Which Is Better?",
    description:
      "Native PDF apps vs browser-based tools: speed, privacy and offline access compared.",
    category: "compare",
    priority: 0.5,
    changeFrequency: "monthly",
  },

  // Use cases
  {
    path: "/use-cases/students",
    title: "PDF Editor for Students — Notes, Highlights and Study",
    description:
      "How students use the PDF Editor app for lecture notes, highlights, signatures and study guides.",
    category: "use-case",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/use-cases/business",
    title: "PDF Editor for Business — Contracts and Invoices",
    description:
      "How small businesses use the PDF Editor app for contracts, invoices and approvals on mobile.",
    category: "use-case",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/use-cases/freelancers",
    title: "PDF Editor for Freelancers — Proposals and Signed Documents",
    description:
      "Workflows freelancers love: proposals, signed agreements and invoices, all from a phone.",
    category: "use-case",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/use-cases/remote-work",
    title: "PDF Editor for Remote Work — Documents Anywhere",
    description:
      "Work with documents on the go: scan, sign and share PDFs from any device, any location.",
    category: "use-case",
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // Tools (browser-based, free, no upload)
  {
    path: "/pdf-tools",
    title: "Free PDF Tools — Browser-Based, No Upload Needed",
    description:
      "Free PDF tools that run entirely in your browser. Merge, split, rotate, watermark, convert images to PDF and PDFs to images — your files never leave your device.",
    category: "tool",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/image-to-pdf",
    title: "Image to PDF — Convert JPG, PNG, WebP to PDF in Your Browser",
    description:
      "Combine JPG, PNG and WebP images into a single PDF directly in your browser. Free, no upload, no signup — files stay on your device.",
    category: "tool",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/rotate-pdf",
    title: "Rotate PDF — Fix Page Orientation in Your Browser",
    description:
      "Rotate all or selected pages of a PDF by 90°, 180° or 270° directly in your browser. Free and private — files never leave your device.",
    category: "tool",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/pdf-to-images",
    title: "PDF to Images — Export PDF Pages as PNG or JPG",
    description:
      "Turn any PDF into PNG or JPG images, page by page, in your browser. Free, no upload, no account — runs entirely on your device.",
    category: "tool",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/add-watermark-to-pdf",
    title: "Add Watermark to PDF — Free, Private, In-Browser",
    description:
      "Add a text watermark to every page of a PDF directly in your browser. Free, no upload, no signup — files stay on your device.",
    category: "tool",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  // Legal & meta
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "How pdfeditconvert.top and hrhelperg s.r.o. handle your data.",
    category: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/terms",
    title: "Terms of Service",
    description: "Terms governing your use of pdfeditconvert.top.",
    category: "legal",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/contact",
    title: "Contact — PDF Editor by hrhelperg s.r.o.",
    description:
      "Get in touch with the team behind PDF Editor. Email info@hrhelperg.com.",
    category: "meta",
    priority: 0.4,
    changeFrequency: "yearly",
  },
];

export function getRoute(path: string): RouteEntry {
  const r = ROUTES.find((x) => x.path === path);
  if (!r) throw new Error(`Unknown route: ${path}`);
  return r;
}

export function routesByCategory(category: RouteEntry["category"]) {
  return ROUTES.filter((r) => r.category === category && !r.hidden);
}
