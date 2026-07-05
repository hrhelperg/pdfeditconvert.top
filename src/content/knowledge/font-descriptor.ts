import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "font-descriptor",
  "h1": "The PDF Font Descriptor",
  "cluster": "text-fonts",
  "aliases": [
    "FontDescriptor dictionary",
    "PDF font descriptor dictionary",
    "font metrics dictionary"
  ],
  "definition": "A PDF font descriptor is a dictionary that records a font's shared metrics and style attributes — such as bounding box, flags, and stem width — so a viewer can lay out or substitute the font.",
  "description": "How the PDF font descriptor dictionary stores font-wide metrics and flags, why it enables substitution, and how it references an embedded font program.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every font used in a PDF that isn't one of the standard built-in fonts is described by a font descriptor: a dictionary of properties that apply to the typeface as a whole rather than to any single character. Where the font dictionary maps character codes to glyphs and encodings, the descriptor captures the metrics and stylistic traits that a viewer needs in order to position glyphs and, if the actual outlines are missing, to choose or synthesize a stand-in.",
    "The descriptor is the bridge between a font's logical identity and its physical rendering. It holds numeric values like the font's overall bounding box, ascent, descent, cap height, and the width of vertical stems, alongside a set of flags that encode whether the font is serif, fixed-pitch, italic, symbolic, and so on. When a font program is embedded in the file, the descriptor also points to the stream that contains it.",
    "Because these attributes are grouped in one place, the font descriptor is what makes graceful degradation possible. If the exact font is unavailable, a conforming reader can read the descriptor's metrics and flags and select a substitute that occupies roughly the same space and carries the same visual character, keeping line breaks and layout close to the original."
  ],
  "sections": [
    {
      "heading": "What the font descriptor contains",
      "body": [
        "A font descriptor is a PDF dictionary whose type identifies it as a FontDescriptor. Its entries describe the font as a single object: a font name, a set of flags summarizing style and category, and a font bounding box that encloses the outermost extents of all glyphs. It also records typographic reference values including the ascent and descent, the cap height, and often the x-height, together with metrics that help a viewer reconstruct a matching typeface — the dominant vertical stem width, an approximate horizontal stem width, and the italic angle for slanted designs.",
        "These values are expressed in glyph space, the coordinate system in which the font's own outlines are defined, so they scale consistently with whatever text size the content stream requests. Grouping them in the descriptor keeps the per-character machinery — the encoding and the width array that lives on the font dictionary — separate from the font-wide properties, which do not change from one character to the next."
      ]
    },
    {
      "heading": "Flags and font classification",
      "body": [
        "Among the descriptor's entries, the Flags value is a single integer whose individual bits act as independent yes/no switches describing the font's nature: whether it is fixed-pitch, serif, symbolic, script, italic, all-cap or small-cap, and whether its character set is nonsymbolic (drawn from standard Latin text) or symbolic (an arbitrary set such as icons or math symbols). A reader consults these bits to reason about the font even when the outlines themselves are absent.",
        "This classification is central to substitution. The symbolic-versus-nonsymbolic distinction in particular affects how a viewer interprets encoding, because symbolic fonts frequently supply their own internal mapping rather than following a standard Latin encoding. The detailed meaning of each bit is covered on the dedicated font flags topic."
      ]
    },
    {
      "heading": "Linking to the embedded font program",
      "body": [
        "When a font is embedded, the descriptor is where the connection is made. It carries a font-file entry that references a stream object holding the actual font program, and the specific entry name signals the program's format: one key is used for Type 1 style programs, another for TrueType programs, and a third, more general key for other formats such as OpenType/CFF and CID-keyed programs. Only one such entry is present for a given descriptor.",
        "If none of these font-file entries is present, the font is not embedded and the reader must locate or synthesize a substitute using the descriptor's metrics and flags. This is why a descriptor's numeric values matter even in files that omit the outlines: they are the specification against which a replacement face is chosen. The embedded stream itself is discussed under embedded font programs."
      ]
    },
    {
      "heading": "Simple fonts, composite fonts, and CIDFonts",
      "body": [
        "For simple fonts — Type 1, TrueType, and the like — the font dictionary points directly to a single font descriptor. Composite (Type 0) fonts work differently: the descriptor is attached to the underlying CIDFont rather than to the Type 0 dictionary itself, because it is the CIDFont that owns the glyph outlines and their metrics. The descriptor's role is otherwise the same in both cases.",
        "A CIDFont's descriptor can also carry additional entries specific to large, glyph-indexed fonts, such as a style dictionary and a CIDSet identifying the CIDs present in a subset, that help viewers render or substitute CJK and other extensive character sets. The default glyph width for a CIDFont, by contrast, is recorded on the CIDFont dictionary rather than on its descriptor — another instance of the descriptor holding font-wide traits while the font dictionary keeps its own per-font width defaults. Regardless of the font type, the descriptor remains the font-wide record that a reader relies on for spacing and for any fallback behavior."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Object type",
      "value": "A PDF dictionary (FontDescriptor) describing font-wide properties"
    },
    {
      "label": "Scope",
      "value": "Per typeface, not per character — separate from encoding and width arrays"
    },
    {
      "label": "Embedding link",
      "value": "Holds the font-file reference to an embedded font program, keyed by format"
    },
    {
      "label": "Required for",
      "value": "Fonts other than the standard built-in set; enables substitution when outlines are absent"
    }
  ],
  "specification": {
    "typicalUsage": "Referenced from a simple font dictionary, or from a CIDFont within a Type 0 font, to describe font-wide metrics and flags and to point at any embedded font program.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The font descriptor stores the width of every character.",
      "truth": "Per-character widths live in the font dictionary's width array. The descriptor holds font-wide metrics like the bounding box, stem widths, and typographic reference lines — not individual glyph widths."
    },
    {
      "claim": "A font descriptor means the font is embedded.",
      "truth": "A descriptor is present whether or not the font is embedded. Only when it carries a font-file entry pointing to a font-program stream is the actual outline data included; otherwise the descriptor's metrics guide substitution."
    },
    {
      "claim": "The Type 0 font dictionary holds the descriptor for a composite font.",
      "truth": "In a composite font, the descriptor is attached to the underlying CIDFont, not to the Type 0 dictionary, because the CIDFont owns the glyphs and their metrics."
    }
  ],
  "faq": [
    {
      "q": "Which fonts require a font descriptor?",
      "a": "Fonts other than the standard built-in set need a descriptor. The standard 14 fonts have historically been usable without one because viewers already know their metrics; any other simple or composite font relies on a descriptor to convey its font-wide properties."
    },
    {
      "q": "How does a viewer use the descriptor when a font isn't embedded?",
      "a": "It reads the descriptor's flags and metrics — the bounding box, ascent and descent, stem widths, italic angle, and category bits — and selects or synthesizes a substitute face that occupies similar space and shares the same visual character, keeping layout close to the original."
    },
    {
      "q": "What units are the descriptor's metrics in?",
      "a": "They are expressed in glyph space, the coordinate system in which the font's outlines are defined, so the values scale consistently with the text size requested by the content stream."
    },
    {
      "q": "How does the descriptor indicate the format of an embedded font?",
      "a": "The name of its font-file entry signals the format: one key is used for Type 1 style programs, another for TrueType, and a more general key for formats such as OpenType/CFF and CID-keyed programs. Only one such entry appears per descriptor."
    },
    {
      "q": "Is the font descriptor the same as the font dictionary?",
      "a": "No. The font dictionary handles the character code to glyph mapping, encoding, and per-character widths, while the descriptor it references holds the font-wide metrics and style flags. They work together but describe different levels of the font."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "glyph",
      "font-subsetting",
      "standard-14-fonts",
      "type-1-fonts",
      "truetype-fonts-in-pdf",
      "opentype-fonts-in-pdf",
      "character-encoding-in-pdf",
      "pdf-dictionary"
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
    "pdf-fonts",
    "font-flags",
    "font-embedding",
    "embedded-font-programs",
    "font-substitution",
    "cid-fonts",
    "type-0-fonts",
    "composite-vs-simple-fonts"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
