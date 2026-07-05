import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-vector-graphics",
  "h1": "Vector Graphics in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "vector artwork in PDF",
    "PDF paths",
    "path objects",
    "line art in PDF",
    "resolution-independent graphics"
  ],
  "definition": "Vector graphics in PDF are shapes described mathematically as paths — lines and Bézier curves that are filled or stroked — so they render sharply at any size or zoom.",
  "description": "How PDF describes scalable vector artwork with path and painting operators — lines, Bézier curves, fills and strokes that stay crisp at any zoom.",
  "searchIntent": "rendering",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Most of what you see on a well-made PDF page — text outlines, logos, borders, charts, diagrams and rules — is drawn as vector graphics. Instead of storing a grid of pixels, PDF stores instructions: move here, draw a line to there, curve through these control points, then fill or outline the shape in a chosen color. Because those instructions are geometric rather than sampled, the renderer can reproduce them at any scale.",
    "PDF inherits this approach from PostScript, the page-description language Adobe built for professional printing. The imaging model treats a page as a canvas onto which paths are constructed and then painted. This is why a PDF viewed on a phone, projected on a wall, or sent to a high-resolution printer keeps the same crisp edges — the artwork is recomputed for each device rather than stretched.",
    "Vector graphics sit alongside PDF's other content types. A single page can mix vector paths, embedded raster images, and text, all placed through the same coordinate system and graphics state. Understanding the vector model clarifies why some PDFs stay sharp when magnified while scanned or photo-heavy pages do not."
  ],
  "sections": [
    {
      "heading": "How a path is built and painted",
      "body": [
        "A vector shape in PDF is created in two stages inside a content stream: first the path is constructed, then it is painted. Construction operators define geometry — a move operator starts a new subpath at a point, a line operator adds a straight segment, curve operators add cubic Bézier curves defined by control points, and a rectangle operator adds a closed box in one step. Several subpaths can be assembled before anything is drawn.",
        "Painting operators then decide how the path appears. Stroking traces the outline using the current line width, cap and join style, and dash pattern; filling colors the interior. Combined operators can fill and stroke in a single step, and a close-path operator joins the last point back to the subpath's start. Nothing is visible until a painting operator runs, so the same geometry can be filled, outlined, or both."
      ]
    },
    {
      "heading": "Fill rules: nonzero winding and even-odd",
      "body": [
        "When a path overlaps itself or encloses holes, PDF needs a rule to decide which regions count as inside. It offers two. The nonzero winding number rule counts how many times the path wraps around a point, treating a nonzero total as inside; the even-odd rule counts boundary crossings and treats an odd count as inside. Different painting operators select one rule or the other.",
        "The choice matters for shapes like rings, letterforms with counters, or overlapping outlines, where the two rules can produce visibly different results. The same fill rules also govern clipping paths, which restrict subsequent drawing to a defined region rather than coloring it."
      ]
    },
    {
      "heading": "The graphics state controls appearance",
      "body": [
        "Paths do not carry their own styling; they are painted according to the current graphics state. Parameters such as line width, line cap and join, miter limit, dash pattern, and the current fill and stroke colors are set before painting and apply until changed. The state can be saved and later restored, which lets a page apply a set of drawing attributes to one group of shapes and then revert cleanly.",
        "Because appearance is separated from geometry, the same path definition behaves differently depending on the state around it. This design keeps content streams compact and makes it possible to reuse coordinates while varying color, thickness, or line style."
      ]
    },
    {
      "heading": "Why vector graphics scale without pixelation",
      "body": [
        "Vector content is resolution-independent. The path is stored as coordinates and curve equations in PDF's user space, and the renderer converts that geometry into device pixels at display or print time. Zooming in simply recomputes the same curves at a higher resolution, so edges stay smooth rather than turning blocky. Embedded fonts behave the same way, since glyph outlines are themselves vector shapes.",
        "This is the key difference from raster images. A photo or scan embedded as an image is a fixed grid of samples; enlarging it spreads those samples and reveals softness or jagged edges. A PDF page that looks sharp at any zoom is almost always vector-based, while one that blurs when magnified is dominated by raster content."
      ]
    },
    {
      "heading": "Reuse, gradients and richer fills",
      "body": [
        "Vector artwork that appears more than once — a logo, a repeated marker, a watermark — can be packaged as a Form XObject and referenced wherever it is needed, keeping the file smaller and consistent. Clipping paths let vector or image content be masked to an arbitrary outline.",
        "Fills are not limited to flat color. Shadings describe smooth color gradients across a region, and pattern objects tile or paint repeating vector artwork. These build on the same path and coordinate machinery, extending simple fills into gradients, textures, and complex decorative fills while remaining fully scalable."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Curve type",
      "value": "PDF paths use cubic Bézier curves defined by control points."
    },
    {
      "label": "Heritage",
      "value": "The vector imaging model derives from Adobe PostScript."
    },
    {
      "label": "Fill rules",
      "value": "Two rules are available: nonzero winding number and even-odd."
    },
    {
      "label": "Default unit",
      "value": "User space defaults to units of 1/72 inch, independent of device resolution."
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "introduced": "PDF 1.0",
    "typicalUsage": "Rendering text outlines, logos, diagrams, charts, borders and other line art as scalable, resolution-independent artwork.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF is essentially an image format, so everything in it is pixels.",
      "truth": "PDF's core imaging model is vector-based; text and line art are described mathematically as paths, though a PDF can also embed raster images."
    },
    {
      "claim": "Vector graphics and images are stored the same way in a PDF.",
      "truth": "Vector graphics are path descriptions painted by operators, while raster pictures are Image XObjects made of sampled pixels — two different mechanisms."
    },
    {
      "claim": "Any PDF stays perfectly sharp when you zoom in.",
      "truth": "Only vector content and embedded fonts scale cleanly; embedded raster images still pixelate when enlarged."
    }
  ],
  "faq": [
    {
      "q": "Does PDF store vector graphics as SVG?",
      "a": "No. PDF has its own path construction and painting operators inside content streams; it does not embed SVG, though similar concepts like Bézier curves and fill rules appear in both."
    },
    {
      "q": "What kind of curves can a PDF path contain?",
      "a": "PDF paths are built from straight line segments and cubic Bézier curves, plus a shortcut operator for rectangles. More complex shapes are approximated by chaining these together."
    },
    {
      "q": "Can one PDF page mix vector graphics and photos?",
      "a": "Yes. A page commonly combines vector paths, embedded raster images and text, all positioned through the same coordinate system and graphics state."
    },
    {
      "q": "Why does part of my PDF look sharp while another part looks blurry?",
      "a": "The sharp parts are vector graphics or embedded fonts that scale mathematically, while the blurry parts are raster images with a fixed pixel resolution that softens when magnified."
    },
    {
      "q": "Where are vector graphics actually stored in the file?",
      "a": "They live as sequences of operators within a page's content stream, or inside a Form XObject for reusable artwork, rather than as standalone image objects."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "image-xobjects",
      "pdf-coordinate-system",
      "user-space-and-device-space",
      "pdf-vs-postscript"
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
        "label": "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
        "path": "/guides/why-is-my-pdf-blurry"
      }
    ]
  },
  "seeAlso": [
    "pdf-content-streams",
    "pdf-operators",
    "pdf-graphics-state",
    "clipping-paths",
    "pdf-shadings",
    "pdf-patterns",
    "form-xobjects",
    "pdf-color"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
