import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "signature-validation",
  "h1": "How PDF Signature Validation Works",
  "cluster": "security",
  "aliases": [
    "digital signature verification",
    "PDF signature verification",
    "verifying a signed PDF",
    "checking PDF signatures",
    "signature checking in PDF"
  ],
  "definition": "PDF signature validation is the process a viewer uses to confirm that a signed PDF has not changed since signing and that the signer's certificate can be trusted.",
  "description": "How PDF readers verify a digital signature: recomputing the document hash over the signed byte range, then checking the signer's certificate chain and trust.",
  "searchIntent": "security",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When a PDF is digitally signed, the signature does more than stamp a name on the page: it binds a cryptographic value to the exact bytes of the document as they existed at signing time. Validation is the process a viewer performs to answer two separate questions: has anything in the signed content changed, and can the identity behind the signature be trusted?",
    "These two questions map to two independent checks. The integrity check recomputes a hash of the signed bytes and confirms it matches the value protected inside the signature. The trust check examines the signer's certificate and whether it chains up to an authority the verifier already trusts. A signature can be cryptographically intact yet still be reported as unknown because its certificate is self-signed or untrusted, and a trusted signer's signature is worthless if the document hash no longer matches.",
    "Validation is more involved in PDF than in a simple signed blob because PDF permits incremental updates. A legitimately signed file can have later revisions appended after the signature, so a validator must reason about which bytes the signature actually covered and whether any changes made afterward were permitted."
  ],
  "sections": [
    {
      "heading": "The byte range and the signed digest",
      "body": [
        "A PDF signature is stored in a signature dictionary, usually attached to a signature field on the page. The cryptographic material itself is a detached CMS (PKCS#7 / CAdES) structure held, hex-encoded, in the dictionary's Contents entry. Because the signature bytes cannot cover themselves, the dictionary also carries a ByteRange array that names the spans of the file the signature protects, deliberately skipping the placeholder region where the signature value sits.",
        "To check integrity, a validator reads the ByteRange, hashes exactly those spans of the file, and verifies that digest against the value carried inside the CMS structure. If even one byte inside the covered range differs from what was signed, the recomputed hash will not match and the signature is reported as invalid. This is what makes a signed PDF tamper-evident: the math, not a visual badge, is what detects a change."
      ]
    },
    {
      "heading": "Checking signer identity and trust",
      "body": [
        "Integrity alone only proves the covered bytes are unchanged; it says nothing about who signed them. The trust check looks at the signer's certificate embedded with the signature and attempts to build a path from it to a trust anchor the verifier already recognizes, such as a root certificate in the operating system or application trust store. Along the way it checks that the certificate was valid at the relevant time and that its key usage permits signing.",
        "Trust also depends on revocation: a certificate can be withdrawn before it expires, so validators consult revocation information through OCSP responses or certificate revocation lists (CRLs). Public-key infrastructure supplies the chain of certificates and the revocation services that make this possible. When a certificate cannot be traced to a trusted anchor, most viewers report the signature as unknown or not trusted rather than invalid, since the content itself may be perfectly intact."
      ]
    },
    {
      "heading": "Timestamps and long-term validation",
      "body": [
        "Certificates expire, and revocation data is only meaningful at a point in time, which creates a problem for signatures that must be checked years later. A trusted timestamp from a time-stamping authority records when the signing happened using an independently trusted clock, so a validator can later confirm the certificate was valid at that moment rather than at the moment of checking.",
        "Long-term validation (LTV) goes further by embedding the certificates and revocation responses needed to verify the signature directly into the document, typically through the Document Security Store. With that information carried inside the file, a validator can confirm a signature offline and long after the signing certificate has expired, without having to reach the original certificate authority's live services."
      ]
    },
    {
      "heading": "Change analysis and incremental updates",
      "body": [
        "Because PDF appends changes as incremental updates rather than rewriting the whole file, a signed document can legitimately grow after it is signed, for example when a second person adds their own approval signature. A validator therefore has to distinguish between later revisions that were allowed and modifications that break the signed content.",
        "This is where the distinction between approval and certification signatures matters. A certification (DocMDP) signature declares, at signing time, which categories of later change are permitted, such as filling form fields or adding annotations while disallowing edits to the page content. During validation the reader compares what actually changed after signing against what the certification permitted, and flags disallowed changes. Approval signatures do not restrict later changes in the same way, so multiple approval signatures can coexist over successive revisions."
      ]
    },
    {
      "heading": "What validators report: valid, invalid, or unknown",
      "body": [
        "Most PDF viewers collapse the outcome into three practical states, and confusing them is a common source of misreading a signed document. Valid means both the integrity check and the trust check succeeded for the signed portion. Invalid means the integrity check failed: the covered bytes no longer hash to the signed value, so the content was altered within the signed range.",
        "Unknown (or 'validity is unknown' / 'not trusted') is a distinct third state. It usually means the cryptography is sound but the signer's certificate could not be tied to a trusted anchor, or revocation and timestamp information could not be confirmed. Treating unknown as if it were invalid, or a valid integrity result as proof of a trusted identity, both misread what the validator is actually telling you."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where the signature lives",
      "value": "A detached CMS/PKCS#7 structure, hex-encoded, in the Contents entry of the PDF signature dictionary."
    },
    {
      "label": "What defines the signed bytes",
      "value": "The ByteRange array, which names the file spans the signature covers and excludes the signature placeholder itself."
    },
    {
      "label": "Two independent checks",
      "value": "Integrity (recomputed document hash) and trust (certificate chain plus revocation) are evaluated separately."
    },
    {
      "label": "Why change analysis is needed",
      "value": "PDF's incremental updates let a signed file gain later revisions, so validators assess whether post-signing changes were permitted."
    }
  ],
  "specification": {
    "iso": "ISO 32000 (digital signatures defined within the PDF specification)",
    "introduced": "Digital signature support has been part of PDF since the late 1990s (PDF 1.3).",
    "typicalUsage": "Confirming the integrity and signer identity of a digitally signed PDF before relying on its contents.",
    "relatedStandards": [
      "pades",
      "cades-in-pdf",
      "ltv-signatures"
    ]
  },
  "misconceptions": [
    {
      "claim": "A valid signature means the document has not changed at all since it was signed.",
      "truth": "A signature only guarantees the bytes inside its ByteRange are unchanged. Later incremental updates can be appended, and certification signatures may explicitly permit some kinds of later change such as form filling."
    },
    {
      "claim": "A green check mark proves the signer is who they claim to be.",
      "truth": "The integrity check and the trust check are separate. A mathematically valid signature can still come from an untrusted or self-signed certificate, which viewers typically flag as unknown rather than as a trusted, valid identity."
    },
    {
      "claim": "If a signature shows as unknown, the document must have been tampered with.",
      "truth": "Unknown usually means the signer's certificate could not be traced to a trusted anchor, not that the content was altered. A tampered document fails the integrity check and is reported as invalid instead."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between an invalid and an unknown signature?",
      "a": "Invalid means the integrity check failed: the signed bytes no longer match the protected hash, so the content changed. Unknown means integrity is fine but the signer's identity could not be established, usually because the certificate does not chain to a trusted anchor."
    },
    {
      "q": "Does signature validation need an internet connection?",
      "a": "It can. Revocation checks via OCSP or CRLs and updates to trust stores may require network access. Long-term validation data embedded in the Document Security Store lets a signature be verified offline later."
    },
    {
      "q": "Can a PDF still be edited after it is signed?",
      "a": "Yes, through incremental updates that append changes to the end of the file. Whether those changes invalidate the signature depends on the certification level (DocMDP) and on what was actually modified within or after the signed range."
    },
    {
      "q": "How does a validator know exactly which bytes were signed?",
      "a": "The ByteRange array in the signature dictionary records the precise spans of the file that the signature covers, leaving out the placeholder region that holds the signature value."
    },
    {
      "q": "What happens when the signer's certificate expires?",
      "a": "Without a trusted timestamp and embedded revocation data, validation can drop to unknown because the verifier cannot confirm the certificate was valid at signing. A timestamp plus long-term validation data preserves verifiability after expiry."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "signature-fields",
      "pades",
      "cades-in-pdf",
      "signature-appearance",
      "pdf-incremental-updates",
      "electronic-vs-digital-signature"
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
      }
    ]
  },
  "seeAlso": [
    "pdf-digital-signatures",
    "tamper-evidence-in-pdf",
    "approval-vs-certification-signatures",
    "ltv-signatures",
    "timestamp-signatures",
    "document-security-store",
    "pki-in-pdf",
    "hash-algorithms-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
