import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-encryption",
  "h1": "PDF Encryption",
  "cluster": "security",
  "aliases": [
    "Encrypted PDF",
    "PDF document encryption",
    "PDF content encryption",
    "PDF password encryption"
  ],
  "definition": "PDF encryption is a feature of the PDF standard that scrambles a document's strings and streams so only holders of the correct password or certificate key can read its contents.",
  "description": "How PDF encryption protects a document's strings and streams, how security handlers derive keys from passwords or certificates, and how RC4 and AES differ.",
  "searchIntent": "security",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PDF encryption is the part of the PDF format that keeps a document's readable content confidential. Rather than encrypting the file as an opaque blob, the format encrypts the pieces that carry meaningful data — the text strings and the binary streams that hold page content, fonts, and images — while leaving the surrounding object skeleton in place so a viewer can still locate what it needs to decrypt.",
    "Encryption is described by an encryption dictionary that the file's trailer points to through its /Encrypt entry. That dictionary names a security handler, which is the component responsible for turning a user's password or certificate into the key that actually decrypts the content. Because the mechanism is defined in the PDF specification itself, any conforming reader knows how to prompt for a password and unlock a compliant encrypted file.",
    "It helps to place encryption within the wider PDF security model. Encryption is about confidentiality and access control; it is distinct from digital signatures, which prove integrity and identity, and from redaction, which permanently removes content. This page explains what encryption does at a mechanical level rather than walking through the steps of protecting a file — where you need to act, follow one of the linked tools or guides."
  ],
  "sections": [
    {
      "heading": "How PDF Encryption Works",
      "body": [
        "When a PDF is encrypted, the file's trailer gains an /Encrypt reference pointing to an encryption dictionary. That dictionary records which security handler is in use, which algorithm and key length apply, and the values needed to verify a password and reconstruct the file encryption key. Only string objects and stream objects are enciphered; object numbers, dictionary keys, the cross-reference data, and the encryption dictionary itself stay readable so a viewer can parse the file's structure and know which objects to decrypt.",
        "For the older RC4 and AES-128 algorithms, the reader derives a separate key for each object by combining the file's encryption key with that object's number and generation, so identical text in two places does not encrypt to the same ciphertext. AES-256, as standardized in PDF 2.0, simplifies this by using the file encryption key directly. In every case the actual password is never stored in the file; the dictionary holds only values that let a reader confirm a supplied password and rebuild the key."
      ]
    },
    {
      "heading": "Security Handlers and Key Sources",
      "body": [
        "A security handler is the plug-in point that decides how the encryption key is obtained. The Standard Security Handler defined in the specification is password based: it derives the file encryption key from a user or owner password entered at open time. This is what most people mean by a 'password-protected' PDF.",
        "The alternative is public-key security, where the file is encrypted for one or more recipients using their certificates. Each intended recipient can unlock the document with the private key matching a certificate it was encrypted to, so no shared secret needs to be exchanged in advance. Both approaches feed the same underlying content encryption; they differ only in how the key reaches the reader."
      ]
    },
    {
      "heading": "Encryption Algorithms Over Time",
      "body": [
        "The original Standard Security Handler used the RC4 stream cipher, initially with 40-bit keys and later with keys up to 128 bits. RC4 is now considered weak, and the short early key lengths are especially so, which is why modern tooling avoids it.",
        "AES was introduced to replace RC4: AES-128 arrived with PDF 1.6, and AES-256 was later standardized in PDF 2.0 (ISO 32000-2). AES is a modern block cipher and is the algorithm most current PDF software uses when creating encrypted files. The practical strength of any encrypted PDF still depends on both the algorithm and the strength of the password or key behind it — a strong cipher does not compensate for a weak, guessable password."
      ]
    },
    {
      "heading": "User Passwords, Owner Passwords and Permissions",
      "body": [
        "The Standard Security Handler recognizes two password roles. A user (open) password gates opening the document at all: without it, the content cannot be decrypted. An owner (permissions) password governs full access and the permission flags that request restrictions such as printing, copying text, or modifying the file.",
        "An important nuance is that a file can carry an owner password with an empty user password. In that case the document opens automatically for anyone, and the permission flags act only as instructions that a viewer may choose to honor. Because those restrictions are advisory rather than cryptographic barriers, they are far weaker than gating the document with a real user password."
      ]
    },
    {
      "heading": "What Encryption Protects — and What It Doesn't",
      "body": [
        "Encryption protects confidentiality: it stops someone without the password or key from reading the document's strings and streams. It does not by itself prove who created a file or detect later tampering — those are the jobs of digital signatures. It also is not the same as redaction; encrypting a file that still contains sensitive text keeps that text intact once decrypted, whereas redaction removes it.",
        "The specification also allows a document's XMP metadata to be left unencrypted, so that indexing and search tools can read basic properties without the password. Whether metadata is encrypted depends on how the file was produced, which is worth keeping in mind when confidentiality of the metadata itself matters."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where it lives",
      "value": "An encryption dictionary referenced by the /Encrypt entry in the PDF trailer, interpreted by a security handler."
    },
    {
      "label": "What is encrypted",
      "value": "String and stream contents — not the object structure, cross-reference data, or the encryption dictionary itself."
    },
    {
      "label": "Algorithms",
      "value": "RC4 originally (40- to 128-bit); AES-128 added in PDF 1.6; AES-256 standardized in PDF 2.0."
    },
    {
      "label": "Access control",
      "value": "A user password gates opening the document; an owner password governs permissions and full access."
    }
  ],
  "specification": {
    "introduced": "Early PDF versions, via the RC4-based Standard Security Handler",
    "iso": "Defined within ISO 32000 (ISO 32000-1 and ISO 32000-2)",
    "latestVersion": "AES-256 as standardized in PDF 2.0 (ISO 32000-2)",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ],
    "typicalUsage": "Confidentiality and access control for PDF documents using password- or certificate-based keys."
  },
  "misconceptions": [
    {
      "claim": "Setting an owner password with printing and copying disabled strongly locks the document.",
      "truth": "When only an owner password is set, the file opens for anyone; permission flags are advisory instructions a viewer may honor or ignore, not a cryptographic barrier."
    },
    {
      "claim": "Encrypting a PDF proves who made it and that it hasn't been altered.",
      "truth": "Encryption provides confidentiality only. Proving authorship and detecting tampering is the role of digital signatures, a separate mechanism."
    },
    {
      "claim": "An encrypted PDF hides everything in the file, including its structure and metadata.",
      "truth": "Only strings and streams are enciphered; the object structure stays readable, and the standard allows metadata to be left unencrypted depending on how the file was made."
    }
  ],
  "faq": [
    {
      "q": "Where is encryption information stored inside a PDF?",
      "a": "In an encryption dictionary that the file's trailer references through its /Encrypt entry. That dictionary records the security handler, the algorithm and key length, and the values a reader needs to verify a password and rebuild the encryption key."
    },
    {
      "q": "Does encrypting a PDF change its file structure?",
      "a": "The object structure, object numbers, and cross-reference data stay intact so a viewer can navigate the file. Only the string and stream contents become ciphertext, along with the addition of the encryption dictionary."
    },
    {
      "q": "What is the difference between RC4 and AES in an encrypted PDF?",
      "a": "RC4 is the original stream cipher used by early PDFs and is now considered weak. AES is a modern block cipher; AES-128 came in with PDF 1.6 and AES-256 was standardized in PDF 2.0, and AES is what current software typically uses."
    },
    {
      "q": "Can an encrypted PDF open without asking for a password?",
      "a": "Yes, if it carries only an owner password and an empty user password. In that case any reader opens it automatically, and only the permission flags apply. A user password is what forces a prompt before the document can be read."
    },
    {
      "q": "Is public-key encryption different from password encryption in PDF?",
      "a": "They differ only in how the key reaches the reader. Password encryption derives the key from a user or owner password, while public-key security encrypts the document for certificate holders who unlock it with their private key. Both protect the same underlying content."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "aes-128-encryption",
      "password-vs-encryption",
      "pdf-digital-signatures",
      "pdf-redaction",
      "pdf-drm"
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
      },
      {
        "label": "How to Protect Sensitive PDF Files (Storage, Sharing, Lifecycle)",
        "path": "/guides/how-to-protect-sensitive-pdf-files"
      }
    ]
  },
  "seeAlso": [
    "pdf-security-model",
    "standard-security-handler",
    "encryption-dictionary",
    "aes-256-encryption",
    "user-vs-owner-password",
    "pdf-permission-flags",
    "public-key-security",
    "rc4-encryption"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
