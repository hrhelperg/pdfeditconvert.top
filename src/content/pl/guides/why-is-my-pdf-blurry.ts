import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blurry",
  h1: "Dlaczego mój PDF jest rozmyty? Rozdzielczość, kompresja i skanowanie",
  description:
    "Rozmyte pliki PDF biorą się z niskiej rozdzielczości skanu, zbyt agresywnej kompresji lub nieudanego eksportu – nie z samego formatu. Jak rozpoznać, z którą przyczyną masz do czynienia, i jak odzyskać ostrość.",
  updated: "2026-05-29",
  intro: [
    "Same PDF-y niczego nie rozmywają. Format bez problemu przechowuje brzytwo ostry tekst wektorowy i obrazy w wysokiej rozdzielczości. Więc gdy PDF wygląda miękko, mętnie albo pikselowato, rozmycie wzięło się z czegoś konkretnego: przechwycenia w niskiej rozdzielczości, kompresji, która poszła za daleko, albo ustawienia eksportu, które spłaszczyło ostrą treść do bitmap.",
    "Wiedza, co z tego spowodowało problem z Twoim plikiem, ma znaczenie, bo poprawki są zupełnie różne. Nie da się „odkompresować” pliku, który już został zgnieciony, ale można ponownie wyeksportować ze źródła, zeskanować ponownie w lepszej rozdzielczości albo wybrać inne narzędzie do konwersji. A w przypadku niektórych plików rozmycie jest tylko na ekranie – oryginał wciąż istnieje w pełnej jakości, po prostu wyświetlony w mniejszej rozdzielczości przez czytnik.",
    "Ten poradnik rozdziela przyczyny i przechodzi przez praktyczną poprawkę dla każdej z nich, łącznie z sytuacją, gdy nic nie da się zrobić poza powrotem do źródła.",
  ],
  steps: [
    {
      title: "Przybliż i przyjrzyj się krawędziom",
      body: "Ostre krawędzie na tekście, ale rozmyte na obrazach oznaczają, że tekst jest wektorowy (czysty), a zdegradowane są tylko zdjęcia – zwykle przez kompresję. Rozmyty tekst oznacza, że cała strona jest rastrowym obrazem, co wskazuje na skan albo eksport przez wydruk-do-obrazu.",
    },
    {
      title: "Sprawdź oryginalną rozdzielczość przechwytywania",
      body: "Skany poniżej 150 DPI wyglądają rozmyto bez względu na wszystko. 200–300 DPI to bezpieczny zakres dla dokumentów, które będziesz czytać na ekranie; 600 to przesada do wszystkiego poza pracą archiwalną i drukiem zdjęć.",
    },
    {
      title: "Sprawdź, czy kompresja nie była przesadzona",
      body: "Pliki zredukowane do „ekstremalnej” kompresji często wyglądają dobrze przy powiększeniu 100% i okropnie przy 200%. Jeśli masz oryginał sprzed kompresji, możesz skompresować go ponownie z łagodniejszym ustawieniem – narzędzie Kompresuj PDF pozwala wymienić rozmiar na wyrazistość.",
    },
    {
      title: "Wyeksportuj ponownie ze źródła, jeśli je masz",
      body: "Dokumenty stworzone w Wordzie, Pages, Google Docs czy narzędziach projektowych powinny być eksportowane jako PDF bezpośrednio ze źródła, nie drukowane do PDF ze zrzutu ekranu. Bezpośredni eksport utrzymuje tekst wektorowy i ostry.",
    },
    {
      title: "Zeskanuj ponownie z ostrzejszymi ustawieniami",
      body: "Jeśli problemem jest skan, a wciąż masz papier, powtórz go w 300 DPI przy dobrym oświetleniu. Skany telefonem ogromnie zyskują na pojedynczej stronie ułożonej płasko przy równomiernym świetle – czyste przechwycenie bije obróbkę po fakcie.",
    },
    {
      title: "Potwierdź, że plik nie jest po prostu pomniejszany na ekranie",
      body: "Niektóre czytniki próbkują w dół dla wydajności i wyglądają miękko, dopóki nie powiększysz. Wyeksportuj stronę do PNG narzędziem PDF do obrazów w skali 2× lub 3× – jeśli PNG jest ostry, Twój czytnik kłamał.",
    },
  ],
  tips: [
    "Tekst, który da się zaznaczyć kursorem, jest tekstem wektorowym i nie powinien być rozmyty. Jeśli jest, Twój czytnik renderuje w dół – wypróbuj inny czytnik, zanim ponownie eksportujesz.",
    "Zrzuty ekranu z telefonu wstawione do dokumentu już są w niskiej rozdzielczości. Zawsze będą wyglądać miękko w PDF-ie; nie ma poprawki poza ponownym przechwyceniem w większym rozmiarze.",
    "Nie kompresuj pliku dwa razy. Powtarzana kompresja spotęgowuje rozmycie. Zachowaj oryginał, skompresuj raz do udostępnienia, zarchiwizuj źródło.",
    "PDF-y pełne JPEG-ów rozmywają się mocniej niż te pełne PNG-ów przy tej samej kompresji – JPEG jest stratny z założenia. Zrzuty ekranu w PNG dłużej pozostają ostre.",
    "Jeśli masz tylko rozmytą wersję, OCR czasem potrafi odzyskać czytelny tekst nawet, gdy obraz wygląda mętnie. Tekst będzie czysty, nawet jeśli obraz nie.",
  ],
  mobileNote:
    "PDF-y zrobione telefonem rozmywają się najczęściej przez drżącą rękę, słabe światło albo złe kadrowanie. Proces skanowania w aplikacji PDF Editor obejmuje automatyczne wykrywanie krawędzi i stabilizację, więc jedno spokojne ujęcie na stronę daje ostry dokument za pierwszym razem.",
  faq: [
    {
      q: "Czy rozmycie wynika z samego formatu PDF?",
      a: "Nie. PDF przechowuje tekst jako wektory i obrazy w ich źródłowej rozdzielczości. Rozmycie pochodzi ze źródła – niskiego DPI, agresywnej kompresji albo eksportu ze zrzutu ekranu.",
    },
    {
      q: "Czy mogę wyostrzyć rozmyty PDF po fakcie?",
      a: "Ledwo. Niektóre przetwarzanie obrazu potrafi udawać ostrość na zdjęciach, ale nie da się dodać szczegółu, którego nie przechwycono. Uczciwą poprawką jest powtórzenie kroku źródłowego.",
    },
    {
      q: "Dlaczego mój skompresowany PDF jest rozmyty tylko na niektórych stronach?",
      a: "Kompresja najmocniej uderza w strony pełne obrazów. Strony tylko z tekstem zostają ostre. Jeśli rozmyte są tylko niektóre strony, to te ze zdjęciami, wykresami lub skanami.",
    },
    {
      q: "Jakiej rozdzielczości skanowania powinienem użyć?",
      a: "200–300 DPI do dokumentów, które będziesz czytać na ekranie. 300 DPI do wszystkiego, co możesz wydrukować. 600 DPI tylko do zdjęć i archiwizacji.",
    },
    {
      q: "Dlaczego PDF wygląda dobrze przy 100%, ale rozmyto przy 200%?",
      a: "Albo został zrastrowany w niskiej rozdzielczości, albo skompresowany poza punkt, w którym powiększenie ujawnia stratę. Nie da się odzyskać szczegółu bez ponownego eksportu.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — wybierz łagodniejsze ustawienia dla ostrzejszego wyniku", path: "/compress-pdf" },
    { label: "PDF do obrazów — eksportuj strony w wysokiej rozdzielczości", path: "/pdf-to-images" },
    { label: "Najlepsze ustawienia kompresji PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Jak poprawić jakość zeskanowanego PDF", path: "/guides/how-to-fix-scanned-pdf-quality" },
  ],
  parentHub: { label: "PDF do obrazów — ostre eksporty stron", path: "/pdf-to-images" },
};

export default content;
