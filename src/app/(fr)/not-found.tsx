import { NotFoundBody, NOT_FOUND_FR } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the French route group — an
 * unknown /fr/guides/... slug, for instance. It renders inside the French
 * root layout, so the reader keeps French chrome and `lang="fr"` instead of
 * being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_FR} locale="fr" />;
}
