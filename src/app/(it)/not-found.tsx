import { NotFoundBody, NOT_FOUND_IT } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the Italian route group — an
 * unknown /it/guide/... slug, for instance. It renders inside the Italian
 * root layout, so the reader keeps Italian chrome and `lang="it"` instead of
 * being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_IT} locale="it" />;
}
