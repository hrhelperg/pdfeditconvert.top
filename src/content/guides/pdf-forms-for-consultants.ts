import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-forms-for-consultants",
  h1: "PDF Forms for Consultants",
  description:
    "Discovery questionnaires, engagement scoping sheets and feedback forms — the form side of consulting, handled as fillable PDFs that clients can complete on any device.",
  updated: "2026-06-01",
  intro: [
    "Consulting runs on questions. Before an engagement you need to understand the client's situation; during it you scope what's in and out; after it you want honest feedback. Each of those is a form — a discovery questionnaire, a scoping sheet, a feedback request — and handling them as fillable PDFs keeps the process crisp without dragging clients into yet another login.",
    "These forms are different from a consultant's deliverables. Proposals, reports and invoices are documents you produce; questionnaires and scoping sheets are forms clients complete. This guide is about the form side specifically — designing them so clients answer fully, and collecting the responses so they actually inform the work.",
    "The payoff is a smoother start and clearer boundaries. A good discovery questionnaire surfaces the real problem before the first call; a clear scoping sheet prevents the slow creep of unagreed work. Both are easy to run as PDFs.",
  ],
  steps: [
    {
      title: "Design a discovery questionnaire that earns its length",
      body: "Ask the questions that change how you'd approach the engagement, not everything imaginable. Group them, leave room for real answers, and keep a reusable blank master per service.",
    },
    {
      title: "Build a scoping sheet that sets boundaries",
      body: "Turn scope into a form: deliverables, what's explicitly out, timelines, assumptions. Fields the client confirms make the boundary mutual rather than something you assert later.",
    },
    {
      title: "Send forms so clients complete them on any device",
      body: "Attach the fillable PDF directly and note that clients can fill it in a PDF app — tap fields or add text to a flat form, then return a completed copy. Most will do it on a phone.",
    },
    {
      title: "Collect a feedback form at the end",
      body: "A short, well-spaced feedback form is more likely to be filled than a long one. Send it as the engagement closes while the experience is fresh, and ask for a flattened copy back.",
    },
    {
      title: "File responses against each engagement",
      body: "Rename returned forms by client and date and store them with that engagement's records. Keep blank masters separate so each new client gets a clean form.",
    },
  ],
  tips: [
    "A sharp discovery questionnaire surfaces the real problem before the first meeting and saves a call's worth of time.",
    "Make the scoping sheet something the client confirms in fields, so 'out of scope' is mutual, not a later argument.",
    "Keep feedback forms short; completion rate matters more than the number of questions.",
    "Client answers are sensitive — send and collect via direct attachments or a private drive, not public fill sites.",
    "This is the forms side of consulting; pair it with your proposal, report and invoice workflow for the full picture.",
  ],
  mobileNote:
    "Clients fill your questionnaires and scoping sheets on a phone with the PDF Editor app — tapping fields or adding text to flat forms, then exporting a flattened copy. It's on-device, so the details they share about their business aren't routed through a third-party server.",
  faq: [
    {
      q: "What PDF forms do consultants use most?",
      a: "Discovery questionnaires before an engagement, scoping sheets to set boundaries, and feedback forms at the end. Run as fillable PDFs, they keep the process clear without adding another platform for clients to log into.",
    },
    {
      q: "How do I get clients to complete a discovery questionnaire?",
      a: "Keep it focused on questions that change your approach, leave real space for answers, and send it as a fillable PDF with a note that they can complete it in a PDF app on any device.",
    },
    {
      q: "How is this different from consulting PDF workflows?",
      a: "This is about forms clients fill — questionnaires, scoping, feedback. The consulting PDF workflow guide covers your own deliverables: proposals, reports and invoices.",
    },
    {
      q: "How do I keep client questionnaire answers private?",
      a: "Send and receive via direct attachments or a private drive rather than public fill sites. The PDF Editor app fills on-device, so client answers aren't uploaded anywhere.",
    },
    {
      q: "Should a scoping sheet be a form or a document?",
      a: "Make it a form the client confirms — fields for deliverables, exclusions, timelines and assumptions. A confirmed form makes scope mutual in a way a one-way document doesn't.",
    },
  ],
  related: [
    {
      label: "PDF workflows for consultants",
      path: "/guides/pdf-workflows-for-consultants",
    },
    {
      label: "How to send client intake forms",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "PDF forms for agencies",
      path: "/guides/pdf-forms-for-agencies",
    },
    {
      label: "Document collection workflows with PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
