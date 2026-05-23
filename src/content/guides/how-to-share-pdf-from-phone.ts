import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-from-phone",
  h1: "How to Share a PDF From Your Phone",
  description:
    "Share a PDF from iPhone or Android the right way — email, AirDrop, messaging or a link — and how to size and prep it so it actually arrives.",
  updated: "2026-05-23",
  intro: [
    "Sharing a PDF from a phone is a one-tap action right up until it isn't — the file's too big to email, the recipient can't open the link, or you realise too late you sent the version with a page that shouldn't have gone out. Getting it right is less about the share button and more about choosing the channel and prepping the file before you tap it.",
    "This guide covers the main ways to share from an iPhone or Android phone — email, AirDrop or Nearby Share, messaging apps, and cloud links — and when each is the right choice. It also covers the quick prep that stops a share from bouncing or embarrassing you.",
    "The whole point of a phone is sending things from wherever you are. A little care turns that from a hopeful tap into a document that reliably arrives, the right size, with nothing extra attached.",
  ],
  steps: [
    {
      title: "Prep the file before you share it",
      body: "Confirm it's the right version, drop any pages that shouldn't go out, and check it's a sensible size. Thirty seconds here prevents most sharing mishaps.",
    },
    {
      title: "Open the share sheet",
      body: "Tap Share on the PDF — from Files, your mail app, or the PDF Editor app. iOS and Android both surface every relevant destination from here.",
    },
    {
      title: "Email for formal documents",
      body: "Attach it to an email when there's a paper trail to keep — contracts, invoices, applications. Mind the ~25 MB limit; compress first if the file is heavy.",
    },
    {
      title: "AirDrop or Nearby Share for someone close by",
      body: "Sending to a device in the room? AirDrop (iPhone) or Nearby Share (Android) moves the file directly, fast, with no size limit and no internet needed.",
    },
    {
      title: "Messaging apps for quick, informal shares",
      body: "WhatsApp, Messages and the like are fine for casual sends, but some recompress or cap files. For anything that must arrive pristine, prefer email or a link.",
    },
    {
      title: "A cloud link for large or many-recipient shares",
      body: "For a big file or a wide audience, share a link from a cloud drive you control. It sidesteps size limits and lets you revoke access later.",
    },
  ],
  tips: [
    "Compress before sharing if the file is scan-heavy — a bounced email is a worse outcome than a slightly smaller file.",
    "Check the pages before you tap share. The most common regret is sending a version with an internal note or a page meant for someone else.",
    "AirDrop and Nearby Share are the unsung heroes for in-person sharing: instant, unlimited size, no internet, nothing uploaded.",
    "Messaging apps can silently recompress documents. For files where quality or fidelity matters, use email or a cloud link instead.",
    "For sensitive documents over a link, use a service you trust and turn off access once the recipient has the file.",
  ],
  mobileNote:
    "The PDF Editor app shares straight from the share sheet after you've prepped the file — compress, trim a page, sign — so the document that leaves your phone is the one you meant to send, at a size that arrives. Everything before the share happens on-device.",
  faq: [
    {
      q: "What's the best way to share a PDF from my phone?",
      a: "It depends on the recipient: email for formal documents, AirDrop or Nearby Share for someone nearby, messaging apps for quick informal sends, and a cloud link for large files or many recipients.",
    },
    {
      q: "Why won't my PDF send by email?",
      a: "It's likely over the ~25 MB attachment limit, usually because it's scan-heavy. Compress it first, or share a cloud link instead.",
    },
    {
      q: "Do messaging apps change my PDF?",
      a: "Some recompress or cap attachments, which can affect quality. For documents that must arrive exactly as sent, use email or a cloud link rather than a chat app.",
    },
    {
      q: "Is AirDrop or Nearby Share private?",
      a: "Yes — the file transfers directly between devices without going through a server or the internet, which makes it a good choice for sensitive documents shared in person.",
    },
    {
      q: "How do I avoid sharing the wrong pages?",
      a: "Review the document before tapping share, and remove any pages that shouldn't go out. See the guide on preparing a PDF before sharing for a full pre-send checklist.",
    },
  ],
  related: [
    { label: "PDF Editor — prep and share on mobile", path: "/pdf-editor" },
    { label: "How to prepare a PDF before sharing", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "How to send large PDF files", path: "/guides/how-to-send-large-pdf-files" },
    { label: "How to make a PDF smaller on Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
