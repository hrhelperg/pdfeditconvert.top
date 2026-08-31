import { NotFoundBody, NOT_FOUND_ES } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the Spanish route group — an
 * unknown /es/guias/... slug, for instance. It renders inside the Spanish
 * root layout, so the reader keeps Spanish chrome and `lang="es"` instead of
 * being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_ES} locale="es" />;
}
