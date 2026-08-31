import type { RouteId } from "@/lib/i18n/routeIds";
import type { ToolErrorCode } from "@/lib/tools/toolError";

/**
 * Localized strings for the interactive browser tools.
 *
 * These are resolved on the server and handed to each tool as a plain,
 * serializable `strings` prop. That is the whole point: a tool client bundle
 * then contains exactly one locale's strings — the one that page is
 * published in — instead of every locale's. It is what keeps an English
 * visitor from downloading the Portuguese corpus, and what keeps the cost of
 * locale number eleven at zero bytes for locales one through ten.
 *
 * Interpolated phrases are whole sentences with `{named}` placeholders, never
 * concatenated fragments. See src/lib/i18n/format.ts.
 */

export interface RelatedToolRef {
  readonly id: RouteId;
  readonly label: string;
}

export interface ResolvedRelatedTool {
  readonly label: string;
  readonly path: string;
}

/** Strings every tool shares: the shell, the dropzone, the result panel. */
export interface CommonToolStrings {
  readonly privacyText: string;
  /** aria-label templates for the file list controls. */
  readonly fileMoveUp: string;
  readonly fileMoveDown: string;
  readonly fileRemove: string;
  readonly downloadAgain: string;
  readonly startOver: string;
  readonly tryNext: string;
  readonly clearAll: string;
  readonly appCtaHeading: string;
  readonly dropPdfLabel: string;
  readonly dropPdfHint: string;
  /** Localized failure copy, keyed by the structured error code. */
  readonly errors: Readonly<Record<ToolErrorCode, { readonly message: string; readonly hint?: string }>>;
  readonly genericErrorMessage: string;
}

interface BaseToolStrings {
  readonly title: string;
  readonly subtitle: string;
  /** The three step-indicator labels, in order. */
  readonly steps: readonly [string, string, string];
  readonly successTitle: string;
  readonly successDescription?: string;
  readonly actionIdle: string;
  readonly actionBusy: string;
  readonly appCtaSub: string;
  readonly related: readonly RelatedToolRef[];
}

export interface ImageToPdfStrings extends BaseToolStrings {
  readonly dropLabel: string;
  readonly dropHint: string;
  readonly busyCreating: string;
  readonly errorNoImages: string;
  readonly pageSizeLabel: string;
  readonly pageSizeAuto: string;
  readonly orientationLabel: string;
  readonly orientationAuto: string;
  readonly orientationPortrait: string;
  readonly orientationLandscape: string;
  readonly fitLabel: string;
  readonly fitFit: string;
  readonly fitFill: string;
  readonly marginLabel: string;
  readonly marginNone: string;
  readonly marginSmall: string;
  readonly marginMedium: string;
  readonly outputFilename: string;
}

export interface MergePdfStrings extends BaseToolStrings {
  readonly dropLabel: string;
  readonly dropHint: string;
  readonly busyMerging: string;
  readonly errorTooFew: string;
  readonly outputFilename: string;
}

export interface SplitPdfStrings extends BaseToolStrings {
  readonly busyExtracting: string;
  readonly rangeLabel: string;
  readonly rangeHint: string;
  readonly rangePlaceholder: string;
  /** Filename stem suffix, e.g. "-pages-{first}-to-{last}". */
  readonly outputSuffix: string;
}

export interface CompressPdfStrings extends BaseToolStrings {
  readonly busyReading: string;
  readonly busyPage: string;
  readonly busyFinalizing: string;
  readonly levelLabel: string;
  readonly levelLow: string;
  readonly levelRecommended: string;
  readonly levelStrong: string;
  readonly levelNote: string;
  readonly summaryAlreadyCompact: string;
  readonly summaryReduced: string;
  readonly outputSuffix: string;
}

export interface RotatePdfStrings extends BaseToolStrings {
  readonly busyRotating: string;
  readonly angleLabel: string;
  readonly scopeLabel: string;
  readonly scopeAll: string;
  readonly scopeSome: string;
  readonly rangeLabel: string;
  readonly rangeHint: string;
  readonly rangePlaceholder: string;
  readonly outputSuffix: string;
}

