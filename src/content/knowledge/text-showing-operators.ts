import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "text-showing-operators",
  "h1": "PDF Text-Showing Operators",
  "cluster": "text-fonts",
  "aliases": [
    "Text-showing operators",
    "Tj operator",
    "TJ operator",
    "PDF text operators",
    "Text object show operators"
  ],
  "definition": "PDF text-showing operators are the content-stream instructions — Tj, TJ, ' and \" — that draw a string of character codes as glyphs inside a text object, using the current font and text state.",
  "description": "How PDF's text-showing operators — Tj, TJ, quote and double-quote — paint character codes as glyphs inside a BT/ET text object.",
  "searchIntent": "specification",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every visible word in a PDF is painted onto the page by a handful of content-stream operators known as the text-showing operators. They take a string of character codes, look each code up in the current font to find a glyph, and place that glyph on the page according to the current text position and text state. Nothing appears on a PDF page as text without one of these operators.",
    "There are four of them: Tj shows a single string; TJ shows an array of strings interleaved with numeric position adjustments; the ' (single-quote) operator moves to the next line and shows a string; and the \" (double-quote) operator sets word and character spacing, moves to the next line, and shows a string. All four are only meaningful inside a text object, delimited by the BT (begin text) and ET (end text) operators.",
    "Understanding these operators is central to how text extraction, editing, searching, and accessibility work, because the strings they carry are sequences of character codes rather than readable Unicode. What a human sees as the word 'invoice' may be stored as codes whose meaning depends entirely on the font's encoding — which is why extracted text sometimes arrives garbled or missing its spaces."
  ],
  "sections": [
    {
      "heading": "The Four Text-Showing Operators",
      "body": [
        "The simplest operator is Tj, which takes one string operand and shows it: the string's character codes are drawn as glyphs starting at the current text position. TJ is the workhorse for justified and kerned text. Its operand is an array that mixes strings with numbers; the strings are shown like Tj, while each number specifies a horizontal (or vertical) displacement that repositions the text without drawing anything. This lets a producer nudge glyphs closer together or farther apart for kerning, tracking, and justification without emitting separate operators.",
        "The remaining two operators combine line movement with showing. The ' operator is equivalent to performing T* (move to the start of the next line, using the current leading) and then Tj on the string. The \" operator takes three operands — a word spacing value, a character spacing value, and a string — sets those two spacing parameters, and then behaves like '. Because ' and \" fold common actions into a single token, they make text streams shorter but express nothing that Tj plus the text-positioning operators could not."
      ]
    },
    {
      "heading": "Strings Are Character Codes, Not Text",
      "body": [
        "The string handed to a text-showing operator is a sequence of bytes interpreted as character codes, not Unicode text. For a simple font, each byte is one code that maps through the font's encoding to a glyph. For a composite (Type 0) font, the associated CMap decides how many bytes form each code — one to four — and maps those codes to CIDs, which in turn select glyphs. The same byte value can therefore mean entirely different glyphs in two different fonts within the same document.",
        "This indirection is why recovering readable text is a separate problem from showing it. To turn shown codes back into Unicode, a reader relies on the font's encoding or a ToUnicode CMap; without that mapping, extraction can produce the wrong characters even though the page looks correct. It also explains a subtle detail of word spacing: the Tw parameter adds space only where the single-byte character code 32 appears, so it generally does not apply to the multi-byte codes used by many composite fonts."
      ]
    },
    {
      "heading": "How TJ Positions Glyphs",
      "body": [
        "Inside a TJ array, each number is a displacement expressed in thousandths of a unit of text space. The value is subtracted from the current coordinate before the next string is shown — a positive number moves subsequent glyphs backward (tightening the text) and a negative number moves them forward (opening it up), scaled by the current font size. Producers use these adjustments to encode kerning pairs and to distribute the extra space needed to justify a line, all within one operator.",
        "A practical consequence is that the visual gaps between words are not always real space glyphs. A generator may lay out words using TJ position adjustments or explicit text-positioning operators instead of emitting code 32, so the space a reader sees on screen has no corresponding character in the string. Text-extraction tools have to infer word boundaries from glyph positions, which is one reason copied text sometimes runs words together or splits them oddly."
      ]
    },
    {
      "heading": "The Text State They Depend On",
      "body": [
        "Text-showing operators carry only the string; everything about how the glyphs look and where they land comes from the current text state. The font and size are set beforehand by Tf, and a family of parameters shapes the result: Tc (character spacing), Tw (word spacing), Tz (horizontal scaling), TL (leading, used by line-moving operators), Tr (text rendering mode, which controls fill, stroke, and clipping), and Ts (text rise, for superscripts and subscripts). As each glyph is shown, the text matrix advances by the glyph's displacement so the next glyph follows in sequence.",
        "Because they read and update this state, text-showing operators are only valid within a text object. BT establishes an initial text matrix and text line matrix; the show and positioning operators update them; and ET ends the object. A content stream may open and close many text objects, but a show operator encountered outside a BT/ET pair is an error. This separation keeps text placement independent of the general graphics path operators used for vector art and images."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Operators",
      "value": "Tj, TJ, ' (single quote), and \" (double quote)"
    },
    {
      "label": "Scope",
      "value": "Valid only inside a text object between BT and ET"
    },
    {
      "label": "TJ adjustments",
      "value": "Numbers in thousandths of a text-space unit, subtracted from the current position"
    },
    {
      "label": "Operand type",
      "value": "Strings of character codes, mapped to glyphs by the current font"
    }
  ],
  "specification": {
    "typicalUsage": "Drawing all visible text on a PDF page from within a content stream's text objects.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The strings passed to Tj and TJ are Unicode text you can read directly.",
      "truth": "They are sequences of character codes interpreted through the font's encoding or CMap; recovering Unicode requires that mapping or a ToUnicode CMap, and it can fail."
    },
    {
      "claim": "TJ is just Tj with automatic kerning built in.",
      "truth": "TJ takes an array that interleaves strings with numbers; the numbers are explicit position adjustments the producer supplies — they move the text but draw nothing."
    },
    {
      "claim": "The spaces you see between words are always real space characters in the string.",
      "truth": "Gaps are often produced by TJ numeric adjustments or text-positioning operators rather than a code-32 space, which is why extracted text sometimes loses or merges spaces."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between Tj and TJ?",
      "a": "Tj takes a single string and shows it. TJ takes an array that mixes strings with numbers, where the numbers apply position adjustments (in thousandths of a text-space unit) between the strings — useful for kerning and justification."
    },
    {
      "q": "Do text-showing operators specify which font to use?",
      "a": "No. The font and size are selected beforehand by the Tf operator. The show operators only carry the character codes; they render them in whatever font the current text state names."
    },
    {
      "q": "What do the ' and \" operators do?",
      "a": "The ' operator moves to the next line (like T*) and then shows a string. The \" operator additionally sets word spacing and character spacing from two extra operands before doing the same line-move-and-show."
    },
    {
      "q": "Why does text copied from a PDF sometimes come out garbled or lose spaces?",
      "a": "Show operators emit character codes positioned by the text state and TJ adjustments, not readable text. If the font lacks a reliable code-to-Unicode mapping, or if spaces were rendered as position jumps rather than space characters, extraction can produce wrong characters or missing spaces."
    },
    {
      "q": "Can a text-showing operator appear outside a BT/ET pair?",
      "a": "No. They read and update the text matrix and text state established by BT, so they are only valid inside a text object; encountering one outside BT/ET is a content-stream error."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "type-0-fonts",
      "cmap",
      "pdf-coordinate-system",
      "pdf-string-objects",
      "pdf-graphics-state"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
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
    "pdf-operators",
    "pdf-content-streams",
    "text-rendering-modes",
    "pdf-text-extraction",
    "character-encoding-in-pdf",
    "glyph",
    "pdf-fonts",
    "tounicode-cmap"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
