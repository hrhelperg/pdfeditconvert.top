import type { KnowledgeContent } from "@/types/content";
import e0 from "./accessible-pdf-forms";
import e1 from "./acroform";
import e2 from "./aes-128-encryption";
import e3 from "./aes-256-encryption";
import e4 from "./annotation-types";
import e5 from "./appearance-streams";
import e6 from "./approval-vs-certification-signatures";
import e7 from "./artbox";
import e8 from "./artifact-marking";
import e9 from "./ascii85-decode";
import e10 from "./asciihex-decode";
import e11 from "./associated-files-in-pdf";
import e12 from "./bits-per-component";
import e13 from "./bleed-and-crop-marks";
import e14 from "./bleedbox";
import e15 from "./blend-modes";
import e16 from "./cades-in-pdf";
import e17 from "./calrgb-and-calgray";
import e18 from "./ccittfax-decode";
import e19 from "./character-encoding-in-pdf";
import e20 from "./checkbox-form-fields";
import e21 from "./choice-fields";
import e22 from "./cid-fonts";
import e23 from "./cjk-fonts-in-pdf";
import e24 from "./clipping-paths";
import e25 from "./cmap";
import e26 from "./color-key-masking";
import e27 from "./color-management-in-pdf";
import e28 from "./composite-vs-simple-fonts";
import e29 from "./cropbox";
import e30 from "./custom-metadata-in-pdf";
import e31 from "./dct-decode-jpeg";
import e32 from "./devicecmyk";
import e33 from "./devicegray";
import e34 from "./devicen-color";
import e35 from "./devicergb";
import e36 from "./document-information-dictionary";
import e37 from "./document-properties";
import e38 from "./document-security-store";
import e39 from "./electronic-vs-digital-signature";
import e40 from "./embedded-files-in-pdf";
import e41 from "./embedded-font-programs";
import e42 from "./encryption-dictionary";
import e43 from "./fdf-and-xfdf";
import e44 from "./flate-decode";
import e45 from "./font-descriptor";
import e46 from "./font-embedding";
import e47 from "./font-flags";
import e48 from "./font-subsetting";
import e49 from "./font-substitution";
import e50 from "./form-calculation";
import e51 from "./form-field-flags";
import e52 from "./form-flattening";
import e53 from "./form-xobjects";
import e54 from "./glyph";
import e55 from "./hash-algorithms-in-pdf";
import e56 from "./heading-structure-in-pdf";
import e57 from "./history-of-pdf";
import e58 from "./icc-based-color";
import e59 from "./icc-profiles-in-pdf";
import e60 from "./image-color-depth";
import e61 from "./image-downsampling";
import e62 from "./image-interpolation";
import e63 from "./image-masks";
import e64 from "./image-only-pdf";
import e65 from "./image-resolution-in-pdf";
import e66 from "./image-soft-masks";
import e67 from "./image-xobjects";
import e68 from "./indexed-color";
import e69 from "./inline-images";
import e70 from "./iso-32000";
import e71 from "./javascript-in-pdf";
import e72 from "./jbig2-decode";
import e73 from "./jpx-decode-jpeg2000";
import e74 from "./lab-color-in-pdf";
import e75 from "./language-specification-in-pdf";
import e76 from "./linearized-pdf";
import e77 from "./link-annotations";
import e78 from "./list-tagging-in-pdf";
import e79 from "./logical-structure";
import e80 from "./lossy-vs-lossless-pdf-compression";
import e81 from "./ltv-signatures";
import e82 from "./lzw-decode";
import e83 from "./marked-content";
import e84 from "./marked-content-id";
import e85 from "./markup-annotations";
import e86 from "./mediabox";
import e87 from "./named-destinations";
import e88 from "./non-embedded-fonts";
import e89 from "./object-stream-compression";
import e90 from "./opentype-fonts-in-pdf";
import e91 from "./optional-content-groups";
import e92 from "./overprint";
import e93 from "./pades";
import e94 from "./password-vs-encryption";
import e95 from "./pdf-1-4";
import e96 from "./pdf-1-5";
import e97 from "./pdf-1-6";
import e98 from "./pdf-1-7";
import e99 from "./pdf-2-0";
import e100 from "./pdf-a";
import e101 from "./pdf-a-1";
import e102 from "./pdf-a-2";
import e103 from "./pdf-a-3";
import e104 from "./pdf-a-4";
import e105 from "./pdf-a-conformance-levels";
import e106 from "./pdf-a-font-embedding";
import e107 from "./pdf-a-metadata-requirements";
import e108 from "./pdf-a-validation";
import e109 from "./pdf-a-vs-pdf-ua";
import e110 from "./pdf-a-vs-pdf-x";
import e111 from "./pdf-accessibility-checking";
import e112 from "./pdf-actions";
import e113 from "./pdf-alt-text";
import e114 from "./pdf-annotations";
import e115 from "./pdf-array-objects";
import e116 from "./pdf-bookmarks";
import e117 from "./pdf-color";
import e118 from "./pdf-comparison";
import e119 from "./pdf-compression";
import e120 from "./pdf-conformance-levels";
import e121 from "./pdf-content-streams";
import e122 from "./pdf-coordinate-system";
import e123 from "./pdf-cross-reference-table";
import e124 from "./pdf-dictionary";
import e125 from "./pdf-digital-signatures";
import e126 from "./pdf-document-catalog";
import e127 from "./pdf-drm";
import e128 from "./pdf-e";
import e129 from "./pdf-encryption";
import e130 from "./pdf-file-identifiers";
import e131 from "./pdf-file-size-factors";
import e132 from "./pdf-file-structure";
import e133 from "./pdf-filters";
import e134 from "./pdf-fonts";
import e135 from "./pdf-form-fields";
import e136 from "./pdf-graphics-state";
import e137 from "./pdf-header";
import e138 from "./pdf-imposition";
import e139 from "./pdf-incremental-updates";
import e140 from "./pdf-indirect-objects";
import e141 from "./pdf-interactive-features";
import e142 from "./pdf-layers";
import e143 from "./pdf-magic-number";
import e144 from "./pdf-metadata";
import e145 from "./pdf-metadata-standards";
import e146 from "./pdf-mime-type";
import e147 from "./pdf-name-objects";
import e148 from "./pdf-object-streams";
import e149 from "./pdf-objects";
import e150 from "./pdf-ocr";
import e151 from "./pdf-operators";
import e152 from "./pdf-optimization";
import e153 from "./pdf-outlines";
import e154 from "./pdf-output-intent";
import e155 from "./pdf-page-boxes";
import e156 from "./pdf-page-geometry";
import e157 from "./pdf-page-labels";
import e158 from "./pdf-page-orientation";
import e159 from "./pdf-page-rotation";
import e160 from "./pdf-page-scaling";
import e161 from "./pdf-page-size";
import e162 from "./pdf-page-tree";
import e163 from "./pdf-patterns";
import e164 from "./pdf-permission-flags";
import e165 from "./pdf-portfolios";
import e166 from "./pdf-preflight";
import e167 from "./pdf-printing-pipeline";
import e168 from "./pdf-redaction";
import e169 from "./pdf-repair";
import e170 from "./pdf-security-model";
import e171 from "./pdf-shadings";
import e172 from "./pdf-standards-overview";
import e173 from "./pdf-stream-objects";
import e174 from "./pdf-string-objects";
import e175 from "./pdf-structure-tree";
import e176 from "./pdf-text-extraction";
import e177 from "./pdf-thumbnails";
import e178 from "./pdf-trailer";
import e179 from "./pdf-transparency";
import e180 from "./pdf-ua";
import e181 from "./pdf-ua-1";
import e182 from "./pdf-units-and-measurements";
import e183 from "./pdf-validation";
import e184 from "./pdf-vector-graphics";
import e185 from "./pdf-versions";
import e186 from "./pdf-vs-postscript";
import e187 from "./pdf-vt";
import e188 from "./pdf-x";
import e189 from "./pdf-x-1a";
import e190 from "./pdf-x-3";
import e191 from "./pdf-x-4";
import e192 from "./pdf-x-trapping";
import e193 from "./pdf-xref-streams";
import e194 from "./pki-in-pdf";
import e195 from "./popup-annotations";
import e196 from "./portable-document-format";
import e197 from "./predictor-functions";
import e198 from "./press-ready-pdf";
import e199 from "./print-production-with-pdf";
import e200 from "./public-key-security";
import e201 from "./radio-button-fields";
import e202 from "./rc4-encryption";
import e203 from "./reading-order";
import e204 from "./rendering-intent";
import e205 from "./role-mapping";
import e206 from "./runlength-decode";
import e207 from "./screen-readers-and-pdf";
import e208 from "./searchable-pdf";
import e209 from "./section-508-and-pdf";
import e210 from "./separation-color";
import e211 from "./signature-appearance";
import e212 from "./signature-fields";
import e213 from "./signature-validation";
import e214 from "./soft-masks";
import e215 from "./spot-colors";
import e216 from "./standard-14-fonts";
import e217 from "./standard-encoding";
import e218 from "./standard-security-handler";
import e219 from "./standard-structure-types";
import e220 from "./stencil-masks";
import e221 from "./structure-elements";
import e222 from "./table-tagging-in-pdf";
import e223 from "./tagged-pdf";
import e224 from "./tamper-evidence-in-pdf";
import e225 from "./text-form-fields";
import e226 from "./text-layer-in-pdf";
import e227 from "./text-rendering-modes";
import e228 from "./text-showing-operators";
import e229 from "./timestamp-signatures";
import e230 from "./tounicode-cmap";
import e231 from "./transparency-groups";
import e232 from "./trapping";
import e233 from "./trimbox";
import e234 from "./truetype-fonts-in-pdf";
import e235 from "./type-0-fonts";
import e236 from "./type-1-fonts";
import e237 from "./type-3-fonts";
import e238 from "./untagged-pdf";
import e239 from "./user-space-and-device-space";
import e240 from "./user-vs-owner-password";
import e241 from "./verapdf";
import e242 from "./wcag-and-pdf";
import e243 from "./well-tagged-pdf";
import e244 from "./why-standardize-pdf";
import e245 from "./widget-annotations";
import e246 from "./winansiencoding";
import e247 from "./xfa-forms";
import e248 from "./xmp-metadata";
import e249 from "./xmp-vs-info-dictionary";

