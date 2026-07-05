import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-page-rotation",
  "h1": "PDF Page Rotation",
  "cluster": "print-geometry",
  "aliases": [
    "/Rotate entry",
    "Rotate page attribute",
    "page rotation",
    "viewing rotation"
  ],
  "definition": "PDF page rotation is the /Rotate page attribute that turns a page clockwise by a multiple of 90 degrees for display and print, without altering the stored content or coordinates.",
  "description": "PDF page rotation uses the /Rotate page entry: a multiple of 90 degrees that turns a page clockwise for display and print without changing its content.",
  "searchIntent": "printing",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every page in a PDF can carry a small instruction that tells viewers and printers to turn it a quarter, half, or three-quarter turn before showing it. That instruction is page rotation, stored in the page object's /Rotate entry as a number of degrees clockwise.",
    "Rotation exists because pages do not always arrive the right way up. Scanners and phone cameras frequently capture sheets sideways, and a single document may mix portrait letters with landscape tables or spreadsheets. Rather than redraw the content, PDF lets a page keep its original coordinates and simply flags how it should be turned. That makes rotation cheap to apply and easy to undo.",
    "The important nuance is that /Rotate changes presentation only. The content stream, the page boxes, and the coordinate system all stay in their original, unrotated orientation, and the viewer applies the turn at render time. This distinction matters for text extraction, page-box math, and any tool that reasons about where things sit on a page."
  ],
  "sections": [
    {
      "heading": "The /Rotate Page Entry",
      "body": [
        "Page rotation is expressed by an optional key named /Rotate in the page dictionary. Its value is an integer number of degrees by which the page is rotated clockwise when displayed or printed, and that value must be a multiple of 90. When the entry is absent, the rotation defaults to 0, meaning the page is shown exactly as its coordinates describe.",
        "Because it lives at the level of the page object rather than inside the content, /Rotate acts as a top-level display directive. It is not a graphics operator and it is not part of any transformation applied while drawing text or images. A viewer reads the value once per page and rotates the whole rendered page as a final step."
      ]
    },
    {
      "heading": "Rotation Is Display-Only, Not a Content Change",
      "body": [
        "Setting /Rotate does not move, re-encode, or rewrite anything inside the page. The content stream still draws in the same user space, and the page boxes (MediaBox, CropBox, and the rest) keep their original coordinates. The rotation is layered on top only when the page is presented, so the stored geometry is unaffected.",
        "This has a practical consequence: tools that read coordinates, such as text extraction or annotation placement, see positions in the unrotated space and must account for /Rotate themselves. It also contrasts with baking a rotation into the content using a coordinate transform in the content stream, which physically re-orients the drawing while leaving /Rotate at zero. The two approaches can look identical on screen but behave very differently under the hood."
      ]
    },
    {
      "heading": "Inheritance Through the Page Tree",
      "body": [
        "/Rotate is one of the inheritable page attributes, alongside MediaBox, CropBox, and Resources. That means it can be set on an interior node of the page tree and apply to every descendant page, or be specified on an individual page to override an inherited value. A document that should be entirely landscape can therefore carry a single rotation high in the tree instead of repeating it on every page.",
        "Inheritance also explains why removing or normalizing rotation can require looking beyond the page itself. If a page has no /Rotate entry of its own, its effective rotation comes from the nearest ancestor that does, falling back to 0 only when none is present anywhere along the path."
      ]
    },
    {
      "heading": "Rotation Versus Orientation",
      "body": [
        "Page orientation, meaning whether a page reads as portrait or landscape, is a visual outcome rather than a stored flag. It follows from the dimensions of the visible page box after any rotation is applied. A wide MediaBox produces a landscape page with no rotation at all, while a tall, portrait MediaBox paired with a /Rotate of 90 or 270 produces a page that displays as landscape.",
        "That means there is more than one way to reach the same on-screen result, which is a common source of confusion when files are compared or combined. Two pages can look identically oriented yet differ in whether the landscape effect comes from the box shape or from the rotation entry, and that difference affects how downstream tools and print pipelines handle them."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Storage",
      "value": "Held in the /Rotate key of the page object (page dictionary)."
    },
    {
      "label": "Allowed values",
      "value": "Degrees clockwise, and must be a multiple of 90 (commonly 0, 90, 180, 270)."
    },
    {
      "label": "Default",
      "value": "0 degrees when /Rotate is absent."
    },
    {
      "label": "Scope",
      "value": "An inheritable page attribute; applied at display and print time, not stored in the content stream."
    }
  ],
  "specification": {
    "iso": "ISO 32000 (core PDF)",
    "typicalUsage": "Rotating scanned, landscape, or misoriented pages for correct on-screen and printed display.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Setting /Rotate physically rotates the page's text and graphics inside the file.",
      "truth": "It only changes how the page is displayed and printed; the content stream and coordinates stay in their original, unrotated orientation."
    },
    {
      "claim": "You can rotate a page by any angle using /Rotate.",
      "truth": "The /Rotate value must be a multiple of 90 degrees. Arbitrary angles require transforming the content itself rather than setting this entry."
    },
    {
      "claim": "A landscape page always has a wide MediaBox.",
      "truth": "A page can also appear landscape by pairing a portrait MediaBox with a /Rotate of 90 or 270, so orientation is not determined by box shape alone."
    }
  ],
  "faq": [
    {
      "q": "What values can PDF page rotation take?",
      "a": "A number of degrees clockwise that is a multiple of 90. Values such as 0, 90, 180, and 270 are the usual ones, and other multiples are interpreted as equivalent rotations."
    },
    {
      "q": "Does rotating a PDF page change its file size?",
      "a": "Not meaningfully. Rotation only sets or updates a small integer entry in the page object; it does not re-encode text or images, so the content data stays the same size."
    },
    {
      "q": "Why does text extraction behave as if the page were not rotated?",
      "a": "Because /Rotate is display-only. Text is positioned in the unrotated user space, so extraction tools read those original coordinates and must apply the rotation themselves to match what a reader sees."
    },
    {
      "q": "How is page rotation different from flipping or mirroring a page?",
      "a": "Rotation turns the page about its center in 90-degree steps. Mirroring is a reflection, which the /Rotate entry cannot express; that requires a coordinate transform in the content."
    },
    {
      "q": "Can different pages in one PDF have different rotations?",
      "a": "Yes. /Rotate is a per-page attribute, and while it can be inherited from the page tree, each page can also carry its own value and override the inherited one."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-geometry",
    "relatedConcepts": [
      "pdf-page-size",
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
        "label": "How to Rotate Pages in a PDF (Free, No Upload)",
        "path": "/guides/how-to-rotate-pdf-pages"
      },
      {
        "label": "How to Fix Sideways or Upside-Down PDF Pages",
        "path": "/guides/how-to-fix-sideways-pdf-pages"
      }
    ]
  },
  "seeAlso": [
    "pdf-page-orientation",
    "pdf-page-geometry",
    "pdf-page-boxes",
    "mediabox",
    "cropbox",
    "pdf-coordinate-system",
    "user-space-and-device-space",
    "pdf-page-tree"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
