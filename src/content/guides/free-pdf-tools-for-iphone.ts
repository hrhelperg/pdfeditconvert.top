import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-pdf-tools-for-iphone",
  h1: "Free PDF Tools for iPhone (Browser and App Picks)",
  description:
    "Free iPhone PDF tools that actually work without a subscription — compress, sign, scan, convert. Browser-based options and the PDF Editor app for offline workflows.",
  updated: "2026-05-29",
  intro: [
    "iPhone has decent built-in PDF support — Files reads them, Mail attaches them, Markup can annotate. But for the actual document work most people need (compress before sending, merge several attachments, sign a contract, convert a photo to a PDF), the built-in stack runs out fast. The App Store fills the gap with hundreds of PDF apps, most of which gate basic features behind subscriptions or daily limits.",
    "Genuinely free PDF tooling on iPhone breaks into two categories: browser-based tools that work in Safari without installing anything, and free apps that handle their core functions on-device without paywalls. Both have a place. Browser tools are zero-install; native apps work offline and integrate with Files and the share sheet.",
    "This guide covers both, picking the genuinely free tools for the everyday iPhone PDF tasks. The bias is toward tools that respect privacy by running locally on the phone.",
  ],
  steps: [
    {
      title: "Use Safari for one-off browser-based tasks",
      body: "Compress PDF, Merge PDF, Image to PDF and the rest of this site's stack work in Safari without installing anything. The processing happens in your browser tab on the phone — no upload, no account.",
    },
    {
      title: "Install the PDF Editor app for repeated workflows",
      body: "For tasks you do repeatedly (signing, scanning, sharing) a native app is faster than browser visits. The PDF Editor app handles these offline and integrates with the iOS share sheet.",
    },
    {
      title: "Scan with the PDF Editor app or built-in Files",
      body: "Files has a basic scan-to-PDF feature; the PDF Editor app has richer edge detection and multi-page handling. Both are free for the scan workflow.",
    },
    {
      title: "Sign in Markup for quick cases, PDF Editor app for real signatures",
      body: "Markup handles a quick scribble on a one-page form. For contracts, the PDF Editor app's signing flow produces a more deliberate signature that holds up better in formal contexts.",
    },
    {
      title: "Convert photos to PDF with Image to PDF in Safari",
      body: "Image to PDF in your iPhone browser combines photos and screenshots into a single PDF, including HEIC handling. No app install required for this one.",
    },
    {
      title: "Compress before sending from share sheet",
      body: "Compress PDF in Safari or the PDF Editor app shrinks files for email and portal attachment limits. iPhone scans get big fast; compressing before sending avoids the bounce.",
    },
  ],
  tips: [
    "iPhone's share sheet is the integration point for app-based PDF tools. Pick tools that show up in 'share to' for the smoothest workflow.",
    "HEIC photos need conversion before sharing to non-Apple recipients. The PDF Editor app and browser tools handle this transparently.",
    "Don't sign anything important in Markup if you're sending it externally — the signature looks casual. Use a proper signing tool for contracts.",
    "Browser tools work in Safari but also in Chrome and Firefox on iPhone if you prefer. The architecture is the same.",
    "Sync the /Files folder to iCloud if you handle PDFs across devices. The PDF Editor app saves locally first; you control whether they sync.",
  ],
  mobileNote:
    "The PDF Editor app is the recommended companion to browser tools on iPhone — it covers the offline and share-sheet-integrated cases that pure browser tools don't. Free for the core workflows, with no account required.",
  faq: [
    {
      q: "Are iPhone built-in PDF tools enough?",
      a: "For reading and basic annotation, yes. For compression, merging, real signing and conversion, you'll need additional tools — browser-based or app-based.",
    },
    {
      q: "Do free iPhone PDF apps really stay free?",
      a: "Some do, some don't. The PDF Editor app handles its core workflows free. Many App Store PDF apps gate basic features behind subscriptions.",
    },
    {
      q: "Should I sign contracts on iPhone?",
      a: "Yes, increasingly normal. Drawn signatures with your finger are legible enough to feel deliberate. Use a real signing tool, not Markup, for contracts.",
    },
    {
      q: "Can I scan from iPhone instead of using a flatbed?",
      a: "For ordinary documents, yes. The phone-camera scan flow in PDF Editor or built-in Files produces results comparable to flatbed for typical document quality.",
    },
    {
      q: "What about HEIC?",
      a: "HEIC is iPhone-default and not universally supported elsewhere. Convert to JPG or PDF before sharing with non-Apple recipients.",
    },
  ],
  related: [
    { label: "PDF tools — browser-based, no upload", path: "/pdf-tools" },
    { label: "Best free PDF tools", path: "/guides/best-free-pdf-tools" },
    { label: "Free PDF tools for Android", path: "/guides/free-pdf-tools-for-android" },
    { label: "How to make a PDF smaller on iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
  ],
  parentHub: { label: "PDF tools — free, browser-based", path: "/pdf-tools" },
};

export default content;
