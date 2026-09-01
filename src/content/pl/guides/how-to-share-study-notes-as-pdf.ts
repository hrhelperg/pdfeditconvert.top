import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-study-notes-as-pdf",
  h1: "Jak udostępniać notatki do nauki w PDF (grupa, czat grupowy, chmura)",
  description:
    "Udostępniaj notatki grupie do nauki bez utraty formatowania czy kontroli wersji. Nawyki pracy z PDF, które nie pozwalają wspólnej nauce zamienić się w chaos zrzutów ekranu.",
  updated: "2026-05-29",
  intro: [
    "Udostępnianie notatek grupie do nauki powinno być proste, ale w praktyce zwykle kończy się jako wątek na czacie z trzydziestoma zrzutami ekranu i trzema różnymi wersjami tego samego wykładu. Wieczorem przed egzaminem nikt nie może znaleźć wersji z rozwiązanym przykładem, do którego wszyscy się odwołują, a ktoś przysłał zdjęcie swoich odręcznych notatek na marginesie, których nikt nie potrafi odczytać.",
    "PDF-y rozwiązują większość tych problemów. Utrwalają formatowanie, działają na każdym urządzeniu, mieszczą się w menu udostępniania na każdej platformie i nie są przywiązane do jednego konta w chmurze. Kilka nawyków udostępniania – spójne nazewnictwo plików, świadome wersjonowanie, wybór właściwego kanału – utrzymuje wspólną naukę w porządku, bez konieczności prowadzenia jej jak projektu.",
    "Ten poradnik opisuje te nawyki. Żaden z nich nie jest narzędziem; wszystkie to konwencje, które ustalasz z grupą raz. Potem po prostu działa.",
  ],
  steps: [
    {
      title: "Najpierw ustalcie kanał udostępniania",
      body: "Wybierzcie jedno miejsce – czat grupowy, wspólny folder w chmurze, dedykowany Discord – i trzymajcie się go. Notatki rozproszone w dwóch kanałach są nie do znalezienia. Sam kanał ma mniejsze znaczenie niż konsekwencja.",
    },
    {
      title: "Zawsze udostępniaj jako PDF, nigdy jako zdjęcie dokumentu",
      body: "Zrzut ekranu z PDF-a jest gorszy niż sam PDF. Wyślij plik bezpośrednio. Telefony ułatwiają to zadanie – menu udostępniania → plik, nie zrzut ekranu.",
    },
    {
      title: "Nazwij plik dla grupy, nie dla siebie",
      body: "KodPrzedmiotu_Tydzien3_Notatki_TwojeImie.pdf. Grupa widzi, kto co udostępnił i z którego tygodnia. „Notatki.pdf” jest bezużyteczne w wątku z piętnastoma załącznikami Notatki.pdf.",
    },
    {
      title: "Oznacz wersje robocze notatek znakiem wodnym",
      body: "Jeśli Twoje notatki to pierwsza wersja i pewnie będą poprawiane, Dodaj znak wodny do PDF stawia stempel WERSJA ROBOCZA na każdej stronie. Grupa wie, że można spodziewać się poprawki.",
    },
    {
      title: "Skompresuj przed udostępnieniem",
      body: "Kompresuj PDF zmniejsza rozmiar pliku pod platformy czatu z limitem załączników. Oszczędza czas wysyłki na komórkowym połączeniu i pozwala uniknąć odrzucenia jako „plik za duży”.",
    },
    {
      title: "Śledź wersje w nazwie pliku, nie na czacie",
      body: "Tydzien3_Notatki_v2.pdf nie budzi wątpliwości. „Poprawiłem notatki, w załączniku” na czacie – już budzi. Nazwa pliku pełni funkcję dziennika wersji.",
    },
  ],
  tips: [
    "Nie udostępniaj grupie dokumentów Word. Wyświetlają się inaczej na każdym urządzeniu, blokują edycję do jednej osoby naraz i od razu rozjeżdżają się na wersje. PDF utrwala wszystko.",
    "Gdy to możliwe, używaj PDF-ów z OCR-em dla odręcznych notatek – przeszukiwalny tekst pomaga grupie szybko znaleźć konkretny temat.",
    "Nie wrzucaj zdjęć ekranu laptopa. Artefakty (mora, odblaski, niska rozdzielczość) utrudniają czytanie notatek, a nie ułatwiają.",
    "Jeśli Wasza grupa regularnie coś udostępnia, przygotujcie wcześniej wspólny szablon dla PDF-ów z notatkami. Spójne strony tytułowe pomagają rozpoznać, kto co udostępnił.",
    "Unikaj e-maila do notatek grupowych. Wątki na czacie śledzą, kto co widział; e-mail rozprasza tę samą rozmowę po wielu skrzynkach.",
  ],
  mobileNote:
    "Telefony obsługują większość udostępniania w grupie – szybkie zdjęcie, natychmiastowe udostępnienie na czacie, szybka reakcja. Aplikacja PDF Editor obsługuje cały łańcuch skanuj-połącz-skompresuj-zmień nazwę na telefonie, więc plik trafiający na czat grupowy jest czysty, a nie surowym zrzutem z galerii.",
  faq: [
    {
      q: "Jaki jest najgorszy sposób udostępniania notatek do nauki?",
      a: "Zrzuty ekranu dokumentu albo notatki istniejące tylko na czacie. Obu nie da się przeszukać i nie przetrwają, gdy rozmowa przesunie się dalej.",
    },
    {
      q: "Czy wszyscy powinni udostępniać swoje notatki, czy tylko jedna osoba?",
      a: "Wszyscy, ale świadomie: ustalone tygodnie przypisane do konkretnych osób, albo „ja robię ten tydzień, ty następny”. Rotacja zmniejsza nakład pracy każdej osoby i daje notatki z wielu perspektyw.",
    },
    {
      q: "Gdzie powinny znajdować się notatki referencyjne?",
      a: "Wspólny folder w chmurze najlepiej sprawdza się do długoterminowego przechowywania. Czat grupowy jest dobry do szybkiej dystrybucji; folder pełni funkcję archiwum.",
    },
    {
      q: "Jak wersjonować notatki?",
      a: "Wyłącznie w nazwie pliku. v1, v2, v3. Gdy grupa uzna wersję za ostateczną, zmieńcie nazwę i przenieście do /final/. Nie śledźcie wersji na czacie.",
    },
    {
      q: "Co jeśli notatki są odręczne?",
      a: "Najpierw zeskanuj je narzędziem Skanuj do PDF. Czarno-białe skany odręcznych notatek są ostrzejsze i mniejsze niż zwykłe zdjęcia. Dodaj OCR, jeśli narzędzie je obsługuje.",
    },
  ],
  related: [
    { label: "PDF dla studentów — notatki i materiały do nauki", path: "/pdf-for-students" },
    { label: "Kompresuj PDF — zmniejsz pod limity załączników czatu", path: "/compress-pdf" },
    { label: "Jak uporządkować materiały do nauki w PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Jak udostępnić PDF z telefonu", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF dla studentów — notatki, zakreślenia i materiały do nauki", path: "/pdf-for-students" },
};

export default content;
