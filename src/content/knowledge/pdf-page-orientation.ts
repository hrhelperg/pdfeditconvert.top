import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-page-orientation",
  "h1": "PDF Page Orientation",
  "cluster": "print-geometry",
  "aliases": [
    "page orientation",
    "portrait and landscape in PDF",
    "portrait vs landscape pages"
  ],
  "definition": "PDF page orientation is whether a page appears portrait or landscape, determined by its page-box dimensions together with the page's /Rotate value rather than a single orientation setting.",
  "description": "How PDF stores page orientation: portrait and landscape emerge from page-box dimensions plus the /Rotate entry, not a dedicated orientation flag.",
  "searchIntent": "printing",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Orientation is one of the first things a reader notices about a page — whether it stands tall (portrait) or lies wide (landscape) — yet PDF has no single field that records it. Instead, orientation falls out of the page's geometry: the shape of its boxes and an optional rotation value that a viewer applies at display time.",
    "This makes orientation a geometry-and-print concept rather than a stored label. Two PDFs can look identical on screen while describing their pages very differently underneath — one with a genuinely wide page box, another with a tall box turned a quarter of a rotation. Understanding that difference explains why a page can look upright but still behave as if it were sideways when you edit it or pull text out of it.",
    "The sections below cover how PDF expresses orientation, what the /Rotate entry does and does not do, why the same appearance can come from different internal layouts, and how viewers and printers turn all of this into what you finally see on the page."
  ],
  "sections": [
    {
      "heading": "Orientation Is Derived, Not Declared",
      "body": [
        "PDF has no key that says “this page is portrait” or “this page is landscape.” Orientation is instead an emergent property of two things: the dimensions of the page's boxes — chiefly the MediaBox, or the CropBox when one is present — and the page's /Rotate entry. When a box is taller than it is wide, the page's natural geometry is portrait; when it is wider than tall, the natural geometry is landscape.",
        "The /Rotate entry can then turn that natural geometry a quarter- or half-rotation before it reaches the screen or paper. What a person calls the page's orientation is the net result of both inputs together, which is why orientation is best understood as a computed outcome of the page geometry rather than a property you read straight from the file."
      ]
    },
    {
      "heading": "The /Rotate Entry",
      "body": [
        "The /Rotate entry in a page object is an integer that must be a multiple of 90 — 0, 90, 180, or 270. It specifies the number of degrees the page is rotated clockwise when it is displayed or printed, and when the entry is omitted the page is treated as unrotated (0 degrees).",
        "Crucially, /Rotate is a presentation instruction. It does not alter the page's content streams, its coordinate system, or the numbers stored for text and graphics; the content is authored in unrotated user space, and the viewer or printer applies the rotation only at render time. /Rotate is also one of PDF's inheritable page attributes, so it can be set on an ancestor node in the page tree and inherited by the pages beneath it, or overridden on an individual page."
      ]
    },
    {
      "heading": "Two Ways to Reach Landscape",
      "body": [
        "Because orientation combines box shape and rotation, more than one internal arrangement can produce the same on-screen result. A page can be landscape because its MediaBox is genuinely wider than it is tall with /Rotate at 0. Or it can be landscape because its MediaBox is portrait-shaped — taller than wide — carrying content that was drawn sideways, with /Rotate set to 90 or 270 to straighten it for display.",
        "Both versions look identical to a reader, but they differ in how the page geometry and coordinate system are laid out. That distinction matters whenever software measures the page, extracts text, stamps a watermark, or imposes pages for printing, because those operations work against the stored coordinates, not against the rotated appearance."
      ]
    },
    {
      "heading": "Orientation Across Viewing and Printing",
      "body": [
        "When a viewer renders a page, it reads the visible box dimensions and applies the /Rotate value to decide how the page sits on screen; a print pipeline does the same before placing the page on a physical sheet. Print dialogs often add their own “auto-rotate,” “fit,” or “scale” options that can flip or resize a page to match the paper, but those are choices made by the printing software at the moment of output, not properties stored inside the file.",
        "Orientation is defined per page, so a single document can freely mix portrait and landscape pages — a report in portrait with a wide table or chart dropped onto a landscape page, for example. Each page carries its own box dimensions and its own optional /Rotate value, and nothing requires them to agree across the document."
      ]
    },
    {
      "heading": "Why Orientation Trips People Up in Editing",
      "body": [
        "Because /Rotate leaves the underlying coordinates untouched, a page that looks upright on screen may still store its text and graphics in a rotated frame. Tools that read a page's content have to account for the /Rotate value to report positions and reading order the way a human sees them; software that ignores it can produce sideways selections or scrambled text extraction.",
        "When a scanned or camera-captured page arrives sideways or upside down, the usual remedy is to set or correct the /Rotate value so the display matches the intended reading direction, rather than re-rendering the content itself. That is a lightweight change to a single page attribute, and it is the mechanism most “rotate page” features rely on."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Rotation values",
      "value": "The /Rotate page entry must be a multiple of 90 (0, 90, 180, or 270) and gives the clockwise rotation applied when the page is displayed or printed."
    },
    {
      "label": "Default",
      "value": "When /Rotate is absent, the page is treated as unrotated (0 degrees)."
    },
    {
      "label": "Inheritable",
      "value": "/Rotate is an inheritable page attribute, so it can be set on a page-tree node and inherited by the pages beneath it."
    },
    {
      "label": "Per page",
      "value": "Orientation is defined page by page, so one PDF can contain both portrait and landscape pages."
    }
  ],
  "specification": {
    "typicalUsage": "Orientation is expressed through page-box dimensions (MediaBox/CropBox) plus the optional /Rotate entry, an integer multiple of 90 giving the clockwise display rotation.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF page carries a portrait or landscape orientation flag.",
      "truth": "There is no dedicated orientation property; viewers derive orientation from the page box's aspect ratio combined with the /Rotate entry."
    },
    {
      "claim": "Setting /Rotate physically rotates the page's content.",
      "truth": "/Rotate is a display and print instruction; it leaves the content streams and the underlying user-space coordinates unchanged, and the viewer applies the rotation at render time."
    },
    {
      "claim": "A landscape page always has a page box that is wider than it is tall.",
      "truth": "A page can appear landscape because it is a tall, portrait-shaped box rotated 90 or 270 degrees, so box dimensions alone do not determine what you see."
    }
  ],
  "faq": [
    {
      "q": "How is portrait versus landscape stored in a PDF?",
      "a": "It is not stored as a label. A viewer infers it from the page box dimensions (taller than wide is portrait, wider than tall is landscape) and then applies any /Rotate value to arrive at the final orientation."
    },
    {
      "q": "What values can the /Rotate entry hold?",
      "a": "Only multiples of 90 — 0, 90, 180, or 270. The number is the degrees of clockwise rotation applied when the page is displayed or printed, and omitting it means 0."
    },
    {
      "q": "Can pages in one PDF have different orientations?",
      "a": "Yes. Orientation is a per-page matter, so a document can mix portrait and landscape pages, each with its own box dimensions and its own optional /Rotate value."
    },
    {
      "q": "Does rotating a page change the text or how it is extracted?",
      "a": "The stored text coordinates stay the same, because /Rotate does not move content. Extraction tools have to read the /Rotate value to report positions in the order a human sees them; tools that ignore it may return sideways or jumbled results."
    },
    {
      "q": "What is the difference between rotating the view and saving a rotation?",
      "a": "Rotating the view is a temporary display choice in the reader that is not written to the file, while saving a rotation records a /Rotate value in the page object so every viewer shows the page the same way."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-geometry",
    "relatedConcepts": [
      "pdf-units-and-measurements",
      "pdf-page-tree",
      "pdf-page-scaling",
      "pdf-printing-pipeline"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "relatedTools": [
      {
        "label": "Rotate PDF — Fix Page Orientation in Your Browser",
        "path": "/rotate-pdf"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix Sideways or Upside-Down PDF Pages",
        "path": "/guides/how-to-fix-sideways-pdf-pages"
      },
      {
        "label": "How to Rotate Pages in a PDF (Free, No Upload)",
        "path": "/guides/how-to-rotate-pdf-pages"
      }
    ]
  },
  "seeAlso": [
    "pdf-page-rotation",
    "pdf-page-geometry",
    "pdf-page-boxes",
    "mediabox",
    "cropbox",
    "pdf-page-size",
    "pdf-coordinate-system",
    "user-space-and-device-space"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
