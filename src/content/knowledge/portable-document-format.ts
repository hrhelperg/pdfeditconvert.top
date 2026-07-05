import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "portable-document-format",
  "h1": "Portable Document Format (PDF)",
  "cluster": "foundations",
  "aliases": [
    "PDF",
    "Adobe PDF",
    "PDF file",
    "PDF format"
  ],
  "definition": "The Portable Document Format (PDF) is a fixed-layout file format that stores a document's text, fonts, graphics, and page design so it looks and prints the same on any device.",
  "description": "PDF is a fixed-layout document format created by Adobe and standardized as ISO 32000. Learn what a PDF is, how it works, and why it looks the same everywhere.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "The Portable Document Format, almost always shortened to PDF, is a way of packaging a finished document so that it displays and prints the same regardless of who opens it or what software they use. Instead of leaving layout up to the viewing program, a PDF records where every piece of text, image, and graphic belongs on each page, and it can carry its own fonts along with it.",
    "That fixed, self-contained design is the whole point. A word processor file is meant to be edited and can reflow its content to fit different screens; a PDF is meant to preserve a specific appearance. This makes PDF a common choice for contracts, invoices, forms, reports, manuals, and scanned records, where the exact look of the page matters.",
    "Originally an Adobe format, PDF became an open international standard in 2008 and is now maintained through ISO. Because the specification is open, a wide range of browsers, operating systems, and independent tools can read and write PDF files, not just Adobe's own applications."
  ],
  "sections": [
    {
      "heading": "How a PDF Describes a Page",
      "body": [
        "A PDF does not usually store a page as a single flat picture. Instead it describes how to draw the page: where each run of text sits, which fonts and glyphs to use, and how to render vector shapes and embedded images. These drawing instructions live in content streams, a sequence of operators and operands that a viewer executes to paint each page. Because the format records positions rather than a fixed grid of pixels, text normally stays selectable and searchable, and vector graphics stay sharp at any zoom level.",
        "PDF places everything on a coordinate system measured in points, where one point equals 1/72 of an inch, with the origin at the bottom-left corner of the page by default. A PDF can also embed the fonts it uses, so the document appears with the intended typefaces even on a machine that does not have them installed. That position-based, self-contained model is what lets a PDF look and print consistently across different devices and software."
      ]
    },
    {
      "heading": "From an Adobe Format to an Open ISO Standard",
      "body": [
        "PDF began at Adobe in the early 1990s, growing out of an internal effort (known as the Camelot project) associated with co-founder John Warnock, and was released alongside the first Acrobat software in 1993. It descends from PostScript, Adobe's page-description language, but replaces PostScript's general-purpose programming model with a fixed document structure that viewers can open and navigate directly. For its first years, Adobe published and controlled the specification.",
        "In 2008, PDF became an open international standard when ISO published ISO 32000-1, based on Adobe's PDF 1.7 specification. Since then the format has been maintained through ISO rather than by Adobe alone. The current generation, PDF 2.0, is defined by ISO 32000-2, first published in 2017 and later revised. Being an open standard is a large part of why so many independent viewers, browsers, and libraries can reliably read and create PDF files."
      ]
    },
    {
      "heading": "What Is Inside a PDF File",
      "body": [
        "A PDF file has four broad parts. It starts with a header line beginning with the marker %PDF- followed by a version number. The body then holds the document's content as a collection of numbered objects. A cross-reference table records the exact byte position of every object, so a viewer can jump straight to any one of them without reading the entire file. Finally, a trailer points back to the cross-reference table and to the document catalog, the root object from which the rest of the document is reached.",
        "The objects themselves come in a small set of types: booleans, numbers, strings, names, arrays, dictionaries, and streams. Dictionaries are key-value maps that describe things like pages and fonts, while streams carry larger or compressed data such as content streams, embedded fonts, and images. Pages are organized in a page tree, and optional features like annotations, form fields, bookmarks, and metadata attach onto that same structure."
      ]
    },
    {
      "heading": "The PDF Standards Family",
      "body": [
        "Beyond the base format, several specialized standards define constrained profiles of PDF for particular jobs. PDF/A restricts PDF for long-term archiving, requiring documents to be self-contained (for example, with fonts embedded) so they remain readable in the future. PDF/X targets professional print production, and PDF/UA sets requirements for accessible, well-tagged documents. Other members include PDF/E for engineering workflows and PDF/VT for variable-data printing.",
        "Each of these is a subset or profile rather than a separate file format: a valid PDF/A file is still an ordinary PDF that any reader can open, but it also satisfies extra rules for its purpose. Knowing which profile a document targets helps explain why some PDFs deliberately forbid certain features, such as encryption or the use of fonts that are not embedded."
      ]
    },
    {
      "heading": "Why PDF Became a Default for Documents",
      "body": [
        "The core appeal of PDF is fidelity: a document arrives looking the way its author intended, regardless of the recipient's operating system, screen size, or software. Because a PDF can bundle its own fonts, images, and layout, it does not depend on the viewer having the same applications or resources. That makes it well suited to finished documents meant to be read, printed, shared, or archived rather than heavily rewritten.",
        "PDF also supports a wide range of capabilities layered on top of static pages, including interactive form fields, annotations, digital signatures, encryption, and structured tags for accessibility. This combination of stable layout and rich optional features is why PDF stays common for contracts, invoices, reports, forms, and scanned records. When you do need to change one, dedicated tools can edit its text, reorder its pages, or convert it into an editable format."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Created by",
      "value": "Adobe, in the early 1990s (first released with Acrobat in 1993)"
    },
    {
      "label": "Open standard",
      "value": "ISO 32000-1, published in 2008, based on PDF 1.7"
    },
    {
      "label": "Current version",
      "value": "PDF 2.0, defined by ISO 32000-2 (first published 2017)"
    },
    {
      "label": "File signature and MIME type",
      "value": "Files begin with the marker %PDF-; the MIME type is application/pdf"
    }
  ],
  "specification": {
    "introduced": "1993 (Adobe); open ISO standard since 2008",
    "iso": "ISO 32000",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Fixed-layout documents for viewing, printing, sharing, and archiving",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pdf-a",
      "pdf-x",
      "pdf-ua"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF is basically just a picture of a page.",
      "truth": "Most PDFs store selectable text and scalable vector graphics; only scanned or image-only PDFs are actual pictures of pages, which is why those need OCR to become searchable."
    },
    {
      "claim": "You need Adobe software to open or create a PDF.",
      "truth": "PDF has been an open ISO standard since 2008, so browsers, operating systems, and many third-party tools can read and write it without any Adobe software."
    },
    {
      "claim": "PDFs cannot be edited.",
      "truth": "PDFs can be edited — text, images, and pages can all be changed — but the format is built to preserve layout, so edits tend to be more deliberate than in a word processor."
    }
  ],
  "faq": [
    {
      "q": "What does PDF stand for?",
      "a": "PDF stands for Portable Document Format. The name reflects its purpose: a document you can move between devices and applications while keeping its exact layout."
    },
    {
      "q": "Who created the PDF format and when?",
      "a": "Adobe created PDF in the early 1990s, growing out of an internal project associated with co-founder John Warnock, and released the first version alongside Acrobat in 1993."
    },
    {
      "q": "How is a PDF different from a Word document (DOCX)?",
      "a": "A DOCX file is designed to be edited and can reflow its text to fit the screen, while a PDF is a fixed-layout format that preserves exact positioning. PDF suits finished documents; DOCX suits ones still being written."
    },
    {
      "q": "What file extension and MIME type does PDF use?",
      "a": "PDF files use the .pdf extension and the MIME type application/pdf. Internally, every PDF also begins with the text marker %PDF- followed by a version number."
    },
    {
      "q": "Why does a PDF look the same on every device?",
      "a": "Because a PDF records the exact position of every element and can embed its own fonts and images, a viewer does not need the original application or resources to reproduce the intended layout."
    }
  ],
  "graph": {
    "childConcepts": [
      "history-of-pdf",
      "iso-32000",
      "pdf-versions",
      "pdf-1-4",
      "pdf-1-5",
      "pdf-1-6",
      "pdf-1-7",
      "pdf-2-0",
      "pdf-file-structure",
      "linearized-pdf",
      "pdf-coordinate-system",
      "pdf-vs-postscript"
    ],
    "relatedConcepts": [
      "pdf-objects",
      "pdf-content-streams",
      "pdf-document-catalog",
      "pdf-mime-type",
      "pdf-magic-number",
      "why-standardize-pdf"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-standards-overview",
      "pdf-a",
      "pdf-x",
      "pdf-ua"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "PDF Converter — Convert PDFs to Word, JPG, PNG and More",
        "path": "/pdf-converter"
      },
      {
        "label": "Free PDF Tools — Browser-Based, No Upload Needed",
        "path": "/pdf-tools"
      }
    ],
    "relatedGuides": [
      {
        "label": "Why PDF Is Still the Default for Documents in 2026",
        "path": "/guides/why-pdf-is-still-popular"
      },
      {
        "label": "PDF vs DOCX — Which Format Should You Use?",
        "path": "/guides/pdf-vs-docx"
      },
      {
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      }
    ]
  },
  "seeAlso": [
    "history-of-pdf",
    "iso-32000",
    "pdf-versions",
    "pdf-file-structure",
    "pdf-2-0",
    "pdf-standards-overview",
    "pdf-vs-postscript",
    "pdf-1-7"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
