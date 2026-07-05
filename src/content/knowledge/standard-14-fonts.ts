import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "standard-14-fonts",
  "h1": "The Standard 14 PDF Fonts",
  "cluster": "text-fonts",
  "aliases": [
    "Base-14 fonts",
    "Base 14 fonts",
    "Standard fonts",
    "The 14 standard fonts",
    "PDF core fonts"
  ],
  "definition": "The Standard 14 fonts are a set of 14 core typefaces — Helvetica, Times and Courier (four styles each) plus Symbol and ZapfDingbats — that PDF viewers were historically expected to supply without embedding.",
  "description": "The base-14 PDF fonts are Helvetica, Times, Courier, Symbol and ZapfDingbats that readers can render without embedding — and why their appearance can vary.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "The Standard 14 fonts — often called the \"base-14\" fonts — are a small, fixed set of typefaces that early PDF viewers were assumed to have built in. Because every conforming reader was expected to know these fonts, a PDF could reference one of them by name instead of carrying the font program inside the file. That kept documents small in an era when embedding a full font was expensive.",
    "The set covers three text families and two symbol fonts: four styles each of Helvetica, Times and Courier (regular, bold, italic/oblique and bold-italic/bold-oblique), plus Symbol and ZapfDingbats. All fourteen are Type 1 fonts whose character widths and metrics were standardized by Adobe, which is what made it safe for a viewer to lay out text using a font the file did not actually contain.",
    "The trade-off is that the file only guarantees the metrics, not the exact glyph shapes. A reader that lacks the named font substitutes a similar one, so the same PDF can look slightly different from one program or device to another. Modern archival and print standards react to that uncertainty by requiring even these fonts to be embedded. The base PDF format tightened its own rules too: PDF 2.0 (ISO 32000-2) removed the special exemption that had let their font dictionaries omit width and descriptor data, so a writer must now supply that data — or embed the font — just as it would for any other font."
  ],
  "sections": [
    {
      "heading": "The fourteen fonts and how they are named",
      "body": [
        "The base-14 set is made of three text families plus two special-purpose fonts. The text families are Helvetica (Helvetica, Helvetica-Bold, Helvetica-Oblique, Helvetica-BoldOblique), Times (Times-Roman, Times-Bold, Times-Italic, Times-BoldItalic) and Courier (Courier, Courier-Bold, Courier-Oblique, Courier-BoldOblique). To those twelve, add Symbol (mathematical and Greek characters) and ZapfDingbats (decorative symbols), which brings the total to fourteen.",
        "Inside a PDF, one of these fonts is referenced through a simple Type 1 font dictionary whose BaseFont entry holds the standard name, such as /Helvetica-Bold. The three text families default to StandardEncoding for how byte values map to glyphs, though a document can re-encode them (for example to WinAnsiEncoding) to reach a wider range of Latin characters. Symbol and ZapfDingbats are different: each carries its own built-in encoding, so they are not meant to be re-encoded like the text fonts."
      ]
    },
    {
      "heading": "Why they could be left un-embedded",
      "body": [
        "Font embedding means storing the actual font program inside the PDF so any reader can draw the glyphs exactly. The base-14 fonts were the historical exception: because their metrics were standardized and every conforming viewer was expected to have them, a PDF could name one and skip the embedded font program entirely. This is the classic example of a non-embedded font in PDF.",
        "The specification went a step further for these fonts. In older PDF versions the font dictionary for a standard font was allowed to omit the Widths array and the FontDescriptor — the entries that normally tell a reader how wide each character is and describe the font's overall shape — because the consumer application was assumed to already know that information for the base-14 set. For every other font, those entries are needed. That shortcut is unique to the Standard 14 fonts and is a large part of why they are discussed as a special case."
      ]
    },
    {
      "heading": "Rendering, substitution and why appearance varies",
      "body": [
        "When a reader opens a PDF that references a base-14 font without embedding it, the reader must find a font to draw with. If it has the exact named font it uses that; otherwise it performs font substitution, choosing a metrically similar face. Many viewers, for instance, render \"Helvetica\" with a Helvetica-like or Arial-like font and \"Times-Roman\" with a Times-like face, matching the standardized widths so the line breaks and spacing stay consistent.",
        "Because only the metrics are guaranteed, the substitute's glyph outlines can differ subtly from what the author saw — letter shapes, weight and detailing may not match exactly. For everyday reading this is usually invisible, but it makes the base-14 fonts a poor fit anywhere pixel-accurate, reproducible output matters. That is the core reason print and archival workflows treat non-embedded fonts, including these, with caution."
      ]
    },
    {
      "heading": "When embedding is required anyway",
      "body": [
        "Standards built on top of PDF close the base-14 loophole. PDF/A, the family for long-term archiving, requires that every font used for rendering be embedded so the document stays self-contained and reproducible far into the future — the Standard 14 fonts get no exemption. PDF/X, aimed at reliable print production, applies the same expectation so a print provider is never depending on fonts installed on their own system.",
        "The base PDF standard itself has also moved on. PDF 2.0 (ISO 32000-2) removed the special status of the Standard 14 fonts: the allowance that let their dictionaries omit width and descriptor information was deprecated, so a conforming writer is expected to include that data — or embed the font — just as it would for any other font. In practice, embedding these fonts (or subsetting them) is the dependable choice whenever the document must look the same everywhere."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "How many",
      "value": "14 fonts: four styles each of Helvetica, Times and Courier, plus Symbol and ZapfDingbats"
    },
    {
      "label": "Font type",
      "value": "Type 1 fonts with standardized Adobe character metrics"
    },
    {
      "label": "Embedding",
      "value": "Historically optional in base PDF; required by PDF/A and PDF/X"
    },
    {
      "label": "PDF 2.0",
      "value": "Removed the exemption that let their dictionaries omit width and descriptor data"
    }
  ],
  "misconceptions": [
    {
      "claim": "The Standard 14 fonts are embedded in the PDF, so they look identical everywhere.",
      "truth": "They are typically not embedded — the reader supplies the font or a substitute, so exact glyph shapes can differ between viewers even though widths match."
    },
    {
      "claim": "You can safely rely on the base-14 fonts in an archival PDF/A file.",
      "truth": "PDF/A (and PDF/X) require every font to be embedded, so the Standard 14 fonts must be embedded like any other font in those standards."
    },
    {
      "claim": "\"Helvetica\" in a PDF is always Adobe's actual Helvetica font.",
      "truth": "The specification standardizes the metrics, not the outlines; many readers substitute a metrically compatible face rather than the literal font."
    }
  ],
  "faq": [
    {
      "q": "What exactly are the 14 fonts?",
      "a": "Four styles of Helvetica (regular, bold, oblique, bold-oblique), four of Times (roman, bold, italic, bold-italic), four of Courier (regular, bold, oblique, bold-oblique), plus Symbol and ZapfDingbats."
    },
    {
      "q": "Do I have to embed the Standard 14 fonts?",
      "a": "Base PDF historically did not require it, but standards do: PDF/A and PDF/X require all fonts to be embedded, and PDF 2.0 removed the old exemption, so embedding is the reliable default."
    },
    {
      "q": "Why does a PDF using these fonts look different on another device?",
      "a": "Because the font usually is not stored in the file. A reader that lacks the named font substitutes a similar one, matching the widths but not necessarily the exact glyph shapes."
    },
    {
      "q": "What character encoding do the base-14 fonts use?",
      "a": "The Helvetica, Times and Courier text fonts default to StandardEncoding and can be re-encoded (for example to WinAnsiEncoding), while Symbol and ZapfDingbats use their own built-in encodings."
    },
    {
      "q": "Are the Standard 14 fonts still relevant in PDF 2.0?",
      "a": "The fonts still exist, but PDF 2.0 deprecated their special treatment — their dictionaries are no longer meant to omit width and descriptor data, so they are handled like any other font."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "character-encoding-in-pdf",
      "winansiencoding",
      "font-subsetting",
      "embedded-font-programs",
      "glyph"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-x",
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
    "pdf-fonts",
    "non-embedded-fonts",
    "font-embedding",
    "type-1-fonts",
    "font-substitution",
    "standard-encoding",
    "font-descriptor",
    "pdf-a-font-embedding"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
