import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "ltv-signatures",
  "h1": "Long-Term Validation (LTV) Signatures",
  "cluster": "security",
  "aliases": [
    "LTV-enabled signature",
    "Long-Term Validation",
    "long-term signature validation",
    "PAdES long-term signature"
  ],
  "definition": "A Long-Term Validation (LTV) signature is a PDF digital signature that embeds its certificate chain, revocation data, and timestamps so it can be checked long after the signing certificate expires.",
  "description": "How LTV signatures embed certificate chains, CRL/OCSP revocation data, and timestamps in a PDF's Document Security Store to stay verifiable for years.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A digital signature proves who signed a PDF and that the bytes have not changed since. But proving those things is only easy on the day the document is signed. Certificates expire, the online services that report whether a certificate was revoked can go offline, and the software that once trusted a signing authority may stop trusting it. A signature that a viewer happily validates today can become unverifiable years later, not because it was forged, but because the supporting evidence is no longer reachable.",
    "Long-Term Validation (LTV) is the technique that solves this. Instead of relying on a validator fetching certificates and revocation information from the internet at check time, an LTV-enabled signature packages all of that evidence inside the PDF itself. A later reader can then confirm the signature was valid at the moment it was made, using only what the file already contains.",
    "LTV is not a separate kind of signature so much as a signature that carries its own long-term evidence. It builds directly on ordinary PDF digital signatures, timestamps, and the public-key infrastructure behind them, and it stores the extra material in a dedicated structure so that adding it never disturbs the original signature."
  ],
  "sections": [
    {
      "heading": "What makes a signature LTV-enabled",
      "body": [
        "An ordinary digital signature contains the signer's certificate and a cryptographic hash covering a defined range of the file's bytes. To validate it, software normally needs three things beyond the signature: the full chain of certificates up to a trusted root, evidence that none of those certificates had been revoked at signing time, and a reliable timestamp establishing when the signature existed. In a non-LTV signature, the validator is expected to obtain the chain and revocation data live, over the network.",
        "An LTV-enabled signature instead embeds all of that supporting material in the document. The complete certificate chain is stored, together with revocation information in the form of Certificate Revocation Lists (CRLs) or Online Certificate Status Protocol (OCSP) responses, and one or more trusted timestamps. Once this evidence is present, a validator can reconstruct the whole trust picture offline and confirm that the signature was valid at the time it was applied, even if the certificate has since expired."
      ]
    },
    {
      "heading": "Where the evidence lives: the Document Security Store",
      "body": [
        "The validation material is not scattered through the file. It is collected in a single structure called the Document Security Store (DSS), a dictionary referenced from the document catalog that holds arrays of certificates, CRLs, and OCSP responses, along with per-signature Validation Related Information linking each signature to the evidence that supports it. This organization lets a viewer look up exactly which certificates and revocation responses belong to a given signature.",
        "Crucially, LTV material is added using an incremental update: the new objects and a fresh cross-reference section are appended to the end of the existing file rather than rewritten in place. Because a signature's hash covers a fixed byte range near the point it was signed, appending the DSS afterwards leaves that range untouched, so the original signature stays cryptographically intact. This is why LTV can be enabled after signing without re-signing, and why several signatures in one document can each accumulate their own validation data over time."
      ]
    },
    {
      "heading": "Why timestamps are essential",
      "body": [
        "Embedding certificates and revocation lists only helps if you can also prove when the signature existed. Without a trusted time reference, a validator has no way to know whether the certificate was still valid, or already revoked, at the moment of signing. LTV therefore depends on timestamps issued by a trusted Time Stamp Authority, which cryptographically bind a hash of the signature to an authoritative time.",
        "Timestamps also address a subtler problem: cryptography ages. The algorithms and key lengths considered secure today may weaken over the lifetime of a long-term archive. To guard against this, additional document timestamps can be layered over the whole file, each one time-stamping everything below it including earlier timestamps. Renewing this archival timestamping before the previous layer's algorithms or certificates weaken is what lets a signature's verifiability be extended well beyond the cryptographic lifetime of any single certificate."
      ]
    },
    {
      "heading": "LTV and the PAdES long-term profiles",
      "body": [
        "LTV is closely tied to PAdES, the profile family that adapts advanced electronic signatures to PDF. PAdES describes baseline levels that build on one another: a basic signature, a level that adds a signature timestamp, a long-term level that additionally embeds the validation material (certificate chains and revocation data) needed to check the signature offline, and an archival level that adds document timestamps for extended preservation. The long-term and archival levels are the ones that correspond to what viewers describe as LTV-enabled.",
        "This layering matters because it separates two different guarantees. A timestamp alone tells you when a signature existed; embedded revocation data tells you the certificate was in good standing at that time; archival timestamps keep both provable as technology moves on. LTV is the combination of these pieces, assembled inside the PDF, rather than any one of them in isolation."
      ]
    },
    {
      "heading": "Why long-term validation matters",
      "body": [
        "The value of LTV shows up in exactly the situations where documents outlive their signing infrastructure: contracts, records, and archived filings that must stay verifiable for years or decades. Signing certificates typically have short validity periods, and the OCSP responders and CRL distribution points that report their status are not guaranteed to remain online. Once those services disappear, a validator that depends on fetching status live can no longer complete its checks, and the signature is reported as indeterminate even though nothing about it changed.",
        "By capturing the trust context at signing time and anchoring it with timestamps, an LTV-enabled signature turns validation into a self-contained, offline check. That property is also why LTV pairs naturally with long-term archival goals more broadly: a document meant to last should not depend on a network resource that may not. The result is a signature whose meaning can still be reconstructed from the file itself long after the world around it has moved on."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where evidence is stored",
      "value": "The Document Security Store (DSS), a dictionary referenced from the document catalog holding certificates, CRLs, and OCSP responses"
    },
    {
      "label": "How it is added",
      "value": "As an incremental update appended to the file, so existing signatures' byte ranges stay intact"
    },
    {
      "label": "Standardization",
      "value": "The DSS and document-timestamp mechanism originated in the PAdES profiles and are part of PDF 2.0 (ISO 32000-2)"
    },
    {
      "label": "Core ingredients",
      "value": "Full certificate chain, revocation data (CRL or OCSP), and one or more trusted timestamps"
    }
  ],
  "specification": {
    "introduced": "Mechanism defined in the PAdES profiles and incorporated into PDF 2.0 (ISO 32000-2, 2017)",
    "iso": "ISO 32000-2",
    "typicalUsage": "Keeping PDF digital signatures verifiable long after their signing certificates expire, using embedded validation data",
    "relatedStandards": [
      "pades",
      "cades-in-pdf",
      "timestamp-signatures"
    ]
  },
  "misconceptions": [
    {
      "claim": "Enabling LTV means the signature never expires and stays valid forever with no maintenance.",
      "truth": "LTV embeds evidence so a signature can still be checked later, but preserving verifiability over long periods relies on renewing archival document timestamps before the previous layer's algorithms or certificates weaken."
    },
    {
      "claim": "Turning on LTV re-signs the document or alters the original signature.",
      "truth": "LTV material is appended in the Document Security Store via an incremental update; the original signature's covered byte range and cryptographic content are left unchanged."
    },
    {
      "claim": "A trusted timestamp on its own makes a signature LTV.",
      "truth": "A timestamp proves when the signature existed, but LTV also requires the full certificate chain and revocation data (CRL or OCSP) to be embedded so the signature can be validated offline."
    }
  ],
  "faq": [
    {
      "q": "What exactly does an LTV signature embed?",
      "a": "The complete certificate chain up to a trusted root, revocation information as CRLs or OCSP responses, and one or more trusted timestamps. Together these let a validator confirm the signature was valid at signing time without fetching anything over the network."
    },
    {
      "q": "Does validating an LTV signature require an internet connection?",
      "a": "No, and avoiding that dependency is the whole point. Because the certificates, revocation data, and timestamps are stored inside the PDF, a validator can reconstruct the trust picture offline, even years later when the original online services may be gone."
    },
    {
      "q": "Can LTV be added to a signature after the document was already signed?",
      "a": "Yes. The validation material is appended in the Document Security Store as an incremental update, which does not disturb the existing signature. This works only while the needed certificate and revocation data are still obtainable to embed."
    },
    {
      "q": "How is LTV different from a plain timestamp signature?",
      "a": "A timestamp establishes when a signature existed but does not, by itself, prove the certificate was in good standing then. LTV combines the timestamp with the embedded certificate chain and revocation data so the full validation can be reproduced later."
    },
    {
      "q": "Why does a signature that was valid before start showing as unverifiable?",
      "a": "Without embedded validation data, a viewer tries to fetch the certificate chain and revocation status live. Once the signing certificate expires or the revocation service goes offline, those lookups fail and the signature is reported as indeterminate, which is precisely the failure LTV prevents."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "hash-algorithms-in-pdf",
      "tamper-evidence-in-pdf",
      "approval-vs-certification-signatures",
      "signature-fields"
    ],
    "relatedStandards": [
      "pades",
      "cades-in-pdf"
    ],
    "relatedFormats": [
      "pdf-2-0",
      "pdf-a"
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
        "label": "How to Send Contracts as PDF (Sign, Lock, Deliver)",
        "path": "/guides/how-to-send-contracts-as-pdf"
      },
      {
        "label": "How to Sign a PDF on Your Phone",
        "path": "/guides/how-to-sign-pdf-on-phone"
      }
    ]
  },
  "seeAlso": [
    "document-security-store",
    "pdf-digital-signatures",
    "pades",
    "timestamp-signatures",
    "signature-validation",
    "pki-in-pdf",
    "cades-in-pdf",
    "pdf-incremental-updates"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
