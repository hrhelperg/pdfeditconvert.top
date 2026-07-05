import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "type-0-fonts",
  "h1": "Type 0 (Composite) Fonts",
  "cluster": "text-fonts",
  "aliases": [
    "Composite fonts",
    "Type0 fonts",
    "Composite (CID-keyed) fonts",
    "PDF composite fonts"
  ],
  "definition": "A Type 0 font is a PDF composite font that maps multi-byte character codes to glyphs through a CMap and a descendant CID-keyed font, allowing far more than 256 glyphs.",
  "description": "Type 0 (composite) fonts let a PDF use multi-byte codes and a descendant CIDFont to address thousands of glyphs — the basis for CJK and subsetted fonts.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Fonts in a PDF come in two broad families. Simple fonts — such as Type 1 and plain TrueType — read one byte at a time from the page's content stream, so they can address at most 256 glyphs. A Type 0 font is the format's answer to everything that does not fit in that limit: it is a composite font, meaning it wraps a separate descendant font and adds an encoding layer that can read multi-byte codes and reach thousands of glyphs.",
    "The name comes from PostScript, where composite fonts have font type 0; it signals structure, not quality or version. Type 0 fonts are the mechanism behind CJK (Chinese, Japanese, Korean) text, large symbol sets, and — less obviously — many ordinary Latin-script documents, because subsetted TrueType and OpenType fonts are usually wrapped this way.",
    "Mechanically, a Type 0 font resolves each character in two stages: a CMap turns a code into a CID (character identifier), and a descendant CIDFont turns that CID into an actual glyph. Understanding this two-part structure explains a lot of real-world PDF behaviour, from why some files copy cleanly and others produce garbled text to why an embedded subset is usually required for reliable rendering."
  ],
  "sections": [
    {
      "heading": "How a Type 0 font is built",
      "body": [
        "A Type 0 font is a dictionary whose /Subtype is /Type0. Instead of carrying a single-byte encoding and its own glyph widths like a simple font, it holds an /Encoding entry that names or embeds a CMap, plus a /DescendantFonts array containing exactly one entry: a CIDFont. The CIDFont is where the glyph program and per-glyph metrics actually live.",
        "The descendant CIDFont comes in two flavours. CIDFontType0 describes its glyphs with Compact Font Format (CFF) / Type 1 technology, while CIDFontType2 describes its glyphs with TrueType technology. Because the top dictionary handles encoding and the descendant handles outlines, the arrangement is called composite: neither half is a complete font on its own, and the pair together forms what a viewer treats as one font."
      ]
    },
    {
      "heading": "Two-stage mapping: code to CID to glyph",
      "body": [
        "A simple font reads one byte and looks up a glyph directly, which is what caps it at 256 codes. A Type 0 font instead reads variable-length codes — most commonly two bytes — and resolves each in two steps. First, the /Encoding CMap converts the character code into a CID using its codespace ranges; those ranges also define how many bytes each code consumes, which is how variable-width encodings are supported.",
        "Second, the descendant CIDFont converts the CID into a glyph. For a CIDFontType2, a CIDToGIDMap (either the name /Identity or a stream) turns the CID into a TrueType glyph index. For a CIDFontType0, the CID selects a glyph through the CFF font's charset. This layer of indirection — code to CID to glyph — is precisely what lets a single font address far more than 256 glyphs."
      ]
    },
    {
      "heading": "CMaps, Identity-H, and predefined encodings",
      "body": [
        "The /Encoding CMap can be an embedded stream or one of the predefined CMap names. The most common today are Identity-H and Identity-V, which map two-byte codes straight to CIDs of the same numeric value; the H and V suffixes select horizontal or vertical writing mode. With an Identity encoding, the codes on the page are effectively glyph indices into the embedded font, which is why such fonts are almost always embedded.",
        "Adobe also defined named CMaps tied to public character collections such as Adobe-Japan1, Adobe-GB1, Adobe-CNS1, and Adobe-Korea1 / Adobe-KR, which map codes from encodings like Shift-JIS or GBK onto CIDs in a documented ordering. Vertical CMaps carry a writing-mode flag (WMode) so East Asian text can be laid out top-to-bottom rather than left-to-right."
      ]
    },
    {
      "heading": "Type 0 fonts and text extraction",
      "body": [
        "Because the codes in a Type 0 content stream are CIDs or glyph indices rather than Unicode, the glyphs a reader sees and the character meaning behind them can diverge. To let a viewer copy, search, or extract real text, the font can include a /ToUnicode CMap that maps codes back to Unicode values.",
        "When that ToUnicode map is missing or incorrect — a frequent situation with subsetted fonts using Identity-H — selecting text yields blank, scrambled, or private-use characters even though the page renders perfectly. This is a common explanation for the classic complaint that a PDF looks fine on screen but the copied text is unusable."
      ]
    },
    {
      "heading": "Why modern PDFs rely on Type 0 fonts",
      "body": [
        "Type 0 is not only for large scripts. When a producer subsets a TrueType or OpenType font — keeping only the glyphs a document actually uses — it commonly wraps that subset as a CIDFontType2 with Identity-H encoding. Addressing glyphs by index sidesteps both the 256-code ceiling and the need for a byte-level character encoding, which makes it a convenient default even for plain Latin text.",
        "As a result, a great many everyday PDFs use Type 0 fonts under the hood without the author ever choosing to. Recognising the composite structure helps explain why an embedded subset is usually needed for a file to render identically everywhere, and why text extraction quality depends on the presence and accuracy of a ToUnicode map rather than on how the page looks."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Font Subtype",
      "value": "/Type0 in the font dictionary"
    },
    {
      "label": "Descendant font",
      "value": "Exactly one CIDFont — CIDFontType0 (CFF/Type 1 outlines) or CIDFontType2 (TrueType outlines)"
    },
    {
      "label": "Encoding",
      "value": "A CMap (e.g. predefined Identity-H, or an embedded stream) mapping codes to CIDs"
    },
    {
      "label": "Why it exists",
      "value": "Multi-byte codes reach far more than the 256-glyph limit of simple fonts"
    }
  ],
  "specification": {
    "iso": "ISO 32000 (PDF)",
    "introduced": "CID-keyed composite fonts date to PDF 1.2",
    "typicalUsage": "CJK text, large glyph repertoires, and subsetted TrueType/OpenType fonts using Identity-H",
    "relatedStandards": [
      "iso-32000",
      "pdf-a-font-embedding"
    ]
  },
  "misconceptions": [
    {
      "claim": "Type 0 is just an older or lower version of Type 1 fonts.",
      "truth": "The number comes from PostScript font types and means composite (a wrapper around a descendant font). It is orthogonal to Type 1 and implies nothing about age or quality."
    },
    {
      "claim": "Type 0 fonts are only used for Chinese, Japanese, and Korean text.",
      "truth": "They are common for CJK, but many producers also wrap ordinary Latin TrueType/OpenType fonts as Type 0 with Identity-H in order to subset them and address glyphs by index."
    },
    {
      "claim": "A Type 0 font dictionary contains the glyph outlines itself.",
      "truth": "It references exactly one descendant CIDFont (CIDFontType0 or CIDFontType2); that descendant is what carries or embeds the actual glyph program."
    }
  ],
  "faq": [
    {
      "q": "What does Identity-H mean in a Type 0 font?",
      "a": "Identity-H is a predefined CMap that reads two-byte codes and uses each value directly as the CID (an identity mapping), in horizontal writing mode. Identity-V is the vertical-writing counterpart. Because codes then act as glyph indices, fonts using them are almost always embedded."
    },
    {
      "q": "What is the difference between CIDFontType0 and CIDFontType2?",
      "a": "They differ in glyph technology. CIDFontType0 describes glyphs with CFF / Type 1 outlines, while CIDFontType2 uses TrueType outlines. A CIDFontType2 also uses a CIDToGIDMap to turn CIDs into TrueType glyph indices."
    },
    {
      "q": "Why does text copied from a Type 0 PDF sometimes come out as wrong characters?",
      "a": "The codes in the content stream are CIDs or glyph indices, not Unicode. Without an accurate ToUnicode CMap, a viewer has no way to recover the underlying characters, so copied or searched text can be blank, scrambled, or mapped to private-use code points."
    },
    {
      "q": "Are Type 0 fonts always embedded?",
      "a": "The format does not strictly require it, but with Identity encodings the codes only mean something to one specific font program, so those fonts are embedded (usually subsetted) in practice. Predefined CJK CMaps tied to standard character collections can, in principle, reference non-embedded fonts."
    },
    {
      "q": "How can I tell whether a PDF uses a Type 0 font?",
      "a": "Inspect the font dictionary: its /Subtype will be /Type0, with an /Encoding CMap and a /DescendantFonts array. A PDF inspector or editor that exposes document internals can show these entries."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "truetype-fonts-in-pdf",
      "opentype-fonts-in-pdf",
      "type-1-fonts",
      "glyph",
      "font-subsetting",
      "font-embedding",
      "pdf-text-extraction",
      "font-descriptor"
    ],
    "relatedStandards": [
      "iso-32000",
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
    "cid-fonts",
    "cmap",
    "composite-vs-simple-fonts",
    "cjk-fonts-in-pdf",
    "tounicode-cmap",
    "pdf-fonts",
    "character-encoding-in-pdf",
    "embedded-font-programs"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
