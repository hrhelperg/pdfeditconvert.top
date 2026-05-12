import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { RotatePdfTool } from "@/components/tools/RotatePdfTool";
import content from "@/content/tools/rotate-pdf";

const route = getRoute("/rotate-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<RotatePdfTool />} />;
}
