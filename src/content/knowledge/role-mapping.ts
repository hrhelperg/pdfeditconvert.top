import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "role-mapping",
  "h1": "Role Mapping in Tagged PDF",
  "cluster": "accessibility",
  "aliases": [
    "RoleMap",
    "role map",
    "structure type role mapping",
    "tag role mapping",
    "RoleMapNS"
  ],
  "definition": "Role mapping is the Tagged PDF mechanism that links a document's custom (non-standard) structure type names to the format's standard structure types so consumers can interpret their meaning.",
  "description": "How the RoleMap dictionary in a Tagged PDF translates custom structure tags into standard structure types so screen readers and other consumers can interpret them.",
  "searchIntent": "accessibility",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Tagged PDF represents a document's logical structure as a tree of structure elements, and every element carries a structure type: a name such as P for a paragraph or Table for a table. PDF defines a vocabulary of standard structure types with agreed-upon meanings, but a producer is free to invent its own type names that better match the authoring application's internal model. Role mapping is the bridge between those two worlds.",
    "A role map is a dictionary that records, for each non-standard type name a document uses, the standard structure type it should be treated as. When a consumer such as a screen reader walks the structure tree and meets an unfamiliar tag, it looks the name up in the role map and processes the element as though it had the mapped standard type. Without that entry, the consumer has no defined semantics to fall back on.",
    "Because assistive technology, reading-order engines, and reflow features all depend on the standard vocabulary, role mapping is central to making a Tagged PDF interpretable. It lets producers keep their own naming conventions while still exposing a document's headings, lists, tables, and paragraphs in terms every conforming consumer understands."
  ],
  "sections": [
    {
      "heading": "How the Role Map Works",
      "body": [
        "The role map lives in the structure tree root (the StructTreeRoot dictionary) as its RoleMap entry. It is a dictionary whose keys are the structure type names the document actually uses and whose values are the structure types those names should map to. When a structure element's type is not a recognized standard type, a consumer resolves it through this table before assigning any semantics to the element.",
        "Resolution is transitive: a custom type may map to another custom type, which in turn maps to a standard type, forming a chain that a consumer follows until it reaches a defined standard type. This lets a producer layer its own vocabularies, but it also means a well-formed role map must terminate in a valid standard type and must not loop, or the element's meaning cannot be determined."
      ]
    },
    {
      "heading": "Standard vs. Non-Standard Structure Types",
      "body": [
        "PDF defines a set of standard structure types covering grouping elements (such as Document, Part, Sect, and Div), block-level content (such as P, the heading types H and H1 through H6, and list constructs like L, LI, Lbl, and LBody), table elements (Table, TR, TH, TD), and inline elements (such as Span and Link). These carry defined semantics that any conforming consumer is expected to understand.",
        "A producer that tags content with names outside this set gives those names no inherent meaning to a consumer. Only the role map connects them back to the standard vocabulary. In practice this means standard types need no role-map entry at all, while every application-specific name that appears in the structure tree should be mapped to the standard type that best matches its role."
      ]
    },
    {
      "heading": "Why Role Mapping Matters for Accessibility",
      "body": [
        "Screen readers and other assistive technology convey a document by announcing the semantics attached to each structure element: this is a heading, this is a table cell, this is a list item. Those semantics come from the standard structure types. If a document uses custom tag names and fails to map them, a consumer cannot reliably tell a heading from a paragraph, and the logical structure loses much of its value.",
        "This is why role mapping features in discussions of well-tagged PDF and in the accessibility-oriented PDF/UA standard, and why it supports goals expressed by guidelines such as WCAG. Role mapping is necessary for a consumer to interpret custom tags, though it is not sufficient on its own: correct nesting, a sensible reading order, alternative text, and other structure details still have to be in place."
      ]
    },
    {
      "heading": "Role Mapping in PDF 2.0: Namespaces",
      "body": [
        "PDF 2.0 (ISO 32000-2) added namespaces for structure elements. A structure element can reference a namespace through its NS entry, which lets the same short type name mean different things in different vocabularies. Alongside this, the namespace dictionary can carry its own role map, the RoleMapNS entry, which maps that namespace's types to types in another namespace, ultimately resolving toward a standard structure namespace.",
        "This namespace-aware model coexists with the document-level RoleMap. It allows a producer to keep several distinct tag vocabularies in one file, each mapped independently, while still resolving every element to a standard structure type that consumers recognize. Older PDFs continue to rely on the single document-level role map, so consumers may encounter both approaches."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where it lives",
      "value": "The RoleMap entry in the structure tree root (StructTreeRoot) dictionary"
    },
    {
      "label": "What it maps",
      "value": "Non-standard structure type names to standard structure types"
    },
    {
      "label": "Resolution",
      "value": "Transitive — custom types may chain until they reach a standard type"
    },
    {
      "label": "PDF 2.0 addition",
      "value": "Namespace-aware role maps via the RoleMapNS entry in a namespace dictionary"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1, ISO 32000-2",
    "introduced": "PDF logical structure and RoleMap (PDF 1.3); Tagged PDF and standard structure types (PDF 1.4)",
    "typicalUsage": "Mapping custom structure tags to standard structure types in Tagged PDF",
    "relatedStandards": [
      "pdf-ua-1",
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Role mapping lets you invent any tag name and screen readers will understand it automatically.",
      "truth": "A consumer understands a custom tag only through the standard type it is explicitly mapped to; the mapping must exist and must resolve to a defined standard type."
    },
    {
      "claim": "Role mapping changes how the page looks or the order in which content is read.",
      "truth": "It only affects how a structure element's type is interpreted. It does not alter appearance or the order of elements in the structure tree."
    },
    {
      "claim": "Every structure element must be listed in the role map.",
      "truth": "Only non-standard type names need entries. Standard structure types are understood directly and require no mapping."
    }
  ],
  "faq": [
    {
      "q": "Where is the role map stored in a PDF?",
      "a": "It is the RoleMap entry in the structure tree root (StructTreeRoot) dictionary, a table whose keys are the type names the document uses and whose values are the standard types they map to."
    },
    {
      "q": "Can a custom tag map to another custom tag?",
      "a": "Yes. Role mapping is transitive, so a custom type can map to another custom type that eventually resolves to a standard structure type. The chain must terminate in a valid standard type and must not form a loop."
    },
    {
      "q": "What happens if a custom tag has no role-map entry?",
      "a": "A consumer cannot determine the element's standard semantics. Assistive technology may treat it as undefined or as a generic grouping, which can obscure whether the content is a heading, list, table cell, or paragraph."
    },
    {
      "q": "How did PDF 2.0 change role mapping?",
      "a": "PDF 2.0 introduced namespaces for structure elements and a namespace-level RoleMapNS entry, so a document can hold several tag vocabularies that each map independently toward a standard structure namespace."
    },
    {
      "q": "Does role mapping alone make a PDF accessible?",
      "a": "No. Mapping custom tags to standard types is necessary for interpretation, but a well-tagged, accessible PDF also depends on correct nesting, a logical reading order, alternative text, and other structure details."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "reading-order",
      "heading-structure-in-pdf",
      "pdf-alt-text",
      "screen-readers-and-pdf",
      "untagged-pdf"
    ],
    "relatedStandards": [
      "pdf-ua-1",
      "pdf-2-0",
      "iso-32000"
    ]
  },
  "seeAlso": [
    "tagged-pdf",
    "standard-structure-types",
    "structure-elements",
    "pdf-structure-tree",
    "logical-structure",
    "marked-content",
    "pdf-ua",
    "well-tagged-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
