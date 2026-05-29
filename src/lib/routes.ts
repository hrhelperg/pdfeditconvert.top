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
