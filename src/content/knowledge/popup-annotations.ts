import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "popup-annotations",
  "h1": "Popup Annotations in PDF",
  "cluster": "interactivity",
  "aliases": [
    "Pop-up annotation",
    "Popup note window",
    "/Popup annotation",
    "PDF comment popup"
  ],
  "definition": "A popup annotation is a PDF object that defines the floating window used to display and edit the comment text of an associated markup annotation, such as a sticky note or highlight.",
  "description": "Popup annotations are the subordinate window objects that display a markup annotation's comment text in PDF, controlled by an Open flag and a Rect.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "In PDF, comments and review markup are stored as annotations, and most of the ones people actually write - sticky notes, highlights, drawings - can carry a text comment. A popup annotation is the small floating window that shows that comment. It is a distinct object in the file with its own subtype, /Popup, and it exists to give the comment text a defined place to appear on screen along with a state that says whether it is open or closed.",
    "A popup never stands on its own. It is always attached to a parent markup annotation through a /Parent reference, and the parent points back to it through a /Popup entry. The visible thing you click on the page - a note icon, a highlighted phrase - is the parent; the popup is the window that opens beside it. This separation lets a highlight run across a line of text while its comment floats in a resizable box off to the side.",
    "Because popups are subordinate helpers rather than primary markup, the PDF viewer, not the file, is responsible for drawing the window. The file supplies only the essentials: which annotation it belongs to, where the window sits, and whether it should open automatically. Understanding that division explains a great deal of popup behavior, including why popups usually do not print and why they carry almost no visual styling of their own."
  ],
  "sections": [
    {
      "heading": "What a Popup Annotation Represents",
      "body": [
        "A popup annotation is identified by /Subtype /Popup in its annotation dictionary, and like every annotation it lives in a page's /Annots array as a separate, usually indirect, object. Its job is narrow: it represents the on-page window in which a markup annotation's comment text is shown and edited. It is not itself a markup annotation - it does not carry an author, a creation date, or comment text that a reader treats as its own content.",
        "Popup annotations were introduced in PDF 1.3, when the format formalized a richer review and commenting model, and they are part of the annotation machinery described in ISO 32000, the standard that superseded Adobe's original PDF specification. Because a popup only makes sense next to a comment-bearing annotation, a file that contains no markup annotations contains no popups."
      ]
    },
    {
      "heading": "The Parent Relationship",
      "body": [
        "Every popup is bound to exactly one markup annotation, and the link is expressed twice. The popup dictionary has a /Parent entry that references the markup annotation, and that markup annotation has a /Popup entry that references the popup. This two-way pairing lets a viewer move between the marker and its window, and it means the two objects are managed together, so deleting or moving the parent normally takes the popup with it. Text (sticky-note) annotations are the most familiar example, but line, shape, ink, stamp, and text-markup annotations such as highlights and underlines can all own a popup.",
        "Because the comment itself is stored on the parent - typically in its /Contents string, with the author label in /T and timestamps in /CreationDate - the popup window displays information it does not own. That is why editing a comment updates the parent annotation rather than the popup, and why a popup with no parent would have nothing to show. The arrangement keeps a single source of truth for the comment while letting its display window be positioned and toggled independently."
      ]
    },
    {
      "heading": "Open State and Window Geometry",
      "body": [
        "Two entries carry most of a popup's own data. The /Rect array gives the position and size of the window, in default user-space coordinates, for when it is displayed open, and the /Open boolean says whether the window should appear expanded or collapsed when the page is first shown. A closed popup leaves only its parent's marker visible; opening it reveals the comment inside the rectangle the file specifies. A viewer may let a user drag or resize the window, but the stored /Rect records the intended default.",
        "A popup annotation normally has no appearance stream of its own. Where most annotations describe how they look through an /AP entry, the popup deliberately omits one and leaves the window's borders, background, title bar, and text layout to the conforming reader. This is why the same commented PDF can look slightly different from one application to another: each renders the popup frame in its own house style around the same underlying comment."
      ]
    },
    {
      "heading": "How Popups Behave in Viewers",
      "body": [
        "In practice a popup is a screen-oriented convenience. Readers commonly generate the window on demand and treat it as part of the review interface rather than the printed page, so opening a note, editing it, and closing it changes the /Open flag and the parent's contents but not the page's static content streams. Whether a popup prints or is exported is governed by annotation flags and viewer settings rather than by anything intrinsic to the /Popup subtype, and many workflows keep comment windows out of printed output on purpose.",
        "This behavior matters when a PDF is flattened or shared. Flattening review comments merges or discards the annotation layer, so popups and their parents may be baked into the page or removed entirely, and either way the interactive open and close behavior disappears. If comments need to survive round-trips between applications, they should be kept as live annotations rather than flattened, since only then do the parent-and-popup pairs remain editable."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Annotation subtype",
      "value": "/Popup"
    },
    {
      "label": "Key dictionary entries",
      "value": "/Parent, /Open, /Rect"
    },
    {
      "label": "Relationship",
      "value": "Subordinate to a parent markup annotation"
    },
    {
      "label": "Introduced",
      "value": "PDF 1.3"
    }
  ],
  "specification": {
    "introduced": "PDF 1.3",
    "iso": "ISO 32000-1 (2008); ISO 32000-2 (2017)",
    "typicalUsage": "Defines the pop-up comment window paired with a markup annotation such as a sticky note or highlight.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "The popup annotation is the sticky-note icon you click on the page.",
      "truth": "The clickable marker is the parent markup annotation, such as a Text annotation; the Popup is the separate window that displays that annotation's comment, linked through the parent's /Popup entry."
    },
    {
      "claim": "The comment text is stored in the popup annotation.",
      "truth": "The comment lives on the parent markup annotation, usually in its /Contents string; the popup mainly records where the window sits (/Rect) and whether it opens automatically (/Open)."
    },
    {
      "claim": "A popup can exist on its own anywhere in the document.",
      "truth": "A popup is always subordinate to one parent markup annotation via /Parent, and without a parent it has no comment to display."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a Text annotation and a Popup annotation?",
      "a": "The Text annotation is the on-page sticky-note marker that stores the comment; the Popup annotation is the window associated with it that shows and edits that comment. They are linked by /Parent and /Popup references."
    },
    {
      "q": "Do popup annotations appear when a PDF is printed?",
      "a": "Usually not. Viewers commonly treat the popup window as an on-screen review element, and whether it prints depends on annotation flags and viewer settings rather than on the /Popup subtype itself."
    },
    {
      "q": "Which annotations can have a popup?",
      "a": "Markup annotations - such as Text, FreeText, Line, Square, Circle, Ink, Stamp, and text-markup types like Highlight and Underline - can own a popup. Non-markup annotations such as Link and Widget do not use them."
    },
    {
      "q": "What controls whether a note opens automatically?",
      "a": "The /Open boolean in the popup dictionary. When true, the window is shown expanded on the page; when false, only the parent's marker is visible until the reader opens it."
    },
    {
      "q": "Does a popup annotation have its own appearance stream?",
      "a": "Typically no. The popup omits an /AP entry and lets the conforming reader draw the window frame, which is why popup styling can vary between applications."
    }
  ],
  "graph": {
    "parentConcept": "pdf-annotations",
    "relatedConcepts": [
      "pdf-dictionary",
      "pdf-indirect-objects",
      "pdf-actions"
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
        "label": "How to Annotate a PDF on Mobile",
        "path": "/guides/how-to-annotate-pdf-on-mobile"
      }
    ]
  },
  "seeAlso": [
    "pdf-annotations",
    "annotation-types",
    "markup-annotations",
    "widget-annotations",
    "link-annotations",
    "appearance-streams",
    "pdf-interactive-features"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
