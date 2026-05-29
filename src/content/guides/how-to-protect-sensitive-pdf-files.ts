import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-sensitive-pdf-files",
  h1: "How to Protect Sensitive PDF Files (Storage, Sharing, Lifecycle)",
  description:
    "Sensitive PDFs need protection at three points: while stored, while shared, and after the recipient is done with them. A practical workflow that covers all three.",
  updated: "2026-05-29",
  intro: [
    "Sensitive PDFs — contracts, financial records, identity documents, medical files — need protection at three distinct points in their life: while they sit on your device or drive (storage), while they move between you and the recipient (sharing), and after the recipient has used them (lifecycle). Most people focus on sharing and ignore the other two.",
    "A sensible workflow handles all three. Storage means encrypted drives or password-protected files in untrusted locations. Sharing means choosing a channel that doesn't leak, not just uploading to whatever appears first in a search. Lifecycle means thinking about what happens to the file after — both your retention and the recipient's.",
    "This guide walks each of the three. None of it is enterprise-grade; it's the realistic baseline for an individual or small team that handles sensitive material occasionally and doesn't want to deploy a SOC2 stack to do it.",
  ],
  steps: [
    {
      title: "Storage: keep sensitive PDFs on encrypted storage",
      body: "macOS FileVault, Windows BitLocker, full-disk encryption on Linux phones. These cover your local drive. For external drives, use encrypted formats. Backups should also be encrypted — sync to cloud services that support zero-knowledge encryption or encrypt the file first.",
    },
    {
      title: "Password-protect individual sensitive PDFs",
      body: "PDF password protection adds a second layer. The file is safe even if the disk encryption fails or someone gets a copy of the file in transit. Use strong, unique passwords; share them through a different channel than the file.",
    },
    {
      title: "Sharing: pick the right channel by sensitivity",
      body: "Casual email is fine for low-sensitivity files. End-to-end-encrypted messaging (Signal, secure email) for medium. For high-sensitivity, paid services with explicit data-handling commitments. Avoid uploading sensitive PDFs to free third-party 'tools'.",
    },
    {
      title: "Pre-process locally before sending",
      body: "If you need to compress, redact or rearrange a sensitive PDF before sending, use browser-based tools that process locally — your file doesn't pass through anyone else's server. Compress PDF, Extract PDF Pages, Reorder PDF Pages all run on your device.",
    },
    {
      title: "Lifecycle: think about retention and deletion",
      body: "You keep sensitive PDFs only as long as you need them. The recipient should too. Consider asking the recipient to confirm deletion after they've used the file, especially for one-time-use identity documents.",
    },
    {
      title: "Strip metadata before sending",
      body: "PDFs often carry author names, original filenames, edit history. Re-exporting from a clean source strips most of this. The PDF Editor app and other tools also let you scrub metadata explicitly.",
    },
  ],
  tips: [
    "Don't email a password in the same message as the password-protected file. Send the file in one channel, the password in another.",
    "Treat scans of identity documents as one-time-use. Once the recipient has them, ask them to delete unless they have a regulatory reason to retain.",
    "Don't reuse passwords across sensitive PDFs. If one leaks, others stay protected.",
    "Avoid public Wi-Fi for sending sensitive files. Use a hotspot or wait for trusted network.",
    "Audit your sensitive PDFs once a year. Most of them aren't needed anymore — securely delete and reduce the surface.",
  ],
  mobileNote:
    "Phones now hold and send many sensitive PDFs (signed contracts, ID scans). The PDF Editor app processes them locally on the device — compression, signing, password-protection — so the sensitive material never has to leave the phone to be prepared for sending.",
  faq: [
    {
      q: "Is PDF password protection actually strong?",
      a: "Modern AES encryption on PDFs is strong. The weak point is usually the password itself — a weak password is the only easy way in. Use long, unique passwords.",
    },
    {
      q: "Should I always encrypt sensitive PDFs?",
      a: "Yes, both at rest and in transit. Disk encryption protects at rest; PDF passwords or encrypted channels protect in transit.",
    },
    {
      q: "What about cloud storage for sensitive PDFs?",
      a: "Acceptable with zero-knowledge encryption (the provider can't read your files) or with client-side encryption (you encrypt before upload). Plain cloud storage is acceptable for ordinary files, not for highly sensitive ones.",
    },
    {
      q: "How do I redact sensitive parts of a PDF?",
      a: "True redaction is rendering text as image and replacing it. The PDF Editor app supports this. Black-box overlays alone don't redact — the underlying text is still extractable.",
    },
    {
      q: "Can I securely delete a PDF?",
      a: "On SSDs, secure deletion is less straightforward than on spinning disks. Move the file to encrypted storage, then delete and let the disk's TRIM clear sectors. For very high sensitivity, full-disk encryption from the start is the right approach.",
    },
  ],
  related: [
    { label: "PDF Security — password-protect PDFs", path: "/pdf-security" },
    { label: "How to password protect a PDF file", path: "/guides/how-to-protect-pdf-file" },
    { label: "How to share PDF files privately", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "How to avoid uploading sensitive documents", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF Security — password protect and encrypt", path: "/pdf-security" },
};

export default content;
