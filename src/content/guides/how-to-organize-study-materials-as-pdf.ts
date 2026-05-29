import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-study-materials-as-pdf",
  h1: "How to Organize Study Materials as PDF (Folders, Naming, Index)",
  description:
    "Course PDFs pile up fast. A simple folder, naming and merging convention that keeps semester materials searchable from week one through finals.",
  updated: "2026-05-29",
  intro: [
    "By week four of a semester, your downloads folder has fifty PDFs with names like 'lecture7.pdf', 'final-version-2.pdf', 'Slides_v3_corrected.pdf', and 'Document.pdf'. By week ten you can't find anything. By finals week you're searching the same lecture three times because you don't remember which version of which file has the slide you need.",
    "The fix isn't software or apps — it's a convention. A short folder structure, a consistent filename, and a habit of merging weekly. Once those three are in place, finding a specific lecture two months later takes five seconds instead of fifteen minutes.",
    "This guide describes the convention that holds up across a semester: how the folders should look, how filenames should read, when to merge, and what happens at the end of the term.",
  ],
  steps: [
    {
      title: "Build a top-level folder per course",
      body: "/Courses/[CourseCode]/. Inside: /lectures/, /assignments/, /readings/, /exams/. Four folders cover most of what arrives. Don't nest deeper than two levels.",
    },
    {
      title: "Standardize the filename pattern",
      body: "WeekN_DocType_YYYY-MM-DD.pdf. So Week3_Lecture_2026-09-15.pdf, Assignment2_Submission_2026-09-20.pdf. Date last sorts chronologically; week first groups by topic.",
    },
    {
      title: "Merge per week, not per file",
      body: "End of each week, Merge PDF combines that week's lecture notes, slides and board photos into one Week3_Lecture_Pack_YYYY-MM-DD.pdf. Single file per week is much easier to revisit later.",
    },
    {
      title: "Add cover sheets to merged packs",
      body: "A typed cover page (course, week, topics covered) makes the pack self-describing at finals time. Future-you skimming twelve weeks of packs will thank present-you.",
    },
    {
      title: "Archive at end of semester",
      body: "Move /Courses/[Course]/ to /Archive/[Year]/[Course]/ when the semester ends. Active folders stay slim; archives are searchable for prerequisite review later.",
    },
    {
      title: "Compress archives, not active files",
      body: "Compress PDF the archived material to save disk space. Don't compress the active study files — readability matters more than size during the semester.",
    },
  ],
  tips: [
    "Use dates in YYYY-MM-DD format. They sort correctly in any file browser. 9/15/26 doesn't.",
    "Don't put version numbers in study materials. Final lecture is the lecture; a v2 means the professor reuploaded.",
    "Tag exam prep separately — /exams/midterm/ and /exams/final/. They're a different study mode than weekly review.",
    "Don't merge across courses. Cross-course PDFs are unfindable.",
    "Keep a one-line README.txt in each course folder noting what's in each subfolder. Helps when returning to material a semester later.",
  ],
  mobileNote:
    "Most study PDFs arrive on a phone (via class portal, professor email, or your own scan). The PDF Editor app lets you rename, file and merge directly on mobile, so the file lands in the right place instead of piling up in Downloads.",
  faq: [
    {
      q: "What's the best filename format for study materials?",
      a: "WeekN_DocType_YYYY-MM-DD.pdf. The week prefix groups by topic, the doc type clarifies content, the ISO date sorts chronologically.",
    },
    {
      q: "Should I merge weekly or keep individual files?",
      a: "Merge weekly. One PDF per week per course is the right granularity — small enough to load fast, large enough to be self-contained for revision.",
    },
    {
      q: "How deep should folders go?",
      a: "Two levels. /Courses/[Course]/[type]/. Deeper than that and you lose files.",
    },
    {
      q: "Do I need a separate archive folder?",
      a: "Yes. Move closed semesters out of /Courses/ so the active folder stays scannable.",
    },
    {
      q: "What about cloud sync?",
      a: "Sync the /Courses/ folder to at least one cloud drive. Phone-to-laptop access matters during finals; the sync handles it.",
    },
  ],
  related: [
    { label: "PDF for Students — notes and study guides", path: "/pdf-for-students" },
    { label: "Merge PDF — assemble weekly packs", path: "/merge-pdf" },
    { label: "How to organize PDF files", path: "/guides/how-to-organize-pdf-files" },
    { label: "PDF workflow for university students", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF for Students — notes, highlights, study guides", path: "/pdf-for-students" },
};

export default content;
