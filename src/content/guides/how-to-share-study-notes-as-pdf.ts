import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-study-notes-as-pdf",
  h1: "How to Share Study Notes as PDF (Group, Group Chat, Cloud)",
  description:
    "Share notes with a study group without losing formatting or version control. The PDF habits that keep collaborative study from devolving into screenshot chaos.",
  updated: "2026-05-29",
  intro: [
    "Sharing notes with a study group should be easy, but in practice it usually devolves into a chat thread with thirty screenshots and three different versions of the same lecture. By the night before the exam, nobody can find the version with the worked example everyone keeps referencing, and someone has texted a photo of their handwritten margin notes that nobody can read.",
    "PDFs solve most of this. They lock the formatting, work on any device, fit in the share sheet on every platform, and aren't tied to one cloud account. A few sharing habits — name the file consistently, version deliberately, choose the right channel — keep collaborative study coherent without anyone having to run it like a project.",
    "This guide describes the habits. None are tools; all are conventions you and your group agree on once. After that it just works.",
  ],
  steps: [
    {
      title: "Agree on the share channel first",
      body: "Pick one place — group chat, shared cloud folder, dedicated Discord — and stick with it. Notes scattered across two channels are unfindable. The channel matters less than the consistency.",
    },
    {
      title: "Always share as PDF, never as photos of the document",
      body: "A screenshot of a PDF is worse than the PDF. Send the file directly. Phones make this easy — share sheet → file, not screenshot.",
    },
    {
      title: "Name the file for the group, not for you",
      body: "CourseCode_Week3_Lecture_Notes_YourName.pdf. The group sees who shared what and which week. 'Notes.pdf' is useless in a thread of fifteen Notes.pdf attachments.",
    },
    {
      title: "Watermark draft notes",
      body: "If your notes are first-pass and likely to be revised, Add Watermark to PDF stamps DRAFT or WIP on every page. The group knows to expect a revision.",
    },
    {
      title: "Compress before sharing",
      body: "Compress PDF brings file sizes down for chat platforms with attachment limits. Saves uplink time on cellular and avoids the 'file too large' rejection.",
    },
    {
      title: "Track versions in the filename, not the chat",
      body: "Week3_Lecture_Notes_v2.pdf is unambiguous. 'I revised the notes, see attached' in a chat thread is not. The filename is the version log.",
    },
  ],
  tips: [
    "Don't share Word docs to a group. They render differently on each device, lock to one editor at a time, and split into versions immediately. PDF locks everything.",
    "Use OCR'd PDFs of handwritten notes when possible — searchable text helps the group find specific topics fast.",
    "Don't post photos of laptop screens. The artifacts (moire, glare, low resolution) make notes harder to read, not easier.",
    "If your group regularly shares, pre-build a shared template for note PDFs. Consistent cover pages help recognize who shared which.",
    "Avoid email for group notes. Chat threads track who's seen what; email scatters the same conversation across many inboxes.",
  ],
  mobileNote:
    "Phones do most of group sharing — quick photo capture, immediate share to chat, fast acknowledgment. The PDF Editor app handles the scan-merge-compress-rename chain on mobile, so the file arriving in the group chat is clean rather than a raw camera roll dump.",
  faq: [
    {
      q: "What's the worst way to share study notes?",
      a: "Screenshots of the document or chat-only notes. Both are unsearchable and don't survive the conversation moving on.",
    },
    {
      q: "Should everyone share their notes or just one person?",
      a: "Everyone share with intent: agreed-upon weeks per person, or 'I'll do this week, you do next'. Rotating reduces effort per person and produces multiple-perspective notes.",
    },
    {
      q: "Where should the canonical notes live?",
      a: "A shared cloud folder is best for long-term storage. Group chat is good for quick distribution; the folder is the archive.",
    },
    {
      q: "How do we version notes?",
      a: "Filename only. v1, v2, v3. When the group agrees on FINAL, rename and move to /final/. Don't track versions in the chat.",
    },
    {
      q: "What if notes are handwritten?",
      a: "Scan to PDF first. Black-and-white scans of handwritten notes are sharper and smaller than photos. Add OCR if your tool supports it.",
    },
  ],
  related: [
    { label: "PDF for Students — notes and study guides", path: "/pdf-for-students" },
    { label: "Compress PDF — shrink for chat attachment caps", path: "/compress-pdf" },
    { label: "How to organize study materials as PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "How to share a PDF from your phone", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF for Students — notes, highlights, study guides", path: "/pdf-for-students" },
};

export default content;
