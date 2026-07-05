import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-actions",
  "h1": "PDF Actions",
  "cluster": "interactivity",
  "aliases": [
    "action dictionary",
    "PDF action dictionary",
    "action (PDF)",
    "interactive PDF actions"
  ],
  "definition": "A PDF action is an instruction, stored as a dictionary, that tells a viewer what to do — open a link, submit a form, run JavaScript, or jump to a page — when a trigger event fires.",
  "description": "How PDF actions work: the action dictionaries that fire behavior — links, form submission, navigation, JavaScript — when events happen in a viewer.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Most of what feels interactive about a PDF — a clickable link, a bookmark that jumps to a chapter, a button that submits a form, a document that fits the window the moment it opens — is driven by actions. An action is a small instruction the viewer carries out in response to an event, and it is one of the core building blocks of PDF's interactive layer, sitting alongside annotations and form fields.",
    "Actions are stored as dictionaries and identified by type, so a single mechanism covers a wide range of behavior: navigating within or between documents, opening web addresses, running scripts, submitting or resetting form data, and toggling layers or visibility. Because the same action model is reused everywhere an event can occur, understanding actions explains a lot of otherwise mysterious PDF behavior at once.",
    "This entry describes what an action is, how it is triggered, the standard types the PDF specification defines, and why some actions are treated cautiously by viewers. It is a conceptual reference rather than a how-to; where you would actually add or change interactive behavior, follow a tool or guide."
  ],
  "sections": [
    {
      "heading": "How an Action Is Represented",
      "body": [
        "An action is an action dictionary. Its S entry — a name object — identifies the action type, and the remaining entries supply parameters specific to that type: a GoTo action carries a destination, a URI action carries a web address, a SubmitForm action carries the target URL and which fields to send. Crucially, an action dictionary is not part of a page's content stream. It lives in an interactive object such as a link annotation, an outline item (bookmark), a form field's widget, or the document catalog.",
        "Actions can also be sequenced. An action dictionary's optional Next entry points to another action, or to an array of actions, to perform after the current one finishes. That lets a single trigger drive a small tree of behavior — for example, hide a field and then navigate to a page — without needing a script."
      ]
    },
    {
      "heading": "What Triggers an Action",
      "body": [
        "An action does nothing until an event fires it. The simplest case is the A entry on a link annotation or an outline item: activating the link or bookmark runs that action. The document catalog's OpenAction runs when the document is opened, and it may hold either an action dictionary or a destination.",
        "Richer event handling uses an additional-actions dictionary, referenced by the AA entry, which maps named events to actions. Pages can define actions for open and close; form fields and their widgets can define actions for events such as focus, blur, mouse enter and exit, and the value events keystroke, format, validate, and calculate; the catalog can define actions around saving and printing. This event model is what makes form-field calculation and validation possible."
      ]
    },
    {
      "heading": "The Common Action Types",
      "body": [
        "The specification defines a fixed set of action types. Navigation actions include GoTo (jump to a destination in the same document), GoToR (a destination in another PDF), and Named actions such as NextPage, PrevPage, FirstPage, and LastPage that invoke a viewer's built-in commands. URI actions resolve a web address. Form actions include SubmitForm (send field data to a server), ResetForm (restore field defaults), and ImportData (load field data from a file).",
        "Other types cover a broader range of behavior: Launch opens or prints an external file or application, Hide shows or hides annotations and fields, and JavaScript runs an embedded script. Later PDF versions added action types such as SetOCGState for toggling optional-content layers, along with actions for multimedia and 3D views; some earlier multimedia actions (Sound and Movie) were deprecated in PDF 2.0. Because no viewer is required to implement every type, the same action can behave differently across applications."
      ]
    },
    {
      "heading": "Actions, Security, and Portability",
      "body": [
        "Because actions can reach outside the file or run code, they carry security weight. Launch, URI, SubmitForm, ImportData, and JavaScript actions can contact servers, open programs, or execute scripts, so viewers commonly warn before running them, disable them by default, or run scripts inside a restricted sandbox. An OpenAction that silently runs JavaScript has historically been a malware vector, which is why hardened readers block automatic scripts.",
        "Actions also affect portability and archiving. Archival profiles in the PDF/A family restrict which actions a conforming file may contain, excluding those that execute code or depend on external resources, so the document renders the same way far into the future. And when a form is flattened or a document is printed to a static PDF, its interactive objects — and the actions attached to them — are discarded, leaving only fixed page content."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Type set by the S key",
      "value": "An action's behavior is chosen by its S (subtype) name entry, such as GoTo, URI, or JavaScript."
    },
    {
      "label": "Chained with Next",
      "value": "An action's optional Next entry runs one or more follow-on actions after it completes."
    },
    {
      "label": "Fired by A, OpenAction, or AA",
      "value": "Actions attach to links and bookmarks (A), run on document open (OpenAction), or bind to events through an additional-actions (AA) dictionary."
    },
    {
      "label": "Defined in ISO 32000",
      "value": "Actions are part of the PDF interactive model specified in ISO 32000; a few multimedia action types were deprecated in PDF 2.0."
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "latestVersion": "Extended through PDF 2.0 (ISO 32000-2)",
    "introduced": "Present since early PDF versions",
    "typicalUsage": "Driving links, bookmarks, form buttons, and document-open behavior in interactive PDFs.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Actions and destinations are the same thing.",
      "truth": "A destination only describes a view of a page. A GoTo action wraps a destination, but many action types — URI, JavaScript, SubmitForm — do things a destination cannot. A link can use either a direct destination or an action."
    },
    {
      "claim": "Every clickable link in a PDF runs JavaScript.",
      "truth": "Most links are simple GoTo or URI actions. JavaScript is a separate, optional action type that many viewers restrict or disable, and it is not needed for ordinary navigation or web links."
    },
    {
      "claim": "Actions are stored inside the page's content.",
      "truth": "Actions live in interactive objects such as annotations, form fields, and the document catalog — not in the page content stream. Removing annotations or flattening a form can drop the actions with them."
    }
  ],
  "faq": [
    {
      "q": "What is an action dictionary in a PDF?",
      "a": "It is the object that stores a single action. Its S entry names the action type (such as GoTo or URI) and its other entries supply that type's parameters, like the destination page or a web address. The dictionary is referenced from an interactive object — a link, a bookmark, a form field, or the document catalog."
    },
    {
      "q": "Can a PDF run something automatically when it opens?",
      "a": "Yes. The document catalog can define an OpenAction that runs when the file opens, and an additional-actions dictionary can react to events like saving or printing. If that action runs JavaScript, many viewers block it or prompt first, because auto-running scripts have been abused for malware."
    },
    {
      "q": "Why did a link or button in my PDF stop working?",
      "a": "Common causes include a GoTo action pointing at a named destination or page that no longer exists, a GoToR or Launch action referencing a file that moved, or a viewer that blocks URI, Launch, or JavaScript actions for security. The action may still be present but unresolved or refused at click time."
    },
    {
      "q": "Do all PDF viewers support the same actions?",
      "a": "No. Navigation and link actions are widely supported, but scripting, multimedia, and launch actions vary, and some viewers disable them by default. A few older action types were deprecated in PDF 2.0, so the same file can behave differently across applications."
    },
    {
      "q": "Do actions survive when I flatten or print a PDF?",
      "a": "No. Actions live in interactive objects, not in page content. Flattening a form or printing to a static PDF produces fixed pages and discards the annotations, fields, and the actions attached to them, so links and buttons become inert."
    }
  ],
  "graph": {
    "parentConcept": "pdf-interactive-features",
    "relatedConcepts": [
      "widget-annotations",
      "pdf-outlines",
      "form-flattening",
      "optional-content-groups",
      "form-calculation",
      "fdf-and-xfdf"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pdf-a"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "PDF Forms — Fill, Sign and Manage Fillable PDFs",
        "path": "/pdf-forms"
      }
    ],
    "relatedGuides": [
      {
        "label": "How PDF Forms Work — Fields, AcroForms and Flat Scans",
        "path": "/guides/how-pdf-forms-work"
      }
    ]
  },
  "seeAlso": [
    "pdf-interactive-features",
    "link-annotations",
    "named-destinations",
    "javascript-in-pdf",
    "pdf-annotations",
    "pdf-bookmarks",
    "acroform",
    "pdf-document-catalog"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
