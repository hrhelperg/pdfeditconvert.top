import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "Obróć PDF",
    h1: "Popraw przekrzywione strony PDF — w przeglądarce.",
    highlight: "w przeglądarce",
    lead: "Obróć wszystkie strony lub tylko wybrane, a następnie pobierz poprawiony PDF — wszystko w Twojej przeglądarce.",
  },
  privacyNote:
    "Twój plik jest przetwarzany lokalnie, w Twojej przeglądarce, i nie jest wysyłany na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak obrócić PDF",
    steps: [
      {
        title: "Dodaj swój PDF",
        body: "Przeciągnij i upuść jeden plik PDF albo kliknij, aby go wybrać.",
      },
      {
        title: "Wybierz kąt",
        body: "Wybierz 90°, 180° lub 270° (zgodnie z ruchem wskazówek zegara).",
      },
      {
        title: "Wybierz, które strony",
        body: "Obróć każdą stronę albo wpisz numery stron (np. 1,3-5).",
      },
      {
        title: "Obróć i pobierz",
        body: "Kliknij Obróć. Odbudowujemy PDF lokalnie z nową orientacją.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy obracanie to dobry wybór",
    items: [
      {
        title: "Skany z telefonu wyszły przekrzywione",
        body: "Skany z aparatu często zapisują się w poziomie — popraw je jednym kliknięciem.",
      },
      {
        title: "Raporty z mieszaną orientacją",
        body: "Szerokie tabele na stronach poziomych wmieszane w pionowy raport? Popraw je bez ponownego skanowania.",
      },
      {
        title: "Paszporty i dowody osobiste",
        body: "Upewnij się, że każda strona czyta się tak samo, zanim urzędowy portal zgłosi błąd.",
      },
      {
        title: "Paragony i faktury",
        body: "Uporządkuj kierunek stosu zdjęć paragonów w jednym kierunku przed połączeniem.",
      },
    ],
  },
  limitations: {
    heading: "Ograniczenia",
    items: [
      {
        title: "PDF-y zabezpieczone hasłem",
        body: "Zablokowanych plików nie można obrócić w przeglądarce. Najpierw odblokuj je albo użyj aplikacji PDF Editor.",
      },
      {
        title: "Niestandardowe kąty dla pojedynczych stron",
        body: "To narzędzie stosuje jeden kąt naraz. Dla różnych kątów uruchom je dwukrotnie z różnymi zaznaczeniami stron.",
      },
      {
        title: "Adnotacje i pola formularzy",
        body: "Obrót może wizualnie przesunąć nakładki. Aplikacja mobilna obsługuje adnotacje dokładniej.",
      },
    ],
  },
  related: [
    { label: "Połącz pliki PDF", path: "/merge-pdf" },
    { label: "Podziel PDF", path: "/split-pdf" },
    { label: "Dodaj znak wodny do PDF", path: "/add-watermark-to-pdf" },
    { label: "Zmień kolejność stron PDF", path: "/reorder-pdf-pages" },
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Czy mój plik jest wysyłany na serwer?",
      a: "Nie. Obracanie odbywa się w całości w Twojej przeglądarce; nic nie opuszcza Twojego urządzenia.",
    },
    {
      q: "Czy mogę obrócić tylko niektóre strony?",
      a: "Tak. Użyj pola wyboru stron, np. 1,3-5,9.",
    },
    {
      q: "Czy obracanie obniża jakość?",
      a: "Nie. Strony pozostają identyczne bajt po bajcie; ustawiamy jedynie metadane obrotu.",
    },
    {
      q: "Czy mogę obrócić PDF zabezpieczony hasłem?",
      a: "Nie w przeglądarce. Najpierw usuń hasło albo użyj aplikacji PDF Editor.",
    },
  ],
  appCta: {
    heading: "Obracaj PDF-y również z telefonu.",
    sub: "PDF Editor na iPhone i Android edytuje, obraca i podpisuje pliki PDF offline.",
  },
};

export default content;
