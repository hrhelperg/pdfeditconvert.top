import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "sign-pdf",
  hero: {
    eyebrow: "Sign PDF",
    h1: "Sign PDFs from your phone in seconds.",
    highlight: "seconds",
    lead: "Add a real handwritten signature, a typed name, or initials to any PDF. Place it, resize it, and export — without printing, scanning, or emailing yourself a file.",
    primaryCta: { label: "Open the app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Why printing and scanning is finally over",
    paragraphs: [
      "The old signing routine — print the PDF, sign it, scan it, email it back — has somehow survived into 2026. Most companies accept electronic signatures, but plenty of contracts still arrive with 'please sign and return' as if everyone owns a printer and a scanner.",
      "Public e-signature services solve part of this but introduce login friction, document upload, account management, and price tiers. For a single signature on a single document, that's overkill and adds latency you don't need.",
      "A native signing flow on your phone is the right size for the job: open the PDF, draw or type your signature, place it, send. The whole sequence takes under a minute and works without an account, on a plane, or in a parking lot.",
    ],
  },
  features: {
    heading: "Sign the way that fits the document",
    items: [
      {
        icon: "Pencil",
        title: "Handwritten signature",
        body: "Draw with your finger or a stylus. Save it once, reuse it on every future document.",
      },
      {
        icon: "Type",
        title: "Typed signature",
        body: "Type your name and pick a script-style font for clean, legible signatures.",
      },
      {
        icon: "User",
        title: "Initials stamp",
        body: "Save your initials separately for documents that need them on every page.",
      },
      {
        icon: "Calendar",
        title: "Date stamps",
        body: "One-tap date insertion alongside your signature when contracts ask for it.",
      },
      {
        icon: "Users",
        title: "Multi-signer workflow",
        body: "Pass a PDF between signers via the share sheet. Each signature stays in place.",
      },
      {
        icon: "ShieldCheck",
        title: "Export with audit info",
        body: "The signed copy includes a timestamp and signature metadata for record-keeping.",
      },
    ],
  },
  steps: {
    heading: "How to sign a PDF on your phone",
    items: [
      {
        title: "Open the PDF",
        body: "Import the document into the PDF Editor app from Files, email, or any sharing app.",
      },
      {
        title: "Tap the Sign tool",
        body: "Located in the editing toolbar. Pick handwritten, typed, or initials.",
      },
      {
        title: "Draw or type your signature",
        body: "First time only — the signature is saved for future use. Edit or replace it any time in Settings.",
      },
      {
        title: "Place and resize",
        body: "Drag the signature to the right spot. Resize with corner handles. Add a date stamp if needed.",
      },
      {
        title: "Export the signed copy",
        body: "Save back to the original or as a new copy. Share directly via Mail or any messaging app.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Signing without disrupting the day",
    body: "A signature is rarely the bottleneck — it's the time it takes to find a printer that is. Signing on a phone means contracts get back to the other side within the hour, not the day. Especially helpful for freelancers, small business owners, and anyone working away from a desk.",
  },
  faq: [
    {
      q: "Is an electronic signature legally valid?",
      a: "In most jurisdictions, yes — for most business documents. The EU's eIDAS regulation and the US ESIGN Act both recognize electronic signatures. For high-value or legally sensitive documents, check local rules and consider qualified electronic signatures.",
    },
    {
      q: "Will my signature be stored on a server?",
      a: "No. Saved signatures live on your device. They're applied to documents locally and never uploaded to our infrastructure.",
    },
    {
      q: "Can multiple people sign the same PDF?",
      a: "Yes. Pass the file between signers via the share sheet, AirDrop, email, or any messaging app. Each signature is added and saved in place.",
    },
    {
      q: "What if the PDF has signature fields?",
      a: "The app detects existing signature fields and lets you tap directly into them. Your signature snaps to the right size and position.",
    },
    {
      q: "Can I use this with Apple Pencil or S Pen?",
      a: "Yes. Both deliver smoother strokes than fingertip signing, which makes a real difference on contracts that go through visual review.",
    },
  ],
  related: [
    {
      label: "Step-by-step: how to sign a PDF on phone",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "Protect signed PDFs with a password", path: "/pdf-security" },
    { label: "Workflows for freelancers", path: "/use-cases/freelancers" },
  ],
  appCta: {
    heading: "Sign PDFs from anywhere.",
    sub: "Free on iOS and Android. No account required.",
  },
};

export default content;
