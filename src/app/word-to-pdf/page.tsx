import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { WordToPdfTool } from "@/components/tools/WordToPdfTool";
import content from "@/content/tools/word-to-pdf";

const route = getRoute("/word-to-pdf");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<WordToPdfTool />} />;
}
