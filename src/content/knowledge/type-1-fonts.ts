import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "type-1-fonts",
  "h1": "Type 1 Fonts in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "Adobe Type 1 fonts",
    "PostScript Type 1 fonts",
    "Type 1 (PS) fonts",
    "T1 fonts",
    "Type1 font program"
  ],
  "definition": "A Type 1 font in PDF is a simple, single-byte outline font in Adobe's PostScript Type 1 format, referenced with the /Type1 subtype and optionally embedded through the font descriptor's FontFile entry.",
  "description": "Type 1 fonts are Adobe's PostScript outline format used in PDF as simple /Type1 fonts: how they are encoded, embedded via FontFile, and superseded by CFF.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Type 1 fonts are one of the oldest font technologies PDF supports, inherited directly from Adobe's PostScript imaging model. Adobe designed the Type 1 format to describe scalable glyph outlines with cubic Bezier curves, plus hinting information that helps the shapes render cleanly at small sizes and low resolutions. When PDF grew out of PostScript in the early 1990s, this font model came with it, which is why every conforming PDF reader understands how to draw Type 1 glyphs.",
    "In a PDF file, a Type 1 font is a 'simple font': text is addressed one byte at a time, so a single Type 1 font dictionary can reach at most 256 glyphs through its encoding. The font is described by a font dictionary whose Subtype is /Type1, backed by a font descriptor that can point to the actual outline program. Understanding how those pieces fit together is what separates a page that renders identically everywhere from one that silently falls back to a substitute face.",
    "Type 1 remains important less because new documents are built with it and more because so many existing PDFs contain it. The historical Standard 14 base fonts are Type 1, and the format is also the ancestor of the Compact Font Format (CFF) that modern PDFs prefer for the same outlines. Knowing how Type 1 is embedded, encoded, and increasingly replaced explains a lot of real-world font behavior in PDF."
  ],
  "sections": [
    {
      "heading": "Where Type 1 fonts come from",
      "body": [
        "Type 1 is Adobe's original scalable outline format, part of the PostScript page-description language. Adobe kept the specification proprietary for years and then published it as the 'Adobe Type 1 Font Format' in 1990, which opened the format to third-party foundries and tools. A Type 1 font stores each glyph as a 'charstring': a compact program of drawing operators that trace the outline using straight lines and cubic Bezier curves, together with hints that guide the rasterizer so stems and curves stay even at small sizes.",
        "A distinctive trait of the format is that most of the font program is encrypted. A Type 1 font file has a clear-text (ASCII) header written in PostScript, an encrypted binary section (produced by the format's eexec/charstring encryption) that holds the private dictionary and the glyph charstrings, and a fixed trailer of zero bytes. This three-part structure is not just historical trivia: PDF carries it forward directly when a Type 1 font is embedded."
      ]
    },
    {
      "heading": "How PDF represents a Type 1 font",
      "body": [
        "A Type 1 font appears in a PDF as a font dictionary with Subtype /Type1. That dictionary names the face in BaseFont, maps byte codes to glyph names through an Encoding, and (for non-standard fonts) lists the character range and glyph widths via FirstChar, LastChar, and Widths. It also references a font descriptor, a separate dictionary that records metrics and flags describing the typeface. Because it is a simple font, only 256 code points are addressable at once, so large character sets require a different mechanism such as a composite Type 0 font.",
        "To embed the actual outlines, the font descriptor includes a FontFile entry pointing to a stream that contains the Type 1 font program. That stream carries three length keys - Length1, Length2, and Length3 - which give the sizes of the clear-text portion, the encrypted binary portion, and the fixed trailing portion of the program. A reader uses those lengths to reconstruct and decrypt the embedded program. If FontFile is absent, the font is non-embedded and the viewer must find a system font or substitute one, which is a common cause of shifted or mismatched text."
      ]
    },
    {
      "heading": "The Standard 14 fonts",
      "body": [
        "A special group of Type 1 fonts, the Standard 14 (or 'base 14'), historically did not need to be embedded at all. These are the Helvetica, Times, and Courier families in their regular, bold, italic, and bold-italic variants, plus the Symbol and ZapfDingbats fonts. Early PDF assumed every conforming reader shipped compatible versions of these faces, so a document could reference them by name and rely on the viewer to supply the outlines and metrics.",
        "That assumption is convenient but fragile: a substitute the viewer supplies may differ subtly in spacing or shape from what the author saw. Modern practice, and archival standards in particular, treats reliable embedding as the safer default. This is why the Standard 14 shortcut is best understood as a legacy allowance rather than a recommendation for new documents."
      ]
    },
    {
      "heading": "Type 1, CFF, and the shift to OpenType",
      "body": [
        "The same Type 1 outline model lives on in the Compact Font Format (CFF), a binary encoding that stores equivalent glyph data far more compactly using an evolved charstring set. In PDF, CFF outlines are embedded through the font descriptor's FontFile3 entry, typically with the subtype /Type1C for a simple font. Because of this, a font dictionary marked /Type1 does not necessarily contain a classic Type 1 program - its outlines may be embedded as CFF, or the font may be one of the standard faces with nothing embedded at all.",
        "The wider ecosystem has moved on from the original Type 1 program format. Conforming PDF readers still render embedded Type 1 fonts, but authoring and tooling have shifted toward CFF and OpenType, and Adobe ended authoring support for Type 1 fonts across its own applications in January 2023. For PDF work today this mostly means encountering Type 1 in older files rather than creating it: new documents increasingly carry the same outlines as CFF or as OpenType/CFF programs."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "PDF font subtype",
      "value": "/Type1 - a simple, single-byte font addressing up to 256 glyphs"
    },
    {
      "label": "Embedded program entry",
      "value": "FontFile in the font descriptor, with Length1 / Length2 / Length3 sizes"
    },
    {
      "label": "Compact alternative",
      "value": "CFF outlines embedded as FontFile3 with subtype /Type1C"
    },
    {
      "label": "Origin",
      "value": "Adobe PostScript Type 1; format specification published by Adobe in 1990"
    }
  ],
  "specification": {
    "introduced": "Adobe PostScript Type 1 format; specification published by Adobe in 1990. Supported in PDF since PDF 1.0.",
    "typicalUsage": "Embedding scalable single-byte outline fonts in PDF, including the historical Standard 14 base fonts; the outline model also underlies CFF (/Type1C).",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pdf-a-font-embedding"
    ]
  },
  "misconceptions": [
    {
      "claim": "Type 1 and TrueType are basically the same kind of font.",
      "truth": "They are different outline technologies. Type 1 comes from Adobe/PostScript and uses cubic Bezier charstrings, while TrueType comes from Apple/Microsoft and uses quadratic curves; PDF even embeds them through different entries (FontFile versus FontFile2)."
    },
    {
      "claim": "Because the Standard 14 fonts are Type 1, Type 1 fonts never need to be embedded.",
      "truth": "Only the base 14 could historically be omitted and left to the viewer. Any other Type 1 face should be embedded for consistent rendering, and archival profiles such as PDF/A expect fonts to be embedded."
    },
    {
      "claim": "A /Type1 entry in a PDF always means a classic Adobe Type 1 program is embedded.",
      "truth": "The /Type1 subtype only describes the simple-font model. The outlines may be a classic Type 1 program (FontFile), a CFF program (FontFile3 /Type1C), or nothing at all for a standard face relying on the viewer."
    }
  ],
  "faq": [
    {
      "q": "How can I tell if a PDF uses a Type 1 font?",
      "a": "Inspect the font dictionary: a Subtype of /Type1 marks a simple Type 1 font. Whether the outlines travel with the file depends on the font descriptor - FontFile means a classic Type 1 program is embedded, FontFile3 with /Type1C means the outlines are embedded as CFF, and neither means the font is non-embedded."
    },
    {
      "q": "What is the difference between Type 1 and CFF?",
      "a": "CFF (Compact Font Format) is a more compact binary representation of the same outline model, embedded in PDF as FontFile3 with subtype /Type1C. It stores equivalent glyph data using an evolved charstring format and is the preferred way to carry Type 1-style outlines in modern PDFs."
    },
    {
      "q": "Can a Type 1 font handle large character sets like CJK?",
      "a": "Not on its own. As a simple font it is limited to 256 addressable glyphs. Large character sets are handled by composite (Type 0) fonts, where CID-keyed CFF or Type 1 outlines are wrapped so multi-byte codes can reach thousands of glyphs."
    },
    {
      "q": "Are Type 1 fonts still supported by PDF readers?",
      "a": "Yes. Conforming PDF readers still render embedded Type 1 fonts. What has been shrinking is authoring and tooling support - Adobe ended Type 1 authoring in its applications in January 2023, and newer PDF practice favors CFF and OpenType."
    },
    {
      "q": "Does font subsetting apply to Type 1 fonts?",
      "a": "Yes. An embedded Type 1 program can be subset to include only the glyphs a document actually uses, which reduces file size. A subset is conventionally signaled by a six-letter tag prefix added to the font name, such as ABCDEF+."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "character-encoding-in-pdf",
      "standard-encoding",
      "glyph",
      "font-subsetting",
      "composite-vs-simple-fonts",
      "cid-fonts",
      "non-embedded-fonts",
      "pdf-vs-postscript"
    ],
    "relatedStandards": [
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
    "standard-14-fonts",
    "font-embedding",
    "embedded-font-programs",
    "font-descriptor",
    "truetype-fonts-in-pdf",
    "opentype-fonts-in-pdf",
    "type-0-fonts"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
