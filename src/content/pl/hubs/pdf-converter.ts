import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-converter",
  hero: {
    eyebrow: "Konwerter PDF",
    h1: "Konwertuj pliki PDF do formatu, którego naprawdę potrzebujesz.",
    highlight: "naprawdę",
    lead: "PDF na Word do edycji. PDF na JPG do aplikacji do wiadomości. Word i obrazy z powrotem na PDF do archiwizacji. Jedna aplikacja, szybkie rezultaty, bez przesyłania na przypadkowe serwery.",
    primaryCta: { label: "Otwórz aplikację", href: SITE.app.appStore },
  },
  problem: {
    heading: "Chaos konwersji, w który wpada większość ludzi",
    paragraphs: [
      "Pliki PDF są świetne, dopóki ktoś nie poprosi o plik w Word. Albo dopóki aplikacja do wiadomości nie zacznie akceptować wyłącznie JPG. Albo dopóki nie trzeba połączyć paragonów (czyli obrazów) z wyceną (czyli plikiem PDF) w jeden dokument gotowy do wysłania.",
      "Publiczne strony do konwersji PDF wykonują to zadanie — i tworzą nowe problemy. Przesyłają Twój plik na serwer, czasem przechowują go godzinami, często blokują konwersję większych plików za opłatą i rzadko dają czysty plik DOCX. Układ się przesuwa, czcionki zostają zastąpione innymi, tabele się rozjeżdżają.",
      "Natywny konwerter wykonuje pracę na Twoim urządzeniu. Ten sam mechanizm, który układa plik PDF, odbudowuje go w docelowym formacie. Tabele pozostają wyrównane, czcionki są dobierane inteligentnie, a Ty nigdy nie oddajesz wrażliwej umowy darmowej stronie, która utrzymuje się z reklam.",
    ],
  },
  features: {
    heading: "Konwertuj w obie strony",
    items: [
      {
        icon: "FileText",
        title: "PDF → Word (DOCX)",
        body: "Edytowalne dokumenty Word, które zachowują nienaruszony układ, czcionki, tabele i obrazy.",
      },
      {
        icon: "Image",
        title: "PDF → JPG i PNG",
        body: "Eksportuj pojedyncze strony albo każdą stronę jako osobny obraz, gotowy do wysłania w wiadomości lub użycia w prezentacji.",
      },
      {
        icon: "Sheet",
        title: "PDF → Excel",
        body: "Wyodrębniaj tabele do prawdziwych komórek XLSX zamiast wklejać zrzuty ekranu.",
      },
      {
        icon: "FilePlus",
        title: "Word i obrazy → PDF",
        body: "Zamień plik DOCX, zdjęcie paragonu albo zrzut ekranu w czysty plik PDF w kilka sekund.",
      },
      {
        icon: "ScanText",
        title: "OCR dla zeskanowanych plików PDF",
        body: "Uruchom rozpoznawanie tekstu na zeskanowanych dokumentach, aby wynik dało się zaznaczać i przeszukiwać.",
      },
      {
        icon: "Layers",
        title: "Konwersja wsadowa",
        body: "Ustaw w kolejce kilka plików naraz. Aplikacja przetwarza je lokalnie w tle.",
      },
    ],
  },
  steps: {
    heading: "Jak przekonwertować plik PDF na telefonie",
    items: [
      {
        title: "Otwórz aplikację PDF Editor",
        body: "Dotknij kafelka Konwertuj na ekranie głównym.",
      },
      {
        title: "Wybierz plik źródłowy",
        body: "Wybierz plik PDF, DOCX, obraz albo dowolny dokument obsługiwany przez aplikację.",
      },
      {
        title: "Wybierz format wyjściowy",
        body: "Word, Excel, JPG, PNG, PowerPoint — cokolwiek jest potrzebne odbiorcy.",
      },
      {
        title: "Dotknij Konwertuj",
        body: "Konwersja odbywa się na urządzeniu. Większość plików kończy się w kilka sekund.",
      },
      {
        title: "Zapisz lub udostępnij",
        body: "Zapisz w Plikach, zsynchronizuj z Drive lub iCloud, albo udostępnij bezpośrednio przez Mail lub aplikację do wiadomości.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Konwersja w ruchu",
    body: "Realistyczne zadanie konwersji to nie „zamień to roczne sprawozdanie na dokument Word\". To raczej „zamień to zdjęcie paragonu z hotelu na PDF, który mogę załączyć do formularza rozliczeniowego\" albo „wyciągnij te trzy tabele z wyceny, żebym mógł wkleić je do arkusza kalkulacyjnego\". Oba dzieją się na telefonie, między innymi sprawami, i muszą zostać zrobione natychmiast.",
  },
  faq: [
    {
      q: "Jakie formaty są obsługiwane?",
      a: "W obie strony: Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG i zwykły tekst. Word, obrazy i kilka popularnych formatów można zamienić na PDF.",
    },
    {
      q: "Jak dokładna jest konwersja z PDF na Word?",
      a: "Bardzo dokładna w przypadku plików PDF zawierających tekst — tabele, listy i nagłówki są zachowywane. Złożone układy wielokolumnowe mogą wymagać drobnych poprawek. Zeskanowane pliki PDF wymagają najpierw OCR.",
    },
    {
      q: "Czy konwersja odbywa się offline?",
      a: "Standardowe konwersje działają lokalnie. Niektóre zaawansowane funkcje (OCR wysokiej jakości dla części języków) mogą korzystać z chmury — aplikacja informuje Cię o tym, zanim cokolwiek wyśle.",
    },
    {
      q: "Czy moje czcionki przetrwają konwersję?",
      a: "Aplikacja dobiera czcionki inteligentnie. Jeśli dana czcionka nie jest zainstalowana na urządzeniu docelowym, używany jest najbliższy odpowiednik, dzięki czemu dokument nadal wygląda poprawnie.",
    },
    {
      q: "Czy mogę konwertować chronione pliki PDF?",
      a: "Jeśli plik PDF jest chroniony hasłem, przed konwersją trzeba je wpisać. Pliki PDF z ograniczeniami edycji zwykle da się przekonwertować, jeśli znane jest hasło otwarcia.",
    },
  ],
  related: [
    { label: "PDF czy DOCX — co wybrać", path: "/guides/pdf-vs-docx" },
    { label: "Porównanie PDF i JPG", path: "/compare/pdf-vs-jpg" },
    { label: "Edytuj pliki PDF po konwersji", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Konwertuj pliki PDF bez ich przesyłania.",
    sub: "Bezpłatnie na iOS i Androidzie. Konwersje odbywają się na urządzeniu.",
  },
};

export default content;
