import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-1-5",
  "h1": "PDF 1.5",
  "cluster": "foundations",
  "aliases": [
    "PDF version 1.5",
    "Acrobat 6.0 PDF",
    "PDF-1.5"
  ],
  "definition": "PDF 1.5 is the 2003 revision of the PDF format, released with Adobe Acrobat 6, that added object streams, cross-reference streams, optional-content layers, and JPEG 2000 images.",
  "description": "PDF 1.5, released in 2003 with Adobe Acrobat 6, introduced object streams, cross-reference streams, optional-content layers, and JPEG 2000 images.",
  "searchIntent": "specification",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF 1.5 is the version of the Portable Document Format that Adobe published in 2003, alongside Acrobat 6. Like every revision in the 1.x series, it extended the format's capabilities while keeping the same underlying model of objects, pages, and content streams. Its headline changes were about making files smaller and more capable, not about changing what a PDF fundamentally is.",
    "The most consequential additions were structural. Object streams and cross-reference streams let far more of a PDF's internal data be compressed than earlier versions allowed. PDF 1.5 also introduced optional content groups, the mechanism behind what most people call PDF layers, and added JPEG 2000 as an image compression option through the JPXDecode filter.",
    "Because some of these features change how a file is laid out on disk, a PDF 1.5 document can be unreadable to viewers that only understand older revisions. The specification addressed this with hybrid-reference files, and the version marker in the file header signals which feature set a reader should expect. PDF 1.5 sits between PDF 1.4 and PDF 1.6 on the path that eventually led to ISO standardization."
  ],
  "sections": [
    {
      "heading": "Object streams and cross-reference streams",
      "body": [
        "Before PDF 1.5, only stream objects such as page content and images could be compressed; other indirect objects like dictionaries and arrays sat in the file as largely plain text. An object stream lets many of these small non-stream objects be packed together into a single stream that is then compressed, which can noticeably reduce the size of documents that contain many objects, such as tagged files, forms, and heavily annotated PDFs.",
        "A cross-reference stream replaces the classic cross-reference table with a compact, compressed representation of the same lookup information. It is also required to locate objects that live inside object streams, because the traditional table only records byte offsets and cannot point into a compressed container. In practice these two features work together, and both are commonly found in PDFs produced today."
      ]
    },
    {
      "heading": "Optional content and PDF layers",
      "body": [
        "PDF 1.5 introduced optional content groups (OCGs), which let a document mark portions of its content as belonging to a named group that a viewer can show or hide. This is the basis of what most people call PDF layers, and it is widely used in maps, engineering and CAD drawings, and artwork that carries several language versions in one file.",
        "It is worth being precise about what a layer is: optional content is toggleable content within a page, not a separate page. A configuration in the document describes which groups are visible by default and how they can be switched, but the affected marks still live in the ordinary page content."
      ]
    },
    {
      "heading": "New image and stream options",
      "body": [
        "On the imaging side, PDF 1.5 added JPEG 2000 as a supported image compression method, exposed through the JPXDecode filter. This gave producers another option alongside the existing JPEG (DCTDecode) and lossless filters, though it never became as ubiquitous as those older choices.",
        "PDF 1.5 also refined the security model by introducing crypt filters, which allow encryption to be applied selectively to specific streams rather than uniformly across the whole document. Stronger cipher options such as AES arrived in later revisions, so PDF 1.5's contribution here is the more flexible framework rather than a new algorithm."
      ]
    },
    {
      "heading": "Backward compatibility and hybrid-reference files",
      "body": [
        "Because a viewer built for PDF 1.4 does not understand cross-reference streams or object streams, a document that relies on them can fail to open in older software. To bridge this gap, the specification defines hybrid-reference files, which include both a traditional cross-reference table and a cross-reference stream so that newer and older readers each use the structure they understand.",
        "This reflects PDF's general approach to versioning. The file header records the format version, a viewer ignores features it does not recognize where it safely can, and producers can choose whether to prioritize small size or broad compatibility. It is why the same visual document can be saved in different PDF versions depending on the tools and settings involved."
      ]
    },
    {
      "heading": "Where PDF 1.5 fits in the format's history",
      "body": [
        "Adobe controlled the PDF specification throughout the 1.x series, and each Acrobat release generally brought a new version number. PDF 1.5 (Acrobat 6) followed PDF 1.4 (Acrobat 5) and preceded PDF 1.6 (Acrobat 7). The line continued to PDF 1.7, which Adobe submitted to the International Organization for Standardization and which became ISO 32000-1 in 2008; the format's later evolution as ISO 32000-2 produced PDF 2.0.",
        "Although PDF 1.5 predates ISO standardization, several of its additions became lasting fixtures of the format. Object streams and cross-reference streams in particular remain part of how compact PDFs are structured, so files created long after 2003 still routinely use mechanisms this version introduced."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Released",
      "value": "2003, with Adobe Acrobat 6.0"
    },
    {
      "label": "Published by",
      "value": "Adobe Systems"
    },
    {
      "label": "Key additions",
      "value": "Object streams, cross-reference streams, optional content (layers), JPEG 2000"
    },
    {
      "label": "Adjacent versions",
      "value": "Follows PDF 1.4; precedes PDF 1.6"
    }
  ],
  "specification": {
    "introduced": "2003 (Adobe Acrobat 6.0)",
    "typicalUsage": "Adobe's proprietary PDF specification revision, published before ISO standardization of the format",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "PDF 1.5 is an ISO standard.",
      "truth": "PDF was not standardized by ISO until PDF 1.7 became ISO 32000-1 in 2008. PDF 1.5 was an Adobe specification that predates that process."
    },
    {
      "claim": "A higher PDF version number always means a better or more compatible file.",
      "truth": "The version indicates which feature set and file structures a document may use. Newer features can make a file unreadable in older viewers, so a higher number is not automatically an advantage."
    },
    {
      "claim": "Optional-content layers are just separate pages grouped together.",
      "truth": "Layers are groups of content within a page that a viewer can show or hide, not distinct pages. The content stays in the page while its visibility is toggled."
    }
  ],
  "faq": [
    {
      "q": "When was PDF 1.5 released?",
      "a": "PDF 1.5 was published by Adobe in 2003, alongside Adobe Acrobat 6.0. It followed PDF 1.4 and came before PDF 1.6."
    },
    {
      "q": "What did object streams change about PDF files?",
      "a": "They let many small objects that previously sat uncompressed in a file, such as dictionaries and arrays, be packed into a single compressed stream. This can reduce the size of documents that contain a large number of objects."
    },
    {
      "q": "Can older PDF readers open a PDF 1.5 file?",
      "a": "It depends on the file. Features like cross-reference streams and object streams are not understood by pre-1.5 viewers, but hybrid-reference files include a traditional cross-reference table so that older readers can still open them."
    },
    {
      "q": "How can I tell that a file is PDF 1.5?",
      "a": "The version usually appears in the file header as a marker such as %PDF-1.5 at the start of the file. A document's catalog can also carry a version entry that a reader may use instead."
    },
    {
      "q": "Are PDF 1.5's features still used in modern PDFs?",
      "a": "Yes. Object streams and cross-reference streams, in particular, remain a common way to keep files compact, so PDFs produced long after 2003 still rely on mechanisms this version introduced."
    }
  ],
  "graph": {
    "parentConcept": "portable-document-format",
    "relatedConcepts": [
      "object-stream-compression",
      "pdf-file-structure",
      "pdf-cross-reference-table",
      "pdf-layers"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Compress a PDF (Without Losing Quality)",
        "path": "/guides/how-to-compress-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-versions",
    "pdf-1-4",
    "pdf-1-6",
    "pdf-object-streams",
    "pdf-xref-streams",
    "optional-content-groups",
    "jpx-decode-jpeg2000",
    "iso-32000"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
