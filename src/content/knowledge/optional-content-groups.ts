import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "optional-content-groups",
  "h1": "Optional Content Groups (PDF Layers)",
  "cluster": "print-geometry",
  "aliases": [
    "Optional content",
    "OCG",
    "PDF layers",
    "Layers",
    "OCGs"
  ],
  "definition": "Optional content groups (OCGs), usually called PDF layers, are named sets of page content whose visibility a PDF viewer can independently turn on or off.",
  "description": "Optional content groups (OCGs) let one PDF page hold layers of content a viewer can show or hide, and control how they behave when printed or exported.",
  "searchIntent": "printing",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Most PDF pages present a single, flat sheet of content: everything drawn on the page is always visible. Optional content changes that by letting a document define named groups of content that a viewer can switch on or off. In Adobe Acrobat and many other tools these groups appear in a \"Layers\" panel, which is why the feature is almost always called PDF layers even though the underlying objects are called optional content groups (OCGs).",
    "Optional content was added to the format in PDF 1.5 and is part of the ISO 32000 specification that PDF later became. It was designed for documents where the same page usefully carries several overlays: a map with roads, labels, and terrain on separate layers; a technical drawing with dimensions that can be hidden; a multilingual flyer where each language is its own layer; or a print file that carries a die line or varnish layer alongside the artwork.",
    "Crucially, optional content only governs whether marked content is shown. It does not change the order in which objects are painted, and turning a layer off does not remove that content from the file. Understanding those two facts prevents the most common mistakes people make when they first meet PDF layers."
  ],
  "sections": [
    {
      "heading": "How content is tagged as optional",
      "body": [
        "An optional content group is a small dictionary that mainly carries a human-readable name. Content on the page becomes part of that group by being associated with it. Inside a content stream, a run of drawing operations is wrapped in a marked-content sequence: the BDC operator (begin marked content) opens the sequence with the tag /OC and a reference to the OCG, and the EMC operator (end marked content) closes it. Everything painted between those two operators belongs to the layer, so its visibility follows the group's state.",
        "Whole objects can also be tied to a layer without wrapping stream operators. Form XObjects, image XObjects, and annotations may each carry an /OC entry pointing directly at an optional content group. That is how a viewer can, for example, hide an entire stamped watermark or an overlay image as a unit. Content can even depend on several groups at once through an optional content membership dictionary (OCMD), which combines groups using a visibility policy such as \"any on\" or \"all off,\" or a more precise boolean visibility expression."
      ]
    },
    {
      "heading": "The OCProperties dictionary and configurations",
      "body": [
        "A viewer needs a single place to learn which layers exist and how they should behave, and that place is the /OCProperties dictionary in the document catalog. It lists every optional content group in the file and points to a default configuration. Individual pages and content streams only reference the groups; the catalog is what ties the whole document's layers together.",
        "A configuration dictionary describes the state of the layers as a set. It records which groups start visible and which start hidden, the order and nesting shown in a viewer's layers panel, groups that behave as a radio-button set so only one can be on at a time, and groups whose state a user is not allowed to change. A file may also store alternate configurations, letting a document ship more than one predefined arrangement of its layers. Because this state lives in the configuration rather than in the page content, changing which layers are visible does not require rewriting the page itself."
      ]
    },
    {
      "heading": "Automatic visibility for viewing, printing, and export",
      "body": [
        "Layer visibility does not have to be a manual toggle. Each optional content group can carry a usage dictionary describing how it is meant to behave in specific situations: whether it should appear on screen, whether it should print, whether it should be included when the document is exported, at which zoom levels it is relevant, and which language it belongs to. A configuration can then map those usage entries to an automatic state, so the viewer decides visibility based on context rather than on a checkbox.",
        "This is what makes optional content genuinely useful in production rather than just a convenience. A group can be set to print but never display, which suits crop marks or press instructions; another can display but never print, which suits on-screen-only guides or comments. Zoom-based usage lets fine detail appear only when a map or diagram is enlarged, and language-based usage lets a multilingual document surface the right text automatically. The document defines the intent, and a conforming reader applies it."
      ]
    },
    {
      "heading": "Why layers matter in print and technical documents",
      "body": [
        "Optional content sits close to print geometry because print production is where separated, toggleable content is most valuable. A press-ready file often needs to carry elements the final printed piece will not literally show as ink: a die line marking where a package is cut, a fold or crease guide, a varnish or spot-finish layer, or a white-ink layer for printing on non-white stock. Keeping each of these on its own optional content group lets a prepress operator see, hide, or route them independently without disturbing the artwork.",
        "The same mechanism serves engineering drawings, architectural plans, and maps, where different disciplines or feature types live on their own layers, and it serves multilingual and versioned documents that share one layout. Because a hidden layer is still fully present in the file, optional content is an organizational and presentation tool, not a security or redaction feature — anything you truly need to remove has to be deleted from the document, not merely switched off."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced in",
      "value": "PDF 1.5 (2003)"
    },
    {
      "label": "Also called",
      "value": "Optional content, PDF layers"
    },
    {
      "label": "Tagged with",
      "value": "The /OC marked-content tag (BDC…EMC), or an /OC entry on XObjects and annotations"
    },
    {
      "label": "Managed by",
      "value": "The /OCProperties dictionary in the document catalog"
    }
  ],
  "specification": {
    "introduced": "PDF 1.5 (2003)",
    "iso": "ISO 32000-1 and ISO 32000-2",
    "typicalUsage": "Toggling map, technical-drawing, and multilingual layers, and separating print-production elements such as die lines, varnish, and white ink.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pdf-1-5"
    ]
  },
  "misconceptions": [
    {
      "claim": "Hiding a PDF layer removes or protects its content.",
      "truth": "Content in a switched-off optional content group is still stored in the file and can be turned back on. Optional content is a visibility feature, not deletion or redaction, so it should never be used to conceal sensitive material."
    },
    {
      "claim": "PDF layers control which content draws on top, like layers in an image editor.",
      "truth": "Optional content only controls whether content is shown. The painting (z) order is still set by the sequence of operations in the content stream; the layers panel's ordering is for organization, not for restacking what draws over what."
    },
    {
      "claim": "Every PDF has layers.",
      "truth": "Optional content is an opt-in feature. Many PDFs contain no OCGs at all, in which case every element is simply always visible and there is nothing to toggle."
    }
  ],
  "faq": [
    {
      "q": "Which PDF version added optional content groups?",
      "a": "Optional content was introduced in PDF 1.5 and carried forward into the ISO 32000 specifications, including PDF 2.0. Files older than PDF 1.5 have no concept of layers."
    },
    {
      "q": "Can a layer print but not appear on screen, or vice versa?",
      "a": "Yes. Each optional content group can carry a usage dictionary that a configuration maps to an automatic state, so a group can be set to print while staying hidden on screen, or to display while never printing."
    },
    {
      "q": "Where does a PDF define its layers?",
      "a": "In the /OCProperties dictionary of the document catalog, which lists all optional content groups and points to the default configuration describing their initial visibility, ordering, and grouping."
    },
    {
      "q": "Can one piece of content belong to more than one layer?",
      "a": "Yes. An optional content membership dictionary (OCMD) lets content depend on several groups at once, combining them with a visibility policy or a boolean visibility expression."
    },
    {
      "q": "Do all PDF viewers let you toggle layers?",
      "a": "Support varies. Full-featured readers expose a layers panel and honor usage settings, while some lightweight or mobile viewers simply render the document's default visibility and provide no toggle interface."
    }
  ],
  "graph": {
    "parentConcept": "pdf-page-geometry",
    "childConcepts": [
      "pdf-layers"
    ],
    "relatedConcepts": [
      "pdf-1-5",
      "pdf-operators",
      "pdf-annotations",
      "image-xobjects",
      "marked-content-id"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pdf-x-4"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Fix PDF Printing Problems (Cut Pages, Wrong Size, Missing Text)",
        "path": "/guides/how-to-fix-pdf-printing-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-layers",
    "pdf-page-geometry",
    "marked-content",
    "pdf-document-catalog",
    "form-xobjects",
    "print-production-with-pdf",
    "pdf-content-streams",
    "pdf-preflight"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
