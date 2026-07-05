import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "document-properties",
  "h1": "PDF Document Properties",
  "cluster": "metadata-tooling",
  "aliases": [
    "Document Properties",
    "PDF properties",
    "Document description",
    "PDF file properties",
    "Document metadata panel"
  ],
  "definition": "PDF Document Properties are the metadata and file attributes a viewer collects and displays about a document, including title, author, dates, producer, page size and security settings.",
  "description": "How a PDF viewer's Document Properties panel works: the metadata fields, dates and file attributes it shows, and where each value is actually stored.",
  "searchIntent": "concept",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "In everyday use, a PDF's document properties are the readable summary a viewer shows when you open a file's information dialog. In Adobe Acrobat and Reader this is the Document Properties window (File ▸ Properties). It gathers a document's title, author, subject and keywords alongside technical details such as the creating application, the PDF producer, the PDF version, the page size, and whether the file is secured — the closest thing PDF has to an \"about this document\" screen.",
    "What looks like a single panel is really an aggregation. A viewer assembles these values from several places inside the file: the document information dictionary referenced by the trailer, an optional XMP metadata stream attached to the document catalog, the encryption dictionary, and structural objects such as the page tree. Some values, like page dimensions or the PDF version, are read or computed from the file's structure rather than stored as free-form text.",
    "Because this metadata travels with the file wherever it is copied or emailed, document properties matter beyond curiosity. They feed search and library indexing, drive archiving and preflight workflows, and can quietly carry authorship or software history you did not intend to share. Knowing what each field means — and where it lives — is the starting point for reading, editing, or clearing it."
  ],
  "sections": [
    {
      "heading": "What the properties panel surfaces",
      "body": [
        "In Acrobat the Document Properties dialog is organized into tabs — Description, Security, Fonts, Initial View, Custom and Advanced. The Description tab is the one most people mean by \"document properties\": title, author, subject, keywords, the created and modified dates, the authoring application, and the PDF producer. Other viewers present a shorter list, but the underlying data is the same. The panel is read-mostly, so it reflects whatever is stored in the file at that moment, and two tools can show slightly different values for one document if they read different metadata sources.",
        "It helps to separate two kinds of entries. Descriptive fields, such as title and keywords, are free text written by a person or by the producing software. Computed attributes, such as the page size, page count, PDF version and whether the file uses fast web view, are derived by the viewer from the file's structure rather than typed in. You can edit the first group directly; the second group changes only when the document itself is rebuilt."
      ]
    },
    {
      "heading": "Where the values are stored",
      "body": [
        "Most descriptive metadata lives in the document information dictionary — usually just called the Info dictionary — a small dictionary referenced by the /Info entry in the file trailer. It holds a defined set of standard keys: Title, Author, Subject, Keywords, Creator, Producer, CreationDate, ModDate and Trapped. Alongside it, XMP metadata (an XML/RDF-based format Adobe introduced) can be stored as a stream attached to the document catalog under /Metadata, carrying the same descriptive fields plus richer, extensible schemas. When both are present they are expected to agree; PDF 2.0 deprecates most Info-dictionary entries in favour of XMP while retaining the creation and modification dates.",
        "The rest of the panel is assembled from elsewhere in the file. Security settings come from the encryption dictionary, page size comes from each page's MediaBox, the PDF version comes from the file header and can be overridden by a Version entry in the catalog, and the tagged and fast-web-view indicators come from the catalog's MarkInfo entry and from linearization. This is why \"document properties\" is best understood as a viewer's convenience view over many objects rather than a single stored record."
      ]
    },
    {
      "heading": "Descriptive fields: title, author, and the rest",
      "body": [
        "Two fields are frequently confused. Creator names the original application a document was authored in — for example a word processor or design tool — while Producer names the software that converted or generated the final PDF. Title, Author, Subject and Keywords are free text; when a Title is set, many viewers show it in the window's title bar in place of the filename. All of these entries are optional and self-reported, so any of them may be blank.",
        "Dates are stored as PDF date strings, which begin with the prefix D: followed by year, month, day and time (YYYYMMDDHHmmSS) and an optional UTC offset — for instance a value starting D:20260704. CreationDate records when the document was produced and ModDate when it was last changed, but because both are written by the producing software they are hints rather than proof. The Trapped key, with the values True, False or Unknown, is a print-production flag indicating whether trapping has been applied."
      ]
    },
    {
      "heading": "Structural and security properties",
      "body": [
        "The remaining tabs describe how the file is built and protected rather than what it is about. Page size and orientation come from the page objects, the PDF version identifies the specification the file targets, and flags indicate whether the document is tagged for accessibility or linearized for fast web view. None of these are free-form metadata; they are structural facts a viewer reports back to you.",
        "The Security tab reflects the encryption dictionary: the encryption method in use and the permission flags that state whether printing, copying text, or editing are allowed. These permissions are recorded inside the file and enforced by conforming readers, so the panel is describing the document's declared protections rather than granting or removing them. To change what the panel shows here, you change the underlying security settings."
      ]
    },
    {
      "heading": "Editing and clearing document properties",
      "body": [
        "Because metadata is stored in separate objects from page content, deleting or redacting what you can see does not remove the properties, and clearing the properties does not touch the pages. Tools that edit document properties write new values into the Info dictionary and, where present, the XMP stream; a sanitize or \"remove hidden information\" operation strips those values out. This separation is the reason a file emailed to a client can still carry an old author name or the name of the software used to create it.",
        "For reference purposes it is enough to know that properties are readable, editable and removable independently of the visible document. When you actually need to set a title, correct an author, or clear metadata before sending a file, a PDF editor exposes these fields, and a pre-share checklist walks through what to review first."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard Info fields",
      "value": "Title, Author, Subject, Keywords, Creator, Producer, CreationDate, ModDate and Trapped"
    },
    {
      "label": "Two storage locations",
      "value": "The document information dictionary (via the trailer's /Info) and an XMP metadata stream attached to the catalog"
    },
    {
      "label": "Date format",
      "value": "PDF date strings begin with D: followed by YYYYMMDDHHmmSS and an optional UTC offset"
    },
    {
      "label": "Creator vs Producer",
      "value": "Creator names the original authoring application; Producer names the tool that generated the PDF"
    }
  ],
  "misconceptions": [
    {
      "claim": "The title shown in Document Properties is the file's name.",
      "truth": "The Title field is metadata stored inside the PDF and is independent of the filename on disk; changing one does not change the other, though many viewers display the Title in the window bar when it is set."
    },
    {
      "claim": "Deleting a page or redacting text also removes the document's metadata.",
      "truth": "Metadata lives in separate objects — the Info dictionary and any XMP stream — so it persists until you edit or sanitize it explicitly."
    },
    {
      "claim": "The creation and modification dates prove when a document was really made or changed.",
      "truth": "These dates are self-reported by the producing software, are optional, and can be absent, inaccurate, or altered; they are not a cryptographic guarantee."
    }
  ],
  "faq": [
    {
      "q": "Where are document properties stored inside a PDF?",
      "a": "In the document information dictionary referenced by the file trailer and/or an XMP metadata stream attached to the document catalog; a viewer also computes some values, such as page size and PDF version, from the file's structure."
    },
    {
      "q": "What is the difference between the Creator and Producer fields?",
      "a": "Creator names the original application a document was authored in, while Producer names the software that converted or generated the final PDF."
    },
    {
      "q": "Why are some property fields blank?",
      "a": "All descriptive fields are optional, so the producing software may simply not have written them; a blank field is normal and does not indicate an error."
    },
    {
      "q": "Are a PDF's document properties the same as the file properties my operating system shows?",
      "a": "No. Operating-system file properties such as the filename, size and disk dates describe the file on disk, while PDF document properties are metadata stored inside the document and travel with it when copied."
    },
    {
      "q": "Can document properties be edited?",
      "a": "Yes — descriptive fields like title, author, subject and keywords can be edited or cleared, while structural properties such as page size and PDF version reflect how the file is built and change only when the document is rebuilt."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "pdf-trailer",
      "pdf-document-catalog",
      "linearized-pdf",
      "tagged-pdf",
      "pdf-permission-flags",
      "pdf-page-size"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pdf-a-metadata-requirements"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      },
      {
        "label": "PDF Security — Password Protect and Encrypt PDFs",
        "path": "/pdf-security"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Prepare a PDF Before Sharing (Checklist)",
        "path": "/guides/how-to-prepare-pdf-before-sharing"
      },
      {
        "label": "Common PDF Mistakes to Avoid",
        "path": "/guides/common-pdf-mistakes-to-avoid"
      }
    ]
  },
  "seeAlso": [
    "pdf-metadata",
    "document-information-dictionary",
    "xmp-metadata",
    "xmp-vs-info-dictionary",
    "custom-metadata-in-pdf",
    "pdf-file-identifiers",
    "pdf-metadata-standards"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
