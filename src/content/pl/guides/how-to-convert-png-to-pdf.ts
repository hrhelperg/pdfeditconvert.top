import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-png-to-pdf",
  h1: "Jak przekonwertować PNG do PDF — ostre zrzuty ekranu i grafiki",
  description:
    "Zamień zrzuty ekranu, diagramy i grafiki PNG w jeden plik PDF prosto w przeglądarce. Dlaczego PNG zachowuje ostry tekst i co dzieje się z przezroczystością.",
  updated: "2026-05-23",
  intro: [
    "PNG to format, który dostajesz, robiąc zrzut ekranu, eksportując wykres albo zapisując grafikę z ostrymi krawędziami. W przeciwieństwie do JPG jest bezstratny, więc tekst i cienkie linie pozostają ostre, zamiast rozmywać się przez kompresję. To sprawia, że PNG jest dobrym punktem wyjścia, gdy chcesz zebrać zrzuty ekranu lub diagramy w PDF, który pozostanie czytelny.",
    "Ten poradnik korzysta z darmowego narzędzia Obraz do PDF, żeby połączyć pliki PNG w jeden dokument bezpośrednio w przeglądarce, bez przesyłania niczego na serwer. Typowe zastosowania: sekwencja zrzutów ekranu interfejsu do przeglądu, wyeksportowane wykresy do raportu albo grafika, której ktoś potrzebuje jako gotowego do druku i udostępnienia pliku, a nie luźnego obrazu.",
    "Jest jedna specyficzna dla PNG rzecz, o której warto wiedzieć — przezroczystość — i omówimy, co się z nią dzieje, gdy PNG zamienia się w stronę PDF.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie Obraz do PDF",
      body: "Przejdź do narzędzia Obraz do PDF w przeglądarce. Obsługuje PNG, JPG i WebP i działa w całości na Twoim urządzeniu, bez przesyłania i bez konta.",
    },
    {
      title: "Dodaj swoje pliki PNG",
      body: "Przeciągnij zrzuty ekranu lub grafiki na pole docelowe albo kliknij, żeby je wybrać. Każdy PNG staje się jedną stroną gotowego PDF-a.",
    },
    {
      title: "Ustaw kolejność stron",
      body: "Użyj strzałek w górę i w dół, żeby ułożyć zrzuty ekranu w kolejności, która opowiada historię — krok pierwszy przed krokiem drugim.",
    },
    {
      title: "Wygeneruj PDF",
      body: "Kliknij Utwórz PDF. Narzędzie umieszcza każdy obraz na osobnej stronie w jego wymiarach i buduje połączony plik lokalnie.",
    },
    {
      title: "Pobierz dokument",
      body: "PDF pobiera się automatycznie. Zmień nazwę, żeby pasowała do zawartości — dzięki temu łatwo go znaleźć, a każdy, kto go otworzy, od razu wie, co to za plik.",
    },
    {
      title: "Sprawdź, czy strony wyświetlają się ostro",
      body: "Otwórz PDF i przybliż dowolny tekst. PNG zachowuje ostry druk, więc zrzuty ekranu pulpitów, kodu czy regulaminów powinny pozostać czytelne.",
    },
  ],
  tips: [
    "PNG jest lepszym wyborem niż JPG zawsze, gdy obraz zawiera tekst, interfejs albo ostre linie — kompresja JPG zmiękcza właśnie te krawędzie.",
    "Przezroczyste obszary PNG nie pozostają przezroczyste na stronie PDF — wyświetlają się na białym tle. Jeśli logo zaprojektowałeś na przezroczystym tle, znajdzie się na białym, co zwykle nie stanowi problemu.",
    "Zrzuty całej strony bywają wysokie i wąskie. Konwertują się bez problemu, ale rozważ przycięcie do istotnego fragmentu, żeby strona nie była w większości pusta.",
    "Pliki PNG są większe niż JPG dla tego samego obrazu. Długi ciąg zrzutów ekranu w wysokiej rozdzielczości może dać ciężki PDF — skompresuj go, jeśli wynik trafi na maila.",
    "Jeśli potrzebujesz jednolitego rozmiaru strony (wszystko dopasowane do A4), a nie stron dopasowanych do każdego obrazu, taką kontrolę daje aplikacja PDF Editor.",
  ],
  mobileNote:
    "Zrzuty ekranu piętrzą się na telefonach. Aplikacja PDF Editor zamienia ich partię w jeden PDF w kilka dotknięć i pozwala dodać adnotacje albo zakreślić istotny fragment przed udostępnieniem — przydatne przy zgłoszeniach błędów i szybkich przeglądach w podróży.",
  faq: [
    {
      q: "Dlaczego wybrać PNG zamiast JPG do PDF-a?",
      a: "PNG jest bezstratny, więc tekst, zrzuty ekranu i diagramy pozostają ostre. JPG jest stratny i zmiękcza drobne krawędzie. Jeśli Twoje obrazy zawierają druk lub interfejs, PNG daje czystszy PDF.",
    },
    {
      q: "Co dzieje się z przezroczystym tłem?",
      a: "Strona PDF nie jest przezroczysta, więc przezroczyste obszary wyświetlają się na białym tle. Logo lub ikona z przezroczystym tłem po prostu znajdą się na białej stronie.",
    },
    {
      q: "Czy moje pliki są przesyłane?",
      a: "Nie. Wszystko odbywa się w przeglądarce, na Twoim urządzeniu. Twoje zrzuty ekranu i grafiki go nie opuszczają.",
    },
    {
      q: "Czy mogę mieszać PNG i JPG w tym samym PDF-ie?",
      a: "Tak. Narzędzie przyjmuje PNG, JPG i WebP razem, więc możesz połączyć zrzut ekranu, zdjęcie i wyeksportowany wykres w jeden dokument.",
    },
    {
      q: "PDF wyszedł duży — co mogę zrobić?",
      a: "Strony PNG są ciężkie. Przepuść plik przez narzędzie Kompresuj PDF, żeby zmieścić się w limitach maila i portali, akceptując niewielki kompromis jakościowy.",
    },
  ],
  related: [
    {
      label: "Obraz do PDF — łącz pliki PNG w przeglądarce",
      path: "/image-to-pdf",
    },
    { label: "PDF to images — konwersja odwrotna", path: "/pdf-to-images" },
    {
      label: "Jak przekonwertować JPG do PDF",
      path: "/guides/how-to-convert-jpg-to-pdf",
    },
    {
      label: "Jak przekonwertować WebP do PDF",
      path: "/guides/how-to-convert-webp-to-pdf",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
