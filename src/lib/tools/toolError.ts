/**
 * Structured, locale-independent tool errors.
 *
 * The tools used to signal failure by throwing an Error whose English
 * message was later matched with a regular expression to decide what to
 * show the user. That works exactly as long as there is one language: the
 * moment a validator speaks Portuguese, an English regex stops matching and
 * every failure collapses into the generic branch.
 *
 * Throwing a code plus its parameters instead keeps the decision in the
 * data. The English `message` is still populated so anything reading
 * `error.message` (logs, tests, an unmapped `catch`) behaves as before.
 */
export type ToolErrorCode =
  | "not_pdf"
  | "not_image"
  | "not_word"
  | "legacy_doc"
  | "too_large"
  | "unreadable_pdf"
  | "invalid_range"
  | "memory"
  | "too_many_files"
  | "too_few_files"
  | "canvas_unsupported"
  | "encode_failed"
  | "generic";

export type ToolErrorParams = Record<string, string | number>;

/**
 * Named `ToolFailure`, not `ToolError`, because `ToolError` is already the
 * alert component every tool renders. Two `ToolError`s in one file is a
 * rename waiting to go wrong.
 */
export class ToolFailure extends Error {
  readonly code: ToolErrorCode;
  readonly params: ToolErrorParams;

  constructor(code: ToolErrorCode, params: ToolErrorParams = {}, message?: string) {
    super(message ?? code);
    this.name = "ToolFailure";
    this.code = code;
    this.params = params;
  }
}

export function isToolFailure(err: unknown): err is ToolFailure {
  return err instanceof ToolFailure;
}
