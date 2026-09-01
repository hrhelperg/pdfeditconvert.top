import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-scanned-documents-to-pdf",
  h1: "Jak przekonwertować zeskanowane dokumenty do PDF",
  description:
    "Masz już obrazy ze skanera lub zdjęcia papierowych dokumentów? Połącz je w jeden plik PDF prosto w przeglądarce – plus wyjaśnienie, co robi OCR i dlaczego skany go potrzebują, by były przeszukiwalne.",
  updated: "2026-05-23",
  intro: [
    "Jest istotna różnica między skanowaniem dokumentu a konwersją takiego, który już został zeskanowany. Jeśli masz świeży stos papieru, potrzebujesz sposobu pracy opartego na skanowaniu. Ale często masz już obrazy — skaner płaski wyrzucił folder plików JPEG, kolega przesłał mailem zdjęcia podpisanego formularza, albo galeria telefonu jest pełna zdjęć dokumentów. Zadaniem jest teraz zebranie ich w jeden, uporządkowany PDF.",
    "Ten poradnik pokazuje dokładnie to: łączenie posiadanych już obrazów skanów w jeden PDF za pomocą darmowego narzędzia Obraz do PDF, które działa w przeglądarce, bez przesyłania niczego na serwer. Wyjaśnia też część, którą ludzie często rozumieją źle — że przekonwertowany skan to obraz tekstu, a nie przeszukiwalny tekst, oraz co zrobić, jeśli potrzebujesz odzyskać słowa.",
    "Jeśli wciąż musisz uchwycić papier od podstaw, zobacz dedykowany poradnik o skanowaniu; ten zakłada, że obrazy już istnieją.",
  ],
  steps: [
    {
      title: "Zbierz obrazy skanów",
      body: "Zbierz pliki JPG lub PNG ze skanera, maila albo rolki aparatu w jednym miejscu, żeby móc dodać je za jednym razem.",
    },
    {
      title: "Otwórz narzędzie Obraz do PDF",
      body: "Przejdź do narzędzia Obraz do PDF w przeglądarce. Przyjmuje JPG, PNG i WebP i przetwarza wszystko na Twoim urządzeniu — bez przesyłania, bez konta.",
    },
    {
      title: "Dodaj obrazy w kolejności dokumentu",
      body: "Przeciągnij skany na pole docelowe. Użyj strzałek, żeby ustawić strony we właściwej kolejności — strona pierwsza formularza przed stroną drugą.",
    },
    {
      title: "Utwórz PDF",
      body: "Kliknij Utwórz PDF. Każdy skan staje się stroną, a narzędzie łączy je w jeden dokument lokalnie.",
    },
    {
      title: "Skompresuj, jeśli jest duży",
      body: "Skany są ciężkie obrazowo i PDF może wyjść duży. Przepuść go przez Kompresuj PDF, żeby zmieścić się w limitach maila lub przesyłania na portal — treść ze skanów kurczy się bardzo, przy niewielkiej widocznej stracie.",
    },
    {
      title: "Dodaj przeszukiwalny tekst, jeśli go potrzebujesz",
      body: "Przekonwertowany skan to obraz, więc tekstu nie da się wyszukać. Żeby zrobić go przeszukiwalnym, uruchom rozpoznawanie tekstu (OCR) w aplikacji PDF Editor, które dodaje niewidoczną warstwę tekstową na skan.",
    },
  ],
  tips: [
    "Wyprostuj i przytnij każdy skan przed połączeniem — przekrzywiona strona zostanie przekrzywiona także w PDF-ie.",
    "Spójna rozdzielczość na wszystkich stronach daje bardziej uporządkowany dokument. Mocno niedopasowane rozmiary obrazów dają strony skaczące w skali.",
    "Narzędzia przeglądarkowe potrafią łączyć skany, ale nie odczytują tekstu w nich zawartego. Jeśli musisz wyszukiwać lub kopiować słowa, to zadanie dla OCR, które obsługuje aplikacja PDF Editor.",
    "Zachowaj kolorowe skany przy wszystkim, co ma pieczątki, zakreślenia albo podpisy; przełącz na skalę szarości tylko, gdy kolor niczego nie wnosi, bo to zmniejsza plik.",
    "Nadaj plikowi nazwę odpowiadającą treści i dacie. „Umowa-najmu-podpisana-2026-05.pdf” jest dużo łatwiej odnaleźć później niż ciąg numerów ze skanera.",
  ],
  mobileNote:
    "Jeśli te „skany” to tak naprawdę zdjęcia na telefonie, aplikacja PDF Editor to skrót: zamienia obrazy z rolki aparatu w PDF, potrafi robić zdjęcia nowych stron z wykrywaniem krawędzi i uruchomić rozpoznawanie tekstu, żeby wynik był przeszukiwalny — wszystko bez przesyłania niczego.",
  faq: [
    {
      q: "Jaka jest różnica między tym a skanowaniem?",
      a: "Skanowanie polega na uchwyceniu papieru w postaci obrazów od podstaw. Ten poradnik zakłada, że masz już obrazy skanów i musisz tylko połączyć je w jeden PDF. Jeśli wciąż musisz uchwycić papier, skorzystaj ze sposobu pracy opartego na skanowaniu.",
    },
    {
      q: "Czy tekst w moim zeskanowanym PDF-ie będzie przeszukiwalny?",
      a: "Nie z samej konwersji — skan to obraz, więc nie ma warstwy tekstowej. Uruchom OCR (rozpoznawanie tekstu) w aplikacji PDF Editor, żeby dodać przeszukiwalną warstwę na skan.",
    },
    {
      q: "Czy moje skany są przesyłane?",
      a: "Nie. Narzędzie Obraz do PDF przetwarza pliki w przeglądarce, na Twoim urządzeniu, więc wrażliwe dokumenty pozostają prywatne.",
    },
    {
      q: "Dlaczego mój zeskanowany PDF jest taki duży?",
      a: "Skany to zasadniczo zdjęcia, a kilka stron w wysokiej rozdzielczości szybko się sumuje. Skompresuj PDF — skany bogate w obrazy zwykle kurczą się mocno przy niewielkiej widocznej stracie jakości.",
    },
    {
      q: "Czy mogę naprawić stronę, która zeskanowała się bokiem?",
      a: "Tak. Użyj narzędzia Obróć PDF, żeby wyprostować dotknięte strony po połączeniu, albo popraw orientację obrazu źródłowego przed konwersją.",
    },
  ],
  related: [
    {
      label: "Obraz do PDF — łącz skany w przeglądarce",
      path: "/image-to-pdf",
    },
    {
      label: "Skanuj do PDF — uchwyć papier aparatem",
      path: "/scan-to-pdf",
    },
    {
      label: "Jak skanować dokumenty do PDF telefonem",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    {
      label: "Jak skompresować zeskanowany PDF",
      path: "/guides/how-to-compress-scanned-pdf",
    },
  ],
  parentHub: { label: "Skanuj do PDF", path: "/scan-to-pdf" },
};

export default content;
