import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-consultants",
  h1: "PDF Workflows for Consultants (Proposals, Reports, Invoices)",
  description:
    "A consultant's PDF rhythm: proposals that close, reports that read clean on a phone, invoices that ship in seconds. The browser-based tools that keep it lean.",
  updated: "2026-05-29",
  intro: [
    "Consulting work runs on three documents: the proposal that wins the engagement, the report that delivers it, and the invoice that closes the loop. Everything else — kickoff decks, interview notes, status updates — is either a draft of one of those three or a working artifact that doesn't leave the engagement.",
    "Each of the three has its own PDF habits. Proposals need to feel substantive without being heavy; reports need to read cleanly on a phone where most clients first open them; invoices need to ship the day the work completes. The tools to do all three well are mostly free, and the workflow doesn't change between client engagements.",
    "This guide describes the rhythm — what each document needs, what each tool does, and where the time goes. Tightening the rhythm across a year of engagements saves real hours.",
  ],
  steps: [
    {
      title: "Proposal: tight, branded, fast",
      body: "Build in Word from your template. Limit to under 12 pages — clients skim, not study. Word to PDF for the export. Cover page, problem statement, approach, deliverables, timeline, pricing, terms. Compress under 5 MB. Send same-day.",
    },
    {
      title: "Engagement letter: signed PDF, locked",
      body: "Once the proposal is approved, send a signed engagement letter with Sign PDF. The client countersigns and returns. Save both signed copies in /Clients/[Name]/contracts/.",
    },
    {
      title: "Interim updates: weekly PDF status",
      body: "Short PDF (one page) shipped weekly. Status, blockers, decisions needed. Treat it as a forcing function for clear thinking, not a deliverable in itself.",
    },
    {
      title: "Final report: structured for skim",
      body: "Executive summary on page one. Methodology and detail in the back. Number every page. Embed fonts. Mobile-readable type sizes. Most clients read on a phone before they read on a laptop.",
    },
    {
      title: "Invoice: same-day after closure",
      body: "Templated invoice, sequential number, Word to PDF, sent within 24 hours of closing the engagement. Late invoices age into late payment.",
    },
    {
      title: "Archive the engagement",
      body: "Move the entire client folder to /Archive/[Year]/[Client]/ when paid. The active folder stays slim; the archive is searchable for case-study and reference purposes.",
    },
  ],
  tips: [
    "Don't customize the template for every proposal. Customize the content, keep the structure consistent — clients recognize you across engagements.",
    "Track every proposal sent in a sheet with date, client, amount, outcome. The conversion rate tells you whether to refine the offer.",
    "Reports that read well on mobile use bigger type and shorter paragraphs than reports designed for print. Optimize for the device the client uses first.",
    "Watermark drafts (DRAFT) during the engagement, never on the final. The final feels final by its absence.",
    "Keep a /case-studies/ folder of anonymized examples from past engagements. They're the strongest proof in future proposals.",
  ],
  mobileNote:
    "Consultants live in transit. The PDF Editor app handles last-minute proposal compresses, engagement-letter signatures and invoice sends from a phone — useful when the engagement closes from the train and the invoice needs to ship before the day ends.",
  faq: [
    {
      q: "How long should a proposal be?",
      a: "Under 12 pages for most engagements. Clients skim. The shorter the proposal, the more it gets read.",
    },
    {
      q: "Do I need a signed engagement letter?",
      a: "Yes. The proposal is a sales document; the engagement letter is the contract. Don't start work without one.",
    },
    {
      q: "How often should I send interim updates?",
      a: "Weekly is the default. Daily for short, intense engagements. Monthly for long, slow ones. The cadence matters more than the format.",
    },
    {
      q: "Should reports be designed?",
      a: "Designed enough to look professional, not enough to slow you down. A clean typographic template ages better than an over-designed one.",
    },
    {
      q: "When should the invoice go out?",
      a: "Same day the engagement closes. Each day of delay tends to push payment date out by more than a day on the other end.",
    },
  ],
  related: [
    { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
    { label: "Word to PDF — proposal and report exports", path: "/word-to-pdf" },
    { label: "The best PDF workflow for freelancers", path: "/guides/best-pdf-workflow-for-freelancers" },
    { label: "How to send contracts as PDF", path: "/guides/how-to-send-contracts-as-pdf" },
  ],
  parentHub: { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
};

export default content;
