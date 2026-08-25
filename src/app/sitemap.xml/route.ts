import { sitemapIndexXml, XML_HEADERS } from "@/lib/sitemap";

export const dynamic = "force-static";

/** Sitemap index — the single URL submitted to Search Console. */
export function GET() {
  return new Response(sitemapIndexXml(), { headers: XML_HEADERS });
}
