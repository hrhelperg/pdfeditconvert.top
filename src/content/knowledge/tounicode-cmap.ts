import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "tounicode-cmap",
  "h1": "ToUnicode CMaps",
  "cluster": "text-fonts",
  "aliases": [
    "ToUnicode mapping",
    "/ToUnicode entry",
    "ToUnicode stream",
    "ToUnicode CMap stream",
    "Unicode CMap"
  ],
  "definition": "A ToUnicode CMap is a stream attached to a PDF font that maps the character codes used to show text back to Unicode values, so the text can be extracted, copied, and searched.",
  "description": "A ToUnicode CMap maps a PDF font's character codes to Unicode, letting viewers extract, copy, and search the real text behind the drawn glyphs.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Inside a PDF, text is not stored as characters the way it is in a word processor. Content streams show text by feeding numeric character codes to font operators, and each code tells the font which glyph to paint. Crucially, that code does not have to equal any standard character value: a subsetted or re-encoded font can use code 1 for the letter A, code 2 for a ligature, and so on. The visible page looks perfect, but nothing in the drawing instructions says what those codes mean as text.",
    "A ToUnicode CMap is the bridge that closes that gap. It is a small program, stored as a stream and referenced from the font dictionary through the /ToUnicode key, that maps each character code back to one or more Unicode values. It is a reverse lookup used purely for reading the text, and it is completely separate from the encoding that selects glyphs for rendering. A viewer consults it only when someone extracts, copies, searches, or otherwise needs the characters rather than the pixels.",
    "This is why two PDFs that look identical on screen can behave very differently when you select and copy their text. A document with accurate ToUnicode data yields clean, searchable characters; one with a missing or broken map produces gibberish, blank output, or the wrong letters. The mechanism matters most for subsetted fonts, custom encodings, and composite (CID-keyed) fonts, where the raw codes carry no reliable meaning on their own."
  ],
  "sections": [
    {
      "heading": "What a ToUnicode CMap does",
      "body": [
        "The value of a font dictionary's /ToUnicode entry is a stream containing a CMap program. That program defines a mapping from the character codes that appear as operands to the text-showing operators to sequences of Unicode code points. When a PDF viewer needs the actual text — for copy and paste, find-in-document, or handing content to another tool — it looks up each code in this map and emits the corresponding Unicode characters.",
        "The map has no influence on how the page is drawn. Glyph selection is handled entirely by the font's Encoding (for simple fonts) or by the CMap that drives a Type 0 composite font; the ToUnicode CMap is a parallel, read-only table consulted after rendering decisions are already made. Because of this separation, the codes-to-glyphs mapping and the codes-to-Unicode mapping can disagree, and a document can render correctly while still copying incorrectly."
      ]
    },
    {
      "heading": "How the mapping is written",
      "body": [
        "A ToUnicode CMap reuses the CMap syntax that PDF inherited from Adobe's PostScript and CID-keyed font architecture, but repurposed to target Unicode rather than glyph identifiers. The program is bracketed by begincmap and endcmap, declares the byte lengths of its input codes with a codespacerange section, and then lists mappings using beginbfchar/endbfchar for individual codes and beginbfrange/endbfrange for contiguous code ranges. Destination values are given as hexadecimal strings that encode Unicode in big-endian UTF-16, so characters outside the Basic Multilingual Plane are expressed as surrogate pairs.",
        "The format supports one-to-many mappings, which is essential for real-world text. A single code that paints an fi or ffi ligature glyph can map to the two or three separate Unicode letters it represents, and range entries can either increment the destination across the range or supply an explicit array of destinations. Input codes may be one byte for simple fonts or multiple bytes for composite fonts, matching the byte structure the content stream actually uses, which is why the codespace declaration has to line up with the font's real encoding."
      ]
    },
    {
      "heading": "Why PDFs need it",
      "body": [
        "When a font uses one of the well-known encodings, a viewer can often reconstruct text without a ToUnicode CMap by translating each code through the encoding to a glyph name and then to a Unicode value. That fallback breaks down as soon as the font strays from standard territory. Subsetting frequently renumbers glyphs into an arbitrary custom encoding, symbolic and decorative fonts may have glyph names that carry no Unicode meaning, and CID-keyed fonts identify glyphs by numeric IDs that say nothing about characters. In all of these cases the code alone is not enough to recover the text.",
        "A ToUnicode CMap supplies the missing information directly, which is why it is the dependable path to extractable text for exactly the fonts that would otherwise fail. Its absence is a common cause of the classic symptom where a PDF looks flawless but copies as scrambled letters, boxes, or nothing at all — the glyphs were drawn from codes the viewer cannot translate."
      ]
    },
    {
      "heading": "Text extraction, search, and accessibility",
      "body": [
        "Because ToUnicode data feeds every operation that turns drawn glyphs back into characters, it underpins copy and paste, in-document search, exporting a PDF to another format, and the text that assistive technology reads aloud. In a well-tagged, accessible document the ToUnicode layer is one contributor to reliable reading, though tagged structure can also supply an ActualText value that overrides the character-level mapping for specific runs where the codes and the intended text differ.",
        "It is important to treat ToUnicode as a best-effort aid rather than a guarantee. A map can omit codes, point several different codes at the same Unicode value, or map codes to U+0000 or the replacement character U+FFFD, any of which corrupts the extracted text even though the page still renders correctly. Evaluating whether a PDF's text is genuinely recoverable means checking the quality of these mappings, not just their presence."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where it lives",
      "value": "Referenced by the /ToUnicode entry of a font dictionary; the value is a stream containing a CMap program."
    },
    {
      "label": "Destination encoding",
      "value": "Unicode values are written as big-endian UTF-16 hexadecimal strings, with surrogate pairs for supplementary characters."
    },
    {
      "label": "Syntax",
      "value": "Uses the PostScript-derived CMap syntax: begincmap/endcmap, codespacerange, and beginbfchar / beginbfrange."
    },
    {
      "label": "Optional",
      "value": "A font may omit it; without it, viewers fall back to the font's encoding to guess the text."
    }
  ],
  "specification": {
    "iso": "ISO 32000-1 and ISO 32000-2",
    "typicalUsage": "Attached to font dictionaries so viewers can extract, copy, and search the text a PDF displays, especially for subsetted and CID-keyed fonts.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The ToUnicode CMap tells the viewer which glyph to draw.",
      "truth": "It has no effect on rendering. Glyph selection comes from the font's Encoding or the Type 0 CMap; ToUnicode is read only when text is extracted, copied, or searched."
    },
    {
      "claim": "If a PDF has a ToUnicode CMap, copied text will always be correct.",
      "truth": "The map can omit entries, point several codes at one value, or map to U+0000 or U+FFFD, all of which produce lost or garbled text despite a correct-looking page."
    },
    {
      "claim": "ToUnicode and the font's Encoding are two names for the same table.",
      "truth": "Encoding maps codes to glyphs for drawing; ToUnicode maps codes to Unicode for reading. They are separate lookups and can disagree."
    }
  ],
  "faq": [
    {
      "q": "Where is the ToUnicode CMap stored in a PDF?",
      "a": "In the font dictionary under the /ToUnicode key, whose value is a stream holding the CMap program. Each font that needs one carries its own."
    },
    {
      "q": "Is a ToUnicode CMap required?",
      "a": "No, it is optional. Fonts using standard encodings can often be extracted without one, but it is frequently needed for subsetted, symbolic, or CID-keyed fonts."
    },
    {
      "q": "Why do I get garbled text when I copy from a PDF that looks fine?",
      "a": "The glyphs are painted from character codes the viewer can display but cannot translate. If the ToUnicode map is missing or wrong, copy and search fall back to guesses that do not match the codes."
    },
    {
      "q": "How are Unicode values written inside a ToUnicode CMap?",
      "a": "As big-endian UTF-16 hexadecimal strings. Characters beyond the Basic Multilingual Plane use surrogate pairs, and one code can map to several units."
    },
    {
      "q": "Can a single character code map to more than one Unicode character?",
      "a": "Yes. A glyph such as an fi ligature can map to the two separate characters f and i through a multi-unit destination, so ligatures extract as normal letters."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "winansiencoding",
      "composite-vs-simple-fonts",
      "font-descriptor",
      "text-showing-operators",
      "searchable-pdf",
      "pdf-ocr"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "relatedTools": [
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
    "cmap",
    "pdf-text-extraction",
    "character-encoding-in-pdf",
    "pdf-fonts",
    "type-0-fonts",
    "cid-fonts",
    "font-subsetting",
    "glyph"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
