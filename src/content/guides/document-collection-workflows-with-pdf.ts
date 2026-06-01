import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "document-collection-workflows-with-pdf",
  h1: "Document Collection Workflows With PDF",
  description:
    "Gathering files and signed forms from clients? Build a repeatable PDF collection workflow — a checklist, consistent formats, and a tidy way to track what's still missing.",
  updated: "2026-06-01",
  intro: [
    "Collecting documents from other people is its own kind of project. Onboarding a client, processing an application, closing a deal — each often needs a set of files and signed forms back from someone else, and the usual result is a scattered email thread where you can never quite remember what's still outstanding. A repeatable PDF collection workflow replaces that chaos with a checklist and a folder.",
    "This is distinct from collecting answers on a single form. Document collection is about gathering multiple items — a signed agreement, an ID, proof of something, a completed questionnaire — from a person, and knowing at a glance what's arrived and what's still missing. PDF is the natural common format because everything can become one.",
    "This guide lays out a workflow that scales from one client to many: define the request precisely, make returning items easy, track completeness, and assemble what you've collected into something tidy.",
  ],
  steps: [
    {
      title: "Define the request as a checklist",
      body: "List exactly what you need — each form, each supporting file — with a one-line description. Send the checklist with the request so the other person knows the full set up front, not in dribs.",
    },
    {
      title: "Standardise the return format",
      body: "Ask for everything as PDFs: forms flattened, scans of documents as PDF rather than loose photos. A consistent format means everything files together and reads the same way.",
    },
    {
      title: "Make returning items genuinely easy",
      body: "Point people to a PDF app so they can fill forms, scan documents to PDF, and send a tidy set from a phone. The easier the return, the faster and more complete it comes back.",
    },
    {
      title: "Track what's in and what's missing",
      body: "Keep a per-person folder and tick the checklist as items arrive. A glance tells you what's outstanding, so your follow-up is specific — 'still need the signed agreement' — not vague.",
    },
    {
      title: "Assemble the completed set",
      body: "Once everything's in, rename consistently and optionally merge the set into a single PDF per person. You end with one clean, ordered package instead of a dozen stray files.",
    },
  ],
  tips: [
    "Send the full checklist up front; piecemeal requests are the main reason collection drags on.",
    "Asking for PDFs (forms flattened, documents scanned to PDF) keeps the returned set consistent and easy to file.",
    "A per-person folder plus a ticked checklist makes follow-ups specific instead of 'can you send the rest?'",
    "Merging a completed set into one PDF gives you a single tidy package per person.",
    "Collected documents are often sensitive — keep them to direct channels or a private drive, not public upload tools.",
  ],
  mobileNote:
    "The people you collect from can do their whole part on a phone: scan documents to PDF, fill and flatten forms, and send the set with the PDF Editor app. Because it works on-device, the sensitive files they return aren't uploaded to a third-party server on the way to you.",
  faq: [
    {
      q: "How do I collect documents and forms from clients efficiently?",
      a: "Define the full request as a checklist up front, ask for everything as PDFs, make returning easy via a PDF app, track arrivals against the checklist, and assemble the completed set into one tidy package.",
    },
    {
      q: "How is document collection different from collecting a form?",
      a: "A single form gathers answers in one file. Document collection gathers multiple items — forms plus supporting files — from a person, so the focus is on completeness and tracking what's still missing.",
    },
    {
      q: "What format should people send documents in?",
      a: "PDF throughout: forms flattened, paper documents scanned to PDF rather than loose photos. Consistency means everything files together and reads the same.",
    },
    {
      q: "How do I track what's still outstanding?",
      a: "Keep a per-person folder and a checklist, ticking items as they arrive. A glance shows what's missing so follow-ups are specific rather than vague.",
    },
    {
      q: "How do I keep collected documents private?",
      a: "Use direct channels or a private drive rather than public upload sites. People can scan and fill on-device with the PDF Editor app so their files aren't uploaded as they return them.",
    },
  ],
  related: [
    {
      label: "How to send client intake forms",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "How to manage PDF application forms",
      path: "/guides/how-to-manage-pdf-application-forms",
    },
    {
      label: "How to share a PDF form",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "How to scan documents to PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
