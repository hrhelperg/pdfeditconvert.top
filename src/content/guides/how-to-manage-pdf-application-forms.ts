import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdf-application-forms",
  h1: "How to Manage PDF Application Forms",
  description:
    "Receiving applications as PDFs? How to collect, review, compare and archive them without losing track — a simple system for handling a stack of completed forms.",
  updated: "2026-06-01",
  intro: [
    "Sending a form is the easy part; managing the flood of completed ones is where things get messy. If you collect applications as PDFs — job applicants, vendors, programme entrants, members — you quickly end up with a folder full of files named \"form (3).pdf\" and no clear way to review or compare them. The fix is a light system applied consistently, not a database.",
    "Good application-form management is about three things: receiving every submission in a usable, consistent format; being able to review and compare them without opening twenty files at once; and archiving them so you can find any one later. None of that needs special software — just a naming convention, a folder structure, and a couple of PDF habits.",
    "This guide lays out that system for the receiving side of forms, the counterpart to sending intake or application forms out. It assumes a steady trickle or a periodic batch, the realistic volume most small operations actually handle.",
  ],
  steps: [
    {
      title: "Insist on a consistent return format",
      body: "Ask applicants to send flattened PDFs, not photos or editable files. A consistent format means every submission reads the same way and nothing arrives half-filled or alterable.",
    },
    {
      title: "Rename on arrival",
      body: "Rename each file the moment it lands — applicant name, date, maybe a reference. \"lastname-firstname-2026-06.pdf\" beats \"scan_final.pdf\" every time and makes the folder instantly scannable.",
    },
    {
      title: "Group into review batches",
      body: "Put each round's applications in one folder. For comparison, you can merge a batch into a single PDF and page through them, or keep them separate and skim by file name.",
    },
    {
      title: "Track status simply",
      body: "A subfolder structure — received, shortlisted, declined — or a short note in each file name keeps status visible without a tool. Move files as their status changes.",
    },
    {
      title: "Archive completed rounds",
      body: "When a round closes, move its folder to an archive and keep the blank application master separate. You retain a clean record and a reusable template for next time.",
    },
  ],
  tips: [
    "Renaming on arrival is the highest-value habit — it prevents the 'form (3).pdf' chaos before it starts.",
    "Merging a batch of applications into one PDF makes side-by-side review far quicker than juggling many files.",
    "Ask for flattened submissions so answers can't shift and every file is consistent to read.",
    "A simple received/shortlisted/declined folder structure tracks status without any extra software.",
    "Keep applicant data out of public tools and follow any record-keeping or retention rules that apply to you.",
  ],
  mobileNote:
    "Applicants can complete and return your form from a phone using the PDF Editor app, sending a flattened copy that's consistent to file. On your side, you can review submissions and merge a batch for comparison on a phone too — handy when applications arrive while you're away from your desk.",
  faq: [
    {
      q: "How do I keep completed application forms organised?",
      a: "Rename each file on arrival with applicant name and date, group each round into one folder, track status with subfolders, and archive closed rounds. A naming convention plus folders is enough — no database needed.",
    },
    {
      q: "How can I compare lots of applications quickly?",
      a: "Merge a round's PDFs into a single file and page through them, or keep them separate and skim by consistent file names. Both beat opening twenty files individually.",
    },
    {
      q: "What format should applicants send their forms in?",
      a: "Flattened PDFs. They read consistently, can't be altered or cleared, and file cleanly. Discourage photos of printouts and editable files that arrive inconsistently.",
    },
    {
      q: "Do I need special software to manage application forms?",
      a: "No. A consistent naming convention, a sensible folder structure, and basic PDF tools for merging and reviewing cover the realistic volume most small operations handle.",
    },
    {
      q: "How long should I keep completed forms?",
      a: "That depends on your own record-keeping needs and any rules that apply to you — requirements vary. Archive closed rounds where you can retrieve them, and dispose of personal data per your policy.",
    },
  ],
  related: [
    {
      label: "How to send client intake forms",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Document collection workflows with PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "PDF forms for small business",
      path: "/guides/pdf-forms-for-small-business",
    },
    { label: "How to merge PDF files", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
