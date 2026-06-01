import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-iphone",
  h1: "How to Fill PDF Forms on iPhone",
  description:
    "Fill interactive and flat PDF forms on iPhone — using Files and Markup, or a dedicated PDF app. The iOS-specific steps, the share-sheet route, and where Markup falls short.",
  updated: "2026-06-01",
  intro: [
    "iPhone is genuinely good at PDF forms once you know the two iOS routes. The built-in path uses the Files app and Markup, which can fill flat forms and add a signature in a pinch. The more capable path is a dedicated PDF app that detects interactive fields, types into them properly, and exports a clean completed copy — better the moment a form is more than a couple of lines.",
    "The iOS-specific details are what trip people up: a form opened from Mail's preview often won't show its fields, the share sheet is how you move a form between apps, and Markup treats everything as a flat page even when real fields exist. Knowing those quirks turns form-filling on iPhone into a 30-second job.",
    "This guide covers both routes — the native Files-and-Markup approach with its honest limits, and the PDF Editor app for interactive forms — so you can pick the right one for the form in front of you.",
  ],
  steps: [
    {
      title: "Get the form out of Mail's preview",
      body: "If a form arrived by email, tap to save it to Files first, or open it via the share sheet in a real PDF app. Mail's quick preview frequently ignores form fields, which is why typing seems impossible there.",
    },
    {
      title: "Try Files and Markup for flat forms",
      body: "Open the PDF in Files and tap the Markup pen. You can add text boxes and a signature anywhere on the page — fine for flat forms and quick fills, though Markup won't tap into real interactive fields.",
    },
    {
      title: "Use a PDF app for interactive fields",
      body: "For forms with real fields, open the file in the PDF Editor app. It detects the fields so you can tap and type, tick checkboxes, and move between fields cleanly.",
    },
    {
      title: "Handle flat forms by placing text",
      body: "When a form has no fields, use the app's text tool to drop answers exactly on each line. Pinch to zoom so text lands precisely rather than floating above the line.",
    },
    {
      title: "Sign and export via the share sheet",
      body: "Add your signature in the signature area, then export a completed copy and send it straight from the share sheet — to Mail, Messages, or back to whoever sent it.",
    },
  ],
  tips: [
    "If you can't type in a form on iPhone, you're almost always in Mail's preview — save to Files or open in a PDF app first.",
    "Markup is great for a quick signature or a flat form, but it won't fill real interactive fields the way a dedicated app does.",
    "Zoom in before placing text on a flat form; thumbs are imprecise and zoomed text lands on the line.",
    "Keep the blank original in Files so you can fill a fresh copy next time instead of editing an old one.",
    "iOS handles HEIC and PDF well, but form behaviour still varies by app — a dedicated PDF app is the most consistent.",
  ],
  mobileNote:
    "The PDF Editor app for iPhone detects interactive fields where they exist and lets you place text and checkmarks on flat forms where they don't, then sign and export — all on-device, so the personal details on the form aren't uploaded. It's the route that avoids Mail-preview dead ends.",
  faq: [
    {
      q: "Why can't I type in a PDF form on my iPhone?",
      a: "You're most likely viewing it in Mail's preview, which ignores form fields. Save the file to Files or open it in a dedicated PDF app, and the fields become active. Flat forms need text placed on top instead.",
    },
    {
      q: "Can I fill a PDF form with the built-in Markup tool?",
      a: "Yes, for flat forms and quick fills — Markup adds text and a signature anywhere on the page. But it treats the form as a flat image, so it won't tap into real interactive fields. Use a PDF app for those.",
    },
    {
      q: "How do I fill a scanned form on iPhone?",
      a: "A scanned form is flat, so place your own text and checkmarks on the page with Markup or the PDF Editor app, then export. There are no fields to type into.",
    },
    {
      q: "Is filling a form on iPhone private?",
      a: "With the PDF Editor app the form is filled on-device, so the details you enter aren't sent anywhere. Markup is also local. Web-based fill tools may upload the file to a server.",
    },
    {
      q: "How do I send the completed form back?",
      a: "Export a completed copy and use the iOS share sheet to send it by Mail, Messages, or any app. Flatten it first if you want the answers locked in.",
    },
  ],
  related: [
    {
      label: "How to fill out a PDF form",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "How to fill PDF forms on Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "How to sign a PDF on iPhone",
      path: "/guides/how-to-sign-pdf-on-iphone",
    },
    {
      label: "Best PDF form app for iPhone",
      path: "/guides/best-pdf-form-app-for-iphone",
    },
    { label: "Mobile PDF form workflow", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "PDF Forms", path: "/pdf-forms" },
};

export default content;
