import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-png",
  h1: "Jak przekonwertować PDF do PNG — ostre obrazy stron bez utraty jakości",
  description:
    "Eksportuj strony PDF jako obrazy PNG w wysokiej jakości prosto w przeglądarce. Dlaczego PNG zachowuje ostry tekst i diagramy, plus uwagi o skali i przezroczystości.",
  updated: "2026-05-23",
  intro: [
    "Gdy potrzebujesz strony PDF-a jako obrazu, a strona jest pełna tekstu, tabeli albo diagramu, PNG to format, po który warto sięgnąć. Jest bezstratny, więc druk pozostaje ostry, zamiast robić się rozmyty na krawędziach — różnica jest oczywista, gdy tylko przybliżysz przekonwertowaną fakturę albo schemat.",
    "Ten poradnik korzysta z darmowego narzędzia PDF do obrazów, które renderuje każdą stronę PDF-a jako obraz do pobrania w przeglądarce, bez przesyłania niczego na serwer. PNG to jeden z dwóch formatów wyjściowych i ten, który warto wybrać zawsze, gdy czytelność liczy się bardziej niż rozmiar pliku.",
    "Poniżej: jak uzyskać najostrzejszy wynik bez rozdymania pliku, kiedy warto wybrać PNG zamiast JPG, oraz co ogólnie warto mieć na uwadze przy obrazach stron.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie PDF do obrazów",
      body: "Przejdź do narzędzia PDF do obrazów. Renderuje strony lokalnie w przeglądarce — bez przesyłania, bez konta.",
    },
    {
      title: "Dodaj swój plik PDF",
      body: "Przeciągnij PDF na pole docelowe albo kliknij, żeby go wybrać. Narzędzie przygotowuje każdą stronę do eksportu.",
    },
    {
      title: "Wybierz PNG jako format",
      body: "Wybierz PNG. Jest bezstratny i zachowuje ostry tekst, tabele i grafikę liniową — właściwy wybór do dokumentów, diagramów i wszystkiego, co będziesz przybliżać.",
    },
    {
      title: "Ustaw skalę pod kątem ostrości",
      body: "Wybierz skalę: 2× jest ostre na większości ekranów, 3× jest wyjątkowo ostre do druku albo dużego wyświetlacza, ale daje duże pliki. Dopasuj skalę do tego, jak obraz będzie faktycznie oglądany.",
    },
    {
      title: "Wyeksportuj strony",
      body: "Uruchom konwersję. Każda strona pobiera się jako osobny plik PNG, gotowy do osadzenia w dokumencie, prezentacji albo na stronie internetowej.",
    },
    {
      title: "Użyj potrzebnej strony",
      body: "Zachowaj potrzebny PNG, a resztę odrzuć. Przy długim PDF-ie wcześniejsze podzielenie go zostawia mniej plików do ogarnięcia.",
    },
  ],
  tips: [
    "Wybierz PNG zamiast JPG zawsze, gdy strona zawiera tekst, tabele albo ostre linie — kompresja JPG wyraźnie zmiękcza te krawędzie.",
    "Pliki PNG są większe niż JPG. Jeśli eksportujesz wiele stron, a rozmiar liczy się bardziej niż ostrość, JPG to pragmatyczny wybór.",
    "Strona PDF nie ma przezroczystości, więc wyeksportowany PNG siedzi na jednolitym białym tle, mimo że PNG obsługuje przezroczystość.",
    "Wyższa skala nie poprawia słabej jakości źródła. Jeśli sam PDF zawiera rozmazany skan, PNG w 3× po prostu wyrenderuje to rozmycie w wyższej rozdzielczości.",
    "Obrazy stron nie są przeszukiwalne — nie ma warstwy tekstowej. Zachowaj oryginalny PDF, jeśli będziesz musiał później znaleźć albo skopiować słowa.",
  ],
  mobileNote:
    "Wyciągnięcie ostrego obrazu strony z PDF-a na telefonie przydaje się do slajdów, materiałów referencyjnych dla designu i zgłoszeń błędów. Aplikacja PDF Editor renderuje strony z akceleracją sprzętową i pozwala oznaczyć obraz przed udostępnieniem — szybciej niż wysyłanie sobie pliku mailem, żeby zająć się nim później.",
  faq: [
    {
      q: "Dlaczego wybrać PNG zamiast JPG?",
      a: "PNG jest bezstratny, więc tekst, tabele i diagramy pozostają ostre. JPG jest mniejszy, ale zmiękcza drobne krawędzie. Przy stronach dokumentów, które będziesz przybliżać, PNG to lepszy wybór.",
    },
    {
      q: "Czy dostanę jeden PNG na stronę?",
      a: "Tak. Każda strona jest renderowana i pobierana jako osobny plik PNG. Zachowaj te, które są Ci potrzebne, a resztę odrzuć.",
    },
    {
      q: "Czy mój PDF jest gdziekolwiek przesyłany?",
      a: "Nie. Renderowanie odbywa się w całości w przeglądarce, więc plik pozostaje na Twoim urządzeniu.",
    },
    {
      q: "Dlaczego mój PNG jest taki duży?",
      a: "PNG jest bezstratny, a wysoka skala mnoży liczbę pikseli. Zmniejsz skalę albo przełącz się na JPG, jeśli rozmiar pliku jest problemem.",
    },
    {
      q: "Czy mogę wyeksportować PDF zabezpieczony hasłem?",
      a: "Nie w przeglądarce — zaszyfrowanych plików nie da się wyrenderować. Najpierw usuń hasło albo użyj mobilnej aplikacji PDF Editor.",
    },
  ],
  related: [
    {
      label: "PDF do obrazów — eksportuj strony w przeglądarce",
      path: "/pdf-to-images",
    },
    { label: "Obraz do PDF — konwersja odwrotna", path: "/image-to-pdf" },
    {
      label: "Jak przekonwertować PDF do JPG",
      path: "/guides/how-to-convert-pdf-to-jpg",
    },
    {
      label: "Jak wyodrębnić strony z PDF",
      path: "/guides/how-to-extract-pages-from-pdf",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
