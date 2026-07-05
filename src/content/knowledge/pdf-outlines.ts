import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-outlines",
  "h1": "The PDF Outline Tree",
  "cluster": "interactivity",
  "aliases": [
    "Document outline",
    "Outlines",
    "Bookmark tree",
    "Outline hierarchy",
    "Outline items"
  ],
  "definition": "The PDF outline tree is a hierarchy of outline items — the entries shown as bookmarks — that let readers jump to specific locations in a document through a viewer's navigation panel.",
  "description": "How the PDF outline tree works: outline items linked into a hierarchy, each pointing to a destination or action, surfaced as bookmarks in the viewer's side panel.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Most substantial PDFs offer a navigation panel of clickable headings that jump to chapters, sections, or figures. Readers usually call these \"bookmarks,\" but inside the file they are stored as a single connected structure called the document outline, or outline tree. The tree is what a viewer walks to build the panel you see.",
    "The outline tree is an optional navigation aid: a PDF works perfectly well without one, and many files have none. When present, it is reached from the document catalog and is built from small dictionaries — one per visible entry — wired together into a hierarchy of parents, children, and siblings. Each entry carries a title and a target that tells the viewer where to move when it is clicked.",
    "Understanding the outline tree clarifies why bookmarks behave the way they do: why they can be nested and collapsed, why they can point to a precise zoom level on a page, and why they are a completely separate thing from a PDF's reading order or its page tree."
  ],
  "sections": [
    {
      "heading": "How the outline tree is structured",
      "body": [
        "The tree starts at the document catalog, which may contain an entry that points to the root outline dictionary. That root records the first and last top-level entries and a running total of how many items are currently visible. Everything below it is made of outline item dictionaries, one for each line you would see in a bookmarks panel.",
        "The items are not stored as a simple nested list. At each level, sibling items form a doubly linked list: each item names the next and previous item beside it, while the first and last children of a parent are reached through dedicated pointers, and every item points back up to its parent. This first/last, next/previous, parent arrangement is what makes the outline a genuine tree that a viewer can walk in any direction to render nesting and indentation."
      ]
    },
    {
      "heading": "What each outline item points to",
      "body": [
        "An outline item carries a human-readable title — a text string such as a chapter name — and a target that says what to do when the reader activates it. The most common target is a destination: a reference to a specific page together with a view specification, such as fitting the whole page, fitting its width, or scrolling to precise coordinates at a chosen zoom. This is why a well-made bookmark can land you not just on the right page but at the right heading, at a sensible zoom.",
        "Instead of a direct destination, an item can carry an action, which is more general. A GoTo action moves within the same document, while other actions can open a different file at a given page or follow a URL. Items may also reference a named destination — a label defined elsewhere in the document — so that the physical page a bookmark targets can be changed in one place without editing every item that points to it."
      ]
    },
    {
      "heading": "Open, closed, and item styling",
      "body": [
        "Because the tree can be deep, each item records whether it is currently expanded or collapsed. This is encoded in a count value on the item: a positive number means the item is open and its children are shown, while a negative number means it is collapsed. The magnitude of that number reflects how many descendant items are affected, which lets a viewer lay out the panel without walking the entire subtree first.",
        "Beyond structure, later versions of the PDF format added light presentation options to outline items, so an entry can request bold or italic text and a display color. These are hints for the navigation panel only; they do not change anything about the page content the item points to, and viewers are free to render them modestly or ignore them."
      ]
    },
    {
      "heading": "Outlines versus the page tree and structure tree",
      "body": [
        "A PDF actually contains more than one tree, and they are easy to confuse. The page tree is the required structure that holds the pages themselves in order; the outline tree is an optional overlay that merely points into those pages for navigation. Deleting the outline removes the bookmarks but leaves every page intact.",
        "The outline is also distinct from the logical structure tree used in tagged PDF. That structure tree defines reading order and the document's semantic hierarchy for assistive technology, and it can be far more detailed than the handful of entries an author chooses to expose as bookmarks. A file can have a rich structure tree and no outline, or a tidy outline and no tags at all — they serve different jobs and are maintained independently."
      ]
    },
    {
      "heading": "How outlines are created and preserved",
      "body": [
        "Outlines are stored explicitly in the file, not derived on the fly, so something has to author them. Word processors and layout tools commonly generate an outline from heading styles when they export to PDF, and PDF editors let you add, rename, reorder, or nest entries by hand. Either way, the result is a fixed set of item dictionaries baked into the document.",
        "Because entries point at specific pages, operations that rearrange pages can disturb the outline. Careful tools rebuild or renumber the destinations when you merge, split, or reorder pages so bookmarks keep landing in the right place; less careful ones can leave entries pointing at the wrong page or drop the outline entirely. This is worth checking after any structural edit to a bookmarked document."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Entry point",
      "value": "The root outline dictionary is reached from an optional entry in the document catalog."
    },
    {
      "label": "Wiring",
      "value": "Sibling items form a doubly linked list; parents point to first and last children, and items point back to their parent."
    },
    {
      "label": "Targets",
      "value": "An item moves the reader via a destination (a page plus a view) or a more general action."
    },
    {
      "label": "Open/closed state",
      "value": "A positive count marks an expanded item; a negative count marks a collapsed one."
    }
  ],
  "misconceptions": [
    {
      "claim": "Bookmarks and the outline tree are two separate PDF features.",
      "truth": "They are the same thing. \"Bookmark\" is the viewer's term for an outline item; the outline tree is how those items are stored in the file."
    },
    {
      "claim": "A PDF builds its outline automatically from the headings on the page.",
      "truth": "The outline is stored explicitly as its own set of dictionaries. Authoring tools may generate it from heading styles at export time, but the finished PDF holds no live link back to heading text."
    },
    {
      "claim": "The outline tree defines the document's reading order for screen readers.",
      "truth": "Reading order lives in the logical structure tree of a tagged PDF. The outline is only a navigation aid and is maintained separately from accessibility structure."
    }
  ],
  "faq": [
    {
      "q": "Where in the file is the outline stored?",
      "a": "The document catalog can hold an entry pointing to the root outline dictionary, and every visible bookmark is an outline item dictionary hanging off that root through parent, child, and sibling references."
    },
    {
      "q": "Can a bookmark point somewhere other than a page in the same document?",
      "a": "Yes. Instead of a same-document destination, an outline item can carry an action that opens another file at a given page or follows a URL, though in-document navigation is the most common use."
    },
    {
      "q": "Do all PDFs have an outline tree?",
      "a": "No. The outline is optional. Short documents and exported files often have none, and their absence simply means the viewer shows an empty bookmarks panel."
    },
    {
      "q": "What happens to bookmarks when I merge, split, or reorder pages?",
      "a": "It depends on the tool. Careful editors rebuild the destinations so entries still land correctly, while others may leave bookmarks pointing at the wrong page or discard the outline, so it is worth verifying afterward."
    },
    {
      "q": "Can outline entries be styled?",
      "a": "Later versions of the PDF format let an item request bold or italic text and a display color. These are hints for the navigation panel and do not alter the page content the entry targets."
    }
  ],
  "graph": {
    "parentConcept": "pdf-bookmarks",
    "relatedConcepts": [
      "pdf-dictionary",
      "pdf-indirect-objects",
      "pdf-string-objects",
      "reading-order"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "Merge PDF — Combine PDFs in Your Browser (Free, No Upload)",
        "path": "/merge-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Organize PDF Files — A Practical Workflow",
        "path": "/guides/how-to-organize-pdf-files"
      }
    ]
  },
  "seeAlso": [
    "pdf-bookmarks",
    "named-destinations",
    "pdf-actions",
    "pdf-document-catalog",
    "pdf-interactive-features",
    "link-annotations",
    "pdf-structure-tree",
    "pdf-page-tree"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
