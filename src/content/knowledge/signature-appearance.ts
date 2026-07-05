import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "signature-appearance",
  "h1": "Signature Appearances in PDF",
  "cluster": "security",
  "aliases": [
    "signature field appearance",
    "visible signature appearance",
    "signature appearance stream",
    "digital signature appearance",
    "signature widget appearance"
  ],
  "definition": "A signature appearance is the visible mark a PDF draws for a signature — text or a graphic held in an appearance stream on the signature field's widget annotation, separate from the cryptographic signature itself.",
  "description": "The visible mark on a signed PDF is an appearance stream on a signature field's widget — separate from the cryptography that protects the file.",
  "searchIntent": "security",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "When you open a signed PDF, the handwritten-looking scrawl, typed name, or seal you see on the page is the signature appearance: the visual layer of a signature. It is deliberately separate from the cryptographic machinery that actually protects the document, and the two can exist independently of each other.",
    "The appearance is built from the same drawing primitives as any other interactive form element. It is an appearance stream — a Form XObject — attached to the widget annotation of a signature field, and the viewer paints it wherever that field's rectangle sits on the page. Its content is arbitrary: a name, a date, a reason for signing, a company logo, or a scanned image of a wet-ink signature.",
    "Because the appearance is just artwork, it proves nothing on its own. A stamp that looks like a signature may have no certificate behind it, and a fully valid digital signature can be completely invisible. Understanding that split — appearance versus cryptographic signature — is central to reading signed PDFs correctly."
  ],
  "sections": [
    {
      "heading": "Appearance versus the cryptographic signature",
      "body": [
        "A PDF signature has two distinct halves that live in different structures. The cryptographic half is the signature dictionary referenced by the signature field's value (/V): it holds the /ByteRange that identifies which bytes are covered, and /Contents, which stores the encoded signature and certificate data. Validators read this half and never look at the picture on the page.",
        "The visual half is the signature appearance, stored on the widget annotation that presents the field on the page. Humans read this half. Keeping them separate is intentional: it lets a signature be shown however a signer or organization prefers without changing what is cryptographically protected, and it lets a signature be present with no visible mark at all."
      ]
    },
    {
      "heading": "How the appearance is drawn",
      "body": [
        "The appearance is a normal appearance stream, reachable through the widget annotation's appearance dictionary (/AP) via its normal (/N) entry, which points to a Form XObject. That XObject is drawn inside the annotation's rectangle (/Rect) using the same content-stream operators and coordinate space as any other PDF graphics, so it can combine vector drawing, text, and embedded images.",
        "Common content includes the signer's name or distinguished name, a reason and location for signing, a timestamp, and a graphic such as a scanned handwritten signature or a logo. None of this text is authoritative on its own — it is display material chosen when the appearance was generated, not data extracted from the certificate at view time."
      ]
    },
    {
      "heading": "Visible, invisible, and the layered model",
      "body": [
        "A signature can be invisible: giving the widget a zero-area rectangle (and typically no meaningful appearance) produces a signature with no mark on the page that is still cryptographically complete and validated exactly like a visible one. Visibility and cryptographic strength are unrelated properties.",
        "For visible signatures, Adobe defined a layered appearance model. In current practice two layers are used — a background layer (n0) and the signature layer (n2) that carries the chosen text and graphics. Additional layers that once displayed dynamic validity status were deprecated, because a static appearance baked into the file should not claim that a signature is valid; that judgment belongs to the validation process, not to artwork."
      ]
    },
    {
      "heading": "Why the appearance is not proof",
      "body": [
        "Since the appearance is ordinary drawing content, it carries no cryptographic weight. A page can show something that looks exactly like a signature — even a realistic scanned autograph — while containing no signature dictionary and no certificate at all. Conversely, a legitimately signed document may display nothing.",
        "The only reliable way to know whether a document is signed and unaltered is signature validation: recomputing the digest over the covered byte range and checking it against the certificate chain. Treat the appearance as a label for humans, and rely on the viewer's validation result and any tamper-evidence indicators for trust decisions."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "What it is",
      "value": "A Form XObject appearance stream on a signature field's widget annotation"
    },
    {
      "label": "Security role",
      "value": "Cosmetic only — the appearance is not what makes a signature valid"
    },
    {
      "label": "Invisible signatures",
      "value": "A zero-area rectangle produces no visible mark, yet the signature stays valid"
    },
    {
      "label": "Introduced",
      "value": "Alongside PDF digital signatures in PDF 1.3"
    }
  ],
  "specification": {
    "introduced": "PDF 1.3",
    "iso": "ISO 32000",
    "latestVersion": "ISO 32000-2 (PDF 2.0)",
    "typicalUsage": "Rendering the visible mark of a signature field on a page while the cryptographic signature is stored separately in the signature dictionary.",
    "relatedStandards": [
      "pades",
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "If a PDF shows a signature graphic, the document is signed and verified.",
      "truth": "A signature image or typed name is just an appearance; it can exist with no cryptographic signature at all, and even a real signature's appearance is drawn independently of whether that signature validates."
    },
    {
      "claim": "An invisible signature is weaker or incomplete.",
      "truth": "Visibility is unrelated to cryptographic strength — an invisible signature covers the same byte range and is validated exactly like a visible one."
    },
    {
      "claim": "The green check mark or validity status is stored inside the appearance.",
      "truth": "Validity is computed by the viewer at validation time; embedding a static valid graphic in the appearance is discouraged, which is why the dynamic status layers were deprecated."
    }
  ],
  "faq": [
    {
      "q": "What is inside a signature appearance?",
      "a": "Whatever was chosen when it was generated — commonly the signer's name or distinguished name, a reason, a location, a timestamp, and often a graphic such as a scanned handwritten signature or a logo, all drawn as a Form XObject."
    },
    {
      "q": "Where is the appearance stored in the file?",
      "a": "In the appearance dictionary (/AP) of the signature field's widget annotation, with the normal appearance (/N) pointing to a Form XObject that is drawn inside the annotation's rectangle."
    },
    {
      "q": "Can one field hold both a visible appearance and cryptographic protection?",
      "a": "Yes. The widget's appearance is the visible part while the signature dictionary (/ByteRange and /Contents) holds the cryptographic part; both belong to the same signature field."
    },
    {
      "q": "Is the appearance covered by the signature?",
      "a": "If the appearance is present in the file when it is signed, it lies within the hashed byte range; content added afterward by an incremental update is outside the original signed bytes."
    },
    {
      "q": "How do I add a visible signature to a PDF?",
      "a": "Use a signing tool that places a signature field and generates its appearance — for example, the Sign PDF tool linked below."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "acroform",
      "pdf-annotations",
      "tamper-evidence-in-pdf",
      "pki-in-pdf"
    ],
    "relatedStandards": [
      "pades",
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
    "signature-fields",
    "pdf-digital-signatures",
    "appearance-streams",
    "widget-annotations",
    "signature-validation",
    "electronic-vs-digital-signature",
    "form-xobjects",
    "approval-vs-certification-signatures"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
