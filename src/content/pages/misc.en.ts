import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_SECTIONS, PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_SECTIONS, TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_EN: ToolsIndexContent = {
  crumbLabel: "Free PDF tools",
  heroEyebrow: "Free PDF tools",
  heroH1: "Browser-based PDF tools — your files never leave your device.",
  heroHighlight: "never leave",
  heroLead:
    "Merge, split, rotate, watermark and convert PDFs without uploading anything. All processing runs locally in your browser, free, no signup.",
  privacyNote:
    "Every tool on this page processes your files locally in your browser. Nothing is uploaded to our servers and nothing is stored.",
  clusterHeading: "{count} guides on browser-based PDF work",
  goingFurtherHeading: "Going further with PDFs",
  goingFurtherBody:
    "These tools cover one-off jobs in the browser. For the workflows behind them — editing, converting, signing, securing and scanning — start from the topic hubs.",
  hubs: [
    { id: "pdf-editor", label: "PDF Editor" },
    { id: "pdf-converter", label: "PDF Converter" },
    { id: "pdf-forms", label: "PDF Forms" },
    { id: "sign-pdf", label: "Sign PDF" },
    { id: "pdf-security", label: "PDF Security" },
    { id: "scan-to-pdf", label: "Scan to PDF" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "PDF apps vs online PDF tools",
    },
  ],
  appCtaHeading: "Need PDF tools on mobile?",
  appCtaSub: "Get the PDF Editor app for iPhone and Android — free.",
};

export const GUIDES_INDEX_EN: GuidesIndexContent = {
  h1: "PDF Guides",
  lead: "{count} practical, mobile-first tutorials for editing, converting, compressing, signing and protecting PDFs — grouped by the tool or topic they belong to.",
};

export const CONTACT_EN: ContactContent = {
  h1: "Contact",
  lead: "Questions, partnerships, press, or feedback on the PDF Editor app — we read every email.",
  emailLabel: "Email",
  officeLabel: "Registered office",
  sections: [
    {
      heading: "What to expect",
      body: "Email is the only support channel — there is no ticket system and no chatbot in front of it. Replies come from the same small team that builds the app, normally within two working days. Include your device and OS version for anything app-related; for a problem with a specific document, describe what you were doing rather than attaching the file, since we neither want nor need your documents.",
    },
    {
      heading: "What we cannot help with",
      body: "The browser tools on this site run entirely on your device, so nothing you process is ever transmitted to us. That also means we cannot recover a file you converted, resend a download, or look anything up on your behalf — there is no copy on our side to look at. If a tool failed on a particular PDF, tell us what the file was (scanned, password-protected, a filled form) and what the tool did.",
    },
    {
      heading: "Privacy and legal requests",
      body: "Data-protection questions, deletion requests and legal notices go to the same address and reach hrhelperg s.r.o. at the registered office above.",
    },
  ],
  legalSentence:
    "Our {privacy} sets out what is and is not collected, and the {terms} cover use of the site and the tools.",
  privacyLinkLabel: "privacy policy",
  termsLinkLabel: "terms of service",
  tryAppHeading: "Try the app",
};

export const PRIVACY_EN: LegalContent = {
  h1: "Privacy Policy",
  updated: PRIVACY_UPDATED,
  sections: PRIVACY_SECTIONS,
};

export const TERMS_EN: LegalContent = {
  h1: "Terms of Service",
  updated: TERMS_UPDATED,
  sections: TERMS_SECTIONS,
};
