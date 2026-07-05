import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "cid-fonts",
  "h1": "CID-Keyed Fonts",
  "cluster": "text-fonts",
  "aliases": [
    "CID fonts",
    "CIDFont",
    "CID-keyed font",
    "character-ID-keyed font"
  ],
  "definition": "A CID-keyed font is a font organized so glyphs are addressed by numeric character identifiers (CIDs) instead of names, letting a PDF reference very large character sets such as CJK.",
  "description": "How CID-keyed fonts use character identifiers, CMaps, and a character collection to address thousands of glyphs inside PDF composite (Type 0) fonts.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "CID-keyed fonts are an Adobe font architecture built to handle far more glyphs than a traditional \"simple\" PDF font can reach. A simple font maps single-byte character codes to at most 256 glyphs by name, which is fine for Latin text but nowhere near enough for Chinese, Japanese, or Korean writing systems that need thousands of glyphs. In a CID-keyed font, each glyph is instead identified by an integer called a CID (character identifier), and glyphs are drawn from a defined character collection rather than a small name-based encoding.",
    "In PDF, a CID-keyed font never stands alone on the page. It always appears as the descendant font inside a Type 0 (composite) font. The Type 0 font carries a CMap that converts the byte sequences in a text string into CIDs, and the descendant CIDFont converts each CID into an actual glyph outline. This two-stage lookup - codes to CIDs, then CIDs to glyphs - is what lets a single PDF font address enormous character repertoires while still using compact multi-byte codes.",
    "Although the design was motivated by East Asian typography, CID-keyed fonts are now common even in Latin-only documents. Many modern PDF producers emit a Type 0 font with a CIDFontType2 descendant and Identity encoding for ordinary Western text, because it sidesteps the 256-code ceiling and makes font subsetting straightforward."
  ],
  "sections": [
    {
      "heading": "How a CID Identifies a Glyph",
      "body": [
        "The heart of the architecture is the character collection, described by a CIDSystemInfo dictionary with three parts: Registry, Ordering, and Supplement (often written as an ROS). Together these name the repertoire a CID indexes into - for example an Adobe East Asian collection, or the special Identity ordering where codes map straight through. Two pieces then cooperate at rendering time: a CMap maps the incoming character codes to CIDs, and the CIDFont maps each CID to a glyph description. When the CMap is not one of the Identity CMaps, its own CIDSystemInfo must be compatible with the CIDFont's, so both agree on which character collection the CIDs belong to.",
        "For fonts built on TrueType outlines there is one more indirection. A CID is not necessarily the same number as the glyph index inside the TrueType program, so the CIDFont provides a CIDToGIDMap that translates CID to glyph index. It can be the name Identity (meaning CID equals glyph index) or a stream giving an explicit table. This extra step is a frequent source of confusion, because it means a character code, a CID, and a glyph index can all be different numbers for the very same glyph."
      ]
    },
    {
      "heading": "CIDFontType0 and CIDFontType2",
      "body": [
        "PDF defines two descendant CIDFont subtypes that differ by the outline technology they carry. A CIDFontType0 stores glyph descriptions using Compact Font Format (CFF) / Type 1 technology, the same outline family behind Type 1 fonts. A CIDFontType2 stores glyph descriptions as TrueType outlines and is the subtype that uses the CIDToGIDMap entry to bridge CIDs and TrueType glyph indices.",
        "This split matters mostly for how the font program is embedded and interpreted, not for how the page describes text - both subtypes are addressed the same way through their parent Type 0 font. The embedded program itself is still an ordinary CFF or TrueType (or OpenType-wrapped) font; CID-keying is an organizational layer on top of it, not a separate file format."
      ]
    },
    {
      "heading": "The CMap and Identity Encoding",
      "body": [
        "The CMap is the component that gives composite fonts their reach. Instead of a one-byte-per-character encoding, a CMap can define variable-length, multi-byte codespace ranges and map each code to a CID. Adobe published predefined CMaps for the major East Asian character collections so that a PDF can reference a common CJK font without embedding the whole mapping. When those predefined CMaps are used with non-embedded fonts, the reader relies on system resources to resolve the glyphs.",
        "The most widely seen CMaps today are Identity-H and Identity-V, which treat each pair of bytes as a 16-bit code that is used directly as the CID (H for horizontal writing, V for vertical). Identity encoding is what most general-purpose PDF generators choose when they embed and subset a font: the producer controls both the CIDs and the embedded glyph program, so a straight pass-through mapping is simplest and most reliable."
      ]
    },
    {
      "heading": "Widths, Embedding, and Text Extraction",
      "body": [
        "Glyph metrics in a CIDFont are keyed by CID rather than by character code. The W array lists widths for specific CIDs or CID ranges, and the DW entry gives the default width used for any CID the W array does not mention. Like other PDF fonts, a CID-keyed font can be fully embedded or subsetted so only the glyphs actually used travel with the document, which keeps large CJK fonts from bloating the file.",
        "One consequence of addressing glyphs by CID is that the visible bytes in a content stream carry no inherent meaning to a text extractor - a CID is a position in a font, not a Unicode value. To make text selectable, searchable, and copyable, the PDF must supply a ToUnicode CMap that maps character codes back to Unicode. Without it, extraction from a CID-keyed font can return the wrong characters or nothing usable, even though the page still looks perfect on screen."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Meaning of CID",
      "value": "Character identifier - a glyph index into a defined character collection"
    },
    {
      "label": "Role in PDF",
      "value": "Always the descendant font of a Type 0 (composite) font"
    },
    {
      "label": "Subtypes",
      "value": "CIDFontType0 (CFF / Type 1 outlines) and CIDFontType2 (TrueType outlines)"
    },
    {
      "label": "Glyph widths",
      "value": "Given by the W array, with DW as the default width"
    }
  ],
  "specification": {
    "typicalUsage": "Embedding fonts with large or multi-byte character sets - notably CJK - in PDF through Type 0 composite fonts.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "A CID is the same number as the character code and the glyph index.",
      "truth": "A CMap turns the character code into a CID, and for TrueType-based fonts a CIDToGIDMap turns the CID into the glyph index. The three coincide only when Identity encoding and an Identity CIDToGIDMap are used."
    },
    {
      "claim": "CID-keyed fonts are used only for Chinese, Japanese, and Korean text.",
      "truth": "They were designed for large character sets, but Type 0 fonts with Identity-H encoding are now routinely emitted for plain Latin text too, because they avoid the 256-code limit and simplify subsetting."
    },
    {
      "claim": "A CID-keyed font is its own distinct font file format.",
      "truth": "CID-keying is an organizational scheme layered on existing outline technology. The embedded program is still a CFF/Type 1 or TrueType font, just indexed by CID."
    }
  ],
  "faq": [
    {
      "q": "What does CID stand for?",
      "a": "Character identifier - an integer that indexes a glyph within a defined character collection, used in place of the glyph names that simple fonts rely on."
    },
    {
      "q": "What is the difference between CIDFontType0 and CIDFontType2?",
      "a": "CIDFontType0 stores glyph outlines using CFF / Type 1 technology, while CIDFontType2 stores them as TrueType outlines and adds a CIDToGIDMap to translate CIDs into TrueType glyph indices."
    },
    {
      "q": "Why do some Latin-only PDFs use CID-keyed fonts?",
      "a": "A Type 0 composite font with Identity-H encoding sidesteps the 256-code limit of simple fonts and makes subsetting straightforward, so many producers emit one even for ordinary Western text."
    },
    {
      "q": "Can text from a CID-keyed font be copied or searched?",
      "a": "Only reliably when the PDF includes a ToUnicode CMap, because CIDs and character codes are not Unicode. Without one, extraction can yield wrong or missing characters even though the page displays correctly."
    },
    {
      "q": "Is a CID-keyed font referenced directly by a page?",
      "a": "No. In PDF it is always the descendant font inside a Type 0 font, and it is that Type 0 font which the page's resources reference."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "truetype-fonts-in-pdf",
      "type-1-fonts",
      "opentype-fonts-in-pdf",
      "font-subsetting",
      "font-descriptor",
      "embedded-font-programs",
      "character-encoding-in-pdf",
      "pdf-text-extraction"
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
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      }
    ]
  },
  "seeAlso": [
    "type-0-fonts",
    "cmap",
    "composite-vs-simple-fonts",
    "cjk-fonts-in-pdf",
    "tounicode-cmap",
    "pdf-fonts",
    "font-embedding",
    "glyph"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
