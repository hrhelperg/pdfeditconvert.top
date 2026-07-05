import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "standard-encoding",
  "h1": "StandardEncoding in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "Adobe StandardEncoding",
    "Standard Encoding",
    "Adobe Standard Latin encoding"
  ],
  "definition": "StandardEncoding is a predefined single-byte encoding in PDF, inherited from Adobe Type 1 fonts, that maps each byte code to a glyph name in the Adobe standard Latin character set.",
  "description": "How StandardEncoding maps byte codes to glyph names in PDF simple fonts, how it differs from WinAnsi and MacRoman, and why it still causes quote glitches.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "StandardEncoding is one of PDF's predefined encodings for simple fonts. It defines how a single byte in a content stream is turned into a named glyph, using the character set Adobe established for its PostScript Type 1 fonts long before PDF existed. When a font's Encoding is set to the name StandardEncoding, code 65 means the glyph named /A, code 32 means /space, and so on across the 0-255 range.",
    "Because it comes straight from the PostScript world, StandardEncoding reflects the priorities of professional typesetting in the late 1980s rather than the conventions of Windows or the web. Its lower range broadly follows ASCII, but several positions and almost the entire upper half diverge from the encodings most people expect today, which is the source of a number of well-known text-extraction surprises.",
    "For an advanced reader, the useful mental model is that StandardEncoding is a lookup table from byte to glyph name, sitting one level below Unicode. It is a peer of WinAnsiEncoding and MacRomanEncoding, and understanding where it differs from them explains a large share of the garbled apostrophes, missing accents, and copy-paste oddities seen in older PDFs."
  ],
  "sections": [
    {
      "heading": "How StandardEncoding works",
      "body": [
        "StandardEncoding is a single-byte encoding: it covers 256 code points and applies only to simple fonts (Type 1, TrueType, and Type 3), never to composite Type 0 fonts, which use CMaps instead. Each code in a text-showing operator is looked up in the encoding to get a glyph name from the Adobe standard Latin set, and the font program then supplies the outline for that named glyph. The encoding therefore does not carry Unicode values directly; it carries glyph names such as /A, /space, /ampersand, and /quoteright.",
        "A simple font can name StandardEncoding as the value of its Encoding entry, or it can build on a base encoding and override individual codes through a Differences array. When a font specifies no Encoding at all, the viewer falls back to the font program's built-in encoding, and for the classic Adobe Latin text fonts that built-in encoding is essentially StandardEncoding. This is why the encoding remains relevant even in files that never mention it by name."
      ]
    },
    {
      "heading": "StandardEncoding versus WinAnsi and MacRoman",
      "body": [
        "StandardEncoding, WinAnsiEncoding, and MacRomanEncoding are three predefined tables that all map bytes to glyph names, but they disagree in important places. WinAnsiEncoding follows the Windows Latin-1 (code page 1252) layout, and MacRomanEncoding follows the classic Mac OS Roman layout; both pack accented Latin letters, currency symbols, and typographic punctuation into the 128-255 range at fixed positions. StandardEncoding populates that upper range very differently, favoring the ligatures, fractions, and reference marks that Adobe's typesetting customers needed, and it simply does not place many of the accented letters at the byte positions a Windows or Mac reader would assume.",
        "The practical consequence is that the same byte value can mean completely different glyphs depending on which encoding is in force. A file authored against WinAnsiEncoding that is misinterpreted as StandardEncoding, or vice versa, will render or extract the wrong characters in the high range. This is one reason modern PDF producers tend to state the encoding explicitly, often choosing WinAnsiEncoding for Latin text or a custom Differences-based encoding for anything beyond it."
      ]
    },
    {
      "heading": "The apostrophe and quote gotcha",
      "body": [
        "Even in its low range, StandardEncoding does not perfectly match ASCII. Two positions are the usual troublemakers: the code that ASCII treats as a straight apostrophe is mapped to /quoteright (a closing curly quote), and the code ASCII treats as a grave accent is mapped to /quoteleft (an opening curly quote). In a typeset document this produced attractive curly quotation marks, but it means a byte a programmer thinks of as a plain apostrophe can surface as a curly character.",
        "When text is copied out of such a PDF, or extracted by a tool that maps glyph names back to Unicode through the Adobe Glyph List, those positions can come back as typographic quotes rather than the straight characters a search or a script expects. This is a frequent cause of failed text matching and odd-looking pasted text from older PDFs, and it is fixed reliably only when the font carries a ToUnicode CMap that states the intended Unicode value for each code."
      ]
    },
    {
      "heading": "From glyph names to Unicode",
      "body": [
        "Because StandardEncoding yields glyph names rather than Unicode scalar values, reliable text extraction depends on a second step. A well-behaved reader maps each glyph name to Unicode using the Adobe Glyph List conventions, so /A becomes U+0041 and /quoteright becomes U+2019. This works well for the standard names but breaks down for custom or non-standard glyph names, or where a name is ambiguous.",
        "The robust solution the PDF specification provides is the ToUnicode CMap, an optional stream that maps character codes directly to Unicode independent of the encoding. When present, it overrides the glyph-name guesswork and lets a StandardEncoding-based font extract cleanly. Its absence is a common reason that visually perfect text refuses to copy, search, or reflow correctly, especially in files that lean on the Adobe standard glyph repertoire."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Origin",
      "value": "Inherited from PostScript and Adobe Type 1 fonts, predating PDF"
    },
    {
      "label": "Scope",
      "value": "Single-byte (0-255), simple fonts only, not composite Type 0 fonts"
    },
    {
      "label": "Maps to",
      "value": "Glyph names in the Adobe standard Latin set, not Unicode code points"
    },
    {
      "label": "Defined in",
      "value": "The predefined-encoding tables of the PDF specification (ISO 32000)"
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "introduced": "Present from the earliest PDF versions; derived from Adobe PostScript and Type 1 fonts",
    "typicalUsage": "Serves as a named or built-in base encoding for simple Latin-text fonts, especially the classic Adobe Type 1 text families, and as a starting point that a Differences array can override.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "StandardEncoding is just ASCII (or Latin-1) under another name.",
      "truth": "Its low range broadly follows ASCII but diverges at positions like the apostrophe and grave accent, and its upper range differs entirely from Latin-1 and from WinAnsiEncoding."
    },
    {
      "claim": "StandardEncoding maps byte codes directly to Unicode characters.",
      "truth": "It maps codes to glyph names; converting to Unicode requires the Adobe Glyph List conventions or, more reliably, a ToUnicode CMap in the font."
    },
    {
      "claim": "StandardEncoding is the encoding used by most modern PDFs.",
      "truth": "Many current producers name WinAnsiEncoding, a custom Differences-based encoding, or use composite fonts; StandardEncoding is most associated with older Adobe Type 1 workflows."
    }
  ],
  "faq": [
    {
      "q": "Which fonts typically use StandardEncoding?",
      "a": "It is the Adobe standard for Type 1 Latin text fonts and acts as the built-in base encoding for the classic non-symbol members of the Standard 14 fonts when no other encoding is specified."
    },
    {
      "q": "Why do apostrophes copy out as curly quotes from some PDFs?",
      "a": "StandardEncoding maps the byte ASCII uses for a straight apostrophe to /quoteright, a closing curly quote. Without a ToUnicode CMap to state the real value, extraction returns the curly character."
    },
    {
      "q": "Does StandardEncoding support accented or international characters?",
      "a": "Only a limited set in its upper range, and not the full Latin-1 repertoire at the positions Windows or Mac users expect. Broad language coverage usually needs a different encoding or a composite font with a CMap."
    },
    {
      "q": "Can a font use StandardEncoding and still override some codes?",
      "a": "Yes. A font can take StandardEncoding as its base and supply a Differences array in its Encoding dictionary to remap individual codes to other glyph names."
    },
    {
      "q": "How is StandardEncoding different from WinAnsiEncoding?",
      "a": "Both map bytes to glyph names, but WinAnsiEncoding follows the Windows code page 1252 layout with accented letters and typographic marks in fixed high positions, while StandardEncoding fills that range with Adobe's typesetting glyphs instead."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "font-substitution",
      "non-embedded-fonts",
      "pdf-text-extraction",
      "composite-vs-simple-fonts",
      "font-descriptor"
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
    "winansiencoding",
    "standard-14-fonts",
    "type-1-fonts",
    "glyph",
    "tounicode-cmap",
    "pdf-fonts",
    "cmap"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
