import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-page-size",
  "h1": "PDF Page Sizes",
  "cluster": "print-geometry",
  "aliases": [
    "PDF page dimensions",
    "PDF paper size",
    "PDF page format",
    "MediaBox dimensions",
    "page size in PDF"
  ],
  "definition": "PDF page size is the physical dimensions of a page, defined by its MediaBox in user-space units (1/72 inch by default), and it can vary from page to page within one document.",
  "description": "How PDF stores page size in the MediaBox using user-space units, why Letter is 612×792, and how pages in one file can differ in size.",
  "searchIntent": "concept",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A page size in a PDF is not a named paper stock like \"A4\" or \"Letter\" the way it is in a word processor. Instead, the format describes each page as a rectangle in an abstract coordinate space, and the page's size is simply the width and height of that rectangle. Named paper sizes only enter the picture as specific numeric values that software writes into the file.",
    "Those dimensions are carried by the MediaBox, an entry on each page that gives the page rectangle's corners. Coordinates are measured in default user-space units, where one unit is 1/72 inch, so page sizes come out as point values: a US Letter page is 612 by 792 units and an ISO A4 page is roughly 595 by 842. Understanding this measurement is the key to reading, comparing, or normalizing page sizes reliably.",
    "Because the size lives on each page (or is inherited from the page tree), a single PDF is free to mix sizes and orientations. That flexibility is useful, but it also explains a lot of everyday confusion — pages that look different while scrolling, print jobs that scale unexpectedly, or a page whose stored dimensions do not match what appears on screen."
  ],
  "sections": [
    {
      "heading": "How a PDF Stores Page Size",
      "body": [
        "Every PDF page is a dictionary, and its dimensions come from the MediaBox entry — an array of four numbers, [llx lly urx ury], giving the coordinates of the page rectangle's lower-left and upper-right corners in user space. The width is urx minus llx and the height is ury minus lly. The lower-left corner is commonly placed at the origin [0 0], but the format does not require it; what defines the size is the difference between the two corners. MediaBox is the one page-boundary entry that a conforming page must effectively have.",
        "MediaBox is also an inheritable attribute. Rather than repeat it on every page, a document can set it once on a node in the page tree and let descendant pages inherit the value, overriding it only where a page needs a different size. That inheritance is why a page object you inspect directly may list no MediaBox at all — the effective value is coming from an ancestor node."
      ]
    },
    {
      "heading": "User-Space Units and the 1/72-Inch Point",
      "body": [
        "Page coordinates are expressed in default user space, whose unit is 1/72 inch — the same measure as a typographic point. That fixed relationship is why standard paper sizes have exact point values: US Letter (8.5 by 11 inches) is 612 by 792 units, US Legal is 612 by 1008, and ISO A4 (210 by 297 mm) is about 595 by 842. Software that offers an \"A4\" or \"Letter\" option is simply writing those numbers into the MediaBox.",
        "For very large media the point-based unit becomes limiting. Adobe Acrobat historically restricted pages to 14,400 units (200 inches) on a side. PDF 1.6 added the UserUnit entry, a multiplier that redefines how many inches one unit represents (default 1.0), so a document can describe engineering drawings, maps, or banners larger than that ceiling without changing how the coordinates themselves are written."
      ]
    },
    {
      "heading": "The MediaBox Is the Canvas, Not Always the View",
      "body": [
        "MediaBox sets the full extent of the page, but it is not necessarily what a reader sees. The CropBox defines the visible, clipped region and defaults to the MediaBox when it is absent; a smaller CropBox trims the displayed and printed area even though the underlying MediaBox is unchanged. Print-oriented boxes — BleedBox, TrimBox, and ArtBox — mark finer regions inside that area for production and are not meant to extend beyond the CropBox.",
        "Orientation adds another layer. The Rotate entry turns the page in 90-degree steps for display without altering the MediaBox numbers, so a page with a portrait MediaBox can appear in landscape. Because of cropping and rotation, reading the raw MediaBox dimensions is not always the same as knowing how the page will actually look."
      ]
    },
    {
      "heading": "Why Pages in One File Can Differ in Size",
      "body": [
        "Since each page carries or inherits its own MediaBox, a single PDF can mix sizes freely — a Letter-sized report with an A3 foldout, or a merged file whose sections came from different sources. Nothing in the format forces every page to match.",
        "That flexibility has practical consequences. Viewers typically fit each page to the window independently, so mixed sizes can look inconsistent while scrolling; printers and imposition software must decide how to place differing pages on a sheet, often scaling to fit; and downstream steps such as booklet printing assume predictable trims. When consistency matters, normalizing the page size (or the CropBox) before sharing helps avoid surprises."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Default user-space unit",
      "value": "1/72 inch (one typographic point)"
    },
    {
      "label": "US Letter page",
      "value": "612 × 792 units (8.5 × 11 in)"
    },
    {
      "label": "ISO A4 page",
      "value": "about 595 × 842 units (210 × 297 mm)"
    },
    {
      "label": "Where size is stored",
      "value": "The MediaBox page attribute (inheritable via the page tree)"
    }
  ],
  "misconceptions": [
    {
      "claim": "Every page in a PDF has to be the same size.",
      "truth": "Page size is set per page by each page's MediaBox, so one file can freely mix Letter, A4, landscape, and oversized pages."
    },
    {
      "claim": "The MediaBox always equals what you see on screen.",
      "truth": "Viewers clip to the CropBox, which only defaults to the MediaBox; a smaller CropBox, or a Rotate value, can make the displayed page differ from the raw MediaBox."
    },
    {
      "claim": "PDF page size is measured in millimeters or inches.",
      "truth": "Dimensions are stored in user-space units — 1/72 inch by default — and names like A4 or Letter are just conventional point values, not a stored 'paper type.'"
    }
  ],
  "faq": [
    {
      "q": "What unit are PDF page dimensions stored in?",
      "a": "In default user-space units, where one unit is 1/72 inch (a typographic point), unless a UserUnit entry scales that unit for large-format pages."
    },
    {
      "q": "How large is a US Letter or A4 page in PDF units?",
      "a": "US Letter is 612 × 792 units, ISO A4 is roughly 595 × 842, and US Legal is 612 × 1008 — the point equivalents of their physical dimensions."
    },
    {
      "q": "Where is the page size stored in a PDF?",
      "a": "In the MediaBox entry of each page dictionary. It can be set on the page itself or inherited from an ancestor node in the page tree."
    },
    {
      "q": "Is there a maximum PDF page size?",
      "a": "Adobe Acrobat historically capped pages at 14,400 units (200 inches) per side. The UserUnit entry, added in PDF 1.6, lets a document scale the unit so larger physical sizes can be described."
    },
    {
      "q": "Does rotating a page change its size?",
      "a": "No. The Rotate entry only changes how the page is displayed; the MediaBox width and height stay the same."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-geometry",
    "relatedConcepts": [
      "bleedbox",
      "trimbox",
      "artbox",
      "pdf-page-rotation",
      "pdf-page-tree",
      "pdf-page-scaling"
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
        "label": "How to Fix Sideways or Upside-Down PDF Pages",
        "path": "/guides/how-to-fix-sideways-pdf-pages"
      },
      {
        "label": "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
        "path": "/guides/how-to-fix-pdf-printing-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-page-geometry",
    "mediabox",
    "cropbox",
    "pdf-page-boxes",
    "pdf-units-and-measurements",
    "pdf-page-orientation",
    "pdf-coordinate-system",
    "user-space-and-device-space"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
