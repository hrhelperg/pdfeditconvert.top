import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-work-documents-as-pdf",
  h1: "How to Organize Work Documents as PDF (Folders, Names, Versions)",
  description:
    "A practical naming and folder convention for work PDFs — quotes, briefs, deliverables, archives — that keeps version chaos out and lets anyone find anything fast.",
  updated: "2026-05-29",
  intro: [
    "The problem with work PDFs isn't usually the PDFs themselves. It's the trail: thirty files with similar names in a downloads folder, versions that don't line up, finals that aren't final, drafts that look identical to deliverables. The format is fine; the convention around the format is what falls apart.",
    "A working convention is short — a folder structure, a naming pattern, and a habit about where finals go. Once it's in place, finding 'the contract we sent in March' takes ten seconds rather than ten minutes, and version conflicts mostly stop happening.",
    "This guide describes the convention we've watched small teams adopt and stick with. It's not the only convention that works; it's one that's robust enough to survive a busy quarter without falling apart.",
  ],
  steps: [
    {
      title: "Pick a top-level folder layout once",
      body: "Clients/ContractName/, Internal/, Templates/, Archive/. Four folders cover most of it. Don't nest more than two levels deep at first — depth gets you lost.",
    },
    {
      title: "Standardize the filename pattern",
      body: "ClientName_DocType_vN_YYYY-MM-DD.pdf reads cleanly in any file browser. Date last so files sort chronologically; version inline so you can spot the latest at a glance.",
    },
    {
      title: "Separate /drafts and /final inside each project",
      body: "Drafts go in the project's /drafts subfolder; finals get renamed to FINAL and moved to /final or /deliverables. The /final folder should only contain shipped versions.",
    },
    {
      title: "Use Merge PDF to consolidate at handoff",
      body: "When a deliverable is actually three PDFs (proposal + terms + pricing), merge them into one for delivery and keep the source files in the project folder. The recipient gets one clean file.",
    },
    {
      title: "Compress and re-name only at delivery",
      body: "Compress PDF for the outgoing copy; keep the uncompressed source. The delivered file goes in /final/, the source stays in /drafts/. They're different artifacts.",
    },
    {
      title: "Archive completed projects on a schedule",
      body: "Move closed projects to /Archive/ quarterly. Active folders stay scannable; the archive is searchable when you need to find something later.",
    },
  ],
  tips: [
    "Avoid spaces in filenames if you can — underscores or hyphens are easier in URLs, email forwards and shell commands.",
    "Date format YYYY-MM-DD sorts chronologically in any tool. 5/29/26 doesn't.",
    "Don't put version numbers in the FINAL filename. FINAL is FINAL. If something changes after, it's FINAL-2 — and that's a flag the process broke down.",
    "Don't fear the rename. A clear filename is worth a minute of work, especially before sending.",
    "Keep a one-line index file (README.txt) in big projects listing what's in each subfolder. Helps the future-you who comes back six months later.",
  ],
  mobileNote:
    "On a phone, organization gets harder because filename editing is fiddly. The PDF Editor app lets you rename, tag and file PDFs from mobile so files arriving on the phone don't pile up unnamed in the Downloads folder.",
  faq: [
    {
      q: "What's the best filename format?",
      a: "ClientName_DocType_vN_YYYY-MM-DD.pdf. Date last sorts chronologically; version inline distinguishes drafts; client and doc type make the file self-describing.",
    },
    {
      q: "Should I use folders or tags?",
      a: "Folders. Tag systems exist but they fragment across devices and apps. Folders are universal.",
    },
    {
      q: "What do I do with old drafts?",
      a: "Keep them in /drafts/ inside the project folder until the project closes, then archive the whole thing. Don't delete — you may need to recover a number from a previous draft.",
    },
    {
      q: "Does the FINAL file need a version number?",
      a: "No. Once a file is FINAL, it's the canonical version. If something changes after, you're in a new conversation that gets its own FINAL.",
    },
    {
      q: "How do I handle files from clients with inconsistent naming?",
      a: "Rename on receipt to match your convention. The minute spent renaming saves the time you'd lose searching later.",
    },
  ],
  related: [
    { label: "PDF tools — full list of in-browser tools", path: "/pdf-tools" },
    { label: "Merge PDF — combine deliverables at handoff", path: "/merge-pdf" },
    { label: "How to organize PDF files", path: "/guides/how-to-organize-pdf-files" },
    { label: "PDF workflows for small business", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF tools — free, browser-based", path: "/pdf-tools" },
};

export default content;
