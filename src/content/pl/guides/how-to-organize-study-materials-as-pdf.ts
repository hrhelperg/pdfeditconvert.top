import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-study-materials-as-pdf",
  h1: "Jak uporządkować materiały do nauki w PDF (foldery, nazewnictwo, indeks)",
  description:
    "Pliki PDF z zajęć szybko się piętrzą. Prosta konwencja folderów, nazewnictwa i łączenia plików, która utrzymuje materiały z całego semestru przeszukiwalne od pierwszego tygodnia aż po sesję.",
  updated: "2026-05-29",
  intro: [
    "Do czwartego tygodnia semestru folder pobranych plików ma już pięćdziesiąt PDF-ów o nazwach typu „wyklad7.pdf”, „final-version-2.pdf”, „Slajdy_v3_poprawione.pdf” i „Dokument.pdf”. Do dziesiątego tygodnia nic już nie da się znaleźć. W tygodniu sesji szukasz tego samego wykładu po raz trzeci, bo nie pamiętasz, w której wersji którego pliku jest ten konkretny slajd.",
    "Rozwiązaniem nie jest oprogramowanie ani aplikacje – to konwencja. Krótka struktura folderów, spójne nazewnictwo plików i nawyk cotygodniowego łączenia. Gdy te trzy elementy są na miejscu, znalezienie konkretnego wykładu dwa miesiące później zajmuje pięć sekund zamiast piętnastu minut.",
    "Ten poradnik opisuje konwencję, która sprawdza się przez cały semestr: jak powinny wyglądać foldery, jak powinny brzmieć nazwy plików, kiedy łączyć, i co dzieje się na koniec semestru.",
  ],
  steps: [
    {
      title: "Zbuduj folder najwyższego poziomu dla każdego przedmiotu",
      body: "/Przedmioty/[KodPrzedmiotu]/. W środku: /wyklady/, /zadania/, /lektury/, /egzaminy/. Cztery foldery obejmują większość tego, co się pojawia. Nie zagnieżdżaj głębiej niż dwa poziomy.",
    },
    {
      title: "Ustandaryzuj wzorzec nazwy pliku",
      body: "TydzienN_TypDokumentu_RRRR-MM-DD.pdf. Czyli Tydzien3_Wyklad_2026-09-15.pdf, Zadanie2_Oddanie_2026-09-20.pdf. Data na końcu sortuje chronologicznie; tydzień na początku grupuje według tematu.",
    },
    {
      title: "Łącz według tygodnia, nie pojedynczych plików",
      body: "Pod koniec każdego tygodnia Połącz PDF scala notatki z wykładu, slajdy i zdjęcia tablicy z danego tygodnia w jeden plik Tydzien3_Pakiet_Wykladu_RRRR-MM-DD.pdf. Jeden plik na tydzień znacznie łatwiej później przeglądnąć.",
    },
    {
      title: "Dodaj strony tytułowe do połączonych pakietów",
      body: "Napisana na komputerze okładka (przedmiot, tydzień, poruszone tematy) sprawia, że pakiet sam się opisuje w czasie sesji. Przyszły Ty, przeglądając dwanaście tygodni pakietów, podziękuje obecnemu Tobie.",
    },
    {
      title: "Zarchiwizuj na koniec semestru",
      body: "Przenieś /Przedmioty/[Przedmiot]/ do /Archiwum/[Rok]/[Przedmiot]/, gdy semestr się kończy. Aktywne foldery zostają szczupłe, a archiwum jest przeszukiwalne, gdy trzeba wrócić do materiału z przedmiotu zaliczeniowego.",
    },
    {
      title: "Kompresuj archiwum, nie aktywne pliki",
      body: "Skompresuj zarchiwizowane materiały narzędziem Kompresuj PDF, żeby oszczędzić miejsce na dysku. Nie kompresuj aktywnych plików do nauki – w trakcie semestru czytelność liczy się bardziej niż rozmiar.",
    },
  ],
  tips: [
    "Używaj dat w formacie RRRR-MM-DD. Sortują się poprawnie w każdej przeglądarce plików. 15.09.26 już nie.",
    "Nie wstawiaj numerów wersji w materiałach do nauki. Finalny wykład to po prostu wykład; v2 oznacza, że prowadzący przesłał go ponownie.",
    "Oznaczaj materiały do egzaminu osobno – /egzaminy/srodsemestralny/ i /egzaminy/koncowy/. To inny tryb nauki niż cotygodniowy przegląd.",
    "Nie łącz materiałów z różnych przedmiotów. PDF-y mieszające przedmioty są nie do znalezienia.",
    "Trzymaj jednolinijkowy plik README.txt w folderze każdego przedmiotu z opisem, co jest w każdym podfolderze. Pomaga, gdy wracasz do materiału semestr później.",
  ],
  mobileNote:
    "Większość materiałów do nauki trafia najpierw na telefon (przez portal zajęć, e-mail od prowadzącego albo własny skan). Aplikacja PDF Editor pozwala zmienić nazwę, uporządkować i połączyć plik bezpośrednio na telefonie, więc trafia od razu na właściwe miejsce, zamiast piętrzyć się w folderze Pobrane.",
  faq: [
    {
      q: "Jaki jest najlepszy format nazwy pliku dla materiałów do nauki?",
      a: "TydzienN_TypDokumentu_RRRR-MM-DD.pdf. Prefiks tygodnia grupuje według tematu, typ dokumentu wyjaśnia zawartość, a data w formacie ISO sortuje chronologicznie.",
    },
    {
      q: "Czy łączyć pliki co tydzień, czy trzymać je osobno?",
      a: "Łącz co tydzień. Jeden PDF na tydzień na przedmiot to odpowiednia granulacja – wystarczająco mały, żeby szybko się otwierał, wystarczająco duży, żeby był samowystarczalny do powtórki.",
    },
    {
      q: "Jak głęboko powinny sięgać foldery?",
      a: "Dwa poziomy. /Przedmioty/[Przedmiot]/[typ]/. Głębiej niż to, i pliki zaczynają się gubić.",
    },
    {
      q: "Czy potrzebuję osobnego folderu archiwum?",
      a: "Tak. Przenoś zakończone semestry poza /Przedmioty/, żeby aktywny folder pozostał łatwy do przejrzenia.",
    },
    {
      q: "A co z synchronizacją w chmurze?",
      a: "Synchronizuj folder /Przedmioty/ z przynajmniej jedną chmurą. Dostęp z telefonu do laptopa liczy się szczególnie podczas sesji; synchronizacja to załatwia.",
    },
  ],
  related: [
    { label: "PDF dla studentów — notatki i materiały do nauki", path: "/pdf-for-students" },
    { label: "Połącz PDF — składaj cotygodniowe pakiety", path: "/merge-pdf" },
    { label: "Jak uporządkować pliki PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Sposób pracy z PDF dla studentów", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF dla studentów — notatki, zakreślenia i materiały do nauki", path: "/pdf-for-students" },
};

export default content;
