import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "Połącz PDF",
    h1: "Połącz PDF-y w jeden dokument — w przeglądarce.",
    highlight: "w przeglądarce",
    lead: "Dodaj dwa lub więcej plików PDF i połącz je w jeden dokument. Zmień kolejność przed połączeniem — Twoje pliki zostają na Twoim urządzeniu.",
  },
  privacyNote:
    "Twoje pliki są przetwarzane lokalnie, w Twojej przeglądarce, i nie są wysyłane na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak połączyć pliki PDF",
    steps: [
      {
        title: "Dodaj swoje pliki PDF",
        body: "Przeciągnij i upuść dwa lub więcej plików PDF albo kliknij, aby wybrać je ze swojego urządzenia.",
      },
      {
        title: "Zmień kolejność, jeśli trzeba",
        body: "Użyj strzałek przy każdym wierszu, aby ustawić strony we właściwej kolejności przed połączeniem.",
      },
      {
        title: "Połącz",
        body: "Kliknij Połącz PDF-y. Twoje pliki są łączone lokalnie, w Twojej przeglądarce.",
      },
      {
        title: "Pobierz",
        body: "Połączony PDF pobiera się automatycznie. Zmień jego nazwę po zapisaniu.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy połączenie to dobry wybór",
    items: [
      {
        title: "Wyślij jeden plik, nie pięć",
        body: "Klienci, księgowi i prawnicy wolą jeden dokument niż wątek załączników.",
      },
      {
        title: "Zbierz ofertę, umowę i fakturę razem",
        body: "Zbuduj jeden przejrzysty do kontroli plik z dokumentów utworzonych w różnych narzędziach.",
      },
      {
        title: "Scal zeskanowane strony",
        body: "Połącz skany strona po stronie paszportu, dowodu osobistego lub umowy w jeden dokument akceptowany przez portal.",
      },
      {
        title: "Skomponuj raport",
        body: "Zszyj stronę tytułową, główny PDF i załączniki uzupełniające w jeden gotowy dokument.",
      },
    ],
  },
  limitations: {
    heading: "Ograniczenia",
    items: [
      {
        title: "PDF-y zabezpieczone hasłem",
        body: "Zablokowanych plików nie można połączyć w przeglądarce. Najpierw odblokuj je w aplikacji źródłowej albo użyj aplikacji PDF Editor.",
      },
      {
        title: "Bardzo duże zestawy plików",
        body: "Przeglądarce znacznie szybciej kończy się pamięć niż aplikacji natywnej. Przy 50 lub więcej plikach albo ogromnych skanach użyj aplikacji PDF Editor.",
      },
      {
        title: "Zakładki i pola formularzy",
        body: "Niektóre osadzone elementy (pola formularzy, adnotacje) mogą nie zachować pełnej interaktywności po połączeniu. Aplikacja mobilna zachowuje je lepiej.",
      },
    ],
  },
  related: [
    { label: "Podziel PDF — proces odwrotny", path: "/split-pdf" },
    { label: "Obróć strony PDF", path: "/rotate-pdf" },
    { label: "Skompresuj PDF", path: "/compress-pdf" },
    { label: "Zmień kolejność stron PDF", path: "/reorder-pdf-pages" },
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
    { label: "Poradnik: jak połączyć pliki PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    {
      q: "Czy moje pliki są wysyłane na serwer?",
      a: "Nie. Łączenie odbywa się w całości w Twojej przeglądarce. Twoje pliki nigdy nie opuszczają Twojego urządzenia.",
    },
    {
      q: "Czy jest limit liczby plików PDF, które mogę połączyć?",
      a: "Nie ma sztywnego limitu, ale zalecamy, aby jedna paczka nie przekraczała 30 plików lub około 500 MB łącznie, żeby przeglądarka pozostała responsywna.",
    },
    {
      q: "Czy mogę połączyć pliki PDF zabezpieczone hasłem?",
      a: "Nie w przeglądarce. Najpierw usuń hasło albo użyj aplikacji PDF Editor, która obsługuje pliki zabezpieczone.",
    },
    {
      q: "Czy oryginalne formatowanie się zmieni?",
      a: "Nie. Każda strona źródłowa jest zachowana dokładnie. Zmienia się tylko kolejność stron i dokument, który je zawiera.",
    },
    {
      q: "Czy mogę później rozdzielić plik?",
      a: "Tak. Użyj narzędzia Podziel PDF, aby rozbić dowolny połączony plik z powrotem na strony lub zakresy.",
    },
  ],
  appCta: {
    heading: "Potrzebujesz narzędzi PDF w podróży?",
    sub: "PDF Editor na iPhone i Android łączy, podpisuje i skanuje pliki PDF prosto z telefonu.",
  },
};

export default content;
