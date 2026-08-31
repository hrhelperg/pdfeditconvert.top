import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "Merge PDF",
    h1: "Combine PDFs into one tidy document.",
    highlight: "tidy",
    lead: "Combine scans, quotes, invoices, and one-off pages into a single file your customers, accountants, and lawyers can actually open without juggling attachments.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Why people end up with five attachments",
    paragraphs: [
      "Scanned documents arrive page by page. Quotes come from one tool, contracts from another, attachments from email. The result: a folder of related PDFs that no recipient wants to download individually, and an email that hits the attachment limit.",
      "The familiar workaround is screenshots in a slide deck, or a zip file, or simply forwarding five separate emails. None of them is great. Zips get blocked. Slides drop fidelity. Recipients miss the third attachment.",
      "Merging the relevant pages into one PDF — in the right order, with a cover page if needed — is faster for you to send and faster for the recipient to read. It also keeps the audit trail clean: one document, one signature, one filename.",
    ],
  },
  features: {
    heading: "Merge the way you actually need to",
    items: [
      {
        icon: "GripVertical",
        title: "Drag to reorder",
        body: "Long-press any page in the queue and drop it into the right spot before merging.",
      },
      {
        icon: "Camera",
        title: "Add scans and photos",
        body: "Insert a quick phone scan or a photo from your camera roll directly into the merged document.",
      },
      {
        icon: "FileCheck",
        title: "Add a cover page",
        body: "Generate a simple cover with title, date, and a one-line summary if the result needs framing.",
      },
      {
        icon: "RotateCw",
        title: "Rotate as you merge",
        body: "Fix landscape-orientation pages without exporting and re-importing.",
      },
      {
        icon: "Bookmark",
        title: "Bookmark merged sections",
        body: "Each source file becomes a bookmark so readers can jump straight to the section they need.",
      },
      {
        icon: "Layers",
        title: "Save as a single PDF",
        body: "One file, sensible filename, ready for email, signature, or cloud upload.",
      },
    ],
  },
  steps: {
    heading: "How to merge PDFs on your phone",
    items: [
      {
        title: "Open the PDF Editor app",
        body: "Tap the Merge tile on the home screen.",
      },
      {
        title: "Add your PDFs",
        body: "Import each PDF from Files, iCloud Drive, Google Drive, or via the share sheet from any app.",
      },
      {
        title: "Reorder if needed",
        body: "Drag files into the order you want them in the final document.",
      },
      {
        title: "(Optional) Add a cover page",
        body: "Tap Add Cover to insert a simple title page with date and headline.",
      },
      {
        title: "Tap Merge",
        body: "The app combines everything into a single PDF and shows it for review.",
      },
      {
        title: "Save or share",
        body: "Save to Files, sync to a cloud drive, or share directly via Mail, AirDrop, or messaging apps.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Merging while waiting in line",
    body: "Most merges are reactive: a customer asks for everything in one file, an accountant needs the quote and invoice together, a school asks for transcript pages bundled. None of those are 'sit down at a laptop' jobs. They're three taps on a phone, between meetings.",
  },
  faq: [
    {
      q: "Is there a limit on how many files I can merge?",
      a: "No artificial limit. Very large merges (50+ files) may take longer on older phones, but the app handles real-world batches without trouble.",
    },
    {
      q: "Can I merge password-protected PDFs?",
      a: "Yes, as long as you can open each file. Enter the password when prompted; the merged output can be re-protected if needed.",
    },
    {
      q: "What about mixing scans and digital PDFs?",
      a: "Works seamlessly. Scanned and digital pages live side by side in the same file. You can run OCR on the scanned sections after merging.",
    },
    {
      q: "Will the original formatting change?",
      a: "No. Each source page is preserved exactly. Only the page order and the wrapping document change.",
    },
    {
      q: "Can I unmerge or split it back later?",
      a: "Yes. The Split PDF feature breaks any PDF — merged or original — back into individual pages or ranges.",
    },
  ],
  related: [
    {
      label: "Full step-by-step: how to merge PDFs",
      path: "/guides/how-to-merge-pdf-files",
    },
    { label: "Split PDF — the reverse operation", path: "/split-pdf" },
    { label: "Edit a merged PDF", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Combine your PDFs in seconds.",
    sub: "Free on iOS and Android. No upload required.",
  },
};

export default content;
