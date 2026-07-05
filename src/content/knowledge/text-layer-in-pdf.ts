import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "text-layer-in-pdf",
  "h1": "The Text Layer in a Scanned PDF",
  "cluster": "metadata-tooling",
  "aliases": [
    "OCR text layer",
    "invisible text layer",
    "hidden text layer",
    "searchable text layer",
    "text-under-image layer"
  ],
  "definition": "The text layer in a scanned PDF is a set of machine-readable characters, usually rendered invisibly, that OCR software overlays on the page image so the scan can be searched and copied.",
  "description": "A scanned PDF is a page image; OCR adds an invisible text layer over it so the document becomes searchable and its text can be selected or copied.",
  "searchIntent": "metadata",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When you scan a paper document, the result is, to a computer, just a picture. Each page of a purely scanned PDF is a raster image of the original sheet, wrapped inside a PDF page. There are no letters the software can read — only pixels that happen to look like letters to a human eye. Such a file is often called an image-only PDF.",
    "The text layer is what bridges that gap. Optical character recognition (OCR) software examines the scanned image, works out which characters the shapes represent, and writes those characters back into the page as real PDF text. This recognized text is normally drawn invisibly and positioned to line up with the words in the picture, so the page still looks exactly like the scan while a hidden, machine-readable copy of its words rides along underneath.",
    "The distinction between the visible image and the invisible text matters because almost everything useful — searching, selecting, copying, and extracting content — works on the text layer, not on the picture a person sees. It also means the two can drift apart: the words a reader sees and the words a machine reads are produced by different processes, and how faithful the text layer is depends entirely on the quality of the OCR and the original scan."
  ],
  "sections": [
    {
      "heading": "How the Text Layer Sits on the Page",
      "body": [
        "A scanned page in a PDF is really two independent things stacked together. The first is the scan itself — a bitmap of the page, typically stored as an Image XObject and painted to fill the page area. The second is the recognized text, placed into the same page's content stream as ordinary text-showing operators with a chosen font. Because the image already shows the words to the human reader, the added text is drawn so it does not appear on screen.",
        "The usual technique is to set the text rendering mode to the value that neither fills nor strokes the glyphs, so the characters are laid down invisibly. Each recognized word is positioned to sit roughly where the corresponding word appears in the image, which is why highlighting a line of a scanned PDF tends to track the visible text reasonably well. Visually nothing changes; underneath, a complete, selectable transcript of the page now exists."
      ]
    },
    {
      "heading": "How the Layer Is Created by OCR",
      "body": [
        "Producing the layer is the job of OCR. The software analyses the raster image, isolates likely characters and words, and maps the shapes it finds to character codes. It then writes those codes into the page as text using a font and, for reliable extraction, a ToUnicode mapping so that copying yields the intended Unicode characters rather than raw glyph indices. The original image is left untouched; the text is simply added alongside it.",
        "Because the layer is reconstructed from pixels rather than carried over from a born-digital source, its fidelity is bounded by what the OCR engine could recognize. Clean, high-resolution, well-aligned scans generally yield accurate text; faint, skewed, noisy, or unusual-typeface pages yield more mistakes. The layer is an interpretation of the image, not a guaranteed transcription of it."
      ]
    },
    {
      "heading": "Why the Text Layer Matters",
      "body": [
        "The text layer is what turns an image-only scan into a searchable PDF. Full-text search, find-on-page, text selection, copy and paste, and programmatic text extraction all operate on this recognized text — not on the picture. Without it, a search tool has nothing to match and an extraction tool returns nothing, because there is no text in the file, only an image.",
        "For archives and long-term storage, the layer is also what makes a scanned collection findable years later, which is one reason scanned documents destined for PDF/A archiving are commonly given a text layer. It can additionally help assistive technology reach the words on the page, though a bare text layer is not the same as a fully tagged, logically structured document."
      ]
    },
    {
      "heading": "When the Image and the Text Disagree",
      "body": [
        "Because the visible image and the invisible text come from different processes, they can disagree. What a reader sees is the untouched scan; what a machine copies or searches is the OCR output, which may contain recognition errors, dropped words, or characters that look right but map to the wrong Unicode value. This is why copied text from a scanned PDF sometimes comes out garbled even though the page looks perfect.",
        "The gap has practical consequences. Invisible text is still real, extractable text: it can be copied, searched, and read by software even though a person cannot see it, so anything sensitive recognized into the layer needs to be handled deliberately rather than assumed hidden. Genuinely removing content from a scanned PDF means addressing both the visible image and the underlying text layer, which is the concern that PDF redaction is designed to handle."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Invisible text mechanism",
      "value": "OCR text is normally drawn with the text rendering mode that neither fills nor strokes the glyphs, so it is present but not visible."
    },
    {
      "label": "Two stacked components",
      "value": "A scanned page holds a raster image (typically an Image XObject) plus an overlaid layer of recognized text in the page content stream."
    },
    {
      "label": "Origin of the text",
      "value": "The text layer is generated by OCR software after scanning; it is not part of the original scan image and can contain recognition errors."
    }
  ],
  "misconceptions": [
    {
      "claim": "If a scanned PDF is searchable, the scan was converted into real text.",
      "truth": "The scan image is left in place. OCR adds a separate, usually invisible text layer over or under the unchanged picture, and the page you see is still the image."
    },
    {
      "claim": "The text layer must match the page because it lines up with what I see.",
      "truth": "The invisible text is OCR output produced independently of the image. It can contain misread characters, so selecting or copying may return words that differ from the visible scan."
    },
    {
      "claim": "Because the OCR text is invisible, it poses no privacy or cleanup concern.",
      "truth": "Invisible text is still real, extractable text that software can copy, search, and read, so it has to be handled — for example through redaction — like any other text in the file."
    }
  ],
  "faq": [
    {
      "q": "How can I tell whether a scanned PDF has a text layer?",
      "a": "Try selecting text with your cursor or running a find-on-page search. If words highlight or matches are found, a text layer is present. If nothing can be selected and searches never match, the file is likely image-only."
    },
    {
      "q": "Does adding a text layer change how the scanned page looks?",
      "a": "No. The recognized text is normally drawn invisibly and positioned to align with the words in the image, so the page appears identical to the original scan while gaining searchable, selectable text underneath."
    },
    {
      "q": "Why does text copied from a scanned PDF sometimes come out garbled?",
      "a": "Copied characters come from the OCR results and any ToUnicode mapping in the file. Recognition errors, low scan quality, unusual fonts, or missing Unicode mappings can all cause the copied characters to be wrong."
    },
    {
      "q": "Is a PDF with a text layer the same thing as a searchable PDF?",
      "a": "For scans, effectively yes. Adding an OCR text layer is exactly what turns an image-only scan into a searchable PDF, because search and selection operate on that recognized text rather than on the page image."
    },
    {
      "q": "Does a text layer make a scanned PDF fully accessible to screen readers?",
      "a": "It provides readable text, which helps, but full accessibility also depends on logical structure and tags. A plain text layer on its own is not the same as a tagged, well-structured PDF with a defined reading order."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "pdf-content-streams",
      "image-xobjects",
      "glyph",
      "character-encoding-in-pdf",
      "screen-readers-and-pdf"
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
        "label": "How to Convert Scanned Documents to PDF",
        "path": "/guides/how-to-convert-scanned-documents-to-pdf"
      },
      {
        "label": "How to Scan Handwritten Notes to PDF (Clean, Searchable)",
        "path": "/guides/how-to-scan-notes-to-pdf"
      },
      {
        "label": "How to Fix Scanned PDF Quality (Sharpen, Straighten, Recolor)",
        "path": "/guides/how-to-fix-scanned-pdf-quality"
      }
    ]
  },
  "seeAlso": [
    "pdf-ocr",
    "searchable-pdf",
    "image-only-pdf",
    "pdf-text-extraction",
    "text-rendering-modes",
    "tounicode-cmap",
    "text-showing-operators",
    "pdf-redaction"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
