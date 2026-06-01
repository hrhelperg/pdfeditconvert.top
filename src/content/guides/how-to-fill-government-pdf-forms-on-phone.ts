import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-government-pdf-forms-on-phone",
  h1: "How to Fill Government PDF Forms on Your Phone",
  description:
    "Government forms are often flat scans with strict formatting. How to complete them on a phone, handle the awkward fields, and follow the agency's own instructions.",
  updated: "2026-06-01",
  intro: [
    "Government PDF forms are their own category of awkward. Many are flat scans of paper originals with no interactive fields, the formatting is strict, and the instructions on how to submit are non-negotiable. The good news is that you can usually complete them entirely on a phone — the bad news is that doing it neatly takes a little more care than a friendly interactive form.",
    "A few honest caveats up front: this guide explains how to fill these forms, not whether a particular submission is valid or accepted. Government and agency requirements vary widely, some forms use advanced features that not every app supports, and the issuing body's own instructions always override general advice. When in doubt, follow what the agency says.",
    "With that framing, here's how to complete a government form on a phone — flat or interactive — place your answers cleanly, and prepare it for whatever submission method the agency requires.",
  ],
  steps: [
    {
      title: "Read the agency's instructions first",
      body: "Government forms usually come with submission rules — format, signature requirements, where to send it. Read those before filling, because they decide whether you flatten, print, or upload, and how.",
    },
    {
      title: "Open the form in a capable PDF app",
      body: "Get the form out of any email preview and into the PDF Editor app. It detects interactive fields if the form has them, and lets you place text on the page if it's a flat scan.",
    },
    {
      title: "Fill carefully and match the format",
      body: "Government forms are picky about formats — dates, reference numbers, boxes per character. Zoom in, place text precisely on each line, and match the exact format the form requests.",
    },
    {
      title: "Handle signatures as instructed",
      body: "Add an electronic signature where the form allows it. If the agency specifically requires a hand-signed paper copy, print, sign, and rescan — follow their requirement rather than assuming a typed signature suffices.",
    },
    {
      title: "Prepare the submission they asked for",
      body: "Flatten the completed form so answers can't shift, then submit by the agency's method — secure portal, email, or print-and-post. Keep your own copy and any confirmation.",
    },
  ],
  tips: [
    "Always let the agency's instructions win over general tips — submission rules for official forms vary and matter.",
    "Many government forms are flat scans, so expect to place text on the page rather than typing into fields.",
    "Zoom in for character-box fields (one letter per box) so each character lands in its square.",
    "Keep a saved copy of everything you submit, plus any reference or confirmation number.",
    "If a form uses advanced dynamic features that won't open properly, try a different PDF app or ask the agency for an alternative format — don't force it.",
  ],
  mobileNote:
    "The PDF Editor app handles the flat scans government forms often are: place text and checkmarks exactly where they belong, add a signature where permitted, then flatten and export for upload or print — all on a phone, on-device, with sensitive personal details kept off third-party servers.",
  faq: [
    {
      q: "Can I fill out a government PDF form on my phone?",
      a: "Usually yes. Most can be completed on a phone — interactive ones by typing into fields, flat scans by placing text on the page. Always follow the issuing agency's submission instructions, which vary by form.",
    },
    {
      q: "Why won't a government form let me type into it?",
      a: "Many government forms are flat scans of paper with no interactive fields. Place your answers on the page with a PDF editor's text tool instead. Some may also be locked or use features your viewer doesn't support.",
    },
    {
      q: "Is a typed signature accepted on government forms?",
      a: "It depends entirely on the agency and form — requirements vary. Some accept electronic signatures; others demand a hand-signed copy. Follow the form's stated requirement rather than assuming.",
    },
    {
      q: "Should I flatten a government form before submitting?",
      a: "Generally yes, so your answers can't shift or be cleared. But follow the agency's submission instructions first — some portals want a specific format.",
    },
    {
      q: "Is it safe to fill official forms on a phone?",
      a: "Filling on-device with the PDF Editor app keeps the personal data on the form off third-party servers. For submission, use the agency's official secure channel rather than a public website.",
    },
  ],
  related: [
    {
      label: "How to fill PDF forms on iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "How to fill PDF forms on Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    { label: "Mobile PDF form workflow", path: "/guides/mobile-pdf-form-workflow" },
    {
      label: "How to send a completed PDF form",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
