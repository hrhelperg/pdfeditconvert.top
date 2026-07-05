import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "user-space-and-device-space",
  "h1": "User Space and Device Space",
  "cluster": "print-geometry",
  "aliases": [
    "User space",
    "Device space",
    "PDF coordinate spaces",
    "User coordinate system",
    "Device coordinate system"
  ],
  "definition": "In PDF, user space is the page's built-in, device-independent coordinate grid, while device space is an output device's own pixel grid; the current transformation matrix maps one onto the other.",
  "description": "In PDF, user space is a device-independent coordinate grid that the current transformation matrix maps onto each device's own device space when the page is rendered.",
  "searchIntent": "rendering",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every mark in a PDF — text, lines, and images — is placed in an abstract, device-independent coordinate system called user space. User space belongs to the document rather than to any screen or printer, which is what lets the same file look the same whether it is shown on a phone, rasterized by a laser printer, or sent to a high-resolution imagesetter. Device space, by contrast, is the coordinate system of a specific output device, measured in that device's own pixels or dots.",
    "The bridge between the two is a transformation. A PDF processor first builds an initial mapping from the page's default user space onto the current device's device space, then keeps that mapping in the graphics state as the current transformation matrix (CTM). Anything drawn is expressed in user space, and the CTM converts those coordinates into device space at the moment of rendering.",
    "Keeping the two spaces straight matters whenever geometry has to be exact — positioning form fields, aligning print marks, honoring page boxes, or reporting where a piece of text sits. It also explains why PDF coordinates are quoted in points rather than pixels, and why the y-axis in a content stream runs upward even though many screens count downward."
  ],
  "sections": [
    {
      "heading": "Two Coordinate Systems, One Page",
      "body": [
        "User space is defined by the PDF specification and is deliberately independent of any hardware; device space is defined by the output device and changes from one device to the next. This split comes straight from the imaging model PDF inherited from PostScript, which describes content in a resolution-independent way so that a single description can drive very different outputs.",
        "A device space might be a modest screen resolution or a very high imagesetter resolution, yet the same user-space description feeds both. Only the mapping between the spaces changes per device, so the author never has to think in terms of a particular device's pixels."
      ]
    },
    {
      "heading": "The Default User Space",
      "body": [
        "In default user space the origin sits at the lower-left corner of the page, x increases to the right, and y increases upward. The default unit is 1/72 inch — the desktop-publishing point — so 72 units span one inch, and a US Letter page measures 612 by 792 units. This y-up convention differs from many raster device spaces, whose origin is the top-left corner with y increasing downward, which is why the initial CTM typically flips the y-axis while scaling to the device's resolution.",
        "The size of a default unit is not always fixed at 1/72 inch. In PDF 1.6 and later, a page's UserUnit entry can enlarge the physical size represented by one default unit, expressed as a multiple of 1/72 inch, with a default value of 1.0. This is the mechanism that lets very large pages exceed the coordinate range a processor would otherwise support."
      ]
    },
    {
      "heading": "The Current Transformation Matrix (CTM)",
      "body": [
        "PDF represents a transformation as an affine matrix, written in a content stream as six numbers in the form [a b c d e f]. A point (x, y) maps to (a·x + c·y + e, b·x + d·y + f), so translation, scaling, rotation, and skew all reduce to choices of those six numbers. The CTM is the transformation held in the graphics state that maps current user space to device space.",
        "The cm operator concatenates a matrix onto the CTM, letting content be moved, scaled, or rotated without recomputing every coordinate by hand. Because transformations compose, a chain of cm operations and nested drawing contexts can build up complex placements, all of which are ultimately resolved to device space by whatever CTM is in force at the time the content is painted."
      ]
    },
    {
      "heading": "Nested Spaces: Text, Image, Form, and Pattern",
      "body": [
        "User space acts as a hub that other coordinate systems are defined against. An image is drawn from a unit square in image space that the CTM maps onto the page, so an image's pixel dimensions are decoupled from the area it covers. Text is positioned in text space, related to user space through the text and font matrices, and Form XObjects and tiling patterns each carry their own matrices between their internal coordinates and user space.",
        "In every case the final steps are the same: compose down to user space, then apply the CTM to reach device space. This layering is why the same page grid governs body text, placed photographs, reusable form content, and repeating fills alike."
      ]
    },
    {
      "heading": "Why Device Independence Matters",
      "body": [
        "Because content is authored in user space, a PDF does not bake in a resolution. The same file can be displayed crisply at any zoom, printed at any dots-per-inch, or imposed onto a larger sheet, because only the CTM — the user-to-device mapping — changes for each device. That separation is central to PDF's goal of fixed, faithful reproduction.",
        "It is also why page boxes, crop and bleed marks, and measurements throughout a PDF are specified in user-space units rather than pixels. A coordinate means the same thing regardless of where the file is eventually rendered, which keeps layout predictable across the whole range of PDF consumers."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Default unit",
      "value": "1/72 inch (one point); 72 user-space units equal one inch."
    },
    {
      "label": "Default origin",
      "value": "Lower-left corner of the page, with x increasing to the right and y increasing upward."
    },
    {
      "label": "User-to-device mapping",
      "value": "Handled by the current transformation matrix (CTM), an affine matrix written as six numbers."
    },
    {
      "label": "Large pages",
      "value": "The UserUnit entry (PDF 1.6 and later) scales the size of a default unit for pages beyond the usual coordinate range."
    }
  ],
  "specification": {
    "introduced": "PDF 1.0 — the user-space imaging model was inherited from PostScript",
    "iso": "ISO 32000",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Defines the device-independent grid PDF content is drawn in, mapped to each device's device space by the current transformation matrix.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF coordinates are measured in pixels.",
      "truth": "Default user space is measured in points (1/72 inch) and is device-independent; pixels only exist in device space after the CTM maps content onto a device at a specific resolution."
    },
    {
      "claim": "The origin is at the top-left corner, like screen coordinates.",
      "truth": "Default PDF user space places the origin at the lower-left with y increasing upward; the top-left, y-down convention belongs to many device spaces, and the initial CTM converts between the two."
    },
    {
      "claim": "One user-space unit always equals 1/72 inch.",
      "truth": "That is the default, but a page's UserUnit entry can rescale the unit, and any cm operation changes the effective mapping used within the content."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between user space and device space?",
      "a": "User space is PDF's own device-independent coordinate grid, defined by the document and measured in points. Device space is the coordinate system of a particular screen or printer, measured in that device's pixels or dots. Content is authored in user space and converted to device space only when it is rendered."
    },
    {
      "q": "How does a viewer turn user space into pixels on screen?",
      "a": "The processor builds an initial matrix that maps the page's default user space onto the device's device space — scaling to the device's resolution and, for most raster devices, flipping the y-axis — and stores it as the CTM. Every drawn coordinate then passes through the CTM to land on real pixels or dots."
    },
    {
      "q": "Do text, images, and form content share the same coordinate system?",
      "a": "They each begin in their own space — text space, image space, or a form's space — but every one of those is tied back to user space through a matrix. The chain always resolves to user space first and then to device space, so all content ultimately lives on the same page grid."
    },
    {
      "q": "Does zooming or changing print resolution alter a PDF's coordinates?",
      "a": "No. Zooming or printing at a different resolution changes only the CTM — the user-space-to-device-space mapping. The coordinates stored in the content stream never change, which is why the same file stays sharp at any zoom and prints correctly at any resolution."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-geometry",
    "relatedConcepts": [
      "pdf-page-boxes",
      "pdf-page-rotation",
      "form-xobjects",
      "image-xobjects",
      "pdf-patterns"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "relatedTools": [
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
        "label": "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
        "path": "/guides/how-to-fix-pdf-printing-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-coordinate-system",
    "pdf-graphics-state",
    "pdf-units-and-measurements",
    "pdf-page-geometry",
    "mediabox",
    "pdf-content-streams",
    "pdf-operators",
    "pdf-vs-postscript"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
