import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-students",
  hero: {
    eyebrow: "PDF for Students",
    h1: "PDF tools that fit how students actually study.",
    highlight: "actually",
    lead: "Annotate lecture slides, highlight readings, merge research papers, scan textbook pages, and sign forms — from the phone or tablet you already have.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Why students keep PDFs at the center of their workflow",
    paragraphs: [
      "Lecturers post slide decks as PDFs. Course readers arrive as PDFs. Assignment briefs are PDFs. Syllabuses are PDFs. Yet the default phone viewer doesn't let you highlight, annotate, or properly organize them — and the alternative most students fall back on is screenshotting pages into Notes, which loses searchability, structure, and the ability to come back to the source.",
      "A proper mobile PDF editor lets students treat readings the way they would treat a textbook — highlights, margin notes, bookmarks — but with searchability and shareability. The same annotated readings open on every device, so the work you did on the bus is there when you sit down in the library.",
      "Combined with a stylus on a tablet, this setup can replace most physical note-taking for course materials. The cost is the price of the app (free for the basics) and the time spent setting it up once.",
    ],
  },
  features: {
    heading: "Built for study sessions",
    items: [
      {
        icon: "Highlighter",
        title: "Highlight and annotate",
        body: "Yellow highlights, freehand notes, sticky comments, underlines — exactly what you'd do on paper, but searchable.",
      },
      {
        icon: "Bookmark",
        title: "Bookmark and outline",
        body: "Mark chapters or sections you'll come back to. Jump between them with one tap during essay-writing.",
      },
      {
        icon: "Combine",
        title: "Merge readings",
        body: "Combine the week's articles into one document for offline reading on a train, plane, or commute.",
      },
      {
        icon: "ScanLine",
        title: "Scan textbook pages",
        body: "Capture pages from physical books into searchable PDFs. Useful for citing quotes in essays where you only have the physical copy.",
      },
      {
        icon: "FileSignature",
        title: "Sign forms instantly",
        body: "Financial aid forms, attendance sheets, enrollment confirmations — sign and return without printing.",
      },
      {
        icon: "Layers",
        title: "Organize per course",
        body: "Group documents by class. Move them across the semester without losing your annotations.",
      },
    ],
  },
  steps: {
    heading: "A simple study workflow",
    items: [
      {
        title: "Collect the week's readings",
        body: "Download or share each PDF into PDF Editor from your university's portal, Canvas, Moodle, or email.",
      },
      {
        title: "Merge them into one file per course-week",
        body: "Use the Merge tool to combine them into 'Week 3 readings - Microeconomics.pdf' for offline use.",
      },
      {
        title: "Annotate as you read",
        body: "Highlight important passages, add margin notes, drop sticky comments where you have follow-up questions. Notes save in-place.",
      },
      {
        title: "Use highlights when writing essays",
        body: "Jump back to highlighted sections via the bookmarks panel when you're citing sources. The text under the highlight is selectable and copyable.",
      },
      {
        title: "Scan and combine handwritten notes",
        body: "When you've taken notes on paper, scan them into the same PDF Editor library so everything's in one searchable place.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Studying anywhere",
    body: "Lectures, library, train, café — the place a student reads is rarely a desk. A phone-first PDF editor means the same annotated copy is in your hand wherever you happen to be. The hour you'd have lost waiting for a bus becomes productive reading time.",
  },
  faq: [
    {
      q: "Is the app free for students?",
      a: "Yes. Core annotation, merging, scanning, and signing are free with no daily limit. Some Pro features (batch OCR, advanced encryption) are paid but the free tier covers everything a student typically needs.",
    },
    {
      q: "Will my highlights sync across devices?",
      a: "If you save the file to iCloud Drive, Google Drive, or any cloud provider, edits sync wherever the same file opens. Local-only files stay on the device they were edited on.",
    },
    {
      q: "Can I scan a textbook page legally?",
      a: "For personal study, in most jurisdictions yes (fair-use rules typically allow brief excerpts for study purposes). Be careful about distributing scanned copies — that's a different question and often not allowed.",
    },
    {
      q: "Does the app work well on iPads and Android tablets?",
      a: "Yes. Tablets with stylus input (Apple Pencil, S Pen) make annotation feel much closer to paper than fingertip-only phones. If you have a tablet, use it for reading sessions.",
    },
    {
      q: "Can I export my annotated notes?",
      a: "Yes. The annotated PDF can be shared as-is (with annotations baked in) or flattened to a final PDF. You can also extract just the highlighted text for citations.",
    },
  ],
  related: [
    {
      label: "How to share study notes as a PDF",
      path: "/guides/how-to-share-study-notes-as-pdf",
    },
    {
      label: "Best PDF app for students",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Scan to PDF", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Study with a real PDF toolkit.",
    sub: "Free on iOS and Android. Annotations sync via iCloud or Drive.",
  },
};

export default content;
