import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "Jak skanować dokumenty do PDF telefonem",
  description:
    "Skanuj wielostronicowe dokumenty aparatem telefonu i zamień je w czyste pliki PDF. Sposób pracy na telefonie z wykrywaniem krawędzi i OCR.",
  updated: "2026-05-11",
  intro: [
    "Telefony są świetnymi skanerami dokumentów, gdy tylko przestaniesz używać domyślnego aparatu. Odpowiednia aplikacja zajmuje się wykrywaniem krawędzi, korekcją perspektywy, dopasowaniem kontrastu i OCR — zamieniając zdjęcie zrobione z ręki w czysty, przeszukiwalny PDF, który wygląda jak skan, a nie jak zwykłe zdjęcie.",
    "Ten poradnik pokazuje sposób pracy przy skanowaniu dokumentów w aplikacji PDF Editor na iPhonie lub Androidzie. Obie platformy dają równoważne rezultaty. Omówimy codzienne sytuacje: paragony, podpisane formularze, wielostronicowe umowy, dowody tożsamości oraz przypadki, w których skanowanie telefonem wygrywa z pójściem do skanera płaskiego.",
    "Na koniec będziesz mieć powtarzalną rutynę skanowania, która sprawdza się przy niedoskonałym oświetleniu, produkuje pliki akceptowane bez zastrzeżeń przez księgowych i działy prawne, i trzyma wszystko na urządzeniu.",
  ],
  steps: [
    {
      title: "Otwórz skaner",
      body: "Dotknij kafelka Skanuj na ekranie głównym aplikacji PDF Editor. Otworzy się wizjer aparatu z aktywnym wykrywaniem krawędzi.",
    },
    {
      title: "Połóż dokument na kontrastowej powierzchni",
      body: "Wykrywanie krawędzi działa najlepiej, gdy jest wyraźny kontrast między stroną a powierzchnią pod spodem. Połóż białą kartkę na ciemnej powierzchni albo odwrotnie.",
    },
    {
      title: "Wyceluj telefon nad stronę",
      body: "Trzymaj telefon mniej więcej nad dokumentem. Aplikacja rysuje niebieski kontur wokół wykrytych krawędzi. Gdy kontur jest stabilny, zdjęcie robi się automatycznie.",
    },
    {
      title: "Automatyczne lub ręczne zrobienie zdjęcia",
      body: "Aparat pulsuje i robi zdjęcie, gdy kadr jest prawidłowy. Jeśli automat nie wykrywa krawędzi, dotknij przycisku ręcznego zrobienia zdjęcia. Rogi zawsze możesz później dostosować.",
    },
    {
      title: "Dostosuj wykryte rogi",
      body: "W razie potrzeby przeciągnij uchwyty w rogach, żeby doprecyzować krawędzie. Po tym kroku włącza się korekcja perspektywy, która zamienia zdjęcie zrobione pod kątem w prostokątną stronę.",
    },
    {
      title: "Zastosuj filtr",
      body: "Wybierz Kolor, Odcienie szarości albo Czarno-biały. Przy paragonach i formularzach tryb czarno-biały znacznie zmniejsza plik bez utraty jakości. Przy dokumentach ze zdjęciami lub kolorowymi elementami zostań przy Kolorze.",
    },
    {
      title: "Dodaj kolejne strony",
      body: "Dotknij licznika stron na dole ekranu, żeby zrobić zdjęcia kolejnych stron. Każde nowe zdjęcie dołącza się do bieżącego PDF-a. W razie potrzeby zmień kolejność stron w pasku miniatur.",
    },
    {
      title: "Zapisz PDF",
      body: "Dotknij Gotowe, nadaj plikowi sensowną nazwę i zapisz. OCR działa w tle, dzięki czemu gotowy PDF jest przeszukiwalny. Możesz go potem udostępnić, wydrukować albo przesłać na dysk w chmurze.",
    },
  ],
  tips: [
    "Rozproszone, równomierne światło jest lepsze niż jasne oświetlenie z góry — bezpośrednie światło tworzy odbicia na błyszczącym papierze lub laminowanych formularzach.",
    "Połóż dokument na płasko. Wygięte strony (jak otwarta książka) powodują zniekształcenia tekstu, których korekcja perspektywy nie naprawi w pełni.",
    "Przy paragonach filtr czarno-biały zwykle zmniejsza rozmiar pliku o 60–80% bez utraty czytelności.",
    "Jeśli skanujesz dowody osobiste lub paszporty, zapisz gotowy PDF w folderze zabezpieczonym hasłem albo nałóż hasło na sam plik PDF przed udostępnieniem.",
    "Automatyczne zdjęcie robi się w mniej niż sekundę, gdy kadr jest dobry. Jeśli sprawia problemy, prawdopodobnie winne jest oświetlenie albo kontrast.",
  ],
  mobileNote:
    "Cały proces skanowania i zapisu wielostronicowego dokumentu zajmuje mniej niż 30 sekund. W porównaniu z pójściem do skanera płaskiego, pobieraniem oprogramowania skanującego i zarządzaniem załącznikami mailowymi telefon wygrywa zdecydowanie w codziennych potrzebach biznesowych. Wynikiem jest ten sam standardowy przeszukiwalny PDF, akceptowany przez każde narzędzie księgowe i system dokumentów.",
  faq: [
    {
      q: "Czy jakość skanu jest tak dobra jak ze skanera płaskiego?",
      a: "Przy codziennych dokumentach — paragonach, umowach, dowodach tożsamości, formularzach — tak, przy odpowiednim oświetleniu i płasko ułożonym dokumencie. Przy archiwalnym skanowaniu zdjęć albo drobnym druku na błyszczącym papierze dedykowany skaner płaski wciąż wygrywa.",
    },
    {
      q: "Jakie języki obsługuje OCR?",
      a: "Wszystkie główne języki alfabetu łacińskiego (angielski, hiszpański, francuski, niemiecki, włoski, portugalski, niderlandzki, czeski, polski itd.), a także cyrylicę, grekę, arabski, chiński, japoński i koreański. Jakość rozpoznawania jest najwyższa przy czystym druku, a niższa przy piśmie odręcznym.",
    },
    {
      q: "Czy mogę zeskanować dowód osobisty lub paszport?",
      a: "Tak. Aplikacja tworzy czysty, wyprostowany skan gotowy do przesłania w procesach KYC lub jakimkolwiek innym zgłoszeniu dokumentu. Jeśli wysyłasz go mailem, nałóż hasło na gotowy PDF.",
    },
    {
      q: "Czy skanowanie działa offline?",
      a: "Tak. Wykrywanie krawędzi, korekcja perspektywy i filtrowanie działają na urządzeniu. OCR dla głównych języków też działa lokalnie; przy mniej popularnych językach model rozpoznawania może pobrać się przy pierwszym użyciu.",
    },
    {
      q: "Jak duże są zeskanowane pliki PDF?",
      a: "Typowy 5-stronicowy dokument w trybie czarno-białym waży około 200–400 KB. Ten sam skan w pełnym kolorze to zwykle 1–2 MB. Kompresja może dodatkowo zmniejszyć te wartości, jeśli musisz wysłać plik mailem.",
    },
  ],
  related: [
    { label: "Skanuj do PDF — pełny przegląd", path: "/scan-to-pdf" },
    {
      label: "Edytuj zeskanowany PDF później",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF for Business", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Skanuj do PDF", path: "/scan-to-pdf" },
};

export default content;
