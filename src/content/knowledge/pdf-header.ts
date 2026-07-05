import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-header",
  "h1": "The PDF File Header",
  "cluster": "foundations",
  "aliases": [
    "%PDF- line",
    "PDF header line",
    "PDF version header",
    "PDF header comment",
    "file header"
  ],
  "definition": "The PDF file header is the opening line of a PDF file, a %PDF- comment that names the PDF specification version the file was written to, such as %PDF-1.7 or %PDF-2.0.",
  "description": "The PDF header is the opening %PDF- line that declares a file's version. See what it contains, why it starts with a comment, and how PDF readers use it.",
  "searchIntent": "concept",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF file opens with a short header line. It is the very first thing in the file, and it looks like %PDF-1.7 or %PDF-2.0. Despite being only a handful of characters, it does one important job: it announces which version of the PDF specification the rest of the file claims to follow.",
    "The header is technically a comment. In PDF syntax, any line that begins with a percent sign (%) is a comment and is ignored by the parser's normal tokenizing. The header takes advantage of this. The leading % keeps the line out of the stream of document objects, while the distinctive %PDF- prefix lets applications recognize the file as a PDF and read the version number that follows.",
    "Because it sits at the start of the file, the header also doubles as the file's signature. Tools that need to identify a file without reading all of it, such as operating systems, upload validators, and web servers, look for the %PDF- bytes at the front. This entry explains what the header contains, the binary marker that usually follows it, and why the version it states is not always the final word on a file's real capabilities."
  ],
  "sections": [
    {
      "heading": "Anatomy of the Header Line",
      "body": [
        "The header has the form %PDF-M.N, where M is the major version and N is the minor version. Examples include %PDF-1.4, %PDF-1.7, and %PDF-2.0. The %PDF- portion is fixed; only the digits change from file to file. Because the parser treats the whole line as a comment, nothing else on that line affects the document's objects.",
        "The first four bytes, %PDF (hexadecimal 25 50 44 46), are what most systems key on when they decide a file is a PDF. That is why the same bytes are also described as the file's signature or magic number: the header is both a human-readable version stamp and the machine-readable marker that identifies the format."
      ]
    },
    {
      "heading": "The Binary Marker Comment",
      "body": [
        "Most PDFs are not plain text. They contain compressed streams, images, and embedded fonts made of binary data. To keep that data intact, the specification recommends placing a second comment line immediately after the header containing at least four bytes whose values are 128 or greater, that is, bytes with the high bit set.",
        "File-transfer programs that inspect the opening bytes of a file see these non-ASCII characters and conclude that the file is binary, so they copy it byte for byte instead of rewriting line endings the way they would for a text file. Without that safeguard, a text-mode transfer could alter the file's binary sections and break it. The marker is a convention rather than a strict requirement, but it is present in the vast majority of real-world PDFs."
      ]
    },
    {
      "heading": "How Applications Read the Version",
      "body": [
        "When a viewer opens a PDF, it reads the header to learn which version's rules to apply, meaning which features, operators, and dictionary keys it can expect to encounter. In practice, readers tend to be lenient about the header's exact placement. Rather than insisting on the marker at the very first byte, many scan the opening portion of the file for %PDF- and tolerate stray bytes before it, which helps them recover files that picked up leading junk in transit.",
        "The header version is advisory, not enforced. A file that declares an older version but happens to use a newer feature will usually still render as long as the reader itself supports that feature. The header sets an expectation; it does not police what the rest of the file actually does."
      ]
    },
    {
      "heading": "When the Header Isn't the Real Version",
      "body": [
        "Starting with PDF 1.4, the document catalog can carry its own Version entry, a name object such as /1.7. When that entry is present and higher than the header value, it takes precedence and reports the file's true version. To know a PDF's real version, you sometimes have to look past the header and into the catalog.",
        "This mechanism exists because of how incremental updates work. An update appends new material to the end of a file without rewriting its beginning, so an editing tool cannot easily change the original header. Instead it can raise the effective version by adding a Version entry to the catalog near the end of the file. The header stays as it was first written, while the catalog carries the newer, authoritative number."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Format",
      "value": "%PDF-M.N, e.g. %PDF-1.7 or %PDF-2.0"
    },
    {
      "label": "Position",
      "value": "The first line of the file"
    },
    {
      "label": "Signature bytes",
      "value": "%PDF = hex 25 50 44 46"
    },
    {
      "label": "Syntax",
      "value": "A comment; the leading % keeps it out of the object stream"
    }
  ],
  "specification": {
    "introduced": "Present since PDF 1.0",
    "iso": "ISO 32000-1, ISO 32000-2",
    "typicalUsage": "The first line of every conforming PDF, declaring the specification version the file was written to.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The number in the header is always the file's definitive PDF version.",
      "truth": "A Version entry in the document catalog can override the header when it is higher, so the header may understate the real version, especially after incremental updates."
    },
    {
      "claim": "The %PDF- header must sit at byte zero or the file will not open.",
      "truth": "The specification expects it at the start, but many readers scan the opening portion of the file for the %PDF- marker and tolerate stray bytes before it."
    },
    {
      "claim": "The header records which application created the PDF.",
      "truth": "The header only names the specification version. The producing application is recorded elsewhere, in metadata such as the Info dictionary or XMP."
    }
  ],
  "faq": [
    {
      "q": "What does a header like %PDF-1.7 tell me?",
      "a": "It tells you the file was written to follow version 1.7 of the PDF specification, so a reader knows which set of features and syntax rules to expect from the rest of the file."
    },
    {
      "q": "Why does the header begin with a percent sign?",
      "a": "In PDF, a percent sign starts a comment, so the whole line is technically a comment ignored by the object parser. The %PDF- prefix is a convention that applications recognize to identify the file and read its version."
    },
    {
      "q": "What is the line of odd characters right after the header?",
      "a": "It is an optional binary marker: a comment containing several high-bit bytes that flags the file as binary so transfer tools copy it byte for byte instead of corrupting its binary sections."
    },
    {
      "q": "Is the header the same as the PDF magic number?",
      "a": "The header's first bytes, %PDF, are the magic number or signature. The header adds the version digits after those bytes, so the signature is a part of the header rather than a separate thing."
    },
    {
      "q": "If I change the number in the header, does the file gain new features?",
      "a": "No. The number only labels the version. Editing it does not add any capabilities, and it can conflict with a Version entry stored in the document catalog."
    }
  ],
  "graph": {
    "parentConcept": "pdf-file-structure",
    "relatedConcepts": [
      "pdf-1-7",
      "pdf-cross-reference-table",
      "linearized-pdf",
      "portable-document-format"
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
        "label": "How to Fix a Corrupted PDF File (What Actually Works)",
        "path": "/guides/how-to-fix-a-corrupted-pdf"
      },
      {
        "label": "Why Won't My PDF Open? Causes and Practical Fixes",
        "path": "/guides/why-wont-my-pdf-open"
      }
    ]
  },
  "seeAlso": [
    "pdf-file-structure",
    "pdf-magic-number",
    "pdf-trailer",
    "pdf-versions",
    "pdf-document-catalog",
    "pdf-2-0",
    "pdf-incremental-updates",
    "iso-32000"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
