import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-units-and-measurements",
  "h1": "Units and Measurements in PDF",
  "cluster": "print-geometry",
  "aliases": [
    "PDF user units",
    "PDF points",
    "Default user space unit",
    "PDF measurement units",
    "UserUnit"
  ],
  "definition": "In PDF, positions and sizes are plain numbers in user space, where one unit equals 1/72 inch (one point) by default — a device-independent way to measure a page.",
  "description": "PDF measures everything in user-space units where one unit is 1/72 inch by default. See how points, the coordinate origin, and UserUnit size a page.",
  "searchIntent": "printing",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF page is a coordinate grid, and everything drawn on it — text, lines, images, page boxes — is placed using plain numbers. Those numbers carry no explicit label such as inches or millimetres. Their meaning comes from the page's user space, the coordinate system PDF uses to describe geometry independently of any particular screen or printer.",
    "In the default user space, one unit equals 1/72 inch, which is also the size of a typographic (PostScript/DTP) point. That is why a US Letter page measures 612 by 792 units and an A4 page measures about 595 by 842 units. Because the unit is defined as a fraction of an inch rather than as pixels, the same coordinates describe the same physical size whether the page is shown on a phone, a laptop, or a commercial press.",
    "This default can be adjusted. Content can be scaled and rotated through coordinate transformations, very large pages can redefine the unit with a UserUnit value, and a document can attach a real-world scale so that measuring tools report distances in metres or feet. Understanding these layers explains how a PDF stays crisp at any zoom and prints at a predictable size."
  ],
  "sections": [
    {
      "heading": "The Default User Space Unit",
      "body": [
        "PDF describes page geometry in an abstract coordinate system called user space. By default, one user-space unit is 1/72 inch, the origin sits at the lower-left corner of the page, the x-axis increases to the right, and the y-axis increases upward. Coordinates and lengths are stored simply as numbers — a rectangle from (0, 0) to (612, 792) is a US Letter page — with the 1/72-inch unit supplying the physical meaning.",
        "This design makes PDF resolution-independent. The file never records pixels or dots for its page layout; it records geometry. A viewer or printer decides how many device pixels correspond to each unit only at the moment of rendering, so the same file can be displayed at any zoom level or output on devices of very different resolutions without changing the stored coordinates."
      ]
    },
    {
      "heading": "Points, Inches and Millimetres",
      "body": [
        "Because one unit is 1/72 inch, there are 72 units in an inch, roughly 28.35 units in a centimetre, and about 2.835 units in a millimetre. The PDF unit is identical to the modern point used in desktop publishing and PostScript, which is defined as exactly 1/72 inch. The older printer's point of about 1/72.27 inch is slightly different and is not what PDF uses.",
        "Authoring tools let you work in inches, millimetres, or picas, but they convert those measurements into user-space units when the file is written. A margin you set as 25 mm is stored as roughly 70.9 units, and any tool reading the file sees only the number. Knowing the conversion factor is what lets you reason about a PDF's true dimensions from its raw coordinates, such as the values in a MediaBox."
      ]
    },
    {
      "heading": "Scaling the Unit: Transformations and UserUnit",
      "body": [
        "The default unit is not fixed for everything you draw. Content streams can apply a transformation matrix (via the cm operator) that scales, moves, rotates, or skews the coordinate system, so a shape defined in convenient local coordinates can be placed at any size on the page. These transformations affect how content maps onto the page but do not change the page's underlying 1/72-inch grid.",
        "For the page as a whole, PDF 1.6 introduced the UserUnit entry. It specifies the size of a default unit as a multiple of 1/72 inch, with a default value of 1.0. Because some viewers historically limited how large a page could be — around 200 inches, or 14,400 default units, per side in Acrobat — UserUnit lets a document declare a larger unit so that oversized pages such as engineering drawings, architectural plans, or large maps can be represented without exceeding those limits."
      ]
    },
    {
      "heading": "From User Space to Device Space",
      "body": [
        "User space is only the starting point. To actually show or print a page, a viewer maps user space onto device space, the coordinate system of the specific screen or printer, whose units are that device's pixels or dots. This mapping is handled by the current transformation matrix and accounts for the device's resolution and orientation. The separation is why a single PDF renders correctly on a 96-dpi monitor and a 1200-dpi press alike.",
        "It also explains a common point of confusion: a PDF has no inherent DPI for its page geometry. Resolution becomes meaningful only for raster images placed inside the page, where the number of image samples spread across a given size in units determines how sharp the image looks when printed."
      ]
    },
    {
      "heading": "Measuring Real-World Distances",
      "body": [
        "Separate from the coordinate unit, PDF can record a real-world scale for measurement. Optional viewport and Measure dictionaries associate a region of a page with a ratio between user-space distance and physical distance — for example, declaring that a drawing is at 1:100 or that a given distance on a map represents a set number of metres. Measuring tools use this information to report lengths and areas in real units rather than in raw page coordinates.",
        "This measurement layer is what turns a PDF of a floor plan or survey map into something a reader can measure against, and it is independent of the 1/72-inch geometry unit. The page is still drawn in user space; the Measure data simply tells a tool how to translate those distances into the units a person actually cares about."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Default unit",
      "value": "1 user-space unit = 1/72 inch (one point)"
    },
    {
      "label": "US Letter page",
      "value": "612 x 792 units (8.5 x 11 in)"
    },
    {
      "label": "A4 page",
      "value": "595 x 842 units (approx. 210 x 297 mm)"
    },
    {
      "label": "UserUnit",
      "value": "Introduced in PDF 1.6; default value 1.0"
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "introduced": "User space dates to the first PDF (Adobe, early 1990s); the UserUnit entry was added in PDF 1.6",
    "latestVersion": "ISO 32000-2 (PDF 2.0)",
    "typicalUsage": "Placing text, graphics, and page boxes; defining page size for print production",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF measurements are stored in pixels.",
      "truth": "PDF page geometry has no inherent pixels. Positions are device-independent user-space units of 1/72 inch by default and are mapped to pixels or dots only when a specific device renders the page."
    },
    {
      "claim": "The PDF unit is the same as a CSS px or a printer's dot.",
      "truth": "The default PDF unit is exactly 1/72 inch — a typographic point — and is fixed regardless of any device's DPI, unlike a pixel or dot whose physical size depends on the output device."
    },
    {
      "claim": "The coordinate origin is the top-left corner, as in screen graphics.",
      "truth": "In PDF's default user space the origin is at the lower-left corner, with the y-axis increasing upward."
    }
  ],
  "faq": [
    {
      "q": "How many units are in one inch in a PDF?",
      "a": "By default there are 72 units in an inch, because one user-space unit equals 1/72 inch. That works out to about 28.35 units per centimetre and roughly 2.835 units per millimetre."
    },
    {
      "q": "Can a PDF store measurements directly in centimetres or millimetres?",
      "a": "No. The file always records coordinates as user-space unit numbers. Authoring tools convert your mm or inch input into units when saving. You can rescale content with a transformation or change the page unit with UserUnit, but the stored value is still a plain number interpreted through the default 1/72-inch mapping."
    },
    {
      "q": "What is UserUnit used for?",
      "a": "UserUnit redefines each default unit as a multiple of 1/72 inch so a document can represent pages larger than viewers historically allowed — for example large maps or engineering drawings. Its default value is 1.0, meaning the normal 1/72-inch unit."
    },
    {
      "q": "Do units affect image resolution?",
      "a": "Units describe geometry, not pixel density. An image's effective resolution depends on how many image samples fall within the size, in units, at which it is placed on the page."
    },
    {
      "q": "Is the PDF point the same as a typographic point?",
      "a": "Yes for practical purposes. The default PDF unit is exactly 1/72 inch, which matches the modern PostScript and desktop-publishing point. The older printer's point of about 1/72.27 inch differs slightly and is not what PDF uses."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-geometry",
    "relatedConcepts": [
      "pdf-graphics-state",
      "pdf-page-scaling",
      "pdf-vector-graphics",
      "print-production-with-pdf"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-6"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
        "path": "/guides/how-to-fix-pdf-printing-issues"
      },
      {
        "label": "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
        "path": "/guides/why-is-my-pdf-blurry"
      }
    ]
  },
  "seeAlso": [
    "pdf-coordinate-system",
    "user-space-and-device-space",
    "pdf-page-geometry",
    "pdf-page-boxes",
    "mediabox",
    "pdf-page-size",
    "image-resolution-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
