import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-consultants",
  h1: "Sposoby pracy z PDF dla konsultantów (oferty, raporty, faktury)",
  description:
    "Rytm pracy konsultanta z PDF: oferty, które zamykają sprzedaż, raporty czytelne na telefonie, faktury gotowe w kilka sekund. Narzędzia w przeglądarce, które utrzymują wszystko lekkie.",
  updated: "2026-05-29",
  intro: [
    "Praca konsultanta kręci się wokół trzech dokumentów: oferty, która zdobywa zlecenie, raportu, który je realizuje, i faktury, która zamyka cały cykl. Wszystko inne – prezentacje na rozpoczęcie, notatki z rozmów, aktualizacje statusu – to albo wersja robocza jednego z tych trzech, albo dokument roboczy, który nigdy nie opuszcza projektu.",
    "Każdy z tej trójki ma swoje własne nawyki w PDF. Oferta musi wyglądać na treściwą, ale nie ciężką; raport musi dobrze czytać się na telefonie, bo tam większość klientów otwiera go po raz pierwszy; faktura musi wyjść tego samego dnia, w którym praca się kończy. Narzędzia potrzebne do zrobienia tego wszystkiego dobrze są w większości darmowe, a sposób pracy nie zmienia się między kolejnymi zleceniami.",
    "Ten poradnik opisuje ten rytm – czego potrzebuje każdy dokument, co robi każde narzędzie i na co idzie czas. Uszczelnienie tego rytmu na przestrzeni roku pracy z klientami oszczędza realne godziny.",
  ],
  steps: [
    {
      title: "Oferta: zwięzła, zgodna z marką, szybka",
      body: "Zbuduj ją w Wordzie na bazie swojego szablonu. Trzymaj się limitu poniżej 12 stron – klienci przeglądają pobieżnie, nie studiują. Do eksportu użyj Word do PDF. Strona tytułowa, opis problemu, podejście, zakres prac, harmonogram, cena, warunki. Skompresuj poniżej 5 MB. Wyślij tego samego dnia.",
    },
    {
      title: "Umowa zlecenia: podpisany PDF, zablokowany",
      body: "Gdy oferta zostanie zaakceptowana, wyślij podpisaną umowę zlecenia narzędziem Podpisz PDF. Klient kontrasygnuje i odsyła. Zapisz obie podpisane kopie w /Klienci/[Nazwa]/umowy/.",
    },
    {
      title: "Aktualizacje w trakcie: cotygodniowy status w PDF",
      body: "Krótki, jednostronicowy PDF wysyłany co tydzień. Status, przeszkody, decyzje do podjęcia. Traktuj go jako sposób na wymuszenie jasnego myślenia, a nie jako samodzielny efekt pracy.",
    },
    {
      title: "Raport końcowy: struktura pod pobieżne przeglądanie",
      body: "Streszczenie na pierwszej stronie. Metodologia i szczegóły na końcu. Ponumeruj każdą stronę. Osadź czcionki. Rozmiar tekstu czytelny na telefonie. Większość klientów czyta raport najpierw na telefonie, dopiero potem na laptopie.",
    },
    {
      title: "Faktura: tego samego dnia po zamknięciu zlecenia",
      body: "Faktura z szablonu, kolejny numer, Word do PDF, wysłana w ciągu 24 godzin od zamknięcia zlecenia. Spóźniona faktura zamienia się w spóźnioną płatność.",
    },
    {
      title: "Zarchiwizuj zlecenie",
      body: "Gdy płatność wpłynie, przenieś cały folder klienta do /Archiwum/[Rok]/[Klient]/. Aktywny folder pozostaje szczupły, a archiwum jest przeszukiwalne na potrzeby case study i przyszłych odwołań.",
    },
  ],
  tips: [
    "Nie modyfikuj szablonu przy każdej ofercie. Dostosowuj treść, zachowaj spójną strukturę – klienci rozpoznają Cię między kolejnymi zleceniami.",
    "Śledź każdą wysłaną ofertę w arkuszu: data, klient, kwota, wynik. Współczynnik konwersji podpowie Ci, czy warto dopracować ofertę.",
    "Raporty, które dobrze czyta się na telefonie, mają większą czcionkę i krótsze akapity niż raporty projektowane pod druk. Optymalizuj pod urządzenie, na którym klient czyta jako pierwszym.",
    "Znakuj wersje robocze znakiem wodnym (WERSJA ROBOCZA) w trakcie pracy nad projektem, nigdy na wersji finalnej. Finalna wersja jest finalna właśnie przez jego brak.",
    "Prowadź folder /case-studies/ z zanonimizowanymi przykładami z wcześniejszych zleceń. To najmocniejszy dowód w kolejnych ofertach.",
  ],
  mobileNote:
    "Konsultanci żyją w podróży. Aplikacja PDF Editor obsługuje kompresję oferty na ostatnią chwilę, podpisanie umowy zlecenia i wysyłkę faktury z telefonu – przydatne, gdy zlecenie zamyka się w pociągu, a faktura musi wyjść jeszcze tego samego dnia.",
  faq: [
    {
      q: "Jak długa powinna być oferta?",
      a: "Poniżej 12 stron dla większości zleceń. Klienci przeglądają pobieżnie. Im krótsza oferta, tym więcej z niej faktycznie zostanie przeczytane.",
    },
    {
      q: "Czy potrzebuję podpisanej umowy zlecenia?",
      a: "Tak. Oferta to dokument sprzedażowy; umowa zlecenia to kontrakt. Nie zaczynaj pracy bez niej.",
    },
    {
      q: "Jak często wysyłać aktualizacje w trakcie zlecenia?",
      a: "Domyślnie co tydzień. Codziennie przy krótkich, intensywnych projektach. Co miesiąc przy długich i spokojniejszych. Rytm liczy się bardziej niż format.",
    },
    {
      q: "Czy raporty powinny być zaprojektowane graficznie?",
      a: "Na tyle, by wyglądały profesjonalnie, ale nie na tyle, by Cię spowalniały. Czysty, typograficzny szablon starzeje się lepiej niż mocno zaprojektowany.",
    },
    {
      q: "Kiedy powinna wyjść faktura?",
      a: "Tego samego dnia, w którym zlecenie się kończy. Każdy dzień zwłoki zwykle przesuwa termin płatności o więcej niż jeden dzień po drugiej stronie.",
    },
  ],
  related: [
    { label: "PDF dla firm — umowy i sposoby pracy", path: "/pdf-for-business" },
    { label: "Word do PDF — eksport ofert i raportów", path: "/word-to-pdf" },
    { label: "Najlepszy sposób pracy z PDF dla freelancerów", path: "/guides/best-pdf-workflow-for-freelancers" },
    { label: "Jak wysyłać umowy jako PDF", path: "/guides/how-to-send-contracts-as-pdf" },
  ],
  parentHub: { label: "PDF dla firm — umowy i sposoby pracy", path: "/pdf-for-business" },
};

export default content;
