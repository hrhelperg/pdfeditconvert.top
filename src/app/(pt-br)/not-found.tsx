import { NotFoundBody, NOT_FOUND_PT_BR } from "@/components/sections/NotFoundBody";

/**
 * 404 for `notFound()` raised inside the Portuguese route group — an
 * unknown /pt-br/guias/... slug, for instance. It renders inside the pt-BR
 * root layout, so the reader keeps Portuguese chrome and `lang="pt-BR"`
 * instead of being dropped into English.
 */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_PT_BR} locale="pt-BR" />;
}
