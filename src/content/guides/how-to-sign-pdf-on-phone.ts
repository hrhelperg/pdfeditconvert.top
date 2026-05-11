import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-phone",
  h1: "How to Sign a PDF on Your Phone",
  description:
    "Add legal electronic signatures to PDFs from your iPhone or Android. Practical guide using the PDF Editor app.",
  updated: "2026-05-11",
  intro: [
    "Printing a PDF just to sign it and scan it back is an anachronism. Most jurisdictions accept electronic signatures for ordinary business contracts, and your phone is more than capable of producing one in seconds.",
    "This guide covers signing a PDF on iPhone or Android using the PDF Editor app. The signature you save is reusable for every future document — you only have to draw it once.",
  ],
  steps: [
    {
      title: "Open the PDF",
      body: "Import via Files, your email, or any sharing app.",
    },
    {
      title: "Tap the Sign tool",
      body: "Found in the editing toolbar. Pick handwritten signature, typed signature, or initials.",
    },
    {
      title: "Draw or type your signature",
      body: "First time only. Use your finger or a stylus. Save it so you don't have to repeat the step.",
    },
    {
      title: "Place the signature",
      body: "Drag it to the right spot. Resize with corner handles. Add a date stamp if needed.",
    },
    {
      title: "Export the signed copy",
      body: "Save as a new file (keep the original unsigned) or overwrite. Share via email or any app.",
    },
  ],
  tips: [
    "A stylus produces a much cleaner signature than a fingertip — worth it for contracts that go through visual review.",
    "Saved signatures live on your device, never on a server.",
    "Use a typed signature for routine acknowledgments, a handwritten one for contracts.",
  ],
  mobileNote:
    "Signing on a phone means contracts get back to the other side within the hour — particularly useful when working away from a desk.",
  faq: [
    {
      q: "Is an electronic signature legally valid?",
      a: "In most jurisdictions, yes, for ordinary business documents. Check local rules for high-value or regulated contracts.",
    },
    {
      q: "Can multiple people sign the same PDF?",
      a: "Yes. Pass the file between signers via the share sheet, AirDrop, or email — each signature is added in place.",
    },
  ],
  related: [
    { label: "Sign PDF — full overview", path: "/sign-pdf" },
    { label: "Protect signed PDFs", path: "/pdf-security" },
    {
      label: "How to edit a PDF on iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "Sign PDF", path: "/sign-pdf" },
};

export default content;
