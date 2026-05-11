import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "How to Password Protect a PDF File",
  description:
    "Add password protection and encryption to a PDF on mobile or desktop. Practical guide using the PDF Editor app.",
  updated: "2026-05-11",
  intro: [
    "Plenty of documents shouldn't travel as plain PDFs — payroll slips, signed contracts, ID scans, NDA copies. A password and proper encryption turn the file into something only the right recipient can open.",
    "This guide walks through adding password protection to a PDF using PDF Editor on iPhone or Android. It also covers what to avoid: weak passwords, legacy ciphers, and the wrong sharing pattern.",
  ],
  steps: [
    {
      title: "Open the PDF you want to protect",
      body: "Import from Files, your cloud drive, or via the share sheet from any app.",
    },
    {
      title: "Tap Protect",
      body: "Located under the document tools menu. Choose 'Password protect'.",
    },
    {
      title: "Pick a strong password",
      body: "At least 12 characters with a mix of letters, numbers, and symbols. Store it in your password manager.",
    },
    {
      title: "Choose restrictions (optional)",
      body: "Allow viewing but block printing, copying text, or extracting pages.",
    },
    {
      title: "Save as a new file",
      body: "Keep the original unprotected version if you might forget the password.",
    },
    {
      title: "Share the password via a separate channel",
      body: "Email the PDF; text or call the password. Never put both in the same email.",
    },
  ],
  tips: [
    "AES-256 is the right encryption — the app uses it by default.",
    "Don't reuse the password across multiple documents.",
    "If the recipient is non-technical, give them simple instructions on how to enter the password.",
  ],
  mobileNote:
    "Protecting a PDF runs entirely on-device. Even in airplane mode, you can lock down a contract before sending it the moment you connect again.",
  faq: [
    {
      q: "What if I forget the password?",
      a: "There's no backdoor. Strong encryption means no recovery. Store passwords in a password manager.",
    },
    {
      q: "Will the password slow down opening the file?",
      a: "No noticeable delay. Decryption happens once on open.",
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
