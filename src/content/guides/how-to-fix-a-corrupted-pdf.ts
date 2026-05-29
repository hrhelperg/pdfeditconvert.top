import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-a-corrupted-pdf",
  h1: "How to Fix a Corrupted PDF File (What Actually Works)",
  description:
    "Most 'corrupted' PDFs aren't really corrupted — they're truncated downloads, viewer mismatches or partial writes. The honest checklist of fixes that recover the file, and when it's truly gone.",
  updated: "2026-05-29",
  intro: [
    "Almost every PDF that gets called 'corrupted' is something less dramatic: a download that didn't finish, a viewer that refuses to read a slightly off file, or a write that was interrupted before the file was sealed. Real corruption — where the bytes inside the file are truly damaged — is rarer than people think, and when it happens, recovery is partial at best.",
    "The reason this matters is that the fixes for those four causes are completely different. Re-downloading takes seconds; viewer-swapping takes seconds; a re-export round-trip takes a minute; actual byte-level recovery is hours of work and often impossible. Knowing which category your file falls in saves real time.",
    "This guide walks the diagnoses in cheapest-first order, then explains what to do when it's not recoverable. Most files come back to life by step three.",
  ],
  steps: [
    {
      title: "Re-download or re-receive the file",
      body: "A truncated download looks identical to corruption from the viewer's perspective. Fetch the file again. If the second copy opens, the first was incomplete. Check the byte size against the source if it's listed.",
    },
    {
      title: "Try at least two other viewers",
      body: "Browsers, Preview, mobile readers and desktop apps all handle PDF differently. A file Acrobat refuses sometimes opens fine in Chrome. If even one viewer reads it, the file isn't really broken.",
    },
    {
      title: "Open the file in any viewer that works and re-export",
      body: "Print-to-PDF (macOS, Windows, Linux) or 'Save as PDF' from the working viewer rebuilds the file structure. The new copy often opens in viewers that rejected the original.",
    },
    {
      title: "Strip pages individually with PDF to Images",
      body: "If no viewer renders the whole file but some shows partial content, export each page as PNG via PDF to Images. You can then reassemble a fresh PDF from those PNGs with Image to PDF — losing search and editability but rescuing the content.",
    },
    {
      title: "Check the file header in a plain editor",
      body: "Open the file in TextEdit, Notepad or VS Code. A real PDF starts with %PDF- followed by a version number. If the first bytes are anything else, the file isn't a PDF — it was renamed, mislabeled or replaced.",
    },
    {
      title: "Ask the source for a fresh copy",
      body: "If nothing recovers the file, the source still has the original. Re-export from Word, Google Docs or whatever produced it. This is the only path that returns full quality.",
    },
  ],
  tips: [
    "Don't keep editing or merging a file that's behaving strangely. You'll embed the breakage into the new file.",
    "Keep the broken original safe before any repair attempt. Repair tools sometimes overwrite, and the broken file may contain partial content you'd lose.",
    "Files that fail right after a write interruption (power loss, force-quit during save) are often unsalvageable — the structural index at the end of the file never got written.",
    "Avoid 'PDF repair' websites that promise miracles. They mostly do the print-to-PDF re-export you can do yourself, and they upload your file.",
    "Recovered-via-image PDFs lose all real text and searchability. Use that path only for files where the content matters more than the file fidelity.",
  ],
  mobileNote:
    "On a phone, the usual cause of a 'corrupted' PDF is a flaky cellular download. The PDF Editor app stores files locally and lets you re-fetch and re-open, which clears the truncation problem without needing a desktop round-trip.",
  faq: [
    {
      q: "What's the most common cause of a corrupted PDF?",
      a: "A download that didn't finish. The file is technically incomplete, not corrupted, but viewers can't tell the difference. Re-downloading fixes most cases.",
    },
    {
      q: "Are there real PDF repair tools?",
      a: "Some commercial tools claim repair, but most of what they do is the same print-to-PDF re-export you can do yourself for free. True structural repair of severely damaged PDFs is a specialist job.",
    },
    {
      q: "Will compressing a corrupted PDF help?",
      a: "Only if the compression tool can read it. If your viewer can't open it, no compressor can either. Compression isn't a repair technique.",
    },
    {
      q: "Why does my recovered file lose form fields?",
      a: "Print-to-PDF flattens interactive elements into static pixels. Form fields, annotations and signatures become images. If you need them back, re-request from the source.",
    },
    {
      q: "Can image extraction always rescue content?",
      a: "Only if any viewer can render the pages at all. If the file is unreadable everywhere, even an image-extraction tool will fail.",
    },
  ],
  related: [
    { label: "PDF to Images — extract recoverable pages", path: "/pdf-to-images" },
    { label: "Image to PDF — reassemble pages after rescue", path: "/image-to-pdf" },
    { label: "Why won't my PDF open?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Why is my PDF blank?", path: "/guides/why-is-my-pdf-blank" },
  ],
  parentHub: { label: "PDF tools — free, browser-based", path: "/pdf-tools" },
};

export default content;
