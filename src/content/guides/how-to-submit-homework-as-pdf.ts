import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-submit-homework-as-pdf",
  h1: "How to Submit Homework as PDF (Without Portal Drama)",
  description:
    "School portals reject homework for predictable reasons — file size, page count, format. The simplest path from finished assignment to accepted PDF upload.",
  updated: "2026-05-29",
  intro: [
    "Two minutes before the deadline is the wrong time to discover the school portal rejects your homework. The error is usually generic — 'invalid file', 'upload failed', 'too large' — and the real cause is one of four predictable things: the file's over the size limit, the format isn't quite what the portal expects, the page count is over a cap, or your phone capture isn't even really a PDF yet.",
    "The fix in every case is short, and it can be done from a phone or a laptop in a browser tab without uploading anything to a third party. The trick is knowing what the portal actually expects and producing exactly that file the first time.",
    "This guide walks the path from finished assignment to accepted PDF — including the right way to handle scans of handwritten work, problem sets, and combined-format submissions like 'a Word doc plus three handwritten pages'.",
  ],
  steps: [
    {
      title: "Confirm the portal's actual requirements",
      body: "Most class portals quietly list the limit — usually 5–25 MB, sometimes a max page count, occasionally PDF/A specifically. Check before you upload rather than after the rejection.",
    },
    {
      title: "Convert all parts to PDF first",
      body: "A Word doc → Word to PDF. Handwritten pages → Scan to PDF on your phone. Screenshots or photos of the board → Image to PDF. Everything becomes a PDF before anything else happens.",
    },
    {
      title: "Merge into a single file in submission order",
      body: "Merge PDF combines the typed work, the scanned work, and any annotations into one ordered file. Graders prefer one file over three.",
    },
    {
      title: "Verify orientation and order",
      body: "Reorder PDF Pages if the merge put something out of sequence. Rotate PDF if a scan came in sideways. The grader shouldn't have to rotate manually to read your work.",
    },
    {
      title: "Compress to fit the portal cap",
      body: "Compress PDF in your browser shrinks the file. Heavy scans drop dramatically; typed content barely changes. Aim for under the portal limit with a small buffer.",
    },
    {
      title: "Name the file the way the class expects",
      body: "Many classes specify the naming convention: LastName_FirstName_Assignment3.pdf. Follow it exactly. Wrong names cost points or cause sorting confusion.",
    },
  ],
  tips: [
    "Don't submit Word documents to a portal that accepts PDFs. Word renders differently on the grader's machine; a PDF locks how it looks.",
    "Handwritten scans should be black-and-white or grayscale, not color. Smaller, sharper, and reads more clearly.",
    "Compress aggressively on heavy scans, not on typed work. Typed pages don't compress much; scans compress a lot.",
    "Test-upload a draft version to confirm the portal accepts your file before the deadline.",
    "Save the submitted file locally too. Portal copies aren't always retrievable later, and you may need to refer back to what you turned in.",
  ],
  mobileNote:
    "Phone-only submissions are normal now. The PDF Editor app handles the full chain on a phone — scan handwritten pages, merge with typed work, compress, name, ready to upload — without needing to bounce through a laptop.",
  faq: [
    {
      q: "What size do most school portals allow?",
      a: "Commonly 5–25 MB. Some K–12 portals cap at 2 MB. University portals are more lenient. Check the specific class's specs.",
    },
    {
      q: "Can I submit Word instead of PDF?",
      a: "Only if the portal explicitly accepts it. Most ask for PDF specifically to lock the formatting; submitting Word can cost points or get auto-rejected.",
    },
    {
      q: "Do I need to merge everything into one file?",
      a: "Yes unless the portal supports multiple uploads. Graders prefer one file; many portals only accept one anyway.",
    },
    {
      q: "What's the most common rejection reason?",
      a: "File size. Scans push files over portal caps quickly. Compress before submitting and the rejection mostly goes away.",
    },
    {
      q: "Can I upload from my phone?",
      a: "Yes. Most modern school portals work in mobile browsers and accept PDFs from the share sheet. The phone tools cover the whole chain.",
    },
  ],
  related: [
    { label: "PDF for Students — notes and study guides", path: "/pdf-for-students" },
    { label: "Scan to PDF — capture handwritten pages", path: "/scan-to-pdf" },
    { label: "How to compress PDF for school portals", path: "/guides/how-to-compress-pdf-for-school-portals" },
    { label: "How to scan handwritten notes to PDF", path: "/guides/how-to-scan-notes-to-pdf" },
  ],
  parentHub: { label: "PDF for Students — notes, highlights, study guides", path: "/pdf-for-students" },
};

export default content;
