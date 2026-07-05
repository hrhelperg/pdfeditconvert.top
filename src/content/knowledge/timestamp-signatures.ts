import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "timestamp-signatures",
  "h1": "Timestamp Signatures in PDF",
  "cluster": "security",
  "aliases": [
    "Document timestamp",
    "DocTimeStamp",
    "PDF document timestamp signature",
    "RFC 3161 timestamp",
    "Trusted timestamp",
    "Signature timestamp"
  ],
  "definition": "A timestamp signature in PDF is a signature whose token is issued by a trusted timestamp authority, cryptographically attesting that the document's bytes existed at a specific point in time.",
  "description": "How PDF timestamp signatures work: RFC 3161 tokens from a trusted authority that prove a file existed at a point in time and anchor long-term validation.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A timestamp signature answers a different question from an ordinary digital signature. A normal signature says who approved a document; a timestamp says when a document, or a signature over it, provably existed. It does this by embedding a cryptographic token obtained from an independent third party rather than relying on the clock of the computer that produced the file.",
    "Mechanically, a PDF timestamp is still a signature dictionary with a ByteRange and a Contents entry, but the bytes are signed by a Time Stamping Authority (TSA) following the IETF Time-Stamp Protocol (RFC 3161). The TSA takes a hash of the covered bytes, adds its trusted time, signs the result, and returns a time-stamp token that the PDF stores. Because the token is a hash-plus-time signed by a party with no stake in the document, it is much harder to backdate or forge than a self-asserted date.",
    "Timestamps matter most for signatures that need to stay verifiable for years. They establish that a signing certificate was still valid at the moment of signing, and, when chained together, they let a signed PDF outlive the expiry or weakening of the cryptography that originally protected it. That makes them a foundational piece of the long-term validation (LTV) workflow rather than a cosmetic date stamp."
  ],
  "sections": [
    {
      "heading": "How a Timestamp Signature Works",
      "body": [
        "A document timestamp is stored in a signature dictionary whose Type is DocTimeStamp and whose SubFilter is ETSI.RFC3161. As with any PDF signature, a ByteRange array describes the span of the file that is covered, leaving a gap for the Contents entry that holds the token itself. The signing software computes a digest over the covered bytes and sends that digest, not the document, to a Time Stamping Authority.",
        "The TSA returns a time-stamp token: a CMS SignedData structure containing a TSTInfo record. That record binds the submitted hash (the message imprint) to the authority's asserted time and is signed with the TSA's own key. The PDF stores the DER-encoded token in Contents. A verifier later recomputes the ByteRange digest, checks that it matches the imprint inside the token, and validates the TSA's signature and certificate chain. Only the file's raw bytes leave the signer's control as a hash, so the TSA never sees the document content."
      ]
    },
    {
      "heading": "Document Timestamps and Signature Timestamps",
      "body": [
        "Timestamps appear in PDF in two related roles. A signature timestamp is carried inside an approval or certification signature as an unsigned attribute of its CMS structure; it proves that the signature was created before the timestamped moment, which helps show the signer's certificate had not yet expired or been revoked. This is the timestamp that PAdES profiles add when they raise a plain signature to a timestamped level.",
        "A document timestamp is a standalone signature over the whole file rather than an attribute of another signature. It is added as its own PDF revision and typically protects everything present at that point, including validation material collected for other signatures. The DocTimeStamp dictionary type and the ETSI.RFC3161 subfilter were formalized in PDF 2.0, building on earlier ETSI PAdES profiles that first defined how RFC 3161 tokens are embedded in PDF."
      ]
    },
    {
      "heading": "Timestamps and Long-Term Validation",
      "body": [
        "Signatures decay over time: certificates expire, keys are revoked, and hash or signature algorithms weaken. Long-term validation addresses this by storing the certificates, CRLs, and OCSP responses needed to validate a signature inside the PDF, usually in a Document Security Store (DSS). A document timestamp then seals that evidence, fixing the moment at which it was known to be current.",
        "Because each document timestamp is applied as an incremental update over all prior content, timestamps can be chained. Before an existing TSA certificate or algorithm becomes untrustworthy, a new document timestamp is layered on top, covering everything beneath it and extending the window of trust. This archival timestamping is what allows an LTV-enabled PDF to remain verifiable long after the original signing credentials have expired."
      ]
    },
    {
      "heading": "What a Timestamp Proves — and What It Doesn't",
      "body": [
        "A timestamp establishes existence and integrity at a time: the covered bytes existed no later than the token's time, and they have not changed since, because any edit would break the hash match. It does not, on its own, identify a person. There is no signer identity in a document timestamp; the trust it carries flows entirely from the TSA and the certificate authority chain behind it.",
        "The strength of a timestamp is therefore only as good as the authority that issued it and the verifier's willingness to trust that authority's root. A timestamp also covers only the bytes named in its ByteRange, so later incremental updates outside that range are simply newer revisions rather than tampering. Reading a timestamped PDF correctly means checking both what time was asserted and which authority asserted it, then confirming the recomputed hash still matches."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Signature subfilter",
      "value": "/ETSI.RFC3161 identifies a PDF document timestamp"
    },
    {
      "label": "Dictionary type",
      "value": "/DocTimeStamp marks the timestamp signature dictionary"
    },
    {
      "label": "Underlying protocol",
      "value": "IETF RFC 3161 Time-Stamp Protocol (TSP)"
    },
    {
      "label": "Token format",
      "value": "A CMS SignedData time-stamp token issued by a TSA"
    }
  ],
  "specification": {
    "introduced": "Formalized in PDF 2.0 (ISO 32000-2), building on earlier ETSI PAdES profiles",
    "iso": "ISO 32000-2",
    "typicalUsage": "Establishing a trusted point in time for a signature or document and anchoring long-term validation (LTV) and archival timestamping.",
    "relatedStandards": [
      "pdf-digital-signatures",
      "pades",
      "cades-in-pdf",
      "ltv-signatures",
      "document-security-store"
    ]
  },
  "misconceptions": [
    {
      "claim": "A timestamp signature tells you who signed the document.",
      "truth": "A timestamp certifies when the covered bytes existed, not who produced them. Signer identity comes from a separate approval or certification signature."
    },
    {
      "claim": "The timestamp is taken from the signer's own computer clock.",
      "truth": "A trusted timestamp is issued by an independent Time Stamping Authority over RFC 3161. A locally asserted date is not a timestamp signature and carries no third-party proof."
    },
    {
      "claim": "Adding a timestamp locks the PDF so nothing more can ever be added.",
      "truth": "A document timestamp is applied as an incremental update and only detects changes to the bytes it covered. Further revisions, including additional timestamps, can still be appended as new sections."
    }
  ],
  "faq": [
    {
      "q": "What is a Time Stamping Authority (TSA)?",
      "a": "A TSA is a trusted third-party service that receives a hash of your data, adds its own reliable time, signs the pair, and returns an RFC 3161 time-stamp token. The PDF stores that token as proof the bytes existed by that time."
    },
    {
      "q": "Does applying a timestamp require internet access?",
      "a": "Yes. The signing software must reach a TSA over the network to obtain a token, because the trusted time and the authority's signature come from the TSA rather than the local device."
    },
    {
      "q": "Can a timestamp be added to an already-signed PDF without breaking the signature?",
      "a": "Yes. A document timestamp is written as a separate incremental revision that appends to the file, so the earlier signature's covered bytes are unchanged and remain valid."
    },
    {
      "q": "What happens when the TSA's certificate eventually expires?",
      "a": "Validation material is preserved and a new document timestamp is layered over everything before it expires, chaining timestamps so the document stays verifiable past the original credentials."
    },
    {
      "q": "Is a timestamp signature the same thing as a digital signature?",
      "a": "They share the same PDF signature structure, but a digital signature asserts identity and approval while a timestamp asserts time. They are often combined, with a timestamp reinforcing when an identity signature was made."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pdf-digital-signatures",
      "ltv-signatures",
      "document-security-store",
      "signature-validation",
      "pdf-incremental-updates",
      "tamper-evidence-in-pdf",
      "approval-vs-certification-signatures",
      "signature-fields"
    ],
    "relatedStandards": [
      "pades",
      "cades-in-pdf",
      "ltv-signatures"
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
    "pdf-digital-signatures",
    "ltv-signatures",
    "document-security-store",
    "pades",
    "cades-in-pdf",
    "signature-validation",
    "pki-in-pdf",
    "hash-algorithms-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
