import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-small-business",
  h1: "PDF Workflows for Small Business (Quotes, Contracts, Records)",
  description:
    "How a small business runs its document flow on PDFs — quotes out, contracts back, records archived — without buying a subscription stack for it.",
  updated: "2026-05-29",
  intro: [
    "A small business runs more PDFs than a small business owner expects. Quotes go out, signed contracts come back, invoices ship, statements get filed, tax documents accumulate. Each of those is a small piece of work, and each can chew through time when the workflow isn't deliberate.",
    "The expensive PDF stacks pay off when you have a legal team. For a five-person business with a few dozen documents a week, free browser tools and a clean convention handle the same work without a subscription line item. The trick is to write the workflow down once and stick to it.",
    "This guide describes the workflow for the four document types small businesses run on PDF the most: quotes, contracts, invoices, and records. Each section is short, each is concrete, and none of it requires anything you'd pay for.",
  ],
  steps: [
    {
      title: "Quotes: Word template → Word to PDF → branded send",
      body: "Build the quote from a Word template, fill in client details and line items, export to PDF with Word to PDF. Brand the cover, name the file ClientName_Quote_YYYY-MM-DD.pdf, send.",
    },
    {
      title: "Contracts: PDF → Sign PDF → lock → countersign",
      body: "Finalize text in source, export to PDF, sign with Sign PDF, lock if your tool supports it, send for countersignature. Store both single-signed and fully-signed copies.",
    },
    {
      title: "Invoices: sequential numbering, watermark when paid",
      body: "INV-2026-001, INV-2026-002. Track in a sheet. When payment clears, Add Watermark to PDF stamps PAID and the file moves from /outstanding/ to /paid/.",
    },
    {
      title: "Records: receive, compress, archive by year",
      body: "Bank statements, vendor invoices, expense receipts. Receive as PDF, compress for archive, file by year in /Records/2026/. Keep at least seven years.",
    },
    {
      title: "Use a shared folder structure",
      body: "Top-level folders for /Clients/, /Records/, /Internal/, /Templates/, /Archive/. Two levels of nesting maximum. The whole team uses the same layout.",
    },
    {
      title: "Reconcile monthly",
      body: "Once a month, walk the /outstanding/ invoices folder and the /clients/ active projects. Older than 30 days, follow up. Older than 90, escalate. The folder is the to-do list.",
    },
  ],
  tips: [
    "Don't reinvent the template each time. Build one quote, contract, and invoice template, and reuse them.",
    "Sign with a real signature, not a typed name. Drawn signatures hold up better in disputes.",
    "Compress every document at the point of sending — outgoing files are always smaller than internal originals.",
    "Avoid sending live Word files to clients. Once it's PDF, the version is locked.",
    "Run a quarterly archive sweep. Closed projects go to /Archive/; active folders stay short and scannable.",
  ],
  mobileNote:
    "Small-business owners do half their PDF work on a phone — sign a contract between meetings, send an invoice from a job site, file a receipt during the day. The PDF Editor app handles all four document types from mobile, offline, so the work doesn't wait for desk time.",
  faq: [
    {
      q: "Do I need accounting software for invoicing?",
      a: "Not at low volume. A Word template, a tracking sheet and a folder system work cleanly for dozens of invoices a month. Software pays off as you scale.",
    },
    {
      q: "How do I track which contracts are outstanding?",
      a: "A folder structure: /Clients/Active/[Name]/contracts/sent/ and .../signed/. The folder state is the status. No sheet needed.",
    },
    {
      q: "What about backups?",
      a: "Sync the document folder to at least one cloud drive (Dropbox, iCloud, Google Drive). Keep a periodic external backup for tax-record years.",
    },
    {
      q: "Should I use a single template per document type?",
      a: "Yes. Consistent templates make documents recognizable and reduce per-document effort. Customize the content, not the structure.",
    },
    {
      q: "When does a paid PDF stack start to make sense?",
      a: "When you need automated routing, bulk e-signature, or accountable audit trails — usually around 20+ employees or regulated workflows.",
    },
  ],
  related: [
    { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
    { label: "Sign PDF — electronic signatures", path: "/sign-pdf" },
    { label: "How to manage invoices as PDF", path: "/guides/how-to-manage-invoices-as-pdf" },
    { label: "Best free PDF tools for small business", path: "/guides/best-pdf-tools-for-small-business" },
  ],
  parentHub: { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
};

export default content;
