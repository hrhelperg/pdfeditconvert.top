import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { requireRoute } from "@/lib/i18n/routeMap";
import { getHubContent } from "@/content/registry";
import { HubPage } from "@/components/sections/HubPage";

const LOCALE = "es" as const;
const ROUTE_ID = "pdf-for-students" as const;

const route = requireRoute(LOCALE, ROUTE_ID);

export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
  locale: LOCALE,
  routeId: ROUTE_ID,
});

export default function Page() {
  const content = getHubContent(LOCALE, ROUTE_ID);
  if (!content) throw new Error(`Missing ${LOCALE} hub content for ${ROUTE_ID}`);
  return <HubPage content={content} locale={LOCALE} />;
}
