import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-digital-study-pdfs",
  h1: "Jak tworzyć cyfrowe materiały do nauki w PDF (fiszki, podsumowania, zestawy)",
  description:
    "Zbuduj własne pliki PDF do nauki z notatek, slajdów i zakreśleń – przeszukiwalne, przenośne, gotowe do adnotacji na tablecie. Struktura, dzięki której naprawdę przydadzą się w czasie egzaminu.",
  updated: "2026-05-29",
  intro: [
    "Samodzielnie zbudowany PDF do nauki to jedno z najlepszych narzędzi na egzamin, jakie możesz mieć. Jest mniejszy niż pełny zestaw cotygodniowych notatek, bardziej uporządkowany niż wątek na czacie z poradami do powtórki i bardziej przenośny niż fizyczne fiszki. Otwórz go na tablecie w przerwie w nauce, w kawiarni, na laptopie w bibliotece – ten sam plik, te same adnotacje, ta sama przeszukiwalność.",
    "Ale PDF do nauki spełnia swoją rolę tylko wtedy, gdy jest uporządkowany. Wrzucenie wszystkich wykładów do jednego pliku jest nieużyteczne; starannie zbudowany pakiet podsumowań to dokument, który faktycznie otwierasz trzy razy w tygodniu przed egzaminem. Różnica tkwi w tym, jak go zbudujesz.",
    "Ten poradnik prowadzi przez sprawdzoną strukturę: co uwzględnić, co pominąć, jak zorganizować materiał do pobieżnego przeglądu, a jak do dogłębnej lektury, i jak utrzymać rozmiar pliku pod kontrolą na tablecie. Zakłada, że budujesz go z istniejących cotygodniowych notatek, slajdów i zakreśleń – nie od zera.",
  ],
  steps: [
    {
      title: "Ustal zakres, zanim zaczniesz budować",
      body: "Jeden PDF do nauki na przedmiot, jeden na główny egzamin (śródsemestralny, końcowy) albo jeden na temat – wybierz ziarnistość, która pasuje do tego, jak naprawdę się uczysz. Mniejsze, skoncentrowane PDF-y biją jeden ogromny pakiet.",
    },
    {
      title: "Zbuduj przejrzystą okładkę i spis treści",
      body: "Kod przedmiotu, nazwa egzaminu, data, poruszone tematy. Jednostronicowy spis treści na początku. Oba są krótkie – pięć minut pisania, a potrajają nawigację.",
    },
    {
      title: "Wyodrębnij kluczowe slajdy i notatki",
      body: "Wyodrębnij strony PDF wyciąga tylko te slajdy i notatki, które są naprawdę potrzebne z większych cotygodniowych pakietów. Nie uwzględniaj całego semestru – tylko części, które mają znaczenie dla tego egzaminu.",
    },
    {
      title: "Połącz w spójnej kolejności",
      body: "Połącz PDF scala wyodrębnione fragmenty w kolejności do nauki: chronologicznie, koncepcyjnie albo według wagi w egzaminie. Użyj kolejności, w jakiej będziesz powtarzać materiał.",
    },
    {
      title: "Zrób adnotacje z wyprzedzeniem",
      body: "Wcześniej zakreśl kluczowe pojęcia, wzory i koncepcje. Adnotacje sprawdzają się lepiej podczas powtórki, gdy nie musisz jednocześnie zakreślać na bieżąco.",
    },
    {
      title: "Skompresuj pod kątem przenośności na tablecie",
      body: "Kompresuj PDF sprowadza pakiet do rozmiaru wygodnego na tablecie – zwykle poniżej 20 MB. Mniejsze pliki szybciej się ładują, płynniej przewijają i mniej obciążają baterię podczas długich sesji nauki.",
    },
  ],
  tips: [
    "Nie dąż do kompletności. PDF do nauki uzupełnia pełne notatki; ich nie zastępuje. Szczegóły zostaw w cotygodniowych pakietach.",
    "Dołącz jedną lub dwie strony ściągi na końcu, ze wzorami, datami, nazwiskami – tym wszystkim, co musisz przypomnieć sobie z marszu w dniu egzaminu.",
    "Odzwierciedlaj strukturę egzaminu. Jeśli egzamin składa się z krótkich odpowiedzi i eseju, zbuduj pakiet do nauki tak samo, żeby ćwiczenia odpowiadały formatowi testu.",
    "Nie przesadzaj z kompresją. Niektóre artefakty tekstu przy silnej kompresji utrudniają czytanie podczas długich sesji nauki. Kompresja średnia zwykle daje właściwą równowagę.",
    "Wyeksportuj plik ponownie po większej sesji z adnotacjami, żeby oznaczenia zostały zapisane jako czytelna treść, a nie tylko warstwa nakładki.",
  ],
  mobileNote:
    "To na tabletach i telefonach PDF-y do nauki są faktycznie używane. Aplikacja PDF Editor obsługuje adnotacje, zakreślanie i wyszukiwanie w zbudowanym przez Ciebie pliku – zamieniając pakiet do nauki w interaktywne narzędzie do powtórki, gdziekolwiek się uczysz.",
  faq: [
    {
      q: "Jak długi powinien być PDF do nauki?",
      a: "Taki, jaki realnie da się przeczytać w dwie lub trzy sesje. Dla większości przedmiotów to 30–80 stron. Powyżej 100 stron i tak pominiesz połowę.",
    },
    {
      q: "Czy uwzględnić wszystkie slajdy, czy tylko kluczowe?",
      a: "Tylko kluczowe. Uwzględnienie wszystkiego rozmywa wartość materiału. Wybierz slajdy, które tłumaczą pojęcia, w których jesteś najsłabszy.",
    },
    {
      q: "Czy cyfrowe fiszki są lepsze od papierowych?",
      a: "Dla większości studentów tak. Są przeszukiwalne, przenośne i przetrwają upuszczenie czy zalanie. Aplikacje do powtórek rozłożonych w czasie dodają jeszcze jedną warstwę korzyści.",
    },
    {
      q: "Czy powinienem udostępnić swój PDF do nauki grupie?",
      a: "To opcjonalne. Niektórym lepiej uczy się z własnym pakietem; inni korzystają na wspólnym. Wypróbuj oba podejścia i sprawdź, które daje lepsze zapamiętywanie.",
    },
    {
      q: "Jak wcześnie powinienem go zbudować?",
      a: "Dwa lub trzy tygodnie przed egzaminem. Wcześniej – zabraknie materiału; później – zabraknie czasu, żeby się z niego nauczyć.",
    },
  ],
  related: [
    { label: "PDF dla studentów — notatki i materiały do nauki", path: "/pdf-for-students" },
    { label: "Połącz PDF — składaj pakiety do nauki", path: "/merge-pdf" },
    { label: "Jak uporządkować materiały do nauki w PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Sposób pracy z PDF dla studentów", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF dla studentów — notatki, zakreślenia i materiały do nauki", path: "/pdf-for-students" },
};

export default content;
