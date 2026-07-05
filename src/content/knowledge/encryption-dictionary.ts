import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "encryption-dictionary",
  "h1": "The PDF Encryption Dictionary",
  "cluster": "security",
  "aliases": [
    "Encrypt dictionary",
    "/Encrypt dictionary",
    "PDF /Encrypt dictionary",
    "PDF encryption dictionary"
  ],
  "definition": "The PDF encryption dictionary is the object referenced from a document's trailer by the /Encrypt key that records which security handler, algorithm, key length, permissions and password data protect the file.",
  "description": "How a PDF stores encryption settings in its /Encrypt dictionary: the security handler, algorithm version and revision, key length, permissions and password entries.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When a PDF is encrypted, the file does not simply scramble its bytes and hope a reader can work out the rest. Instead it carries a small, structured record — the encryption dictionary — that tells any conforming reader exactly how the document was protected: which security handler was used, which cryptographic algorithm, how long the key is, what permissions the author requested, and the data needed to check a supplied password. Everything a reader needs to begin decryption is described here.",
    "The encryption dictionary is a normal PDF dictionary object, but it occupies a special place in the file. It is referenced from the trailer through the /Encrypt entry, and — unlike the strings and streams it governs — it is itself stored in cleartext. That is a deliberate design choice: a reader must be able to inspect the handler name and parameters before it can decrypt anything else, so the instructions for decryption cannot themselves be encrypted.",
    "Understanding this dictionary is the key to understanding PDF security in practice. The difference between a document locked with legacy RC4 and one protected with AES-256, between a file that merely discourages printing and one that is genuinely confidential, comes down to a handful of entries in this object."
  ],
  "sections": [
    {
      "heading": "Where the encryption dictionary lives",
      "body": [
        "The trailer of an encrypted PDF contains an /Encrypt entry that points to the encryption dictionary, almost always as an indirect object. The trailer's /ID array also matters, because the first element of the file identifier is fed into the key-derivation process for the older algorithm versions. Together these two trailer entries connect the document's structure to its cryptographic state.",
        "Crucially, the encryption dictionary is exempt from the encryption it describes. Its own contents — including the password-verification strings — are not enciphered the way ordinary strings and streams in the body are. A reader opens the file, follows /Encrypt to this dictionary, reads the handler and parameters in the clear, and only then can it decrypt the rest of the document. This is why simply finding and reading the encryption dictionary tells you nothing secret: it is metadata about the lock, not the key."
      ]
    },
    {
      "heading": "The security handler and algorithm entries",
      "body": [
        "The /Filter entry names the security handler responsible for the file, for both password-based and public-key protection. The built-in standard security handler, which underpins ordinary password protection, is identified as /Standard, while public-key handlers are likewise named by /Filter, with values such as Adobe.PubSec. A separate /SubFilter entry does not identify the handler; it specifies the format, or interpretation, of the encryption dictionary's contents — for public-key handlers, values such as adbe.pkcs7.s3, adbe.pkcs7.s4 or adbe.pkcs7.s5. Two numeric entries then describe the cryptography itself. /V is the algorithm version, indicating broadly which encryption scheme and key-handling rules apply, and /R is the revision of the standard security handler, which tracks how the password and permission values are computed. Newer combinations of /V and /R correspond to stronger schemes: early values describe RC4 with short keys, later ones introduce configurable key lengths and crypt filters, and the highest describe AES-256 as introduced with PDF 2.0.",
        "The /Length entry gives the length of the encryption key in bits and defaults to 40 when omitted. For the oldest scheme the key length is fixed, while later versions allow longer keys — commonly 128 bits for AES-128 and 256 bits for AES-256. Reading these three entries together tells you the real strength of a document's protection, which is often very different from what a padlock icon in a viewer implies."
      ]
    },
    {
      "heading": "Password and permission entries",
      "body": [
        "The dictionary stores validation data rather than the passwords themselves. The /O entry holds owner-password data and the /U entry holds user-password data; a reader uses them, together with the algorithm and the file identifier, to test a supplied password and to recover the key that decrypts the document. The /P entry is a signed 32-bit integer whose bits encode the permissions the author requested — such as whether printing, copying or modification are allowed. These flags are conventionally described as PDF permission flags.",
        "AES-256 encryption changes this picture. With the revision that introduces AES-256, the dictionary also carries /OE and /UE, which hold the encrypted file-encryption key for the owner and user passwords respectively, and /Perms, which stores an encrypted, integrity-protected copy of the permissions. This binds the permission bits cryptographically to the key so they cannot be silently altered, addressing a long-standing weakness of the earlier /P integer, which a determined tool could edit without invalidating the file."
      ]
    },
    {
      "heading": "Crypt filters and selective encryption",
      "body": [
        "From the algorithm version that introduced crypt filters onward, the encryption dictionary can specify different treatment for different parts of a file through a /CF (crypt filters) sub-dictionary. The /StmF entry names the crypt filter applied to streams, /StrF names the one applied to strings, and /EFF applies to embedded file streams. Each named crypt filter records which cipher it uses, so a document can, for example, encrypt its streams and strings with AES while treating embedded files under their own filter.",
        "One frequently relevant option here is /EncryptMetadata, a boolean that controls whether the document's XMP metadata stream is encrypted along with the rest of the content. Leaving metadata unencrypted lets indexing and search systems read basic document information without a password, while still protecting the page content. These crypt-filter mechanisms are what make PDF encryption granular rather than all-or-nothing, and they are configured entirely through entries in this one dictionary."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Referenced by",
      "value": "The trailer's /Encrypt entry"
    },
    {
      "label": "Security handler",
      "value": "Named by /Filter; the built-in one is /Standard"
    },
    {
      "label": "Algorithm codes",
      "value": "/V (version) and /R (handler revision)"
    },
    {
      "label": "Itself encrypted?",
      "value": "No — stored in cleartext so readers can learn how to decrypt"
    }
  ],
  "specification": {
    "introduced": "Encryption has been part of PDF since its early versions; AES-256 arrived with PDF 2.0",
    "typicalUsage": "Referenced from the trailer via /Encrypt to describe the security handler, algorithm, key length, permissions and password data of a protected document",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "The encryption dictionary is itself encrypted, so reading it reveals something secret.",
      "truth": "It is stored in cleartext by design, because a reader must inspect the handler and parameters before it can decrypt anything. It describes the lock; it does not contain the key."
    },
    {
      "claim": "The /O and /U entries store the document's actual passwords.",
      "truth": "They store values derived from the passwords, used to validate a supplied password and to recover the file-encryption key. The plaintext passwords are not written into the file."
    },
    {
      "claim": "The /P permission integer enforces restrictions by itself.",
      "truth": "/P records the permissions the author requested, but enforcement depends on the viewing application honoring them. Only with AES-256, where /Perms cryptographically binds the permissions, are the bits protected against silent editing."
    }
  ],
  "faq": [
    {
      "q": "Does every encrypted PDF have an encryption dictionary?",
      "a": "Yes. Any file protected by a security handler carries an encryption dictionary referenced from the trailer's /Encrypt entry. Without it, a reader would have no way to know how the file was protected or how to decrypt it."
    },
    {
      "q": "What is the difference between the /V and /R entries?",
      "a": "/V is the algorithm version, describing broadly which encryption scheme and key rules apply. /R is the revision of the standard security handler, describing how the password and permission values are computed. They move together — stronger schemes use higher values of both."
    },
    {
      "q": "Are the /O and /U strings encrypted like other strings in the file?",
      "a": "No. The strings inside the encryption dictionary, including the password-validation entries, are exempt from the normal string encryption. Only strings and streams elsewhere in the document body are enciphered."
    },
    {
      "q": "Why can some metadata be read from an encrypted PDF without a password?",
      "a": "The /EncryptMetadata boolean can be set so the document metadata stream is left unencrypted. This lets indexing and search tools read basic information while the page content stays protected."
    },
    {
      "q": "What entries are unique to AES-256 encryption?",
      "a": "The revision that introduces AES-256 adds /OE and /UE, holding the encrypted file key for the owner and user passwords, and /Perms, an encrypted and integrity-protected copy of the permissions that binds them to the key."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pdf-trailer",
      "pdf-dictionary",
      "aes-128-encryption",
      "pdf-file-identifiers",
      "pdf-string-objects"
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
        "label": "Are Online PDF Tools Safe? An Honest Look at the Risk",
        "path": "/guides/are-online-pdf-tools-safe"
      }
    ]
  },
  "seeAlso": [
    "pdf-security-model",
    "pdf-encryption",
    "standard-security-handler",
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
