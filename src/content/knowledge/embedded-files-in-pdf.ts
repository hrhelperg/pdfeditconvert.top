import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "embedded-files-in-pdf",
  "h1": "Embedded Files in PDF",
  "cluster": "metadata-tooling",
  "aliases": [
    "PDF attachments",
    "file attachments in PDF",
    "embedded file streams",
    "PDF embedded files",
    "attached files"
  ],
  "definition": "Embedded files in PDF are complete external files — spreadsheets, XML, images or other PDFs — stored as byte streams inside the document and referenced through file specification dictionaries.",
  "description": "How PDF embeds whole files like XML, spreadsheets or other PDFs as compressed streams, where viewers find them, and how PDF/A-3 and portfolios use them.",
  "searchIntent": "metadata",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF is usually thought of as a fixed page container, but the format also lets a document carry complete, unrelated files inside it — a spreadsheet, an XML invoice, a CAD drawing, or even another PDF. These are embedded files, commonly called attachments. The bytes of the attached file are stored verbatim inside the PDF's object structure and are not rendered as page content; a viewer surfaces them separately, typically in an attachments or paperclip panel.",
    "Embedded files are a long-standing part of the PDF specification and are defined in ISO 32000. They rest on two building blocks: a file specification dictionary that names and describes the file, and an embedded file stream that holds its actual bytes. Because the payload is opaque to the PDF viewer, an attachment must be extracted and handed to an appropriate application before it can be opened or used.",
    "This mechanism underpins several higher-level features — PDF Portfolios that package many files behind a browsing interface, the Associated Files system introduced in PDF 2.0, and archival profiles such as PDF/A-3 that deliberately allow embedding source data alongside a human-readable rendering. It also has real consequences for file size, security, and information leakage."
  ],
  "sections": [
    {
      "heading": "How PDF stores an embedded file",
      "body": [
        "An attachment is described by a file specification dictionary (type Filespec). For a simple external reference this dictionary just holds a path or URL, but for a true embedded file it includes an embedded-file entry (EF) that points to one or more embedded file streams. The stream itself is an ordinary PDF stream object marked with type EmbeddedFile, and its bytes are almost always compressed with FlateDecode, like any other stream in the document.",
        "The file specification records the file name in its F entry and a Unicode version in UF, and it can carry a human-readable description. The embedded file stream can declare the file's media type through a Subtype name (a MIME type such as application/xml) and attach a Params dictionary describing the original file — its uncompressed size, creation and modification dates, and an MD5 checksum used to detect corruption. None of this changes how the page looks; it is bookkeeping around a stored blob."
      ]
    },
    {
      "heading": "Where attachments live: name trees and annotations",
      "body": [
        "There are two standard places a PDF keeps attachments. Document-level attachments are registered in a name tree: the document catalog has a Names dictionary whose EmbeddedFiles entry maps human-readable names to file specification dictionaries. This is the collection a viewer shows in its global attachments panel, independent of any particular page.",
        "The second place is on a page. A file-attachment annotation (subtype FileAttachment) anchors an attachment to a specific location and is usually drawn as a paperclip or push-pin icon; its file-specification entry references the same kind of dictionary. Page-level attachments suit review comments or tying a source file to the figure it produced, while the name tree is the right home for document-wide packages."
      ]
    },
    {
      "heading": "Associated files, portfolios, and packages",
      "body": [
        "PDF 2.0 (ISO 32000-2) formalized the relationship between an attachment and the rest of the document through Associated Files. An AF array can be attached to the catalog, a page, an annotation, an XObject, or a structure element, and each referenced file specification carries an AFRelationship key describing why the file is there — with values such as Source, Data, or Supplement. This lets software understand, for example, that an embedded XML file is the machine-readable source of the visible page rather than an unrelated download.",
        "On top of embedded files, a PDF can present itself as a collection, or PDF Portfolio, by adding a Collection entry to the catalog. The cover PDF then acts as a container and viewers render the embedded files as a browsable set with sorting and preview. A portfolio is only a presentation layer — the files underneath are still ordinary embedded file streams registered the usual way."
      ]
    },
    {
      "heading": "Embedded files in PDF/A and electronic invoices",
      "body": [
        "Archival standards treat attachments carefully, because a self-contained archive should not depend on files it cannot itself preserve. PDF/A-1 prohibits embedded files entirely. PDF/A-2 relaxes this to allow embedding other files only if they are themselves PDF/A-compliant. PDF/A-3 goes furthest and permits embedding a file of any format, provided each attachment declares an AFRelationship.",
        "That PDF/A-3 allowance is what makes hybrid electronic-invoice formats such as Factur-X and ZUGFeRD possible: a human-readable PDF/A invoice carries the very same invoice as machine-readable XML embedded inside it, so one file serves both people and accounting systems. This pattern — a rendered document plus its structured source data travelling together — is the main reason associated and embedded files matter beyond simple attachments."
      ]
    },
    {
      "heading": "Size, security, and hidden data",
      "body": [
        "Because an embedded file stores the attachment's full (compressed) bytes, attachments can make a PDF far larger than its visible pages suggest; a report that embeds its underlying dataset can be many times the size of the same report without it. Embedded files are one of the first things to check when a PDF is unexpectedly large.",
        "Attachments are also a security and privacy consideration. An embedded file can be an executable, a macro-enabled document, or a script, so many viewers restrict or warn before opening one. Just as important, attachments live outside the page content, so removing or redacting visible text does not touch them — a document that looks clean can still carry an embedded spreadsheet full of source data. Sanitizing a PDF before sharing means explicitly reviewing and removing its embedded files, not only its pages."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Object type",
      "value": "Each attachment is a stream object of type EmbeddedFile, usually FlateDecode-compressed, referenced through a file specification dictionary."
    },
    {
      "label": "Where they live",
      "value": "Document-level attachments are listed in the EmbeddedFiles name tree under the catalog's Names entry; page-level ones use FileAttachment annotations."
    },
    {
      "label": "PDF/A rules",
      "value": "PDF/A-1 forbids embedded files, PDF/A-2 allows only embedded PDF/A files, and PDF/A-3 allows files of any format."
    },
    {
      "label": "PDF 2.0 addition",
      "value": "PDF 2.0 added Associated Files (AF), which link an embedded file to a specific document, page, annotation, or structure element."
    }
  ],
  "specification": {
    "typicalUsage": "Embedding source data and supplementary files, carrying machine-readable XML invoices (Factur-X, ZUGFeRD) inside PDF/A-3, and packaging many files as a PDF Portfolio.",
    "relatedStandards": [
      "pdf-a-3",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Embedding a file merges its contents into the PDF's pages.",
      "truth": "The attachment is stored as a separate, opaque byte stream inside the PDF container and is never rendered as page content; it must be extracted and opened in its own application."
    },
    {
      "claim": "Deleting pages or redacting text also removes any attached files.",
      "truth": "Embedded files are held in the catalog's name tree or in annotations, independently of page content, so they survive page deletion and text redaction unless they are removed explicitly."
    },
    {
      "claim": "PDF/A archival files cannot contain attachments.",
      "truth": "PDF/A-1 does forbid them, but PDF/A-2 allows embedding other PDF/A files and PDF/A-3 allows embedding files of any format, which is how hybrid invoice formats work."
    }
  ],
  "faq": [
    {
      "q": "How do I open an embedded file inside a PDF?",
      "a": "A viewer that supports attachments lists them in an attachments or paperclip panel; you save (extract) the file to disk and open it in an application that understands its format, because the PDF viewer itself does not interpret the embedded bytes."
    },
    {
      "q": "Is a PDF Portfolio the same as an embedded file?",
      "a": "No. A portfolio is a presentation layer that displays a set of embedded files as a browsable package; the underlying attachments are still ordinary embedded file streams registered in the usual way."
    },
    {
      "q": "Does a scanned image or a chart in a PDF count as an embedded file?",
      "a": "No. Images drawn on the page are image XObjects that are part of the page's content, whereas embedded files are complete external files stored alongside the pages and not shown on them."
    },
    {
      "q": "What is the difference between an embedded file and a linked file in a PDF?",
      "a": "A file specification can either embed the file's bytes directly or just reference an external file by path or URL; an embedded file travels inside the PDF and stays available offline, while an external reference points to a separate file that must exist on its own."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "pdf-mime-type",
      "pdf-redaction",
      "flate-decode"
    ],
    "relatedStandards": [
      "pdf-a-3",
      "pdf-a-2",
      "pdf-a"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Prepare a PDF Before Sharing (Checklist)",
        "path": "/guides/how-to-prepare-pdf-before-sharing"
      },
      {
        "label": "Why Is My PDF So Large? Causes and Fixes",
        "path": "/guides/why-is-my-pdf-so-large"
      }
    ]
  },
  "seeAlso": [
    "associated-files-in-pdf",
    "pdf-portfolios",
    "pdf-a-3",
    "pdf-metadata",
    "pdf-annotations",
    "pdf-stream-objects",
    "pdf-document-catalog",
    "pdf-file-structure"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
