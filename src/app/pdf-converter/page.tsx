import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { HubPage } from "@/components/sections/HubPage";
import content from "@/content/hubs/pdf-converter";

const route = getRoute("/pdf-converter");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <HubPage content={content} />;
}
