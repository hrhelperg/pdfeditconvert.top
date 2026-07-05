import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "password-vs-encryption",
  "h1": "Password Protection vs Encryption",
  "cluster": "security",
  "aliases": [
    "password protection vs encryption",
    "PDF password vs encryption",
    "encrypting vs password-protecting a PDF",
    "PDF open password vs encryption"
  ],
  "definition": "In PDF, password protection and encryption are two halves of one mechanism: encryption scrambles the content, and a password is the credential used to derive the key that unlocks it.",
  "description": "Password protection and encryption are easy to confuse. See how a PDF password derives the encryption key, and why an owner \"permissions\" password is different.",
  "searchIntent": "comparison",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "People often talk about \"password-protecting\" a PDF and \"encrypting\" a PDF as if they were two different features. In the PDF format's standard security handler they are not separate options at all — they are two views of the same process. Encryption is the cryptographic work that turns readable text and images into scrambled data, and the password is simply the human-friendly secret that produces the key needed to reverse that scrambling.",
    "The confusion matters because it leads to a common false comfort: a document that shows a lock icon may feel \"protected\" without anyone knowing what is actually being protected, from whom, and how strongly. Whether a PDF genuinely resists being read comes down to which password is set and which cipher was used — not to the presence of a password in the abstract.",
    "This page explains how the two ideas relate inside the PDF security model, the difference between a password that unlocks reading and a password that unlocks permissions, and where encryption's protection ends. It is a conceptual comparison; for the actual steps of applying protection, use the linked tool and guides."
  ],
  "sections": [
    {
      "heading": "Two words for one mechanism",
      "body": [
        "In everyday language, \"encryption\" sounds like the technical guts and \"password protection\" sounds like the friendly wrapper — but in a PDF they are inseparable. The format's standard security handler takes the password you choose and runs it through a defined procedure to produce an encryption key. That key is what encrypts the document's contents. Remove the encryption and the password has nothing to do; remove the password and the standard handler has no way to build a key. So a PDF that is \"password-protected\" by this handler is, by definition, encrypted.",
        "This is why it is misleading to imagine a PDF that has a password but is otherwise stored in the clear. The password is not a gate placed in front of an unprotected file; it is the seed for the cryptography that transforms the file. Understanding that relationship is the key to reasoning about how much security a given PDF actually offers."
      ]
    },
    {
      "heading": "How a password becomes a key",
      "body": [
        "When you set a password, the standard security handler derives an encryption key from it and encrypts the document's strings and streams — the objects that hold text, fonts, and images. Notably, the overall file structure such as the cross-reference information and the encryption dictionary itself is not encrypted, so a viewer can still open the file, discover that it is protected, and prompt for the password before decrypting the content.",
        "The strength of that protection depends on the cipher. PDF historically used the RC4 stream cipher in its standard handler; AES-128 was introduced with PDF 1.6, and AES-256 is defined in PDF 2.0. A modern AES-256 file and a legacy RC4 file may both \"have a password,\" yet they are not equivalent in how well they resist attack — another reason the phrase \"password protection\" alone tells you little without knowing the encryption behind it."
      ]
    },
    {
      "heading": "A password to open vs a password to permit",
      "body": [
        "The PDF security model supports two distinct passwords, and this is where much of the real-world confusion lives. The user password (often called the open or document-open password) gates the ability to read the file at all — without it, the content cannot be decrypted. The owner password (the permissions password) is meant to control changes to permissions and security settings, such as whether printing or copying is allowed.",
        "The important consequence: if a PDF has only an owner password and no user password, it still opens for anyone, immediately and without a prompt, because a decryption key is available without a secret. In that case the permission flags are the only thing standing between the reader and actions like printing — and those flags are advisory, enforced by cooperating viewers rather than by the cryptography. A restriction on copying is not the same guarantee as content that genuinely cannot be decrypted."
      ]
    },
    {
      "heading": "Where encryption's protection ends",
      "body": [
        "Encryption in a PDF governs who can turn the scrambled bytes back into readable content. It does not follow the content around after that point. Once a reader supplies the correct password and the document is decrypted for viewing, the format does not stop them from taking screenshots, re-saving an unprotected copy, or extracting text, subject only to whatever their viewer chooses to honor. Controlling what happens after legitimate access is a different problem, associated with digital rights management rather than the encryption itself.",
        "It also helps to separate encryption from other security features it is sometimes conflated with. Encryption answers \"who may read this?\" A digital signature answers a different question — \"who produced this, and has it changed since?\" — and does not hide content at all. A PDF can be encrypted, signed, both, or neither, because these mechanisms address independent goals."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "The link between them",
      "value": "The standard security handler turns your password into the key that encrypts a PDF's text and images."
    },
    {
      "label": "Two password roles",
      "value": "A user (open) password gates reading; an owner (permissions) password gates permission changes."
    },
    {
      "label": "Ciphers used",
      "value": "RC4 historically, AES-128 from PDF 1.6, and AES-256 defined in PDF 2.0."
    },
    {
      "label": "What is encrypted",
      "value": "Strings and streams (content), not the whole file structure, so viewers can still open and prompt for the password."
    }
  ],
  "misconceptions": [
    {
      "claim": "You can password-protect a PDF without encrypting it.",
      "truth": "In the standard security handler the password is what produces the encryption key, so there is no password protection without encryption underneath it."
    },
    {
      "claim": "Setting an owner password to block printing or copying makes the file unreadable to others.",
      "truth": "If no user (open) password is set, the file still decrypts and displays for anyone; the permission flags are advisory and enforced only by cooperating viewers."
    },
    {
      "claim": "Encryption and digital signatures do the same protective job.",
      "truth": "Encryption controls who can read the content, while a signature proves authorship and that the document has not changed — different, independent goals."
    }
  ],
  "faq": [
    {
      "q": "Is \"password-protecting\" a PDF the same as encrypting it?",
      "a": "In practice, yes. The standard security handler uses your password to build the encryption key, so protecting a PDF with a password means its content is encrypted. They are not two separate features you pick between."
    },
    {
      "q": "What is the difference between the user password and the owner password?",
      "a": "The user (open) password is required to decrypt and read the file, while the owner (permissions) password controls changes to permissions and security settings. A file can have one, both, or neither."
    },
    {
      "q": "Which encryption does modern PDF use?",
      "a": "Modern PDFs typically use AES, with AES-256 defined in PDF 2.0 and AES-128 available since PDF 1.6. Older files may still use the legacy RC4 cipher, which is weaker."
    },
    {
      "q": "Can an encrypted PDF open without any password prompt?",
      "a": "Yes. If only an owner password is set and no user password, the document opens normally for anyone because a decryption key is available; certain actions may then be limited by the viewer honoring the permission flags."
    },
    {
      "q": "Does encryption keep protecting the content after someone opens it?",
      "a": "No. Encryption controls access — turning scrambled bytes back into readable content. Once decrypted for viewing, the content can typically be copied, screenshotted, or re-saved. Controlling use after access is the domain of DRM, not encryption."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "aes-128-encryption",
      "public-key-security",
      "pdf-drm",
      "pdf-digital-signatures",
      "electronic-vs-digital-signature"
    ],
    "relatedTools": [
      {
        "label": "PDF Security — Password Protect and Encrypt PDFs",
        "path": "/pdf-security"
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
    "pdf-security-model",
    "pdf-encryption",
    "standard-security-handler",
    "user-vs-owner-password",
    "pdf-permission-flags",
    "aes-256-encryption",
    "rc4-encryption",
    "encryption-dictionary"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
