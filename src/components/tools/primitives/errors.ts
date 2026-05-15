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

export function mapToolError(err: unknown): MappedError {
  const raw = err instanceof Error ? err.message : "";

  if (/password-?protected|corrupted/i.test(raw)) {
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

  if (raw) return { kind: "generic", message: raw };
  return {
    kind: "generic",
    message: "Something went wrong. Try again, or use a smaller file.",
  };
}
