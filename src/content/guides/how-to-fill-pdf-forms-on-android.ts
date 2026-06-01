import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-android",
  h1: "How to Fill PDF Forms on Android",
  description:
    "Fill interactive and flat PDF forms on Android. Why the built-in viewer often can't type, the reliable app route, and how device differences between brands affect forms.",
  updated: "2026-06-01",
  intro: [
    "Android has no single built-in PDF form filler, which is the root of most confusion. The default PDF viewer on many phones — often inside Google Drive or Files — shows a form fine but won't always let you type into its fields. So people assume the form is broken when really they just need an app that handles form fields properly.",
    "The reliable route on any Android phone is a dedicated PDF app that detects interactive fields and lets you place text on flat forms. Because Android hardware and software vary so much between brands, the exact built-in options differ from phone to phone — but a proper PDF app behaves the same everywhere, which is exactly what you want for forms.",
    "This guide covers why the default viewer falls short, the dependable app workflow, and the Android-specific details — sharing via the system share sheet, pulling forms out of Gmail and Drive — that make filling forms quick.",
  ],
  steps: [
    {
      title: "Get the form out of the basic viewer",
      body: "If a form opened from Gmail or Drive won't let you type, that viewer is ignoring its fields. Download the file and open it in a dedicated PDF app instead — that's where the fields come alive.",
    },
    {
      title: "Open it in the PDF Editor app",
      body: "Import the PDF from Files, Drive, or the share sheet. The app checks for interactive fields and makes them tappable so you can type, tick checkboxes, and use dropdowns.",
    },
    {
      title: "Fill flat forms by adding text",
      body: "If the form has no fields, use the text tool to place answers directly on each line. Zoom in first so text lands precisely — Android keyboards plus small fields need a little care.",
    },
    {
      title: "Add checkmarks, dates and a signature",
      body: "Tick interactive boxes or place a checkmark on flat ones, enter dates in the format shown, and add your signature in the signature area with the sign tool.",
    },
    {
      title: "Export and share back",
      body: "Save a completed copy and send it through the Android share sheet — Gmail, Drive, WhatsApp, anything. Flatten it first if you want the answers locked so they can't be cleared.",
    },
  ],
  tips: [
    "If you can't type in a form on Android, the basic viewer is usually the culprit — open the file in a real PDF app.",
    "Because Android brands ship different software, don't rely on a built-in filler being present; a dedicated app is the consistent choice.",
    "Zoom in on flat forms before placing text so small fields get the right-sized answer.",
    "Keep the blank form in a known folder so you can re-fill a clean copy rather than editing an old one.",
    "Form behaviour varies by app and device, so a flattened export is the safest way to make sure answers display for the recipient.",
  ],
  mobileNote:
    "The PDF Editor app for Android detects interactive fields and lets you place text on flat forms, then sign and export — working the same way regardless of phone brand. It all happens on-device, so the information you enter on the form isn't uploaded.",
  faq: [
    {
      q: "Why can't I type in a PDF form on Android?",
      a: "The default viewer — often Google Drive's or your phone's Files preview — frequently ignores form fields. Download the form and open it in a dedicated PDF app, and the fields become typeable. Flat forms need text placed on top.",
    },
    {
      q: "Does Android have a built-in PDF form filler?",
      a: "Not a universal one. What's available depends on your phone's brand and software. For consistent results across any Android device, use a dedicated PDF app.",
    },
    {
      q: "How do I fill a scanned form on Android?",
      a: "A scanned form is flat, so add your own text and checkmarks on the page with a PDF editor, then export. There are no fields to tap into.",
    },
    {
      q: "Is filling a PDF form on Android private?",
      a: "With the PDF Editor app, filling happens on-device, so your details aren't sent anywhere. Browser tools that upload your file process it on a server instead.",
    },
    {
      q: "How do I send the filled form back?",
      a: "Export a completed copy and use the Android share sheet to send it by email, Drive, or a messaging app. Flatten it first to lock the answers in.",
    },
  ],
  related: [
    {
      label: "How to fill out a PDF form",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "How to fill PDF forms on iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "How to sign a PDF on Android",
      path: "/guides/how-to-sign-pdf-on-android",
    },
    {
      label: "Best PDF form app for Android",
      path: "/guides/best-pdf-form-app-for-android",
    },
    { label: "Mobile PDF form workflow", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
