import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "well-tagged-pdf",
  "h1": "What Makes a Well-Tagged PDF",
  "cluster": "accessibility",
  "aliases": [
    "properly tagged PDF",
    "correctly tagged PDF",
    "accessible tagged PDF",
    "conforming tagged PDF"
  ],
  "definition": "A well-tagged PDF is one whose structure tree accurately and completely describes its real content and reading order, with alt text on images and decorative parts marked as artifacts.",
  "description": "A well-tagged PDF has a structure tree that matches its real content: correct semantic tags, sensible reading order, alt text, and artifacts marked.",
  "searchIntent": "accessibility",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A well-tagged PDF is one whose hidden logical structure — its tag tree — is an accurate, complete description of what the document actually contains and the order in which it should be read. Tagging is what turns a PDF from a bag of positioned glyphs and shapes into something an assistive technology, a reflow engine, or a content-export routine can interpret as headings, paragraphs, lists, tables, and figures. But simply having tags is not the same as having good ones.",
    "The distinction matters because tags are invisible. A file can look flawless on screen and still be tagged badly: paragraphs merged together, table cells flattened into one run of text, images with no alternative text, or headings that are only visually bold rather than marked as headings. A screen-reader user, or anyone relying on reflow, experiences the tag tree — not the page you see.",
    "This entry describes the properties that separate a well-tagged file from one that is merely tagged: semantically correct structure, a reading order that follows the logical tree rather than the drawing order, meaningful alternative text, decorative content marked as artifacts, and a declared language. These are the qualities that standards such as PDF/UA formalize, and that automated checkers can only partly verify."
  ],
  "sections": [
    {
      "heading": "Tagged and Well-Tagged Are Not the Same Thing",
      "body": [
        "Any PDF that carries a structure tree — a StructTreeRoot referenced from the document catalog, with structure elements marking its content — is a tagged PDF. Whether it is well-tagged depends on whether those tags tell the truth. Automatic tagging, produced when software converts a layout or a scan without human review, frequently generates tags that exist but misrepresent the content: a two-column article read straight across, a caption absorbed into the body text, or a decorative rule tagged as a paragraph.",
        "A well-tagged file is one where each piece of real content is wrapped in a structure element of the correct type, nothing meaningful is left untagged, and nothing decorative is tagged as if it carried meaning. In practice this is judged against the document's intended meaning, which is why good tagging usually involves human review rather than a single automated pass."
      ]
    },
    {
      "heading": "Correct, Complete Semantic Structure",
      "body": [
        "The core of good tagging is using the right structure type for each element and nesting them the way the content is really organized. Headings are marked as headings — and ideally leveled — rather than left as bold paragraphs; lists use list, list-item, and label/body structure instead of manually typed bullets; tables use table, row, and header/data-cell tags so the relationship between a cell and its headers survives. PDF defines a set of standard structure types, and any custom or software-specific tag names are expected to be connected to those standard types through a role map so assistive technology knows how to interpret them.",
        "Completeness is the other half. Every element a reader is meant to perceive should appear inside the tree exactly once, with no real content orphaned outside it and no duplicate copies. When structure is both correct and complete, tools can navigate by heading, announce a table cell together with its column and row headers, and reflow the document without scrambling its meaning."
      ]
    },
    {
      "heading": "Reading Order Comes From the Tree, Not the Page",
      "body": [
        "On a PDF page, text and graphics are painted in content-stream (drawing) order, which has no guaranteed relationship to the order a human would read them. Reading order in a tagged PDF is instead defined by the sequence of elements in the structure tree, with marked-content references (via marked-content identifiers, or MCIDs) tying each tag to the specific marks it describes. A well-tagged file is one where walking the tree from top to bottom yields the intended narrative — heading before the section it introduces, footnote reference before the footnote — regardless of where those pieces sit on the page.",
        "This is why visually correct files can still read incorrectly. A sidebar beside the main text, a pull quote, or a multi-column layout can all be drawn in an order that makes sense visually but scrambles the logical sequence. Getting reading order right means arranging the structure tree to match how the document is meant to be understood, then keeping decorative and repeating elements out of that flow."
      ]
    },
    {
      "heading": "Alternative Text, Artifacts, and Language",
      "body": [
        "Content that a reader cannot see as text still needs to be conveyed. Images, charts, and other non-text content in a well-tagged PDF carry alternative text — an Alt description on the relevant structure element — that communicates their meaning, while figures that are purely decorative are handled so they are not announced as if they were content. Conversely, page furniture such as running headers and footers, background images, page numbers, and decorative rules is marked as an artifact so that assistive technology skips it rather than interrupting the reading flow with repeated noise.",
        "A well-tagged file also declares its natural language, at the document level and, where the text switches languages, on the specific elements involved. Language information lets a screen reader apply the correct pronunciation rules and voice. Together, alt text, artifact marking, and language turn a structurally correct tree into one that also sounds and reflows the way the author intended."
      ]
    },
    {
      "heading": "What Standards Formalize and What Checkers Can Miss",
      "body": [
        "The idea of a well-tagged PDF is formalized most directly by PDF/UA (ISO 14289), which sets technical requirements for tagged content, structure, and metadata so files can be processed reliably by assistive technology; broader accessibility guidance such as WCAG is often applied to PDFs as well. Meeting these is closely related to good tagging, although conformance to a standard and genuine quality are not automatically the same thing.",
        "Automated accessibility checkers and PDF/UA validators are valuable but partial. They can confirm machine-checkable facts — that a structure tree exists, that figures have an Alt entry, that a language is declared, that headings are not skipped — but they cannot judge whether the alt text is accurate, whether the reading order actually makes sense, or whether a table's structure reflects its real meaning. A clean report is necessary but not sufficient; confirming that a PDF is genuinely well-tagged still depends on human review with the structure and reading-order tools in a capable editor."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced in",
      "value": "Tagged PDF was added in PDF 1.4 (Adobe, 2001), building on the logical structure hierarchy (StructTreeRoot and MCID-based marked content) introduced in PDF 1.3 (2000); the marked-content operators themselves date to PDF 1.2"
    },
    {
      "label": "Where it lives",
      "value": "A structure tree (StructTreeRoot) referenced from the document catalog, separate from the visible page content"
    },
    {
      "label": "Reading order",
      "value": "Defined by the order of elements in the structure tree, not by the content-stream drawing order"
    },
    {
      "label": "Formalized by",
      "value": "PDF/UA (ISO 14289), the standard for accessible tagged PDF"
    }
  ],
  "misconceptions": [
    {
      "claim": "If a PDF is tagged, it is automatically accessible.",
      "truth": "Tags can be present but wrong or incomplete. Auto-generated tagging often misrepresents reading order, tables, and figures, so the mere presence of a structure tree does not guarantee it describes the content correctly."
    },
    {
      "claim": "A passing accessibility checker means the PDF is well-tagged.",
      "truth": "Validators verify machine-checkable rules like 'a tag tree exists' or 'figures have alt text,' but they cannot judge whether the alt text is meaningful or the reading order makes sense; human review is still needed."
    },
    {
      "claim": "Tagging changes how the page looks.",
      "truth": "The tag tree is invisible and does not affect rendering or print. It carries logical structure for assistive technology, reflow, and content export, running parallel to the visible page."
    }
  ],
  "faq": [
    {
      "q": "How is reading order stored in a well-tagged PDF?",
      "a": "It is stored as the order of elements in the structure tree, with marked-content identifiers (MCIDs) linking each tag to the marks it describes. Because content is painted on the page in drawing order, the tree — not the visual layout — is what determines the sequence assistive technology follows."
    },
    {
      "q": "Why do auto-tagged PDFs often need fixing?",
      "a": "Automatic tagging infers structure from visual cues without understanding meaning, so it commonly merges paragraphs, flattens tables, mis-orders columns, or tags decorative elements as content. Correcting these usually requires reviewing and editing the structure tree by hand."
    },
    {
      "q": "Is a well-tagged PDF the same as a PDF/UA file?",
      "a": "They overlap heavily but are not identical. PDF/UA (ISO 14289) adds specific technical requirements around structure, metadata, and fonts on top of good tagging. A file can be reasonably well-tagged without satisfying every PDF/UA rule."
    },
    {
      "q": "What makes table tagging correct?",
      "a": "Correct table tagging marks the table, its rows, and its cells with the proper structure types and distinguishes header cells from data cells, so assistive technology can associate each value with its row and column headers instead of reading a flat stream of numbers."
    },
    {
      "q": "Do decorative elements belong in the tag tree?",
      "a": "No. Running heads, page numbers, background images, and decorative rules should be marked as artifacts so they are excluded from the logical structure and not announced to screen-reader users, keeping the reading flow free of repeated noise."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "structure-elements",
      "role-mapping",
      "standard-structure-types",
      "marked-content",
      "table-tagging-in-pdf",
      "list-tagging-in-pdf",
      "heading-structure-in-pdf",
      "language-specification-in-pdf",
      "logical-structure",
      "screen-readers-and-pdf",
      "wcag-and-pdf",
      "section-508-and-pdf"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Prepare a PDF Before Sharing (Checklist)",
        "path": "/guides/how-to-prepare-pdf-before-sharing"
      }
    ]
  },
  "seeAlso": [
    "tagged-pdf",
    "untagged-pdf",
    "pdf-structure-tree",
    "reading-order",
    "pdf-alt-text",
    "artifact-marking",
    "pdf-ua",
    "pdf-accessibility-checking"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
