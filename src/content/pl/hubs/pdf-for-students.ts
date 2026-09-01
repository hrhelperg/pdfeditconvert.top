import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-students",
  hero: {
    eyebrow: "PDF dla studentów",
    h1: "Narzędzia PDF dopasowane do tego, jak studenci naprawdę się uczą.",
    highlight: "naprawdę",
    lead: "Rób adnotacje na slajdach z wykładów, zaznaczaj lektury, łącz artykuły naukowe, skanuj strony podręczników i podpisuj formularze — z telefonu lub tabletu, który już masz.",
    primaryCta: { label: "Otwórz aplikację", href: SITE.app.appStore },
  },
  problem: {
    heading: "Dlaczego pliki PDF pozostają w centrum sposobu pracy studentów",
    paragraphs: [
      "Wykładowcy publikują slajdy jako pliki PDF. Materiały do zajęć przychodzą jako pliki PDF. Opisy zadań to pliki PDF. Sylabusy to pliki PDF. A domyślna przeglądarka w telefonie nie pozwala ich zaznaczać, opatrywać adnotacjami ani porządnie organizować — dlatego większość studentów wraca do robienia zrzutów ekranu stron i wklejania ich do Notatek, co oznacza utratę możliwości przeszukiwania, struktury i powrotu do źródła.",
      "Prawdziwy mobilny edytor PDF pozwala studentom traktować lektury tak, jak traktowaliby podręcznik — zaznaczenia, notatki na marginesie, zakładki — ale z możliwością przeszukiwania i udostępniania. Te same, opatrzone adnotacjami lektury otwierają się na każdym urządzeniu, więc praca wykonana w autobusie czeka na Ciebie, gdy usiądziesz w bibliotece.",
      "W połączeniu z rysikiem na tablecie taki zestaw może zastąpić większość ręcznego robienia notatek do materiałów z zajęć. Koszt to cena aplikacji (podstawowe funkcje są bezpłatne) i czas potrzebny na jednorazowe skonfigurowanie.",
    ],
  },
  features: {
    heading: "Stworzone do nauki",
    items: [
      {
        icon: "Highlighter",
        title: "Zaznaczaj i dodawaj adnotacje",
        body: "Żółte zaznaczenia, odręczne notatki, komentarze, podkreślenia — dokładnie to, co zwykle robi się na papierze, tylko że w wersji przeszukiwalnej.",
      },
      {
        icon: "Bookmark",
        title: "Zakładki i struktura",
        body: "Oznacz rozdziały lub sekcje, do których wrócisz. Przełączaj się między nimi jednym dotknięciem podczas pisania eseju.",
      },
      {
        icon: "Combine",
        title: "Łącz lektury",
        body: "Połącz artykuły z całego tygodnia w jeden dokument do czytania offline w pociągu, samolocie albo w drodze.",
      },
      {
        icon: "ScanLine",
        title: "Skanuj strony podręczników",
        body: "Przechwytuj strony z papierowych książek do przeszukiwalnych plików PDF. Przydatne przy cytowaniu w esejach, gdy masz tylko papierowy egzemplarz.",
      },
      {
        icon: "FileSignature",
        title: "Podpisuj formularze od razu",
        body: "Wnioski o pomoc finansową, listy obecności, potwierdzenia zapisów — podpisz i odeślij bez drukowania.",
      },
      {
        icon: "Layers",
        title: "Organizuj według przedmiotu",
        body: "Grupuj dokumenty według zajęć. Przenoś je przez cały semestr, nie tracąc adnotacji.",
      },
    ],
  },
  steps: {
    heading: "Prosty sposób pracy podczas nauki",
    items: [
      {
        title: "Zbierz lektury na dany tydzień",
        body: "Pobierz lub udostępnij każdy plik PDF do PDF Editor z portalu uczelni, Canvas, Moodle albo poczty e-mail.",
      },
      {
        title: "Połącz je w jeden plik na każdy tydzień zajęć",
        body: "Użyj narzędzia Scal, aby połączyć je w plik „Lektury tydzień 3 - Mikroekonomia.pdf\" do użytku offline.",
      },
      {
        title: "Dodawaj adnotacje w trakcie czytania",
        body: "Zaznaczaj ważne fragmenty, dodawaj notatki na marginesie, zostawiaj komentarze tam, gdzie masz dodatkowe pytania. Notatki zapisują się na miejscu.",
      },
      {
        title: "Wykorzystaj zaznaczenia przy pisaniu esejów",
        body: "Wracaj do zaznaczonych fragmentów przez panel zakładek, gdy cytujesz źródła. Tekst pod zaznaczeniem można zaznaczyć i skopiować.",
      },
      {
        title: "Skanuj i łącz odręczne notatki",
        body: "Gdy zrobisz notatki na papierze, zeskanuj je do tej samej biblioteki PDF Editor, aby wszystko było w jednym, przeszukiwalnym miejscu.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Nauka wszędzie",
    body: "Wykłady, biblioteka, pociąg, kawiarnia — miejsce, w którym student czyta, rzadko jest biurkiem. Edytor PDF stworzony przede wszystkim z myślą o telefonie oznacza, że ta sama, opatrzona adnotacjami kopia jest zawsze pod ręką, gdziekolwiek jesteś. Godzina stracona na czekaniu na autobus zamienia się w czas na produktywne czytanie.",
  },
  faq: [
    {
      q: "Czy aplikacja jest bezpłatna dla studentów?",
      a: "Tak. Podstawowe funkcje — adnotacje, łączenie, skanowanie i podpisywanie — są bezpłatne, bez dziennego limitu. Część funkcji Pro (wsadowy OCR, zaawansowane szyfrowanie) jest płatna, ale darmowy poziom pokrywa wszystko, czego zwykle potrzebuje student.",
    },
    {
      q: "Czy moje zaznaczenia zsynchronizują się między urządzeniami?",
      a: "Jeśli plik zostanie zapisany w iCloud Drive, Google Drive albo dowolnej innej chmurze, zmiany synchronizują się wszędzie tam, gdzie ten sam plik zostanie otwarty. Pliki przechowywane tylko lokalnie pozostają na urządzeniu, na którym były edytowane.",
    },
    {
      q: "Czy mogę legalnie zeskanować stronę podręcznika?",
      a: "Do celów własnej nauki, w większości jurysdykcji tak (przepisy o dozwolonym użytku zwykle pozwalają na krótkie fragmenty do celów naukowych). Ostrożnie z rozpowszechnianiem zeskanowanych kopii — to inna sprawa i często jest niedozwolone.",
    },
    {
      q: "Czy aplikacja dobrze działa na iPadach i tabletach z Androidem?",
      a: "Tak. Tablety z obsługą rysika (Apple Pencil, S Pen) sprawiają, że dodawanie adnotacji przypomina pracę na papierze o wiele bardziej niż telefony obsługiwane tylko palcem. Jeśli masz tablet, warto używać go do sesji czytania.",
    },
    {
      q: "Czy mogę wyeksportować swoje notatki z adnotacjami?",
      a: "Tak. Plik PDF z adnotacjami można udostępnić w takiej postaci, w jakiej jest (z wbudowanymi adnotacjami), albo utrwalić jako ostateczny plik PDF. Możesz też wyodrębnić sam zaznaczony tekst do cytatów.",
    },
  ],
  related: [
    {
      label: "Jak udostępnić notatki z zajęć jako PDF",
      path: "/guides/how-to-share-study-notes-as-pdf",
    },
    {
      label: "Najlepsza aplikacja PDF dla studentów",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Skanowanie do PDF", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Ucz się z prawdziwym zestawem narzędzi PDF.",
    sub: "Bezpłatnie na iOS i Androidzie. Adnotacje synchronizują się przez iCloud lub Drive.",
  },
};

export default content;
