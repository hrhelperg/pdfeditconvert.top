import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-notes-to-pdf",
  h1: "How to Scan Handwritten Notes to PDF (Clean, Searchable)",
  description:
    "Turn pages of handwritten lecture notes into clean multi-page PDFs with a phone camera. The settings that produce readable scans on the first try.",
  updated: "2026-05-29",
  intro: [
    "Handwritten lecture notes are still the fastest way to capture a class, and most students leave them on paper instead of digitizing them — because the scans usually come out badly. Skewed pages, washed-out grey scans, bloated file sizes, and the time it takes to reshoot the bad ones. Add up over a semester and that's why notes stay in the notebook.",
    "Getting clean scans from a phone is mostly about technique and settings, not the app. Even-light, square framing, contrast turned on, grayscale not color, and edge detection if your tool has it. A page captured well looks closer to a flatbed scan than a snapshot.",
    "This guide walks the technique end to end — the room conditions that produce good scans, the per-page approach, the multi-page workflow, and what to do with the PDF once you've made it. It assumes you have a phone and want a clean, multi-page PDF without buying a scanner.",
  ],
  steps: [
    {
      title: "Set up the page on a contrasting background",
      body: "Lined paper on a dark desktop. Plain white on a dark cloth. Anything to make the page edge obvious to the camera and the auto-crop. Avoid glare; even light beats bright light.",
    },
    {
      title: "Hold the phone parallel to the page",
      body: "The camera should be straight above the page, not tilted. Tilt produces keystone distortion that auto-correction can fix but never as well as a square shot.",
    },
    {
      title: "Use a scan app with edge detection",
      body: "Scan to PDF or the PDF Editor app's scan flow detects the page edge and crops automatically. Random phone photos don't do this; a scan app produces a flatbed-like result.",
    },
    {
      title: "Switch to grayscale or B&W mode",
      body: "Color scans of black ink on white paper are larger, noisier and softer. Grayscale produces sharper, smaller, more readable scans. Black-and-white is even smaller but less flexible later.",
    },
    {
      title: "Capture each page, then merge",
      body: "Multi-page scan flows capture page by page and combine into one PDF automatically. If you captured separately, Merge PDF combines them in order.",
    },
    {
      title: "Crop, rotate, and re-order in cleanup",
      body: "Reorder PDF Pages if any page captured out of sequence. Rotate PDF for sideways shots. Spend a minute cleaning up; future-you will thank present-you.",
    },
  ],
  tips: [
    "Take all the scans before you start cleanup — switching modes constantly kills the flow.",
    "If light is uneven, a single piece of white paper held above the page as a reflector dramatically improves contrast.",
    "Don't crop too tight. Leaving a small margin around the page edge makes the document feel less amateur.",
    "Compress the final PDF before archiving. Scan-heavy notes are big; compressed versions are easier to share later.",
    "Add a cover page (typed, with class name + date) before merging. The collection becomes self-describing in your archive.",
  ],
  mobileNote:
    "Scanning notes is one of the things a phone genuinely does better than a flatbed for casual use. The PDF Editor app's scan flow runs entirely on the phone — capture, edge-detect, contrast, multi-page merge — producing a clean PDF without a round-trip through any server.",
  faq: [
    {
      q: "Will scanned handwritten notes be searchable?",
      a: "Only if the tool runs OCR on them — converting the image of handwriting into searchable text. OCR on handwriting is less reliable than on print; quality depends on the handwriting and the scan.",
    },
    {
      q: "What's the best phone camera setting for note scans?",
      a: "Use the scan app's grayscale or B&W mode with auto-contrast. Don't rely on the standard camera app — its photos are larger, less contrasted and harder to read.",
    },
    {
      q: "How many pages per scan session?",
      a: "Whatever you wrote in one sitting. Scanning weekly or after each lecture is easier than letting a semester pile up.",
    },
    {
      q: "Should I scan in color?",
      a: "Only if your notes use color (highlighters, diagrams). Otherwise grayscale or B&W is sharper and smaller.",
    },
    {
      q: "What if the page is creased or stained?",
      a: "Auto-contrast can clean up most paper aging. Heavy creasing usually shows through; consider reshooting or accepting it for personal study material.",
    },
  ],
  related: [
    { label: "Scan to PDF — phone-camera scanning with edge detection", path: "/scan-to-pdf" },
    { label: "Merge PDF — combine multi-page scans", path: "/merge-pdf" },
    { label: "How to scan documents to PDF with your phone", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "PDF workflow for university students", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "Scan to PDF — phone-camera scanning", path: "/scan-to-pdf" },
};

export default content;
