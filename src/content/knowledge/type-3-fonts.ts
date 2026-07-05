import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "type-3-fonts",
  "h1": "Type 3 Fonts in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "Type 3 font",
    "Type3 font",
    "PDF Type 3 font",
    "user-defined PDF font"
  ],
  "definition": "A Type 3 font is a PDF font whose glyphs are defined by ordinary PDF content-stream drawing operators instead of a Type 1 or TrueType font program.",
  "description": "Type 3 PDF fonts define each glyph as a content stream of drawing operators, enabling custom graphics per character but no hinting or large glyph sets.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF supports several font types, and Type 3 is the unusual one: a glyph is not a shape stored in a specialized, compact font program but a miniature sequence of PDF graphics operators. Where Type 1 and TrueType fonts package their outlines in dedicated hinted formats, a Type 3 font describes each character using the same drawing operators that render the rest of a page.",
    "That design makes Type 3 the most flexible and most permissive font type in PDF. A single glyph can be an outline fill, a raster image, a pattern, or a small illustration. The flexibility is inherited from PostScript, where Type 3 fonts were the open, user-definable counterpart to the proprietary, hinted Type 1 format.",
    "The trade-off is that Type 3 glyphs carry none of the hinting that keeps Type 1 or TrueType text crisp at small sizes, and the font is a simple font limited to 256 single-byte codes. As a result they are used mainly for specialized output — custom symbols, bitmap fonts, or faithful reproduction of PostScript and scanned material — rather than for body text."
  ],
  "sections": [
    {
      "heading": "How a Type 3 Font Is Structured",
      "body": [
        "The font dictionary carries /Type /Font and /Subtype /Type3. Instead of pointing at an embedded font program, it holds a /CharProcs dictionary that maps glyph names to content streams, an /Encoding dictionary whose Differences array maps single-byte codes to those glyph names, /FirstChar and /LastChar with a /Widths array, a /FontBBox, a /FontMatrix, and a /Resources dictionary supplying any fonts, images, or color spaces the glyph procedures reference.",
        "The /FontMatrix is the defining structural difference. For every other font type the glyph coordinate system is effectively fixed at 1000 units per em, but a Type 3 font states its own matrix mapping glyph space to text space — commonly [0.001 0 0 0.001 0 0], though any transform is legal. Because of that, the values in the Widths array are measured in the font's own glyph space and transformed by the matrix, rather than following the 1/1000-of-text-space convention used by other simple fonts."
      ]
    },
    {
      "heading": "Glyph Procedures and the d0 / d1 Operators",
      "body": [
        "Each entry in CharProcs is an ordinary content stream, so it may use the full graphics operator set: path construction, fills and strokes, clipping, image and form XObjects, shadings, and even other fonts. When a glyph is shown, the viewer executes that stream in the font's coordinate system, exactly as it would run a page's content.",
        "Every glyph procedure must begin with one of two special operators that report the glyph's metrics. The d1 operator (wx wy llx lly urx ury) declares the glyph as shape only: it sets the advance width and bounding box, forbids color operators inside the glyph, and lets the viewer cache the rendered glyph and paint it in the current fill color like a mask. The d0 operator (wx wy) instead declares that the glyph supplies its own color, so the procedure may set colors and paint freely. This split is what lets a single Type 3 font mix plain outline letters with fully colored or image-based glyphs."
      ]
    },
    {
      "heading": "Strengths and Limitations",
      "body": [
        "Because a glyph is simply a drawing, a Type 3 font can hold things no outline format can: embedded raster images (making it a natural container for bitmap or scanned fonts), colored or multi-part symbols, patterned fills, and one-off logos or math glyphs. Software that renders PostScript or reconstructs scanned pages often emits Type 3 fonts for exactly this reason.",
        "The costs are real. Type 3 glyphs have no hinting, so at small point sizes or low resolution they can look uneven where a hinted Type 1 or TrueType glyph would stay legible. The font is a simple font, so it addresses at most 256 glyphs through single-byte codes; larger character sets require Type 0 (composite) fonts built on CID-keyed programs. And because each glyph re-executes drawing operators, image-heavy Type 3 fonts can add noticeably to file size."
      ]
    },
    {
      "heading": "Text Extraction and Accessibility",
      "body": [
        "A Type 3 glyph is identified only by an arbitrary name in CharProcs and a code in the Encoding, neither of which needs to correspond to any Unicode character. Without additional information, a viewer that shows a glyph drawn by a Type 3 procedure has no way to know which character it represents, so copy, search, and screen-reader output can fail or return meaningless text.",
        "The remedy is the same as for any font whose codes are not self-describing: a ToUnicode CMap that maps each code to Unicode values. Type 3 fonts are inherently self-contained, because the CharProcs live in the file and there is nothing external to embed, which satisfies the embedding side of archival profiles such as PDF/A; reliable text extraction and tagged reading, however, still depend on that ToUnicode mapping and on proper document structure."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Subtype",
      "value": "/Type3 in the font dictionary"
    },
    {
      "label": "Font kind",
      "value": "Simple font, up to 256 single-byte codes"
    },
    {
      "label": "Glyph definition",
      "value": "One PDF content stream per glyph (CharProcs)"
    },
    {
      "label": "FontMatrix",
      "value": "Stated explicitly; maps glyph space to text space"
    }
  ],
  "specification": {
    "iso": "ISO 32000 (PDF)",
    "introduced": "PDF 1.0",
    "typicalUsage": "Glyphs drawn by PDF operators — custom symbols, bitmap or colored glyphs, logos, and PostScript/scan reproduction.",
    "relatedStandards": [
      "iso-32000",
      "pdf-a-font-embedding"
    ]
  },
  "misconceptions": [
    {
      "claim": "A Type 3 font is just another way to embed a Type 1 or TrueType font.",
      "truth": "It is not a wrapper. Type 3 glyphs are defined by PDF drawing operators, with no Type 1 or TrueType font program involved at all."
    },
    {
      "claim": "Type 3 fonts can hold thousands of glyphs like a CID-keyed font.",
      "truth": "Type 3 is a simple font limited to 256 single-byte codes; large character sets require Type 0 (composite) fonts built on CID-keyed programs."
    },
    {
      "claim": "Type 3 text renders as sharply as Type 1 at small sizes.",
      "truth": "Type 3 glyphs have no hinting, so at small point sizes or low resolution they can look rougher than hinted Type 1 or TrueType glyphs."
    }
  ],
  "faq": [
    {
      "q": "Are Type 3 fonts always embedded?",
      "a": "Effectively yes. The glyph procedures (CharProcs) live inside the PDF, so a Type 3 font is inherently self-contained and there is no external font file to reference."
    },
    {
      "q": "Can a Type 3 glyph contain an image or its own color?",
      "a": "Yes. Because each glyph is an ordinary content stream, it may include images, fills, and patterns. Colored glyphs begin with the d0 operator, while shape-only glyphs whose color comes from the graphics state begin with d1."
    },
    {
      "q": "Why does text copied from a Type 3 font sometimes come out garbled?",
      "a": "Type 3 glyphs are keyed by arbitrary names with no inherent Unicode meaning. Without a ToUnicode CMap, extraction and copy cannot recover the underlying characters."
    },
    {
      "q": "When are Type 3 fonts actually used?",
      "a": "For custom or decorative glyphs — logos, math and symbol sets, bitmap-style fonts, and faithful reproduction of PostScript or scanned pages where each character is a small drawing."
    },
    {
      "q": "What do d0 and d1 do in a Type 3 glyph?",
      "a": "They are the glyph-metric operators at the start of each CharProc. d0 sets the advance width for a glyph that supplies its own color; d1 sets width and bounding box for a shape-only glyph whose color comes from the graphics state and which the viewer may cache."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "font-embedding",
      "pdf-operators",
      "font-descriptor",
      "pdf-text-extraction",
      "embedded-font-programs",
      "character-encoding-in-pdf"
    ],
    "relatedStandards": [
      "pdf-a-font-embedding"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-fonts",
    "type-1-fonts",
    "truetype-fonts-in-pdf",
    "type-0-fonts",
    "composite-vs-simple-fonts",
    "glyph",
    "pdf-content-streams",
    "tounicode-cmap"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
