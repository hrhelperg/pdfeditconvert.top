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
      "Lecturers post slide decks as PDFs. Course readers arrive as PDFs. Assignment briefs are PDFs. Yet the default phone viewer doesn't let you highlight, annotate, or properly organize them. Students end up screenshotting pages into Notes, which loses searchability and structure.",
      "A proper mobile PDF editor lets students treat readings the way they would in a textbook — highlights, margin notes, and bookmarks — but with the searchability and shareability of a digital file. Combined with a stylus on a tablet, it can replace most physical note-taking.",
    ],
  },
  features: {
    heading: "Built for study sessions",
    items: [
      {
        icon: "Highlighter",
        title: "Highlight and annotate",
        body: "Yellow highlights, freehand notes, sticky comments, underlines — exactly what you'd do on paper.",
      },
      {
        icon: "Bookmark",
        title: "Bookmark and outline",
        body: "Mark chapters or sections you'll come back to. Jump between them with one tap.",
      },
      {
        icon: "Combine",
        title: "Merge readings",
        body: "Combine the week's articles into one document for offline reading on a train or plane.",
      },
      {
        icon: "ScanLine",
        title: "Scan textbook pages",
        body: "Capture pages from physical books into searchable PDFs you can quote in essays.",
      },
    ],
  },
  steps: {
    heading: "A simple study workflow",
    items: [
      {
        title: "Collect the week's readings",
        body: "Download or share each PDF into PDF Editor from your university's portal or email.",
      },
      {
        title: "Merge them into one file",
        body: "Use the Merge tool to combine them into 'Week 3 readings.pdf' for offline use.",
      },
      {
        title: "Annotate as you read",
        body: "Highlight important passages and add margin notes. Notes are saved in-place.",
      },
      {
        title: "Use highlights when writing essays",
        body: "Jump back to highlighted sections via the bookmarks panel when you're citing sources.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Studying anywhere",
    body: "Lectures, library, train, café — the place a student reads is rarely a desk. A phone-first PDF editor means the same annotated copy is in your hand wherever you happen to be.",
  },
  faq: [
    {
      q: "Is the app free for students?",
      a: "Yes. Core annotation, merging, scanning, and signing are free. Some advanced features require Pro.",
    },
    {
      q: "Will my highlights sync across devices?",
      a: "If you save the file to iCloud Drive, Google Drive, or any cloud provider, edits sync wherever the same file opens. Local-only files stay on the device.",
    },
    {
      q: "Can I scan a textbook page?",
      a: "Yes, for personal study. Be mindful of copyright — most fair-use rules allow brief excerpts for study.",
    },
    {
      q: "Does the app work on iPads and Android tablets?",
      a: "Yes. Tablets and stylus input make annotation noticeably better than fingertip work on a phone.",
    },
  ],
  related: [
    { label: "Use cases — students", path: "/use-cases/students" },
    {
      label: "Best PDF app for students",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Scan to PDF", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Study with a real PDF toolkit.",
    sub: "Free on iOS and Android.",
  },
};

export default content;
