import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "searchable-pdf",
  "h1": "Searchable PDF",
  "cluster": "metadata-tooling",
  "aliases": [
    "searchable text PDF",
    "text-searchable PDF",
    "OCR PDF",
    "PDF with a text layer",
    "searchable scanned PDF"
  ],
  "definition": "A searchable PDF is one whose pages contain machine-readable, selectable text — created digitally or added over a scan by OCR — so its words can be found, highlighted, and copied.",
  "description": "A searchable PDF contains real, selectable text — either born-digital or added by OCR — so software can find, highlight, and copy its words.",
  "searchIntent": "concept",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "\"Searchable\" is not a separate file type or a flag you switch on — it describes whether a PDF's pages actually contain text that software can read as characters. When a document is created digitally from a word processor or design tool, its words are written into the page as text operators, so finding and copying them works from the start. A page scanned from paper is only a picture of text, and unless a text layer is added, there is nothing for a search to match.",
    "The difference matters the moment you press Ctrl+F or Cmd+F, try to select a sentence, paste text into another document, or let a screen reader announce a page. A searchable PDF answers all of those; an image-only PDF looks identical on screen but behaves like a photograph. Because the visual result is the same, many people assume every PDF is searchable until a search unexpectedly returns nothing.",
    "This page explains what makes a PDF searchable at the file level: how text is stored in page content, the two routes to searchability (born-digital text and OCR-added layers), why an OCR text layer is invisible, and why the quality of that text — its accuracy and its mapping back to real characters — determines whether search and copy actually work."
  ],
  "sections": [
    {
      "heading": "How a PDF Stores Searchable Text",
      "body": [
        "Text in a PDF lives inside page content streams, drawn by text-showing operators that place strings of character codes at specific positions. Those character codes are not stored as the plain words you read; they are indices into a font, and each viewer turns them back into readable characters when you search or copy. A PDF does not carry a pre-built full-text index — a viewer reads the text operators on the fly and matches your query against the characters it recovers.",
        "Recovering the right characters depends on how each font maps its codes to Unicode. When a font includes a ToUnicode CMap, viewers can translate glyph codes back to standard characters reliably, so copied text comes out clean. When that mapping is missing or wrong, a page can still display perfectly yet return garbled or empty results when searched or copied — which is why two visually identical PDFs can behave very differently under Ctrl+F."
      ]
    },
    {
      "heading": "Born-Digital Text vs OCR-Added Searchability",
      "body": [
        "There are two ways a PDF ends up searchable. The first is born-digital: the document is generated from a source that already knows its words — a word processor, a spreadsheet, a browser's print-to-PDF, or a design program — so the text is written directly into the page content and is searchable immediately, usually with the highest fidelity. The second applies to scans and photographs of documents, where the page arrives as an image with no characters at all.",
        "For those image-only pages, optical character recognition (OCR) analyzes the picture, recognizes the shapes as letters and words, and writes a corresponding text layer into the PDF. The result is a document that keeps its original scanned appearance but now also contains machine-readable text. OCR is a recognition step, not a perfect transcription: faint print, unusual fonts, skewed pages, and handwriting can all reduce accuracy, so an OCR'd PDF is searchable but not guaranteed to be error-free."
      ]
    },
    {
      "heading": "The Invisible Text Layer Over a Scan",
      "body": [
        "When OCR makes a scan searchable, it does not alter the visible image. Instead it adds recognized words as text positioned to line up with the picture underneath, drawn with a text rendering mode that produces no visible marks. The scanned image is what you see; the hidden text is what search, selection, and screen readers actually read. Because the two are aligned, highlighting a word in the image appears to select it, even though the highlight is really landing on the invisible text.",
        "This layered design is why a searchable scanned PDF looks byte-for-byte the same as its image-only version to the human eye, and why you often cannot tell them apart without trying to select text. It also explains a common surprise: if the invisible text is slightly misaligned or the OCR misread a word, you may select or copy something that does not match what you see, even though the page image is unchanged."
      ]
    },
    {
      "heading": "Why Searchability Matters",
      "body": [
        "Searchable text is what lets documents be found, retrieved, and reused. It powers in-document search, lets people copy quotes and figures instead of retyping them, and allows indexing systems and site search to locate a document by its contents rather than only its filename. Without it, a large archive of scans is effectively a stack of photographs that can only be browsed page by page.",
        "Searchable text is also the foundation for accessibility: screen readers announce the characters in a page, so an image-only page has nothing to read aloud, while a page with real (and ideally well-structured) text can be spoken. For long-term archiving and accessible documents, image-only pages are generally discouraged for exactly this reason — the words need to exist as text, not just as pixels. Adding proper structure on top (tagging) goes further than plain searchability, but having real, recoverable text is the necessary first step."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where the text lives",
      "value": "Inside page content streams, placed by text-showing operators — not in a separate search index."
    },
    {
      "label": "How OCR adds it",
      "value": "As an invisible text layer, drawn with a non-visible text rendering mode, aligned over the unchanged scanned image."
    },
    {
      "label": "What makes copy reliable",
      "value": "A ToUnicode CMap mapping each glyph code back to a standard Unicode character."
    },
    {
      "label": "Image-only pages",
      "value": "Look identical but contain no characters, so search, copy, and screen readers find nothing."
    }
  ],
  "misconceptions": [
    {
      "claim": "If I can read the words on the page, the PDF must be searchable.",
      "truth": "A scanned page shows words as part of an image. Without a text layer there are no characters to match, so search returns nothing even though the page is perfectly legible."
    },
    {
      "claim": "OCR redraws or replaces the scanned page.",
      "truth": "OCR typically leaves the visible image untouched and adds a separate, invisible text layer positioned over it, so the document still looks like the original scan."
    },
    {
      "claim": "Searching a PDF uses a built-in full-text index stored in the file.",
      "truth": "PDF has no such index. A viewer reads the text-showing operators in the page content at search time and matches the characters it recovers from them."
    }
  ],
  "faq": [
    {
      "q": "How can I tell whether a PDF is already searchable?",
      "a": "Try to select a line of text with your cursor, or open Find (Ctrl+F / Cmd+F) and search for a word you can see. If text highlights and the search jumps to it, the page has real text; if nothing selects, it is likely an image-only scan."
    },
    {
      "q": "How do I make a scanned PDF searchable?",
      "a": "Run OCR on it, which recognizes the words in the image and adds a text layer while keeping the scan's appearance. Capturing pages cleanly to begin with helps recognition accuracy."
    },
    {
      "q": "Does making a PDF searchable change how it looks?",
      "a": "No. OCR adds the recognized words as an invisible layer over the existing image, so the visible page stays the same — only its behavior under search, selection, and screen readers changes."
    },
    {
      "q": "Is a searchable PDF the same as an editable PDF?",
      "a": "No. Searchable means the words can be found and copied; it does not mean you can freely rewrite the page. Whether text can be edited depends on how the PDF was built, which is a separate question from searchability."
    },
    {
      "q": "Why can I search a PDF but the copied text comes out garbled?",
      "a": "The page has text, but the font lacks a correct ToUnicode mapping, or OCR misread the characters. The glyphs display fine, yet the codes behind them do not translate cleanly to the characters you expect."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "character-encoding-in-pdf",
      "text-showing-operators",
      "pdf-content-streams",
      "screen-readers-and-pdf",
      "well-tagged-pdf"
    ],
    "relatedTools": [
      {
        "label": "Scan to PDF — Turn Paper Documents Into Clean PDFs",
        "path": "/scan-to-pdf"
      },
      {
        "label": "PDF to Word — Convert PDF to Editable DOCX in Your Browser",
        "path": "/pdf-to-word"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Scan Handwritten Notes to PDF (Clean, Searchable)",
        "path": "/guides/how-to-scan-notes-to-pdf"
      },
      {
        "label": "How to Convert Scanned Documents to PDF",
        "path": "/guides/how-to-convert-scanned-documents-to-pdf"
      },
      {
        "label": "When to Use a Scanned PDF (and When Not To)",
        "path": "/guides/when-to-use-scanned-pdf"
      },
      {
        "label": "How to Fix Scanned PDF Quality (Sharpen, Straighten, Recolor)",
        "path": "/guides/how-to-fix-scanned-pdf-quality"
      }
    ]
  },
  "seeAlso": [
    "pdf-ocr",
    "image-only-pdf",
    "text-layer-in-pdf",
    "pdf-text-extraction",
    "tounicode-cmap",
    "text-rendering-modes",
    "tagged-pdf",
    "pdf-metadata"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
