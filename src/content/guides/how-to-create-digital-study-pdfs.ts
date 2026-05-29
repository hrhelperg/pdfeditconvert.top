import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-digital-study-pdfs",
  h1: "How to Create Digital Study PDFs (Flashcards, Summaries, Packs)",
  description:
    "Build your own study PDFs from notes, slides and highlights — searchable, portable, ready for tablet annotation. The structure that makes them actually useful at exam time.",
  updated: "2026-05-29",
  intro: [
    "A made-yourself study PDF is one of the best exam tools you can have. It's smaller than the full set of weekly notes, more structured than a chat thread of revision tips, and more portable than physical flashcards. Open it on a tablet during a study break, in a coffee shop, on a laptop in the library — same file, same annotations, same searchability.",
    "But a study PDF only earns its keep if it's structured. A dump of every lecture into one file is unusable; a carefully built summary pack is the artifact you actually open three times a week before the final. The difference is in how you build it.",
    "This guide walks the structure that works: what to include, what to leave out, how to organize for skim versus deep read, and how to keep the file size manageable on tablet. It assumes you're building from existing weekly notes, slides and highlights — not from scratch.",
  ],
  steps: [
    {
      title: "Decide the scope before building",
      body: "One study PDF per course, one per major exam (midterm, final), or one per topic — pick the granularity that matches how you actually study. Smaller, focused PDFs beat one giant pack.",
    },
    {
      title: "Build a clear cover and table of contents",
      body: "Course code, exam name, date, topics covered. A one-page table of contents up front. Both are short — five minutes to write and they triple navigability.",
    },
    {
      title: "Extract the key slides and notes",
      body: "Extract PDF Pages pulls just the slides and note pages you actually need from the bigger weekly packs. Don't include the whole semester — only the parts that matter for this exam.",
    },
    {
      title: "Merge into a coherent order",
      body: "Merge PDF combines the extracts in study order: chronological, conceptual, or weighted by exam emphasis. Use the order you'll revise in.",
    },
    {
      title: "Annotate ahead of time",
      body: "Pre-highlight the key terms, formulas and concepts. Annotation works better during revision when you're not also doing the highlighting in real time.",
    },
    {
      title: "Compress for tablet portability",
      body: "Compress PDF brings the study pack to a tablet-friendly size — usually under 20 MB. Smaller files load fast, scroll smoothly, and don't drain battery during long study sessions.",
    },
  ],
  tips: [
    "Don't aim for completeness. The study PDF complements the full notes; it doesn't replace them. Leave detail in the weekly packs.",
    "Include a cheat-sheet page or two at the end with formulas, dates, names — whatever needs cold recall on exam day.",
    "Mirror the exam structure. If the exam is short-answer + essay, structure the study pack the same way so practice maps to the test format.",
    "Don't overcompress. Some text artifacts at strong compression hurt readability during long study sessions. Medium is usually the right balance.",
    "Re-export after a major annotation session so the marks persist as readable content rather than just overlays.",
  ],
  mobileNote:
    "Tablets and phones are where study PDFs actually get used. The PDF Editor app supports annotation, highlighting and search on the file you built — turning the study pack into an interactive review tool wherever you study.",
  faq: [
    {
      q: "How long should a study PDF be?",
      a: "Whatever you can actually re-read in two or three sessions. For most courses that's 30–80 pages. Longer than 100 and you'll skip half.",
    },
    {
      q: "Should I include the full slides or just the key ones?",
      a: "Key ones. Including everything dilutes the value. Pick the slides that explain the concepts you're weakest on.",
    },
    {
      q: "Are digital flashcards better than paper?",
      a: "For most students, yes. They're searchable, portable, and survive being dropped or spilled on. Spaced-repetition apps add a layer on top.",
    },
    {
      q: "Should I share my study PDF with the group?",
      a: "Optional. Some people study better with their own packs; some benefit from a shared one. Try both and see which produces better recall.",
    },
    {
      q: "How early should I build it?",
      a: "Two to three weeks before the exam. Earlier and content is missing; later and you don't have time to study it.",
    },
  ],
  related: [
    { label: "PDF for Students — notes and study guides", path: "/pdf-for-students" },
    { label: "Merge PDF — assemble study packs", path: "/merge-pdf" },
    { label: "How to organize study materials as PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "PDF workflow for university students", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF for Students — notes, highlights, study guides", path: "/pdf-for-students" },
};

export default content;
