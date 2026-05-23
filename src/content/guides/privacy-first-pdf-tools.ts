import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-pdf-tools",
  h1: "Privacy-First PDF Tools: Keep Your Documents on Your Device",
  description:
    "PDFs hold some of your most sensitive data. How to work with them without uploading anything, and what 'privacy-first' actually means.",
  updated: "2026-05-23",
  intro: [
    "Think about what's in your PDFs: contracts, bank statements, tax forms, passport scans, medical letters, signed agreements. These are among the most sensitive files you own — and the casual habit of dropping them into the first 'free online PDF tool' to merge or compress means handing exactly that data to a server you know nothing about.",
    "Privacy-first PDF tools take a different approach: the file never leaves your device. The processing happens in your browser, or on your phone, using your own hardware — so there's no upload, no server copy, no retention policy to worry about because there's nothing to retain. This guide explains what that means in practice and how to put it to work.",
    "The tools on this site are built this way, and the PDF Editor app extends it to mobile and offline use. Here's how to keep your documents yours.",
  ],
  steps: [
    {
      title: "Understand what 'privacy-first' means here",
      body: "It means processing happens on your device, not a server. Your file is read locally, the operation runs in your browser or app, and nothing is transmitted — there's no upload to leak, intercept or retain.",
    },
    {
      title: "Use on-device browser tools for everyday jobs",
      body: "Merge, split, compress, convert, rotate and extract all run in your browser here. For sensitive documents, that's the difference between a private operation and an upload.",
    },
    {
      title: "Go offline for the most sensitive files",
      body: "For a passport scan or a confidential contract, the strongest guarantee is the simplest: disconnect from the internet and use a tool that still works. If it does, the file genuinely isn't going anywhere.",
    },
    {
      title: "Add protection where the document warrants it",
      body: "Privacy in transit also means not over-sharing. Send only the pages needed, and password-protect documents that are genuinely confidential before they leave your hands.",
    },
    {
      title: "Be deliberate about how you share",
      body: "Direct transfers like AirDrop or Nearby Share, or a cloud link you control and can revoke, keep you in charge of who sees the file — more so than dropping it into a chat app.",
    },
    {
      title: "Reserve upload tools for public files only",
      body: "If a document isn't sensitive — a public flyer, a blank template — an upload tool is fine. Save the on-device tools for anything you'd mind a stranger reading.",
    },
  ],
  tips: [
    "The offline test proves privacy: if a tool keeps working with your connection off, your file isn't being uploaded.",
    "'Files deleted after an hour' still means your document was uploaded. A tool that processes on-device never had it to delete.",
    "Privacy isn't only about uploads — sending only the pages required, rather than the whole file, limits what you expose.",
    "For mobile, on-device processing also means it works with no signal and doesn't spend your data — privacy and practicality in one.",
    "Match caution to content. A contract or ID deserves an on-device tool; a public document doesn't need the same care.",
  ],
  mobileNote:
    "The PDF Editor app is privacy-first by design: it processes documents on your phone and works fully offline, so you can compress a contract or scan an ID in airplane mode and nothing leaves the device. No account, no upload, no server copy.",
  faq: [
    {
      q: "What makes a PDF tool 'privacy-first'?",
      a: "The file is processed on your device rather than uploaded to a server. There's no transmission, no remote copy, and no retention policy to rely on — because the document never leaves your hardware.",
    },
    {
      q: "Are the tools on this site privacy-first?",
      a: "Yes. Merge, split, compress, convert, rotate and extract all run in your browser on your device. Your files are not uploaded.",
    },
    {
      q: "How can I verify a tool isn't uploading my file?",
      a: "Load it, go offline, and try to use it. A genuine on-device tool keeps working; an upload tool can't, because it has nowhere to send the file.",
    },
    {
      q: "Which documents most need privacy-first handling?",
      a: "Anything sensitive: contracts, bank statements, tax forms, ID and passport scans, medical letters, signed agreements. For public files, an upload tool is fine.",
    },
    {
      q: "Does privacy-first mean weaker tools?",
      a: "No. On-device tools handle everyday PDF jobs well and are often faster, since there's no upload or download wait. Very large or specialised jobs are where the mobile app's hardware acceleration helps.",
    },
  ],
  related: [
    { label: "All free PDF tools — no upload, no account", path: "/pdf-tools" },
    { label: "Browser-based PDF tools vs upload tools", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "PDF Security — protect documents", path: "/pdf-security" },
    { label: "How to password protect a PDF file", path: "/guides/how-to-protect-pdf-file" },
  ],
  parentHub: { label: "PDF Security", path: "/pdf-security" },
};

export default content;
