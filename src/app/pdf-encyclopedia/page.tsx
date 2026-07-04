import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { KnowledgeHubPage } from "@/components/sections/KnowledgeHubPage";

const route = getRoute("/pdf-encyclopedia");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <KnowledgeHubPage />;
}
