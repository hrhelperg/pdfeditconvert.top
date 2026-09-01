import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { requireRoute } from "@/lib/i18n/routeMap";
import { GuidesIndexPage } from "@/components/sections/GuidesIndexPage";
import { GUIDES_INDEX_IT } from "@/content/pages/misc.it";

const LOCALE = "it" as const;
const ROUTE_ID = "guides" as const;

const route = requireRoute(LOCALE, ROUTE_ID);

export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
  locale: LOCALE,
  routeId: ROUTE_ID,
});

export default function Page() {
  return <GuidesIndexPage content={GUIDES_INDEX_IT} locale={LOCALE} />;
}
