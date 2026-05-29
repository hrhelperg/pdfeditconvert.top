import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-invoices-as-pdf",
  h1: "How to Manage Invoices as PDF (Issue, Track, Archive)",
  description:
    "An invoice-as-PDF workflow that doesn't need accounting software: generate, number, send, track and archive — using only free browser tools and a clean folder system.",
  updated: "2026-05-29",
  intro: [
    "Most small businesses don't actually need accounting software for invoices. They need a clean way to generate a PDF, number it consistently, send it, track when it gets paid, and archive it for tax season. The work is mechanical; the tools are simple; the chaos comes from skipping the convention.",
    "An invoice workflow has four parts: issuance (where the PDF comes from), tracking (where you record what's sent), payment (when it clears), and archive (where the paid copies live). Each part is short, and none of them require a subscription if you don't want one.",
    "This guide walks the workflow as a freelancer or small team can actually run it — with PDF generation from a Word template, numbering you control, and an archive that survives a tax audit. It's not the only way; it's the one that doesn't break.",
  ],
  steps: [
    {
      title: "Build the invoice in Word or Pages from a template",
      body: "An invoice template in Word gives you a known-good layout with placeholders for client, date, line items, total. Fill in the variables, export to PDF with Word to PDF. Avoid editing the final number anywhere except the source.",
    },
    {
      title: "Use a sequential invoice number",
      body: "INV-2026-001, INV-2026-002, and so on. Reset annually. The numbers must be unique and unbroken — tax authorities flag gaps. Keep a running list in a spreadsheet or text file.",
    },
    {
      title: "Save with a predictable filename",
      body: "ClientName_Invoice_INV-2026-001_2026-05-29.pdf. The invoice number in the filename matches the number on the document. The client folder makes per-client retrieval easy.",
    },
    {
      title: "Send and log immediately",
      body: "Email the PDF with a short cover note and log the send in your tracking sheet. Date sent, invoice number, amount, due date. The minute you don't log is the minute you'll forget.",
    },
    {
      title: "Watermark PAID once the payment clears",
      body: "Add Watermark to PDF stamps PAID across the file with the date. The paid copy goes to /invoices/paid/; the unpaid lives in /invoices/outstanding/. Visual state beats spreadsheet state.",
    },
    {
      title: "Archive by year",
      body: "At year end, move /invoices/paid/ to /Archive/Invoices/2026/. Keep at least seven years (jurisdictions vary). The archive should be self-explanatory in five years when you've forgotten the original filing logic.",
    },
  ],
  tips: [
    "Never edit a sent invoice. If the amount is wrong, issue a credit note or a new invoice — the audit trail has to be intact.",
    "Match the file's invoice number to the document's invoice number to the line in your tracking sheet. Three places that say the same thing.",
    "PDF/A is the archival format some tax authorities prefer. If you're filing in such a jurisdiction, re-export the year-end set to PDF/A.",
    "Compress invoices for archive — they're plain text, but archives accumulate. Compressed copies save real disk space over years.",
    "Don't password-protect invoices unless the client requires it. Friction without benefit on a document that's just numbers and names.",
  ],
  mobileNote:
    "Invoices increasingly originate on a phone — a quick send from a coffee shop after a job. The PDF Editor app lets you fill the template, stamp the invoice number, and email the PDF from mobile, with a copy saved locally for your records.",
  faq: [
    {
      q: "Do I need invoicing software?",
      a: "Not for low volume. A Word template, a tracking sheet and a folder system handle dozens of invoices a month cleanly. Software pays off when you need recurring billing, multi-currency or many clients.",
    },
    {
      q: "What invoice number format should I use?",
      a: "Sequential, no gaps, ideally with a year prefix. INV-2026-001 is human-readable and tax-audit friendly.",
    },
    {
      q: "How long should I keep invoices?",
      a: "Jurisdictions vary; seven years is a safe default. Check your country's rules for the actual requirement.",
    },
    {
      q: "Should I send invoices as Word or PDF?",
      a: "Always PDF. PDFs lock the format and amount; Word docs invite well-meaning clients to 'fix' something.",
    },
    {
      q: "What about VAT or sales tax invoices?",
      a: "Some jurisdictions require specific layout, sequential numbering and original-format archival. Comply with the local rules; the workflow above accommodates them.",
    },
  ],
  related: [
    { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
    { label: "Word to PDF — clean invoice exports", path: "/word-to-pdf" },
    { label: "Add Watermark to PDF — stamp PAID on closed invoices", path: "/add-watermark-to-pdf" },
    { label: "PDF workflows for small business", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
};

export default content;
