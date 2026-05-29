import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-contracts-as-pdf",
  h1: "How to Send Contracts as PDF (Sign, Lock, Deliver)",
  description:
    "Contracts demand a tighter PDF workflow: locking content, applying signatures, watermarking drafts, and getting a final file the other party can countersign without back-and-forth.",
  updated: "2026-05-29",
  intro: [
    "Contracts are the document type where PDF mishandling causes the most damage. A signed copy that's a different version from the unsigned draft. A countersignature applied to a file the first signer thought was locked. A draft watermark forgotten on the final. None of it is exotic; all of it gets people into real disputes.",
    "The cure is a tighter workflow around three things: locking the content before signature, applying signatures in a clear order, and shipping the result as a definitive final file. None of it requires expensive contract software; it requires deliberate use of the basic PDF tools and an honest sequence.",
    "This guide walks the workflow as it should run — from the final draft through both parties' signatures to a clean countersigned PDF the lawyer is happy with. It also covers what to do when the other side wants to use their own signing platform.",
  ],
  steps: [
    {
      title: "Finalize the contract content first",
      body: "All negotiation goes back to source — Word, Pages, Docs. Don't redline in the PDF. Only export to PDF when both sides have agreed the text is locked.",
    },
    {
      title: "Strip drafts and watermark",
      body: "Remove DRAFT watermarks (Add Watermark to PDF lets you avoid adding one in the first place on the final). The final PDF should look final.",
    },
    {
      title: "Add your signature first",
      body: "Sign PDF lets you add a typed or drawn signature in the right spot. Sign first if you're the originator; the other party countersigns the PDF that already has your signature.",
    },
    {
      title: "Lock the file before sending",
      body: "If your tool supports it, apply edit restrictions after signing. The other party can read and sign but can't alter the content. This is the only way to confidently freeze a contract.",
    },
    {
      title: "Send with clear instructions",
      body: "A short cover note: 'Attached: signed contract. Please countersign on page 8 and return.' One sentence saves a round-trip of questions.",
    },
    {
      title: "Receive the countersigned file and archive both",
      body: "When the countersigned PDF arrives, save it as the canonical version. Keep the unsigned draft, your singly-signed copy, and the fully-signed copy in the same folder. The version chain is the audit trail.",
    },
  ],
  tips: [
    "Don't use the original signing PDF for a second contract. Always start a fresh export for each new contract — pristine metadata, pristine signatures.",
    "If the other side wants to use their signing platform (DocuSign, Adobe Sign, others), defer to theirs. It's not worth a battle over which tool is cleaner.",
    "Make sure your signature is visually distinctive. A typed name in italics is a signature but feels less deliberate than a drawn one.",
    "Cover sheets that list the contract title, date and counterparties make later retrieval much easier than relying on filename alone.",
    "Watermark drafts (DRAFT, NOT FOR SIGNATURE) during negotiation. The visible label prevents accidental countersign.",
  ],
  mobileNote:
    "Countersignatures often happen on a phone — a partner reviewing on the train, a client signing between meetings. The PDF Editor app does this well: review the contract, sign with a finger on screen, send back without bouncing through a desktop. The signed file leaves the phone as a clean PDF.",
  faq: [
    {
      q: "Is a typed signature on a PDF legally binding?",
      a: "In most jurisdictions, yes, for ordinary contracts. Some specific use cases (notarized deeds, certain financial instruments) need more — check the contract type before assuming.",
    },
    {
      q: "Should the contract be password-protected?",
      a: "Usually no. Passwords add friction without much security benefit. Save passwords for highly confidential exhibits, not the contract itself.",
    },
    {
      q: "How do I lock a PDF after signing?",
      a: "Many editing tools, including the PDF Editor app, let you apply edit restrictions during the signing process. Lock after final signature, not during negotiation.",
    },
    {
      q: "What if the other party edits the PDF after I sign?",
      a: "Lock the file before sending and the alterations would be detectable. Even without locking, the signed PDF is the version of record; subsequent edits invalidate the signature.",
    },
    {
      q: "Should I always sign first?",
      a: "If you're the originator, yes — it signals you're committed. If you're countersigning, sign the file the other party sent rather than starting fresh.",
    },
  ],
  related: [
    { label: "Sign PDF — add electronic signatures", path: "/sign-pdf" },
    { label: "Add Watermark to PDF — label drafts clearly", path: "/add-watermark-to-pdf" },
    { label: "How to share PDFs with clients", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "PDF workflows for small business", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Sign PDF — electronic signatures on mobile", path: "/sign-pdf" },
};

export default content;
