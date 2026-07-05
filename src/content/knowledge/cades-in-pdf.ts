import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "cades-in-pdf",
  "h1": "CAdES Signatures in PDF",
  "cluster": "security",
  "aliases": [
    "CMS Advanced Electronic Signatures",
    "CAdES-detached signatures",
    "ETSI.CAdES.detached",
    "CMS-based PDF signatures"
  ],
  "definition": "CAdES (CMS Advanced Electronic Signatures) is an ETSI digital-signature format, built on Cryptographic Message Syntax, that a PDF embeds to prove who signed it and reveal changes.",
  "description": "How CAdES, the CMS-based ETSI signature format, embeds in a PDF through the ETSI.CAdES.detached subfilter to authenticate signers and reveal edits.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When a PDF carries a digital signature, the actual cryptographic evidence is usually a CMS SignedData structure tucked inside the file. CAdES, short for CMS Advanced Electronic Signatures, is the ETSI-standardized way of building that structure so it does more than prove a key was used: it binds the signer's certificate into the signed data and can carry timestamps and validation material.",
    "CAdES is one member of the AdES (Advanced Electronic Signatures) family defined by ETSI. Its siblings apply the same ideas to other encodings: XAdES to XML, JAdES to JSON/JWS, and PAdES to PDF. Because a PDF signature container is itself CMS, the PDF profile, PAdES, is built directly on top of CAdES rather than replacing it.",
    "Inside a modern signed PDF, a CAdES signature is declared by the ETSI.CAdES.detached subfilter and is checked the same way any PDF signature is: by hashing a defined range of bytes and comparing that hash against the signed data. What CAdES adds is a standardized, interoperable set of signed attributes that make the signature harder to forge and easier to validate years after it was created."
  ],
  "sections": [
    {
      "heading": "From PKCS#7 to CMS to CAdES",
      "body": [
        "CAdES sits at the top of a short lineage. PKCS#7 was the original 'signed message' syntax; the IETF adopted and evolved it into the Cryptographic Message Syntax (CMS), an ASN.1/DER structure that packages the signed content, the signer's certificate chain, and the signature value. CAdES is a set of ETSI-defined extensions layered on CMS: it standardizes which signed attributes must be present and adds optional attributes for timestamps, signature policy, and validation data.",
        "The most consequential addition is a signed reference to the signer's certificate, carried as the ESS signing-certificate attribute. Because that reference is part of the data that gets hashed and signed, it ties one specific certificate into the signature, closing a certificate-substitution gap that plain CMS leaves open. This is a core reason CAdES is considered an 'advanced' electronic signature rather than a bare CMS wrapper."
      ]
    },
    {
      "heading": "How a CAdES Signature Lives Inside a PDF",
      "body": [
        "A PDF signature is stored in a signature dictionary reached from a signature field in the AcroForm. Two entries do the heavy lifting. The /ByteRange entry lists the ranges of the file that are covered by the signature, and the /Contents entry holds the signature value as a hexadecimal string. For CAdES, /Contents contains a detached CMS SignedData object: 'detached' means the signed bytes, namely the PDF itself over the ByteRange, are not copied into the CMS structure; only their hash is signed.",
        "The /SubFilter entry is set to ETSI.CAdES.detached to declare that the container follows CAdES rules. Because the ByteRange is written to deliberately exclude the /Contents placeholder where the signature sits, a validator can recompute the document hash over exactly the covered bytes, compare it to the signed hash, and confirm that nothing outside the signature was altered. Any later edit that is not an approved incremental update breaks that comparison."
      ]
    },
    {
      "heading": "CAdES, PAdES, and the Legacy PKCS#7 Subfilters",
      "body": [
        "Before ETSI subfilters existed, PDF signatures used Adobe-defined subfilters such as adbe.pkcs7.detached and adbe.pkcs7.sha1. Those are still CMS containers, but they predate the AdES attribute requirements and were not aligned to a cross-vendor European standard. PDF 2.0 (ISO 32000-2) formalized the ETSI subfilters, including ETSI.CAdES.detached for signatures and ETSI.RFC3161 for document timestamps.",
        "PAdES, the ETSI profile for PDF signatures, specifies exactly how a CAdES signature must be built and embedded so that independent software can produce and verify it consistently. In practice, 'a CAdES signature in a PDF' and 'a PAdES signature' describe the same object from two angles: CAdES is the CMS-level format, and PAdES is the PDF-level profile that constrains how it is placed in the file."
      ]
    },
    {
      "heading": "Baseline Levels and Long-Term Validation",
      "body": [
        "AdES signatures are defined at baseline levels that build on one another. A basic level proves who signed and that the covered bytes are unchanged. Adding a trusted timestamp proves the signature existed by a certain point in time, independent of the signer's own clock. Higher levels embed the certificates and revocation data, such as CRLs and OCSP responses, plus additional timestamps needed to validate the signature long after the signing certificate has expired.",
        "In a PDF, that validation material is collected in the Document Security Store (DSS), and archival timestamps can extend trust further into the future. This layered structure is what enables long-term validation (LTV), and it is a large part of why CAdES-based signatures appear in regulated and archival document workflows where a signature must remain verifiable for years."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Acronym",
      "value": "CMS Advanced Electronic Signatures"
    },
    {
      "label": "Underlying container",
      "value": "Cryptographic Message Syntax (CMS), derived from PKCS#7"
    },
    {
      "label": "PDF subfilter",
      "value": "ETSI.CAdES.detached"
    },
    {
      "label": "Standardized by",
      "value": "ETSI, as part of the AdES family (CAdES, XAdES, PAdES, JAdES)"
    }
  ],
  "specification": {
    "iso": "ISO 32000-2 (PDF 2.0)",
    "introduced": "PDF 2.0 (ISO 32000-2, 2017), which formalized the ETSI signature subfilters",
    "typicalUsage": "PDF digital signatures that follow the ETSI PAdES profile, especially in regulated and long-term-archival workflows.",
    "relatedStandards": [
      "pades",
      "iso-32000",
      "pdf-2-0",
      "pdf-digital-signatures"
    ]
  },
  "misconceptions": [
    {
      "claim": "CAdES and PAdES are competing signature formats, and a PDF uses one or the other.",
      "truth": "PAdES is the ETSI profile that specifies how a CAdES (CMS) signature is embedded in a PDF. A PDF CAdES signature follows the PAdES rules, so the two work together rather than against each other."
    },
    {
      "claim": "The 'C' in CAdES stands for 'certificate'.",
      "truth": "It stands for CMS, the Cryptographic Message Syntax, the ASN.1/DER signature container that CAdES extends."
    },
    {
      "claim": "A CAdES signature stores an encrypted copy of the document.",
      "truth": "The signature is detached: it stores a CMS SignedData object computed over a hash of a defined byte range, not the document's content, and signing is not the same operation as encryption."
    }
  ],
  "faq": [
    {
      "q": "What does CAdES stand for?",
      "a": "CMS Advanced Electronic Signatures. It is an ETSI-defined set of extensions to the Cryptographic Message Syntax (CMS), which itself descends from PKCS#7."
    },
    {
      "q": "How does a PDF store a CAdES signature?",
      "a": "In the signature dictionary: /ByteRange defines the covered bytes, and /Contents holds a detached CMS SignedData object as a hex string. The /SubFilter entry ETSI.CAdES.detached marks it as CAdES."
    },
    {
      "q": "How is CAdES different from an older adbe.pkcs7.detached signature?",
      "a": "Both are CMS containers embedded in /Contents. CAdES adds standardized signed attributes, notably a signed reference to the signer's certificate, and aligns with the ETSI AdES standards for cross-vendor interoperability."
    },
    {
      "q": "Do CAdES signatures support long-term validation?",
      "a": "Yes. Higher baseline levels embed timestamps plus certificates and revocation data (CRLs/OCSP), often stored in a PDF's Document Security Store, so the signature stays verifiable after the signing certificate expires."
    },
    {
      "q": "Which PDF version introduced CAdES-based signatures?",
      "a": "PDF 2.0 (ISO 32000-2) formalized the ETSI signature subfilters, including ETSI.CAdES.detached, giving CAdES signatures a standardized place in the PDF signing model."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pki-in-pdf",
      "hash-algorithms-in-pdf",
      "tamper-evidence-in-pdf",
      "electronic-vs-digital-signature",
      "signature-fields",
      "public-key-security"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
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
    "pades",
    "pdf-digital-signatures",
    "pki-in-pdf",
    "ltv-signatures",
    "timestamp-signatures",
    "signature-validation",
    "document-security-store",
    "approval-vs-certification-signatures"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
