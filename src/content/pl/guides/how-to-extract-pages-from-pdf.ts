import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-extract-pages-from-pdf",
  h1: "Jak wyodrębnić strony z PDF (za darmo, bez przesyłania)",
  description:
    "Wyciągnij konkretne strony lub zakresy z PDF do nowego pliku, prosto w przeglądarce. Idealne, gdy komuś trzeba wysłać tylko wybrane strony.",
  updated: "2026-05-23",
  intro: [
    "Wyodrębnianie stron to odpowiedź na bardzo konkretną potrzebę: ktoś chce część dokumentu, a nie całość. Bank potrzebuje strony 3, formularz wymaga strony z podpisem, przegląd oferty dotyczy tylko sekcji z cenami. Przekazanie całego 40-stronicowego pliku ze słowami „zobacz stronę 12” jest leniwe, a przy czymkolwiek wrażliwym — nieostrożne.",
    "Ten poradnik korzysta z darmowego narzędzia Wyodrębnij strony PDF, które pozwala wybrać potrzebne strony i zapisać je jako zupełnie nowy PDF — wszystko w przeglądarce, bez przesyłania niczego. Oryginał pozostaje nietknięty; dostajesz po prostu czysty plik zawierający tylko to, co wybrałeś.",
    "To jedna z najbardziej użytecznych operacji na PDF-ach właśnie dlatego, że pełni też funkcję narzędzia do prywatności: wysyłasz dokładnie te strony, które są potrzebne, i nic ponadto.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie Wyodrębnij strony PDF",
      body: "Przejdź do narzędzia Wyodrębnij strony PDF w przeglądarce. Działa w całości na Twoim urządzeniu — bez przesyłania, bez konta.",
    },
    {
      title: "Dodaj swój plik PDF",
      body: "Przeciągnij plik na pole docelowe albo kliknij, żeby go wybrać. Narzędzie wczytuje liczbę stron, dzięki czemu możesz wybrać precyzyjnie.",
    },
    {
      title: "Wybierz potrzebne strony",
      body: "Podaj pojedyncze strony albo zakresy — na przykład 3, a potem 8–10. W nowym pliku znajdą się tylko wymienione strony.",
    },
    {
      title: "Utwórz nowy PDF",
      body: "Uruchom wyodrębnianie. Narzędzie buduje nowy PDF zawierający tylko wybrane strony, w wybranej przez Ciebie kolejności.",
    },
    {
      title: "Pobierz i nadaj nazwę",
      body: "Zapisz wyodrębniony plik pod nazwą, która mówi, czym jest — „Strona-z-podpisem.pdf” albo „Sekcja-cenowa.pdf”.",
    },
    {
      title: "Sprawdź przed wysłaniem",
      body: "Otwórz nowy PDF i sprawdź, czy zawiera tylko zamierzone strony. To moment, żeby wyłapać pomyłkę o jedną stronę, zanim plik do kogoś dotrze.",
    },
  ],
  tips: [
    "Wyodrębniaj, gdy chcesz zebrać kilka stron w jednym nowym pliku; dziel, gdy chcesz rozbić dokument na kilka plików. Dopasuj narzędzie do celu.",
    "Wyodrębnianie to cicha korzyść dla prywatności: wysyłając tylko istotne strony, unikasz przypadkowego ujawnienia reszty dokumentu.",
    "Sprawdź numery stron w samym dokumencie, nie w indeksie przeglądarki PDF — strony tytułowe i wkładki mogą przesunąć liczenie o jeden.",
    "Oryginał nigdy nie jest modyfikowany, więc możesz wyodrębniać różne zestawy stron z tego samego pliku tyle razy, ile potrzebujesz.",
    "Żeby usunąć strony, a resztę zachować, wyodrębnij te strony, które chcesz zatrzymać — to najczystszy sposób na pozbycie się kilku niepotrzebnych stron.",
  ],
  mobileNote:
    "Musisz odesłać z telefonu tylko podpisaną stronę? Aplikacja PDF Editor wyodrębnia i udostępnia konkretne strony w kilka dotknięć, offline — więc właściwa strona wychodzi bez przekazywania całego poufnego pliku.",
  faq: [
    {
      q: "Czym wyodrębnianie różni się od dzielenia?",
      a: "Wyodrębnianie zbiera wybrane strony w jeden nowy plik. Dzielenie rozbija PDF na kilka osobnych plików. Użyj wyodrębniania, żeby zebrać konkretne strony, a dzielenia, żeby podzielić dokument.",
    },
    {
      q: "Czy mogę wybrać strony niekolejne?",
      a: "Tak. Podaj razem pojedyncze strony i zakresy, na przykład 1, 4, 9–12, a nowy PDF będzie zawierał dokładnie te strony w tej kolejności.",
    },
    {
      q: "Czy wyodrębnianie zmienia oryginał?",
      a: "Nie. Plik źródłowy PDF pozostaje nienaruszony; narzędzie tworzy nowy plik. Możesz przeprowadzić dowolną liczbę wyodrębnień z tego samego oryginału.",
    },
    {
      q: "Czy mój plik jest przesyłany?",
      a: "Nie. Wyodrębnianie odbywa się w przeglądarce, na Twoim urządzeniu, więc poufne dokumenty pozostają prywatne.",
    },
    {
      q: "Jak usunąć strony zamiast je zachowywać?",
      a: "Wyodrębnij strony, które chcesz zachować — niepotrzebne po prostu się nie znajdą w wyniku. To najprostszy sposób na pozbycie się kilku stron z PDF-a.",
    },
  ],
  related: [
    {
      label: "Wyodrębnij strony PDF — wyciągaj strony w przeglądarce",
      path: "/extract-pdf-pages",
    },
    { label: "Podziel PDF — dziel plik według zakresu", path: "/split-pdf" },
    {
      label: "Jak podzielić PDF na osobne pliki",
      path: "/guides/how-to-split-pdf-files",
    },
    {
      label: "Jak usunąć niepotrzebne strony z PDF",
      path: "/guides/how-to-remove-unwanted-pages-from-pdf",
    },
  ],
  parentHub: { label: "Wyodrębnij strony PDF", path: "/extract-pdf-pages" },
};

export default content;
