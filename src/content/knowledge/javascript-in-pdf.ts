import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "javascript-in-pdf",
  "h1": "JavaScript in PDF",
  "cluster": "interactivity",
  "aliases": [
    "Acrobat JavaScript",
    "PDF JavaScript",
    "Document-level JavaScript",
    "JavaScript actions"
  ],
  "definition": "JavaScript in PDF is embedded ECMAScript code that a viewer runs to add interactive behavior, such as validating form fields, calculating values, formatting input, and responding to document actions.",
  "description": "Learn how embedded JavaScript makes PDFs interactive with form validation, calculations, and actions, and why viewers and standards restrict it.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF is usually thought of as a fixed, printable page, but the format also has room for scripted behavior. JavaScript in PDF is code stored inside the file that a supporting viewer can execute when the reader interacts with the document. It is most often used to make forms feel responsive, calculating a total the moment a field changes, checking that a date looks valid, or formatting a number as currency without the reader lifting a finger.",
    "The scripting language is based on ECMAScript, the same standard behind web JavaScript, but the surroundings are different. Instead of a browser page with a DOM and a window, a PDF script sees an object model centered on the document and its form fields, originally defined by Adobe for Acrobat and referenced by the PDF standard. Scripts are attached to trigger points through PDF actions, so they run in response to specific events rather than all at once.",
    "Because scripting is optional and viewer-dependent, JavaScript in PDF sits in an unusual position. A form can be designed to lean heavily on it, yet open in a reader that ignores it entirely. It has also been a target for abuse, which is why many viewers sandbox or disable it and why archival standards forbid it. Understanding how it is embedded, triggered, and constrained explains a lot about why interactive PDFs behave differently from one program to the next."
  ],
  "sections": [
    {
      "heading": "How JavaScript Is Embedded and Triggered",
      "body": [
        "JavaScript does not run on its own inside a PDF. It is invoked through PDF actions, and a JavaScript action is simply a dictionary whose action type is set to JavaScript with the script text stored in an associated entry (as a string or a stream for longer code). These actions are wired to trigger points throughout the document: opening or closing a page, clicking a link or a form widget, or the lifecycle of a form field.",
        "Scripts come in a few scopes. Document-level scripts, which typically define reusable functions, are registered in a JavaScript name tree reached from the document catalog, and they load when the file opens. Field-level and page-level behavior is attached through additional-actions dictionaries, where separate entries hold the code that runs to format a value, validate a keystroke, or recalculate a field. When a script runs, the viewer exposes an event object describing what happened, letting the same function respond differently depending on the trigger."
      ]
    },
    {
      "heading": "What JavaScript Adds to Forms",
      "body": [
        "The most common home for PDF scripting is the interactive form, or AcroForm. Text fields can carry a chain of scripts: one to constrain what the user types, one to check the finished value, one to format how it is displayed, and one to compute a field from others. This is how an order form totals line items automatically, or how a field turns red when an entry is out of range. Scripts can also show or hide fields, change field properties, drive submit and reset buttons, and respond to clicks on buttons and other widgets.",
        "To do this, scripts work against an object model that originated with Adobe Acrobat and is referenced by the PDF specification. Objects representing the document, the application, individual form fields, and the current event give scripts a defined surface to read and change the document state. Because this API is largely Adobe-defined rather than a general web platform, the exact set of available objects and methods is what distinguishes a fully featured PDF scripting engine from a limited one."
      ]
    },
    {
      "heading": "Viewer Support Varies Widely",
      "body": [
        "Unlike the static page description, which nearly every reader renders the same way, JavaScript support is not guaranteed. Full desktop viewers in the Acrobat family implement the largest share of the scripting API, while lightweight readers, in-browser PDF viewers, and mobile apps often implement only a subset or none of it. A calculation that works flawlessly in one program may silently do nothing in another.",
        "This variability has practical consequences. A form that depends on scripting to compute or validate values can appear broken, or simply blank of results, when opened in a viewer that ignores the code. Designers who need reliable behavior across many readers often keep scripting minimal, provide sensible default values, and avoid making the document unusable when scripts do not run. When a reader reports that a form is not calculating, the viewer, not the file, is frequently the reason."
      ]
    },
    {
      "heading": "Security and Standards Constraints",
      "body": [
        "Executable code inside a document is inherently a security concern. Over the years JavaScript in PDF has been used as a delivery mechanism for exploits, so modern viewers commonly sandbox scripts, restrict what they can reach, prompt before running them, or disable scripting by default in higher-security configurations. The presence of JavaScript in a file is not proof of malicious intent, but it is one of the things security tooling inspects.",
        "Standards draw an even firmer line. The PDF/A archival family, which is built around self-contained and reproducible documents, does not permit embedded JavaScript, along with other dynamic or externally dependent content. Converting a form to PDF/A therefore strips its scripting, which is a deliberate trade of interactivity for long-term reliability. XFA, the separate dynamic-form technology that relied heavily on scripting, was deprecated in PDF 2.0, reinforcing the trend toward interactivity that degrades gracefully rather than requiring a script engine to be readable."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Invoked through actions",
      "value": "JavaScript runs via PDF action dictionaries whose action type is set to JavaScript, tied to page, field, or link triggers."
    },
    {
      "label": "Document-level scripts",
      "value": "Reusable scripts are registered in a JavaScript name tree reachable from the document catalog and load when the file opens."
    },
    {
      "label": "Adobe-defined object model",
      "value": "The scripting API (document, application, field, and event objects) originated with Adobe Acrobat and is referenced by ISO 32000."
    },
    {
      "label": "Prohibited in PDF/A",
      "value": "The PDF/A archival standard does not allow embedded JavaScript, so converting to PDF/A removes it."
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "typicalUsage": "Interactive AcroForm behavior such as field validation, calculation, and formatting, plus action-triggered document scripting.",
    "relatedStandards": [
      "iso-32000",
      "pdf-a"
    ]
  },
  "misconceptions": [
    {
      "claim": "JavaScript in a PDF runs like JavaScript on a web page.",
      "truth": "It uses ECMAScript syntax but a different, Adobe-defined object model centered on the document and its form fields, with no browser DOM, window, or general web APIs."
    },
    {
      "claim": "Every PDF viewer runs embedded JavaScript the same way.",
      "truth": "Support varies widely; many in-browser and mobile viewers implement only a subset or disable scripting, so the same script can work in one reader and do nothing in another."
    },
    {
      "claim": "A PDF that contains JavaScript is automatically a virus.",
      "truth": "Scripting is a legitimate interactivity feature; it has been abused, which is why viewers sandbox or disable it, but its mere presence does not make a file malicious."
    }
  ],
  "faq": [
    {
      "q": "What can JavaScript actually do inside a PDF?",
      "a": "It can validate and format form-field entries, calculate one field from others, show or hide fields, respond to clicks on buttons and links, and drive form submit or reset actions. Its reach is scoped to the document and viewer, not the wider system."
    },
    {
      "q": "Where is the JavaScript stored inside a PDF file?",
      "a": "Document-level scripts live in a JavaScript name tree referenced from the document catalog. Field- and page-specific code is held in additional-actions dictionaries, with each script kept in a JavaScript entry as a string or stream."
    },
    {
      "q": "Why doesn't the JavaScript in my PDF form work in my browser?",
      "a": "Many browser and mobile PDF viewers implement only part of the scripting API or disable it, so calculations and validations may not run. Opening the file in a full-featured desktop viewer usually restores the behavior."
    },
    {
      "q": "Can JavaScript be removed from a PDF?",
      "a": "Yes. Flattening a form fixes its values and drops interactivity, and re-saving through a tool that strips scripts removes the code. Converting the document to PDF/A also removes embedded JavaScript because that standard forbids it."
    },
    {
      "q": "Is JavaScript the same as an XFA form?",
      "a": "No. XFA is a separate XML-based dynamic-form technology that relied heavily on scripting, whereas JavaScript actions apply to standard AcroForm PDFs. XFA was deprecated in PDF 2.0, while ordinary JavaScript actions remain part of the format."
    }
  ],
  "graph": {
    "parentConcept": "pdf-interactive-features",
    "relatedConcepts": [
      "fdf-and-xfdf",
      "signature-fields",
      "widget-annotations",
      "form-field-flags",
      "pdf-document-catalog",
      "form-flattening"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-a"
    ],
    "relatedFormats": [
      "pdf-2-0"
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
        "label": "How PDF Forms Work — Fields, AcroForms and Flat Scans",
        "path": "/guides/how-pdf-forms-work"
      },
      {
        "label": "What Is a PDF Form? Interactive vs Flat Forms Explained",
        "path": "/guides/what-is-a-pdf-form"
      },
      {
        "label": "Why Can't I Type in a PDF Form? Causes and Fixes",
        "path": "/guides/why-cant-i-type-in-a-pdf-form"
      }
    ]
  },
  "seeAlso": [
    "pdf-interactive-features",
    "acroform",
    "pdf-actions",
    "form-calculation",
    "xfa-forms",
    "pdf-form-fields",
    "pdf-a",
    "pdf-security-model"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
