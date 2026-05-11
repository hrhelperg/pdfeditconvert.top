import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-android",
  h1: "How to Edit a PDF on Android (2026 Guide)",
  description:
    "Edit PDFs on Android: change text, insert pages and sign documents. Clear step-by-step instructions using the PDF Editor app.",
  updated: "2026-05-11",
  intro: [
    "Android handles PDFs reasonably well out of the box — but only for viewing. The moment you need to fix a typo, replace an image, or reorder pages, the built-in viewer hits its limit and the usual workaround is uploading the file to a website. There's a faster option: a native editor that runs on your phone.",
    "This guide uses the PDF Editor app on Android. The same flow works on tablets and Chromebooks running the Android runtime. You'll need Android 9 or later. Most steps are identical to the iPhone flow, but Android's Storage Access Framework changes how you import and save files.",
    "Each step shows where to tap, including the small differences between phones and tablets. Where Android differs from iOS — file picker, Drive integration, the back button — we'll call it out.",
  ],
  steps: [
    {
      title: "Install PDF Editor from Google Play",
      body: "Search for 'PDF Editor' and pick the one published by hrhelperg. Install and open. No account required.",
    },
    {
      title: "Open a PDF",
      body: "Tap the + button on the home screen. Android's Storage Access Framework dialog appears — pick the PDF from Files, Google Drive, OneDrive, Dropbox, or any other connected cloud provider. You can also tap a PDF inside Gmail or any app and choose PDF Editor as the opener.",
    },
    {
      title: "Edit text",
      body: "Tap a paragraph. A blue editing box appears. Type to replace or insert text. The app keeps the existing font and color so the layout doesn't break.",
    },
    {
      title: "Replace an image",
      body: "Tap an image to highlight it. Tap the swap icon and pick a replacement from your gallery or files. Drag the corners to resize without distorting the aspect ratio.",
    },
    {
      title: "Insert a new page",
      body: "Tap the pages icon for thumbnails. Use the + button between thumbnails to insert a blank page or import an image as a new page.",
    },
    {
      title: "Fill out form fields",
      body: "PDFs with interactive fields highlight automatically. Tap a field, type, and tap Done. The keyboard adapts to the field type (text, number, date).",
    },
    {
      title: "Sign the document",
      body: "Tap the Sign tool, draw with your finger or stylus, and place the signature. Save it for future use — you won't have to redraw it.",
    },
    {
      title: "Save as a new file",
      body: "Tap Done, then 'Save As' to keep both the original and the edited copy. Android's file picker lets you save into Files, Drive, or any cloud provider you've connected.",
    },
  ],
  tips: [
    "On large tablets, enable split-screen and drop two PDFs side by side for fast cross-referencing.",
    "If you have an S Pen, switch input to 'Pen only' in editing mode — palm rejection is much better that way.",
    "Use descriptive filenames before saving — 'Contract-Signed-2026-05-11.pdf' is far more useful than 'Document(1).pdf' when you search later.",
    "Pin PDF Editor to your share sheet by long-pressing it after using once — it'll appear at the top for next time.",
    "If editing feels laggy on an older device, close other apps in the background; PDF rendering benefits from free RAM.",
  ],
  mobileNote:
    "Android's Storage Access Framework is the right way to open files — it grants persistent access without copying the file into the app's own storage. That means edits save back to Drive or OneDrive directly, not into a duplicate.",
  faq: [
    {
      q: "Does it work on older Android versions?",
      a: "Officially Android 9 and later. Older devices may install the app but won't get the latest features (improved OCR, scan filters).",
    },
    {
      q: "Can I open password-protected PDFs?",
      a: "Yes. Enter the password when prompted. The app keeps the document encrypted while editing and re-encrypts on save if you want.",
    },
    {
      q: "What about Google Drive integration?",
      a: "Open and save directly from Drive via the system file picker. Edits saved back to Drive overwrite the original (or save as a new file, depending on your choice).",
    },
    {
      q: "Will edits sync to my desktop?",
      a: "If you saved into a cloud provider (Drive, OneDrive, Dropbox), the edited file syncs to your other devices automatically. Local-only saves stay on the phone.",
    },
    {
      q: "Does it work offline?",
      a: "Yes. Editing happens entirely on-device. Cloud sync only kicks in when you save to a cloud path.",
    },
  ],
  related: [
    { label: "PDF Editor — full overview", path: "/pdf-editor" },
    {
      label: "How to edit a PDF on iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "How to compress a PDF", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
