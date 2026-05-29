import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "are-online-pdf-tools-safe",
  h1: "Are Online PDF Tools Safe? An Honest Look at the Risk",
  description:
    "Most 'online' PDF tools upload your file to a server. Some don't. The real risks, the categories of tool that handle data differently, and how to tell which is which.",
  updated: "2026-05-29",
  intro: [
    "'Online PDF tool' is a phrase that hides a big distinction. Some of these tools download your file to their server, process it there, and send the result back. Others run entirely in your browser — your file never leaves your device. Both are sometimes called 'online', and the difference matters quite a bit for anything sensitive.",
    "The honest answer to 'are they safe' is: it depends on which kind you're using and what's in the file. A bank statement going through a tool that uploads is a real risk, even with stated retention policies. The same statement on a tool that processes locally never touches their network, so the risk profile is fundamentally different.",
    "This guide separates the categories without scaremongering. It explains where the actual risks are, how to read a privacy policy quickly, and how to tell whether a tool you're considering uploads or runs locally — without taking the marketing copy at its word.",
  ],
  steps: [
    {
      title: "Identify which category the tool is in",
      body: "Three categories: (1) full upload — file goes to server, processed there. (2) Browser-based with optional sync — runs locally but offers cloud features. (3) Browser-only — never uploads. The category determines the real risk.",
    },
    {
      title: "Check the privacy policy for retention",
      body: "Look for words like 'retain', 'store', 'delete after'. A policy that says 'files are deleted within one hour' tells you it's category (1). A policy that says 'files do not leave your device' indicates (3). Vague policies are a flag.",
    },
    {
      title: "Watch network traffic to verify",
      body: "Open developer tools, network tab, drag your PDF in. If you see an upload (large outbound request when you add the file), it's uploading. If you don't, it's processing locally. This is the most direct verification.",
    },
    {
      title: "Match the tool to the sensitivity of the file",
      body: "Casual files (vacation photos as PDF) can go through any category. Sensitive files (financial, legal, medical, personal) belong with category (3) or a paid tool with explicit data-handling guarantees.",
    },
    {
      title: "Consider what 'safe' means for your case",
      body: "Sometimes the risk is corporate (don't leak client data). Sometimes regulatory (HIPAA, GDPR). Sometimes personal (avoid identity theft). The right tool depends on the threat you're actually facing.",
    },
    {
      title: "Default to browser-based tools when in doubt",
      body: "Browser-based tools that don't upload are safe by default — the file can't leak from a server that never received it. The tools on this site are in that category.",
    },
  ],
  tips: [
    "Free + uploads + no clear privacy policy = avoid for anything sensitive. The combination is the highest-risk profile.",
    "Even uploading tools with strong privacy policies have a real attack surface — server breaches, retention failures, employee access. Local processing eliminates the surface.",
    "Don't trust 'we don't store' claims without verification. Watching network traffic is the only way to know for sure.",
    "Browser-based tools have their own limits — heavy operations and OCR sometimes need server help. Know the limit; don't over-promise.",
    "If a workflow demands an upload (rare), choose a tool with a stated retention policy and use a fresh password-protected file.",
  ],
  mobileNote:
    "Mobile PDF tools also split into uploading and local-only. The PDF Editor app processes everything on-device on iOS and Android — no upload, no account, no sync unless you turn it on. For sensitive documents on a phone, that's the right default.",
  faq: [
    {
      q: "Is uploading my PDF to an online tool actually risky?",
      a: "Depends on the file. For a holiday itinerary, very low risk. For financial records or contracts, real risk — server breaches and retention failures do happen. Match the tool to the file.",
    },
    {
      q: "How do I tell if a tool uploads or processes locally?",
      a: "Open browser devtools, network tab, drop a file in. If a large outbound network request fires when you add the file, it's uploading. If not, it's processing locally.",
    },
    {
      q: "Are paid tools safer than free ones?",
      a: "Sometimes. Paid tools often have explicit retention and data-handling commitments. Some free tools (the ones on this site) run locally and don't need those commitments because they never receive your file.",
    },
    {
      q: "What about end-to-end encryption?",
      a: "Useful for sharing but doesn't help with processing. If a server has to read your file to compress it, encryption in transit doesn't change that the server sees the content.",
    },
    {
      q: "Should I encrypt my PDF before uploading?",
      a: "If you must upload, yes. A password-protected PDF reaches the server already protected. But better to avoid the upload entirely for sensitive material.",
    },
  ],
  related: [
    { label: "PDF tools — browser-based, no upload", path: "/pdf-tools" },
    { label: "Privacy-first PDF tools", path: "/guides/privacy-first-pdf-tools" },
    { label: "Browser-based PDF tools vs upload tools", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Do online PDF tools store your files?", path: "/guides/do-online-pdf-tools-store-files" },
  ],
  parentHub: { label: "PDF tools — free, browser-based", path: "/pdf-tools" },
};

export default content;
