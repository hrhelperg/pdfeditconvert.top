import { isToolFailure, type ToolErrorCode } from "@/lib/tools/toolError";
import { fmt } from "@/lib/i18n/format";
import type { CommonToolStrings } from "@/lib/i18n/toolStrings";

export type ToolErrorKind =
  | "unreadable"
  | "invalid_range"
  | "memory"
  | "unsupported"
  | "empty"
  | "too_many"
  | "generic";

export type MappedError = {
  kind: ToolErrorKind;
  message: string;
  hint?: string;
};

const KIND_BY_CODE: Record<ToolErrorCode, ToolErrorKind> = {
  not_pdf: "unsupported",
  not_image: "unsupported",
  not_word: "unsupported",
  legacy_doc: "unsupported",
  too_large: "memory",
  unreadable_pdf: "unreadable",
  invalid_range: "invalid_range",
  memory: "memory",
  too_many_files: "too_many",
  too_few_files: "empty",
  canvas_unsupported: "generic",
  encode_failed: "generic",
  generic: "generic",
};

/**
 * Turns a thrown value into user-facing copy.
 *
 * The primary path is structured: a {@link ToolError} carries a code and its
 * parameters, and `strings` supplies the sentence for that code in the
 * page's language. This is why the tools can speak Portuguese at all — the
 * previous implementation decided what to show by running English regular
 * expressions over the thrown message, which silently degrades every
 * non-English locale to the generic fallback.
 *
 * The regex branch survives for values thrown by third-party code
 * (pdf-lib, pdf.js, the browser) that this codebase does not control, and
 * for callers that pass no dictionary — which keeps the English behaviour
 * byte-identical to what it was.
 */
export function mapToolError(
  err: unknown,
  strings?: CommonToolStrings,
): MappedError {
  if (isToolFailure(err) && strings) {
    const copy = strings.errors[err.code];
    return {
      kind: KIND_BY_CODE[err.code],
      message: fmt(copy.message, err.params),
      ...(copy.hint ? { hint: fmt(copy.hint, err.params) } : {}),
    };
  }

  const raw = err instanceof Error ? err.message : "";

  if (
    /password-?protected|looks corrupted|corrupted.*pdf|pdf.*corrupted|could not be opened/i.test(
      raw,
    )
  ) {
    return {
      kind: "unreadable",
      message: "This file could not be opened.",
      hint: "It may be corrupted or password-protected. Unlock or repair it, then try again.",
    };
  }
  if (/page or range|page range|values between/i.test(raw)) {
    return {
      kind: "invalid_range",
      message: "Please enter a valid page range.",
      hint: "Use values like 1-3 or 2,4,6.",
    };
  }
  if (
    err instanceof RangeError ||
    /out of memory|stack size|allocation failed/i.test(raw)
  ) {
    if (strings) {
      const copy = strings.errors.memory;
      return { kind: "memory", message: copy.message, ...(copy.hint ? { hint: copy.hint } : {}) };
    }
    return {
      kind: "memory",
      message: "This file may be too large for browser processing.",
      hint: "Try a smaller PDF, or split it into pieces first.",
    };
  }
  if (/not a (PDF|supported image)/i.test(raw)) {
    return { kind: "unsupported", message: raw };
  }
  if (/Add up to/i.test(raw)) {
    return { kind: "too_many", message: raw };
  }
  if (/Add at least/i.test(raw)) {
    return { kind: "empty", message: raw };
  }

  if (isToolFailure(err) && strings) {
    // Unreachable in practice — kept so a future code without copy still
    // produces a sentence rather than an empty alert.
    return { kind: "generic", message: strings.genericErrorMessage };
  }
  if (raw && !isToolFailure(err)) return { kind: "generic", message: raw };
  return {
    kind: "generic",
    message: strings?.genericErrorMessage ??
      "Something went wrong. Try again, or use a smaller file.",
  };
}
