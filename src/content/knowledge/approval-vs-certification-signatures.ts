import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "approval-vs-certification-signatures",
  "h1": "Approval vs Certification Signatures",
  "cluster": "security",
  "aliases": [
    "certification signature",
    "certifying signature",
    "approval signature",
    "recipient signature",
    "DocMDP signature",
    "author signature"
  ],
  "definition": "Two roles a PDF digital signature can play: a certification signature uses a DocMDP transform to set which later changes are allowed, while an approval signature just records that someone signed.",
  "description": "How PDF certification signatures differ from approval signatures: DocMDP permission levels, why only the first signature can certify, and what each one locks.",
  "searchIntent": "comparison",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Not every digital signature in a PDF plays the same role. The format distinguishes between a certification signature, applied by the document's author to declare the file authentic and to set what edits are permitted afterward, and an approval signature, added by any recipient to record that they reviewed or agreed to the document. Both rest on the same cryptography, but they carry different intent and different consequences for later editing.",
    "The technical hinge between them is a signature transform called DocMDP (Document Modification Detection and Prevention). A certification signature embeds a DocMDP entry that tells conforming viewers which categories of change keep the signature valid; an approval signature carries no DocMDP and simply attests to the state of the bytes at signing time. A viewer reads the document catalog to learn whether a file has been certified and, if so, at what permission level.",
    "The distinction matters most in multi-party workflows: a contract author certifies the file, then counterparties add approval signatures within the limits the certification allows. Understanding which is which explains why some signed PDFs still accept form input or comments while others report that any edit has broken the signature."
  ],
  "sections": [
    {
      "heading": "How a certification signature works",
      "body": [
        "A certification signature is a normal digital signature with one addition: a signature reference dictionary whose TransformMethod is DocMDP. When a file is certified, the document catalog's permissions (Perms) dictionary gains a DocMDP entry that points at that signature. Conforming readers use this as the authoritative flag that the document has been certified, and they read the transform's parameters to learn which later modifications are considered permitted rather than tampering.",
        "Because certification is anchored in the catalog and is meant to represent the author's statement about the whole document, the format allows only one certification signature per file, and it must be the first signature applied. Anything signed later is treated as a recipient acting within the author's declared limits, not as a competing certification."
      ]
    },
    {
      "heading": "How an approval signature works",
      "body": [
        "An approval signature is the ordinary recipient signature most people mean when they say they signed a PDF. It hashes a byte range of the file, wraps that digest and the signer's certificate in a PKCS#7 (CMS) structure, and stores the result in a signature dictionary attached to a signature field. It attests that the signer approved the document as it stood at that moment; it does not, by itself, declare global rules about what the rest of the document may become.",
        "A document can hold several approval signatures, each added through an incremental update so earlier signatures stay intact and verifiable. An approval signature may optionally carry a FieldMDP transform that locks specific form fields, but it does not certify the document as a whole. This is why routing a contract to multiple signers relies on approval signatures layered on top of an author's initial certification."
      ]
    },
    {
      "heading": "DocMDP permission levels",
      "body": [
        "The DocMDP transform parameters include a permission value, commonly written as P, that expresses how strict the certification is. Level 1 permits no changes at all: any modification after certification invalidates the signature. Level 2 permits filling in form fields and adding signatures. Level 3 permits everything level 2 allows plus creating, deleting, and modifying annotations such as comments. Changes outside the declared level cause a conforming viewer to report that the certification is no longer valid.",
        "This lets an author strike a balance rather than choosing between fully locked and fully open. A certified form can invite recipients to complete and sign it (level 2) while still flagging any structural tampering, and a document meant for review can accept commentary (level 3) without losing its certified status. The level is fixed at signing time and travels with the file."
      ]
    },
    {
      "heading": "Why the difference matters in practice",
      "body": [
        "Both signature types provide tamper evidence through the same digest-over-a-byte-range mechanism, so neither is cryptographically stronger than the other. What separates them is authority and scope: certification is a one-time, document-wide statement from the author about legitimacy and allowed edits, while approval is a per-signer record of assent that operates within whatever the certification permits. Confusing the two leads to surprises, such as expecting a plain approval signature to prevent all future edits, which it does not.",
        "Viewers reinforce the distinction in their user interface. A certified document is typically presented with a distinct trust indicator so a reader can see at a glance that the author vouched for the file, whereas approval signatures appear in the signature panel as ordinary signer entries. When you need someone to act, the practical work of placing and validating signatures is handled by a signing tool rather than by editing the underlying dictionaries by hand."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Certifications per document",
      "value": "At most one, and it must be the first signature applied"
    },
    {
      "label": "Distinguishing feature",
      "value": "Certification carries a DocMDP transform; approval signatures do not"
    },
    {
      "label": "DocMDP permission levels",
      "value": "1 = no changes, 2 = form fill and sign, 3 = fill, sign, and annotate"
    },
    {
      "label": "Shared foundation",
      "value": "Both use PKCS#7 (CMS) over a hashed byte range for tamper evidence"
    }
  ],
  "specification": {
    "iso": "ISO 32000",
    "typicalUsage": "Author certification with controlled downstream edits, followed by multi-party approval sign-off",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pades"
    ]
  },
  "misconceptions": [
    {
      "claim": "A certification signature is cryptographically stronger than an approval signature.",
      "truth": "Both use the same signing algorithms and byte-range digest; certification differs only in that it adds a DocMDP transform declaring which later edits keep the signature valid."
    },
    {
      "claim": "Certifying a document blocks every future change.",
      "truth": "The author picks a permission level; levels 2 and 3 explicitly allow form filling, signing, and (at level 3) annotations without invalidating the certification."
    },
    {
      "claim": "You can add several certification signatures for extra assurance.",
      "truth": "A PDF can carry only one certification signature, applied first; every additional signer uses an approval signature."
    }
  ],
  "faq": [
    {
      "q": "Can a PDF have both a certification signature and approval signatures?",
      "a": "Yes. The intended pattern is a single certification signature applied first by the author, followed by one or more approval signatures from recipients, each added as an incremental update so earlier signatures remain valid."
    },
    {
      "q": "What is DocMDP?",
      "a": "DocMDP stands for Document Modification Detection and Prevention. It is the signature transform that turns an ordinary signature into a certification and records, through a permission level, which categories of later change are allowed before the signature is considered broken."
    },
    {
      "q": "How does FieldMDP relate to these signature types?",
      "a": "FieldMDP is a separate transform that locks specific form fields. It can accompany an approval signature to freeze chosen fields, but unlike DocMDP it does not certify the document as a whole or set a document-wide permission level."
    },
    {
      "q": "Does a certification signature stop people from filling in a form?",
      "a": "It depends on the permission level. A certification set to level 2 or 3 permits form filling and signing, so a certified fillable form can still be completed; a level 1 certification treats any change, including form entry, as invalidating."
    },
    {
      "q": "How does a viewer know a document is certified?",
      "a": "Conforming readers check the document catalog's permissions dictionary for a DocMDP entry that points at the certifying signature. If present, the viewer treats the file as certified and reads the transform parameters to learn the permission level."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "pdf-incremental-updates",
      "document-security-store",
      "pki-in-pdf",
      "hash-algorithms-in-pdf",
      "timestamp-signatures",
      "form-field-flags"
    ],
    "relatedStandards": [
      "pades",
      "cades-in-pdf",
      "iso-32000"
    ],
    "relatedFormats": [
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
    "pdf-digital-signatures",
    "signature-fields",
    "signature-validation",
    "tamper-evidence-in-pdf",
    "pdf-security-model",
    "electronic-vs-digital-signature",
    "pades",
    "ltv-signatures"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
