import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "Word do PDF",
    h1: "Przekonwertuj Word na PDF — w przeglądarce.",
    highlight: "w przeglądarce",
    lead: "Zamień plik .docx lub .txt w czysty PDF gotowy do udostępnienia. Działa w całości na Twoim urządzeniu — Twój dokument nigdy nie jest wysyłany.",
  },
  privacyNote:
    "Twój plik jest przetwarzany lokalnie, w Twojej przeglądarce, i nie jest wysyłany na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak przekonwertować Word na PDF",
    steps: [
      {
        title: "Dodaj swój dokument",
        body: "Przeciągnij i upuść plik .docx lub .txt albo kliknij, aby go wybrać.",
      },
      {
        title: "Przekonwertuj",
        body: "Kliknij Konwertuj na PDF. Tekst jest odczytywany i układany w PDF lokalnie, w Twojej przeglądarce.",
      },
      {
        title: "Pobierz",
        body: "Czysty PDF w formacie A4 pobiera się automatycznie.",
      },
      {
        title: "Udostępnij",
        body: "Wyślij format, który wygląda tak samo wszędzie i nie może zostać przypadkowo zmieniony.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy to jest właściwe narzędzie",
    items: [
      {
        title: "Wyślij nieedytowalną kopię",
        body: "Udostępnij wersję roboczą jako PDF, aby odbiorcy nie mogli jej przypadkowo zmienić.",
      },
      {
        title: "Złóż wniosek",
        body: "Wiele portali wymaga PDF, a nie .docx — przekonwertuj plik przed przesłaniem.",
      },
      {
        title: "Zarchiwizuj proste notatki",
        body: "Zamień logi lub notatki .txt w uporządkowany, podzielony na strony PDF do archiwum.",
      },
      {
        title: "Przekazanie gotowe do druku",
        body: "Uzyskaj spójny PDF w formacie A4 z prostego dokumentu.",
      },
    ],
  },
  limitations: {
    heading: "Uczciwe ograniczenia",
    items: [
      {
        title: "Konwersja skoncentrowana na tekście",
        body: "Wyodrębniamy i ponownie układamy tekst dokumentu w czysty PDF. Oryginalne czcionki, obrazy, tabele i dokładne odstępy z .docx nie są odtwarzane.",
      },
      {
        title: "Brak obsługi starego .doc",
        body: "Starych binarnych plików .doc nie da się odczytać w przeglądarce. Najpierw zapisz je jako .docx.",
      },
      {
        title: "Nietypowe znaki są upraszczane",
        body: "Wbudowana czcionka PDF obejmuje tekst łaciński; niektóre znaki specjalne są upraszczane, aby konwersja zawsze się powiodła.",
      },
    ],
  },
  related: [
    { label: "PDF do Word — proces odwrotny", path: "/pdf-to-word" },
    { label: "Obraz do PDF", path: "/image-to-pdf" },
    { label: "Połącz pliki PDF", path: "/merge-pdf" },
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
    {
      label: "Jak przekonwertować Word na PDF",
      path: "/guides/how-to-convert-word-to-pdf",
    },
  ],
  faq: [
    {
      q: "Czy mój plik jest wysyłany na serwer?",
      a: "Nie. Konwersja odbywa się w całości w Twojej przeglądarce. Twój dokument nigdy nie opuszcza Twojego urządzenia.",
    },
    {
      q: "Czy PDF będzie wyglądał dokładnie jak mój plik Word?",
      a: "Nie — i nie twierdzimy, że tak jest. To czysta konwersja skoncentrowana na tekście: czcionki, obrazy, tabele i dokładne odstępy z .docx nie są odtwarzane.",
    },
    {
      q: "Jakie pliki są obsługiwane?",
      a: "Nowoczesny Word .docx i zwykły tekst .txt. Stary binarny format .doc nie jest obsługiwany — najpierw zapisz go jako .docx.",
    },
    {
      q: "Czy jest limit rozmiaru?",
      a: "Do 100 MB na plik, ponieważ wszystko jest przetwarzane w pamięci Twojej przeglądarki.",
    },
    {
      q: "Czy mogę przekonwertować PDF z powrotem na Word?",
      a: "Tak — użyj PDF do Word, aby wyodrębnić tekst z powrotem do edytowalnego pliku .docx.",
    },
  ],
  appCta: {
    heading: "Potrzebujesz narzędzi PDF w podróży?",
    sub: "PDF Editor na iPhone i Android konwertuje, podpisuje i udostępnia dokumenty prosto z telefonu.",
  },
};

export default content;
