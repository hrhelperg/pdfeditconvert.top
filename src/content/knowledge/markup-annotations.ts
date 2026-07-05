import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "markup-annotations",
  "h1": "Markup Annotations in PDF",
  "cluster": "interactivity",
  "aliases": [
    "Comment annotations",
    "Review annotations",
    "PDF markups",
    "Document markup annotations"
  ],
  "definition": "Markup annotations are the PDF annotation subtypes—notes, highlights, shapes, ink, and stamps—used to comment on and review a document, carrying author, date, and reply metadata.",
  "description": "Markup annotations are the PDF comment types—notes, highlights, shapes, ink and stamps—that carry author, date and reply data for document review.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Markup annotations are the family of PDF annotations built for commenting on and reviewing a document. When you add a sticky note, highlight a sentence, draw an arrow, or stamp \"Approved\" onto a page, you are creating a markup annotation. They sit on top of the page content as separate interactive objects rather than changing the underlying text or graphics beneath them.",
    "What sets them apart from other annotations is that the PDF specification groups them together and gives them a shared set of properties for collaboration: an author label, a creation date, an optional popup note window, and the ability to reply to one another. This is what lets a PDF viewer present a threaded, reviewer-facing list of comments contributed by different people.",
    "Not every annotation is a markup annotation. Link annotations, form-field Widget annotations, and the Popup windows that display note text are all defined separately, because they do not represent a reviewer's comment. Understanding that boundary makes the rest of the PDF annotation model much easier to follow."
  ],
  "sections": [
    {
      "heading": "Which Annotations Count as Markup Annotations",
      "body": [
        "The PDF specification separates annotations that are meant to mark up a document for review from those that serve other purposes. The markup subtypes include Text (sticky notes), FreeText, Line, Square, Circle, Polygon, PolyLine, Highlight, Underline, Squiggly, StrikeOut, Stamp, Caret, Ink, FileAttachment, and Sound. These are the objects a person adds when reading and commenting on a page.",
        "Annotations such as Link, Widget (which back interactive form fields), and Popup are deliberately not markup annotations, because they are not a reviewer's comment on the content. The distinguishing trait is that markup annotations are designed to appear together in a comments or review interface and to carry authorship information, while the other types exist to provide navigation, form behavior, or supporting display."
      ]
    },
    {
      "heading": "Shared Entries That Support Review",
      "body": [
        "Because markup annotations exist for collaboration, the specification gives them common dictionary entries beyond the base properties every annotation has. The T entry holds a text label, typically the author's name, shown in the title bar of the note window. A Popup entry references the associated popup annotation that displays the note text, and CA sets a constant opacity for the annotation's appearance. CreationDate records when the annotation was made, and RC can hold a rich-text version of the note contents.",
        "Collaboration also depends on relationships between annotations. The IRT (\"in reply to\") entry points one annotation at another so that viewers can build reply threads, and RT indicates whether an annotation is a reply or the start of a group. A Subj entry can give a comment a short subject line. Together these fields turn a loose set of marks into a structured conversation that reviewers can follow."
      ]
    },
    {
      "heading": "Text Markup vs. Drawing and Note Types",
      "body": [
        "Within the markup category, a smaller group—Highlight, Underline, StrikeOut, and Squiggly—are the text markup annotations. They attach to regions of page text using a QuadPoints array that lists the corner coordinates of each quadrilateral the markup covers. Crucially, they record a location on the page rather than the characters themselves; the words come from the content stream beneath the markup, which is why a highlight can drift if the underlying text is edited.",
        "The remaining markup types draw independent content. Line, Square, Circle, Polygon, PolyLine, and Ink render shapes and freehand strokes; a Text annotation places a note icon that opens to reveal a comment; a Stamp overlays a graphic or a label such as a review status; and FileAttachment and Sound embed a resource anchored to a point on the page. All of these are markup annotations because they represent something a reviewer added, even though only the text markup subset ties itself to existing words."
      ]
    },
    {
      "heading": "How Markup Annotations Are Displayed",
      "body": [
        "A markup annotation can define an appearance stream, a small self-contained graphics description that tells a viewer exactly how to draw the annotation. This keeps rendering consistent across different readers, so a highlight or stamp looks the same everywhere instead of each viewer guessing. The note text itself is usually presented through an associated popup annotation, which many readers collapse into an icon until it is opened, or gather into a dedicated comments pane.",
        "Annotation flags control aspects of behavior, including whether a markup annotation is included when the page is printed. This is why comments visible on screen do not automatically appear on paper unless their print flag is set. The separation between the annotation, its appearance stream, and its popup is what allows a reviewer to move, hide, or reply to a comment without disturbing the document's actual page content."
      ]
    },
    {
      "heading": "Sharing and Removing Markup",
      "body": [
        "Markup annotation data can be exported and re-imported using the FDF and XFDF formats, which let reviewers exchange just the comments without passing around the whole document. This is useful when several people annotate copies of the same file and their feedback needs to be merged back together.",
        "When markup should become a permanent, non-editable part of a page, flattening merges each annotation's appearance stream into the page content stream and discards the interactive object along with its author and reply metadata. Flattening is different from redaction, which removes underlying content rather than layering a comment over it—an important distinction when the goal is to protect sensitive information rather than simply finalize a review."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Not all annotations qualify",
      "value": "Link, Widget (form field), and Popup annotations are excluded from the markup category."
    },
    {
      "label": "Text markup uses QuadPoints",
      "value": "Highlight, Underline, StrikeOut, and Squiggly bind to regions of text via a QuadPoints coordinate array."
    },
    {
      "label": "Author lives in the T entry",
      "value": "A markup annotation's T entry holds the label (usually the author name) shown on its note window."
    },
    {
      "label": "Replies via IRT",
      "value": "Threaded comments are built with the IRT (\"in reply to\") entry pointing at another annotation."
    }
  ],
  "specification": {
    "typicalUsage": "Adding review comments—notes, highlights, shapes, stamps, and ink—as interactive objects on a PDF page",
    "iso": "ISO 32000 (PDF)",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "\"Markup annotations\" and \"text markup annotations\" mean the same thing.",
      "truth": "Text markup (Highlight, Underline, StrikeOut, Squiggly) is only a subset; the markup category also covers notes, shapes, ink, stamps, and file attachments."
    },
    {
      "claim": "Every annotation in a PDF is a markup annotation.",
      "truth": "Link, Widget, and Popup annotations are defined separately and do not carry review metadata such as author name or reply relationships."
    },
    {
      "claim": "A highlight annotation stores the highlighted text itself.",
      "truth": "A text markup annotation records a region of the page with QuadPoints; the actual words come from the content stream beneath it."
    }
  ],
  "faq": [
    {
      "q": "How is a markup annotation different from a popup annotation?",
      "a": "The markup annotation is the comment itself; the popup is a child window that displays its note text. The markup annotation's Popup entry links to that popup, and popups are not markup annotations on their own."
    },
    {
      "q": "Where is the comment's author and time stored?",
      "a": "The author label lives in the T entry, and the CreationDate entry records when the annotation was made. Some viewers also read the modification date from the base annotation's M entry."
    },
    {
      "q": "Can markup annotations be shared without sending the whole PDF?",
      "a": "Yes. Their data can be exported to FDF or XFDF, which carry annotation content so comments can be exchanged and merged back into a copy of the document."
    },
    {
      "q": "Do markup annotations show up when a PDF is printed?",
      "a": "It depends on the annotation's flags. Whether a given comment appears on paper is controlled by its print flag, so on-screen markup is not always printed by default."
    },
    {
      "q": "What happens to markup annotations when a PDF is flattened?",
      "a": "Flattening bakes each annotation's appearance stream into the page content and removes the interactive object, so the marks remain visible but can no longer be edited, moved, or replied to."
    }
  ],
  "graph": {
    "parentConcept": "pdf-annotations",
    "relatedConcepts": [
      "pdf-interactive-features",
      "pdf-redaction",
      "form-flattening"
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
    "pdf-annotations",
    "annotation-types",
    "link-annotations",
    "widget-annotations",
    "popup-annotations",
    "appearance-streams",
    "fdf-and-xfdf",
    "pdf-actions"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
