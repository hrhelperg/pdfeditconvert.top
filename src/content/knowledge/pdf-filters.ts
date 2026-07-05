import type { KnowledgeContent } from "@/types/content";

const content: KnowledgeContent = {
  "slug": "pdf-filters",
  "h1": "PDF Stream Filters",
  "cluster": "images-compression",
  "aliases": [
    "Stream filters",
    "PDF filters",
    "Decode filters",
    "Stream encoding filters"
  ],
  "definition": "PDF stream filters are the named encodings listed in a stream object's Filter entry that a reader applies in sequence to decode its stored bytes back to the original data.",
  "description": "Learn what PDF stream filters are, how the Filter and DecodeParms entries work, and how filters like FlateDecode and DCTDecode decode stream data.",
  "searchIntent": "concept",
  "difficulty": "Intermediate",
  "updated": "2026-07-04",
  "reviewed": "2026-07-04",
  "intro": [
    "Every PDF stream, the byte sequences that carry page content, fonts, images, and metadata, can store its data in encoded form. Stream filters are the mechanism that records how those bytes were encoded so that a reader can turn them back into usable data. Without filters, a PDF could only hold raw, uncompressed bytes, which would make most files far larger and would leave no room for formats like JPEG to live inside the document.",
    "A filter is identified by name inside the stream's dictionary. The reader looks at the Filter entry, applies the named filter or filters, and recovers the original bytes. Some filters compress, such as FlateDecode and DCTDecode; some only re-encode binary as printable ASCII text, such as ASCII85Decode; and some are specific to image data. The same small framework covers all of them, which is why the filter concept sits at the heart of how PDF stores almost everything.",
    "This page explains the filter model defined in the PDF specification (ISO 32000): where filters are declared, how several filters chain into a pipeline, the families of standard filters, and how decode parameters fine-tune the process. It is a reference to the concept rather than a step-by-step tuning guide, so where you would actually shrink or rewrite a file, the linked compression tools handle that work."
  ],
  "sections": [
    {
      "heading": "The Filter and DecodeParms entries",
      "body": [
        "A PDF stream object is a dictionary followed by a block of bytes between the stream and endstream keywords. If the dictionary contains a Filter entry, the stored bytes are encoded and must be decoded before use; if there is no Filter entry, the bytes are the raw data as-is. The Filter value is either a single filter name, such as /FlateDecode, or an array of names when more than one filter was applied. A companion DecodeParms entry supplies parameters for any filter that needs them, matched position by position to the filters named in Filter.",
        "Filters apply only to stream objects, never to plain dictionaries, numbers, strings, or the other object types, which are always stored directly. Because a stream's bytes are usually held in encoded form, the dictionary also carries a required Length entry giving the number of encoded bytes actually present in the file. That lets a reader locate the end of the stream without having to decode it first."
      ]
    },
    {
      "heading": "Chaining filters into a pipeline",
      "body": [
        "When the Filter entry is an array, the filters form a pipeline that the reader applies in order. Decoding runs left to right: the first-named filter processes the stored bytes, its output feeds the second filter, and so on until the original data emerges. A common pattern is an array of ASCII85Decode followed by FlateDecode, where the writer first compressed the data with Flate and then wrapped it in ASCII85 so it contains only printable characters; the reader reverses that by un-wrapping the ASCII85 layer, then inflating.",
        "This layering lets PDF separate concerns, so a transport encoding that keeps bytes 7-bit-safe can sit on top of a compression encoding that makes bytes smaller. Modern PDFs written as binary files rarely need the ASCII layer, so most streams use a single compression filter. When filters are chained, each entry in the DecodeParms array corresponds to the filter at the same position, using the null object as a placeholder for filters that take no parameters."
      ]
    },
    {
      "heading": "Families of standard filters",
      "body": [
        "The specification defines a fixed set of standard filters that fall into a few groups. ASCIIHexDecode and ASCII85Decode are ASCII encodings: they represent binary bytes using printable characters and actually increase size, so they exist for transport safety rather than compression. The general-purpose compressors, FlateDecode (based on the zlib and deflate method), LZWDecode, and RunLengthDecode, work on any stream, including content streams, fonts, and metadata.",
        "Image-oriented filters decode compressed image samples and belong on image XObjects rather than arbitrary streams. DCTDecode carries JPEG data, JPXDecode carries JPEG 2000 data, CCITTFaxDecode handles Group 3 and Group 4 fax encodings for bilevel scans, and JBIG2Decode targets bilevel images as well. FlateDecode is the workhorse for lossless compression of text and vector content, while DCTDecode simply carries already-JPEG-compressed photographic data without re-compressing it. Some of the newer filters, such as JBIG2Decode and JPXDecode, were added in later PDF versions rather than being present from the start."
      ]
    },
    {
      "heading": "Decode parameters and predictors",
      "body": [
        "Some filters accept parameters through the DecodeParms entry. For LZWDecode and FlateDecode, a Predictor parameter tells the decoder that a predictor function was applied before compression to make the data more compressible, a technique borrowed from PNG that improves results on image rows and on cross-reference stream data. Other parameters describe the data's shape, such as Columns for samples per row and Colors. CCITTFaxDecode uses its own parameters, including K to select the fax coding scheme along with Columns and Rows.",
        "These parameters are not optional decoration: a decoder applies them exactly as declared, because the same compressed bytes decode differently depending on the predictor and the declared geometry. This is one reason editing a compressed stream by hand is error-prone, since the Length, Filter, and DecodeParms entries all have to stay consistent with the actual bytes on disk."
      ]
    },
    {
      "heading": "Why filters are named for decoding",
      "body": [
        "The standard filter names describe the decoding operation, not the encoding step. FlateDecode is the filter that inflates data, even though the writer deflated it first. This convention is inherited from the PostScript language, where PDF's stream and filter model originated, and it reflects the reader's point of view: a consumer only ever needs to know how to decode. Inside inline images, small images embedded directly in a content stream, the same filters appear under abbreviated names such as Fl for FlateDecode and DCT for DCTDecode to save a few bytes.",
        "One special case is the Crypt filter, which integrates encryption into the filter chain rather than compressing data. When a PDF is encrypted, a stream's bytes can be processed by a crypt filter as part of decoding, and the Identity crypt filter passes data through unchanged. This lets encryption coexist with ordinary compression filters inside the same general framework."
      ]
    }
  ],
  "keyFacts": [
    {
      "label": "Where filters apply",
      "value": "Only to stream objects, declared in the stream dictionary's Filter entry"
    },
    {
      "label": "Naming convention",
      "value": "Standard names describe the decode operation (for example, FlateDecode inflates data)"
    },
    {
      "label": "FlateDecode basis",
      "value": "Uses the zlib and deflate method; added in PDF 1.2"
    },
    {
      "label": "Inline image names",
      "value": "Inline images use abbreviations such as Fl, AHx, A85, and DCT"
    }
  ],
  "specification": {
    "iso": "ISO 32000-1, ISO 32000-2",
    "introduced": "Core filters date to PDF 1.0; FlateDecode was added in PDF 1.2",
    "typicalUsage": "Encoding and decoding compressed or ASCII-wrapped stream data throughout a PDF",
    "relatedStandards": [
      "iso-32000"
    ]
  },
  "misconceptions": [
    {
      "claim": "A stream's filter tells you how the data was compressed when it was written.",
      "truth": "The standard names describe the decode step the reader performs, not the encode step. FlateDecode names the inflate operation, a convention inherited from PostScript."
    },
    {
      "claim": "Every PDF filter makes the file smaller.",
      "truth": "ASCIIHexDecode and ASCII85Decode are transport encodings that enlarge data by representing binary as printable ASCII. Only some filters actually compress."
    },
    {
      "claim": "Any filter can be applied to any stream.",
      "truth": "Image filters such as DCTDecode, JPXDecode, CCITTFaxDecode, and JBIG2Decode decode image samples and belong on image XObjects, not on arbitrary streams like page content."
    }
  ],
  "faq": [
    {
      "q": "Is a PDF filter the same thing as compression?",
      "a": "Not always. Many filters compress, such as FlateDecode and DCTDecode, but ASCIIHexDecode and ASCII85Decode only re-encode binary as printable text and make data larger. Filter is the general term for any stream encoding, whether or not it compresses."
    },
    {
      "q": "How do I know which filter a stream uses?",
      "a": "Look at the stream dictionary's Filter entry. It holds a single filter name or an array of names, and a matching DecodeParms entry, if present, supplies each filter's parameters."
    },
    {
      "q": "Can a single stream use more than one filter?",
      "a": "Yes. The Filter entry can be an array, and the filters are applied as a pipeline in the listed order when decoding. A typical example is ASCII85 wrapped around Flate compression."
    },
    {
      "q": "Do filters apply to the whole PDF file at once?",
      "a": "No. Filters are declared per stream object, so one PDF can freely mix FlateDecode content streams, DCTDecode images, and uncompressed streams."
    },
    {
      "q": "Which filter is used for JPEG images in a PDF?",
      "a": "DCTDecode, which carries JPEG-compressed image data. JPEG 2000 images use JPXDecode instead."
    }
  ],
  "graph": {
    "parentConcept": "pdf-compression",
    "relatedConcepts": [
      "lzw-decode",
      "runlength-decode",
      "asciihex-decode",
      "jbig2-decode",
      "jpx-decode-jpeg2000",
      "object-stream-compression",
      "pdf-content-streams",
      "image-xobjects"
    ],
    "relatedStandards": [
      "iso-32000"
    ],
    "relatedTools": [
      {
        "label": "Compress PDF — Reduce PDF File Size in Your Browser (Free, No Upload)",
        "path": "/compress-pdf"
      }
    ],
    "relatedGuides": [
      {
        "label": "How to Compress a PDF (Without Losing Quality)",
        "path": "/guides/how-to-compress-pdf"
      },
      {
        "label": "Why Is My PDF So Large? Causes and Fixes",
        "path": "/guides/why-is-my-pdf-so-large"
      }
    ]
  },
  "seeAlso": [
    "pdf-stream-objects",
    "pdf-compression",
    "flate-decode",
    "dct-decode-jpeg",
    "ccittfax-decode",
    "ascii85-decode",
    "predictor-functions",
    "inline-images"
  ],
  "parentHub": {
    "label": "PDF Encyclopedia",
    "path": "/pdf-encyclopedia"
  }
};

export default content;
