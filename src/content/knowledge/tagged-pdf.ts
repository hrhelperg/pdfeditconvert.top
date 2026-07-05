import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "tagged-pdf",
  "h1": "Tagged PDF",
  "cluster": "accessibility",
  "aliases": [
    "Structured PDF",
    "Accessible PDF",
    "Marked PDF",
    "PDF with tags"
  ],
  "definition": "A Tagged PDF is a PDF that carries an invisible tree of structure tags — marking headings, paragraphs, lists, tables and figures — so software can read its content in a logical order.",
  "description": "Learn what a Tagged PDF is: a hidden structure tree of tags for headings, lists, tables and figures that lets screen readers read in logical order.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "An ordinary PDF is fundamentally a description of appearance. Its content stream tells a viewer where to place each character, line and image so the page looks the same everywhere, but it says almost nothing about what those marks mean — which run of text is a heading, where one paragraph ends and the next begins, or which cells belong together as a table. Tagged PDF adds that missing layer of meaning.",
    "A Tagged PDF stores an extra, invisible structure of tags alongside the visible page content. Introduced in PDF 1.4, this structure organizes the document into semantic elements — document, section, heading, paragraph, list, table, figure — arranged in a tree that mirrors how a person would understand the page. The tags never change how the document looks or prints; they are metadata that assistive and other software can read.",
    "Because the tags describe meaning and an intended reading order, they are what let a PDF be voiced by a screen reader, reflowed on a small screen, and extracted or converted reliably. Tagged PDF is also the foundation that formal accessibility standards such as PDF/UA build on, which is why it sits at the center of the accessibility cluster."
  ],
  "sections": [
    {
      "heading": "How Tagged PDF Works",
      "body": [
        "The tagging lives in a logical structure tree that is separate from the drawing instructions on each page. The document catalog points to a structure tree root, and beneath it sits a hierarchy of structure elements, each with a structure type such as a paragraph, a heading level, a list item, or a figure. A MarkInfo entry with its Marked flag set to true is what signals that the file is meant to be a Tagged PDF.",
        "To connect that abstract tree back to real content, the marks on the page are wrapped in marked-content sequences using the BDC and EMC operators, and each sequence is given a marked-content identifier (MCID). A structure element references the marks that belong to it through these identifiers, tying the meaning of a tag to the exact text or image it describes. Authoring tools that use their own tag names can map them onto the standard set through a role map, so a conforming reader still understands them."
      ]
    },
    {
      "heading": "Logical Structure and Reading Order",
      "body": [
        "The order in which content is painted into a page's content stream is not necessarily the order a person reads it — a two-column layout, a pull quote, or a sidebar can be drawn in almost any sequence. The structure tree solves this by encoding the intended reading order explicitly: software follows the tree from element to element rather than trusting the raw drawing order, so the document is read the way its author meant it to flow.",
        "The elements themselves come from a defined vocabulary of standard structure types. These include grouping elements like Document, Part and Sect; block-level elements like paragraphs and the heading levels H1 through H6; list constructs such as L, LI, Lbl and LBody; and table structures built from Table, TR, TH and TD. Figures and formulas have their own types as well, which is what allows a description to be attached to a non-text graphic."
      ]
    },
    {
      "heading": "Why Tagged PDF Matters for Accessibility",
      "body": [
        "Assistive technologies such as screen readers rely almost entirely on the structure tree. They use it to announce headings, let a user jump between sections, navigate a list or table cell by cell, and hear the page in logical order rather than as a jumble of positioned text. Figures can carry alternative text so a described image is not simply skipped, and purely decorative or layout content — running headers, page numbers, background rules — can be marked as an artifact so it is left out of the reading experience.",
        "Tagged PDF is the mechanism that broader standards build upon. PDF/UA is a standard specifically for universally accessible PDFs, and it requires a correctly tagged file; the accessible 'a' conformance level of PDF/A likewise depends on tagging, whereas the basic 'b' level does not. Accessibility frameworks referenced in many settings, such as the W3C's WCAG guidelines and the United States' Section 508 requirements, treat well-structured documents as a goal, and Tagged PDF is how a PDF meets that structural expectation."
      ]
    },
    {
      "heading": "Reflow, Extraction, and How PDFs Get Tagged",
      "body": [
        "The benefits reach beyond assistive technology. Because a tagged document knows its own reading order and element boundaries, viewers can reflow the content to fit a narrow screen or a high zoom level instead of forcing horizontal scrolling. The same information makes copy-and-paste, text extraction, and conversion to other formats far more dependable — table cells stay aligned, list items stay grouped, and headings survive the round trip.",
        "A PDF becomes tagged in one of a few ways. Many authoring applications, from word processors to layout tools, can emit tags automatically when they export, since they already know the document's structure. Tags can also be added or corrected afterward in PDF software. Automatic tagging is a starting point rather than a guarantee — it can misread complex layouts — so the result usually benefits from review. A scanned, image-only page has no text for tags to attach to at all; running OCR to create a text layer has to come first, after which structure can be applied to that text."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced",
      "value": "PDF 1.4 (2001)"
    },
    {
      "label": "Where it is defined",
      "value": "Part of ISO 32000, the PDF specification"
    },
    {
      "label": "Required by",
      "value": "PDF/UA, and the accessible 'a' conformance level of PDF/A"
    },
    {
      "label": "Visual effect",
      "value": "None — tags are metadata and do not change how a page renders or prints"
    }
  ],
  "specification": {
    "introduced": "PDF 1.4 (2001)",
    "iso": "ISO 32000-1, ISO 32000-2",
    "typicalUsage": "Accessibility, on-screen reflow, and reliable content extraction and reuse",
    "relatedStandards": [
      "pdf-ua",
      "pdf-a-1"
    ]
  },
  "misconceptions": [
    {
      "claim": "If I can select and search the text, the PDF is already tagged.",
      "truth": "Selectable, searchable text only means a text layer exists. Tagging is a separate structure tree, so a fully searchable PDF can still be untagged."
    },
    {
      "claim": "Adding tags changes how the document looks.",
      "truth": "Tags are invisible metadata. A tagged copy and an untagged copy of the same file render identically on screen and in print."
    },
    {
      "claim": "A tagged PDF is automatically fully accessible.",
      "truth": "Tags can be missing, incomplete, or simply wrong — bad reading order, absent alt text, mis-tagged tables. Correct tagging matters, which is why standards like PDF/UA add specific requirements on top of just being tagged."
    }
  ],
  "faq": [
    {
      "q": "How can I tell whether a PDF is tagged?",
      "a": "Many viewers show a 'Tagged PDF: Yes/No' flag in the document properties, and accessibility checkers report whether a structure tree is present. Under the hood this corresponds to the MarkInfo Marked flag and a populated structure tree root."
    },
    {
      "q": "What is the difference between Tagged PDF and PDF/UA?",
      "a": "Tagged PDF is the underlying mechanism — the structure tree and its tags. PDF/UA is a formal standard that specifies exactly how tagging and related features must be applied for a PDF to be considered universally accessible."
    },
    {
      "q": "Does tagging make the file larger?",
      "a": "Tags add structural data, so the file grows somewhat. The increase is usually small compared with heavier content like embedded fonts and images."
    },
    {
      "q": "Can a scanned PDF be tagged?",
      "a": "A scanned, image-only page has no text for tags to attach to. Running OCR to add a text layer comes first; once real text exists, structure tags can describe it."
    },
    {
      "q": "Who adds the tags — the author or the software?",
      "a": "Both paths exist. Authoring applications can produce tags automatically when exporting, and tags can also be added or fixed afterward in PDF software. Automatic tagging often needs review because it can misread complex layouts."
    }
  ],
  "graph": {
    "childConcepts": [
      "pdf-structure-tree",
      "marked-content",
      "logical-structure",
      "reading-order",
      "pdf-alt-text",
      "role-mapping",
      "standard-structure-types",
      "artifact-marking",
      "table-tagging-in-pdf",
      "list-tagging-in-pdf",
      "heading-structure-in-pdf",
      "language-specification-in-pdf",
      "accessible-pdf-forms",
      "wcag-and-pdf",
      "section-508-and-pdf",
      "screen-readers-and-pdf",
      "pdf-accessibility-checking",
      "untagged-pdf",
      "well-tagged-pdf"
    ],
    "relatedConcepts": [
      "structure-elements",
      "marked-content-id"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1",
      "pdf-a-1",
      "wcag-and-pdf",
      "section-508-and-pdf"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ]
  },
  "seeAlso": [
    "pdf-structure-tree",
    "marked-content",
    "logical-structure",
    "reading-order",
    "pdf-alt-text",
    "role-mapping",
    "pdf-ua",
    "untagged-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
