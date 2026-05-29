import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflow-for-university-students",
  h1: "PDF Workflow for University Students (Notes, Assignments, Submissions)",
  description:
    "A semester-long PDF rhythm that survives finals week: lecture notes scanned, assignments submitted, study packs shared. Browser-based and free.",
  updated: "2026-05-29",
  intro: [
    "University semesters generate hundreds of PDFs. Lecture slides, scanned handwritten notes, problem sets, completed assignments, supplemental readings, exam study packs. Most students manage by piling them in a downloads folder and rummaging. That works in week three; it falls apart in week ten; by finals it's worse than not having them.",
    "A semester-long PDF rhythm is short and easy to keep. Weekly note packs per course, assignment submissions named consistently, study packs assembled before exams, archives at semester end. None of it requires expensive tools or apps you don't already have, and most of it can be done from a phone.",
    "This guide describes the rhythm — what to do each week, what to do per assignment, what to do at midterm and finals. It assumes the goal is finding any document in five seconds, not building a perfect personal knowledge system.",
  ],
  steps: [
    {
      title: "Weekly: capture and merge lecture material",
      body: "End of each week per course: gather typed notes, slide PDFs, board photos and scanned handwritten pages. Merge PDF combines them into Week3_Pack_YYYY-MM-DD.pdf in /Courses/[Course]/lectures/.",
    },
    {
      title: "Per assignment: produce, name, submit, archive",
      body: "Word to PDF for typed work, Scan to PDF for handwritten pages, Merge PDF to combine, Compress PDF if portal-capped. Submit, keep a copy in /Courses/[Course]/assignments/submitted/.",
    },
    {
      title: "Mid-semester: clean up",
      body: "Week 7 or so, walk the course folders. Drop duplicates, fix any misnamed files, archive what's already done. Twenty minutes mid-semester saves hours at finals.",
    },
    {
      title: "Pre-exam: build a study pack",
      body: "Combine the relevant weekly packs into a single Course_Final_StudyPack.pdf. Add a cover with topics. Compress for portable use on tablet or phone during review.",
    },
    {
      title: "Annotate the study pack on a tablet or phone",
      body: "PDF annotation on a tablet works better for some students than paper. Use highlight, comment and underline; the marks persist for re-review later.",
    },
    {
      title: "End of semester: archive the course",
      body: "Move /Courses/[Course]/ to /Archive/[Year]/[Course]/. Compress everything in archive. Active folder stays clean for next semester.",
    },
  ],
  tips: [
    "Don't merge across courses or across weeks. The smallest useful unit is one PDF per week per course.",
    "Submit using the exact naming convention each class demands. 'LastName_FirstName_Assignment3.pdf' is standard; follow it precisely.",
    "Annotate study packs digitally. Searchable annotated PDFs beat paper for review — you can find specific topics fast.",
    "Compress only at submission and at archive. During active use, optimize for readability.",
    "Sync the Courses folder to one cloud drive. Phone-to-laptop access during finals is more valuable than the disk space.",
  ],
  mobileNote:
    "Most of a student's PDF day happens on a phone — scan a handwritten page, photograph a slide, submit an assignment. The PDF Editor app handles the full chain (scan, merge, compress, sign, share) offline on iOS and Android, so the workflow doesn't depend on laptop access.",
  faq: [
    {
      q: "How much time does this rhythm take?",
      a: "Ten minutes a week per course for the weekly pack. Two minutes per assignment. Twenty minutes mid-semester. The compound saving at finals is hours.",
    },
    {
      q: "What if I have many courses?",
      a: "The rhythm scales — same convention applies to every course. Two parallel courses double the time; the structure stays.",
    },
    {
      q: "Is paper still worth keeping?",
      a: "Original handwritten notes, yes, as backup. Once they're scanned and in the weekly pack, the paper is reference only.",
    },
    {
      q: "Should I OCR scans for search?",
      a: "If your tool offers it, yes. Searchable study material at exam time is far more valuable than unsearchable.",
    },
    {
      q: "What about referenced readings?",
      a: "Separate /readings/ folder per course. Don't merge readings into lecture packs; they grow separately and serve a different purpose.",
    },
  ],
  related: [
    { label: "PDF for Students — notes and study guides", path: "/pdf-for-students" },
    { label: "Best free PDF tools for students", path: "/guides/best-pdf-tools-for-students" },
    { label: "How to organize study materials as PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "How to submit homework as PDF", path: "/guides/how-to-submit-homework-as-pdf" },
  ],
  parentHub: { label: "PDF for Students — notes, highlights, study guides", path: "/pdf-for-students" },
};

export default content;
