import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-ocr",
  "h1": "OCR and PDF",
  "cluster": "metadata-tooling",
  "aliases": [
    "Optical Character Recognition",
    "OCR text layer",
    "searchable image PDF",
    "image+text PDF",
    "PDF text recognition"
  ],
  "definition": "OCR (optical character recognition) reads text from the images in a scanned PDF and records it as a selectable, searchable text layer behind the page picture.",
  "description": "OCR reads the printed text inside a scanned PDF and stores it as an invisible, searchable text layer over the page image, without changing how the page looks.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF page can carry its text in two very different ways. A digitally authored PDF stores real text objects — characters, fonts, and positions the software can read directly. A scanned page, by contrast, is just a picture of a document: to a computer it is a grid of pixels with no letters in it at all. OCR is the bridge between those two worlds. It is the recognition step that looks at the image of a page, identifies the shapes as characters and words, and turns them back into machine-readable text.",
    "Applied to a PDF, OCR usually does not throw away the scan. Instead it keeps the original page image exactly as it looks and adds the recognized text as a separate, typically invisible layer sitting behind (or over) the picture. The result is a file that still displays the familiar scanned appearance but can now be searched, selected, and copied — the combination often called a searchable image PDF, image+text PDF, or informally a 'sandwich' PDF.",
    "It helps to be clear about one thing up front: OCR is not part of the PDF format. The ISO PDF specification defines how text, images, and a text layer are stored, but it says nothing about how to recognize characters in a picture. Recognition is done by separate software, and the PDF simply holds whatever text that software produced."
  ],
  "sections": [
    {
      "heading": "From image-only to searchable",
      "body": [
        "A scanned or photographed document imported into a PDF starts life as an image-only PDF: each page is one or more raster images, and there are no text objects anywhere in the content. Because there is no text, the page cannot be searched, and selecting across it just highlights the picture. OCR changes this by analyzing the pixels of the page image, segmenting them into lines, words, and individual glyph shapes, and matching those shapes against a model of what characters look like.",
        "The output of that recognition is a stream of characters together with their positions on the page. OCR software then writes those characters into the PDF as ordinary text-showing operations, mapped back to Unicode so the text can be copied meaningfully. The page you see is unchanged, but the document now contains a real, machine-readable representation of its words."
      ]
    },
    {
      "heading": "How the recognized text is stored",
      "body": [
        "The standard trick for keeping the scan looking identical while making it searchable is invisible text. PDF defines several text rendering modes, and mode 3 means the characters are neither filled nor stroked — they are drawn into the content stream and positioned precisely, but they paint nothing visible. OCR tools place each recognized word in this invisible mode, aligned as closely as possible under the corresponding part of the page image.",
        "The visible pixels therefore still come entirely from the scanned image, while the hidden text supplies the searchable content. Because the text is real PDF text, a reader can search it, a screen reader can attempt to read it, and copy-and-paste pulls the characters rather than a slice of the picture. This is the layer described in more depth under the text layer in a scanned PDF, and it is what separates a searchable PDF from an image-only one."
      ]
    },
    {
      "heading": "OCR is a process, not a format feature",
      "body": [
        "Nothing in the PDF specification performs recognition. A PDF can store text and can store images, and it can store both on the same page, but the act of reading letters out of a picture happens in external software before anything is written to the file. This is why the same scanned page can be turned into very different PDFs depending on which OCR engine processed it, what languages it was configured for, and how carefully it aligned the text to the image.",
        "It also means OCR quality varies. Recognition can misread similar-looking characters, struggle with low-resolution or skewed scans, and mis-order columns or tables. When selecting text from an OCR'd PDF produces gibberish, the cause is usually recognition error or a missing or incorrect ToUnicode mapping rather than a flaw in the PDF format itself — the same factors that govern how text extraction from PDF behaves."
      ]
    },
    {
      "heading": "Languages, scripts, and what OCR is designed for",
      "body": [
        "Traditional OCR is built for printed, typeset characters, and its accuracy depends heavily on the language and script it was told to expect. Recognizing Latin text is well established; other scripts, including complex or right-to-left writing systems and dense CJK text, require engines and models trained for them. Feeding a page to an engine configured for the wrong language commonly produces plausible-looking but wrong characters.",
        "Handwriting is a different problem again. Recognizing handwritten input is handled by separate technology (sometimes called intelligent character recognition) and is generally far less reliable than recognizing machine print. For archival workflows, OCR text can be embedded alongside the image in standards such as PDF/A, which supports carrying a searchable text layer inside a long-term-preservation file."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where recognition happens",
      "value": "OCR is performed by external software; the PDF format only stores the resulting text, not the recognition step."
    },
    {
      "label": "How the text stays hidden",
      "value": "OCR text is usually drawn with text rendering mode 3 (neither filled nor stroked), so it is searchable but invisible over the scan."
    },
    {
      "label": "Starting point",
      "value": "An image-only PDF contains no text objects at all until OCR adds them."
    }
  ],
  "misconceptions": [
    {
      "claim": "Scanning a document into a PDF automatically makes it searchable.",
      "truth": "A plain scan is an image-only PDF with no text; it becomes searchable only after OCR runs and adds a text layer."
    },
    {
      "claim": "OCR replaces or alters the scanned image on the page.",
      "truth": "Typically the original image is kept unchanged and OCR adds a separate, usually invisible text layer; the visible appearance stays the same."
    },
    {
      "claim": "Any PDF with selectable text must have been OCR'd.",
      "truth": "PDFs created digitally already contain real text objects; OCR is only needed when the text exists solely as a picture, as in scans."
    }
  ],
  "faq": [
    {
      "q": "Does OCR change how my scanned PDF looks?",
      "a": "No. The standard approach keeps the original page image exactly as it is and adds the recognized text as an invisible layer behind it, so the document still displays as the scan you started with."
    },
    {
      "q": "Is OCR built into the PDF format?",
      "a": "No. The PDF specification defines how text and images are stored, but recognizing characters from an image is done by separate software. The PDF simply holds whatever text that software produced."
    },
    {
      "q": "Why can I select the text but copying it gives nonsense?",
      "a": "That points to recognition errors or a missing or incorrect ToUnicode mapping, so the characters on screen do not match the underlying codes. It is a property of how the text layer was produced, not a defect in the format."
    },
    {
      "q": "What is the difference between a searchable PDF and an image-only PDF?",
      "a": "An image-only PDF is just pictures of pages with no text objects. A searchable PDF adds a real text layer — either authored digitally or produced by OCR — that can be searched, selected, and copied."
    },
    {
      "q": "Does OCR work on handwriting?",
      "a": "Traditional OCR is designed for printed, typeset characters. Handwriting is recognized by separate technology and is generally far less reliable, so results vary widely and are not guaranteed."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "character-encoding-in-pdf",
      "glyph",
      "ccittfax-decode",
      "jbig2-decode"
    ],
    "relatedStandards": [
      "pdf-a"
    ],
    "relatedTools": [
      {
        "label": "Scan to PDF — Turn Paper Documents Into Clean PDFs",
        "path": "/scan-to-pdf"
      },
      {
        "label": "PDF Converter — Convert PDFs to Word, JPG, PNG and More",
        "path": "/pdf-converter"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Scan Documents to PDF with Your Phone",
        "path": "/guides/how-to-scan-documents-to-pdf"
      },
      {
        "label": "How to Convert Scanned Documents to PDF",
        "path": "/guides/how-to-convert-scanned-documents-to-pdf"
      },
      {
        "label": "How to Scan Handwritten Notes to PDF (Clean, Searchable)",
        "path": "/guides/how-to-scan-notes-to-pdf"
      }
    ]
  },
  "seeAlso": [
    "image-only-pdf",
    "searchable-pdf",
    "text-layer-in-pdf",
    "pdf-text-extraction",
    "tounicode-cmap",
    "text-rendering-modes",
    "pdf-metadata"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
