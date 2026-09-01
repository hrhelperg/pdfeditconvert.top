import { NotFoundBody, NOT_FOUND_CS } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the Czech route group — an unknown
 * /cs/navody/... slug, for instance. It renders inside the Czech root
 * layout, so the reader keeps Czech chrome and `lang="cs"` instead of
 * being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_CS} locale="cs" />;
}
