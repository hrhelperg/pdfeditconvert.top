import type { Metadata } from "next";
import { SiteDocument } from "@/components/layout/SiteDocument";
import { rootMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = rootMetadata("pl");

export default function PolishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="pl">{children}</SiteDocument>;
}
