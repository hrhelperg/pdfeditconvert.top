import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-magic-number",
  "h1": "The PDF File Signature",
  "cluster": "metadata-tooling",
  "aliases": [
    "PDF magic number",
    "PDF magic bytes",
    "%PDF- header",
    "PDF file signature",
    "PDF format signature"
  ],
  "definition": "The PDF file signature is the fixed byte sequence %PDF- at the start of every PDF — the magic number software uses to recognize a file as a PDF and read its declared version.",
  "description": "Every PDF begins with the bytes %PDF-, the magic number software uses to detect the format and read its version. See how the signature works.",
  "searchIntent": "metadata",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF announces itself before a reader parses a single object. The opening bytes of the file carry a short, fixed marker — the characters %PDF- followed by a version number — and this marker is the PDF file signature, often called a magic number. It is the mechanism by which operating systems, browsers, and libraries decide that a stream of bytes is a PDF at all.",
    "The signature is deliberately simple and human-readable. Because the % character introduces a comment in PDF syntax, the whole opening line is technically a comment that the page-drawing machinery ignores, yet it carries two crucial pieces of information: that the file is a PDF, and which version of the format the producer claims to have written. Everything else — the cross-reference table, the trailer, the objects — is located only after software trusts this opening handshake.",
    "This page explains the signature as an identifier: what its bytes are, how format-detection tools use it, and the conventions that surround it, such as the binary-marker comment on the following line. For the semantics of the version number and the opening line as a structural element, see the PDF file header."
  ],
  "sections": [
    {
      "heading": "The Bytes of the Signature",
      "body": [
        "The signature consists of the five ASCII characters %PDF- at the very start of the file — in hexadecimal, 25 50 44 46 2D. Immediately after the hyphen comes a version number such as 1.4, 1.7, or 2.0, so a complete opening line reads %PDF-1.7. Because these are ordinary printable characters, you can see a PDF's signature by opening the file in any text or hex editor; the first line is legible even when the rest of the file is compressed binary. The signature plays the same role as PNG's leading bytes or a ZIP archive's PK marker: a constant, position-dependent fingerprint that identifies the format.",
        "The version suffix is part of the opening line but is not, on its own, an authoritative statement about the document. A producer may write %PDF-1.7 and then override it with a /Version entry in the document catalog — a capability added in PDF 1.4 precisely so the version could be updated by an incremental change without rewriting the header. As a result, tools that need the definitive version read both the header line and the catalog rather than trusting the signature alone."
      ]
    },
    {
      "heading": "How Software Recognizes a PDF",
      "body": [
        "Format-detection systems rarely trust a file's extension. Instead they perform content sniffing: they read the first few bytes and compare them against a database of known signatures. On Unix-like systems the file command and the underlying libmagic library identify PDFs by matching %PDF- at the start, and web servers and browsers apply similar MIME sniffing before deciding how to handle a download. This is why a file named report.txt that actually begins with %PDF- can still be recognized and opened as a PDF, and why renaming a PDF does not change what it fundamentally is.",
        "The signature is also a first line of defense in validation and repair tooling. A file that claims to be a PDF but lacks the %PDF- marker is treated as suspect or corrupt, and repair tools use the presence and position of the signature as an anchor when reconstructing a damaged file. The MIME type application/pdf is the signature's counterpart at the transport layer: the bytes identify the format on disk, while the MIME type identifies it in HTTP headers and email attachments."
      ]
    },
    {
      "heading": "The Binary Marker Comment",
      "body": [
        "Most real-world PDFs contain binary data — compressed streams, embedded fonts, images — and the format defines a convention to protect that data in transit. When a file contains binary content, the header line should be immediately followed by a comment line containing at least four bytes whose values are 128 or greater. This second line, another PDF comment beginning with %, looks like garbage in a text editor but serves a specific purpose: file-transfer programs that inspect the opening bytes to decide whether a file is text or binary will see the high-valued bytes and correctly treat the whole file as binary, avoiding the line-ending translation that would otherwise corrupt it.",
        "This binary marker is not part of the identifying signature and is not strictly required for a file to be a valid PDF, but its presence is a strong hint that a well-behaved producer created the file. Together, the %PDF- line and the binary-marker line make up the opening that a robust reader expects to see."
      ]
    },
    {
      "heading": "Position, Tolerance, and the End Marker",
      "body": [
        "The format places the signature at the very beginning of the file, and strictly conformant producers write it there. In practice, readers have historically been forgiving: following long-standing Acrobat behavior, many viewers will still locate a header that appears slightly later rather than exactly at byte zero, which is why some PDFs with a few stray leading bytes still open. This tolerance is a compatibility convenience, not a license to misplace the signature — stricter parsers and validators may reject a header that is not first.",
        "The signature has a bookend at the other end of the file. Where %PDF- opens the document, the marker %%EOF closes it, appearing after the trailer to signal the end of the last cross-reference section. Neither marker draws anything on the page; both are structural comments that let software frame the file correctly — one telling a reader where a PDF begins and what it is, the other telling it where the PDF ends."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Signature bytes",
      "value": "%PDF- (hexadecimal 25 50 44 46 2D)"
    },
    {
      "label": "Location",
      "value": "The beginning of the file, as the first line of the header"
    },
    {
      "label": "MIME type",
      "value": "application/pdf"
    },
    {
      "label": "Syntax role",
      "value": "The leading % marks the line as a PDF comment"
    }
  ],
  "specification": {
    "introduced": "PDF 1.0 (early 1990s)",
    "iso": "ISO 32000-1 / ISO 32000-2",
    "typicalUsage": "Identifying a byte stream as a PDF and reading its declared version before parsing",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "The %PDF- signature is a digital signature that proves who created or approved the file.",
      "truth": "It is only a format identifier — a magic number. Cryptographic authenticity comes from PDF digital signatures, a completely separate mechanism that has nothing to do with the opening bytes."
    },
    {
      "claim": "The version in the header, such as %PDF-1.7, always tells you exactly which features a document uses.",
      "truth": "The header version can be overridden by the /Version entry in the document catalog, and producers do not always keep it in sync, so it is a declaration by the producer rather than a guarantee about the content."
    },
    {
      "claim": "The %PDF- marker must be the very first five bytes or the file is invalid.",
      "truth": "The format places it first, but many readers, following long-standing Acrobat behavior, will still locate a header that appears within the first part of the file, so files with a few stray leading bytes often still open."
    }
  ],
  "faq": [
    {
      "q": "What are the exact bytes of the PDF signature?",
      "a": "They are the five ASCII characters %PDF-, which are the byte values 0x25 0x50 0x44 0x46 0x2D. A version number such as 1.7 or 2.0 follows immediately, giving a full opening line like %PDF-1.7."
    },
    {
      "q": "Why does a PDF often have a line of odd characters right after %PDF-?",
      "a": "That is the binary-marker comment: a comment line containing at least four bytes with values of 128 or greater. It signals to file-transfer programs that the file is binary, so they do not apply text-mode conversions that would corrupt the compressed data inside."
    },
    {
      "q": "Does the .pdf file extension matter if the signature is present?",
      "a": "The extension is a convenience hint for the operating system, but content-detection tools rely on the magic number, not the name. A file with the %PDF- signature is recognizable as a PDF even if its extension is wrong or missing."
    },
    {
      "q": "How is the file signature different from the PDF header?",
      "a": "The header is the full first line, including the version number; the signature, or magic number, is specifically the %PDF- prefix used for format detection. See the PDF file header for the version semantics and the line's role in file structure."
    },
    {
      "q": "What marks the end of a PDF, as opposed to the start?",
      "a": "The %%EOF marker in the trailer marks the end of the file, mirroring the %PDF- signature at the start. Both are structural comments rather than visible content, framing where the document begins and ends."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "portable-document-format",
      "pdf-document-catalog",
      "pdf-validation",
      "pdf-repair"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "Why Won't My PDF Open? Causes and Practical Fixes",
        "path": "/guides/why-wont-my-pdf-open"
      },
      {
        "label": "How to Fix a Corrupted PDF File (What Actually Works)",
        "path": "/guides/how-to-fix-a-corrupted-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-header",
    "pdf-mime-type",
    "pdf-file-structure",
    "pdf-versions",
    "pdf-trailer",
    "pdf-file-identifiers",
    "pdf-metadata"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
