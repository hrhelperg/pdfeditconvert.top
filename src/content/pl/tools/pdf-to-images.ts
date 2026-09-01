import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF do obrazów",
    h1: "Eksportuj każdą stronę PDF jako PNG lub JPG.",
    highlight: "PNG lub JPG",
    lead: "Zamień strony PDF w pliki obrazów PNG lub JPEG do pobrania — generowane lokalnie w Twojej przeglądarce.",
  },
  privacyNote:
    "Twój plik jest generowany lokalnie w Twojej przeglądarce i nie jest wysyłany na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak przekonwertować PDF do obrazów",
    steps: [
      {
        title: "Dodaj swój PDF",
        body: "Przeciągnij i upuść jeden plik PDF albo kliknij, aby go wybrać.",
      },
      {
        title: "Wybierz format",
        body: "Wybierz PNG dla czystego tekstu i przezroczystości albo JPG dla mniejszych plików.",
      },
      {
        title: "Wybierz skalę",
        body: "Wyższa skala = ostrzejsze obrazy, większe pliki. 2× to zwykle dobry wybór.",
      },
      {
        title: "Pobierz",
        body: "Każda strona pobiera się jako osobny obraz.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy to narzędzie się przydaje",
    items: [
      {
        title: "Wrzuć stronę na Slacka",
        body: "Podglądy obrazów wyświetlają się w treści wiadomości, w przeciwieństwie do PDF-ów.",
      },
      {
        title: "Wykorzystaj ponownie wykres w prezentacji",
        body: "Wyciągnij jedną stronę i wklej ją do slajdu.",
      },
      {
        title: "Zrób miniatury",
        body: "Zbuduj arkusz podglądowy stron PDF do szybkiego przeglądu.",
      },
      {
        title: "Podglądy w internecie",
        body: "Użyj wygenerowanych obrazów jako lekkich podglądów na stronie internetowej.",
      },
    ],
  },
  limitations: {
    heading: "Ograniczenia",
    items: [
      {
        title: "Pamięć przeglądarki",
        body: "Bardzo duże PDF-y przy wysokiej skali mogą wyczerpać pamięć. Spróbuj skali 1,5× albo najpierw podziel PDF.",
      },
      {
        title: "PDF-y zabezpieczone hasłem",
        body: "Zaszyfrowanych plików nie można wygenerować. Najpierw je odblokuj albo użyj aplikacji PDF Editor.",
      },
      {
        title: "Zawartość wektorowa staje się rastrowa",
        body: "Obrazy nie zachowują przeszukiwalnego tekstu. Zachowaj do tego oryginalny PDF.",
      },
    ],
  },
  related: [
    { label: "Obraz do PDF — proces odwrotny", path: "/image-to-pdf" },
    { label: "Podziel PDF", path: "/split-pdf" },
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Czy mój plik jest wysyłany na serwer?",
      a: "Nie. Generowanie odbywa się w całości w Twojej przeglądarce; nic nie opuszcza Twojego urządzenia.",
    },
    {
      q: "PNG czy JPG — co wybrać?",
      a: "PNG jest ostrzejszy dla tekstu i obsługuje przezroczystość. JPG jest mniejszy i sprawdza się przy zdjęciach oraz zrzutach całej strony.",
    },
    {
      q: "Co oznacza skala?",
      a: "Ile pikseli obrazu przypada na punkt PDF. 2× daje ostre wyniki na ekranach retina. 3× jest większe, ale bardzo wyraźne.",
    },
    {
      q: "Czy mogę pobrać jedno archiwum ZIP ze wszystkimi stronami?",
      a: "Jeszcze nie — strony pobierają się pojedynczo. Do eksportu masowego szybsza jest aplikacja mobilna PDF Editor.",
    },
  ],
  appCta: {
    heading: "Potrzebujesz narzędzi PDF offline?",
    sub: "PDF Editor na iPhone i Android generuje strony błyskawicznie dzięki akceleracji sprzętowej.",
  },
};

export default content;
