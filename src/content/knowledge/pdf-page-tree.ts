import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-page-tree",
  "h1": "The PDF Page Tree",
  "cluster": "foundations",
  "aliases": [
    "Pages tree",
    "PDF Pages tree",
    "page tree node hierarchy",
    "the /Pages tree",
    "document page tree"
  ],
  "definition": "The PDF page tree is the hierarchical structure, rooted from the document catalog, that references every page of a document and fixes their order through Pages nodes and Page leaf objects.",
  "description": "The PDF page tree is the branching structure that stores and orders a document's pages using Pages nodes, Kids arrays, Count values and inherited attributes.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF presents its content as a sequence of pages, but internally those pages are not kept as a simple list. They are organized into a hierarchy called the page tree: a branching arrangement of dictionary objects that a viewer walks to locate, count, and order the pages of a document.",
    "The tree has a single root, referenced from the document catalog's /Pages entry. From there it fans out through intermediate nodes down to the individual page objects that actually describe each displayed or printed page. This design lets a reader jump straight to any page and lets tools add or remove pages without rewriting the whole file.",
    "Understanding the page tree explains a lot of otherwise puzzling PDF behavior: how a two-thousand-page file opens instantly at page one, why a page can pick up a size or rotation it never explicitly declares, and what actually changes when you reorder or extract pages."
  ],
  "sections": [
    {
      "heading": "How the Page Tree Is Built",
      "body": [
        "The page tree is made of two kinds of dictionary objects. Intermediate nodes, identified by /Type /Pages, group other nodes together; each carries a /Kids array listing its children (which may themselves be intermediate nodes or page objects), a /Count giving the number of page (leaf) objects beneath it, and a /Parent reference back up the tree. Leaf nodes, identified by /Type /Page, are the actual pages; each also points back to its parent and holds the entries that describe the page's content, size, and resources. The root is the one intermediate node with no /Parent.",
        "Because every node except the root records its parent and every intermediate node lists its kids, the structure can be walked in either direction. The /Count value is what makes it efficient: a viewer can read a node's Count to know how many pages lie below it without descending into every branch, which is central to fast page lookup in large documents."
      ]
    },
    {
      "heading": "From the Catalog to the Leaves",
      "body": [
        "The page tree is not reached directly. A viewer starts at the document catalog, the root of the PDF's object graph, and follows its required /Pages entry to the root node of the tree. Traversing the tree depth-first, visiting each /Kids array in order, yields the page objects in exactly the sequence the document presents them. In other words, page order is defined by the left-to-right order of leaves in the tree, not by object numbers or by physical position in the file.",
        "This separation between logical order and physical storage is deliberate. The bytes of page ten might sit near the front of the file and page two near the end; the page tree, not the byte layout, decides what the reader sees as page two. It also means editing tools reorder pages by manipulating the /Kids arrays and /Count values rather than shuffling raw bytes."
      ]
    },
    {
      "heading": "Inheritable Page Attributes",
      "body": [
        "A small set of page properties may be declared on an intermediate node and inherited by every page beneath it that does not specify its own value. These inheritable attributes are the page's resource dictionary (/Resources), its media box (/MediaBox), its crop box (/CropBox), and its rotation (/Rotate). A producer can set a common page size once high in the tree and let many pages inherit it; when a page declares its own value, that value overrides the inherited one.",
        "Inheritance keeps files smaller and more consistent, but it also explains a frequent source of confusion: a page object can omit /MediaBox entirely and still have a well-defined size, because the value comes from an ancestor. Software that reads or rewrites pages has to resolve these inherited values by walking up the tree, which is one reason extracting a single page correctly involves more than copying its dictionary."
      ]
    },
    {
      "heading": "Balancing the Tree for Performance",
      "body": [
        "Nothing in the format dictates a particular shape. A valid page tree could be a single intermediate node with thousands of kids, or a deep chain. In practice, producers build reasonably balanced trees, grouping pages into modestly sized subtrees, so that any page can be located in a few steps instead of by scanning one enormous flat list. The /Count entries let a viewer navigate quickly: to reach the Nth page it compares N against the running totals of each subtree's Count and descends only into the branch that contains it.",
        "This pays off in large documents and in Linearized (Fast Web View) PDFs, where a viewer may need to show one page while the rest is still downloading. A balanced tree with accurate Count values makes that random access cheap. It is also what allows inserting or deleting a page to touch only a few nodes, updating a /Kids array and the /Count of its ancestors, rather than renumbering the whole document."
      ]
    },
    {
      "heading": "How the Page Tree Differs From Other PDF Trees",
      "body": [
        "PDF uses tree structures for several unrelated purposes, and they are easy to conflate. The page tree holds the actual pages. The outline tree (bookmarks) is a separate navigation aid that points into pages but does not contain them. The logical structure tree of a tagged PDF describes reading order and semantics for accessibility, again referencing content rather than storing pages. A single document can have all three at once.",
        "Keeping them distinct matters when editing. Reordering entries in the page tree changes which page comes next; it does not automatically rewrite bookmarks that target those pages, which is why moving pages can leave outline links aimed at the wrong place unless a tool updates them as well."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Entry point",
      "value": "The document catalog's required /Pages entry references the root node of the page tree."
    },
    {
      "label": "Node types",
      "value": "Intermediate nodes use /Type /Pages; page (leaf) objects use /Type /Page."
    },
    {
      "label": "Total pages",
      "value": "The root node's /Count value equals the document's total number of pages."
    },
    {
      "label": "Inheritable attributes",
      "value": "/Resources, /MediaBox, /CropBox and /Rotate can be inherited from an ancestor node."
    }
  ],
  "specification": {
    "iso": "ISO 32000-1 / ISO 32000-2",
    "introduced": "Present since PDF 1.0 (early 1990s)",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Every PDF references its pages through the page tree, reached from the /Pages entry of the document catalog.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The page tree is the same thing as a PDF's bookmarks.",
      "truth": "Bookmarks form the outline tree, a separate navigation structure. It points into pages but does not contain them; the page tree is what actually holds the pages."
    },
    {
      "claim": "Pages are stored as a flat list in the order they appear in the file.",
      "truth": "Pages are organized in a tree of nodes, and their order is defined by depth-first traversal of the /Kids arrays, not by object numbers or physical byte order."
    },
    {
      "claim": "A node's /Count is the number of items in its /Kids array.",
      "truth": "/Count is the number of leaf page objects among all descendants of the node, which can be far larger than the number of immediate kids."
    }
  ],
  "faq": [
    {
      "q": "How does a PDF viewer find a specific page number quickly?",
      "a": "It walks the tree from the root and uses each node's /Count to skip over whole subtrees that do not contain the target page, descending only into the branch whose running total spans that page's position."
    },
    {
      "q": "Where is a PDF's total page count stored?",
      "a": "In the /Count entry of the root node of the page tree, the intermediate node referenced by the catalog's /Pages entry."
    },
    {
      "q": "Can a page have a size or rotation it never declares itself?",
      "a": "Yes. /MediaBox, /CropBox, /Rotate and /Resources are inheritable, so a page can pick up any of these values from an ancestor node when it does not specify its own."
    },
    {
      "q": "Does the order of pages depend on their object numbers?",
      "a": "No. Page order comes from the traversal order of the /Kids arrays. Object numbers and where objects sit in the file have no effect on which page appears first."
    },
    {
      "q": "What changes in the page tree when you reorder or delete pages?",
      "a": "A tool rewrites the affected /Kids arrays and updates the /Count values of the ancestor nodes; the individual page objects and their content usually stay the same."
    }
  ],
  "graph": {
    "parentConcept": "pdf-document-catalog",
    "relatedConcepts": [
      "pdf-page-boxes",
      "pdf-page-geometry",
      "pdf-object-streams",
      "pdf-page-labels",
      "linearized-pdf"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "Reorder PDF Pages — Rearrange Pages in Your Browser (Free, No Upload)",
        "path": "/reorder-pdf-pages"
      },
      {
        "label": "Extract PDF Pages — Save Selected Pages as a New PDF (Free, No Upload)",
        "path": "/extract-pdf-pages"
      },
      {
        "label": "Merge PDF — Combine PDFs in Your Browser (Free, No Upload)",
        "path": "/merge-pdf"
      },
      {
        "label": "Split PDF — Extract Pages in Your Browser (Free, No Upload)",
        "path": "/split-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Reorder Pages in a PDF (Free, In Browser)",
        "path": "/guides/how-to-reorder-pdf-pages"
      },
      {
        "label": "How to Extract Pages From a PDF (Free, No Upload)",
        "path": "/guides/how-to-extract-pages-from-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-document-catalog",
    "pdf-file-structure",
    "pdf-dictionary",
    "pdf-array-objects",
    "pdf-indirect-objects",
    "mediabox",
    "pdf-page-rotation",
    "pdf-outlines"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
