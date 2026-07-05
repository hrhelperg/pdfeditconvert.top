import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "heading-structure-in-pdf",
  "h1": "Heading Structure in PDF",
  "cluster": "accessibility",
  "aliases": [
    "PDF heading tags",
    "H1–H6 in PDF",
    "heading levels in tagged PDF",
    "the H structure type",
    "PDF document headings"
  ],
  "definition": "Heading structure in PDF is the set of semantic heading tags (H and H1–H6) in a tagged PDF's logical structure tree that mark section titles and define the document's navigable outline.",
  "description": "How tagged PDFs mark headings with the H and H1–H6 structure types, why levels must nest correctly, and how they form an outline for assistive technology.",
  "searchIntent": "accessibility",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "In a tagged PDF, a heading is not simply text that happens to be large and bold. It is a semantic tag in the document's logical structure tree that identifies a section title and records where it sits in the document's hierarchy. This is what turns a flat page of glyphs into a document with a machine-readable outline.",
    "Headings are represented as structure elements whose type is either the generic H or one of the numbered types H1 through H6. Each such element is connected back to the visible text on the page through marked content, so the tag is bound to specific glyphs rather than floating free. Assistive technology reads this structure to understand where each section begins.",
    "Heading structure matters because it drives navigation and reading order for people using screen readers, and because accessibility expectations described by WCAG and by PDF/UA lean heavily on a correct heading outline. It is deliberately separate from visual appearance: how text looks and what it means structurally are two different things in PDF."
  ],
  "sections": [
    {
      "heading": "How Headings Are Represented in the Structure Tree",
      "body": [
        "A tagged PDF stores its logical structure as a tree of structure elements rooted at the StructTreeRoot entry in the document catalog. A heading is one of these elements, distinguished by a structure type of H or one of H1 through H6. The tree as a whole expresses the document's semantics: parts, sections, paragraphs, lists, tables, and the headings that title them.",
        "The heading element does not itself contain the glyphs a reader sees. Instead it references marked content sequences in the page's content stream, identified by marked content IDs (MCIDs), which point to the actual characters that form the heading text on a particular page. Because the structure element is separate from the content stream, the same text could be styled in any way while the structure element is what carries the meaning \"this is a heading.\""
      ]
    },
    {
      "heading": "Strongly vs. Weakly Structured Headings",
      "body": [
        "PDF supports two conventions for expressing heading level. In the strongly structured approach, you use the single generic H, and the heading's level is inferred from how deeply it is nested inside sectioning elements — an H directly inside a top-level section behaves as a first-level heading, and one nested further down represents a deeper level. In the weakly structured approach, used where a document need not be strongly structured, you use the numbered types H1, H2, and so on, which encode the level explicitly and are meant to nest in order.",
        "The specification's guidance is that a given structure hierarchy should use one convention consistently rather than mixing the generic H with the numbered Hn types. PDF 1.7 (ISO 32000-1) limited the numbered headings to H1 through H6. PDF 2.0 (ISO 32000-2) revised this area and generalized numbered headings so that levels beyond six are permitted, alongside its broader work on namespaces and role mapping for structure types."
      ]
    },
    {
      "heading": "Why Heading Levels Must Nest Correctly",
      "body": [
        "Screen readers and other assistive technology expose a document's headings as a navigable outline. Users move heading to heading, jump directly to a section, and rely on the announced level to understand how the content is organized. A clean, correctly ordered set of headings is therefore a primary way non-visual readers orient themselves in a long document.",
        "When levels are skipped — for example a first-level heading followed immediately by a third-level heading — or when headings appear out of order, the outline becomes misleading or broken. This is why heading structure features so prominently in the accessibility expectations described by WCAG and in the requirements of PDF/UA (ISO 14289): a document can carry heading tags yet still present a confusing hierarchy if those tags are not nested in a sensible sequence."
      ]
    },
    {
      "heading": "Visual Formatting Is Not a Heading",
      "body": [
        "Making text large, bold, or a different color changes only its appearance in the content stream. On its own that formatting produces no heading for assistive technology, because there is no H or Hn structure element to expose. Conversely, text that looks ordinary is still a heading if it is tagged with a heading structure element. Semantics and visual styling are decoupled in PDF.",
        "Authoring tools bridge this gap when they export a PDF. A word processor's paragraph styles, such as its own \"Heading 1\" style, are typically translated into PDF heading tags during export. Where a document uses custom structure types instead of the standard ones, role mapping declares how those custom types correspond to the standard heading types, so a conforming reader can still interpret them as headings."
      ]
    },
    {
      "heading": "Headings, Bookmarks, and the Document Outline",
      "body": [
        "Heading tags are easy to confuse with a PDF's bookmarks, but they are distinct features stored in different places. Heading tags live in the logical structure tree and are consumed mainly by assistive technology. Bookmarks — the entries in a viewer's navigation sidebar — belong to the document's outline tree, a separate interactive navigation feature aimed at any reader clicking through the file.",
        "The two are related in practice: many tools can generate a set of bookmarks from a document's headings, so the sidebar mirrors the heading outline. But generating bookmarks does not tag headings, and tagging headings does not create bookmarks. A fully navigable, accessible document generally benefits from both being present and consistent with each other."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard heading types",
      "value": "A generic H plus numbered headings H1 through H6"
    },
    {
      "label": "Where they live",
      "value": "In the logical structure tree under StructTreeRoot in the document catalog"
    },
    {
      "label": "Consistency rule",
      "value": "A structure hierarchy uses either H or the numbered Hn types, not a mixture"
    },
    {
      "label": "PDF 2.0 change",
      "value": "PDF 2.0 (ISO 32000-2) generalized numbered headings to allow levels beyond H6"
    }
  ],
  "specification": {
    "introduced": "PDF 1.4 (introduction of tagged PDF and the standard structure types)",
    "iso": "Defined within ISO 32000 (tagged PDF logical structure); accessibility conformance addressed by PDF/UA, ISO 14289",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Semantic H and H1–H6 tags in a tagged PDF that title sections and build a navigable outline for assistive technology",
    "relatedStandards": [
      "pdf-ua-1",
      "tagged-pdf",
      "standard-structure-types"
    ]
  },
  "misconceptions": [
    {
      "claim": "Making text large and bold turns it into a heading.",
      "truth": "Visual formatting has no effect on structure; a heading exists only when text is tagged with an H or Hn structure element in the logical structure tree."
    },
    {
      "claim": "PDF bookmarks and heading tags are the same thing.",
      "truth": "Bookmarks belong to the document outline shown in the viewer sidebar, while heading tags live in the logical structure tree used by assistive technology; tools can generate one from the other, but they are stored and used differently."
    },
    {
      "claim": "PDF headings can never go beyond H6.",
      "truth": "PDF 1.7 limited numbered headings to H1 through H6, but PDF 2.0 generalized numbered headings so levels beyond six are permitted."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between H and H1–H6 in a PDF?",
      "a": "H1 through H6 encode a heading's level explicitly and are meant to nest in order, while the single generic H leaves the level to be inferred from how deeply it is nested inside sectioning elements. A structure hierarchy should stick to one convention."
    },
    {
      "q": "Where does heading structure live inside a PDF file?",
      "a": "In the logical structure tree, which is rooted at StructTreeRoot in the document catalog. Each heading element references the visible text through marked content identified by MCIDs."
    },
    {
      "q": "Do untagged PDFs have heading structure?",
      "a": "No. An untagged PDF has no structure tree, so it carries no semantic headings — only visual formatting that assistive technology cannot interpret as a heading."
    },
    {
      "q": "How do screen readers use PDF headings?",
      "a": "They expose headings as a navigable outline, letting a user jump from section to section and announcing each heading's level so the reader can grasp how the document is organized."
    },
    {
      "q": "Can custom tags act as headings?",
      "a": "Yes. When a document uses non-standard structure types, role mapping declares how those custom types correspond to the standard heading types, so a conforming reader can treat them as H or Hn."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "relatedConcepts": [
      "marked-content-id",
      "well-tagged-pdf",
      "pdf-bookmarks",
      "wcag-and-pdf",
      "screen-readers-and-pdf",
      "pdf-alt-text"
    ],
    "relatedStandards": [
      "pdf-ua-1",
      "pdf-ua"
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
    "standard-structure-types",
    "pdf-structure-tree",
    "logical-structure",
    "reading-order",
    "role-mapping",
    "pdf-ua-1"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
