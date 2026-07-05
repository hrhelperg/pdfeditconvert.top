import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "annotation-types",
  "h1": "Types of PDF Annotations",
  "cluster": "interactivity",
  "aliases": [
    "PDF annotation subtypes",
    "annotation subtypes",
    "PDF markup types",
    "types of annotations in PDF",
    "annotation categories in PDF"
  ],
  "definition": "PDF annotation types are the standard subtypes—Text, Link, Highlight, Stamp, Ink, Widget and more—that the PDF format defines to attach notes, markup, links, and controls to a page.",
  "description": "Understand the standard PDF annotation subtypes—text notes, links, markup, stamps, ink, and form widgets—and how the format groups and renders them.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every note, highlight, link, form box, and stamp layered on top of a PDF page is an annotation, and the format does not treat them all the same. Instead, the PDF specification defines a fixed vocabulary of annotation subtypes, each with its own behavior, appearance rules, and required dictionary entries.",
    "Knowing the types matters because they explain what a viewer will let you do with a given mark: whether it prints, whether it can be edited or replied to, and whether it can be flattened. A sticky-note comment, a clickable table-of-contents link, and a checkbox on a form are all annotations, yet they belong to very different subtypes with very different purposes.",
    "This page catalogs the standard annotation subtypes, shows how the format groups them into markup and non-markup families, and explains how each is stored and drawn. It is a reference companion to the broader overview of PDF annotations; where you want to actually add or edit marks, a tool is the better starting point."
  ],
  "sections": [
    {
      "heading": "How the Format Identifies an Annotation Type",
      "body": [
        "An annotation in a PDF is an ordinary dictionary object with a Type entry of /Annot and a Subtype entry that names the specific kind, such as /Text, /Link, /Highlight, or /Widget. The Subtype is what a viewer reads first to decide how to interpret and render the object. Alongside it, every annotation carries a Rect entry: four numbers giving the rectangle, in default user-space coordinates, that bounds the annotation on the page. Additional entries depend on the subtype—a Link stores an action or destination, a text-markup annotation stores the quadrilaterals it covers (QuadPoints), and a Widget stores form-field data.",
        "Annotations are not listed in the document catalog; they are attached to individual pages through each page object's Annots array. A flags entry (F) further modifies behavior regardless of subtype—bits control whether the annotation is hidden, printed, invisible on screen, or locked against edits. Because the subtype and these shared entries follow one consistent structure, a viewer can handle an unfamiliar annotation gracefully: it renders the supplied appearance if there is one and otherwise ignores what it does not understand."
      ]
    },
    {
      "heading": "Markup and Non-Markup Families",
      "body": [
        "The specification divides annotations into two broad families. Markup annotations are the ones intended for human review and collaboration—text notes, highlights, underlines, strikeouts, freehand ink, shapes, stamps, and callouts. What makes them markup is a shared set of entries: a title (T) naming the author, a creation date, text contents, and the ability to own a popup window and to participate in reply threads through an in-reply-to reference. Because of this, viewers can list them as comments, group replies under a parent, and attribute each mark to a person.",
        "Non-markup annotations serve the document's machinery rather than a reviewer's commentary. Link annotations turn a region into a clickable jump or action; Widget annotations render interactive form fields; Popup annotations are the floating note windows attached to markup annotations; and print-production types such as PrinterMark, TrapNet, and Watermark exist for prepress and page composition. These do not carry an author or support replies, because they are structural rather than conversational."
      ]
    },
    {
      "heading": "The Common Subtypes at a Glance",
      "body": [
        "The text and drawing subtypes cover most review work. Text is the classic sticky-note icon; FreeText places text directly on the page like a typewriter note or callout. Line, Square, Circle, Polygon, and PolyLine draw geometric shapes, while Ink records freehand strokes. The text-markup group—Highlight, Underline, Squiggly, and StrikeOut—decorates existing page text over the region its QuadPoints cover. Stamp applies a graphic or rubber-stamp image, and Caret indicates a proposed insertion point.",
        "Beyond review markup, several subtypes attach content or interactivity. FileAttachment embeds a file at a point on the page, and Sound, Movie, Screen, and RichMedia handle audio, video, and rich media playback. Link and Widget provide navigation and form controls. Redact marks content for removal, with its final application being what actually erases the underlying content. A handful of specialized subtypes—PrinterMark, TrapNet, Watermark, Projection, and 3D—address printing, watermarking, and three-dimensional content. Not every viewer supports every subtype, especially the multimedia and 3D ones."
      ]
    },
    {
      "heading": "How Annotations Are Drawn: Appearance Streams",
      "body": [
        "Most annotation subtypes describe how they should look through an appearance stream—a small, self-contained graphics object (a Form XObject) referenced from the annotation's appearance (AP) dictionary. Storing a normal appearance makes the mark render identically across viewers, rather than each application improvising its own drawing from the raw entries. Some annotations also provide rollover and down appearances for interactive feedback, and stateful annotations such as checkboxes use appearance states, selected through the AS entry, to switch between an on and an off look.",
        "A few subtypes have little or no visible appearance of their own. A Link annotation, for instance, often draws nothing and simply defines a hot region; Popup annotations are shown only when their parent note is opened. When an annotation lacks an appearance stream, a viewer falls back to synthesizing one from the annotation's properties, which is a common source of the small visual differences you see between PDF applications."
      ]
    },
    {
      "heading": "Widget Annotations and the Forms Connection",
      "body": [
        "The Widget subtype is where the annotation system and the interactive forms system meet. An AcroForm field is a logical object—it has a name, a value, and a type such as text, button, or choice—but its visible box on the page is a Widget annotation. For simple fields the field dictionary and the widget dictionary are merged into one object; when a single field appears in more than one place, such as radio buttons in a group, the field owns several separate widget annotations.",
        "This split explains behavior that can otherwise seem puzzling: a form field can exist logically without being visible, or appear in multiple spots on a page, because fields and widgets are related but distinct. It also means that flattening a form—turning fillable fields into static page content—is really the act of converting Widget annotations into ordinary marks in the page's content stream."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Type identifier",
      "value": "Each annotation's Subtype entry (for example /Text, /Link, or /Highlight) names its kind."
    },
    {
      "label": "Where they live",
      "value": "Annotations attach to a page through that page's Annots array, not the document catalog."
    },
    {
      "label": "Standard subtypes",
      "value": "The specification defines more than twenty distinct annotation subtypes."
    },
    {
      "label": "Markup subset",
      "value": "Markup annotations carry an author, timestamp, and optional popup, and support reply threads."
    }
  ],
  "specification": {
    "iso": "ISO 32000 (PDF)",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Attaching notes, markup, links, multimedia, and form controls to PDF pages.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Annotations are just comments or sticky notes.",
      "truth": "The annotation mechanism covers far more—links, form widgets, stamps, redaction marks, multimedia, and printer marks are all annotation subtypes."
    },
    {
      "claim": "Highlighting or drawing on a PDF changes the underlying text or page content.",
      "truth": "Markup annotations sit in a separate layer referenced by the page; the original content stream is untouched unless the annotations are flattened."
    },
    {
      "claim": "A form field and its on-page box are two unrelated things.",
      "truth": "A field's visible box is a Widget annotation; for simple fields the field and widget are often merged into a single dictionary."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between a markup and a non-markup annotation?",
      "a": "Markup annotations (such as Text, Highlight, Ink, and Stamp) carry an author, date, and contents, can own a popup, and support reply threads, so viewers show them as comments. Non-markup annotations such as Link, Widget, Popup, and PrinterMark are structural and do not carry an author or replies."
    },
    {
      "q": "Are form fields considered annotations?",
      "a": "Yes. The on-page appearance of an interactive form field is a Widget annotation. The field's logical data (name, value, type) and the widget's visual box are often stored in one merged dictionary, or split when a field appears in several places."
    },
    {
      "q": "Where does a PDF store its annotations?",
      "a": "On the page. Each page object has an Annots array that lists the annotations appearing on that page. Removing a page's annotation means editing that array and, potentially, the annotation object it references."
    },
    {
      "q": "Can a viewer add annotation subtypes the specification doesn't define?",
      "a": "The Subtype value is a name, so a producer can store custom or extension subtypes. Standard viewers only render the ones they recognize; when a subtype is unknown, a viewer typically relies on the annotation's appearance stream if one is present."
    },
    {
      "q": "Do all annotation types show up when a PDF is printed?",
      "a": "No. Whether an annotation prints depends on its type and its flags—the Print flag must be set for it to appear on paper. Popup windows are not printed, and Link annotations often have no visible appearance to print at all."
    }
  ],
  "graph": {
    "parentConcept": "pdf-annotations",
    "relatedConcepts": [
      "acroform",
      "pdf-form-fields",
      "named-destinations",
      "fdf-and-xfdf"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "Sign PDF — Add Electronic Signatures on Phone",
        "path": "/sign-pdf"
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
    "markup-annotations",
    "link-annotations",
    "widget-annotations",
    "popup-annotations",
    "appearance-streams",
    "pdf-interactive-features",
    "pdf-actions"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
