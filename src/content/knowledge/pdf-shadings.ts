import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-shadings",
  "h1": "Shadings and Gradients in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "PDF gradients",
    "Shading dictionaries",
    "Smooth shading",
    "Shading patterns",
    "Axial and radial shadings"
  ],
  "definition": "Shadings are PDF's mechanism for drawing smooth, resolution-independent color gradients — axial (linear), radial, and mesh types — defined by mathematical functions rather than pixels.",
  "description": "Learn how PDF shadings produce smooth vector gradients, from axial and radial fills to mesh shadings, and how the sh operator and shading patterns paint them.",
  "searchIntent": "rendering",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A shading is how PDF describes a smooth transition between colors — the gradient behind a logo, the soft glow on a button, or the subtle blend across an illustration. Instead of storing a grid of pixels, a shading records the geometry of the gradient and a function that maps positions to colors, so the renderer can compute the exact color at every point on the page.",
    "Because a shading is vector data, it stays crisp at any zoom level and usually takes far less space than an equivalent raster image of the same gradient. That resolution independence is why gradients drawn as shadings survive scaling, high-resolution printing, and PDF-to-print pipelines without visible banding or pixelation.",
    "PDF defines several shading types, from simple linear and radial fills to mesh-based blends that flow in multiple directions, and two distinct ways to actually paint them onto a page. Understanding both halves — the color model and the painting model — is what makes shadings predictable to work with."
  ],
  "sections": [
    {
      "heading": "How a Shading Represents Color",
      "body": [
        "Every shading has an associated color space and, for the simpler types, one or more PDF function objects. The function is the heart of the gradient: it takes a parametric input — typically a value t that moves along the gradient — and returns the color components to use at that position. PDF supports several function types, including sampled functions, exponential interpolation functions, stitching functions that chain several sub-functions into multi-stop gradients, and PostScript calculator functions, so a single shading can express anything from a two-color fade to a complex multi-stop ramp.",
        "Additional dictionary entries control the geometry and edges of the gradient. Coordinates position the gradient in the shading's coordinate space, a Domain limits the parametric range, and an Extend array decides whether the first and last colors continue past the defined start and end points or simply stop. Because color is computed from a function rather than looked up in a bitmap, the result is continuous and can be evaluated at whatever precision the output device needs."
      ]
    },
    {
      "heading": "The Seven Shading Types",
      "body": [
        "PDF numbers its shadings from 1 to 7. Type 1 is a function-based shading, where color is defined across a two-dimensional region by a function of x and y. Type 2 is an axial shading — the familiar linear gradient — whose color varies along the axis between two points defined in its Coords array. Type 3 is a radial shading, which blends between two circles and is used for radial gradients, spotlights, and sphere-like highlights; its coordinates describe the center and radius of each circle.",
        "Types 4 through 7 are mesh shadings for irregular, multi-directional blends: free-form and lattice-form Gouraud-shaded triangle meshes (types 4 and 5) and Coons and tensor-product patch meshes (types 6 and 7). Unlike the dictionary-based simple types, mesh shadings are carried in stream objects because they hold arrays of vertex coordinates and per-vertex colors, encoded according to bits-per-coordinate and bits-per-component settings. They let designers reproduce smooth gradient meshes exported from illustration software that no single linear or radial gradient could capture."
      ]
    },
    {
      "heading": "Two Ways to Paint a Shading",
      "body": [
        "A shading can be painted in two distinct ways. The sh operator paints a shading directly, filling the current clipping region with the gradient. This is a quick way to flood a clipped area with smooth color, but the shading only fills wherever the current clip allows and does not become the fill color of an arbitrary shape.",
        "The second route is a shading pattern — a pattern object of PatternType 2 that wraps a shading dictionary along with a transformation matrix. Once a shading pattern is set as the current color in the Pattern color space, it can be used to fill or stroke any path, or even to paint text, so the gradient follows the outline of whatever shape you draw. Shading patterns are one of the two kinds of PDF patterns, alongside tiling patterns; the pattern matrix anchors the gradient to a fixed coordinate space so it does not drift as shapes move."
      ]
    },
    {
      "heading": "Shadings, Transparency, and Print",
      "body": [
        "Shadings pair naturally with PDF's transparency model. A luminosity soft mask is often built from a shading so that opacity fades smoothly across a region, which is how gradient transparency and feathered edges are produced. Combined with transparency groups and blend modes, shadings enable effects like glows and vignettes that would be clumsy to store as flattened images.",
        "In print production the vector nature of shadings matters. High-end workflows may keep shadings live for maximum fidelity, or a preflight or flattening step may rasterize them to a resolution suited to the press, especially where transparency interacts with spot colors and overprint. Understanding whether a gradient is still a live shading or has been flattened to pixels explains a lot about a file's size and how sharp it stays when scaled or printed."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Shading types",
      "value": "PDF defines seven shading types (1–7): function-based, axial, radial, and four mesh types."
    },
    {
      "label": "Painting methods",
      "value": "Shadings are painted with the sh operator or through a shading pattern (PatternType 2)."
    },
    {
      "label": "Vector, not raster",
      "value": "Gradients drawn as shadings are resolution-independent and scale without pixelation."
    },
    {
      "label": "Introduced",
      "value": "Smooth shading and the sh operator were introduced in PDF 1.3."
    }
  ],
  "specification": {
    "introduced": "PDF 1.3",
    "iso": "ISO 32000",
    "typicalUsage": "Smooth vector color gradients in page content, patterns, and soft masks",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Gradients in a PDF are always embedded bitmap images.",
      "truth": "Most PDF gradients are shadings — vector data computed from functions, resolution-independent. They are only sometimes flattened to images during printing or preflight."
    },
    {
      "claim": "A shading and a shading pattern are the same object.",
      "truth": "A shading describes the color and geometry of a gradient. A shading pattern wraps a shading so it can fill paths and text, but a shading can also be painted directly with the sh operator without being a pattern."
    },
    {
      "claim": "An axial shading can only run top-to-bottom or hold two colors.",
      "truth": "An axial shading's axis is defined by two arbitrary points in any direction, and its color comes from a function that can chain many color stops via stitching functions."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between the sh operator and a shading pattern?",
      "a": "The sh operator paints a shading directly into the current clipping region. A shading pattern lets you use the shading as the fill or stroke color of paths and text, so the gradient follows the shape you draw."
    },
    {
      "q": "How does a shading decide which colors to use?",
      "a": "Through PDF function objects that map a parametric value or coordinates to color components in the shading's color space. Different function types support simple fades, multi-stop ramps, and computed color."
    },
    {
      "q": "What are mesh shadings used for?",
      "a": "Types 4 through 7 — Gouraud triangle meshes and Coons or tensor-product patch meshes — reproduce complex, multi-directional gradient meshes that a single linear or radial gradient cannot express."
    },
    {
      "q": "What does the Extend array control?",
      "a": "For axial and radial shadings, the Extend array decides whether the first and last colors continue beyond the defined start and end points or simply stop at them."
    },
    {
      "q": "Can a shading be transparent?",
      "a": "A shading paints color, but when combined with a luminosity soft mask, a transparency group, or blend modes it can produce smooth opacity fades and gradient transparency."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "blend-modes",
      "transparency-groups",
      "clipping-paths",
      "pdf-operators",
      "devicergb",
      "devicecmyk"
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
        "label": "PDF to Images — Export PDF Pages as PNG or JPG",
        "path": "/pdf-to-images"
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
    "pdf-patterns",
    "pdf-color",
    "pdf-vector-graphics",
    "pdf-transparency",
    "soft-masks",
    "pdf-graphics-state",
    "form-xobjects",
    "image-xobjects"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
