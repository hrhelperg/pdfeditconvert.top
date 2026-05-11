import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-security",
  hero: {
    eyebrow: "PDF Security",
    h1: "Protect sensitive PDFs the right way.",
    highlight: "right way",
    lead: "Passwords, AES-256 encryption, redaction, and usage restrictions — on contracts, payroll, and ID scans. The kind of protection sensitive documents actually deserve.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Why most 'protected' PDFs aren't",
    paragraphs: [
      "It's surprisingly common for people to share passport scans, signed contracts, and salary slips as plain PDFs — over email, over messaging apps, or as attachments to forms. If the email account or messaging history is compromised, every one of those documents is exposed.",
      "Some users add a 'protection' that's just an open-password set by a free online tool. That's better than nothing, but the password is often weak, the encryption is sometimes the legacy 40-bit cipher, and the tool keeps your file long enough to be a liability of its own.",
      "Real PDF security means strong encryption (AES-256), strong passwords, and — when needed — separating editing/printing permissions from open access. It should also be done on-device, because the moment you upload a sensitive document to a web tool, you've already lost the privacy battle.",
    ],
  },
  features: {
    heading: "Security tools that match the threat model",
    items: [
      {
        icon: "Lock",
        title: "Password protection",
        body: "Set a password to open the document. The PDF can't be viewed without it.",
      },
      {
        icon: "ShieldCheck",
        title: "AES-256 encryption",
        body: "Strong modern encryption, the standard used by enterprise systems.",
      },
      {
        icon: "Printer",
        title: "Restrict copy and print",
        body: "Allow viewing but block copying text, printing, or extracting pages.",
      },
      {
        icon: "EyeOff",
        title: "Redaction",
        body: "Permanently black out names, account numbers, or signatures before sharing.",
      },
      {
        icon: "Stamp",
        title: "Watermarks",
        body: "Add a 'confidential' or recipient-specific watermark to discourage forwarding.",
      },
      {
        icon: "Link",
        title: "Password sharing tips",
        body: "Built-in guidance on sharing passwords via a separate channel from the document itself.",
      },
    ],
  },
  steps: {
    heading: "How to protect a PDF",
    items: [
      {
        title: "Open the PDF",
        body: "Import the document into PDF Editor from Files or any cloud drive.",
      },
      {
        title: "Tap Protect",
        body: "Find it under the document tools menu. Pick the level of protection you need.",
      },
      {
        title: "Set the password",
        body: "Use a strong password — at least 12 characters, mix of letters, numbers, and symbols.",
      },
      {
        title: "(Optional) Choose restrictions",
        body: "Allow or block printing, copying, and editing. Useful for shared but read-only documents.",
      },
      {
        title: "Save the protected copy",
        body: "Save as a new file so the original stays accessible if you forget the password.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Protecting sensitive documents on the go",
    body: "Most security mistakes happen when you're rushed. Phone-based protection means you can lock down a contract before sending it from the airport, or protect a payroll PDF before sharing it with a contractor — without finding a desktop.",
  },
  faq: [
    {
      q: "What encryption does the app use?",
      a: "AES-256, the modern standard. Avoid older 40-bit and 128-bit RC4 encryption — they're trivially broken.",
    },
    {
      q: "What if I forget the password?",
      a: "There's no backdoor. Strong encryption means the document is unrecoverable without the password. Store it in a password manager.",
    },
    {
      q: "How do I share the password safely?",
      a: "Use a different channel than the document itself — text the password if you emailed the PDF, or use a password manager's secure sharing feature.",
    },
    {
      q: "Is redaction permanent?",
      a: "Yes. Proper redaction removes the underlying text, not just covers it visually. Even copy-pasting from the redacted PDF won't reveal the original.",
    },
    {
      q: "Can I add a watermark and a password at the same time?",
      a: "Yes. They're independent and can be applied together.",
    },
  ],
  related: [
    {
      label: "Step-by-step: how to password protect a PDF",
      path: "/guides/how-to-protect-pdf-file",
    },
    { label: "Sign PDFs before locking them", path: "/sign-pdf" },
    {
      label: "PDF workflows for business teams",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Lock down sensitive PDFs in seconds.",
    sub: "Free on iOS and Android. Protection runs on-device.",
  },
};

export default content;
