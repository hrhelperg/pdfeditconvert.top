import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pades",
  "h1": "PAdES (PDF Advanced Electronic Signatures)",
  "cluster": "security",
  "aliases": [
    "PDF Advanced Electronic Signatures",
    "PAdES signatures",
    "ETSI EN 319 142",
    "ETSI TS 102 778",
    "PAdES baseline profiles"
  ],
  "definition": "PAdES is an ETSI family of profiles that specify how to embed CAdES-based advanced electronic signatures in PDF files, including support for long-term validation.",
  "description": "PAdES is the ETSI family of profiles for advanced electronic signatures in PDF, built on CAdES and used in eIDAS-aligned signing workflows.",
  "searchIntent": "standard",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "PAdES, short for PDF Advanced Electronic Signatures, is a set of technical profiles published by ETSI, the European Telecommunications Standards Institute. Rather than inventing a new signature technology, PAdES describes how to use PDF's built-in digital signature mechanism in a precise, interoperable way so that a signed PDF can be validated consistently by different software and can remain verifiable for a long time.",
    "The profiles sit on top of the cryptographic building blocks the PDF format already relies on. A PAdES signature is carried in the ordinary PDF signature dictionary, and its underlying data structure is a CAdES signature, which is itself based on the Cryptographic Message Syntax (CMS). What PAdES adds is a set of rules for exactly how that signature is placed in the file, what it must cover, and what supporting information should travel with it so the signature can outlive the certificates used to create it.",
    "PAdES is closely tied to European electronic-signature standardization and is referenced in the context of the EU eIDAS regulation, but the file structures it defines are not limited to any one jurisdiction. Some of the mechanisms PAdES pioneered, such as the Document Security Store and document timestamps, were later folded into the core PDF standard when PDF 2.0 (ISO 32000-2) was published."
  ],
  "sections": [
    {
      "heading": "What PAdES Standardizes",
      "body": [
        "PAdES is a collection of profiles, not a single monolithic specification. It was originally published by ETSI as the TS 102 778 (PAdES) series and was later restructured into the ETSI EN 319 142 series. It belongs to a wider family of ETSI signature standards that share common concepts: CAdES for CMS-based signatures, XAdES for XML signatures, and ASiC for signature containers. PAdES is the member of that family that governs signatures inside PDF documents.",
        "The goal is interoperability and longevity. Because PAdES pins down how a signature is represented in the PDF signature dictionary and what validation material accompanies it, a signature produced by one conforming application can be checked by another, and a signature can still be validated years later even after signing certificates have expired. Importantly, PAdES profiles PDF's native signing rather than replacing it, so a PAdES-conforming signature is still a PDF digital signature."
      ]
    },
    {
      "heading": "How a PAdES Signature Is Embedded in the PDF",
      "body": [
        "A PAdES signature lives in a PDF signature dictionary, the same structure the PDF format uses for any digital signature. Two entries do the core work: a ByteRange array that lists the exact ranges of bytes the signature covers, and a Contents entry that holds the signature as a hexadecimal string. The signed byte ranges normally span the whole file except for the placeholder where the signature bytes themselves sit, which is what gives the signature its tamper-evidence property: any later change to the covered bytes breaks verification.",
        "What distinguishes a PAdES CAdES-based signature from older Adobe signature types is the SubFilter value. PAdES uses ETSI.CAdES.detached to indicate that the Contents field holds a detached CAdES (CMS) signature, in place of legacy values such as adbe.pkcs7.detached. Standalone timestamps are added as document timestamps that use the SubFilter ETSI.RFC3161. Because PDF supports incremental updates, several signatures and timestamps can be layered onto one document over time, each covering the state of the file as it existed when it was applied."
      ]
    },
    {
      "heading": "Baseline Levels and Long-Term Validation",
      "body": [
        "The ETSI baseline profiles define a ladder of conformance levels shared across the AdES family: B-B is a basic signature, B-T adds a trusted timestamp over the signature, B-LT adds the validation material needed for the long term, and B-LTA adds archive timestamps that can be renewed to extend longevity further. Each step is about making the signature verifiable further into the future, not about making the cryptography itself stronger.",
        "Long-term validation is the reason PAdES defines the Document Security Store (DSS). The DSS is a place in the PDF to store the certificates, certificate revocation lists, and OCSP responses that a verifier needs to reconstruct trust and check revocation status, captured at signing time. Combined with document timestamps, this lets a signature be validated even after the signing certificate expires or the issuing authority goes offline, which is the essence of LTV signatures."
      ]
    },
    {
      "heading": "PAdES, eIDAS, and PDF 2.0",
      "body": [
        "PAdES was developed within a European standardization effort and is referenced in the context of the EU eIDAS regulation (Regulation (EU) No 910/2014), which frames concepts such as advanced electronic signatures and qualified electronic signatures. PAdES describes a technical format that can be used to build such signatures in PDF; whether a given signature meets a particular legal category depends on how it is created and on the certificates and trust services involved, which is a legal and organizational question rather than a property of the file format alone.",
        "The relationship with the core PDF standard has grown closer over time. When PDF 2.0 (ISO 32000-2) was published, it incorporated dictionaries and mechanisms that PAdES had defined as extensions, including the Document Security Store and the document timestamp. As a result, features once described only in the ETSI profiles are now part of the base PDF specification, while PAdES continues to define the profiles and conformance levels that make signatures interoperable and durable."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Maintained by",
      "value": "ETSI (European Telecommunications Standards Institute)"
    },
    {
      "label": "Underlying signature",
      "value": "CAdES (CMS-based), embedded via SubFilter ETSI.CAdES.detached"
    },
    {
      "label": "Baseline levels",
      "value": "B-B, B-T, B-LT, B-LTA"
    },
    {
      "label": "Current standard",
      "value": "ETSI EN 319 142 series (originally the ETSI TS 102 778 series)"
    }
  ],
  "specification": {
    "introduced": "Published by ETSI as the TS 102 778 (PAdES) series, later restructured as the ETSI EN 319 142 series",
    "latestVersion": "ETSI EN 319 142 series",
    "typicalUsage": "Embedding advanced or qualified electronic signatures in PDF documents, including long-term validation, in eIDAS-aligned workflows",
    "relatedStandards": [
      "cades-in-pdf",
      "pdf-digital-signatures",
      "ltv-signatures",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "PAdES is a different kind of signature from a PDF digital signature.",
      "truth": "PAdES profiles PDF's native digital signature mechanism. A PAdES signature is stored in the ordinary PDF signature dictionary; the profiles just specify exactly how it is formed and what accompanies it."
    },
    {
      "claim": "PAdES and CAdES are competing formats.",
      "truth": "A PAdES CAdES-based signature uses CAdES as its underlying CMS container. PAdES defines how that CAdES signature is embedded in and bound to a PDF, so the two work together rather than compete."
    },
    {
      "claim": "PAdES is an ISO standard.",
      "truth": "PAdES is specified by ETSI, not ISO. However, PDF 2.0 (ISO 32000-2) later incorporated some structures PAdES originally defined, such as the Document Security Store and document timestamps."
    }
  ],
  "faq": [
    {
      "q": "What SubFilter value identifies a PAdES CAdES signature?",
      "a": "The signature dictionary uses the SubFilter value ETSI.CAdES.detached to mark a detached CAdES signature, and standalone document timestamps use ETSI.RFC3161."
    },
    {
      "q": "How does PAdES support long-term validation?",
      "a": "It defines the Document Security Store, which stores certificates and revocation data such as CRLs and OCSP responses, and it uses document timestamps. Together these let a signature be validated after the signing certificate expires."
    },
    {
      "q": "Does PAdES require a specific PDF version?",
      "a": "No. PAdES signatures can be applied to signature-capable PDFs based on ISO 32000-1 (PDF 1.7) and earlier, and PDF 2.0 later standardized related structures such as the DSS and document timestamps."
    },
    {
      "q": "Is PAdES only usable in the European Union?",
      "a": "PAdES was developed in a European standardization context and is referenced alongside the eIDAS regulation, but the technical file structures it defines can be used anywhere."
    },
    {
      "q": "What do the baseline levels B-B through B-LTA mean?",
      "a": "B-B is a basic signature, B-T adds a trusted timestamp, B-LT adds long-term validation material, and B-LTA adds archive timestamps that can be renewed to extend how long the signature stays verifiable."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "signature-fields",
      "approval-vs-certification-signatures",
      "hash-algorithms-in-pdf",
      "electronic-vs-digital-signature",
      "tamper-evidence-in-pdf",
      "signature-appearance"
    ],
    "relatedStandards": [
      "pdf-2-0",
      "iso-32000"
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
    "cades-in-pdf",
    "ltv-signatures",
    "document-security-store",
    "timestamp-signatures",
    "signature-validation",
    "pki-in-pdf",
    "pdf-security-model"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
