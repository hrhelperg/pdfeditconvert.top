import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "cmap",
  "h1": "CMaps in PDF",
  "cluster": "text-fonts",
  "aliases": [
    "Character map",
    "CMap resource",
    "CMap stream",
    "CID CMap",
    "character code map"
  ],
  "definition": "A CMap is a PDF resource that maps the character codes in a Type 0 (composite) font to glyph-selecting CIDs, or in ToUnicode form to Unicode values.",
  "description": "How CMaps map character codes to CIDs in PDF composite fonts, what Identity-H and Identity-V do, and why ToUnicode mapping is a separate resource.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A simple PDF font associates one byte with one glyph through an encoding table of at most 256 entries. That model runs out of room the moment a document needs thousands of characters, as Chinese, Japanese, and Korean text do. Composite (Type 0) fonts remove the limit, and a CMap is the component that turns the raw bytes in a content stream into the internal glyph selectors the font actually understands.",
    "The word \"CMap\" (short for character map) covers two closely related resources that share a single file format. Used as a Type 0 font's Encoding, a CMap maps character codes to CIDs — numeric glyph identifiers inside the font. Used as a ToUnicode entry, a CMap maps those same codes to Unicode so the text can be searched, copied, and extracted. Knowing which of the two you are looking at explains a large share of font and text-extraction problems.",
    "CMaps are not unique to PDF: they come from Adobe's PostScript CID-keyed font architecture, and PDF adopted the same mechanism, keeping the PostScript-flavored syntax. That heritage is why a CMap looks like a small program with operators such as begincodespacerange and begincidrange rather than a flat table."
  ],
  "sections": [
    {
      "heading": "How a CMap fits into a composite font",
      "body": [
        "In a Type 0 font, the Encoding entry names or embeds a CMap, and that CMap sits between the bytes on the page and the glyphs in the descendant CIDFont. When a text-showing operator draws a string, the viewer reads bytes from the string, uses the CMap's codespace to decide how many bytes form one character code, looks that code up in the CMap to obtain a CID, and then asks the CIDFont which glyph that CID selects. The CMap therefore performs only the first half of the journey — code to CID — while a second mapping inside the CIDFont (the CIDToGIDMap) finishes the trip to an actual glyph index.",
        "This two-stage design is what lets one font carry tens of thousands of glyphs while the page content stays compact. It also means a CMap describes a relationship, not the glyphs themselves: the same CID can point to different glyphs in different fonts, and the same character code can mean different CIDs under different CMaps."
      ]
    },
    {
      "heading": "Codespace ranges and multi-byte codes",
      "body": [
        "Before a CMap maps anything, it declares one or more codespace ranges that define how many bytes a character code occupies and which byte values are legal. A single CMap can mix code lengths — for example treating some byte values as one-byte codes and others as the first byte of a two-byte code — which is how legacy CJK encodings that interleave ASCII with double-byte characters are handled. The viewer scans the codespace ranges to segment an incoming byte stream into discrete codes before any CID lookup happens.",
        "The mapping itself is expressed as ranges and single entries: cidrange and cidchar operators associate character codes (or contiguous blocks of them) with CIDs. Because ranges compress large, orderly mappings into a few lines, a CMap covering a full character collection stays far smaller than an exhaustive per-code list would be."
      ]
    },
    {
      "heading": "Predefined names versus embedded streams",
      "body": [
        "A CMap can be referenced by name or embedded as a stream. The most common predefined names are Identity-H and Identity-V, which map a two-byte code directly to the numerically equal CID — the byte value simply is the CID. These are ubiquitous because subsetted and embedded fonts frequently pair Identity encoding with a CIDToGIDMap, keeping the glyph bookkeeping inside the font program. Adobe also defines a family of named CMaps tied to specific character collections (identified by a CIDSystemInfo Registry, Ordering, and Supplement, such as Adobe-Japan1 or Adobe-GB1); a conforming reader is expected to supply these without the file embedding them.",
        "When a document uses a custom or non-standard mapping, the CMap is embedded as a stream object instead of referenced by name, and a viewer must read it from the file. Predefined CMaps that describe an established character collection keep files small and portable, while embedded CMaps make a document self-contained at the cost of some size."
      ]
    },
    {
      "heading": "Encoding CMaps versus ToUnicode CMaps",
      "body": [
        "The Encoding CMap answers \"which glyph do I draw?\" It says nothing about what a character means as text. That semantic role belongs to a separate resource, the ToUnicode CMap, which uses the same CMap file format but maps character codes to Unicode values through bfchar and bfrange entries. When present and correct, ToUnicode is what lets a reader copy or extract meaningful text out of a page.",
        "The gap between these two is the root of many extraction failures. A font encoded with Identity-H selects glyphs perfectly and renders a page that looks flawless, yet the character codes are arbitrary glyph indices with no inherent Unicode meaning. Without a ToUnicode CMap, a viewer cannot recover the underlying characters, so copied text comes out as blanks or nonsense even though the document displays correctly."
      ]
    },
    {
      "heading": "Writing mode: horizontal and vertical",
      "body": [
        "A CMap also carries a writing mode. A WMode of 0 lays glyphs out horizontally; a WMode of 1 lays them out vertically, as in traditional East Asian typesetting. The convention shows up in predefined names as an -H or -V suffix, which is why Identity-H and Identity-V are the horizontal and vertical forms of the same identity mapping.",
        "Choosing the vertical variant changes how the viewer advances the text position and can select vertical glyph variants supplied by the font. The writing mode is therefore a property of the CMap rather than of the page, which keeps directional behavior bound to the encoding the text was authored with."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Role in a font",
      "value": "A Type 0 font's Encoding entry is a CMap — either a predefined name or an embedded stream."
    },
    {
      "label": "Two purposes",
      "value": "As Encoding it maps codes to CIDs (glyph selection); as ToUnicode it maps codes to Unicode (text extraction)."
    },
    {
      "label": "Identity-H / Identity-V",
      "value": "Predefined CMaps that map a two-byte code directly to the equal CID, for horizontal and vertical writing."
    },
    {
      "label": "Variable-length codes",
      "value": "Codespace ranges let one CMap mix one-byte and two-byte character codes."
    }
  ],
  "specification": {
    "introduced": "Adapted from Adobe's PostScript CID-keyed font architecture",
    "iso": "ISO 32000 (PDF)",
    "typicalUsage": "Maps character codes to CIDs in Type 0 composite fonts; a separate ToUnicode CMap maps codes to Unicode for search and extraction.",
    "relatedStandards": [
      "iso-32000",
      "pdf-vs-postscript"
    ]
  },
  "misconceptions": [
    {
      "claim": "A CMap maps character codes to Unicode.",
      "truth": "An Encoding CMap maps codes to CIDs (glyph selectors), not Unicode. Mapping codes to Unicode is the job of the separate ToUnicode CMap, which happens to use the same file format."
    },
    {
      "claim": "Identity-H means the character codes are Unicode values.",
      "truth": "Identity-H only means code equals CID as a two-byte value. The CID indexes glyphs in the font, not Unicode code points, so without a ToUnicode CMap the text can still be unextractable."
    },
    {
      "claim": "CMaps are only needed for CJK fonts.",
      "truth": "Any Type 0 font uses a CMap. Subsetted Latin fonts embedded with Identity-H rely on a CMap too; large character collections are the original motivation, not the only use."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a CMap and a simple font encoding?",
      "a": "A simple font encoding maps single bytes to glyph names within a 256-entry table. A CMap is the encoding mechanism for composite fonts: it can segment multi-byte codes using codespace ranges and map them to CIDs, so it scales to thousands of characters."
    },
    {
      "q": "Where does a CMap live inside a PDF?",
      "a": "It appears as the Encoding entry of a Type 0 font, either as a predefined name like Identity-H or as an embedded stream object. A related ToUnicode CMap, when present, is referenced separately from the font dictionary."
    },
    {
      "q": "What do Identity-H and Identity-V do?",
      "a": "Both map a two-byte character code straight to the numerically equal CID, leaving the code-to-glyph work to the font's CIDToGIDMap. Identity-H is for horizontal writing and Identity-V for vertical writing."
    },
    {
      "q": "Do CMaps have to be embedded in the file?",
      "a": "Predefined CMaps — Identity-H/V and Adobe's named CMaps for standard character collections — are supplied by the reader and only referenced by name. Custom mappings are embedded as stream objects so the document stays self-contained."
    },
    {
      "q": "Why is a CMap relevant to copying text from a PDF?",
      "a": "The Encoding CMap only selects glyphs; it carries no character meaning. If the font uses Identity encoding and the file lacks a ToUnicode CMap, a viewer cannot recover the underlying characters, so the page looks fine but copied text is garbled or empty."
    }
  ],
  "graph": {
    "parentConcept": "pdf-fonts",
    "relatedConcepts": [
      "glyph",
      "embedded-font-programs",
      "font-subsetting",
      "font-descriptor",
      "text-showing-operators"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-vs-postscript"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "PDF to Word — Convert PDF to Editable DOCX in Your Browser",
        "path": "/pdf-to-word"
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
    "type-0-fonts",
    "cid-fonts",
    "tounicode-cmap",
    "character-encoding-in-pdf",
    "cjk-fonts-in-pdf",
    "composite-vs-simple-fonts",
    "pdf-text-extraction",
    "pdf-fonts"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
