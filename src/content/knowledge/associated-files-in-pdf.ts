import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "associated-files-in-pdf",
  "h1": "Associated Files in PDF",
  "cluster": "metadata-tooling",
  "aliases": [
    "Associated files",
    "AF (associated files)",
    "/AF array",
    "AFRelationship files",
    "PDF /AF entry"
  ],
  "definition": "Associated files are embedded files linked to specific PDF content — a document, page, or object — through an /AF entry and an /AFRelationship that states how the file relates to that content.",
  "description": "How PDF associated files use the /AF array and /AFRelationship to bind embedded source data, XML, or alternative representations to specific document objects.",
  "searchIntent": "metadata",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Associated files are a PDF mechanism for carrying machine-usable data alongside a rendered page and declaring what that data is. A chart on the page can be paired with the spreadsheet it came from; a human-readable invoice can be paired with a structured XML version of the same figures. The extra file travels inside the PDF, but unlike a loose attachment it is tied to a specific object and labelled with a defined relationship.",
    "Technically, an associated file is an ordinary embedded file (a file specification dictionary pointing at an embedded file stream) that is referenced from an /AF array on the object it belongs to and marked with an /AFRelationship value describing its role. Any embedded file can be an attachment; an associated file adds two things a plain attachment lacks — a link to a particular object and a stated relationship to that object's content.",
    "The concept was introduced by PDF/A-3 in 2012 to allow archival PDFs to embed source files of any format, and was later incorporated into the core standard in PDF 2.0. Its best-known application is the hybrid electronic invoice — a PDF/A-3 document that a person can read normally while a machine extracts the embedded structured data behind it."
  ],
  "sections": [
    {
      "heading": "What Makes a File \"Associated\"",
      "body": [
        "Every associated file starts as an embedded file: a file specification dictionary that names the file and points, through its /EF entry, at an embedded file stream holding the bytes. What turns it into an associated file is the combination of two additions. First, the object it belongs to gains an /AF entry — an array of references to those file specification dictionaries. Second, each file specification dictionary carries an /AFRelationship key that names the relationship between the embedded data and the content it is attached to.",
        "This distinction matters because a plain embedded attachment sits in the document's EmbeddedFiles name tree with no declared connection to anything on the page — it is simply along for the ride. An associated file, by contrast, tells a processor both where it belongs and why. That is what lets software reliably find, for example, the exact data table behind one figure rather than guessing from a bag of unlabelled attachments."
      ]
    },
    {
      "heading": "Where Associated Files Can Attach",
      "body": [
        "An /AF array is not limited to the document as a whole. It can be placed on the document catalog for document-level files, but also on individual page objects, on Form and Image XObjects, on annotations, on structure elements in a tagged PDF, and on document part (DPart) dictionaries. This lets the association be as coarse or as fine-grained as needed — a whole document, one page, or a single graphic.",
        "Attaching an associated file to a structure element is particularly useful for tagged and data-rich documents: a tagged figure or table can point directly at the machine-readable data that produced it, keeping the visual element and its underlying source together and discoverable. Because the link is expressed by object references, the same embedded file can, in principle, be associated with more than one object."
      ]
    },
    {
      "heading": "The AFRelationship Types",
      "body": [
        "The /AFRelationship value classifies what the embedded file is relative to its content. PDF/A-3 defined a small set: Source (the original material the content was generated from), Data (data used to derive a visual presentation, such as the numbers behind a chart), Alternative (an alternative representation of the content), Supplement (additional or fuller content), and Unspecified (relationship not stated). PDF 2.0 kept these and added further values for cases such as encrypted payloads, form data, and schema definitions.",
        "The relationship is a hint about intent, not an instruction to render anything. A processor uses it to decide how to treat the file — for instance, an archival or data-extraction tool looks for a Data or Alternative file to read the structured content, while a Source file signals the editable original. Applications are free to interpret or ignore these values, so the label documents purpose rather than guaranteeing behaviour."
      ]
    },
    {
      "heading": "PDF/A-3 and Hybrid Documents",
      "body": [
        "Associated files exist largely because PDF/A-2 forbade embedding files unless they were themselves valid PDF/A. PDF/A-3 relaxed this so a conforming archive could embed a source file of any format — a spreadsheet, a CAD model, an XML document — provided each such file was declared as an associated file with an /AFRelationship. This turned the PDF into a self-contained package of both the human-readable rendering and the original data.",
        "The flagship example is the hybrid electronic invoice standards Factur-X and ZUGFeRD, which are PDF/A-3 documents carrying a structured XML invoice as an associated file. A person opens the PDF and reads a normal invoice; an accounts-payable system reads the embedded XML to process the same invoice automatically, without re-keying or OCR. The associated-file mechanism is what makes the XML reliably locatable and correctly labelled inside the document."
      ]
    },
    {
      "heading": "How Processors and Viewers Handle Them",
      "body": [
        "The /AF link is machine-readable metadata, not a display feature. Whether a viewer surfaces an associated file — and how — is up to the application. To keep files reachable in software that does not understand the /AF mechanism, PDF 2.0 recommends that associated files also appear in the document's EmbeddedFiles name tree, so an older viewer can still present them as ordinary attachments even if it ignores the association.",
        "For anyone auditing or preparing a document, this means associated files are a form of hidden, embedded content: they can carry entire source documents that are not visible on the page. Validation and preflight tools inspect the /AF arrays and /AFRelationship values to confirm that embedded data is present, correctly linked, and appropriately classified — which is also why a document can look empty of attachments in one viewer yet contain substantial associated data."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Introduced by",
      "value": "PDF/A-3 (ISO 19005-3:2012) as an extension; incorporated into core PDF in PDF 2.0 (ISO 32000-2)"
    },
    {
      "label": "Link mechanism",
      "value": "An /AF array on an object references file specification dictionaries for the associated files"
    },
    {
      "label": "Relationship key",
      "value": "Each associated file carries an /AFRelationship value (Source, Data, Alternative, Supplement, Unspecified, and more in PDF 2.0)"
    },
    {
      "label": "Relation to attachments",
      "value": "Every associated file is an embedded file, but it adds a declared relationship and a link to a specific object"
    }
  ],
  "specification": {
    "introduced": "PDF/A-3 (2012); core PDF in PDF 2.0 (2017)",
    "iso": "ISO 32000-2 (PDF 2.0); ISO 19005-3 (PDF/A-3)",
    "latestVersion": "PDF 2.0 (ISO 32000-2, revised 2020)",
    "typicalUsage": "Binding embedded source data, XML, or alternative representations to specific PDF content, as in PDF/A-3 hybrid invoices (Factur-X / ZUGFeRD)",
    "relatedStandards": [
      "pdf-a-3",
      "pdf-2-0",
      "iso-32000",
      "pdf-a"
    ]
  },
  "misconceptions": [
    {
      "claim": "Associated files and embedded file attachments are the same thing.",
      "truth": "All associated files are embedded files, but an associated file additionally declares an /AFRelationship and is linked to a specific object through an /AF array; a plain attachment has neither."
    },
    {
      "claim": "Associated files require PDF 2.0.",
      "truth": "They were first defined by PDF/A-3 in 2012 and appear in PDF/A-3 documents such as Factur-X invoices; PDF 2.0 later made them part of the core standard."
    },
    {
      "claim": "An associated file is automatically shown inline on the page.",
      "truth": "The /AF link is machine-readable metadata about a relationship, not a rendering instruction; whether and how a viewer surfaces the file is up to the application."
    }
  ],
  "faq": [
    {
      "q": "What is the /AF entry in a PDF?",
      "a": "It is an array placed on an object — the document catalog, a page, an XObject, an annotation, or a structure element — that references the file specification dictionaries of the files associated with that object. It is what links embedded data to specific content."
    },
    {
      "q": "What does AFRelationship describe?",
      "a": "It classifies how an associated file relates to its content. Defined values include Source, Data, Alternative, Supplement, and Unspecified, with additional values such as encrypted payload, form data, and schema added in PDF 2.0. It documents intent rather than forcing any behaviour."
    },
    {
      "q": "How do associated files relate to Factur-X and ZUGFeRD invoices?",
      "a": "Those hybrid invoice standards are PDF/A-3 documents that embed a structured XML invoice as an associated file. Software reads the XML to process the invoice automatically, while a person reads the normal PDF rendering of the same data."
    },
    {
      "q": "Which objects can have associated files?",
      "a": "The document catalog, page objects, Form and Image XObjects, annotations, tagged structure elements, and document part (DPart) dictionaries can all carry an /AF array, allowing associations from whole-document down to a single graphic."
    },
    {
      "q": "Do all PDF viewers understand associated files?",
      "a": "No. Support varies, so PDF 2.0 recommends that associated files also appear in the EmbeddedFiles name tree; a viewer that does not understand the /AF mechanism can then still present them as ordinary attachments."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "embedded-files-in-pdf",
      "pdf-portfolios",
      "custom-metadata-in-pdf",
      "document-information-dictionary",
      "form-xobjects",
      "image-xobjects",
      "pdf-structure-tree"
    ],
    "relatedStandards": [
      "pdf-a-3",
      "pdf-2-0",
      "iso-32000",
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
      }
    ]
  },
  "seeAlso": [
    "embedded-files-in-pdf",
    "pdf-a-3",
    "pdf-2-0",
    "pdf-portfolios",
    "pdf-metadata",
    "pdf-document-catalog",
    "xmp-metadata",
    "pdf-structure-tree"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
