import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-coordinate-system",
  "h1": "The PDF Coordinate System",
  "cluster": "foundations",
  "aliases": [
    "PDF user space",
    "default user space",
    "PDF user coordinate system",
    "PDF coordinate space",
    "user coordinate system"
  ],
  "definition": "The PDF coordinate system is the two-dimensional grid PDF uses to place content, with its origin at the page's bottom-left corner, x increasing to the right and y increasing upward.",
  "description": "How PDF places text and graphics: a bottom-left origin, an upward y-axis, 1/72-inch points, and matrices that map user space to the output device.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every mark in a PDF page - a letter, a line, a photograph - has to be placed somewhere, and PDF uses a single, consistent frame of reference to describe those positions. That frame is the coordinate system: a flat, two-dimensional plane whose origin sits at the bottom-left of the page, with the x-axis running to the right and the y-axis running upward. This is the same convention used in mathematics and inherited directly from PostScript, and it is the opposite of most screen and image formats, where the origin is at the top-left and y grows downward.",
    "The system is deliberately device-independent. Positions are expressed in an abstract 'user space' rather than in the pixels or dots of any particular screen or printer, so the same file describes the same layout whether it is shown on a phone, rendered by a photosetter, or printed on an office laser printer. A viewer or printer maps that abstract space onto its own physical grid at display time, which is why a PDF looks the same everywhere without carrying resolution-specific data.",
    "Understanding the coordinate system is the key to understanding almost everything else about how a PDF is drawn: where text sits, how images are scaled, what the page boxes mean, and how transformations rotate, scale, or skew content. It is defined as part of the PDF imaging model in the ISO 32000 standard."
  ],
  "sections": [
    {
      "heading": "Origin, axes, and default units",
      "body": [
        "In default user space the origin (0, 0) lies at the bottom-left, x-coordinates increase to the right, and y-coordinates increase upward. Distances are measured in user-space units, and by default one unit equals 1/72 inch - the same size as a typographic point. That default was chosen to be resolution-independent: a coordinate value describes a physical distance on the page, not a number of device pixels. Common page sizes fall out of this directly, so US Letter is 612 x 792 units (8.5 x 11 inches) and A4 is roughly 595 x 842 units.",
        "Because the unit is a fixed fraction of an inch rather than a pixel, PDF layouts are inherently scalable and do not blur or shift when a page is viewed at different zoom levels or printed at different resolutions. For very large pages, the default unit can be enlarged through the UserUnit entry in the page dictionary, added in PDF 1.6, which multiplies the physical size that one unit represents so that documents can exceed the roughly 200-inch (14,400-unit) page limit imposed by some viewers."
      ]
    },
    {
      "heading": "User space, device space, and the current transformation matrix",
      "body": [
        "PDF distinguishes the abstract 'user space' in which content is described from the 'device space' of whatever hardware ultimately renders it. The bridge between them is the current transformation matrix, or CTM, which the viewer or printer establishes so that user-space coordinates land in the right place on the physical grid. Notably, because user space has y pointing up while raster displays usually have y pointing down, a viewer's initial transformation typically flips the y-axis - which is how a page authored bottom-up still appears right-side up on screen.",
        "The CTM is not fixed for the whole page. Content streams can concatenate additional transformations onto it as they draw, so a single page can shift its coordinate frame repeatedly - translating, scaling, or rotating - without changing the numeric coordinates written for each object. This separation of the description (user space) from the destination (device space) is what lets one file render identically across wildly different output devices."
      ]
    },
    {
      "heading": "Transformation matrices",
      "body": [
        "Coordinate transformations in PDF are affine transformations expressed as a six-number array, written [a b c d e f]. These six values populate a 3-by-3 matrix in which the a and d entries handle scaling, the b and c entries handle rotation and skew, and the e and f entries handle translation (movement). Multiplying a point by this matrix produces its new position, and because the transformations are affine, straight lines stay straight and parallel lines stay parallel.",
        "In a content stream, the cm operator concatenates such a matrix onto the current transformation matrix, letting a page scale an image, rotate a block of text, or place a repeated element without recomputing every coordinate. Transformations combine by matrix multiplication, so several cm operations stack into a single effective mapping. This same matrix machinery reappears throughout PDF wherever one coordinate frame must be related to another."
      ]
    },
    {
      "heading": "Text, image, and form coordinate spaces",
      "body": [
        "Several kinds of content are drawn in their own local coordinate space that is then mapped into user space by a transformation. Text is positioned by a text matrix (set with operators such as Tm) that establishes where glyphs are placed and how they are scaled or rotated, combined with the graphics state and the CTM. Image XObjects are defined to fill a unit square running from (0, 0) to (1, 1); to draw an image at a particular size and location, the content stream first sets up the CTM with cm so that unit square is stretched and moved to the intended rectangle, then paints the image.",
        "Form XObjects - reusable fragments of content - carry their own Matrix entry that maps the form's internal 'form space' into the space where it is invoked, and tiling patterns work similarly. In every case the principle is the same: content is described in a convenient local frame, and a transformation matrix relates that frame to the page. The page boxes themselves, such as the MediaBox and CropBox, are also specified in default user-space units, and the MediaBox's lower-left corner is commonly - but not necessarily - placed at the origin."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Origin",
      "value": "Bottom-left of the page; x increases to the right, y increases upward."
    },
    {
      "label": "Default unit",
      "value": "1 unit = 1/72 inch (a point); US Letter is 612 x 792 units."
    },
    {
      "label": "Mapping",
      "value": "A six-number matrix [a b c d e f] (the CTM) maps user space to device space."
    },
    {
      "label": "Large pages",
      "value": "The UserUnit entry, added in PDF 1.6, scales the default unit for oversized pages."
    }
  ],
  "specification": {
    "introduced": "PDF 1.0 (1993)",
    "iso": "ISO 32000-1 / ISO 32000-2",
    "latestVersion": "ISO 32000-2 (PDF 2.0)",
    "typicalUsage": "Positioning text, vector graphics, and images within a page's imaging model.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pdf-1-6"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF measures positions in pixels.",
      "truth": "Positions are in device-independent user-space units, one of which is 1/72 inch by default - not screen pixels, so a layout does not depend on any display's resolution."
    },
    {
      "claim": "The origin sits at the top-left corner, like screen and image coordinates.",
      "truth": "The PDF origin is at the bottom-left, with the y-axis pointing upward. Viewers usually flip the y-axis when mapping to a screen, which is why the page still appears upright."
    },
    {
      "claim": "Setting a page's /Rotate value or CropBox changes where the coordinate origin is.",
      "truth": "Content is written in the page's default user space regardless of rotation or cropping; those entries change how a viewer displays the page, not the underlying coordinates of the content."
    }
  ],
  "faq": [
    {
      "q": "What are the units of measurement in a PDF?",
      "a": "The default user-space unit is 1/72 inch, the same size as a typographic point. That is why US Letter is 612 x 792 units and A4 is about 595 x 842 units. The physical size of a unit can be enlarged with the UserUnit entry for very large pages."
    },
    {
      "q": "Where is the point (0, 0) on a PDF page?",
      "a": "It is the origin of default user space, at the bottom-left. Because page boxes such as the MediaBox are given in user-space units and their lower-left corner is usually placed at (0, 0), the page's bottom-left corner commonly - though not always - coincides with the origin."
    },
    {
      "q": "If y points up, how does a viewer show the page the right way up?",
      "a": "The viewer or printer sets up a transformation (the current transformation matrix) from user space to its own device space. On screen that transformation typically flips the y-axis, so content authored with an upward y-axis is displayed upright."
    },
    {
      "q": "How are objects rotated, scaled, or moved in a PDF?",
      "a": "A content stream uses the cm operator to concatenate a six-number transformation matrix onto the current transformation matrix. The matrix's values control scaling, rotation, skew, and translation, and multiple transformations combine by matrix multiplication."
    },
    {
      "q": "Is the coordinate system the same across all PDF versions and standards?",
      "a": "Yes. The bottom-left origin, upward y-axis, and 1/72-inch default unit have been part of PDF since its earliest versions and are carried through the ISO 32000 standard, including PDF 2.0. Later additions such as UserUnit extend it without changing these fundamentals."
    }
  ],
  "graph": {
    "parentConcept": "portable-document-format",
    "relatedConcepts": [
      "pdf-vs-postscript",
      "pdf-page-boxes",
      "image-xobjects",
      "form-xobjects",
      "pdf-vector-graphics",
      "cropbox"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
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
        "label": "How to Rotate Pages in a PDF (Free, No Upload)",
        "path": "/guides/how-to-rotate-pdf-pages"
      }
    ]
  },
  "seeAlso": [
    "user-space-and-device-space",
    "pdf-units-and-measurements",
    "pdf-graphics-state",
    "pdf-page-geometry",
    "mediabox",
    "pdf-content-streams",
    "pdf-operators",
    "pdf-page-rotation"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
