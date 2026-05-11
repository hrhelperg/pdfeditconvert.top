import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-iphone",
  h1: "How to Edit a PDF on iPhone (2026 Guide)",
  description:
    "Edit text, add images and rearrange pages of a PDF directly on iPhone. Step-by-step walkthrough using the PDF Editor app.",
  updated: "2026-05-11",
  intro: [
    "Editing a PDF on an iPhone used to mean uploading the file to a website you barely trusted, signing into a Mac, or screenshotting the part you needed and reattaching it as an image. In 2026 none of that is necessary. With the right native app you can edit text, replace images, reorder pages, fill out forms, and sign documents — all on your phone, in under a minute.",
    "This guide walks through the exact taps using the PDF Editor app. The same patterns work on iPad and across most modern PDF editors, so the steps transfer if you eventually switch tools. You'll need iOS 16 or later and the PDF Editor app installed from the App Store.",
    "We'll cover opening a PDF from any source (Files, Mail, iCloud Drive, Google Drive), editing the content, and exporting the result. Each step is what you do, not why — but if a step looks fiddly on the screen, the tips section at the end has the quick fixes.",
  ],
  steps: [
    {
      title: "Install and open PDF Editor",
      body: "Get it from the App Store, then open the app. No account is required to start editing.",
    },
    {
      title: "Bring in the PDF",
      body: "Tap the + button on the home screen. Pick the source — Files, iCloud Drive, your camera roll, or 'Browse' to find Google Drive / OneDrive folders. You can also open any PDF from Mail or Safari and choose 'Open in PDF Editor' from the share sheet.",
    },
    {
      title: "Edit text in place",
      body: "Tap a paragraph or word. A blue selection appears. Edit directly in the text box that pops up. The app keeps the original font, size, and color so the layout stays intact.",
    },
    {
      title: "Replace or add an image",
      body: "Tap an existing image to replace it from your camera roll. Or tap the image tool and place a new image anywhere on the page. Drag the corners to resize.",
    },
    {
      title: "Reorder, delete, or duplicate pages",
      body: "Tap the pages icon to open the thumbnail grid. Long-press any page to move it. Tap a thumbnail to duplicate or delete.",
    },
    {
      title: "Sign the document",
      body: "Tap the Sign tool, draw your signature (or use a saved one), then place it where it belongs. The signature is a regular PDF object, so you can move or resize it after placing.",
    },
    {
      title: "Fill in form fields",
      body: "If the PDF has form fields, tap each one to fill it. The app auto-detects the field type — text, checkbox, dropdown — and gives you the right keyboard.",
    },
    {
      title: "Save and share",
      body: "Tap Done. Choose 'Save' to overwrite the original or 'Save As' to keep both. The share sheet then lets you send via Mail, Messages, AirDrop, or any installed app.",
    },
  ],
  tips: [
    "Pinch to zoom in before editing tiny text — it dramatically improves accuracy.",
    "Double-tap a word to select just that word; triple-tap to select the whole line.",
    "Use the Apple Pencil on iPad for noticeably smoother signatures than fingertip drawing.",
    "Toggle the Files integration in iOS Settings → PDF Editor so the app appears in every share sheet.",
    "Long-press the back arrow on the editing screen to step back through your last few changes if undo isn't enough.",
  ],
  mobileNote:
    "iOS Files integration matters: enable it under Settings so PDF Editor shows up in every share sheet across other apps. From there, editing a PDF you receive in Mail or Slack is one tap.",
  faq: [
    {
      q: "Can I edit a scanned PDF on iPhone?",
      a: "You can annotate, sign, and rearrange pages. To edit the actual text on a scanned page, run OCR first — the app does this in a couple of seconds.",
    },
    {
      q: "Is the app free?",
      a: "Yes for everyday editing. Some advanced features unlock with the Pro upgrade.",
    },
    {
      q: "Does it work with Apple Pencil?",
      a: "Yes. Pencil works for signatures, freehand notes, and highlights with noticeably better feel than fingertip input.",
    },
    {
      q: "Can I edit a password-protected PDF?",
      a: "Enter the password when prompted on open. Once unlocked, editing works normally. You can re-apply the password on save.",
    },
    {
      q: "Where does the edited file end up?",
      a: "Wherever you save it: Files, iCloud Drive, Google Drive, your photo library, or directly in an email draft.",
    },
  ],
  related: [
    { label: "PDF Editor — full overview", path: "/pdf-editor" },
    {
      label: "How to edit a PDF on Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "How to sign a PDF on your phone", path: "/sign-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
