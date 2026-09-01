import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-file-size-for-email",
  h1: "Jak zmniejszyć rozmiar PDF do wysyłki mailem",
  description:
    "Sprowadź PDF poniżej limitów załączników w Gmailu i Outlooku. Prawdziwe limity, dlaczego skany je przekraczają i jak zmniejszyć plik, żeby dało się go wysłać.",
  updated: "2026-05-23",
  intro: [
    "Limity załączników mailowych od lat prawie się nie zmieniają, a dokumenty, które załączamy, wciąż robią się cięższe. Gmail zatrzymuje Cię na 25 MB. Outlook stawia granicę przy około 20 MB. Serwer odbiorcy może mieć limit jeszcze niższy. Więc załączasz zeskanowaną umowę albo raport pełen zdjęć, klikasz wyślij, a mail się odbija — albo, co gorsza, cicho nie dociera.",
    "Ten poradnik pokazuje, jak sprowadzić PDF do rozmiaru, który faktycznie da się wysłać. Korzysta z darmowego narzędzia Kompresuj PDF, które działa w przeglądarce, bez przesyłania niczego na serwer, i omawia praktyczne decyzje: jaki poziom kompresji, kiedy kompresować, a kiedy dzielić, i co zrobić, gdy nawet kompresja nie wystarcza.",
    "Dobra wiadomość jest taka, że pliki najbardziej narażone na odbicie — skany i pliki PDF pełne obrazów — to właśnie te, które kompresują się najmocniej.",
  ],
  steps: [
    {
      title: "Sprawdź, o ile przekraczasz limit",
      body: "Zanotuj rozmiar pliku i swój cel. Gmail ogranicza do 25 MB, Outlook do około 20 MB, a niektóre serwery firmowe jeszcze mniej. Znajomość różnicy podpowiada, jak agresywnie działać.",
    },
    {
      title: "Otwórz narzędzie Kompresuj PDF",
      body: "Przejdź do narzędzia Kompresuj PDF w przeglądarce. Przetwarza plik na Twoim urządzeniu — nic nie jest przesyłane, co ma znaczenie przy dokumentach wysyłanych mailem.",
    },
    {
      title: "Dodaj PDF i wybierz poziom",
      body: "Zacznij od poziomu Zalecany. Równoważy rozmiar i jakość i wystarcza w większości plików. Zejdź do Mocny tylko wtedy, gdy nadal przekraczasz limit.",
    },
    {
      title: "Skompresuj i sprawdź nowy rozmiar",
      body: "Uruchom i sprawdź wartości przed i po. Zeskanowane dokumenty często spadają wyraźnie poniżej 25 MB za jednym razem.",
    },
    {
      title: "Jeśli wciąż jest za duży, podziel go",
      body: "Gdy jeden dokument nie może się już wystarczająco zmniejszyć, użyj narzędzia Podziel PDF, żeby wysłać go jako dwa lub trzy mniejsze pliki — często bardziej praktyczne niż dalsze niszczenie jakości.",
    },
    {
      title: "Załącz i wyślij",
      body: "Załącz skompresowany (albo podzielony) plik. Najpierw otwórz go raz, żeby potwierdzić, że nadal czyta się czysto przy wybranym poziomie.",
    },
  ],
  tips: [
    "Poziom Zalecany pokonuje większość limitów mailowych z zapasem jakości. Zarezerwuj Mocny dla plików, które wciąż przekraczają limit po pierwszym przebiegu.",
    "Skany i pliki PDF pełne zdjęć kurczą się najbardziej; dokument złożony wyłącznie z tekstu jest już mały, więc jeśli jest ogromny, szukaj przyczyny w osadzonych obrazach albo czcionkach.",
    "Jeśli sama kompresja nie wystarcza, podzielenie dokumentu jest lepsze niż zdegradowanie go do nieczytelności — dwie czytelne połówki są lepsze niż jedna toporna całość.",
    "Kompresja zamienia strony na obrazy, więc wysłana kopia nie będzie miała zaznaczalnego tekstu. Jeśli odbiorca musi skopiować tekst, wyślij oryginał inną drogą, a skompresowany podgląd mailem.",
    "Gdy nawet skompresowany plik jest za duży, uczciwą odpowiedzią jest udostępniony link do chmury — zobacz poradnik o wysyłaniu dużych plików PDF.",
  ],
  mobileNote:
    "Większość odbitych załączników zdarza się, gdy wysyłasz dokument z telefonu między innymi sprawami. Aplikacja PDF Editor kompresuje offline i udostępnia bezpośrednio do aplikacji pocztowej, więc skan, który jest za duży, staje się plikiem gotowym do wysłania bez opuszczania skrzynki.",
  faq: [
    {
      q: "Jaki jest rzeczywisty limit załączników mailowych?",
      a: "Gmail ogranicza do 25 MB, Outlook do około 20 MB, a niektóre firmowe serwery pocztowe mają jeszcze niższy limit. Mierz z zapasem poniżej limitu odbiorcy, nie tylko swojego.",
    },
    {
      q: "Dlaczego mój PDF w ogóle jest za duży, żeby go wysłać mailem?",
      a: "Niemal zawsze winne są zeskanowane strony albo osadzone zdjęcia. Każda zeskanowana strona to zasadniczo obraz w wysokiej rozdzielczości, a kilka z nich szybko przekracza 25 MB.",
    },
    {
      q: "Jakiego poziomu kompresji powinienem użyć do maila?",
      a: "Zacznij od Zalecany — pokonuje większość limitów, zachowując czytelność dokumentu. Przejdź do Mocny tylko wtedy, gdy nadal przekraczasz limit po pierwszym przebiegu.",
    },
    {
      q: "Czy mój plik jest przesyłany podczas kompresji?",
      a: "Nie. Narzędzie Kompresuj PDF działa w Twojej przeglądarce, na Twoim urządzeniu, więc dokument pozostaje prywatny nawet podczas przygotowywania go do wysyłki.",
    },
    {
      q: "A co jeśli sama kompresja nadal nie wystarcza?",
      a: "Podziel PDF na mniejsze pliki albo udostępnij link do chmury zamiast załącznika. Oba rozwiązania są lepsze niż kompresowanie dokumentu aż do nieczytelności.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — zmniejsz do wysyłki mailem", path: "/compress-pdf" },
    {
      label: "Jak wysłać duży plik PDF",
      path: "/guides/how-to-send-large-pdf-files",
    },
    {
      label: "Jak skompresować PDF online bez przesyłania",
      path: "/guides/how-to-compress-pdf-online",
    },
    {
      label: "Jak podzielić PDF na osobne pliki",
      path: "/guides/how-to-split-pdf-files",
    },
  ],
  parentHub: { label: "Kompresuj PDF", path: "/compress-pdf" },
};

export default content;
