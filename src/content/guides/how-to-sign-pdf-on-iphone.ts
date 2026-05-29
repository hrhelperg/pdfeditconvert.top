import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-iphone",
  h1: "How to Sign a PDF on iPhone",
  description:
    "Sign a PDF on iPhone with Markup or the PDF Editor app. The native route's limits, and when a dedicated app is the better signing tool.",
  updated: "2026-05-23",
  intro: [
    "Signing a PDF on an iPhone is one of those tasks iOS almost handles for you. The built-in Markup tool can add a signature in a pinch, and for a quick, one-off signature it's genuinely fine. But the moment you're signing regularly — contracts, forms, agreements that come back week after week — its limits start to show, and a dedicated tool saves real time.",
    "This guide covers both routes. First the native Markup approach using the Files app, with an honest look at where it falls short. Then the PDF Editor app, which saves a reusable signature, detects signature fields, and keeps everything on-device.",
    "Electronic signatures are accepted for ordinary business documents in most places, so signing on your iPhone is rarely just a convenience — it's often perfectly sufficient on its own.",
  ],
  steps: [
    {
      title: "Quick route: open the PDF in Files",
      body: "Tap the PDF in the Files app to open it, then tap the Markup (pen tip) icon. This is iOS's built-in editor — handy for a one-off signature with nothing to install.",
    },
    {
      title: "Add a signature with Markup",
      body: "Tap the plus button, choose Signature, and draw one with your finger or save a new one. Place it on the page and resize it. Good enough for the occasional document.",
    },
    {
      title: "Know where Markup runs out",
      body: "Markup can't detect form signature fields, doesn't handle dates or initials cleanly, and re-drawing or re-finding your signature each time gets old. For frequent signing, move to a dedicated tool.",
    },
    {
      title: "Better route: open it in the PDF Editor app",
      body: "Import the PDF into the app from Files, Mail, or any share sheet. The Sign tool offers handwritten, typed, and initials options.",
    },
    {
      title: "Draw your signature once, reuse it forever",
      body: "Create your signature the first time — finger or Apple Pencil — and it's saved on your device for every future document. Signing then becomes open, tap, place, export.",
    },
    {
      title: "Place, date and export",
      body: "Drop the signature where it belongs, add a date stamp or initials if the document needs them, and export a signed copy. Save it as a new file so the unsigned original stays intact.",
    },
  ],
  tips: [
    "Use an Apple Pencil if you have one — the stroke is noticeably cleaner than a fingertip, which matters for client-facing contracts.",
    "Markup is the right tool for a true one-off. If you'll sign more than once a month, a saved, reusable signature pays for itself fast.",
    "Keep the unsigned original alongside the signed copy. If a counterparty wants a clean version or you need to re-sign with a correction, you'll have it.",
    "For a sensitive signed document, add a password before sharing — signing and protecting are separate steps.",
    "An electronic signature suits ordinary business documents, but high-value or regulated agreements may require a more formal qualified signature — check the rules for those.",
  ],
  mobileNote:
    "Signing on an iPhone means a contract goes back within the hour, often within minutes. The PDF Editor app keeps your saved signature on-device, detects existing signature fields, and never uploads the document — so even sensitive agreements stay private while you sign on the move.",
  faq: [
    {
      q: "Can I sign a PDF on iPhone without an app?",
      a: "Yes — open it in the Files app and use Markup to add a signature. That's ideal for a one-off. For regular signing, a dedicated tool with a saved, reusable signature is far quicker.",
    },
    {
      q: "What can't the built-in Markup tool do?",
      a: "It can't detect form signature fields, handles dates and initials awkwardly, and makes you re-place your signature each time. Those gaps are why frequent signers move to a dedicated app.",
    },
    {
      q: "Is an electronic signature on my iPhone legally valid?",
      a: "For ordinary business contracts in most jurisdictions, yes. High-value or regulated documents may require a more formal qualified signature — check the rules that apply to your case.",
    },
    {
      q: "Is my signed document uploaded anywhere?",
      a: "With the PDF Editor app, no — your saved signature and the document stay on your device. Nothing is sent to a server.",
    },
    {
      q: "How do I sign on Android instead?",
      a: "The workflow is similar but the native tools differ. See the dedicated guide on signing a PDF on Android.",
    },
  ],
  related: [
    { label: "Sign PDF — electronic signatures on mobile", path: "/sign-pdf" },
    { label: "How to sign a PDF on Android", path: "/guides/how-to-sign-pdf-on-android" },
    { label: "How to sign a PDF on your phone", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "How to edit a PDF on iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Sign PDF", path: "/sign-pdf" },
};

export default content;
