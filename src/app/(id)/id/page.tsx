import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { requireRoute } from "@/lib/i18n/routeMap";
import { HomePage } from "@/components/sections/HomePage";
import { HOME_ID } from "@/content/pages/home.id";

const LOCALE = "id" as const;
const ROUTE_ID = "" as const;

const route = requireRoute(LOCALE, ROUTE_ID);

export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
  locale: LOCALE,
  routeId: ROUTE_ID,
});

export default function Page() {
  return <HomePage content={HOME_ID} locale={LOCALE} />;
}