export interface PdfToImagesStrings extends BaseToolStrings {
  readonly busyLoading: string;
  readonly busyPage: string;
  readonly formatLabel: string;
  readonly scaleLabel: string;
  readonly qualityLabel: string;
  readonly rangeLabel: string;
  readonly rangeHint: string;
  readonly rangePlaceholder: string;
  readonly downloadedSummary: { readonly one: string; readonly other: string };
}

export interface WatermarkPdfStrings extends BaseToolStrings {
  readonly busyStamping: string;
  readonly textLabel: string;
  readonly textDefault: string;
  readonly errorEmptyText: string;
  readonly positionLabel: string;
  readonly positionCenter: string;
  readonly positionTopLeft: string;
  readonly positionTopRight: string;
  readonly positionBottomLeft: string;
  readonly positionBottomRight: string;
  readonly fontSizeLabel: string;
  readonly opacityLabel: string;
  readonly angleLabel: string;
  readonly outputSuffix: string;
}

export interface PdfToWordStrings extends BaseToolStrings {
  readonly dropHint: string;
  readonly explainerTitle: string;
  readonly explainerBody: string;
  readonly busyReading: string;
  readonly busyPage: string;
  readonly busyBuilding: string;
  readonly errorNoText: string;
}

export interface WordToPdfStrings extends BaseToolStrings {
  readonly dropLabel: string;
  readonly dropHint: string;
  readonly explainerTitle: string;
  readonly explainerBody: string;
  readonly busyReading: string;
  readonly busyBuilding: string;
  readonly errorEmptyDocument: string;
  readonly errorUnreadable: string;
}

export interface ReorderPdfPagesStrings extends BaseToolStrings {
  readonly busyBuilding: string;
  readonly prepRendering: string;
  readonly prepRenderingProgress: string;
  readonly instructions: { readonly one: string; readonly other: string };
  readonly positionLabel: string;
  readonly wasPageLabel: string;
  readonly originalPageAlt: string;
  readonly moveEarlier: string;
  readonly moveLater: string;
  readonly resetOrder: string;
  readonly outputSuffix: string;
}

export interface ExtractPdfPagesStrings extends BaseToolStrings {
  readonly busyExtracting: string;
  readonly pageCountNote: { readonly one: string; readonly other: string };
  readonly rangeLabel: string;
  readonly rangeHint: string;
  readonly rangePlaceholder: string;
  readonly selectedNote: { readonly one: string; readonly other: string };
  readonly outputSuffix: string;
}

export interface ToolStringsByKey {
  readonly "image-to-pdf": ImageToPdfStrings;
  readonly "merge-pdf": MergePdfStrings;
  readonly "split-pdf": SplitPdfStrings;
  readonly "compress-pdf": CompressPdfStrings;
  readonly "rotate-pdf": RotatePdfStrings;
  readonly "pdf-to-images": PdfToImagesStrings;
  readonly "add-watermark-to-pdf": WatermarkPdfStrings;
  readonly "pdf-to-word": PdfToWordStrings;
  readonly "word-to-pdf": WordToPdfStrings;
  readonly "reorder-pdf-pages": ReorderPdfPagesStrings;
  readonly "extract-pdf-pages": ExtractPdfPagesStrings;
}

export type ToolKey = keyof ToolStringsByKey;

export const TOOL_KEYS: readonly ToolKey[] = [
  "image-to-pdf",
  "merge-pdf",
  "split-pdf",
  "compress-pdf",
  "rotate-pdf",
  "pdf-to-images",
  "add-watermark-to-pdf",
  "pdf-to-word",
  "word-to-pdf",
  "reorder-pdf-pages",
  "extract-pdf-pages",
];

/** One locale's tool copy: the shared block plus every tool it has translated. */
export interface ToolDictionary {
  readonly common: CommonToolStrings;
  readonly tools: { readonly [K in ToolKey]: ToolStringsByKey[K] };
}

/**
 * The shape a tool component actually receives: the same strings, with
 * related-tool route ids already resolved to paths in the page's locale.
 * Resolution happens on the server so no route map reaches the browser.
 */
export type ResolvedToolStrings<K extends ToolKey> = Omit<
  ToolStringsByKey[K],
  "related"
> & {
  readonly related: readonly ResolvedRelatedTool[];
  readonly common: CommonToolStrings;
};
