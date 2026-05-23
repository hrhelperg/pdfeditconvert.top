import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdfs-on-phone",
  h1: "How to Manage PDFs on Your Phone",
  description:
    "Keep phone PDFs from becoming a mess: rename, organise into folders, sync to the cloud and free up storage. A practical maintenance routine.",
  updated: "2026-05-23",
  intro: [
    "PDFs accumulate on a phone faster than anywhere else. Email attachments, scans, downloads, converted photos — they pile up in Downloads or the Files app with names like \"Document(3).pdf\" until you can't find the one you need when you need it. Managing them isn't glamorous, but ten minutes of routine saves an hour of frantic searching later.",
    "This guide is a practical maintenance routine for the PDFs on your iPhone or Android phone: naming them so they're findable, organising them into folders that make sense, syncing the important ones, and clearing out the storage hogs. It leans on your phone's Files app plus the PDF Editor app for the document work.",
    "The goal is a phone where you can put your hand on any document in seconds, and where storage isn't quietly disappearing into forgotten 40 MB scans.",
  ],
  steps: [
    {
      title: "Rename files as they arrive",
      body: "The moment you save a PDF, give it a real name — \"Lease-signed-2026-05.pdf\", not \"scan_0007.pdf\". A descriptive name is what makes a file findable weeks later.",
    },
    {
      title: "Set up a few sensible folders",
      body: "In the Files app, create folders that match how you think — Receipts, Contracts, Forms, Work. A handful of clear folders beats one giant pile.",
    },
    {
      title: "Sync the important ones to the cloud",
      body: "Move documents you can't afford to lose into iCloud Drive, Google Drive or OneDrive so they survive a lost or replaced phone — and open on your other devices.",
    },
    {
      title: "Trim and tidy the documents themselves",
      body: "Use the PDF Editor app to merge related files, drop blank pages, and fix sideways scans, so each stored document is clean rather than a raw dump.",
    },
    {
      title: "Compress the storage hogs",
      body: "Big scans eat space. Compress the ones you're keeping but don't need at full resolution, and your storage stops mysteriously filling up.",
    },
    {
      title: "Clear out what you no longer need",
      body: "Delete duplicates and one-off files you've already sent. Empty the Recently Deleted folder periodically so freed space actually returns.",
    },
  ],
  tips: [
    "Rename on arrival, not 'later'. Later never comes, and a folder of \"Document(n).pdf\" is the result.",
    "Pick one naming pattern — \"Type-Who-Date\" works well — and your files sort and search themselves.",
    "Sync anything you'd be upset to lose. A phone is far easier to lose than a cloud account, and synced files open on your laptop too.",
    "Compressing kept-but-rarely-opened scans reclaims more storage than deleting small files ever will.",
    "A quick monthly tidy beats an annual archaeology dig. Ten minutes regularly keeps the pile from becoming a project.",
  ],
  mobileNote:
    "The PDF Editor app is the document side of phone PDF management: merge, trim, rotate, compress and rename in one place, offline, before filing things away. Pair it with your Files app for folders and cloud sync, and the pile stays under control.",
  faq: [
    {
      q: "Where do PDFs live on my phone?",
      a: "On iPhone, in the Files app (often in Downloads or iCloud Drive); on Android, usually in Downloads via the Files app. Creating folders in either keeps them organised.",
    },
    {
      q: "How should I name my PDF files?",
      a: "Use a consistent, descriptive pattern with a date, like \"Type-Who-Date.pdf\". Doing it as files arrive is what keeps them findable later.",
    },
    {
      q: "How do I stop PDFs eating my storage?",
      a: "Compress large scans you're keeping, delete duplicates and already-sent one-offs, and clear the Recently Deleted folder so space is actually reclaimed.",
    },
    {
      q: "Should I keep PDFs in the cloud or on the device?",
      a: "Keep important ones in the cloud so they survive a lost phone and sync to your other devices. Device-only storage is fine for transient files you'll soon delete.",
    },
    {
      q: "Can I organise the documents themselves, not just the files?",
      a: "Yes. The PDF Editor app merges, trims and fixes documents so what you store is clean — see the guide on organising PDF files for the full workflow.",
    },
  ],
  related: [
    { label: "All free PDF tools", path: "/pdf-tools" },
    { label: "How to organize PDF files", path: "/guides/how-to-organize-pdf-files" },
    { label: "How to make a PDF smaller on iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "How to share a PDF from your phone", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
