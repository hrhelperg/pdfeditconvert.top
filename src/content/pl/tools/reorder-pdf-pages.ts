import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "reorder-pdf-pages",
  hero: {
    eyebrow: "Zmień kolejność stron PDF",
    h1: "Zmień kolejność stron PDF — w przeglądarce.",
    highlight: "w przeglądarce",
    lead: "Dodaj PDF, obejrzyj podgląd każdej strony, ustaw strony w wybranej kolejności i pobierz przearanżowany plik. Nic nie jest wysyłane na serwer.",
  },
  privacyNote:
    "Twój plik jest przetwarzany lokalnie, w Twojej przeglądarce, i nie jest wysyłany na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak zmienić kolejność stron PDF",
    steps: [
      {
        title: "Dodaj swój PDF",
        body: "Przeciągnij i upuść PDF albo kliknij, aby wybrać go ze swojego urządzenia.",
      },
      {
        title: "Przejrzyj podglądy",
        body: "Każda strona jest renderowana jako miniatura, więc widzisz dokładnie, co przesuwasz.",
      },
      {
        title: "Przesuń strony",
        body: "Użyj strzałek w górę/w dół przy każdej stronie, aby przesunąć ją wcześniej lub później w dokumencie.",
      },
      {
        title: "Zbuduj i pobierz",
        body: "Kliknij Zmień kolejność PDF. Przearanżowany PDF jest budowany lokalnie i pobiera się automatycznie.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy zmiana kolejności pomaga",
    items: [
      {
        title: "Popraw kolejność skanu",
        body: "Aplikacje do skanowania telefonem i skanerem często przechwytują strony nie po kolei — uporządkuj je przed udostępnieniem.",
      },
      {
        title: "Przesuń okładkę lub załącznik",
        body: "Przenieś stronę tytułową na początek albo materiał uzupełniający na koniec.",
      },
      {
        title: "Odbuduj połączony plik",
        body: "Po połączeniu dokumentów ułóż strony dokładnie w takiej kolejności czytania, jakiej potrzebujesz.",
      },
      {
        title: "Przygotuj do druku",
        body: "Ułóż strony pod broszury, materiały do rozdania lub druk dwustronny.",
      },
    ],
  },
  limitations: {
    heading: "Uczciwe ograniczenia",
    items: [
      {
        title: "PDF-y zabezpieczone hasłem",
        body: "Zaszyfrowanych plików nie można otworzyć w przeglądarce. Najpierw je odblokuj albo użyj aplikacji PDF Editor.",
      },
      {
        title: "Bardzo duże PDF-y",
        body: "Renderowanie miniatury dla każdej strony zużywa pamięć. Setki stron mogą działać wolno albo osiągnąć limity przeglądarki.",
      },
      {
        title: "Miniatury wymagają chwili",
        body: "Podglądy są renderowane strona po stronie na Twoim urządzeniu, więc duże PDF-y potrzebują kilku sekund, zanim będziesz mógł zmienić kolejność.",
      },
    ],
  },
  related: [
    { label: "Połącz pliki PDF", path: "/merge-pdf" },
    { label: "Podziel PDF", path: "/split-pdf" },
    { label: "Obróć strony PDF", path: "/rotate-pdf" },
    { label: "Wyodrębnij strony z PDF", path: "/extract-pdf-pages" },
  ],
  faq: [
    {
      q: "Czy moje pliki są wysyłane na serwer?",
      a: "Nie. PDF jest renderowany i odbudowywany w całości w Twojej przeglądarce. Twój plik nigdy nie opuszcza Twojego urządzenia.",
    },
    {
      q: "Czy mogę przeciągać strony, aby zmienić kolejność?",
      a: "Zmiana kolejności odbywa się za pomocą wyraźnych przycisków w górę/w dół przy każdej stronie. Działa to niezawodnie na telefonie i komputerze, bez walki z małymi uchwytami do przeciągania.",
    },
    {
      q: "Czy zawartość lub jakość stron się zmieni?",
      a: "Nie. Strony są kopiowane dokładnie takie, jakie są — zmienia się tylko ich kolejność. Tekst pozostaje zaznaczalny.",
    },
    {
      q: "Dlaczego zajmuje to chwilę po dodaniu pliku?",
      a: "Każda strona jest renderowana lokalnie w podgląd w postaci miniatury, więc widzisz, co przesuwasz. Większe PDF-y potrzebują nieco więcej czasu.",
    },
    {
      q: "Czy mogę zmienić kolejność stron w PDF zabezpieczonym hasłem?",
      a: "Nie w przeglądarce. Najpierw usuń hasło albo użyj aplikacji PDF Editor, która obsługuje pliki zabezpieczone.",
    },
  ],
  appCta: {
    heading: "Potrzebujesz narzędzi PDF w podróży?",
    sub: "PDF Editor na iPhone i Android zmienia kolejność, łączy i podpisuje pliki PDF prosto z telefonu.",
  },
};

export default content;
