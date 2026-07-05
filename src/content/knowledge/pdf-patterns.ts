import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-patterns",
  "h1": "Pattern Objects in PDF",
  "cluster": "graphics-color",
  "aliases": [
    "Tiling patterns",
    "Shading patterns",
    "Pattern color space",
    "PDF pattern color",
    "PatternType"
  ],
  "definition": "Pattern objects are a special kind of PDF color that fills or strokes an area with a repeating graphic (a tiling pattern) or a smooth gradient (a shading pattern) instead of one flat color.",
  "description": "How PDF pattern objects paint areas with repeating tiles or smooth gradients, plus colored vs uncolored tiling patterns and how a pattern is selected as a color.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "In most PDF drawing operations a color is a single flat value: a gray level, an RGB triple, or a set of CMYK components. Pattern objects extend that idea. Instead of one color, a pattern fills or strokes a region with an entire graphic that can repeat across the area (a tiling pattern) or vary smoothly through it (a shading pattern). Patterns live in a dedicated Pattern color space and are painted with the same fill and stroke machinery as any other color.",
    "A tiling pattern is defined by its own small content stream: a cell of vector paths, text, and images that PDF replicates edge to edge across the region being painted, spaced by fixed horizontal and vertical steps. A shading pattern instead wraps a shading dictionary, letting the smooth gradients that PDF describes elsewhere be used as a paint color for the interior of any path rather than only across a whole clipping region.",
    "Because patterns are treated as colors, they are selected with pattern-aware color operators and stored alongside the other resources a page needs. Their placement is governed by a matrix that anchors the pattern to the page's default coordinate system, which is what makes tiles line up seamlessly even when several separate shapes are filled with the same pattern."
  ],
  "sections": [
    {
      "heading": "Two kinds of pattern: tiling and shading",
      "body": [
        "PDF marks each pattern with a PatternType key. A value of 1 identifies a tiling pattern, whose appearance is drawn by a content stream and repeated across a region; a value of 2 identifies a shading pattern, whose appearance comes from a shading dictionary that produces a smooth color transition. Tiling patterns are stream objects: they carry marking operators, a bounding box for the cell, and the XStep and YStep distances that control how the cell repeats. Shading patterns are plain dictionaries that point at a shading object plus an optional matrix and graphics-state parameters.",
        "The two types share a purpose, supplying something richer than a flat color, but differ in how they are built. A tiling pattern can contain anything a page can hold, including strokes, fills, text, and images, which suits it to hatching, textures, repeated motifs, and artwork used as a fill. A shading pattern reuses the axial, radial, and function-based shadings that PDF also exposes through the direct shading operator, but frames them as a color so they fill a path's interior and respect its edges."
      ]
    },
    {
      "heading": "Colored versus uncolored tiling patterns",
      "body": [
        "Every tiling pattern carries a PaintType that decides where its color comes from. A colored tiling pattern (PaintType 1) specifies its own colors inside the pattern cell: the content stream sets whatever colors it needs, and the pattern is complete on its own. An uncolored tiling pattern (PaintType 2) deliberately contains no color-setting operators and describes only shape. The color is supplied at the moment the pattern is used, as an operand passed alongside the pattern name.",
        "Uncolored patterns behave like a reusable stencil. The same repeating shape can be painted in different colors in different places without redefining the pattern, and the Pattern color space is declared with an underlying base color space so PDF knows how to interpret the color operand. Colored patterns trade that flexibility for self-containment, which is convenient when a fill should always look the same wherever it appears."
      ]
    },
    {
      "heading": "How a pattern is used as a color",
      "body": [
        "To paint with a pattern, a content stream first makes the current color space the special Pattern color space, then selects a specific pattern by name with the pattern-capable color operators: scn for nonstroking (fill) color and SCN for stroking color. For an uncolored pattern the color operand appears before the pattern name; for a colored pattern only the name is given. Once the pattern is set as the current color, ordinary fill and stroke operators paint paths and text with it.",
        "The patterns themselves are declared in a Pattern subdictionary of the resource dictionary that the content stream draws from, in exactly the way fonts, XObjects, and color spaces are made available. This keeps a pattern reusable across many marking operations on the page instead of being embedded inline at each use."
      ]
    },
    {
      "heading": "Pattern space and why tiles line up",
      "body": [
        "Every pattern carries a Matrix that maps the pattern's own coordinate space to the default (initial) coordinate system of the page or parent content stream, not to the transformation in effect when the pattern is painted. As a result, changing the current transformation matrix before a fill does not drag the pattern along with it; the pattern stays anchored to the page while the shape being filled can move or scale independently.",
        "This anchoring is what lets two separate shapes filled with the same tiling pattern share a continuous, seamless tiling, because the tiles are positioned by the pattern matrix and the page rather than by each shape on its own. It also means a pattern's scale and rotation are controlled through its matrix rather than through the artwork that happens to use it."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Pattern types",
      "value": "PatternType 1 is a tiling pattern drawn by a content stream; PatternType 2 is a shading pattern that paints a smooth gradient."
    },
    {
      "label": "Tiling paint types",
      "value": "PaintType 1 is colored (colors set inside the cell); PaintType 2 is uncolored (color supplied when the pattern is used)."
    },
    {
      "label": "Selected with",
      "value": "The scn (nonstroking) and SCN (stroking) operators, after the current color space is set to Pattern."
    },
    {
      "label": "Anchoring",
      "value": "A pattern's Matrix maps pattern space to the page's default coordinate system, keeping tiles aligned across separate fills."
    }
  ],
  "specification": {
    "introduced": "Tiling patterns: PDF 1.2; shading patterns: PDF 1.3",
    "iso": "ISO 32000-1 / ISO 32000-2 (core PDF)",
    "typicalUsage": "Hatching and textures, repeated motifs, artwork used as a fill, and gradients applied as a fill or stroke color for paths and text.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF pattern is just an embedded image tiled across the page.",
      "truth": "A tiling pattern is defined by a content stream of drawing operators (vector paths, text, and optionally images) and is treated as a color, not as an image XObject."
    },
    {
      "claim": "Shadings and shading patterns are the same thing.",
      "truth": "A shading is the gradient definition; a shading pattern wraps that shading so it can be used as a fill or stroke color for a path's interior, whereas the shading operator paints a shading directly into the current clip region."
    },
    {
      "claim": "A pattern moves and scales with the shape you fill.",
      "truth": "A pattern's matrix anchors it to the page's default coordinate system, so it stays fixed regardless of the current transformation when you paint, which is what keeps tiles aligned across separate fills."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a colored and an uncolored tiling pattern?",
      "a": "A colored tiling pattern (PaintType 1) sets its own colors inside the pattern cell. An uncolored tiling pattern (PaintType 2) contains only shape, so you supply the color as an operand each time you use it, letting the same motif be painted in different colors."
    },
    {
      "q": "How do you select a pattern as the current color?",
      "a": "Set the current color space to the special Pattern color space, then use the scn operator for nonstroking (fill) color or SCN for stroking color, giving the pattern's resource name. For an uncolored pattern, a color operand precedes the name."
    },
    {
      "q": "Can a pattern fill text as well as shapes?",
      "a": "Yes. Once a pattern is the current color, any fill or stroke is painted with it, including text shown with a rendering mode that fills or strokes the glyph outlines."
    },
    {
      "q": "Where are patterns stored in a PDF?",
      "a": "In a Pattern subdictionary of the resource dictionary the content stream uses, alongside fonts, color spaces, and XObjects, so a single pattern can be reused across many drawing operations."
    },
    {
      "q": "When would you use a shading pattern instead of the shading operator?",
      "a": "Use a shading pattern when you want a gradient to fill the inside of a specific path or text. The direct shading operator paints a shading across the whole current clip region rather than as an object's fill or stroke color."
    }
  ],
  "graph": {
    "parentConcept": "pdf-color",
    "relatedConcepts": [
      "clipping-paths",
      "image-xobjects",
      "pdf-transparency"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      }
    ]
  },
  "seeAlso": [
    "pdf-color",
    "pdf-shadings",
    "pdf-vector-graphics",
    "form-xobjects",
    "pdf-content-streams",
    "pdf-graphics-state",
    "pdf-operators"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
