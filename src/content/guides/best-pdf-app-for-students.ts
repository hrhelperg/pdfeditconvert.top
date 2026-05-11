import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-app-for-students",
  h1: "Best PDF App for Students (2026)",
  description:
    "What students need from a PDF app: notes, highlights, signatures and free conversions. Honest evaluation criteria.",
  updated: "2026-05-11",
  intro: [
    "Most lists of 'best PDF apps for students' read like affiliate sweepstakes. The honest reality is that the best app depends on what you actually do with PDFs day to day — annotate lecture slides, scan textbook pages, merge readings, fill out forms.",
    "This is a short, honest list of criteria worth checking before you commit to any PDF tool. Then a quick look at how PDF Editor stacks up against them.",
  ],
  steps: [
    {
      title: "Highlight and margin notes",
      body: "Look for proper highlight tools (color choice, opacity) and freehand annotation. Sticky comments help when revisiting later.",
    },
    {
      title: "Stylus support",
      body: "If you have an iPad with Apple Pencil or an Android tablet with a stylus, the app should treat pen input as a first-class citizen — palm rejection, pressure, low latency.",
    },
    {
      title: "Merge and split",
      body: "Combine readings for one course into one file; split a long course pack into chapters. Both should be 3-tap operations.",
    },
    {
      title: "Scan to PDF",
      body: "Capture pages from physical books or your own notes into searchable PDFs you can quote in essays.",
    },
    {
      title: "Cloud sync",
      body: "Annotations should sync via iCloud / Google Drive without locking you into a proprietary cloud.",
    },
    {
      title: "Cost — free for the basics",
      body: "Highlighting, annotation, and signing shouldn't be behind a paywall. Reserve paid features for advanced workflows.",
    },
  ],
  tips: [
    "Avoid apps that require you to upload PDFs to a server — they're slower and worse for privacy.",
    "If the free tier limits the number of files per day, you'll regret it the first week of class.",
    "Look at the App Store / Play Store rating distribution, not just the average — read the 3-star reviews.",
  ],
  mobileNote:
    "Most student PDF work happens on phones first (in transit) and tablets second (in libraries). The best app is the one that works fluidly on both.",
  faq: [
    {
      q: "Are these features in PDF Editor?",
      a: "Yes. Highlights, annotations, merge, split, scan, sign, and conversion are all included. Cloud sync is via your existing iCloud/Drive setup.",
    },
    {
      q: "Is there a student discount?",
      a: "The core app is free. Some Pro features are paid but the free tier covers most student workflows.",
    },
  ],
  related: [
    { label: "Use cases — students", path: "/use-cases/students" },
    { label: "PDF for Students — full overview", path: "/pdf-for-students" },
    { label: "Scan textbook pages to PDF", path: "/scan-to-pdf" },
  ],
  parentHub: { label: "PDF for Students", path: "/pdf-for-students" },
};

export default content;
