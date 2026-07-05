import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "opentype-fonts-in-pdf",
  "h1": "OpenType Fonts in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "OTF fonts",
    "OpenType font programs",
    "OpenType/CFF fonts",
    "Open Font Format (OFF)"
  ],
  "definition": "OpenType fonts are scalable font programs — carrying either TrueType or PostScript (CFF) glyph outlines — that PDF embeds and references behind its simple or composite font dictionaries.",
  "description": "How OpenType fonts are embedded and rendered in PDF: TrueType vs CFF outlines, font programs, simple vs composite fonts, subsetting, and text extraction.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "OpenType is a scalable, cross-platform font format developed jointly by Microsoft and Adobe as an extension of TrueType. Its defining feature is that a single OpenType file can carry glyph outlines in either of two forms — the TrueType outline format (quadratic Bezier curves in a glyf table) or the PostScript/Compact Font Format (CFF) outline format (cubic Bezier curves). Both live inside the same sfnt table-based container, so an OpenType file behaves like one font even though its outlines may be described in two different mathematical traditions.",
    "PDF does not treat OpenType as a distinct 'font type' the way it treats Type 1 or TrueType. Instead, OpenType data is embedded as a font program that sits underneath an ordinary PDF font dictionary. Depending on the outline kind and the PDF producer, a PDF may embed the entire OpenType file, or extract just its CFF or TrueType outlines and embed those. Either way, a font descriptor points to the embedded program, and the visible text in the page's content stream is drawn from the glyphs it contains.",
    "Understanding how PDF wraps OpenType matters because it explains why the same visual typeface can appear in a PDF as a simple single-byte font in one document and as a composite CID-keyed font in another, and why some advanced typographic behavior is already 'baked in' by the authoring application rather than performed by the viewer."
  ],
  "sections": [
    {
      "heading": "What an OpenType font contains",
      "body": [
        "An OpenType font is organized as an sfnt structure: a directory of named tables such as cmap (character-to-glyph mapping), hmtx (horizontal metrics), name, and either a glyf table (TrueType outlines) or a CFF table (PostScript outlines). A font that uses PostScript outlines is often called OpenType/CFF, while one with TrueType outlines is sometimes called OpenType/TrueType. This dual nature is the key thing to keep in mind — 'OpenType' describes the container, not a single outline technology.",
        "OpenType files may also include layout tables such as GSUB and GPOS that describe substitutions (ligatures, alternates) and positioning (kerning, mark attachment). These tables are consumed at the text-layout stage by an authoring application; they are not part of what PDF stores in the page content, a distinction that has real consequences for how text renders and extracts."
      ]
    },
    {
      "heading": "How PDF embeds OpenType fonts",
      "body": [
        "In a PDF, the embedded font data lives in a stream referenced from the font descriptor. TrueType-outline programs are embedded through the FontFile2 key, while CFF and other PostScript-flavored programs are embedded through FontFile3 with an appropriate subtype (such as Type1C or CIDFontType0C). Historically, a PDF producer handling an OpenType/CFF font would extract the CFF table and embed that, rather than the whole file. PDF 1.6 added the ability to embed an entire OpenType font program — the complete sfnt wrapper — using FontFile3 with a Subtype of OpenType, and later PDF versions continued to support this.",
        "Whichever route is used, PDFs almost always subset the embedded program, keeping only the glyphs the document actually uses to reduce file size. The font descriptor stores metrics and flags describing the face, and it is the descriptor's FontFile2/FontFile3 entry that ties the abstract font dictionary to the concrete embedded outlines."
      ]
    },
    {
      "heading": "Simple fonts vs composite (Type 0) fonts",
      "body": [
        "An OpenType font program can sit underneath either a simple font or a composite font in PDF. When it backs a simple font (a TrueType or Type 1-style font dictionary), text is addressed with single-byte codes and an encoding maps those codes to glyphs — workable for Latin and similarly small character sets. When a document needs large character sets or precise glyph selection, the OpenType program instead backs a composite Type 0 (CID-keyed) font, where a CIDFont describes the glyphs and a CMap maps multi-byte codes to CID values.",
        "This is why OpenType is central to handling CJK and other large scripts in PDF: the composite arrangement can address thousands of glyphs directly by glyph index rather than through a small single-byte encoding. The same OpenType typeface may therefore appear structured very differently across PDFs depending on the content and the producer's choices."
      ]
    },
    {
      "heading": "Encoding, glyph selection, and text extraction",
      "body": [
        "Because the page content stream references glyphs by code (and, for composite fonts, effectively by glyph index), the visible shapes are determined at authoring time. Any OpenType layout features the design called for — ligatures, contextual alternates, kerning — are typically resolved by the authoring application before the PDF is written, so the content stream already names the substituted or repositioned glyphs. A PDF viewer draws those glyphs directly and does not re-run OpenType shaping.",
        "A side effect is that mapping glyphs back to readable Unicode text is a separate concern from drawing them. A ToUnicode CMap, when present, gives extraction and search tools a reliable way to recover characters from glyph codes; without it, text copied from an OpenType-based PDF can come out garbled even though it looks perfect on screen."
      ]
    },
    {
      "heading": "Why OpenType matters for PDF",
      "body": [
        "OpenType's single cross-platform container and its support for both outline styles make it a natural vehicle for embedding typefaces in portable documents, which is exactly what PDF depends on to render identically everywhere. Embedding the font program means a reader does not have to have the typeface installed, avoiding font substitution and the layout shifts that come with it.",
        "For archival and print-oriented workflows, embedding is not just convenient but expected: standards in the PDF/A and PDF/X families require that fonts used for rendering be embedded so the file remains self-contained and reproducible over time. OpenType, with its ability to be embedded whole or as extracted CFF/TrueType outlines, fits directly into that model."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Two outline kinds",
      "value": "An OpenType file can carry TrueType outlines (quadratic curves, glyf table) or PostScript/CFF outlines (cubic curves) in one sfnt container."
    },
    {
      "label": "Origin",
      "value": "Developed jointly by Microsoft and Adobe as an extension of the TrueType format."
    },
    {
      "label": "Whole-font embedding",
      "value": "PDF 1.6 introduced embedding a complete OpenType program via FontFile3 with Subtype /OpenType."
    },
    {
      "label": "Usage in PDF",
      "value": "OpenType outlines can back either a simple font or a composite Type 0 (CID-keyed) font."
    }
  ],
  "specification": {
    "introduced": "Late 1990s (Microsoft and Adobe)",
    "iso": "ISO/IEC 14496-22 (Open Font Format)",
    "typicalUsage": "Embedding scalable typefaces in PDF so documents render consistently without relying on installed fonts.",
    "relatedStandards": [
      "pdf-1-6",
      "pdf-2-0",
      "pdf-a-font-embedding"
    ]
  },
  "misconceptions": [
    {
      "claim": "OpenType is a completely different font technology from TrueType.",
      "truth": "OpenType is built on the same sfnt/TrueType structure and can contain TrueType outlines; its main additions are optional PostScript (CFF) outlines and advanced layout tables."
    },
    {
      "claim": "The PDF viewer applies OpenType features like ligatures and kerning when it displays text.",
      "truth": "Those layout features are usually resolved by the authoring application before the PDF is written; the content stream already references specific glyphs, so the viewer just draws them."
    },
    {
      "claim": "Embedding an OpenType font always stores the entire typeface.",
      "truth": "PDF producers normally subset embedded fonts, keeping only the glyphs the document actually uses."
    }
  ],
  "faq": [
    {
      "q": "Does PDF have a dedicated OpenType font type?",
      "a": "No. Unlike Type 1 or Type 3, there is no single 'OpenType font' dictionary type. OpenType data is embedded as a font program — the whole sfnt via FontFile3 (Subtype OpenType), or its extracted CFF or TrueType outlines — behind a simple or composite font dictionary."
    },
    {
      "q": "What is the difference between OpenType with TrueType outlines and OpenType with CFF outlines?",
      "a": "TrueType outlines use quadratic curves stored in a glyf table; CFF (PostScript) outlines use cubic curves stored in a CFF table. The distinction affects which font-program key and subtype a PDF uses to embed the data."
    },
    {
      "q": "Is OpenType the same as the Open Font Format standard?",
      "a": "Open Font Format is the standardized form of OpenType, published as ISO/IEC 14496-22. The two describe essentially the same font technology."
    },
    {
      "q": "Why does copied text from an OpenType-based PDF sometimes come out wrong?",
      "a": "Glyphs are referenced by code, not by character. If the font lacks a ToUnicode CMap, extraction tools may not be able to recover the original characters even though the page looks correct."
    },
    {
      "q": "Can I edit text in a PDF that uses an embedded OpenType font?",
      "a": "Often yes, though a subset font may only contain the glyphs already used, so typing new characters can require substitution. See the PDF Editor to work with text in place."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "glyph",
      "font-subsetting",
      "cjk-fonts-in-pdf",
      "character-encoding-in-pdf",
      "tounicode-cmap",
      "standard-14-fonts"
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
    "truetype-fonts-in-pdf",
    "type-1-fonts",
    "font-embedding",
    "embedded-font-programs",
    "font-descriptor",
    "type-0-fonts",
    "cid-fonts"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
