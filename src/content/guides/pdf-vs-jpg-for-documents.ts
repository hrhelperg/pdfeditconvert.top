import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-jpg-for-documents",
  h1: "PDF vs JPG for Documents: Stop Sending Photos",
  description:
    "Why a JPG photo of a document is the wrong thing to send, when PDF is right, and how to convert a photo into a proper document.",
  updated: "2026-05-23",
  intro: [
    "Someone asks for a document, and the quickest thing is to photograph it and send the JPG. It feels efficient. It's also why the other person ends up squinting at a tilted, glare-streaked image, unable to print it cleanly, search it, or file it with anything else. For an actual document, a JPG photo is almost always the wrong format — and a PDF is almost always the right one.",
    "This guide explains the difference where it matters: documents. It's not a neutral feature table — it's a case for converting that photo into a PDF before you send it, and a quick way to do exactly that with the free Image to PDF tool, which runs on your device with nothing uploaded.",
    "If you've ever received five JPGs that should have been one tidy PDF, this is the guide to send back.",
  ],
  steps: [
    {
      title: "Understand what a JPG photo loses",
      body: "A photographed document is a single image: no multiple pages in one file, no searchable text, often crooked and unevenly lit. It's a picture of a document, not a document.",
    },
    {
      title: "See what PDF gives a document",
      body: "PDF holds many pages in one file, prints at a predictable size, opens identically everywhere, and sits naturally alongside other documents. It's the format the rest of the world files and archives.",
    },
    {
      title: "Decide by purpose",
      body: "If the recipient will read, print, file or combine it with other documents, send PDF. A lone JPG is only fine when the image itself is the point — a photo, not paperwork.",
    },
    {
      title: "Convert the photo to a PDF",
      body: "Open the Image to PDF tool, add your JPGs, order them, and create one PDF. Several photographed pages become a single document instead of a scattering of images.",
    },
    {
      title: "Make it look like a document",
      body: "Crop and straighten the photos first so the pages sit square. For anything important, a proper scan with edge detection beats a raw photo.",
    },
    {
      title: "Right-size and send",
      body: "Compress the PDF if photo pages made it heavy, then send one clean file the recipient can actually use.",
    },
  ],
  tips: [
    "The giveaway that you should have sent a PDF: the recipient asks you to 'send it as a proper document' or can't print it cleanly.",
    "Multiple pages are the clincher. Two JPGs of a two-page form is a mess; one PDF is a document.",
    "A JPG of text isn't searchable. PDFs made from real text are, and even scanned PDFs can be made searchable with text recognition.",
    "JPG is the right call when the image is the content — a product photo, a screenshot you're sharing as an image. It's wrong when the content is a document.",
    "Converting doesn't fix a bad photo. Straighten and light the page well before converting, or scan it properly.",
  ],
  mobileNote:
    "Since the offending JPG almost always starts as a phone photo, the fix belongs on the phone too. The PDF Editor app turns camera-roll photos into a PDF, or scans the page properly with edge detection and text recognition — so what you send is a document, not a snapshot.",
  faq: [
    {
      q: "Why shouldn't I just send a JPG of a document?",
      a: "A JPG photo is a single, often crooked image with no searchable text, no multi-page support and unpredictable print size. For a document, that creates work for the recipient. A PDF avoids all of it.",
    },
    {
      q: "When is JPG actually the right choice?",
      a: "When the image itself is the content — a photograph, a screenshot you're sharing as a picture. JPG is wrong specifically when the content is a document someone needs to read, print or file.",
    },
    {
      q: "How do I turn a photo into a PDF document?",
      a: "Use the Image to PDF tool: add your JPGs, order them, and create one PDF. For best results, straighten the photos first or scan the page properly.",
    },
    {
      q: "Will the converted PDF be searchable?",
      a: "Not from a plain photo — it's still an image. To get searchable text, scan the document with text recognition using the PDF Editor app rather than just photographing it.",
    },
    {
      q: "Is there a neutral feature comparison of the two?",
      a: "Yes. For a side-by-side of PDF and JPG across quality, size and use, see the PDF vs JPG comparison page.",
    },
  ],
  related: [
    { label: "Image to PDF — turn photos into a document", path: "/image-to-pdf" },
    { label: "PDF vs JPG — feature comparison", path: "/compare/pdf-vs-jpg" },
    { label: "How to convert JPG to PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "How to create a PDF from your camera", path: "/guides/how-to-create-pdf-from-camera" },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
