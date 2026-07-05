import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "non-embedded-fonts",
  "h1": "Non-Embedded Fonts in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "unembedded fonts",
    "referenced fonts",
    "external fonts",
    "non-embedded font references",
    "fonts not embedded in a PDF"
  ],
  "definition": "A non-embedded font is a PDF font whose glyph outlines are not stored in the file; the PDF references it by name and relies on the viewer to supply a local copy or substitute a similar font.",
  "description": "A non-embedded PDF font stores only its name, encoding, and metrics; the viewer supplies or substitutes the actual glyph outlines, so appearance can shift.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every character shown in a PDF is drawn from a font, but the format lets a document handle that font in one of two ways: it can carry the font's glyph program inside the file (embedding), or it can simply name the font and leave the outlines out (non-embedding). A non-embedded font is the second case — the PDF describes which font it wants and how the text is spaced, but it does not include the shapes of the letters themselves.",
    "This keeps files smaller and, in the past, matched an assumption that reader software would already have common fonts on hand. The trade-off is fidelity: the outlines have to be found at display time, either from a matching font installed on the viewing device or from a substitute the viewer synthesizes. When no good match exists, the text can look noticeably different from what the author saw, or some characters may not appear at all.",
    "Understanding non-embedded fonts means understanding what the PDF keeps, what it leaves out, and how a viewer reconstructs the missing outlines. It also explains why archival and print standards treat non-embedded fonts as a defect to be avoided."
  ],
  "sections": [
    {
      "heading": "What a Non-Embedded Font Actually Stores",
      "body": [
        "Leaving a font out of a PDF does not mean the PDF says nothing about it. The file still contains a font dictionary that names the typeface (the BaseFont entry), declares the font subtype, specifies the character encoding, and lists the width of each glyph so text spacing is preserved. It usually also includes a font descriptor carrying style metadata: flags for serif, fixed-pitch, symbolic, or italic; the font bounding box; the italic angle; ascent, descent, cap height, and an estimate of stem thickness.",
        "The one thing a non-embedded font omits is the embedded font program — the stream that would normally hold the real outlines. In an embedded font that stream appears in the descriptor as FontFile for a Type 1 program, FontFile2 for a TrueType program, or FontFile3 for a compact (CFF/OpenType) program. When none of those keys is present, the viewer has all the bookkeeping it needs to place and space the text but must obtain the glyph shapes from elsewhere."
      ]
    },
    {
      "heading": "The Standard 14 Fonts and Assumed Availability",
      "body": [
        "Non-embedding has deep roots in the Standard 14 fonts — the base set of Helvetica, Times, and Courier in four styles each, plus Symbol and ZapfDingbats. For much of PDF's history these fonts were treated as always available: a conforming reader was expected to provide them or a metric-compatible equivalent, so producers could reference them without embedding anything. Many older documents rely on exactly this, which is why they open correctly almost everywhere despite carrying no font data.",
        "That guarantee has been narrowed over time. PDF 2.0 (ISO 32000-2) removed the assumption that a viewer will always supply the Standard 14 fonts, steering producers toward embedding fonts so the file does not depend on the reader's environment. In practice this means the safety of a non-embedded font increasingly depends on whether the exact typeface happens to be installed, rather than on a promise built into the format."
      ]
    },
    {
      "heading": "Substitution: How Viewers Rebuild the Look",
      "body": [
        "When a PDF asks for a font that is not embedded, the viewer first tries to load a font of the same name from the operating system. If that font is present, the text can render as intended. If it is missing, the viewer falls back to font substitution — choosing or synthesizing a stand-in guided by the descriptor's flags and metrics so the replacement matches the original's serif or sans-serif nature, fixed or proportional spacing, slant, weight, and overall proportions.",
        "Reader software such as Acrobat has long used built-in multiple-master substitute fonts that can be stretched to match the recorded widths, keeping line breaks and page layout roughly in place. Substitution is only an approximation, though: individual letterforms differ from the original, and any glyph the substitute cannot produce — common with large CJK sets or specialized symbols — appears as a missing-glyph box rather than the intended character."
      ]
    },
    {
      "heading": "Why It Matters: Portability, Fidelity, and Standards",
      "body": [
        "A PDF is meant to look the same wherever it is opened, and non-embedded fonts put that promise at risk. On a device without the referenced font, spacing can shift, weights and shapes can change, and unusual characters can drop out entirely. For everyday text set in common fonts the effect may be invisible; for branded, technical, or multilingual documents it can be significant.",
        "This is why self-contained standards reject non-embedding. PDF/A, the archival family, and PDF/X, the print-exchange family, both require every font used for rendering to be embedded — normally as a subset — so the document carries all the outlines it needs. Note that text extraction and search are a separate concern: they depend on the encoding and any ToUnicode mapping rather than on the outlines, so a non-embedded font can still yield searchable text even when its appearance is uncertain."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Missing piece",
      "value": "The font descriptor omits the FontFile / FontFile2 / FontFile3 stream, so only glyph outlines are absent — name, encoding, and widths remain."
    },
    {
      "label": "Standard 14 fonts",
      "value": "Historically left unembedded because readers were expected to provide Helvetica, Times, Courier, Symbol, and ZapfDingbats or equivalents."
    },
    {
      "label": "PDF 2.0 change",
      "value": "ISO 32000-2 removed the assumption that viewers always supply the Standard 14 fonts, favoring embedding instead."
    },
    {
      "label": "Standards stance",
      "value": "PDF/A and PDF/X require fonts to be embedded, so non-embedded fonts are not permitted in those conformance levels."
    }
  ],
  "misconceptions": [
    {
      "claim": "If a font is not embedded, the PDF contains no information about it.",
      "truth": "The PDF still records the font name, encoding, per-glyph widths, and a descriptor with style flags and metrics — only the glyph outlines are left out."
    },
    {
      "claim": "Non-embedded fonts always display incorrectly.",
      "truth": "When the referenced font is installed locally, or for the Standard 14 base fonts, text can render correctly; problems mainly arise when no matching font is available."
    },
    {
      "claim": "Subsetting and non-embedding are the same thing.",
      "truth": "Subsetting embeds only the glyphs a document uses, so outlines are still present; non-embedding includes no outlines at all."
    }
  ],
  "faq": [
    {
      "q": "How can I tell whether a PDF uses non-embedded fonts?",
      "a": "Most viewers list every font in the document's properties or fonts panel and mark each as embedded, embedded subset, or neither. A font shown with no embedding note is being supplied by your system or substituted at display time."
    },
    {
      "q": "What happens when the referenced font is not installed?",
      "a": "The viewer substitutes a font using the descriptor's flags and metrics to approximate the original's spacing and style. Layout usually stays close, but letterforms differ and characters the substitute lacks can appear as empty boxes."
    },
    {
      "q": "Why would a document use non-embedded fonts at all?",
      "a": "It reduces file size and reflects an older expectation that readers already have common fonts, especially the Standard 14 base fonts. It is convenient when the exact appearance is not critical."
    },
    {
      "q": "Can a PDF with non-embedded fonts be fixed?",
      "a": "Yes. Re-saving through software that embeds fonts, or converting to a standard such as PDF/A that mandates embedding, produces a self-contained file whose text no longer depends on the viewer's installed fonts."
    },
    {
      "q": "Do non-embedded fonts break text search and copy?",
      "a": "Not by themselves. Extraction relies on the encoding and any ToUnicode mapping rather than the outlines, so searchable text can survive even when the visual rendering is uncertain."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "character-encoding-in-pdf",
      "tounicode-cmap",
      "font-flags",
      "type-1-fonts",
      "truetype-fonts-in-pdf",
      "glyph"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-x",
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
    "font-embedding",
    "font-subsetting",
    "standard-14-fonts",
    "font-substitution",
    "font-descriptor",
    "pdf-fonts",
    "embedded-font-programs",
    "pdf-a-font-embedding"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
