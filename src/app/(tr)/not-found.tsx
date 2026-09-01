import { NotFoundBody, NOT_FOUND_TR } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the Turkish route group — an unknown
 * /tr/kilavuzlar/... slug, for instance. It renders inside the Turkish
 * root layout, so the reader keeps Turkish chrome and `lang="tr"` instead
 * of being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_TR} locale="tr" />;
}
