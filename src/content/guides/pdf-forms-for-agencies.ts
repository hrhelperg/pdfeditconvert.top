import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-forms-for-agencies",
  h1: "PDF Forms for Agencies",
  description:
    "Client onboarding packs, creative brief forms and approval sign-off sheets — the multi-stakeholder forms agencies run, handled as fillable PDFs anyone can complete.",
  updated: "2026-06-01",
  intro: [
    "Agencies live with more stakeholders than most, and forms are how they keep everyone aligned. A client onboarding pack gathers the brand details and access the team needs. A creative brief form turns a vague request into a structured spec. An approval sign-off sheet records who agreed to what before a campaign ships. Each is a form, and running them as fillable PDFs keeps them portable across clients who all use different tools.",
    "What makes agency forms distinct is that they cross between client and team, and they often need a clear approval trail. The point isn't elaborate software — it's well-structured forms that the right people can complete on any device, plus a tidy way to file the signed-off versions so \"who approved this?\" is never a mystery.",
    "This guide focuses on those agency-specific forms — onboarding, briefs, approvals — and the form mechanics behind them, separate from the broader agency document chain of decks, briefs and deliverables.",
  ],
  steps: [
    {
      title: "Make an onboarding pack that collects everything once",
      body: "Build one fillable onboarding form per new client: brand basics, contacts, access, preferences. Collecting it in a single pass beats chasing details across a dozen emails later.",
    },
    {
      title: "Turn the brief into a structured form",
      body: "A creative brief form with fields — objective, audience, deliverables, mandatories, deadline — forces the clarity a free-text email skips. Clients fill it; the team works from it.",
    },
    {
      title: "Use sign-off sheets for approvals",
      body: "Create an approval form with the item, version, approver and date as fields plus a signature area. A completed, flattened sign-off is a clear record of who agreed to what.",
    },
    {
      title: "Send forms so any stakeholder can fill them",
      body: "Attach fillable PDFs directly and note they can be completed in a PDF app on any device. Clients and reviewers won't share your tools, so keep the form itself self-sufficient.",
    },
    {
      title: "File signed-off versions by project",
      body: "Flatten completed approvals and onboarding packs, name them by project and date, and store them per client. The approval trail stays findable long after the campaign ships.",
    },
  ],
  tips: [
    "A structured brief form prevents the 'that's not what we asked for' loop better than any amount of back-and-forth email.",
    "Flatten approval sign-offs so the record of who agreed to what can't be altered after the fact.",
    "Collect onboarding details in one pack rather than piecemeal — it's faster for the client and for you.",
    "Stakeholders use different tools, so keep forms as plain fillable PDFs that work in any app.",
    "This is the forms layer; pair it with your broader agency document workflow for decks and deliverables.",
  ],
  mobileNote:
    "Clients and reviewers can complete onboarding packs, briefs and approval sheets on a phone with the PDF Editor app — filling fields, signing, and returning a flattened copy. On-device processing keeps client brand details and approvals off third-party servers.",
  faq: [
    {
      q: "What PDF forms do agencies rely on?",
      a: "Client onboarding packs, creative brief forms, and approval sign-off sheets are the core. Run as fillable PDFs, they work across clients and reviewers who all use different tools.",
    },
    {
      q: "How do I keep a clear approval trail?",
      a: "Use an approval form with item, version, approver and date fields plus a signature area, then flatten the completed sign-off. The flattened record can't be altered and shows exactly who agreed to what.",
    },
    {
      q: "How is this different from agency PDF workflows?",
      a: "This is about forms — onboarding, briefs, approvals. The agency PDF workflow guide covers the wider chain of pitch decks, creative briefs and deliverables as documents.",
    },
    {
      q: "How can clients fill our forms if they don't use our tools?",
      a: "Keep them as plain fillable PDFs. Anyone can complete them in a PDF app on any device — tap fields or add text to a flat form, sign, and return a copy.",
    },
    {
      q: "How do we keep client information secure?",
      a: "Send and collect via direct attachments or a private shared drive, not public fill sites. The PDF Editor app fills on-device, so client details and approvals aren't uploaded.",
    },
  ],
  related: [
    {
      label: "PDF workflows for agencies",
      path: "/guides/pdf-workflows-for-agencies",
    },
    {
      label: "PDF forms for consultants",
      path: "/guides/pdf-forms-for-consultants",
    },
    {
      label: "How to manage PDF application forms",
      path: "/guides/how-to-manage-pdf-application-forms",
    },
    {
      label: "Document collection workflows with PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
