import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "aes-256-encryption",
  "h1": "AES-256 Encryption in PDF",
  "cluster": "security",
  "aliases": [
    "AESV3 encryption",
    "256-bit AES encryption",
    "AES-256 CBC in PDF",
    "V5/R6 encryption"
  ],
  "definition": "AES-256 encryption in PDF protects a document with the 256-bit Advanced Encryption Standard, encrypting its strings and streams under a key derived from the user or owner password.",
  "description": "AES-256 is a 256-bit symmetric cipher used by PDF's Standard Security Handler in CBC mode. Learn how V5/R6 encryption and key derivation work.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "AES-256 is the 256-bit-key variant of the Advanced Encryption Standard (AES), a symmetric block cipher that the U.S. National Institute of Standards and Technology published as FIPS 197 in 2001. In a PDF, it is one of the ciphers a document producer can select to encrypt the parts of the file that carry information — its strings and streams — so that they can only be read after a correct password (or key) is supplied.",
    "Encryption in PDF is coordinated by a security handler. The built-in Standard Security Handler is password based, and when it uses AES-256 it identifies itself in the encryption dictionary with version 5 and revision 6. A separate public-key security handler can use the same cipher but unlocks the document with a certificate and private key rather than a shared password.",
    "It helps to keep two things separate. AES-256 governs how strongly the content is scrambled, while PDF's permission flags govern what a reader who has already unlocked the file is allowed to do. The cipher is only half of the security picture — the protection a reader actually gets also depends on the password chosen and on the key-derivation method the file uses."
  ],
  "sections": [
    {
      "heading": "Where AES-256 lives in the encryption dictionary",
      "body": [
        "Encryption in PDF is described by an encryption dictionary referenced from the file's trailer. For AES-256 handled by the Standard Security Handler, that dictionary carries a Filter of Standard, a version number V of 5 and a revision R of 6. The choice of cipher is expressed through a crypt filter dictionary whose method (CFM) is AESV3 — the name PDF gives to AES with a 256-bit key — while AESV2 would indicate AES-128. Separate entries, StmF and StrF, say which crypt filter applies to streams and to strings.",
        "The same dictionary also holds the values a viewer needs to check a password and recover the key: U and O store password hashes together with salts, UE and OE store the wrapped file-encryption key, P holds the permission flags, and Perms holds an encrypted copy of those flags so tampering can be detected. An EncryptMetadata flag records whether the document-level metadata stream is encrypted along with the rest of the content."
      ]
    },
    {
      "heading": "How the content is encrypted",
      "body": [
        "AES-256 in PDF operates in cipher block chaining (CBC) mode over 16-byte blocks. Each encrypted string or stream begins with a randomly chosen 16-byte initialization vector, stored in the clear ahead of the ciphertext so the data can be decrypted later; the payload itself is padded to a block boundary. Only strings and streams are encrypted — the surrounding object structure, cross-reference information and the encryption dictionary stay readable so a conforming reader can parse the file and locate what it must decrypt.",
        "A notable difference from older schemes is key handling. RC4 and AES-128 derive a distinct key for every object by combining the file-encryption key with that object's number and generation. AES-256 (the V5 form) does not: the 256-bit file-encryption key is applied directly to every object. This simplification is part of the revised design standardized in PDF 2.0."
      ]
    },
    {
      "heading": "How a password unlocks the key",
      "body": [
        "The bytes that actually encrypt the content are a random 256-bit file-encryption key, generated when the document is secured. That key is never stored directly. Instead it is wrapped (encrypted) under a second key derived from the user password and, separately, from the owner password, and the two wrapped copies are placed in UE and OE. Either password can therefore recover the same underlying file key.",
        "To turn a typed password into the key that unwraps the file key, the Standard Security Handler runs a hashing routine built on the SHA-2 family (SHA-256, and in the revision 6 algorithm also SHA-384 and SHA-512), repeated over many iterations with a salt. The iteration and salting slow down guessing and make each attempt costly. A validation salt stored alongside the hash lets a reader confirm a password is correct before it tries to decrypt anything."
      ]
    },
    {
      "heading": "The original AES-256 and the revised version",
      "body": [
        "AES-256 first reached PDF as a proprietary Adobe extension in Acrobat 9 (2008), defined by Adobe Extension Level 3 to PDF 1.7 and identified by revision 5. That early key-derivation method was later found to be weak, and a corrected scheme — revision 6, with the iterated SHA-2 hashing described above — replaced it. The revision 6 form is the one written into ISO 32000-2, the PDF 2.0 standard.",
        "Because both were called 'AES-256,' the label alone does not tell you which key derivation a file uses. Modern producers and readers use revision 6, and revision 5 is deprecated. This history is also why AES-256 files may fail to open in very old viewers that predate support for either scheme."
      ]
    },
    {
      "heading": "What AES-256 protects — and what it does not",
      "body": [
        "AES-256 protects the confidentiality of a document's content: without a valid password (or the corresponding private key when public-key security is used instead), the strings and streams cannot be read. Its practical strength, though, depends on the password. A short or common password can be attacked offline by trying candidates against the stored hash, and no cipher choice compensates for that.",
        "AES-256 also does not, by itself, control what a permitted reader may do. Restrictions such as 'no printing' or 'no copying' are recorded in the permission flags and are enforced by cooperating viewers; a user who can decrypt the content holds the material regardless of those flags. For removing information so that it is truly gone, redaction — not encryption — is the relevant operation."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Cipher and mode",
      "value": "AES with a 256-bit key in CBC mode, 16-byte blocks, with a random initialization vector prepended to the data"
    },
    {
      "label": "Crypt filter method",
      "value": "AESV3 in the crypt filter dictionary; AESV2 denotes AES-128"
    },
    {
      "label": "Dictionary version",
      "value": "Version V 5 and revision R 6 in the standardized PDF 2.0 form"
    },
    {
      "label": "Key derivation",
      "value": "SHA-2 family hashing turns the password into the key that unwraps a random 256-bit file-encryption key"
    }
  ],
  "specification": {
    "iso": "ISO 32000-2",
    "introduced": "PDF 2.0 (ISO 32000-2); an earlier proprietary Adobe extension to PDF 1.7 (Acrobat 9, 2008)",
    "typicalUsage": "Password-based or certificate-based encryption of PDF content with a 256-bit key",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "Turning on AES-256 makes a PDF impossible to open without the key.",
      "truth": "The cipher is strong, but the document is only as protected as the password. A weak or guessable password can be attacked offline against the stored hash regardless of key size."
    },
    {
      "claim": "Choosing AES-256 stops people from copying text or printing the document.",
      "truth": "Those limits come from permission flags enforced by cooperating viewers. Once a reader can decrypt the content, the permissions are advisory, not cryptographic."
    },
    {
      "claim": "The AES-256 in Acrobat 9 is the same as today's AES-256.",
      "truth": "The original scheme (revision 5) had a key-derivation weakness. The corrected version (revision 6), which uses iterated SHA-2 hashing, is the one standardized in PDF 2.0."
    }
  ],
  "faq": [
    {
      "q": "How is AES-256 different from AES-128 in a PDF?",
      "a": "Both use AES in CBC mode, but AES-256 uses a 256-bit key and the AESV3 crypt filter method (V 5, R 6), while AES-128 uses a 128-bit key and AESV2 (V 4, R 4). AES-256 also applies the file key directly to every object instead of deriving a per-object key."
    },
    {
      "q": "Which PDF versions support AES-256?",
      "a": "It first appeared as a proprietary Adobe extension to PDF 1.7 (Acrobat 9, 2008, via Adobe Extension Level 3) and was later standardized in the corrected revision-6 form in PDF 2.0 (ISO 32000-2). Older viewers that predate this support may not open such files."
    },
    {
      "q": "Does AES-256 encrypt the entire PDF file?",
      "a": "No. It encrypts the strings and streams that hold content, while the object structure, cross-reference data and encryption dictionary stay readable. The document metadata stream is encrypted or left in the clear depending on the EncryptMetadata flag."
    },
    {
      "q": "Do you always need a password to use AES-256?",
      "a": "With the Standard Security Handler, yes — it is password based, using a user password and an owner password. A separate public-key security handler can apply the same cipher but unlocks the file with a certificate and private key instead."
    },
    {
      "q": "Can AES-256 encryption be removed from a PDF?",
      "a": "With the correct owner or user password, a viewer or tool can decrypt the document and save an unprotected copy. Without a valid password, security rests entirely on how hard the password is to guess."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "hash-algorithms-in-pdf",
      "password-vs-encryption",
      "public-key-security",
      "pdf-redaction"
    ],
    "relatedStandards": [
      "pdf-2-0",
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "PDF Security — Password Protect and Encrypt PDFs",
        "path": "/pdf-security"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Password Protect a PDF File",
        "path": "/guides/how-to-protect-pdf-file"
      },
      {
        "label": "How to Protect Sensitive PDF Files (Storage, Sharing, Lifecycle)",
        "path": "/guides/how-to-protect-sensitive-pdf-files"
      }
    ]
  },
  "seeAlso": [
    "pdf-encryption",
    "aes-128-encryption",
    "rc4-encryption",
    "standard-security-handler",
    "encryption-dictionary",
    "pdf-security-model",
    "user-vs-owner-password",
    "pdf-permission-flags"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
