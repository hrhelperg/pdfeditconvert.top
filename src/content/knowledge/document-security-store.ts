import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "document-security-store",
  "h1": "The Document Security Store (DSS)",
  "cluster": "security",
  "aliases": [
    "DSS",
    "Document Security Store dictionary",
    "DSS dictionary",
    "/DSS dictionary"
  ],
  "definition": "The Document Security Store (DSS) is a PDF catalog dictionary that stores certificates, CRLs, and OCSP responses so digital signatures can be validated long after signing.",
  "description": "The DSS is a PDF dictionary holding certificates, CRLs, and OCSP responses that let digital signatures stay verifiable years after they were applied.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A digital signature proves who signed a PDF and that its bytes have not changed since. Proving that a signature is still trustworthy years later is harder: it requires knowing that the signer's certificate was valid, and not revoked, at the moment of signing. The Document Security Store, or DSS, is the part of a PDF that carries that supporting evidence.",
    "Structurally, the DSS is a dictionary referenced from the document catalog under the key /DSS. It gathers the certificate chain and the revocation information (CRLs and OCSP responses) needed to check each signature, plus a VRI sub-dictionary that ties specific pieces of that evidence to specific signatures. Because it is added through an incremental update, it can be attached to an already-signed document without disturbing the signed byte ranges.",
    "The DSS originated in the ETSI PAdES profiles for PDF signatures and was later folded into the core PDF standard with PDF 2.0. It is the mechanism that makes Long-Term Validation (LTV) possible: embed the validation material now, so a verifier can confirm the signature far in the future even if the issuing authority's servers are long gone."
  ],
  "sections": [
    {
      "heading": "What the DSS Dictionary Holds",
      "body": [
        "The DSS is a dictionary with a small set of well-defined entries. /Certs, /CRLs, and /OCSPs are arrays whose elements are stream objects: each stream is, respectively, one X.509 certificate, one certificate revocation list, or one OCSP response. Together these arrays form a shared pool of validation material for the whole document. A fourth entry, /VRI (Validation-Related Information), is a dictionary that organizes that pool on a per-signature basis. A signature validator walks these entries to assemble everything it needs to build and check a certificate chain without reaching out to the network.",
        "Storing this data inside the file is the whole point. Certificate authorities publish revocation information at URLs that can change, rate-limit requests, or disappear entirely; OCSP responders and CRL distribution points are not guaranteed to answer the same way years from now. By copying the relevant certificates and revocation responses into the DSS at signing or archiving time, the PDF becomes self-contained for validation purposes."
      ]
    },
    {
      "heading": "The VRI Dictionary: Linking Evidence to Signatures",
      "body": [
        "The /VRI dictionary answers a specific question: which certificates and revocation responses correspond to which signature? Its keys are not ordinary names. Each key is the uppercase, base-16 (hexadecimal) SHA-1 digest of the signature's /Contents value, that is, of the signed CMS/PKCS#7 blob. The value under each key is itself a dictionary that can contain /Cert, /CRL, and /OCSP arrays pointing at the exact streams used to validate that one signature, and optionally a timestamp recording when the VRI entry was created.",
        "This indirection matters when a document carries more than one signature. The top-level /Certs, /CRLs, and /OCSPs arrays hold the union of all validation material, while each VRI entry isolates the subset that belongs to a single signature. A validator can therefore verify each signature against precisely the evidence associated with it, rather than guessing which of many certificates applies."
      ]
    },
    {
      "heading": "How the DSS Enables Long-Term Validation",
      "body": [
        "Long-Term Validation is the practice of making a signature verifiable far into the future, after certificates expire and revocation services go offline. The DSS is the container that makes LTV work: it holds the chain up to a trust anchor plus the revocation status of each certificate as of signing time, so a verifier never has to ask, over a live network connection, whether a certificate was valid back then. The evidence needed for the answer is already in the file.",
        "On its own, though, embedded validation data is only a snapshot. To keep it trustworthy, LTV workflows add a document timestamp (a special timestamp signature) over the DSS, cryptographically fixing the moment the validation material was gathered. As algorithms weaken over the years, additional timestamps can be layered on, each protecting the material beneath it. The DSS and document timestamps together, applied as successive incremental updates, are what let a signature survive for the long term."
      ]
    },
    {
      "heading": "Adding and Protecting the DSS Without Breaking Signatures",
      "body": [
        "Because a digital signature covers a fixed range of bytes, anything that rewrote those bytes would invalidate it. The DSS avoids this by arriving as an incremental update: the new dictionary, its streams, and an updated catalog reference are appended to the end of the file, and a fresh cross-reference section points to them. The original content, and therefore the original signed byte range, is untouched, so existing signatures continue to verify.",
        "This append-only pattern is also why a DSS can be added after the fact, for example when a document is ingested into an archive. A tool can open a signed PDF, collect the missing certificates and revocation responses, write them into a DSS, and usually add a document timestamp, all as one or more incremental updates. This helps explain why a single PDF can accumulate several signatures, DSS additions, and timestamps stacked over its lifetime."
      ]
    },
    {
      "heading": "Where the DSS Comes From",
      "body": [
        "The DSS was defined in the ETSI PAdES specifications, the European profiles that adapt PDF signatures for advanced and qualified electronic-signature use. It was subsequently incorporated into the core PDF specification with PDF 2.0 (ISO 32000-2), which describes the /DSS catalog entry along with its /Certs, /CRLs, /OCSPs, and /VRI members. This lineage is why the same DSS terminology appears both in ETSI documents and in the ISO PDF standard."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Catalog key",
      "value": "Referenced from the document catalog as /DSS"
    },
    {
      "label": "Main entries",
      "value": "/Certs, /CRLs, /OCSPs (arrays of streams) and /VRI (a dictionary)"
    },
    {
      "label": "VRI keys",
      "value": "Uppercase hexadecimal SHA-1 digest of each signature's /Contents"
    },
    {
      "label": "How it is added",
      "value": "Appended via an incremental update, leaving signed bytes intact"
    }
  ],
  "specification": {
    "iso": "ISO 32000-2 (PDF 2.0)",
    "introduced": "ETSI PAdES; incorporated into PDF 2.0",
    "typicalUsage": "Carrying certificates and revocation data for long-term signature validation (LTV)",
    "relatedStandards": [
      "pades",
      "ltv-signatures",
      "timestamp-signatures",
      "cades-in-pdf"
    ]
  },
  "misconceptions": [
    {
      "claim": "The DSS stores the digital signature itself.",
      "truth": "The signature bytes live in the signature dictionary's /Contents value. The DSS only stores the supporting validation material, that is, certificates and revocation data."
    },
    {
      "claim": "Adding a DSS re-signs or modifies the existing signature.",
      "truth": "The DSS is appended in an incremental update and does not alter the original signed byte range, so existing signatures remain valid."
    },
    {
      "claim": "A DSS by itself guarantees validity forever.",
      "truth": "Embedded revocation data is a point-in-time snapshot. A document timestamp over the DSS, and periodic re-timestamping, is what protects that material over the long term."
    }
  ],
  "faq": [
    {
      "q": "What does DSS stand for, and where does it live in a PDF?",
      "a": "DSS stands for Document Security Store. It is a dictionary referenced from the PDF document catalog under the key /DSS, typically added near the end of the file."
    },
    {
      "q": "Does every signed PDF include a DSS?",
      "a": "No. Only signatures prepared for long-term validation embed one. A basic signature may instead rely on validation data fetched from the network at verification time."
    },
    {
      "q": "Can a single DSS cover more than one signature?",
      "a": "Yes. The top-level /Certs, /CRLs, and /OCSPs arrays pool the validation material for the whole document, while a separate VRI entry isolates the evidence belonging to each individual signature."
    },
    {
      "q": "What form do the certificates and revocation data take inside the DSS?",
      "a": "Each entry is a stream object: an X.509 certificate, a certificate revocation list, or an OCSP response, grouped into the /Certs, /CRLs, and /OCSPs arrays respectively."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pdf-incremental-updates",
      "pdf-document-catalog",
      "approval-vs-certification-signatures",
      "hash-algorithms-in-pdf"
    ],
    "relatedStandards": [
      "pades",
      "ltv-signatures",
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
    "ltv-signatures",
    "pdf-digital-signatures",
    "pades",
    "timestamp-signatures",
    "signature-validation",
    "pdf-security-model",
    "pki-in-pdf",
    "cades-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
