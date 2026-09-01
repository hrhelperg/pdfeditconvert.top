import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Obraz do PDF",
    h1: "Zamień obrazy JPG, PNG i WebP w jeden plik PDF.",
    highlight: "jeden plik PDF",
    lead: "Dodaj obrazy JPG, PNG lub WebP i połącz je w jeden plik PDF. Zmień kolejność stron, a następnie pobierz — Twoje obrazy zostają na Twoim urządzeniu.",
  },
  privacyNote:
    "Twoje pliki są przetwarzane lokalnie, w Twojej przeglądarce, i nie są wysyłane na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak korzystać z narzędzia Obraz do PDF",
    steps: [
      {
        title: "Dodaj swoje obrazy",
        body: "Przeciągnij i upuść pliki JPG, PNG lub WebP albo kliknij, aby wybrać je ze swojego urządzenia.",
      },
      {
        title: "Zmień kolejność, jeśli trzeba",
        body: "Użyj strzałek w górę i w dół przy każdym wierszu, aby ustawić strony we właściwej kolejności.",
      },
      {
        title: "Wygeneruj PDF",
        body: "Kliknij Utwórz PDF. Twoje obrazy stają się stronami jednego dokumentu, dopasowanymi rozmiarem do każdego obrazu.",
      },
      {
        title: "Pobierz",
        body: "Wygenerowany PDF pobiera się automatycznie. Możesz zmienić jego nazwę po zapisaniu.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy to narzędzie się przydaje",
    items: [
      {
        title: "Sfotografowane paragony i wydatki",
        body: "Zbierz miesiąc paragonów w jeden PDF przed wysłaniem do księgowego.",
      },
      {
        title: "Skany dowodu osobistego i paszportu",
        body: "Połącz przód i tył w jeden dokument akceptowany przez urzędowy portal.",
      },
      {
        title: "Zrzuty ekranu w raporcie",
        body: "Zbierz serię zrzutów ekranu interfejsu w uporządkowany dokument do przeglądu.",
      },
      {
        title: "Zdjęcia tablicy",
        body: "Zamień serię zdjęć ze spotkania w jeden dokument, który zespół może przewijać.",
      },
    ],
  },
  limitations: {
    heading: "Ograniczenia",
    items: [
      {
        title: "Tylko JPG, PNG i WebP",
        body: "HEIC, AVIF, GIF i TIFF nie są obsługiwane w przeglądarce. Najpierw je przekonwertuj albo użyj aplikacji mobilnej.",
      },
      {
        title: "Pamięć przeglądarki",
        body: "Bardzo duże paczki (setki zdjęć w wysokiej rozdzielczości) mogą spowolnić starsze urządzenia.",
      },
      {
        title: "Brak OCR",
        body: "Tekst wewnątrz obrazów nie jest wyodrębniany. Dla przeszukiwalnych PDF-ów zeskanuj dokument w aplikacji PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Połącz pliki PDF", path: "/merge-pdf" },
    { label: "PDF do obrazów", path: "/pdf-to-images" },
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Czy moje obrazy są gdzieś wysyłane?",
      a: "Nie. Wszystko odbywa się w Twojej przeglądarce. Twoje obrazy nigdy nie opuszczają Twojego urządzenia.",
    },
    {
      q: "Czy jest limit rozmiaru pliku?",
      a: "Tak — każdy plik jest ograniczony do 100 MB, aby przeglądarka pozostała responsywna. Aplikacja mobilna PDF Editor obsługuje większe paczki z akceleracją sprzętową.",
    },
    {
      q: "Czy mogę zmienić rozmiar strony?",
      a: "Każda strona odpowiada wymiarom w pikselach swojego obrazu, więc proporcje pozostają poprawne. Dla jednolitego formatu A4 użyj aplikacji PDF Editor.",
    },
    {
      q: "Czy to działa na iPhonie i Androidzie?",
      a: "Tak, w każdej nowoczesnej przeglądarce mobilnej. Przy częstym użytkowaniu aplikacja PDF Editor jest szybsza i obsługuje zdjęcia HEIC prosto z rolki aparatu.",
    },
  ],
  appCta: {
    heading: "Potrzebujesz tego co tydzień, z telefonu?",
    sub: "PDF Editor na iPhone i Android skanuje, porządkuje i podpisuje pliki PDF offline.",
  },
};

export default content;
