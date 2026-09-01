import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-document-workflows",
  h1: "Sposoby pracy z dokumentami stawiające na prywatność (od początku do końca bez przesyłania)",
  description:
    "Cały sposób pracy z dokumentami – przechwytywanie, edycja, podpis, wysyłka, archiwizacja – który utrzymuje pliki na Twoich urządzeniach i z dala od serwerów firm trzecich. Realistyczny kształt i konkretne narzędzia.",
  updated: "2026-05-29",
  intro: [
    "Większość sposobów pracy z dokumentami przecieka. Skanujesz wrażliwy papier jedną aplikacją, przesyłasz go do kompresji na jakiejś stronie, wysyłasz mailem przez zewnętrzne narzędzie do „ulepszania”, i na koniec masz trzy albo cztery serwery przechowujące kopie czegoś, co miało zostać tylko Twoje. Każdy krok jest wygodny; skumulowany koszt prywatności jest duży i niewidoczny.",
    "Sposób pracy stawiający na prywatność nie odrzuca nowoczesnych narzędzi – wybiera te, które nie przenoszą Twoich plików. Przechwytywanie odbywa się aparatem Twojego telefonu. Kompresja i edycja – w Twojej przeglądarce. Podpisywanie – w aplikacji na telefonie. Transfer – kanałem, któremu ufasz. W żadnym momencie dokument nie ląduje na serwerze obcej firmy.",
    "Ten poradnik opisuje ten kompletny kształt, narzędzia pasujące do każdego kroku i miejsca, gdzie lokalne przetwarzanie naprawdę nie wystarcza (a jest ich mniej, niż większość osób sądzi). To realistyczny sposób pracy stawiający na prywatność, nie absolutystyczny.",
  ],
  steps: [
    {
      title: "Przechwytywanie: skanuj lokalnie telefonem",
      body: "Skanuj do PDF na telefonie uruchamia aparat i wykrywanie strony na samym urządzeniu. Bez przesyłania, bez przetwarzania w chmurze. PDF, który powstaje, zaczyna i pozostaje lokalny, dopóki sam nie zdecydujesz się go udostępnić.",
    },
    {
      title: "Edytuj i porządkuj w karcie przeglądarki",
      body: "Kompresuj PDF, Zmień kolejność stron PDF, Wyodrębnij strony PDF, Obróć PDF, Dodaj znak wodny do PDF – wszystkie działają w przeglądarce. Plik odczytuje JavaScript na Twoim urządzeniu; serwer nigdy nie widzi treści.",
    },
    {
      title: "Podpisz prawdziwym podpisem, lokalnie",
      body: "Podpisz PDF albo aplikacja PDF Editor rejestruje narysowany podpis na Twoim urządzeniu i osadza go w pliku. Żadna zewnętrzna platforma do podpisywania nie widzi dokumentu.",
    },
    {
      title: "Udostępnij zaufanym kanałem",
      body: "AirDrop, Signal, zaszyfrowana poczta, komunikator z szyfrowaniem end-to-end. Kanał szyfruje transfer; odbiorca otrzymuje plik bez przechodzenia przez pośrednika, który mógłby go odczytać.",
    },
    {
      title: "Archiwizuj na zaszyfrowanym dysku",
      body: "Lokalny dysk z pełnym szyfrowaniem albo kopia zapasowa w chmurze z szyfrowaniem zero-knowledge. Nie przechowuj wrażliwych PDF-ów w zwykłej chmurze bez szyfrowania – to oznacza, że serwer czyta Twoje pliki.",
    },
    {
      title: "Przeglądaj i usuwaj według harmonogramu",
      body: "Co kwartał przejrzyj wrażliwe pliki PDF. Usuń to, czego już nie potrzebujesz. Każdy zachowany wrażliwy plik to niewielkie, ale ciągłe ryzyko; ograniczenie liczby plików zmniejsza narażenie.",
    },
  ],
  tips: [
    "Przechwytywanie, edycja i podpisywanie mogą odbyć się na jednym urządzeniu. Im mniej przeskoków między urządzeniami, tym mniejszy obszar możliwego wycieku.",
    "Zanim zaufasz narzędziu opisanemu jako „działające w przeglądarce”, sprawdź, czy naprawdę działa lokalnie. Zakładka sieć w narzędziach deweloperskich to najszybszy sposób weryfikacji.",
    "Szyfruj wrażliwe PDF-y hasłem nawet wtedy, gdy udostępniasz je zaszyfrowanym kanałem. To zasada obrony warstwowej.",
    "Unikaj serwisów typu „wyślij link” przy wrażliwych materiałach. Link to tylko uchwyt po stronie serwera; sam plik leży na cudzym dysku.",
    "Nie drukuj wrażliwych PDF-ów, chyba że musisz. Kolejka drukarki i sam wydruk to dwie dodatkowe kopie, które musisz kontrolować.",
  ],
  mobileNote:
    "Sposoby pracy stawiające na prywatność są na telefonie łatwiejsze, niż się wydaje. Aplikacja PDF Editor obsługuje przechwytywanie, edycję, podpis i udostępnianie lokalnie na iOS i Androidzie, więc wrażliwy dokument może przejść z papieru do odbiorcy, nigdy nie dotykając serwera firmy trzeciej.",
  faq: [
    {
      q: "Czy realny sposób pracy naprawdę może pozostać lokalny?",
      a: "Przy większości kroków tak. Przechwytywanie, kompresja, edycja, podpis i zwykły transfer mogą odbyć się bez przesyłania plików. Niektóre operacje (wysokiej jakości OCR, zaawansowana cenzura) czasem wymagają wsparcia serwera; jeśli ich potrzebujesz, wybieraj takie narzędzia ostrożnie.",
    },
    {
      q: "Czy to wszystko nie jest przesadą?",
      a: "Nie dla wrażliwych materiałów. Sposób pracy oparty na przesyłaniu wszystkiego wszędzie sprawdzał się, gdy dokumenty były mniej wrażliwe, a wycieki rzadsze. Oba te fakty się zmieniły. Sposób pracy stawiający na prywatność zajmuje tyle samo czasu, gdy tylko wejdzie w nawyk.",
    },
    {
      q: "Skąd mam wiedzieć, że narzędzie w przeglądarce naprawdę działa lokalnie?",
      a: "Otwórz narzędzia deweloperskie, zakładkę sieć, dodaj plik. Jeśli nie widzisz dużego żądania wychodzącego, narzędzie przetwarza plik lokalnie. Narzędzia na tej stronie działają właśnie tak.",
    },
    {
      q: "A co z kopiami zapasowymi?",
      a: "Kopia zapasowa w chmurze z szyfrowaniem zero-knowledge (dostawca nie może odczytać Twoich plików) jest w porządku. Zwykła kopia zapasowa wrażliwych PDF-ów w chmurze nie jest prywatna – dostawca może odczytać wszystko.",
    },
    {
      q: "Gdzie ten sposób pracy się załamuje?",
      a: "W dwóch miejscach: gdy proces wymaga konkretnej płatnej platformy (branże regulowane) i gdy odbiorca po swojej stronie korzysta ze sposobu pracy opartego na przesyłaniu. Prywatność zależy od obu stron.",
    },
  ],
  related: [
    { label: "Narzędzia PDF — działają w przeglądarce, bez przesyłania", path: "/pdf-tools" },
    { label: "Narzędzia PDF stawiające na prywatność", path: "/guides/privacy-first-pdf-tools" },
    { label: "Lokalne przetwarzanie PDF w przeglądarce, wyjaśnione", path: "/guides/local-browser-pdf-processing-explained" },
    { label: "Zalety przetwarzania dokumentów w przeglądarce", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "Narzędzia PDF — darmowe, w przeglądarce", path: "/pdf-tools" },
};

export default content;
