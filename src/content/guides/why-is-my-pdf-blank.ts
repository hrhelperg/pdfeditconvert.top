import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blank",
  h1: "Why Is My PDF Blank? Real Causes and How to Recover It",
  description:
    "When a PDF opens to blank pages, the content is usually still there — just hidden by a render failure, missing font or scan error. How to tell what happened and bring the document back.",
  updated: "2026-05-29",
  intro: [
    "Opening a PDF to an empty page is unnerving. You expect text, charts, signed contracts — and you get nothing. The good news is the content is almost always still in the file. The bad news is the cause can be one of several things, and you have to identify which before you can fix it.",
    "Blank PDFs usually come from a render failure (your viewer choked on something specific), a font failure (the text is technically there but pointing at a glyph nobody can draw), a scan or capture failure (the source produced empty pages), or a layered/hidden content issue. In rare cases the file really is empty.",
    "This guide walks the diagnoses in the order they're cheap to check, then routes you to the right fix. Most blank PDFs become readable again with a re-export or a viewer swap.",
  ],
  steps: [
    {
      title: "Open the file in a different viewer first",
      body: "Try Chrome's built-in viewer, Preview on macOS, or a mobile reader. If one of them shows the content, you've isolated the problem to your original viewer — and the file is fine.",
    },
    {
      title: "Check the file size against expectation",
      body: "A genuinely empty PDF is tiny — a few KB. A blank-looking PDF that's several megabytes almost certainly has content inside that just isn't rendering for you.",
    },
    {
      title: "Look for security or permission flags",
      body: "Some PDFs are exported with a 'protected view' or signing flag that causes certain viewers to hide content until permission is granted. Saving an unprotected copy from a permissive viewer usually clears this.",
    },
    {
      title: "Re-export the file through print-to-PDF",
      body: "Open the file in any viewer that displays the content and use 'Print → Save as PDF' (or Microsoft Print to PDF on Windows). This rebuilds the page rendering and fixes most font-related blanks.",
    },
    {
      title: "If it's a scan, re-scan with a different setting",
      body: "Blank scanned pages usually come from a feeder that double-fed, a too-light contrast setting, or a phone scan that focused on the wrong plane. The Scan to PDF flow with edge detection avoids most of this.",
    },
    {
      title: "Extract individual pages as images to confirm",
      body: "PDF to Images can export each page as PNG in your browser. If the exported PNGs show content, your viewer is the problem. If they're truly blank, the page in the file is blank.",
    },
  ],
  tips: [
    "A blank PDF that's several megabytes has content somewhere — keep trying viewers and re-exports before assuming it's lost.",
    "Light gray text on white can render as 'blank' on phone screens in direct sunlight. Increase brightness or invert colors before assuming the page is empty.",
    "Files exported from accessibility-restricted apps sometimes embed everything in a single layer that newer viewers ignore. Print-to-PDF flattens it.",
    "If you got a contract back with blank signature pages, the signer likely had a signing tool that overwrote real fields with empty annotations — ask for a re-signed copy with a different signer.",
    "Don't keep editing or merging a blank-rendering file until you know why. Building on a broken render produces an even more broken file.",
  ],
  mobileNote:
    "Phone viewers are sometimes stricter than desktop ones. The PDF Editor app uses a permissive renderer that tends to show content even when other mobile viewers go blank, and lets you save the document back out as a cleaner copy.",
  faq: [
    {
      q: "Is a blank PDF lost forever?",
      a: "Rarely. If the file size is more than a few KB, the content is almost certainly still in there — try another viewer, a print-to-PDF re-export, or an image extraction to confirm.",
    },
    {
      q: "Why does my scanner produce blank PDFs sometimes?",
      a: "Most often the feeder picked up two pages stuck together and only registered the second one, or contrast was set too low. Re-scanning with auto-contrast usually fixes it.",
    },
    {
      q: "Could it be a font issue?",
      a: "Yes. When a PDF references a font that isn't embedded and your viewer can't substitute it, the text disappears even though it's still in the file. Re-exporting embeds a usable font.",
    },
    {
      q: "Will compressing or merging a blank PDF lose the content?",
      a: "It can — both operations work on what your viewer can see. Don't process a blank-rendering file until you can confirm the content is actually there.",
    },
    {
      q: "Why does it look blank in Acrobat but fine in Chrome?",
      a: "Different parsing. Chrome's viewer is often the most forgiving; older Acrobat versions are stricter. The file isn't broken — your viewer is.",
    },
  ],
  related: [
    { label: "PDF to Images — verify pages aren't truly empty", path: "/pdf-to-images" },
    { label: "Scan to PDF — clean re-scans without blanks", path: "/scan-to-pdf" },
    { label: "Why won't my PDF open?", path: "/guides/why-wont-my-pdf-open" },
    { label: "How to fix a corrupted PDF", path: "/guides/how-to-fix-a-corrupted-pdf" },
  ],
  parentHub: { label: "PDF tools — free, browser-based", path: "/pdf-tools" },
};

export default content;
