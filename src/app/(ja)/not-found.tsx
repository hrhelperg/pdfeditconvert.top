import { NotFoundBody, NOT_FOUND_JA } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the Japanese route group — an
 * unknown /ja/guides/... slug, for instance. It renders inside the
 * Japanese root layout, so the reader keeps Japanese chrome and
 * `lang="ja"` instead of being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_JA} locale="ja" />;
}
