import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "public-key-security",
  "h1": "Public-Key Security in PDF",
  "cluster": "security",
  "aliases": [
    "Certificate Security",
    "Certificate-Based Encryption",
    "Public-Key Security Handler",
    "Certificate Encryption in PDF",
    "PubSec"
  ],
  "definition": "Public-key security in PDF encrypts a document for specific recipients using their X.509 certificates, so only holders of the matching private keys can open it—no shared password required.",
  "description": "How PDF public-key (certificate) security encrypts documents for named recipients using X.509 certificates and per-recipient key wrapping instead of a password.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Public-key security is the certificate-based branch of the PDF security model. Instead of protecting a file with a shared password, it encrypts the document for a defined list of recipients, each identified by an X.509 public-key certificate. Only a person who holds the private key that matches one of those certificates can decrypt and open the file, which makes the approach a fit for closed groups of known recipients rather than anonymous distribution.",
    "Under the hood, PDF still encrypts page content, strings, and streams with a symmetric cipher—the same RC4 or AES options used by password protection. What differs is how the encryption key reaches the reader. A random file encryption key is generated once, then wrapped separately for every recipient using their public key and stored in a per-recipient envelope inside the document. Each recipient uses their private key to unwrap the key and decrypt the file; nobody needs to type or share a secret.",
    "Because this mechanism is driven by certificates rather than passwords, it is considered an advanced part of PDF security and is handled by a dedicated public-key security handler in the encryption dictionary, distinct from the password-oriented Standard Security Handler. It also overlaps conceptually with digital signatures—both rely on public key infrastructure—but the two solve different problems: signatures prove integrity and authorship, while public-key security provides confidentiality."
  ],
  "sections": [
    {
      "heading": "How Public-Key Encryption Works in a PDF",
      "body": [
        "When a PDF is secured with public-key security, the producer generates a single random file encryption key and encrypts the document body with a symmetric cipher, exactly as password-based encryption does. The distinguishing step is key delivery: for each intended recipient, the producer takes that recipient's public-key certificate and encrypts a seed value (from which the file key is derived) into a CMS / PKCS#7 envelope. These envelopes are collected in a recipients array stored inside the encryption dictionary.",
        "To open the file, a reader's software walks the recipient list, finds an envelope it can decrypt with a locally available private key, unwraps the seed, derives the file encryption key, and then decrypts the document. Because the seed also incorporates the permission settings, tampering with the stored permission bytes changes the derived key and breaks decryption—binding the access rules to the cryptography rather than leaving them as an advisory flag."
      ]
    },
    {
      "heading": "The Public-Key Security Handler vs the Standard Handler",
      "body": [
        "PDF's security model separates the algorithm that scrambles bytes from the handler that decides who gets the key. Password protection uses the Standard Security Handler, where a user or owner password is turned into the encryption key. Public-key security instead uses a public-key security handler—commonly identified in the encryption dictionary by a filter name such as Adobe.PubSec—which manages certificate envelopes rather than passwords.",
        "The encryption dictionary for a certificate-secured file records the handler in its filter entry and identifies the CMS variant through a subfilter value, such as adbe.pkcs7.s4 or adbe.pkcs7.s5, alongside the recipients array. Reader software must recognize the named handler to process the file; if it does not, the document cannot be opened even by someone who holds a valid private key. This is why certificate security is more common in controlled enterprise environments than in general public distribution."
      ]
    },
    {
      "heading": "Per-Recipient Access and Permissions",
      "body": [
        "A key advantage of the certificate model is that the recipient list is explicit and can be granted differentiated access. A document can be encrypted for several recipients at once, and different recipient groups can be given different permission sets—for example, some allowed to print while others are restricted. Each group's permissions are folded into the key-derivation input for that group's envelope, so the permissions travel with the encryption rather than as a separable flag.",
        "The trade-off is that the recipient list is fixed at the moment of encryption. You cannot simply hand the file to a new person and expect them to open it; their certificate has to have been included when the document was encrypted. Adding a recipient after the fact means re-encrypting the document against an expanded certificate list. This makes public-key security well suited to stable, known audiences and less convenient for ad hoc sharing."
      ]
    },
    {
      "heading": "Certificates, Keys, and the Link to Signatures",
      "body": [
        "Public-key security depends on the same public key infrastructure that underlies signing: X.509 certificates, a public/private key pair per recipient, and trust in the issuing certificate authority. The sender needs each recipient's public certificate in advance, and each recipient must keep their private key secure and available—there is no password fallback, so losing the private key means losing access to every document encrypted for it.",
        "It is easy to conflate this with digital signatures because both use certificates, but they are complementary rather than interchangeable. Signing a PDF proves who produced or approved it and detects later changes, yet leaves the content readable to anyone. Public-key security keeps the content confidential but says nothing about who authored it. A document can be both signed and certificate-encrypted, in which case the two mechanisms operate on different aspects of the file's security."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Access model",
      "value": "Recipients are identified by X.509 certificates instead of a shared password."
    },
    {
      "label": "Key delivery",
      "value": "A random file key is wrapped in a CMS / PKCS#7 envelope per recipient using their public key."
    },
    {
      "label": "Cipher options",
      "value": "The underlying symmetric algorithm can be RC4, AES-128, or AES-256—the same options as password-based encryption."
    },
    {
      "label": "Handler",
      "value": "Implemented by a public-key security handler (commonly Adobe.PubSec), distinct from the Standard Security Handler."
    }
  ],
  "misconceptions": [
    {
      "claim": "Certificate security is just another name for digitally signing a PDF.",
      "truth": "Signing proves integrity and authorship but leaves content readable; public-key security encrypts the content for confidentiality. Both use certificates, but they serve different goals and can be applied together."
    },
    {
      "claim": "Public-key security is cryptographically stronger than password protection because it uses a better cipher.",
      "truth": "Both use the same symmetric ciphers (RC4 or AES). The difference is how the key is delivered and who can obtain it—an access-model difference, not a cipher-strength difference."
    },
    {
      "claim": "Anyone holding a valid certificate can open a certificate-secured PDF.",
      "truth": "Only recipients whose specific certificate was included when the file was encrypted—and who hold the matching private key—can open it. Recipients are fixed at encryption time."
    }
  ],
  "faq": [
    {
      "q": "When would you use public-key security instead of a password?",
      "a": "When you are sending to a known, closed set of recipients whose certificates you already have, want to avoid distributing a shared password, or need to grant different recipients different permissions within one file."
    },
    {
      "q": "Can you add a new recipient after the PDF is encrypted?",
      "a": "Not to the existing file. The recipient list is set when the document is encrypted, so adding someone means re-encrypting the document against an expanded certificate list that includes their public key."
    },
    {
      "q": "What happens if a recipient loses their private key?",
      "a": "They lose access. There is no password fallback with certificate security, so the document would have to be re-encrypted for a replacement certificate and key pair."
    },
    {
      "q": "Does the PDF contain the recipient's private key?",
      "a": "No. The file stores per-recipient envelopes built from each recipient's public certificate. The private key stays with the recipient and is required to unwrap the encryption key and open the document."
    },
    {
      "q": "Is public-key security part of the same encryption dictionary as password protection?",
      "a": "Yes. Certificate security is recorded in the PDF encryption dictionary like password protection, but it names a public-key security handler and stores a recipients array instead of password-derived values."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pdf-digital-signatures",
      "password-vs-encryption",
      "rc4-encryption",
      "user-vs-owner-password"
    ],
    "relatedTools": [
      {
        "label": "PDF Security — Password Protect and Encrypt PDFs",
        "path": "/pdf-security"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
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
    "standard-security-handler",
    "encryption-dictionary",
    "pdf-security-model",
    "aes-256-encryption",
    "aes-128-encryption",
    "pki-in-pdf",
    "pdf-permission-flags"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
