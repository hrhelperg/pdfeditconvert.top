import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { ToolPage } from "@/components/sections/ToolPage";
import { PdfToWordTool } from "@/components/tools/PdfToWordTool";
import content from "@/content/tools/pdf-to-word";

const route = getRoute("/pdf-to-word");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function Page() {
  return <ToolPage content={content} toolSlot={<PdfToWordTool />} />;
}
