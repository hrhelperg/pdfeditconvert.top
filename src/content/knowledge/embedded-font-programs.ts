import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "embedded-font-programs",
  "h1": "Embedded Font Programs",
  "cluster": "text-fonts",
  "aliases": [
    "Embedded fonts",
    "FontFile streams",
    "Embedded font files",
    "Font program embedding",
    "Embedded font data"
  ],
  "definition": "An embedded font program is the actual font file — its glyph outlines and metrics — stored inside a PDF and referenced by the font descriptor, so pages render correctly without the font installed.",
  "description": "Embedded font programs store a typeface's outlines inside the PDF via FontFile, FontFile2, or FontFile3 streams so text renders exactly as designed on any device.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF is meant to look the same everywhere, and embedded font programs are the main mechanism that keeps that promise for text. Instead of merely naming a typeface and hoping the reader's device has it installed, a PDF can carry the actual font file — the glyph outlines, hinting, and metrics — inside the document. When a viewer draws a page, it uses those embedded outlines directly rather than substituting whatever local font looks closest.",
    "The font program itself is not stored in the visible font dictionary. It lives in a separate stream object that the font's descriptor points to, using one of three keys — FontFile, FontFile2, or FontFile3 — chosen according to the underlying font format. That stream is ordinary PDF data: it is normally compressed with FlateDecode and can be subsetted, shared across pages, or rewritten like any other object.",
    "Embedding is what separates a portable, faithfully rendering PDF from one that can shift appearance, break line lengths, or silently substitute glyphs on another machine. It is also why print and archival standards treat font embedding as a core requirement rather than an optional nicety."
  ],
  "sections": [
    {
      "heading": "How a Font Program Is Embedded",
      "body": [
        "Every font used in a PDF is described by a font descriptor — a dictionary that records the font's name, style flags, bounding box, and other metrics. When the font is embedded, that descriptor also references a stream holding the font program. The key used depends on the format: FontFile points to a PostScript Type 1 program, FontFile2 points to a TrueType program, and FontFile3 points to a program in a compact or newer format, with the exact format named by the stream's own Subtype entry.",
        "Because the font program is a normal stream, it carries the usual stream machinery. A Type 1 FontFile stream records Length1, Length2, and Length3 to mark the clear-text, encrypted (eexec), and fixed-trailer portions of the program; a TrueType FontFile2 stream records Length1 for the length of the font's sfnt data. The bytes are typically Flate-compressed, and multiple text objects that use the same font all reference the single embedded program through the shared descriptor."
      ]
    },
    {
      "heading": "Font Formats and Their FontFile Streams",
      "body": [
        "The three FontFile keys map onto the font technologies PDF supports. FontFile carries the original PostScript Type 1 format. FontFile2 carries TrueType outlines. FontFile3 is the container for compact and modern formats and is disambiguated by its Subtype: Type1C for a Type 1 font stored in Compact Font Format (CFF), CIDFontType0C for a CFF program used by a CID-keyed font, and OpenType for a complete sfnt-wrapped OpenType program, which later PDF versions added the ability to embed directly.",
        "Composite (Type 0) fonts, used for large character sets such as CJK, embed their programs the same way through their CIDFont descriptor: a CIDFontType0 typically uses a CFF program via FontFile3, while a CIDFontType2 uses a TrueType program via FontFile2. Type 3 fonts are the exception — their glyphs are defined by ordinary PDF content-stream procedures rather than an outline font file, so there is no FontFile stream to embed."
      ]
    },
    {
      "heading": "Subsetting, Compression, and File Size",
      "body": [
        "Embedding a font adds its outline data to the file, so producers usually subset the program — embedding only the glyphs the document actually uses — to keep size down. A subsetted embedded font is flagged by a tag: six uppercase letters followed by a plus sign are prepended to the font name, for example ABCDEF+Garamond. That tag signals that the embedded program is a partial copy and helps tools avoid incorrectly treating two different subsets of the same base font as identical.",
        "Even with subsetting, embedded fonts are a common contributor to PDF size, especially when a document uses many typefaces and weights or large CJK faces. The program stream is normally Flate-compressed, and a well-produced PDF reuses one embedded program across every page that needs it rather than embedding duplicate copies."
      ]
    },
    {
      "heading": "Embedding Requirements in PDF Standards",
      "body": [
        "Faithful reproduction is the whole point of the formats built on PDF, so several of them require embedding. PDF/A, the archival subset, requires that fonts used for rendering be embedded so a document stays legible far into the future without depending on external font libraries. PDF/X, used for print production, likewise requires embedding so a press produces the exact glyphs the designer intended. PDF/UA (accessibility) does not replace embedding but relies on correct character encoding and logical structure alongside it.",
        "General-purpose PDF historically allowed the standard 14 fonts to be left out, expecting the viewer to supply an equivalent, but newer PDF practice moves away from that assumption and treats embedding as the norm. Separately, TrueType and OpenType fonts can carry embedding-permission settings — the fsType bits in the font — that indicate how the font's owner intends it to be embedded; PDF producers may read and honor these settings when deciding whether and how to embed a program."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where the program lives",
      "value": "In a stream referenced by the font's FontDescriptor, not directly in the font dictionary."
    },
    {
      "label": "FontFile keys",
      "value": "FontFile = Type 1, FontFile2 = TrueType, FontFile3 = CFF/OpenType (format set by the stream's Subtype)."
    },
    {
      "label": "Subset tag",
      "value": "A subsetted embedded font prefixes its name with six uppercase letters and a plus sign, e.g. ABCDEF+FontName."
    },
    {
      "label": "Common compression",
      "value": "Font program streams are normally compressed with FlateDecode."
    }
  ],
  "specification": {
    "typicalUsage": "Storing a font's glyph outline data inside a PDF so pages render without relying on fonts installed on the viewing device.",
    "iso": "ISO 32000",
    "relatedStandards": [
      "pdf-a-font-embedding",
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "If text is selectable and searchable, the font must be embedded.",
      "truth": "Text extraction depends on character encoding and ToUnicode CMaps, not on whether the font program is embedded — a non-embedded font can still be searchable, and an embedded one can still lack good Unicode mapping."
    },
    {
      "claim": "Embedding a font and subsetting it are the same thing.",
      "truth": "Embedding stores the font program in the file; subsetting is an optional reduction that embeds only the glyphs actually used. A font can be embedded in full without being subsetted."
    },
    {
      "claim": "The standard 14 fonts are embedded in every PDF.",
      "truth": "Historically they could be omitted and left to a viewer-supplied equivalent; they are only embedded if the producer chooses to embed them."
    }
  ],
  "faq": [
    {
      "q": "Where in a PDF is an embedded font program stored?",
      "a": "In a stream object that the font's FontDescriptor references through FontFile, FontFile2, or FontFile3. The visible font dictionary points to that descriptor, so the outline data sits one level below the font entry itself."
    },
    {
      "q": "What is the difference between FontFile, FontFile2, and FontFile3?",
      "a": "They distinguish the font format. FontFile holds a PostScript Type 1 program, FontFile2 holds a TrueType program, and FontFile3 holds a compact or modern format (such as CFF/Type1C or OpenType) identified by the stream's Subtype key."
    },
    {
      "q": "Do embedded font programs make a PDF larger?",
      "a": "Yes — they add the typeface's outline data to the file. Subsetting only the used glyphs and Flate compression of the stream keep the added size manageable, and reusing one program across pages avoids duplication."
    },
    {
      "q": "Can every font be embedded in a PDF?",
      "a": "Technically most outline fonts can be embedded, but TrueType and OpenType fonts carry embedding-permission bits (fsType) that state how the font's owner intends it to be embedded, and PDF producers may honor those settings."
    },
    {
      "q": "How can I tell whether a font in a PDF is embedded?",
      "a": "A viewer's font or document-properties panel usually lists each font with whether it is embedded and whether it is subsetted; a name prefixed with a six-letter tag and a plus sign indicates an embedded subset."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "standard-14-fonts",
      "type-0-fonts",
      "cid-fonts",
      "glyph",
      "font-substitution",
      "pdf-stream-objects",
      "pdf-a-font-embedding"
    ],
    "relatedStandards": [
      "pdf-a-font-embedding",
      "pdf-a",
      "pdf-x"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      },
      {
        "label": "Why Is My PDF So Large? Causes and Fixes",
        "path": "/guides/why-is-my-pdf-so-large"
      }
    ]
  },
  "seeAlso": [
    "font-embedding",
    "font-descriptor",
    "font-subsetting",
    "pdf-fonts",
    "type-1-fonts",
    "truetype-fonts-in-pdf",
    "opentype-fonts-in-pdf",
    "non-embedded-fonts"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
