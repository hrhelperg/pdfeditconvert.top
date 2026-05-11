import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "remote-work",
  h1: "PDF Editor for Remote Work",
  description:
    "Work with documents on the go: scan, sign, and share PDFs from any device, any location.",
  intro: [
    "Remote work decouples your office from your job. The downside is that the document operations that used to happen at a printer, scanner, or shared drive now have to happen on whatever device you're using — often on a train, in a café, or at a customer site. A native mobile PDF editor closes that gap.",
    "These are the workflows that turn a phone into a portable document office — without relying on a specific desk, country, or internet connection.",
  ],
  workflows: [
    {
      title: "Sign documents during travel",
      body: "Sign a contract on a flight or train. The signature is saved on-device; the file is encrypted on save.",
    },
    {
      title: "Scan when you don't have a scanner",
      body: "Hotel rooms, conference centers, customer offices — the phone camera + auto-correction is good enough for any business document.",
    },
    {
      title: "Combine files for a remote handoff",
      body: "Merge the documents your colleague needs into one PDF, share via Drive or Slack, done.",
    },
    {
      title: "Compress before uploading on slow networks",
      body: "Hotel WiFi makes huge attachments painful. Compress first, upload second, save an hour.",
    },
    {
      title: "Edit small fixes without booting a laptop",
      body: "Typo in a draft, wrong date on a quote — fix it on the phone in 60 seconds and move on.",
    },
  ],
  appPitch:
    "PDF Editor pairs naturally with the rest of a remote work stack — Drive, iCloud, Notion, Slack, Linear, GitHub. It's the layer that handles document operations without requiring a desk or a stable connection.",
  related: [
    { label: "PDF for Business", path: "/pdf-for-business" },
    { label: "Use cases — freelancers", path: "/use-cases/freelancers" },
    { label: "Scan to PDF", path: "/scan-to-pdf" },
  ],
};

export default content;
