import { LOCALES, type Locale } from "@/lib/i18n/locales";

/**
 * Whole-phrase interpolation.
 *
 * Localized strings are authored as complete sentences with named
 * placeholders — `"Compressing page {page} of {total}…"` — never assembled
 * from fragments at the call site. Concatenating fragments bakes English
 * word order and English grammar into the code: it produces broken output
 * the moment a language inflects the noun, drops the article, reverses the
 * clause (ja) or reads right to left (ar).
 *
 * Deliberately not ICU MessageFormat. This is the smallest API that keeps
 * whole phrases translatable; if the product ever needs select/ordinal
 * logic, every string is already a template and can be upgraded in place.
 */
export type FormatVars = Record<string, string | number>;

export function fmt(template: string, vars: FormatVars = {}): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : whole,
  );
}

/**
 * A translatable string with plural forms.
 *
 * The categories are CLDR's, not English's. English needs `one` and
 * `other`; Portuguese the same; Russian and Polish need `few` and `many`;
 * Japanese, Indonesian and Chinese need only `other`. A translator fills in
 * whichever categories their language actually uses and `plural()` asks
 * `Intl.PluralRules` which one applies — so no language is forced through
 * English's two-way split.
 */
export interface PluralForms {
  readonly zero?: string;
  readonly one?: string;
  readonly two?: string;
  readonly few?: string;
  readonly many?: string;
  readonly other: string;
}

export function plural(
  locale: Locale,
  count: number,
  forms: PluralForms,
  vars: FormatVars = {},
): string {
  const category = new Intl.PluralRules(LOCALES[locale].intlLocale).select(count);
  const template = forms[category as keyof PluralForms] ?? forms.other;
  return fmt(template, { count: formatNumber(locale, count), ...vars });
}

export function formatNumber(locale: Locale, value: number): string {
  return new Intl.NumberFormat(LOCALES[locale].intlLocale).format(value);
}

/** Long-form date, e.g. "May 11, 2026" / "11 de maio de 2026". */
export function formatDate(locale: Locale, iso: string): string {
  // Parse as UTC so the rendered day never shifts with the build machine's
  // timezone — a prerendered page must be byte-stable across environments.
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y ?? 1970, (m ?? 1) - 1, d ?? 1));
  return new Intl.DateTimeFormat(LOCALES[locale].intlLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/** File size for display, localized decimal separator included. */
export function formatBytesLocalized(locale: Locale, bytes: number): string {
  const nf = (value: number, digits: number) =>
    new Intl.NumberFormat(LOCALES[locale].intlLocale, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }).format(value);
  if (bytes < 1024) return `${nf(bytes, 0)} B`;
  if (bytes < 1024 * 1024) return `${nf(bytes / 1024, 1)} KB`;
  return `${nf(bytes / (1024 * 1024), 1)} MB`;
}
