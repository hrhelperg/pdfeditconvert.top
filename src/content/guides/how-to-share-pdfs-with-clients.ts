import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdfs-with-clients",
  h1: "How to Share PDFs With Clients (Professionally, Privately)",
  description:
    "A short playbook for sending PDFs to clients — sizing for email, password choices, branding the file, confirming receipt — without uploading anything to third parties.",
  updated: "2026-05-29",
  intro: [
    "How you send a PDF to a client says a surprising amount about how you work. A 40 MB attachment that bounces back, a generic filename like 'Document (1).pdf', or a file that opens with the client's name spelled wrong in the title bar — these are small details, and they all stick.",
    "A professional client handoff is mostly about a handful of habits: size the file appropriately, name it like a deliverable, brand it consistently, password-protect when warranted, and confirm receipt. None of these take long once they're routine; together they make the file feel finished.",
    "This guide is that short playbook — what to do before you press send, and which free tools do each step without uploading anything sensitive to a third-party server.",
  ],
  steps: [
    {
      title: "Name the file for the client, not for you",
      body: "ClientName_ProjectName_Proposal_2026-05-29.pdf is unmistakable. 'final_v3_edited.pdf' is a confession. The recipient should be able to identify the file from their downloads folder a month later.",
    },
    {
      title: "Set the document title metadata to match",
      body: "PDF tab titles often show the original filename or a leftover from Word. Re-export from the source app with the metadata title set, or use a PDF editor to set it. Small detail, professional finish.",
    },
    {
      title: "Compress for the client's inbox",
      body: "Some client portals cap at 5 MB; most email systems at 25. Compress PDF in your browser gets a typical deliverable comfortably under both. Make this the last step, not the first.",
    },
    {
      title: "Password-protect only when it matters",
      body: "Use passwords for genuinely sensitive material — financial detail, personally identifiable information, draft contracts. Don't password-protect the proposal itself; the friction outweighs the security benefit.",
    },
    {
      title: "Send a cover note that lists what's inside",
      body: "One short sentence: 'Attached: proposal (12 pages), terms (3 pages), pricing (1 page).' The client knows what they're opening without scanning the file first.",
    },
    {
      title: "Follow up with a receipt confirmation",
      body: "Either ask 'let me know if it arrives clearly' in the cover note, or check back a day later. Files do get spam-filtered, especially attachments with passwords.",
    },
  ],
  tips: [
    "Watermark drafts (DRAFT, INTERNAL) but never the final. The final shouldn't need a label.",
    "Match your filename convention to whatever the client uses if you can tell — many enterprise clients have a docs naming standard you can mirror.",
    "Avoid sending more than three attachments. Merge what belongs together; send the rest as a follow-up if needed.",
    "If you need a signature back, sign your part first and pre-fill the signature field for theirs. It's a small kindness that returns faster.",
    "Test your file on a fresh viewer before sending — your own viewer may show layouts that others don't.",
  ],
  mobileNote:
    "Clients increasingly read deliverables on phones first. The PDF Editor app lets you preview, compress, sign and re-share PDFs from mobile, so a last-minute client revision doesn't wait for you to get back to the office.",
  faq: [
    {
      q: "What's the most common mistake when sending PDFs to clients?",
      a: "Filename. 'Document (1).pdf' tells the client you don't care. A descriptive name with project and date makes the file findable later.",
    },
    {
      q: "Should I password-protect everything I send?",
      a: "No. Reserve passwords for genuinely sensitive content. Routine deliverables don't need them, and overusing passwords trains clients to ignore them or lose them.",
    },
    {
      q: "How big can the file be?",
      a: "Email caps at 25 MB; many client portals at 5. Compress everything past 5 MB unless you know the client accepts larger. Smaller is always safer.",
    },
    {
      q: "Should I send multiple PDFs or merge them?",
      a: "Merge when they belong together (proposal + terms + pricing). Keep separate when they're genuinely different deliverables. Three attachments is the practical limit before things get lost.",
    },
    {
      q: "Is it okay to use online PDF tools for client work?",
      a: "Only if they run locally in your browser. Uploading a sensitive client document to a third-party server is a real risk. Browser-based tools that process on your device avoid that entirely.",
    },
  ],
  related: [
    { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
    { label: "Compress PDF — shrink for client portals", path: "/compress-pdf" },
    { label: "How to prepare a PDF for business use", path: "/guides/how-to-prepare-pdf-for-business-use" },
    { label: "How to create client-ready PDF files", path: "/guides/how-to-create-client-ready-pdf-files" },
  ],
  parentHub: { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
};

export default content;
