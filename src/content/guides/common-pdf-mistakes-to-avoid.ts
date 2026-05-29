import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "common-pdf-mistakes-to-avoid",
  h1: "Common PDF Mistakes to Avoid",
  description:
    "The PDF mistakes that waste time or leak information — over-compressing, sending photos, uploading sensitive files, forgetting pages — and how to dodge them.",
  updated: "2026-05-23",
  intro: [
    "Most PDF problems aren't technical — they're avoidable habits. The file that bounced because nobody compressed it, the photo sent instead of a document, the contract uploaded to a random server, the page that shouldn't have gone out but did. Each is small, each is common, and each is easy to stop once you know to look for it.",
    "This guide collects the mistakes people make with PDFs most often, why each one bites, and the quick fix. Several of the fixes use the free, on-device tools on this site; all of them are habits more than features.",
    "Read it once and you'll catch yourself before the next avoidable mishap — which, with documents that travel to clients, colleagues and institutions, is worth more than it sounds.",
  ],
  steps: [
    {
      title: "Sending a photo instead of a document",
      body: "A JPG of a page is crooked, unsearchable and awkward to print or file. If it's a document, convert it to PDF first with the Image to PDF tool, or scan it properly — don't make the recipient deal with a snapshot.",
    },
    {
      title: "Uploading sensitive files to unknown tools",
      body: "Dropping a contract or ID into the first 'free online PDF' service uploads it to a stranger's server. Use on-device, browser-based tools for anything you'd mind being read.",
    },
    {
      title: "Over-compressing out of habit",
      body: "Cranking compression to maximum on every file degrades documents that didn't need it. Use the lightest level that meets your size target, and don't compress files that are already small.",
    },
    {
      title: "Forgetting to check the pages before sending",
      body: "Internal notes, a previous recipient's details, a blank scanner page — these ride along unnoticed. Review page by page, and drop what shouldn't go out with the Extract PDF Pages tool.",
    },
    {
      title: "Sending an editable file as 'final'",
      body: "A finished quote or contract sent as a Word doc can be edited — accidentally or not. Convert finals to PDF so the layout and numbers are fixed.",
    },
    {
      title: "Overwriting your only original",
      body: "Compression, conversion and editing are one-way for the copy you keep. Always save edited versions under a new name so the untouched original survives a mistake.",
    },
  ],
  tips: [
    "Treat 'is this a document or an image?' as the first question. Documents go as PDF; only actual pictures go as JPG.",
    "Privacy is a habit, not a setting. Default to on-device tools for sensitive files so you never have to remember to be careful.",
    "Compress with intent, not reflex — match the level to the purpose and skip compressing files that are already a sensible size.",
    "A ten-second page-by-page check before sending prevents the most embarrassing PDF mistakes there are.",
    "Keep originals. Almost every PDF operation is reversible only if you didn't overwrite the source.",
  ],
  mobileNote:
    "Many of these slips happen in the rush of sending something from a phone. The PDF Editor app lets you trim a stray page, compress sensibly, convert a photo and lock a final — all on-device — so a hurried share doesn't turn into a mistake you have to apologise for.",
  faq: [
    {
      q: "What's the most common PDF mistake?",
      a: "Sending a JPG photo when the recipient needed a document. It's crooked, unsearchable and hard to print or file. Converting the photo to a PDF first solves it.",
    },
    {
      q: "Why is uploading PDFs to free tools risky?",
      a: "Many 'online' tools upload your file to a server, so a contract or ID briefly lives on infrastructure you don't control. On-device, browser-based tools avoid that entirely.",
    },
    {
      q: "Is more compression always better?",
      a: "No. Over-compressing degrades documents that didn't need it and does nothing for files that are already small. Use the lightest level that hits your size target.",
    },
    {
      q: "How do I avoid sending the wrong pages?",
      a: "Review the document page by page before sending and remove anything that shouldn't go out with the Extract PDF Pages tool. Internal notes and stray pages are the usual culprits.",
    },
    {
      q: "Why shouldn't I overwrite the original file?",
      a: "Compression, conversion and edits are one-way for the copy you keep. Saving under a new name preserves the original so a mistake is easy to undo.",
    },
  ],
  related: [
    { label: "All free PDF tools", path: "/pdf-tools" },
    { label: "How to prepare a PDF before sharing", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Privacy-first PDF tools", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF vs JPG for documents", path: "/guides/pdf-vs-jpg-for-documents" },
  ],
  parentHub: { label: "All free PDF tools", path: "/pdf-tools" },
};

export default content;
