import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-structure-tree",
  "h1": "The PDF Structure Tree",
  "cluster": "accessibility",
  "aliases": [
    "structure hierarchy",
    "logical structure tree",
    "tag tree",
    "structure element tree",
    "structure tree root"
  ],
  "definition": "The PDF structure tree is a hierarchy of structure elements that describes a document's logical organization and reading order, linking tagged content to its meaning for assistive technology.",
  "description": "The PDF structure tree is the logical hierarchy behind Tagged PDF, mapping structure elements and reading order to on-page content for screen readers.",
  "searchIntent": "accessibility",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF describes how a page should look, down to where each glyph, line, and image is painted. On its own, that description says nothing about what the content means: which text is a heading, which cells belong to a table, or the order in which a person should read it. The structure tree is the part of a PDF that carries that meaning.",
    "Formally, the structure tree is a hierarchy of structure elements rooted at a single object, the structure tree root, which the document catalog points to. Each element names a role such as paragraph, heading, list item, table cell, or figure, and links down to the actual marks on the page. A PDF that carries this hierarchy is a Tagged PDF; one without it is untagged.",
    "Because the tree records logical order and roles independently of where things are drawn, it is the foundation that assistive technology relies on. Screen readers, reflow engines, and export-to-other-format tools walk the structure tree, not the raw content stream, to decide what to present and in what sequence."
  ],
  "sections": [
    {
      "heading": "What the Structure Tree Is Made Of",
      "body": [
        "The tree hangs from the structure tree root, a dictionary the specification labels StructTreeRoot, reachable from the document catalog through its StructTreeRoot entry. Below it hang structure elements, each a dictionary whose type is StructElem. An element's S entry gives its structure type, which is its role such as P for a paragraph or a heading type; its K (kids) entry lists its children, which may be further structure elements, references to on-page content, or references to whole objects such as annotations; its P entry points back to its parent; and its Pg entry names the page where the element's content mainly lives. Optional entries carry accessibility data such as Alt for alternate text, ActualText, and Lang.",
        "The structure tree root also holds supporting tables that make the hierarchy usable. A RoleMap maps a document's own custom element names onto the standard set of structure types, a ClassMap describes shared attribute sets, and a ParentTree indexes on-page content back to the elements that own it. Together these turn a bare tree of roles into a fully cross-referenced model rather than an isolated outline."
      ]
    },
    {
      "heading": "How the Tree Links to Page Content",
      "body": [
        "The drawn content lives in content streams, and the tree attaches to it through marked content. Ranges of content are wrapped in marked-content sequences tagged with a marked-content identifier, or MCID. A structure element's kids can then reference an MCID on a given page, binding a role in the tree to the exact marks that make up that role on the page. Content that carries no meaning, such as background rules, decorative flourishes, or running headers, is instead labeled as an artifact and deliberately left out of the tree.",
        "The link runs in both directions. The structure tree root's ParentTree is a number tree that maps each page's marked-content identifiers, along with referenced objects, back to the structure element that contains them. This lets a reader that starts from a point on the page find its place in the logical hierarchy, and it lets validation tools confirm that every piece of meaningful content is accounted for in the tree."
      ]
    },
    {
      "heading": "Reading Order Versus Drawing Order",
      "body": [
        "A central idea is that the order of elements in the structure tree defines the intended reading order, which is not necessarily the order in which content is painted. A page might draw a sidebar before the main column, or place footnotes near the end of the content stream, yet the structure tree can present those pieces in the sequence a person should actually encounter them. Because assistive technology follows the tree rather than the drawing order, getting this sequence right is what makes a multi-column layout, a pull quote, or an image caption read sensibly instead of as a jumble."
      ]
    },
    {
      "heading": "The Structure Tree and Accessibility",
      "body": [
        "The structure tree is the mechanism behind Tagged PDF, a defined way of using PDF's logical-structure facilities with an agreed vocabulary of standard structure types. The logical-structure framework was introduced in PDF 1.3, and Tagged PDF built on it in PDF 1.4. Standards aimed at accessibility, most directly PDF/UA, describe how the tree should be built: that meaningful content is tagged, that roles are correct, that headings, tables, and lists use appropriate element types, and that alternate text is supplied for non-text content.",
        "Role mapping is what keeps this workable in practice. A document is free to use its own element names to match an authoring system, then declare through the RoleMap how each maps to a standard type a reader will understand. PDF 2.0 refined the model further, including structure-element namespaces so that different tag sets can coexist without ambiguity. The practical payoff is consistent: a correctly built structure tree is what lets a screen reader announce a heading level or navigate a data table by row and column."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Root object",
      "value": "The tree hangs from the structure tree root (StructTreeRoot), referenced from the document catalog."
    },
    {
      "label": "Content link",
      "value": "Structure elements bind to page marks through marked-content identifiers (MCIDs)."
    },
    {
      "label": "Introduced",
      "value": "Logical structure appeared in PDF 1.3; Tagged PDF conventions in PDF 1.4."
    },
    {
      "label": "Reverse index",
      "value": "The ParentTree maps on-page content back to its owning structure element."
    }
  ],
  "specification": {
    "introduced": "Logical structure in PDF 1.3; Tagged PDF conventions in PDF 1.4",
    "typicalUsage": "Accessibility, reading order, and content reuse in Tagged PDF",
    "relatedStandards": [
      "iso-32000",
      "pdf-ua",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The structure tree holds the page's text and graphics.",
      "truth": "It is a separate logical hierarchy of roles that only references the drawn content through marked-content identifiers; the actual marks stay in the content streams."
    },
    {
      "claim": "Any PDF whose text displays correctly already has a structure tree.",
      "truth": "Text can render perfectly with no structure tree at all. Such a file is an untagged PDF, and the tree must be built explicitly for the content to be tagged."
    },
    {
      "claim": "The structure tree controls where content appears on the page.",
      "truth": "It defines logical reading order and roles, not visual position; where content is drawn comes from coordinates in the content stream, independent of tree order."
    }
  ],
  "faq": [
    {
      "q": "Where is the structure tree stored inside a PDF?",
      "a": "The document catalog has a StructTreeRoot entry that points to the structure tree root object, and the individual structure elements hang beneath it through each element's kids (K) entry."
    },
    {
      "q": "How is the structure tree different from the page tree?",
      "a": "The page tree organizes the document's pages as physical objects, while the structure tree organizes content by logical meaning. They are connected: structure elements name their page with a Pg entry and reference on-page marks by MCID."
    },
    {
      "q": "Do all PDFs have a structure tree?",
      "a": "No. Untagged PDFs contain no structure tree, which is common for scanned documents or files exported without accessibility features. The content still displays, but there is no logical hierarchy for tools to follow."
    },
    {
      "q": "How does a screen reader use the structure tree?",
      "a": "It walks the tree in order, uses each element's structure type to decide how to present the content, follows the tree's sequence as the reading order, and reads alternate text supplied on elements for non-text content such as figures."
    },
    {
      "q": "What is the ParentTree used for?",
      "a": "It is a reverse index in the structure tree root that maps marked-content identifiers and referenced objects back to the structure element that owns them, enabling lookup from a point on the page into the logical hierarchy."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "childConcepts": [
      "structure-elements"
    ],
    "relatedConcepts": [
      "pdf-document-catalog",
      "pdf-alt-text",
      "artifact-marking",
      "well-tagged-pdf",
      "screen-readers-and-pdf",
      "untagged-pdf"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1"
    ]
  },
  "seeAlso": [
    "tagged-pdf",
    "structure-elements",
    "marked-content",
    "marked-content-id",
    "logical-structure",
    "reading-order",
    "role-mapping",
    "standard-structure-types"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
