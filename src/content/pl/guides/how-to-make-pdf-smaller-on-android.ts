import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-android",
  h1: "Jak zmniejszyć PDF na Androidzie",
  description:
    "Skompresuj PDF na dowolnym telefonie z Androidem za pomocą narzędzia w przeglądarce, które nie wymaga instalacji, lub aplikacji PDF Editor. Sprowadź skany poniżej limitów maila i portali.",
  updated: "2026-05-23",
  intro: [
    "Android obsługuje PDF-y różnie w zależności od telefonu — Samsung, Pixel i Xiaomi chowają odpowiednie ustawienia w różnych miejscach — ale potrzeba jest uniwersalna: zeskanowany albo pełen zdjęć PDF jest za duży, żeby wysłać go mailem albo przesłać na portal, i chcesz go zmniejszyć. Najbardziej niezawodne rozwiązanie w ogóle nie zależy od marki telefonu.",
    "Ten poradnik korzysta z darmowego narzędzia Kompresuj PDF, które działa w przeglądarce na dowolnym urządzeniu z Androidem i przetwarza plik lokalnie — nic nie jest przesyłane. Omawia też aplikację PDF Editor do użytku offline i do plików zabezpieczonych hasłem, których przeglądarka nie ruszy.",
    "Ponieważ droga przez przeglądarkę jest identyczna na każdym telefonie z Androidem, to metoda warta zapamiętania, jeśli zmienisz urządzenie albo pomożesz komuś z innej marki.",
  ],
  steps: [
    {
      title: "Zlokalizuj PDF",
      body: "Znajdź dokument w aplikacji Pliki, w Pobranych albo gdziekolwiek został zapisany — skan, zapisany załącznik, przekonwertowany zestaw zdjęć.",
    },
    {
      title: "Otwórz narzędzie Kompresuj PDF",
      body: "Przejdź do narzędzia Kompresuj PDF w Chrome albo wybranej przeglądarce. Działa tak samo na każdym telefonie z Androidem i przetwarza plik na Twoim urządzeniu — bez przesyłania, bez konta.",
    },
    {
      title: "Dodaj PDF i wybierz poziom",
      body: "Wybierz plik i ustaw poziom: Zalecany do większości sytuacji, Mocny, jeśli potrzebujesz mniejszego pliku. Niski zachowuje najwięcej szczegółów.",
    },
    {
      title: "Skompresuj i sprawdź",
      body: "Uruchom i sprawdź rozmiar przed i po. Pliki PDF pełne obrazów i zeskanowane zwykle mocno spadają za jednym razem.",
    },
    {
      title: "Zapisz lub udostępnij wynik",
      body: "Zapisz mniejszy plik na urządzeniu albo udostępnij go od razu mailem lub w komunikatorze. Zachowaj oryginał, dopóki nie potwierdzisz, że kopia dobrze się czyta.",
    },
    {
      title: "Do zabezpieczonych albo dużych plików użyj aplikacji",
      body: "Przeglądarka nie skompresuje plików PDF zabezpieczonych hasłem i może mieć problem z bardzo dużymi. Aplikacja PDF Editor obsługuje oba przypadki offline.",
    },
  ],
  tips: [
    "Metoda przez przeglądarkę działa identycznie na Samsungu, Pixelu, Xiaomi i innych, więc warto ją zapamiętać niezależnie od urządzenia.",
    "Jeśli PDF jest ogromny, niemal na pewno winne są zeskanowane albo sfotografowane strony. To one kompresują się najlepiej.",
    "Kompresja zamienia strony na obrazy, więc mniejsza kopia traci zaznaczalny tekst. Zachowaj oryginał, jeśli musisz w nim wyszukiwać albo z niego kopiować.",
    "Niektóre aparaty na Androidzie zapisują HEIF w trybie wysokiej wydajności; standardowe skany JPG łatwiej skompresować i szeroko udostępnić.",
    "Zapisz skompresowany PDF pod nową nazwą, żeby ostry oryginał pozostał na urządzeniu.",
  ],
  mobileNote:
    "Kompresowanie na telefonie to właśnie to, czego chcą użytkownicy Androida, a aplikacja PDF Editor robi to offline, bez przesyłania, obsługuje pliki zabezpieczone hasłem i udostępnia bezpośrednio do Twoich aplikacji. Przy dokumentach, które zmniejszasz często, bije otwieranie przeglądarki za każdym razem.",
  faq: [
    {
      q: "Czy metoda przez przeglądarkę działa na każdym telefonie z Androidem?",
      a: "Tak. Ponieważ narzędzie Kompresuj PDF działa w przeglądarce, zachowuje się tak samo na Samsungu, Pixelu, Xiaomi i każdym innym urządzeniu z Androidem — w przeciwieństwie do wbudowanych funkcji, które różnią się między markami.",
    },
    {
      q: "Czy mogę skompresować PDF na Androidzie, nic nie instalując?",
      a: "Tak. Narzędzie Kompresuj PDF działa w przeglądarce i przetwarza plik na Twoim urządzeniu, więc instalacja nie jest potrzebna.",
    },
    {
      q: "Czy mój plik jest przesyłany?",
      a: "Nie. Kompresja odbywa się lokalnie na Twoim telefonie; nic nie jest wysyłane na serwer, co ma znaczenie przy dokumentach osobistych.",
    },
    {
      q: "Czy tekst pozostanie zaznaczalny?",
      a: "Nie. Podczas kompresji strony są renderowane ponownie jako obrazy, co usuwa zaznaczalną warstwę tekstową. Zachowaj oryginał, jeśli go potrzebujesz.",
    },
    {
      q: "Jak skompresować PDF zabezpieczony hasłem na Androidzie?",
      a: "Przeglądarka nie przetworzy zabezpieczonych plików. Użyj aplikacji PDF Editor, która otwiera i kompresuje je offline.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — zmniejsz w przeglądarce", path: "/compress-pdf" },
    {
      label: "Jak zmniejszyć PDF na iPhonie",
      path: "/guides/how-to-make-pdf-smaller-on-iphone",
    },
    {
      label: "Jak zmniejszyć rozmiar PDF do wysyłki mailem",
      path: "/guides/how-to-reduce-pdf-file-size-for-email",
    },
    {
      label: "Jak edytować PDF na Androidzie",
      path: "/guides/how-to-edit-pdf-on-android",
    },
  ],
  parentHub: { label: "Kompresuj PDF", path: "/compress-pdf" },
};

export default content;
