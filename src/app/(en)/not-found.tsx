import { NotFoundBody, NOT_FOUND_EN } from "@/components/sections/NotFoundBody";

/** 404 for `notFound()` raised inside the English route group. */
export default function NotFound() {
  return <NotFoundBody copy={NOT_FOUND_EN} locale="en" />;
}
