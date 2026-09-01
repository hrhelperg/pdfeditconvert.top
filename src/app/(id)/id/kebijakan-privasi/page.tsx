import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { requireRoute } from "@/lib/i18n/routeMap";
import { LegalPage } from "@/components/sections/LegalPage";
import { PRIVACY_ID } from "@/content/pages/misc.id";

const LOCALE = "id" as const;
const ROUTE_ID = "privacy-policy" as const;

const route = requireRoute(LOCALE, ROUTE_ID);

export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
  locale: LOCALE,
  routeId: ROUTE_ID,
});

export default function Page() {
  return <LegalPage content={PRIVACY_ID} locale={LOCALE} />;
}
