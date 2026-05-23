import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-large-pdf-files",
  h1: "How to Send Large PDF Files",
  description:
    "Five reliable ways to send a PDF that's too big to email — compress, split, cloud links and more — and how to choose between them.",
  updated: "2026-05-23",
  intro: [
    "Email is where large PDFs go to bounce. The limits are real and unforgiving — 25 MB on Gmail, around 20 MB on Outlook, sometimes less on the recipient's side — and a scan-heavy document blows past them easily. The fix isn't one trick; it's knowing the handful of reliable options and which one fits your file and your recipient.",
    "This guide lays out the practical routes, in roughly the order most people should try them: shrink it, split it, or share a link. Two of those use free in-browser tools that run on your device with nothing uploaded; the third is about choosing a sharing method that respects the document's sensitivity.",
    "The aim is a file that arrives intact and readable, without you mangling its quality or accidentally over-sharing through a service you don't trust.",
  ],
  steps: [
    {
      title: "First, try compressing it",
      body: "Run the file through the Compress PDF tool. Scans and image-heavy PDFs often drop under email limits in a single pass, which is the simplest possible fix.",
    },
    {
      title: "If still too big, split it",
      body: "Use the Split PDF tool to send the document as two or three smaller files. Two readable halves beat one file compressed into mush.",
    },
    {
      title: "For very large files, share a cloud link",
      body: "Upload to a cloud drive you control and send a link. This sidesteps email limits entirely and lets you revoke access later — but choose a service you trust for sensitive documents.",
    },
    {
      title: "Check the recipient's limit, not just yours",
      body: "Your provider might allow a 25 MB send while theirs rejects anything over 10 MB. When in doubt, aim small or use a link.",
    },
    {
      title: "Confirm what you're sending is right-sized and clean",
      body: "Whichever route you choose, open the final file first — correct pages, readable quality, nothing that shouldn't be there.",
    },
  ],
  tips: [
    "Work in order: compress, then split, then link. Each step is more effort than the last, so stop as soon as the file will send.",
    "A cloud link is usually the honest answer for genuinely huge files — but for confidential documents, pick a service you trust and revoke access when it's no longer needed.",
    "Compression rasterises pages and removes selectable text. If the recipient needs to copy text, send the original via a link rather than a heavily compressed attachment.",
    "Splitting along natural boundaries (chapters, sections, signed vs unsigned) is more useful to the recipient than splitting at an arbitrary page.",
    "Don't email sensitive documents to a free third-party 'large file' service you've never heard of just to beat a size limit — that trades a small inconvenience for a real privacy risk.",
  ],
  mobileNote:
    "When the oversized file is on your phone, the PDF Editor app compresses and splits offline and hands the result straight to your mail or messaging app — so you can get a big scan sent from wherever you are without uploading it to an unknown service first.",
  faq: [
    {
      q: "What's the easiest way to send a PDF that's too big?",
      a: "Compress it first. Scans and image-heavy PDFs frequently drop under email limits in one pass, which avoids splitting or links entirely.",
    },
    {
      q: "When should I split instead of compress?",
      a: "When compression alone can't get the file small enough without ruining quality. Two or three readable files are better than one degraded one.",
    },
    {
      q: "Are cloud links safe for sensitive documents?",
      a: "They can be, if you use a service you trust and revoke access when done. Avoid unknown free 'large file' services for anything confidential.",
    },
    {
      q: "How do I know the recipient can receive it?",
      a: "Their limit may be lower than yours. If you're unsure, compress well under 10 MB or send a link rather than risk a silent bounce.",
    },
    {
      q: "Will compressing for sending hurt the document?",
      a: "It's lossy and removes selectable text. For documents where quality or searchable text matters, share the original via a link instead of crushing it into an attachment.",
    },
  ],
  related: [
    { label: "Compress PDF — shrink to send", path: "/compress-pdf" },
    { label: "Split PDF — send it in parts", path: "/split-pdf" },
    { label: "How to reduce PDF file size for email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "How to share a PDF from your phone", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
