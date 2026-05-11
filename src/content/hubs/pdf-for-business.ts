import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "PDF for Business",
    h1: "PDF workflows for small teams.",
    highlight: "small teams",
    lead: "Contracts, invoices, quotes, signed agreements, and scanned receipts — all the documents a small business runs on, handled from a phone.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Why small teams keep struggling with PDFs",
    paragraphs: [
      "Small businesses live in PDFs. Quotes go out as PDFs, contracts come back as signed PDFs, invoices are PDFs, receipts get scanned into PDFs. Yet the tools that handle them are either enterprise-priced or web-based and fragile.",
      "A native, mobile-first PDF toolkit fits small teams better. No license seats to manage. No uploads to coordinate with privacy policies. Just the everyday operations — sign, merge, compress, scan, redact — done on whatever phone the team member is holding.",
    ],
  },
  features: {
    heading: "The business operations that matter",
    items: [
      {
        icon: "FileSignature",
        title: "Quote → contract → signature",
        body: "Send a PDF quote, accept signed acceptance, store the result. The whole loop fits in a phone.",
      },
      {
        icon: "Receipt",
        title: "Receipt scanning",
        body: "Scan paper receipts at the counter. Auto-name them by vendor and date for accounting.",
      },
      {
        icon: "ShieldCheck",
        title: "Protect sensitive docs",
        body: "Password-protect contracts and payroll PDFs before sharing externally.",
      },
      {
        icon: "Combine",
        title: "Combine and split for clients",
        body: "Merge supporting docs into one deliverable, or split a long export into per-client files.",
      },
    ],
  },
  steps: {
    heading: "A typical small-business workflow",
    items: [
      {
        title: "Receive a request",
        body: "A client asks for a quote. You draft it in your invoicing app, export to PDF.",
      },
      {
        title: "Add your signature",
        body: "Sign and date the PDF in PDF Editor before sending — no separate signing service needed.",
      },
      {
        title: "Send via email",
        body: "Share the signed quote directly from the app via the email share sheet.",
      },
      {
        title: "Receive countersigned version",
        body: "When it comes back, open it, archive it, and protect it with a password if sensitive.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Running a business from a phone",
    body: "A lot of small-business document work happens between other things — at a customer site, in a cab, between school pickups. Phone-native means the workflow doesn't depend on being at a desk.",
  },
  faq: [
    {
      q: "Is the app suitable for a team?",
      a: "Yes for individual users on a team — each person installs it on their phone. There's no central admin console; it's a per-device tool.",
    },
    {
      q: "Can I use it for legally binding contracts?",
      a: "Most jurisdictions accept signed PDFs for standard business contracts. For high-value or regulated documents, check your local rules on electronic signatures.",
    },
    {
      q: "Does it integrate with accounting tools?",
      a: "PDF Editor produces standard PDFs. Most accounting tools (Xero, QuickBooks, FreeAgent, etc.) accept PDF receipts and invoices natively.",
    },
  ],
  related: [
    { label: "PDF security and encryption", path: "/pdf-security" },
    { label: "Use cases — business teams", path: "/use-cases/business" },
    { label: "Sign PDF on phone", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Run document operations from your phone.",
    sub: "Free for everyday business use.",
  },
};

export default content;
