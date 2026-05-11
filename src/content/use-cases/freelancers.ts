import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "freelancers",
  h1: "PDF Editor for Freelancers",
  description:
    "Workflows freelancers love: proposals, signed agreements, and invoices, all from a phone.",
  intro: [
    "Freelancers handle most business operations on a phone. There's no office, no IT department, no shared printer. The same PDF workflow that takes a corporate team three apps and an e-signature subscription often needs to happen in one app, fast, between billable hours.",
    "These are the specific operations that make the freelancer lifestyle viable from a phone — fast, private, and without subscription overhead.",
  ],
  workflows: [
    {
      title: "Send a polished proposal as a PDF",
      body: "Export your proposal from Notion, Pages, or Google Docs to PDF. Sign it, attach to email, send. The receiver sees exactly what you intended.",
    },
    {
      title: "Sign client agreements on a phone",
      body: "Draw your signature once, reuse on every future contract. No more 'I'll get back to you when I'm at a laptop'.",
    },
    {
      title: "Scan expense receipts as you spend",
      body: "Coffee meeting, cab ride, equipment purchase — scan at the moment. The PDFs are searchable and accounting-software-friendly.",
    },
    {
      title: "Invoice as PDF, every time",
      body: "Whatever invoicing tool you use, export to PDF before sending. Reduces editing risk and looks more professional than DOCX.",
    },
    {
      title: "Bundle deliverables for handover",
      body: "Combine the final brief, signed agreement, and supporting research into a single archive PDF when wrapping up a project.",
    },
  ],
  appPitch:
    "PDF Editor is a freelancer's quiet workhorse — it doesn't replace your design or invoicing tools, it just makes the document layer effortless. Free, native, on-device. Available on iOS and Android.",
  related: [
    { label: "Sign PDF on phone", path: "/sign-pdf" },
    { label: "PDF for Business workflows", path: "/pdf-for-business" },
    { label: "Use cases — remote work", path: "/use-cases/remote-work" },
  ],
};

export default content;
