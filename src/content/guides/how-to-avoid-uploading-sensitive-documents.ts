import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-avoid-uploading-sensitive-documents",
  h1: "How to Avoid Uploading Sensitive Documents (Practical Alternatives)",
  description:
    "When a workflow tempts you to upload a sensitive PDF, there's almost always a local-only alternative. The categories of task and the no-upload tool for each.",
  updated: "2026-05-29",
  intro: [
    "Every PDF task has a moment where the first link in a search result wants you to upload your file. Compress, merge, split, convert, sign — every one of them comes with hundreds of websites built around the upload-and-process model. For ordinary files it's fine. For sensitive ones (financial records, identity documents, contracts, medical files) it's an avoidable risk.",
    "Avoiding uploads doesn't mean avoiding modern tools. It means picking tools that run on your device — in your browser, in a mobile app, on your desktop. Every common PDF task has at least one local-only option that does the job without the file ever touching a third-party server.",
    "This guide is the practical replacement: the categories of task, the local-only tool for each, and the small set of cases where local processing genuinely doesn't yet cover the need.",
  ],
  steps: [
    {
      title: "For compression, use a browser-based compressor",
      body: "Compress PDF in this site's toolset runs locally. It handles the typical scan-heavy or photo-heavy file without uploading. Verify with devtools — no large outbound request when you add the file.",
    },
    {
      title: "For merging, use a browser-based merger",
      body: "Merge PDF combines files locally. The combined file is written back to your downloads; no copy lives on a server. Same architecture as compression — local-first.",
    },
    {
      title: "For splitting and extracting, use a browser-based splitter",
      body: "Split PDF and Extract PDF Pages run on your device. Page-level operations are mechanical and fit local processing perfectly.",
    },
    {
      title: "For conversion, use a browser-based converter",
      body: "PDF to Word, Word to PDF, Image to PDF, PDF to Images — all available as browser-based versions that don't upload. The conversion happens in your browser tab.",
    },
    {
      title: "For signing, use a local signing app",
      body: "Sign PDF in browser or the PDF Editor app on phone. Drawn signature, no cloud signing platform involved. The signed file stays on your device until you choose to share it.",
    },
    {
      title: "For tasks that truly need server help, use a paid tool with explicit guarantees",
      body: "Some workflows (heavy OCR on long documents, advanced redaction) still benefit from server processing. For those, choose a paid tool with explicit retention and data-handling commitments — not a free tool with vague language.",
    },
  ],
  tips: [
    "Search results favor tools that pay for placement. The first result is rarely the most private; check what you're actually getting.",
    "Local-only tools work offline. Trying the tool offline is a quick verification that it doesn't need network access for your file.",
    "Don't fall for tools that 'don't store your file' but still require an upload to process. The brief retention window is still a real exposure for highly sensitive material.",
    "Mobile apps that process locally are usually obvious — they work without internet after install. The PDF Editor app fits that pattern.",
    "Build the habit. Once you default to local-only tools, sensitive material stays safer without you thinking about it each time.",
  ],
  mobileNote:
    "On a phone the temptation is to use whichever PDF tool the App Store recommends — many of which upload. The PDF Editor app processes everything on-device on iOS and Android, so a sensitive document can move from camera capture to signed deliverable without touching a server.",
  faq: [
    {
      q: "Can I really do all common PDF tasks without uploading?",
      a: "Yes, for the everyday tasks: compress, merge, split, convert, sign, watermark, reorder, extract. The tools on this site cover these locally. Some advanced operations (full OCR on long docs) sometimes still need server help.",
    },
    {
      q: "How do I verify a tool doesn't upload?",
      a: "Browser devtools, network tab, drop in a file. If you see a large outbound POST, it's uploading. If not, it's local. The difference is visible.",
    },
    {
      q: "Are local tools slower?",
      a: "Sometimes. Modern WebAssembly makes local processing competitive with server processing for most tasks. Heavy operations on large files may take longer locally, but the privacy trade-off is usually worth it for sensitive material.",
    },
    {
      q: "What about OCR — can that run locally?",
      a: "Lightweight OCR yes; high-accuracy OCR on long documents often still uses server processing. If OCR matters, choose tools that explicitly state where the processing happens.",
    },
    {
      q: "Is this paranoid?",
      a: "Not for sensitive material. The default-everything-uploads model worked when documents were less sensitive and breaches rarer. Both have changed. Local-first is a sensible baseline now.",
    },
  ],
  related: [
    {
      label: "PDF apps vs online PDF tools",
      path: "/compare/pdf-app-vs-online-pdf-tools",
    },
    { label: "PDF Security — password protect and encrypt", path: "/pdf-security" },
    { label: "How to protect sensitive PDF files", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "How to share PDF files privately", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Privacy-first document workflows", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "PDF Security — password protect and encrypt", path: "/pdf-security" },
};

export default content;
