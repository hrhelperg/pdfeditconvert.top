import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-size-before-uploading",
  h1: "Jak zmniejszyć PDF przed przesłaniem na portal",
  description:
    "Portale do przesyłania plików odrzucają duże pliki ostrzej niż poczta e-mail. Jak sprowadzić PDF poniżej ciasnych limitów portalu bez utraty czytelności, którą tam sprawdzają.",
  updated: "2026-05-23",
  intro: [
    "Portale do przesyłania plików są bardziej rygorystyczne niż poczta e-mail. Formularz urzędowy, system rekrutacyjny, portal podatkowy czy kadrowy często ogranicza PDF do 2, 4 albo 5 MB i odrzuca wszystko, co większe, krótkim błędem bez drugiej szansy. Co gorsza, zwykle są to dokumenty zeskanowane – czyli pliki najbardziej narażone na to, że będą za duże.",
    "Ten poradnik pokazuje, jak pokonać te limity za pomocą darmowego narzędzia Kompresuj PDF, które działa w Twojej przeglądarce bez przesyłania niczego. Haczyk z portalami polega na tym, że dokument musi zostać czytelny – zarówno odrzucone przesłanie, jak i nieczytelny plik to porażka – więc trzeba znaleźć równowagę.",
    "Omówimy, jak trafić w konkretny docelowy rozmiar, co zrobić, gdy limit portalu jest drastycznie niski, i jak zachować dokument na tyle czytelny, by przeszedł jakąkolwiek weryfikację po drugiej stronie.",
  ],
  steps: [
    {
      title: "Znajdź dokładny limit portalu",
      body: "Przeczytaj drobny druk przy polu przesyłania pliku. Portale podają sztywny limit – często 2–5 MB – i odrzucają wszystko powyżej niego. Ta liczba to Twój cel.",
    },
    {
      title: "Otwórz narzędzie Kompresuj PDF",
      body: "Przejdź do narzędzia Kompresuj PDF. Przetwarza plik na Twoim urządzeniu, co ma znaczenie, bo dokumenty przesyłane na portale to zwykle pliki osobiste lub urzędowe.",
    },
    {
      title: "Kompresuj w kierunku limitu",
      body: "Zacznij od poziomu Zalecany; przy ciasnym limicie przejdź do Mocnego. Narzędzie pokazuje wynikowy rozmiar, więc od razu widzisz, czy zmieściłeś się w limicie.",
    },
    {
      title: "Sprawdź, czy plik nadal jest czytelny",
      body: "Otwórz skompresowany plik. Portale odrzucają zbyt duże pliki, a osoby weryfikujące odrzucają te nieczytelne – dokument musi spełnić oba warunki. Sprawdź, czy tekst czyta się wygodnie.",
    },
    {
      title: "Jeśli nie da się zmieścić w limicie, zmniejsz liczbę stron",
      body: "Jeśli sama kompresja nie sprowadzi pliku poniżej bardzo niskiego limitu, usuń zbędne strony narzędziem Wyodrębnij strony PDF albo, jeśli portal na to pozwala, prześlij wymagane sekcje osobno.",
    },
    {
      title: "Prześlij plik o odpowiednim rozmiarze",
      body: "Wyślij skompresowaną wersję. Zachowaj oryginał w pełnej jakości na wypadek, gdyby portal później poprosił o wyraźniejszą kopię.",
    },
  ],
  tips: [
    "Znajdź dokładny limit, zanim zaczniesz kompresować. Kompresowanie na oślep to strata wysiłku; podany limit 4 MB mówi Ci dokładnie, jak mocno kompresować.",
    "Portale wymagają podwójnego zaliczenia: pliku wystarczająco małego, by go przesłać, i wystarczająco wyraźnego, by go odczytać. Mocna kompresja, która zamienia formularz w papkę, nie przejdzie weryfikacji, nawet jeśli przesyłanie się powiedzie.",
    "Zeskanowane dokumenty do wniosków kompresują się drastycznie, więc nawet limit 2 MB jest zwykle osiągalny – to niemal wyłącznie dane obrazowe.",
    "Jeśli limit jest niemożliwy do osiągnięcia przy wielostronicowym skanie, usunięcie pustych lub nieistotnych stron zmniejsza rozmiar bez utraty jakości.",
    "Zachowaj oryginał. Osoba weryfikująca, która nie odczyta jakiegoś szczegółu, może poprosić o wyraźniejszą kopię – warto mieć gotowy plik w pełnej jakości.",
  ],
  mobileNote:
    "Wiele przesyłek na portale odbywa się z telefonu – robisz zdjęcie dokumentu i od razu je wysyłasz. Aplikacja PDF Editor kompresuje offline i pozwala z góry sprawdzić czytelność, zanim prześlesz plik, więc nie wyślesz czegoś zbyt dużego albo zbyt rozmytego, by przeszło weryfikację.",
  faq: [
    {
      q: "Dlaczego portale odrzucają mój PDF, choć e-mail go akceptuje?",
      a: "Portale ustawiają znacznie ciaśniejsze limity – często 2–5 MB w porównaniu z około 25 MB w mailu – i egzekwują je rygorystycznie. Plik, który spokojnie przechodzi przez pocztę, może być zdecydowanie za duży dla portalu.",
    },
    {
      q: "Jak trafić w konkretny docelowy rozmiar?",
      a: "Skompresuj i sprawdź wynikowy rozmiar, zwiększając poziom, aż zmieścisz się w limicie. Narzędzie pokazuje wartości przed i po, więc możesz celować precyzyjnie.",
    },
    {
      q: "Co jeśli nawet Mocna kompresja nie wystarczy?",
      a: "Usuń zbędne strony narzędziem Wyodrębnij strony PDF albo, jeśli portal na to pozwala, prześlij wymagane sekcje osobno. To zmniejsza rozmiar bez dalszego pogarszania pozostałych stron.",
    },
    {
      q: "Czy mój dokument jest przesyłany na Wasze serwery, gdy go kompresuję?",
      a: "Nie. Narzędzie Kompresuj PDF działa w Twojej przeglądarce, na Twoim urządzeniu – to ma znaczenie, bo dokumenty przesyłane na portale to zwykle pliki osobiste lub urzędowe.",
    },
    {
      q: "Czy mocna kompresja sprawi, że portal odrzuci plik jako nieczytelny?",
      a: "Może się tak zdarzyć. Portale potrzebują pliku wystarczająco małego, by go przesłać, i wystarczająco wyraźnego, by go odczytać. Sprawdź czytelność po kompresji i zachowaj oryginał na wypadek dalszych próśb.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — zmieść się w limicie portalu", path: "/compress-pdf" },
    { label: "Wyodrębnij strony PDF — usuń strony, by zmniejszyć rozmiar", path: "/extract-pdf-pages" },
    { label: "Najlepsze ustawienia kompresji PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Jak zmniejszyć rozmiar PDF do wysyłki mailem", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Kompresuj PDF", path: "/compress-pdf" },
};

export default content;
