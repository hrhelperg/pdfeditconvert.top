import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "hash-algorithms-in-pdf",
  "h1": "Hash Algorithms in PDF Signatures",
  "cluster": "security",
  "aliases": [
    "message digest algorithms in PDF signatures",
    "signature digest algorithms",
    "PDF signing hash functions",
    "digest method (PDF signatures)",
    "SHA in PDF signatures"
  ],
  "definition": "In PDF signatures, hash algorithms are cryptographic message-digest functions that reduce the signed byte range to a fixed-length value, so any change to those bytes later breaks the signature.",
  "description": "How PDF digital signatures use cryptographic hash functions such as SHA-256 to fingerprint the signed byte range and reveal any later change.",
  "searchIntent": "security",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "A cryptographic hash function takes an input of any length and produces a short, fixed-length value called a digest or message digest. The defining property is that the output is deterministic but changes unpredictably if even one byte of the input changes, and it is not feasible to run the function backward or to craft two different inputs that share a digest. PDF digital signatures lean on exactly this behavior: rather than signing an entire document with a private key, which would be slow and awkward, a signer hashes the document once and signs the compact digest.",
    "In a signed PDF, the hash is never taken over the raw file as a whole. A signature dictionary carries a ByteRange array that names which spans of bytes are covered, deliberately skipping the region reserved for the signature value itself. The signing software concatenates those spans, runs the chosen hash algorithm over them, and embeds the result inside a CMS (PKCS#7) or CAdES container along with the signer's certificate. The private key ultimately signs a digest, so the hash algorithm is the mechanism that ties the signature to the specific bytes on the page.",
    "Because the whole guarantee rests on the hash, the choice of algorithm matters. Early PDF signing used MD5 and SHA-1; both are now considered cryptographically weak because practical collision attacks exist, and current practice uses the SHA-2 family. The algorithm also has to be recorded in a way the validator can read back, which is why the container format and the signature's SubFilter both play a role in how the digest is negotiated."
  ],
  "sections": [
    {
      "heading": "How the Digest Is Computed Over the ByteRange",
      "body": [
        "When a signature is applied, the writer first lays out the final byte layout of the file, including a placeholder in the /Contents entry of the signature dictionary that will later hold the signature blob. The /ByteRange array records two spans: the bytes before the placeholder and the bytes after it. The signing engine feeds those two spans, in order, through the hash algorithm and never includes the placeholder itself. This is why a PDF signature can cover almost the entire file yet leave a hole exactly where its own signature will sit.",
        "The resulting digest is what the signer's private key operates on, packaged inside a CMS SignedData structure. Because the ByteRange is explicit, a later reader can reconstruct precisely which bytes were meant to be protected. Any content added through a later incremental update falls outside the original ByteRange, which is how a viewer can tell that a signature covers an earlier revision of the document rather than the current on-disk state."
      ]
    },
    {
      "heading": "The Two Layers of Hashing in a CMS Signature",
      "body": [
        "Most PDF signatures use a CMS/PKCS#7 container, and hashing happens at two levels inside it. First, the digest of the ByteRange is stored as the messageDigest signed attribute. Second, the full set of signed attributes, which includes that messageDigest plus items such as the signing time and the content type, is itself hashed, and it is this second digest that the private key actually encrypts to form the signature value. Both stages normally use the same hash algorithm.",
        "Separating the two layers lets a signature bind more than just the page bytes. The signed attributes travel under the same cryptographic protection as the document digest, so a validator that verifies the signature is also trusting those attributes. Understanding this structure explains why simply matching a document hash is not the whole story: the validator recomputes the ByteRange digest, checks it against messageDigest, and then verifies the signature over the attribute set."
      ]
    },
    {
      "heading": "Which Hash Algorithms PDF Signatures Support",
      "body": [
        "The digest methods historically associated with PDF signing include MD5, SHA-1, the SHA-2 family (SHA-256, SHA-384, and SHA-512), and RIPEMD-160. Which one is used, and whether it is fixed or negotiable, depends on the signature's SubFilter. The legacy subfilters adbe.pkcs7.sha1 and adbe.x509.rsa_sha1 hard-code SHA-1 for the document digest, leaving no room to choose a stronger function.",
        "The more flexible subfilters carry the digest algorithm inside the container rather than in the subfilter name. With adbe.pkcs7.detached and the PAdES-style ETSI.CAdES.detached, the CMS structure records the digestAlgorithm for the content and for each signer, so SHA-256 or stronger can be used without changing the subfilter. PDF 2.0 deprecated the SHA-1-bound subfilters, reflecting the broader move toward algorithm-agile containers. A separate RFC 3161 timestamp token, if present, carries its own message-imprint hash and may use a different digest algorithm than the document signature."
      ]
    },
    {
      "heading": "Why the Choice of Hash Matters: Collision Resistance",
      "body": [
        "The security value of a signature hash rests on collision resistance, the difficulty of finding two different inputs that produce the same digest. If an attacker could construct two documents with a matching digest, a signature made over one could appear valid over the other. This is precisely the property that has eroded for MD5 and SHA-1, where practical collision techniques are known, and it is the reason those algorithms are treated as unsuitable for new signatures.",
        "It helps to keep two things separate. The hash protects integrity, telling you whether the covered bytes changed. Trust in who signed and whether their certificate is valid comes from the surrounding public-key infrastructure, not from the hash itself. A strong hash on a signature from an untrusted or expired certificate is still untrustworthy, and a weak hash does not automatically void a signature that a viewer accepted at signing time. Both dimensions have to hold for a signature to be meaningful."
      ]
    },
    {
      "heading": "How Validation Recomputes the Hash",
      "body": [
        "Validation reverses the signing steps. The verifier reads the /ByteRange, reassembles exactly those byte spans, and recomputes the digest using the algorithm recorded in the CMS structure or implied by the subfilter. It compares that value to the messageDigest attribute, then checks the signature over the signed attributes with the signer's public key. If the recomputed digest does not match, the covered bytes were altered after signing, and the signature is reported as invalid or as covering only an earlier revision.",
        "This recomputation is the technical basis for tamper evidence in signed PDFs. The hash does not prevent editing; it makes editing detectable. Combined with the ByteRange mechanism and incremental updates, it lets a viewer distinguish untouched signed content from later additions, and it is why long-term validation workflows are careful to preserve the original algorithm and the material needed to recompute and re-verify the digest years later."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Byte range, not whole file",
      "value": "The /ByteRange array selects the bytes to hash, covering the document but skipping the /Contents placeholder that will hold the signature value."
    },
    {
      "label": "Two hashing stages",
      "value": "The ByteRange digest becomes the CMS messageDigest attribute; the set of signed attributes is then hashed, and that hash is what the private key signs."
    },
    {
      "label": "Legacy vs algorithm-agile subfilters",
      "value": "adbe.pkcs7.sha1 and adbe.x509.rsa_sha1 hard-code SHA-1, while adbe.pkcs7.detached and ETSI.CAdES.detached carry the digest algorithm inside the CMS container."
    },
    {
      "label": "Weak digests",
      "value": "MD5 and SHA-1 are considered cryptographically weak because practical collision attacks exist; current signing uses the SHA-2 family."
    }
  ],
  "specification": {
    "iso": "ISO 32000-2 (PDF 2.0)",
    "typicalUsage": "Computing and verifying the message digest that a PDF digital signature signs and that a validator recomputes over the ByteRange.",
    "relatedStandards": [
      "pades",
      "cades-in-pdf"
    ]
  },
  "misconceptions": [
    {
      "claim": "The hash algorithm encrypts the PDF so no one can read it.",
      "truth": "Hashing is one-way and produces a fixed-length fingerprint for integrity; it does not conceal content. Confidentiality is a separate feature handled by PDF encryption."
    },
    {
      "claim": "A stronger hash makes a signature more legally binding or more trusted.",
      "truth": "The hash affects tamper resistance only. Trust in the signer comes from the certificate and PKI validation; a strong hash on an untrusted certificate is still untrusted."
    },
    {
      "claim": "Because SHA-1 is broken, every previously SHA-1-signed PDF is now automatically invalid.",
      "truth": "Existing signatures still verify cryptographically against the algorithm they used. Deprecation guides new signing choices and risk assessment rather than instantly voiding old documents."
    }
  ],
  "faq": [
    {
      "q": "What hash algorithms can a PDF signature use?",
      "a": "Digest methods associated with PDF signing include MD5, SHA-1, the SHA-2 family (SHA-256, SHA-384, SHA-512), and RIPEMD-160. Detached CMS and CAdES subfilters let the algorithm be selected inside the container, while legacy subfilters imply SHA-1."
    },
    {
      "q": "Where is the hash algorithm recorded in the file?",
      "a": "For detached CMS or CAdES signatures it is stored in the SignedData structure, in the digestAlgorithms set and each signer's digestAlgorithm. The SubFilter names the container format, and the SHA-1-bound subfilters imply the algorithm by name."
    },
    {
      "q": "How does a validator use the hash during verification?",
      "a": "It reads the /ByteRange, reassembles those exact byte spans, recomputes the digest with the stated algorithm, and compares it to the signed messageDigest. A mismatch means the covered bytes changed after signing."
    },
    {
      "q": "Does a timestamp use the same hash as the signature?",
      "a": "Not necessarily. An RFC 3161 timestamp token carries its own message-imprint hash over the signature value and can use a different digest algorithm than the document signature."
    },
    {
      "q": "Why hash the document first instead of signing all of it?",
      "a": "Public-key signing is slow and size-limited, so the document is condensed to a fixed-length digest that the private key can sign efficiently. The digest still changes if any covered byte changes, preserving the integrity guarantee."
    }
  ],
  "graph": {
    "parentConcept": "pdf-security-model",
    "relatedConcepts": [
      "ltv-signatures",
      "document-security-store",
      "signature-fields",
      "pdf-incremental-updates",
      "electronic-vs-digital-signature"
    ],
    "relatedStandards": [
      "pdf-2-0",
      "iso-32000"
    ],
    "relatedTools": [
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
    "signature-validation",
    "pki-in-pdf",
    "pades",
    "cades-in-pdf",
    "timestamp-signatures",
    "tamper-evidence-in-pdf",
    "pdf-security-model"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
