import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "standard-security-handler",
  "h1": "The Standard Security Handler",
  "cluster": "security",
  "aliases": [
    "Standard security handler",
    "Standard handler",
    "PDF Standard security handler",
    "/Standard filter",
    "password security handler"
  ],
  "definition": "The Standard Security Handler is PDF's built-in, password-based security handler that derives an encryption key from a user or owner password and enforces the document's permission flags.",
  "description": "How the PDF Standard Security Handler encrypts content with user and owner passwords and enforces permission flags across RC4 and AES.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When a PDF is \"password protected,\" the component doing the work is almost always the Standard Security Handler. It is the security handler defined directly in the PDF specification and implemented natively by conforming readers, so a file it protects can be opened by any compliant viewer without extra plug-ins. Because it is built in and password-based, it is the default choice for encrypting a document with a passphrase rather than with certificates.",
    "In PDF's security model, a security handler is the piece that manages passwords or keys and decides how the document's encryption key is produced and applied. The Standard Security Handler is identified in a file by the name Standard in the encryption dictionary's Filter entry. It handles two related jobs: turning a password into the key that encrypts the document's strings and streams, and recording the permission flags that describe what a reader should allow once the file is open.",
    "The handler has evolved across PDF versions. Early files used RC4, later revisions added AES, and current PDFs commonly use AES-256. Throughout that evolution the role has stayed the same, which is why understanding the Standard Security Handler is the foundation for understanding PDF encryption, user versus owner passwords, and the permission flags that ride alongside them."
  ],
  "sections": [
    {
      "heading": "Where the Standard Security Handler fits in the PDF security model",
      "body": [
        "The PDF specification separates the idea of a security handler from the encryption algorithm itself. A security handler is responsible for authentication (checking a password or credential) and for producing the key used to encrypt and decrypt content; the algorithm is the cipher that key drives. The Standard Security Handler is the specification's built-in, password-based handler, and it is recorded in the encryption dictionary by setting the Filter entry to Standard. An alternative built-in path, the public-key (certificate-based) handler, occupies the same slot but authenticates recipients with certificates instead of passwords.",
        "The encryption dictionary carries the values the handler needs. Beyond the Filter name, it records a version and revision number that indicate which algorithm and key handling apply, the permission bits, and password-derived verification values for the user and owner passwords. Later revisions also introduced crypt filters, which let the handler describe how individual streams and strings are encrypted and made it possible to select algorithms such as AES rather than the original RC4."
      ]
    },
    {
      "heading": "User passwords, owner passwords, and permissions",
      "body": [
        "The Standard Security Handler works with two passwords that serve different purposes. The user (or open) password controls whether the document can be opened and decrypted at all. The owner (or permissions) password grants full control, including the ability to change security settings. A single file can define one, both, or neither of these; a very common configuration is an empty user password, which lets anyone open the file while an owner password and a set of restrictions are still recorded.",
        "Alongside the passwords, the handler stores a set of permission flags: a bit field describing operations such as printing, copying text, modifying the document, or filling form fields. These flags are advisory in an important sense. They tell a conforming reader what to allow when the file was opened with the user password, but once the correct key is recovered the content itself is fully decrypted. Enforcement of the flags therefore depends on the viewer honoring them rather than on cryptography, which is a frequent source of misunderstanding about what \"restricted\" PDFs actually guarantee."
      ]
    },
    {
      "heading": "Key derivation and supported ciphers",
      "body": [
        "The heart of the handler is key derivation: it runs the supplied password, together with values from the encryption dictionary and the document's file identifier, through a defined algorithm to compute the encryption key. Because the key is reproducible from the password, any reader that knows the password can regenerate it and decrypt the strings and streams that make up the document's content. The revision number in the encryption dictionary tells the reader which derivation procedure to follow.",
        "The cipher used has changed over successive PDF versions. The original Standard Security Handler used RC4; later revisions added AES-128, selected by way of crypt filters; and AES-256 was introduced and subsequently standardized in PDF 2.0. Newer files favor AES, while RC4-based encryption remains readable for backward compatibility. The handler encrypts the document's strings and streams rather than the entire byte stream, so structural elements like the cross-reference data and the encryption dictionary itself stay parseable, and the document's metadata can optionally be left unencrypted."
      ]
    },
    {
      "heading": "What it protects, and its limits",
      "body": [
        "The Standard Security Handler provides confidentiality for the content of a PDF: without the right password, the encrypted strings and streams cannot be read. That makes it a reasonable way to keep a document's contents private in transit or at rest, provided a strong algorithm and a strong password are used. It is not, however, a rights-management system. Once a reader has the password and recovers the key, nothing cryptographic prevents that reader from extracting or re-saving the content.",
        "The permission model has a related limitation. Restrictions attached under an owner password rely on the viewing application to respect them, and the material needed to open the file is present in the file itself, so permission-only protection is best understood as a convention rather than an enforcement guarantee. For those reasons the Standard Security Handler is often paired with a clear understanding of the difference between password protection and encryption, and treated as one layer among the broader options in PDF's security model."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Filter name",
      "value": "Identified by the name Standard in the PDF encryption dictionary"
    },
    {
      "label": "Passwords",
      "value": "Uses a user (open) password and an owner (permissions) password"
    },
    {
      "label": "Ciphers",
      "value": "RC4, AES-128, and AES-256 depending on PDF version and revision"
    },
    {
      "label": "Defined in",
      "value": "The core PDF specification (ISO 32000)"
    }
  ],
  "specification": {
    "introduced": "PDF 1.1 (original RC4-based encryption)",
    "iso": "ISO 32000-1 / ISO 32000-2",
    "latestVersion": "AES-256 standardized in PDF 2.0",
    "typicalUsage": "Password-based encryption of PDF strings and streams with permission enforcement",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A PDF using the Standard Security Handler always asks for a password to open.",
      "truth": "It is often configured with an empty user password, so the file opens without a prompt while still being encrypted and still carrying permission restrictions."
    },
    {
      "claim": "Owner-password permission flags cryptographically stop printing or copying.",
      "truth": "Once the correct key is recovered the content is fully decrypted; the flags are honored by the reader, so enforcement is a convention rather than a cryptographic guarantee."
    },
    {
      "claim": "The Standard Security Handler and public-key security are the same feature.",
      "truth": "The Standard handler is password-based and named Standard in the Filter entry; public-key security is a separate certificate-based handler that authenticates recipients instead of passwords."
    }
  ],
  "faq": [
    {
      "q": "How can I tell a file uses the Standard Security Handler?",
      "a": "Its encryption dictionary sets the Filter entry to the name Standard. That value distinguishes it from the public-key handler or a third-party custom handler occupying the same role."
    },
    {
      "q": "Is the Standard Security Handler the only security handler in PDF?",
      "a": "No. PDF also defines a public-key (certificate-based) handler, and the specification allows custom handlers, though those may require specific software to open the file. The Standard handler is the built-in, password-based option that any conforming reader supports."
    },
    {
      "q": "Which encryption algorithms does it support?",
      "a": "Historically RC4, then AES-128 via crypt filters in later revisions, and AES-256 as standardized in PDF 2.0. The encryption dictionary's version and revision values indicate which one applies."
    },
    {
      "q": "Does it encrypt the entire PDF file?",
      "a": "It encrypts the document's strings and streams, not the whole byte stream. Structural pieces like the cross-reference data and the encryption dictionary stay readable so the file can be parsed, and the document metadata can optionally be left unencrypted."
    },
    {
      "q": "Does the handler decide how strong the protection is?",
      "a": "The handler manages passwords and key derivation, but the practical strength depends on the chosen algorithm and the strength of the password. A weak password undermines even a strong cipher like AES-256."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "aes-128-encryption",
      "password-vs-encryption",
      "pdf-drm"
    ],
    "relatedStandards": [
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
      }
    ]
  },
  "seeAlso": [
    "pdf-security-model",
    "pdf-encryption",
    "encryption-dictionary",
    "user-vs-owner-password",
    "pdf-permission-flags",
    "aes-256-encryption",
    "rc4-encryption",
    "public-key-security"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
