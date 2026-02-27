import type { Locale } from "./i18n";

/**
 * Pick the translated value of a field based on locale.
 *
 * localizedField(product, "name", "en") → product.nameEn ?? product.name
 * localizedField(product, "name", "ru") → product.nameRu ?? product.name
 * localizedField(product, "name", "tk") → product.name
 */
export function localizedField<T extends Record<string, unknown>>(
  obj: T,
  field: string,
  locale: Locale,
): string {
  if (locale === "en") {
    const v = obj[`${field}En`];
    if (typeof v === "string" && v) return v;
  }
  if (locale === "ru") {
    const v = obj[`${field}Ru`];
    if (typeof v === "string" && v) return v;
  }
  const fallback = obj[field];
  return typeof fallback === "string" ? fallback : "";
}
