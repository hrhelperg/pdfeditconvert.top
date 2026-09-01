import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-lecture-notes-to-pdf",
  h1: "Jak przekonwertować notatki z wykładu do PDF (Word, zdjęcia, slajdy)",
  description:
    "Notatki z wykładu przychodzą w każdym możliwym formacie – dokument Word, prezentacja, zrzut ekranu, zdjęcie tablicy. Jak zamienić każdy z nich w jeden czytelny PDF bez utraty struktury.",
  updated: "2026-05-29",
  intro: [
    "Pod koniec tygodnia notatki z jednych zajęć mogą istnieć w pięciu różnych formatach: dokumencie Word pisanym podczas wykładu, prezentacji PowerPoint udostępnionej przez prowadzącego, zdjęciu tablicy, zrzutach ekranu z nagrania i kilku odręcznych stronach z chwili, gdy padła bateria w laptopie.",
    "Wszystko to może – i powinno – trafić do jednego PDF-a na temat lub tydzień. PDF-y dobrze radzą sobie z każdym formatem, czyta się je na każdym urządzeniu i nie giną tak jak rozproszone pliki. Sztuka polega na stworzeniu PDF-a bez utraty struktury każdego źródła.",
    "Ten poradnik prowadzi przez ścieżkę konwersji dla każdego formatu, a potem przez strategię łączenia, która daje spójny, pojedynczy plik. Celem są materiały do nauki, z których faktycznie da się skorzystać w czasie egzaminu.",
  ],
  steps: [
    {
      title: "Przekonwertuj notatki z Worda narzędziem Word do PDF",
      body: "Notatki pisane w dokumencie Word → Word do PDF w przeglądarce. Zachowuje nagłówki, formatowanie i wszelkie osadzone zrzuty ekranu. Eksportuj w pełnym rozmiarze dokumentu; kompresuj później.",
    },
    {
      title: "Wyeksportuj prezentacje jako PDF",
      body: "PowerPoint i Keynote eksportują bezpośrednio do PDF. Użyj menu eksportu, nie zrzutów ekranu. Wersja PDF zachowuje zaznaczalny tekst i pozostaje ostra przy każdym powiększeniu.",
    },
    {
      title: "Przekonwertuj zdjęcia i zrzuty ekranu narzędziem Obraz do PDF",
      body: "Zdjęcia tablicy, zrzuty ekranu z nagrań → Obraz do PDF łączy je w jeden PDF. Ustal kolejność przed importem; zmiana kolejności później to więcej pracy.",
    },
    {
      title: "Zeskanuj odręczne strony",
      body: "Skanuj do PDF na telefonie z trybem skali szarości i wykrywaniem krawędzi daje czyste, wielostronicowe skany. Ostrzejsze i mniejsze niż przypadkowe zdjęcia.",
    },
    {
      title: "Połącz w jeden PDF na temat",
      body: "Połącz PDF scala wszystkie formaty w jeden uporządkowany plik. Kolejność ma znaczenie: chronologia dnia wykładu albo logiczna struktura (slajdy wprowadzające → notatki z wykładu → zdjęcia tablicy → podsumowanie). Wybierz jedną i trzymaj się jej.",
    },
    {
      title: "Dodaj stronę tytułową i spis treści",
      body: "Napisana na komputerze okładka (przedmiot, tydzień, temat) sprawia, że plik sam się opisuje jeszcze pół roku później. Przy dłuższych, złożonych PDF-ach (ponad 30 stron) dołącz jednostronicowy spis treści.",
    },
  ],
  tips: [
    "Nie rób zrzutów ekranu z prezentacji. Skorzystaj z eksportu do PDF z samej prezentacji – jest ostrzejszy, a tekst pozostaje zaznaczalny do wyszukiwania.",
    "Fotografuj tablicę prosto z przodu, nie pod kątem. Automatyczna korekcja poradzi sobie z umiarkowanym przekrzywieniem, ale proste zdjęcie zawsze jest czystsze.",
    "Jeśli w nagraniu są kluczowe momenty, zrób zrzuty ekranu konkretnych klatek zamiast całego nagrania. PDF pozostaje wtedy w rozsądnym rozmiarze.",
    "Nie łącz materiałów z różnych tygodni. Jeden PDF na tydzień utrzymuje pliki przejrzyste; jeden PDF na cały semestr jest nieczytelny.",
    "Skompresuj finalny, połączony PDF dopiero po zakończeniu semestru. W trakcie semestru trzymaj czytelną wersję do bieżącej nauki.",
  ],
  mobileNote:
    "Połowa konwersji notatek z wykładu odbywa się na telefonie – fotografowanie tablicy, skanowanie odręcznej strony, zrzuty ekranu slajdów. Aplikacja PDF Editor obsługuje cały łańcuch konwersji i łączenia na telefonie, tworząc czysty PDF na dany tydzień, zanim plik w ogóle opuści telefon.",
  faq: [
    {
      q: "Czy zachować notatki w oryginalnym formacie, czy je konwertować?",
      a: "Jedno i drugie. Zachowaj edytowalne oryginały do poprawek; stwórz kopię PDF na każdy temat do nauki. PDF nie zastępuje źródła – to materiał do nauki.",
    },
    {
      q: "Jaki jest najlepszy sposób łączenia?",
      a: "Połącz PDF w przeglądarce. Ustal kolejność przed połączeniem; zmiana kolejności później jest technicznie możliwa, ale wolniejsza.",
    },
    {
      q: "Czy warto zastosować OCR na zeskanowanych odręcznych notatkach?",
      a: "Jeśli narzędzie to oferuje – tak, przeszukiwalne odręczne notatki są bardziej przydatne w czasie egzaminu. OCR dla pisma odręcznego nie jest idealny; traktuj przeszukiwalny tekst jako przybliżony.",
    },
    {
      q: "Jak duży powinien być tygodniowy PDF z notatkami?",
      a: "Taki, jaki naturalnie wynika z danego tygodnia. Kompresuj dopiero pod koniec semestru na potrzeby archiwum; w trakcie semestru czytelność jest ważniejsza niż rozmiar.",
    },
    {
      q: "Czy mogę zrobić to wszystko na telefonie?",
      a: "Tak. Aplikacja PDF Editor obsługuje każdy format i łączy je na urządzeniu. Przydatne, gdy nie chcesz, żeby notatki czekały na dostęp do laptopa.",
    },
  ],
  related: [
    { label: "Konwerter PDF — konwersje Word, JPG, PNG", path: "/pdf-converter" },
    { label: "Obraz do PDF — zdjęcia tablicy i zrzuty ekranu", path: "/image-to-pdf" },
    { label: "Jak zeskanować odręczne notatki do PDF", path: "/guides/how-to-scan-notes-to-pdf" },
    { label: "Jak uporządkować materiały do nauki w PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
  ],
  parentHub: { label: "Konwerter PDF — Word, JPG, PNG i z powrotem", path: "/pdf-converter" },
};

export default content;
