import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-online",
  h1: "Jak skompresować PDF online bez przesyłania go na serwer",
  description:
    "Zmniejsz PDF prosto w przeglądarce – bez przesyłania, bez konta. Czym kompresja na urządzeniu różni się od typowych narzędzi online i jaki jest kompromis jakościowy.",
  updated: "2026-05-23",
  intro: [
    "„Skompresuj PDF online” zwykle przywodzi na myśl znajomy, nieco niekomfortowy obrazek: prześlij plik na czyjś serwer, poczekaj, pobierz wynik i miej nadzieję, że dokument, który właśnie oddałeś, nie był niczym, na czym Ci zależało. Jest lepsza wersja tego sposobu pracy — taka, która działa w samej karcie przeglądarki, więc plik nigdy nie opuszcza Twojego urządzenia.",
    "Ten poradnik korzysta z darmowego narzędzia Kompresuj PDF, które wykonuje pracę lokalnie, na procesorze Twojego urządzenia. Jest „online” w tym sensie, że docierasz do niego przez stronę internetową, ale Twój PDF nigdzie nie jest wysyłany. To rozróżnienie ma największe znaczenie dla dokumentów, które ludzie faktycznie kompresują: zeskanowanych umów, wyciągów, wniosków.",
    "Przejdziemy przez kroki, uczciwie wyjaśnimy kompromis jakościowy i wskażemy typy plików, przy których kompresja w przeglądarce albo błyszczy, albo napotyka ścianę.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie Kompresuj PDF",
      body: "Przejdź do narzędzia Kompresuj PDF w przeglądarce. Wczytuje się na stronie i przetwarza Twój plik na Twoim urządzeniu — bez przesyłania, bez rejestracji.",
    },
    {
      title: "Dodaj swój plik PDF",
      body: "Przeciągnij plik na pole docelowe albo kliknij, żeby go wybrać. Nic nie jest przesyłane — plik jest odczytywany lokalnie.",
    },
    {
      title: "Wybierz poziom kompresji",
      body: "Niski zachowuje najwięcej szczegółów, Zalecany równoważy rozmiar i jakość, Mocny daje najmniejszy plik. Do maila i przesyłania na portale Zalecany to zwykle złoty środek.",
    },
    {
      title: "Skompresuj",
      body: "Uruchom operację. Narzędzie renderuje i przekodowuje strony ponownie lokalnie, a potem pokazuje rozmiar przed i po oraz procent oszczędności.",
    },
    {
      title: "Sprawdź, czy wynik wygląda akceptowalnie",
      body: "Otwórz skompresowany plik i przejrzyj strony. Skany powinny wciąż być czytelne; jeśli poziom wygląda zbyt agresywnie, cofnij się do łagodniejszego.",
    },
    {
      title: "Pobierz mniejszy plik",
      body: "Zapisz go jako nowy plik, żeby oryginał pozostał nietknięty. Skompresowana kopia jest gotowa do załączenia albo przesłania.",
    },
  ],
  tips: [
    "„Online” nie oznacza tu „przesłane”. Plik jest przetwarzany w przeglądarce, na Twoim urządzeniu, co jest bezpieczniejszym sposobem na kompresję czegokolwiek wrażliwego.",
    "Kompresja jest stratna — żadne uczciwe narzędzie nie twierdzi inaczej. Niższe poziomy zachowują więcej szczegółów; wybierz taki, który wciąż wygląda akceptowalnie do Twojego zastosowania.",
    "Żeby uzyskać realne oszczędności w przeglądarce, narzędzie renderuje strony ponownie jako obrazy, więc tekst w wyniku nie jest już zaznaczalny ani przeszukiwalny. Zachowaj oryginał, jeśli tego potrzebujesz.",
    "Pliki PDF złożone wyłącznie z tekstu albo wektorów ledwie się zmniejszają, bo jest mało danych obrazowych do skompresowania — największe zyski dają skany i pliki pełne zdjęć.",
    "Plików PDF zabezpieczonych hasłem nie da się przetworzyć w przeglądarce. Najpierw usuń hasło albo użyj aplikacji PDF Editor, która obsługuje zabezpieczone pliki.",
  ],
  mobileNote:
    "Kompresowanie wrażliwego dokumentu w podróży to dokładnie sytuacja, w której przetwarzanie na urządzeniu pokazuje swoją wartość. Aplikacja PDF Editor kompresuje w całości offline — możesz zmniejszyć umowę w trybie samolotowym i żaden bajt nie opuści Twojego telefonu — a do tego obsługuje pliki zabezpieczone hasłem.",
  faq: [
    {
      q: "Czy mój PDF jest faktycznie przesyłany na serwer?",
      a: "Nie. Mimo że docierasz do niego przez stronę internetową, narzędzie Kompresuj PDF działa w Twojej przeglądarce i przetwarza plik na Twoim urządzeniu. Nic nie jest przesyłane, co czyni je bezpiecznym dla poufnych dokumentów.",
    },
    {
      q: "O ile zmniejszy się mój plik?",
      a: "Zależy od treści. Zeskanowane i pełne obrazów pliki PDF często kurczą się o 50–90%; pliki złożone wyłącznie z tekstu mogą prawie się nie zmienić. Narzędzie pokazuje dokładny rozmiar przed i po.",
    },
    {
      q: "Czy jakość spadnie?",
      a: "Tak, do pewnego stopnia — to kompresja stratna i nie udajemy inaczej. Niższe poziomy zachowują więcej szczegółów. Wybierz poziom, który wygląda akceptowalnie do sposobu, w jaki dokument będzie używany.",
    },
    {
      q: "Dlaczego nie mogę zaznaczyć tekstu po kompresji?",
      a: "Żeby uzyskać realne oszczędności rozmiaru w przeglądarce, każda strona jest zamieniana na obraz, co usuwa zaznaczalną warstwę tekstową. Jeśli potrzebujesz przeszukiwalnego tekstu, zachowaj oryginał albo zastosuj łagodniejsze podejście.",
    },
    {
      q: "Czy mogę w ten sposób skompresować zabezpieczony PDF?",
      a: "Nie w przeglądarce. Najpierw usuń hasło albo użyj mobilnej aplikacji PDF Editor, która potrafi otwierać i kompresować zabezpieczone pliki.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — zmniejsz w przeglądarce", path: "/compress-pdf" },
    {
      label: "Jak skompresować PDF bez utraty jakości",
      path: "/guides/how-to-compress-pdf",
    },
    {
      label: "Jak zmniejszyć rozmiar PDF do wysyłki mailem",
      path: "/guides/how-to-reduce-pdf-file-size-for-email",
    },
    {
      label: "Narzędzia PDF stawiające na prywatność",
      path: "/guides/privacy-first-pdf-tools",
    },
  ],
  parentHub: { label: "Kompresuj PDF", path: "/compress-pdf" },
};

export default content;
