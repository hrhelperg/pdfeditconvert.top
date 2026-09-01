import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "common-pdf-mistakes-to-avoid",
  h1: "Częste błędy przy pracy z PDF, których warto unikać",
  description:
    "Błędy z PDF, które marnują czas albo wyciekają informacje – zbyt mocna kompresja, wysyłanie zdjęć zamiast dokumentów, przesyłanie wrażliwych plików, zapominanie o stronach – i jak ich uniknąć.",
  updated: "2026-05-23",
  intro: [
    "Większość problemów z PDF-ami to nie kwestie techniczne – to nawyki, których da się uniknąć. Plik, który odbił się, bo nikt go nie skompresował; zdjęcie wysłane zamiast dokumentu; umowa przesłana na przypadkowy serwer; strona, która nie powinna wyjść na zewnątrz, ale wyszła. Każdy z tych błędów jest drobny, każdy powszechny i każdy łatwy do powstrzymania, gdy już wiesz, na co uważać.",
    "Ten poradnik zbiera błędy, które ludzie najczęściej popełniają z PDF-ami, dlaczego każdy z nich boli i jaka jest szybka poprawka. Kilka poprawek korzysta z darmowych narzędzi działających na urządzeniu na tej stronie; wszystkie są bardziej nawykami niż funkcjami.",
    "Przeczytaj to raz, a złapiesz się, zanim dojdzie do kolejnej wpadki, której dało się uniknąć – co przy dokumentach podróżujących do klientów, współpracowników i instytucji jest warte więcej, niż się wydaje.",
  ],
  steps: [
    {
      title: "Wysyłanie zdjęcia zamiast dokumentu",
      body: "JPG strony jest krzywy, nieprzeszukiwalny i niewygodny do druku czy archiwizacji. Jeśli to dokument, najpierw przekonwertuj go na PDF narzędziem Obraz do PDF albo porządnie zeskanuj – nie zostawiaj odbiorcy zwykłego ujęcia do ogarnięcia.",
    },
    {
      title: "Przesyłanie wrażliwych plików do nieznanych narzędzi",
      body: "Wrzucenie umowy albo dowodu tożsamości do pierwszego lepszego serwisu „darmowy PDF online” przesyła je na serwer obcej osoby. Do wszystkiego, czego czytanie przez kogoś Ci przeszkadza, używaj narzędzi działających na urządzeniu, w przeglądarce.",
    },
    {
      title: "Kompresowanie na maksimum z przyzwyczajenia",
      body: "Ustawianie kompresji na maksimum przy każdym pliku degraduje dokumenty, które tego nie potrzebowały. Użyj najlżejszego poziomu, który spełnia Twój cel rozmiaru, i nie kompresuj plików, które już są małe.",
    },
    {
      title: "Zapominanie o sprawdzeniu stron przed wysłaniem",
      body: "Wewnętrzne notatki, dane poprzedniego odbiorcy, pusta strona ze skanera – to jedzie razem niezauważone. Przejrzyj stronę po stronie i usuń to, co nie powinno wyjść, narzędziem Wyodrębnij strony PDF.",
    },
    {
      title: "Wysyłanie edytowalnego pliku jako „ostatecznego”",
      body: "Gotowa wycena albo umowa wysłana jako dokument Word może zostać zmieniona – przypadkiem albo nie. Przekonwertuj ostateczne wersje na PDF, żeby układ i liczby były stałe.",
    },
    {
      title: "Nadpisywanie jedynego oryginału",
      body: "Kompresja, konwersja i edycja są jednokierunkowe dla kopii, którą zachowujesz. Zawsze zapisuj edytowane wersje pod nową nazwą, żeby nietknięty oryginał przetrwał pomyłkę.",
    },
  ],
  tips: [
    "Traktuj „czy to dokument, czy obraz?” jako pierwsze pytanie. Dokumenty idą jako PDF; jako JPG idą tylko prawdziwe zdjęcia.",
    "Prywatność to nawyk, nie ustawienie. Domyślnie wybieraj narzędzia działające na urządzeniu do wrażliwych plików, żeby nigdy nie musieć pamiętać o ostrożności.",
    "Kompresuj świadomie, nie odruchowo – dopasuj poziom do celu i pomiń kompresję plików, które już mają sensowny rozmiar.",
    "Dziesięciosekundowa kontrola strona po stronie przed wysłaniem zapobiega najbardziej krępującym błędom z PDF-ami, jakie istnieją.",
    "Zachowuj oryginały. Niemal każda operacja na PDF-ie jest odwracalna tylko wtedy, gdy nie nadpisałeś źródła.",
  ],
  mobileNote:
    "Wiele z tych potknięć dzieje się w pośpiechu wysyłania czegoś z telefonu. Aplikacja PDF Editor pozwala przyciąć zbłąkaną stronę, sensownie skompresować, przekonwertować zdjęcie i zablokować wersję ostateczną – wszystko na urządzeniu – więc pospieszne udostępnienie nie zamienia się w błąd, za który musisz przepraszać.",
  faq: [
    {
      q: "Jaki jest najczęstszy błąd z PDF-ami?",
      a: "Wysłanie zdjęcia JPG, gdy odbiorca potrzebował dokumentu. Jest krzywe, nieprzeszukiwalne i trudne do druku czy archiwizacji. Rozwiązuje to najpierw przekonwertowanie zdjęcia na PDF.",
    },
    {
      q: "Dlaczego przesyłanie PDF-ów do darmowych narzędzi jest ryzykowne?",
      a: "Wiele narzędzi „online” przesyła Twój plik na serwer, więc umowa albo dowód tożsamości przez chwilę żyją na infrastrukturze, nad którą nie masz kontroli. Narzędzia działające na urządzeniu, w przeglądarce, całkowicie tego unikają.",
    },
    {
      q: "Czy więcej kompresji zawsze jest lepsze?",
      a: "Nie. Nadmierna kompresja degraduje dokumenty, które jej nie potrzebowały, i niczego nie daje plikom, które już są małe. Użyj najlżejszego poziomu, który trafia w Twój cel rozmiaru.",
    },
    {
      q: "Jak uniknąć wysłania niewłaściwych stron?",
      a: "Przejrzyj dokument strona po stronie przed wysłaniem i usuń wszystko, co nie powinno wyjść, narzędziem Wyodrębnij strony PDF. Wewnętrzne notatki i zbłąkane strony to zwykli winowajcy.",
    },
    {
      q: "Dlaczego nie powinienem nadpisywać oryginalnego pliku?",
      a: "Kompresja, konwersja i edycje są jednokierunkowe dla kopii, którą zachowujesz. Zapisanie pod nową nazwą zachowuje oryginał, więc pomyłkę łatwo cofnąć.",
    },
  ],
  related: [
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
    { label: "Jak przygotować PDF przed udostępnieniem", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Narzędzia PDF stawiające na prywatność", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF czy JPG dla dokumentów", path: "/guides/pdf-vs-jpg-for-documents" },
  ],
  parentHub: { label: "Darmowe narzędzia PDF", path: "/pdf-tools" },
};

export default content;
