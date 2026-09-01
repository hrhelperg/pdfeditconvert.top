import { NotFoundBody, NOT_FOUND_PL } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the Polish route group — an
 * unknown /pl/poradniki/... slug, for instance. It renders inside the
 * Polish root layout, so the reader keeps Polish chrome and `lang="pl"`
 * instead of being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_PL} locale="pl" />;
}
