import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-annotate-pdf-on-mobile",
  h1: "How to Annotate a PDF on Mobile",
  description:
    "Highlight, comment and draw on PDFs from your phone or tablet. The annotation tools that matter, and how to keep your markup readable.",
  updated: "2026-05-23",
  intro: [
    "Annotating a PDF is how you turn a document from something you read into something you respond to — highlighting the clause that matters, leaving a comment for a colleague, circling the figure that's wrong. On a phone or tablet, with a finger or a stylus, it's often more natural than at a desk, because you're marking the page the way you'd mark paper.",
    "This guide covers the annotation tools worth knowing on mobile using the PDF Editor app: highlights, comments, freehand drawing, and shapes. It runs on iPhone and Android, works offline, and keeps the document on your device.",
    "The aim isn't to cover the page in ink — it's to leave markup that the next person (often future you) can actually read and act on.",
  ],
  steps: [
    {
      title: "Open the PDF in the PDF Editor app",
      body: "Import the document from Files, Mail, Drive, or any share sheet. Annotation tools sit in the editing toolbar.",
    },
    {
      title: "Highlight the key passages",
      body: "Select the highlighter, pick a colour, and drag across the text you want to mark. Use colour deliberately — one colour per type of note reads far better than a rainbow.",
    },
    {
      title: "Add comments for context",
      body: "Drop a sticky comment where a highlight needs explanation. Comments keep your reasoning attached to the spot without cluttering the page itself.",
    },
    {
      title: "Draw and circle freehand",
      body: "Use the pen tool to circle a figure, underline a line, or sketch a correction. A stylus gives cleaner strokes than a fingertip if you have one.",
    },
    {
      title: "Add shapes or arrows where they help",
      body: "An arrow pointing at the problem or a box around a section communicates faster than words. Use them sparingly so they stand out.",
    },
    {
      title: "Save and share the marked-up copy",
      body: "Export a copy with your annotations and share it back. Keep the clean original if you'll need an unmarked version later.",
    },
  ],
  tips: [
    "Assign meaning to colours — say, yellow for questions, green for approvals — and your markup becomes scannable instead of decorative.",
    "A stylus (Apple Pencil or S Pen) transforms freehand annotation. If you have one, palm rejection and pressure make it feel like marking paper.",
    "Comments beat cramming notes into the margin. They expand when tapped and keep the page legible.",
    "Don't over-annotate. A page buried in ink is as useless as one with no marks — highlight what matters, not everything.",
    "Keep an unmarked original. Annotations are great for review, but the next reviewer may want a clean copy to mark themselves.",
  ],
  mobileNote:
    "Annotating is where a phone or tablet genuinely beats a desk: you mark the page directly, the way you would on paper. The PDF Editor app supports highlights, comments, drawing and shapes with stylus support, all offline and on-device — your markup never leaves your hands.",
  faq: [
    {
      q: "What can I annotate a PDF with on mobile?",
      a: "Highlights, sticky comments, freehand pen marks, and shapes like arrows and boxes. The PDF Editor app offers all of these on iPhone and Android.",
    },
    {
      q: "Do I need a stylus?",
      a: "No, a finger works for highlighting and basic marks. But a stylus makes freehand drawing much cleaner, with palm rejection and pressure sensitivity on supported tablets.",
    },
    {
      q: "Will my annotations stay if I send the file?",
      a: "Yes. Exported annotations are part of the PDF and appear for anyone who opens it. Keep a clean original separately if you'll need an unmarked copy.",
    },
    {
      q: "Are my annotations uploaded anywhere?",
      a: "No. The PDF Editor app annotates on your device, so your notes and the document stay private.",
    },
    {
      q: "Can I remove annotations later?",
      a: "Yes, within the app you can edit or delete your own annotations before exporting. Keeping the original also lets you start fresh.",
    },
  ],
  related: [
    { label: "PDF Editor — annotate on mobile", path: "/pdf-editor" },
    { label: "How to fill out PDF forms on your phone", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "How to edit a PDF on iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Best PDF tools for students", path: "/guides/best-pdf-tools-for-students" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
