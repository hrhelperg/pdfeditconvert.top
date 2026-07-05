import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-interactive-features",
  "h1": "Interactive Features in PDF",
  "cluster": "interactivity",
  "aliases": [
    "PDF interactivity",
    "interactive PDF",
    "PDF interactive elements",
    "dynamic PDF features"
  ],
  "definition": "Interactive features are the parts of a PDF that respond to a reader — form fields, links, buttons, annotations, and scripted actions layered on top of the static page content.",
  "description": "How a PDF moves beyond static pages: form fields, annotations, links, bookmarks, actions and JavaScript that let readers respond to a document.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF is, at its core, a fixed description of pages: text, vector art, and images placed at exact coordinates so the document looks the same everywhere. Interactive features are a separate layer defined on top of that fixed content, giving a document the ability to react to a reader. They cover fillable form fields, clickable links and buttons, comments and highlights, navigation aids like bookmarks, and event-driven behavior such as running a calculation or jumping to a page.",
    "These capabilities are described in the same standard that defines the rest of the format, ISO 32000, and they are stored in the file using ordinary PDF objects — dictionaries, arrays, and streams — rather than any external technology. That is why a single .pdf file can hold both a printable page and the machinery to type into it, click through it, or comment on it.",
    "This page is the anchor for the interactivity cluster. It explains the main building blocks at a high level and how they fit together; the linked topics go deeper into each one, from AcroForm fields and annotation types to actions and embedded JavaScript."
  ],
  "sections": [
    {
      "heading": "Forms: fields you can fill in",
      "body": [
        "The most familiar interactive feature is the fillable form. In native PDF, forms are built from an interactive form dictionary — the AcroForm — referenced from the document catalog, together with a set of form fields for text entry, checkboxes, radio buttons, list and combo boxes, buttons, and signatures. Each field has a value, a type, and flags that control behavior such as read-only, required, or multiline text.",
        "A separate, XML-based forms technology called XFA was also used for dynamic, reflowable forms whose layout can change as data is entered. XFA was referenced by PDF but sat outside the core page model, and it was deprecated in PDF 2.0 (ISO 32000-2), which favors the native AcroForm model. Because a field's stored value is kept separately from the page it appears on, forms can be reset, saved with data, or flattened — merged permanently into the static content so the answers can no longer be edited."
      ]
    },
    {
      "heading": "Annotations and widgets",
      "body": [
        "Annotations are objects attached to a page rather than baked into its content stream. They include markup such as highlights, notes, and drawings; link annotations that make a region clickable; and widget annotations, which are the on-page appearance of interactive form fields. Every page keeps its annotations in an array, so a viewer can list, move, or remove them without touching the underlying text and graphics.",
        "Widget annotations are where forms and annotations meet: the field itself defines the data and behavior, while its widget defines where it sits on the page and what it looks like. That appearance is typically drawn by an appearance stream, a small piece of graphics the field carries so it renders consistently across viewers even before a user interacts with it."
      ]
    },
    {
      "heading": "Actions and scripting",
      "body": [
        "Interactivity often means something happens in response to an event. PDF models this with actions — instructions triggered by events like opening the document, clicking a link or button, entering or leaving a form field, or navigating pages. Common actions move to a destination, follow a web URL, submit or reset form data, or run a script.",
        "For richer behavior, PDF supports embedded JavaScript, an Adobe-defined scripting layer used for tasks such as validating input, calculating field totals, or showing messages. Scripting is powerful but optional, and viewer support varies: some readers run document JavaScript fully, others restrict or ignore it for security reasons, so a form should remain usable even when scripts do not execute."
      ]
    },
    {
      "heading": "Navigation and wayfinding",
      "body": [
        "Interactive features also help readers move through long documents. Bookmarks (stored in the outline tree) provide a clickable table of contents in the sidebar, while link annotations and named destinations let one part of a document — or an external file — point to a specific location such as a heading or figure. Named destinations give those targets stable names, so links keep working even if pages are added or reordered.",
        "Together these navigation aids turn a flat sequence of pages into something browsable. They rely on the same object model as the rest of the format, which is why they survive copying, merging, and other document operations as long as the tools involved preserve the relevant structures."
      ]
    },
    {
      "heading": "Why viewer support matters",
      "body": [
        "Because interactive features are a layer over the fixed page, a document can carry them even when a given reader does not act on them. Simple features — links, basic form fields, bookmarks, and standard annotations — are widely supported. More advanced pieces such as embedded JavaScript, multimedia, and XFA dynamic forms are supported unevenly, and may be disabled, degraded, or ignored depending on the application and its settings.",
        "The practical implication is that interactivity should be treated as an enhancement rather than a guarantee. Well-built interactive PDFs still present sensible static content and appearance streams, so the document remains readable and printable if the interactive layer is not honored. This also matters for archiving and accessibility, where predictable, standards-based structures are valued over behavior that depends on a specific viewer."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where forms live",
      "value": "Native PDF forms are described by an AcroForm dictionary referenced from the document catalog."
    },
    {
      "label": "Fields vs. appearance",
      "value": "A form field holds the data and behavior; a widget annotation is its on-page appearance."
    },
    {
      "label": "XFA status",
      "value": "The XML-based XFA dynamic-forms technology was deprecated in PDF 2.0 (ISO 32000-2)."
    },
    {
      "label": "Per-page annotations",
      "value": "Annotations, including links and comments, are stored in each page's annotations array, separate from its content."
    }
  ],
  "specification": {
    "introduced": "Interactive elements have been part of PDF since its early Adobe versions; the model is defined in ISO 32000.",
    "iso": "ISO 32000-1 (2008); ISO 32000-2 (PDF 2.0)",
    "typicalUsage": "Fillable forms, clickable links and buttons, comments and markup, bookmarks and navigation, and event-driven actions.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "If you can type into a PDF, it must be a real interactive form.",
      "truth": "Many documents are flat scans or images; typing on them often adds annotation overlays rather than filling genuine AcroForm fields."
    },
    {
      "claim": "An interactive PDF looks and behaves the same in every viewer.",
      "truth": "Basic links and fields are broadly supported, but JavaScript, multimedia, and XFA dynamic forms are handled unevenly and may be ignored or disabled."
    },
    {
      "claim": "Filling in a form permanently changes the document.",
      "truth": "Field values are stored separately and can be reset or saved; they only become fixed when the form is flattened into static content."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between an interactive PDF and a flat PDF?",
      "a": "A flat PDF is only fixed page content — text, graphics, and images. An interactive PDF adds a separate layer of form fields, links, annotations, bookmarks, or actions that a reader can respond to. Flattening an interactive PDF merges that layer into the static content."
    },
    {
      "q": "Are AcroForm and XFA the same thing?",
      "a": "No. AcroForm is PDF's native form model, built from ordinary PDF objects. XFA is a separate XML-based technology for dynamic, reflowable forms that was referenced by PDF but sat outside its core page model and was deprecated in PDF 2.0."
    },
    {
      "q": "Do interactive features require JavaScript?",
      "a": "No. Links, bookmarks, basic form fields, and most annotations work without any scripting. JavaScript is an optional layer used for extras such as input validation and calculations, and viewer support for it varies."
    },
    {
      "q": "How does a form field know where to appear on the page?",
      "a": "A form field is paired with a widget annotation that defines its location and appearance on a specific page. The field carries the data and behavior; the widget carries the visual representation, often via an appearance stream."
    },
    {
      "q": "Are interactive features stored inside the PDF file itself?",
      "a": "Yes. Forms, annotations, actions, bookmarks, and any embedded scripts are stored as standard PDF objects within the same file, so no external resources are needed for a compatible viewer to present them."
    }
  ],
  "graph": {
    "childConcepts": [
      "acroform",
      "xfa-forms",
      "form-flattening",
      "form-calculation",
      "javascript-in-pdf",
      "pdf-annotations",
      "appearance-streams",
      "pdf-actions",
      "named-destinations",
      "pdf-bookmarks",
      "fdf-and-xfdf"
    ],
    "relatedConcepts": [
      "annotation-types",
      "signature-fields"
    ],
    "relatedTools": [
      {
        "label": "PDF Forms — Fill, Sign and Manage Fillable PDFs",
        "path": "/pdf-forms"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "What Is a PDF Form? Interactive vs Flat Forms Explained",
        "path": "/guides/what-is-a-pdf-form"
      },
      {
        "label": "How PDF Forms Work — Fields, AcroForms and Flat Scans",
        "path": "/guides/how-pdf-forms-work"
      }
    ]
  },
  "seeAlso": [
    "acroform",
    "pdf-annotations",
    "pdf-form-fields",
    "pdf-actions",
    "javascript-in-pdf",
    "link-annotations",
    "widget-annotations",
    "pdf-bookmarks"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
