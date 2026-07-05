import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "structure-elements",
  "h1": "PDF Structure Elements",
  "cluster": "accessibility",
  "aliases": [
    "StructElem",
    "structure element dictionary",
    "logical structure element",
    "PDF tag",
    "structure tag"
  ],
  "definition": "A PDF structure element is a node in a tagged PDF's logical structure tree that labels a piece of content, such as a heading, paragraph, list, or table, and ties it to the page's marked content.",
  "description": "In a tagged PDF, structure elements are the dictionary nodes of the logical tree that label content as paragraphs, headings, lists, tables and figures.",
  "searchIntent": "accessibility",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When a PDF is tagged for accessibility and reuse, its meaning is described by a logical structure tree that sits alongside the visible page content. Structure elements are the individual nodes of that tree. Each one is a PDF object -- a dictionary -- that says what a given piece of the document is: a heading, a paragraph, a list item, a table cell, a figure, and so on. Taken together, they turn a page of drawing instructions into an outline a machine can navigate.",
    "A structure element does not draw anything itself. The marks on the page -- glyphs, lines, images -- come from content streams, while the structure element sits above them and points down to the content it governs. This separation lets the same visual page carry a parallel description of its meaning and intended reading order, which is the foundation of tagged PDF and of the requirements set out in PDF/UA.",
    "Because structure elements are ordinary PDF dictionaries, they can also carry extra information: alternate text for an image, a language override for a passage, a replacement text for stylized characters, or a mapping from a custom tag name to a standard one. Understanding their anatomy explains how assistive technology, on-screen reflow, and reliable text extraction all work from the same underlying tree."
  ],
  "sections": [
    {
      "heading": "Anatomy of a Structure Element",
      "body": [
        "A structure element is typically a dictionary whose Type is StructElem. Its most important entry is S, the structure type -- a name such as P for a paragraph, H1 for a heading, L for a list, or Figure for an image. The P entry (not to be confused with the paragraph type) points to the element's parent in the tree, while K, the kids entry, points to what the element contains. Optional entries carry the extra meaning: Alt supplies alternate text, ActualText gives a text replacement for the element's content, E provides an expansion for an abbreviation, Lang sets a language for that subtree, and T holds a human-readable title. A Pg entry can name the page whose content stream holds the element's marks.",
        "Because these are indirect objects, elements are shared and referenced by object number, which is how a parent reaches its children and a child points back to its parent. Attribute and class entries (A and C) let an element attach layout and role information -- for example a table cell's scope or a list's numbering -- without changing anything on the visible page."
      ]
    },
    {
      "heading": "How Elements Reach the Page Content",
      "body": [
        "The link between the abstract tree and the concrete marks is the K (kids) entry working together with marked content. Inside a page's content stream, spans of drawing operators are wrapped in marked-content sequences (BDC ... EMC) and given a marked-content identifier, or MCID. A structure element's kids can be child structure elements, integer MCIDs that refer to marked content on the element's page, marked-content reference dictionaries for content on another page, or object references that point to whole objects such as annotations. Following the kids downward eventually lands on the actual glyphs and images the element describes.",
        "This design keeps meaning and appearance in separate layers that are joined only by MCIDs. It is why a correctly tagged PDF can present content to a screen reader in the tree's order even when the glyphs were painted on the page in a different order, and why reordering structure elements changes the logical reading order without moving a single mark."
      ]
    },
    {
      "heading": "Structure Types, Role Mapping, and Namespaces",
      "body": [
        "The S entry names a structure type. PDF defines a set of standard types -- grouping types such as Document and Sect, block types such as P, the heading types, L, and Table, and inline types such as Span and Link -- that consumers are expected to understand. A file may also invent its own type names; when it does, a role map in the structure tree root declares how each custom name corresponds to a standard one, so a reader that does not recognize the custom tag can still treat it correctly. PDF 2.0 added structure namespaces, letting a document draw tag sets from more than one standard and disambiguate names that would otherwise collide.",
        "Role mapping is what makes tagged PDF extensible without breaking older or simpler consumers. Authoring tools frequently emit their own tag vocabulary and rely on the role map to translate it into the standard set that assistive technology and validators key on."
      ]
    },
    {
      "heading": "Why Structure Elements Matter",
      "body": [
        "Structure elements are the backbone of an accessible and reusable PDF. A screen reader walks the tree to announce headings, read lists and tables in a sensible order, and skip decorative material that has been marked as an artifact rather than given a structure element. The same tree drives reflow on small screens and supports more dependable copy-and-paste and text extraction, because a consumer can follow logical order instead of guessing from coordinates. Standards such as PDF/UA build their requirements directly on the presence and correctness of these elements.",
        "When the tree is missing, incomplete, or mislabeled -- headings that are only visually large, tables built from loose text, images with no alternate text -- assistive technology has little to work with. This is why a well-tagged PDF is about more than merely having a structure tree: it is about structure elements whose types, order, and attributes actually match what the document means."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Object type",
      "value": "Usually a dictionary with Type /StructElem"
    },
    {
      "label": "Structure type",
      "value": "Given by the S entry (e.g. P, H1, L, Table, Figure)"
    },
    {
      "label": "Entry point",
      "value": "Reached from the document catalog via StructTreeRoot"
    },
    {
      "label": "Link to page",
      "value": "Kids (K) connect elements to marked content through MCIDs"
    }
  ],
  "specification": {
    "introduced": "Logical structure in PDF 1.3; tagged-PDF conventions in PDF 1.4",
    "iso": "ISO 32000 (PDF)",
    "latestVersion": "Structure namespaces added in PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Tagged PDF for accessibility, reflow, and content reuse",
    "relatedStandards": [
      "pdf-ua-1",
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Structure elements are the same thing as the marked content in a page's content stream.",
      "truth": "They are separate layers. Structure elements are dictionaries in the logical structure tree; marked content is the tagging inside content streams. An MCID is what links a structure element to the marks it describes."
    },
    {
      "claim": "The visual position of content on the page determines its reading order.",
      "truth": "Reading order comes from the order of structure elements in the tree, not from where glyphs sit on the page or the order in which they were drawn."
    },
    {
      "claim": "A structure element's tag name must come from a fixed standard list.",
      "truth": "A document may define custom structure types. A role map in the structure tree root then declares how each custom name corresponds to a standard type."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a structure element and its structure type?",
      "a": "The structure element is the node itself -- a dictionary in the tree. Its structure type, held in the S entry, says what kind of thing that node represents, such as a paragraph (P), a heading (H1), or a table. One is the container; the other is its label."
    },
    {
      "q": "Where does the chain of structure elements begin?",
      "a": "At the structure tree root, a special object referenced from the document catalog through its StructTreeRoot entry. Every structure element is a descendant of that root, either directly or through other elements."
    },
    {
      "q": "Do all PDFs contain structure elements?",
      "a": "No. Only tagged PDFs carry a structure tree. An untagged PDF still displays and prints normally, but it has no structure elements, so a consumer has to infer meaning from layout instead."
    },
    {
      "q": "How does a structure element point at the exact content it describes?",
      "a": "Through its kids (K) entry, which can hold child elements, marked-content identifiers (MCIDs) that match tagged spans in the page's content stream, or references to objects such as annotations. The MCID is the thread that ties an element to the glyphs on the page."
    },
    {
      "q": "What lets a document use tag names that are not in the standard set?",
      "a": "The role map in the structure tree root, which declares how each non-standard type corresponds to a standard structure type. A consumer that does not recognize a custom name follows the mapping to handle it correctly."
    }
  ],
  "graph": {
    "parentConcept": "pdf-structure-tree",
    "relatedConcepts": [
      "pdf-alt-text",
      "artifact-marking",
      "table-tagging-in-pdf",
      "list-tagging-in-pdf",
      "heading-structure-in-pdf",
      "well-tagged-pdf",
      "pdf-dictionary",
      "pdf-document-catalog"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1"
    ]
  },
  "seeAlso": [
    "pdf-structure-tree",
    "tagged-pdf",
    "marked-content",
    "marked-content-id",
    "standard-structure-types",
    "role-mapping",
    "logical-structure",
    "reading-order"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
