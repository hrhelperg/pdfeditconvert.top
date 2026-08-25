import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-workflow-for-freelancers",
  h1: "The Best PDF Workflow for Freelancers",
  description:
    "A repeatable PDF workflow for freelancers: proposals out, contracts signed, invoices sent. The free tools and mobile app that keep it fast and private.",
  updated: "2026-05-23",
  intro: [
    "For a freelancer, PDFs aren't paperwork — they're the business. The proposal that wins the project, the contract that protects you, the invoice that gets you paid all travel as PDFs, and how smoothly they move directly affects your cash flow and how professional you look. A scattered, ad-hoc approach costs you time you're not billing for.",
    "This guide lays out a repeatable PDF workflow built around the documents a freelancer sends most. It uses free, in-browser tools that run on your device — no upload, no subscription tax on your overhead — plus the PDF Editor app for signing and sending on the move between client meetings.",
    "The aim is a routine you run on autopilot: proposal to PDF, contract signed and returned, invoice out, all looking deliberate and arriving the right size.",
  ],
  steps: [
    {
      title: "Send proposals as locked PDFs",
      body: "Write in your editor, then convert to PDF with the Word to PDF tool. A PDF keeps your layout and pricing exactly as designed and stops a client editing the numbers.",
    },
    {
      title: "Combine supporting docs into one file",
      body: "Bundle the proposal with case studies or terms using the Merge PDF tool, so the client opens one professional document, not a pile of attachments.",
    },
    {
      title: "Sign and return contracts fast",
      body: "When the contract comes back for signature, the PDF Editor app signs it on your phone with a saved signature and sends it back within the hour — speed that signals you're easy to work with.",
    },
    {
      title: "Send invoices that can't be altered",
      body: "Export invoices to PDF so the amount and bank details are fixed. Add a discreet watermark if you send drafts for approval before the final.",
    },
    {
      title: "Right-size everything before it goes",
      body: "Compress proposal decks and scanned receipts with the Compress PDF tool so nothing bounces from a client's inbox or an accounting portal.",
    },
    {
      title: "Keep clean originals and archive",
      body: "Store unmarked masters of templates and signed agreements in clearly named folders. A signed contract you can find in seconds is worth having when a dispute or a repeat client appears.",
    },
  ],
  tips: [
    "Always send finals as PDF, never an editable doc — a client shouldn't be able to quietly adjust your scope or price.",
    "Speed of signing is a competitive edge. Returning a signed contract the same hour makes you the freelancer who's easy to deal with.",
    "Name files like a professional: \"Proposal-ClientName-2026-05.pdf\". It looks intentional in their inbox and is findable in yours.",
    "Keep tools that don't upload your client work. Confidential proposals and signed contracts shouldn't pass through a stranger's server.",
    "Template what you repeat. A reusable proposal and invoice base, exported fresh to PDF each time, saves hours over a month.",
  ],
  mobileNote:
    "Freelancing happens between places — a café, a client's office, the train. The PDF Editor app lets you sign a contract, send an invoice and bundle a proposal from your phone, offline and on-device, so a deal never stalls because you weren't at your desk.",
  faq: [
    {
      q: "Why send freelance documents as PDF rather than Word?",
      a: "PDF locks your layout, pricing and terms so a client can't edit them, intentionally or otherwise. It also opens identically on any device, which looks more professional.",
    },
    {
      q: "What's the fastest way to sign and return a contract?",
      a: "The PDF Editor app with a saved signature. Open the contract, place your signature, export and send — often within minutes of receiving it.",
    },
    {
      q: "Are these tools subscription-based?",
      a: "The browser tools — convert, merge, compress, split — are free with no signup. That keeps recurring software costs off your overhead.",
    },
    {
      q: "Is my client work kept private?",
      a: "The browser tools process files on your device without uploading, and the app works offline. Confidential proposals and contracts stay yours.",
    },
    {
      q: "How should I organise signed contracts?",
      a: "Keep clearly named, dated masters in dedicated folders, ideally synced to the cloud. A signed agreement you can retrieve instantly is invaluable if a dispute arises.",
    },
  ],
  related: [
    { label: "PDF Editor for Remote Work", path: "/use-cases/remote-work" },
    { label: "PDF Editor for Freelancers — overview", path: "/use-cases/freelancers" },
    { label: "All free PDF tools", path: "/pdf-tools" },
    { label: "How to sign a PDF on your phone", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "How to merge PDF files", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "PDF for Business", path: "/pdf-for-business" },
};

export default content;
