import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "fdf-and-xfdf",
  "h1": "FDF and XFDF Form Data",
  "cluster": "interactivity",
  "aliases": [
    "Forms Data Format",
    "XML Forms Data Format",
    "FDF",
    "XFDF",
    "XFDF form data"
  ],
  "definition": "FDF (Forms Data Format) and XFDF (XML Forms Data Format) are file formats that store a PDF form's field values and annotations separately from the document, for import, export, and submission.",
  "description": "How FDF and XFDF carry a PDF form's field data apart from the document, map to AcroForm fields by name, and drive form import, export, and submission.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When someone fills in a PDF form, the answers they type do not have to travel inside the PDF itself. The field values, and often the annotations, can be pulled out into a small companion file that carries only the data. FDF and XFDF are the two formats designed for exactly that job: representing a form's data apart from the page content it belongs to.",
    "Both descend from Adobe's PDF forms system and both bind to a form's fields by name. FDF reuses PDF's own object syntax, so an FDF file looks like a stripped-down PDF that contains data instead of pages. XFDF expresses the same information as XML, which makes it easier to produce and consume in servers and non-PDF toolchains. Neither format contains the form's layout, text, or images — they are pure data envelopes that only make sense alongside the original PDF.",
    "Separating data from document is what makes these formats useful. It keeps transfers tiny, lets a server prefill a form before sending it, allows answers to be stored or versioned independently, and supports submitting only the responses back to a backend. Understanding FDF and XFDF clarifies how PDF form data moves between a viewer, a server, and a database without duplicating the document each time."
  ],
  "sections": [
    {
      "heading": "What an FDF or XFDF File Actually Holds",
      "body": [
        "At its core, an FDF or XFDF file is a set of field name-and-value pairs, optionally accompanied by annotations and a reference back to the PDF the data came from. It does not carry the form's pages, static text, images, fonts, or field appearances. When the file is imported into the matching PDF, the viewer looks up each entry by the field's fully qualified name, assigns the value, and regenerates the widget's appearance so the answer shows on the page.",
        "Because they contain data rather than a document, these files are typically a small fraction of the size of the PDF they describe. That also means an FDF or XFDF is not viewable on its own in any meaningful way — without the referenced form, the values have no fields to populate and no layout to appear in."
      ]
    },
    {
      "heading": "FDF: Form Data in PDF Object Syntax",
      "body": [
        "FDF is built directly on PDF's object model. A file begins with a header such as %FDF-1.2 and contains an FDF dictionary whose Fields array lists the data. Each entry uses PDF conventions — a partial field name under the T key and its value under the V key — and entries nest to mirror the form's field hierarchy. An F key can record the path or name of the PDF the data belongs to, so a viewer knows which form to populate.",
        "Because FDF shares PDF's syntax, it can carry more than plain values: it can also hold annotations, JavaScript, and other form-related structures. FDF files use the MIME type application/vnd.fdf and the .fdf extension, and they are what a PDF viewer's classic import and export form-data commands read and write."
      ]
    },
    {
      "heading": "XFDF: The Same Data Expressed in XML",
      "body": [
        "XFDF represents the identical kind of information using XML instead of PDF object syntax. A root xfdf element wraps a fields tree of nested field and value elements, an f element whose href points at the source PDF, an ids element for the document's file identifiers, and an annots element when annotation data is included. The XML form is easier to generate, validate, and parse in web servers, integration platforms, and other systems that already speak XML.",
        "XFDF has been standardized by ISO as ISO 19444-1, with XFDF 3.0 aligned to the PDF 2.0 specification. It uses the MIME type application/vnd.adobe.xfdf and the .xfdf extension. Functionally it is the XML sibling of FDF: the two carry the same field data and map to the same PDF fields, differing only in how that data is encoded."
      ]
    },
    {
      "heading": "How FDF and XFDF Are Used in Form Workflows",
      "body": [
        "Two flows dominate. The first is import and export: a filled form's values are exported to an FDF or XFDF file, where they can be stored, edited, or merged, and later imported back to repopulate the same blank form. This lets answers live independently of the document and be reused or archived on their own. The second is submission: a form's submit action can send the collected data to a server as FDF, XFDF, an HTML query string, or the entire PDF, so a backend can receive just the responses instead of a whole file.",
        "The same mechanism runs in reverse for prefilling. A server can generate an FDF or XFDF containing known values — a customer's name, an order number — and deliver it with, or merged into, the blank form so the user opens a partly completed document. This separation of data from document is what makes PDF forms practical to integrate with databases and web applications."
      ]
    },
    {
      "heading": "How They Relate to AcroForm and XFA",
      "body": [
        "FDF and XFDF are the native interchange formats for AcroForm data, the field system defined in the core PDF standard. They match their entries to AcroForm fields by name and rely on the viewer to redraw each field's appearance from the imported value. They are the format a submit action or an export command uses to move that data around.",
        "They should not be confused with XFA, Adobe's separate XML Forms Architecture, which manages its own XML data packets and form templates rather than AcroForm fields. XFDF being XML does not make it XFA; it is a compact data-interchange format, while XFA is a full forms architecture. For most fillable PDFs encountered today, FDF and XFDF are the relevant formats for reading and writing the answers."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "FDF file type",
      "value": "MIME application/vnd.fdf, extension .fdf, header %FDF-1.2"
    },
    {
      "label": "XFDF file type",
      "value": "MIME application/vnd.adobe.xfdf, extension .xfdf, XML-based"
    },
    {
      "label": "XFDF standard",
      "value": "Published by ISO as ISO 19444-1 (XFDF 3.0)"
    },
    {
      "label": "What they store",
      "value": "Form field values and annotations only — not pages, text, or appearances"
    }
  ],
  "specification": {
    "introduced": "FDF was introduced by Adobe as part of the PDF interactive forms system; XFDF followed as its XML equivalent.",
    "iso": "FDF is described within the PDF specification (ISO 32000); XFDF is published separately as ISO 19444-1.",
    "latestVersion": "XFDF 3.0 (aligned with PDF 2.0)",
    "typicalUsage": "Exporting, importing, prefilling, and submitting AcroForm field data and annotations without moving the whole PDF.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "FDF is just a compressed or alternative version of the PDF file.",
      "truth": "An FDF holds only field values and annotations plus a pointer to the source PDF — it contains no pages, text, or appearances, and cannot stand in for the document."
    },
    {
      "claim": "XFDF and XFA are the same XML forms technology because both are XML.",
      "truth": "XFDF is a compact data-interchange format that populates AcroForm fields; XFA is a separate, full forms architecture with its own templates and data packets."
    },
    {
      "claim": "You can change a form's layout or fields by editing its FDF or XFDF.",
      "truth": "These files only carry data and annotations; the form's structure and appearance live in the PDF, so editing the data file changes values, not the form definition."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between FDF and XFDF?",
      "a": "They carry the same kind of form data but encode it differently: FDF uses PDF's own object syntax (dictionaries and keys like T and V), while XFDF expresses the values as XML elements. XFDF is generally easier to generate and parse outside of PDF software."
    },
    {
      "q": "Can I open an FDF or XFDF file on its own?",
      "a": "Not usefully. Both formats only contain field values, optional annotations, and a reference to the source PDF. Without the original form to populate, there are no fields to fill and nothing to display."
    },
    {
      "q": "How does a PDF form submit data as FDF or XFDF?",
      "a": "A submit action attached to the form specifies a destination and a data format. When triggered, the viewer gathers the field values and sends them to that server as FDF, XFDF, an HTML query string, or the full PDF, depending on how the action is configured."
    },
    {
      "q": "Do FDF and XFDF work with scanned or flat PDF forms?",
      "a": "No. They rely on named, interactive AcroForm fields to map values into. A scanned or flattened form has no live fields, so there is nothing for the imported data to bind to."
    },
    {
      "q": "How does a viewer know which PDF an FDF or XFDF belongs to?",
      "a": "The data file records the source document — an F key in FDF, or an f element with an href in XFDF. The viewer uses that reference to locate the form whose fields the values should populate."
    }
  ],
  "graph": {
    "parentConcept": "pdf-interactive-features",
    "relatedConcepts": [
      "text-form-fields",
      "choice-fields",
      "form-calculation",
      "javascript-in-pdf",
      "widget-annotations"
    ],
    "relatedStandards": [
      "iso-32000",
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
        "label": "How to Fill Out a PDF Form (Interactive or Flat)",
        "path": "/guides/how-to-fill-out-a-pdf-form"
      },
      {
        "label": "How to Send a Completed PDF Form (Flatten & Deliver)",
        "path": "/guides/how-to-send-a-completed-pdf-form"
      }
    ]
  },
  "seeAlso": [
    "acroform",
    "pdf-form-fields",
    "xfa-forms",
    "pdf-interactive-features",
    "pdf-actions",
    "pdf-annotations",
    "form-flattening"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
