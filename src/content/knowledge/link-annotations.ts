import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "link-annotations",
  "h1": "Link Annotations in PDF",
  "cluster": "interactivity",
  "aliases": [
    "Link annotation",
    "PDF hyperlink",
    "PDF link",
    "Link (Subtype /Link) annotation",
    "Hyperlink annotation"
  ],
  "definition": "A link annotation is a PDF annotation that turns a region of a page into a clickable area which jumps to a destination or triggers an action such as opening a URL.",
  "description": "How PDF link annotations define clickable regions with Rect and QuadPoints, and connect to destinations or actions like GoTo, GoToR and URI.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A link annotation is one of the standard annotation types defined for the PDF format. Like every annotation, it is associated with a single page, listed in that page's /Annots array, and occupies a rectangle in the page's coordinate space. What makes it a link is its behaviour: when a reader activates the region by clicking or tapping, the viewer either navigates to a destination or performs an action.",
    "Unlike the text or graphics it usually sits on top of, a link annotation carries no visible content of its own by default — it is essentially an invisible hotspot pinned to page coordinates. The blue, underlined styling people associate with links is drawn separately in the page's content stream; the annotation only supplies the interactive behaviour layered over it.",
    "Link annotations are how PDFs implement both web hyperlinks (through URI actions) and internal navigation such as cross-references, tables of contents and index entries (through destinations or GoTo actions). Because they are keyed to fixed coordinates rather than to the underlying text, they behave differently from links in reflowable formats like HTML."
  ],
  "sections": [
    {
      "heading": "The Anatomy of a Link Annotation",
      "body": [
        "A link annotation is a dictionary with /Type /Annot and /Subtype /Link. Its /Rect entry — four numbers giving the lower-left and upper-right corners in default user space — bounds the active area. The target is supplied by exactly one of two entries: /Dest, a destination, or /A, an action dictionary. The specification treats these as mutually exclusive, so a /Dest is not permitted when an /A entry is present.",
        "Optional entries govern appearance and feedback: the legacy /Border array (whose default is a one-unit solid border), the newer /BS border-style dictionary, and /H, the highlighting mode used when the region is pressed. The annotation becomes part of a page only by being referenced from that page object's /Annots array, which is why the same visual link can be present on the page yet do nothing if the annotation was never wired in."
      ]
    },
    {
      "heading": "Destinations Versus Actions",
      "body": [
        "A destination (/Dest) names a specific view of a page — a target page plus a fit or zoom specification such as XYZ with coordinates, Fit, or FitH. Destinations can be written inline as an explicit array or referenced by name as a named destination, which lets many links share one target and keeps them working even if pages are renumbered.",
        "The alternative is an action (/A), a small dictionary whose /S (subtype) selects the behaviour: GoTo for an in-document jump, GoToR to reach a destination in another PDF file, URI to resolve a web address, Launch to open an external file or application, and others including JavaScript. Web hyperlinks are URI actions that store the address as a string; a /Base entry in the document catalog's URI dictionary can supply a prefix so relative addresses resolve."
      ]
    },
    {
      "heading": "QuadPoints and Multi-Line Links",
      "body": [
        "A single /Rect describes one rectangle, but a hyperlink often wraps across two or more lines of text, forming an L-shaped or staircase region that no single rectangle fits cleanly. The /QuadPoints entry, added in PDF 1.6, addresses this: it lists one or more quadrilaterals — each defined by eight numbers — that make up the true active area, while /Rect is set to the bounding box that encloses them all.",
        "Viewers that understand QuadPoints restrict clicks to those quadrilaterals; viewers that do not fall back to the whole /Rect. This is what lets a link follow the exact shape of wrapped text instead of also covering the blank gap at the end of a short line."
      ]
    },
    {
      "heading": "Appearance, Borders, and Highlighting",
      "body": [
        "Link annotations were designed to be lightweight and often carry no appearance stream of their own. Any visible outline comes from the /Border array or the /BS border-style dictionary, and because most authors set the border width to zero, links commonly look invisible — they rely on the surrounding text styling drawn in the content stream to signal that something is clickable. The /H highlighting mode controls transient feedback when the region is pressed, with values for None, Invert (invert the rectangle), Outline (invert the border) and Push (show a down appearance).",
        "Stricter profiles have tightened this area. PDF 2.0 and archival profiles such as PDF/A push toward every annotation carrying an explicit appearance stream so that rendering is deterministic across viewers rather than left to each application's interpretation of the border settings."
      ]
    },
    {
      "heading": "Links in Tagged PDF and Accessibility",
      "body": [
        "Because a link annotation is anchored to coordinates rather than to the text it covers, it is not automatically connected to the document's logical structure. In a tagged PDF, a link is expressed as a Link structure element that groups the affected text with an object reference (OBJR) pointing to the annotation, so assistive technology can announce the link and encounter it in the correct reading order.",
        "The annotation's /Contents entry can hold a human-readable description of the target. These associations are central to accessibility conformance such as PDF/UA, where links that exist only as bare coordinate hotspots — with no structure element and no description — are a common shortcoming."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Annotation subtype",
      "value": "/Link"
    },
    {
      "label": "Clickable region",
      "value": "Defined by /Rect, refined by /QuadPoints"
    },
    {
      "label": "Target",
      "value": "A destination (/Dest) or an action (/A) — not both"
    },
    {
      "label": "Standardized in",
      "value": "ISO 32000 (the PDF specification)"
    }
  ],
  "specification": {
    "typicalUsage": "Embedding web hyperlinks via URI actions, and in-document navigation such as tables of contents, cross-references and index entries via destinations and GoTo actions.",
    "relatedStandards": [
      "iso-32000",
      "pdf-ua"
    ],
    "iso": "ISO 32000 (parts 1 and 2)",
    "introduced": "Present since the early Adobe PDF specifications; carried into ISO 32000.",
    "latestVersion": "ISO 32000-2 (PDF 2.0)"
  },
  "misconceptions": [
    {
      "claim": "A link annotation stores the text or URL it sits on, so editing the text updates the link.",
      "truth": "The visible text lives in the page content stream; the annotation is a separate object keyed to coordinates. If the text is edited or reflowed, the annotation's rectangle does not move with it."
    },
    {
      "claim": "Link annotations and bookmarks are the same feature.",
      "truth": "Bookmarks are outline items in the document's outline tree; link annotations live on pages. Both can use destinations or actions, but they are distinct structures serving different navigation surfaces."
    },
    {
      "claim": "Blue underlined text in a PDF always means there is a working link.",
      "truth": "Styling is drawn independently of behaviour. A link works only if a Link annotation covers that region, and an invisible working link can exist with no special styling at all."
    }
  ],
  "faq": [
    {
      "q": "How is a link annotation different from a widget annotation?",
      "a": "Widget annotations are the on-page visual representation of interactive form fields such as buttons and text boxes; link annotations exist purely for navigation and actions. Both can carry an /A action, but a widget is tied to a form field in the AcroForm while a link is not."
    },
    {
      "q": "Can one link point to a page in a different PDF file?",
      "a": "Yes. A GoToR (go-to-remote) action names an external file plus a destination within it, so activating the link opens that other document at the specified page or view. A related GoToE action targets a file embedded inside the current PDF."
    },
    {
      "q": "How does clicking a link open a website?",
      "a": "The link's /A action has subtype URI and stores the address as a string, which the viewer hands to the operating system or browser. No live connection is stored in the PDF — only the text of the address."
    },
    {
      "q": "Why does a link look right but do nothing when clicked?",
      "a": "The coloured, underlined appearance is just drawn text; the interactive behaviour requires a Link annotation over that region. If the annotation was never created, was removed, or its /Rect does not line up with the text, clicking has no effect."
    },
    {
      "q": "Do link annotations appear in a PDF's comments or markup list?",
      "a": "No. Links are standard annotations but not markup annotations, so they carry no author or date metadata and no popup, and they do not show up in the review or comments panel the way highlights and sticky notes do."
    }
  ],
  "graph": {
    "parentConcept": "pdf-annotations",
    "relatedConcepts": [
      "pdf-outlines",
      "javascript-in-pdf",
      "pdf-document-catalog",
      "reading-order",
      "tagged-pdf"
    ],
    "relatedStandards": [
      "pdf-ua"
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
    "pdf-actions",
    "named-destinations",
    "pdf-bookmarks",
    "widget-annotations",
    "appearance-streams",
    "markup-annotations"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
