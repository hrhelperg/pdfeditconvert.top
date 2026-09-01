import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-iphone",
  h1: "Jak przekonwertować zdjęcia do PDF na iPhonie (problem z HEIC)",
  description:
    "Zamień zdjęcia z iPhone'a w jeden plik PDF – z uwzględnieniem problemu z formatem HEIC, który wielu zaskakuje. Droga przez przeglądarkę i szybsza droga przez aplikację.",
  updated: "2026-05-23",
  intro: [
    "Zamiana zdjęć w PDF na iPhonie to coś, po co ludzie sięgają bez przerwy — sfotografowana umowa, stos paragonów do rozliczenia wydatków, obie strony dowodu do formularza. Zadanie jest proste, ale jest jeden haczyk specyficzny dla iPhone'a, który powoduje większość frustracji: domyślnie iPhone zapisuje zdjęcia jako HEIC, a nie JPG, a wiele narzędzi nie odczytuje HEIC.",
    "Ten poradnik pokazuje dwie sprawdzone drogi. Pierwsza to darmowe narzędzie Obraz do PDF w Safari, które działa, gdy zdjęcia są już w obsługiwanym formacie. Druga to aplikacja PDF Editor, która czyta HEIC bezpośrednio z rolki aparatu i całkowicie omija zabawę z formatami.",
    "Wybierz tę, która pasuje do sytuacji — ale najpierw poznaj szczegół dotyczący HEIC, bo to on zamienia 30-sekundowe zadanie w mylące.",
  ],
  steps: [
    {
      title: "Zdecyduj o formacie zdjęć",
      body: "Otwórz Ustawienia → Aparat → Formaty. „Wysoka wydajność” zapisuje HEIC; „Najbardziej kompatybilny” zapisuje JPG. Przełączenie na Najbardziej kompatybilny sprawia, że nowe zdjęcia działają wszędzie, również w narzędziach przeglądarkowych.",
    },
    {
      title: "W razie potrzeby przekonwertuj istniejące zdjęcia HEIC",
      body: "Zdjęcia już zrobione w HEIC? Wyeksportuj je ponownie jako JPG (otwórz w Zdjęciach, udostępnij, wybierz opcję dającą JPG) albo od razu przejdź do drogi przez aplikację poniżej, która czyta HEIC bezpośrednio.",
    },
    {
      title: "Otwórz narzędzie Obraz do PDF w Safari",
      body: "Przejdź do narzędzia Obraz do PDF. Przyjmuje JPG, PNG i WebP i działa w całości na Twoim urządzeniu — nic nie jest przesyłane na serwer.",
    },
    {
      title: "Dodaj zdjęcia i ustaw ich kolejność",
      body: "Dotknij, żeby wybrać zdjęcia z biblioteki, a potem użyj strzałek, żeby ustawić ich kolejność. Kolejność stron ma znaczenie przy wielostronicowych dokumentach, jak dwustronicowa umowa.",
    },
    {
      title: "Utwórz i zapisz PDF",
      body: "Dotknij Utwórz PDF. Gdy się pobierze, użyj ikony udostępniania, żeby zapisać go w aplikacji Pliki albo od razu wysłać dalej.",
    },
    {
      title: "Albo użyj aplikacji PDF Editor do HEIC i skanowania",
      body: "Aplikacja czyta zdjęcia HEIC z rolki aparatu, zamienia je w PDF, a do tego potrafi robić zdjęcia nowych stron z wykrywaniem krawędzi — bez potrzeby konwersji formatu.",
    },
  ],
  tips: [
    "Najczęstszą przyczyną „moje zdjęcia się nie konwertują” na iPhonie jest HEIC. Przełącz się na Najbardziej kompatybilny albo użyj aplikacji, a problem zniknie.",
    "Przytnij każde zdjęcie w aplikacji Zdjęcia przed konwersją — strona jest dopasowana do obrazu, więc przycięcie tła daje bardziej uporządkowany dokument.",
    "Przy paragonach i dowodach fotografuj na ciemnej, płaskiej powierzchni w równomiernym świetle. Odblaski i cienie łatwiej uniknąć, niż potem poprawić.",
    "Zdjęcie zamienione w PDF to nie przeszukiwalny skan. Jeśli musisz wyszukiwać tekst, użyj funkcji skanowania w aplikacji, która potrafi rozpoznawać tekst.",
    "Jeśli gotowy PDF jest za duży do wysłania mailem, przepuść go przez narzędzie Kompresuj PDF — zdjęcia z telefonu dają ciężkie strony.",
  ],
  mobileNote:
    "Cały ten sposób pracy odbywa się na telefonie, i dokładnie do tego zaprojektowana jest aplikacja PDF Editor: HEIC bezpośrednio z rolki aparatu, konwersja na urządzeniu bez przesyłania niczego, a do tego skanowanie i podpisywanie w jednym miejscu. Przy wszystkim, co robisz więcej niż raz, to szybsza droga.",
  faq: [
    {
      q: "Dlaczego moje zdjęcia z iPhone'a nie wczytują się w konwerterze?",
      a: "Są zapisane jako HEIC, którego większość narzędzi przeglądarkowych nie odczytuje. Przełącz się na „Najbardziej kompatybilny” w Ustawienia → Aparat → Formaty dla nowych zdjęć, albo użyj aplikacji PDF Editor, która czyta HEIC bezpośrednio.",
    },
    {
      q: "Czy mogę połączyć kilka zdjęć w jeden PDF?",
      a: "Tak. Dodaj wszystkie, przeciągnij je w odpowiedniej kolejności, a każde zdjęcie stanie się stroną jednego pliku PDF.",
    },
    {
      q: "Czy moje zdjęcia są przesyłane na serwer?",
      a: "Nie. Narzędzie przeglądarkowe przetwarza wszystko na Twoim urządzeniu, tak samo jak aplikacja. Twoje zdjęcia pozostają prywatne — ważne przy dowodach tożsamości i dokumentach osobistych.",
    },
    {
      q: "Czy PDF będzie przeszukiwalny?",
      a: "Nie ze zwykłego zdjęcia — nie ma warstwy tekstowej. Użyj funkcji skanowania w aplikacji PDF Editor, żeby uzyskać dokument z rozpoznanym, przeszukiwalnym tekstem.",
    },
    {
      q: "PDF jest za duży, żeby wysłać go mailem — co zrobić?",
      a: "Zdjęcia z iPhone'a w wysokiej rozdzielczości dają duże strony. Przepuść plik przez narzędzie Kompresuj PDF, żeby zmieścić się w limicie załącznika.",
    },
  ],
  related: [
    {
      label: "Obraz do PDF — konwertuj zdjęcia w przeglądarce",
      path: "/image-to-pdf",
    },
    {
      label: "Skanuj do PDF — uchwyć papier aparatem",
      path: "/scan-to-pdf",
    },
    {
      label: "Jak przekonwertować zdjęcia do PDF na Androidzie",
      path: "/guides/how-to-convert-photos-to-pdf-on-android",
    },
    {
      label: "Jak przekonwertować JPG do PDF",
      path: "/guides/how-to-convert-jpg-to-pdf",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
