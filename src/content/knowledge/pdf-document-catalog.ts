import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-document-catalog",
  "h1": "The PDF Document Catalog",
  "cluster": "foundations",
  "aliases": [
    "Catalog dictionary",
    "Root dictionary",
    "/Catalog",
    "Document catalog dictionary"
  ],
  "definition": "The PDF document catalog is the root dictionary of a PDF's object hierarchy; the trailer points to it, and it references the page tree and most document-wide structures.",
  "description": "The document catalog is the root object of every PDF, linking the page tree, outlines, metadata, form and structure data into one navigable hierarchy.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF is a graph of objects, but a reader needs a single place to start. That starting point is the document catalog: the root dictionary that every other document-wide structure hangs from. When a viewer opens a file, it works from the end of the file backward, finds the trailer, follows the trailer's reference to the catalog, and from there can reach the pages, the outline, the metadata, and everything else the document defines.",
    "The catalog is an ordinary dictionary object, distinguished by a /Type entry whose value is the name /Catalog. What makes it special is not its structure but its position: it sits at the top of the hierarchy, and its entries are references (usually indirect references) to the sub-structures that make up the document. Understanding the catalog is the clearest way to see how a PDF is organized as a whole rather than as a loose pile of objects.",
    "Because so much routes through it, the catalog is also a useful lens for troubleshooting. If a viewer cannot locate a valid catalog, or the catalog's required entries are missing, the document may fail to open even though most of its content objects are intact. This entry explains what the catalog is, what it points to, and why it occupies such a central role in the file's design."
  ],
  "sections": [
    {
      "heading": "The root of the object hierarchy",
      "body": [
        "A PDF stores its objects in the body of the file, but nothing there is meaningful until a reader knows where to begin. That is the job of the trailer, which contains a /Root entry pointing to the document catalog. The catalog is therefore the entry point to the entire object graph: resolve the /Root reference and you have the one object from which every page, bookmark, and metadata stream can be reached by following further references.",
        "The catalog itself is a dictionary marked with /Type /Catalog. Like other objects it is normally an indirect object, so it can be referenced by number from the trailer and from the cross-reference table or cross-reference stream. This design keeps a single, well-defined starting node no matter how large or how heavily updated the file becomes."
      ]
    },
    {
      "heading": "What the catalog points to",
      "body": [
        "The only entry the catalog strictly requires is /Pages, which references the root node of the page tree, the structure that organizes the document's pages. Beyond that, the catalog collects references to most of the document-wide features a PDF can carry. Common entries include /Outlines for the bookmark (outline) tree, /Names for various name trees such as named destinations and embedded files, /Dests for named destinations, and /PageLabels for custom page numbering.",
        "Interactive and semantic features are wired in here too. /AcroForm references the interactive form dictionary, /StructTreeRoot references the logical structure tree used by tagged PDF, /MarkInfo records whether the document is marked, /OCProperties describes optional content (layers), and /Metadata references an XMP metadata stream. Because these are references rather than inline data, the catalog stays compact while still acting as the index to everything the document offers."
      ]
    },
    {
      "heading": "Viewing and navigation settings",
      "body": [
        "The catalog also carries hints about how a document should be presented when it first opens. /PageLayout suggests a layout such as single page or continuous scrolling, /PageMode can request that the outline or thumbnail panel be shown, and /ViewerPreferences groups finer display preferences. An /OpenAction entry can specify an action or destination to run when the document opens, for example jumping to a particular page.",
        "A /Version entry may also appear in the catalog. It lets a document declare a PDF version that overrides the one in the file header, which is useful when a file is updated incrementally to conform to a later version without rewriting the header. These settings are advisory: conforming readers are expected to honor them where practical, but they describe presentation intent rather than the document's content."
      ]
    },
    {
      "heading": "Why the catalog matters",
      "body": [
        "Centralizing document-wide structure in one root object gives a PDF a predictable shape. A reader always knows how to bootstrap: read the header to confirm it is a PDF, use startxref to find the cross-reference data, read the trailer to find /Root, and resolve /Root to the catalog. From that single object, the rest of the document unfolds through references, which is what allows features like fast web view and incremental updates to work without reorganizing the whole file.",
        "This central role is also why catalog problems are disproportionately serious. If the trailer's /Root is broken, or the catalog is missing its /Pages entry, a viewer can struggle to render anything even when the page and content objects are fine. Repair tools often work precisely by reconstructing the cross-reference data and a valid catalog so that the object graph becomes reachable again."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Object type",
      "value": "A dictionary object identified by /Type /Catalog"
    },
    {
      "label": "How it is found",
      "value": "Referenced by the /Root entry in the file trailer"
    },
    {
      "label": "Required entry",
      "value": "/Pages, pointing to the root of the page tree"
    },
    {
      "label": "Standardization",
      "value": "Defined as part of the PDF specification (ISO 32000)"
    }
  ],
  "specification": {
    "typicalUsage": "Root object of the PDF object graph, referenced by the trailer's /Root entry and pointing to the page tree and document-wide structures.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The document catalog holds the actual page content.",
      "truth": "It does not store content. Its /Pages entry references the page tree, and each page in that tree points to its own content streams."
    },
    {
      "claim": "The document's title and author are stored in the catalog.",
      "truth": "Those live in the document information dictionary and/or an XMP metadata stream. The catalog only references the XMP stream via /Metadata."
    },
    {
      "claim": "A PDF can have several active catalogs.",
      "truth": "Only one catalog is active per document, the one named by the trailer's /Root. Incremental updates may leave earlier objects behind, but only the referenced catalog is used."
    }
  ],
  "faq": [
    {
      "q": "How does a PDF reader locate the catalog?",
      "a": "It reads the trailer, finds the /Root entry, and resolves that indirect reference to the catalog object, after using startxref to locate the cross-reference table or stream."
    },
    {
      "q": "Is the document catalog required in every PDF?",
      "a": "Yes. A conforming PDF must have a catalog, and within it the /Pages entry (the root of the page tree) is required for the document to be usable."
    },
    {
      "q": "What is the difference between the catalog and the page tree?",
      "a": "The catalog is the single root of the whole document. The page tree is one of the structures it references, specifically the one that organizes the pages, reached through the catalog's /Pages entry."
    },
    {
      "q": "Does the catalog contain the document's metadata?",
      "a": "It can reference an XMP metadata stream through its /Metadata entry, but the metadata itself lives in that separate stream; the document information dictionary is referenced from the trailer rather than the catalog."
    },
    {
      "q": "What happens if the catalog is missing or damaged?",
      "a": "The document may fail to open even if its content objects are intact, because the reader cannot reach them. Repair tools typically rebuild the cross-reference data and a valid catalog to restore access."
    }
  ],
  "graph": {
    "parentConcept": "pdf-file-structure",
    "childConcepts": [
      "pdf-page-tree"
    ],
    "relatedConcepts": [
      "pdf-name-objects",
      "pdf-structure-tree",
      "acroform",
      "optional-content-groups",
      "named-destinations",
      "pdf-page-labels",
      "xmp-metadata",
      "pdf-incremental-updates"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      }
    ]
  },
  "seeAlso": [
    "pdf-file-structure",
    "pdf-trailer",
    "pdf-page-tree",
    "pdf-dictionary",
    "pdf-objects",
    "pdf-indirect-objects",
    "pdf-cross-reference-table",
    "pdf-outlines"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
