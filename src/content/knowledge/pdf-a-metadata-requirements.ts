import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-a-metadata-requirements",
  "h1": "PDF/A Metadata Requirements",
  "cluster": "standards",
  "aliases": [
    "PDF/A XMP metadata",
    "PDF/A identification schema",
    "pdfaid schema",
    "PDF/A metadata conformance",
    "PDF/A XMP requirements"
  ],
  "definition": "PDF/A metadata requirements are the ISO 19005 rules for embedding XMP in an archival PDF, including an identification schema that declares its conformance level and values that stay consistent with the Info dictionary.",
  "description": "PDF/A mandates embedded XMP metadata, a pdfaid schema that declares the conformance part and level, and values that stay consistent with the Info dictionary.",
  "searchIntent": "standard",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/A, defined by the ISO 19005 family, is an archival profile of PDF built so that a document can be reproduced faithfully far into the future. Because an archived file has to stay self-describing for decades without external references, the standard is unusually strict about metadata. It does not simply allow metadata; it requires a specific format, a specific way of declaring what the file claims to be, and internal consistency between the different places metadata can live.",
    "Two ideas sit at the center of these rules. First, a PDF/A file must carry a well-formed XMP metadata packet embedded at the document level. Second, that XMP must include a PDF/A identification schema whose sole job is to record which part of the standard and which conformance level the file targets. On top of that, PDF/A enforces a self-describing principle: any metadata property a file uses must either come from a schema the standard already recognizes or be described, inside the same file, by an embedded extension schema.",
    "These requirements matter because metadata is how future software recognizes a file as PDF/A, catalogs it, and interprets its custom fields. Metadata problems, such as a missing identification schema, an undocumented custom property, or a value that disagrees between XMP and the legacy information dictionary, are among the most common reasons an otherwise well-formed file fails PDF/A validation."
  ],
  "sections": [
    {
      "heading": "Document-level XMP is mandatory",
      "body": [
        "A PDF can describe itself through two mechanisms: the older Document Information dictionary (the Info dictionary, with entries such as Title and Author) and XMP, an XML-based metadata format. PDF/A resolves that overlap by requiring XMP. Every conforming file must contain a document-level metadata stream, referenced from the document catalog through its Metadata entry, holding a well-formed XMP packet. That stream is a normal PDF stream marked as metadata in XML form, and its content uses standard XMP namespaces such as Dublin Core (dc), XMP basic (xmp), and the PDF schema (pdf).",
        "Because PDF/A forbids encryption of the file as a whole, this metadata is never hidden behind a password or cipher, which keeps the document readable and machine-processable by archival systems. The XMP itself must be valid: well-formed XML, correct RDF structure, and property values that match the types their schemas define. A malformed packet fails validation even if the visible content of the document is perfect."
      ]
    },
    {
      "heading": "The PDF/A identification schema",
      "body": [
        "The most distinctive metadata requirement is the PDF/A identification schema, conventionally given the prefix pdfaid and the namespace http://www.aiim.org/pdfa/ns/id/. Its purpose is narrow but essential: it declares, inside the XMP, that the file is intended to be PDF/A and states which flavor. For the earlier parts it records a part number (through the part property) and a conformance level letter such as A, B, or U (through the conformance property). This is what lets a reader or archiving system recognize the file as claiming PDF/A conformance and know which requirements it should be measured against.",
        "PDF/A-4, which is built on PDF 2.0, revised this approach: it no longer uses the A, B, and U conformance letters and instead records the part number together with a revision-year value. It is important to understand what the identification schema does and does not do. It declares intent, not achievement. Adding the pdfaid schema does not by itself make a file conform; the document still has to satisfy every other rule in the standard, and a validator checks the whole file rather than trusting the claim."
      ]
    },
    {
      "heading": "Consistency with the Document Information dictionary",
      "body": [
        "When a PDF/A file also carries the legacy Info dictionary, its entries may not contradict the XMP. The standard defines corresponding pairs, for example the Info Title maps to the XMP dc:title, Author maps to dc:creator, the creation date maps to xmp:CreateDate, and the modification date maps to xmp:ModifyDate. If a property appears in both places, the two values must be equivalent; a mismatch is a validation failure. Date values must also be syntactically valid.",
        "This consistency rule reflects PDF/A's goal of a single, unambiguous description of the file. Over time the standard has leaned further toward XMP as the authoritative source. PDF 2.0 deprecates most of the Info dictionary, and PDF/A-4, which is based on PDF 2.0, treats the embedded XMP as the primary metadata rather than the older dictionary. In practice this means tooling should write metadata to XMP first and, if it writes the Info dictionary at all, keep it in step."
      ]
    },
    {
      "heading": "Self-describing metadata and extension schemas",
      "body": [
        "PDF/A treats metadata as something a future reader must be able to interpret without consulting any outside document. To make that possible, any XMP property a file uses must either belong to a schema the standard already recognizes or be described, within the same file, by an embedded PDF/A extension schema. The extension mechanism is itself an XMP schema (with elements that describe a custom schema, its namespace, and each of its properties and their types), so a file effectively carries the definitions of its own non-standard fields.",
        "This is a frequent source of confusion and of failed validation. Software that stamps a document with proprietary or application-specific metadata will often add XMP properties from a namespace PDF/A does not know about. Unless the file also embeds an extension schema describing those properties, it violates the self-describing rule. Correct PDF/A output therefore either limits itself to recognized schemas or generates the matching extension schema descriptions alongside the custom data."
      ]
    },
    {
      "heading": "How metadata requirements are verified",
      "body": [
        "Metadata conformance is not judged by eye; it is checked by PDF/A validators that apply the standard's rules programmatically. A validator confirms that a document-level XMP packet is present and well-formed, that the pdfaid identification schema exists and carries sensible values, that any Info dictionary entries agree with their XMP counterparts, and that every custom property is backed by an embedded extension schema. The open-source veraPDF checker is the reference implementation used for this kind of testing.",
        "For anyone producing archival files, metadata is worth treating as a first-class part of conformance rather than an afterthought. Because these rules are precise and easy to get subtly wrong, running a file through validation is the reliable way to know whether its metadata actually meets the requirements, rather than assuming that a tool which claims PDF/A output has satisfied all of them."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Metadata format",
      "value": "XMP, embedded as a document-level metadata stream referenced from the catalog"
    },
    {
      "label": "Identification schema",
      "value": "pdfaid, namespace http://www.aiim.org/pdfa/ns/id/, recording part and conformance level"
    },
    {
      "label": "Info dictionary",
      "value": "If present, its entries must be equivalent to the matching XMP properties"
    },
    {
      "label": "Custom properties",
      "value": "Permitted only when described by an embedded PDF/A extension schema"
    }
  ],
  "specification": {
    "iso": "ISO 19005 (PDF/A)",
    "introduced": "Present since PDF/A-1, the first part of ISO 19005",
    "latestVersion": "PDF/A-4 (ISO 19005-4), based on PDF 2.0",
    "typicalUsage": "Long-term archiving, where a document must stay self-describing and machine-readable without external references",
    "relatedStandards": [
      "pdf-a",
      "pdf-a-1",
      "pdf-a-4"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF/A metadata lives in the Document Information dictionary, like in an ordinary PDF.",
      "truth": "PDF/A requires embedded XMP as its metadata mechanism. The older Info dictionary is not the authoritative source, and when it is present its values must agree with the XMP."
    },
    {
      "claim": "You can add any custom metadata fields you like to a PDF/A file.",
      "truth": "Custom XMP properties are allowed only if the file also embeds an extension schema describing them; undocumented properties break PDF/A's self-describing rule."
    },
    {
      "claim": "Adding the pdfaid identification schema is what makes a file conform to PDF/A.",
      "truth": "The identification schema only declares the intended part and level. The file must still meet every other requirement, and validators check the whole file rather than trusting the claim."
    }
  ],
  "faq": [
    {
      "q": "What is the pdfaid identification schema?",
      "a": "It is the small XMP schema, using the namespace http://www.aiim.org/pdfa/ns/id/, that declares a file's PDF/A intent. It records the part of the standard and, for the earlier parts, a conformance level letter, so software can recognize the file as claiming PDF/A conformance."
    },
    {
      "q": "Does a PDF/A file still need the Document Information dictionary?",
      "a": "No. XMP is the required metadata mechanism. If the Info dictionary is present, its entries must match the corresponding XMP properties, but newer parts built on PDF 2.0, including PDF/A-4, treat the XMP as authoritative."
    },
    {
      "q": "How are conformance levels recorded in the metadata?",
      "a": "For PDF/A parts 1 through 3, the level is stored in the pdfaid conformance property, typically as A (accessible), B (basic), or U (Unicode). PDF/A-4 dropped those letters and instead records the part number with a revision year."
    },
    {
      "q": "How can I check that a PDF/A file's metadata is valid?",
      "a": "Run the file through a PDF/A validator such as veraPDF. It verifies that the XMP packet is present and well-formed, that the identification schema and its values are correct, that Info and XMP agree, and that any custom properties are backed by an extension schema."
    },
    {
      "q": "Is the XMP metadata in a PDF/A file ever encrypted?",
      "a": "No. PDF/A prohibits encryption of the file entirely, so the metadata is never hidden behind a cipher or password. The XMP packet stays readable, which is part of what keeps an archived file self-describing."
    }
  ],
  "graph": {
    "parentConcept": "pdf-a",
    "relatedConcepts": [
      "xmp-metadata",
      "document-information-dictionary",
      "xmp-vs-info-dictionary",
      "pdf-metadata",
      "custom-metadata-in-pdf",
      "pdf-metadata-standards"
    ],
    "relatedStandards": [
      "pdf-a-1",
      "pdf-a-2",
      "pdf-a-3",
      "pdf-a-4",
      "pdf-a-validation",
      "verapdf",
      "pdf-a-conformance-levels"
    ]
  },
  "seeAlso": [
    "xmp-metadata",
    "pdf-metadata",
    "document-information-dictionary",
    "xmp-vs-info-dictionary",
    "pdf-a",
    "pdf-a-validation",
    "verapdf",
    "pdf-a-conformance-levels"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
