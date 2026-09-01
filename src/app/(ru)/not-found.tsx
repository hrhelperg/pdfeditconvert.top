import { NotFoundBody, NOT_FOUND_RU } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the Russian route group — an
 * unknown /ru/instrukcii/... slug, for instance. It renders inside the
 * Russian root layout, so the reader keeps Russian chrome and `lang="ru"`
 * instead of being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_RU} locale="ru" />;
}
