import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-scanned-pdf",
  h1: "Jak skompresować zeskanowany PDF (duże oszczędności)",
  description:
    "Zeskanowane pliki PDF najłatwiej się zmniejsza i to one najbardziej zawyżają rozmiar. Jak skompresować je drastycznie i co dzieje się z przeszukiwalnym tekstem.",
  updated: "2026-05-23",
  intro: [
    "Zeskanowane pliki PDF to ciężarowcy świata dokumentów. Każda strona to obraz w pełnej rozdzielczości, więc krótka zeskanowana umowa może ważyć więcej niż stustronicowy raport tekstowy. Odwrotna strona to dobra wiadomość: ponieważ skany to niemal wyłącznie dane obrazowe, kompresują się drastyczniej niż jakikolwiek inny rodzaj PDF-a — często o 70% lub więcej.",
    "Ten poradnik skupia się konkretnie na kompresji skanów za pomocą darmowego narzędzia Kompresuj PDF, które działa w przeglądarce, bez przesyłania niczego na serwer. Skany to dokładnie ten przypadek, w którym kompresja w przeglądarce błyszczy i w którym oszczędności rozmiaru są najbardziej opłacalne.",
    "Omówimy też jedną rzecz, na którą trzeba uważać przy zeskanowanych dokumentach — przeszukiwalny tekst — żebyś przypadkiem nie stracił warstwy tekstowej, nad którą pracowałeś.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie Kompresuj PDF",
      body: "Przejdź do narzędzia Kompresuj PDF w przeglądarce. Przetwarza plik na Twoim urządzeniu, więc nawet zeskanowana umowa pozostaje prywatna.",
    },
    {
      title: "Dodaj swój zeskanowany PDF",
      body: "Przeciągnij skan na pole docelowe albo kliknij, żeby go wybrać. Narzędzie odczytuje go lokalnie — nic nie jest przesyłane.",
    },
    {
      title: "Wybierz poziom — tutaj możesz pójść na całość",
      body: "Skany dobrze znoszą mocną kompresję, bo są obrazami, a nie ostrym tekstem wektorowym. Zalecany zwykle wystarcza; Mocny wciąż może wyglądać w pełni czytelnie przy codziennych dokumentach.",
    },
    {
      title: "Skompresuj i sprawdź czytelność",
      body: "Uruchom i otwórz wynik. Kluczowym testem dla skanu jest czytelność — czy wygodnie odczytujesz tekst? Jeśli tak przy mocnym poziomie, weź większą oszczędność.",
    },
    {
      title: "Miej na uwadze przeszukiwalną warstwę tekstową",
      body: "Jeśli Twój skan przeszedł OCR, żeby był przeszukiwalny, kompresja w przeglądarce renderuje strony ponownie jako obrazy i usuwa tę warstwę. Zachowaj przeszukiwalny oryginał, jeśli go potrzebujesz.",
    },
    {
      title: "Zapisz mniejszą kopię",
      body: "Zapisz pod nową nazwą. Zeskanowane pliki regularnie spadają wyraźnie poniżej limitów maila i portali za jednym razem.",
    },
  ],
  tips: [
    "Skany kompresują się najlepiej spośród wszystkich PDF-ów — jeśli dokument jest ogromny, bo jest zeskanowany, masz szczęście, jeśli chodzi o rozmiar.",
    "Ponieważ skany to obrazy, zwykle możesz sięgnąć po mocniejszy poziom, niż odważyłbyś się przy zaprojektowanym dokumencie, i wciąż zachować czytelność.",
    "Jeśli Twój skan miał przeszukiwalną warstwę tekstową z OCR, kompresja w przeglądarce ją usuwa. Uruchom rozpoznawanie tekstu ponownie potem albo zachowaj przeszukiwalny oryginał osobno.",
    "Skanowanie w niższej rozdzielczości (200–300 DPI) u źródła daje mniejsze pliki od samego początku, zmniejszając to, jak mocno musisz kompresować później.",
    "Kolorowe skany są większe niż w skali szarości. Jeśli kolor niczego nie wnosi do dokumentu, skanowanie w skali szarości zmniejsza go, zanim jeszcze zacznie się kompresja.",
  ],
  mobileNote:
    "Skany zwykle zaczynają się na telefonie, a aplikacja PDF Editor trzyma cały cykl na urządzeniu: skanuj w rozsądnej jakości, kompresuj offline, a do tego, w odróżnieniu od narzędzi przeglądarkowych, uruchom rozpoznawanie tekstu, żeby mniejszy plik nadal był przeszukiwalny. Żaden krok nie wymaga przesyłania.",
  faq: [
    {
      q: "O ile może zmniejszyć się zeskanowany PDF?",
      a: "Często o 70% lub więcej. Skany to niemal wyłącznie dane obrazowe, a dokładnie w to celuje kompresja, więc kurczą się dużo bardziej niż pliki PDF oparte na tekście.",
    },
    {
      q: "Czy skan będzie wciąż czytelny po mocnej kompresji?",
      a: "Zwykle tak przy codziennych dokumentach — skany dobrze znoszą mocną kompresję, bo są obrazami, a nie ostrym tekstem wektorowym. Zawsze otwórz wynik i potwierdź czytelność.",
    },
    {
      q: "Czy kompresja usuwa przeszukiwalny tekst ze skanu?",
      a: "Jeśli skan przeszedł OCR, żeby był przeszukiwalny, kompresja w przeglądarce renderuje strony ponownie jako obrazy i usuwa tę warstwę. Zachowaj przeszukiwalny oryginał albo uruchom rozpoznawanie tekstu ponownie potem.",
    },
    {
      q: "Czy mój zeskanowany dokument jest przesyłany?",
      a: "Nie. Narzędzie Kompresuj PDF działa w Twojej przeglądarce, na Twoim urządzeniu, więc wrażliwe skany, jak umowy i wyciągi, pozostają prywatne.",
    },
    {
      q: "Czy mogę skompresować skan zabezpieczony hasłem?",
      a: "Nie w przeglądarce. Najpierw usuń hasło albo użyj mobilnej aplikacji PDF Editor, która kompresuje zabezpieczone pliki offline.",
    },
  ],
  related: [
    {
      label: "Kompresuj PDF — zmniejsz skany w przeglądarce",
      path: "/compress-pdf",
    },
    {
      label: "Jak przekonwertować zeskanowane dokumenty do PDF",
      path: "/guides/how-to-convert-scanned-documents-to-pdf",
    },
    {
      label: "Dlaczego mój PDF jest taki duży?",
      path: "/guides/why-is-my-pdf-so-large",
    },
    {
      label: "Jak skanować dokumenty do PDF telefonem",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
  ],
  parentHub: { label: "Kompresuj PDF", path: "/compress-pdf" },
};

export default content;
