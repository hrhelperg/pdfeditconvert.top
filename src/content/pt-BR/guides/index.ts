import type { GuideContent } from "@/types/content";

/**
 * Brazilian Portuguese guides, keyed by the **English** slug.
 *
 * The key and each record's `slug` are the English slug on purpose: the
 * Portuguese URL lives in the route manifest and nowhere else, so the two
 * can never disagree. `related` and `parentHub` paths stay English too and
 * are translated at render time — see src/content/registry.ts.
 */
export const GUIDES_PT_BR: Record<string, GuideContent> = {};
