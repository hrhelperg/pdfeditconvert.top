import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-editor",
  hero: {
    eyebrow: "PDF Editor",
    h1: "Edit PDFs anywhere, on any phone.",
    highlight: "PDFs",
    lead: "Change text, swap images, rearrange pages and sign documents — directly on iPhone or Android. PDF Editor turns a phone into a real document editor instead of a viewer.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Why editing PDFs has always been painful",
    paragraphs: [
      "PDFs were designed to look identical everywhere — which is exactly what makes them hard to edit. Most apps on a phone only let you view or annotate them. The moment you need to fix a typo, replace a name, or move a page, you're sent back to a desktop or asked to upload your file to a random website.",
      "Those upload-and-pray websites are a privacy mess. They keep your file for hours, they're often slow, and you can't trust what they do with sensitive contracts, invoices, or IDs. The result: most people screenshot the part they want to fix, edit it as an image, and email a version that looks worse than the original.",
      "A native mobile editor solves this without compromises. Edits happen on-device. The original layout is preserved. You can email the result a minute after you started — without uploading anything to a stranger's server.",
    ],
  },
  features: {
    heading: "What you can actually do",
    items: [
      {
        icon: "Type",
        title: "Edit text in place",
        body: "Fix typos, swap names, change dates — without breaking the layout. Works on text-based PDFs.",
      },
      {
        icon: "ImagePlus",
        title: "Insert and replace images",
        body: "Drop in a new logo or photo. Resize and reposition without leaving the page.",
      },
      {
        icon: "Move",
        title: "Reorder pages",
        body: "Drag thumbnails to reorder. Delete pages, duplicate them, or insert a new blank.",
      },
      {
        icon: "Pencil",
        title: "Signatures and initials",
        body: "Add a real handwritten signature or a typed one. Place it anywhere with a single tap.",
      },
      {
        icon: "Highlighter",
        title: "Markup and highlights",
        body: "Highlight, underline, strike through. Add freehand notes or sticky comments.",
      },
      {
        icon: "FileText",
        title: "Fill in forms",
        body: "Tap fields to fill them in. Save the completed form as a new PDF.",
      },
    ],
  },
  steps: {
    heading: "How to edit a PDF on your phone",
    items: [
      {
        title: "Open the PDF Editor app",
        body: "Launch the app from your home screen. No account required to get started.",
      },
      {
        title: "Pick the PDF you want to edit",
        body: "Import from Files, iCloud Drive, Google Drive, or your email. Or just tap a PDF anywhere and pick PDF Editor as the opener.",
      },
      {
        title: "Tap the part you want to change",
        body: "Tap a paragraph to edit text, an image to replace it, or a page thumbnail to reorder.",
      },
      {
        title: "Make your changes",
        body: "Edits happen in real time on the page. Pinch to zoom for precision. Undo and redo work as expected.",
      },
      {
        title: "Save the result",
        body: "Save back over the original, save as a new copy, or share directly via Mail, AirDrop, or any messaging app.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Editing on the go",
    body: "Most PDF edits happen at the worst possible moment — five minutes before a meeting, on a train, between classes. A phone-first editor lets you fix that misspelled name on a contract while walking to the office, or stamp your signature on a quote during a coffee break. No laptop, no desktop, no waiting until you're home.",
  },
  faq: [
    {
      q: "Is the PDF Editor app free?",
      a: "Yes. Core editing — text, images, page reordering, signatures, and exports — is free. Some advanced features unlock with the Pro upgrade.",
    },
    {
      q: "Does it work offline?",
      a: "Yes. Editing happens entirely on-device. You only need a connection if you're pulling files from a cloud drive or sharing via online services.",
    },
    {
      q: "Can I edit scanned PDFs?",
      a: "Scanned PDFs are technically images. You can still annotate, sign, and rearrange pages. Editing the actual text requires OCR first, which the app can run on most documents.",
    },
    {
      q: "Are there file size limits?",
      a: "There's no artificial limit. Very large PDFs (hundreds of MB with complex graphics) may be slower on older phones, but the app is built to handle real-world documents.",
    },
    {
      q: "Will my changes break the original layout?",
      a: "No. Edits are made in place. Fonts, margins, and existing formatting stay intact for text-based PDFs.",
    },
    {
      q: "Can I export to Word?",
      a: "Yes. You can convert the edited PDF to Word or other formats from the same app.",
    },
  ],
  related: [
    {
      label: "How to edit a PDF on iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    {
      label: "How to edit a PDF on Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Sign PDF on phone", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Edit PDFs on your phone in seconds.",
    sub: "Free on iOS and Android. No account required to start.",
  },
};

export default content;
