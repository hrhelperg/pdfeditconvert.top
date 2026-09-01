import { NotFoundBody, NOT_FOUND_DE } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the German route group — an
 * unknown /de/anleitungen/... slug, for instance. It renders inside the German
 * root layout, so the reader keeps German chrome and `lang="de"` instead of
 * being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_DE} locale="de" />;
}
