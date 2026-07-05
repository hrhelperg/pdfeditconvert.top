import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-layers",
  "h1": "PDF Layers",
  "cluster": "print-geometry",
  "aliases": [
    "Optional content",
    "Optional content groups",
    "OCG",
    "Layered PDF",
    "PDF optional content"
  ],
  "definition": "PDF layers are named, toggleable groups of page content — implemented as optional content groups — that a viewer can show or hide independently without changing the underlying file.",
  "description": "PDF layers show or hide named sets of page content on demand. Learn how optional content groups work and how layer visibility is controlled.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF layers let a single page carry several independent sets of content that a reader can switch on or off. In the file format these are called optional content, and each toggle corresponds to an optional content group (OCG). Rather than duplicating pages, a layered PDF keeps all the variants together and lets the viewer decide what is displayed.",
    "The feature arrived in PDF 1.5 and is carried forward in ISO 32000. It is used wherever one document has to serve multiple audiences or production steps — engineering drawings, maps, multilingual artwork, and print jobs with separate varnish or die-cut layers.",
    "It helps to separate two ideas up front: a layer is a named visibility switch, not a separate canvas. The order in which marks are painted still comes from the content stream; a layer only decides whether a given group of marks is shown. That distinction explains most of what layers can and cannot do."
  ],
  "sections": [
    {
      "heading": "How PDF layers are built from optional content groups",
      "body": [
        "Each layer is an optional content group — a small dictionary with a name and a type of OCG. Page content joins a layer in one of two ways: marked content inside a content stream is bracketed by begin and end marked-content operators that reference the group, or an entire object such as a form XObject, image XObject, or annotation carries an optional-content entry pointing at the group. The same OCG can be referenced from many places, so one switch can govern content scattered across a page or an entire document.",
        "The document catalog ties everything together through an optional-content properties dictionary. It lists every OCG in the file and holds a default configuration that records which groups start visible, how they are grouped and ordered in the viewer's layers panel, and which are locked. Because the list of groups and their state live in the catalog, a viewer can build its layers panel without scanning every page first."
      ]
    },
    {
      "heading": "Controlling visibility, printing, and export",
      "body": [
        "A configuration dictionary decides the initial state: which groups are on, which are off, the order used to present them, and optional locking so a reader cannot toggle certain layers. Beyond a simple per-group switch, an optional content membership dictionary can make a piece of content depend on several groups at once, using a visibility policy such as any-on, all-on, any-off, or all-off.",
        "Layers can also behave differently depending on context. A usage dictionary lets a group state separate intent for viewing, printing, and exporting, so a layer might appear on screen yet be omitted from print, or the reverse. This is how construction notes, guidelines, or watermarks can be present for review but excluded from the final output."
      ]
    },
    {
      "heading": "Layers are visibility, not stacking order",
      "body": [
        "A common surprise is that turning layers on and off does not reorder anything. PDF paints marks in the sequence they appear in the content stream, and a layer only determines whether the marks tagged for that group are drawn at all. Two layers therefore cannot be reordered to change which one sits on top unless the underlying drawing order itself changes.",
        "This also means layers are not a security feature. Content in a hidden layer is still fully present in the file and can be revealed by toggling the group or read out by extraction tools. Removing content for real requires flattening the layers into ordinary page content or applying redaction — not simply switching a layer off."
      ]
    },
    {
      "heading": "Where layered PDFs are used",
      "body": [
        "Layers are most valuable when one document must serve several views. CAD and engineering exports keep dimensions, annotations, and construction lines on separate switches; maps and GIS output separate roads, labels, and terrain; multilingual artwork stacks each language on its own layer so a single file prints for many markets. Marketing and packaging files often carry technical layers — die lines, varnish, or spot treatments — that guide production but should not print as artwork.",
        "Because the viewer decides what to show, layered PDFs reduce file sprawl. Instead of exporting a dozen near-identical variants, authors can ship one file and let the audience, or the press operator, select the relevant combination."
      ]
    },
    {
      "heading": "Layers across the PDF standards",
      "body": [
        "Optional content postdates PDF 1.4, so PDF/A-1 — which is built on that earlier version — does not include layers. Later parts of PDF/A, based on newer PDF versions, permit optional content but expect a proper default configuration so an archival reader has a well-defined initial state. For print, PDF/X-4 supports optional content, which is part of why layered artwork can move through modern print workflows where older PDF/X-1a files could not.",
        "Because layers change what is visible, preflight and print-production checks pay close attention to them — confirming which layers will actually print, flagging hidden content, and, where a workflow requires flat output, flattening layers before handoff."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced in",
      "value": "PDF 1.5 (2003)"
    },
    {
      "label": "Format term",
      "value": "Optional content groups (OCGs)"
    },
    {
      "label": "Standardized in",
      "value": "ISO 32000 (PDF 1.7 and PDF 2.0)"
    },
    {
      "label": "Not a security feature",
      "value": "Hidden layers remain in the file"
    }
  ],
  "specification": {
    "introduced": "PDF 1.5 (2003)",
    "iso": "ISO 32000-1 and ISO 32000-2",
    "typicalUsage": "CAD drawings, maps and GIS, multilingual artwork, and print-production layers",
    "relatedStandards": [
      "pdf-a",
      "pdf-x"
    ]
  },
  "misconceptions": [
    {
      "claim": "Hiding a layer removes its content from the PDF.",
      "truth": "A hidden layer is only not displayed; its objects remain in the file and can be revealed or extracted. Actually removing content requires flattening or redaction."
    },
    {
      "claim": "Layers control which content is drawn on top.",
      "truth": "Layers control visibility, not stacking order. Painting order is still set by the sequence of operations in the content stream, not by the layer list."
    },
    {
      "claim": "Every PDF supports layers.",
      "truth": "Optional content was added in PDF 1.5, so older files do not have it, and some conformance targets such as PDF/A-1 (based on PDF 1.4) do not include layers."
    }
  ],
  "faq": [
    {
      "q": "Can a PDF layer be visible on screen but hidden when printing?",
      "a": "Yes. A layer's usage settings can specify separate intent for viewing and printing, so a configuration can keep a layer on screen while omitting it from print, or the other way around."
    },
    {
      "q": "How is content assigned to a layer?",
      "a": "Either through marked content inside the content stream, tagged with an optional-content reference, or through an optional-content entry on a form XObject, image XObject, or annotation that points at the group."
    },
    {
      "q": "Where does a viewer find the list of layers?",
      "a": "In the document catalog's optional-content properties dictionary, which lists every group plus a default configuration that sets the initial on/off state and the order shown in the layers panel."
    },
    {
      "q": "Are PDF layers the same as Photoshop or Illustrator layers?",
      "a": "They are related in concept but not identical. When you export, design-app layers may map to optional content groups, but PDF layers are a viewing and visibility construct rather than editable design layers."
    },
    {
      "q": "Can layers be merged or removed permanently?",
      "a": "Yes. Flattening merges optional content into ordinary page content and discards the toggles, which is also how you make hidden-layer content go away for good."
    }
  ],
  "graph": {
    "parentConcept": "optional-content-groups",
    "relatedConcepts": [
      "image-xobjects",
      "pdf-annotations",
      "pdf-preflight",
      "pdf-versions"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-x"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "Editable PDF vs Flat PDF — What the Difference Actually Is",
        "path": "/guides/editable-pdf-vs-flat-pdf"
      },
      {
        "label": "How to Prepare a PDF Before Sharing (Checklist)",
        "path": "/guides/how-to-prepare-pdf-before-sharing"
      }
    ]
  },
  "seeAlso": [
    "optional-content-groups",
    "pdf-1-5",
    "marked-content",
    "pdf-content-streams",
    "pdf-document-catalog",
    "form-xobjects",
    "print-production-with-pdf",
    "pdf-a"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
