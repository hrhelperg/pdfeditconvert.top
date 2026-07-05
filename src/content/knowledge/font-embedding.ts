import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "font-embedding",
  "h1": "Font Embedding in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "Embedded fonts",
    "PDF font embedding",
    "Embedding fonts in PDF",
    "Font program embedding"
  ],
  "definition": "Font embedding is the practice of storing a font's actual glyph program inside a PDF so text displays with the intended typeface on any device, without relying on fonts installed locally.",
  "description": "Font embedding packages a font's glyph outlines inside a PDF so text looks the same on any device, without depending on locally installed fonts.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF's core promise is that a document looks the same wherever it is opened. Fonts are central to that promise: if the reader's device does not have the exact typeface a document was designed with, text can shift, reflow, or simply look wrong. Font embedding is the mechanism that keeps this from happening by packaging the font itself inside the file.",
    "When a font is embedded, the PDF carries the font program — the data describing each glyph's outline and spacing — as part of the document. A viewer renders text directly from that embedded data instead of searching the operating system for a matching font. The result is consistent appearance across different screens, printers, and years.",
    "Embedding is closely tied to font descriptors, subsetting, and the archival and print standards that require it. Understanding what “embedded” really means helps explain why some PDFs display perfectly everywhere while others fall back to substitute fonts that quietly change how a page looks."
  ],
  "sections": [
    {
      "heading": "How Font Embedding Works",
      "body": [
        "A PDF represents each font with a font dictionary and an associated font descriptor. When the font is embedded, the descriptor points to a stream object that holds the font program. Different keys identify the program's format: FontFile for Type 1 fonts, FontFile2 for TrueType, and FontFile3 for compact formats such as CFF and OpenType, whose Subtype entry (for example Type1C or CIDFontType0C) names the exact flavor. A conforming viewer reads glyph outlines from that embedded stream to draw the text.",
        "Because the font travels with the document, rendering no longer depends on what is installed on the reader's machine. This is what lets a PDF authored on one computer appear identical on another that has never had the typeface installed."
      ]
    },
    {
      "heading": "Why Embedding Matters",
      "body": [
        "Without an embedded font, a viewer must locate a substitute. Substitution can change character widths, kerning, line breaks, and overall appearance — the very problems PDF was created to avoid. Embedding keeps the document self-contained, so the intended glyphs are always available and the layout stays fixed.",
        "This matters most for documents that must be reproduced faithfully over time or handed to a commercial printer, where a wrong substitution could reflow a contract, break a table, or misprint a heading. Embedding removes that variability by making the font part of the file rather than an external dependency."
      ]
    },
    {
      "heading": "Full Embedding vs Subsetting",
      "body": [
        "Fonts can be embedded in full or as a subset. A subset includes only the glyphs the document actually uses, which usually makes the file substantially smaller than embedding an entire typeface with all of its characters. Because most documents use only a fraction of a font's glyphs, subsetting is a common way to keep embedded PDFs compact.",
        "Tools mark subset fonts with a six-character prefix followed by a plus sign, such as ABCDEF+FontName, so a partial embed can be told apart from a complete one. The trade-off is that a subset font is not well suited to later editing that introduces new characters, since the glyphs that were never used simply are not present in the file."
      ]
    },
    {
      "heading": "Embedding and the PDF Standards",
      "body": [
        "Several PDF standards make embedding effectively mandatory. PDF/A, the archival family, requires fonts to be embedded so a file remains reproducible far into the future without depending on external resources. PDF/X, used in print production, requires embedding so a print RIP never substitutes a font and changes the output.",
        "In both cases the motivation is the same as embedding itself: a self-contained document whose text renders one way and only one way. This is why validators for these standards flag any font that is referenced but not embedded."
      ]
    },
    {
      "heading": "Font Formats and Embedding Permissions",
      "body": [
        "The format of the embedded program depends on the original font. Simple fonts embed as Type 1, TrueType, or CFF/OpenType programs, while composite (Type 0) fonts used for large character sets — such as CJK writing systems — embed their descendant CIDFontType0 (CFF) or CIDFontType2 (TrueType) programs.",
        "Fonts also carry embedding permissions. TrueType and OpenType fonts include a flag (the fsType field in the OS/2 table) that can allow, restrict, or forbid embedding. When a font indicates that embedding is not permitted, a compliant tool will avoid including it, which can force substitution instead. These permission bits are a property of the font, not of the PDF format itself."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where it lives",
      "value": "Embedded font programs are stored as stream objects referenced from the font descriptor via FontFile, FontFile2, or FontFile3."
    },
    {
      "label": "Standards",
      "value": "PDF/A and PDF/X both require fonts to be embedded so documents render consistently for archiving and print."
    },
    {
      "label": "Subset marker",
      "value": "Subset fonts are labeled with a six-character prefix and a plus sign, such as ABCDEF+FontName."
    },
    {
      "label": "Standard 14 fonts",
      "value": "The 14 standard fonts were historically assumed present in viewers, so they could be referenced without embedding."
    }
  ],
  "specification": {
    "typicalUsage": "Storing a document's font programs inside the PDF so text renders identically without relying on fonts installed on the reader's device.",
    "relatedStandards": [
      "pdf-a",
      "pdf-x",
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "Embedding a font always includes the entire font file.",
      "truth": "Most PDFs embed only a subset — the glyphs actually used — which is why subset fonts appear with a prefix like ABCDEF+ and the full character set is not present."
    },
    {
      "claim": "If a PDF displays correctly on my screen, its fonts must be embedded.",
      "truth": "It may be rendering with a substituted or locally installed font; correct display on one machine does not prove the fonts are embedded in the file."
    },
    {
      "claim": "Embedding fonts turns the text into an image so it can't be selected.",
      "truth": "Embedded text remains real, selectable text; embedding stores the font program used to draw the glyphs, not a picture of the words."
    }
  ],
  "faq": [
    {
      "q": "How can I tell whether the fonts in a PDF are embedded?",
      "a": "Most viewers list every font in the document's properties or a fonts panel, marking each as embedded or embedded subset. A font shown without that note is being supplied by the reader's device and may be substituted elsewhere."
    },
    {
      "q": "Does embedding fonts make a PDF larger?",
      "a": "Yes. Embedding adds the font program to the file, so it increases size. Subsetting limits the impact by including only the glyphs the document actually uses rather than the full typeface."
    },
    {
      "q": "What happens when a font is not embedded?",
      "a": "The viewer looks for the same font on the local system, and if it is missing it chooses a substitute. Substitution can change spacing, line breaks, and appearance, which is what embedding is meant to prevent."
    },
    {
      "q": "Can every font be embedded?",
      "a": "Embedding depends on the font's permissions. TrueType and OpenType fonts carry a flag indicating whether embedding is allowed, restricted, or forbidden, and a compliant tool will not embed a font that disallows it."
    },
    {
      "q": "Do the standard 14 fonts need to be embedded?",
      "a": "Historically viewers were expected to provide them, so they could be referenced without embedding. Embedding still avoids substitution differences, and standards such as PDF/A require embedding regardless."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "type-1-fonts",
      "truetype-fonts-in-pdf",
      "opentype-fonts-in-pdf",
      "cid-fonts",
      "type-0-fonts",
      "glyph",
      "font-flags"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-x",
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
      },
      {
        "label": "PDF Form Font Problems (Auto-Size, Clipping, Substitution)",
        "path": "/guides/pdf-form-font-problems"
      }
    ]
  },
  "seeAlso": [
    "pdf-fonts",
    "font-subsetting",
    "non-embedded-fonts",
    "embedded-font-programs",
    "font-descriptor",
    "font-substitution",
    "standard-14-fonts",
    "pdf-a-font-embedding"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
