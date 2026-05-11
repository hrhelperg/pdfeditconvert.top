import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-phone",
  h1: "How to Sign a PDF on Your Phone",
  description:
    "Add legal electronic signatures to PDFs from your iPhone or Android. Practical guide using the PDF Editor app.",
  updated: "2026-05-11",
  intro: [
    "Printing a PDF just to sign it and scan it back is an anachronism. Most jurisdictions accept electronic signatures for ordinary business contracts, NDAs, quotes, and acknowledgments. Your phone is more than capable of producing a clean, legally usable signature in under a minute.",
    "This guide covers signing a PDF on iPhone or Android using the PDF Editor app. The signature you save is reusable for every future document — you draw it once. After that, signing any contract is a four-tap operation: open, tap Sign, place, export.",
    "We'll also cover the cases where signing on a phone is *better* than at a desk: contracts that need to go back fast, signing while travelling, and multi-signer flows that bounce between phones. By the end you'll have a saved signature ready for every future document.",
  ],
  steps: [
    {
      title: "Open the PDF",
      body: "Import the document into the PDF Editor app via Files, your cloud drive, email, or any sharing app. The signature workflow works regardless of where the PDF came from.",
    },
    {
      title: "Tap the Sign tool",
      body: "Found in the editing toolbar. Pick handwritten signature, typed signature, or initials. The tool detects existing signature fields automatically if the PDF was designed for signing.",
    },
    {
      title: "Draw or type your signature",
      body: "First time only. Use your finger, an Apple Pencil, or an S Pen. The result is saved to your device. You can edit or replace it any time from Settings.",
    },
    {
      title: "Place the signature",
      body: "Drag it to the right spot on the page. Resize with the corner handles. The signature becomes a regular PDF object, so you can move it after placement.",
    },
    {
      title: "Add date and initials if needed",
      body: "Many contracts ask for date next to signature and initials on each page. One-tap date stamps and a saved initials variant cover both cases.",
    },
    {
      title: "Export the signed copy",
      body: "Save as a new file (recommended — keep the unsigned original) or overwrite. The exported PDF includes signature metadata for record-keeping. Share via email, AirDrop, Drive, or any messaging app.",
    },
  ],
  tips: [
    "Use a stylus instead of a finger when the document is going through visual review. The cleaner stroke makes a real difference for client-facing contracts.",
    "Save your signature once and reuse it on every future document — the app stores it locally on your device, never uploaded.",
    "Use a typed signature for routine internal acknowledgments and a handwritten one for external contracts.",
    "Apply a password to particularly sensitive signed documents before sharing — the Protect tool runs after signing.",
    "Keep the unsigned original PDF in a folder alongside the signed version. If a counterparty asks for a 'clean' copy or you need to re-sign with corrections, you'll have it.",
  ],
  mobileNote:
    "Signing on a phone means contracts get back to the other side within the hour — sometimes within minutes. That speed advantage matters disproportionately when you're working away from a desk: at a customer site, between meetings, or in transit. The whole flow from receiving a contract to sending it back signed fits easily into a coffee break.",
  faq: [
    {
      q: "Is an electronic signature legally valid?",
      a: "In most jurisdictions, yes, for ordinary business contracts. The EU's eIDAS regulation and the US ESIGN Act both recognize standard electronic signatures. For high-value or legally regulated documents, check local rules — qualified electronic signatures may be required, which is a different (more formal) process.",
    },
    {
      q: "Can multiple people sign the same PDF?",
      a: "Yes. Pass the file between signers via the share sheet, AirDrop, email, or any messaging app. Each signature is added in place and the previous signatures stay intact. The final file shows everyone's signature in the correct positions.",
    },
    {
      q: "Will the signature look smooth on a phone screen?",
      a: "On modern phones, yes. A stylus produces noticeably smoother strokes than a fingertip, which matters for contracts that go through visual review. For routine acknowledgments, fingertip signing is perfectly acceptable.",
    },
    {
      q: "Is my signature stored on a server somewhere?",
      a: "No. Saved signatures live on your device only. They're applied to documents locally and never uploaded to our infrastructure or any third party.",
    },
    {
      q: "What if the PDF has existing signature fields?",
      a: "The app detects existing form-style signature fields and lets you tap directly into them. Your signature snaps to the right size and position automatically — no manual resizing needed.",
    },
  ],
  related: [
    { label: "Sign PDF — full overview", path: "/sign-pdf" },
    {
      label: "Protect signed PDFs with a password",
      path: "/guides/how-to-protect-pdf-file",
    },
    {
      label: "How to edit a PDF on iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "Sign PDF", path: "/sign-pdf" },
};

export default content;
