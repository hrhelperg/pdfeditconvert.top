import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-mime-type",
  "h1": "The PDF MIME Type",
  "cluster": "metadata-tooling",
  "aliases": [
    "application/pdf",
    "PDF media type",
    "PDF content type",
    "application/x-pdf",
    "media type for PDF"
  ],
  "definition": "The PDF MIME type is application/pdf, the standardized media-type label that tells software a stream of bytes is a Portable Document Format file.",
  "description": "application/pdf is the IANA-registered media type for PDF files, used in HTTP and email to identify a document as Portable Document Format.",
  "searchIntent": "definition",
  "difficulty": "Beginner",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every file that moves across the web or through email needs a short, standardized label that tells the receiving software what kind of data it is. For PDF, that label is the media type application/pdf, historically referred to as a MIME type. It is the agreed-upon way for servers, mail systems, and applications to say this file is a Portable Document Format document.",
    "This label is not stored inside the PDF the way the internal %PDF- signature is. Instead it travels alongside the file as metadata: an HTTP header, an email part header, or an operating-system file association. When the label is correct, a browser knows to hand the bytes to its PDF viewer; when it is missing or wrong, the same file may download as an unknown blob or open in the wrong program.",
    "application/pdf is registered with IANA and documented in an IETF RFC, which ties the label back to the PDF specification itself. Understanding it clears up a common confusion: why the same PDF sometimes opens inline and sometimes downloads, and why the file extension, the internal signature, and the media type are three separate things."
  ],
  "sections": [
    {
      "heading": "What application/pdf Means",
      "body": [
        "A media type has two parts separated by a slash: a top-level type and a subtype. In application/pdf, the top-level type is application and the subtype is pdf. The application top-level type is IANA's category for data meant to be handed to a program rather than read directly as text, images, audio, or video; it covers binary and application-specific formats, of which PDF is one. The subtype pdf identifies the specific format within that broad category.",
        "Because PDF is a binary container, the media type carries no charset parameter. Unlike text/* types, there is no meaningful whole-file character encoding to declare. In everyday use application/pdf appears on its own, with the filename and any download-versus-open behavior handled by separate headers rather than by media-type parameters."
      ]
    },
    {
      "heading": "Where the PDF Media Type Is Used",
      "body": [
        "On the web, a server announces a PDF by sending the header Content-Type: application/pdf in its HTTP response. Browsers read that header to decide whether to render the document in their built-in viewer or offer it as a download, a choice they typically combine with the Content-Disposition header and the user's own settings. In email, the same label appears in a MIME part header so that mail clients can present an attachment as a PDF and pick an appropriate icon and default handler.",
        "Web servers usually derive that header from the file's .pdf extension through a configured mapping, and operating systems use a comparable association to choose which app opens a PDF. The media-type specification also describes PDF fragment identifiers, URL fragments such as #page=3 or #nameddest=... that ask a viewer to open at a particular location, building on Adobe's PDF open parameters."
      ]
    },
    {
      "heading": "How the Media Type Was Registered",
      "body": [
        "application/pdf is an official entry in IANA's media types registry rather than an informal convention. It was originally registered by Adobe and documented in RFC 3778 in 2004. That document was later revised and obsoleted by RFC 8118 in 2017, which updated the registration to reference the ISO-standardized Portable Document Format (ISO 32000) rather than an Adobe-only specification.",
        "This registration history is why application/pdf, and not some ad hoc alternative, is the interoperable label that servers, mail systems, and applications agree on. Before the registered type was widely adopted, some software emitted the experimental variant application/x-pdf; the x- prefix marked an unregistered, non-standard type, and it is discouraged in favor of the registered application/pdf."
      ]
    },
    {
      "heading": "The Label, the Extension, and the File Itself",
      "body": [
        "A media type is external metadata about a file, not part of its content. The internal marker that actually identifies PDF data is the %PDF- signature at the very start of the file, the subject of a separate topic, while .pdf is only a filename convention. These three can disagree: a correctly formed PDF can be served with the wrong Content-Type, and a mislabeled or entirely unlabeled file can still be a valid PDF.",
        "Because labels are sometimes missing or incorrect, browsers and other tools may perform content sniffing, inspecting the leading bytes for the %PDF- signature to decide how to handle a file regardless of its declared type. Sending the correct application/pdf header remains the dependable approach, since sniffing behavior varies between programs and can be disabled for security reasons."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Media type",
      "value": "application/pdf"
    },
    {
      "label": "Top-level type",
      "value": "application"
    },
    {
      "label": "Registration",
      "value": "IANA; RFC 8118 (2017), obsoleting RFC 3778 (2004)"
    },
    {
      "label": "File extension",
      "value": ".pdf"
    }
  ],
  "specification": {
    "introduced": "RFC 3778 (2004)",
    "latestVersion": "RFC 8118 (2017)",
    "typicalUsage": "Content-Type header on HTTP responses and MIME email attachments",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "application/x-pdf is the correct MIME type for a PDF.",
      "truth": "The registered media type is application/pdf. application/x-pdf was an experimental, unregistered variant; the x- prefix marks non-standard types and is discouraged."
    },
    {
      "claim": "The MIME type is stored inside the PDF file.",
      "truth": "It is not. The media type is an external label carried in an HTTP or email header. The internal marker inside the file is the %PDF- signature, which is a separate mechanism."
    },
    {
      "claim": "The .pdf extension and the application/pdf media type are the same thing.",
      "truth": "They are distinct. The extension is a filename convention; the media type is a standardized data label. Servers map one to the other, but either can appear without the other."
    }
  ],
  "faq": [
    {
      "q": "What is the MIME type of a PDF file?",
      "a": "application/pdf. It is the IANA-registered media type used to identify Portable Document Format data in HTTP responses and email attachments."
    },
    {
      "q": "Why does the same PDF sometimes open in the browser and sometimes download?",
      "a": "That is decided mainly by the Content-Type (application/pdf) together with the Content-Disposition header and the viewer's settings, not by the file itself. A wrong or missing type is one reason a PDF fails to open as expected."
    },
    {
      "q": "Does application/pdf need a charset parameter?",
      "a": "No. PDF is a binary format, so there is no whole-file character encoding to declare, unlike text/* media types."
    },
    {
      "q": "Who defined the application/pdf media type?",
      "a": "Adobe originally registered it, documented in RFC 3778 (2004). RFC 8118 (2017) updated and obsoleted that registration and ties it to the ISO-standardized PDF specification."
    },
    {
      "q": "Is a MIME type the same as a media type?",
      "a": "Effectively yes. MIME type is the older name from the email MIME standards; IANA now calls these labels media types, and application/pdf is one of them."
    }
  ],
  "graph": {
    "parentConcept": "pdf-metadata",
    "relatedConcepts": [
      "pdf-file-identifiers",
      "pdf-metadata-standards"
    ],
    "relatedTools": [
      {
        "label": "PDF Converter — Convert PDFs to Word, JPG, PNG and More",
        "path": "/pdf-converter"
      },
      {
        "label": "PDF Editor — Edit Text, Images and Pages on Mobile",
        "path": "/pdf-editor"
      }
    ],
    "relatedGuides": [
      {
        "label": "Why Won't My PDF Open? Causes and Practical Fixes",
        "path": "/guides/why-wont-my-pdf-open"
      }
    ]
  },
  "seeAlso": [
    "pdf-magic-number",
    "pdf-metadata",
    "portable-document-format",
    "pdf-header",
    "pdf-file-structure",
    "iso-32000",
    "document-properties"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
