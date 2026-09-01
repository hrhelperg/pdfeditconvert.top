import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { requireRoute } from "@/lib/i18n/routeMap";
import { ToolsIndexPage } from "@/components/sections/ToolsIndexPage";
import { TOOLS_INDEX_PL } from "@/content/pages/misc.pl";

const LOCALE = "pl" as const;
const ROUTE_ID = "pdf-tools" as const;

const route = requireRoute(LOCALE, ROUTE_ID);

export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
  locale: LOCALE,
  routeId: ROUTE_ID,
});

export default function Page() {
  return <ToolsIndexPage content={TOOLS_INDEX_PL} locale={LOCALE} />;
}
