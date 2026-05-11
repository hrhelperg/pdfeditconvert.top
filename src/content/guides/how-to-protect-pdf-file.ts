import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "How to Password Protect a PDF File",
  description:
    "Add password protection and encryption to a PDF on mobile or desktop. Practical guide using the PDF Editor app.",
  updated: "2026-05-11",
  intro: [
    "Plenty of documents shouldn't travel as plain PDFs: payroll slips, signed contracts, ID scans, NDA copies, medical records, financial statements. A password and proper encryption turn the file into something only the intended recipient can open — even if the email is forwarded, intercepted, or sits forever in a corporate mailbox.",
    "This guide walks through adding password protection to a PDF using the PDF Editor app on iPhone or Android. It also covers what to avoid: weak passwords, legacy encryption ciphers, and the common mistake of sharing the password in the same channel as the document.",
    "By the end, you'll have a repeatable protection workflow you can apply to sensitive documents in under a minute, with strong AES-256 encryption that's accepted by enterprise security policies.",
  ],
  steps: [
    {
      title: "Open the PDF you want to protect",
      body: "Import the document into PDF Editor from Files, iCloud Drive, Google Drive, or any sharing app. The whole flow runs locally — your file never leaves the device.",
    },
    {
      title: "Tap Protect in the tools menu",
      body: "Find it under the document tools. Choose 'Password protect' to require a password to open the file, or 'Restrict permissions' for view-only access.",
    },
    {
      title: "Pick a strong password",
      body: "At least 12 characters, mixing letters, numbers, and symbols. Avoid common words and personal details (birthdays, names). Generate one in your password manager if you have one — that's the right move.",
    },
    {
      title: "Confirm the password",
      body: "Re-enter it to avoid typos. Once the file is encrypted, there's no recovery if you've mistyped.",
    },
    {
      title: "Choose restrictions (optional)",
      body: "Allow viewing but block printing, copying text, or extracting pages. Useful when the recipient needs to read the document but you don't want them redistributing chunks of it.",
    },
    {
      title: "Save as a new file",
      body: "Keep the original unprotected version in a safe place — if you ever forget the password, you'll still have access. Save the protected copy with a clearly different name.",
    },
    {
      title: "Share the password via a separate channel",
      body: "Email the encrypted PDF; text or call the password. Never put both in the same email — if the email account is compromised, both are leaked. A small habit that prevents most real-world incidents.",
    },
  ],
  tips: [
    "AES-256 is the right encryption — the app uses it by default. If a tool offers 'compatible' or 'legacy' encryption, those are typically broken; avoid them.",
    "Don't reuse the password across multiple documents. If one leaks, you don't want a domino effect.",
    "If the recipient is non-technical, give them simple instructions: 'You'll need this password to open the file: XYZ' is enough.",
    "Use a password manager to share passwords securely when possible — most have a 'share' feature that doesn't require both parties to have accounts.",
    "For very sensitive files (legal, medical, financial), consider 1Password's or Bitwarden's secure-sharing links instead of texting the password.",
  ],
  mobileNote:
    "Protecting a PDF runs entirely on-device. Even in airplane mode, you can lock down a contract before sending it the moment you connect again. This matters for travelers handling sensitive documents from a hotel lobby or airport — the protection happens locally, then you only need a connection for the actual send.",
  faq: [
    {
      q: "What if I forget the password?",
      a: "There's no backdoor. Strong encryption means no recovery is possible without the password. Always store passwords in a password manager rather than memory.",
    },
    {
      q: "Will the password slow down opening the file?",
      a: "No noticeable delay. Decryption happens once on open and takes milliseconds even on older devices.",
    },
    {
      q: "Can I remove the password later?",
      a: "Yes, if you have the password. Open the protected PDF, enter the password, then use 'Remove protection' in the Protect menu.",
    },
    {
      q: "Is the password actually secure, or is this security theater?",
      a: "Real security. AES-256 with a strong password is the same encryption used by enterprise systems, password managers, and many banking apps. The weak link is always the password itself — pick a strong one.",
    },
    {
      q: "What about redaction?",
      a: "Redaction is different from password protection. Redaction permanently removes content (like blacking out a name); password protection keeps the content but requires authentication to view. For sensitive documents, you may want both — redact what shouldn't be in the file, password-protect what's left.",
    },
  ],
  related: [
    { label: "PDF security — full overview", path: "/pdf-security" },
    { label: "Sign PDFs before locking them", path: "/sign-pdf" },
    { label: "PDF for Business workflows", path: "/pdf-for-business" },
  ],
  parentHub: { label: "PDF Security", path: "/pdf-security" },
};

export default content;
