import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "rc4-encryption",
  "h1": "RC4 Encryption in PDF",
  "cluster": "security",
  "aliases": [
    "ARC4",
    "ARCFOUR",
    "Rivest Cipher 4",
    "RC4 stream cipher"
  ],
  "definition": "RC4 encryption in PDF is the legacy symmetric stream cipher the standard security handler used to encrypt a document's strings and streams with 40- to 128-bit keys, now deprecated in PDF 2.0.",
  "description": "How the RC4 stream cipher protected PDFs through the standard security handler, its 40- and 128-bit key sizes, and why PDF 2.0 deprecated it in favour of AES.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "RC4 is a symmetric stream cipher that, for many years, was the algorithm behind password protection in PDF. When the standard security handler encrypted a document, it did so with RC4 - deriving a key from the user's password and the document's own identifiers, then using that key to scramble the parts of the file that hold actual content.",
    "Understanding RC4 matters mostly because so many existing PDFs still use it. It defines the older 40-bit and 128-bit encryption modes that Acrobat and other tools exposed for years, and its fingerprints appear in the encryption dictionary of countless legacy documents. Newer PDFs have moved to AES, but readers keep RC4 support so those older files continue to open.",
    "This page explains what RC4 is within the PDF security model, how the standard security handler applies it object by object, how it is recorded in a file, and why the format has moved away from it. Where you would actually protect or re-protect a document, follow a tool or guide rather than a step list here."
  ],
  "sections": [
    {
      "heading": "How RC4 Protects a PDF's Contents",
      "body": [
        "RC4 is a symmetric stream cipher, meaning the same key both encrypts and decrypts, and it works by generating a pseudo-random keystream that is combined with the data using an exclusive-or (XOR) operation. Crucially, the standard security handler does not turn the whole PDF into one opaque blob. It encrypts the individual string objects and stream objects - the page content, images, embedded fonts, and attached files - while the structural scaffolding such as the cross-reference table, object numbers, and trailer stays readable. That is what lets a viewer navigate to the right objects and decrypt them on demand.",
        "Before any object is encrypted, the handler derives a single file encryption key by hashing the padded password together with the document's owner (O) entry, the permissions (P) value, and the first element of the file's ID array. For RC4 it then produces a distinct per-object key by hashing that base key with each object's number and generation number, so that identical data appearing in two different objects does not encrypt to the same bytes. Because the key depends on the file ID and permissions as well as the password, altering those values invalidates decryption."
      ]
    },
    {
      "heading": "RC4 in the Encryption Dictionary",
      "body": [
        "A PDF records how it is encrypted in its encryption dictionary, and RC4 is identified there through the algorithm version (V) and revision (R) fields. V=1 designates RC4 with a fixed 40-bit key, the original scheme. V=2, introduced with PDF 1.4, permits RC4 keys longer than 40 bits, with the Length entry giving the size in bits (a multiple of 8, up to 128). The revision number tracks the handler's capabilities - the earliest revision covered the 40-bit case, while a later revision added support for the extended key lengths and refined permission handling.",
        "When crypt filters were later added (V=4), the algorithm is named explicitly by a crypt filter method. RC4 corresponds to the method name V2, which is what distinguishes it from the AES methods AESV2 (AES-128) and AESV3 (AES-256). So whether a document uses RC4 can be read directly from these fields, without needing the password: the password is only required to actually derive the key and decrypt content."
      ]
    },
    {
      "heading": "Why RC4 Was Deprecated",
      "body": [
        "RC4 is an older cipher with well-documented cryptographic weaknesses, and it is no longer considered adequate for protecting sensitive material. Increasing the key length from 40 to 128 bits raised the bar against brute force but did not address the underlying weaknesses of the cipher itself, so a 128-bit RC4 PDF should not be treated as strongly encrypted by modern standards.",
        "For this reason the format moved to the Advanced Encryption Standard. AES-128 was added in PDF 1.6, and AES-256 followed as the recommended algorithm. ISO 32000-2 (PDF 2.0) deprecated RC4-based encryption, directing new documents toward AES. Producing new RC4-protected PDFs is discouraged, even though readers retain RC4 support so that the large body of existing files keeps working."
      ]
    },
    {
      "heading": "Working With RC4-Encrypted PDFs Today",
      "body": [
        "Coming across an RC4-encrypted PDF is routine, especially with documents created years ago. A viewer that implements the standard security handler will open such a file once the correct user password is supplied, or immediately if only owner-level permission restrictions were set rather than an open password. Nothing about RC4 prevents these files from being read on current software.",
        "If a document needs stronger protection than RC4 offers, the practical path is not to patch RC4 but to re-encrypt the document with a modern algorithm such as AES. That is an action to perform in a dedicated tool rather than a manual edit, since it involves rebuilding the encryption dictionary and re-keying every encrypted object."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Cipher type",
      "value": "Symmetric stream cipher, applied per object with a key derived from the password, file ID, and permissions"
    },
    {
      "label": "Key length",
      "value": "40 bits originally; up to 128 bits from PDF 1.4"
    },
    {
      "label": "Dictionary markers",
      "value": "V=1 (40-bit RC4), V=2 (RC4 up to 128-bit); crypt filter method V2"
    },
    {
      "label": "Status",
      "value": "Deprecated in PDF 2.0 (ISO 32000-2) in favour of AES"
    }
  ],
  "specification": {
    "iso": "Part of ISO 32000 (the PDF specification)",
    "introduced": "PDF 1.1 (40-bit RC4); 128-bit RC4 added in PDF 1.4",
    "latestVersion": "Deprecated in PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Legacy symmetric encryption in the PDF standard security handler",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-4",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A 128-bit RC4 key means the PDF is strongly encrypted.",
      "truth": "Key length is only one factor. RC4 has known weaknesses as a cipher, which is why PDF 2.0 deprecated it in favour of AES regardless of the key size."
    },
    {
      "claim": "RC4 encrypts the whole PDF into one opaque blob.",
      "truth": "The standard security handler encrypts individual string and stream objects. Structural data such as the cross-reference table and object numbers stays readable so a viewer can locate and decrypt content on demand."
    }
  ],
  "faq": [
    {
      "q": "What does RC4 stand for?",
      "a": "RC4 is commonly expanded as \"Rivest Cipher 4,\" after its designer Ron Rivest. Unencumbered public implementations are often called ARC4 or ARCFOUR. It is a general-purpose stream cipher, not a PDF-specific invention."
    },
    {
      "q": "How can I tell whether a PDF uses RC4?",
      "a": "The encryption dictionary's V and R values indicate it, and when crypt filters are used the method name V2 identifies RC4 (versus AESV2 or AESV3 for AES). To inspect or change a document's protection in practice, a PDF security tool is the workable route."
    },
    {
      "q": "Can I still open an old RC4-encrypted PDF?",
      "a": "Yes. Mainstream viewers keep RC4 support for backward compatibility, so a legacy RC4 file opens once the correct password is entered, or immediately if only owner-level restrictions were applied."
    },
    {
      "q": "What replaced RC4 for PDF encryption?",
      "a": "AES - first AES-128 (added in PDF 1.6) and then AES-256, which the standard security handler selects through the crypt filter methods AESV2 and AESV3. AES-256 is the algorithm favoured by PDF 2.0."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pdf-permission-flags",
      "password-vs-encryption",
      "hash-algorithms-in-pdf",
      "public-key-security"
    ],
    "relatedStandards": [
      "iso-32000",
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
      }
    ]
  },
  "seeAlso": [
    "pdf-encryption",
    "standard-security-handler",
    "aes-128-encryption",
    "aes-256-encryption",
    "encryption-dictionary",
    "pdf-security-model",
    "user-vs-owner-password"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
