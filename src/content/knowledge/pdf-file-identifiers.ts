import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-file-identifiers",
  "h1": "PDF File Identifiers",
  "cluster": "metadata-tooling",
  "aliases": [
    "PDF file ID",
    "trailer /ID entry",
    "/ID array",
    "document file identifier",
    "PDF ID array"
  ],
  "definition": "A PDF file identifier is a pair of byte strings in the trailer's /ID entry, one permanent and one changing, that lets software recognize a file and tell its revisions apart.",
  "description": "How a PDF's /ID array works: two byte strings in the trailer, one permanent and one changing, that identify the file, track its edits, and support encryption.",
  "searchIntent": "metadata",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF can carry a small fingerprint in its trailer that lets software recognize the file and tell one revision from another. This fingerprint is the file identifier, stored under the /ID key as an array of two byte strings. It is not a title, author, or any human-readable metadata; it is an opaque value that a PDF producer generates so the file can be matched against copies, earlier versions, and references made from other documents.",
    "The two strings play different roles. The first is permanent: it is fixed when the file is originally created and is meant to survive every later edit. The second is a changing identifier that a well-behaved writer refreshes each time the document is saved. Comparing the two elements across two files is a quick way to reason about whether they are the same document, different versions of one document, or unrelated.",
    "File identifiers sit quietly beneath the more visible metadata layers, the Document Information Dictionary and XMP, but they do specific structural work: they feed the encryption key computation for password-protected files, they let links to external PDFs confirm they reached the right target, and they give content systems a stable handle for tracking a document across its life."
  ],
  "sections": [
    {
      "heading": "Where the Identifier Lives and What It Holds",
      "body": [
        "The file identifier is the /ID entry of the trailer dictionary, the small dictionary at the end of a PDF that also points to the cross-reference table and the document catalog. Its value is an array of exactly two byte strings, usually written in the file as hexadecimal inside angle brackets, for example /ID [<...> <...>]. The strings are opaque binary values rather than text; a typical producer stores 16 bytes in each, though the standard fixes neither a length nor an encoding. Because the entry has existed since PDF 1.1, essentially every modern PDF written by a mainstream tool carries one.",
        "The first element is the permanent identifier, based on the file's contents when it was originally created, and it does not change when the file is later updated. The second is the changing identifier, reflecting the contents at the most recent save. When a file is first written, both elements are set to the same value, so a brand-new PDF has a matching pair. This structure is what lets the /ID array express both which document a file is and which version of it you are holding."
      ]
    },
    {
      "heading": "How the Value Is Generated",
      "body": [
        "The standard does not mandate how a producer computes the identifier; it only expects the value to be, with high probability, unique to that file. As a non-normative suggestion, the specification describes deriving the strings from an MD5 message digest over inputs such as the current date and time, the file's path, its size in bytes, and the contents of the Document Information Dictionary. Producers are free to use other methods, and many do, so the value should be treated strictly as an opaque token rather than something you can parse for meaning.",
        "A consequence worth understanding is that the identifier is generated locally and is not registered anywhere. No authority hands out or guarantees PDF identifiers, and nothing prevents two files from carrying the same value, most obviously when one file is a copy or a derivative of another. Uniqueness is a statistical property of the generation method, not a promise made by the format."
      ]
    },
    {
      "heading": "The Permanent and Changing Pair in Practice",
      "body": [
        "The two-element design is built for versioning. Incremental updates append changes to the end of a PDF and write a fresh trailer; a correct writer keeps the first /ID element intact while refreshing the second so the changing identifier reflects the new state. Comparing identifiers then becomes a cheap heuristic: if both elements of two files match, the files are very likely the same; if only the first elements match, they are probably two versions of the same document; if neither matches, they are unrelated.",
        "This is why document management systems, review tools, and archival workflows read the /ID array. It gives them a stable handle for a document's lineage that survives renaming and moving the file, information a filename or a modification date cannot reliably provide. It is a structural aid rather than a security control, though: any tool can rewrite the /ID array, so a matching identifier is evidence, not proof, of identity."
      ]
    },
    {
      "heading": "File Identifiers and Encryption",
      "body": [
        "The identifier takes on an operational role when a PDF is encrypted. In the standard security handler's traditional key-derivation algorithm, the first element of the /ID array is one of the inputs used to compute the file's encryption key, which ties the key material to that specific file. So that a reader can obtain the identifier it needs before decrypting anything, the standard requires that whenever an Encrypt entry is present, the /ID array and its two strings be stored as direct objects and left unencrypted.",
        "Because of this dependency, the file identifier is strongly recommended for every PDF and, in practice, is needed for encrypted documents that use the traditional algorithms. Changing the first element would break that key derivation, which is one more reason the permanent identifier is meant to stay fixed for the life of the file. Some newer 256-bit encryption schemes derive their key differently and do not depend on the /ID, but the requirement to keep the array unencrypted still applies."
      ]
    },
    {
      "heading": "Identifiers Beyond the Trailer",
      "body": [
        "The /ID array is also how one PDF can point reliably at another. A file specification, the structure PDFs use to reference an external file such as in a remote go-to action, can include its own /ID entry holding the two identifier strings of the target file. A viewer following the reference can compare those strings against the file it actually opened and confirm it reached the intended document, even if the file was renamed or moved since the link was created.",
        "It is easy to confuse the trailer's file identifier with the identifiers that XMP metadata carries. XMP's media-management schema records its own values, such as a DocumentID, an InstanceID that changes on every save, and an OriginalDocumentID for provenance, inside the metadata stream rather than the trailer. The two systems overlap in purpose but are stored separately and maintained by different parts of a writer, so their values need not agree. When you inspect a document's identity, it helps to know which of these you are actually looking at."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Location",
      "value": "The trailer dictionary's /ID key"
    },
    {
      "label": "Structure",
      "value": "An array of two byte strings: a permanent identifier and a changing identifier"
    },
    {
      "label": "Introduced",
      "value": "PDF 1.1"
    },
    {
      "label": "Encryption",
      "value": "Stored as direct objects and left unencrypted when an Encrypt entry is present; the first element feeds the traditional encryption-key derivation"
    }
  ],
  "specification": {
    "introduced": "PDF 1.1",
    "iso": "ISO 32000",
    "typicalUsage": "Recognizing a PDF, tracking its revisions, keying the standard security handler, and validating remote file references.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF file identifier is a globally unique, centrally registered ID like a UUID.",
      "truth": "It is a byte string generated locally by the producer; uniqueness is only probabilistic, and nothing registers or guarantees it."
    },
    {
      "claim": "A file's identifier never changes.",
      "truth": "Only the first element is permanent. The second is a changing identifier that a correct writer updates every time the file is saved."
    },
    {
      "claim": "The trailer /ID is the same thing as the XMP DocumentID.",
      "truth": "They are separate. The trailer /ID lives in the trailer, while XMP keeps its own DocumentID and InstanceID in the metadata stream, and their values can differ."
    }
  ],
  "faq": [
    {
      "q": "Where is a PDF's file identifier stored?",
      "a": "In the trailer dictionary under the /ID key, as an array of two byte strings that most tools write as hexadecimal inside angle brackets."
    },
    {
      "q": "Why are there two strings in the /ID array?",
      "a": "The first is a permanent identifier fixed at creation; the second changes on each update. Together they show both which document a file is and which revision you have."
    },
    {
      "q": "Is a file identifier required in every PDF?",
      "a": "It is optional in the base format but strongly recommended, and it is expected for encrypted documents because the traditional security handler uses the first element when deriving the key."
    },
    {
      "q": "How is the value calculated?",
      "a": "The standard suggests, without requiring, an MD5 digest over inputs like the time, file path, size, and Info dictionary. The exact method is the producer's choice, so treat the value as opaque."
    },
    {
      "q": "Can two different PDFs share the same identifier?",
      "a": "Yes. Copies and derived files often inherit the first element, and uniqueness is only probabilistic, so identical values can legitimately occur."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "encryption-dictionary",
      "standard-security-handler",
      "custom-metadata-in-pdf",
      "pdf-validation",
      "pdf-file-structure"
    ],
    "relatedStandards": [
      "iso-32000"
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
      }
    ]
  },
  "seeAlso": [
    "pdf-trailer",
    "pdf-metadata",
    "document-information-dictionary",
    "xmp-metadata",
    "xmp-vs-info-dictionary",
    "pdf-incremental-updates",
    "pdf-encryption",
    "pdf-magic-number"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
