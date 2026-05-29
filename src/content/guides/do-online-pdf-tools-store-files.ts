import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "do-online-pdf-tools-store-files",
  h1: "Do Online PDF Tools Store Your Files? What to Check",
  description:
    "Some online PDF tools delete uploads instantly, some hold them for hours, some keep them indefinitely. How to read a privacy policy quickly and what to look for.",
  updated: "2026-05-29",
  intro: [
    "When a free PDF tool asks you to upload your file, an honest question is: what happens to that file afterwards? The answer varies wildly. Some tools delete the upload as soon as the conversion finishes. Some hold it for an hour 'for your convenience'. Some retain it longer with vague language about 'service improvement'. Some use it to train models you don't know about.",
    "The privacy policy says, but the privacy policy is usually long, often vague, and sometimes outdated. A targeted read takes a minute and tells you what you actually need to know. And for files sensitive enough that storage matters, the safer move is to pick a tool that doesn't upload at all.",
    "This guide walks the quick privacy-policy read, explains the patterns to look for, and points at the safer alternative when the upload itself is the problem.",
  ],
  steps: [
    {
      title: "Find the policy and skip to retention",
      body: "Privacy policy is usually footer-linked. Search the page (Ctrl-F) for 'retain', 'delete', 'store', 'storage'. Those words point you straight at the retention section.",
    },
    {
      title: "Read the actual retention numbers",
      body: "'Files are deleted within one hour' is concrete and reassuring. 'We delete files when no longer needed' is vague and could mean anything. Number-shaped commitments matter; intentions don't.",
    },
    {
      title: "Check what's stored beyond the file itself",
      body: "Metadata (filename, file size, type, IP address) is usually retained longer than the file content. For most use cases, metadata retention is acceptable; for highly sensitive work, even that's a flag.",
    },
    {
      title: "Look for training-data clauses",
      body: "Some free tools allow themselves to use uploaded files for service improvement or model training. Search for 'improve', 'train', 'analytics'. If found, treat as a stronger flag for sensitive content.",
    },
    {
      title: "Check the third-party-sharing section",
      body: "Even if the tool doesn't keep your file, they might share it with hosting providers, sub-processors, or analytics vendors. Each is another party with access. Look for 'service providers', 'sub-processors', 'third parties'.",
    },
    {
      title: "Default to local processing for anything sensitive",
      body: "If the tool runs in your browser without uploading (verify via devtools), retention isn't a question — there's nothing to retain. Use that path when storage of the file matters.",
    },
  ],
  tips: [
    "Free + vague retention + unclear third parties = avoid for sensitive files. The combination is the highest risk.",
    "Even a clean retention policy isn't a guarantee. Server breaches happen. The only zero-risk option is not uploading.",
    "Treat uploaded files as compromised for any purpose you can't audit. If you wouldn't post the file publicly, think twice about uploading it.",
    "If you must upload, password-protect the file first. The tool sees an encrypted blob; the encryption protects the contents.",
    "Don't trust 'we don't store' claims without verification — privacy policy language and actual behavior can diverge.",
  ],
  mobileNote:
    "Mobile apps often have separate privacy policies in the app store or settings. The PDF Editor app processes locally and doesn't upload your files at all, so retention isn't applicable. For mobile work on sensitive material, local-only is the cleanest default.",
  faq: [
    {
      q: "How long do most online PDF tools keep files?",
      a: "Varies widely: minutes to indefinitely. Major commercial tools usually delete within an hour; smaller and free tools are inconsistent. Read each privacy policy individually.",
    },
    {
      q: "Is short retention safe enough?",
      a: "Depends on the file. For ordinary documents, an hour is fine. For genuinely sensitive material, any retention is a real risk window.",
    },
    {
      q: "What about deleted files — are they really gone?",
      a: "Usually yes from the active store, but backups and replicas may retain copies longer. Truly secure deletion is technically harder than it sounds.",
    },
    {
      q: "Do free tools always retain longer than paid?",
      a: "Tendency, not rule. Some free tools have clean retention; some paid tools have surprising clauses. Read both.",
    },
    {
      q: "What's the safest path for a sensitive PDF?",
      a: "Browser-based tools that process locally (no upload). If you must upload, password-protect first and pick a tool with explicit deletion commitments.",
    },
  ],
  related: [
    { label: "PDF tools — browser-based, no upload", path: "/pdf-tools" },
    { label: "Are online PDF tools safe?", path: "/guides/are-online-pdf-tools-safe" },
    { label: "Browser-based PDF tools vs upload tools", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "How to avoid uploading sensitive documents", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "PDF tools — free, browser-based", path: "/pdf-tools" },
};

export default content;
