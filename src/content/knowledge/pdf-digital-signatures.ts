import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-digital-signatures",
  "h1": "PDF Digital Signatures",
  "cluster": "security",
  "aliases": [
    "Digitally signed PDF",
    "PDF cryptographic signature",
    "Certificate-based PDF signature",
    "PKI signature in PDF"
  ],
  "definition": "A PDF digital signature is a certificate-based cryptographic seal that hashes the file's bytes and binds that hash to a signer's identity, making any later change to the signed content detectable.",
  "description": "How a certificate-based signature is stored inside a PDF: the ByteRange and hash that detect edits, approval vs certification, and how validation and trust work.",
  "searchIntent": "security",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A PDF digital signature is one of the cryptographic building blocks of the PDF security model. Unlike a drawn or typed \"electronic signature\" that only looks like a handwritten mark, a digital signature uses public key cryptography: a signer has a private key and a certificate containing the matching public key, and the signature ties a cryptographic hash of the document to that identity. The result is not about appearance at all — it is about proving who signed and detecting whether anything changed afterward.",
    "Mechanically, the signature is stored in a signature dictionary that a signature form field points to. The dictionary records exactly which bytes of the file are covered and holds the signature value itself — a standardized cryptographic container carrying the signed hash, the signer's certificate chain, and optionally a trusted timestamp. Signing is applied as an incremental update, so the original bytes are preserved and the signed state is fixed in place.",
    "This matters because a signed PDF is meant to travel: it can be emailed, archived, and opened years later by software the signer never chose. Whether a reader can trust it depends on validation — recomputing the hash, checking the certificate against trusted roots, and confirming that any changes after signing were permitted. Those steps, and the way PDF keeps signatures verifiable over time, are what the rest of this entry explains."
  ],
  "sections": [
    {
      "heading": "What a Digital Signature Actually Contains",
      "body": [
        "The signature value lives in a signature dictionary that is referenced by a signature form field (an AcroForm field of type Sig). Two entries do the real work. The ByteRange array lists exactly which spans of the file are covered by the signature, and the Contents entry holds the signature blob itself — a Cryptographic Message Syntax (CMS / PKCS#7) or CAdES structure containing the signed hash, the signer's certificate chain, and often a timestamp. The gap occupied by Contents is deliberately excluded from the ByteRange, so the container is never trying to hash itself.",
        "The cryptography is straightforward in principle. A digest (hash) algorithm reduces the covered bytes to a fixed-length value; the signer's private key signs that digest; and the embedded certificate carries the public key a verifier uses to check it. Because the certificate is issued to an identity — whether by a public certificate authority or a private or self-signed issuer — a valid signature links the frozen document state to that identity."
      ]
    },
    {
      "heading": "Incremental Updates and Tamper Evidence",
      "body": [
        "Signing a PDF does not rewrite the file; it appends to it. The signer's changes are added as an incremental update, leaving the original bytes intact, and the ByteRange typically covers the whole file as it stood at signing time. This append-only behavior is what makes tamper evidence possible: any later edit is itself another appended update that a validator can compare against the signed state.",
        "During validation, software re-hashes the bytes named in the ByteRange and checks that digest against the signed value. If anything inside the covered range was altered, the hashes no longer match and the signature reports as invalid. If new content was appended after signing, the file still opens, but a validator flags that the document was changed after this signature was applied — unless those changes fall within what a certification signature explicitly allows."
      ]
    },
    {
      "heading": "Approval vs Certification Signatures",
      "body": [
        "The PDF specification distinguishes ordinary approval signatures from certification (author) signatures. An approval signature is the everyday sign-off: several can be added to one document, each in its own incremental update, and each attests to the state of the file at the moment it was signed. This is how multi-party sign-offs on a contract accumulate in a single PDF.",
        "A certification signature is applied first and there can be only one. It uses a DocMDP (Document Modification Detection and Prevention) transform to declare what changes are permitted afterward — for example, no changes at all, or only form-field filling and additional signatures. Validators honor that policy when deciding whether a later edit is a legitimate, permitted action or a signature-breaking modification."
      ]
    },
    {
      "heading": "Validation, Trust, and Long-Term Verification",
      "body": [
        "Checking a signature is more than checking the math. A validator recomputes the document hash, verifies the signature with the certificate's public key, builds the certificate chain up to a root it trusts, checks whether any certificate in the chain has been revoked (via CRL or OCSP), and validates any embedded timestamp that fixes when signing occurred. A signature can be cryptographically intact yet still \"untrusted\" simply because its issuer is not among the reader's trusted roots.",
        "Certificates eventually expire and revocation data becomes unavailable, which would otherwise make old signatures unverifiable. Long-Term Validation (LTV) addresses this by embedding the certificates and revocation responses needed for verification directly in the PDF's Document Security Store (DSS) and adding document timestamps. With that material captured, the signature can be checked far into the future without needing to reach the original online services."
      ]
    },
    {
      "heading": "PKCS#7, CAdES, and PAdES",
      "body": [
        "The signature container is standardized rather than PDF-specific. It follows CMS (Cryptographic Message Syntax, the IETF successor to PKCS#7), and the PDF signature dictionary names the exact format with a SubFilter value. Historically this was adbe.pkcs7.detached; PDF 2.0 (ISO 32000-2) adds the ETSI.CAdES.detached profile and the ETSI.RFC3161 profile used for standalone document timestamps.",
        "PAdES (PDF Advanced Electronic Signatures, specified by ETSI EN 319 142) defines profiles that build PDF signatures on top of CAdES, aligning them with the broader European framework for electronic signatures. Which profile a document uses affects interoperability and how it is validated, but the underlying idea is constant: a certificate-based signature over a defined byte range, packaged in a widely implemented cryptographic structure."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where the signature lives",
      "value": "In a signature dictionary's Contents entry, referenced by a signature form field, with a ByteRange array naming the covered bytes."
    },
    {
      "label": "Container format",
      "value": "A CMS / PKCS#7 (or CAdES) structure holding the signed hash, certificate chain, and optionally a timestamp."
    },
    {
      "label": "How it is added",
      "value": "As an incremental update that appends to the file, preserving the original bytes and enabling change detection."
    },
    {
      "label": "PAdES profile",
      "value": "PDF 2.0 supports the ETSI.CAdES.detached SubFilter used by PAdES (ETSI EN 319 142)."
    }
  ],
  "specification": {
    "typicalUsage": "Providing document integrity, signer authenticity, and tamper evidence for contracts, forms, and archived records, either as approval sign-offs or as a certification signature that constrains later edits.",
    "iso": "Defined in ISO 32000; PDF 2.0 (ISO 32000-2) adds document timestamps and the CAdES/PAdES SubFilters.",
    "relatedStandards": [
      "pades",
      "cades-in-pdf",
      "pki-in-pdf",
      "timestamp-signatures"
    ]
  },
  "misconceptions": [
    {
      "claim": "A digital signature is just the picture of a handwritten signature placed on the page.",
      "truth": "The visible appearance is cosmetic. The cryptographic signature — a hash of the file bound to a certificate — is stored separately and is what actually provides identity and tamper evidence."
    },
    {
      "claim": "Signing a PDF encrypts it so other people cannot read it.",
      "truth": "Signing proves integrity and origin; it does not hide or restrict the content. Keeping a document confidential is a separate mechanism (encryption)."
    },
    {
      "claim": "Any edit to a signed PDF corrupts the file and makes it unopenable.",
      "truth": "Edits are appended as incremental updates and the file still opens. A validator simply reports that content changed after signing, unless a certification signature permitted that kind of change."
    }
  ],
  "faq": [
    {
      "q": "How is a digital signature different from an electronic signature?",
      "a": "An electronic signature is any electronic indication of intent, such as a drawn or typed mark. A digital signature is a specific cryptographic technique — a certificate-based hash of the document — that also proves who signed and detects changes. A drawn signature has no such cryptographic backing on its own."
    },
    {
      "q": "Does a signed PDF stop being verifiable when the certificate expires?",
      "a": "It can, because verification normally relies on the certificate and fresh revocation data. Long-Term Validation (LTV) avoids this by embedding the certificates and revocation responses in the Document Security Store and adding timestamps, so the signature remains checkable after the certificate expires."
    },
    {
      "q": "Can a signed PDF still be filled in or signed by someone else?",
      "a": "Yes, if permitted. Additional signatures and, when allowed, form-field filling are added as further incremental updates. A certification signature's DocMDP settings define exactly which of these later actions are considered legitimate rather than signature-breaking."
    },
    {
      "q": "Do I need a certificate authority to digitally sign a PDF?",
      "a": "You need a certificate and private key, but they can come from a public certificate authority, an internal organizational authority, or be self-signed. A CA-issued certificate is what typically lets other people's software trust the signer automatically; a self-signed one usually shows as valid-but-untrusted until the reader trusts it manually."
    },
    {
      "q": "Where exactly in the file is the signature stored?",
      "a": "In a signature dictionary whose Contents entry holds the cryptographic signature blob, referenced by a signature form field. A ByteRange array in that dictionary defines which bytes of the file the signature covers."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pdf-incremental-updates",
      "hash-algorithms-in-pdf",
      "document-security-store",
      "signature-appearance",
      "timestamp-signatures",
      "cades-in-pdf",
      "acroform"
    ],
    "relatedStandards": [
      "pades",
      "cades-in-pdf"
    ],
    "relatedTools": [
      {
        "label": "Sign PDF — Add Electronic Signatures on Phone",
        "path": "/sign-pdf"
      },
      {
        "label": "PDF Security — Password Protect and Encrypt PDFs",
        "path": "/pdf-security"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Sign a PDF on Your Phone",
        "path": "/guides/how-to-sign-pdf-on-phone"
      },
      {
        "label": "How to Send Contracts as PDF (Sign, Lock, Deliver)",
        "path": "/guides/how-to-send-contracts-as-pdf"
      }
    ]
  },
  "seeAlso": [
    "signature-validation",
    "approval-vs-certification-signatures",
    "pki-in-pdf",
    "pades",
    "ltv-signatures",
    "tamper-evidence-in-pdf",
    "signature-fields",
    "electronic-vs-digital-signature"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
