import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-tools-for-students",
  h1: "Best Free PDF Tools for Students",
  description:
    "The free, no-signup PDF tools that cover real student tasks — merging readings, compressing submissions, converting and annotating — without a paywall.",
  updated: "2026-05-23",
  intro: [
    "Students hit the same PDF walls over and over: a course pack that needs merging, a submission that's over the portal's size limit, a reading that has to become editable notes, a form the registrar wants signed by Friday. None of that should cost money or require an account — and with the right free tools, it doesn't.",
    "This guide maps the specific free, browser-based tools to the tasks students actually face. Each runs on your own device with nothing uploaded, which matters when the documents are transcripts, ID copies or financial-aid forms. Where a phone is the better device for the job, it points to the PDF Editor app instead.",
    "It's a toolkit, not a sales pitch: the goal is that you finish the term knowing exactly which tool to open for each recurring headache.",
  ],
  steps: [
    {
      title: "Merge readings into one course file",
      body: "Combine separate PDF readings for a module into a single document with the Merge PDF tool, so you study from one file instead of fifteen scattered ones.",
    },
    {
      title: "Compress submissions to fit the portal",
      body: "Submission systems cap file sizes tightly. The Compress PDF tool gets a scanned assignment or a photo-heavy report under the limit without a printer in sight.",
    },
    {
      title: "Convert a PDF to editable notes",
      body: "Pull the text out of a reading into a Word document with the PDF to Word tool, so you can quote, summarise and rework it — remembering it's a text conversion, not a layout copy.",
    },
    {
      title: "Pull out just the pages you need",
      body: "Use the Extract PDF Pages tool to grab the three pages of a textbook chapter that matter, instead of carrying the whole 400-page scan around.",
    },
    {
      title: "Turn photographed pages into a PDF",
      body: "Snap pages from a library book or your handwritten notes and combine them with the Image to PDF tool into one tidy document.",
    },
    {
      title: "Annotate and sign on your phone",
      body: "For highlighting lecture slides, marking up readings, or signing an attendance or consent form, the PDF Editor app handles it on your phone or tablet.",
    },
  ],
  tips: [
    "Insist on no-signup, no-upload tools for anything with personal data — transcripts, ID copies and aid forms shouldn't be sent to a random server.",
    "Free should mean free for the basics. Merging, splitting, compressing and converting are everyday student tasks and shouldn't sit behind a daily limit.",
    "PDF to Word gives you the text, not the layout. It's perfect for notes and quotes, less so for reproducing a formatted handout.",
    "A stylus turns a tablet into a proper study tool — highlighting and margin notes on readings feel like paper with an Apple Pencil or S Pen.",
    "Keep originals of anything official. Compress and convert copies, not the only version of your transcript.",
  ],
  mobileNote:
    "Student PDF work happens between classes and on the bus, which is why the PDF Editor app matters: annotate slides, scan a handout, sign a form and merge readings from your phone, offline. Your highlights from the commute are there when you sit down to write.",
  faq: [
    {
      q: "Are these PDF tools really free for students?",
      a: "The browser tools — merge, split, compress, convert, extract, image-to-PDF — are free with no signup and no upload. They cover the everyday tasks students hit most.",
    },
    {
      q: "Are they safe for transcripts and ID copies?",
      a: "Yes. The browser tools process files on your device without uploading them, which is exactly what you want for documents containing personal or financial details.",
    },
    {
      q: "Can I turn a reading into editable notes?",
      a: "Use the PDF to Word tool to extract the text into a .docx. It's a text conversion — great for quoting and summarising — but it won't reproduce the original layout.",
    },
    {
      q: "What's the best tool for annotating readings?",
      a: "The PDF Editor app on a phone or tablet, especially with a stylus. It handles highlights, comments and freehand notes the way you'd mark paper.",
    },
    {
      q: "How do I get a big submission under the upload limit?",
      a: "Compress it with the Compress PDF tool. Scanned and image-heavy assignments shrink dramatically, usually clearing tight portal caps in one pass.",
    },
  ],
  related: [
    { label: "All free PDF tools", path: "/pdf-tools" },
    { label: "PDF for Students — overview", path: "/pdf-for-students" },
    { label: "Best PDF app for students", path: "/guides/best-pdf-app-for-students" },
    { label: "How to annotate a PDF on mobile", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "PDF for Students", path: "/pdf-for-students" },
};

export default content;
