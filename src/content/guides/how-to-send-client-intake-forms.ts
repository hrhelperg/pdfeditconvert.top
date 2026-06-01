import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-client-intake-forms",
  h1: "How to Send Client Intake Forms",
  description:
    "Get a new client's details in one clean pass. How to send a PDF intake form so it's easy to fill, comes back complete, and keeps the client's information private.",
  updated: "2026-06-01",
  intro: [
    "An intake form is the first real interaction many clients have with how you work, so it pays to get it right. Done well, a single PDF intake form collects everything you need to start — contact details, project specifics, preferences — in one pass, without a back-and-forth of \"can you also send me…\". Done badly, it bounces around half-filled and sets a sloppy tone.",
    "The mechanics are simple but the details matter: the form has to be easy to fill on a phone (where most clients will open it), it needs to come back complete and in a usable format, and because it carries personal information, it shouldn't be routed through a random public website on the way.",
    "This guide walks through preparing the intake form, sending it so clients can actually complete it, and collecting responses cleanly — the practical version, not a theoretical one.",
  ],
  steps: [
    {
      title: "Build an intake form that asks only what you need",
      body: "Every extra field lowers completion. Ask for what you genuinely need to start, group it logically, and leave real space for answers. Keep a blank master you reuse for every new client.",
    },
    {
      title: "Send the blank form, not a flattened one",
      body: "Attach the fillable PDF directly or share it via a drive the client uses. Don't flatten the blank — that strips the fields. Add a one-line note on how to fill and return it.",
    },
    {
      title: "Make filling effortless on a phone",
      body: "Tell clients they can complete it in a PDF app — tap fields or add text on a flat form — sign if needed, and export. Most will do it on a phone, so smooth that path.",
    },
    {
      title: "Ask for a flattened copy back",
      body: "Request a saved or flattened PDF rather than a photo. Flattened forms read consistently, can't be cleared, and slot straight into the client's file.",
    },
    {
      title: "File it and confirm receipt",
      body: "Rename the returned form by client and date, store it with that client's records, and send a quick confirmation. Follow up once if a form comes back with required fields blank.",
    },
  ],
  tips: [
    "Shorter intake forms get completed; trim every field that isn't genuinely needed at the start.",
    "Because intake forms carry personal data, prefer direct attachments or a private drive over public 'fill online' services.",
    "A reusable blank master means each new client gets a clean, identical form with no leftover details.",
    "Recommend a specific PDF app in your note so phone clients aren't stuck in an email preview that won't type.",
    "Keep a consistent file-naming pattern so a client's intake form is always easy to locate later.",
  ],
  mobileNote:
    "Clients can complete your intake form on a phone with the PDF Editor app — filling fields or adding text to a flat form, signing, and exporting a flattened copy to send straight back. It works on-device, so the personal details they enter aren't uploaded anywhere on the way to you.",
  faq: [
    {
      q: "How do I send a client intake form as a PDF?",
      a: "Attach the fillable PDF directly to email or share it through a drive the client uses, without flattening the blank. Include a short note on filling it in a PDF app and returning a completed copy.",
    },
    {
      q: "Why does my intake form come back blank or half-filled?",
      a: "Clients often open it in an email preview that ignores fields, or the form asks too much. Recommend a PDF app, trim unnecessary fields, and ask for a flattened copy back.",
    },
    {
      q: "How do I keep client information private when collecting intake forms?",
      a: "Send and receive the form as a direct attachment or via a private drive rather than a public fill site. The PDF Editor app fills on-device, so the client's details aren't uploaded.",
    },
    {
      q: "Should intake forms be interactive or flat?",
      a: "Interactive is tidier if you can build it, but a clean flat template works everywhere. Either is fine as long as fields are clearly labelled and have enough space.",
    },
    {
      q: "How do I keep returned intake forms organised?",
      a: "Rename each by client and date, store it with that client's records, and keep the blank master separate so every new client gets a fresh copy.",
    },
  ],
  related: [
    {
      label: "PDF forms for small business",
      path: "/guides/pdf-forms-for-small-business",
    },
    {
      label: "Document collection workflows with PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "How to share a PDF form",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "How to share PDFs with clients",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
