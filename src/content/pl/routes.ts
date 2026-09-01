import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { PL_GUIDE_ROUTES } from "@/content/pl/routes.guides";

/**
 * Polish route manifest — the localization manifest for pl.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent Polish URL after the `/pl` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/pl-terminology.md):
 *
 * - ASCII-normalized, diacritics stripped: "kompresuj-pdf". Prose keeps
 *   every diacritic (ą ć ę ł ń ó ś ź ż); slugs do not.
 * - Imperative form for tool slugs to match the button label
 *   ("kompresuj-pdf" for "Kompresuj PDF").
 * - Translated section prefixes: poradniki/, porownania/,
 *   przypadki-uzycia/.
 */
export const PL_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — edytuj, konwertuj, podpisuj i skanuj PDF na telefonie",
    description:
      "Kompleksowe rozwiązanie do PDF w pracy, na studiach i w codziennym życiu. Edytuj, konwertuj, kompresuj, łącz, podpisuj i skanuj pliki PDF z telefonu dzięki aplikacji PDF Editor na iOS i Android.",
  },

  // Hubs
  {
    id: "pdf-editor",
    slug: "edytor-pdf",
    title: "Edytor PDF — edytuj tekst, obrazy i strony na telefonie",
    description:
      "Edytuj pliki PDF na iPhonie lub Androidzie: zmieniaj tekst, dodawaj obrazy, zmieniaj kolejność stron i podpisuj dokumenty. Zobacz, jak aplikacja PDF Editor ułatwia edycję na telefonie.",
  },
  {
    id: "pdf-converter",
    slug: "konwerter-pdf",
    title: "Konwerter PDF — konwertuj do Word, JPG, PNG i innych formatów",
    description:
      "Konwertuj pliki PDF do Word, Excel, JPG, PNG i z powrotem. Poznaj najprostszy sposób pracy na telefonie z aplikacją PDF Editor na iOS i Android.",
  },
  {
    id: "sign-pdf",
    slug: "podpisz-pdf",
    title: "Podpisz PDF — dodaj podpis elektroniczny na telefonie",
    description:
      "Podpisuj pliki PDF z telefonu odręcznym lub wpisanym podpisem. Akceptowane w większości procesów. Wypróbuj aplikację PDF Editor.",
  },
  {
    id: "scan-to-pdf",
    slug: "skanuj-do-pdf",
    title: "Skanuj do PDF — zamień papierowe dokumenty w czyste pliki PDF",
    description:
      "Skanuj dokumenty, dowody i paragony aparatem telefonu i zamień je w czyste, przeszukiwalne pliki PDF. Aplikacja PDF Editor sama wykrywa krawędzie strony.",
  },
  {
    id: "pdf-security",
    slug: "bezpieczenstwo-pdf",
    title: "Bezpieczeństwo PDF — hasła i szyfrowanie plików PDF",
    description:
      "Chroń poufne pliki PDF hasłami i szyfrowaniem. Praktyczny przewodnik po zabezpieczaniu dokumentów na iPhonie i Androidzie.",
  },
  {
    id: "pdf-for-business",
    slug: "pdf-dla-firm",
    title: "PDF dla firm — umowy, faktury i procesy",
    description:
      "Jak małe zespoły wykorzystują pliki PDF do umów, faktur i akceptacji. Nowoczesne procesy oparte na telefonie z aplikacją PDF Editor.",
  },
  {
    id: "pdf-for-students",
    slug: "pdf-dla-studentow",
    title: "PDF dla studentów — notatki, zakreślenia i materiały do nauki",
    description:
      "Wykorzystaj pliki PDF do notatek z wykładów, zakreśleń i materiałów do nauki. Sprawdzone sposoby pracy na telefonie z aplikacją PDF Editor na iOS i Android.",
  },
  {
    id: "pdf-forms",
    slug: "formularze-pdf",
    title: "Formularze PDF — wypełniaj, podpisuj i zarządzaj plikami PDF",
    description:
      "Dowiedz się, jak działają formularze PDF i jak je wypełniać, podpisywać, tworzyć i naprawiać. Centrum wiedzy o formularzach interaktywnych i nieinteraktywnych, na komputerze i telefonie.",
  },

  // Guides
  {
    id: "guides",
    slug: "poradniki",
    title: "Poradniki PDF — instrukcje i samouczki krok po kroku",
    description:
      "Praktyczne poradniki PDF stworzone z myślą o telefonie: edytuj, konwertuj, kompresuj, łącz, podpisuj i zabezpieczaj dokumenty na iPhonie i Androidzie.",
  },

  // Compare
  {
    id: "compare/pdf-vs-docx",
    slug: "porownania/pdf-czy-docx",
    title: "PDF czy DOCX — porównanie funkcja po funkcji",
    description:
      "Porównaj PDF i DOCX pod kątem edytowalności, wierności, podpisywania, bezpieczeństwa i udostępniania. Wybierz odpowiedni format do zadania.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "porownania/pdf-czy-jpg",
    title: "PDF czy JPG — kiedy używać którego formatu",
    description:
      "PDF czy JPG: kiedy skanować, kiedy fotografować. Porównanie jakości, rozmiaru pliku, OCR i dopasowania do procesu pracy z dokumentami.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "porownania/aplikacja-pdf-czy-narzedzia-online",
    title: "Aplikacja PDF czy narzędzia online — co jest lepsze?",
    description:
      "Natywne aplikacje PDF a narzędzia w przeglądarce: porównanie szybkości, prywatności i dostępu offline.",
  },

  // Use cases
  {
    id: "use-cases/freelancers",
    slug: "przypadki-uzycia/freelancerzy",
    title: "PDF Editor dla freelancerów — oferty i podpisane dokumenty",
    description:
      "Sposoby pracy, które kochają freelancerzy: oferty, podpisane umowy i faktury — wszystko z telefonu.",
  },
  {
    id: "use-cases/remote-work",
    slug: "przypadki-uzycia/praca-zdalna",
    title: "PDF Editor do pracy zdalnej — dokumenty wszędzie",
    description:
      "Pracuj z dokumentami w podróży: skanuj, podpisuj i udostępniaj pliki PDF z dowolnego urządzenia, w dowolnym miejscu.",
  },

  // Tools (browser-based, free, no upload)
  {
    id: "pdf-tools",
    slug: "narzedzia-pdf",
    title: "Darmowe narzędzia PDF — działają w przeglądarce, bez przesyłania",
    description:
      "Darmowe narzędzia PDF działające w całości w przeglądarce. Łącz, dziel, obracaj, dodawaj znak wodny, konwertuj obrazy do PDF i PDF do obrazów — pliki nigdy nie opuszczają Twojego urządzenia.",
  },
  {
    id: "compress-pdf",
    slug: "kompresuj-pdf",
    title: "Kompresuj PDF — zmniejsz rozmiar pliku w przeglądarce (za darmo, bez przesyłania)",
    description:
      "Zmniejsz rozmiar pliku PDF prosto w przeglądarce, z regulowanym poziomem kompresji. Za darmo, bez rejestracji, bez przesyłania — plik nigdy nie opuszcza Twojego urządzenia.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-do-word",
    title: "PDF do Word — konwertuj PDF do edytowalnego DOCX w przeglądarce",
    description:
      "Wyciągnij tekst z pliku PDF do edytowalnego dokumentu Word (.docx) prosto w przeglądarce. Za darmo, bez przesyłania — uczciwa konwersja tekstu, a nie obietnica idealnego układu.",
  },
  {
    id: "word-to-pdf",
    slug: "word-do-pdf",
    title: "Word do PDF — konwertuj DOCX lub TXT do PDF w przeglądarce",
    description:
      "Zamień plik Word .docx lub .txt w czysty plik PDF prosto w przeglądarce. Za darmo, bez rejestracji, bez przesyłania — dokument nigdy nie opuszcza Twojego urządzenia.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "zmien-kolejnosc-stron-pdf",
    title: "Zmień kolejność stron PDF — w przeglądarce (za darmo, bez przesyłania)",
    description:
      "Podejrzyj każdą stronę i zmień kolejność w PDF prostymi kontrolkami, a potem pobierz uporządkowany plik. Za darmo, bez rejestracji, bez przesyłania — pliki zostają na Twoim urządzeniu.",
  },
  {
    id: "extract-pdf-pages",
    slug: "wyodrebnij-strony-pdf",
    title: "Wyodrębnij strony PDF — zapisz wybrane strony jako nowy PDF (za darmo, bez przesyłania)",
    description:
      "Wybierz konkretne strony lub zakresy i pobierz nowy PDF zawierający tylko je, prosto w przeglądarce. Za darmo, bez rejestracji, bez przesyłania — pliki nigdy nie opuszczają urządzenia.",
  },
  {
    id: "merge-pdf",
    slug: "polacz-pdf",
    title: "Połącz PDF — scal pliki w przeglądarce (za darmo, bez przesyłania)",
    description:
      "Połącz wiele plików PDF w jeden dokument prosto w przeglądarce. Za darmo, bez rejestracji, bez przesyłania — pliki nigdy nie opuszczają Twojego urządzenia.",
  },
  {
    id: "split-pdf",
    slug: "podziel-pdf",
    title: "Podziel PDF — wyodrębnij strony w przeglądarce (za darmo, bez przesyłania)",
    description:
      "Podziel plik PDF według zakresu stron prosto w przeglądarce. Za darmo, bez rejestracji, bez przesyłania — pliki zostają na Twoim urządzeniu.",
  },
  {
    id: "image-to-pdf",
    slug: "obraz-do-pdf",
    title: "Obraz do PDF — konwertuj JPG, PNG, WebP do PDF w przeglądarce",
    description:
      "Połącz zdjęcia JPG, PNG i WebP w jeden plik PDF prosto w przeglądarce. Za darmo, bez przesyłania, bez rejestracji — pliki zostają na Twoim urządzeniu.",
  },
  {
    id: "rotate-pdf",
    slug: "obroc-pdf",
    title: "Obróć PDF — popraw orientację stron w przeglądarce",
    description:
      "Obróć wszystkie lub wybrane strony PDF o 90°, 180° lub 270° prosto w przeglądarce. Za darmo i prywatnie — pliki nigdy nie opuszczają Twojego urządzenia.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-do-obrazow",
    title: "PDF do obrazów — eksportuj strony PDF jako PNG lub JPG",
    description:
      "Zamień dowolny PDF na obrazy PNG lub JPG, strona po stronie, w przeglądarce. Za darmo, bez przesyłania, bez konta — działa w całości na Twoim urządzeniu.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "dodaj-znak-wodny-do-pdf",
    title: "Dodaj znak wodny do PDF — za darmo, prywatnie, w przeglądarce",
    description:
      "Dodaj tekstowy znak wodny do każdej strony PDF prosto w przeglądarce. Za darmo, bez przesyłania, bez rejestracji — pliki zostają na Twoim urządzeniu.",
  },

  // Legal & meta
  {
    id: "privacy-policy",
    slug: "polityka-prywatnosci",
    title: "Polityka prywatności",
    description:
      "Jak pdfeditconvert.top i hrhelperg s.r.o. przetwarzają Twoje dane.",
  },
  {
    id: "terms",
    slug: "regulamin",
    title: "Regulamin",
    description: "Zasady korzystania z pdfeditconvert.top.",
  },
  {
    id: "contact",
    slug: "kontakt",
    title: "Skontaktuj się — PDF Editor od hrhelperg s.r.o.",
    description:
      "Skontaktuj się z zespołem PDF Editor. E-mail: info@hrhelperg.com.",
  },

  ...PL_GUIDE_ROUTES,
];
