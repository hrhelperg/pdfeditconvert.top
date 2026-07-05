import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-bookmarks",
  "h1": "PDF Bookmarks",
  "cluster": "interactivity",
  "aliases": [
    "Document outline",
    "Outline items",
    "PDF outline",
    "Bookmarks pane"
  ],
  "definition": "PDF bookmarks are hierarchical navigation entries stored inside a PDF as its document outline, letting a reader jump straight to a specific page and view within the file.",
  "description": "How PDF bookmarks work: the document outline tree, how each entry points to a page or action, and how bookmarks differ from in-page links.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Open a long PDF in most viewers and you will often find a side panel listing the document's sections as a clickable, sometimes nested list. Those entries are PDF bookmarks: shortcuts that jump the reader to a chosen place in the file.",
    "In the PDF specification the feature is not actually called bookmarks. It is the document outline, made up of outline items. The two terms describe the same thing: bookmarks are what readers see, and the outline is how the structure is stored inside the file.",
    "This page explains how the outline tree is organized, how each bookmark knows which page and view to open, and how bookmarks differ from the in-page links, thumbnails, and page labels they are often confused with."
  ],
  "sections": [
    {
      "heading": "Bookmarks and the document outline",
      "body": [
        "In the PDF specification, the feature users call bookmarks is the document outline, a collection of outline items. A viewer typically renders them in a side navigation pane as a clickable, often nested list. The outline is optional: a PDF may have none, a single flat list, or a deep hierarchy of sections and subsections.",
        "The outline is reached from the document catalog through its Outlines entry, which points to the outline dictionary that serves as the root of the tree. Because the outline lives inside the file, the same bookmarks appear for everyone who opens the document, and they travel with it when the file is copied or shared."
      ]
    },
    {
      "heading": "How the outline tree is built",
      "body": [
        "Each outline item is a dictionary. Its Title entry holds the label shown to the reader. The tree itself is assembled from references between items: Parent points up to the containing item, First and Last point to an item's first and last child, and Prev and Next chain siblings into an ordered list. Together these let a viewer walk the hierarchy in order and render the indentation you see in the panel.",
        "An item that has children can carry a Count entry describing how many descendants would be visible when it is expanded, and the sign of that value conventionally signals whether the item is shown open or collapsed. Optional styling entries let an item specify a color or bold and italic text in viewers that support them, though these are cosmetic and do not affect navigation."
      ]
    },
    {
      "heading": "Where a bookmark takes you",
      "body": [
        "A bookmark points to a location using either a destination or an action. A destination commonly encodes a target page together with a view, such as a particular zoom level and scroll position, or a fit-to-page instruction, so a bookmark can restore not just the page but how it is framed on screen. Destinations may be written explicitly or refer to a named destination, an indirection that lets many bookmarks share one stable target even if the page later moves.",
        "Instead of a plain destination, a bookmark can carry an action. A go-to action jumps within the same document, while other action types can open a URL, move to another file, or perform other behaviors. This overlap is why bookmarks are considered part of PDF's interactive navigation machinery, alongside link annotations and named destinations."
      ]
    },
    {
      "heading": "Bookmarks compared with other navigation",
      "body": [
        "Bookmarks are easy to confuse with link annotations, page thumbnails, and page labels, but each plays a different role. Link annotations are clickable regions placed on the page content itself, whereas the outline is a document-wide panel independent of any single page. Thumbnails give a visual page index, and page labels control the page numbers a viewer displays. None of these is the outline, though a well-built document may combine several of them.",
        "For long documents, bookmarks are a practical navigation aid, and accessibility guidance such as WCAG includes a technique that describes providing bookmarks to help readers move through lengthy PDFs. It is worth noting that the outline is separate from the tagged logical structure that assistive technology relies on for reading order; bookmarks improve navigation but are not a substitute for proper tagging."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Specification term",
      "value": "Outline items forming the document outline"
    },
    {
      "label": "Where it is stored",
      "value": "The Outlines entry in the document catalog"
    },
    {
      "label": "Tree structure",
      "value": "Parent, First, Last, Prev, and Next references"
    },
    {
      "label": "Bookmark target",
      "value": "A destination (page plus view) or an action"
    }
  ],
  "specification": {
    "typicalUsage": "Reader navigation of long or multi-section documents",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF bookmarks are like the bookmarks I save in my web browser.",
      "truth": "They are authored into the document by its creator and stored inside the file, not saved per reader, so everyone who opens the file sees the same set of bookmarks."
    },
    {
      "claim": "Bookmarks and in-page links are the same thing.",
      "truth": "Bookmarks live in the outline navigation pane and form a document-wide tree, while link annotations are clickable regions placed on the page content; they are separate mechanisms."
    },
    {
      "claim": "A document's heading structure automatically becomes its bookmarks.",
      "truth": "The outline and the tagged logical structure are separate data; some tools can generate bookmarks from headings or tags, but the PDF format does not create them on its own."
    }
  ],
  "faq": [
    {
      "q": "Are bookmarks stored inside the PDF file?",
      "a": "Yes. They live in the document outline, referenced by the catalog's Outlines entry, so they travel with the file when it is copied or shared."
    },
    {
      "q": "Do bookmarks control the zoom and position, or just the page?",
      "a": "A bookmark's destination can specify a page plus a view, such as a zoom level and scroll position, or simply a fit-to-page instruction, depending on how it was created."
    },
    {
      "q": "Can bookmarks be nested?",
      "a": "Yes. The outline is a tree, so items can have child items, which viewers show as expandable and collapsible entries."
    },
    {
      "q": "Are bookmarks generated automatically from headings?",
      "a": "Not inherently. Some authoring tools can build them from headings, paragraph styles, or the tagged structure, but the format itself does not create bookmarks automatically."
    },
    {
      "q": "Can a bookmark do something other than jump to a page?",
      "a": "Yes. A bookmark can carry an action, such as opening a URL or moving to another file, instead of a simple go-to destination."
    }
  ],
  "graph": {
    "parentConcept": "pdf-interactive-features",
    "childConcepts": [
      "pdf-outlines"
    ],
    "relatedConcepts": [
      "pdf-page-tree",
      "pdf-dictionary",
      "pdf-annotations",
      "reading-order"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Organize PDF Files — A Practical Workflow",
        "path": "/guides/how-to-organize-pdf-files"
      },
      {
        "label": "How to Manage PDFs on Your Phone",
        "path": "/guides/how-to-manage-pdfs-on-phone"
      }
    ]
  },
  "seeAlso": [
    "pdf-outlines",
    "named-destinations",
    "pdf-actions",
    "pdf-document-catalog",
    "link-annotations",
    "pdf-interactive-features",
    "pdf-page-labels",
    "pdf-thumbnails"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
