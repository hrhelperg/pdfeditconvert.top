import type { Metadata } from "next";
import { SiteDocument } from "@/components/layout/SiteDocument";
import { rootMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = rootMetadata("ru");

export default function RussianRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="ru">{children}</SiteDocument>;
}
