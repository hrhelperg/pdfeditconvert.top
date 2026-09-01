import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-before-sharing",
  h1: "Jak przygotować PDF przed udostępnieniem (checklista)",
  description:
    "Checklista przed wysłaniem pliku PDF: usuń zbędne strony, popraw orientację, zmniejsz rozmiar i oznacz wersje robocze. Wyślij czysty, odpowiednio duży i przemyślany dokument.",
  updated: "2026-05-23",
  intro: [
    "Minuta przed naciśnięciem wyślij to najtańszy moment na wyłapanie problemu z PDF-em. Gdy plik znajdzie się już w czyjejś skrzynce, pusta strona, skan bokiem, rozmiar 40 MB czy wewnętrzna notatka, o której zapomniałeś, stają się także problemem odbiorcy — a Twoim powodem do przeprosin. Krótki, świadomy przegląd przed wysłaniem zapobiega niemal wszystkiemu.",
    "Ten poradnik to właśnie taki przegląd: praktyczna checklista, która zajmuje kilka minut i korzysta z darmowych narzędzi w przeglądarce, z których każde działa na Twoim urządzeniu bez przesyłania niczego. Jest przeznaczona do dokumentów, które faktycznie trafiają do innych ludzi — ofert, umów, wniosków, raportów.",
    "Nie chodzi tu o dopieszczanie dla samego dopieszczania. Chodzi o to, żeby odbiorca, otwierając Twój plik, znalazł dokładnie to, czego się spodziewał, w rozmiarze, który da się realnie odebrać, i bez niczego zbędnego dołączonego.",
  ],
  steps: [
    {
      title: "Potwierdź, że to właściwa, ostateczna wersja",
      body: "Otwórz plik i sprawdź, czy to najnowsza, w pełni zredagowana wersja robocza. PDF to migawka — poprawienie literówki po wysłaniu oznacza ponowną wysyłkę.",
    },
    {
      title: "Usuń wszystko, co nie powinno zostać wysłane",
      body: "Pozbądź się pustych stron, stron tytułowych, wewnętrznych notatek i stron przeznaczonych dla kogoś innego, zachowując tylko to, co powinno zostać, za pomocą narzędzia Wyodrębnij strony PDF.",
    },
    {
      title: "Popraw orientację i kolejność",
      body: "Użyj narzędzia Obróć PDF na stronach bokiem i narzędzia Zmień kolejność stron PDF na wszystkim, co jest w złej kolejności, żeby dokument czytał się gładko od początku do końca.",
    },
    {
      title: "Sprowadź rozmiar poniżej limitu",
      body: "Jeśli plik jest ciężki — winne są zwykle skany i zdjęcia — przepuść go przez narzędzie Kompresuj PDF, żeby zmieścić się w typowych limitach maila i portali wynoszących 10–25 MB.",
    },
    {
      title: "Oznacz status, jeśli to nie wersja ostateczna",
      body: "Jeśli udostępniasz wersję roboczą do przeglądu, dodaj znak wodny WERSJA ROBOCZA za pomocą narzędzia Dodaj znak wodny do PDF, żeby nikt nie pomylił jej z podpisaną wersją.",
    },
    {
      title: "Nadaj jasną nazwę i wyślij",
      body: "Nadaj mu opisową nazwę z datą, żeby od razu było wiadomo, o co chodzi w skrzynce odbiorcy i żeby łatwo było go później znaleźć, a potem załącz albo prześlij.",
    },
  ],
  tips: [
    "Najczęstsze przeoczenie przed wysłaniem to strona, której tam nie powinno być — pusta, zduplikowana albo z danymi przeznaczonymi dla kogoś innego. Sprawdzaj stronę po stronie.",
    "Dopasuj rozmiar do kanału: mail ogranicza do około 25 MB, wiele portali znacznie mniej. Kompresja pliku pełnego skanów zwykle rozwiązuje sprawę.",
    "Znak wodny WERSJA ROBOCZA albo POUFNE ustawia oczekiwania i zapobiega traktowaniu wersji roboczej jako ostatecznej — tania polisa dla wszystkiego, co jeszcze nie zostało podpisane.",
    "Jasna nazwa pliku to część przygotowania dokumentu. To pierwsza rzecz, którą widzi odbiorca, i to, czego będziesz szukać później.",
    "Przy czymkolwiek naprawdę wrażliwym rozważ także hasło — przygotowanie to nie tylko porządek, to też nieujawnianie zbyt wiele.",
  ],
  mobileNote:
    "Wysyłanie dokumentów prosto z telefonu to właśnie sytuacja, w której szybki przegląd się opłaca. Aplikacja PDF Editor pozwala przyciąć strony, obrócić, skompresować, dodać znak wodny i zmienić nazwę w jednym miejscu, zanim dokument wyjdzie — offline, bez przesyłania niczego.",
  faq: [
    {
      q: "Co powinienem sprawdzić przed wysłaniem PDF-a?",
      a: "Czy to wersja ostateczna, bez zbędnych albo wrażliwych stron, z poprawną orientacją i kolejnością, wystarczająco mała jak na dany kanał, oznaczona, jeśli to wersja robocza, i jasno nazwana. Dwuminutowy przegląd pokrywa to wszystko.",
    },
    {
      q: "Jak upewnić się, że nie udostępniam niewłaściwych stron?",
      a: "Zachowaj tylko te strony, które powinny zostać, za pomocą narzędzia Wyodrębnij strony PDF, i przejrzyj wynik stronę po stronie. Wewnętrzne notatki i dane innych odbiorców często kryją się na stronach, których nie musisz wysyłać.",
    },
    {
      q: "Dlaczego rozmiar pliku ma takie znaczenie?",
      a: "Serwisy pocztowe odrzucają załączniki powyżej mniej więcej 25 MB, a wiele portali ma znacznie niższe limity. PDF pełen skanów łatwo je przekracza, więc kompresja zapobiega odbiciu maila albo odrzuceniu przesyłania.",
    },
    {
      q: "Czy te narzędzia do przygotowania są prywatne?",
      a: "Tak. Narzędzia do wyodrębniania, obracania, zmiany kolejności, kompresji i znaku wodnego działają w przeglądarce, na Twoim urządzeniu — nic nie jest przesyłane.",
    },
    {
      q: "Czy każdy udostępniany PDF powinien być zabezpieczony hasłem?",
      a: "Nie — tylko te naprawdę wrażliwe. Hasło dodaje tarcia dla odbiorcy, więc zarezerwuj je dla dokumentów, których treść naprawdę wymaga ochrony.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — zmniejsz do wysyłki mailem", path: "/compress-pdf" },
    {
      label: "Dodaj znak wodny do PDF — oznaczaj wersje robocze",
      path: "/add-watermark-to-pdf",
    },
    {
      label: "Jak zmniejszyć rozmiar PDF do wysyłki mailem",
      path: "/guides/how-to-reduce-pdf-file-size-for-email",
    },
    {
      label: "Jak udostępnić PDF z telefonu",
      path: "/guides/how-to-share-pdf-from-phone",
    },
  ],
  parentHub: { label: "All free PDF tools", path: "/pdf-tools" },
};

export default content;
