import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "Dodaj znak wodny",
    h1: "Dodaj tekstowy znak wodny do każdej strony PDF.",
    highlight: "każdej strony",
    lead: "Dodaj prosty tekstowy znak wodny przed udostępnieniem PDF — wybierz pozycję, przezroczystość, rozmiar czcionki i obrót.",
  },
  privacyNote:
    "Twój plik jest przetwarzany lokalnie, w Twojej przeglądarce, i nie jest wysyłany na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak dodać znak wodny",
    steps: [
      {
        title: "Dodaj swój PDF",
        body: "Przeciągnij i upuść jeden plik PDF albo kliknij, aby go wybrać.",
      },
      {
        title: "Wpisz swój znak wodny",
        body: "Najlepiej sprawdza się do około 40 znaków. Przykłady: POUFNE, WERSJA ROBOCZA, Próbka.",
      },
      {
        title: "Dostosuj przezroczystość i kąt",
        body: "Niższa przezroczystość dla subtelnego efektu, wyższa dla wyraźnego. 45° sprawdza się w większości układów.",
      },
      {
        title: "Pobierz",
        body: "Odbudowujemy PDF lokalnie ze znakiem wodnym na każdej stronie.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy znaki wodne się przydają",
    items: [
      {
        title: "Wersje robocze w recenzji",
        body: "Oznacz dokumenty jako WERSJA ROBOCZA przed rozesłaniem, aby uniknąć nieporozumień.",
      },
      {
        title: "Poufne materiały",
        body: "Postaw pieczęć POUFNE przed udostępnieniem wrażliwych umów lub danych finansowych.",
      },
      {
        title: "Materiały przykładowe",
        body: "Dodaj znak wodny do próbek portfolio, aby nie mogły być wykorzystane bez zgody.",
      },
      {
        title: "Dokumenty tylko wewnętrzne",
        body: "Oznacz dokumenty, które nie są przeznaczone do dystrybucji na zewnątrz.",
      },
    ],
  },
  limitations: {
    heading: "Ograniczenia",
    items: [
      {
        title: "Tylko znaki wodne tekstowe",
        body: "To narzędzie stawia pieczęć z tekstem. Dla znaków wodnych z obrazem lub logo użyj aplikacji PDF Editor.",
      },
      {
        title: "Tylko standardowe czcionki",
        body: "Używamy wbudowanej czcionki Helvetica, aby wynik pozostał przenośny. Niestandardowe czcionki nie są osadzane.",
      },
      {
        title: "Znaki wodne można usunąć",
        body: "Znak wodny nie jest ochroną prawną. Zniechęca do przypadkowego nadużycia, ale nie do celowej edycji.",
      },
    ],
  },
  related: [
    { label: "Połącz pliki PDF", path: "/merge-pdf" },
    { label: "Podziel PDF", path: "/split-pdf" },
    { label: "Obróć PDF", path: "/rotate-pdf" },
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Czy mój plik jest wysyłany na serwer?",
      a: "Nie. Dodawanie znaku wodnego odbywa się w całości w Twojej przeglądarce; nic nie opuszcza Twojego urządzenia.",
    },
    {
      q: "Czy mogę użyć innej czcionki?",
      a: "Nie w tym narzędziu — używamy Helveticy, aby wynik pozostał przenośny. Dla niestandardowych czcionek użyj aplikacji PDF Editor.",
    },
    {
      q: "Czy znak wodny pojawia się na każdej stronie?",
      a: "Tak. Ten sam tekst jest wyśrodkowany po przekątnej na każdej stronie.",
    },
    {
      q: "Czy znak wodny można usunąć?",
      a: "Przez kogoś z odpowiednimi narzędziami — tak. Znak wodny zniechęca do przypadkowego nadużycia, ale nie jest zabezpieczeniem.",
    },
  ],
  appCta: {
    heading: "Potrzebujesz znaków wodnych z obrazem lub logo?",
    sub: "PDF Editor na iPhone i Android obsługuje niestandardowe czcionki, obrazy i umieszczanie na poszczególnych stronach.",
  },
};

export default content;
