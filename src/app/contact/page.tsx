import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StoreButtons } from "@/components/sections/StoreButtons";
import { Mail, MapPin } from "lucide-react";

const route = getRoute("/contact");
export const metadata: Metadata = seo({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ContactPage() {
  return (
    <Container size="md" className="py-12">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
        Contact
      </h1>
      <p className="mt-4 text-lg text-[--color-muted] max-w-xl">
        Questions, partnerships, press, or feedback on the PDF Editor app — we
        read every email.
      </p>

      <ul className="mt-10 space-y-5 text-[--color-ink]">
        <li className="flex items-start gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--color-brand-soft] text-[--color-brand]">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="font-semibold">Email</p>
            <a
              href="mailto:info@hrhelperg.com"
              className="text-[--color-brand] hover:underline"
            >
              info@hrhelperg.com
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[--color-brand-soft] text-[--color-brand]">
            <MapPin className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="font-semibold">Registered office</p>
            <address className="not-italic text-[--color-muted]">
              hrhelperg s.r.o.
              <br />
              Husitská 502/36, Žižkov
              <br />
              130 00 Praha 3, Czech Republic
            </address>
          </div>
        </li>
      </ul>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-[--color-ink] mb-4">
          Try the app
        </h2>
        <StoreButtons size="md" />
      </div>
    </Container>
  );
}
