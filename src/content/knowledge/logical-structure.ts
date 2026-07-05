import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "logical-structure",
  "h1": "Logical Structure in PDF",
  "cluster": "accessibility",
  "aliases": [
    "Document logical structure",
    "Logical document structure",
    "PDF structure hierarchy",
    "Logical structure hierarchy"
  ],
  "definition": "PDF logical structure is a hierarchy of tagged elements that records a document's semantic organization — headings, paragraphs, lists, tables — separately from how the content is painted on the page.",
  "description": "Learn how logical structure works in PDF: the structure tree, structure elements and marked content that give a document meaning and a defined reading order.",
  "searchIntent": "accessibility",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF's visible page is, at heart, a set of low-level drawing instructions: place this glyph here, stroke this line there. Those instructions produce an accurate picture but say nothing about what the marks mean — which run of glyphs is a heading, which is a caption, or where a table's cells begin and end. Logical structure is the optional layer that carries exactly that meaning, describing a document as a tree of semantic elements that sits alongside, but apart from, the painting instructions.",
    "This layer is the foundation of Tagged PDF. Logical structure defines the general framework — a tree of structure elements rooted in the document catalog — while Tagged PDF is a standardized, rule-bound way of using that framework so the tags are complete and consistent enough for software to rely on. Because the two are so closely related, the terms are often used loosely, but logical structure is the broader mechanism and tagging is a specific application of it.",
    "Getting this layer right is what separates a PDF that a screen reader can narrate, that reflows sensibly on a small screen, and whose text extracts in the correct order, from one that is just a flat image of positioned glyphs. Logical structure is where a PDF stops being a picture of a document and starts behaving like one."
  ],
  "sections": [
    {
      "heading": "How Logical Structure Is Stored in a PDF",
      "body": [
        "Logical structure lives in a tree that is anchored at the structure tree root, an object referenced from the document catalog. Below that root sits a hierarchy of structure elements, each a dictionary that names its structure type (for example a paragraph, a heading, or a list item), points back to its parent, and lists its children. Elements nest to mirror the document's organization: a document element can contain sections, which contain paragraphs, and so on.",
        "Crucially, this tree is independent of the page tree that organizes the physical pages. A single logical element, such as a paragraph, can span a page break, and the reading sequence it belongs to is defined by the order of children in the structure tree rather than by the order objects happen to appear on any page."
      ]
    },
    {
      "heading": "Linking Structure to Page Content",
      "body": [
        "The structure tree describes meaning, but the actual glyphs and graphics live in page content streams. The two are joined by marked content: sequences of drawing operators in a content stream are bracketed and given a marked-content identifier (an MCID). A structure element then references those sequences, so walking from a node in the tree leads directly to the exact marks that render it, and vice versa.",
        "This two-way link is what makes the structure trustworthy. Software can traverse the tree in logical order and, for each element, retrieve the precise text or graphics that belong to it. Other objects such as annotations, form fields, and reusable content can also be attached to structure elements, so interactive and non-text content participates in the same hierarchy."
      ]
    },
    {
      "heading": "Logical Order Versus Drawing Order",
      "body": [
        "The order in which operators appear in a content stream is chosen for efficient rendering, not for meaning. A layout program may draw a sidebar before the main column, or emit text in whatever sequence suits its engine, and the page still looks correct. That drawing order need not match the order a human would read the content.",
        "Logical structure resolves this by supplying the intended sequence explicitly through the order of children in the structure tree. Assistive technology, reflow, and reliable extraction follow the tree rather than the raw stream, which is why a visually correct page can still read out of order to a screen reader if its logical structure is missing or wrong."
      ]
    },
    {
      "heading": "Standard Structure Types and Role Mapping",
      "body": [
        "PDF defines a set of standard structure types — such as document, paragraph, the heading levels, list, list item, and table with its rows and cells — that consuming software knows how to interpret. Using these shared names is what lets a screen reader announce a heading as a heading or navigate a table by row and column.",
        "Authoring tools are also free to invent their own type names that reflect an application's internal vocabulary. To keep such documents interpretable, the structure tree root can carry a role map that associates each custom type with a standard one. This role mapping lets a consumer translate unfamiliar tags into types it understands without losing the author's original naming."
      ]
    },
    {
      "heading": "Why Logical Structure Matters",
      "body": [
        "Logical structure is the substrate for accessibility: screen readers rely on it to convey headings, lists, tables, and reading order, and it is required for conformance with PDF/UA, the accessibility-focused member of the PDF standards family. It also enables content to reflow to fit narrow screens and helps text extraction return words in a sensible sequence rather than in painting order.",
        "A PDF without this layer is described as untagged — visually complete but semantically opaque, effectively a stream of positioned glyphs. Adding well-formed logical structure does not change how the page looks; it adds the metadata that lets other software understand what the page contains."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Root location",
      "value": "The structure tree is anchored at the structure tree root, referenced from the PDF document catalog."
    },
    {
      "label": "Content link",
      "value": "Structure elements connect to page content through marked-content sequences identified by MCIDs."
    },
    {
      "label": "Tagged PDF",
      "value": "Tagged PDF, introduced in PDF 1.4, is a standardized, rule-bound use of the logical structure framework."
    },
    {
      "label": "Requirement",
      "value": "Logical structure is optional in ordinary PDFs but required for PDF/UA conformance."
    }
  ],
  "specification": {
    "introduced": "Logical structure framework: PDF 1.3; standardized Tagged PDF conventions: PDF 1.4",
    "iso": "Defined in ISO 32000 (PDF 1.7 / PDF 2.0)",
    "typicalUsage": "Accessible (tagged) PDFs, content reflow, and reliable text extraction",
    "relatedStandards": [
      "iso-32000",
      "pdf-ua-1"
    ]
  },
  "misconceptions": [
    {
      "claim": "If a PDF shows its text in the right order on screen, it already has logical structure.",
      "truth": "On-screen order comes from the content stream's drawing operators. Logical structure is a separate, optional layer that can be absent even when the page looks perfectly correct."
    },
    {
      "claim": "Logical structure and Tagged PDF mean the same thing.",
      "truth": "Logical structure is the general framework of a structure tree. Tagged PDF is a specific, standardized application of it that follows defined rules and uses standard structure types."
    },
    {
      "claim": "Adding logical structure changes how the page is rendered.",
      "truth": "Logical structure adds semantic metadata only. It does not alter the visual appearance of the page."
    }
  ],
  "faq": [
    {
      "q": "Is logical structure required in every PDF?",
      "a": "No. It is optional for ordinary PDFs, which can be perfectly valid and printable without it. It becomes necessary when a document needs to be accessible or reflowable, and it is required for PDF/UA conformance."
    },
    {
      "q": "Where is the logical structure stored inside a PDF file?",
      "a": "It is stored as a tree of structure element objects anchored at the structure tree root, which is referenced from the document catalog. This tree is independent of the page tree that holds the pages themselves."
    },
    {
      "q": "What is the difference between logical structure and reading order?",
      "a": "Reading order is one of the things logical structure conveys. The sequence of children in the structure tree defines the intended order, which can differ from the order content is drawn on the page."
    },
    {
      "q": "Does an untagged PDF have logical structure?",
      "a": "Typically not. An untagged PDF has no meaningful structure tree, so it presents as a flat set of positioned glyphs with no reliable semantics or reading order for software to follow."
    },
    {
      "q": "Can logical structure be added to a PDF that lacks it?",
      "a": "Yes. Authoring and tagging tools can build a structure tree over existing content and link elements to the page marks. The result adds meaning without changing how the pages look."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "marked-content-id",
      "artifact-marking",
      "pdf-alt-text",
      "well-tagged-pdf",
      "untagged-pdf"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1",
      "wcag-and-pdf",
      "section-508-and-pdf",
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ]
  },
  "seeAlso": [
    "tagged-pdf",
    "pdf-structure-tree",
    "structure-elements",
    "marked-content",
    "role-mapping",
    "standard-structure-types",
    "reading-order",
    "pdf-document-catalog"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
