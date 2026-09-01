import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDF do Word",
    h1: "Przekonwertuj PDF na edytowalny Word — w przeglądarce.",
    highlight: "w przeglądarce",
    lead: "Wyciągnij tekst z PDF do edytowalnego pliku .docx, który przerobisz w Word, Google Docs lub Pages. Uczciwa konwersja tekstu — bez fałszywych obietnic „idealnego układu”.",
  },
  privacyNote:
    "Twój plik jest przetwarzany lokalnie, w Twojej przeglądarce, i nie jest wysyłany na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak przekonwertować PDF na Word",
    steps: [
      {
        title: "Dodaj swój PDF",
        body: "Przeciągnij i upuść PDF z tekstem albo kliknij, aby go wybrać.",
      },
      {
        title: "Przekonwertuj",
        body: "Kliknij Konwertuj na Word. Zaznaczalny tekst jest wyodrębniany lokalnie, w Twojej przeglądarce.",
      },
      {
        title: "Pobierz",
        body: "Plik .docx pobiera się automatycznie — otwórz i edytuj go w dowolnym miejscu.",
      },
      {
        title: "Uporządkuj",
        body: "Zastosuj ponownie nagłówki i układ w swoim edytorze. Tekst jest Twój — możesz go dowolnie przekształcić.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy to jest właściwe narzędzie",
    items: [
      {
        title: "Wykorzystaj ponownie treść umowy",
        body: "Wyciągnij klauzule z umowy PDF do edytowalnej wersji roboczej zamiast przepisywać je ręcznie.",
      },
      {
        title: "Wykorzystaj ponownie raport",
        body: "Przenieś tekst główny raportu PDF do dokumentu, który możesz przekształcić.",
      },
      {
        title: "Cytuj i przywołuj",
        body: "Wyodrębnij fragmenty do notatek, streszczeń lub cytatów bez ręcznego przepisywania.",
      },
      {
        title: "Odzyskaj PDF, do którego nie masz już źródła",
        body: "Odzyskaj edytowalny tekst, gdy oryginalny plik .docx dawno zniknął.",
      },
    ],
  },
  limitations: {
    heading: "Uczciwe ograniczenia",
    items: [
      {
        title: "Brak zachowania układu",
        body: "To narzędzie wyodrębnia wyłącznie tekst. Kolumny, tabele, dokładne odstępy, czcionki i obrazy nie są odtwarzane — formatowanie stosujesz ponownie w swoim edytorze.",
      },
      {
        title: "Zeskanowane PDF-y nie zadziałają",
        body: "PDF-y będące samym obrazem lub skanem nie mają warstwy tekstowej. OCR nie jest dostępny w przeglądarce — dla skanów użyj aplikacji PDF Editor.",
      },
      {
        title: "Złożone dokumenty wymagają porządkowania",
        body: "Mocno zaprojektowane PDF-y (wielokolumnowe, z przypisami) są wyodrębniane jako czytelny strumień tekstu, który będziesz chciał uporządkować.",
      },
    ],
  },
  related: [
    { label: "Word do PDF — proces odwrotny", path: "/word-to-pdf" },
    { label: "PDF do obrazów", path: "/pdf-to-images" },
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
    { label: "PDF czy DOCX — czego użyć", path: "/compare/pdf-vs-docx" },
    {
      label: "Jak przekonwertować PDF na Word",
      path: "/guides/how-to-convert-pdf-to-word",
    },
  ],
  faq: [
    {
      q: "Czy mój plik jest wysyłany na serwer?",
      a: "Nie. Wyodrębnianie tekstu odbywa się w całości w Twojej przeglądarce. Twój PDF nigdy nie opuszcza Twojego urządzenia.",
    },
    {
      q: "Czy plik Word będzie wyglądał dokładnie jak PDF?",
      a: "Nie — i nie udajemy, że tak jest. To praktyczna konwersja tekstu. Układ, czcionki, kolumny i obrazy nie są zachowywane; formatowanie stosujesz ponownie w swoim edytorze.",
    },
    {
      q: "Pojawia się informacja, że nie znaleziono tekstu — dlaczego?",
      a: "Twój PDF to prawdopodobnie skan albo plik będący samym obrazem, bez warstwy tekstowej. Narzędzia w przeglądarce nie mogą wykonać OCR; aplikacja mobilna PDF Editor może.",
    },
    {
      q: "Jaki format otrzymam?",
      a: "Standardowy plik .docx, który otwiera się w Microsoft Word, Google Docs, Pages i LibreOffice.",
    },
    {
      q: "Czy mogę przekonwertować go z powrotem?",
      a: "Tak — użyj Word do PDF, aby zamienić edytowany plik .docx z powrotem na PDF.",
    },
  ],
  appCta: {
    heading: "Potrzebujesz narzędzi PDF w podróży?",
    sub: "PDF Editor na iPhone i Android konwertuje, edytuje i podpisuje dokumenty prosto z telefonu.",
  },
};

export default content;
