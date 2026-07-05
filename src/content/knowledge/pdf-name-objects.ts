import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-name-objects",
  "h1": "PDF Name Objects",
  "cluster": "foundations",
  "aliases": [
    "Name object",
    "PDF name",
    "name token",
    "PDF name type"
  ],
  "definition": "A PDF name object is an atomic symbol written with a leading slash, such as /Type or /FlateDecode, that PDF uses as dictionary keys and as fixed, identifier-style values.",
  "description": "In PDF, a name object is an atomic token that starts with a slash, like /Type or /FlateDecode. Learn how names work as dictionary keys and values.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A name object is one of the basic object types in the PDF file format. It represents an atomic symbol — a fixed identifier — written as a forward slash followed by a sequence of characters, such as /Type, /Pages, or /FlateDecode. Names are how PDF labels things: they name the keys in dictionaries and supply many of the fixed, enumerated values that tell a reader how to interpret a structure.",
    "Unlike a string, a name is not meant to carry free-form text or user data. It is treated as a single indivisible token whose identity is its exact byte sequence. Two names are considered equal only when those bytes match exactly, and comparison is case-sensitive, so /Type and /type are different names. That makes names well suited to the machine-readable vocabulary that holds a PDF together.",
    "Names appear throughout a PDF's internal syntax. Object dictionaries use names for every key, while filter, subtype, colour space, and font entries use names for their values. Understanding the slash prefix — and the small escape mechanism that lets a name hold unusual characters — is central to reading raw PDF source."
  ],
  "sections": [
    {
      "heading": "The slash prefix and name syntax",
      "body": [
        "A name object always begins with a SOLIDUS — the forward-slash character (/). The slash is a delimiter that signals the start of a name token; it is not itself part of the name's value. The characters after the slash, up to the next delimiter or whitespace, make up the name. Most printable ASCII characters can appear directly, but the null character (code 0) is never allowed, and delimiter or whitespace characters cannot appear literally because they would end the token.",
        "To include such characters, PDF (from version 1.2 onward) defines a number-sign escape: a # followed by two hexadecimal digits stands for the byte with that value. For example, /Adobe#20Green encodes the name “Adobe Green” with a space (0x20), and the # character itself is written as #23. This mechanism lets any byte, including delimiters, appear inside a name."
      ]
    },
    {
      "heading": "How PDF uses name objects",
      "body": [
        "Names serve two main roles. First, every key in a dictionary object is a name; in << /Type /Catalog /Pages 2 0 R >>, the keys /Type and /Pages are names. Second, names supply fixed, enumerated values throughout the format — an object's /Type and /Subtype, stream filters such as /FlateDecode or /DCTDecode, device colour spaces such as /DeviceRGB, and font subtypes such as /Type1. In each case the name acts like a keyword drawn from a controlled vocabulary defined by the specification.",
        "Because names are atomic and compared byte-for-byte, a reader can switch on them quickly and unambiguously. A name has no meaning on its own; its significance comes from where it appears. /Type means one thing as a dictionary key, and its value /Page identifies the surrounding dictionary as a page object."
      ]
    },
    {
      "heading": "Names versus strings",
      "body": [
        "Name objects are easy to confuse with string objects, but they are distinct types with different syntax and purpose. A string is written in parentheses — like (Hello) — or as hexadecimal in angle brackets, like <48656C6C6F>, and is meant to hold text or binary data of any length. A name is written with a leading slash and is meant to be a short, fixed identifier.",
        "A useful rule of thumb is that names label structure and select behaviour, while strings carry content. A document title, a form-field value, or a run of visible text is a string, whereas the entry that classifies an object or selects a filter is a name."
      ]
    },
    {
      "heading": "Encoding, case, and limits",
      "body": [
        "A name is fundamentally a sequence of bytes rather than a piece of styled text, and it is case-sensitive: capitalisation is significant, so /Subtype and /subtype are different names. When a name needs to represent human-readable text, the bytes may be interpreted as UTF-8, with the #xx escape used for any byte that cannot appear literally.",
        "The specification also records an implementation limit: PDF processors have historically been expected to support names up to 127 bytes long. Well-formed PDFs keep the standard names they use short and drawn from the defined vocabulary, so this limit rarely matters in practice."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Syntax",
      "value": "A name object starts with a forward slash (/), for example /Type or /FlateDecode."
    },
    {
      "label": "Case-sensitive",
      "value": "Names are compared byte-for-byte and are case-sensitive — /Type and /type are different names."
    },
    {
      "label": "Escape mechanism",
      "value": "Since PDF 1.2, a # followed by two hexadecimal digits encodes any byte in a name, e.g. /Adobe#20Green for a space."
    },
    {
      "label": "Implementation limit",
      "value": "PDF processors have historically been expected to handle names up to 127 bytes long."
    }
  ],
  "specification": {
    "introduced": "PDF 1.0 (Adobe, early 1990s); the #xx escape was added in PDF 1.2",
    "typicalUsage": "Dictionary keys and fixed enumerated values such as object types, subtypes, stream filters, and colour spaces.",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "The leading slash is part of the name's value.",
      "truth": "The slash is only a delimiter that marks where a name begins. The name's value is the characters after the slash, and that byte sequence is what determines equality."
    },
    {
      "claim": "Name objects and string objects are interchangeable ways to write text.",
      "truth": "They are different types: names use a slash and are atomic identifiers, while strings use parentheses or hex brackets and hold arbitrary text or data. Names label structure; strings carry content."
    },
    {
      "claim": "Name comparison ignores case, like many programming keywords.",
      "truth": "Names are case-sensitive and compared byte-for-byte, so /Subtype and /subtype are not the same name."
    }
  ],
  "faq": [
    {
      "q": "What does the slash at the start of /Type mean?",
      "a": "It marks the token as a name object. The slash is a delimiter, not part of the name, so the name's value is the characters that follow it up to the next whitespace or delimiter."
    },
    {
      "q": "Can a PDF name contain a space or other special character?",
      "a": "Yes, but not literally. Since PDF 1.2 you write such bytes with a number-sign escape — a # followed by two hexadecimal digits — so a space becomes #20, giving names like /Adobe#20Green."
    },
    {
      "q": "Are PDF names case-sensitive?",
      "a": "Yes. Names are compared as exact byte sequences, so /Type, /type, and /TYPE are three different names. Standard PDF vocabulary uses specific capitalisations that must be matched exactly."
    },
    {
      "q": "What is the difference between a name and a keyword like obj or true?",
      "a": "A name is an object type introduced by a slash and can be used as a key or a value. Keywords such as obj, stream, true, and null are fixed syntax tokens of the file format, not name objects."
    },
    {
      "q": "Where do name objects appear in a PDF?",
      "a": "In every dictionary key and in many value positions — object types and subtypes, stream filters like /FlateDecode, colour spaces like /DeviceRGB, and font subtypes like /Type1, among others."
    }
  ],
  "graph": {
    "parentConcept": "pdf-objects",
    "relatedConcepts": [
      "pdf-filters",
      "flate-decode",
      "pdf-content-streams",
      "pdf-document-catalog"
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
        "label": "PDF Encyclopedia — How PDF Actually Works",
        "path": "/pdf-encyclopedia"
      }
    ]
  },
  "seeAlso": [
    "pdf-objects",
    "pdf-dictionary",
    "pdf-string-objects",
    "pdf-array-objects",
    "pdf-indirect-objects",
    "pdf-stream-objects",
    "pdf-file-structure"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
