import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "font-subsetting",
  "h1": "Font Subsetting in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "font subset",
    "subsetted fonts",
    "partial font embedding",
    "subset embedding",
    "subsetted embedded font"
  ],
  "definition": "Font subsetting in PDF is the technique of embedding only the glyphs a document actually uses from a font program, instead of the complete font, to reduce file size while preserving appearance.",
  "description": "Font subsetting embeds only the glyphs a PDF actually uses, shrinking file size while keeping text rendering consistent. Learn how it works and its trade-offs.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Font subsetting is one of the main reasons a PDF can carry its exact fonts with it while staying reasonably small. Rather than storing an entire typeface, the file stores only the specific glyphs the document draws — the letters, digits, and symbols that actually appear on its pages.",
    "It sits between two other ideas about fonts in PDF. Full embedding stores the complete font program; non-embedded fonts store no outlines at all and rely on the viewer to supply a matching font. Subsetting is a middle path: it embeds a real, self-contained font program, which guarantees appearance, but trims it down to just what the document needs.",
    "The trade-off is that a subset is a snapshot of one document's character usage. It renders that document faithfully and travels well, but it is not a general-purpose copy of the font — a distinction that matters when a file is later edited or when its text is extracted."
  ],
  "sections": [
    {
      "heading": "How Font Subsetting Works",
      "body": [
        "A font program — whether Type 1, TrueType, or CFF/OpenType — stores outlines for every glyph in the typeface, often hundreds or thousands of them. When an application embeds a font into a PDF, it can include the entire program or only the portion the document needs. Subsetting takes the second path: the PDF writer determines which characters appear in the content streams, maps them to glyphs, and copies only those glyph descriptions plus the supporting data the font format requires (such as metrics and the tables needed to render them).",
        "Unused glyphs are discarded, and the trimmed program is stored in the font descriptor's embedded font file stream — FontFile for Type 1, FontFile2 for TrueType, or FontFile3 for CFF and OpenType outlines. The result is smaller than the original font yet is still a valid, self-contained font program for the glyphs that remain."
      ]
    },
    {
      "heading": "The Subset Name Prefix",
      "body": [
        "PDF marks a subsetted font with a distinctive name. The BaseFont entry, and the font descriptor's FontName, are prefixed with exactly six uppercase letters followed by a plus sign, such as ABCDEF+Helvetica. This tag signals that the embedded program is a partial font rather than the complete typeface.",
        "The prefix also gives each subset a unique identifier, so a viewer does not mistakenly treat two different subsets of the same base font as interchangeable. Seeing such a prefix in a document's font list is entirely normal and indicates a subsetted embedded font — not a corrupted or damaged file."
      ]
    },
    {
      "heading": "Why Subsetting Reduces File Size",
      "body": [
        "The size advantage is largest for fonts with big glyph repertoires. A CJK font covering tens of thousands of characters can be several megabytes; if a page uses only a few dozen of those characters, subsetting can shrink the embedded program substantially. Because most documents draw on a small fraction of any font's glyphs, subsetting is a routine step in PDF optimization and is applied automatically by many PDF producers.",
        "Importantly, subsetting reduces size without changing how the retained glyphs look. The outlines that stay are copied verbatim, so the process is lossless for the text that is actually present — it removes data, not quality."
      ]
    },
    {
      "heading": "Subsetting, Editing, and Text Extraction",
      "body": [
        "Because a subset contains only glyphs the document already used, editing a subsetted PDF can run into missing characters. If you add a letter, symbol, or accented character whose glyph was never embedded, the viewer has no outline for it and must fall back to substitution or re-embed a fuller subset. This is a common reason newly added text can look different from the original.",
        "Subsetting on its own does not prevent copying, searching, or extraction — that depends on the font's encoding and whether a ToUnicode CMap maps glyph codes back to Unicode. A subset font with a proper ToUnicode CMap stays searchable, while one that uses a custom encoding without ToUnicode can produce garbled extracted text even though it displays correctly on screen."
      ]
    },
    {
      "heading": "Subsetting in Archival and Print Workflows",
      "body": [
        "Standards that demand reliable, portable rendering lean on embedding, and subsetting is compatible with them. Archival profiles in the PDF/A family require fonts to be embedded so the document renders the same way over time; a subset satisfies this requirement as long as every glyph the document actually uses is included. Print-oriented PDF/X workflows similarly expect embedded fonts.",
        "In these contexts subsetting is the norm rather than the exception, because it keeps files portable and self-contained without carrying the full weight of every typeface used. The guiding principle is completeness for what is used: the subset must contain all glyphs the content references, even if it omits everything else."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Subset name prefix",
      "value": "Six uppercase letters plus a '+' before the font name (e.g. ABCDEF+FontName)"
    },
    {
      "label": "Applies to embedded programs",
      "value": "Works with Type 1, TrueType, and CFF/OpenType embedded fonts"
    },
    {
      "label": "Lossless for included glyphs",
      "value": "Retained glyph outlines are copied unchanged; only unused glyphs are removed"
    },
    {
      "label": "Archival compatibility",
      "value": "PDF/A permits subsetting provided every glyph the document uses is embedded"
    }
  ],
  "misconceptions": [
    {
      "claim": "A subsetted font is not really embedded.",
      "truth": "Subsetting is a form of embedding. It stores a genuine, self-contained font program inside the PDF — just a partial one containing only the glyphs the document uses."
    },
    {
      "claim": "The six-letter prefix like ABCDEF+ means the font or file is corrupted.",
      "truth": "The prefix is the standard subset tag. It intentionally marks the font as a subset and gives it a unique identifier; it is a sign of a healthy subsetted font, not an error."
    },
    {
      "claim": "Once a font is subsetted you can freely type any character with it.",
      "truth": "Only the glyphs already included are available. Adding characters that were never embedded forces substitution or re-embedding, which is why edited text can look different."
    }
  ],
  "faq": [
    {
      "q": "Does font subsetting reduce text quality?",
      "a": "No. Subsetting removes glyphs the document does not use but copies the outlines of the glyphs it keeps exactly as they were, so it is lossless for the text that appears in the file."
    },
    {
      "q": "Can a subsetted font be turned back into the full font?",
      "a": "Not from the PDF alone. The glyphs that were removed are simply not present, so restoring the complete typeface would require the original, full font program."
    },
    {
      "q": "Will subsetting break search or copy-paste?",
      "a": "Subsetting by itself does not. Whether text can be searched and extracted depends on the font's encoding and the presence of a ToUnicode CMap, which maps character codes back to Unicode."
    },
    {
      "q": "Why does added text look different after I edit a subsetted PDF?",
      "a": "An editor may only have the glyphs originally embedded. If you type characters whose glyphs were not part of the subset, the viewer substitutes another font for them, producing a visible mismatch."
    },
    {
      "q": "Is subsetting the same as compressing the font?",
      "a": "No. Compression re-encodes the stored data to take fewer bytes; subsetting reduces how many glyphs are stored in the first place. The two can be combined, since the embedded font stream is also typically compressed."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "tounicode-cmap",
      "cjk-fonts-in-pdf",
      "opentype-fonts-in-pdf",
      "type-0-fonts",
      "font-substitution",
      "pdf-optimization",
      "pdf-file-size-factors"
    ],
    "relatedStandards": [
      "pdf-a-font-embedding",
      "pdf-a",
      "pdf-x"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      },
      {
        "label": "Why Is My PDF So Large? Causes and Fixes",
        "path": "/guides/why-is-my-pdf-so-large"
      }
    ]
  },
  "seeAlso": [
    "font-embedding",
    "embedded-font-programs",
    "non-embedded-fonts",
    "pdf-fonts",
    "font-descriptor",
    "pdf-a-font-embedding",
    "cid-fonts",
    "truetype-fonts-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
