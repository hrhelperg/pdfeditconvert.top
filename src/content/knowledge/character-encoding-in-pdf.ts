import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "character-encoding-in-pdf",
  "h1": "Character Encoding in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "PDF text encoding",
    "font encoding in PDF",
    "PDF character encoding",
    "code-to-glyph mapping",
    "PDF encoding"
  ],
  "definition": "Character encoding in PDF is the set of mappings that turn byte codes in a content stream into the glyphs a font draws — and, separately, into the Unicode characters used for search and copy.",
  "description": "How PDF fonts map single-byte and multi-byte codes to glyphs, how named encodings and CMaps work, and why ToUnicode governs copy and search.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When a PDF shows a line of text, it does not store the characters the way a plain-text file does. A content stream holds strings of numeric codes, and each font attached to that text carries an encoding that tells the viewer which glyph to draw for each code. \"Character encoding\" in PDF is really the collection of rules that connect those codes to glyphs — and, in a separate step, back to the Unicode characters a person would recognize.",
    "This two-stage design is the source of both PDF's typographic flexibility and its most common frustration: a document can render flawlessly on screen yet produce nonsense when you copy the text or run a search. The visible page depends on the code-to-glyph mapping, while copy, search, extraction, and accessibility depend on a distinct code-to-Unicode mapping that may or may not be present.",
    "How encoding works depends on whether a font is a simple font (single-byte codes) or a composite Type 0 font (multi-byte codes routed through a CMap). Understanding both, and how each relates to Unicode, explains why text sometimes travels perfectly out of a PDF and sometimes arrives garbled."
  ],
  "sections": [
    {
      "heading": "How Text Becomes Glyphs",
      "body": [
        "Text is placed on a PDF page by text-showing operators that take a string argument. The bytes in that string are not letters in the usual sense — they are character codes that only have meaning relative to the currently selected font. The font's encoding maps each code to a glyph selector (a glyph name for simple fonts, or a character identifier for composite fonts), and the font program then draws the corresponding glyph outline. Change the font or its encoding and the same byte can produce a completely different glyph.",
        "Because the mapping lives with the font, PDF never has to assume a single global character set. A document can mix Latin text, a symbol font, and a large CJK font on the same page, each using its own code space and its own encoding. The trade-off is that the codes on the page are only interpretable through the font dictionary, which is why extracting readable text later requires reconstructing, or being handed, the mapping back to Unicode."
      ]
    },
    {
      "heading": "Encodings for Simple Fonts",
      "body": [
        "Simple fonts — Type 1, TrueType, and Type 3 — use single-byte codes, giving each font at most 256 addressable slots. Their Encoding entry can name a predefined encoding such as StandardEncoding, WinAnsiEncoding, or MacRomanEncoding, each of which is a fixed table assigning glyph names to the 0–255 code range. WinAnsiEncoding follows the Windows 1252 code page and MacRomanEncoding follows Mac OS Roman, so the same byte can map to different characters depending on which base encoding is in force.",
        "An Encoding can also be an encoding dictionary that starts from a base encoding and then overrides individual codes through a Differences array, which pairs specific code numbers with glyph names. This is how a subset font can pack exactly the glyphs a document uses into an arbitrary set of codes. Symbolic fonts are a special case: rather than a standard named encoding, they are typically addressed through the font's own built-in mapping, so their codes only make sense to that particular font program."
      ]
    },
    {
      "heading": "Encodings for Composite Fonts",
      "body": [
        "Fonts that need more than 256 glyphs — most obviously CJK fonts, but also many large embedded subsets — are handled as composite Type 0 fonts. Here the Encoding is not a 256-slot table but a CMap, which defines a code space (often two bytes per code) and maps codes to character identifiers, or CIDs. The descendant CIDFont then turns each CID into an actual glyph. This layered design lets a single font address tens of thousands of glyphs.",
        "The most common CMap in practice is Identity-H, which maps two-byte codes directly to CIDs with no reordering, and is typically paired with an embedded subset font whose CIDs are simply glyph indices. Predefined CMaps also exist for established CJK character collections, allowing text to be encoded against a known standard even when the font itself is not embedded. Because the codes in an Identity-encoded stream are essentially raw glyph indices, they carry no inherent meaning without additional information about what each glyph represents."
      ]
    },
    {
      "heading": "Encoding Versus Unicode: Why Copy and Search Can Break",
      "body": [
        "Getting the right glyph on the page does not, by itself, tell software what character that glyph represents. That link is supplied by a ToUnicode CMap, an optional stream that maps character codes to Unicode values purely for the benefit of extraction, copy, and search. When a viewer has to reconstruct Unicode without one, it falls back on clues such as standard glyph names resolved through the Adobe Glyph List — which works for conventional Latin text but often fails for reordered subsets, symbolic fonts, or Identity-encoded CJK.",
        "This is why a PDF can look perfect yet copy as gibberish: the code-to-glyph mapping is intact but the code-to-Unicode mapping is missing, incomplete, or wrong. It is also why embedding a font, while essential for faithful rendering, does not on its own guarantee good text extraction. Reliable copy, search, and screen-reader output depend on either a correct ToUnicode CMap or an encoding built from standard glyph names that can be traced back to Unicode."
      ]
    },
    {
      "heading": "Encoding, Text Strings, and Standards",
      "body": [
        "Alongside the encoding used to show text on the page, PDF also encodes the human-readable strings stored in the file itself — document titles, bookmark labels, and form field values. These text strings use PDFDocEncoding or UTF-16BE identified by a byte-order mark, and PDF 2.0 additionally permits UTF-8. This string-level encoding is separate from any font and should not be confused with the code-to-glyph mapping used for page content; XMP metadata, by contrast, is stored as UTF-8 XML.",
        "Encoding choices matter directly for archival and accessibility conformance. Standards oriented around durable, extractable text — such as PDF/A for archiving and PDF/UA for accessibility — expect the characters shown on the page to be mappable to Unicode, which in practice means providing a ToUnicode CMap or using encodings whose glyph names resolve unambiguously. Encoding is therefore not just a rendering detail but a determinant of whether a document's text remains usable over time."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Simple vs composite",
      "value": "Simple fonts use single-byte codes (0–255); composite Type 0 fonts use CMaps for multi-byte codes."
    },
    {
      "label": "Predefined encodings",
      "value": "Named simple-font encodings include StandardEncoding, WinAnsiEncoding, and MacRomanEncoding."
    },
    {
      "label": "Custom mappings",
      "value": "A font's Encoding can layer a Differences array over a base encoding to remap individual codes to glyph names."
    },
    {
      "label": "Unicode is separate",
      "value": "Mapping codes to Unicode for copy and search is handled by a distinct ToUnicode CMap, not by the display encoding."
    }
  ],
  "specification": {
    "typicalUsage": "Defined by the PDF imaging model: every font dictionary carries an Encoding (a named encoding or dictionary for simple fonts, or a CMap for composite fonts) that governs code-to-glyph selection, with an optional ToUnicode CMap for text mapping.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "If a PDF displays text correctly, it can always be copied and searched correctly.",
      "truth": "Display uses the code-to-glyph mapping, while copy and search use a separate code-to-Unicode mapping. A page can render perfectly yet copy as garbage when the ToUnicode data is missing or wrong."
    },
    {
      "claim": "WinAnsiEncoding is basically Unicode or UTF-8.",
      "truth": "WinAnsiEncoding is a single-byte encoding based on the Windows 1252 code page, limited to about 256 glyph slots. It is a fixed legacy table, not Unicode."
    },
    {
      "claim": "Embedding the font fixes garbled text extraction.",
      "truth": "Embedding ensures the correct glyphs are drawn, but it does not by itself provide Unicode values. Extraction still depends on the encoding and any ToUnicode CMap."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between an encoding and a CMap in PDF?",
      "a": "An encoding is the code-to-glyph mapping for a simple, single-byte font, usually a named table or a base encoding plus a Differences array. A CMap performs the same role for composite Type 0 fonts, mapping multi-byte codes to character identifiers that the descendant font turns into glyphs."
    },
    {
      "q": "What is Identity-H encoding?",
      "a": "Identity-H is a predefined CMap for composite fonts that maps two-byte codes directly to character identifiers with no reordering. It is commonly paired with embedded subset fonts whose identifiers are glyph indices, which is why such text often needs a ToUnicode CMap to be searchable."
    },
    {
      "q": "Does a PDF store text as Unicode?",
      "a": "Text strings in the file, such as titles and bookmarks, can use UTF-16BE (and, in PDF 2.0, UTF-8). Text shown on the page is encoded per font as codes mapped to glyphs, with a separate ToUnicode CMap providing the link to Unicode for copy and search."
    },
    {
      "q": "Why does copied text from a PDF sometimes come out scrambled?",
      "a": "The visible glyphs are correct, but the viewer cannot recover the underlying characters because the ToUnicode mapping is absent or incorrect and the encoding uses non-standard glyph names or raw glyph indices. Re-creating or repairing the text layer is usually required to fix it."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "cid-fonts",
      "composite-vs-simple-fonts",
      "font-descriptor",
      "truetype-fonts-in-pdf",
      "type-1-fonts",
      "font-embedding",
      "pdf-string-objects",
      "text-showing-operators"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-ua",
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "PDF to Word — Convert PDF to Editable DOCX in Your Browser",
        "path": "/pdf-to-word"
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
    "winansiencoding",
    "standard-encoding",
    "tounicode-cmap",
    "cmap",
    "pdf-fonts",
    "glyph",
    "pdf-text-extraction",
    "type-0-fonts"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
