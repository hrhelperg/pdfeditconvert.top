import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "jpx-decode-jpeg2000",
  "h1": "JPXDecode (JPEG 2000 in PDF)",
  "cluster": "images-compression",
  "aliases": [
    "JPEG 2000 in PDF",
    "JPX filter",
    "JPEG2000 compression",
    "JPX image encoding"
  ],
  "definition": "JPXDecode is the PDF stream filter that decodes image data compressed with JPEG 2000, a wavelet-based image codec supporting both lossless and lossy compression.",
  "description": "JPXDecode is the PDF filter for JPEG 2000 image data — a wavelet-based codec supporting lossless and lossy compression, high bit depths, and embedded alpha.",
  "searchIntent": "concept",
  "difficulty": "Advanced",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "JPXDecode is a PDF stream filter that decompresses image data encoded with JPEG 2000. It sits alongside the other image filters a PDF can use — DCTDecode for baseline JPEG, CCITTFaxDecode and JBIG2Decode for bilevel scans, FlateDecode for lossless data — but it is the one that unlocks wavelet-based compression.",
    "JPEG 2000 is a different image codec from the JPEG most people know. Instead of dividing an image into 8x8 blocks and applying a discrete cosine transform, it applies a discrete wavelet transform across the whole image, producing a single scalable codestream that can be decoded lossily or losslessly and reconstructed progressively by resolution or by quality. Those properties are what a PDF gains when it stores an image with JPXDecode.",
    "The filter was introduced in PDF 1.5 and reflects the JPEG 2000 standard (ISO/IEC 15444). It is capable but specialized: support across PDF viewers, printers, and libraries is far less universal than for JPEG or Flate, so JPEG 2000 tends to appear in high-fidelity, archival, or imaging-heavy workflows rather than everyday documents."
  ],
  "sections": [
    {
      "heading": "How the JPXDecode filter works",
      "body": [
        "JPXDecode belongs to the same category of PDF stream filters as FlateDecode and DCTDecode, but instead of general-purpose or DCT compression it decodes a JPEG 2000 codestream. JPEG 2000 replaces JPEG's block-based discrete cosine transform with a discrete wavelet transform (DWT) applied across the whole image (or across tiles), then entropy-codes the resulting coefficients. Because the transform is multi-resolution, the codestream is organized so a decoder can reconstruct the image progressively — by increasing resolution, by increasing quality, or over a spatial region — without decoding the entire stream. In a PDF the JPEG 2000 data appears as the stream of an image XObject whose Filter entry is JPXDecode.",
        "A PDF embeds a JPEG 2000 codestream rather than a complete standalone JPEG 2000 file, and it draws on a defined subset of the standard rather than every optional feature. The codec itself is defined by the JPEG 2000 family of standards (ISO/IEC 15444); the PDF specification defines how that codestream is carried and interpreted as a PDF filter."
      ]
    },
    {
      "heading": "JPEG 2000 versus baseline JPEG (DCTDecode)",
      "body": [
        "The closest relative to JPXDecode is DCTDecode, the filter for baseline JPEG. Both target continuous-tone (photographic) content, but they differ in fundamentals. DCTDecode is lossy only and operates on 8x8 pixel blocks, which is why heavy JPEG compression produces visible block edges. JPEG 2000, by using a whole-image wavelet transform, avoids that blockiness; at high compression it tends to soften and ring rather than tile. It also supports mathematically lossless compression within the same codestream design, higher bit depths, and a larger number of color components than baseline JPEG.",
        "In practice this makes JPEG 2000 attractive for archival, medical, and high-fidelity imaging, but it comes at a cost: encoding and decoding are more computationally demanding, and support across general-purpose PDF viewers and toolchains is uneven. For everyday documents, DCTDecode and FlateDecode remain the filters most tools produce and consume reliably."
      ]
    },
    {
      "heading": "Color space, bit depth, and alpha in the codestream",
      "body": [
        "A distinctive trait of JPXDecode images is that the JPEG 2000 codestream can describe its own color characteristics. As a result, several entries that are required for images using other filters become optional. The image dictionary's ColorSpace entry may be omitted when the codestream specifies the colour space; when ColorSpace is present, PDF defines how it relates to — and can override — the colour information inside the data. The effective bit depth is likewise determined from the codestream.",
        "JPEG 2000 can also carry an opacity (alpha) channel. PDF exposes this through the SMaskInData entry, which is specific to JPXDecode images and tells the viewer whether soft-mask data embedded in the codestream should be used as an alpha channel — and, if so, whether the color data is premultiplied. This lets a single JPEG 2000 stream carry both the image and its transparency instead of requiring a separate SMask image."
      ]
    },
    {
      "heading": "Standards, PDF/A, and where JPXDecode fits",
      "body": [
        "JPXDecode was added in PDF 1.5, well after the original image filters, and it corresponds to the JPEG 2000 standard (ISO/IEC 15444). Because PDF/A-1 is based on PDF 1.4 — which predates the filter — JPEG 2000 is not permitted in PDF/A-1. PDF/A-2, built on ISO 32000-1, added support for JPEG 2000 compression, so archival PDFs may use it from that conformance level onward. Print-oriented profiles have their own image-filter rules, so JPEG 2000 support should always be confirmed against the specific standard you are targeting.",
        "JPEG 2000 data is handled through image XObjects rather than the abbreviated inline-image filters, and because viewer and library support varies, JPXDecode is best treated as a specialized choice rather than a default. If a JPEG 2000 PDF renders slowly or not at all in a given tool, re-encoding the images to a more widely supported filter is a common remedy."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Filter name",
      "value": "JPXDecode"
    },
    {
      "label": "Introduced in",
      "value": "PDF 1.5"
    },
    {
      "label": "Compression",
      "value": "Wavelet-based; lossy or lossless"
    },
    {
      "label": "Underlying codec",
      "value": "JPEG 2000 (ISO/IEC 15444)"
    }
  ],
  "specification": {
    "introduced": "PDF 1.5",
    "iso": "JPEG 2000: ISO/IEC 15444; filter defined in ISO 32000 (PDF)",
    "typicalUsage": "Embedding wavelet-compressed images (photographic, high-bit-depth, or archival content) as PDF image XObjects.",
    "relatedStandards": [
      "iso-32000",
      "pdf-1-5",
      "pdf-a-2"
    ]
  },
  "misconceptions": [
    {
      "claim": "JPEG 2000 (JPXDecode) is just a newer, better JPEG that every PDF viewer supports.",
      "truth": "JPEG 2000 is a distinct wavelet codec, and support across PDF viewers, printers, and libraries is uneven; baseline JPEG (DCTDecode) remains far more widely handled."
    },
    {
      "claim": "JPXDecode is always lossy, like JPEG.",
      "truth": "JPEG 2000 supports both lossy and mathematically lossless compression within the same codestream design."
    },
    {
      "claim": "A JPXDecode image must declare its color space in the PDF image dictionary.",
      "truth": "The JPEG 2000 codestream can carry its own color information, so the image dictionary's ColorSpace entry may be omitted and, when present, follows specific rules for how it relates to the data."
    }
  ],
  "faq": [
    {
      "q": "What does the \"JPX\" in JPXDecode refer to?",
      "a": "JPX refers to JPEG 2000; the filter decodes image data compressed with the JPEG 2000 codec. In a PDF the data is stored as a JPEG 2000 codestream rather than as a complete standalone JPEG 2000 file."
    },
    {
      "q": "When was JPXDecode added to PDF?",
      "a": "It was introduced in PDF 1.5. Earlier versions relied on filters such as DCTDecode (JPEG), CCITTFaxDecode, and FlateDecode for image data."
    },
    {
      "q": "Can I use JPEG 2000 images in a PDF/A file?",
      "a": "Not in PDF/A-1, which is based on PDF 1.4 and predates the filter. PDF/A-2 and later, built on ISO 32000-1, permit JPEG 2000 compression."
    },
    {
      "q": "Why might a JPEG 2000 PDF display slowly or not at all?",
      "a": "Because JPEG 2000 support in PDF viewers and libraries is uneven, some tools decode it slowly or cannot render it. Re-encoding the images to a more widely supported filter, such as JPEG or Flate, is a common workaround."
    },
    {
      "q": "Does JPXDecode support transparency?",
      "a": "JEG 2000 can include an opacity (alpha) channel. The image dictionary's SMaskInData entry, which applies only to JPXDecode images, controls whether that embedded soft-mask data is used as an alpha channel."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "image-color-depth",
      "icc-based-color",
      "pdf-optimization",
      "inline-images",
      "image-resolution-in-pdf"
    ],
    "relatedStandards": [
      "pdf-1-5",
      "pdf-a-2",
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      },
      {
        "label": "PDF Converter — Convert PDFs to Word, JPG, PNG and More",
        "path": "/pdf-converter"
      }
    ],
    "relatedGuides": [
      {
        "label": "Why Is My PDF Blurry? Resolution, Compression and Scan Causes",
        "path": "/guides/why-is-my-pdf-blurry"
      },
      {
        "label": "Compress a PDF Without Losing Too Much Quality",
        "path": "/guides/compress-pdf-without-losing-too-much-quality"
      },
      {
        "label": "Best PDF Compression Settings — A Decision Guide",
        "path": "/guides/best-pdf-compression-settings"
      }
    ]
  },
  "seeAlso": [
    "dct-decode-jpeg",
    "jbig2-decode",
    "pdf-filters",
    "pdf-compression",
    "lossy-vs-lossless-pdf-compression",
    "image-xobjects",
    "image-soft-masks",
    "bits-per-component"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
