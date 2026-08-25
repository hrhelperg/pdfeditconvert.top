import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "PDF for Business",
    h1: "PDF workflows for small teams.",
    highlight: "small teams",
    lead: "Contracts, invoices, quotes, signed agreements, scanned receipts — all the documents a small business runs on, handled from a phone without per-seat licensing or enterprise SaaS.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Why small teams keep struggling with PDFs",
    paragraphs: [
      "Small businesses live in PDFs. Quotes go out as PDFs, contracts come back signed as PDFs, invoices are PDFs, receipts get scanned into PDFs, NDAs are PDFs. Yet the tools that handle them are either enterprise-priced or web-based and fragile.",
      "Enterprise PDF software assumes you have an IT department and a procurement process. Free web tools assume you're fine uploading client contracts to a third-party server. Neither model fits a five-person agency, a freelancer, or a small online business that needs to process documents quickly without bureaucracy.",
      "A native, mobile-first PDF toolkit fits small teams better. No license seats to manage, no upload queues to coordinate, no monthly fees for a tool used a few times a week. Each team member installs the app on their phone and is productive on day one.",
    ],
  },
  features: {
    heading: "The operations that matter to small teams",
    items: [
      {
        icon: "FileSignature",
        title: "Quote → contract → signature",
        body: "Send a PDF quote, accept signed acceptance, store the result. The whole loop fits in a phone.",
      },
      {
        icon: "Receipt",
        title: "Receipt scanning at the counter",
        body: "Scan paper receipts the moment you get them. Auto-naming and OCR make them accounting-tool ready.",
      },
      {
        icon: "ShieldCheck",
        title: "Protect sensitive documents",
        body: "Password-protect contracts, payroll PDFs, and NDA copies before sharing externally. AES-256, on-device.",
      },
      {
        icon: "Combine",
        title: "Combine and split deliverables",
        body: "Merge a quote with its scope of work; split a long export per client. Both are 3-tap operations.",
      },
      {
        icon: "Wand",
        title: "Quick edits, no laptop required",
        body: "Fix a typo on a quote, update a date on an invoice, swap a logo on a brochure — all from the phone.",
      },
      {
        icon: "Globe",
        title: "Works with your existing cloud",
        body: "Drive, iCloud, OneDrive, Dropbox — the app reads and writes from wherever your team already stores files.",
      },
    ],
  },
  steps: {
    heading: "A typical small-business workflow",
    items: [
      {
        title: "Receive a request",
        body: "A client asks for a quote. You draft it in your invoicing tool and export to PDF.",
      },
      {
        title: "Sign and timestamp",
        body: "Open the PDF in PDF Editor, sign with your saved signature, add a date stamp.",
      },
      {
        title: "Send via email or messaging",
        body: "Share the signed quote directly from the app via the email share sheet or your team's messaging tool.",
      },
      {
        title: "Receive countersigned version",
        body: "When the client returns it, open the file, archive it to your cloud, and protect it with a password if it contains sensitive terms.",
      },
      {
        title: "Generate invoice and combine with the contract",
        body: "Export the invoice from your accounting tool, then use Merge to bundle invoice + signed contract into one tidy archive PDF.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Running a business from a phone",
    body: "A lot of small-business document work happens between other things — at a customer site, in a cab, between school pickups. Phone-native means the workflow doesn't depend on being at a desk. Contracts that used to wait for evening laptop time now go out the same hour they were requested.",
  },
  faq: [
    {
      q: "Is the app suitable for a team of 5-20 people?",
      a: "Yes for individual users on a small team — each person installs it on their phone. There's no central admin console; it's a per-device tool. For organizations larger than that, an enterprise document management system may be more appropriate.",
    },
    {
      q: "Can I use it for legally binding contracts?",
      a: "Most jurisdictions accept signed PDFs for standard business contracts. The EU's eIDAS regulation and the US ESIGN Act both recognize electronic signatures. For high-value, regulated, or cross-border agreements, check local rules and consider qualified electronic signatures.",
    },
    {
      q: "Does it integrate with accounting tools?",
      a: "PDF Editor produces standard PDFs that every accounting tool accepts (Xero, QuickBooks, FreeAgent, Pleo, etc.). No special integration required — just save the PDF to your cloud drive and the accounting tool picks it up.",
    },
    {
      q: "How do I keep client files private?",
      a: "All operations run on-device. Files only leave your phone when you actively share them. Apply password protection to particularly sensitive documents before sharing externally.",
    },
    {
      q: "What about audit trails?",
      a: "Signed PDFs include signature metadata (timestamp, signer name). For regulated industries requiring full audit trails, supplement with a dedicated e-signature platform — PDF Editor handles everyday business contracts, not regulated workflows.",
    },
  ],
  related: [
    { label: "PDF security and encryption", path: "/pdf-security" },
    {
      label: "Secure PDF workflows for business",
      path: "/guides/secure-pdf-workflows-for-business",
    },
    { label: "Sign PDF on phone", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Run document operations from your phone.",
    sub: "Free for everyday business use. No per-seat licensing.",
  },
};

export default content;
