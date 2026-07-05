import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "font-substitution",
  "h1": "Font Substitution in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "Font fallback",
    "Font matching",
    "Substitute fonts",
    "Missing font replacement"
  ],
  "definition": "Font substitution in PDF is when a viewer displays text with a replacement font because the document's original font is neither embedded in the file nor available on the system rendering it.",
  "description": "When a PDF's font isn't embedded or installed, the viewer swaps in a replacement. Learn how PDF font substitution works and what it does and doesn't change.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Not every PDF carries its own fonts. A PDF can either embed a font program inside the file or simply reference a font by name and rely on the machine that opens the document to supply it. When a referenced font is missing, the viewer cannot leave the text blank, so it chooses a stand-in and renders the page with that instead. This stand-in step is font substitution.",
    "Substitution is a decision made at rendering time by whatever software opens or prints the PDF, not something stored in the file. The same document can look one way on a computer that happens to have the original typeface installed and noticeably different on one that does not. Because the choice depends on the environment, substitution is one of the most common reasons a PDF looks different from machine to machine.",
    "The PDF format anticipates this. Each font a document uses is described by a font descriptor that records the typeface's metrics and characteristics, and those values give a viewer enough information to pick or synthesize a reasonable replacement rather than guessing blindly."
  ],
  "sections": [
    {
      "heading": "When a viewer has to substitute a font",
      "body": [
        "Substitution is triggered whenever the glyphs a PDF needs cannot be drawn from an embedded font program. The most common cause is a non-embedded font: the PDF names a typeface but does not include it, so the viewer must find that exact font on the local system. If the font is installed, no substitution happens and the text appears as intended. If it is not, the viewer falls back to a substitute. The Standard 14 fonts, which older tooling was allowed to leave out on the assumption that every viewer could provide an equivalent, are a classic case where substitution routinely occurs even though the document usually still looks close to the original.",
        "Substitution can also happen when an embedded font program is damaged or cannot be interpreted, or when a document uses a font on one platform and is later opened on another that lacks it. In every case the processor is filling a gap: it needs some set of glyph outlines to place at the positions the content stream specifies, and when the intended outlines are unavailable it reaches for the closest available ones."
      ]
    },
    {
      "heading": "How the font descriptor guides the choice",
      "body": [
        "A PDF font descriptor is a dictionary that summarizes a typeface without necessarily containing it. It records font flags (for example, whether the design is serif, fixed-pitch, italic, or symbolic), a font bounding box, italic angle, ascent, descent, cap height, and a stem-width estimate. When the real font is missing, a viewer reads these values to select a generic substitute of the right style and to shape it so its proportions approximate the original. Historically, Adobe's Acrobat and Reader used two multiple master typefaces, Adobe Serif MM and Adobe Sans MM, which could be adjusted along weight and width axes to match the descriptor's metrics.",
        "Crucially, the glyph advance widths live in the PDF itself, in the font's Widths array, with a MissingWidth default for any character not listed. A viewer uses those stored widths to place each character rather than the widths of the substitute font. That is why substituted text usually keeps the same spacing and line breaks even when the letter shapes are clearly not the same design."
      ]
    },
    {
      "heading": "What substitution preserves and what it changes",
      "body": [
        "Because character positioning comes from the PDF's own width data, substitution generally preserves the overall layout: words wrap in the same places and text stays roughly where it was. What changes is the visual identity of the type. Letterforms, stroke contrast, and small details differ, so a page set in a distinctive typeface can look generic or subtly off once a fallback is used. For most Latin body text the result is legible; for logos, headlines, or carefully typeset material the difference is easy to notice.",
        "The harder failures involve glyphs the substitute simply does not contain. If a document relies on unusual symbols, or on scripts such as CJK where the character repertoire is large, a substitute may have no matching glyph and the viewer renders a notdef box, blank space, or the wrong character. Composite (Type 0 / CID-keyed) fonts are especially exposed here, because a substitute has to reproduce not just outlines but the mapping from character codes through CIDs to glyphs. Whether the underlying text remains searchable and copyable depends on the presence of a ToUnicode mapping, which substitution does not itself remove."
      ]
    },
    {
      "heading": "Preventing substitution with embedding and archival standards",
      "body": [
        "The reliable way to keep a PDF looking the same everywhere is to embed the fonts it uses, optionally as subsets that include only the glyphs actually needed. An embedded font travels with the file, so no viewer has to guess. This is exactly why the archival and print-exchange standards forbid the situation that leads to substitution: PDF/A requires that all fonts used for rendering be embedded, and PDF/X likewise requires embedding so that a press receives the intended type rather than a local approximation.",
        "For everyday documents, substitution is a convenience that keeps text visible when a font is absent. For anything that must reproduce faithfully over time or across systems, it is a risk to design out at creation time by embedding, rather than something to fix after the fact. When a reader needs to correct or re-embed type in an existing file, that is a job for an editor rather than the viewer's automatic fallback."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Trigger",
      "value": "The referenced font is not embedded and not available on the rendering system"
    },
    {
      "label": "Guided by",
      "value": "The font descriptor's flags and metrics, plus the PDF's own Widths array"
    },
    {
      "label": "Layout impact",
      "value": "Character spacing is usually preserved; glyph shapes and missing glyphs are not"
    },
    {
      "label": "Prevented by",
      "value": "Embedding fonts; required by PDF/A and PDF/X"
    }
  ],
  "misconceptions": [
    {
      "claim": "If a PDF looks fine on my screen, its fonts must be embedded.",
      "truth": "It may just mean your system has the same or a similar font installed; the same file can be substituted differently, or look wrong, on another machine."
    },
    {
      "claim": "Font substitution rewrites or corrupts the document's text.",
      "truth": "Substitution swaps the glyph outlines used for display; the character codes and stored advance widths stay, so text and spacing are generally preserved even as the visible shapes change."
    },
    {
      "claim": "The Standard 14 fonts are always embedded in a PDF.",
      "truth": "They historically could be left out, so viewers routinely supply substitutes for them rather than drawing an embedded copy."
    }
  ],
  "faq": [
    {
      "q": "How is font substitution different from font embedding?",
      "a": "Embedding puts the actual font program inside the PDF so it always renders the same. Substitution is what happens instead when a font is not embedded and not installed: the viewer chooses a replacement at display time."
    },
    {
      "q": "Does substitution change where lines break?",
      "a": "Usually no. Viewers position characters using the advance widths stored in the PDF's Widths array, not the substitute font's own widths, so spacing and line breaks are typically preserved even though the letter shapes differ."
    },
    {
      "q": "Why do I see boxes or blank spaces instead of characters?",
      "a": "The substitute font has no glyph for those characters. This is common with special symbols and with large scripts such as CJK, where a generic fallback cannot cover the needed characters."
    },
    {
      "q": "How can I stop a PDF from substituting fonts?",
      "a": "Embed the fonts, ideally as subsets, when the PDF is created. Standards like PDF/A and PDF/X require embedding precisely so that no substitution occurs later."
    },
    {
      "q": "Does substitution affect whether I can search or copy the text?",
      "a": "Not by itself. Searchability depends on a ToUnicode mapping in the font, which substitution does not remove; a viewer can still substitute the display glyphs while the underlying text stays extractable."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "character-encoding-in-pdf",
      "glyph",
      "cid-fonts",
      "tounicode-cmap",
      "cjk-fonts-in-pdf",
      "embedded-font-programs",
      "type-0-fonts"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-x"
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
    "non-embedded-fonts",
    "font-embedding",
    "standard-14-fonts",
    "font-descriptor",
    "font-flags",
    "pdf-fonts",
    "font-subsetting",
    "pdf-a-font-embedding"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
