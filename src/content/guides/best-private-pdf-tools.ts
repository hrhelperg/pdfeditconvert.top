import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-private-pdf-tools",
  h1: "Best Private PDF Tools (When Confidentiality Actually Matters)",
  description:
    "For contracts, financial records and other sensitive PDFs, these are the tools that respect privacy by architecture — not just by stated policy.",
  updated: "2026-05-29",
  intro: [
    "'Private' gets applied to PDF tools the way 'natural' gets applied to food labels — generously and often inaccurately. Many tools claim privacy in their copy while uploading every file to their servers and processing it there. The privacy is then policy-based: 'we don't store your file for more than an hour'. That's better than nothing, but it depends on the policy holding, which depends on the company holding, which is not a strong guarantee for genuinely sensitive material.",
    "Private PDF tools — actually private ones — are private by architecture. Your file doesn't reach their server at all. The processing happens in your browser or in a local app on your phone. Privacy isn't a policy; it's a structural property. That's the standard worth holding tools to when the file matters.",
    "This guide lists the private picks for the common PDF tasks. The architecture is the bar; the rest follows from there.",
  ],
  steps: [
    {
      title: "For compression of sensitive files: Compress PDF in browser",
      body: "Compress PDF in your browser shrinks the file locally. Sensitive bank statements, scanned IDs and contracts compress without ever leaving your device. Verify with devtools — no outbound POST when you add the file.",
    },
    {
      title: "For merging sensitive files: Merge PDF in browser",
      body: "Merge PDF combines contracts, exhibits, or signed bundles locally. The merged file is generated in browser memory; the components stay on your machine throughout.",
    },
    {
      title: "For extracting specific pages to share: Extract PDF Pages",
      body: "If you need to send only specific pages of a sensitive document, Extract PDF Pages produces a new PDF with just those pages — locally, in your browser.",
    },
    {
      title: "For redaction-style page removal: Extract or Reorder",
      body: "True text redaction is a specialized task; if you're removing whole pages or replacing them with substitutes, page-level tools in your browser do the job without exposing the content to any server.",
    },
    {
      title: "For signing contracts: Sign PDF or PDF Editor app",
      body: "Sign PDF in browser or the PDF Editor app on phone keeps the contract on your device through signing. No e-signing platform sees the document.",
    },
    {
      title: "For private archives: encrypted local storage",
      body: "After processing, archive sensitive PDFs on encrypted storage — FileVault, BitLocker, encrypted external drives, or zero-knowledge cloud backup. Local processing doesn't matter if archive storage is plaintext.",
    },
  ],
  tips: [
    "Privacy by architecture beats privacy by policy. The architecture verifies; the policy depends on trust.",
    "Devtools network tab is the verification step. If you can't verify, don't trust.",
    "Don't accept signups for genuinely private tools — the account is a data point the tool would otherwise not have.",
    "Mobile private tools should work offline. If a 'private' app requires constant network, ask why.",
    "Combine private tools with private channels. Processing privately and then emailing the result in plaintext defeats the purpose.",
  ],
  mobileNote:
    "On mobile, the PDF Editor app is the private pick — all processing happens on-device, no upload, no account. Useful for contracts and sensitive scans where the phone is the natural device but the file shouldn't go through anyone else's server.",
  faq: [
    {
      q: "What makes a PDF tool actually private?",
      a: "Architecture — the file doesn't reach the tool's server. Stated retention policies are weaker because they depend on the company holding to its commitments.",
    },
    {
      q: "Are paid 'private' tools better than free private ones?",
      a: "Not necessarily. Free tools that run in your browser have the same architectural privacy as paid no-upload tools. Paid tools win on advanced features (regulated workflows, e-discovery), not on baseline privacy.",
    },
    {
      q: "Can I verify privacy myself?",
      a: "Yes — browser devtools, network tab. Drop a file, watch for outbound requests. No file upload visible means no file upload happened.",
    },
    {
      q: "What about end-to-end encryption?",
      a: "Useful for sharing, doesn't help with processing. If a tool needs to read your file to process it, encryption in transit doesn't matter — the server still sees the content.",
    },
    {
      q: "What's the strongest privacy stance for sensitive PDFs?",
      a: "Process locally with browser-based or local-app tools. Archive on encrypted storage. Share through end-to-end encrypted channels. Each layer covers a different attack surface.",
    },
  ],
  related: [
    { label: "PDF Security — password protect and encrypt", path: "/pdf-security" },
    { label: "PDF tools — browser-based, no upload", path: "/pdf-tools" },
    { label: "Privacy-first PDF tools", path: "/guides/privacy-first-pdf-tools" },
    { label: "How to protect sensitive PDF files", path: "/guides/how-to-protect-sensitive-pdf-files" },
  ],
  parentHub: { label: "PDF tools — free, browser-based", path: "/pdf-tools" },
};

export default content;
