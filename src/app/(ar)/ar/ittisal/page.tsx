import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { requireRoute } from "@/lib/i18n/routeMap";
import { ContactPage } from "@/components/sections/ContactPage";
import { CONTACT_AR } from "@/content/pages/misc.ar";

const LOCALE = "ar" as const;
const ROUTE_ID = "contact" as const;

const route = requireRoute(LOCALE, ROUTE_ID);

export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
  locale: LOCALE,
  routeId: ROUTE_ID,
});

export default function Page() {
  return <ContactPage content={CONTACT_AR} locale={LOCALE} />;
}
