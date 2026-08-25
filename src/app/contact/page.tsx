import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Container } from "@/components/primitives/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { StoreButtons } from "@/components/sections/StoreButtons";
import Link from "next/link";
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
        <h2 className="text-xl font-bold text-[--color-ink] mb-3">
          What to expect
        </h2>
        <p className="text-[--color-muted] max-w-2xl leading-relaxed">
          Email is the only support channel — there is no ticket system and no
          chatbot in front of it. Replies come from the same small team that
          builds the app, normally within two working days. Include your device
          and OS version for anything app-related; for a problem with a
          specific document, describe what you were doing rather than attaching
          the file, since we neither want nor need your documents.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[--color-ink] mb-3">
          What we cannot help with
        </h2>
        <p className="text-[--color-muted] max-w-2xl leading-relaxed">
          The browser tools on this site run entirely on your device, so
          nothing you process is ever transmitted to us. That also means we
          cannot recover a file you converted, resend a download, or look
          anything up on your behalf — there is no copy on our side to look at.
          If a tool failed on a particular PDF, tell us what the file was
          (scanned, password-protected, a filled form) and what the tool did.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[--color-ink] mb-3">
          Privacy and legal requests
        </h2>
        <p className="text-[--color-muted] max-w-2xl leading-relaxed">
          Data-protection questions, deletion requests and legal notices go to
          the same address and reach hrhelperg s.r.o. at the registered office
          above. Our{" "}
          <Link href="/privacy-policy" className="text-[--color-brand] hover:underline">
            privacy policy
          </Link>{" "}
          sets out what is and is not collected, and the{" "}
          <Link href="/terms" className="text-[--color-brand] hover:underline">
            terms of service
          </Link>{" "}
          cover use of the site and the tools.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-[--color-ink] mb-4">
          Try the app
        </h2>
        <StoreButtons size="md" />
      </div>
    </Container>
  );
}
