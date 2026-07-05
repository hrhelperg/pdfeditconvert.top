import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "aes-128-encryption",
  "h1": "AES-128 Encryption in PDF",
  "cluster": "security",
  "aliases": [
    "AESV2 crypt filter",
    "128-bit AES encryption",
    "AES-128-CBC in PDF",
    "AESV2 encryption"
  ],
  "definition": "AES-128 encryption in PDF is a mode of the standard security handler that enciphers a document's strings and streams with the 128-bit AES cipher in CBC mode.",
  "description": "AES-128 encryption in PDF uses the AESV2 crypt filter to protect a document's strings and streams with a 128-bit block cipher in CBC mode.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "AES-128 encryption in PDF is the use of the Advanced Encryption Standard, with a 128-bit key, to scramble the contents of a PDF document. It is one of the ciphers offered by the format's standard (password-based) security handler, and it is selected through the crypt-filter method named AESV2.",
    "Support for AES-128 arrived in PDF 1.6, the version Adobe shipped with Acrobat 7, and it was carried forward into ISO 32000-1 when PDF was standardized. It introduced a modern block cipher as an alternative to the older RC4 stream cipher, while keeping the same overall framework: an encryption dictionary, a user and owner password, and a set of permission flags.",
    "This entry explains how AES-128 is wired into a PDF, how it enciphers individual objects, how the key relates to the password, and what the encryption does and does not protect. Where you need to actually apply protection, reach for a tool rather than editing the encryption dictionary by hand."
  ],
  "sections": [
    {
      "heading": "Where AES-128 Sits in the PDF Security Model",
      "body": [
        "The standard security handler is the password-based mechanism the PDF format defines for encrypting a document, and AES-128 is one of the ciphers that handler can use. It became available in PDF 1.6 (Acrobat 7) and was carried into ISO 32000-1. It is selected through the crypt-filter system introduced in PDF 1.5: the encryption dictionary declares an algorithm version (V) of 4 and a security-handler revision (R) of 4, then names a crypt filter, conventionally StdCF, whose method (CFM) is AESV2.",
        "The dictionary's StmF and StrF entries point streams and strings at that crypt filter, so the same cipher covers both kinds of encrypted data. When a viewer opens the file, it reads the encryption dictionary, reconstructs the key from the supplied password, and applies AES to decrypt content as it is needed rather than all at once."
      ]
    },
    {
      "heading": "How the Cipher Encrypts Objects",
      "body": [
        "AES-128 encrypts a document's string and stream objects individually rather than encrypting the file as a whole, so the file structure, cross-reference data, and object numbers remain readable in the clear. Each object is enciphered with AES in Cipher Block Chaining (CBC) mode using a 128-bit key. A fresh random 16-byte initialization vector is generated per object and stored as the first 16 bytes of the encrypted data; the bytes that follow are the ciphertext, padded up to the 16-byte AES block size.",
        "Because each object needs its own working key, the handler derives one by hashing the document's file-level key together with the object's number and generation, mixing in an extra salt value when AES is the chosen cipher. An EncryptMetadata flag in the encryption dictionary can be set so the XMP metadata stream is left unencrypted, which lets indexing tools read basic document properties without the password."
      ]
    },
    {
      "heading": "Keys, Passwords, and Where the Real Strength Lies",
      "body": [
        "The 128-bit AES key is not the password itself. Under revision 4 the standard security handler derives the file key from the user password, the owner-password entry (O), the permissions entry (P), and the document's ID using an MD5-based routine. Two passwords exist: a user password that gates opening the document and an owner password that gates permission changes. A file can carry an empty user password, so anyone can open it while its contents are still encrypted on disk.",
        "Because AES-128 as a cipher has no practical shortcut attack, the realistic weak point is the password and the key-derivation routine. The MD5-based derivation used through revision 4 does little work per guess, so a short or common password can be attacked by trying candidates offline. Document confidentiality therefore depends far more on password strength than on the choice between a 128-bit and a 256-bit key."
      ]
    },
    {
      "heading": "What AES-128 Does and Does Not Guarantee",
      "body": [
        "Encryption protects confidentiality: without the key, the enciphered strings and streams are unreadable. It does not by itself prove who created the file or detect tampering, because CBC-mode encryption carries no authentication tag or message authentication code. A party who can decrypt the content can also re-encrypt modified content, and permission flags such as no-printing are advisory settings that a conforming viewer chooses to honor, not cryptographic locks.",
        "Integrity and origin are instead the job of digital signatures, which hash the document and sign that hash. AES-128 also sits between two neighbors in the format's history: it offered a stronger alternative to the older RC4 stream cipher, and PDF 2.0 later added AES-256 through the AESV3 crypt filter (revision 6) with a purpose-built key derivation that no longer relies on MD5."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Cipher",
      "value": "AES in CBC mode with a 128-bit key"
    },
    {
      "label": "Introduced in",
      "value": "PDF 1.6 (Acrobat 7)"
    },
    {
      "label": "Crypt filter method",
      "value": "AESV2"
    },
    {
      "label": "Encryption dictionary",
      "value": "Standard handler, V 4, R 4"
    }
  ],
  "specification": {
    "introduced": "PDF 1.6",
    "iso": "ISO 32000-1",
    "typicalUsage": "Confidentiality for PDF strings and streams via the standard (password) security handler; the underlying AES cipher is defined in NIST FIPS 197.",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-6",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "AES-128 is weak because it is not AES-256, so those PDFs are easy to break.",
      "truth": "The 128-bit AES cipher has no practical shortcut attack. The realistic weakness in a PDF is a short password and the older MD5-based key derivation, not the key size."
    },
    {
      "claim": "AES-128 encryption stops anyone from altering the PDF.",
      "truth": "CBC-mode encryption protects confidentiality only. It has no built-in authentication, so it does not detect tampering; integrity and origin are handled by digital signatures."
    },
    {
      "claim": "Setting just an owner password with AES-128 fully locks the file.",
      "truth": "Permission-only protection still encrypts the file under a user password that is often empty, so the content can be decrypted and opened without the owner password; the permission flags are enforced by the viewer."
    }
  ],
  "faq": [
    {
      "q": "When did PDF gain AES-128 encryption?",
      "a": "AES-128 was introduced in PDF 1.6, the version associated with Acrobat 7, and later became part of ISO 32000-1."
    },
    {
      "q": "What is the AESV2 crypt filter?",
      "a": "AESV2 is the crypt-filter method name that tells a PDF viewer to use 128-bit AES in CBC mode. It is named in the encryption dictionary's crypt filter, with V set to 4 and R set to 4 for the standard security handler."
    },
    {
      "q": "Does AES-128 encrypt the entire PDF file?",
      "a": "No. It encrypts string and stream objects individually, so the file structure and cross-reference data stay readable. Document metadata can optionally be left unencrypted through the EncryptMetadata flag."
    },
    {
      "q": "How does AES-128 differ from RC4 in PDF?",
      "a": "RC4 is the older stream cipher used by earlier revisions of the standard security handler. AES-128 is a block cipher applied in CBC mode with a random initialization vector per object, selected through the AESV2 crypt filter added in PDF 1.6."
    },
    {
      "q": "Is AES-128 the same as AES-256 in PDF?",
      "a": "No. AES-256 is a separate option added in PDF 2.0 through the AESV3 crypt filter (revision 6), which uses a different, stronger key-derivation scheme than the MD5-based one behind AES-128."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pdf-stream-objects",
      "pdf-string-objects",
      "password-vs-encryption",
      "pdf-digital-signatures",
      "public-key-security"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-1-6",
      "pdf-2-0"
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
    "pdf-security-model",
    "standard-security-handler",
    "rc4-encryption",
    "aes-256-encryption",
    "encryption-dictionary",
    "user-vs-owner-password",
    "pdf-permission-flags"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