export const ENTRIES: KnowledgeContent[] = [
  e0,
  e1,
  e2,
  e3,
  e4,
  e5,
  e6,
  e7,
  e8,
  e9,
  e10,
  e11,
  e12,
  e13,
  e14,
  e15,
  e16,
  e17,
  e18,
  e19,
  e20,
  e21,
  e22,
  e23,
  e24,
  e25,
  e26,
  e27,
  e28,
  e29,
  e30,
  e31,
  e32,
  e33,
  e34,
  e35,
  e36,
  e37,
  e38,
  e39,
  e40,
  e41,
  e42,
  e43,
  e44,
  e45,
  e46,
  e47,
  e48,
  e49,
  e50,
  e51,
  e52,
  e53,
  e54,
  e55,
  e56,
  e57,
  e58,
  e59,
  e60,
  e61,
  e62,
  e63,
  e64,
  e65,
  e66,
  e67,
  e68,
  e69,
  e70,
  e71,
  e72,
  e73,
  e74,
  e75,
  e76,
  e77,
  e78,
  e79,
  e80,
  e81,
  e82,
  e83,
  e84,
  e85,
  e86,
  e87,
  e88,
  e89,
  e90,
  e91,
  e92,
  e93,
  e94,
  e95,
  e96,
  e97,
  e98,
  e99,
  e100,
  e101,
  e102,
  e103,
  e104,
  e105,
  e106,
  e107,
  e108,
  e109,
  e110,
  e111,
  e112,
  e113,
  e114,
  e115,
  e116,
  e117,
  e118,
  e119,
  e120,
  e121,
  e122,
  e123,
  e124,
  e125,
  e126,
  e127,
  e128,
  e129,
  e130,
  e131,
  e132,
  e133,
  e134,
  e135,
  e136,
  e137,
  e138,
  e139,
  e140,
  e141,
  e142,
  e143,
  e144,
  e145,
  e146,
  e147,
  e148,
  e149,
  e150,
  e151,
  e152,
  e153,
  e154,
  e155,
  e156,
  e157,
  e158,
  e159,
  e160,
  e161,
  e162,
  e163,
  e164,
  e165,
  e166,
  e167,
  e168,
  e169,
  e170,
  e171,
  e172,
  e173,
  e174,
  e175,
  e176,
  e177,
  e178,
  e179,
  e180,
  e181,
  e182,
  e183,
  e184,
  e185,
  e186,
  e187,
  e188,
  e189,
  e190,
  e191,
  e192,
  e193,
  e194,
  e195,
  e196,
  e197,
  e198,
  e199,
  e200,
  e201,
  e202,
  e203,
  e204,
  e205,
  e206,
  e207,
  e208,
  e209,
  e210,
  e211,
  e212,
  e213,
  e214,
  e215,
  e216,
  e217,
  e218,
  e219,
  e220,
  e221,
  e222,
  e223,
  e224,
  e225,
  e226,
  e227,
  e228,
  e229,
  e230,
  e231,
  e232,
  e233,
  e234,
  e235,
  e236,
  e237,
  e238,
  e239,
  e240,
  e241,
  e242,
  e243,
  e244,
  e245,
  e246,
  e247,
  e248,
  e249,
];
