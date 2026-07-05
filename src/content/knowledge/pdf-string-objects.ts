import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-string-objects",
  "h1": "PDF String Objects",
  "cluster": "foundations",
  "aliases": [
    "PDF strings",
    "Literal strings",
    "Hexadecimal strings",
    "Text strings",
    "Byte strings"
  ],
  "definition": "A PDF string object is a sequence of bytes written either as parenthesized literal text or as hexadecimal digits in angle brackets, holding readable text or binary data.",
  "description": "PDF string objects store text or binary data as parenthesized literal strings or hexadecimal strings. Learn both syntaxes, escaping, and encoding.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A string object is one of the basic building blocks of a PDF file. Like PDF's other object types (booleans, numbers, names, arrays, dictionaries, and streams) a string is a value that other objects can reference. At its core a string is simply a sequence of bytes, and the PDF format defines two interchangeable ways to write that sequence in the file's syntax.",
    "Strings carry the file's data payloads rather than its structural keywords. Where a name object such as /Type acts as an identifier or dictionary key, a string holds content: the text of a bookmark, the value a user typed into a form field, a document title, a date, a file identifier, or the raw bytes of a digital signature. Understanding how strings are written and encoded is central to reading PDF internals, extracting text, or debugging garbled output.",
    "Because a string is defined as raw bytes, it can hold far more than plain ASCII. The same object type stores English text, Unicode, dates in a fixed format, and arbitrary binary data. How those bytes are interpreted depends on where the string appears and, for human-readable text, on an encoding convention layered on top of the byte sequence."
  ],
  "sections": [
    {
      "heading": "Literal Strings and Hexadecimal Strings",
      "body": [
        "PDF offers two syntaxes for the same string object. A literal string is written between parentheses, for example (Hello World). The bytes between the parentheses are the string's content, and balanced pairs of parentheses may appear inside without special treatment. A hexadecimal string is written between single angle brackets, for example <48656C6C6F>, where each pair of hexadecimal digits encodes one byte (48 for H, 65 for e, and so on). Whitespace inside a hex string is ignored, so a writer can wrap a long value across several lines.",
        "The two forms are equivalent: <48656C6C6F> and (Hello) produce the same five bytes. Writers reach for the hexadecimal form when a value contains bytes that would be awkward to represent as literal text (non-printable characters, binary data, or content full of parentheses) and the literal form for ordinary readable text. If a hexadecimal string contains an odd number of digits, the final digit is treated as if it were followed by a 0."
      ]
    },
    {
      "heading": "Escape Sequences in Literal Strings",
      "body": [
        "Inside a literal string the backslash introduces escape sequences. The format recognizes \\n for a line feed, \\r for a carriage return, \\t for a horizontal tab, \\b for a backspace, and \\f for a form feed, together with \\( and \\) for parentheses that would otherwise be unbalanced and \\\\ for a literal backslash. A backslash followed by up to three octal digits (\\ddd) inserts a byte by its numeric code, which lets a writer embed any byte value in a literal string.",
        "Parentheses inside a literal string need escaping only when they are unbalanced; a matched pair can appear as-is. A backslash placed immediately before the end of a line acts as a line-continuation marker, so the string continues on the next line without an actual line-break character being added to its value. A backslash before any character the format does not define as an escape is simply ignored, and that character is taken literally."
      ]
    },
    {
      "heading": "How Text Is Encoded Inside a String",
      "body": [
        "A string's bytes and the characters a reader sees are not always the same thing. For human-readable metadata such as titles, author names, and bookmark labels, PDF defines a text string type encoded in one of two ways: PDFDocEncoding, a single-byte encoding for common Latin text, or UTF-16BE, signaled by a leading byte order mark (the bytes FE FF). UTF-16BE lets a text string represent the full range of Unicode. PDF 2.0 additionally permits UTF-8, marked by its own byte order mark.",
        "Strings that appear inside content streams work differently. There, the bytes passed to a text-showing operator are character codes that the current font's encoding maps to glyphs, so the parenthesized bytes are not necessarily Unicode or even readable on their own. The format also defines a fixed date-string format (beginning with D: followed by year, month, day, and time fields) and byte strings for arbitrary binary data such as signature contents or file identifiers, where no text interpretation applies at all."
      ]
    },
    {
      "heading": "Where String Objects Appear",
      "body": [
        "Strings surface throughout a PDF. In the document information dictionary they hold the title, author, and keywords; in the outline (bookmark) tree they hold each entry's label; in form fields they hold default and current values; in annotations they hold note text and dates. The file identifier in the trailer is a pair of byte strings, and a digital signature stores its cryptographic contents as a hexadecimal string.",
        "This variety is why a single object type spans readable prose, structured dates, and opaque binary blobs. A tool reading a PDF has to know the context (which dictionary key the string is the value of) to decide whether to treat the bytes as PDFDocEncoding text, a UTF-16BE Unicode string, a date, or raw data."
      ]
    },
    {
      "heading": "Strings and Encryption",
      "body": [
        "When a PDF is encrypted with the standard security handler, strings are one of the two object types whose contents are encrypted; streams are the other. Names, numbers, booleans, and the structural syntax stay in the clear, which is what allows an encrypted file's object structure to be parsed while its actual text and data remain protected. Decryption is applied per object as each string is read.",
        "A few strings are deliberately left unencrypted so the file can still be opened and validated, most notably the file identifier strings in the trailer and the strings inside the encryption dictionary itself, which a viewer needs before it can derive the decryption key. This is why the presence of an /Encrypt entry changes how every other string in the document must be interpreted."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Two syntaxes",
      "value": "Literal strings use parentheses ( ); hexadecimal strings use single angle brackets < >."
    },
    {
      "label": "Text encoding",
      "value": "Text strings use PDFDocEncoding or UTF-16BE (with a leading FE FF byte order mark); PDF 2.0 also allows UTF-8."
    },
    {
      "label": "Encrypted objects",
      "value": "Strings and streams are the object types encrypted by the standard security handler; names and numbers are not."
    },
    {
      "label": "Odd hex digits",
      "value": "A hexadecimal string with an odd number of digits is padded with a trailing 0."
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "introduced": "PDF 1.0",
    "latestVersion": "ISO 32000-2 (PDF 2.0)",
    "typicalUsage": "Storing readable text (titles, bookmarks, form values), dates, file identifiers, and binary data such as signature contents throughout a PDF.",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Every PDF string is readable text.",
      "truth": "A string is just a sequence of bytes; many strings hold binary data such as signature contents, file identifiers, or encrypted content with no text meaning."
    },
    {
      "claim": "Angle brackets in PDF always denote a dictionary.",
      "truth": "Single angle brackets <...> denote a hexadecimal string. A dictionary uses double angle brackets <<...>>."
    },
    {
      "claim": "Literal strings and hexadecimal strings are different object types.",
      "truth": "They are two interchangeable syntaxes for the same string object type and can encode exactly the same bytes."
    }
  ],
  "faq": [
    {
      "q": "How do you write a string in PDF syntax?",
      "a": "Two ways: a literal string between parentheses, such as (Hello), or a hexadecimal string between single angle brackets, such as <48656C6C6F>, where each pair of hex digits is one byte."
    },
    {
      "q": "How are non-ASCII or Unicode characters stored in a PDF string?",
      "a": "Human-readable text strings use either PDFDocEncoding for common Latin text or UTF-16BE, signaled by a leading FE FF byte order mark, which covers the full Unicode range. PDF 2.0 adds UTF-8 with its own byte order mark."
    },
    {
      "q": "What happens if a hexadecimal string has an odd number of digits?",
      "a": "The final digit is interpreted as if it were followed by a 0, so it still resolves to a whole byte."
    },
    {
      "q": "Are the strings in a PDF encrypted when the file is password-protected?",
      "a": "Yes. The standard security handler encrypts strings and streams while leaving names and numbers in the clear, though a few strings such as the file identifier and those in the encryption dictionary are left unencrypted so the file can be opened."
    },
    {
      "q": "Can a literal string contain parentheses or span multiple lines?",
      "a": "Balanced parentheses can appear unescaped; unbalanced ones must be written as \\( or \\). A backslash right before a line break continues the string onto the next line without inserting an actual newline."
    }
  ],
  "graph": {
    "parentConcept": "pdf-objects",
    "relatedConcepts": [
      "pdf-indirect-objects",
      "pdf-file-structure",
      "winansiencoding",
      "tounicode-cmap"
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
        "label": "How to Fix PDF Font Issues (Missing, Substituted, Garbled)",
        "path": "/guides/how-to-fix-pdf-font-issues"
      }
    ]
  },
  "seeAlso": [
    "pdf-objects",
    "pdf-name-objects",
    "pdf-dictionary",
    "pdf-stream-objects",
    "pdf-array-objects",
    "character-encoding-in-pdf",
    "text-showing-operators",
    "pdf-encryption"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
