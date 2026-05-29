import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-files-privately",
  h1: "How to Share PDF Files Privately (Without Uploading to Strangers)",
  description:
    "The private way to share a PDF doesn't route through a public 'PDF tools' website. The channels that keep documents between you and the recipient, with sensible defaults.",
  updated: "2026-05-29",
  intro: [
    "The first thing many people do when they want to share a PDF with someone is upload it to a tool that promises 'private' sharing — and that tool, often, is the largest privacy risk in the chain. Free file-share services typically retain files for some period, sometimes index them, and depend on a server you have no relationship with.",
    "Private sharing isn't complicated; it's about picking the right channel. Direct transfer (AirDrop, USB), end-to-end encrypted messaging, encrypted email, or password-protected files through ordinary email. Each works for a different situation. None of them require uploading to a stranger.",
    "This guide walks the realistic options by sensitivity level and use case, with the trade-offs of each. The goal is shared documents that stay between you and the recipient, with no third party as an avoidable intermediary.",
  ],
  steps: [
    {
      title: "For same-device or in-room transfer, use AirDrop or local sharing",
      body: "iPhone-to-iPhone, iPhone-to-Mac: AirDrop. Android: Nearby Share. Same Mac, same PC: local AirDrop or shared folder. The file never touches the internet.",
    },
    {
      title: "For trusted recipients, use end-to-end encrypted messaging",
      body: "Signal, WhatsApp (with caveats), iMessage between Apple users. The transport itself is encrypted; the file is decrypted only on the recipient's device. The platforms see metadata, not content.",
    },
    {
      title: "For low-sensitivity files, ordinary email is fine",
      body: "Standard email is unencrypted but practically safe for most non-sensitive documents. The risk is interception, which is rare for ordinary documents passing through major email providers.",
    },
    {
      title: "For sensitive files through ordinary email, password-protect first",
      body: "Apply a PDF password before attaching. The email is the file; the password goes through a different channel (phone call, separate message). Even if the email is intercepted, the file stays protected.",
    },
    {
      title: "For very sensitive material, use encrypted email or secure delivery",
      body: "ProtonMail, Tutanota, or your organization's secure document delivery service. These add real encryption to the channel itself, removing the password-out-of-band step.",
    },
    {
      title: "Avoid uploading to free file-share services for sensitive content",
      body: "Free tools that upload your file (compressors, mergers, splitters) hold the file on their server, even briefly. For sensitive material, use browser-based tools that process locally before any sharing.",
    },
  ],
  tips: [
    "Don't put a password in the same email as the password-protected file. The point of the password is to defend against email interception.",
    "Confirm the recipient's identity before sharing — phishing scams sometimes impersonate clients to extract sensitive PDFs.",
    "For repeating shares with the same recipient, agree on a single channel and stick with it. Channel switching is where leaks happen.",
    "Don't share via public links unless the link is one-time-use. Persistent links can be discovered or shared further.",
    "After sharing, delete the file from any temporary holding area (Downloads folder, scratch drive). The fewer copies of sensitive material, the smaller the surface.",
  ],
  mobileNote:
    "Most private sharing now starts on a phone. The PDF Editor app prepares files (compress, sign, password) locally on iOS and Android, then hands off to AirDrop, Signal or your email — the file stays on the phone through preparation, then transfers directly to the recipient.",
  faq: [
    {
      q: "What's the simplest way to share privately?",
      a: "AirDrop or Nearby Share when you're near the recipient. End-to-end encrypted messaging when you're not. Both keep the file out of third-party server hands.",
    },
    {
      q: "Is WhatsApp private enough for sensitive documents?",
      a: "End-to-end encryption protects content; WhatsApp does see metadata (who sent what to whom). For most cases that's fine; for very sensitive material, Signal is the cleaner choice.",
    },
    {
      q: "Should I use a file-sharing link service?",
      a: "Only with explicit data-handling commitments and short retention. For sensitive files, direct channels are safer.",
    },
    {
      q: "How does PDF password protection compare to channel encryption?",
      a: "PDF passwords protect the file itself; channel encryption protects the transport. Both have value; they protect against different attacks.",
    },
    {
      q: "What's the worst common practice?",
      a: "Uploading a sensitive PDF to a free 'convert' or 'compress' tool, then emailing the resulting file. The upload step is where the data leaves your control. Use browser-based tools that don't upload.",
    },
  ],
  related: [
    { label: "PDF Security — password protect and encrypt", path: "/pdf-security" },
    { label: "How to protect sensitive PDF files", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "How to avoid uploading sensitive documents", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
    { label: "Privacy-first document workflows", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "PDF Security — password protect and encrypt", path: "/pdf-security" },
};

export default content;
