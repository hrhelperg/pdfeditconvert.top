import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-agencies",
  h1: "PDF Workflows for Agencies (Decks, Briefs, Approvals)",
  description:
    "An agency's PDF chain — pitch decks, creative briefs, client approvals, deliverables — kept fast and predictable with free, private, browser-based tools.",
  updated: "2026-05-29",
  intro: [
    "Agencies process more PDFs than they realize. Pitch decks go out, briefs come back, creative work routes through approvals, deliverables ship in batches, retros land in shared folders. Each of those is a small piece of work; together they're the artery the agency runs on.",
    "Most of the agency's PDF moves are repeats: convert a slide deck to a sendable PDF, merge a presenter version with appendices, compress for client portals, watermark drafts during review, sign approvals, archive at engagement close. With a deliberate rhythm and the right small toolkit, this stays light. Without one, it eats hours.",
    "This guide describes the workflow we've watched work at small agencies. None of it requires paid PDF software; most of it runs in a browser tab without uploading sensitive client material.",
  ],
  steps: [
    {
      title: "Pitch deck: export, compress, brand-checked",
      body: "Slide deck → PDF export → compress for the prospect's email. Confirm fonts embedded so the slide titles don't substitute on the prospect's side. Cover with the prospect's name; metadata title set; named ProspectName_Pitch_YYYY-MM-DD.pdf.",
    },
    {
      title: "Creative brief: merge intake with assets",
      body: "Brief document plus client assets (logos, examples, brand book) → Merge PDF into a single working file the team can refer to. Keep originals; the merged version is for quick reference.",
    },
    {
      title: "Approvals: signed PDF, draft watermarks during review",
      body: "Drafts circulate with Add Watermark to PDF stamping DRAFT. When the client approves, a signed PDF formalizes the approval, with Sign PDF capturing the signoff. Final files lose the watermark.",
    },
    {
      title: "Deliverables: high-quality PDF, separate from working files",
      body: "Final deliverables export at higher quality than internal versions. Reorder PDF Pages confirms the running order; Extract PDF Pages drops anything that shouldn't ship.",
    },
    {
      title: "Compress for client portals",
      body: "Most enterprise client portals cap at 10–25 MB. Compress PDF brings deliverables under cap without obvious quality loss. The delivered file is the compressed copy; the source archive keeps the uncompressed.",
    },
    {
      title: "Archive at engagement close",
      body: "Move the engagement folder to /Archive/[Year]/[Client]/[EngagementName]/. The active folder stays slim; the archive is the case-study source for the next pitch.",
    },
  ],
  tips: [
    "Decks intended for screen use should export at lower compression than ones intended for print — visible artifacts are less obvious on screen.",
    "Standardize the deck cover. Logo, prospect name, date, agency contact. Different layouts per pitch feel inconsistent across the agency.",
    "Watermark all drafts. The minute a draft loses its watermark in the chain, accountability blurs.",
    "Approvals belong on signed PDFs, not on chat threads. Future-you will need a defensible record.",
    "Pre-build a /Templates/ folder with deck cover, brief template, signoff form. Reuse beats re-creation every time.",
  ],
  mobileNote:
    "Agency life happens on phones during shoots, on transit, at client offices. The PDF Editor app handles drafts, signatures and quick re-exports from mobile, so an approval can clear from a phone rather than waiting for a return-to-laptop.",
  faq: [
    {
      q: "How big should a pitch deck PDF be?",
      a: "Under 10 MB ideally; under 25 MB always. Visual decks compress less than text decks; keep an eye on size as the deck grows.",
    },
    {
      q: "Should we use a single template for every pitch?",
      a: "Yes for the structure, no for the creative. The reader should recognize 'this is an agency proposal' instantly; the creative content distinguishes each.",
    },
    {
      q: "How do we track approval state?",
      a: "Folder state: /drafts/, /approved/, /shipped/. The signed approval PDF is the artifact that confirms a move from one folder to the next.",
    },
    {
      q: "Do we need separate working and delivery PDFs?",
      a: "Yes. Working files are uncompressed and have annotations; deliverables are compressed, clean, and finalized. Don't ship the working file by mistake.",
    },
    {
      q: "What's the biggest agency PDF mistake?",
      a: "Sending an unfinalized deck. Watermark drafts, name them clearly, and only the file in /approved/ goes to the client.",
    },
  ],
  related: [
    { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
    { label: "Merge PDF — assemble briefs and deliverables", path: "/merge-pdf" },
    { label: "PDF workflows for consultants", path: "/guides/pdf-workflows-for-consultants" },
    { label: "Best PDF workflow for teams", path: "/guides/best-pdf-workflow-for-teams" },
  ],
  parentHub: { label: "PDF for Business — contracts and workflows", path: "/pdf-for-business" },
};

export default content;
