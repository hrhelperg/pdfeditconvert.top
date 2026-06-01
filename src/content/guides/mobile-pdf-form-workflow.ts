import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "mobile-pdf-form-workflow",
  h1: "The Mobile PDF Form Workflow",
  description:
    "A repeatable phone-first routine for forms: receive, open in the right app, fill, sign, flatten, send. The end-to-end workflow that needs no computer.",
  updated: "2026-06-01",
  intro: [
    "Forms are one of the most genuinely phone-friendly PDF tasks there is. They arrive by email, you complete them in your hand, and they go back the same way — no computer required at any step. The trick isn't any single tool; it's having a repeatable routine so every form, interactive or flat, follows the same path from inbox to sent.",
    "This guide lays out that workflow end to end. It's deliberately the same five moves each time: get the form into a capable app, fill it, sign it, flatten it, send it. Once it's muscle memory, a form that used to mean \"wait until I'm at a desk\" becomes a two-minute job between other things.",
    "It works for both kinds of form. Interactive ones you tap and type; flat scans you write on top of. The workflow doesn't change — only the filling step adapts.",
  ],
  steps: [
    {
      title: "Receive and capture the form",
      body: "When a form lands in email or a message, save it somewhere you control — Files or your phone's storage — rather than working inside a preview that may ignore form fields.",
    },
    {
      title: "Open in a form-capable app",
      body: "Open the saved file in the PDF Editor app. It detects interactive fields if present and lets you add text to flat forms if not. This single step avoids most 'I can't type' dead ends.",
    },
    {
      title: "Fill according to the form's type",
      body: "Tap and type into interactive fields, or place text and checkmarks on a flat form. Zoom in for precision, work top to bottom, and don't skip required fields.",
    },
    {
      title: "Sign in the same session",
      body: "Add your saved signature in the signature area without switching apps. Doing it in one pass means you don't export, reopen, and re-place everything.",
    },
    {
      title: "Flatten and send",
      body: "Flatten the completed form so the answers lock in, then send it from the share sheet — email, portal, or message. Keep the blank original for next time.",
    },
  ],
  tips: [
    "The whole point is repeatability: same five steps every form, so it stops being a decision and becomes a habit.",
    "Save forms out of email previews before filling — that one move prevents the most common mobile form frustration.",
    "Fill and sign in a single session to avoid re-importing and re-placing answers.",
    "Flatten before sending so the recipient sees your answers exactly as you entered them.",
    "Keep a 'forms' folder with blank masters so re-filling is always a fresh, clean copy.",
  ],
  mobileNote:
    "The PDF Editor app is built for exactly this loop: detect fields, fill, sign, flatten, export — all on-device, with nothing uploaded. Because each step lives in one app, the whole receive-to-send workflow happens without ever reaching for a laptop.",
  faq: [
    {
      q: "Can I really complete PDF forms entirely on my phone?",
      a: "Yes. Forms arrive by email and go back the same way, and a capable PDF app handles filling, signing, flattening, and exporting — so the full workflow needs no computer.",
    },
    {
      q: "Does the workflow change for flat versus interactive forms?",
      a: "Only the filling step. Interactive forms you tap and type; flat forms you place text on top of. Receiving, signing, flattening, and sending are identical for both.",
    },
    {
      q: "Why open forms in a separate app instead of email?",
      a: "Email previews and basic viewers often ignore form fields, so typing seems impossible. Opening the saved file in a dedicated PDF app activates the fields and avoids that dead end.",
    },
    {
      q: "Why flatten before sending?",
      a: "Flattening merges your answers into the page so they can't be cleared or altered by the recipient's viewer, and they display consistently everywhere.",
    },
    {
      q: "Is the mobile form workflow private?",
      a: "With the PDF Editor app every step is on-device, so the personal details you enter aren't uploaded. Use the recipient's official channel when submitting sensitive forms.",
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
    {
      label: "How to send a completed PDF form",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "How to sign a PDF on your phone",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "PDF Editor — fill and sign", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
