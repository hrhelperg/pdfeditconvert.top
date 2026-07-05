import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "cjk-fonts-in-pdf",
  "h1": "CJK Fonts in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "East Asian fonts in PDF",
    "Chinese, Japanese, and Korean fonts in PDF",
    "double-byte fonts in PDF",
    "multi-byte fonts in PDF",
    "CJK text in PDF"
  ],
  "definition": "CJK fonts in PDF are the Type 0 composite font setups — CIDFonts paired with CMaps — that let a PDF display and encode the thousands of Chinese, Japanese, and Korean characters that simple fonts cannot.",
  "description": "How PDF renders and encodes Chinese, Japanese, and Korean text using Type 0 composite fonts, CIDFonts, CMaps, and Adobe character collections.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Chinese, Japanese, and Korean (CJK) writing systems draw on very large character repertoires — tens of thousands of ideographs, plus syllabaries and phonetic sets. That scale collides with the simplest way PDF handles text, where a font maps single-byte codes to at most 256 glyphs. A single CJK document can easily reference more distinct characters than that limit allows, so PDF needs a different arrangement to represent them.",
    "PDF solves this with composite fonts. A Type 0 font sits at the top, an underlying CIDFont holds the actual glyph program, and a CMap translates the byte sequences in a content stream into glyph selectors. This structure descends from Adobe's CID-keyed font technology and is the same machinery any PDF uses whenever it must address a character set too large for a single-byte encoding — CJK is its most common application.",
    "Getting CJK right in a PDF is really two problems at once: making the correct glyphs appear on the page, and keeping the text meaningful for copying, searching, and extraction. Those are handled by separate parts of the font structure, which is why a CJK PDF can look perfect yet still resist selection — and why understanding CIDFonts, CMaps, embedding, and ToUnicode matters more here than for Latin text."
  ],
  "sections": [
    {
      "heading": "Why CJK Text Needs a Different Font Model",
      "body": [
        "A simple font in PDF — a Type 1 or TrueType font used directly — reads one byte per character and can therefore reference no more than 256 glyphs. That is ample for Latin, Greek, or Cyrillic alphabets, but a CJK document routinely uses far more distinct characters than a single-byte space can hold. PDF's answer is the composite font, declared as a Type 0 font, which accepts variable-length character codes (one or more bytes) and can address enormous glyph sets.",
        "A Type 0 font does not contain outlines itself. It references a descendant CIDFont that holds the glyph program, and an Encoding that is a CMap. The CMap defines codespace ranges — which byte patterns are valid and how long each code is — and maps each code to a CID (character identifier). The CID is then resolved to an actual glyph inside the CIDFont. This indirection is what lets one font structure span an entire East Asian character collection."
      ]
    },
    {
      "heading": "CIDFonts, CMaps, and Character Collections",
      "body": [
        "The descendant font comes in two flavors. A CIDFontType0 wraps a CFF (Compact Font Format / PostScript-style) program, whose internal charset maps CIDs to glyphs. A CIDFontType2 wraps a TrueType program and adds a CIDToGIDMap — either the name Identity or a stream — that maps each CID to a TrueType glyph index. Both are described by a font descriptor and a CIDSystemInfo dictionary carrying a Registry, an Ordering, and a Supplement number, which together name the character collection the font is built against.",
        "The CMap can be one of Adobe's predefined CMaps or an embedded CMap stream. Predefined CMaps cover the common East Asian encodings and Unicode, and are paired with public character collections such as Adobe-Japan1, Adobe-GB1 (Simplified Chinese), Adobe-CNS1 (Traditional Chinese), Adobe-Korea1, and Adobe-KR. A special pair, Identity-H and Identity-V, maps two-byte codes straight to CIDs of the same value; it is very common when a font is embedded and subsetted, because the producer controls both the codes and the glyph order."
      ]
    },
    {
      "heading": "Embedding and Subsetting CJK Fonts",
      "body": [
        "A CJK CIDFont can be embedded as a CFF or TrueType program so the document renders identically anywhere. Because the full font may carry tens of thousands of glyphs, producers usually embed a subset containing only the glyphs the document actually uses, marked with a six-letter tag prefix on the font name (for example, ABCDEF+). Subsetting is what keeps a CJK PDF from ballooning, and it pairs naturally with an Identity CMap because the producer can renumber CIDs to match the reduced glyph set.",
        "When a CJK font is not embedded, the viewer must supply a substitute that matches the font's CIDSystemInfo — a font built against the same Registry and Ordering. If a compatible font is installed the text usually displays acceptably; if not, characters can appear as blank boxes (often called tofu) or be replaced with mismatched glyphs. Because embedding removes this dependency, archival profiles such as PDF/A require every font, CJK included, to be embedded."
      ]
    },
    {
      "heading": "Vertical Writing and Legacy Encodings",
      "body": [
        "CJK typography often runs top-to-bottom, and composite fonts support this directly. CMap names carry a suffix — -H for horizontal and -V for vertical — and the writing mode (WMode) selects horizontal or vertical metrics and, where applicable, vertical glyph variants. This is one reason CJK relies on the composite model rather than being bolted onto simple fonts, which have no concept of vertical layout.",
        "The predefined CMaps also reflect the many encodings CJK text has historically used. There are CMaps built around legacy multi-byte encodings — Shift-JIS and EUC for Japanese, GBK and related schemes for Simplified Chinese, Big5 for Traditional Chinese, and UHC/EUC for Korean — alongside Unicode-based CMaps. Which CMap a PDF uses determines how the bytes in its content streams are interpreted, so the encoding choice made at creation time is baked into how the text must later be decoded."
      ]
    },
    {
      "heading": "Making CJK Text Searchable and Extractable",
      "body": [
        "Correct display and correct extraction are separate concerns. A CID tells the viewer which glyph to draw, but it is not a Unicode value, so software cannot assume what character a CID represents — especially under Identity-H, where codes are just glyph indices. To recover meaning, a Type 0 font can carry a ToUnicode CMap that maps character codes to Unicode. When it is present and accurate, copy, search, and text extraction work; when it is missing or wrong, the page can look perfect while selected text comes out as gibberish or nothing at all.",
        "This is the usual root cause behind CJK PDFs that display fine but resist searching, and it also affects accessibility, since screen readers depend on the same recoverable Unicode. A well-built CJK PDF therefore pairs its glyph mapping with a reliable ToUnicode CMap, and for accessibility adds logical structure through tagging so the reading order and character meaning are both available to assistive technology."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "CJK meaning",
      "value": "Chinese, Japanese, and Korean — writing systems whose character counts far exceed a simple font's 256-code limit."
    },
    {
      "label": "Font model",
      "value": "Handled by Type 0 (composite) fonts with a descendant CIDFont and a CMap, using variable-length character codes."
    },
    {
      "label": "CIDFont types",
      "value": "CIDFontType0 wraps a CFF program; CIDFontType2 wraps a TrueType program and adds a CIDToGIDMap."
    },
    {
      "label": "Character collections",
      "value": "CIDSystemInfo (Registry/Ordering/Supplement) names collections like Adobe-Japan1, Adobe-GB1, Adobe-CNS1, and Adobe-Korea1."
    }
  ],
  "specification": {
    "typicalUsage": "Displaying and encoding large East Asian character sets in PDF through Type 0 composite fonts, CIDFonts, and CMaps, with embedding and ToUnicode used for portability and extraction.",
    "relatedStandards": [
      "iso-32000",
      "pdf-a-font-embedding"
    ]
  },
  "misconceptions": [
    {
      "claim": "Displaying CJK text in a PDF requires a special, non-standard extension.",
      "truth": "CJK text uses the standard Type 0 composite font and CID-keyed architecture defined in the PDF specification; no proprietary extension is involved."
    },
    {
      "claim": "If CJK characters display correctly, they can always be copied and searched.",
      "truth": "Display depends on glyph mapping, while reliable copy, search, and extraction depend on a ToUnicode CMap, which may be absent even when rendering is perfect — especially with Identity-H."
    },
    {
      "claim": "An Identity-H encoding means the font is embedded.",
      "truth": "Identity-H is only a CMap that maps codes to CIDs; whether the actual glyph program is embedded is a separate matter recorded in the font descriptor."
    }
  ],
  "faq": [
    {
      "q": "Why are CJK PDFs often larger than Latin ones?",
      "a": "CJK fonts contain thousands to tens of thousands of glyphs, so even an embedded subset carries more glyph data than a Latin font. Subsetting, which keeps only the glyphs a document actually uses, is the main way to control the size."
    },
    {
      "q": "What is Identity-H?",
      "a": "A predefined CMap that maps two-byte character codes directly to CIDs of the same value for horizontal writing; Identity-V is its vertical counterpart. It is common with embedded and subsetted CJK fonts because the producer controls both codes and glyph order."
    },
    {
      "q": "Can CJK text run vertically in a PDF?",
      "a": "Yes. Composite fonts support vertical writing through -V CMaps and a vertical writing mode (WMode), which select vertical metrics and, where defined, vertical glyph variants."
    },
    {
      "q": "What happens if a CJK font is not embedded?",
      "a": "The viewer must substitute a font matching the CIDSystemInfo (Registry, Ordering, Supplement). If a compatible font is available the text usually renders acceptably; if not, characters may appear as blank boxes or be substituted imperfectly."
    },
    {
      "q": "How do CIDFontType0 and CIDFontType2 differ?",
      "a": "CIDFontType0 uses a CFF (PostScript-style) outline program whose charset maps CIDs to glyphs. CIDFontType2 uses a TrueType outline program and relies on a CIDToGIDMap to map CIDs to glyph indices."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "font-subsetting",
      "opentype-fonts-in-pdf",
      "truetype-fonts-in-pdf",
      "non-embedded-fonts",
      "font-substitution",
      "pdf-text-extraction",
      "glyph"
    ],
    "relatedStandards": [
      "pdf-a-font-embedding",
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
    "cid-fonts",
    "cmap",
    "composite-vs-simple-fonts",
    "tounicode-cmap",
    "character-encoding-in-pdf",
    "font-embedding",
    "pdf-fonts"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
