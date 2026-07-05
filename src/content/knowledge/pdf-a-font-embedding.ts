import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-a-font-embedding",
  "h1": "Font Embedding in PDF/A",
  "cluster": "standards",
  "aliases": [
    "PDF/A font embedding requirement",
    "embedded fonts in PDF/A",
    "PDF/A mandatory font embedding",
    "PDF/A font requirements"
  ],
  "definition": "Font embedding in PDF/A is the requirement that every font used to display text be stored inside the file itself, so the document renders identically without relying on system-installed fonts.",
  "description": "PDF/A archival conformance requires every font used to render text — even the standard 14 — to be embedded so a document displays the same way without system fonts.",
  "searchIntent": "standard",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/A, the archival family of the PDF format standardized as ISO 19005, is built around a single promise: a document should look the same in the future as it does today, independent of the software or system used to open it. Font embedding is how that promise is kept for text. Because an archived file cannot assume any particular font is installed on a future computer, PDF/A treats the fonts as part of the document rather than something the viewer supplies.",
    "In ordinary PDF, a file can reference a font by name and let the viewer substitute a locally installed or built-in equivalent — the reason the 'standard 14' fonts are often left out. That is convenient when the author's machine has the font, but a substitute can shift spacing, alter glyph shapes, or change the appearance entirely on a different system. PDF/A closes that gap by making embedding mandatory.",
    "This page explains the mechanism behind that rule: what 'embedding' actually stores inside the file, how the font descriptor points to it, why subsetting is still allowed, and how the embedding requirement connects to the separate rule that keeps text mappable to Unicode. It is a reference to the requirement, not a step-by-step production guide."
  ],
  "sections": [
    {
      "heading": "What PDF/A requires of fonts",
      "body": [
        "Every font used to render visible text must be embedded in the file, and this requirement applies uniformly across all parts of the standard — PDF/A-1, PDF/A-2, PDF/A-3, and PDF/A-4. Embedding means the font program that describes each glyph travels inside the document, so no viewer ever has to guess or substitute.",
        "Crucially, PDF/A withdraws the convenience that ordinary PDF grants to the standard 14 fonts (the Helvetica, Times, Courier, Symbol, and ZapfDingbats families). In a normal PDF those can be omitted and reconstructed by the viewer from built-in equivalents; in PDF/A they must be embedded like any other font. The one structural nuance is Type 3 fonts, which define their glyphs as ordinary PDF content streams and are therefore self-contained by construction rather than through a separate embedded font program."
      ]
    },
    {
      "heading": "How a font is embedded in the file",
      "body": [
        "Embedding stores the font program — the data that actually describes each glyph's outline — as a stream inside the PDF, referenced from the font descriptor. The descriptor points to that stream through one of three keys depending on the font technology: FontFile for a Type 1 program, FontFile2 for a TrueType program, and FontFile3 for compact programs such as CFF/Type1C, OpenType, or CID-keyed CFF. Composite (Type 0) fonts embed their program through the descriptor of the underlying CIDFont.",
        "The font descriptor holds more than the program. It records metrics and flags that are expected to stay consistent with what is embedded — for example, the per-glyph widths declared in the font dictionary should agree with the widths in the embedded program. Validators treat a mismatch between declared metrics and the actual font as a conformance problem, because inconsistent metrics can cause spacing to drift when the file is rendered on another system."
      ]
    },
    {
      "heading": "Subsetting, licensing, and self-containment",
      "body": [
        "PDF/A does not require the entire typeface to be embedded. Subsetting — embedding only the glyphs the document actually uses — is permitted and common, and it keeps archival files smaller without weakening visual fidelity. A subset must, however, contain every glyph the content references; a missing glyph would leave text that cannot be drawn. Subset fonts are conventionally named with a six-letter uppercase tag followed by a plus sign (for example, ABCDEF+FontName) so that two different subsets of the same face do not collide inside one file.",
        "Self-containment also has a licensing dimension. A font can only be embedded if its own embedding permissions allow it; a font whose flags mark it as restricted from embedding cannot be placed inside a conformant PDF/A. In practice this means the producing software has to start from a font it is allowed to embed. That constraint is carried in the font itself, and is a technical fact about the font rather than anything the PDF format decides on its own."
      ]
    },
    {
      "heading": "Fidelity versus searchability",
      "body": [
        "Embedding guarantees that glyphs display correctly, but it does not by itself make text searchable or extractable — those depend on how characters map to Unicode. PDF/A therefore pairs its embedding rule with a mapping expectation: the text should be resolvable to Unicode, whether through a standard encoding or through a ToUnicode CMap carried with the font. For simple fonts with common encodings this often happens automatically; for composite and CID-keyed fonts, a ToUnicode CMap or consistent CIDSystemInfo is typically what makes copy, search, and extraction work.",
        "Because these rules are detailed, PDF/A files are normally checked with a validator rather than by eye. The open-source reference checker veraPDF, among others, reports whether each font is embedded, whether subsets are complete, whether declared metrics match the program, and whether text is mappable to Unicode. A file can look perfect on screen and still fail these checks, which is precisely the failure mode archival validation exists to catch."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "PDF/A is defined by ISO 19005; the embedding rule applies to all parts"
    },
    {
      "label": "Scope",
      "value": "Every font used to render text must be embedded, including the standard 14 fonts"
    },
    {
      "label": "Descriptor keys",
      "value": "Font programs are stored via FontFile (Type 1), FontFile2 (TrueType), or FontFile3 (CFF/OpenType/CID)"
    },
    {
      "label": "Subsetting",
      "value": "Permitted; subset font names carry a six-letter tag and a '+' prefix"
    }
  ],
  "specification": {
    "iso": "ISO 19005",
    "introduced": "PDF/A-1 (ISO 19005-1:2005)",
    "typicalUsage": "Archival PDFs that must render identically over time without relying on system-installed fonts.",
    "relatedStandards": [
      "pdf-a-1",
      "pdf-a-2",
      "pdf-a-3",
      "pdf-a-4"
    ]
  },
  "misconceptions": [
    {
      "claim": "The 14 standard PDF fonts, like Helvetica and Times, do not need to be embedded in PDF/A.",
      "truth": "PDF/A removes the standard-14 substitution exemption — even those fonts must be embedded like any other."
    },
    {
      "claim": "PDF/A requires the complete font file to be embedded.",
      "truth": "Subsetting is allowed; a PDF/A file may embed only the glyphs actually used, as long as none of the glyphs it references are missing."
    },
    {
      "claim": "If a font is embedded, the text is automatically searchable and copy-pasteable.",
      "truth": "Embedding ensures the glyphs display correctly; searchable, extractable text depends on the character-to-Unicode mapping, which PDF/A addresses as a separate requirement."
    }
  ],
  "faq": [
    {
      "q": "Does PDF/A allow non-embedded fonts?",
      "a": "No. A conformant PDF/A must embed every font used to render text. A font that is referenced but not embedded is a conformance failure, because the file would then depend on whatever font the viewing system happens to have."
    },
    {
      "q": "Which font types can be embedded in a PDF/A file?",
      "a": "Type 1, TrueType, CFF/OpenType, and CID-keyed (composite) fonts, each stored through the appropriate FontFile stream in the font descriptor. Type 3 fonts define their glyphs as PDF content streams and are self-contained without a separate embedded program."
    },
    {
      "q": "Why does font embedding matter for long-term archiving?",
      "a": "The system used to open the file decades from now may not have the original fonts. Embedding makes the document self-contained, so it renders the same way regardless of what is installed on the viewing machine."
    },
    {
      "q": "How can I tell whether a PDF's fonts are embedded?",
      "a": "A PDF/A validator such as veraPDF, or a viewer's fonts / document-properties panel, lists each font and reports whether it is embedded and whether it is a subset."
    },
    {
      "q": "Do all parts of PDF/A require embedding?",
      "a": "Yes. The embedding requirement is consistent across PDF/A-1, PDF/A-2, PDF/A-3, and PDF/A-4, even though those parts differ in features and in the base PDF version they build on."
    }
  ],
  "graph": {
    "parentConcept": "pdf-a",
    "relatedConcepts": [
      "non-embedded-fonts",
      "font-substitution",
      "tounicode-cmap",
      "cid-fonts",
      "type-0-fonts",
      "pdf-a-conformance-levels"
    ],
    "relatedStandards": [
      "pdf-a-1",
      "pdf-a-2",
      "pdf-a-3",
      "pdf-a-4",
      "verapdf",
      "pdf-x"
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-a",
    "font-embedding",
    "font-subsetting",
    "embedded-font-programs",
    "font-descriptor",
    "standard-14-fonts",
    "pdf-a-validation",
    "pdf-fonts"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
