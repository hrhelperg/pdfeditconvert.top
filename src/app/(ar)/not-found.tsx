import { NotFoundBody, NOT_FOUND_AR } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the Arabic route group — an
 * unknown /ar/adilla/... slug, for instance. It renders inside the Arabic
 * root layout, so the reader keeps Arabic chrome and `lang="ar"` instead of
 * being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_AR} locale="ar" />;
}
