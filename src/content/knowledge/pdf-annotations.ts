import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-annotations",
  "h1": "PDF Annotations",
  "cluster": "interactivity",
  "aliases": [
    "PDF comments",
    "PDF markup",
    "annotation dictionaries",
    "Annots",
    "PDF notes"
  ],
  "definition": "PDF annotations are objects that attach supplementary or interactive content — notes, highlights, links, form widgets — to a specific location on a page, separate from the page's base content.",
  "description": "Learn how PDF annotations work: separate objects in a page's /Annots array that add notes, highlights, links, and form widgets over the content.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF page has two parts: the fixed content that describes its text, graphics, and images, and an optional layer of annotations placed on top. Annotations are the objects that let a PDF carry sticky notes, highlights, hyperlinks, stamps, drawn shapes, and the visible controls of interactive forms — all anchored to specific spots on a page but stored separately from the page's own content.",
    "Because they sit in their own objects, annotations can be added, changed, or removed without rewriting the underlying page. That is what makes review markup non-destructive and what lets many different people comment on the same document. It is also why one mechanism — the annotation — underlies features that feel unrelated on the surface, from a comment bubble to a form checkbox to a signature box.",
    "This entry explains how annotations attach to a page, the subtypes the PDF specification defines, how their on-screen appearance is determined, and how they connect to forms, actions, and data exchange. Where you want to actually add or edit annotations, use an editor rather than working with these internals directly."
  ],
  "sections": [
    {
      "heading": "How Annotations Attach to a Page",
      "body": [
        "Each page object can hold an /Annots entry: an array of references to annotation objects. An annotation is itself a dictionary with a /Type of Annot, a /Subtype that names its kind, and a /Rect array giving the rectangle — expressed in default user space — where it sits on the page. Because annotations live in their own objects rather than inside the page's content stream, they form a distinct layer over the rendered page.",
        "This separation is the defining mechanism. The base page content — text, vector graphics, and images — is described by content stream operators, while annotations are attached alongside it and composited on top when the page is rendered. Editing or removing an annotation touches only its object and the /Annots array, leaving the original page content intact, which is exactly what makes review comments and highlights non-destructive."
      ]
    },
    {
      "heading": "Annotation Subtypes and Categories",
      "body": [
        "The /Subtype value determines how an annotation behaves and is drawn. The specification defines many subtypes, grouped loosely into markup annotations (such as Text sticky notes, Highlight, Underline, StrikeOut, Squiggly, FreeText, Line, Square, Circle, Polygon, Ink, Stamp, Caret, and FileAttachment) and non-markup or special-purpose subtypes (such as Link, Widget, and Popup).",
        "Markup annotations share extra dictionary entries — a text label identifying the author, free-text contents, a creation date, and an opacity value — and they can own an associated Popup annotation that displays that text. Link and Widget annotations are less about visible markup and more about behavior: links define clickable regions, while widgets render the on-page appearance of interactive form fields."
      ]
    },
    {
      "heading": "Appearance Streams: How Annotations Are Drawn",
      "body": [
        "Most annotations can carry an appearance dictionary (/AP) whose normal appearance is a form XObject describing exactly how the annotation should be painted. The appearance dictionary can also hold rollover and down appearances for annotations that react to the pointer, such as widgets. A defined appearance stream helps guarantee the annotation looks the same across conforming viewers.",
        "When an annotation has no appearance stream, a viewer may synthesize one from the annotation's other entries — its color, border, and contents — which is why the same note or highlight can look subtly different across readers. Annotation flags (/F) further control rendering: they can mark an annotation as hidden, exclude it from view while keeping it in the file, or control whether it appears in printed output. Popup annotations, for example, are normally not printed."
      ]
    },
    {
      "heading": "Annotations, Forms, and Actions",
      "body": [
        "Interactive forms are built on annotations. Every visible field in an AcroForm is a Widget annotation, while the field's value and behavior live in an interconnected form-field dictionary; when a field has a single widget, the two dictionaries are often merged into one object. This is why form fields and annotations are two views of the same underlying structure rather than separate systems.",
        "Annotations are also a primary trigger for actions. A Link annotation typically carries either a destination — a target view within the document — or an action, such as navigating to a named destination, opening a URI, or running document JavaScript. Through this mechanism the annotation layer connects a location on the page to interactive behavior, tying annotations into the broader set of PDF interactive features."
      ]
    },
    {
      "heading": "Flattening, Data Exchange, and Portability",
      "body": [
        "Flattening an annotation merges its appearance into the page's content stream and discards the interactive annotation object. The visual result looks identical, but the mark becomes permanent page content: it can no longer be selected, edited, or removed as an annotation. Flattening is commonly used to lock down comments, stamps, or filled form fields before a document is distributed.",
        "Annotation and form data can also travel separately from the document. Formats such as FDF and XFDF can carry form-field values and some annotation data for import into a matching PDF, which supports review and data-collection workflows where the annotations, not the whole file, are exchanged. Whether embedded or exchanged, annotations remain the layer through which readers comment on, link within, and interact with a PDF."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where they live",
      "value": "In each page's /Annots array as separate objects, not inside the page content stream"
    },
    {
      "label": "Required entries",
      "value": "Every annotation dictionary carries a /Subtype and a /Rect that positions it on the page"
    },
    {
      "label": "Appearance",
      "value": "An optional appearance stream (/AP) defines how the annotation is drawn; viewers may synthesize one if it is absent"
    },
    {
      "label": "Specified in",
      "value": "The PDF specification, standardized as ISO 32000-1 and later ISO 32000-2 (PDF 2.0)"
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "introduced": "PDF 1.0 (1993)",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Comments and review markup, hyperlinks, stamps, and the on-page appearance of form fields and signatures.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Annotations are part of the page's text and change the document itself.",
      "truth": "Annotations are stored as separate objects in the page's /Annots array; the base content stream is untouched, which is why comments and highlights can be removed without altering the original page."
    },
    {
      "claim": "Form fields and annotations are unrelated features.",
      "truth": "A form field's on-page appearance is a Widget annotation, so AcroForm fields and annotations share the same underlying mechanism rather than being separate systems."
    },
    {
      "claim": "Flattening annotations just hides them.",
      "truth": "Flattening merges an annotation's appearance into the page content stream and discards the annotation object, so the mark becomes permanent page content and loses its editability and interactivity."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between an annotation and the page content?",
      "a": "The page content stream describes the fixed text, graphics, and images of the page, while annotations are separate objects layered on top. A viewer composites annotations over the page, and editing an annotation does not change the underlying content."
    },
    {
      "q": "Do all annotations include an appearance stream?",
      "a": "No. The appearance dictionary (/AP) is optional. Without it, many viewers generate a default appearance from the annotation's color, border, and contents, which is why the same comment can look slightly different in different readers."
    },
    {
      "q": "Can annotations be printed?",
      "a": "It depends on the annotation's flags. The print-related flag controls whether an annotation appears in printed or rendered output, and some subtypes such as Popup are typically not printed even when visible on screen."
    },
    {
      "q": "Is a visible digital signature box an annotation?",
      "a": "The visible signature box on the page is a Widget annotation tied to a signature form field, but the cryptographic signature data lives in the associated field and signature dictionaries, not in the annotation's appearance."
    },
    {
      "q": "Are annotation comments stored inside the PDF file?",
      "a": "Annotations are normally stored inside the PDF itself. Form-field values and some annotation data can also be exchanged separately through formats such as FDF and XFDF for import into a matching document."
    }
  ],
  "graph": {
    "parentConcept": "pdf-interactive-features",
    "childConcepts": [
      "annotation-types",
      "link-annotations",
      "markup-annotations",
      "widget-annotations",
      "popup-annotations"
    ],
    "relatedConcepts": [
      "acroform",
      "pdf-form-fields",
      "form-flattening",
      "pdf-coordinate-system",
      "fdf-and-xfdf",
      "pdf-bookmarks"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pdf-1-7"
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
      },
      {
        "label": "How to Edit Class Documents as PDF (Annotate, Highlight, Sign)",
        "path": "/guides/how-to-edit-class-documents-as-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-interactive-features",
    "annotation-types",
    "markup-annotations",
    "link-annotations",
    "widget-annotations",
    "popup-annotations",
    "appearance-streams",
    "pdf-actions"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
