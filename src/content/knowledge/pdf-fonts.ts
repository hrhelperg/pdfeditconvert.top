import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-fonts",
  "h1": "How Fonts Work in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "fonts in PDF",
    "PDF font handling",
    "PDF font model",
    "PDF typography",
    "how PDF fonts work"
  ],
  "definition": "In PDF, a font is described by a font dictionary that maps character codes to glyph shapes, optionally embedding the font program so text looks the same on any device.",
  "description": "Learn how PDF fonts work — font dictionaries, character encoding, glyphs and embedded font programs — and why text can shift or garble without them.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF does not store text the way a word processor does. Instead of holding a stream of characters that flow into paragraphs, a PDF records exactly which glyph shapes to draw and where to place them on the page. Fonts are the bridge between the raw bytes in a page's content and the shapes a reader finally sees, which is why understanding the font model explains so much about how PDFs behave.",
    "Every font used in a document is represented by a font dictionary — a normal PDF object that names the typeface, declares its type, describes how character codes map to glyphs, and points to the font's metrics and, when present, its embedded outlines. The text-showing operators inside a page's content stream reference these dictionaries and feed them strings of character codes to render.",
    "Because the font model separates the character codes on the page from the glyph shapes and from the Unicode meaning of the text, three different things can each be right or wrong independently: what is drawn, whether the correct font is available, and whether the text can be copied or searched. Grasping that separation is the key to why fonts sometimes look fine but extract as gibberish, or look wrong on one machine but not another."
  ],
  "sections": [
    {
      "heading": "The Font Dictionary: How a PDF Describes a Font",
      "body": [
        "Each font is a PDF object with a /Type of Font and a /Subtype that classifies it — for example Type1, TrueType, Type0, Type3, or MMType1. Alongside the subtype the dictionary carries the base font name, an encoding that describes how single-byte codes map to glyphs, and usually a reference to a font descriptor. The font descriptor is a companion dictionary holding metrics such as the font's bounding box, ascent and descent, style flags, and — when the font is embedded — a pointer to the actual font program.",
        "Content streams never contain readable text directly. They contain operators such as Tj and TJ that take strings of bytes, and each byte (or group of bytes) is a character code interpreted through the font's encoding. The reader uses the font dictionary to turn those codes into glyphs, then draws them at positions set by the text-positioning operators. This is why a page can look like flowing prose while internally being a precise set of glyph-placement instructions."
      ]
    },
    {
      "heading": "From Character Codes to Glyphs",
      "body": [
        "The number on the page is a character code, not a letter and not a shape. The font's encoding is the lookup table that connects a code to a specific glyph — historically by way of a glyph name or a direct glyph index in the font program. Predefined encodings such as WinAnsiEncoding and StandardEncoding cover common Latin text, and a font can also carry a differences array that remaps individual codes. A glyph is the concrete outline that gets rendered; a single character can have several glyphs, and one glyph can represent several characters.",
        "This layer of indirection is powerful but fragile. If the encoding says code 65 maps to the glyph for a capital A, and the embedded font actually contains that shape, the page renders correctly. But the code itself carries no inherent meaning, so a document can display perfectly while its underlying codes have no clean relationship to Unicode — which is exactly the situation that breaks copy, paste, and search."
      ]
    },
    {
      "heading": "Embedded vs Non-Embedded Fonts",
      "body": [
        "A font can be embedded, meaning the actual font program travels inside the PDF, or non-embedded, meaning the file only names the typeface and relies on the reader to supply it. Embedded outlines are stored in the font descriptor as stream objects: FontFile for Type 1 programs, FontFile2 for TrueType, and FontFile3 for compact formats such as CFF and OpenType. Embedding is what lets a PDF display identically on a machine that has never had the original font installed.",
        "When a font is not embedded, the reader must find a local copy or choose a stand-in through font substitution. A close substitute can look almost right; a poor match can shift spacing, change line breaks, or replace characters entirely. The Standard 14 fonts — the Helvetica, Times, and Courier families plus Symbol and ZapfDingbats — were the classic case where embedding was historically skipped because conforming readers were expected to provide them, though later revisions of the specification moved toward expecting fonts to be embedded rather than assumed."
      ]
    },
    {
      "heading": "Simple Fonts and Composite Fonts",
      "body": [
        "Simple fonts — the Type1, TrueType, and Type3 subtypes — use single-byte character codes, so they address at most 256 glyphs at a time and are well suited to Latin-script text. For scripts with thousands of glyphs, such as Chinese, Japanese, and Korean, a single byte is not enough. Composite fonts, declared as the Type0 subtype, solve this by using a CMap to interpret variable-length, often multi-byte codes and by referencing a descendant CIDFont that supplies the glyphs.",
        "This composite arrangement is how PDFs handle large character sets and complex writing systems without abandoning the same underlying model. The Type0 font sits on top, the CMap decides how many bytes form each code and which glyph identifier it selects, and the CIDFont holds the outlines. Understanding whether a font is simple or composite explains a lot about how its text is encoded internally and how reliably it can be extracted later."
      ]
    },
    {
      "heading": "Reading Text Back Out Again",
      "body": [
        "Because character codes are tied to glyphs rather than to meaning, getting text back out of a PDF — for selection, copy, or search — needs a separate map. That map is the ToUnicode CMap: an optional stream that tells a reader which Unicode value each character code represents. When it is present and correct, highlighting a line and copying it yields the right characters; when it is missing or wrong, the visible page can be flawless while the copied text is scrambled or empty.",
        "This is the practical payoff of the font model's layered design. What is drawn, which font is used, and what the text means are three separate concerns, and each depends on a different part of the font machinery. Many common PDF frustrations — text that looks fine but will not search, files that render differently on another computer, or characters that turn into boxes — trace directly back to one of these layers being incomplete."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Font subtypes",
      "value": "PDF fonts appear in the font dictionary's /Subtype as Type1, TrueType, Type0 (composite), Type3, or MMType1."
    },
    {
      "label": "Embedded font programs",
      "value": "Embedded outlines live in FontFile (Type 1), FontFile2 (TrueType), or FontFile3 (CFF/OpenType) streams referenced by the font descriptor."
    },
    {
      "label": "Standard 14 fonts",
      "value": "Fourteen base fonts — the Helvetica, Times, and Courier families plus Symbol and ZapfDingbats — that older readers were expected to supply without embedding."
    },
    {
      "label": "Codes are not characters",
      "value": "Content-stream bytes are character codes; encodings and CMaps translate them to glyphs, and a ToUnicode CMap is needed to recover the underlying text."
    }
  ],
  "specification": {
    "typicalUsage": "The font model — font dictionaries, encodings, descriptors, and embedded font programs — is defined as part of the core PDF specification and applies to every text-bearing PDF.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF always contains the fonts it uses.",
      "truth": "Fonts may be embedded or merely named. Non-embedded fonts depend on the reader having a copy or on font substitution, which can change how the text looks."
    },
    {
      "claim": "If the text looks right, it will always copy and search correctly.",
      "truth": "Copying and searching rely on a ToUnicode mapping. A page can render perfectly while extracted text comes out scrambled because that mapping is missing or wrong."
    },
    {
      "claim": "Text in a PDF is editable, reflowable text like in a word processor.",
      "truth": "Text is stored as explicit glyph placements driven by character codes, with no automatic reflow. Editing it means working through the font's encoding and embedding."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a character and a glyph in a PDF?",
      "a": "A character code is the number stored on the page, while a glyph is the visual outline that gets drawn. The font's encoding connects codes to glyphs, and the two are not one-to-one — a character can map to several glyphs and one glyph can serve several characters."
    },
    {
      "q": "What happens if a font is not embedded?",
      "a": "The reader tries to load a locally installed copy of the named font, and if it cannot, it substitutes a similar one. A good substitute looks close; a poor one can change spacing, line breaks, or which characters appear."
    },
    {
      "q": "Why does copied text from a PDF sometimes come out as gibberish?",
      "a": "Selection and copying use the font's ToUnicode map to turn character codes back into readable text. If that map is absent or incorrect, the page still displays correctly but the extracted text is garbled or empty."
    },
    {
      "q": "Why do CJK and other large-alphabet PDFs use different fonts?",
      "a": "Single-byte simple fonts address only 256 glyphs, which is not enough for scripts with thousands of characters. Composite Type0 fonts use a CMap and a descendant CIDFont to handle multi-byte codes and large glyph sets."
    },
    {
      "q": "Can a PDF use any font?",
      "a": "In principle yes — a document can reference or embed many typefaces. Reliable display across devices depends on the font being embedded or, for the historical base fonts, available in the reader."
    }
  ],
  "graph": {
    "childConcepts": [
      "font-embedding",
      "font-subsetting",
      "non-embedded-fonts",
      "standard-14-fonts",
      "type-1-fonts",
      "truetype-fonts-in-pdf",
      "opentype-fonts-in-pdf",
      "type-0-fonts",
      "type-3-fonts",
      "cid-fonts",
      "composite-vs-simple-fonts",
      "cmap",
      "character-encoding-in-pdf",
      "winansiencoding",
      "standard-encoding",
      "tounicode-cmap",
      "glyph",
      "font-descriptor",
      "font-flags",
      "font-substitution",
      "text-rendering-modes",
      "pdf-text-extraction",
      "cjk-fonts-in-pdf",
      "embedded-font-programs",
      "text-showing-operators"
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
    "font-embedding",
    "character-encoding-in-pdf",
    "glyph",
    "font-descriptor",
    "composite-vs-simple-fonts",
    "standard-14-fonts",
    "non-embedded-fonts",
    "font-substitution"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
