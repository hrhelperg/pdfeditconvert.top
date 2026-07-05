import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "glyph",
  "h1": "Glyphs in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "glyphs",
    "character glyph",
    "glyph shape",
    "glyph outline"
  ],
  "definition": "A glyph is the specific visual shape a font draws to represent a character, which a PDF selects by mapping the character codes in its content streams through the font's encoding.",
  "description": "A glyph is the drawn shape of a character. Learn how PDF maps character codes through fonts to glyphs, and why that gap affects search and copying.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When a PDF viewer draws a word on the page, it is not placing letters the way a word processor thinks of them. It is drawing glyphs, the individual shapes stored inside a font. Understanding the glyph is the key to understanding how PDF separates the text you see from the text a computer can search or copy.",
    "The distinction sits at the heart of PDF text. A character is an abstract idea, such as the letter a, a comma, or a Chinese ideograph, usually identified by a Unicode value. A glyph is a concrete drawing of that idea in one particular typeface and design. A PDF content stream never stores glyphs directly; it stores character codes, and the font is responsible for turning each code into the right glyph.",
    "Because that mapping runs from code to shape, it does not automatically run the other way. A glyph knows how to be drawn, but it does not inherently know which character it represents. That one-way quality explains many everyday PDF puzzles: text that looks perfect but copies out as gibberish, missing letters that appear as empty boxes, and the extra machinery, such as ToUnicode CMaps, that PDFs carry to make their glyphs searchable again."
  ],
  "sections": [
    {
      "heading": "Glyphs versus characters",
      "body": [
        "A character is the smallest meaningful unit of written language, such as a letter, digit, punctuation mark, or symbol, and it is usually identified by a code point like a Unicode value. A glyph is a graphical shape a font provides to render one or more characters. The two are related but not identical: the same character can be drawn by many different glyphs across fonts, weights, or stylistic variants, and a single glyph can stand in for several characters. Ligatures are the clearest example, where the fi ligature is one glyph that represents the two characters f and i.",
        "This separation is deliberate. It lets a PDF store text compactly as codes while delegating appearance entirely to the font, so the same document text can be rendered by any compatible font program. It also means that inspecting the glyphs on a page tells you what the document looks like, but not necessarily what it says in a machine-readable sense."
      ]
    },
    {
      "heading": "How a PDF selects a glyph",
      "body": [
        "Text in a PDF is drawn by text-showing operators inside a content stream, and those operators carry strings of character codes rather than glyphs. For each code, the current font decides which glyph to draw. In a simple font, a single-byte code is mapped through the font's Encoding, either to a glyph name as in Type 1 fonts or through the font program's internal cmap as in TrueType, to reach a specific glyph. In a composite (Type 0) font, a CMap first converts multi-byte codes into CIDs, and a CIDToGIDMap then turns each CID into a glyph index inside the font program.",
        "Whatever the path, it ends at a glyph index, a number that identifies one glyph in the font. The viewer looks up that glyph's outline, or for a Type 3 font its drawing procedure, paints it at the current position, and then advances by the glyph's width before drawing the next one."
      ]
    },
    {
      "heading": "Where glyph shapes live",
      "body": [
        "For most fonts, glyph outlines are defined inside a font program, such as a Type 1, TrueType, or OpenType/CFF file, which may be embedded in the PDF or supplied by the viewer's system. Type 3 fonts are the exception: each of their glyphs is defined as an ordinary PDF content stream, a glyph procedure, so a Type 3 glyph can contain any graphics the format allows rather than just a single outline. By convention, the glyph at index 0 is the .notdef glyph, a fallback shape, often an empty or crossed box, shown when the font has no glyph for a requested code.",
        "Whether a font is embedded matters for fidelity. If the exact font program travels with the PDF, its glyphs are guaranteed; if not, the viewer must substitute another font, and the substitute's glyphs may differ in shape, spacing, or coverage. Embedding and subsetting are the mechanisms PDFs use to keep the intended glyphs available."
      ]
    },
    {
      "heading": "Glyphs, widths, and positioning",
      "body": [
        "Drawing a line of text is a sequence of glyph placements. Each glyph carries an advance width that tells the viewer how far to move before the next glyph. In a PDF, spacing is governed by the widths recorded in the font dictionary, the Widths array for simple fonts or the W array for CID-keyed fonts, measured in glyph space and scaled to the current font size. Text-showing operators can also inject manual adjustments between glyphs for kerning or justification.",
        "Because positioning depends on these declared widths rather than on any inherent property of the shape, a mismatch between a font's real metrics and the widths a PDF records can produce visibly uneven or overlapping text. This is one reason font and glyph problems often show up first as spacing artifacts."
      ]
    },
    {
      "heading": "Glyphs and getting text back out",
      "body": [
        "The code-to-glyph direction is one-way, so recovering the underlying characters is a separate problem. When a font uses a standard encoding whose glyph names map cleanly to Unicode, extraction is usually straightforward. When it uses a custom or subset encoding, common after subsetting where codes are remapped and glyph names may be stripped, the viewer needs help. A ToUnicode CMap provides that help by mapping character codes back to Unicode values, independent of which glyphs were drawn.",
        "This is why a PDF can look flawless yet copy or search badly: the glyphs render correctly, but nothing ties them to meaning. Tagging, standard encodings, and ToUnicode CMaps are the tools that restore that link, which is also why accessibility and archival standards pay close attention to it."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Character vs glyph",
      "value": "A character is an abstract unit of meaning; a glyph is one graphical shape that renders it, and the relationship can be one-to-many in either direction."
    },
    {
      "label": ".notdef glyph",
      "value": "Glyph index 0 in a font is conventionally the .notdef glyph, the fallback shape shown when no glyph is found for a code."
    },
    {
      "label": "Type 3 glyphs",
      "value": "Type 3 fonts define each glyph as a PDF content stream, so their glyphs can contain arbitrary graphics rather than a single outline."
    },
    {
      "label": "Extraction depends on mapping",
      "value": "Because fonts map codes to glyphs and not to Unicode, reliable text extraction depends on a standard encoding or a ToUnicode CMap."
    }
  ],
  "misconceptions": [
    {
      "claim": "A glyph is the same thing as a character.",
      "truth": "A character is the abstract unit of text; a glyph is one visual shape used to draw it, and the two can map one-to-many in either direction."
    },
    {
      "claim": "The glyphs a PDF draws always carry their Unicode meaning, so text can always be copied out.",
      "truth": "Glyph selection maps character codes to shapes, not to Unicode; without a standard encoding or a ToUnicode CMap, extracted text can be wrong or empty."
    },
    {
      "claim": "One character always equals exactly one glyph.",
      "truth": "Ligatures show one glyph representing several characters, and some scripts use several glyphs to render a single character."
    }
  ],
  "faq": [
    {
      "q": "Where are a PDF's glyphs actually stored?",
      "a": "For most fonts the glyph outlines live in a font program (Type 1, TrueType, or OpenType/CFF) that is either embedded in the PDF or provided by the viewer's system. Type 3 fonts are the exception, defining each glyph as its own PDF content stream."
    },
    {
      "q": "What is the .notdef glyph?",
      "a": "It is the glyph at index 0 in a font, used as a fallback. When the font has no glyph for a requested character code, the viewer draws .notdef, which is often shown as a blank or crossed box."
    },
    {
      "q": "How does a PDF decide which glyph to draw?",
      "a": "A text-showing operator supplies character codes. The current font maps each code to a glyph, through an Encoding and glyph names or the font's cmap for simple fonts, or through a CMap and CIDToGIDMap for composite fonts."
    },
    {
      "q": "Do glyphs store their own width for spacing?",
      "a": "Font programs record advance widths, but a PDF positions text using the widths declared in the font dictionary, the Widths array for simple fonts or the W array for CID fonts. A mismatch between the two can cause uneven spacing."
    },
    {
      "q": "Can two PDFs show the same letter with different glyphs?",
      "a": "Yes. The same character can be rendered by different glyphs depending on the font, weight, or stylistic variant, which is exactly why the character and its glyph are kept as separate concepts."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "font-embedding",
      "font-substitution",
      "font-descriptor",
      "text-showing-operators",
      "type-0-fonts",
      "font-subsetting"
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
    "character-encoding-in-pdf",
    "cid-fonts",
    "type-3-fonts",
    "tounicode-cmap",
    "embedded-font-programs",
    "cmap",
    "pdf-text-extraction"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
