import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-work-documents-as-pdf",
  h1: "Jak organizować dokumenty firmowe w PDF (foldery, nazwy, wersje)",
  description:
    "Praktyczna konwencja nazewnictwa i folderów dla firmowych plików PDF – wycen, briefów, materiałów końcowych, archiwów – która eliminuje chaos wersji i pozwala każdemu szybko wszystko znaleźć.",
  updated: "2026-05-29",
  intro: [
    "Problem z firmowymi PDF-ami zwykle nie leży w samych PDF-ach. To ślad: trzydzieści plików o podobnych nazwach w folderze pobranych, wersje, które się nie zgadzają, „finalne”, które nie są finalne, wersje robocze wyglądające identycznie jak gotowe produkty. Format jest w porządku; to konwencja wokół formatu się rozpada.",
    "Działająca konwencja jest krótka – struktura folderów, wzorzec nazewnictwa i nawyk dotyczący tego, gdzie trafiają wersje finalne. Gdy już jest na miejscu, znalezienie „umowy, którą wysłaliśmy w marcu” zajmuje dziesięć sekund zamiast dziesięciu minut, a konflikty wersji przeważnie przestają się zdarzać.",
    "Ten poradnik opisuje konwencję, którą widzieliśmy przyjmowaną i utrzymywaną przez małe zespoły. To nie jedyna konwencja, która działa; to taka, która jest wystarczająco odporna, żeby przetrwać ruchliwy kwartał bez rozpadu.",
  ],
  steps: [
    {
      title: "Ustal raz układ folderów najwyższego poziomu",
      body: "Klienci/NazwaUmowy/, Wewnętrzne/, Szablony/, Archiwum/. Cztery foldery pokrywają większość. Nie zagłębiaj się na początku bardziej niż dwa poziomy – głębokość powoduje, że się gubisz.",
    },
    {
      title: "Ustandaryzuj wzorzec nazwy pliku",
      body: "NazwaKlienta_TypDokumentu_wN_RRRR-MM-DD.pdf czyta się czysto w dowolnej przeglądarce plików. Data na końcu, żeby pliki sortowały się chronologicznie; wersja w środku, żeby od razu dostrzec najnowszą.",
    },
    {
      title: "Rozdziel /wersje-robocze i /finalne wewnątrz każdego projektu",
      body: "Wersje robocze trafiają do podfolderu /wersje-robocze projektu; finalne dostają nową nazwę na FINALNA i przenoszone są do /finalne albo /gotowe-produkty. Folder /finalne powinien zawierać tylko dostarczone wersje.",
    },
    {
      title: "Użyj Połącz PDF do konsolidacji przy przekazaniu",
      body: "Gdy gotowy produkt to tak naprawdę trzy PDF-y (oferta + warunki + wycena), połącz je w jeden do dostarczenia i zachowaj pliki źródłowe w folderze projektu. Odbiorca dostaje jeden czysty plik.",
    },
    {
      title: "Kompresuj i zmieniaj nazwę tylko przy dostarczeniu",
      body: "Kompresuj PDF dla wychodzącej kopii; zachowaj nieskompresowane źródło. Dostarczony plik trafia do /finalne/, źródło zostaje w /wersje-robocze/. To różne artefakty.",
    },
    {
      title: "Archiwizuj zakończone projekty według harmonogramu",
      body: "Przenoś zamknięte projekty do /Archiwum/ co kwartał. Aktywne foldery zostają przejrzyste; archiwum jest przeszukiwalne, gdy później czegoś potrzebujesz.",
    },
  ],
  tips: [
    "Unikaj spacji w nazwach plików, jeśli możesz – podkreślenia albo myślniki są łatwiejsze w adresach URL, przekazywaniu mailem i poleceniach powłoki.",
    "Format daty RRRR-MM-DD sortuje się chronologicznie w dowolnym narzędziu. 29.05.26 nie.",
    "Nie umieszczaj numerów wersji w nazwie pliku FINALNA. FINALNA jest FINALNA. Jeśli coś zmieni się później, to FINALNA-2 – i to sygnał, że proces się rozpadł.",
    "Nie bój się zmiany nazwy. Czytelna nazwa pliku jest warta minuty pracy, zwłaszcza przed wysłaniem.",
    "Trzymaj jednolinijkowy plik indeksu (README.txt) w dużych projektach, wymieniający zawartość każdego podfolderu. Pomaga przyszłemu Tobie, który wróci sześć miesięcy później.",
  ],
  mobileNote:
    "Na telefonie porządkowanie jest trudniejsze, bo edycja nazwy pliku jest niewygodna. Aplikacja PDF Editor pozwala zmieniać nazwy, tagować i katalogować PDF-y z telefonu, więc pliki przychodzące na telefon nie piętrzą się bez nazwy w folderze Pobrane.",
  faq: [
    {
      q: "Jaki jest najlepszy format nazwy pliku?",
      a: "NazwaKlienta_TypDokumentu_wN_RRRR-MM-DD.pdf. Data na końcu sortuje chronologicznie; wersja w środku odróżnia wersje robocze; klient i typ dokumentu sprawiają, że plik opisuje sam siebie.",
    },
    {
      q: "Czy powinienem używać folderów, czy tagów?",
      a: "Folderów. Systemy tagów istnieją, ale rozpraszają się między urządzeniami i aplikacjami. Foldery są uniwersalne.",
    },
    {
      q: "Co robić ze starymi wersjami roboczymi?",
      a: "Trzymaj je w /wersje-robocze/ wewnątrz folderu projektu, aż projekt się zamknie, a potem zarchiwizuj całość. Nie usuwaj – możesz potrzebować odzyskać liczbę z poprzedniej wersji roboczej.",
    },
    {
      q: "Czy plik FINALNA potrzebuje numeru wersji?",
      a: "Nie. Gdy plik jest FINALNA, jest wersją kanoniczną. Jeśli coś zmieni się później, to już nowa rozmowa, która dostaje własną FINALNA.",
    },
    {
      q: "Jak obsłużyć pliki od klientów o niespójnym nazewnictwie?",
      a: "Zmień nazwę przy odbiorze, żeby pasowała do Twojej konwencji. Minuta poświęcona na zmianę nazwy oszczędza czas, który stracisz później na szukanie.",
    },
  ],
  related: [
    { label: "Narzędzia PDF — pełna lista narzędzi w przeglądarce", path: "/pdf-tools" },
    { label: "Połącz PDF — scal gotowe produkty przy przekazaniu", path: "/merge-pdf" },
    { label: "Jak uporządkować pliki PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Sposoby pracy z PDF dla małych firm", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Narzędzia PDF — darmowe, w przeglądarce", path: "/pdf-tools" },
};

export default content;
