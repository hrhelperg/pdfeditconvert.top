import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-security-model",
  "h1": "The PDF Security Model",
  "cluster": "security",
  "aliases": [
    "PDF security",
    "PDF document security",
    "PDF protection model",
    "PDF security architecture"
  ],
  "definition": "The PDF security model is the format's built-in framework for protecting documents through encryption, which controls access, and digital signatures, which prove integrity and authenticity.",
  "description": "How the PDF format protects documents: encryption controls who can open and use a file, and digital signatures prove it has not been altered.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF can carry information that its author wants to keep private, prove came from them, or stop others from altering. The PDF security model is the format's built-in answer to those needs — a small set of mechanisms, defined in the PDF specification itself, that any conforming reader knows how to interpret.",
    "At its core the model does two distinct things. It can encrypt a document so that only the right password or key unlocks its contents, and it can carry digital signatures that let a recipient verify the file has not changed since it was signed. These are separate tools for separate goals — confidentiality on one side, integrity and authenticity on the other — and they can be used alone or together.",
    "This page explains how those pieces fit together and, just as importantly, where their limits lie: why some \"restrictions\" on a PDF are only as strong as the software that honors them, and why a signed file is not a hidden one. Related pages go deeper into each mechanism, and linked tools let you actually protect or sign a document."
  ],
  "sections": [
    {
      "heading": "Two Independent Layers: Access Control and Integrity",
      "body": [
        "The PDF security model is best understood as two separate mechanisms that solve different problems. Encryption addresses confidentiality and access control: it scrambles a document's content so that only someone with the right password or private key can read it, and it records which actions a conforming viewer should allow. Digital signatures address integrity and authenticity: they let a recipient confirm that a file has not been altered since it was signed and that it came from a claimed signer. The two are independent — a PDF can be encrypted but unsigned, signed but unencrypted, both, or neither.",
        "Because these layers are independent, they are described in different parts of the PDF specification and implemented by different objects in the file. Encryption is controlled by an encryption dictionary referenced from the file's trailer, while a signature lives in a signature field and its associated signature dictionary. Knowing which problem you are actually solving — keeping content private versus proving it is unchanged — is the first step to using PDF security correctly."
      ]
    },
    {
      "heading": "How PDF Encryption Works",
      "body": [
        "When a PDF is encrypted, the trailer gains an /Encrypt entry that points to an encryption dictionary. That dictionary names a security handler — the software component responsible for turning a password or key into the actual encryption key — and records the algorithm and its parameters. The built-in, password-based handler is the Standard Security Handler; a public-key security handler encrypts the file to one or more recipients' certificates instead of a shared password. Only the document's strings and streams (the text, images, and other content) are encrypted, while the object numbers and cross-reference structure stay readable so a viewer can navigate the file and locate the objects it needs to decrypt.",
        "The algorithms have evolved over time. Early PDF encryption used the RC4 stream cipher; later versions added AES (the Advanced Encryption Standard), first with 128-bit keys and, in PDF 2.0, with 256-bit keys and a stronger key-derivation process. From PDF 1.5 onward, crypt filters allow different objects to be treated differently — for example, leaving the XMP metadata stream unencrypted while the rest of the content is protected — which is why some encrypted PDFs still expose their metadata to search tools."
      ]
    },
    {
      "heading": "Passwords, Permissions, and Their Limits",
      "body": [
        "The Standard Security Handler supports two passwords with different roles. The user (open) password is required to view the document at all; the owner (permissions) password grants full access and the ability to change security settings. A file can set either, both, or — in the common \"restrictions only\" case — just an owner password with an empty user password, which means anyone can open it but a conforming reader is asked to limit what they can do with it.",
        "Those limits come from a set of permission flags stored as an integer in the encryption dictionary, covering actions like printing, copying text, modifying the document, and filling in form fields. It is important to understand that these flags are enforced by the viewing application, not by cryptography. A cooperating reader honors them, but the underlying content is still decrypted in memory, so permission restrictions are a policy signal rather than a hard cryptographic boundary — unlike the open password, which genuinely gates access to the content."
      ]
    },
    {
      "heading": "Digital Signatures and Tamper Evidence",
      "body": [
        "The other half of the model uses public key cryptography to answer a different question: is this the original, and who signed it? A digital signature computes a cryptographic hash (digest) over a defined byte range of the file and protects that digest with the signer's private key, so anyone holding the signer's certificate can verify it. Because the signature covers the actual bytes of the document, any later change breaks the verification, which is what makes signed PDFs tamper-evident. PDF distinguishes approval signatures, which record that a particular person signed, from certification (author) signatures, which are applied by the first signer and can declare which later changes are permitted.",
        "Signatures are commonly extended for long-term reliability. Timestamps record when a signature was made, and long-term validation (LTV) embeds the certificate and revocation information needed to check a signature years later, storing it in a document security store. Standardized signature profiles such as PAdES build on these pieces. Crucially, signing does not hide content: a signed PDF is fully readable, so confidentiality still requires encryption."
      ]
    },
    {
      "heading": "What the Security Model Does Not Do",
      "body": [
        "The PDF security model protects a file's content and proves its integrity, but it is not a complete rights-management or data-sanitization system. Permission flags cannot stop a determined user who controls their own software, and tools exist that ignore owner-password restrictions — especially when no user password is set. For genuine confidentiality, the open password (or public-key encryption) matters far more than the permission bits.",
        "Two related tasks sit outside encryption and signing and are easy to confuse with them. Redaction permanently removes sensitive content from a file rather than merely hiding or restricting it, and it must actually delete the underlying text and images — drawing a black box over them is not redaction. Digital rights management (DRM) layers additional, often server-based controls on top of PDF and is not part of the core ISO model. Recognizing these boundaries keeps expectations realistic about what a \"secured\" PDF actually guarantees."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Two mechanisms",
      "value": "Encryption for confidentiality and access control; digital signatures for integrity and authenticity"
    },
    {
      "label": "Where it lives",
      "value": "An /Encrypt entry in the trailer points to the encryption dictionary; signatures live in signature fields"
    },
    {
      "label": "Encryption ciphers",
      "value": "RC4 originally, then AES-128, and AES-256 in PDF 2.0"
    },
    {
      "label": "Permissions",
      "value": "Permission flags are enforced by conforming readers, not by cryptography"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1, ISO 32000-2",
    "introduced": "Encryption defined since early PDF versions; AES-256 in PDF 2.0",
    "latestVersion": "PDF 2.0 (ISO 32000-2)",
    "typicalUsage": "Keeping PDF content confidential and proving that signed files are unaltered",
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0"
    ]
  },
  "misconceptions": [
    {
      "claim": "A password-protected PDF and an encrypted PDF are two different things.",
      "truth": "In the Standard Security Handler the password is what derives the encryption key, so password protection is a form of encryption — not a separate feature bolted on top."
    },
    {
      "claim": "Owner-password restrictions like \"no printing\" or \"no copying\" cannot be removed.",
      "truth": "Those permission flags are enforced only by cooperating software; the content is still decrypted and many tools can ignore or strip the flags, especially when no user password is set."
    },
    {
      "claim": "A digital signature encrypts or hides the document.",
      "truth": "Signing proves integrity and authenticity but leaves the content fully readable; keeping content private still requires encryption."
    }
  ],
  "faq": [
    {
      "q": "Does the PDF security model encrypt the entire file?",
      "a": "No. Encryption protects the document's strings and streams — its text, images, and other content — but the object numbers and cross-reference structure stay readable so a viewer can navigate the file. Crypt filters can also leave certain objects, such as the XMP metadata stream, unencrypted."
    },
    {
      "q": "Can encryption and digital signatures be used together?",
      "a": "Yes. They are independent layers that solve different problems, so a PDF can be encrypted, signed, both, or neither. A file can be encrypted for confidentiality and also signed so recipients can confirm it has not been altered."
    },
    {
      "q": "Who enforces PDF permission restrictions?",
      "a": "The viewing application. Permission flags for actions like printing or copying are honored by conforming readers, but they are not a cryptographic barrier, so they behave more like a policy the software agrees to follow than an absolute lock."
    },
    {
      "q": "Is the PDF security model part of the ISO standard?",
      "a": "Yes. Encryption, security handlers, and digital signatures are all defined in the PDF specification, which is published as ISO 32000, with stronger encryption such as AES-256 specified in PDF 2.0 (ISO 32000-2)."
    },
    {
      "q": "How is redaction different from the security model?",
      "a": "Redaction permanently deletes sensitive content from a file, whereas encryption and signatures control access to and prove the integrity of content that remains present. A \"secured\" PDF still contains all of its data; a redacted one has had specific content removed."
    }
  ],
  "graph": {
    "childConcepts": [
      "pdf-encryption",
      "standard-security-handler",
      "rc4-encryption",
      "aes-128-encryption",
      "aes-256-encryption",
      "public-key-security",
      "user-vs-owner-password",
      "pdf-permission-flags",
      "encryption-dictionary",
      "pdf-redaction",
      "pdf-digital-signatures",
      "approval-vs-certification-signatures",
      "pki-in-pdf",
      "pades",
      "cades-in-pdf",
      "timestamp-signatures",
      "ltv-signatures",
      "document-security-store",
      "signature-appearance",
      "signature-validation",
      "hash-algorithms-in-pdf",
      "tamper-evidence-in-pdf",
      "pdf-drm",
      "password-vs-encryption",
      "electronic-vs-digital-signature"
    ],
    "relatedStandards": [
      "iso-32000",
      "pdf-2-0",
      "pades"
    ],
    "relatedTools": [
      {
        "label": "PDF Security — Password Protect and Encrypt PDFs",
        "path": "/pdf-security"
      },
      {
        "label": "Sign PDF — Add Electronic Signatures on Phone",
        "path": "/sign-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Password Protect a PDF File",
        "path": "/guides/how-to-protect-pdf-file"
      },
      {
        "label": "How to Protect Sensitive PDF Files (Storage, Sharing, Lifecycle)",
        "path": "/guides/how-to-protect-sensitive-pdf-files"
      }
    ]
  },
  "seeAlso": [
    "pdf-encryption",
    "pdf-digital-signatures",
    "standard-security-handler",
    "user-vs-owner-password",
    "pdf-permission-flags",
    "encryption-dictionary",
    "pdf-redaction",
    "password-vs-encryption"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
