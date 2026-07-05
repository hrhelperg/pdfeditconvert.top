import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "mediabox",
  "h1": "MediaBox in PDF",
  "cluster": "print-geometry",
  "aliases": [
    "Media box",
    "/MediaBox",
    "MediaBox entry",
    "media box rectangle"
  ],
  "definition": "The MediaBox is a required PDF page attribute that defines the full rectangular boundary of the page's medium — its physical sheet size — in default user-space units of 1/72 inch.",
  "description": "The MediaBox defines a PDF page's full sheet dimensions as a four-number rectangle in 1/72-inch units, and is the one page box every page must have.",
  "searchIntent": "printing",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every page in a PDF has to declare how big it is and what coordinate space its content lives in. That job belongs to the MediaBox: the required page attribute that defines the outer rectangle of the medium — in effect, the sheet of paper the page is imagined to be printed on.",
    "The MediaBox is the foundation of PDF's family of page boxes. Four other boxes — CropBox, BleedBox, TrimBox and ArtBox — describe progressively narrower regions for viewing, bleed, trimming and artwork, and each ultimately falls back to the MediaBox when it is not specified. Understanding the MediaBox is therefore the starting point for understanding PDF page geometry and print production.",
    "Because its values are plain numbers in a resolution-independent coordinate system, the MediaBox is also where page-size questions, orientation confusion and printing surprises often originate. This page explains what the MediaBox is, how its rectangle is encoded, and how it relates to the other page boxes and to the page tree."
  ],
  "sections": [
    {
      "heading": "What the MediaBox Contains",
      "body": [
        "The MediaBox appears in a page object under the key /MediaBox and holds a rectangle — an array of four numbers, conventionally written [llx lly urx ury], giving the coordinates of the lower-left and upper-right corners. Those coordinates are expressed in default user space, whose unit is 1/72 inch (one typographic point) unless a UserUnit entry rescales it.",
        "Subtracting the x-values gives the page width and the y-values the height. A US Letter page is usually [0 0 612 792], which is 8.5 by 11 inches, and A4 is roughly [0 0 595 842]. The lower-left corner is often 0 0 but does not have to be: the four numbers simply describe two diagonally opposite corners, and a reader normalizes them into a rectangle regardless of order or origin."
      ]
    },
    {
      "heading": "Why It Is Required and How the Other Boxes Depend on It",
      "body": [
        "Of the five page boxes, the MediaBox is the only one a page must have. It represents the full medium — the physical sheet the page content sits on. The CropBox, BleedBox, TrimBox and ArtBox are all optional, and when they are absent they fall back toward the MediaBox: the CropBox defaults to the MediaBox, and the other three default to the CropBox.",
        "Because of this cascade, the MediaBox is the ultimate backstop for a page's geometry — remove every other box and the MediaBox still fully defines the page. It also bounds the CropBox, which is expected to lie within the MediaBox and is clamped to it by readers. All page content is drawn in this coordinate space; anything that falls outside the visible box is simply not shown rather than deleted from the file."
      ]
    },
    {
      "heading": "Inheritance Through the Page Tree",
      "body": [
        "MediaBox is an inheritable attribute. Instead of repeating it on every page object, a PDF can set it once on an intermediate node of the page tree, and each descendant page that omits its own MediaBox inherits that value. The same inheritance applies to CropBox, Resources and Rotate.",
        "A reader resolves the effective MediaBox by walking up the page tree until it finds one. This is why a page dictionary can appear to have no MediaBox yet still be valid — the value lives on an ancestor node. A file in which no MediaBox can be found anywhere for a page is malformed; viewers typically cope by substituting a default page size such as US Letter."
      ]
    },
    {
      "heading": "MediaBox, Rotation and Large Formats",
      "body": [
        "The MediaBox is stated in the page's own, unrotated coordinate system. The separate /Rotate entry turns the page in 90-degree steps for display and printing, but it does not change the MediaBox numbers: a landscape scan may still carry a portrait-shaped MediaBox together with a 90-degree rotation. To reason about what a viewer actually shows, you combine the CropBox with the rotation, not the raw MediaBox alone.",
        "For output larger than the historical page-size ceiling, PDF 1.6 added the UserUnit entry, which scales the default user-space unit so the same four MediaBox numbers can describe much larger sheets. In print production the MediaBox usually needs to be large enough to enclose the trim area plus any bleed and printer's marks, which occupy the space between the TrimBox or BleedBox and the outer edge of the medium."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Required?",
      "value": "Yes — the only page box every PDF page must have, directly or by inheritance."
    },
    {
      "label": "Encoding",
      "value": "An array of four numbers, [llx lly urx ury], marking two opposite corners."
    },
    {
      "label": "Units",
      "value": "Default user space; 1 unit = 1/72 inch (one point) unless UserUnit rescales it."
    },
    {
      "label": "Inheritable",
      "value": "Yes — can be set on a page-tree node and inherited by descendant pages."
    }
  ],
  "specification": {
    "iso": "ISO 32000-1 / ISO 32000-2",
    "introduced": "Part of PDF's page model since its earliest versions",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Declares the sheet size and coordinate boundary of every PDF page; the base box that CropBox, BleedBox, TrimBox and ArtBox fall back to.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The MediaBox is the area a viewer displays on screen.",
      "truth": "The visible region is governed by the CropBox, which merely defaults to the MediaBox. The MediaBox is the full medium and can be larger than what is shown."
    },
    {
      "claim": "A MediaBox must start at coordinates 0 0.",
      "truth": "The lower-left corner can be any coordinates. The array just names two opposite corners, so a nonzero origin is valid and is normalized by readers."
    },
    {
      "claim": "MediaBox dimensions are measured in pixels.",
      "truth": "They are in default user-space units — points at 1/72 inch — which are resolution-independent. Pixels only appear when a page is rasterized at a chosen DPI."
    }
  ],
  "faq": [
    {
      "q": "What do the four numbers in a MediaBox mean?",
      "a": "They are the x and y of the lower-left corner followed by the x and y of the upper-right corner of the page rectangle, in user-space units. Width is the difference of the x-values, height the difference of the y-values."
    },
    {
      "q": "How do I convert a MediaBox into inches or millimetres?",
      "a": "Divide the width and height in units by 72 to get inches, since one unit is 1/72 inch. For example, [0 0 612 792] is 612/72 by 792/72, or 8.5 by 11 inches. Multiply inches by 25.4 for millimetres."
    },
    {
      "q": "Can different pages in one PDF have different MediaBox sizes?",
      "a": "Yes. Each page can define its own MediaBox, so a single file can freely mix page sizes and orientations, such as a letter-size cover followed by tabloid inserts."
    },
    {
      "q": "Does the MediaBox account for page rotation?",
      "a": "No. The MediaBox is defined in the page's unrotated coordinate system. The /Rotate entry rotates the page for display and printing separately, without altering the MediaBox numbers."
    },
    {
      "q": "What happens if a page has no MediaBox?",
      "a": "It must inherit one from an ancestor node in the page tree. If no MediaBox exists anywhere for that page the file is malformed, and viewers generally fall back to a default such as US Letter."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-boxes",
    "relatedConcepts": [
      "user-space-and-device-space",
      "pdf-units-and-measurements",
      "pdf-page-rotation",
      "pdf-page-tree",
      "pdf-page-orientation"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-x"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "Rotate PDF — Fix Page Orientation in Your Browser",
        "path": "/rotate-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
        "path": "/guides/how-to-fix-pdf-printing-issues"
      },
      {
        "label": "How to Fix Sideways or Upside-Down PDF Pages",
        "path": "/guides/how-to-fix-sideways-pdf-pages"
      }
    ]
  },
  "seeAlso": [
    "pdf-page-boxes",
    "cropbox",
    "trimbox",
    "bleedbox",
    "artbox",
    "pdf-coordinate-system",
    "pdf-page-size",
    "pdf-page-geometry"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
