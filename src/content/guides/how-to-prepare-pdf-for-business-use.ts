import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-for-business-use",
  h1: "How to Prepare a PDF for Business Use (Cleanup Checklist)",
  description:
    "Before a PDF leaves the office: trim drafts, verify pagination, fix orientation, embed fonts and shrink the file. A pre-send checklist for documents that represent your business.",
  updated: "2026-05-29",
  intro: [
    "A PDF that leaves your business is a small ambassador. It carries your name, your branding, your typographic choices and — far too often — the original filename like 'Untitled Document (4).pdf' from whoever started it last week. The difference between an amateur PDF and a professional one is rarely dramatic, but it's almost always visible at a glance.",
    "Preparing a PDF for business use isn't a single transformation; it's a short checklist. Trim drafts, set proper page numbers, fix orientation, confirm fonts embed, label cleanly, compress sensibly, set a useful filename. Each step takes seconds, the whole thing takes a minute, and the document arrives looking like you did it on purpose.",
    "This guide walks the checklist in the order that catches the most problems first — the way you'd do it for a real deliverable in a real Tuesday afternoon.",
  ],
  steps: [
    {
      title: "Drop unused or draft pages",
      body: "Extract PDF Pages keeps only the pages you actually want to send. Cover sheets that were placeholders, blank thank-you pages, old appendices — all of it should be off the final.",
    },
    {
      title: "Verify page order and pagination",
      body: "Reorder PDF Pages if anything ended up out of sequence after a merge or revision. Check the visible page numbers match the order — readers spot mismatched numbering fast.",
    },
    {
      title: "Fix orientation",
      body: "Wide pages (spreadsheets, charts) belong in landscape; everything else upright. Rotate PDF straightens scans or imports that came in sideways. A mixed-orientation document feels broken even when it isn't.",
    },
    {
      title: "Make sure fonts are embedded",
      body: "Fonts that aren't embedded get substituted on the reader's side, sometimes badly. Re-export from the source with 'embed all fonts' enabled, or print-to-PDF to flatten the rendering.",
    },
    {
      title: "Set the file title in metadata",
      body: "The text shown in browser tabs and reader title bars often differs from the filename. Set both deliberately — clients notice when a 'Proposal' tab says 'Untitled.docx'.",
    },
    {
      title: "Compress and name for delivery",
      body: "Compress PDF brings the file under typical mail and portal limits. Rename to ClientName_DocType_YYYY-MM-DD.pdf so the recipient can identify the file from their downloads folder a year later.",
    },
  ],
  tips: [
    "Walk the document once at 100% zoom before sending. The eye catches surprises that scrolling misses.",
    "Add a watermark to drafts, but never to finals — the absence of a watermark is the signal that this is the final.",
    "Strip old metadata. PDF Editor and re-exports both let you replace author, company and edit history that may leak from drafts.",
    "If the document has form fields meant for filling, test them on the device you'll be sending to. Many fields work in Acrobat but not in browsers.",
    "Print preview the document one last time. If it prints wrong, the recipient will hit the same issue.",
  ],
  mobileNote:
    "Last-minute polish — fixing a sideways scan, dropping a stray draft page, recompressing for an email cap — happens on the phone more often than people admit. The PDF Editor app handles all of this offline so the deliverable goes out clean even from a coffee shop Wi-Fi.",
  faq: [
    {
      q: "What's the single most-skipped step?",
      a: "Setting metadata. The filename and document title that show in tabs and reader headers are often leftover from drafting. Fix both before sending.",
    },
    {
      q: "How much does compression matter?",
      a: "A lot when the recipient is on a strict portal or a slow connection. Less for a casual internal share. Default to compressing — it almost never hurts.",
    },
    {
      q: "Do I need to embed fonts on every PDF?",
      a: "On anything client-facing, yes. On internal drafts where everyone has the same fonts installed, less critical. The cost of embedding is small.",
    },
    {
      q: "Should I always include page numbers?",
      a: "On multi-page deliverables, yes. On single-page documents, no. Page numbers help the reader navigate and confirm completeness.",
    },
    {
      q: "Is there a tool that does all of this in one pass?",
      a: "No, and that's deliberate — each step is a deliberate choice, not an automated transformation. The browser-based tools on this site let you do each step in seconds without bundling them into a black box.",
    },
  ],
  related: [
    { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
    { label: "Extract PDF Pages — trim final deliverables", path: "/extract-pdf-pages" },
    { label: "How to share PDFs with clients", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "How to prepare a PDF before sharing", path: "/guides/how-to-prepare-pdf-before-sharing" },
  ],
  parentHub: { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
};

export default content;
