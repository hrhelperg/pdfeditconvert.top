import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "students",
  h1: "PDF Editor for Students",
  description:
    "How students use the PDF Editor app for lecture notes, highlights, signatures, and study guides.",
  intro: [
    "Most coursework lives in PDFs: lecture slides, journal articles, course readers, syllabuses, assignment briefs. Treating them as locked-down view-only documents wastes the format. A proper mobile PDF editor turns them into active study materials.",
    "These are the workflows students actually use day to day, broken into specific operations rather than abstract benefits.",
  ],
  workflows: [
    {
      title: "Annotate lecture slides between classes",
      body: "Open the slide deck on a phone or tablet, highlight key points, add margin notes during the lecture or right after. Annotations save in place.",
    },
    {
      title: "Merge readings for one course into a single file",
      body: "Combine the week's articles into 'Week 3 - Microeconomics.pdf'. Read offline on a train. Bookmark important sections for essay writing.",
    },
    {
      title: "Scan textbook pages for personal study",
      body: "Capture pages with auto edge detection. The resulting PDF is searchable, so you can find quotes for essays in seconds.",
    },
    {
      title: "Fill out forms — financial aid, enrollment, attendance",
      body: "Skip the print-sign-scan loop. Fill the form, sign with a saved signature, and email it back.",
    },
    {
      title: "Compress a long thesis before emailing it to a supervisor",
      body: "Image-heavy theses easily blow past attachment limits. Compression reduces 100 MB to under 10 MB without visible quality loss.",
    },
  ],
  appPitch:
    "PDF Editor is free for everyday student use. Highlights, annotations, merging, scanning, and signing are all included. It runs on iPhone, iPad, and Android — meaning the same annotated readings are on every device you study with.",
  related: [
    { label: "PDF for Students — full overview", path: "/pdf-for-students" },
    {
      label: "Best PDF app for students",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Scan textbook pages to PDF", path: "/scan-to-pdf" },
  ],
};

export default content;
