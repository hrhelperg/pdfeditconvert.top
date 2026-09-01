import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "scan-to-pdf",
  hero: {
    eyebrow: "Skanowanie do PDF",
    h1: "Zamień papier w czyste, przeszukiwalne pliki PDF.",
    highlight: "czyste",
    lead: "Skanuj paragony, dokumenty tożsamości, umowy i wielostronicowe dokumenty aparatem telefonu. Automatyczne wykrywanie krawędzi, korekta perspektywy i OCR — gotowe w kilka sekund, na urządzeniu.",
    primaryCta: { label: "Otwórz aplikację", href: SITE.app.appStore },
  },
  problem: {
    heading: "Dlaczego zdjęcia dokumentów robione telefonem wyglądają źle",
    paragraphs: [
      "Zrobienie zdjęcia umowy domyślnym aparatem daje plik JPG prześwietlony przez lampy na suficie, zniekształcony przez kąt trzymania telefonu i pokazujący powierzchnię pod kartką. Ma zły kształt, zły kontrast i nie da się go przeszukiwać. Każdy, kto go dostanie, musi mrużyć oczy, żeby cokolwiek odczytać.",
      "Wyślij taki JPG mailem do księgowej, a dostaniesz grzeczną prośbę o „porządny PDF\". Powód jest konkretny: paragony w formacie JPG nie dają się indeksować, ich oprogramowanie księgowe nie potrafi zastosować na nich OCR, a często nie przechodzą walidacji przy przesyłaniu dokumentów.",
      "Aplikacja do skanowania dokumentów odbudowuje zdjęcie tak, jak powinno wyglądać: prostokątne, ze skorygowanym kontrastem, wyprostowane i zapisane jako PDF z ukrytą warstwą tekstu. Wielostronicowe dokumenty stają się jednym plikiem, a nie dwunastoma plikami JPG w rolce aparatu.",
    ],
  },
  features: {
    heading: "Skanuj jak prawdziwym skanerem",
    items: [
      {
        icon: "ScanLine",
        title: "Automatyczne wykrywanie krawędzi",
        body: "Aplikacja automatycznie znajduje krawędzie dokumentu i robi skan, gdy kadr jest odpowiedni.",
      },
      {
        icon: "Maximize",
        title: "Korekta perspektywy",
        body: "Krzywe kąty zostają wyprostowane. Wynik wygląda tak, jakby był zrobiony dokładnie z góry.",
      },
      {
        icon: "Layers",
        title: "Skany wielostronicowe",
        body: "Rejestruj strony jedna po drugiej. Aplikacja łączy je w jeden plik PDF.",
      },
      {
        icon: "ScanText",
        title: "OCR (przeszukiwalny tekst)",
        body: "Rozpoznawaj słowa na zeskanowanych stronach, dzięki czemu powstały plik PDF jest przeszukiwalny i można z niego kopiować tekst.",
      },
      {
        icon: "Sun",
        title: "Inteligentne filtry",
        body: "Filtry kolorowe, czarno-białe albo zoptymalizowane pod dokumenty, radzące sobie z problemami z oświetleniem.",
      },
      {
        icon: "Tag",
        title: "Automatyczne nazywanie",
        body: "Aplikacja proponuje nazwy plików na podstawie zawartości dokumentu — paragony, umowy, dokumenty tożsamości.",
      },
    ],
  },
  steps: {
    heading: "Jak zeskanować dokument do PDF",
    items: [
      {
        title: "Otwórz skaner",
        body: "Dotknij kafelka Skanuj na ekranie głównym aplikacji PDF Editor.",
      },
      {
        title: "Wyceluj w dokument",
        body: "Trzymaj telefon mniej więcej nad kartką. Aplikacja znajduje krawędzie i pulsuje, gdy jest gotowa.",
      },
      {
        title: "Pozwól na automatyczne uchwycenie",
        body: "Albo zrób zdjęcie ręcznie. Uchwycenie jest natychmiastowe.",
      },
      {
        title: "W razie potrzeby popraw narożniki",
        body: "Dopracuj wykryte krawędzie, zanim perspektywa zostanie skorygowana.",
      },
      {
        title: "Dodaj kolejne strony",
        body: "Dotknij licznika stron, aby kontynuować. Aplikacja łączy je w kolejności.",
      },
      {
        title: "Zapisz jako PDF",
        body: "Wybierz nazwę pliku (albo zaakceptuj podpowiedź) i zapisz. OCR działa w tle.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Skanowanie tam, gdzie jesteś",
    body: "Paragony skanuje się przy stoliku, umowy w sali spotkań, dokumenty tożsamości przy odprawie na lotnisku. Cały sens polega na tym, że nie nosisz skanera płaskiego w torbie. Skaner dokumentów w telefonie to najbliższy substytut, w pełni wystarczający do codziennych potrzeb biznesowych.",
  },
  faq: [
    {
      q: "Czy jakość skanu jest tak dobra jak ze skanera płaskiego?",
      a: "W przypadku codziennych dokumentów biznesowych — paragonów, umów, dokumentów tożsamości, formularzy — tak. Do archiwalnego skanowania zdjęć albo drobnego druku na papierze błyszczącym skaner płaski nadal jest lepszy.",
    },
    {
      q: "Jak niezawodne jest skanowanie wielostronicowe?",
      a: "Bardzo niezawodne. Aplikacja rejestruje kolejne strony, dopóki nie zatrzymasz procesu, a przed zapisaniem możesz zmienić kolejność stron albo je usunąć.",
    },
    {
      q: "Jakie języki obsługuje OCR?",
      a: "Wszystkie główne języki oparte na alfabecie łacińskim, a także cyrylicę, grekę, arabski, chiński, japoński i koreański. Jakość rozpoznawania zależy od oświetlenia i stanu strony.",
    },
    {
      q: "Czy mogę skanować dokumenty tożsamości i paszporty?",
      a: "Tak. Aplikacja tworzy czysty, wyprostowany skan, który możesz zapisać lub udostępnić. Dla bezpieczeństwa przechowuj skany dokumentów tożsamości w chronionym folderze albo zabezpiecz hasłem powstały plik PDF.",
    },
    {
      q: "Czy działa offline?",
      a: "Skanowanie i wykrywanie krawędzi działają na urządzeniu. OCR dla niektórych rzadziej używanych języków może przy pierwszym użyciu wymagać połączenia, aby pobrać model.",
    },
  ],
  related: [
    {
      label: "Krok po kroku: jak skanować dokumenty do PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    { label: "Edytuj zeskanowany plik PDF później", path: "/pdf-editor" },
    {
      label: "PDF dla firm",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Skanuj dokumenty bezpośrednio z aparatu.",
    sub: "Bezpłatnie na iOS i Androidzie. Skany zostają na Twoim urządzeniu.",
  },
};

export default content;
