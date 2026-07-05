import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "winansiencoding",
  "h1": "WinAnsiEncoding",
  "cluster": "text-fonts",
  "aliases": [
    "WinAnsi",
    "/WinAnsiEncoding",
    "Windows ANSI encoding",
    "WinAnsi text encoding"
  ],
  "definition": "WinAnsiEncoding is a predefined PDF text encoding, based on Windows code page 1252, that maps single-byte character codes (0-255) to glyph names for Western European (Latin) text in simple fonts.",
  "description": "WinAnsiEncoding is a predefined PDF font encoding based on Windows code page 1252, mapping single-byte codes to glyph names for Western European text.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "WinAnsiEncoding is one of the named character encodings that a PDF can attach to a simple font. Its job is narrow but important: it defines how each single-byte code in a text-showing string is translated into a named glyph, so that a byte like 0xE9 consistently produces the same accented letter across producers and viewers. It is one of the predefined base encodings described in an annex of the PDF specification (ISO 32000), sitting alongside StandardEncoding and MacRomanEncoding.",
    "The name reflects its origin. WinAnsiEncoding is derived from Windows code page 1252 (often called Windows-1252 or 'Windows ANSI'), the single-byte code page Windows uses for Latin, Western European text. Because so many PDFs are produced on Windows from applications that write Western European characters, WinAnsiEncoding became a common default for simple Latin-text fonts, covering ASCII in the lower range plus accented letters, typographic quotation marks, and currency symbols such as the euro in the upper range.",
    "For advanced readers, the key idea is that WinAnsiEncoding operates at the code-to-glyph-name layer of PDF's font model. It is not a Unicode mapping, and it is not the same thing as the ToUnicode CMap that governs reliable text extraction. Understanding where WinAnsiEncoding applies, how it is declared, and what it does not do is central to diagnosing garbled copy-and-paste, missing characters, and font-substitution problems in PDF."
  ],
  "sections": [
    {
      "heading": "How WinAnsiEncoding fits into PDF's font model",
      "body": [
        "A simple font in PDF uses single-byte character codes: each byte in a text-showing operator's string (such as the argument to Tj) is one character code in the range 0-255. Turning that code into ink is a two-step process. First, the font's encoding maps the code to a glyph name (for example, code 65 to the glyph name 'A'). Second, the font program maps that glyph name to an actual glyph outline. WinAnsiEncoding supplies a fixed, agreed-upon table for the first step, so a producer and a consumer interpret the same byte the same way.",
        "Because it is limited to single-byte codes, WinAnsiEncoding only applies to simple fonts such as Type 1 and non-composite TrueType fonts. Composite (Type 0) fonts, which are used for large character sets and CJK scripts, handle code-to-glyph mapping through CMaps and CID-keyed font programs instead, and do not use WinAnsiEncoding. This is why WinAnsiEncoding is described as a base encoding for simple fonts rather than a general-purpose text encoding."
      ]
    },
    {
      "heading": "Its relationship to Windows code page 1252",
      "body": [
        "WinAnsiEncoding is based on Windows code page 1252, the Latin-1-style code page used by Windows for Western European languages. Across the lower range it aligns with printable ASCII, and across the upper range (roughly 128-255) it follows the Windows-1252 arrangement of accented Latin letters, curly quotation marks, dashes, and symbols. This alignment is exactly why software running on Windows so often tags Latin-text fonts with WinAnsiEncoding: the byte values that Windows text produces already match the glyphs the encoding names.",
        "Despite the close correspondence, WinAnsiEncoding is defined independently inside the PDF specification as its own glyph-name table, not by reference to the operating system. The PDF definition also assigns glyph names to some byte values that are left undefined in Windows-1252, so the two are not byte-for-byte identical. Treating them as interchangeable is a common source of subtle mismatches when moving between platforms or tools."
      ]
    },
    {
      "heading": "How WinAnsiEncoding is declared in a PDF",
      "body": [
        "A font can request WinAnsiEncoding in two ways. The simplest is to set the font dictionary's /Encoding entry directly to the name WinAnsiEncoding. Alternatively, /Encoding can point to an encoding dictionary whose BaseEncoding is WinAnsiEncoding, together with a Differences array that overrides specific codes. The Differences mechanism lets a producer start from the familiar Windows-1252 layout and then remap a handful of codes to glyphs the base table does not provide.",
        "WinAnsiEncoding is frequently paired with the Standard 14 fonts, the base fonts that a conforming reader can render without embedding. Those fonts carry their own built-in encodings, but producers commonly specify WinAnsiEncoding explicitly to obtain the Windows-style character set rather than the older StandardEncoding layout. When a font program is embedded, the encoding still describes how incoming codes select named glyphs inside that program."
      ]
    },
    {
      "heading": "Encoding versus Unicode: what it means for text extraction",
      "body": [
        "A frequent point of confusion is that WinAnsiEncoding governs how text is drawn, not how text is reliably read back out. The encoding maps a byte to a glyph name so the correct shape appears on the page. Extracting searchable, copy-and-paste text is a separate concern handled primarily by a ToUnicode CMap, which maps character codes to Unicode values. Some tools can fall back on the glyph-name-to-Unicode relationship implied by a standard encoding, but that is a heuristic, not a guarantee.",
        "This distinction explains many real-world symptoms. A PDF can render perfectly while still producing garbled or blank text when copied, if its codes do not resolve to Unicode. Conversely, a document that uses a non-standard Differences array without a ToUnicode CMap may look fine yet be effectively unsearchable. When diagnosing such issues, it helps to separate the rendering path (encoding to glyph) from the extraction path (code to Unicode)."
      ]
    },
    {
      "heading": "Limitations and when WinAnsiEncoding is not enough",
      "body": [
        "Because it addresses only 256 single-byte codes, WinAnsiEncoding can represent at most a single-byte character set. It covers Latin, Western European text well, but it cannot express Central European, Cyrillic, Greek, or non-alphabetic scripts, and it cannot cover the full range of Unicode. Documents that need broader coverage rely on composite Type 0 fonts with CMaps and CID-keyed font programs, or on multiple simple fonts each with its own encoding.",
        "Within its Latin scope, WinAnsiEncoding remains a practical and widely produced choice, but it is one option among several. StandardEncoding and MacRomanEncoding are the other predefined base encodings, and a Differences array can tailor any of them. Choosing among them, or moving to a composite font, is ultimately a question of which characters the document must show and how portably its text must be extracted."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Based on",
      "value": "Windows code page 1252 (Windows-1252 / 'Windows ANSI')"
    },
    {
      "label": "Code range",
      "value": "Single-byte codes 0-255, each mapped to a glyph name"
    },
    {
      "label": "Used with",
      "value": "Simple fonts (Type 1, non-composite TrueType); not Type 0 composite fonts"
    },
    {
      "label": "Declared via",
      "value": "The /Encoding entry of a font dictionary, or as BaseEncoding in an encoding dictionary"
    }
  ],
  "specification": {
    "typicalUsage": "Value of the /Encoding entry (or the BaseEncoding of an encoding dictionary) for simple Latin-text fonts in PDF.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "WinAnsiEncoding is exactly the same as Windows-1252.",
      "truth": "It is based on Windows code page 1252 but is defined independently in the PDF specification as its own glyph-name table, and it assigns glyph names to some byte values that are undefined in Windows-1252, so the two are not byte-for-byte identical."
    },
    {
      "claim": "Setting WinAnsiEncoding guarantees that text can be copied and searched correctly.",
      "truth": "The encoding maps codes to glyph names for rendering. Reliable text extraction depends on a ToUnicode CMap (with glyph-name-to-Unicode used only as a fallback heuristic)."
    },
    {
      "claim": "WinAnsiEncoding can represent any character, including non-Latin scripts.",
      "truth": "It is a single-byte encoding limited to 256 code points covering Latin, Western European characters; broader coverage requires composite Type 0 fonts with CMaps."
    }
  ],
  "faq": [
    {
      "q": "When is WinAnsiEncoding used in a PDF?",
      "a": "It is used for simple Latin-text fonts, especially in PDFs produced on Windows, where it maps single-byte codes to glyph names using the Windows-1252 arrangement of accented letters, quotation marks, and symbols."
    },
    {
      "q": "How is WinAnsiEncoding specified in a font dictionary?",
      "a": "Either by setting the font's /Encoding entry to the name WinAnsiEncoding, or by pointing /Encoding to an encoding dictionary whose BaseEncoding is WinAnsiEncoding, optionally with a Differences array that overrides specific codes."
    },
    {
      "q": "What is the difference between WinAnsiEncoding and StandardEncoding?",
      "a": "Both are predefined base encodings, but they assign different glyphs across the upper code range. WinAnsiEncoding follows the Windows-1252 layout, while StandardEncoding is Adobe's earlier arrangement, so the same byte can select a different character under each."
    },
    {
      "q": "Does WinAnsiEncoding include the euro sign?",
      "a": "Yes. Its upper range includes common Western European accented letters, typographic quotation marks and dashes, and currency symbols such as the euro."
    },
    {
      "q": "Can WinAnsiEncoding be used with a TrueType font?",
      "a": "Yes. Simple, non-composite TrueType fonts as well as Type 1 fonts commonly use WinAnsiEncoding; composite Type 0 fonts use CMaps instead."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "type-1-fonts",
      "composite-vs-simple-fonts",
      "font-descriptor",
      "pdf-text-extraction",
      "font-substitution",
      "embedded-font-programs"
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
    "character-encoding-in-pdf",
    "standard-encoding",
    "pdf-fonts",
    "standard-14-fonts",
    "tounicode-cmap",
    "glyph",
    "truetype-fonts-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
