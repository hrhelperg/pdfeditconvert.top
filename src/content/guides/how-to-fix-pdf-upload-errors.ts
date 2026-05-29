import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-upload-errors",
  h1: "How to Fix PDF Upload Errors (Too Big, Rejected, Stuck)",
  description:
    "Portals reject PDFs for a handful of reasons: file size, page count, format strictness or a flaky upload. How to identify which one bit you and get the file accepted on the next try.",
  updated: "2026-05-29",
  intro: [
    "Upload portals are stricter than email. Many reject anything over 5 MB, some over 2 MB, some refuse multi-page files, and others quietly fail on anything that isn't a perfectly conformant PDF/A. The error messages they show are rarely specific — 'file too large', 'invalid format', 'upload failed' — and most of them mean something different than they say.",
    "The real causes are usually one of four: the file is over the portal's limit, the file's internal format is non-standard, your connection failed mid-upload, or the portal expects a specific PDF flavor (PDF/A, single page, low-version). Each has a different fix, and the right fix depends on which it is.",
    "This guide walks the diagnoses by symptom and shows how to fix each in your browser. Most failed uploads succeed on the second try once you address the actual cause.",
  ],
  steps: [
    {
      title: "Read the error message literally",
      body: "'File exceeds size limit' means compression. 'Invalid file' means format. 'Upload failed' usually means network. Treat the words as the first piece of evidence, even when they're terse.",
    },
    {
      title: "Compress aggressively if size is the issue",
      body: "Compress PDF in your browser shrinks files significantly, especially scan-heavy ones. Try the strongest compression first; if quality drops too much, step back one level. Some portals cap at 2 MB — most compressors get a typical document well under that.",
    },
    {
      title: "Split a large multi-page PDF if needed",
      body: "If the portal accepts multiple smaller files but rejects one large one, Split PDF or Extract PDF Pages lets you break the file into sections. Number the parts clearly in the filename so the recipient can rejoin them.",
    },
    {
      title: "Re-export to standard PDF if the format is rejected",
      body: "Some portals only accept files saved as PDF 1.4 or PDF/A. The simplest fix is to open the file in any viewer and print-to-PDF — the resulting copy is plain, standard, and usually accepted.",
    },
    {
      title: "Check the page count and dimensions",
      body: "Government and education portals sometimes limit page count or paper size. If the portal lists requirements, match them: Letter or A4 only, no oversized pages, no transparent backgrounds. Extract PDF Pages drops anything that overshoots.",
    },
    {
      title: "Retry on a stable connection",
      body: "Wi-Fi drops mid-upload look the same as a rejection. Switch networks or retry on a different connection before assuming the file itself is the problem.",
    },
  ],
  tips: [
    "Compress before you split. A compressed single file often fits the limit; if it still doesn't, split the compressed copy.",
    "Avoid encryption or password-protection when uploading to portals — many block secured files even if they accept the underlying content.",
    "Watch for hidden character limits in filenames. Some portals reject names with spaces, accents or punctuation.",
    "If the portal accepts JPG but rejects PDF, you can export PDF pages to images with PDF to Images and upload those — useful for image-only requirements like ID submission.",
    "Always confirm a successful upload completes (some portals fail silently). Refresh the receipt page and look for a confirmation, not just the absence of an error.",
  ],
  mobileNote:
    "Uploads from a phone fail more often than from a laptop simply because the connection drops more often. The PDF Editor app compresses and splits files offline so the upload step itself is short — a smaller file uploads faster and survives a flaky network.",
  faq: [
    {
      q: "What size do most portals limit to?",
      a: "Common caps are 2 MB, 5 MB and 10 MB. Government and academic portals tend to be strictest; commercial portals are more lenient. Check the portal's help section if it's not stated upfront.",
    },
    {
      q: "Does compression always solve a size rejection?",
      a: "Usually yes, especially for scan-heavy files. A 30 MB scan often compresses to under 5 MB cleanly. Text-only PDFs that are already small won't compress much further.",
    },
    {
      q: "Why does the portal reject my file as 'invalid'?",
      a: "Either the file isn't really a PDF (some downloads are misnamed), or it uses PDF features the portal's parser doesn't support. Re-exporting via print-to-PDF produces a baseline copy that's almost always accepted.",
    },
    {
      q: "Can I bypass the size limit by zipping it?",
      a: "Almost never. Portals that limit PDFs usually also limit total upload size and reject ZIPs entirely. Compressing the PDF itself is the right path.",
    },
    {
      q: "What if the portal wants PDF/A specifically?",
      a: "PDF/A is an archival flavor. Microsoft Word and Google Docs can export to it directly. Otherwise, open the file, print-to-PDF, and check the export options for an A-compatible setting.",
    },
  ],
  related: [
    { label: "Compress PDF — shrink to fit portal limits", path: "/compress-pdf" },
    { label: "Split PDF — break large files into accepted parts", path: "/split-pdf" },
    { label: "How to reduce PDF size before uploading", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
    { label: "How to reduce PDF file size for email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Compress PDF — reduce size in your browser", path: "/compress-pdf" },
};

export default content;
