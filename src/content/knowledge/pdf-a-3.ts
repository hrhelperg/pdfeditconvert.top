import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-a-3",
  "h1": "PDF/A-3",
  "cluster": "standards",
  "aliases": [
    "ISO 19005-3",
    "PDF/A Part 3",
    "PDF/A-3b",
    "PDF/A-3a",
    "PDF/A-3u"
  ],
  "definition": "PDF/A-3 is a part of the PDF/A archiving standard (ISO 19005-3) that, unlike earlier parts, lets a compliant PDF embed files of any format alongside the archived document.",
  "description": "PDF/A-3 (ISO 19005-3) is the PDF/A archival format that allows any file type to be embedded in a compliant document, powering hybrid invoices such as Factur-X and ZUGFeRD.",
  "searchIntent": "standard",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF/A-3 is the third part of the PDF/A family of ISO archiving standards, published as ISO 19005-3. Like the second part, it is built on PDF 1.7 and keeps almost all of the same rules that make a PDF suitable for long-term preservation: fonts must be embedded, colour must be unambiguously defined, encryption is disallowed, and the document must carry standardised XMP metadata that declares its conformance. In nearly every respect a PDF/A-3 file looks and behaves like a PDF/A-2 file.",
    "The one substantial difference is what a PDF/A-3 document is allowed to contain. Earlier parts of PDF/A only permitted embedding files that were themselves valid PDF/A. PDF/A-3 removes that restriction: a conforming document may embed files of any format at all -- a spreadsheet, an XML data file, a CAD drawing, the original word-processor source, and so on. This makes PDF/A-3 a container that pairs a fixed, human-readable archival rendering with the raw data or source that produced it.",
    "That single change is what PDF/A-3 is really about. It was created to support hybrid documents where a person needs a reliable visual copy and a machine needs the structured data behind it, without maintaining two separate files. The trade-off is that the embedded payload is not held to PDF/A's preservation rules, so the standard guarantees the wrapper is archivable but says nothing about how readable the attachment will be decades later."
  ],
  "sections": [
    {
      "heading": "What PDF/A-3 changes compared with PDF/A-2",
      "body": [
        "PDF/A-2 (ISO 19005-2) already introduced features such as JPEG 2000 images, transparency, layers and the ability to embed other PDF/A files. PDF/A-3 inherits all of that and adds exactly one meaningful relaxation: an embedded file no longer has to be a PDF/A document, or even a PDF at all. Any byte stream in any format can be carried inside a conforming file.",
        "Because the base technology and the rest of the rules are unchanged, a validator checks a PDF/A-3 file against essentially the same requirements as PDF/A-2. The embedded attachments are simply exempt from those requirements. This is why the two parts are often discussed together, and why a document that would pass as PDF/A-2 will typically also satisfy PDF/A-3 once its attachments are declared correctly."
      ]
    },
    {
      "heading": "Associated files and the AF relationship",
      "body": [
        "To embed arbitrary content in a controlled way, PDF/A-3 uses the concept of associated files. An embedded file is linked to the object it belongs to -- the whole document, a single page, or a specific structure element -- through an associated-files (AF) entry. Each association also carries an AFRelationship value that states the role of the attachment, for example whether it is the data source for the visible content, an alternative representation, a supplement, or unspecified.",
        "This relationship metadata is what turns a loose attachment into a meaningful part of the archive. A processor that understands the format can locate the structured payload and know how it relates to what the reader sees, rather than treating it as an anonymous blob. The associated-files mechanism introduced here later carried forward into PDF 2.0 and PDF/A-4."
      ]
    },
    {
      "heading": "Conformance levels: A, B and U",
      "body": [
        "PDF/A-3 keeps the three conformance levels that PDF/A-2 defined. Level B (basic) guarantees that the visual appearance of the document is preserved. Level U adds the requirement that all text has reliable Unicode mapping, so the content can be searched and extracted correctly. Level A (accessible) is the most demanding: on top of the level U requirements it requires a tagged logical structure, giving the document a defined reading order and semantics for assistive technology.",
        "These levels describe the archived PDF itself, not the files embedded within it. A document can be PDF/A-3b, PDF/A-3u or PDF/A-3a; the notation combines the part number with the conformance level. Choosing a level is a balance between how much effort the source content warrants and how the archive will be used later."
      ]
    },
    {
      "heading": "Where PDF/A-3 is used",
      "body": [
        "The best-known application of PDF/A-3 is the hybrid electronic invoice. Formats such as Factur-X (used in France) and ZUGFeRD (used in Germany) are PDF/A-3 documents that show a normal, human-readable invoice while embedding a structured XML file containing the same invoice data for automated processing. One file serves both a person opening it and an accounting system parsing it, which is precisely the problem PDF/A-3 was designed to solve.",
        "The same pattern applies wherever a fixed record and its underlying data need to travel together: engineering deliverables with an embedded model, reports with their source datasets, or forms with a machine-readable copy of the entered values. The main caution is that PDF/A-3 does not make the attachment archivable -- long-term readability of the embedded format is a separate concern from the conformance of the PDF that carries it."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Standard",
      "value": "ISO 19005-3, published in 2012"
    },
    {
      "label": "Base format",
      "value": "PDF 1.7 (same base as PDF/A-2)"
    },
    {
      "label": "Conformance levels",
      "value": "A (accessible), B (basic), U (Unicode)"
    },
    {
      "label": "Key feature",
      "value": "Embedding of files in any format via associated files"
    }
  ],
  "specification": {
    "iso": "ISO 19005-3:2012",
    "introduced": "2012",
    "typicalUsage": "Archival PDFs that carry embedded source or data files, such as hybrid electronic invoices (Factur-X / ZUGFeRD).",
    "relatedStandards": [
      "pdf-a",
      "pdf-a-2",
      "pdf-a-4"
    ]
  },
  "misconceptions": [
    {
      "claim": "Because PDF/A-3 lets you embed any file, the whole archive -- including the attachments -- is guaranteed to stay readable.",
      "truth": "Only the surrounding PDF is held to PDF/A's preservation rules. Embedded files are exempt, so the standard does not guarantee the long-term readability of an attached spreadsheet, XML file or other payload."
    },
    {
      "claim": "PDF/A-3 replaced PDF/A-2 as the version everyone should now use.",
      "truth": "It did not. PDF/A-3 is essentially PDF/A-2 with the single change that embedded files can be any format. Both remain valid, and PDF/A-2 is often preferred when arbitrary attachments are not needed."
    },
    {
      "claim": "PDF/A-3 is simply the newest and most capable part of PDF/A.",
      "truth": "PDF/A-3 is a targeted variant for embedding. The later evolution of the family is PDF/A-4 (ISO 19005-4), which is based on PDF 2.0."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between PDF/A-2 and PDF/A-3?",
      "a": "They are nearly identical. PDF/A-2 only allows embedding files that are themselves valid PDF/A, while PDF/A-3 allows embedding files of any format. Everything else, including the PDF 1.7 base and the A/B/U conformance levels, is the same."
    },
    {
      "q": "Do the files embedded in a PDF/A-3 document have to be archival?",
      "a": "No. The embedded files are deliberately exempt from PDF/A's requirements, which is the entire reason PDF/A-3 exists. Only the PDF that contains them must conform."
    },
    {
      "q": "How is PDF/A-3 related to Factur-X and ZUGFeRD invoices?",
      "a": "Those hybrid invoice formats are PDF/A-3 documents. They display a readable invoice while embedding a structured XML file carrying the same data, so one file works for both people and accounting software."
    },
    {
      "q": "What does the conformance level (a, b or u) in PDF/A-3b mean?",
      "a": "It describes the archived PDF: level B preserves appearance, level U adds reliable Unicode text mapping, and level A additionally requires tagged logical structure for accessibility. The level refers to the wrapper, not the embedded files."
    },
    {
      "q": "Should I choose PDF/A-3 or PDF/A-4?",
      "a": "PDF/A-3 is built on PDF 1.7 and is widely supported for embedded-file use cases like invoices. PDF/A-4 is the newer part built on PDF 2.0. The right choice depends on which base version and tooling your workflow and recipients expect."
    }
  ],
  "graph": {
    "parentConcept": "pdf-a",
    "relatedConcepts": [
      "embedded-files-in-pdf",
      "associated-files-in-pdf",
      "xmp-metadata",
      "pdf-a-metadata-requirements",
      "pdf-1-7"
    ],
    "relatedStandards": [
      "pdf-a",
      "pdf-a-2",
      "pdf-a-4",
      "pdf-a-conformance-levels",
      "pdf-a-validation"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      }
    ]
  },
  "seeAlso": [
    "pdf-a",
    "pdf-a-2",
    "pdf-a-4",
    "pdf-a-1",
    "pdf-a-conformance-levels",
    "embedded-files-in-pdf",
    "associated-files-in-pdf",
    "pdf-a-validation"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
