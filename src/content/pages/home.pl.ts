import type { HomeContent } from "@/types/content";

/**
 * Polish homepage copy. Terminology policy: docs/localization/pl-terminology.md.
 */
export const HOME_PL: HomeContent = {
  heroEyebrow: "Darmowe narzędzia PDF w przeglądarce",
  heroH1Before: "Konwertuj, scalaj i edytuj pliki PDF ",
  heroH1Highlight: "w kilka sekund",
  heroH1After: "",
  heroLead:
    "Darmowe narzędzia PDF działające w przeglądarce, z prywatnym, lokalnym przetwarzaniem – nic nie trafia na serwer.",
  trust: [
    "Pliki są przetwarzane lokalnie w Twojej przeglądarce",
    "Bez przesyłania, bez konta, bez znaku wodnego",
    "Za darmo – działa na telefonie i komputerze",
  ],
  browseAllToolsLabel: "Przeglądaj wszystkie narzędzia PDF →",
  toolsEyebrow: "Za darmo, w przeglądarce",
  toolsHeading: "Każde narzędzie PDF, którego potrzebujesz – bez przesyłania plików.",
  toolsLead:
    "Scalaj, dziel, obracaj, znakuj i konwertuj pliki PDF bez opuszczania strony. Każde narzędzie działa lokalnie, w Twojej przeglądarce.",
  toolBadge: "Darmowe narzędzie",
  tools: [
    { id: "image-to-pdf", label: "Obraz na PDF", desc: "Połącz pliki JPG, PNG i WebP w jeden plik PDF." },
    { id: "merge-pdf", label: "Scal PDF", desc: "Połącz pliki PDF w jeden dokument." },
    { id: "split-pdf", label: "Podziel PDF", desc: "Wyodrębnij strony według zakresu." },
    { id: "rotate-pdf", label: "Obróć PDF", desc: "Popraw źle obrócone strony." },
    { id: "pdf-to-images", label: "PDF na obrazy", desc: "Eksportuj strony jako PNG lub JPG." },
    { id: "add-watermark-to-pdf", label: "Dodaj znak wodny", desc: "Umieść tekst na każdej stronie." },
    { id: "compress-pdf", label: "Kompresuj PDF", desc: "Zmniejsz rozmiar pliku do e-maila i przesyłania." },
    { id: "pdf-to-word", label: "PDF na Word", desc: "Wyodrębnij tekst do edytowalnego pliku .docx." },
    { id: "word-to-pdf", label: "Word na PDF", desc: "Zamień plik .docx lub .txt w czysty plik PDF." },
    {
      id: "reorder-pdf-pages",
      label: "Zmień kolejność stron PDF",
      desc: "Zobacz podgląd, zmień kolejność stron, a potem pobierz plik.",
    },
    {
      id: "extract-pdf-pages",
      label: "Wyodrębnij strony PDF",
      desc: "Zapisz wybrane strony lub zakresy jako nowy plik PDF.",
    },
  ],
  appBandEyebrow: "Także na iPhone i Android · pięć narzędzi na co dzień",
  featureBand: [
    { key: "edit", label: "Edytuj", sub: "Tekst, obrazy, strony" },
    { key: "convert", label: "Konwertuj", sub: "Word, JPG, PNG" },
    { key: "secure", label: "Zabezpiecz", sub: "Ochrona hasłem" },
    { key: "scan", label: "Skanuj", sub: "Papier na PDF" },
    { key: "organize", label: "Organizuj", sub: "Zmiana kolejności, podział" },
  ],
  hubsHeading: "Wszystko, co robisz z plikami PDF – wyjaśnione.",
  hubsLead:
    "Praktyczne poradniki i sposoby pracy dla tego, co ludzie naprawdę robią z plikami PDF na co dzień.",
  hubs: [
    { id: "pdf-editor", label: "PDF Editor", desc: "Edytuj tekst, obrazy i strony." },
    { id: "pdf-converter", label: "Konwerter PDF", desc: "Konwertuj do Word, JPG, PNG i innych formatów." },
    { id: "compress-pdf", label: "Kompresuj PDF", desc: "Zmniejszaj pliki bez utraty jakości." },
    { id: "sign-pdf", label: "Podpisz PDF", desc: "Dodaj podpis prosto z telefonu." },
    { id: "scan-to-pdf", label: "Skanuj do PDF", desc: "Zamień papier w czyste pliki PDF." },
    { id: "pdf-security", label: "Bezpieczeństwo PDF", desc: "Zabezpiecz dokumenty hasłem." },
    { id: "pdf-for-business", label: "PDF dla firm", desc: "Umowy i faktury zawsze pod ręką." },
    { id: "pdf-for-students", label: "PDF dla studentów", desc: "Notatki, zaznaczenia i materiały do nauki." },
    { id: "pdf-forms", label: "Formularze PDF", desc: "Wypełniaj, podpisuj i zapisuj interaktywne formularze PDF." },
  ],
  guidesHeading: "Najczęściej czytane poradniki",
  guideBadge: "Poradnik",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "Jak edytować PDF na iPhone" },
    { id: "guides/how-to-edit-pdf-on-android", label: "Jak edytować PDF na Android" },
    { id: "guides/how-to-compress-pdf", label: "Jak skompresować PDF" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "Jak podpisać PDF na telefonie" },
  ],
  browseAllGuidesLabel: "Przeglądaj {count} poradników PDF →",
  finalCtaHeading: "Zabierz PDF Editor ze sobą.",
  finalCtaSub: "Za darmo na iOS i Android. Nie musisz zakładać konta, aby zacząć.",
  faq: [
    {
      q: "Czy PDF Editor jest darmowy?",
      a: "Tak. Podstawowe funkcje edycji, skanowania, kompresji i podpisywania są darmowe. Niektóre zaawansowane funkcje odblokowuje PDF Editor Pro.",
    },
    {
      q: "Czy działa bez połączenia z internetem?",
      a: "Podstawowa edycja, zarządzanie stronami, podpisywanie i kompresja działają offline. Synchronizacja z chmurą i OCR mogą wymagać połączenia z internetem.",
    },
    {
      q: "Jakie urządzenia są obsługiwane?",
      a: "PDF Editor jest dostępny na iPhone i iPad (iOS 16 lub nowszy) oraz na telefony i tablety z Androidem (Android 9 lub nowszy).",
    },
    {
      q: "Czy moje pliki są prywatne?",
      a: "Tak. Pliki pozostają na Twoim urządzeniu, chyba że sam zdecydujesz się je udostępnić. Twoje dokumenty nie trafiają na nasze serwery.",
    },
    {
      q: "Czy mogę tego używać do dokumentów prawnych?",
      a: "Wiele osób podpisuje i udostępnia umowy za pomocą PDF Editor. Nie udzielamy porad prawnych – przed poleganiem na podpisie elektronicznym w przypadku ważnych dokumentów sprawdź lokalne przepisy dotyczące takich podpisów.",
    },
  ],
};
