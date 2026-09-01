import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { ButtonLink } from "@/components/primitives/Button";
import { pathForWithFallback } from "@/lib/i18n/routeMap";
import type { Locale } from "@/lib/i18n/locales";
import type { RouteId } from "@/lib/i18n/routeIds";

export interface NotFoundCopy {
  eyebrow: string;
  h1: string;
  lead: string;
  openLabel: string;
  homeLabel: string;
  suggestions: { id: RouteId; label: string }[];
}

/** Shared 404 body, so the locale route groups and the global 404 agree. */
export function NotFoundBody({
  copy,
  locale,
}: {
  copy: NotFoundCopy;
  locale: Locale;
}) {
  return (
    <Container className="py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-[--color-brand]">
        {copy.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[--color-ink]">
        {copy.h1}
      </h1>
      <p className="mt-4 text-lg text-[--color-muted] max-w-xl">{copy.lead}</p>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
        {copy.suggestions.map((s) => (
          <li key={s.id}>
            <Link
              href={pathForWithFallback(locale, s.id)}
              className="block rounded-xl border border-[--color-border] bg-[--color-surface] p-4 hover:border-[--color-brand]"
            >
              <span className="font-semibold text-[--color-ink]">{s.label}</span>
              <span className="block text-sm text-[--color-muted]">
                {copy.openLabel}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <ButtonLink
          href={pathForWithFallback(locale, "")}
          variant="primary"
          size="lg"
        >
          {copy.homeLabel}
        </ButtonLink>
      </div>
    </Container>
  );
}

export const NOT_FOUND_EN: NotFoundCopy = {
  eyebrow: "404",
  h1: "Page not found",
  lead: "The page you’re looking for doesn’t exist or has moved. Try one of these instead:",
  openLabel: "Open guide →",
  homeLabel: "Back to homepage",
  suggestions: [
    { id: "pdf-editor", label: "PDF Editor" },
    { id: "compress-pdf", label: "Compress PDF" },
    { id: "merge-pdf", label: "Merge PDF" },
    { id: "sign-pdf", label: "Sign PDF" },
  ],
};

export const NOT_FOUND_PT_BR: NotFoundCopy = {
  eyebrow: "404",
  h1: "Página não encontrada",
  lead: "A página que você procura não existe ou foi movida. Tente uma destas:",
  openLabel: "Abrir →",
  homeLabel: "Voltar para a página inicial",
  suggestions: [
    { id: "pdf-editor", label: "Editor de PDF" },
    { id: "compress-pdf", label: "Comprimir PDF" },
    { id: "merge-pdf", label: "Juntar PDF" },
    { id: "sign-pdf", label: "Assinar PDF" },
  ],
};

export const NOT_FOUND_FR: NotFoundCopy = {
  eyebrow: "404",
  h1: "Page introuvable",
  lead: "La page que vous cherchez n'existe pas ou a été déplacée. Essayez plutôt l'une de celles-ci :",
  openLabel: "Ouvrir →",
  homeLabel: "Retour à l'accueil",
  suggestions: [
    { id: "pdf-editor", label: "Éditeur PDF" },
    { id: "compress-pdf", label: "Compresser un PDF" },
    { id: "merge-pdf", label: "Fusionner un PDF" },
    { id: "sign-pdf", label: "Signer un PDF" },
  ],
};

export const NOT_FOUND_ES: NotFoundCopy = {
  eyebrow: "404",
  h1: "Página no encontrada",
  lead: "La página que buscas no existe o se ha movido. Prueba con una de estas:",
  openLabel: "Abrir →",
  homeLabel: "Volver al inicio",
  suggestions: [
    { id: "pdf-editor", label: "Editor de PDF" },
    { id: "compress-pdf", label: "Comprimir PDF" },
    { id: "merge-pdf", label: "Unir PDF" },
    { id: "sign-pdf", label: "Firmar PDF" },
  ],
};

export const NOT_FOUND_DE: NotFoundCopy = {
  eyebrow: "404",
  h1: "Seite nicht gefunden",
  lead: "Die gesuchte Seite existiert nicht mehr oder wurde verschoben. Probier stattdessen eine davon:",
  openLabel: "Öffnen →",
  homeLabel: "Zurück zur Startseite",
  suggestions: [
    { id: "pdf-editor", label: "PDF-Editor" },
    { id: "compress-pdf", label: "PDF komprimieren" },
    { id: "merge-pdf", label: "PDF zusammenführen" },
    { id: "sign-pdf", label: "PDF unterschreiben" },
  ],
};

export const NOT_FOUND_IT: NotFoundCopy = {
  eyebrow: "404",
  h1: "Pagina non trovata",
  lead: "La pagina che cerchi non esiste più o è stata spostata. Prova una di queste:",
  openLabel: "Apri →",
  homeLabel: "Torna alla home",
  suggestions: [
    { id: "pdf-editor", label: "Editor di PDF" },
    { id: "compress-pdf", label: "Comprimi PDF" },
    { id: "merge-pdf", label: "Unisci PDF" },
    { id: "sign-pdf", label: "Firma PDF" },
  ],
};

export const NOT_FOUND_CS: NotFoundCopy = {
  eyebrow: "404",
  h1: "Stránka nenalezena",
  lead: "Stránka, kterou hledáš, neexistuje nebo byla přesunuta. Zkus místo toho některou z těchto:",
  openLabel: "Otevřít →",
  homeLabel: "Zpět na úvodní stránku",
  suggestions: [
    { id: "pdf-editor", label: "PDF Editor" },
    { id: "compress-pdf", label: "Komprimovat PDF" },
    { id: "merge-pdf", label: "Sloučit PDF" },
    { id: "sign-pdf", label: "Podepsat PDF" },
  ],
};

export const NOT_FOUND_AR: NotFoundCopy = {
  eyebrow: "404",
  h1: "الصفحة غير موجودة",
  lead: "الصفحة التي تبحث عنها لم تعد موجودة أو تم نقلها. جرّب واحدة من هذه بدلاً منها:",
  openLabel: "فتح ←",
  homeLabel: "العودة إلى الصفحة الرئيسية",
  suggestions: [
    { id: "pdf-editor", label: "محرر PDF" },
    { id: "compress-pdf", label: "ضغط PDF" },
    { id: "merge-pdf", label: "دمج PDF" },
    { id: "sign-pdf", label: "توقيع PDF" },
  ],
};

export const NOT_FOUND_RU: NotFoundCopy = {
  eyebrow: "404",
  h1: "Страница не найдена",
  lead: "Страница, которую вы ищете, больше не существует или была перемещена. Попробуйте одну из этих:",
  openLabel: "Открыть →",
  homeLabel: "На главную",
  suggestions: [
    { id: "pdf-editor", label: "Редактор PDF" },
    { id: "compress-pdf", label: "Сжать PDF" },
    { id: "merge-pdf", label: "Объединить PDF" },
    { id: "sign-pdf", label: "Подписать PDF" },
  ],
};

export const NOT_FOUND_PL: NotFoundCopy = {
  eyebrow: "404",
  h1: "Nie znaleziono strony",
  lead: "Strona, której szukasz, nie istnieje lub została przeniesiona. Spróbuj jednej z poniższych:",
  openLabel: "Otwórz →",
  homeLabel: "Powrót do strony głównej",
  suggestions: [
    { id: "pdf-editor", label: "PDF Editor" },
    { id: "compress-pdf", label: "Kompresuj PDF" },
    { id: "merge-pdf", label: "Scal PDF" },
    { id: "sign-pdf", label: "Podpisz PDF" },
  ],
};

export const NOT_FOUND_ID: NotFoundCopy = {
  eyebrow: "404",
  h1: "Halaman tidak ditemukan",
  lead: "Halaman yang Anda cari tidak ada atau telah dipindahkan. Coba salah satu berikut:",
  openLabel: "Buka →",
  homeLabel: "Kembali ke beranda",
  suggestions: [
    { id: "pdf-editor", label: "PDF Editor" },
    { id: "compress-pdf", label: "Kompres PDF" },
    { id: "merge-pdf", label: "Gabungkan PDF" },
    { id: "sign-pdf", label: "Tanda Tangan PDF" },
  ],
};
