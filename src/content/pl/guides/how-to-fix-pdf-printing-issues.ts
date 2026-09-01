import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-printing-issues",
  h1: "Jak naprawić problemy z drukowaniem PDF (ucięte strony, zła skala, brakujący tekst)",
  description:
    "Gdy PDF drukuje się przycięty, w złej skali albo z brakującym tekstem, rozwiązanie zależy od objawu. Krótka tabela łącząca każdy problem z druku z właściwym ustawieniem lub poprawką przed wydrukiem.",
  updated: "2026-05-29",
  intro: [
    "PDF-y stworzono tak, żeby dokument wyglądał tak samo wszędzie – również na papierze. Więc gdy któryś drukuje się źle, to niemal zawsze wina zadania druku, nie pliku. Strona jest większa niż papier, drukarka skaluje w dół, czcionka nie jest osadzona, flaga zabezpieczeń blokuje druk, albo dokument został przygotowany pod format papieru, którego nie masz.",
    "Każda z tych sytuacji daje inny objaw: ucięte krawędzie, maleńki tekst, puste strony, okna błędów albo dziwne czcionki zastępcze. Traktowanie wszystkiego jako „drukarka jest zepsuta” marnuje mnóstwo papieru. Traktowanie tego jako konkretnych problemów z konkretnymi poprawkami oszczędza czas.",
    "Ten poradnik to krótka tabela: co widzisz kontra najbardziej prawdopodobna przyczyna i właściwa poprawka. Większość poprawek to ustawienia w oknie druku albo szybki krok przed wydrukiem.",
  ],
  steps: [
    {
      title: "Jeśli krawędzie są ucinane, ustaw „Dopasuj do obszaru druku”",
      body: "Wiele PDF-ów jest przygotowanych pod pełny spad papieru; drukarki nie potrafią drukować aż do krawędzi. W oknie druku wybierz „Dopasuj” albo „Zmniejsz do obszaru druku” zamiast „Rzeczywisty rozmiar”. Strona zmniejszy się bardzo nieznacznie i przestanie tracić krawędzie.",
    },
    {
      title: "Jeśli tekst jest maleńki, sprawdź niezgodność rozmiaru papieru",
      body: "Dokument przygotowany do druku na A3, drukowany na Letter, zmniejszy się, żeby się zmieścić. Wyeksportuj ponownie źródło w docelowym rozmiarze papieru albo podziel rozkładówkę na dwie strony narzędziem Wyodrębnij strony PDF, zanim wydrukujesz ponownie.",
    },
    {
      title: "Gdy strony drukują się puste albo z brakującym tekstem, osadź czcionki",
      body: "Dokumenty korzystające z czcionek, których nie ma Twoja drukarka, mogą renderować brakujące znaki. Wyeksportuj ponownie z włączoną opcją „osadź wszystkie czcionki” w aplikacji źródłowej albo najpierw użyj wydruku do PDF, żeby spłaszczyć wszystko do zrastrowanych pikseli.",
    },
    {
      title: "Przy błędach „dokument jest zabezpieczony” sprawdź uprawnienia edycji",
      body: "Niektóre PDF-y są eksportowane z flagami blokującymi druk. Tylko autor może je usunąć. Jeśli to Twój plik, wyeksportuj ponownie bez ograniczenia druku. Jeśli nie, poproś o kopię z dozwolonym drukiem.",
    },
    {
      title: "Obróć strony przed drukiem, jeśli orientacja jest zła",
      body: "Jeśli strony są bokiem albo do góry nogami, popraw je przed wysłaniem do drukarki narzędziem Obróć PDF. Obracanie po stronie drukarki często wprowadza własne problemy ze skalą – poprawka w pliku jest czystsza.",
    },
    {
      title: "Wydrukuj stronę testową z wyodrębnienia jednej strony",
      body: "Nie marnuj 50-stronicowego dokumentu, żeby odkryć problem z drukiem. Wyodrębnij strony PDF może zapisać jedną stronę jako samodzielny PDF; wydrukuj ją, potwierdź ustawienia, a potem uruchom pełne zadanie.",
    },
  ],
  tips: [
    "Zawsze sprawdź, czy rozmiar papieru wybrany w oknie druku pasuje do rozmiaru strony PDF – niezgodność Letter kontra A4 powoduje większość objawów „za małe”.",
    "Najpierw wydrukuj do PDF, jeśli plik się dziwnie zachowuje. Spłaszczona kopia często drukuje się czysto tam, gdzie oryginał zawodzi.",
    "Ustawienia broszury i szycia zeszytowego powodują więcej problemów z drukiem, niż rozwiązują – najpierw wydrukuj proste strony, a potem w razie potrzeby przełóż je fizycznie.",
    "Profile kolorów z oprogramowania projektowego mogą dawać ciemne albo mętne wydruki na domowych drukarkach. Ponowny eksport w sRGB zwykle to naprawia.",
    "Jeśli sterownik drukarki jest stary, ponowny eksport przez wydruk do PDF może ukryć funkcje, których sterownik nie obsługuje.",
  ],
  mobileNote:
    "Drukowanie z telefonu zwykle przechodzi przez AirPrint, Google Print albo aplikację producenta, a każda z nich obsługuje PDF trochę inaczej. Aplikacja PDF Editor pozwala dopasować rozmiar, obrócić i przyciąć strony przed wysłaniem – naprawianie PDF-a zamiast walki z oknem druku zwykle lepiej sprawdza się na telefonie.",
  faq: [
    {
      q: "Dlaczego mój PDF drukuje się mniejszy niż na ekranie?",
      a: "Niemal zawsze dlatego, że rozmiar dokumentu nie pasuje do rozmiaru papieru. Drukarka skaluje w dół, żeby dopasować. Wyeksportuj ponownie w docelowym rozmiarze papieru albo użyj „Rzeczywisty rozmiar” z pasującym papierem.",
    },
    {
      q: "Dlaczego niektóre znaki znikają na wydruku?",
      a: "Czcionki nie były osadzone, a Twoja drukarka ich nie ma. Wyeksportuj ponownie z osadzonymi czcionkami albo najpierw wydrukuj do PDF, żeby spłaszczyć wszystko.",
    },
    {
      q: "Dlaczego okno druku mówi, że mój PDF jest zabezpieczony?",
      a: "Ma flagę uprawnień blokującą druk. Tylko autor może ją usunąć. Nie ma bezpiecznego sposobu na obejście tego po stronie odbiorcy.",
    },
    {
      q: "Czy powinienem obracać strony w drukarce, czy w pliku?",
      a: "W pliku. Obracanie w drukarce może wprowadzić skalowanie, podczas gdy Obróć PDF wypieka orientację bezpośrednio w dokumencie.",
    },
    {
      q: "Jak uniknąć marnowania papieru przy diagnozowaniu problemów z drukiem?",
      a: "Najpierw wyodrębnij jedną stronę, wydrukuj ją, potwierdź ustawienia, a potem uruchom pełne zadanie. Wyodrębnij strony PDF robi to w Twojej przeglądarce.",
    },
  ],
  related: [
    { label: "Obróć PDF — popraw orientację przed drukiem", path: "/rotate-pdf" },
    { label: "Wyodrębnij strony PDF — najpierw wydrukuj testowo jedną stronę", path: "/extract-pdf-pages" },
    { label: "Jak naprawić problemy z formatowaniem PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Jak naprawić problemy z czcionkami w PDF", path: "/guides/how-to-fix-pdf-font-issues" },
  ],
  parentHub: { label: "Narzędzia PDF — darmowe, w przeglądarce", path: "/pdf-tools" },
};

export default content;
