import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "truetype-fonts-in-pdf",
  "h1": "TrueType Fonts in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "TrueType (Subtype /TrueType)",
    "CIDFontType2 fonts",
    "FontFile2 fonts",
    "sfnt-based fonts in PDF"
  ],
  "definition": "In PDF, a TrueType font is an sfnt-based outline font used as a simple font (Subtype /TrueType) or as a CIDFontType2 inside a Type 0 font, with its program embedded through the FontFile2 stream.",
  "description": "TrueType (sfnt) fonts appear in a PDF as simple /TrueType fonts or as CIDFontType2 descendants, with the glyph program embedded through the FontFile2 stream in the font descriptor.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "TrueType is one of the outline font formats a PDF can carry. It originated with Apple in the late 1980s and was later adopted by Microsoft, and it stores each glyph as an outline built from quadratic Bezier curves inside an sfnt-structured file (the familiar .ttf). When a TrueType font is placed in a PDF, it is wrapped in PDF's own font objects rather than used exactly as it sits on disk.",
    "In practice a TrueType font appears in a PDF in one of two shapes. It can be a simple font with Subtype /TrueType, which addresses single-byte character codes and therefore covers up to 256 characters at a time. Or it can be the descendant of a Type 0 (composite) font, where it takes the subtype CIDFontType2 and can reach thousands of glyphs. In either case the actual glyph program is embedded through the FontFile2 entry of the font descriptor whenever the producer chooses to embed the font.",
    "Knowing how TrueType maps onto these structures explains a lot of everyday PDF behavior: why text sometimes copies out as gibberish, why a font is silently substituted when a file is opened on another machine, and why subsetting can shrink a document dramatically. This page describes what a TrueType font is inside a PDF and how the pieces fit together, rather than how to add one."
  ],
  "sections": [
    {
      "heading": "How a TrueType font is described in a PDF",
      "body": [
        "A simple TrueType font is a font dictionary with /Type /Font and /Subtype /TrueType. It carries a /BaseFont name, a /FontDescriptor, and a set of glyph widths given through /FirstChar, /LastChar, and a /Widths array that lists the advance width of each code in the covered range. An optional /Encoding entry describes how byte values map to characters. Because it uses single-byte codes, a simple TrueType font can render at most 256 distinct characters, which is why large character sets are handled differently.",
        "The font dictionary deliberately holds no glyph outlines itself. Instead it points to a font descriptor, a separate dictionary that records the font's metrics and flags (such as whether the font is symbolic, serif, or fixed-pitch) and, when the font is embedded, references the embedded program. This separation lets the same descriptor and program be shared and lets a viewer reason about the font even when the outlines are absent."
      ]
    },
    {
      "heading": "The embedded font program (FontFile2)",
      "body": [
        "When a TrueType font is embedded, its glyph program travels in a stream referenced by the font descriptor's /FontFile2 key. This is the distinguishing detail of TrueType embedding: Type 1 programs use /FontFile and compact CFF or OpenType programs use /FontFile3, while a TrueType (sfnt) program uses /FontFile2. The stream includes a /Length1 entry giving the length of the uncompressed TrueType program, and the stream data itself is the sfnt structure with its tables, including the glyf table of outlines and the loca table of offsets into it.",
        "Inside that program, glyph shapes are defined with quadratic Bezier curves, in contrast to the cubic curves used by Type 1 and CFF outlines. TrueType also carries bytecode hinting instructions that adjust outlines at small sizes on low-resolution devices. A PDF viewer that has the embedded program can render exactly the intended shapes; without it, the viewer must fall back to substitution."
      ]
    },
    {
      "heading": "From character code to glyph",
      "body": [
        "Turning a character code into a specific glyph in a simple TrueType font depends on the font descriptor's symbolic flag, on any /Encoding entry, and on the cmap tables inside the TrueType program. For non-symbolic fonts, a base encoding such as WinAnsiEncoding or MacRomanEncoding maps codes to character names, and a Unicode or Mac Roman cmap subtable then locates the matching glyph. For symbolic fonts, the viewer generally consults the font's own cmap subtable directly, treating codes as font-specific rather than standard.",
        "This layered mapping is powerful but fragile. If the encoding and cmap agree with standard character semantics, text usually displays and extracts cleanly. If a symbolic font maps codes to glyphs in a private way and no /ToUnicode CMap is supplied, the glyphs may draw correctly yet copy out as meaningless characters, because nothing records which Unicode value each code represents."
      ]
    },
    {
      "heading": "Beyond 256 characters: CIDFontType2",
      "body": [
        "To use more than 256 glyphs at once, or to typeset scripts such as Chinese, Japanese, and Korean, a TrueType program is embedded as the descendant of a Type 0 composite font. In that role it is a CIDFontType2 font: a CID-keyed font whose glyph descriptions come from a TrueType program embedded, again, through /FontFile2. A CMap in the Type 0 font maps multi-byte character codes to CIDs, and a /CIDToGIDMap entry then maps each CID to a glyph index in the TrueType program.",
        "This composite arrangement is what lets a single PDF font address the very large glyph repertoires that TrueType files can contain. The underlying outline technology is identical to the simple case; only the addressing machinery around it changes to support multi-byte codes and large glyph counts."
      ]
    },
    {
      "heading": "Embedding, subsetting, and portability",
      "body": [
        "Whether a TrueType font is embedded determines how faithfully a PDF renders elsewhere. When the program is embedded, any viewer draws the intended glyphs. When it is only referenced by name, the viewer substitutes another font using the descriptor's metrics and flags, which can shift spacing and appearance. Archival profiles in the PDF/A family require fonts used for rendering to be embedded so a document remains self-contained over time.",
        "Producers frequently subset embedded TrueType fonts, keeping only the glyphs a document actually uses to reduce file size. A subset font is signaled by a six-uppercase-letter tag and a plus sign prefixed to the /BaseFont name, for example ABCDEF+Arial. Subsetting does not change how the outlines are drawn, but it does mean the embedded program is incomplete by design, which is normal and expected for finished documents."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Embedded program key",
      "value": "TrueType (sfnt) programs embed via /FontFile2 in the font descriptor (Type 1 uses /FontFile, CFF/OpenType use /FontFile3)"
    },
    {
      "label": "Simple font subtype",
      "value": "/Subtype /TrueType, a single-byte simple font covering up to 256 character codes"
    },
    {
      "label": "Composite form",
      "value": "CIDFontType2 — a TrueType-based CID font used as the descendant of a Type 0 font for large or CJK glyph sets"
    },
    {
      "label": "Outline geometry",
      "value": "Glyphs are defined with quadratic Bezier curves, unlike the cubic curves of Type 1 and CFF"
    }
  ],
  "specification": {
    "typicalUsage": "Embedding sfnt/TrueType glyph outlines in PDF documents, either as simple /TrueType fonts or as CIDFontType2 descendants of Type 0 composite fonts, with the program carried in the FontFile2 stream.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pdf-a-font-embedding"
    ]
  },
  "misconceptions": [
    {
      "claim": "A TrueType font in a PDF can hold any number of characters, just like a normal .ttf file.",
      "truth": "A simple font with Subtype /TrueType uses single-byte codes and covers up to 256 characters at a time. To reach larger or CJK glyph sets, the same TrueType program is embedded as a CIDFontType2 descendant inside a Type 0 composite font."
    },
    {
      "claim": "TrueType and Type 1 are just two names for the same kind of embedded font.",
      "truth": "They are different outline formats. TrueType uses quadratic curves and embeds via /FontFile2, while Type 1 uses cubic curves and embeds via /FontFile; CFF/OpenType programs use /FontFile3."
    },
    {
      "claim": "If a PDF names a TrueType font, the glyph outlines are always inside the file.",
      "truth": "A TrueType font can be referenced without embedding, in which case the viewer substitutes another font. Embedding is what guarantees faithful rendering and is required by the PDF/A family."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a TrueType font and an OpenType font in a PDF?",
      "a": "OpenType is an sfnt container that can hold either TrueType (glyf) outlines or PostScript/CFF outlines. A file with TrueType outlines is commonly embedded as a TrueType font through /FontFile2, while newer PDF versions also allow embedding an OpenType program directly through /FontFile3 with an OpenType subtype."
    },
    {
      "q": "How does a PDF decide which glyph a character code maps to in a TrueType font?",
      "a": "For a simple TrueType font it depends on the descriptor's symbolic flag, any /Encoding entry, and the font's internal cmap tables. Non-symbolic fonts map codes through an encoding to character names and then to glyphs; symbolic fonts are generally resolved through the font's own cmap subtable."
    },
    {
      "q": "Is an embedded TrueType font always the complete font file?",
      "a": "Often not. Producers commonly subset embedded TrueType fonts to keep only the glyphs a document uses, signaled by a six-letter tag and a plus sign prefixed to the BaseFont name, such as ABCDEF+Arial. This is normal and reduces file size."
    },
    {
      "q": "Why can text from a TrueType-font PDF sometimes copy out as gibberish?",
      "a": "Reliable text extraction needs either a standard encoding or a /ToUnicode CMap that records the Unicode value behind each code. A symbolic TrueType font that maps codes to glyphs in a private way, with no ToUnicode CMap, can render correctly yet extract as meaningless characters."
    },
    {
      "q": "Why does a PDF sometimes show a substituted font instead of the intended TrueType face?",
      "a": "The TrueType program was not embedded, so the viewer selects a stand-in based on the font descriptor's metrics and flags. The substitute approximates the original but can change spacing and appearance."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "cid-fonts",
      "composite-vs-simple-fonts",
      "character-encoding-in-pdf",
      "winansiencoding",
      "cjk-fonts-in-pdf",
      "font-flags",
      "tounicode-cmap",
      "font-substitution",
      "glyph"
    ],
    "relatedStandards": [
      "pdf-a-font-embedding",
      "pdf-a",
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
    "pdf-fonts",
    "font-embedding",
    "embedded-font-programs",
    "type-1-fonts",
    "opentype-fonts-in-pdf",
    "type-0-fonts",
    "font-descriptor",
    "font-subsetting"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
