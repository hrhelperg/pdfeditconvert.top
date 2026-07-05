import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "standard-structure-types",
  "h1": "Standard Structure Types in PDF",
  "cluster": "accessibility",
  "aliases": [
    "Standard structure element types",
    "PDF standard tags",
    "Standard structure namespace",
    "Tagged PDF element types",
    "Structure type vocabulary"
  ],
  "definition": "Standard structure types are the predefined tag names — such as P, H1, L, Table, and Figure — that tagged PDF uses to label the logical role of each piece of content.",
  "description": "The predefined tag vocabulary of tagged PDF — paragraphs, headings, lists, tables and figures — that gives content a machine-readable logical role.",
  "searchIntent": "accessibility",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "In a tagged PDF, every meaningful piece of content is wrapped in a structure element that records what the content is — a paragraph, a heading, a list item, a table cell, an image. Standard structure types are the shared vocabulary of names the PDF specification defines for that purpose. Instead of each tool inventing its own labels, a tagged PDF draws its tags from this common set, so that any conforming reader — including assistive technology — can interpret the document's logical structure the same way.",
    "The vocabulary is deliberately compact and hierarchical. It covers large containers such as the whole document, sections, and articles; block-level constructs such as paragraphs, headings, lists, and tables; inline pieces such as spans, quotations, and links; and illustrations such as figures and formulas. Each type carries an expected meaning and rules about what it may contain, which is what lets a screen reader announce a heading level or step through a table cell by cell.",
    "Standard structure types are the anchor that features like reading order, alternate text, and reflow build on. A document is not required to use only these names — authors may define their own — but non-standard tags are expected to be mapped back to a standard type through role mapping, so consumers still know how to treat them."
  ],
  "sections": [
    {
      "heading": "A Shared Set of Tag Names",
      "body": [
        "Standard structure types are defined within the PDF specification as part of tagged PDF's logical structure model. Each structure element in a document is an object that carries a structure type name in its /S (structure type) entry — for example /S /P for a paragraph or /S /TD for a table data cell. These elements live in the document's structure tree, a hierarchy that sits separate from the page's drawing instructions and describes the document as an outline of nested roles rather than as marks on a page.",
        "Because the type names come from a single agreed set, a consumer does not have to guess what a tag means. A reader that encounters an H2 element knows it represents a second-level heading; one that encounters an L element knows it wraps a list. The structure elements connect back to the visible content through marked content, so the logical role in the tree is tied to the specific text or graphics it describes on the page."
      ]
    },
    {
      "heading": "How the Vocabulary Is Organized",
      "body": [
        "The standard types fall into a few broad categories. Grouping elements are containers that organize other elements — for example Document, Part, Art (article), Sect (section), Div, BlockQuote, Caption, TOC and TOCI (table of contents and its items), and Index. Block-level elements describe self-contained blocks of content: paragraph-like elements (P and the headings H and H1 through H6), list elements (L for the list, LI for an item, Lbl for a label or bullet, and LBody for the item body), and table elements (Table, TR for a row, TH and TD for header and data cells, and the row groups THead, TBody, and TFoot).",
        "Inline-level elements mark spans within a block, such as Span, Quote, Note, Reference, BibEntry, Code, Link, and Annot. Illustration elements — Figure, Formula, and Form — wrap non-text content and typically carry alternate text describing what the graphic conveys. There is also a small set of Ruby and Warichu elements for East Asian typographic annotations. Many of these types imply a containment structure: an LI is expected to hold a Lbl and an LBody, and a Table is expected to hold rows that hold cells, so the tree mirrors the way the content is meant to be understood."
      ]
    },
    {
      "heading": "Headings and Two Ways to Express Level",
      "body": [
        "Headings can be expressed in two different ways, and the distinction is a common source of confusion. One approach uses the numbered heading types H1 through H6, where the level is stated explicitly in the tag name itself. The other approach uses the generic H element nested inside grouping elements such as Sect, where the heading's level is implied by how deeply it is nested rather than by its name.",
        "The specification's guidance is to be consistent within a given structure hierarchy rather than mixing the two styles arbitrarily, because a consumer determines heading level from whichever model the document uses. Getting headings right matters well beyond styling: assistive technology often lets a user jump between headings to survey and navigate a document, so a coherent heading structure is one of the most load-bearing parts of a well-tagged file."
      ]
    },
    {
      "heading": "Role Mapping and Non-Standard Types",
      "body": [
        "Authoring tools frequently need element types that are not in the standard set — a design application might tag something as ProductName or Callout to preserve its own semantics. Tagged PDF allows this, but it expects each such custom type to be connected to a standard structure type through role mapping, defined in a RoleMap dictionary in the structure tree root. The role map effectively says \"treat ProductName as a Span,\" so a consumer that does not recognize the custom name can still fall back to a meaning it understands.",
        "This mechanism keeps the vocabulary open without fragmenting it. Accessibility-focused conformance, such as PDF/UA, leans on it directly: a non-standard element type is acceptable as long as it is role-mapped to an appropriate standard type, and mapping a type to a semantically wrong standard type is a defect even if the document technically has tags. Role mapping is therefore what lets custom and standard vocabularies coexist while still presenting a predictable structure to readers and assistive technology."
      ]
    },
    {
      "heading": "Changes in PDF 2.0",
      "body": [
        "PDF 2.0 (ISO 32000-2) revised the standard structure element set and introduced the concept of structure namespaces. A namespace lets an element declare which vocabulary it belongs to, so the same tag name can be interpreted against a specific, versioned definition, and it provides a way to map elements from one namespace to another — including between the earlier PDF 1.7 vocabulary and the PDF 2.0 vocabulary.",
        "Alongside namespaces, PDF 2.0 added new element types — for example elements for emphasis, asides, document titles, and a combined footnote/endnote construct — and refined the meaning of some existing ones. For most everyday tagging the familiar types (paragraphs, headings, lists, tables, figures) behave as before, but the namespace model is what allows newer documents to use an expanded vocabulary while remaining interpretable by tools that were built around the older set."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where defined",
      "value": "In the PDF specification (ISO 32000) as part of the tagged PDF logical structure model."
    },
    {
      "label": "Categories",
      "value": "Grouping, block-level (paragraphs, headings, lists, tables), inline-level, and illustration elements."
    },
    {
      "label": "Custom tags",
      "value": "Non-standard element types are connected to standard types through the RoleMap in the structure tree root."
    },
    {
      "label": "PDF 2.0",
      "value": "ISO 32000-2 revised the set and added structure namespaces for versioned, mappable vocabularies."
    }
  ],
  "specification": {
    "introduced": "PDF 1.4 (tagged PDF)",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "iso": "ISO 32000 (base PDF standard)",
    "typicalUsage": "Labeling the logical role of content in tagged PDF for accessibility and reflow.",
    "relatedStandards": [
      "pdf-ua-1",
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "A tagged PDF may only use the standard tag names and nothing else.",
      "truth": "Authors can define their own element types; they are expected to be role-mapped to a standard type so consumers can still interpret them."
    },
    {
      "claim": "Standard structure types are just PDF's version of HTML tags.",
      "truth": "Some names resemble HTML (P, H1, Table), but this is a distinct PDF vocabulary with its own categories, containment rules, and structure-tree model."
    },
    {
      "claim": "Applying a standard tag automatically makes content accessible.",
      "truth": "The tag has to be the semantically correct one and sit in the right reading order; a mis-chosen standard type can actively mislead assistive technology."
    }
  ],
  "faq": [
    {
      "q": "What are some examples of standard structure types?",
      "a": "Common ones include P (paragraph), H1 through H6 and H (headings), L, LI, Lbl, and LBody (lists), Table, TR, TH, and TD (tables), Figure and Formula (illustrations), and inline types such as Span and Link."
    },
    {
      "q": "How do standard structure types differ from marked content?",
      "a": "Standard structure types name the logical role of an element in the structure tree, while marked content marks the actual text or graphics on the page. A marked-content identifier ties a run of page content to the structure element that describes it."
    },
    {
      "q": "What is the Figure structure type used for?",
      "a": "Figure wraps illustrative, non-text content such as an image or diagram. Because a screen reader cannot read a picture, a Figure element typically carries alternate text describing what the graphic conveys."
    },
    {
      "q": "Do the standard structure types differ between PDF 1.7 and PDF 2.0?",
      "a": "Yes. PDF 2.0 revised and expanded the set and introduced structure namespaces, which declare which vocabulary an element belongs to and allow mapping between the older and newer vocabularies."
    },
    {
      "q": "What happens if a document uses a tag name that is not standard?",
      "a": "It should be role-mapped to a standard structure type through the RoleMap in the structure tree root, so a consumer that does not recognize the custom name can fall back to the mapped standard meaning."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "marked-content",
      "marked-content-id",
      "list-tagging-in-pdf",
      "pdf-alt-text",
      "reading-order",
      "artifact-marking",
      "well-tagged-pdf",
      "untagged-pdf"
    ],
    "relatedStandards": [
      "pdf-ua-1",
      "pdf-ua",
      "iso-32000",
      "pdf-2-0"
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
    "structure-elements",
    "role-mapping",
    "pdf-structure-tree",
    "logical-structure",
    "heading-structure-in-pdf",
    "table-tagging-in-pdf",
    "pdf-ua-1"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
