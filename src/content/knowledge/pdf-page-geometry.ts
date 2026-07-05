import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-page-geometry",
  "h1": "PDF Page Geometry",
  "cluster": "print-geometry",
  "aliases": [
    "page geometry",
    "PDF page boundaries",
    "page coordinate framework",
    "PDF page dimensions"
  ],
  "definition": "PDF page geometry is the set of rules that define a page's size, boundaries, coordinate system, units, orientation, and rotation, giving each page a precise, device-independent frame.",
  "description": "PDF page geometry defines each page's dimensions, boundary boxes, coordinate origin, units, orientation, and rotation. Here's how a PDF page is framed.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF page carries an exact description of its own geometry: how big it is, where its edges fall, and which coordinate framework the marks on it are placed in. This information lives in the page's dictionary, kept separate from the page content, so that any viewer or printer can lay out the page identically without having to guess.",
    "Page geometry answers a small set of practical questions. What size is the sheet? Which part of it should be shown? Which unit measures an inch or a millimeter? Where is the point (0,0), and which way is up? PDF answers each of these with explicit entries — boundary boxes, a default unit, a fixed origin, and a rotation flag — rather than leaving them to the rendering software to invent.",
    "Because these rules are device-independent, the same file appears the same on a phone, a laser printer, and a commercial press. Geometry is where the abstract page description meets the physical medium, which is why it underpins everything from on-screen cropping to bleed, trimming, and imposition in print production."
  ],
  "sections": [
    {
      "heading": "How a PDF Page Is Measured",
      "body": [
        "The marks on a PDF page live in default user space, a coordinate system whose unit is 1/72 inch, the classic typographic point. The origin sits at the lower-left corner of the page, x increases to the right, and y increases upward. That is the convention of mathematics and PostScript rather than the top-left origin used by most screen graphics, and it is a frequent source of confusion for people coming from web or image coordinates. Because the unit is a fixed fraction of an inch, page sizes translate directly into unit counts: a US Letter page measures 612 by 792 units (8.5 by 11 inches), and an ISO A4 page measures roughly 595 by 842 units.",
        "Sizes and boundaries are expressed as rectangles, each written as an array of four numbers: the x and y of the lower-left corner followed by the x and y of the upper-right corner. This compact format lets a single rectangle describe both position and extent, and it is the shape that every page box takes."
      ]
    },
    {
      "heading": "The Page Boundary Boxes",
      "body": [
        "A PDF page can carry up to five nested rectangles that describe different boundaries. The MediaBox defines the full extent of the medium and is the only box a page is required to include. The CropBox describes the region a viewer should display or clip to; when it is absent, it defaults to the MediaBox. Three further boxes serve print production: the BleedBox marks where artwork that runs off the edge is clipped for production, the TrimBox marks the finished size of the page after cutting, and the ArtBox marks the extent of meaningful content. Each of these three defaults to the CropBox when it is not specified.",
        "The boxes are conceptually nested from largest to smallest, media then crop then bleed, trim, and art, though a file only needs to define the ones it actually uses. Everyday screen documents often carry just a MediaBox, while press-ready files add a TrimBox and BleedBox so that a printer knows exactly where to cut and how much bleed to expect."
      ]
    },
    {
      "heading": "User Space and Device Space",
      "body": [
        "The coordinates written into a page are in user space, an idealized, resolution-free grid. To actually paint the page, a viewer or printer maps user space onto device space, the pixels of a screen or the dots of a printer, using a transformation called the current transformation matrix. This separation is what makes a PDF device-independent: the file states where a line begins and ends in abstract units, and each device works out where that falls in its own resolution.",
        "The same mechanism handles scaling. Fitting a page to a smaller screen, or scaling it up for a large-format print, changes only the transformation from user space to device space; the page's own geometry is untouched. It is why a PDF can be zoomed or printed at any size without the underlying description changing."
      ]
    },
    {
      "heading": "Orientation, Rotation, and Oversized Pages",
      "body": [
        "A page's shape comes from its boxes, but the orientation in which it is presented can be adjusted with the Rotate entry, an integer multiple of 90 that turns the page clockwise when it is displayed or printed. Rotate is a viewing instruction only: it leaves the content stream and the coordinate values exactly as authored, which is why a page can look upright on screen while its stored geometry is still described in landscape. Portrait and landscape are, in the end, just the relationship between a box's width and height together with any rotation applied on top.",
        "PDF's coordinate values are not unlimited. Acrobat historically capped each page dimension at 14,400 units, equal to 200 inches, which is ample for ordinary documents but not for large banners or architectural plans. PDF 1.6 introduced the UserUnit entry, a multiplier that redefines how many inches one user-space unit represents, so a page can exceed the old limit without changing the rest of its geometry. Its default value keeps a unit at the standard 1/72 inch."
      ]
    },
    {
      "heading": "Why Page Geometry Matters",
      "body": [
        "On screen, geometry decides what a reader actually sees. Viewers clip the display to the CropBox, so content that sits inside the MediaBox but outside the crop simply never appears. Getting the boxes right is the difference between a clean page and one with stray margins, offset content, or unexpected whitespace.",
        "In print, geometry becomes the contract between a document and the press. Trimming, bleed, and imposition all read the boundary boxes to decide where to cut, how sheets are arranged, and how much artwork must extend past the edge. Preflight checks routinely inspect these boxes, and a mismatch, such as a missing TrimBox or bleed that does not extend far enough, is a common reason a file is flagged or rejected by a print provider."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Default unit",
      "value": "One default user-space unit equals 1/72 inch (one point)."
    },
    {
      "label": "Origin",
      "value": "The coordinate origin is the lower-left corner, with y increasing upward."
    },
    {
      "label": "Required box",
      "value": "MediaBox is the only page box a PDF must define; the others fall back to it."
    },
    {
      "label": "Box format",
      "value": "Each box is an array of four numbers: lower-left x/y and upper-right x/y."
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "introduced": "PDF 1.0 (early 1990s); UserUnit added in PDF 1.6",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Defining page size, the visible region, and print boundaries for on-screen viewing and print production",
    "relatedStandards": [
      "iso-32000",
      "pdf-x",
      "pdf-x-4"
    ]
  },
  "misconceptions": [
    {
      "claim": "The MediaBox is what you see on screen.",
      "truth": "Most viewers clip the display to the CropBox. The MediaBox can be larger and may include areas that never appear on screen."
    },
    {
      "claim": "The Rotate entry physically rotates the page's content and coordinates.",
      "truth": "Rotate only changes how the page is displayed or printed. The content stream and the stored coordinate values are left unchanged."
    },
    {
      "claim": "PDF measures pages in pixels.",
      "truth": "PDF uses device-independent user-space units (1/72 inch by default). Pixels appear only when a viewer maps the page onto a specific device."
    }
  ],
  "faq": [
    {
      "q": "What unit does a PDF use to measure a page?",
      "a": "By default a PDF measures in points, where one unit is 1/72 inch. That makes a US Letter page 612 by 792 units and an A4 page roughly 595 by 842 units."
    },
    {
      "q": "Which page box is required?",
      "a": "Only the MediaBox is required. The CropBox defaults to the MediaBox, and the BleedBox, TrimBox, and ArtBox default to the CropBox when they are not specified."
    },
    {
      "q": "Where is the coordinate origin on a PDF page?",
      "a": "At the lower-left corner, with x increasing to the right and y increasing upward. This is the opposite vertical direction from the top-left origin used by most screen and image coordinate systems."
    },
    {
      "q": "Can a PDF page be larger than 200 inches?",
      "a": "Acrobat historically limited each dimension to 14,400 units (200 inches). PDF 1.6 added the UserUnit entry, which scales the size of a user-space unit so a page can be defined larger than that limit."
    },
    {
      "q": "Does every page in a PDF have to be the same size?",
      "a": "No. Each page has its own dictionary, so its MediaBox, other boxes, and rotation can differ. A single file can mix page sizes and orientations."
    }
  ],
  "graph": {
    "childConcepts": [
      "pdf-page-boxes",
      "pdf-page-size",
      "pdf-page-orientation",
      "pdf-page-rotation",
      "user-space-and-device-space",
      "pdf-units-and-measurements",
      "optional-content-groups",
      "pdf-preflight",
      "print-production-with-pdf",
      "trapping",
      "bleed-and-crop-marks",
      "pdf-printing-pipeline",
      "press-ready-pdf",
      "pdf-imposition",
      "pdf-page-scaling"
    ],
    "relatedConcepts": [
      "bleedbox",
      "trimbox",
      "artbox",
      "pdf-page-tree"
    ],
    "relatedStandards": [
      "pdf-x",
      "pdf-x-4",
      "iso-32000"
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
    "pdf-page-boxes",
    "mediabox",
    "cropbox",
    "pdf-coordinate-system",
    "user-space-and-device-space",
    "pdf-units-and-measurements",
    "pdf-page-size",
    "pdf-page-rotation"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
