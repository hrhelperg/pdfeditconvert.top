import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-invoices-as-pdf",
  h1: "Jak zarządzać fakturami w PDF (wystawianie, śledzenie, archiwizacja)",
  description:
    "Sposób pracy z fakturami w PDF, który nie wymaga oprogramowania księgowego: generuj, numeruj, wysyłaj, śledź i archiwizuj – wyłącznie za pomocą darmowych narzędzi w przeglądarce i uporządkowanego systemu folderów.",
  updated: "2026-05-29",
  intro: [
    "Większość małych firm tak naprawdę nie potrzebuje oprogramowania księgowego do faktur. Potrzebują czystego sposobu na wygenerowanie PDF-a, spójne ponumerowanie go, wysłanie, śledzenie, kiedy zostanie opłacony, i zarchiwizowanie na sezon podatkowy. Praca jest mechaniczna; narzędzia proste; chaos bierze się z pomijania konwencji.",
    "Sposób pracy z fakturami składa się z czterech części: wystawienie (skąd pochodzi PDF), śledzenie (gdzie zapisujesz, co zostało wysłane), płatność (kiedy się rozlicza) i archiwum (gdzie żyją opłacone kopie). Każda część jest krótka i żadna nie wymaga abonamentu, jeśli go nie chcesz.",
    "Ten poradnik pokazuje sposób pracy tak, jak freelancer albo mały zespół może go faktycznie prowadzić – z generowaniem PDF-a z szablonu Word, numeracją, którą kontrolujesz, i archiwum, które przetrwa kontrolę podatkową. To nie jedyny sposób; to taki, który się nie psuje.",
  ],
  steps: [
    {
      title: "Zbuduj fakturę w Wordzie albo Pages z szablonu",
      body: "Szablon faktury w Wordzie daje sprawdzony układ z polami zastępczymi na klienta, datę, pozycje, sumę. Wypełnij zmienne, wyeksportuj do PDF narzędziem Word do PDF. Unikaj edytowania ostatecznej liczby gdziekolwiek poza źródłem.",
    },
    {
      title: "Używaj sekwencyjnego numeru faktury",
      body: "FAKT-2026-001, FAKT-2026-002 i tak dalej. Resetuj co roku. Numery muszą być unikalne i nieprzerwane – urzędy skarbowe wychwytują luki. Prowadź bieżącą listę w arkuszu kalkulacyjnym albo pliku tekstowym.",
    },
    {
      title: "Zapisz z przewidywalną nazwą pliku",
      body: "NazwaKlienta_Faktura_FAKT-2026-001_2026-05-29.pdf. Numer faktury w nazwie pliku zgadza się z numerem na dokumencie. Folder klienta ułatwia odnalezienie faktur dla konkretnej osoby.",
    },
    {
      title: "Wyślij i od razu zapisz w rejestrze",
      body: "Wyślij PDF mailem z krótką notatką przewodnią i zapisz wysyłkę w swoim arkuszu śledzącym. Data wysłania, numer faktury, kwota, termin płatności. Minuta, w której nie zapiszesz, to minuta, w której zapomnisz.",
    },
    {
      title: "Oznacz OPŁACONE znakiem wodnym, gdy płatność się rozliczy",
      body: "Dodaj znak wodny do PDF wybija OPŁACONE na pliku z datą. Opłacona kopia trafia do /faktury/oplacone/; nieopłacona zostaje w /faktury/oczekujace/. Stan wizualny bije stan w arkuszu.",
    },
    {
      title: "Archiwizuj rocznie",
      body: "Na koniec roku przenieś /faktury/oplacone/ do /Archiwum/Faktury/2026/. Zachowaj co najmniej siedem lat (zależnie od jurysdykcji). Archiwum powinno być samo w sobie zrozumiałe za pięć lat, gdy zapomnisz oryginalnej logiki katalogowania.",
    },
  ],
  tips: [
    "Nigdy nie edytuj wysłanej faktury. Jeśli kwota jest błędna, wystaw notę korygującą albo nową fakturę – ślad audytowy musi być nienaruszony.",
    "Dopasuj numer faktury na pliku do numeru na dokumencie i do wiersza w arkuszu śledzącym. Trzy miejsca mówiące to samo.",
    "PDF/A to format archiwalny, który preferują niektóre urzędy skarbowe. Jeśli rozliczasz się w takiej jurysdykcji, wyeksportuj ponownie zestaw z końca roku do PDF/A.",
    "Kompresuj faktury do archiwum – to zwykły tekst, ale archiwa się kumulują. Skompresowane kopie oszczędzają realne miejsce na dysku przez lata.",
    "Nie zabezpieczaj faktur hasłem, chyba że klient tego wymaga. Utrudnienie bez korzyści na dokumencie, który jest tylko liczbami i nazwiskami.",
  ],
  mobileNote:
    "Faktury coraz częściej powstają na telefonie – szybka wysyłka z kawiarni po zleceniu. Aplikacja PDF Editor pozwala wypełnić szablon, wybić numer faktury i wysłać PDF mailem z telefonu, z kopią zapisaną lokalnie do Twojej dokumentacji.",
  faq: [
    {
      q: "Czy potrzebuję oprogramowania do fakturowania?",
      a: "Nie przy małej skali. Szablon Word, arkusz śledzący i system folderów obsłużą czysto kilkadziesiąt faktur miesięcznie. Oprogramowanie opłaca się, gdy potrzebujesz cyklicznego rozliczania, wielu walut albo wielu klientów.",
    },
    {
      q: "Jakiego formatu numeru faktury powinienem użyć?",
      a: "Sekwencyjnego, bez luk, najlepiej z prefiksem roku. FAKT-2026-001 jest czytelny dla ludzi i przyjazny kontroli podatkowej.",
    },
    {
      q: "Jak długo powinienem przechowywać faktury?",
      a: "Zależy od jurysdykcji; siedem lat to bezpieczny domyślny wybór. Sprawdź rzeczywiste wymogi swojego kraju.",
    },
    {
      q: "Czy powinienem wysyłać faktury jako Word, czy jako PDF?",
      a: "Zawsze jako PDF. PDF-y blokują format i kwotę; dokumenty Word zachęcają dobrze nastawionych klientów, żeby coś „poprawili”.",
    },
    {
      q: "A co z fakturami VAT albo podatku od sprzedaży?",
      a: "Niektóre jurysdykcje wymagają konkretnego układu, sekwencyjnej numeracji i archiwizacji w oryginalnym formacie. Zastosuj się do lokalnych przepisów; powyższy sposób pracy je uwzględnia.",
    },
  ],
  related: [
    { label: "PDF dla firm — umowy i sposoby pracy", path: "/pdf-for-business" },
    { label: "Word do PDF — czyste eksporty faktur", path: "/word-to-pdf" },
    { label: "Dodaj znak wodny do PDF — wybij OPŁACONE na zamkniętych fakturach", path: "/add-watermark-to-pdf" },
    { label: "Sposoby pracy z PDF dla małych firm", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF dla firm — umowy i sposoby pracy", path: "/pdf-for-business" },
};

export default content;
