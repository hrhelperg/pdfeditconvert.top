import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-lecture-notes-to-pdf",
  h1: "How to Convert Lecture Notes to PDF (Word, Photos, Slides)",
  description:
    "Lecture notes arrive in every format — Word doc, slide deck, screenshot, photo of the board. How to turn each into a single readable PDF without losing structure.",
  updated: "2026-05-29",
  intro: [
    "By the end of a week, lecture notes from a single class can be in five different formats: a Word document you typed during lecture, a PowerPoint the professor shared, a photo of the chalkboard, screenshots from a recorded video, and a couple of handwritten pages from when your laptop battery died.",
    "All of those can — and should — end up in one PDF per topic or per week. PDFs handle every format reasonably well, they read on any device, and they don't get lost the way scattered files do. The trick is producing the PDF without losing the structure of each source.",
    "This guide walks the conversion path for each format and then the merging strategy that produces a coherent single file. The aim is study material you can actually use at exam time.",
  ],
  steps: [
    {
      title: "Convert Word notes with Word to PDF",
      body: "Typed notes in a Word doc → Word to PDF in your browser. Keeps headings, formatting and any embedded screenshots. Export at the document's full size; compress later.",
    },
    {
      title: "Export slide decks as PDF",
      body: "PowerPoint and Keynote export to PDF directly. Use the export menu, not screenshots. The PDF version keeps text selectable and stays sharp at any zoom level.",
    },
    {
      title: "Convert photos and screenshots with Image to PDF",
      body: "Photos of the board, screenshots from recordings → Image to PDF combines them into one PDF. Set order before importing; reordering after is more work.",
    },
    {
      title: "Scan handwritten pages",
      body: "Scan to PDF on your phone with grayscale and edge detection produces clean multi-page scans. Sharper and smaller than random photos.",
    },
    {
      title: "Merge into one PDF per topic",
      body: "Merge PDF combines all the formats into one ordered file. Order matters: lecture-day chronology, or logical structure (intro slides → lecture notes → board photos → recap). Pick one and stick to it.",
    },
    {
      title: "Add a cover page and table of contents",
      body: "A typed cover (course, week, topic) makes the file self-describing six months later. For long compiled PDFs (over 30 pages), include a one-page table of contents.",
    },
  ],
  tips: [
    "Resist screenshotting slide decks. Use the deck's PDF export — sharper and the text stays selectable for search.",
    "Photograph the board square-on, not at an angle. Auto-correct can fix moderate skew but a square photo is always cleaner.",
    "If a recording has key moments, screenshot those specific frames rather than the whole video. The PDF stays manageable.",
    "Don't merge across weeks. One PDF per week keeps files navigable; one PDF per semester is unreadable.",
    "Compress the final merged PDF only after the semester closes. During the semester, keep the readable copy for active study.",
  ],
  mobileNote:
    "Half of lecture-note conversion happens on a phone — photographing the board, scanning a handwritten page, screenshotting slides. The PDF Editor app handles the conversion and merging chain on mobile, producing a clean per-week PDF before the file ever leaves the phone.",
  faq: [
    {
      q: "Should I keep notes in their original format or convert?",
      a: "Both. Keep the editable originals for revision; produce a PDF copy per topic for study. The PDF doesn't replace the source — it's a study artifact.",
    },
    {
      q: "What's the best way to merge?",
      a: "Merge PDF in your browser. Set the order before merging; reordering afterwards is technically possible but slower.",
    },
    {
      q: "Should I OCR handwritten scans?",
      a: "If your tool offers it, yes — searchable handwritten notes are more useful at exam time. OCR on handwriting is imperfect; treat the searchable text as approximate.",
    },
    {
      q: "How big should weekly note PDFs be?",
      a: "Whatever the natural week produces. Compress at semester end for archive; during the semester, prioritize readability over size.",
    },
    {
      q: "Can I do all this on a phone?",
      a: "Yes. The PDF Editor app handles each format and merges them on-device. Useful when you don't want notes to wait for laptop time.",
    },
  ],
  related: [
    { label: "PDF Converter — Word, JPG, PNG conversions", path: "/pdf-converter" },
    { label: "Image to PDF — board photos and screenshots", path: "/image-to-pdf" },
    { label: "How to scan handwritten notes to PDF", path: "/guides/how-to-scan-notes-to-pdf" },
    { label: "How to organize study materials as PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
  ],
  parentHub: { label: "PDF Converter — Word, JPG, PNG and back", path: "/pdf-converter" },
};

export default content;
