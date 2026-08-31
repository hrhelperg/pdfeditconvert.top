import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { requireRoute } from "@/lib/i18n/routeMap";
import { HomePage } from "@/components/sections/HomePage";
import { HOME_PT_BR } from "@/content/pages/home.pt-BR";

const LOCALE = "pt-BR" as const;
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
  return <HomePage content={HOME_PT_BR} locale={LOCALE} />;
}
