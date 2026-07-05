import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "font-flags",
  "h1": "PDF Font Flags",
  "cluster": "text-fonts",
  "aliases": [
    "Flags (font descriptor entry)",
    "font descriptor flags",
    "font characteristics flags",
    "PDF /Flags entry"
  ],
  "definition": "PDF font flags are the bits of the /Flags integer in a font descriptor that record a font's traits — serif, italic, monospaced, symbolic and more — mainly to guide substitution.",
  "description": "Font flags are bits in a PDF font descriptor's /Flags field that mark a typeface as serif, italic, monospaced or symbolic to guide substitution and encoding.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every font used in a PDF can carry a compact description of what the typeface looks like, independent of the glyph outlines themselves. Font flags are the part of that description that answers yes/no questions: is the font monospaced, does it have serifs, is it italic, does it use an ordinary Latin character set or an unusual symbol set? These answers are packed as individual bits into a single integer called Flags, which lives inside the font descriptor dictionary.",
    "The flags exist mainly so that a PDF viewer can make good decisions when it does not have the original font program to draw from. If a font is not embedded, the reader has to find or synthesize a replacement, and the flags — together with numeric metrics such as the bounding box, italic angle and stem width — tell it what kind of substitute will look closest to the author's intent. A few flags also feed rendering behavior, such as forcing bold glyphs to stay legible at very small sizes.",
    "Because font flags are descriptive rather than active, they rarely change what you see when a font is embedded. Their influence shows up at the edges: when fonts are missing, when text is extracted, and when a symbolic font needs its encoding interpreted correctly. Understanding the flag bits helps explain why a PDF sometimes renders in the wrong typeface or copies out as garbled characters."
  ],
  "sections": [
    {
      "heading": "Where font flags live and how they are encoded",
      "body": [
        "Font flags are stored in the Flags entry of a font descriptor — the dictionary (referenced from a font as /FontDescriptor) that carries a font's global characteristics such as its bounding box, ascent, descent, italic angle and stem width. Flags is a single integer, but it is not read as an ordinary number; it is treated as a 32-bit field in which each bit position represents one true/false property of the font. A producer sets the value by turning on the bits that apply and leaving the rest at zero.",
        "The bits are numbered starting from 1 at the low-order (least significant) end. To test whether a given property is set, a reader isolates the corresponding bit — for example, the FixedPitch property is bit 1 (numeric value 1), and the Italic property is bit 7 (numeric value 64). A typical descriptor therefore holds a value like 34, which is simply the sum of the individual bit values that are switched on. The Flags entry is a required member of a font descriptor."
      ]
    },
    {
      "heading": "What each flag describes",
      "body": [
        "The defined flags cover a font's visible style and character coverage. FixedPitch (bit 1) marks a monospaced font whose glyphs all share the same width. Serif (bit 2) indicates glyphs with serifs. Symbolic (bit 3) means the font's characters fall outside the standard Latin set, while Nonsymbolic (bit 6) means it uses the standard Latin character set or a subset of it. Script (bit 4) flags cursive, handwriting-like designs, and Italic (bit 7) marks slanted glyphs. Higher bits describe letter-case behavior and rendering: AllCap (bit 17) for fonts with no lowercase, SmallCap (bit 18) for small-capital lowercase forms, and ForceBold (bit 19), a hint that helps bold glyphs stay solid at very small sizes on low-resolution output.",
        "These flags are set once, when the PDF is produced, and describe the font as designed. They are hints for a consuming application rather than commands: they do not restyle text or override the glyph shapes actually stored in an embedded font program. Their value is that they let a reader reason about a typeface it may not otherwise be able to see."
      ]
    },
    {
      "heading": "Symbolic versus nonsymbolic and why it matters",
      "body": [
        "Of all the flags, the Symbolic and Nonsymbolic bits carry the most weight, because they change how a reader interprets a font's encoding. The two are meant to be mutually exclusive: a conforming font sets exactly one of them. A nonsymbolic font advertises that its characters map onto the ordinary Latin repertoire, so a named encoding such as WinAnsiEncoding or StandardEncoding can be applied to translate character codes into glyphs. A symbolic font — think of a font of dingbats, math symbols or custom icons — declares that no standard mapping applies, and readers instead rely on the font's own built-in mapping (its cmap, for TrueType) to locate glyphs.",
        "This distinction is why the symbolic flag frequently surfaces in text-extraction and encoding problems. If a font is flagged symbolic, applying a Latin encoding to it would produce nonsense, so a well-behaved reader takes a different path to resolve glyphs. Getting this flag wrong, or combining it with the wrong encoding entry, is a common source of PDFs that display correctly but copy out as the wrong characters."
      ]
    },
    {
      "heading": "Why font flags matter: substitution",
      "body": [
        "The clearest reason font flags exist is substitution. When a font program is embedded in the file, the reader draws directly from those outlines and the flags mostly ride along unused. When a font is not embedded — as with the standard base fonts, or any typeface a producer chose to leave out — the reader must find a locally available font or synthesize one that resembles the original. The flags tell it what to aim for: a serif or sans-serif design, monospaced or proportional spacing, upright or italic, standard Latin or an unusual symbol set.",
        "A reader combines the flags with the numeric metrics in the same font descriptor — the font bounding box, italic angle, stem width and cap height — to pick or build a substitute whose spacing and proportions match closely enough that lines break in the same places. This is why a document with missing fonts can still lay out reasonably: the descriptor and its flags act as a portable sketch of the absent typeface. It is also why substitution is imperfect, since a sketch can never fully reproduce the original design."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Location",
      "value": "The /Flags entry inside a font's FontDescriptor dictionary"
    },
    {
      "label": "Encoding",
      "value": "A single integer read as a 32-bit field; bits numbered from 1 at the low-order end"
    },
    {
      "label": "Mutual exclusion",
      "value": "A font sets exactly one of Symbolic (bit 3) or Nonsymbolic (bit 6)"
    },
    {
      "label": "Defined bits",
      "value": "FixedPitch, Serif, Symbolic, Script, Nonsymbolic, Italic, AllCap, SmallCap and ForceBold"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1, ISO 32000-2",
    "typicalUsage": "Describing a font's stylistic traits and character coverage so a reader can select or synthesize a substitute font, and can interpret encoding correctly, when the original font program is unavailable.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Turning on the Italic or Bold-related flag makes the text render slanted or bold.",
      "truth": "Flags only describe a font's existing design. For an embedded font the glyph outlines decide how text looks; the Italic flag does not synthesize a slant, and ForceBold is only a hint for keeping bold glyphs legible at very small sizes."
    },
    {
      "claim": "Font flags contain or embed the font.",
      "truth": "Flags are purely descriptive bits. The actual glyph program lives in a FontFile, FontFile2 or FontFile3 stream. Flags matter most precisely when the font is not embedded and a substitute is needed."
    },
    {
      "claim": "A font can set both the Symbolic and Nonsymbolic flags at once.",
      "truth": "The two bits are meant to be mutually exclusive; a conforming font sets exactly one, because they lead a reader to interpret the font's encoding in incompatible ways."
    }
  ],
  "faq": [
    {
      "q": "Where are font flags stored in a PDF?",
      "a": "In the Flags entry of the font descriptor dictionary, which a font object references through its FontDescriptor key. Flags is a single integer whose bits each represent one property of the font."
    },
    {
      "q": "Is the Flags entry required?",
      "a": "Yes — Flags is a required member of a font descriptor. A descriptor is present for embedded, composite and most simple fonts; historically the standard 14 base fonts could omit a descriptor, but PDF 2.0 requires descriptors for them as well."
    },
    {
      "q": "How do I read the individual flags from the integer?",
      "a": "Treat the integer as a bit field and test each bit by position. For example, bit 1 (value 1) is FixedPitch and bit 7 (value 64) is Italic, so a value such as 65 has both set. Many PDF libraries expose the flags as named booleans."
    },
    {
      "q": "Do font flags affect copied or extracted text?",
      "a": "Indirectly. The Symbolic and Nonsymbolic flags govern how a reader interprets a font's encoding, which affects how glyphs are mapped back to characters. A mis-set symbolic flag is a common cause of text that displays fine but extracts as the wrong characters."
    },
    {
      "q": "Are font flags the same as form field flags or permission flags?",
      "a": "No. All three are bit fields, but they live in different dictionaries and describe unrelated things — font flags describe typeface traits, form field flags control field behavior, and permission flags encode document access restrictions."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "standard-14-fonts",
      "composite-vs-simple-fonts",
      "embedded-font-programs",
      "winansiencoding",
      "form-field-flags",
      "pdf-permission-flags"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
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
    "font-descriptor",
    "pdf-fonts",
    "font-substitution",
    "non-embedded-fonts",
    "font-embedding",
    "character-encoding-in-pdf",
    "truetype-fonts-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
