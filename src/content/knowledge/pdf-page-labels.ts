import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-page-labels",
  "h1": "PDF Page Labels",
  "cluster": "metadata-tooling",
  "aliases": [
    "Page labels",
    "PageLabels",
    "logical page numbers",
    "PDF page numbering",
    "page label dictionary"
  ],
  "definition": "PDF page labels are metadata in a document's catalog that give each page a display name — such as i, ii, 1, 2 or A-1 — that a viewer shows instead of its physical position.",
  "description": "Page labels let a PDF number its pages with Roman numerals, letters, prefixes or decimals independently of their physical order, using a number tree in the document catalog.",
  "searchIntent": "metadata",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Open a scanned book or a legal filing in a PDF viewer and you may see the page-number box read \"ii\" or \"A-3\" instead of a plain count. That display name is a page label: a small piece of structural metadata that tells the viewer what to call each page, separate from where the page physically sits in the file.",
    "Page labels exist because a document's own numbering rarely runs 1, 2, 3 from cover to back. Front matter is often numbered with lowercase Roman numerals, the body switches to arabic numbers, and appendices may restart with a prefix. Page labels record that scheme so a viewer's navigation, thumbnails, and go-to-page feature line up with the numbering a reader sees on the page.",
    "Crucially, a page label never changes a page's real position or the order of pages in the file. It only changes the name shown for it. Understanding that split — physical index versus displayed label — is the key to reading, editing, and preserving page labels correctly."
  ],
  "sections": [
    {
      "heading": "How Page Labels Are Stored",
      "body": [
        "Page labels are defined by an optional PageLabels entry in a PDF's document catalog, the root object that ties a file together. Its value is a number tree — a structure that maps integer keys to values in sorted order. Here the keys are zero-based physical page indices (0 for the first page, 1 for the second, and so on) and each value is a page label dictionary describing how to number pages from that point forward.",
        "Because the tree stores ranges rather than one entry per page, a single dictionary governs every page until the next key appears. A book might place one entry at index 0 for its front matter and another at index 8 where the main body begins; the viewer applies the first scheme to pages 1 through 8 and switches at page 9. This range model keeps the structure compact even for very long documents."
      ]
    },
    {
      "heading": "Numbering Styles and Prefixes",
      "body": [
        "Each page label dictionary can set a numbering style with its /S key. The defined styles are D for decimal arabic numerals (1, 2, 3), R and r for uppercase and lowercase Roman numerals (I, II, III or i, ii, iii), and A and a for uppercase and lowercase letters (A, B, C, and after Z the sequence continues AA, BB, CC). An optional /St entry sets the starting number for the range — a positive integer that defaults to 1 — so a range can begin at, say, 5 rather than 1.",
        "A /P entry supplies a prefix string placed before the generated number, which is how labels such as A-1, A-2, or 3-1 are produced by combining a prefix with a style and a start value. If a dictionary has a prefix but no /S style, the label is simply the prefix with no number attached, which suits cover pages or inserts that carry fixed text instead of a count."
      ]
    },
    {
      "heading": "Physical Pages vs. Displayed Labels",
      "body": [
        "Every PDF page has a physical index determined by its position in the page tree, and that ordinal does not change just because a label is applied. A page label is the human-facing name a viewer shows for the page: in the page-number box, in the thumbnail panel, and when a reader jumps to a page. When labels are present, typing a value like iv or A-3 can navigate straight to the intended page even though its physical index is a different number.",
        "This separation lets on-screen numbering match printed numbering. Scanned books, court filings, and reports often open with front matter numbered i, ii, iii before switching to 1, 2, 3, and appendices may restart with a prefix. Page labels capture that intent so the viewer's navigation agrees with the numbers a reader sees on the pages themselves."
      ]
    },
    {
      "heading": "Page Labels vs. Other PDF Metadata",
      "body": [
        "Although page labels are metadata, they are kept apart from the descriptive metadata people usually mean by that word. Title, author, and similar fields live in the document information dictionary or in an XMP metadata stream, whereas page labels live in the catalog's PageLabels number tree and describe structure rather than description. A tool that edits document properties will not necessarily touch page labels, and a tool that rewrites labels need not touch the title or author.",
        "Page labels are also distinct from any page number printed inside a page's content. Those printed numbers are drawn by operators in the page content stream and are part of the visible artwork; the page label is separate data the viewer consults for navigation. Ideally the two agree, but nothing in the format forces them to, so a page can show 12 in its footer while its label reads 10."
      ]
    },
    {
      "heading": "When Pages Are Reordered or Removed",
      "body": [
        "Because labels are keyed by physical page index, any operation that reorders, inserts, extracts, or deletes pages can invalidate the existing ranges. A careful tool updates the PageLabels number tree so the ranges still point at the right pages, while a tool that ignores it can leave labels attached to the wrong pages after editing. This is worth checking after splitting or merging files whose numbering carries meaning.",
        "When a PDF contains no PageLabels entry at all, viewers fall back to simple sequential numbering that starts at 1, so each page's label equals its physical position plus one. Adding page labels is therefore an additive step: it overrides that default only for the ranges you define and leaves the underlying page order untouched."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Location",
      "value": "A PageLabels number tree in the document catalog"
    },
    {
      "label": "Numbering styles",
      "value": "Decimal, uppercase/lowercase Roman, uppercase/lowercase letters, or prefix-only"
    },
    {
      "label": "Range keys",
      "value": "Zero-based physical page indices; each key starts a new label range"
    },
    {
      "label": "Introduced",
      "value": "PDF 1.3"
    }
  ],
  "specification": {
    "introduced": "PDF 1.3",
    "iso": "ISO 32000",
    "typicalUsage": "Assigning viewer-facing page numbers such as front-matter Roman numerals and appendix prefixes, independent of physical page order",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "Editing a page label changes the page's position in the document.",
      "truth": "A label only changes the name a viewer displays; the page's physical index and its order in the page tree stay exactly the same."
    },
    {
      "claim": "Page labels are stored in the document information dictionary or XMP metadata.",
      "truth": "They live in a PageLabels number tree inside the document catalog, separate from the Info dictionary and any XMP stream."
    },
    {
      "claim": "The page number printed on the page and the page label are the same thing.",
      "truth": "The printed number is drawn in the page content stream, while the label is separate navigation metadata, and the two can disagree."
    }
  ],
  "faq": [
    {
      "q": "What numbering styles can page labels use?",
      "a": "The defined styles are decimal (D), uppercase Roman (R), lowercase Roman (r), uppercase letters (A), and lowercase letters (a). A label can also be a fixed prefix with no numeric style at all."
    },
    {
      "q": "How do labels like A-1 or A-2 work?",
      "a": "A prefix string in the /P key is combined with a numbering style in /S and an optional start value in /St. A prefix of \"A-\" with decimal numbering starting at 1 produces A-1, A-2, A-3, and so on."
    },
    {
      "q": "What does a viewer show if a PDF has no page labels?",
      "a": "Most viewers fall back to sequential numbering that starts at 1, so each page's label simply matches its physical position in the file."
    },
    {
      "q": "Can different sections of one document use different numbering?",
      "a": "Yes. Each entry in the number tree begins a range keyed by page index, so front matter can be numbered i, ii, iii while the body uses 1, 2, 3 and an appendix restarts with a prefix."
    },
    {
      "q": "Do page labels affect the file's content or text extraction?",
      "a": "No. They influence how a viewer displays and navigates pages. The page content, its text, and the order of pages are unchanged by the labels."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "pdf-outlines",
      "document-properties",
      "pdf-name-objects",
      "custom-metadata-in-pdf"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "Reorder PDF Pages — Rearrange Pages in Your Browser (Free, No Upload)",
        "path": "/reorder-pdf-pages"
      },
      {
        "label": "Extract PDF Pages — Save Selected Pages as a New PDF (Free, No Upload)",
        "path": "/extract-pdf-pages"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Reorder Pages in a PDF (Free, In Browser)",
        "path": "/guides/how-to-reorder-pdf-pages"
      },
      {
        "label": "How to Organize PDF Files — A Practical Workflow",
        "path": "/guides/how-to-organize-pdf-files"
      }
    ]
  },
  "seeAlso": [
    "pdf-metadata",
    "document-information-dictionary",
    "pdf-document-catalog",
    "pdf-page-tree",
    "named-destinations",
    "pdf-bookmarks",
    "xmp-metadata"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
