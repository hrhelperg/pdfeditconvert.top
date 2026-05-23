import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "browser-based-pdf-tools-vs-upload-tools",
  h1: "Browser-Based PDF Tools vs Upload Tools",
  description:
    "Not all 'online' PDF tools are the same. The difference between tools that run in your browser and ones that upload your file — and how to tell.",
  updated: "2026-05-23",
  intro: [
    "Two PDF tools can look identical — same web page, same drag-and-drop box, same download button — and do something completely different with your file. One processes it right inside your browser, on your own device. The other uploads it to a server, does the work there, and sends the result back. From the outside you often can't tell, but for anything sensitive the difference is the whole ballgame.",
    "This guide explains that distinction, why it matters, and how to tell which kind you're using. The tools on this site are the first kind: they run in your browser and your file never leaves your device. Plenty of popular 'online PDF' services are the second kind, even when they don't make that obvious.",
    "It's not that upload tools are useless — it's that you should know which you're handing your document to, and choose deliberately.",
  ],
  steps: [
    {
      title: "Know what 'browser-based' really means",
      body: "A true browser-based tool does the processing in the page itself using your device's processor. Your file is read locally and never transmitted — the work happens where the file already is.",
    },
    {
      title: "Know what an upload tool does",
      body: "An upload tool sends your file to a remote server, processes it there, and returns the result. Your document briefly lives on someone else's infrastructure, subject to their retention and privacy policies.",
    },
    {
      title: "Watch for the tells",
      body: "An upload tool usually shows a progress bar that depends on your internet speed, may fail offline, and often mentions files being 'deleted after an hour' — a phrase that only makes sense if they had your file in the first place.",
    },
    {
      title: "Test it offline",
      body: "Load the tool, then switch off your connection and try to use it. A genuine browser-based tool keeps working; an upload tool can't, because it has nowhere to send the file.",
    },
    {
      title: "Match the choice to the document",
      body: "For public, non-sensitive files, either kind is fine. For contracts, IDs, statements and client work, choose a browser-based tool so the document never leaves your device.",
    },
    {
      title: "Use on-device tools for the sensitive jobs",
      body: "The tools on this site — merge, split, compress, convert, rotate and the rest — run in your browser. Reach for them when privacy actually matters.",
    },
  ],
  tips: [
    "'Online' doesn't tell you whether a file is uploaded. The real question is where the processing happens — your device, or their server.",
    "The offline test is the most reliable check: a browser-based tool still works with your connection off, an upload tool doesn't.",
    "'We delete your files after an hour' is reassuring only if you wanted them uploaded at all. A tool that never uploads has nothing to delete.",
    "Speed is a hint: browser-based tools have no upload or download wait, so large files are often faster locally than round-tripping to a server.",
    "Upload tools aren't evil — for a public flyer it's fine. Just don't hand them a contract or an ID without thinking about it.",
  ],
  mobileNote:
    "On mobile, an upload tool also burns your data and stalls on a weak connection. The PDF Editor app processes everything on-device and works fully offline — so you can merge or compress a sensitive document on a train with no signal and nothing leaving your phone.",
  faq: [
    {
      q: "Are all online PDF tools the same?",
      a: "No. Some process your file in the browser on your device; others upload it to a server. They can look identical, so the difference is easy to miss — but it determines whether your document leaves your device.",
    },
    {
      q: "How can I tell if a tool uploads my file?",
      a: "Try it offline. A browser-based tool keeps working with your connection off; an upload tool can't, since it has nowhere to send the file. Upload tools also tend to show network-dependent progress bars.",
    },
    {
      q: "Are the tools on this site browser-based?",
      a: "Yes. Merge, split, compress, convert, rotate and the others run in your browser using your device's processor. Your files are never uploaded.",
    },
    {
      q: "Is it ever fine to use an upload tool?",
      a: "For public, non-sensitive documents, yes. The caution applies to contracts, IDs, financial statements and client work, where a browser-based tool keeps the file on your device.",
    },
    {
      q: "Why are browser-based tools sometimes faster?",
      a: "There's no upload or download wait. The file is already on your device, so for large documents local processing often beats round-tripping to a server.",
    },
  ],
  related: [
    { label: "All free PDF tools — browser-based, no upload", path: "/pdf-tools" },
    { label: "Privacy-first PDF tools", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF apps vs online PDF tools", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "How to compress a PDF online without uploading", path: "/guides/how-to-compress-pdf-online" },
  ],
  parentHub: { label: "All free PDF tools", path: "/pdf-tools" },
};

export default content;
