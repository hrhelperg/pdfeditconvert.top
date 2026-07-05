import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pki-in-pdf",
  "h1": "Public Key Infrastructure in PDF",
  "cluster": "security",
  "aliases": [
    "PKI in PDF",
    "public-key cryptography in PDF",
    "certificate-based trust for PDF",
    "X.509 infrastructure in PDF"
  ],
  "definition": "In PDF, Public Key Infrastructure is the system of key pairs, certificates, certificate authorities, and revocation data that lets digital signatures and certificate-based encryption be trusted.",
  "description": "How PDF relies on public-key cryptography — X.509 certificates, certificate authorities, trust chains and revocation checks behind signatures and encryption.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Public Key Infrastructure (PKI) is the framework of asymmetric cryptography, digital certificates, and trusted authorities that lets one party prove its identity to another without a shared secret. It is the same technology that secures HTTPS websites and signed email, and PDF reuses it wholesale rather than inventing its own. Whenever a PDF carries a digital signature or is encrypted for named recipients, PKI is what makes the result verifiable and trustworthy.",
    "Inside a PDF, PKI plays two distinct roles. For digital signatures, the signer's private key produces a cryptographic seal that anyone can check with the matching public key carried in an X.509 certificate. For certificate-based encryption, the PDF's public-key security handler locks the document so that only holders of specific private keys can open it. Both rely on the same chain of certificates, authorities, and revocation data that defines PKI.",
    "This page explains the moving parts — key pairs, certificates, certificate authorities, trust anchors, and revocation services — and how they fit into PDF's signature and encryption machinery. It is a conceptual reference rather than a step-by-step guide; where you actually need to sign or protect a document, follow a linked tool or walkthrough."
  ],
  "sections": [
    {
      "heading": "The building blocks of PKI",
      "body": [
        "PKI starts with an asymmetric key pair: a private key kept secret by its owner and a public key that can be shared freely. Anything signed with the private key can be verified with the public key, and only the private key can produce that signature. An X.509 digital certificate binds a public key to an identity — a person, organization, or server — and is itself signed by a certificate authority (CA), an entity that vouches for that binding.",
        "Because a single CA cannot personally verify everyone, certificates form a chain: an end-entity certificate is signed by an intermediate CA, which is signed by another CA, up to a root certificate that a relying party already trusts. That root is the trust anchor. Validating software keeps a trust store of accepted roots, and a certificate is trusted only if a chain can be built from it to one of those anchors. This hierarchy is what lets strangers trust each other's signatures without ever having met."
      ]
    },
    {
      "heading": "How PKI drives PDF signatures",
      "body": [
        "When a PDF is digitally signed, the software computes a cryptographic hash of the document's bytes and encrypts that hash with the signer's private key. The result, together with the signer's certificate and usually the intermediate certificates of its chain, is packaged as a PKCS#7 structure — also called CMS, Cryptographic Message Syntax — and embedded in the signature dictionary's Contents entry. A signature handler and a SubFilter value, such as adbe.pkcs7.detached or ETSI.CAdES.detached for PAdES signatures, tell viewers how to interpret that container.",
        "To verify, a viewer extracts the certificate, uses its public key to check the signed hash, and independently recomputes the hash over the covered bytes. If the two hashes match, the content protected by the signature has not changed since signing — this is the tamper-evidence property. But a mathematically valid signature is only half the story: the viewer must still decide whether the certificate itself is trustworthy."
      ]
    },
    {
      "heading": "Trust chains, revocation, and timestamps",
      "body": [
        "Trust is established by building the certificate chain from the signer up to a root in the viewer's trust store, exactly as described above. On top of that, the viewer checks that no certificate in the chain has been revoked — for example because a private key was compromised. Revocation status comes from a Certificate Revocation List (CRL) published by the CA, or from the Online Certificate Status Protocol (OCSP), which answers status queries for a single certificate on demand.",
        "Time is the other complication. Certificates expire, and a signature made while a certificate was valid should remain verifiable afterward. A trusted timestamp, obtained from a timestamp authority using the RFC 3161 protocol, records when the signing happened and is itself protected by PKI. To keep everything checkable for years, Long-Term Validation profiles embed the certificates, revocation responses, and timestamps directly in the PDF — commonly in the Document Security Store — so a validator does not have to fetch them from the network later."
      ]
    },
    {
      "heading": "PKI for certificate-based PDF encryption",
      "body": [
        "PKI is not only about signing. PDF also defines a public-key security handler for encryption, an alternative to the password-based standard security handler. Instead of deriving the encryption key from a password, it encrypts the document's file-encryption key separately for each intended recipient using that recipient's public key, taken from their X.509 certificate. Each recipient's PKCS#7 recipient information is stored in the encryption dictionary.",
        "The practical effect is that only someone holding the matching private key can open the document, and different recipients can be granted access without sharing a common password. This ties access to certificate identities rather than to a secret that can be forwarded. The trade-off is operational: senders need each recipient's certificate in advance, and recipients must safeguard their private keys, since losing one means losing access to every document encrypted to it."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Certificate standard",
      "value": "X.509 digital certificates issued within a hierarchy of certificate authorities"
    },
    {
      "label": "Signature container",
      "value": "PKCS#7 / CMS SignedData embedded in the signature dictionary's Contents entry"
    },
    {
      "label": "Revocation checks",
      "value": "Certificate status verified through a CRL (revocation list) or OCSP"
    },
    {
      "label": "Trusted timestamps",
      "value": "Provided by a timestamp authority using the RFC 3161 protocol"
    }
  ],
  "misconceptions": [
    {
      "claim": "PKI is a PDF-specific technology created for signing documents.",
      "truth": "PKI is a general public-key trust framework — X.509 certificates, CAs, and revocation — used across TLS, email, and code signing; PDF simply applies it to signatures and certificate-based encryption."
    },
    {
      "claim": "A cryptographically valid signature means the signer is trusted.",
      "truth": "Validity only proves the covered bytes were not altered and match the signing key; whether the signer is trusted depends on chaining the certificate to a trust anchor and checking revocation and time."
    },
    {
      "claim": "PKI in PDF is only about digital signatures.",
      "truth": "PDF's public-key security handler also uses recipients' certificates to encrypt documents, so PKI supports certificate-based encryption as well as signing."
    }
  ],
  "faq": [
    {
      "q": "What is the difference between PKI and a digital signature in PDF?",
      "a": "PKI is the underlying trust framework — key pairs, certificates, certificate authorities, and revocation services. A PDF digital signature is one application of that framework: it uses a private key to seal the document and a certificate to let others verify the seal."
    },
    {
      "q": "What is a certificate authority in this context?",
      "a": "A certificate authority (CA) is an organization that issues digital certificates and vouches for the binding between a public key and an identity. Viewers trust a signer's certificate by tracing it up a chain of CAs to a root certificate they already accept."
    },
    {
      "q": "Do I need an internet connection to validate a PKI-signed PDF?",
      "a": "Often yes, because fresh revocation data (OCSP or CRL) and timestamp checks may need to be fetched online. If that data is already embedded in the PDF — for example in the Document Security Store for Long-Term Validation — the signature can be checked offline."
    },
    {
      "q": "Where is the signer's certificate stored in the PDF?",
      "a": "Inside the PKCS#7 / CMS structure in the signature dictionary's Contents entry, usually alongside the intermediate certificates that make up the chain, so a validator has what it needs to build the path to a trusted root."
    },
    {
      "q": "How does a PKI-signed PDF stay verifiable years later?",
      "a": "Long-Term Validation embeds the certificates, revocation responses, and timestamps needed to check the signature — commonly in the Document Security Store — so the chain can still be validated after the signing certificate has expired."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "timestamp-signatures",
      "hash-algorithms-in-pdf",
      "approval-vs-certification-signatures",
      "electronic-vs-digital-signature",
      "encryption-dictionary",
      "pdf-encryption"
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
        "label": "How to Sign a PDF on Your Phone",
        "path": "/guides/how-to-sign-pdf-on-phone"
      }
    ]
  },
  "seeAlso": [
    "pdf-digital-signatures",
    "public-key-security",
    "signature-validation",
    "pades",
    "cades-in-pdf",
    "ltv-signatures",
    "document-security-store",
    "pdf-security-model"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
