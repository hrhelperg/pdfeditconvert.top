import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "composite-vs-simple-fonts",
  "h1": "Composite vs Simple Fonts",
  "cluster": "text-fonts",
  "aliases": [
    "Simple fonts vs composite fonts",
    "Single-byte vs multi-byte PDF fonts",
    "Simple fonts vs Type 0 fonts",
    "PDF font categories"
  ],
  "definition": "Composite and simple fonts are PDF's two font architectures: simple fonts map single-byte codes to at most 256 glyphs, while composite (Type 0) fonts use CMaps to reach large glyph sets.",
  "description": "In PDF, simple fonts address up to 256 glyphs with single-byte codes, while composite Type 0 fonts use CMaps to reach large, multi-byte glyph sets.",
  "searchIntent": "comparison",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every time a PDF viewer draws text, it has to turn the bytes stored in a content stream into visible glyphs. The PDF font model gives producers two fundamentally different ways to do that mapping, and the specification names them explicitly: simple fonts and composite fonts. Which category a font belongs to determines how many glyphs it can reach, how character codes are interpreted, and how reliably text can later be extracted.",
    "A simple font interprets each character code as a single byte and looks it up in a 256-entry Encoding. A composite font, which is always a Type 0 font, interprets codes through a CMap that can consume one or more bytes and produces a character identifier (CID) that a descendant CIDFont resolves into a glyph. That extra layer of indirection is what lets composite fonts address far more than 256 glyphs.",
    "The distinction is not just academic. It is why a Latin invoice and a Japanese contract can both be represented as PDF text, why subsetted fonts often use two-byte encodings even for English, and why a document can look perfect on screen yet produce garbled text when copied. Understanding which architecture a font uses explains much of PDF's font behavior."
  ],
  "sections": [
    {
      "heading": "Simple fonts: one byte, up to 256 glyphs",
      "body": [
        "A simple font addresses glyphs using single-byte character codes. Each byte value from 0 to 255 in a text-showing operator is looked up in the font's Encoding, which for a Type 1 font maps codes to glyph names and for a TrueType font selects glyphs through the font's built-in tables. Because one byte holds only 256 distinct values, a simple font can reference at most 256 glyphs through a single Encoding. Character widths are stored in a Widths array bounded by the FirstChar and LastChar entries.",
        "The font subtypes treated as simple fonts are Type 1, TrueType, and Type 3, along with Multiple Master Type 1. The Standard 14 fonts that early viewers were expected to provide are all simple fonts. This model is compact and efficient for Latin and other alphabetic scripts, but the 256-code ceiling makes it unsuitable on its own for scripts with thousands of characters."
      ]
    },
    {
      "heading": "Composite fonts: CMaps and descendant CIDFonts",
      "body": [
        "A composite font is always a Type 0 font. Rather than a direct code-to-glyph Encoding, it uses a CMap to convert character codes into CIDs (character identifiers). Crucially, a CMap can define codes that are one or more bytes long, so a single font is no longer limited to 256 codes. The CIDs are then resolved into actual glyphs by a descendant CIDFont, which is either a CIDFontType0 (CFF or Type 1 outlines) or a CIDFontType2 (TrueType outlines).",
        "This two-stage design — CMap turns codes into CIDs, the CIDFont turns CIDs into glyphs — is what allows a composite font to reference tens of thousands of glyphs. A common arrangement uses the predefined Identity-H CMap, which treats each successive pair of bytes as a CID directly, so glyph selection follows the font's own glyph indices. Other predefined CMaps encode specific character collections used for particular languages."
      ]
    },
    {
      "heading": "Why the PDF format needs both",
      "body": [
        "The two categories exist because no single mechanism fits every document. Simple fonts keep small, single-byte encodings efficient for alphabetic text, while composite fonts remove the 256-glyph limit that would otherwise make Chinese, Japanese, Korean, and other large character sets impossible to represent as selectable text.",
        "Composite fonts are not only for CJK, however. When a producer subsets a font and embeds only the glyphs actually used, it often encodes the text with a Type 0 font and Identity-H so that glyph selection maps cleanly onto the subset, even for ordinary Latin text. As a result, opening a modern PDF and finding Type 0 fonts is common regardless of language."
      ]
    },
    {
      "heading": "Effect on text extraction",
      "body": [
        "Neither architecture guarantees that a character code equals a Unicode value. For simple fonts, a recognizable Encoding such as WinAnsiEncoding often lets a viewer recover characters, but custom encodings can obscure them. For composite fonts using Identity-H, the codes are glyph indices with no inherent semantic meaning at all.",
        "Because of this, reliable text extraction, searching, and copy-paste depend on a ToUnicode CMap that maps character codes back to Unicode. When that mapping is present and correct, both simple and composite fonts extract cleanly; when it is missing, text that renders perfectly can still copy out as garbage. This is one of the most common reasons a visually correct PDF yields unusable extracted text."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Simple font codes",
      "value": "Single byte (0-255), at most 256 glyphs per Encoding"
    },
    {
      "label": "Composite font type",
      "value": "Always a Type 0 font with a CMap and a descendant CIDFont"
    },
    {
      "label": "Descendant CIDFont subtypes",
      "value": "CIDFontType0 (CFF/Type 1) or CIDFontType2 (TrueType)"
    },
    {
      "label": "Simple font subtypes",
      "value": "Type 1, TrueType, Type 3 (and Multiple Master Type 1)"
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "typicalUsage": "Simple fonts carry small single-byte encodings; composite Type 0 fonts handle large or multi-byte character sets and subsetted glyph collections.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A composite font is just a font that happens to contain many glyphs.",
      "truth": "The distinction is about how character codes map to glyphs — multi-byte codes through a CMap versus single-byte codes through an Encoding — not merely glyph count, although composite fonts exist to make large glyph sets addressable."
    },
    {
      "claim": "Type 0 and TrueType are two font formats you choose between.",
      "truth": "Type 0 is a PDF font structure that can wrap a TrueType (or CFF) glyph source as its descendant CIDFont, so they operate at different levels rather than being alternatives."
    },
    {
      "claim": "Only CJK documents use composite fonts.",
      "truth": "Producers frequently use Type 0 fonts with Identity-H encoding for Latin text too, especially when subsetting, to sidestep the 256-glyph limit of a simple font's Encoding."
    }
  ],
  "faq": [
    {
      "q": "Is a Type 0 font the same thing as a composite font?",
      "a": "Yes. In PDF terminology the composite font category is realized by the Type 0 font, which references a descendant CIDFont through a CMap."
    },
    {
      "q": "What is a descendant CIDFont?",
      "a": "It is the font that a Type 0 font references to actually hold the glyph descriptions and widths. It is either a CIDFontType0 (CFF/Type 1 outlines) or a CIDFontType2 (TrueType outlines)."
    },
    {
      "q": "Can a simple font contain more than 256 glyphs?",
      "a": "The embedded font program may contain more, but a simple font's Encoding can address only 256 character codes at once, so no more than 256 glyphs are reachable through it."
    },
    {
      "q": "What is Identity-H?",
      "a": "Identity-H is a predefined CMap commonly used with composite fonts. It treats each two-byte code as a CID directly, so codes correspond to the font's own glyph indices."
    },
    {
      "q": "Does the simple-versus-composite choice decide whether a font is embedded?",
      "a": "No. Embedding is independent of the category. Both simple and composite fonts can be embedded or non-embedded, though composite fonts for large character sets are usually embedded and subsetted."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "font-embedding",
      "standard-14-fonts",
      "truetype-fonts-in-pdf",
      "type-1-fonts",
      "type-3-fonts",
      "font-descriptor",
      "pdf-text-extraction",
      "glyph"
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
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-fonts",
    "type-0-fonts",
    "cid-fonts",
    "cmap",
    "character-encoding-in-pdf",
    "cjk-fonts-in-pdf",
    "font-subsetting",
    "tounicode-cmap"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
