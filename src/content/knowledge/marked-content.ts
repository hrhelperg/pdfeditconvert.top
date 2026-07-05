import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "marked-content",
  "h1": "Marked Content in PDF",
  "cluster": "accessibility",
  "aliases": [
    "marked-content sequence",
    "marked content operators",
    "content marking",
    "BMC/BDC/EMC"
  ],
  "definition": "Marked content is a mechanism in PDF content streams that labels a sequence or point of page content with a tag and optional properties, used for structure, artifacts, and optional-content layers.",
  "description": "How PDF marked content works: the BMC, BDC, EMC, MP and DP operators tag regions of a content stream and link them to logical structure via MCID.",
  "searchIntent": "accessibility",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Marked content is the layer of a PDF where raw drawing instructions start to carry meaning. Inside a page's content stream, a producer can wrap a run of text and graphics operators with a label — a name tag plus optional properties — so that software consuming the file can tell which operators belong together and what they represent. The operators that do this change nothing about how the page looks; they only annotate the content for other programs to read.",
    "This annotation is the plumbing beneath several higher-level PDF features. Its best-known job is connecting visible page content to a document's logical structure tree, but the same mechanism is used to flag artifacts (content that carries no meaning) and to delimit optional-content layers. In each case marked content marks a boundary and attaches data, while the interpretation of that data happens elsewhere.",
    "Because marked content sits directly beneath tagged PDF, the two are often confused. Marked content is necessary for a well-tagged, accessible document, but it is not sufficient on its own: the actual hierarchy of the document lives in a separate structure tree, and marked content sequences are the leaves that hold the content each structure element points to."
  ],
  "sections": [
    {
      "heading": "How Marked Content Is Written in a Content Stream",
      "body": [
        "Marked content lives inside a page's content stream, alongside the operators that draw text and graphics. A producer opens a marked-content sequence with BMC (begin marked content) or BDC (begin marked content with a property list), and closes it with EMC (end marked content). Everything between the opening and closing operator belongs to that sequence. BMC takes only a tag — a name object such as /P or /Artifact — while BDC adds a property list that carries extra data about the run.",
        "For content that has no extent, the MP and DP operators mark a single point rather than a range; DP includes a property list and MP does not, and neither needs a matching EMC. A property list may be written inline immediately after the operator, or supplied as a name that resolves through the /Properties subdictionary of the page's resource dictionary, which lets the same properties be shared across many sequences. Sequences nest like balanced parentheses, so consuming software tracks them as a stack."
      ]
    },
    {
      "heading": "How MCID Links Content to the Structure Tree",
      "body": [
        "In a tagged PDF, the visible content still lives in the content stream, but its meaning lives in a separate logical structure tree of structure elements. Marked content is the bridge. When a producer wraps a run of text in BDC with a property list that contains an integer /MCID (a marked-content identifier), that run becomes addressable. A structure element can then claim it by number, so a paragraph element in the tree knows exactly which glyphs on the page it corresponds to.",
        "Because MCIDs are only unique within a single content stream, the association is resolved through a number tree — the ParentTree — that maps marked-content identifiers back to their owning structure elements. This link is what lets assistive technology walk the structure tree in reading order and pull the correct page content for each node, and it is why a document can look identical on screen yet be either well-tagged or effectively unreadable to a screen reader."
      ]
    },
    {
      "heading": "Artifacts, Layers, and Other Uses",
      "body": [
        "Marked content is not only about the structure tree. Content that is present for layout but carries no document meaning — running headers and footers, page numbers, background rules, decorative art — is wrapped in a sequence tagged /Artifact so that consuming software can skip it. This keeps pagination furniture out of the logical reading order without removing it from the page.",
        "The same mechanism delimits optional content, the feature behind PDF layers. A BDC sequence tagged /OC, with a property list that references an optional-content group, marks every operator that belongs to that layer so a viewer can show or hide the run as a unit. Applications may also define their own private tags for round-tripping editing information, which means the same small set of operators serves accessibility, print production, and interactive layering."
      ]
    },
    {
      "heading": "Marked Content vs Logical Structure",
      "body": [
        "It is easy to conflate marked content with tagged PDF, but they operate at different levels. Marked content is a labeling convention inside the content stream; it says 'this run of drawing operators is grouped, and here is a tag and some properties.' Logical structure is a document-level tree that describes the hierarchy of the document — sections, headings, paragraphs, tables, lists — independent of how the page is painted.",
        "The tag on a BDC operator is often chosen to match the structure type of the element that owns it, but it is the structure element, not the marked-content tag, that is authoritative for meaning and role mapping. Marked content can also exist with no structure tree at all, as it does for artifacts and optional content. Understanding this separation explains why improving accessibility usually means repairing the structure tree and its MCID links, not simply re-tagging runs in the content stream."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced in",
      "value": "PDF 1.2"
    },
    {
      "label": "Sequence operators",
      "value": "BMC, BDC, EMC"
    },
    {
      "label": "Point operators",
      "value": "MP, DP"
    },
    {
      "label": "Links to structure via",
      "value": "MCID (marked-content identifier)"
    }
  ],
  "specification": {
    "introduced": "PDF 1.2",
    "iso": "ISO 32000-1 and ISO 32000-2 (within the PDF specification)",
    "typicalUsage": "Grouping and labeling runs of a content stream so they can join the logical structure tree via MCID, be flagged as artifacts, or be delimited as optional-content layers.",
    "relatedStandards": [
      "iso-32000",
      "pdf-ua",
      "pdf-ua-1"
    ]
  },
  "misconceptions": [
    {
      "claim": "Marked content and tagged PDF are the same thing.",
      "truth": "Marked content is the low-level labeling inside a content stream; a tagged PDF's logical hierarchy lives in a separate structure tree, and the two are joined by MCID references. Marked content can also exist with no structure tree at all."
    },
    {
      "claim": "A screen reader reads the tag on a BDC operator to decide an element's role.",
      "truth": "In a tagged PDF the semantic role comes from the structure element in the structure tree. The marked-content tag is usually a matching hint, but the structure element is authoritative for meaning and role mapping."
    },
    {
      "claim": "Marked content is purely an accessibility feature.",
      "truth": "It also delimits optional-content (layer) sequences and flags artifacts such as running headers, so it serves print production and layered documents as well as accessibility."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between BMC and BDC?",
      "a": "BMC begins a marked-content sequence with only a tag, while BDC begins one with a tag plus a property list — either an inline dictionary or a name that refers to the /Properties resource subdictionary. Both are closed by EMC."
    },
    {
      "q": "What are the MP and DP operators for?",
      "a": "They mark a single point in the content rather than a range. MP takes just a tag and DP adds a property list. Because a point has no extent, neither needs a matching EMC."
    },
    {
      "q": "Where does a marked-content property list come from?",
      "a": "It can be written inline right after the operator, or given as a name that resolves through the /Properties entry of the current resource dictionary, which is convenient when the same properties are reused across many sequences."
    },
    {
      "q": "Can marked-content sequences be nested?",
      "a": "Yes. BMC or BDC and their matching EMC nest like balanced parentheses, so one sequence can contain child sequences, and consuming software tracks the nesting as a stack."
    },
    {
      "q": "Does marked content change how a PDF looks?",
      "a": "No. The operators paint nothing and move nothing; they only annotate the surrounding content for software that reads the file. The content between them renders exactly as it would without the marks."
    }
  ],
  "graph": {
    "parentConcept": "tagged-pdf",
    "childConcepts": [
      "marked-content-id"
    ],
    "relatedConcepts": [
      "pdf-operators",
      "reading-order",
      "role-mapping",
      "standard-structure-types",
      "well-tagged-pdf"
    ],
    "relatedStandards": [
      "pdf-ua",
      "pdf-ua-1",
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
    "marked-content-id",
    "pdf-structure-tree",
    "structure-elements",
    "artifact-marking",
    "logical-structure",
    "pdf-content-streams",
    "optional-content-groups"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
