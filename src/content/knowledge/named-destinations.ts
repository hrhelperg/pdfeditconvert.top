import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "named-destinations",
  "h1": "Named Destinations in PDF",
  "cluster": "interactivity",
  "aliases": [
    "named destination",
    "named view",
    "destination name",
    "nameddest"
  ],
  "definition": "A named destination is a named reference that maps to a specific view (a page plus a zoom or fit setting) in a PDF, letting links, bookmarks, and actions point to a location by name.",
  "description": "Learn how named destinations let a PDF map a symbolic name to a page and view, so links, bookmarks, and cross-document actions can reliably target it.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When you click a bookmark in a PDF and the viewer jumps to a heading, something has to describe where \"there\" is. A destination is that description: it names a page and how the viewer should frame it — fit the whole page, fit the width, or scroll to an exact coordinate at a set zoom. A named destination wraps that description in a symbolic name so other parts of the document can refer to the location without repeating its details.",
    "The value of the name is indirection. Instead of a link storing a hard reference to a particular page object, it stores a name; the viewer looks that name up in a table the document maintains and follows it to the real target. If the document later changes — pages inserted, sections moved — only the lookup table needs updating, and every link that used the name keeps working.",
    "Named destinations sit at the center of PDF navigation. Bookmarks, link annotations, and go-to actions can all resolve to one, and remote go-to actions plus URL fragments can even reach a named destination inside a different file. That makes them a small but load-bearing piece of how PDFs stay navigable across edits and across documents."
  ],
  "sections": [
    {
      "heading": "What a destination actually specifies",
      "body": [
        "Every destination — named or not — resolves to a page plus a view. The view is chosen from a fixed set of forms. /Fit scales the page to fit the window; /FitH and /FitV fit the page width or height at a given horizontal or vertical position; /FitR fits a specific rectangle; /FitB and its variants fit the page's bounding box, the area actually containing content. The most detailed form, /XYZ, positions an exact point in the page's coordinate space at the top-left of the view and applies a specific zoom, so a link can land on a precise line rather than just the top of a page.",
        "A destination expressed directly is an explicit destination: an array whose first element identifies the page and whose remaining elements give the view. A named destination replaces that array with a single name; the array still exists, but it lives in the document's destination table and is reached through the name. Both forms describe the same kind of target — the difference is only whether the target is written inline or referenced by name."
      ]
    },
    {
      "heading": "How named destinations are stored",
      "body": [
        "There are two storage mechanisms, reflecting PDF's history. The older one, from PDF 1.1, is a /Dests dictionary in the document catalog whose keys are name objects and whose values are destinations. The one most files use today is a name tree: the document's name dictionary (the /Names entry in the catalog) has a /Dests entry that is a tree mapping string keys to destinations. A name tree is a balanced structure that keeps large numbers of named entries searchable without loading them all at once.",
        "In either mechanism the value for a name can be the destination array itself, or a small dictionary with a /D entry holding the array. The dictionary form leaves room for extra information; PDF 2.0, for example, allows a structure destination that ties the target to an element in the document's logical structure tree in addition to a page position. When a link or action names a destination, the viewer searches these tables to find the array and then frames the page accordingly."
      ]
    },
    {
      "heading": "Why naming instead of pointing",
      "body": [
        "Direct references are brittle. If a link stores a pointer to a specific page object and the document is rewritten — which PDF does often, through incremental updates and full rewrites — that pointer has to be maintained everywhere it appears. A name adds one layer of indirection: many links can share a single name, and the mapping from name to location is kept in one place. Editing tools that understand the destination table can move or renumber pages and repair a handful of table entries instead of every link.",
        "Naming also enables addressing across documents and from outside the file. A remote go-to (GoToR) action can reference a named destination in another PDF by name, which survives the target being re-paginated in a way a raw page number would not. Adobe's conventions for opening PDFs define a URL fragment, written as #nameddest=Name, that asks a viewer to open the file and jump to that named destination; support depends on the viewer and browser rather than being universal."
      ]
    },
    {
      "heading": "Where named destinations show up",
      "body": [
        "The most visible users are bookmarks — outline items in the navigation pane — which typically carry a destination that scrolls the page into view when clicked. Link annotations, the clickable regions inside page content, do the same, either by holding a destination directly or by invoking a go-to action that resolves one. Because these all funnel through the same destination model, a viewer treats \"jump here\" consistently whether the trigger is an outline entry, an in-page link, or a scripted action.",
        "Named destinations are optional — a document can use only explicit destinations and never register a name. They earn their place when the same location is referenced many times, when references must survive editing, or when other files or web links need to point into the document. In those cases the indirection is what keeps navigation from breaking."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Two parts",
      "value": "A destination pairs a target page with a view type — /XYZ, /Fit, /FitH, /FitV, /FitR, /FitB, /FitBH, or /FitBV."
    },
    {
      "label": "Where they live",
      "value": "In the /Dests name tree of the document name dictionary (PDF 1.2+), or a /Dests dictionary in the catalog (PDF 1.1)."
    },
    {
      "label": "Cross-document reach",
      "value": "GoToR actions and #nameddest= URL fragments can target a named destination by name, including one in a separate file."
    }
  ],
  "specification": {
    "introduced": "PDF 1.1 (catalog /Dests dictionary); string-keyed /Dests name tree added in PDF 1.2",
    "latestVersion": "PDF 2.0 (ISO 32000-2), which adds structure destinations",
    "iso": "ISO 32000-1, ISO 32000-2",
    "typicalUsage": "Targets for bookmarks, link annotations, and GoTo/GoToR actions",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A named destination is the same thing as a bookmark.",
      "truth": "A bookmark (outline item) is a navigation entry in the sidebar that points to a destination; the named destination is the target it resolves to, not the outline entry itself."
    },
    {
      "claim": "Named destinations and named actions are the same feature.",
      "truth": "Named actions (such as NextPage or FirstPage) are predefined viewer commands, while named destinations resolve to a view location. They are separate mechanisms that happen to share the word \"named.\""
    },
    {
      "claim": "#nameddest= and #page= do the same thing in a PDF URL.",
      "truth": "#page= jumps to a page number, while #nameddest= resolves a symbolic name through the document's destination table; they are different addressing schemes."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between an explicit destination and a named destination?",
      "a": "An explicit destination is an inline array holding the page and view directly. A named destination is a name that the viewer resolves through the document's destination table to find that same array, adding a layer of indirection."
    },
    {
      "q": "Can a named destination point to a location in a different PDF?",
      "a": "Yes. A remote go-to (GoToR) action, and Adobe's open-parameter conventions, can reference a named destination by name in a separate file; the name is resolved inside the target document when it opens."
    },
    {
      "q": "Do all PDF viewers support the #nameddest URL fragment?",
      "a": "Support varies. The fragment comes from Adobe's conventions for opening PDF files rather than a guaranteed behavior, so whether a browser or plug-in honors it depends on the viewer."
    },
    {
      "q": "What happens to named destinations when pages are merged or reordered?",
      "a": "Because references use names, tools that maintain the destination table can update it and keep links working. If the table is not updated, or two files being merged use colliding names, destinations can point to the wrong place or break."
    },
    {
      "q": "Are named-destination keys names or strings?",
      "a": "In the modern name-tree mechanism the keys are strings. The older catalog /Dests dictionary uses PDF name objects as keys. Both ultimately map to the same kind of destination value."
    }
  ],
  "graph": {
    "parentConcept": "pdf-interactive-features",
    "relatedConcepts": [
      "pdf-name-objects",
      "pdf-string-objects",
      "pdf-coordinate-system",
      "pdf-annotations"
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
    ]
  },
  "seeAlso": [
    "pdf-actions",
    "pdf-bookmarks",
    "pdf-outlines",
    "link-annotations",
    "pdf-interactive-features",
    "pdf-document-catalog",
    "pdf-page-tree"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
