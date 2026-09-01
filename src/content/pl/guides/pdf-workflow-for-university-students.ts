import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflow-for-university-students",
  h1: "Sposób pracy z PDF dla studentów (notatki, zadania, oddawanie prac)",
  description:
    "Rytm pracy z PDF na cały semestr, który przetrwa sesję: zeskanowane notatki z wykładów, oddane zadania, udostępnione materiały do nauki. Wszystko w przeglądarce i za darmo.",
  updated: "2026-05-29",
  intro: [
    "Semestr na uczelni generuje setki plików PDF. Slajdy z wykładów, zeskanowane odręczne notatki, zestawy zadań, oddane prace, dodatkowe lektury, pakiety do nauki przed egzaminem. Większość studentów radzi sobie, piętrząc je w folderze pobranych i grzebiąc w nich w razie potrzeby. To działa w trzecim tygodniu; rozsypuje się w dziesiątym; w czasie sesji jest gorzej, niż gdyby ich w ogóle nie było.",
    "Rytm pracy z PDF na cały semestr jest krótki i łatwy do utrzymania. Cotygodniowe pakiety notatek dla każdego przedmiotu, spójnie nazywane oddawane prace, pakiety do nauki złożone przed egzaminami, archiwizacja na koniec semestru. Nic z tego nie wymaga drogich narzędzi ani aplikacji, których jeszcze nie masz, a większość da się zrobić z telefonu.",
    "Ten poradnik opisuje ten rytm – co robić co tydzień, co robić przy każdym zadaniu, co robić w połowie semestru i w czasie sesji. Zakłada, że celem jest znalezienie dowolnego dokumentu w pięć sekund, a nie zbudowanie idealnego osobistego systemu wiedzy.",
  ],
  steps: [
    {
      title: "Co tydzień: zbierz i połącz materiały z wykładu",
      body: "Pod koniec każdego tygodnia dla każdego przedmiotu: zbierz notatki pisane na komputerze, PDF-y slajdów, zdjęcia tablicy i zeskanowane odręczne strony. Połącz PDF scala je w Tydzien3_Pakiet_RRRR-MM-DD.pdf w /Przedmioty/[Przedmiot]/wyklady/.",
    },
    {
      title: "Przy każdym zadaniu: stwórz, nazwij, oddaj, zarchiwizuj",
      body: "Word do PDF dla pracy pisanej na komputerze, Skanuj do PDF dla odręcznych stron, Połącz PDF do scalenia, Kompresuj PDF, jeśli portal ma limit. Oddaj pracę, zachowaj kopię w /Przedmioty/[Przedmiot]/zadania/oddane/.",
    },
    {
      title: "W połowie semestru: zrób porządki",
      body: "Około siódmego tygodnia przejrzyj foldery przedmiotów. Usuń duplikaty, popraw źle nazwane pliki, zarchiwizuj to, co już gotowe. Dwadzieścia minut w połowie semestru oszczędza godziny w czasie sesji.",
    },
    {
      title: "Przed egzaminem: zbuduj pakiet do nauki",
      body: "Połącz odpowiednie cotygodniowe pakiety w jeden plik Przedmiot_Sesja_PakietDoNauki.pdf. Dodaj okładkę z tematami. Skompresuj, żeby wygodnie korzystać z niego na tablecie lub telefonie podczas powtórki.",
    },
    {
      title: "Rób adnotacje w pakiecie do nauki na tablecie lub telefonie",
      body: "Adnotacje PDF na tablecie u niektórych studentów sprawdzają się lepiej niż papier. Używaj zakreślania, komentarzy i podkreśleń; oznaczenia zostają do ponownego przejrzenia później.",
    },
    {
      title: "Na koniec semestru: zarchiwizuj przedmiot",
      body: "Przenieś /Przedmioty/[Przedmiot]/ do /Archiwum/[Rok]/[Przedmiot]/. Skompresuj wszystko w archiwum. Aktywny folder pozostaje czysty na kolejny semestr.",
    },
  ],
  tips: [
    "Nie łącz materiałów z różnych przedmiotów ani różnych tygodni. Najmniejsza użyteczna jednostka to jeden PDF na tydzień na przedmiot.",
    "Oddawaj prace, stosując dokładnie taką konwencję nazewnictwa, jakiej wymagają dane zajęcia. „Nazwisko_Imie_Zadanie3.pdf” to standard; trzymaj się jej dokładnie.",
    "Rób adnotacje w pakietach do nauki cyfrowo. Przeszukiwalne PDF-y z adnotacjami biją papier przy powtórce – szybko znajdziesz konkretny temat.",
    "Kompresuj tylko przy oddawaniu i przy archiwizacji. W trakcie bieżącego użytku stawiaj na czytelność.",
    "Synchronizuj folder Przedmioty z jedną chmurą. Dostęp z telefonu do laptopa podczas sesji jest cenniejszy niż miejsce na dysku.",
  ],
  mobileNote:
    "Większość codziennej pracy studenta z PDF-em odbywa się na telefonie – skanowanie odręcznej strony, fotografowanie slajdu, oddawanie zadania. Aplikacja PDF Editor obsługuje cały łańcuch (skanowanie, łączenie, kompresję, podpis, udostępnianie) offline, na iOS i Androidzie, więc sposób pracy nie zależy od dostępu do laptopa.",
  faq: [
    {
      q: "Ile czasu zajmuje ten rytm pracy?",
      a: "Dziesięć minut tygodniowo na przedmiot na cotygodniowy pakiet. Dwie minuty na zadanie. Dwadzieścia minut w połowie semestru. Skumulowana oszczędność podczas sesji to godziny.",
    },
    {
      q: "Co jeśli mam wiele przedmiotów?",
      a: "Ten rytm się skaluje – ta sama konwencja stosuje się do każdego przedmiotu. Dwa równoległe przedmioty podwajają czas; struktura pozostaje ta sama.",
    },
    {
      q: "Czy warto zachować papierowe notatki?",
      a: "Oryginalne odręczne notatki – tak, jako zapasowa kopia. Gdy tylko trafią zeskanowane do cotygodniowego pakietu, papier służy już tylko jako materiał referencyjny.",
    },
    {
      q: "Czy warto zastosować OCR na skanach, żeby je przeszukiwać?",
      a: "Jeśli narzędzie to oferuje – tak. Przeszukiwalne materiały do nauki podczas sesji są dużo bardziej wartościowe niż nieprzeszukiwalne.",
    },
    {
      q: "A co z lekturami uzupełniającymi?",
      a: "Osobny folder /lektury/ dla każdego przedmiotu. Nie łącz lektur z pakietami wykładowymi; rosną osobno i służą innemu celowi.",
    },
  ],
  related: [
    { label: "PDF dla studentów — notatki i materiały do nauki", path: "/pdf-for-students" },
    { label: "Najlepsze darmowe narzędzia PDF dla studentów", path: "/guides/best-pdf-tools-for-students" },
    { label: "Jak uporządkować materiały do nauki w PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Jak oddać pracę domową w PDF", path: "/guides/how-to-submit-homework-as-pdf" },
  ],
  parentHub: { label: "PDF dla studentów — notatki, zakreślenia i materiały do nauki", path: "/pdf-for-students" },
};

export default content;
