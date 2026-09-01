import { NotFoundBody, NOT_FOUND_ID } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the Indonesian route group — an
 * unknown /id/panduan/... slug, for instance. It renders inside the
 * Indonesian root layout, so the reader keeps Indonesian chrome and
 * `lang="id"` instead of being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_ID} locale="id" />;
}
