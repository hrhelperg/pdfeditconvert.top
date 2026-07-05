import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "tamper-evidence-in-pdf",
  "h1": "Tamper Evidence in Signed PDFs",
  "cluster": "security",
  "aliases": [
    "signed PDF tamper detection",
    "PDF signature integrity",
    "document integrity in PDF",
    "PDF change detection after signing",
    "tamper detection in PDF"
  ],
  "definition": "Tamper evidence is the property of a signed PDF by which any change to the signed bytes breaks its cryptographic hash check, so validation reveals the document was altered after signing.",
  "description": "How a digital signature makes edits to a PDF detectable: a hash over the signed byte range breaks the moment any covered byte is changed.",
  "searchIntent": "security",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Tamper evidence is the reason a digital signature is worth more than a scanned image of a handwritten one. When a PDF is digitally signed, the software computes a cryptographic hash (a message digest) over a defined range of the file's bytes and binds that hash to the signer's identity using their private key. Because the hash is a fixed-length fingerprint of exactly those bytes, changing even a single covered byte produces a different fingerprint, and the stored signature no longer matches.",
    "The important nuance is in the word evidence. A digital signature does not physically prevent anyone from opening a PDF and altering it, nor does it lock the file. What it guarantees is that if the signed content is changed, the change becomes detectable during signature validation. Integrity and authenticity are provable after the fact rather than enforced up front.",
    "This page explains the mechanism behind that guarantee: what a signature actually covers, why appended edits behave differently from edits inside the signed range, how certification signatures constrain later changes, and what a validator can and cannot tell you about a document's history."
  ],
  "sections": [
    {
      "heading": "How a Signature Makes Changes Detectable",
      "body": [
        "A PDF signature lives in a signature dictionary, whose two central entries are ByteRange and Contents. The ByteRange is an array of offsets and lengths that names exactly which bytes of the file the signature covers, and Contents holds the signature value itself, typically a PKCS#7 / CMS structure that packages the message digest, the signing certificate, and the encrypted digest. At signing time the software hashes every byte named by the ByteRange, then signs that hash with the signer's private key.",
        "Validation reverses the process. The verifier recomputes the hash over the same ByteRange, decrypts the stored digest using the signer's public key from the embedded certificate, and compares the two values. If they match, the covered bytes are provably identical to what was signed; if they differ by even one bit, the comparison fails and the software reports the document as modified. That comparison is the whole of tamper evidence: a mismatched hash is the alarm."
      ]
    },
    {
      "heading": "Detection, Not Prevention",
      "body": [
        "It is a common expectation that a signed PDF is somehow read-only or locked. It is not. Any editor can open the file, change text, add pages, or write new bytes and save the result. Nothing at the file-format level stops that. What a signature provides is a tripwire: the altered file will no longer validate cleanly, so a recipient who checks the signature learns that it can no longer be trusted as the signed original.",
        "This distinction matters because tamper evidence only works when someone actually validates. A viewer that simply renders the page shows whatever content is present, tripwire or not. The security value is realized at the moment of verification, which is why signature status indicators and validation reports, rather than the visual appearance of the page, are what a careful recipient relies on."
      ]
    },
    {
      "heading": "Incremental Updates and the Signed Byte Range",
      "body": [
        "PDF is designed to be updated by appending. An incremental update writes new and changed objects to the end of the file and adds a fresh cross-reference section, leaving the original bytes in place. A signature's ByteRange captures the file as it existed at signing time, so its hash covers the original body but not bytes appended afterward. This is deliberate: it allows a second person to add their own signature, or a form to be filled in, without destroying the first signature's hash.",
        "The consequence is that a signature proves the integrity of its covered range, not of the entire current file. Content appended through a later incremental update sits outside that range and cannot invalidate the earlier hash on its own. A robust validator therefore does two things: it confirms the signature's hash still matches, and it inspects whether anything was appended after the signed range and reports those later modifications separately. A validator should also confirm the ByteRange spans the whole document up to the signature, since a range that leaves gaps could hide unsigned content."
      ]
    },
    {
      "heading": "Permitted Changes and Certification Signatures",
      "body": [
        "Ordinary approval signatures place no restriction on what a later incremental update may add. Certification signatures are stricter. A certification (author) signature carries a DocMDP transform that declares which categories of later change are permitted: no changes at all; form field filling and additional signing; or, more permissively, form filling, signing, and comment or annotation edits. Anything beyond the declared level is treated as a disallowed modification.",
        "During validation the software checks appended updates against the certified permission level. Changes that fall within the permitted category leave the certification intact, while changes outside it cause the validator to flag the document as altered in a way the author did not allow. This turns tamper evidence from a single pass-or-fail hash check into a graduated statement about how, and how much, a document changed after it was certified."
      ]
    },
    {
      "heading": "What Signature Validation Can and Cannot Tell You",
      "body": [
        "A successful validation establishes three things: the signed bytes are unchanged, the signature was produced with the private key matching the embedded certificate, and (through certificate-chain and revocation checks) that the certificate is trusted. The strength of the tamper evidence depends on the hash algorithm used; modern signatures rely on the SHA-2 family, whereas older algorithms such as MD5 and SHA-1 are considered weak because collisions can be engineered. Long-term validation data can be embedded so the signature remains verifiable after certificates expire.",
        "Validation cannot, however, tell you that a document is confidential. Signing provides integrity and authenticity, not encryption, so a signed PDF is still fully readable. Nor can it vouch for content outside the signed range, or for a signer's real-world identity beyond what the trusted certificate asserts. Tamper evidence is precisely scoped: it answers whether the signed bytes were altered, and leaves the surrounding questions of trust, confidentiality, and later edits to be reported separately."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "What it covers",
      "value": "The bytes named in the signature's ByteRange array, normally the entire file except the signature's own Contents value."
    },
    {
      "label": "Signature value format",
      "value": "A PKCS#7 / CMS structure stored in the /Contents entry of the signature dictionary, holding the digest, certificate, and signed hash."
    },
    {
      "label": "Standardized in",
      "value": "ISO 32000 — digital signatures appear in ISO 32000-1:2008 and are carried forward and refined in ISO 32000-2 (PDF 2.0)."
    },
    {
      "label": "Change control",
      "value": "Certification (DocMDP) signatures declare a permitted level of later changes; edits beyond that level are flagged during validation."
    }
  ],
  "specification": {
    "iso": "ISO 32000-1:2008 and ISO 32000-2",
    "typicalUsage": "Detecting unauthorized modification of digitally signed PDF documents during signature validation.",
    "relatedStandards": [
      "iso-32000",
      "pdf-digital-signatures",
      "pades",
      "cades-in-pdf"
    ]
  },
  "misconceptions": [
    {
      "claim": "A digital signature stops anyone from editing a signed PDF.",
      "truth": "It cannot block editing. A tool can still alter or append to the file; validation then reports the signature as invalid or the document as changed. The guarantee is detection, not prevention."
    },
    {
      "claim": "If a signed PDF opens and looks unchanged, the signature must be intact.",
      "truth": "Appearance is not proof. Only recomputing and comparing the cryptographic hash over the signed byte range confirms integrity; a viewer that does not validate simply displays whatever content is present."
    },
    {
      "claim": "A valid signature means the whole file is unmodified since signing.",
      "truth": "A signature only guarantees the bytes inside its ByteRange. Content appended later through an incremental update lies outside that range, so validators report post-signing changes separately."
    }
  ],
  "faq": [
    {
      "q": "What exactly does a PDF signature hash?",
      "a": "It hashes the bytes named by the signature's ByteRange array, which normally spans the whole file except the gap holding the signature value in the Contents entry. That gap is excluded so the signature can be inserted without changing its own hash input."
    },
    {
      "q": "Can someone fill in a form or add a second signature without breaking the first one?",
      "a": "Yes, when the change is made as an incremental update appended after the signed byte range. The original hash still matches because its covered bytes are untouched. If the first signature is a certification signature, the change must also fall within its permitted level."
    },
    {
      "q": "Does signing a PDF also encrypt it?",
      "a": "No. A signature provides integrity and authenticity, not confidentiality. A signed PDF remains fully readable. Encryption is a separate mechanism handled by the PDF security model."
    },
    {
      "q": "Which hash algorithms provide the tamper evidence?",
      "a": "Modern signatures use the SHA-2 family, which makes it computationally impractical to craft a different file with the same digest. Older algorithms such as MD5 and SHA-1 are considered weak because collisions can be engineered, weakening the guarantee."
    },
    {
      "q": "Why does a signed PDF sometimes say the document was altered but still open normally?",
      "a": "Because a later incremental update added or changed content after the signed byte range, or made a change beyond a certification signature's permitted level. The original signature's hash can still be intact while the validator reports that the document changed after signing."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pki-in-pdf",
      "document-security-store",
      "timestamp-signatures",
      "electronic-vs-digital-signature",
      "signature-fields",
      "pdf-file-identifiers"
    ],
    "relatedStandards": [
      "pades",
      "cades-in-pdf"
    ],
    "relatedTools": [
      {
        "label": "PDF Security — Password Protect and Encrypt PDFs",
        "path": "/pdf-security"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Send Contracts as PDF (Sign, Lock, Deliver)",
        "path": "/guides/how-to-send-contracts-as-pdf"
      }
    ]
  },
  "seeAlso": [
    "pdf-digital-signatures",
    "signature-validation",
    "hash-algorithms-in-pdf",
    "pdf-incremental-updates",
    "approval-vs-certification-signatures",
    "ltv-signatures",
    "pdf-security-model",
    "pades"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
