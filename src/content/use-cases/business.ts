import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "business",
  h1: "PDF Editor for Business",
  description:
    "How small businesses use the PDF Editor app for contracts, invoices, and approvals on mobile.",
  intro: [
    "Small businesses run on PDFs more than they run on spreadsheets. Quotes go out as PDFs. Contracts come back signed as PDFs. Receipts get scanned as PDFs. Invoices are PDFs. The cost of doing each of those operations slowly adds up.",
    "These are the specific workflows where a mobile PDF editor pays for itself in saved time and avoided paid-for-but-rarely-used SaaS tools.",
  ],
  workflows: [
    {
      title: "Sign contracts from anywhere",
      body: "A client sends a contract in the morning. Sign it on the bus, send it back before lunch. Same flow whether you're at a desk or not.",
    },
    {
      title: "Scan receipts at the counter",
      body: "Auto edge detection and OCR turn paper receipts into properly named, searchable PDFs ready for accounting tools.",
    },
    {
      title: "Combine supporting docs into one deliverable",
      body: "Merge a quote, scope of work, and reference materials into one client-facing PDF. Cleaner than five email attachments.",
    },
    {
      title: "Protect sensitive documents before sending",
      body: "Password-protect payroll PDFs, NDA copies, or ID scans before sharing externally. Strong AES-256 encryption, on-device.",
    },
    {
      title: "Quick edits without going back to the desktop",
      body: "Fix a typo in a quote, change a date on an invoice, swap an outdated logo on a brochure — without booting up a laptop.",
    },
  ],
  appPitch:
    "PDF Editor handles the document work small businesses face every day. No per-seat licensing, no central admin to set up — each team member installs it on their phone and is productive on day one. Free for the basics, with a sensible upgrade for advanced features.",
  related: [
    { label: "PDF for Business — full overview", path: "/pdf-for-business" },
    {
      label: "Best PDF app for business",
      path: "/guides/best-pdf-app-for-business",
    },
    { label: "PDF Security", path: "/pdf-security" },
  ],
};

export default content;
