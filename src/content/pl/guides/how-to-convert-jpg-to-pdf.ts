import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-jpg-to-pdf",
  h1: "Jak przekonwertować JPG do PDF — za darmo, z obrazu do dokumentu",
  description:
    "Połącz jedno lub wiele zdjęć JPG w jeden plik PDF prosto w przeglądarce. Najlepsze dla paragonów, dowodów i sfotografowanych dokumentów – z uczciwymi uwagami o jakości i formacie HEIC z iPhone'a.",
  updated: "2026-05-23",
  intro: [
    "JPG to format, który dostajesz z aparatu i z większości stron internetowych, dlatego to najczęstszy punkt wyjścia dla „zamień to na PDF”. Powód konwersji jest niemal zawsze ten sam: pojedynczy JPG niezręcznie wysyła się jako dokument. Kilka JPG-ów jest jeszcze gorsze — pięć osobnych zdjęć paragonów w mailu to coś, czego księgowy po cichu nienawidzi. Jeden PDF, strony w kolejności — to właśnie chcą dostać ludzie.",
    "Ten poradnik korzysta z darmowego narzędzia Obraz do PDF, które łączy pliki JPG w jeden PDF bezpośrednio w przeglądarce — nic nie jest przesyłane na serwer. Idealne do paragonów, zdjęć dowodów tożsamości, zrzutów ekranu i zdjęć papierowych dokumentów, które trzeba zebrać w jedną paczkę i wysłać.",
    "JPG to stratny format zdjęć, więc warto wiedzieć, co przenosi się bez problemu, a co nie, zanim zdasz się na niego przy czymś, co musi być czytelne.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie Obraz do PDF",
      body: "Przejdź do narzędzia Obraz do PDF w przeglądarce. Przyjmuje JPG, PNG i WebP i działa w całości na Twoim urządzeniu — bez przesyłania, bez konta.",
    },
    {
      title: "Dodaj swoje pliki JPG",
      body: "Przeciągnij zdjęcia na pole docelowe albo kliknij, żeby je wybrać. Dodaj tyle, ile potrzebujesz — każdy obraz staje się jedną stroną PDF-a.",
    },
    {
      title: "Ułóż je we właściwej kolejności",
      body: "Użyj strzałek w górę i w dół przy każdym wierszu, żeby ustawić kolejność stron. Przy wielostronicowym dokumencie to najważniejszy krok — strona druga umowy musi być za stroną pierwszą.",
    },
    {
      title: "Utwórz PDF",
      body: "Kliknij Utwórz PDF. Każdy obraz trafia na osobną stronę dopasowaną do rozmiaru zdjęcia, a połączony plik powstaje lokalnie.",
    },
    {
      title: "Pobierz i zmień nazwę",
      body: "PDF pobiera się automatycznie. Nadaj mu opisową nazwę przed wysłaniem — „Paragony-marzec.pdf” jest lepsze niż „IMG_4821.pdf” w czyjejś skrzynce.",
    },
    {
      title: "Skompresuj, jeśli plik ma trafić na maila",
      body: "Pliki PDF ze zdjęć szybko robią się duże. Jeśli plik przekracza typowy limit załączników 25 MB, przepuść go przez narzędzie Kompresuj PDF przed wysłaniem.",
    },
  ],
  tips: [
    "Przytnij i wyprostuj każde zdjęcie przed konwersją. Narzędzie dopasowuje rozmiar strony do obrazu, więc krzywe zdjęcie oznacza krzywą stronę.",
    "Dobre, równomierne oświetlenie bije każdy filtr przy zdjęciach dokumentów. Unikaj cieni własnej dłoni czy telefonu padających na stronę.",
    "JPG dobrze kompresuje zdjęcia, ale rozmazuje drobny tekst i ostre krawędzie. Przy zrzutach ekranu i wszystkim z wyraźnym drukiem PNG zachowuje tekst czystszym — zobacz poradnik PNG to PDF.",
    "Zdjęcia z iPhone'a często są zapisywane jako HEIC, a nie JPG. Narzędzie w przeglądarce potrzebuje JPG, PNG lub WebP, więc albo przełącz aparat na „Najbardziej kompatybilny” w Ustawieniach, albo użyj aplikacji PDF Editor, która czyta HEIC bezpośrednio.",
    "Zdjęcie dokumentu to nie przeszukiwalny skan — nie ma warstwy tekstowej, więc nie da się wyszukać ani skopiować słów. Jeśli to ważne, skorzystaj ze sposobu pracy opartego na skanowaniu.",
  ],
  mobileNote:
    "Większość plików JPG powstaje na telefonie, i to właśnie tam błyszczy aplikacja PDF Editor: pobiera zdjęcia bezpośrednio z rolki aparatu (w tym HEIC), zamienia je w PDF i potrafi zeskanować nowe strony z wykrywaniem krawędzi — bez konieczności przechodzenia przez komputer.",
  faq: [
    {
      q: "Czy mogę połączyć kilka JPG-ów w jeden PDF?",
      a: "Tak — to główne zastosowanie. Dodaj wszystkie obrazy, przeciągnij je w odpowiedniej kolejności, a staną się kolejnymi stronami jednego pliku PDF.",
    },
    {
      q: "Czy moje zdjęcia są gdziekolwiek przesyłane?",
      a: "Nie. Konwersja odbywa się w przeglądarce na Twoim własnym urządzeniu. Twoje obrazy go nie opuszczają, co ma znaczenie przy dowodach tożsamości i dokumentach osobistych.",
    },
    {
      q: "Moje zdjęcia z iPhone'a się nie wczytują — dlaczego?",
      a: "Prawdopodobnie to pliki HEIC, których narzędzie w przeglądarce nie odczytuje. Zmień format aparatu na „Najbardziej kompatybilny” w Ustawienia → Aparat → Formaty, albo użyj aplikacji PDF Editor, która obsługuje HEIC.",
    },
    {
      q: "Czy PDF będzie przeszukiwalny?",
      a: "Nie. Przekonwertowane zdjęcie to obraz bez warstwy tekstowej, więc słów nie da się wyszukać ani zaznaczyć. Żeby uzyskać przeszukiwalny dokument, zeskanuj go z rozpoznawaniem tekstu w aplikacji PDF Editor.",
    },
    {
      q: "Dlaczego mój PDF jest taki duży?",
      a: "Zdjęcia z telefonu w wysokiej rozdzielczości są duże, a kilka z nich szybko się sumuje. Przepuść wynik przez narzędzie Kompresuj PDF, żeby zmieścić się w limitach maila i portali.",
    },
  ],
  related: [
    {
      label: "Obraz do PDF — łącz pliki JPG w przeglądarce",
      path: "/image-to-pdf",
    },
    {
      label: "Kompresuj PDF — zmniejsz wynik do wysyłki mailem",
      path: "/compress-pdf",
    },
    {
      label: "Jak przekonwertować PNG do PDF",
      path: "/guides/how-to-convert-png-to-pdf",
    },
    {
      label: "Jak przekonwertować zdjęcia do PDF na iPhonie",
      path: "/guides/how-to-convert-photos-to-pdf-on-iphone",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
