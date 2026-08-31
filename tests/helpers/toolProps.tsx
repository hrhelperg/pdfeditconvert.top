import { getToolStrings } from "@/lib/i18n/registry";
import type { ToolKey } from "@/lib/i18n/toolStrings";

/**
 * Props every tool component now needs.
 *
 * Tools receive their copy as a prop rather than importing a dictionary,
 * which is what keeps a page's client bundle to a single locale. Tests use
 * the same entry point the pages do, so a string that only exists in a test
 * fixture cannot pass.
 */
export function toolProps<K extends ToolKey>(key: K) {
  return { strings: getToolStrings("en", key), locale: "en" as const };
}

export function ptToolProps<K extends ToolKey>(key: K) {
  return { strings: getToolStrings("pt-BR", key), locale: "pt-BR" as const };
}
