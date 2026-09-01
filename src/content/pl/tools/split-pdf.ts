import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Podziel PDF",
    h1: "Wyodrębnij strony z PDF — prywatnie, w przeglądarce.",
    highlight: "w przeglądarce",
    lead: "Dodaj plik PDF i wybierz zakres stron, które chcesz wyeksportować. Użyj zakresów takich jak 1-3,5,8-10 — Twój plik zostaje na Twoim urządzeniu.",
  },
  privacyNote:
    "Twój plik jest przetwarzany lokalnie, w Twojej przeglądarce, i nie jest wysyłany na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak podzielić PDF",
    steps: [
      {
        title: "Dodaj swój PDF",
        body: "Przeciągnij i upuść jeden plik PDF albo kliknij, aby go wybrać.",
      },
      {
        title: "Wpisz zakresy stron",
        body: "Wpisz strony i zakresy oddzielone przecinkami. Przykład: 1-3,5,8-10.",
      },
      {
        title: "Podziel",
        body: "Kliknij Wyodrębnij strony. Tworzymy nowy PDF zawierający tylko te strony, lokalnie.",
      },
      {
        title: "Pobierz",
        body: "Nowy PDF pobiera się automatycznie. Zmień jego nazwę po zapisaniu.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy podział to dobry wybór",
    items: [
      {
        title: "Wyślij tylko istotne strony",
        body: "Udostępnij tylko klauzulę umowy, która ma znaczenie, a nie cały dokument.",
      },
      {
        title: "Rozdziel zeskanowaną paczkę",
        body: "Rozbij skan wielu dokumentów z powrotem na osobne pliki.",
      },
      {
        title: "Wyciągnij jedną stronę z raportu",
        body: "Wyodrębnij jeden wykres lub tabelę bez ujawniania reszty pliku.",
      },
      {
        title: "Zbuduj czystszy załącznik",
        body: "Usuń strony tytułowe, puste strony lub załączniki przed wysłaniem e-maila.",
      },
    ],
  },
  limitations: {
    heading: "Ograniczenia",
    items: [
      {
        title: "PDF-y zabezpieczone hasłem",
        body: "Zablokowanych plików nie można podzielić w przeglądarce. Najpierw odblokuj plik albo użyj aplikacji PDF Editor.",
      },
      {
        title: "Bardzo duże pliki",
        body: "Przeglądarce może zabraknąć pamięci przy dokumentach powyżej kilkuset megabajtów.",
      },
      {
        title: "Brak osobnego pliku dla każdego zakresu",
        body: "To narzędzie eksportuje jeden połączony PDF zawierający wybrane strony. Aby uzyskać kilka plików wyjściowych, uruchom je dwukrotnie.",
      },
    ],
  },
  related: [
    { label: "Połącz PDF — proces odwrotny", path: "/merge-pdf" },
    { label: "Obróć strony PDF", path: "/rotate-pdf" },
    { label: "PDF do obrazów", path: "/pdf-to-images" },
    { label: "Skompresuj PDF", path: "/compress-pdf" },
    { label: "Wyodrębnij strony z PDF", path: "/extract-pdf-pages" },
    { label: "Zmień kolejność stron PDF", path: "/reorder-pdf-pages" },
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Czy moje pliki są wysyłane na serwer?",
      a: "Nie. Podział odbywa się w całości w Twojej przeglądarce; Twój plik nigdy nie opuszcza Twojego urządzenia.",
    },
    {
      q: "Jaka jest składnia zakresu stron?",
      a: "Strony i zakresy oddzielone przecinkami. Przykład: 1-3,5,8-10 zachowuje strony 1, 2, 3, 5, 8, 9 i 10.",
    },
    {
      q: "Czy mogę podzielić PDF zabezpieczony hasłem?",
      a: "Nie w przeglądarce. Najpierw usuń hasło albo użyj aplikacji PDF Editor.",
    },
    {
      q: "Czy wynik zachowa oryginalną jakość?",
      a: "Tak — strony są kopiowane bajt po bajcie. Bez ponownego renderowania, bez utraty jakości.",
    },
  ],
  appCta: {
    heading: "Dzielisz PDF-y w podróży?",
    sub: "PDF Editor na iPhone i Android dzieli i łączy pliki PDF prosto z telefonu.",
  },
};

export default content;
