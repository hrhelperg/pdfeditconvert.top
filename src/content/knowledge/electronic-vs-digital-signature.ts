import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "electronic-vs-digital-signature",
  "h1": "Electronic vs Digital Signature",
  "cluster": "security",
  "aliases": [
    "e-signature vs digital signature",
    "electronic signature vs digital signature",
    "e-sign vs digital signing",
    "digital vs electronic signatures in PDF"
  ],
  "definition": "An electronic signature is any electronic mark that shows intent to sign, while a digital signature is a specific cryptographic method that also proves who signed and whether the file changed.",
  "description": "Every digital signature is an electronic signature, but not the other way around. See how PDF handles each, from drawn marks to cryptographic PKI signing.",
  "searchIntent": "comparison",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "\"Electronic signature\" and \"digital signature\" are often used as if they mean the same thing, but they sit at different levels. An electronic signature is a broad category: any electronic indication that a person intends to agree to or adopt a document. A digital signature is a narrow, technical mechanism built on cryptography. Every digital signature qualifies as an electronic signature, but most electronic signatures are not digital signatures.",
    "In a PDF, this difference is concrete because the two things are stored as different structures. A typed name, a finger-drawn squiggle, or a scanned picture of a handwritten signature is essentially visual content placed on the page. A digital signature is a signature dictionary holding cryptographic data that is mathematically tied to the file's bytes and to a signer's certificate.",
    "The distinction matters because of what each one can prove. A plain electronic mark communicates intent, but on its own it does not detect later edits or verify identity. A digital signature adds authentication, integrity, and tamper evidence, so a validator can tell whether the signed content is unchanged and which certificate produced the signature."
  ],
  "sections": [
    {
      "heading": "Category Versus Technique",
      "body": [
        "The cleanest way to hold the two terms apart is to treat \"electronic signature\" as a category and \"digital signature\" as a technique. The category covers anything from clicking an \"I agree\" button to drawing your name with a stylus. The technique refers specifically to public-key cryptography: hashing the content and encrypting that hash with a private key so it can be checked against a matching public key and certificate.",
        "Legal and regulatory frameworks recognize the broad category. The European Union's eIDAS regulation, for example, distinguishes tiers of electronic signature (a simple electronic signature, an advanced electronic signature, and a qualified electronic signature), and jurisdictions such as the United States recognize electronic signatures through frameworks like ESIGN and UETA. These frameworks describe what kinds of electronic signatures exist and how they are treated; whether any particular signature is appropriate for a given purpose is a legal question outside the scope of the file format."
      ]
    },
    {
      "heading": "Electronic Signatures in a PDF",
      "body": [
        "Inside a PDF, an electronic signature that is not cryptographic is usually just page content. It might be an image XObject holding a scan of a handwritten signature, a piece of text drawn by a form field or annotation, or a shape someone drew on a touchscreen. Tools that let you \"sign\" on a phone typically add this kind of visual mark and then flatten it into the page.",
        "Because these marks are ordinary content, they carry no cryptographic binding to the signer's identity or to the rest of the document. Nothing about the mark alone reveals whether the file was altered afterward, and the same image could in principle be copied onto another document. That does not make electronic marks useless; they clearly record intent and are often exactly what a workflow needs. It simply means the protection they offer is different in kind from a digital signature."
      ]
    },
    {
      "heading": "How a PDF Digital Signature Works",
      "body": [
        "A PDF digital signature lives in a signature field, which is an interactive form field whose field type is Sig. When the document is signed, a hash (message digest) is computed over a defined ByteRange covering the file except the region reserved for the signature itself. That digest is signed with the signer's private key, and the result is packaged as a PKCS#7 / CMS structure that also embeds the signer's certificate.",
        "Validation reverses the process: a reader recomputes the digest over the same ByteRange, verifies it against the signed value using the certificate's public key, and evaluates the certificate chain and its trust. If the digest still matches, the signed content is unchanged; if it does not, the signature is reported as invalid or the document as altered. This is what gives digital signatures their three practical properties: integrity (tamper evidence), authentication (identity tied to a certificate), and support for non-repudiation."
      ]
    },
    {
      "heading": "Where Appearance and Cryptography Meet",
      "body": [
        "The confusing part is that a digital signature can also have a visible appearance that looks exactly like a handwritten mark. PDF stores that picture as a signature appearance stream, but it is cosmetic; the trust comes entirely from the cryptographic data in the signature dictionary. A digital signature can even be completely invisible and still be fully valid.",
        "The reverse is also true: a signature field can hold nothing but an appearance, or a page can show a signature image with no cryptographic data behind it at all. Because of this, you cannot judge from the look of a signature whether it is a digital signature. The only reliable test is to validate it and see whether a signature dictionary, a byte-range digest, and a trusted certificate are actually present."
      ]
    },
    {
      "heading": "Standards and Long-Term Validity",
      "body": [
        "The signature machinery itself is defined by the PDF specification standardized as ISO 32000. On top of that, PAdES (PDF Advanced Electronic Signatures) is a family of profiles maintained by ETSI that constrain and extend PDF signatures for advanced and qualified use, aligning them with the eIDAS tiers of electronic signature.",
        "One important extension is long-term validation. A digital signature can normally only be checked while the signing certificate and its revocation information remain available and trusted. Long-Term Validation (LTV) signatures address this by embedding revocation data and trusted timestamps, often stored in a Document Security Store, so the signature can still be verified years later even if the original validation services are gone. These are refinements of the digital-signature technique; a plain electronic mark has no equivalent."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Relationship",
      "value": "Every digital signature is an electronic signature, but not every electronic signature is a digital signature."
    },
    {
      "label": "Where it lives in a PDF",
      "value": "A digital signature sits in a signature field (an interactive form field with type Sig) and stores a signed digest over a ByteRange of the file."
    },
    {
      "label": "Appearance vs data",
      "value": "A signature's visible mark and its cryptographic data are separate; a valid digital signature can be invisible, and a visible mark can be non-cryptographic."
    },
    {
      "label": "Standards",
      "value": "PDF's signature mechanism is defined in ISO 32000; ETSI's PAdES adds PDF-specific profiles, including long-term validation."
    }
  ],
  "misconceptions": [
    {
      "claim": "A digital signature just means signing with your finger on a touchscreen.",
      "truth": "That drawn mark is an electronic signature. A digital signature is a cryptographic operation performed with a private key and a certificate, independent of any visible drawing."
    },
    {
      "claim": "Electronic signature and digital signature mean the same thing.",
      "truth": "Digital signature is one specific, cryptographic type of electronic signature. It adds identity verification and tamper evidence that a plain electronic mark does not."
    },
    {
      "claim": "If a PDF shows a signature, the document is protected from tampering.",
      "truth": "A pasted image or typed name adds no cryptographic protection. Only a digital signature binds the content so that later edits become detectable during validation."
    }
  ],
  "faq": [
    {
      "q": "Is a scanned image of my handwritten signature a digital signature?",
      "a": "No. It is an electronic signature stored as an image. It shows intent but carries no cryptographic link to your identity or to the document's contents, so edits made afterward leave no trace from the image alone."
    },
    {
      "q": "Does a PDF digital signature prove who signed the document?",
      "a": "It binds the signature to a certificate that identifies the signer. Validation checks that the certificate is trusted and unexpired and that the signed digest still matches, so the strength of the proof depends on how that certificate was issued and trusted."
    },
    {
      "q": "Can one PDF have both a visible mark and a digital signature?",
      "a": "Yes. A digital signature can include a visual appearance that looks like handwriting, but the appearance is cosmetic; the cryptographic data in the signature dictionary is what actually gets validated."
    },
    {
      "q": "What happens to a digital signature when the PDF is edited?",
      "a": "Changing any signed byte makes the recomputed digest no longer match, so validation reports the signature as invalid or altered. PDF's incremental updates let later content be appended as new revisions, and validators can report what changed after signing."
    },
    {
      "q": "Does adding an electronic mark in a signing tool create a digital signature?",
      "a": "Not by itself. Placing a drawn or typed mark produces an electronic signature; a cryptographic digital signature additionally requires a signing certificate and a signer that writes a signature dictionary and a byte-range digest into the file."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "hash-algorithms-in-pdf",
      "timestamp-signatures",
      "ltv-signatures",
      "cades-in-pdf",
      "document-security-store"
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
    "signature-appearance",
    "signature-validation",
    "approval-vs-certification-signatures",
    "pades",
    "pki-in-pdf",
    "tamper-evidence-in-pdf"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
