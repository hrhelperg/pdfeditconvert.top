import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-for-school-portals",
  h1: "Jak skompresować PDF na potrzeby portali szkolnych (surowe limity)",
  description:
    "Portale szkolne i uczelniane ograniczają rozmiar plików PDF ostrzej niż poczta e-mail. Jak skompresować zadanie tak, by zmieściło się w limicie, nie niszcząc czytelności, którą sprawdza prowadzący.",
  updated: "2026-05-29",
  intro: [
    "Portale szkolne to jedne z najbardziej rygorystycznych systemów przesyłania plików PDF w codziennym użyciu. Tam, gdzie poczta e-mail toleruje 25 MB, portal zajęć często ogranicza się do 5 MB – a systemy dla szkół podstawowych i średnich potrafią zejść do 2 MB. Dodaj kilka zeskanowanych stron odręcznej pracy do zadania pisanego na komputerze, a nagle jesteś nad limitem, dwie minuty przed terminem.",
    "Kompresja to właściwa odpowiedź, ale zbyt agresywna kompresja utrudnia czytanie pracy – a to właśnie kosztuje punkty. Sztuka polega na mądrej kompresji: mocno na częściach opartych na skanach, które odpowiadają za większość rozmiaru pliku, delikatnie na częściach pisanych na komputerze, które i tak nie kompresują się mocno, i dokładnie tyle, ile potrzeba, żeby zmieścić się w limicie portalu.",
    "Ten poradnik prowadzi przez realistyczny proces, w tym co kompresować, czego nie ruszać i co zrobić, gdy nawet maksymalna kompresja nie wystarcza.",
  ],
  steps: [
    {
      title: "Najpierw sprawdź podany limit portalu",
      body: "Większość portali podaje limit gdzieś na stronie; wielu studentów nigdy tam nie zagląda. Znajomość liczby zmienia strategię: limit 2 MB jest ciasny, limit 25 MB jest hojny. Celuj w 80% limitu, żeby mieć zapas.",
    },
    {
      title: "Zidentyfikuj, co powiększa plik",
      body: "Zeskanowane odręczne strony to zwykle główny winowajca. Każda zeskanowana strona to obraz w pełnej rozdzielczości. 20-stronicowe zadanie pisane na komputerze jest małe; to samo z pięcioma zeskanowanymi stronami może się potroić.",
    },
    {
      title: "Skompresuj narzędziem Kompresuj PDF",
      body: "Kompresuj PDF w przeglądarce zmniejsza plik na Twoim urządzeniu. Najpierw wypróbuj silną kompresję – nowoczesne kompresory przy mocnych ustawieniach wciąż zostawiają odręczną pracę czytelną.",
    },
    {
      title: "Po kompresji sprawdź czytelność",
      body: "Otwórz skompresowany plik i powiększ w miejscu, które będzie czytać prowadzący. Jeśli tekst lub diagramy wyglądają zbyt miękko, cofnij się do średniej kompresji i spróbuj ponownie. Czytelność wygrywa z małym rozmiarem.",
    },
    {
      title: "Jeśli nadal jesteś nad limitem, usuń zbędne strony",
      body: "Wyodrębnij strony PDF zostawia tylko te strony, które są potrzebne. Pusta tylna okładka, zdublowany zestaw zadań, strona zastępcza – usuń je, a wraz z nimi zmniejszy się rozmiar pliku.",
    },
    {
      title: "Jeśli wciąż za dużo, podziel na kilka przesyłanych plików",
      body: "Niektóre portale akceptują wiele plików naraz. Podziel PDF lub Wyodrębnij strony PDF tworzy części poniżej limitu. Nazwij je jasno (Zadanie3_Czesc1.pdf, Zadanie3_Czesc2.pdf).",
    },
  ],
  tips: [
    "Skanuj w skali szarości, nie w kolorze, zanim jeszcze zaczniesz kompresować. Ta decyzja przed skanowaniem oszczędza więcej niż jakakolwiek kompresja później.",
    "Ponowne zeskanowanie przy niższym DPI (200 zamiast 600) zmniejsza plik 5–10 razy, nie wpływając na czytelność odręcznej pracy.",
    "Nie kompresuj dwukrotnie. Powtarzana kompresja kumuluje utratę jakości. Zachowaj nieskompresowaną wersję główną, kompresuj dopiero na potrzeby przesłania.",
    "Unikaj pakowania PDF-a do ZIP-a, żeby zrobić go „mniejszym”. Większość portali w ogóle odrzuca archiwa ZIP; te, które je akceptują, często i tak rozpakowują je z tym samym efektywnym limitem.",
    "Jeśli portal odrzuca skompresowany plik jako nieprawidłowy, wyeksportuj go najpierw przez drukowanie do PDF – to sprowadza plik do podstawowego formatu PDF, który akceptuje każdy portal.",
  ],
  mobileNote:
    "Przesyłanie do portali szkolnych z telefonu jest dziś powszechne, a to właśnie na telefonie powstają zwykle skanowane części zadania. Aplikacja PDF Editor kompresuje skany na urządzeniu jeszcze przed przesłaniem, więc plik jest gotowy dla portalu, zanim trafi na niepewne połączenie komórkowe.",
  faq: [
    {
      q: "Jaki rozmiar akceptuje większość portali szkolnych?",
      a: "Typowe limity to 2 MB (niektóre szkoły podstawowe i średnie), 5 MB (wiele portali szkół średnich i uczelni) oraz 10–25 MB (bardziej wyrozumiałe portale uczelniane). Sprawdź wymagania konkretnych zajęć.",
    },
    {
      q: "Czy agresywna kompresja robi tekst nieczytelnym?",
      a: "Czasem tak. Mocna kompresja na skanach o już niskiej rozdzielczości może rozpikselować znaki. Wypróbuj najpierw silną, cofnij się do średniej, jeśli tekst zrobi się rozmyty.",
    },
    {
      q: "Czy powinienem usuwać puste strony?",
      a: "Tak. Wyodrębnij strony PDF lub Podziel PDF pozwala je usunąć. Puste strony zajmują realne miejsce i nie są częścią pracy.",
    },
    {
      q: "Czy mogę zamiast tego oddać archiwum ZIP?",
      a: "Większość portali szkolnych nie akceptuje archiwów ZIP. Te nieliczne, które je przyjmują, i tak stosują limity rozmiaru i mogą traktować ZIP jako jeden plik z tym samym limitem.",
    },
    {
      q: "Co jeśli skompresowany plik wciąż jest za duży?",
      a: "Usuń zbędne strony, zeskanuj ponownie w skali szarości lub czerni i bieli przy niższym DPI, albo podziel na kilka przesyłanych plików, jeśli portal na to pozwala. Niektóre zadania po prostu muszą być fizycznie mniejsze.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — zmniejsz plik w przeglądarce", path: "/compress-pdf" },
    { label: "Podziel PDF — podziel na akceptowane części", path: "/split-pdf" },
    { label: "Jak oddać pracę domową w PDF", path: "/guides/how-to-submit-homework-as-pdf" },
    { label: "Jak zmniejszyć rozmiar PDF przed przesłaniem", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Kompresuj PDF — zmniejsz rozmiar w przeglądarce", path: "/compress-pdf" },
};

export default content;
