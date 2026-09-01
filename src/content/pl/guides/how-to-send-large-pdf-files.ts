import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-large-pdf-files",
  h1: "Jak wysłać duży plik PDF (5 sprawdzonych sposobów)",
  description:
    "Pięć sprawdzonych sposobów na wysłanie PDF-a zbyt dużego na maila – kompresja, dzielenie, linki do chmury i inne – oraz jak wybrać między nimi.",
  updated: "2026-05-23",
  intro: [
    "Poczta e-mail to miejsce, gdzie duże pliki PDF odbijają się od limitów. Te limity są prawdziwe i nieugięte – 25 MB w Gmailu, około 20 MB w Outlooku, czasem mniej po stronie odbiorcy – a dokument pełen skanów łatwo je przekracza. Rozwiązaniem nie jest jeden trik, tylko znajomość garści sprawdzonych opcji i wiedza, która pasuje do Twojego pliku i odbiorcy.",
    "Ten poradnik pokazuje praktyczne drogi, mniej więcej w kolejności, w jakiej większość osób powinna ich próbować: zmniejszyć plik, podzielić go albo udostępnić link. Dwie z nich korzystają z darmowych narzędzi w przeglądarce, które działają na Twoim urządzeniu bez przesyłania niczego; trzecia dotyczy wyboru sposobu udostępniania, który uwzględnia wrażliwość dokumentu.",
    "Celem jest plik, który dotrze w całości i będzie czytelny, bez utraty jakości i bez przypadkowego udostępnienia zbyt wielu informacji przez serwis, któremu nie ufasz.",
  ],
  steps: [
    {
      title: "Najpierw spróbuj skompresować plik",
      body: "Przepuść plik przez narzędzie Kompresuj PDF. Skany i pliki PDF pełne obrazów często schodzą poniżej limitów maila za jednym razem – to najprostsze możliwe rozwiązanie.",
    },
    {
      title: "Jeśli wciąż jest za duży, podziel go",
      body: "Użyj narzędzia Podziel PDF, żeby wysłać dokument jako dwa lub trzy mniejsze pliki. Dwie czytelne części są lepsze niż jeden plik skompresowany do nieczytelności.",
    },
    {
      title: "Przy bardzo dużych plikach udostępnij link do chmury",
      body: "Prześlij plik do chmury, którą kontrolujesz, i wyślij link. To całkowicie omija limity maila i pozwala później cofnąć dostęp – ale przy wrażliwych dokumentach wybierz serwis, któremu ufasz.",
    },
    {
      title: "Sprawdź też limit odbiorcy, nie tylko swój",
      body: "Twój dostawca może pozwalać na wysyłkę 25 MB, podczas gdy dostawca odbiorcy odrzuca wszystko powyżej 10 MB. W razie wątpliwości mierz nisko albo wyślij link.",
    },
    {
      title: "Upewnij się, że ostateczny plik ma odpowiedni rozmiar i jest czysty",
      body: "Którą drogę byś nie wybrał, najpierw otwórz ostateczny plik – sprawdź poprawne strony, czytelną jakość i brak czegoś, czego tam być nie powinno.",
    },
  ],
  tips: [
    "Działaj po kolei: najpierw skompresuj, potem podziel, na końcu wyślij link. Każdy kolejny krok wymaga więcej wysiłku, więc zatrzymaj się, gdy tylko plik da się wysłać.",
    "Link do chmury to zwykle najuczciwsza odpowiedź na naprawdę ogromne pliki – ale przy dokumentach poufnych wybierz serwis, któremu ufasz, i cofnij dostęp, gdy nie jest już potrzebny.",
    "Kompresja zamienia strony w obrazy i usuwa zaznaczalny tekst. Jeśli odbiorca musi skopiować tekst, wyślij oryginał przez link zamiast mocno skompresowanego załącznika.",
    "Dzielenie wzdłuż naturalnych granic dokumentu (rozdziały, sekcje, podpisane kontra niepodpisane) jest bardziej użyteczne dla odbiorcy niż podział w dowolnym miejscu.",
    "Nie wysyłaj wrażliwych dokumentów do nieznanego darmowego serwisu firm trzecich od „dużych plików” tylko po to, by ominąć limit rozmiaru – to zamiana małej niedogodności na realne ryzyko dla prywatności.",
  ],
  mobileNote:
    "Gdy zbyt duży plik jest na telefonie, aplikacja PDF Editor kompresuje i dzieli go offline, po czym przekazuje wynik prosto do Twojej aplikacji mailowej lub komunikatora – dzięki temu możesz wysłać duży skan skądkolwiek jesteś, bez wcześniejszego przesyłania go do nieznanego serwisu.",
  faq: [
    {
      q: "Jaki jest najprostszy sposób na wysłanie zbyt dużego PDF-a?",
      a: "Najpierw skompresuj. Skany i pliki PDF pełne obrazów często schodzą poniżej limitów maila za jednym razem, co pozwala całkowicie uniknąć dzielenia czy linków.",
    },
    {
      q: "Kiedy warto podzielić plik zamiast go kompresować?",
      a: "Gdy sama kompresja nie potrafi wystarczająco zmniejszyć pliku bez zniszczenia jakości. Dwa lub trzy czytelne pliki są lepsze niż jeden zdegradowany.",
    },
    {
      q: "Czy linki do chmury są bezpieczne dla wrażliwych dokumentów?",
      a: "Mogą być, jeśli korzystasz z serwisu, któremu ufasz, i cofniesz dostęp po zakończeniu. Unikaj nieznanych darmowych serwisów od „dużych plików” przy czymkolwiek poufnym.",
    },
    {
      q: "Skąd wiem, czy odbiorca może otrzymać plik?",
      a: "Jego limit może być niższy niż Twój. Jeśli nie masz pewności, skompresuj plik dobrze poniżej 10 MB albo wyślij link, zamiast ryzykować ciche odrzucenie.",
    },
    {
      q: "Czy kompresja przed wysłaniem szkodzi dokumentowi?",
      a: "To kompresja stratna, która usuwa zaznaczalny tekst. Przy dokumentach, w których liczy się jakość lub przeszukiwalność tekstu, udostępnij oryginał przez link zamiast ściskać go do załącznika.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — zmniejsz, by wysłać", path: "/compress-pdf" },
    { label: "Podziel PDF — wyślij w częściach", path: "/split-pdf" },
    { label: "Jak zmniejszyć rozmiar PDF do wysyłki mailem", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Jak udostępnić PDF z telefonu", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Kompresuj PDF", path: "/compress-pdf" },
};

export default content;
