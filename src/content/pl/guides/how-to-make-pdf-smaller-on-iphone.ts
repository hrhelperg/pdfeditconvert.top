import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-iphone",
  h1: "Jak zmniejszyć PDF na iPhonie",
  description:
    "Zmniejsz PDF na iPhonie za pomocą narzędzia w przeglądarce lub aplikacji PDF Editor. Dlaczego skany z iPhone'a robią się ogromne i jak sprowadzić je poniżej limitów wysyłki.",
  updated: "2026-05-23",
  intro: [
    "iPhone'y produkują piękne, ogromne pliki. Ten sam aparat i skaner o wysokiej rozdzielczości, który sprawia, że Twoje dokumenty wyglądają ostro, sprawia też, że PDF-y są ciężkie — kilka zeskanowanych stron może przekroczyć limit mailowy, zanim jeszcze cokolwiek dodasz. Dlatego „zmniejsz ten PDF na moim iPhonie” to bardzo częsta, bardzo konkretna potrzeba.",
    "Ten poradnik pokazuje dwie sprawdzone drogi, które działają na iPhonie. Pierwsza to darmowe narzędzie Kompresuj PDF w Safari, które działa na Twoim urządzeniu, bez przesyłania niczego. Druga to aplikacja PDF Editor, która kompresuje offline i obsługuje pliki zabezpieczone hasłem, których przeglądarka nie ruszy.",
    "Tak czy inaczej cel jest ten sam: plik wystarczająco mały, żeby wysłać go mailem albo przesłać na portal, który wciąż czyta się czysto — bez wysyłania dokumentu na czyjś serwer, żeby to osiągnąć.",
  ],
  steps: [
    {
      title: "Znajdź PDF w Plikach",
      body: "Zlokalizuj dokument w aplikacji Pliki albo gdziekolwiek się znajduje — skan, który zrobiłeś, zapisany załącznik, przekonwertowany zestaw zdjęć.",
    },
    {
      title: "Otwórz narzędzie Kompresuj PDF w Safari",
      body: "Przejdź do narzędzia Kompresuj PDF. Działa w przeglądarce na Twoim iPhonie i przetwarza plik na urządzeniu — nic nie jest przesyłane.",
    },
    {
      title: "Dodaj PDF i wybierz poziom",
      body: "Dotknij, żeby wybrać plik, a potem wybierz poziom. Zalecany pasuje do większości sytuacji; wybierz Mocny tylko wtedy, gdy potrzebujesz jeszcze mniejszego pliku.",
    },
    {
      title: "Skompresuj i sprawdź rozmiar",
      body: "Uruchom i sprawdź rozmiar przed i po. Skany z iPhone'a zwykle mocno spadają za jednym razem, bo są pełne obrazów.",
    },
    {
      title: "Zapisz z powrotem w Plikach albo udostępnij",
      body: "Użyj ikony udostępniania, żeby zapisać mniejszy PDF w Plikach albo od razu wysłać go dalej. Zachowaj oryginał, dopóki nie potwierdzisz, że wynik dobrze się czyta.",
    },
    {
      title: "Do zabezpieczonych plików użyj aplikacji",
      body: "Przeglądarka nie skompresuje plików PDF zabezpieczonych hasłem. Aplikacja PDF Editor obsługuje je offline i jest szybsza przy plikach, które kompresujesz często.",
    },
  ],
  tips: [
    "Skany z iPhone'a są duże, bo to obrazy w wysokiej rozdzielczości. To też dlatego tak dobrze się kompresują — największe oszczędności są właśnie na tych plikach.",
    "Fotografowanie dokumentów w formacie „Najbardziej kompatybilny” (Ustawienia → Aparat → Formaty) daje pliki JPG, które łatwiej skompresować i udostępnić niż HEIC.",
    "Kompresja zamienia strony na obrazy, więc mniejsza kopia nie będzie miała zaznaczalnego tekstu. Zachowaj oryginał, jeśli musisz w nim wyszukiwać albo z niego kopiować.",
    "Pamięć przeglądarki na telefonie jest bardziej ograniczona niż na laptopie. Przy bardzo dużych plikach PDF aplikacja PDF Editor jest pewniejszą drogą.",
    "Zawsze zapisuj skompresowany plik pod nową nazwą, żeby Twój ostry oryginał pozostał nietknięty na urządzeniu.",
  ],
  mobileNote:
    "To zadanie stworzone najpierw z myślą o telefonie, i aplikacja PDF Editor jest do niego zaprojektowana: kompresja offline, bez przesyłania, obsługa zabezpieczonych plików i bezpośrednie przekazanie do Maila, Wiadomości albo menu udostępniania. Przy dokumentach, które zmniejszasz regularnie, jest za każdym razem szybsza niż przeglądarka.",
  faq: [
    {
      q: "Dlaczego moje pliki PDF z iPhone'a są takie duże?",
      a: "Skany i zdjęcia z iPhone'a to obrazy w wysokiej rozdzielczości, a PDF zrobiony z kilku takich obrazów to zasadniczo stos dużych zdjęć. Dlatego przekraczają limity mailowe — i dlatego tak skutecznie się kompresują.",
    },
    {
      q: "Czy mogę skompresować PDF na iPhonie bez aplikacji?",
      a: "Tak. Narzędzie Kompresuj PDF działa w Safari i przetwarza plik na Twoim urządzeniu, więc możesz zmniejszyć PDF, nic nie instalując.",
    },
    {
      q: "Czy mój dokument jest przesyłany, gdy używam narzędzia w przeglądarce?",
      a: "Nie. Jest przetwarzany lokalnie na Twoim iPhonie. Nic nie jest wysyłane na serwer, co ma znaczenie przy dokumentach osobistych albo finansowych.",
    },
    {
      q: "Czy tekst nadal będzie zaznaczalny po kompresji?",
      a: "Nie. Kompresja renderuje strony ponownie jako obrazy, usuwając zaznaczalną warstwę tekstową. Zachowaj oryginał, jeśli potrzebujesz przeszukiwalnego tekstu.",
    },
    {
      q: "A co z plikami PDF zabezpieczonymi hasłem?",
      a: "Przeglądarka nie przetworzy takich plików. Użyj aplikacji PDF Editor, która otwiera i kompresuje zabezpieczone pliki offline.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — zmniejsz w przeglądarce", path: "/compress-pdf" },
    {
      label: "Jak zmniejszyć PDF na Androidzie",
      path: "/guides/how-to-make-pdf-smaller-on-android",
    },
    {
      label: "Jak zmniejszyć rozmiar PDF do wysyłki mailem",
      path: "/guides/how-to-reduce-pdf-file-size-for-email",
    },
    {
      label: "Jak edytować PDF na iPhonie",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "Kompresuj PDF", path: "/compress-pdf" },
};

export default content;
