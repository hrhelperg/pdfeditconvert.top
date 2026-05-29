import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-size-before-uploading",
  h1: "How to Reduce PDF Size Before Uploading",
  description:
    "Upload portals reject big files harder than email does. How to get a PDF under tight portal caps without losing the readability they check for.",
  updated: "2026-05-23",
  intro: [
    "Upload portals are stricter than email. A government form, a job application system, a tax or HR portal will often cap a PDF at 2, 4 or 5 MB and reject anything larger with a curt error and no second chances. Worse, these are usually scanned documents — exactly the files most likely to be too big.",
    "This guide is about clearing those caps using the free Compress PDF tool, which runs in your browser with nothing uploaded. The twist with portals is that they also need the document to remain legible — a rejected upload and an unreadable one both fail — so it's a balancing act.",
    "We'll cover how to hit a specific size target, what to do when a portal's limit is brutally low, and how to keep the document readable enough to pass whatever review waits on the other side.",
  ],
  steps: [
    {
      title: "Find the portal's exact limit",
      body: "Read the upload field's fine print. Portals state a hard cap — often 2–5 MB — and reject anything over it. That number is your target.",
    },
    {
      title: "Open the Compress PDF tool",
      body: "Go to the Compress PDF tool. It processes the file on your device, which matters since portal uploads are usually personal or official documents.",
    },
    {
      title: "Compress toward the cap",
      body: "Start with Recommended; for a tight cap, go to Strong. The tool shows the resulting size so you can see whether you've cleared the limit.",
    },
    {
      title: "Confirm it's still legible",
      body: "Open the compressed file. Portals reject files that are too big and reviewers reject ones that are unreadable — the document has to satisfy both. Check the text is comfortably readable.",
    },
    {
      title: "If you can't hit the cap, reduce pages",
      body: "If compression alone won't get you under a very low limit, remove unnecessary pages with the Extract PDF Pages tool, or upload required sections separately if the portal allows.",
    },
    {
      title: "Upload the right-sized file",
      body: "Submit the compressed version. Keep your full-quality original in case the portal later asks for a clearer copy.",
    },
  ],
  tips: [
    "Find the exact cap before compressing. Compressing blind wastes effort; a stated 4 MB limit tells you precisely how hard to push.",
    "Portals demand a double pass: small enough to upload and clear enough to read. Strong compression that turns a form into mush will fail review even if it uploads.",
    "Scanned application documents compress dramatically, so even a 2 MB cap is usually reachable — they're nearly all image data.",
    "If a cap is impossibly low for a multi-page scan, removing blank or irrelevant pages first reduces size without touching quality.",
    "Keep the original. A reviewer who can't read a detail may ask for a clearer copy, and you'll want the full-quality file ready.",
  ],
  mobileNote:
    "Plenty of portal uploads happen from a phone — snapping a document and submitting it on the spot. The PDF Editor app compresses offline and lets you preview legibility before you upload, so you don't submit a file that's too big or too blurry to pass.",
  faq: [
    {
      q: "Why do upload portals reject my PDF when email accepts it?",
      a: "Portals set far tighter caps — often 2–5 MB versus email's ~25 MB — and enforce them strictly. A file that emails fine can easily be too big for a portal.",
    },
    {
      q: "How do I hit a specific size target?",
      a: "Compress and read the resulting size, stepping up the level until you're under the cap. The tool shows before-and-after figures so you can aim precisely.",
    },
    {
      q: "What if even Strong compression isn't enough?",
      a: "Remove unnecessary pages with the Extract PDF Pages tool, or upload required sections separately if the portal allows it. That cuts size without further degrading the pages that remain.",
    },
    {
      q: "Is my document uploaded to your servers when I compress?",
      a: "No. The Compress PDF tool runs in your browser on your device — relevant since portal documents are usually personal or official.",
    },
    {
      q: "Will heavy compression cause the portal to reject it for being unreadable?",
      a: "It can. Portals need the file small enough to upload and clear enough to read. Check legibility after compressing, and keep your original for any follow-up request.",
    },
  ],
  related: [
    { label: "Compress PDF — hit the portal's cap", path: "/compress-pdf" },
    { label: "Extract PDF Pages — drop pages to save size", path: "/extract-pdf-pages" },
    { label: "Best PDF compression settings", path: "/guides/best-pdf-compression-settings" },
    { label: "How to reduce PDF file size for email", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Compress PDF", path: "/compress-pdf" },
};

export default content;
