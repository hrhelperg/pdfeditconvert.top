import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-small-business",
  h1: "Sposoby pracy z PDF dla małych firm (wyceny, umowy, dokumentacja)",
  description:
    "Jak mała firma prowadzi obieg dokumentów w PDF – wysłane wyceny, podpisane umowy, zarchiwizowana dokumentacja – bez kupowania stosu abonamentów tylko do tego celu.",
  updated: "2026-05-29",
  intro: [
    "Mała firma przetwarza więcej PDF-ów, niż spodziewałby się jej właściciel. Wychodzą wyceny, wracają podpisane umowy, wysyłane są faktury, archiwizowane wyciągi, gromadzą się dokumenty podatkowe. Każde z tych zadań to drobiazg, ale każde potrafi pochłonąć sporo czasu, jeśli sposób pracy nie jest przemyślany.",
    "Drogie pakiety narzędzi PDF opłacają się, gdy masz własny dział prawny. Dla pięcioosobowej firmy z kilkudziesięcioma dokumentami tygodniowo darmowe narzędzia w przeglądarce i przejrzysta konwencja załatwiają to samo bez dodatkowej pozycji abonamentowej w budżecie. Sztuka polega na tym, żeby raz spisać sposób pracy i się go trzymać.",
    "Ten poradnik opisuje sposób pracy dla czterech typów dokumentów, które małe firmy najczęściej prowadzą w PDF: wycen, umów, faktur i dokumentacji. Każda sekcja jest krótka, konkretna i żadna nie wymaga niczego płatnego.",
  ],
  steps: [
    {
      title: "Wyceny: szablon Word → Word do PDF → wysyłka z Twoją marką",
      body: "Zbuduj wycenę z szablonu Word, wpisz dane klienta i pozycje, wyeksportuj do PDF narzędziem Word do PDF. Nadaj okładce swoją markę, nazwij plik NazwaKlienta_Wycena_RRRR-MM-DD.pdf, wyślij.",
    },
    {
      title: "Umowy: PDF → Podpisz PDF → zablokuj → kontrasygnata",
      body: "Dopracuj tekst w źródle, wyeksportuj do PDF, podpisz narzędziem Podpisz PDF, zablokuj plik, jeśli narzędzie na to pozwala, wyślij do kontrasygnaty. Przechowuj zarówno kopię z jednym podpisem, jak i tę podpisaną przez obie strony.",
    },
    {
      title: "Faktury: numeracja kolejna, znak wodny po opłaceniu",
      body: "FV-2026-001, FV-2026-002. Śledź je w arkuszu. Gdy płatność wpłynie, narzędziem Dodaj znak wodny do PDF postaw pieczątkę ZAPŁACONO, a plik przenieś z /do-zaplaty/ do /zaplacone/.",
    },
    {
      title: "Dokumentacja: odbierz, skompresuj, archiwizuj według roku",
      body: "Wyciągi bankowe, faktury od dostawców, paragony wydatków. Odbierz jako PDF, skompresuj do archiwum, uporządkuj według roku w /Dokumentacja/2026/. Przechowuj co najmniej siedem lat.",
    },
    {
      title: "Używaj wspólnej struktury folderów",
      body: "Foldery najwyższego poziomu: /Klienci/, /Dokumentacja/, /Wewnetrzne/, /Szablony/, /Archiwum/. Maksymalnie dwa poziomy zagnieżdżenia. Cały zespół korzysta z tego samego układu.",
    },
    {
      title: "Rozliczaj co miesiąc",
      body: "Raz w miesiącu przejrzyj folder /do-zaplaty/ z fakturami i aktywne projekty w /klienci/. Po 30 dniach wyślij przypomnienie. Po 90 dniach podejmij bardziej zdecydowane kroki. Sam folder pełni funkcję listy zadań.",
    },
  ],
  tips: [
    "Nie twórz szablonu od nowa za każdym razem. Zbuduj jeden szablon wyceny, umowy i faktury, i używaj ich wielokrotnie.",
    "Podpisuj prawdziwym podpisem, nie wpisanym imieniem i nazwiskiem. Odręczny podpis lepiej broni się w sporach.",
    "Kompresuj każdy dokument w momencie wysyłki – pliki wychodzące powinny zawsze być mniejsze niż wewnętrzne oryginały.",
    "Unikaj wysyłania klientom edytowalnych plików Word. Gdy dokument jest już w PDF, wersja jest zablokowana.",
    "Rób kwartalny przegląd archiwum. Zamknięte projekty trafiają do /Archiwum/; aktywne foldery zostają krótkie i łatwe do przejrzenia.",
  ],
  mobileNote:
    "Właściciele małych firm połowę pracy z PDF wykonują na telefonie – podpisują umowę między spotkaniami, wysyłają fakturę wprost z placu budowy, archiwizują paragon w ciągu dnia. Aplikacja PDF Editor obsługuje wszystkie cztery typy dokumentów z telefonu, offline, więc praca nie czeka na powrót do biurka.",
  faq: [
    {
      q: "Czy do fakturowania potrzebuję programu księgowego?",
      a: "Przy niskim wolumenie nie. Szablon Word, arkusz do śledzenia i system folderów świetnie sprawdzają się przy kilkudziesięciu fakturach miesięcznie. Oprogramowanie opłaca się wraz ze wzrostem skali.",
    },
    {
      q: "Jak śledzić, które umowy są jeszcze niezałatwione?",
      a: "Struktura folderów: /Klienci/Aktywni/[Nazwa]/umowy/wyslane/ i .../podpisane/. Stan folderu to sam status. Nie potrzeba osobnego arkusza.",
    },
    {
      q: "A co z kopiami zapasowymi?",
      a: "Synchronizuj folder z dokumentami z przynajmniej jedną chmurą (Dropbox, iCloud, Google Drive). Rób też okresowy zewnętrzny backup dla lat objętych dokumentacją podatkową.",
    },
    {
      q: "Czy powinienem używać jednego szablonu na każdy typ dokumentu?",
      a: "Tak. Spójne szablony sprawiają, że dokumenty są rozpoznawalne i zmniejszają nakład pracy przy każdym z nich. Dostosowuj treść, nie strukturę.",
    },
    {
      q: "Kiedy zaczyna mieć sens płatny pakiet narzędzi PDF?",
      a: "Gdy potrzebujesz automatycznego przekierowywania dokumentów, masowego podpisu elektronicznego lub w pełni rozliczalnego śladu audytowego – zwykle przy 20 i więcej pracownikach albo w procesach objętych regulacjami.",
    },
  ],
  related: [
    { label: "PDF dla firm — umowy i sposoby pracy", path: "/pdf-for-business" },
    { label: "Podpisz PDF — podpis elektroniczny", path: "/sign-pdf" },
    { label: "Jak zarządzać fakturami w PDF", path: "/guides/how-to-manage-invoices-as-pdf" },
    { label: "Najlepsze darmowe narzędzia PDF dla małych firm", path: "/guides/best-pdf-tools-for-small-business" },
  ],
  parentHub: { label: "PDF dla firm — umowy i sposoby pracy", path: "/pdf-for-business" },
};

export default content;
