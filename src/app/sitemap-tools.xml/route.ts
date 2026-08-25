import { urlsetXml, XML_HEADERS } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return new Response(urlsetXml("tools"), { headers: XML_HEADERS });
}
