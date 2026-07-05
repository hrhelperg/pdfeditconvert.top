import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-text-extraction",
  "h1": "How Text Extraction From PDF Works",
  "cluster": "text-fonts",
  "aliases": [
    "PDF text extraction",
    "extracting text from a PDF",
    "getting text out of a PDF",
    "copying text from PDF",
    "PDF text recovery"
  ],
  "definition": "Text extraction from a PDF is the process of recovering readable characters from a page's content stream by mapping each drawn glyph's character code back to a Unicode value.",
  "description": "PDFs store text as font-specific character codes, not plain letters. Extraction maps those codes back to Unicode using the font's encoding and its ToUnicode CMap.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When you copy text out of a PDF, search inside it, or convert it to another format, a program is performing text extraction. It sounds like it should be trivial — the words are right there on the page — but a PDF does not store a document as a stream of sentences. It stores instructions for drawing glyphs at specific positions, and those instructions use numeric character codes that are only meaningful in the context of a particular font.",
    "Recovering real text therefore means running that process in reverse: reading the character codes from the page's content stream, using each font's encoding information to work out which Unicode characters those codes represent, and then reassembling the results into words, lines, and a sensible reading order. How cleanly this works depends almost entirely on what mapping information the PDF's author (or the software that produced it) chose to include.",
    "This page explains the mechanism behind extraction — how text is drawn, how codes become Unicode, how reading order is reconstructed, and why some PDFs surrender their text perfectly while others produce gibberish or nothing at all."
  ],
  "sections": [
    {
      "heading": "Text Is Drawn, Not Stored as Words",
      "body": [
        "Inside a PDF page, text lives in a content stream as a sequence of drawing operators. Text is enclosed between a begin-text and end-text pair (BT and ET), a font and size are selected, a position is set, and then a text-showing operator paints the characters. The operators that actually place text are Tj (show a string), TJ (show a string with individual glyph positioning adjustments), and the line-showing operators ' and \". The bytes handed to these operators are character codes interpreted through the current font — they are not guaranteed to be Unicode, and they are not necessarily even one byte each.",
        "A crucial consequence is that a PDF does not have to store the spaces between words. Because each glyph is positioned explicitly, software can lay out words simply by moving the text cursor with the TJ operator's numeric offsets instead of drawing an actual space character. That is why extracted text sometimes arrives with words run together or with odd gaps: the visual spacing was real, but there was no space character to copy. An extractor has to infer word boundaries from the geometry."
      ]
    },
    {
      "heading": "From Character Codes to Unicode",
      "body": [
        "Turning character codes back into text is the heart of extraction. A simple font maps each single-byte code to a glyph through an encoding — often a named encoding such as WinAnsiEncoding or StandardEncoding, possibly with per-code overrides. For these fonts an extractor can translate codes to Unicode by looking up the glyph names the encoding assigns and resolving them through the Adobe Glyph List. Composite (Type 0) fonts work differently: a CMap maps multi-byte codes to CIDs, and the font's character collection determines which glyphs those CIDs select, which is how CJK and other large-character-set text is handled.",
        "The most reliable path, however, is the font's ToUnicode CMap — an optional stream attached to the font that maps character codes directly to Unicode values. When a ToUnicode CMap is present, an extractor has an unambiguous answer for every code, regardless of how exotic the font's internal encoding is. When it is absent, the extractor must fall back to encoding-based heuristics, and those heuristics break down for subsetted or symbolically encoded fonts whose codes were assigned arbitrarily. This is the single biggest factor separating a PDF whose text copies cleanly from one that yields nonsense."
      ]
    },
    {
      "heading": "Reconstructing Reading Order",
      "body": [
        "Even with every code correctly mapped to Unicode, the characters come out in the order the page was painted, which is not necessarily the order a human reads them. Multi-column layouts, footnotes, headers, and rotated text can all be drawn in an order that has nothing to do with reading flow. A plain extractor reconstructs order by analysing glyph coordinates in the PDF coordinate system — grouping glyphs into lines by their vertical position, ordering lines top to bottom, and detecting word breaks from horizontal gaps.",
        "A tagged PDF removes much of this guesswork. Its logical structure tree marks content with a defined reading order and associates each piece of drawn text with a structure element, so a structure-aware extractor can follow the intended sequence rather than infer it. Tagging can also supply an ActualText attribute that provides replacement text for content whose glyphs do not map cleanly — for example a decorative ligature or a graphic used in place of a character. This is why well-tagged documents both read better with assistive technology and extract more faithfully."
      ]
    },
    {
      "heading": "When Extraction Fails or Needs OCR",
      "body": [
        "Some PDFs have no extractable text at all. An image-only PDF — typically a scan — contains a picture of a page with no text objects, so there is nothing to copy. Recovering text from these requires optical character recognition (OCR), which analyses the image, guesses the characters, and adds a text layer that later extraction can read. The visible page looks identical either way, which is why a scanned document can appear to contain text while offering none to select.",
        "Other failures are subtler. A font may be subsetted with a custom encoding and no ToUnicode CMap, so its codes map to glyphs but not to any standard character — the result is text that looks correct on screen but copies as gibberish. Ligatures can collapse several letters into one glyph that, without a proper mapping, extracts as a single unexpected character. Type 3 fonts define their glyphs as arbitrary drawing procedures and carry no inherent character meaning, so they too rely on a ToUnicode CMap to be extractable. In each case the page renders fine; only the recoverable text suffers."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Text-showing operators",
      "value": "Tj, TJ, ' and \" draw text inside a BT/ET text object in the content stream"
    },
    {
      "label": "Reliable code-to-Unicode map",
      "value": "The font's optional ToUnicode CMap, which maps character codes directly to Unicode"
    },
    {
      "label": "Spaces may be absent",
      "value": "PDFs can position words with glyph offsets instead of space characters, so extractors infer word breaks"
    },
    {
      "label": "Reading-order source",
      "value": "A tagged PDF's logical structure tree defines the intended reading sequence"
    }
  ],
  "misconceptions": [
    {
      "claim": "If you can see text on a PDF page, you can always select and extract it.",
      "truth": "An image-only or scanned PDF is a picture of text with no character data; extracting it requires OCR to add a text layer first."
    },
    {
      "claim": "Extracted text always comes out in the order you read it.",
      "truth": "Content-stream order is draw order, not reading order; an extractor infers sequence from glyph positions unless a tagged structure tree supplies the logical order."
    },
    {
      "claim": "Garbled copied text means the PDF file is corrupted.",
      "truth": "Usually the font is subsetted with a custom or symbolic encoding and has no ToUnicode CMap, so its codes cannot be mapped back to standard characters."
    }
  ],
  "faq": [
    {
      "q": "Why does copied PDF text sometimes lose its spaces?",
      "a": "Because a PDF can position words by moving the text cursor rather than drawing actual space characters. When no space character exists, an extractor has to guess word boundaries from the horizontal gaps between glyphs, which is not always perfect."
    },
    {
      "q": "What is a ToUnicode CMap and why does it matter for extraction?",
      "a": "It is an optional stream attached to a font that maps each character code directly to a Unicode value. When present, it lets an extractor recover text unambiguously no matter how the font is encoded internally; when absent, extraction falls back to encoding heuristics that can fail."
    },
    {
      "q": "Can the text in every PDF be extracted?",
      "a": "No. Image-only PDFs contain no text objects and need OCR, and some fonts are encoded in ways that carry no standard character mapping. A page can render perfectly yet expose little or no recoverable text."
    },
    {
      "q": "Does tagging a PDF improve text extraction?",
      "a": "Yes. A tagged PDF's structure tree defines a logical reading order and can attach ActualText replacements for content whose glyphs do not map cleanly, so structure-aware extraction is both more accurate and better ordered."
    },
    {
      "q": "Is the extracted text identical to the glyphs I see on the page?",
      "a": "Usually, but not always. Ligatures, custom glyphs, and Type 3 fonts can display correctly while extracting as unexpected characters unless the font provides a ToUnicode mapping or the content carries ActualText."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "cmap",
      "cid-fonts",
      "font-subsetting",
      "tagged-pdf",
      "text-layer-in-pdf",
      "type-3-fonts"
    ],
    "relatedFormats": [
      "searchable-pdf",
      "image-only-pdf"
    ],
    "relatedTools": [
      {
        "label": "PDF to Word — Convert PDF to Editable DOCX in Your Browser",
        "path": "/pdf-to-word"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Convert PDF to Word — Free, In Your Browser",
        "path": "/guides/how-to-convert-pdf-to-word"
      },
      {
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      }
    ]
  },
  "seeAlso": [
    "tounicode-cmap",
    "text-showing-operators",
    "character-encoding-in-pdf",
    "pdf-content-streams",
    "glyph",
    "searchable-pdf",
    "pdf-ocr",
    "reading-order"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
