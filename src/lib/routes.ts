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
  {
    path: "/pdf-forms",
    title: "PDF Forms — Fill, Sign and Manage Fillable PDFs",
    description:
      "Learn how PDF forms work and how to fill, sign, create and fix them. The hub for interactive and flat fillable PDFs, on desktop and on mobile.",
    category: "hub",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/pdf-encyclopedia",
    title: "PDF Encyclopedia — How PDF Actually Works",
    description:
      "A plain-English reference to the PDF format: standards, fonts, color, compression, forms, security and accessibility. Definitions, specs and how each piece works.",
    category: "hub",
    priority: 0.8,
    changeFrequency: "weekly",
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

  // Guides — conversion cluster
  {
    path: "/guides/how-to-convert-pdf-to-word",
    title: "How to Convert PDF to Word — Free, In Your Browser",
    description:
      "Pull the text out of a PDF into an editable Word document in your browser. What converts cleanly, what needs cleanup, and when scans won't work.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-convert-word-to-pdf",
    title: "How to Convert Word to PDF — Free, No Upload",
    description:
      "Turn a .docx or .txt file into a clean, shareable PDF in your browser. Why PDF is the right format to send, and what to check before exporting.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-convert-jpg-to-pdf",
    title: "How to Convert JPG to PDF — Free Image to PDF",
    description:
      "Combine one or many JPG photos into a single PDF in your browser. Best for receipts, IDs and photographed documents — with honest notes on quality and iPhone HEIC.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-convert-png-to-pdf",
    title: "How to Convert PNG to PDF — Crisp Screenshots & Graphics",
    description:
      "Turn PNG screenshots, diagrams and graphics into a single PDF in your browser. Why PNG keeps text sharp, and what happens to transparency.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-convert-webp-to-pdf",
    title: "How to Convert WebP to PDF — Web Images to a Document",
    description:
      "Turn WebP images saved from the web into a single PDF in your browser. Why WebP gets rejected by other apps, and how converting fixes compatibility.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-convert-pdf-to-jpg",
    title: "How to Convert PDF to JPG — Export Pages as Images",
    description:
      "Export PDF pages as JPG images in your browser. When JPG is the right choice over PNG, how scale affects quality, and where image previews beat a PDF.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-convert-pdf-to-png",
    title: "How to Convert PDF to PNG — Sharp, Lossless Page Images",
    description:
      "Export PDF pages as high-quality PNG images in your browser. Why PNG keeps text and diagrams crisp, plus scale and transparency notes.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-convert-photos-to-pdf-on-iphone",
    title: "How to Convert Photos to PDF on iPhone (HEIC Fix)",
    description:
      "Turn iPhone photos into a single PDF — including the HEIC format quirk that trips people up. The browser route and the faster in-app route.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-convert-photos-to-pdf-on-android",
    title: "How to Convert Photos to PDF on Android",
    description:
      "Turn Android photos into one PDF using a browser tool or the built-in Print-to-PDF route. Plus the faster in-app workflow with scanning.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-convert-scanned-documents-to-pdf",
    title: "How to Convert Scanned Documents to PDF",
    description:
      "Already have scan images or photos of paper? Combine them into one PDF in your browser — plus what OCR does and why scans need it to be searchable.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },

  // Guides — editing & organization cluster
  {
    path: "/guides/how-to-split-pdf-files",
    title: "How to Split a PDF Into Separate Files (Free)",
    description:
      "Break one large PDF into smaller files by page range, in your browser. When to split versus extract, and how to keep the originals safe.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-extract-pages-from-pdf",
    title: "How to Extract Pages From a PDF (Free, No Upload)",
    description:
      "Pull specific pages or ranges out of a PDF into a new file, in your browser. Perfect for sending just the pages someone needs.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-reorder-pdf-pages",
    title: "How to Reorder Pages in a PDF (Free, In Browser)",
    description:
      "Rearrange PDF pages into the right sequence in your browser. Fix scans that came out backwards or merged files that landed out of order.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-rotate-pdf-pages",
    title: "How to Rotate Pages in a PDF (Free, No Upload)",
    description:
      "Rotate all or selected PDF pages by 90, 180 or 270 degrees in your browser. Fix landscape scans and upside-down pages so the document reads right.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-add-watermark-to-pdf",
    title: "How to Add a Watermark to a PDF (Free)",
    description:
      "Stamp text like DRAFT or CONFIDENTIAL across every page of a PDF in your browser. What a watermark does and doesn't protect, explained honestly.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-remove-unwanted-pages-from-pdf",
    title: "How to Remove Unwanted Pages From a PDF",
    description:
      "Drop blank pages, cover sheets or irrelevant sections from a PDF in your browser by keeping only the pages you want. Clean files, private process.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-organize-pdf-files",
    title: "How to Organize PDF Files — A Practical Workflow",
    description:
      "Bring order to messy PDFs: merge related files, reorder pages, drop clutter and name things properly. A repeatable workflow using free browser tools.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-prepare-pdf-before-sharing",
    title: "How to Prepare a PDF Before Sharing (Checklist)",
    description:
      "A pre-send checklist for PDFs: trim stray pages, fix orientation, shrink the size and label drafts. Send a clean, right-sized, intentional document.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fix-sideways-pdf-pages",
    title: "How to Fix Sideways or Upside-Down PDF Pages",
    description:
      "Permanently straighten PDF pages that open sideways or upside down, in your browser. Why rotating your screen doesn't help and what actually fixes it.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },

  // Guides — compression & file size cluster
  {
    path: "/guides/how-to-compress-pdf-online",
    title: "How to Compress a PDF Online Without Uploading It",
    description:
      "Shrink a PDF right in your browser — no upload, no account. How on-device compression differs from typical online tools, and the quality trade-off.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-reduce-pdf-file-size-for-email",
    title: "How to Reduce PDF File Size for Email",
    description:
      "Get a PDF under Gmail and Outlook attachment limits. The real caps, why scans blow past them, and how to shrink a file so it sends.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-make-pdf-smaller-on-iphone",
    title: "How to Make a PDF Smaller on iPhone",
    description:
      "Shrink a PDF on your iPhone using a browser tool or the PDF Editor app. Why iPhone scans get huge and how to get them under sending limits.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-make-pdf-smaller-on-android",
    title: "How to Make a PDF Smaller on Android",
    description:
      "Compress a PDF on any Android phone with a browser tool that needs no install, or the PDF Editor app. Get scans under email and upload limits.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/why-is-my-pdf-so-large",
    title: "Why Is My PDF So Large? Causes and Fixes",
    description:
      "The real reasons a PDF balloons in size — scans, embedded photos, fonts and more — and the right fix for each, using free browser tools.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/compress-pdf-without-losing-too-much-quality",
    title: "Compress a PDF Without Losing Too Much Quality",
    description:
      "Find the sweet spot between file size and quality. How compression levels trade detail for size, and how to pick the lightest one that still works.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-compress-scanned-pdf",
    title: "How to Compress a Scanned PDF (Big Savings)",
    description:
      "Scanned PDFs are the easiest to shrink and the biggest offenders. How to compress them dramatically, and what happens to searchable text.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-pdf-compression-settings",
    title: "Best PDF Compression Settings — A Decision Guide",
    description:
      "Which compression level for email, printing, archiving or web? A practical matrix matching settings to purpose, with honest trade-offs.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-send-large-pdf-files",
    title: "How to Send Large PDF Files (5 Reliable Ways)",
    description:
      "Five reliable ways to send a PDF that's too big to email — compress, split, cloud links and more — and how to choose between them.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-reduce-pdf-size-before-uploading",
    title: "How to Reduce PDF Size Before Uploading",
    description:
      "Upload portals reject big files harder than email does. How to get a PDF under tight portal caps without losing the readability they check for.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },

  // Guides — mobile workflow cluster
  {
    path: "/guides/how-to-sign-pdf-on-iphone",
    title: "How to Sign a PDF on iPhone (2026 Guide)",
    description:
      "Sign a PDF on iPhone with Markup or the PDF Editor app. The native route's limits, and when a dedicated app is the better signing tool.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-sign-pdf-on-android",
    title: "How to Sign a PDF on Android (2026 Guide)",
    description:
      "Sign a PDF on Android, where there's no universal built-in signer. The dependable app route, varied OEM options, and the legal basics.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fill-pdf-forms-on-phone",
    title: "How to Fill Out PDF Forms on Your Phone",
    description:
      "Fill PDF forms on iPhone or Android, whether they have real form fields or are flat scans. Tap-to-type, add text boxes, and sign in one place.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-annotate-pdf-on-mobile",
    title: "How to Annotate a PDF on Mobile",
    description:
      "Highlight, comment and draw on PDFs from your phone or tablet. The annotation tools that matter, and how to keep your markup readable.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-manage-pdfs-on-phone",
    title: "How to Manage PDFs on Your Phone",
    description:
      "Keep phone PDFs from becoming a mess: rename, organise into folders, sync to the cloud and free up storage. A practical maintenance routine.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-create-pdf-from-camera",
    title: "How to Create a PDF From Your Camera",
    description:
      "Turn a camera shot into a PDF — and why a proper scan beats a raw photo. Quick capture for receipts and whiteboards, scanning for documents.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-share-pdf-from-phone",
    title: "How to Share a PDF From Your Phone",
    description:
      "Share a PDF from iPhone or Android the right way — email, AirDrop, messaging or a link — and how to size and prep it so it actually arrives.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },

  // Guides — use cases & comparisons cluster
  {
    path: "/guides/best-pdf-tools-for-students",
    title: "Best Free PDF Tools for Students (2026)",
    description:
      "The free, no-signup PDF tools that cover real student tasks — merging readings, compressing submissions, converting and annotating — without a paywall.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-pdf-workflow-for-freelancers",
    title: "The Best PDF Workflow for Freelancers",
    description:
      "A repeatable PDF workflow for freelancers: proposals out, contracts signed, invoices sent. The free tools and mobile app that keep it fast and private.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-pdf-tools-for-small-business",
    title: "Best Free PDF Tools for Small Business",
    description:
      "Run invoices, contracts and records on free, private PDF tools — no per-seat subscription. Which tool for which job, and where the app fits.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-vs-jpg-for-documents",
    title: "PDF vs JPG for Documents — Stop Sending Photos",
    description:
      "Why a JPG photo of a document is the wrong thing to send, when PDF is right, and how to convert a photo into a proper document.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/when-to-use-pdf-instead-of-docx",
    title: "When to Use PDF Instead of DOCX (Checklist)",
    description:
      "You have a Word document — should you send it as PDF instead? A quick checklist of the moments PDF is the right call, and how to convert.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/browser-based-pdf-tools-vs-upload-tools",
    title: "Browser-Based PDF Tools vs Upload Tools",
    description:
      "Not all 'online' PDF tools are the same. The difference between tools that run in your browser and ones that upload your file — and how to tell.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/privacy-first-pdf-tools",
    title: "Privacy-First PDF Tools — Keep Documents on Your Device",
    description:
      "PDFs hold some of your most sensitive data. How to work with them without uploading anything, and what 'privacy-first' actually means.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/common-pdf-mistakes-to-avoid",
    title: "Common PDF Mistakes to Avoid",
    description:
      "The PDF mistakes that waste time or leak information — over-compressing, sending photos, uploading sensitive files, forgetting pages — and how to dodge them.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // Guides — Wave 2: problem & fix cluster
  {
    path: "/guides/why-wont-my-pdf-open",
    title: "Why Won't My PDF Open? Causes and Practical Fixes",
    description:
      "A PDF that refuses to open is almost always one of five things. How to diagnose damaged downloads, password locks, viewer bugs and old files — and what fixes each.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/why-is-my-pdf-blank",
    title: "Why Is My PDF Blank? Real Causes and How to Recover It",
    description:
      "When a PDF opens to blank pages, the content is usually still there — just hidden by a render failure, missing font or scan error. How to tell what happened and bring the document back.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/why-cant-i-edit-a-pdf",
    title: "Why Can't I Edit a PDF? The Real Reasons and What Helps",
    description:
      "PDFs were designed to resist editing, but several specific things — scans, security flags, viewer limits — make some files harder than others. What's blocking yours, and what actually works.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/why-is-my-pdf-blurry",
    title: "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
    description:
      "Blurry PDFs come from low-resolution scans, aggressive compression or a bad export — not from the format itself. How to tell which cause you're dealing with and how to get sharpness back.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fix-a-corrupted-pdf",
    title: "How to Fix a Corrupted PDF File (What Actually Works)",
    description:
      "Most 'corrupted' PDFs aren't really corrupted — they're truncated downloads, viewer mismatches or partial writes. The honest checklist of fixes that recover the file, and when it's truly gone.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fix-pdf-printing-issues",
    title: "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
    description:
      "When a PDF prints cropped, scaled wrong, or with missing text, the fix depends on the symptom. A short matrix matching each print problem to the right setting or pre-print fix.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fix-pdf-upload-errors",
    title: "How to Fix PDF Upload Errors (Too Big, Rejected, Stuck)",
    description:
      "Portals reject PDFs for a handful of reasons: file size, page count, format strictness or a flaky upload. How to identify which one bit you and get the file accepted on the next try.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fix-pdf-formatting-problems",
    title: "How to Fix PDF Formatting Issues (Wrapping, Margins, Spacing)",
    description:
      "When a PDF's layout looks broken — text reflowing, margins off, spacing mangled — the fix usually lives in the source document, not the PDF. The cleanest workflow to get a good-looking export.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fix-scanned-pdf-quality",
    title: "How to Fix Scanned PDF Quality (Sharpen, Straighten, Recolor)",
    description:
      "Scanned PDFs go wrong in predictable ways: skew, washed-out contrast, dotty backgrounds, oversized files. The pre-scan adjustments and post-scan tools that actually clean them up.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fix-pdf-font-issues",
    title: "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
    description:
      "When a PDF shows the wrong font, boxes instead of characters, or substituted text, it's usually missing an embedded font. How embedding works and what to change at export time.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },

  // Guides — Wave 2: business & office workflow cluster
  {
    path: "/guides/best-pdf-tools-for-remote-work",
    title: "Best PDF Tools for Remote Work (Free, Browser-Based)",
    description:
      "PDF tools that hold up when your office is a laptop and a phone — sign, compress, merge, scan, share — all without installs or per-seat licenses.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-pdf-tools-for-office-documents",
    title: "Best PDF Tools for Office Documents (Word, Excel, Reports)",
    description:
      "The PDF toolkit that office work actually needs: clean Word↔PDF round-trips, multi-doc merging, page reordering and reliable compression for email attachments.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-pdf-workflow-for-teams",
    title: "Best PDF Workflow for Teams (Shared Files, Reviews, Signoffs)",
    description:
      "How small teams move documents without paid PDF subscriptions: a repeatable handoff for drafts, reviews and signed approvals using free browser tools.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-share-pdfs-with-clients",
    title: "How to Share PDFs With Clients (Professionally, Privately)",
    description:
      "A short playbook for sending PDFs to clients — sizing for email, password choices, branding the file, confirming receipt — without uploading anything to third parties.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-prepare-pdf-for-business-use",
    title: "How to Prepare a PDF for Business Use (Cleanup Checklist)",
    description:
      "Before a PDF leaves the office: trim drafts, verify pagination, fix orientation, embed fonts and shrink the file. A pre-send checklist for documents that represent your business.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-send-contracts-as-pdf",
    title: "How to Send Contracts as PDF (Sign, Lock, Deliver)",
    description:
      "Contracts demand a tighter PDF workflow: locking content, applying signatures, watermarking drafts, and getting a final file the other party can countersign without back-and-forth.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-organize-work-documents-as-pdf",
    title: "How to Organize Work Documents as PDF (Folders, Names, Versions)",
    description:
      "A practical naming and folder convention for work PDFs — quotes, briefs, deliverables, archives — that keeps version chaos out and lets anyone find anything fast.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-manage-invoices-as-pdf",
    title: "How to Manage Invoices as PDF (Issue, Track, Archive)",
    description:
      "An invoice-as-PDF workflow that doesn't need accounting software: generate, number, send, track and archive — using only free browser tools and a clean folder system.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-create-client-ready-pdf-files",
    title: "How to Create Client-Ready PDF Files (Polished, On-Brand)",
    description:
      "What separates an internal PDF from a client-ready one: cover sheet, page numbering, branding, file size, file name. The quick polish that makes the document feel done.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-workflows-for-small-business",
    title: "PDF Workflows for Small Business (Quotes, Contracts, Records)",
    description:
      "How a small business runs its document flow on PDFs — quotes out, contracts back, records archived — without buying a subscription stack for it.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-workflows-for-consultants",
    title: "PDF Workflows for Consultants (Proposals, Reports, Invoices)",
    description:
      "A consultant's PDF rhythm: proposals that close, reports that read clean on a phone, invoices that ship in seconds. The browser-based tools that keep it lean.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-workflows-for-agencies",
    title: "PDF Workflows for Agencies (Decks, Briefs, Approvals)",
    description:
      "An agency's PDF chain — pitch decks, creative briefs, client approvals, deliverables — kept fast and predictable with free, private, browser-based tools.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // Guides — Wave 2: student & education workflow cluster
  {
    path: "/guides/how-to-submit-homework-as-pdf",
    title: "How to Submit Homework as PDF (Without Portal Drama)",
    description:
      "School portals reject homework for predictable reasons — file size, page count, format. The simplest path from finished assignment to accepted PDF upload.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-scan-notes-to-pdf",
    title: "How to Scan Handwritten Notes to PDF (Clean, Searchable)",
    description:
      "Turn pages of handwritten lecture notes into clean multi-page PDFs with a phone camera. The settings that produce readable scans on the first try.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-compress-pdf-for-school-portals",
    title: "How to Compress PDF for School Portals (Strict Limits)",
    description:
      "School and university upload portals cap PDFs harder than email does. How to compress assignments to fit without crushing the readability the grader checks for.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-convert-lecture-notes-to-pdf",
    title: "How to Convert Lecture Notes to PDF (Word, Photos, Slides)",
    description:
      "Lecture notes arrive in every format — Word doc, slide deck, screenshot, photo of the board. How to turn each into a single readable PDF without losing structure.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-organize-study-materials-as-pdf",
    title: "How to Organize Study Materials as PDF (Folders, Naming, Index)",
    description:
      "Course PDFs pile up fast. A simple folder, naming and merging convention that keeps semester materials searchable from week one through finals.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-share-study-notes-as-pdf",
    title: "How to Share Study Notes as PDF (Group, Group Chat, Cloud)",
    description:
      "Share notes with a study group without losing formatting or version control. The PDF habits that keep collaborative study from devolving into screenshot chaos.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-edit-class-documents-as-pdf",
    title: "How to Edit Class Documents as PDF (Annotate, Highlight, Sign)",
    description:
      "Class handouts, problem sets and consent forms often arrive as PDFs. How to mark them up, fill them in and return them without printing — all on phone or laptop.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-workflow-for-university-students",
    title: "PDF Workflow for University Students (Notes, Assignments, Submissions)",
    description:
      "A semester-long PDF rhythm that survives finals week: lecture notes scanned, assignments submitted, study packs shared. Browser-based and free.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-create-digital-study-pdfs",
    title: "How to Create Digital Study PDFs (Flashcards, Summaries, Packs)",
    description:
      "Build your own study PDFs from notes, slides and highlights — searchable, portable, ready for tablet annotation. The structure that makes them actually useful at exam time.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // Guides — Wave 2: privacy, security & trust cluster
  {
    path: "/guides/are-online-pdf-tools-safe",
    title: "Are Online PDF Tools Safe? An Honest Look at the Risk",
    description:
      "Most 'online' PDF tools upload your file to a server. Some don't. The real risks, the categories of tool that handle data differently, and how to tell which is which.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-protect-sensitive-pdf-files",
    title: "How to Protect Sensitive PDF Files (Storage, Sharing, Lifecycle)",
    description:
      "Sensitive PDFs need protection at three points: while stored, while shared, and after the recipient is done with them. A practical workflow that covers all three.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-share-pdf-files-privately",
    title: "How to Share PDF Files Privately (Without Uploading to Strangers)",
    description:
      "The private way to share a PDF doesn't route through a public 'PDF tools' website. The channels that keep documents between you and the recipient, with sensible defaults.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/privacy-first-document-workflows",
    title: "Privacy-First Document Workflows (End-to-End Without Uploads)",
    description:
      "An entire document workflow — capture, edit, sign, send, archive — that keeps files on your devices and out of third-party servers. The realistic shape and the tools.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/local-browser-pdf-processing-explained",
    title: "Local Browser PDF Processing, Explained (How It Actually Works)",
    description:
      "How a PDF tool can run in a browser without sending your file anywhere. The technology, the trade-offs, and how to verify a tool is really local.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/do-online-pdf-tools-store-files",
    title: "Do Online PDF Tools Store Your Files? What to Check",
    description:
      "Some online PDF tools delete uploads instantly, some hold them for hours, some keep them indefinitely. How to read a privacy policy quickly and what to look for.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-avoid-uploading-sensitive-documents",
    title: "How to Avoid Uploading Sensitive Documents (Practical Alternatives)",
    description:
      "When a workflow tempts you to upload a sensitive PDF, there's almost always a local-only alternative. The categories of task and the no-upload tool for each.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/secure-pdf-workflows-for-business",
    title: "Secure PDF Workflows for Business (Without an Enterprise Stack)",
    description:
      "A small business doesn't need a SOC2 PDF vault to run securely. The realistic baseline — encrypted storage, signed transfers, local processing — that meets actual risk.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/browser-based-document-processing-benefits",
    title: "Browser-Based Document Processing Benefits (Speed, Privacy, Cost)",
    description:
      "Why processing PDFs in the browser changes the speed-privacy-cost calculus versus traditional cloud tools, and where the limits of local processing actually are.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // Guides — Wave 2: format comparison cluster
  {
    path: "/guides/pdf-vs-google-docs",
    title: "PDF vs Google Docs — When to Use Each (Editing, Sharing, Locking)",
    description:
      "Google Docs is for collaboration; PDF is for delivery. The realistic when-to-use-each, and how to convert cleanly between them at the right moments.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-vs-docx-for-business",
    title: "PDF vs DOCX for Business (Contracts, Reports, Distribution)",
    description:
      "Why business documents almost always ship as PDF but live as DOCX. The right tool at each stage of a contract, report or invoice's life.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-vs-images-for-sharing-documents",
    title: "PDF vs Images for Sharing Documents (JPG, PNG, HEIC)",
    description:
      "When a JPG, PNG or HEIC of a document is wrong — and what makes PDF the right format for anything beyond a quick screenshot.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-vs-png",
    title: "PDF vs PNG — Multi-Page Documents vs Single Sharp Images",
    description:
      "PDF wins for multi-page documents; PNG wins for single, sharp, transparent-background images. The clear rules and the conversion between them.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-format-for-sharing-documents",
    title: "Best Format for Sharing Documents (PDF, DOCX, Images Compared)",
    description:
      "When PDF is the right format to share, when it isn't, and how the realistic alternatives (DOCX, images, HTML, Markdown) actually compare across the everyday scenarios.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/why-pdf-is-still-popular",
    title: "Why PDF Is Still the Default for Documents in 2026",
    description:
      "Decades on, PDF still dominates document sharing. The reasons it stuck around — fidelity, universality, signability, archive-friendliness — and where it's vulnerable.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/when-to-use-scanned-pdf",
    title: "When to Use a Scanned PDF (and When Not To)",
    description:
      "Scanned PDFs solve a specific problem — paper-to-digital. They're also bigger, less searchable, and harder to edit. When the trade is worth it.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/editable-pdf-vs-flat-pdf",
    title: "Editable PDF vs Flat PDF — What the Difference Actually Is",
    description:
      "Some PDFs have real selectable text and editable structure; some are images of pages with no underlying text. How to tell which you have, and when each is right.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // Guides — Wave 2: commercial-intent cluster
  {
    path: "/guides/best-free-pdf-tools",
    title: "Best Free PDF Tools in 2026 (Honest, No-Signup Picks)",
    description:
      "The free PDF tools worth using — compress, merge, sign, convert, scan — picked for actual quality and privacy, not for how many ads they show or how long the trial lasts.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/free-browser-based-pdf-tools",
    title: "Free Browser-Based PDF Tools (No Install, No Upload)",
    description:
      "The PDF tools that run entirely in your browser — no install, no account, no upload. What's available, what they cover, and how to verify they really run locally.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-pdf-tools-without-upload",
    title: "Best PDF Tools Without Uploading (Files Stay on Your Device)",
    description:
      "When you don't want your PDF leaving your device, these are the tools that do the work locally. Compression, merging, conversion — all with files staying on your machine.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-private-pdf-tools",
    title: "Best Private PDF Tools (When Confidentiality Actually Matters)",
    description:
      "For contracts, financial records and other sensitive PDFs, these are the tools that respect privacy by architecture — not just by stated policy.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/free-pdf-tools-for-iphone",
    title: "Free PDF Tools for iPhone (Browser and App Picks)",
    description:
      "Free iPhone PDF tools that actually work without a subscription — compress, sign, scan, convert. Browser-based options and the PDF Editor app for offline workflows.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/free-pdf-tools-for-android",
    title: "Free PDF Tools for Android (Browser and App Picks)",
    description:
      "Free Android PDF tools picked for everyday tasks — compress, sign, scan, convert. Mobile browser routes and the PDF Editor app for offline use.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },

  // Guides — Phase 3 Group 1: PDF forms fundamentals
  {
    path: "/guides/what-is-a-pdf-form",
    title: "What Is a PDF Form? Interactive vs Flat Forms Explained",
    description:
      "A PDF form is a document built to collect answers — sometimes with real fields you type into, sometimes a flat page you write on top of. What that means and how to tell.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/editable-pdf-vs-fillable-pdf",
    title: "Editable PDF vs Fillable PDF — What's the Difference?",
    description:
      "Editing a PDF changes its content; filling a PDF means entering answers in form fields. Why the two are different jobs, and which one you actually need.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-pdf-forms-work",
    title: "How PDF Forms Work — Fields, AcroForms and Flat Scans",
    description:
      "Under the hood, a PDF form is either a set of interactive fields layered on the page or a flat image with none. How each is built and why it matters for filling.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/can-you-edit-a-pdf-form",
    title: "Can You Edit a PDF Form? What You Can and Can't Change",
    description:
      "Editing a PDF form's questions is different from filling it in. What's editable, what's locked, and how to change a form you only have as a finished PDF.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fill-out-a-pdf-form",
    title: "How to Fill Out a PDF Form (Interactive or Flat)",
    description:
      "Fill any PDF form, whether it has real fields or is a flat scan you write on top of. The complete walkthrough for computer and phone, plus signing and saving.",
    category: "guide",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-save-a-filled-pdf-form",
    title: "How to Save a Filled PDF Form So Answers Stick",
    description:
      "Fill a form, then watch your answers disappear? How to save filled form data reliably, why some viewers don't, and when to flatten before sending.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/why-cant-i-type-in-a-pdf-form",
    title: "Why Can't I Type in a PDF Form? Causes and Fixes",
    description:
      "You click a field and nothing happens. The three usual reasons — a flat form, the wrong viewer, or a locked file — and exactly what to do about each.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-create-a-fillable-pdf",
    title: "How to Create a Fillable PDF — Honest Options and Limits",
    description:
      "What it really takes to make a PDF people can fill in — interactive fields versus a simple flat template — and which approach fits the tools you have.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-share-a-pdf-form",
    title: "How to Share a PDF Form for Others to Fill In",
    description:
      "Sending a blank form to be completed is different from sending a finished document. How to share a form so recipients can actually fill it, and collect the results.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-print-a-filled-pdf-form",
    title: "How to Print a Filled PDF Form With Answers Showing",
    description:
      "Printed your form and the fields came out blank? Why filled-in values sometimes don't print, and how to get a clean paper copy with every answer visible.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // Guides — Phase 3 Group 2: mobile PDF forms
  {
    path: "/guides/how-to-fill-pdf-forms-on-iphone",
    title: "How to Fill PDF Forms on iPhone (Files, Markup & Apps)",
    description:
      "Fill interactive and flat PDF forms on iPhone — using Files and Markup, or a dedicated PDF app. The iOS-specific steps, the share-sheet route, and where Markup falls short.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fill-pdf-forms-on-android",
    title: "How to Fill PDF Forms on Android (Any Phone)",
    description:
      "Fill interactive and flat PDF forms on Android. Why the built-in viewer often can't type, the reliable app route, and how device differences between brands affect forms.",
    category: "guide",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-send-a-completed-pdf-form",
    title: "How to Send a Completed PDF Form (Flatten & Deliver)",
    description:
      "You filled the form — now return it cleanly. How to flatten so answers can't be changed, attach it the right way, and confirm it arrived without the data getting lost.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-fill-government-pdf-forms-on-phone",
    title: "How to Fill Government PDF Forms on Your Phone",
    description:
      "Government forms are often flat scans with strict formatting. How to complete them on a phone, handle the awkward fields, and follow the agency's own instructions.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/mobile-pdf-form-workflow",
    title: "The Mobile PDF Form Workflow (Receive to Sent)",
    description:
      "A repeatable phone-first routine for forms: receive, open in the right app, fill, sign, flatten, send. The end-to-end workflow that needs no computer.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-pdf-form-app-for-iphone",
    title: "Best PDF Form App for iPhone (What to Look For)",
    description:
      "What actually matters in an iPhone PDF form app — field detection, flat-form text, signing, on-device privacy — and how to judge one for your own forms.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/best-pdf-form-app-for-android",
    title: "Best PDF Form App for Android (How to Choose)",
    description:
      "How to choose an Android PDF form app: field detection, flat-form text, signing, and on-device privacy — and why a dedicated app beats the default viewer for forms.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // Guides — Phase 3 Group 3: business PDF forms
  {
    path: "/guides/pdf-forms-for-small-business",
    title: "PDF Forms for Small Business (Intake, Orders, HR)",
    description:
      "The everyday forms a small business runs on — intake, orders, bookings, simple HR — and how to fill, collect and manage them as PDFs without buying a forms platform.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-send-client-intake-forms",
    title: "How to Send Client Intake Forms (Cleanly, Privately)",
    description:
      "Get a new client's details in one clean pass. How to send a PDF intake form so it's easy to fill, comes back complete, and keeps the client's information private.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-use-pdf-forms-for-contracts",
    title: "How to Use PDF Forms for Contracts (Fields & Signing)",
    description:
      "Turn a contract into a fillable PDF: fields for names, dates and initials, a signature area, and a flatten step so the signed version can't be altered. Honest limits included.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/how-to-manage-pdf-application-forms",
    title: "How to Manage PDF Application Forms (Collect & Review)",
    description:
      "Receiving applications as PDFs? How to collect, review, compare and archive them without losing track — a simple system for handling a stack of completed forms.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-forms-for-consultants",
    title: "PDF Forms for Consultants (Questionnaires & Scoping)",
    description:
      "Discovery questionnaires, engagement scoping sheets and feedback forms — the form side of consulting, handled as fillable PDFs that clients can complete on any device.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-forms-for-agencies",
    title: "PDF Forms for Agencies (Onboarding, Briefs, Approvals)",
    description:
      "Client onboarding packs, creative brief forms and approval sign-off sheets — the multi-stakeholder forms agencies run, handled as fillable PDFs anyone can complete.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-forms-for-freelancers",
    title: "PDF Forms for Freelancers (Intake, Agreements, Deposits)",
    description:
      "Project intake, simple service agreements and deposit authorisations — the lean set of fillable PDF forms a freelancer needs, with no subscription and nothing to upload.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/document-collection-workflows-with-pdf",
    title: "Document Collection Workflows With PDF",
    description:
      "Gathering files and signed forms from clients? Build a repeatable PDF collection workflow — a checklist, consistent formats, and a tidy way to track what's still missing.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-form-best-practices",
    title: "PDF Form Best Practices (Design Forms People Finish)",
    description:
      "Design forms people actually finish: clear labels, real spacing, sensible fields, an obvious signature area, and a flatten step. Practical rules for makers and senders.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // Guides — Phase 3 Group 4: PDF form problems
  {
    path: "/guides/pdf-form-not-working",
    title: "PDF Form Not Working? Triage and Fixes",
    description:
      "A PDF form misbehaving has a handful of usual causes. A quick triage to identify which one you've hit — fields missing, won't type, won't save, read-only — and where to fix it.",
    category: "guide",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-form-fields-missing",
    title: "PDF Form Fields Missing? Why and How to Restore Them",
    description:
      "Opened a form and the fields aren't there? Why interactive fields disappear in some viewers, how to get them back, and what to do when there were never any to begin with.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/why-pdf-form-wont-save",
    title: "Why a PDF Form Won't Save (And How to Fix It)",
    description:
      "Filled a form and the answers vanish on reopening? Why some viewers only print instead of saving field data, and the reliable ways to make your answers stick.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/why-pdf-form-is-read-only",
    title: "Why a PDF Form Is Read-Only (And What to Do)",
    description:
      "Your form opens locked and greyed out? Why forms are set read-only, how to tell deliberate security from a viewer quirk, and the honest options for completing one.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-form-not-printing-correctly",
    title: "PDF Form Not Printing Correctly? Fix Blank Fields",
    description:
      "Form prints with blank fields, shifted text or cut edges? The form-specific print problems — missing field values especially — and the settings that fix each one.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-form-font-problems",
    title: "PDF Form Font Problems (Auto-Size, Clipping, Substitution)",
    description:
      "Field text too big, too small, or auto-shrinking as you type? The font quirks specific to form fields — auto-size, substitution, clipping — and how to get clean, legible answers.",
    category: "guide",
    priority: 0.55,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-form-formatting-issues",
    title: "PDF Form Formatting Issues (Alignment & Overflow)",
    description:
      "Fields misaligned, answers overflowing, the form looking different on someone else's screen? The form-layout problems that vary by viewer, and how to get a consistent result.",
    category: "guide",
    priority: 0.55,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-form-submission-errors",
    title: "PDF Form Submission Errors (When Submit Fails)",
    description:
      "A form's Submit button fails or does nothing? Why built-in submit buttons depend on the issuer's server, what the errors mean, and the reliable manual way to send your form.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/pdf-form-compatibility-problems",
    title: "PDF Form Compatibility Problems (XFA & Dynamic Forms)",
    description:
      "A form that opens in one program and breaks in another usually uses features not every viewer supports. How to spot dynamic forms, what causes the mismatch, and your options.",
    category: "guide",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/guides/fix-pdf-form-errors",
    title: "Fix PDF Form Errors — A Quick First-Aid Checklist",
    description:
      "The universal first-aid steps for a misbehaving PDF form: switch viewers, re-download, update, add text on top, flatten. Run these before diving into a specific cause.",
    category: "guide",
    priority: 0.6,
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
  // Knowledge — PDF Encyclopedia (Phase A)
  {
    "path": "/pdf-encyclopedia/accessible-pdf-forms",
    "title": "PDF Form Accessibility: Tags, Labels & Tab Order",
    "description": "How interactive PDF form fields are tagged, labeled through the TU entry, and ordered so screen readers and keyboard users can find and complete them.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/acroform",
    "title": "How AcroForm Fields Work Inside the PDF Format",
    "description": "AcroForm is the PDF format's native interactive-form system, storing fillable fields as field dictionaries and widget annotations in the document catalog.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/aes-128-encryption",
    "title": "AES-128 PDF Encryption: How AESV2 Protects Files",
    "description": "AES-128 encryption in PDF uses the AESV2 crypt filter to protect a document's strings and streams with a 128-bit block cipher in CBC mode.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/aes-256-encryption",
    "title": "AES-256 PDF Encryption: 256-Bit Keys, V5/R6 Explained",
    "description": "AES-256 is a 256-bit symmetric cipher used by PDF's Standard Security Handler in CBC mode. Learn how V5/R6 encryption and key derivation work.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/annotation-types",
    "title": "PDF Annotation Subtypes: Text, Link, Markup & Widget",
    "description": "Understand the standard PDF annotation subtypes—text notes, links, markup, stamps, ink, and form widgets—and how the format groups and renders them.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/appearance-streams",
    "title": "PDF Appearance Streams: How Annotations Are Drawn",
    "description": "Appearance streams are form XObjects that store how a PDF annotation looks, giving forms, stamps, and signatures a stable, viewer-independent appearance.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/approval-vs-certification-signatures",
    "title": "Certified vs Approval PDF Signatures Explained",
    "description": "How PDF certification signatures differ from approval signatures: DocMDP permission levels, why only the first signature can certify, and what each one locks.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/artbox",
    "title": "The PDF ArtBox: Content Extent for Print & Placement",
    "description": "The ArtBox is a PDF page box marking the extent of a page's meaningful content, used when placing pages as artwork and in PDF/X print workflows.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/artifact-marking",
    "title": "PDF Artifact Marking: Headers, Footers and Decoration",
    "description": "Artifacts mark page furniture — headers, footers, page numbers and decoration — so a tagged PDF keeps it out of the reading order and away from assistive technology.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/ascii85-decode",
    "title": "ASCII85Decode Filter — Base-85 Encoding in PDFs",
    "description": "ASCII85Decode is the PDF filter that turns base-85 ASCII text back into binary, packing every four bytes into five printable characters for safe transport.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/asciihex-decode",
    "title": "ASCIIHexDecode Filter: Hex-Encoded PDF Streams",
    "description": "How the ASCIIHexDecode filter represents PDF stream data as hexadecimal text, why it expands rather than shrinks data, and where it sits among PDF's ASCII filters.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/associated-files-in-pdf",
    "title": "Associated Files (/AF): Binding Data to PDF Objects",
    "description": "How PDF associated files use the /AF array and /AFRelationship to bind embedded source data, XML, or alternative representations to specific document objects.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/bits-per-component",
    "title": "BitsPerComponent: PDF Image Bit Depth Explained",
    "description": "How the BitsPerComponent entry sets the bit depth of each color component in a PDF image, which values PDF allows, and how it affects file size.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/bleed-and-crop-marks",
    "title": "Bleed, Crop Marks and Trim Boxes in Print PDFs",
    "description": "How PDF represents print bleed and crop marks using the media, bleed, and trim boxes, and how those metadata rectangles differ from marks drawn on the page.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/bleedbox",
    "title": "BleedBox: PDF Bleed Area for Print Production",
    "description": "The BleedBox is the PDF page box marking the print-production clip area — the trim size plus bleed that runs past the finished cut edge.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/blend-modes",
    "title": "How PDF Blend Modes Work: Multiply, Screen & More",
    "description": "Blend modes tell PDF how a shape's colors combine with the backdrop beneath — Multiply, Screen, Overlay and more, set through the graphics state.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/cades-in-pdf",
    "title": "CAdES in PDF: CMS-Based Digital Signatures Explained",
    "description": "How CAdES, the CMS-based ETSI signature format, embeds in a PDF through the ETSI.CAdES.detached subfilter to authenticate signers and reveal edits.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/calrgb-and-calgray",
    "title": "CalRGB & CalGray: Calibrated Color Spaces in PDF",
    "description": "CalRGB and CalGray are CIE-based, device-independent PDF color spaces that anchor calibrated gray and RGB to absolute CIE 1931 XYZ values.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/ccittfax-decode",
    "title": "CCITTFaxDecode: Lossless Fax Compression in PDF",
    "description": "CCITTFaxDecode is the PDF filter that losslessly compresses 1-bit scanned and fax images using the ITU-T Group 3 and Group 4 coding algorithms.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/character-encoding-in-pdf",
    "title": "How PDF Encodes Text: From Byte Codes to Glyphs",
    "description": "How PDF fonts map single-byte and multi-byte codes to glyphs, how named encodings and CMaps work, and why ToUnicode governs copy and search.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/checkbox-form-fields",
    "title": "How Checkbox Fields Work in Interactive PDF Forms",
    "description": "Checkbox form fields are PDF button fields with two states: an author-defined on value and the reserved Off. Learn how their values and check-mark appearances work.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/choice-fields",
    "title": "PDF Choice Fields: List Boxes and Dropdown Menus",
    "description": "How PDF choice fields work: list boxes versus combo boxes, the Opt options array, export versus display values, and single or multiple selection.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/cid-fonts",
    "title": "CID Fonts in PDF: Character IDs, CMaps, Glyphs",
    "description": "How CID-keyed fonts use character identifiers, CMaps, and a character collection to address thousands of glyphs inside PDF composite (Type 0) fonts.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/cjk-fonts-in-pdf",
    "title": "How PDF Handles Chinese, Japanese & Korean Fonts",
    "description": "How PDF renders and encodes Chinese, Japanese, and Korean text using Type 0 composite fonts, CIDFonts, CMaps, and Adobe character collections.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/clipping-paths",
    "title": "Clipping Paths in PDF: How W and W* Confine Painting",
    "description": "How clipping paths work in PDF: the W and W* operators, the clip in the graphics state, and how the paintable region is confined.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/cmap",
    "title": "CMap in PDF Fonts: Character Codes to CIDs Explained",
    "description": "How CMaps map character codes to CIDs in PDF composite fonts, what Identity-H and Identity-V do, and why ToUnicode mapping is a separate resource.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/color-key-masking",
    "title": "Color Key Masking: PDF Color-Range Transparency",
    "description": "How PDF color key masking uses a /Mask colour range to make matching image pixels transparent, and how it differs from stencil masks and soft masks.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/color-management-in-pdf",
    "title": "How PDF Manages Color Across Devices and Print",
    "description": "How PDF represents color so it reproduces predictably across screen and print: device vs CIE-based color spaces, ICC profiles, rendering and output intents.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/composite-vs-simple-fonts",
    "title": "How PDF Distinguishes Simple From Composite Fonts",
    "description": "In PDF, simple fonts address up to 256 glyphs with single-byte codes, while composite Type 0 fonts use CMaps to reach large, multi-byte glyph sets.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/cropbox",
    "title": "How the PDF CropBox Clips a Page's Visible Area",
    "description": "The CropBox is the rectangle a PDF viewer treats as the visible page, clipping anything outside it without deleting it. Here is how it actually works.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/custom-metadata-in-pdf",
    "title": "Custom PDF Metadata: Info Keys and XMP Schemas",
    "description": "How PDFs carry user-defined metadata beyond Title and Author — private keys in the information dictionary and custom XMP schemas.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/dct-decode-jpeg",
    "title": "How the DCTDecode Filter Stores JPEGs in a PDF",
    "description": "DCTDecode is the PDF filter that holds JPEG-compressed images. See how it works, why it is lossy, and when it beats lossless filters like FlateDecode.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/devicecmyk",
    "title": "DeviceCMYK: PDF's Four-Component Print Color Space",
    "description": "How the DeviceCMYK color space works in PDF: its four subtractive ink components, the k and K operators, and why it is device-dependent.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/devicegray",
    "title": "DeviceGray: The One-Channel Grayscale Space in PDF",
    "description": "DeviceGray is PDF's single-component grayscale color space. Learn how its 0-to-1 values, the g and G operators, and its device dependence work.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/devicen-color",
    "title": "DeviceN Color Space in PDF: Multi-Ink Colorants Explained",
    "description": "Learn how the DeviceN color space in PDF represents multiple named colorants at once, how its tint transform works, and where n-color printing uses it.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/devicergb",
    "title": "DeviceRGB Explained: PDF's Additive Color Space",
    "description": "Learn how DeviceRGB defines red, green, and blue color values in PDF, why it is device-dependent, and how it compares to DeviceCMYK and ICC-based color.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/document-information-dictionary",
    "title": "The PDF Info Dictionary: Metadata Fields Explained",
    "description": "How the PDF Info dictionary stores document metadata such as title, author, dates and producer, how it is referenced, and how it relates to XMP.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/document-properties",
    "title": "Understanding PDF Document Properties & Metadata",
    "description": "How a PDF viewer's Document Properties panel works: the metadata fields, dates and file attributes it shows, and where each value is actually stored.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/document-security-store",
    "title": "How the PDF DSS Stores Signature Validation Data",
    "description": "The DSS is a PDF dictionary holding certificates, CRLs, and OCSP responses that let digital signatures stay verifiable years after they were applied.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/electronic-vs-digital-signature",
    "title": "E-Signature vs Digital Signature in PDFs, Explained",
    "description": "Every digital signature is an electronic signature, but not the other way around. See how PDF handles each, from drawn marks to cryptographic PKI signing.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/embedded-files-in-pdf",
    "title": "How PDF Attachments and Embedded File Streams Work",
    "description": "How PDF embeds whole files like XML, spreadsheets or other PDFs as compressed streams, where viewers find them, and how PDF/A-3 and portfolios use them.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/embedded-font-programs",
    "title": "How PDF Embeds Font Programs in FontFile Streams",
    "description": "Embedded font programs store a typeface's outlines inside the PDF via FontFile, FontFile2, or FontFile3 streams so text renders exactly as designed on any device.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/encryption-dictionary",
    "title": "Inside the PDF Encryption Dictionary (/Encrypt)",
    "description": "How a PDF stores encryption settings in its /Encrypt dictionary: the security handler, algorithm version and revision, key length, permissions and password entries.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/fdf-and-xfdf",
    "title": "FDF vs XFDF — PDF Form Data Interchange Formats",
    "description": "How FDF and XFDF carry a PDF form's field data apart from the document, map to AcroForm fields by name, and drive form import, export, and submission.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/flate-decode",
    "title": "FlateDecode: The zlib/deflate Filter in PDF Files",
    "description": "FlateDecode is PDF's lossless zlib/deflate stream filter. Learn how it compresses text, images and objects, and how predictors improve the result.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/font-descriptor",
    "title": "Font Descriptor in PDF: Metrics & Flags Explained",
    "description": "How the PDF font descriptor dictionary stores font-wide metrics and flags, why it enables substitution, and how it references an embedded font program.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/font-embedding",
    "title": "Embedded Fonts in PDF: How Font Data Is Stored",
    "description": "Font embedding packages a font's glyph outlines inside a PDF so text looks the same on any device, without depending on locally installed fonts.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/font-flags",
    "title": "Font Flags in the PDF Font Descriptor, Explained",
    "description": "Font flags are bits in a PDF font descriptor's /Flags field that mark a typeface as serif, italic, monospaced or symbolic to guide substitution and encoding.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/font-subsetting",
    "title": "PDF Font Subsetting: Partial Font Embedding Explained",
    "description": "Font subsetting embeds only the glyphs a PDF actually uses, shrinking file size while keeping text rendering consistent. Learn how it works and its trade-offs.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/font-substitution",
    "title": "How PDF Font Substitution Works and Why It Happens",
    "description": "When a PDF's font isn't embedded or installed, the viewer swaps in a replacement. Learn how PDF font substitution works and what it does and doesn't change.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/form-calculation",
    "title": "PDF Form Calculations: How Auto-Computed Fields Work",
    "description": "How PDF forms auto-calculate field values: the calculate action, the AcroForm calculation-order array, and why results depend on JavaScript support.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/form-field-flags",
    "title": "Form Field Flags (Ff) in PDF AcroForms Explained",
    "description": "Form field flags live in the Ff entry of an AcroForm field as a bit field, toggling read-only, required, multiline, password, combo, comb and other behaviors.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/form-flattening",
    "title": "Flattening PDF Forms: How Fields Become Static",
    "description": "Form flattening bakes a PDF's interactive fields into the page as fixed content, so values stay visible and consistent but can no longer be edited.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/form-xobjects",
    "title": "Form XObjects: Reusable Content Streams in PDF",
    "description": "How Form XObjects package reusable graphics in a PDF — the BBox, Matrix and Resources entries, the Do operator, and how they power transparency groups.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/glyph",
    "title": "How a PDF Renders Glyphs From Character Codes",
    "description": "A glyph is the drawn shape of a character. Learn how PDF maps character codes through fonts to glyphs, and why that gap affects search and copying.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/hash-algorithms-in-pdf",
    "title": "Message Digests in PDF Signing: How Hashing Works",
    "description": "How PDF digital signatures use cryptographic hash functions such as SHA-256 to fingerprint the signed byte range and reveal any later change.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/heading-structure-in-pdf",
    "title": "PDF Heading Tags: H, H1–H6 and Document Outline",
    "description": "How tagged PDFs mark headings with the H and H1–H6 structure types, why levels must nest correctly, and how they form an outline for assistive technology.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/history-of-pdf",
    "title": "How PDF Evolved: From Adobe Camelot to ISO 32000",
    "description": "How PDF grew from an Adobe project in the early 1990s into ISO 32000, the open standard behind today's fixed-layout documents.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/icc-based-color",
    "title": "Understanding ICCBased Color Spaces in PDF Files",
    "description": "An ICCBased color space defines PDF colors through an embedded ICC profile, giving device-independent, color-managed values for text, vector art and images.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/icc-profiles-in-pdf",
    "title": "Embedded ICC Color Profiles in PDF, Explained",
    "description": "How ICC color profiles are embedded in PDFs, how ICCBased color spaces and output intents reference them, and why they keep color consistent across devices.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/image-color-depth",
    "title": "Color Depth in PDF Images: Bits Per Pixel Explained",
    "description": "How PDF stores image color depth through BitsPerComponent and color spaces, why 1- to 16-bit images differ, and how depth affects file size and quality.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/image-downsampling",
    "title": "PDF Image Downsampling: Resolution and File Size",
    "description": "How image downsampling lowers image resolution inside a PDF to shrink file size, and how the subsampling, average, and bicubic methods differ.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/image-interpolation",
    "title": "How the PDF Interpolate Flag Smooths Scaled Images",
    "description": "How the Interpolate flag works in PDF image dictionaries: an optional hint to smooth low-resolution images when they are scaled up for display or print.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/image-masks",
    "title": "How PDF Image Masking Works: Stencil, Soft & Color Key",
    "description": "How PDF images become transparent: stencil (ImageMask) masks, explicit masks, color key masking, and soft masks (SMask) that supply per-pixel alpha.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/image-only-pdf",
    "title": "Image-Only PDF: A Scan With No Searchable Text",
    "description": "An image-only PDF stores each page as a raster image with no text layer, so its words can't be searched, selected, or read aloud until OCR adds text.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/image-resolution-in-pdf",
    "title": "How Effective Resolution Works for PDF Images",
    "description": "Learn how image resolution in PDF is set by geometry, not a DPI tag: effective PPI comes from an image's pixel count divided by the size it is drawn.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/image-soft-masks",
    "title": "SMask in PDF: Per-Image Alpha Transparency Explained",
    "description": "In PDF, an SMask is a DeviceGray image attached to an image XObject that acts as an alpha channel, defining how opaque each pixel of the base image is.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/image-xobjects",
    "title": "Image XObjects: How Raster Images Live in a PDF",
    "description": "Image XObjects are the PDF stream objects that hold raster images: their pixel data, dimensions, color space and bit depth, drawn onto a page with the Do operator.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/indexed-color",
    "title": "Palette-Based (Indexed) Color Spaces in PDF Files",
    "description": "How PDF's indexed color spaces store a compact palette and map each image sample to a color through a lookup table, and why it shrinks file size.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/inline-images",
    "title": "Inline Images: BI/ID/EI Image Data in PDF Streams",
    "description": "How PDF inline images embed small raster data directly in a content stream with the BI, ID and EI operators and abbreviated keys.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/iso-32000",
    "title": "ISO 32000: The International Standard Behind PDF",
    "description": "ISO 32000 is the ISO standard that defines PDF. See how ISO 32000-1 (PDF 1.7) and ISO 32000-2 (PDF 2.0) formalized the format Adobe created.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/javascript-in-pdf",
    "title": "PDF JavaScript: Scripting Forms and Interactivity",
    "description": "Learn how embedded JavaScript makes PDFs interactive with form validation, calculations, and actions, and why viewers and standards restrict it.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/jbig2-decode",
    "title": "JBIG2Decode Filter: Bilevel Compression in PDF",
    "description": "JBIG2Decode is the PDF filter for one-bit scanned pages: it reuses recurring symbols like letters and supports lossless or lossy bilevel compression.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/jpx-decode-jpeg2000",
    "title": "How JPEG 2000 (JPXDecode) Compression Works in PDF",
    "description": "JPXDecode is the PDF filter for JPEG 2000 image data — a wavelet-based codec supporting lossless and lossy compression, high bit depths, and embedded alpha.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/lab-color-in-pdf",
    "title": "The Lab Color Space in PDF: CIE L*a*b* Explained",
    "description": "Lab color in PDF is a CIE-based, device-independent color space defined by a lightness value and two color axes, used for consistent, device-neutral color reproduction.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/language-specification-in-pdf",
    "title": "Natural Language in PDF: How the /Lang Entry Works",
    "description": "How PDF declares the natural language of a document and its parts through the /Lang entry, and why it matters for screen readers and accessibility.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/linearized-pdf",
    "title": "How PDF Linearization Enables Fast Web View Loading",
    "description": "Linearized PDF (Fast Web View) reorders a file's objects and adds hint tables so a viewer can show the first page while the rest downloads.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/link-annotations",
    "title": "PDF Link Annotations: Hyperlinks and Navigation Explained",
    "description": "How PDF link annotations define clickable regions with Rect and QuadPoints, and connect to destinations or actions like GoTo, GoToR and URI.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/list-tagging-in-pdf",
    "title": "How Tagged PDF Represents Lists (L, LI, Lbl, LBody)",
    "description": "How tagged PDF encodes bulleted and numbered lists with L, LI, Lbl and LBody structure elements, and why that structure matters for assistive technology.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/logical-structure",
    "title": "PDF Logical Structure Explained: The Content Tree",
    "description": "Learn how logical structure works in PDF: the structure tree, structure elements and marked content that give a document meaning and a defined reading order.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/lossy-vs-lossless-pdf-compression",
    "title": "How Lossy and Lossless Compression Work in PDF",
    "description": "Understand the difference between lossy and lossless compression in PDF, which stream filters use each, and why file size trades off against image fidelity.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/ltv-signatures",
    "title": "How LTV Keeps PDF Signatures Verifiable for Years",
    "description": "How LTV signatures embed certificate chains, CRL/OCSP revocation data, and timestamps in a PDF's Document Security Store to stay verifiable for years.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/lzw-decode",
    "title": "LZWDecode Filter in PDF: How LZW Compression Works",
    "description": "LZWDecode is a lossless PDF filter based on the Lempel-Ziv-Welch algorithm. Learn how its dictionary coding works and why FlateDecode largely replaced it.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/marked-content",
    "title": "How Marked Content Labels a PDF Content Stream",
    "description": "How PDF marked content works: the BMC, BDC, EMC, MP and DP operators tag regions of a content stream and link them to logical structure via MCID.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/marked-content-id",
    "title": "MCID in PDF: Linking Page Content to Structure",
    "description": "How MCIDs tie runs of text and images on a PDF page to structure elements, giving tagged PDFs their reading order and accessibility.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/markup-annotations",
    "title": "PDF Markup Annotations: Notes, Highlights & Shapes",
    "description": "Markup annotations are the PDF comment types—notes, highlights, shapes, ink and stamps—that carry author, date and reply data for document review.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/mediabox",
    "title": "MediaBox: The Required PDF Page Boundary Explained",
    "description": "The MediaBox defines a PDF page's full sheet dimensions as a four-number rectangle in 1/72-inch units, and is the one page box every page must have.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/named-destinations",
    "title": "How PDF Named Destinations Link Names to Page Views",
    "description": "Learn how named destinations let a PDF map a symbolic name to a page and view, so links, bookmarks, and cross-document actions can reliably target it.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/non-embedded-fonts",
    "title": "Non-Embedded PDF Fonts and How Substitution Works",
    "description": "A non-embedded PDF font stores only its name, encoding, and metrics; the viewer supplies or substitutes the actual glyph outlines, so appearance can shift.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/object-stream-compression",
    "title": "How PDF Object Streams Bundle and Compress Objects",
    "description": "Object stream compression packs many small PDF objects into one compressed stream, shrinking tagged, form-heavy and multi-page documents. How it works.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/opentype-fonts-in-pdf",
    "title": "How OpenType Fonts Are Stored and Embedded in PDF",
    "description": "How OpenType fonts are embedded and rendered in PDF: TrueType vs CFF outlines, font programs, simple vs composite fonts, subsetting, and text extraction.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/optional-content-groups",
    "title": "How PDF Layers Work: The Optional Content Model",
    "description": "Optional content groups (OCGs) let one PDF page hold layers of content a viewer can show or hide, and control how they behave when printed or exported.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/overprint",
    "title": "How Overprint Controls Ink and Knockout in PDF",
    "description": "Overprint tells a PDF to lay ink over the colors beneath it instead of knocking them out — a print-production control set deep in the graphics state.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pades",
    "title": "PAdES Signatures: The ETSI Standard for Signed PDFs",
    "description": "PAdES is the ETSI family of profiles for advanced electronic signatures in PDF, built on CAdES and used in eIDAS-aligned signing workflows.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/password-vs-encryption",
    "title": "PDF Passwords and Encryption: What's the Difference",
    "description": "Password protection and encryption are easy to confuse. See how a PDF password derives the encryption key, and why an owner \"permissions\" password is different.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-1-4",
    "title": "PDF 1.4 Explained: Transparency and Tagged PDF",
    "description": "PDF 1.4, released in 2001 with Adobe Acrobat 5, added transparency, blend modes, soft masks, Tagged PDF and 128-bit encryption to the PDF format.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-1-5",
    "title": "PDF 1.5 Format: Object Streams, Layers, JPEG 2000",
    "description": "PDF 1.5, released in 2003 with Adobe Acrobat 6, introduced object streams, cross-reference streams, optional-content layers, and JPEG 2000 images.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-1-6",
    "title": "PDF 1.6 Explained: Acrobat 7 Features & Encryption",
    "description": "PDF 1.6 is the Adobe Acrobat 7 era PDF specification (2005). Learn what it added: AES-128 encryption, OpenType fonts, and embedded 3D artwork.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-1-7",
    "title": "PDF 1.7 Format: Features, ISO 32000-1 and History",
    "description": "PDF 1.7 is the last Adobe-defined PDF version and the basis of ISO 32000-1 (2008), the first full PDF standard. Learn what it added and why it still matters.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-2-0",
    "title": "PDF 2.0 Explained: ISO 32000-2 Features & History",
    "description": "PDF 2.0 (ISO 32000-2) is the ISO-governed revision of PDF, adding AES-256 encryption, UTF-8 text, richer tagging, and updated digital signatures.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a",
    "title": "PDF/A Explained: The ISO 19005 Archival Standard",
    "description": "PDF/A (ISO 19005) is the archival subset of PDF: fonts, color and everything needed to display a document are embedded so it stays readable for decades.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a-1",
    "title": "PDF/A-1 Explained: The First PDF Archiving Profile",
    "description": "PDF/A-1 is ISO 19005-1, the original archival PDF format based on PDF 1.4. Learn its rules, its A and B conformance levels, and why it matters.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a-2",
    "title": "PDF/A-2 Explained: Transparency, Layers, JPEG 2000",
    "description": "PDF/A-2 is the second part of the ISO 19005 archiving standard, built on PDF 1.7. It adds transparency, JPEG 2000, layers, and a Unicode conformance level.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a-3",
    "title": "PDF/A-3 Explained: Archiving With Embedded Files",
    "description": "PDF/A-3 (ISO 19005-3) is the PDF/A archival format that allows any file type to be embedded in a compliant document, powering hybrid invoices such as Factur-X and ZUGFeRD.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a-4",
    "title": "PDF/A-4: The PDF 2.0 Archival Standard, Explained",
    "description": "PDF/A-4 is Part 4 of the ISO 19005 archiving standard and the first built on PDF 2.0. It retires the a/b/u levels and adds the e and f flavors.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a-conformance-levels",
    "title": "PDF/A Levels A, B and U: Basic vs Accessible Files",
    "description": "PDF/A conformance levels grade how strictly a file preserves appearance, searchable Unicode text and accessibility tagging — Level B, Level U and Level A.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a-font-embedding",
    "title": "Embedded Fonts in PDF/A: Rules and Requirements",
    "description": "PDF/A archival conformance requires every font used to render text — even the standard 14 — to be embedded so a document displays the same way without system fonts.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a-metadata-requirements",
    "title": "How PDF/A Handles XMP and Identification Metadata",
    "description": "PDF/A mandates embedded XMP metadata, a pdfaid schema that declares the conformance part and level, and values that stay consistent with the Info dictionary.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a-validation",
    "title": "How PDF/A Conformance Is Validated and Checked",
    "description": "Learn how PDF/A validation verifies that a file conforms to the ISO 19005 archival standard, what validators like veraPDF check, and why files fail.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a-vs-pdf-ua",
    "title": "PDF/A vs PDF/UA: Archiving vs Accessibility",
    "description": "Compare PDF/A and PDF/UA: one targets long-term archiving and reproducibility, the other targets accessibility and assistive technology. How they differ and overlap.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-a-vs-pdf-x",
    "title": "Archiving vs Print PDF: PDF/A and PDF/X Explained",
    "description": "Compare PDF/A and PDF/X: how each ISO profile constrains PDF, what they require for fonts and color, and when to choose archiving over print exchange.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-accessibility-checking",
    "title": "How PDF Accessibility Is Checked and Validated",
    "description": "How PDF accessibility checking works: automated validators and manual review test tags, reading order, alt text, and language against PDF/UA and WCAG.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-actions",
    "title": "PDF Actions Explained: Links, Forms and Triggers",
    "description": "How PDF actions work: the action dictionaries that fire behavior — links, form submission, navigation, JavaScript — when events happen in a viewer.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-alt-text",
    "title": "How PDF Alt Text Describes Images for Screen Readers",
    "description": "How alternative (alt) text works in a tagged PDF: the /Alt entry, how it differs from ActualText and expansion text, and why screen readers depend on it.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-annotations",
    "title": "How PDF Annotations Work: The /Annots Layer Explained",
    "description": "Learn how PDF annotations work: separate objects in a page's /Annots array that add notes, highlights, links, and form widgets over the content.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-array-objects",
    "title": "Array Objects in PDF: Syntax, Meaning and Uses",
    "description": "In PDF, an array object is an ordered list of values written in square brackets. See how PDF arrays are structured, nested and used across a file.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-bookmarks",
    "title": "PDF Bookmarks Explained: Outlines and Navigation",
    "description": "How PDF bookmarks work: the document outline tree, how each entry points to a page or action, and how bookmarks differ from in-page links.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-color",
    "title": "How Color Works in PDF — Spaces, Models and Values",
    "description": "PDF describes color through color spaces — device spaces like DeviceRGB and DeviceCMYK, CIE-based spaces, and special spaces such as Indexed and Separation.",
    "category": "reference",
    "priority": 0.65,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-comparison",
    "title": "PDF Comparison Explained: Text and Visual Diffs",
    "description": "How PDF comparison finds differences between two documents using text diffing, visual page overlays, and metadata and structure checks.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-compression",
    "title": "PDF Compression Explained: Filters, Images & Size",
    "description": "Learn how PDF compression works, from stream filters like FlateDecode and DCTDecode to image downsampling and object streams that shrink file size.",
    "category": "reference",
    "priority": 0.65,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-conformance-levels",
    "title": "PDF Conformance Levels Explained (A, B, U & Beyond)",
    "description": "How PDF conformance levels work: the requirement profiles, like PDF/A Level A, B and U, that define what a file must contain to pass validation.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-content-streams",
    "title": "Content Streams: The Instructions Inside a PDF Page",
    "description": "How PDF content streams work: the operator-and-operand instructions, reached through a page's Contents entry, that render every mark drawn on the page.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-coordinate-system",
    "title": "How PDF Coordinates Work: User Space, Units, CTM",
    "description": "How PDF places text and graphics: a bottom-left origin, an upward y-axis, 1/72-inch points, and matrices that map user space to the output device.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-cross-reference-table",
    "title": "PDF xref Table Explained: Object Offsets & Lookup",
    "description": "How the PDF cross-reference table maps object numbers to byte offsets, how its 20-byte entries and free list work, and why xref damage breaks PDFs.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-dictionary",
    "title": "Key-Value Dictionaries in the PDF File Format",
    "description": "How PDF dictionary objects pair name keys with values between << and >>, and why they form the backbone of catalogs, pages, fonts, and streams.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-digital-signatures",
    "title": "Digitally Signing a PDF: How Cryptographic Signatures Work",
    "description": "How a certificate-based signature is stored inside a PDF: the ByteRange and hash that detect edits, approval vs certification, and how validation and trust work.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-document-catalog",
    "title": "PDF Document Catalog: The Root Object Explained",
    "description": "The document catalog is the root object of every PDF, linking the page tree, outlines, metadata, form and structure data into one navigable hierarchy.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-drm",
    "title": "PDF DRM Explained: Rights Management and Its Limits",
    "description": "How digital rights management works in PDF: encryption, security handlers, permission flags, server-enforced policy, and why no DRM is truly unbreakable.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-e",
    "title": "PDF/E: Engineering PDF Standard (ISO 24517) Explained",
    "description": "PDF/E (ISO 24517) is a PDF profile for engineering and technical documents, supporting optional content layers, large-format drawings, and reliable, self-contained drawing exchange.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-encryption",
    "title": "How PDF Encryption Works: Passwords, Keys & AES",
    "description": "How PDF encryption protects a document's strings and streams, how security handlers derive keys from passwords or certificates, and how RC4 and AES differ.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-file-identifiers",
    "title": "How the PDF /ID Array Identifies and Versions Files",
    "description": "How a PDF's /ID array works: two byte strings in the trailer, one permanent and one changing, that identify the file, track its edits, and support encryption.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-file-size-factors",
    "title": "Why PDF Files Get Large: Size Factors Explained",
    "description": "Learn what actually makes a PDF large: image resolution and color depth, embedded fonts, compression choices, and data left behind by incremental saves.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-file-structure",
    "title": "Inside a PDF: How the File Format Is Structured",
    "description": "How a PDF is organized internally: the header, body of objects, cross-reference table, and trailer, and how a reader uses them to find content.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-filters",
    "title": "PDF Stream Filters Explained: Encoding and Decoding",
    "description": "Learn what PDF stream filters are, how the Filter and DecodeParms entries work, and how filters like FlateDecode and DCTDecode decode stream data.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-fonts",
    "title": "PDF Fonts Explained: Embedding, Encoding and Glyphs",
    "description": "Learn how PDF fonts work — font dictionaries, character encoding, glyphs and embedded font programs — and why text can shift or garble without them.",
    "category": "reference",
    "priority": 0.65,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-form-fields",
    "title": "PDF Form Fields Explained: Types, Values, Widgets",
    "description": "How PDF form fields work: the AcroForm field tree, the field types (Btn, Tx, Ch, Sig), field names and values, and the widget annotations that draw them.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-graphics-state",
    "title": "Graphics State in PDF: Parameters and the q/Q Stack",
    "description": "The graphics state is the bundle of parameters — color, line width, transformation matrix, clipping, transparency — that PDF painting operators read and modify.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-header",
    "title": "The %PDF Header: How PDFs Declare Their Version",
    "description": "The PDF header is the opening %PDF- line that declares a file's version. See what it contains, why it starts with a comment, and how PDF readers use it.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-imposition",
    "title": "PDF Imposition: Arranging Pages on Press Sheets",
    "description": "PDF imposition arranges document pages onto press-sheet layouts so that folding, cutting, and binding produce the finished piece in the right reading order.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-incremental-updates",
    "title": "How PDF Incremental Updates Work: Append and Chain",
    "description": "Incremental updates save PDF changes by appending new objects, a cross-reference section, and a trailer without altering the original file.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-indirect-objects",
    "title": "Understanding PDF Indirect Objects and References",
    "description": "How PDF indirect objects work: object and generation numbers, the n g R reference syntax, why streams must be indirect, and how the xref table locates them.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-interactive-features",
    "title": "How PDF Interactivity Works: Forms, Links & Actions",
    "description": "How a PDF moves beyond static pages: form fields, annotations, links, bookmarks, actions and JavaScript that let readers respond to a document.",
    "category": "reference",
    "priority": 0.65,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-layers",
    "title": "How PDF Layers Work: Optional Content, Explained",
    "description": "PDF layers show or hide named sets of page content on demand. Learn how optional content groups work and how layer visibility is controlled.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-magic-number",
    "title": "PDF Magic Number: The %PDF- File Signature Explained",
    "description": "Every PDF begins with the bytes %PDF-, the magic number software uses to detect the format and read its version. See how the signature works.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-metadata",
    "title": "Metadata in PDF Files: Info Dictionary and XMP",
    "description": "PDF metadata is descriptive data about a document — its title, author, dates and creating software — held in the document information dictionary and XMP.",
    "category": "reference",
    "priority": 0.65,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-metadata-standards",
    "title": "PDF Metadata Standards: XMP, Info Dict and Dublin Core",
    "description": "How PDF stores document metadata: the legacy Info dictionary and XMP metadata streams built on RDF, carrying independent vocabularies like Dublin Core.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-mime-type",
    "title": "application/pdf — The PDF Media Type, Explained",
    "description": "application/pdf is the IANA-registered media type for PDF files, used in HTTP and email to identify a document as Portable Document Format.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-name-objects",
    "title": "Name Objects in PDF: The Slash-Prefixed Token",
    "description": "In PDF, a name object is an atomic token that starts with a slash, like /Type or /FlateDecode. Learn how names work as dictionary keys and values.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-object-streams",
    "title": "How PDF Object Streams Compress Small Objects",
    "description": "How PDF object streams (ObjStm) group small indirect objects so they compress together, why they need cross-reference streams, and what cannot go inside them.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-objects",
    "title": "PDF Objects Explained: The Building Blocks of a PDF",
    "description": "Every PDF is built from eight basic object types — booleans, numbers, strings, names, arrays, dictionaries, streams and null. Here is how they work.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-ocr",
    "title": "How OCR Turns Scanned PDFs Into Searchable Text",
    "description": "OCR reads the printed text inside a scanned PDF and stores it as an invisible, searchable text layer over the page image, without changing how the page looks.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-operators",
    "title": "PDF Operators: The Instruction Set Inside a Page",
    "description": "How PDF content stream operators encode a page: the postfix commands that draw text, paths, images, and color, grouped into categories and defined by ISO 32000.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-optimization",
    "title": "How PDF Files Are Optimized for Size and Speed",
    "description": "PDF optimization reduces file size and restructures a document for faster viewing by trimming images, subsetting fonts, and removing redundant or unused data.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-outlines",
    "title": "How PDF Bookmarks Are Stored in the Outline Tree",
    "description": "How the PDF outline tree works: outline items linked into a hierarchy, each pointing to a destination or action, surfaced as bookmarks in the viewer's side panel.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-output-intent",
    "title": "Output Intents in PDF: Color for Print & Archiving",
    "description": "An output intent embeds an ICC profile so PDF/X and PDF/A files carry the color condition they were built for. Learn how it works and where it lives.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-page-boxes",
    "title": "PDF Page Boundary Boxes: Media, Crop, Trim, Bleed",
    "description": "The five PDF page boxes — MediaBox, CropBox, BleedBox, TrimBox and ArtBox — define a page's physical size, visible area and print-production boundaries.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-page-geometry",
    "title": "How PDF Pages Define Size, Boxes and Coordinates",
    "description": "PDF page geometry defines each page's dimensions, boundary boxes, coordinate origin, units, orientation, and rotation. Here's how a PDF page is framed.",
    "category": "reference",
    "priority": 0.65,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-page-labels",
    "title": "PDF Page Labels: Custom Page Numbering Explained",
    "description": "Page labels let a PDF number its pages with Roman numerals, letters, prefixes or decimals independently of their physical order, using a number tree in the document catalog.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-page-orientation",
    "title": "Portrait vs Landscape: How PDF Orientation Works",
    "description": "How PDF stores page orientation: portrait and landscape emerge from page-box dimensions plus the /Rotate entry, not a dedicated orientation flag.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-page-rotation",
    "title": "How PDF Viewers Rotate Pages: The /Rotate Key",
    "description": "PDF page rotation uses the /Rotate page entry: a multiple of 90 degrees that turns a page clockwise for display and print without changing its content.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-page-scaling",
    "title": "Print Scaling in PDF: Fit vs Actual Size Explained",
    "description": "How PDF viewers scale a page to fit paper at print time — Actual Size, Fit, Shrink to Fit and custom percentages, and why the file's own page size never changes.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-page-size",
    "title": "How PDF Page Dimensions Work: MediaBox & Units",
    "description": "How PDF stores page size in the MediaBox using user-space units, why Letter is 612×792, and how pages in one file can differ in size.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-page-tree",
    "title": "PDF Page Tree Explained: Nodes, Kids and Count",
    "description": "The PDF page tree is the branching structure that stores and orders a document's pages using Pages nodes, Kids arrays, Count values and inherited attributes.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-patterns",
    "title": "PDF Patterns: Tiling & Shading Color, Explained",
    "description": "How PDF pattern objects paint areas with repeating tiles or smooth gradients, plus colored vs uncolored tiling patterns and how a pattern is selected as a color.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-permission-flags",
    "title": "How PDF Permission Flags Restrict Printing & Copying",
    "description": "How PDF permission flags in the encryption dictionary's P entry signal which operations a reader should allow, and why they are not true access control.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-portfolios",
    "title": "PDF Portfolios: Bundling Many Files in One PDF",
    "description": "A PDF Portfolio wraps multiple files of any type inside one PDF as embedded files, presented as a browsable set through a collection dictionary.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-preflight",
    "title": "How Preflight Verifies a PDF File Before Printing",
    "description": "Preflight inspects a PDF against a profile of rules to flag print issues—unembedded fonts, RGB color, low-res images, missing bleed—and often fix them.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-printing-pipeline",
    "title": "The PDF Printing Pipeline: From File to Final Print",
    "description": "How a PDF becomes print output: interpreting page content, choosing the printable area, converting color and fonts, then rasterizing for the device.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-redaction",
    "title": "How PDF Redaction Permanently Removes Content",
    "description": "How PDF redaction permanently removes sensitive text and images, why a black box drawn on top isn't enough, and how it differs from encryption.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-repair",
    "title": "PDF Repair: Recovering Corrupted and Broken Files",
    "description": "How PDF repair works: how tools scan a damaged file and rebuild its cross-reference table, trailer and page tree so a broken PDF opens again.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-security-model",
    "title": "How PDF Security Works: Encryption and Signatures",
    "description": "How the PDF format protects documents: encryption controls who can open and use a file, and digital signatures prove it has not been altered.",
    "category": "reference",
    "priority": 0.65,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-shadings",
    "title": "How PDF Renders Gradients: Shadings and Mesh Types",
    "description": "Learn how PDF shadings produce smooth vector gradients, from axial and radial fills to mesh shadings, and how the sh operator and shading patterns paint them.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-standards-overview",
    "title": "PDF Standards Explained: ISO 32000, PDF/A, PDF/X & More",
    "description": "How the PDF standards fit together: the base ISO 32000 format and the specialized subsets — PDF/A, PDF/X, PDF/UA, PDF/E and PDF/VT — that constrain it.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-stream-objects",
    "title": "How PDF Streams Store Binary and Compressed Data",
    "description": "Stream objects pair a PDF dictionary with a block of bytes to hold content, images, fonts, and other data, and are the place where PDF applies compression filters.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-string-objects",
    "title": "Literal and Hexadecimal Strings in PDF, Explained",
    "description": "PDF string objects store text or binary data as parenthesized literal strings or hexadecimal strings. Learn both syntaxes, escaping, and encoding.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-structure-tree",
    "title": "How the PDF Structure Tree Organizes Tagged Content",
    "description": "The PDF structure tree is the logical hierarchy behind Tagged PDF, mapping structure elements and reading order to on-page content for screen readers.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-text-extraction",
    "title": "PDF Text Extraction: From Character Codes to Unicode",
    "description": "PDFs store text as font-specific character codes, not plain letters. Extraction maps those codes back to Unicode using the font's encoding and its ToUnicode CMap.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-thumbnails",
    "title": "PDF Thumbnails: Embedded Page Previews Explained",
    "description": "What PDF page thumbnails are, how the Thumb entry embeds miniature previews, why modern viewers generate them dynamically, and when they're removed.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-trailer",
    "title": "PDF Trailer: How Readers Find a PDF's Structure",
    "description": "The PDF trailer sits at the end of a PDF and points to the cross-reference table and root catalog, letting readers parse the file from the end.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-transparency",
    "title": "PDF Transparency: Alpha, Blend Modes and Groups",
    "description": "Transparency in PDF, added in PDF 1.4, sets how objects blend using opacity, blend modes, soft masks and groups, and why print workflows flatten it.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-ua",
    "title": "PDF/UA Explained: The Accessible PDF Standard (ISO 14289)",
    "description": "PDF/UA (ISO 14289) is the technical standard for accessible PDFs, setting tagging, structure and metadata rules screen readers rely on.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-ua-1",
    "title": "PDF/UA-1: ISO 14289-1 Accessible PDF Standard",
    "description": "PDF/UA-1 (ISO 14289-1) sets the technical rules for tagging, structure, and reading order that make a PDF usable with screen readers and assistive tech.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-units-and-measurements",
    "title": "How PDF Measures Distance: Points and UserUnit",
    "description": "PDF measures everything in user-space units where one unit is 1/72 inch by default. See how points, the coordinate origin, and UserUnit size a page.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-validation",
    "title": "How PDF Validation Checks a File Against the Spec",
    "description": "PDF validation checks whether a file conforms to the PDF spec or a subset standard like PDF/A, PDF/X or PDF/UA, flagging structural and conformance errors.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-vector-graphics",
    "title": "How PDF Draws Vector Graphics: Paths and Curves",
    "description": "How PDF describes scalable vector artwork with path and painting operators — lines, Bézier curves, fills and strokes that stay crisp at any zoom.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-versions",
    "title": "PDF Version History Explained: From 1.0 to 2.0",
    "description": "How PDF version numbers work, from PDF 1.0 to PDF 2.0: what each release added, where the version is stored, and how ISO took over the format.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-vs-postscript",
    "title": "PostScript vs PDF: How the Two Formats Compare",
    "description": "PDF grew out of PostScript but is a static document format, not a programming language. See how their imaging model, file structure, and everyday use differ.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-vt",
    "title": "PDF/VT: The ISO Standard for Variable Data Printing",
    "description": "PDF/VT is the ISO 16612-2 standard for variable and transactional printing, built on PDF/X to make personalized, high-volume print jobs render fast and reliably.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-x",
    "title": "PDF/X Explained: The ISO Print-Exchange Standard",
    "description": "PDF/X is the ISO 15930 subset of PDF for print production, enforcing embedded fonts, defined color, and an output intent for reliable prepress exchange.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-x-1a",
    "title": "PDF/X-1a Explained: CMYK Print-Ready PDF Standard",
    "description": "PDF/X-1a is a CMYK-only, print-ready PDF standard requiring embedded fonts, flattened transparency, and an output intent for reliable blind exchange.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-x-3",
    "title": "PDF/X-3: The Color-Managed Print Exchange Standard",
    "description": "PDF/X-3 is an ISO 15930 print-exchange PDF profile that allows ICC-based, device-independent color alongside CMYK and spot colors, backed by a required output intent.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-x-4",
    "title": "PDF/X-4: Print PDF Standard With Live Transparency",
    "description": "PDF/X-4 is a PDF/X print-exchange standard based on PDF 1.6 that supports live transparency and layers, with embedded fonts and a required output intent.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-x-trapping",
    "title": "How PDF/X Handles Trapping and the Trapped Flag",
    "description": "PDF/X does not trap your file; it requires the file to declare whether it was already trapped. Here is how the Trapped state and trap networks actually work.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pdf-xref-streams",
    "title": "PDF XRef Streams: How Compressed Cross-References Work",
    "description": "Cross-reference streams store a PDF's object index as compressed binary data. Introduced in PDF 1.5, they enable object streams and smaller files.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/pki-in-pdf",
    "title": "PKI in PDF: Certificates, CAs and Signature Trust",
    "description": "How PDF relies on public-key cryptography — X.509 certificates, certificate authorities, trust chains and revocation checks behind signatures and encryption.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/popup-annotations",
    "title": "How Popup Comment Windows Work in PDF Documents",
    "description": "Popup annotations are the subordinate window objects that display a markup annotation's comment text in PDF, controlled by an Open flag and a Rect.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/portable-document-format",
    "title": "What Is a PDF? The Portable Document Format, Explained",
    "description": "PDF is a fixed-layout document format created by Adobe and standardized as ISO 32000. Learn what a PDF is, how it works, and why it looks the same everywhere.",
    "category": "reference",
    "priority": 0.65,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/predictor-functions",
    "title": "How PDF Predictors Improve Flate and LZW Compression",
    "description": "How PDF's Predictor parameter reshapes image and stream data before Flate or LZW compression to shrink files, plus the TIFF and PNG predictor types.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/press-ready-pdf",
    "title": "Press-Ready PDF: Fonts, Color, Bleed and Preflight",
    "description": "What a press-ready PDF is and how it works: embedded fonts, CMYK and spot color, output intents, trim and bleed geometry, and the preflight checks behind it.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/print-production-with-pdf",
    "title": "PDF in Commercial Printing and Prepress Workflows",
    "description": "How PDF serves as the standard exchange file for commercial print production, carrying page boxes, CMYK and spot color, embedded fonts, and preflight data.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/public-key-security",
    "title": "Certificate Security in PDF: Public-Key Encryption",
    "description": "How PDF public-key (certificate) security encrypts documents for named recipients using X.509 certificates and per-recipient key wrapping instead of a password.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/radio-button-fields",
    "title": "Radio Buttons in PDF Forms: How the Field Works",
    "description": "Radio button fields group mutually exclusive options into one PDF button field, using widget annotations, appearance states, and field flags.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/rc4-encryption",
    "title": "RC4 in PDF: The Legacy Stream Cipher Explained",
    "description": "How the RC4 stream cipher protected PDFs through the standard security handler, its 40- and 128-bit key sizes, and why PDF 2.0 deprecated it in favour of AES.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/reading-order",
    "title": "How Reading Order Works in Tagged PDF Documents",
    "description": "Reading order is the sequence assistive technology follows through a PDF. Learn how the structure tree defines it and why it differs from visual layout.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/rendering-intent",
    "title": "PDF Rendering Intent: How Color Gamut Mapping Works",
    "description": "How PDF rendering intents (perceptual, saturation, relative and absolute colorimetric) tell a color engine to map out-of-gamut colors.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/role-mapping",
    "title": "PDF RoleMap: Mapping Custom Tags to Standard Types",
    "description": "How the RoleMap dictionary in a Tagged PDF translates custom structure tags into standard structure types so screen readers and other consumers can interpret them.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/runlength-decode",
    "title": "RunLengthDecode: The PDF Run-Length Filter Explained",
    "description": "How PDF's RunLengthDecode filter encodes and decodes runs of repeated bytes, why it is lossless, and where FlateDecode is usually chosen instead.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/screen-readers-and-pdf",
    "title": "How Screen Readers Read PDF Files: Tags and Reading Order",
    "description": "How screen readers turn a PDF into speech or braille — why tags, reading order, and alt text matter, and what happens when a PDF is untagged.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/searchable-pdf",
    "title": "How a PDF Becomes Searchable: Text Layers Explained",
    "description": "A searchable PDF contains real, selectable text — either born-digital or added by OCR — so software can find, highlight, and copy its words.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/section-508-and-pdf",
    "title": "Section 508 and PDF Accessibility Standards Explained",
    "description": "Section 508 is the U.S. law requiring accessible federal digital content. See how it applies to PDFs through tagging, structure, and WCAG conformance.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/separation-color",
    "title": "PDF Separation Color Space: Spot Colorants Explained",
    "description": "In PDF, a Separation color space addresses one named colorant, such as a spot ink, through a tint value and an alternate-space fallback for on-screen display.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/signature-appearance",
    "title": "Signature Appearance vs. the Cryptographic Signature",
    "description": "The visible mark on a signed PDF is an appearance stream on a signature field's widget — separate from the cryptography that protects the file.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/signature-fields",
    "title": "How PDF Signature Fields Hold a Digital Signature",
    "description": "A signature field is the form-field placeholder in a PDF that reserves space for a digital signature and ties it to a widget annotation on the page.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/signature-validation",
    "title": "Verifying Digital Signatures Inside PDF Files",
    "description": "How PDF readers verify a digital signature: recomputing the document hash over the signed byte range, then checking the signer's certificate chain and trust.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/soft-masks",
    "title": "How PDF Soft Masks Work: Luminosity & Alpha Masks",
    "description": "A soft mask in PDF sets spatially varying opacity from a transparency group's luminosity or alpha — the basis for feathered edges and gradients.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/spot-colors",
    "title": "How PDF Represents Spot Colors and Named Print Inks",
    "description": "How spot colors work in PDF: named ink colorants encoded with the Separation and DeviceN color spaces, tint transforms, alternate color spaces, and print use.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/standard-14-fonts",
    "title": "Standard 14 (Base-14) Fonts in PDF, Explained",
    "description": "The base-14 PDF fonts are Helvetica, Times, Courier, Symbol and ZapfDingbats that readers can render without embedding — and why their appearance can vary.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/standard-encoding",
    "title": "StandardEncoding: Adobe's Base PDF Font Encoding",
    "description": "How StandardEncoding maps byte codes to glyph names in PDF simple fonts, how it differs from WinAnsi and MacRoman, and why it still causes quote glitches.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/standard-security-handler",
    "title": "The PDF Standard Security Handler and Password Encryption",
    "description": "How the PDF Standard Security Handler encrypts content with user and owner passwords and enforces permission flags across RC4 and AES.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/standard-structure-types",
    "title": "The Standard Structure Type Vocabulary for Tagged PDF",
    "description": "The predefined tag vocabulary of tagged PDF — paragraphs, headings, lists, tables and figures — that gives content a machine-readable logical role.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/stencil-masks",
    "title": "Stencil Masking in PDF: 1-Bit Image Masks Explained",
    "description": "How PDF stencil masks work: a 1-bit ImageMask paints the current fill colour through its marked samples, leaving other areas of the page untouched.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/structure-elements",
    "title": "Structure Elements: Nodes of the PDF Tag Tree",
    "description": "In a tagged PDF, structure elements are the dictionary nodes of the logical tree that label content as paragraphs, headings, lists, tables and figures.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/table-tagging-in-pdf",
    "title": "How Data Tables Are Tagged in an Accessible PDF",
    "description": "How PDF tables are marked with Table, TR, TH and TD structure elements — plus header associations and spanning attributes — so assistive technology can read them.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/tagged-pdf",
    "title": "Tagged PDF: How Structure Tags Make PDFs Accessible",
    "description": "Learn what a Tagged PDF is: a hidden structure tree of tags for headings, lists, tables and figures that lets screen readers read in logical order.",
    "category": "reference",
    "priority": 0.65,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/tamper-evidence-in-pdf",
    "title": "How Digital Signatures Make PDF Tampering Evident",
    "description": "How a digital signature makes edits to a PDF detectable: a hash over the signed byte range breaks the moment any covered byte is changed.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/text-form-fields",
    "title": "PDF Text Fields Explained — Tx Fields in AcroForms",
    "description": "Text form fields are AcroForm Tx fields that accept typed input in a PDF. See how their stored value, appearance stream, and flags like Multiline and Comb work.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/text-layer-in-pdf",
    "title": "How the Invisible OCR Text Layer in a PDF Works",
    "description": "A scanned PDF is a page image; OCR adds an invisible text layer over it so the document becomes searchable and its text can be selected or copied.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/text-rendering-modes",
    "title": "Text Rendering Modes and the Tr Operator in PDF",
    "description": "How PDF text rendering modes work: the eight Tr modes for filling, stroking, clipping, and invisible OCR text, and what each one does.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/text-showing-operators",
    "title": "Tj and TJ: PDF Text-Showing Operators Explained",
    "description": "How PDF's text-showing operators — Tj, TJ, quote and double-quote — paint character codes as glyphs inside a BT/ET text object.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/timestamp-signatures",
    "title": "Document Timestamps in PDF: TSA-Backed Proof of Time",
    "description": "How PDF timestamp signatures work: RFC 3161 tokens from a trusted authority that prove a file existed at a point in time and anchor long-term validation.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/tounicode-cmap",
    "title": "ToUnicode Mapping: How PDFs Recover Readable Text",
    "description": "A ToUnicode CMap maps a PDF font's character codes to Unicode, letting viewers extract, copy, and search the real text behind the drawn glyphs.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/transparency-groups",
    "title": "PDF Transparency Groups: Isolation and Knockout",
    "description": "Transparency groups composite a set of PDF graphics as one unit, then blend with the backdrop. How isolated and knockout groups and soft masks work.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/trapping",
    "title": "Trapping Explained: Compensating for Misregistration",
    "description": "Learn how print trapping works: spreads and chokes overlap abutting inks to hide misregistration gaps, and how PDF records a document's trapped state.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/trimbox",
    "title": "TrimBox in Print PDFs: The Final Trim Size Explained",
    "description": "TrimBox is the PDF page box that marks a page's final trimmed size. Learn how it defines the cut line and guides imposition and PDF/X preflight.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/truetype-fonts-in-pdf",
    "title": "How TrueType Fonts Are Embedded in PDF Documents",
    "description": "TrueType (sfnt) fonts appear in a PDF as simple /TrueType fonts or as CIDFontType2 descendants, with the glyph program embedded through the FontFile2 stream in the font descriptor.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/type-0-fonts",
    "title": "Composite Fonts in PDF: How Type 0 Fonts Work",
    "description": "Type 0 (composite) fonts let a PDF use multi-byte codes and a descendant CIDFont to address thousands of glyphs — the basis for CJK and subsetted fonts.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/type-1-fonts",
    "title": "Type 1 (PostScript) Fonts: Embedding & Encoding in PDF",
    "description": "Type 1 fonts are Adobe's PostScript outline format used in PDF as simple /Type1 fonts: how they are encoded, embedded via FontFile, and superseded by CFF.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/type-3-fonts",
    "title": "How Type 3 Fonts Define Glyphs With PDF Operators",
    "description": "Type 3 PDF fonts define each glyph as a content stream of drawing operators, enabling custom graphics per character but no hinting or large glyph sets.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/untagged-pdf",
    "title": "Untagged PDF: Missing Structure and Accessibility",
    "description": "An untagged PDF lacks the structure tree that defines reading order and semantics, so assistive tech and reflow have only the visual page layout to work from.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/user-space-and-device-space",
    "title": "PDF User Space vs Device Space: Coordinate Mapping",
    "description": "In PDF, user space is a device-independent coordinate grid that the current transformation matrix maps onto each device's own device space when the page is rendered.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/user-vs-owner-password",
    "title": "How PDF Open and Permissions Passwords Differ",
    "description": "A PDF's user password opens the file; its owner password controls permissions and security settings. Learn how each works and when they apply.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/verapdf",
    "title": "veraPDF: Open-Source PDF/A and PDF/UA Validator",
    "description": "veraPDF is an open-source, industry-supported validator that checks PDF files against the PDF/A archival and PDF/UA accessibility standards.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/wcag-and-pdf",
    "title": "How WCAG Accessibility Guidelines Apply to PDF Files",
    "description": "How the W3C's Web Content Accessibility Guidelines apply to PDF — tags, reading order, alt text, language and contrast — and how WCAG relates to PDF/UA.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/well-tagged-pdf",
    "title": "Well-Tagged PDF: Accurate Tags, Order & Alt Text",
    "description": "A well-tagged PDF has a structure tree that matches its real content: correct semantic tags, sensible reading order, alt text, and artifacts marked.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/why-standardize-pdf",
    "title": "Why PDF Became an Open ISO Standard (and What It Solved)",
    "description": "PDF moved from a proprietary Adobe format to the open ISO 32000 standard. Understand why it was standardized and what problems that solved.",
    "category": "reference",
    "priority": 0.6,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/widget-annotations",
    "title": "How Widget Annotations Render PDF Form Fields",
    "description": "Widget annotations are the on-page representation of interactive PDF form fields, tying an AcroForm field to its position, appearance, and behavior.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/winansiencoding",
    "title": "PDF WinAnsi Encoding: The Windows-1252 Character Set",
    "description": "WinAnsiEncoding is a predefined PDF font encoding based on Windows code page 1252, mapping single-byte codes to glyph names for Western European text.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/xfa-forms",
    "title": "XFA (XML Forms Architecture) in PDF, Explained",
    "description": "How XFA embeds XML-defined forms in a PDF, the difference between static and dynamic XFA, and why Acrobat renders them while most other viewers can't.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/xmp-metadata",
    "title": "Understanding XMP Metadata Streams in PDF Files",
    "description": "XMP metadata is an embedded XML packet in a PDF that stores document properties in an extensible, standards-based format alongside the older Info dictionary.",
    "category": "reference",
    "priority": 0.55,
    "changeFrequency": "monthly"
  },
  {
    "path": "/pdf-encyclopedia/xmp-vs-info-dictionary",
    "title": "PDF Metadata: XMP Stream vs the Info Dictionary",
    "description": "How PDF stores document metadata in two places — the legacy Info dictionary and the XML-based XMP stream — how their fields map, why they differ, and how they drift.",
    "category": "reference",
    "priority": 0.5,
    "changeFrequency": "monthly"
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
