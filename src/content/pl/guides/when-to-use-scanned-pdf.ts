import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-scanned-pdf",
  h1: "Kiedy używać zeskanowanego PDF (a kiedy nie)",
  description:
    "Zeskanowane pliki PDF rozwiązują konkretny problem – zamianę papieru na cyfrę. Są też większe, mniej przeszukiwalne i trudniejsze do edycji. Kiedy ten kompromis się opłaca.",
  updated: "2026-05-29",
  intro: [
    "Zeskanowane pliki PDF rozwiązują jeden konkretny problem: zamianę papieru na plik cyfrowy, który można udostępnić, zarchiwizować i wyświetlić na dowolnym urządzeniu. Robią to dobrze. Są jednak też większe niż odpowiadające im pisane cyfrowo PDF-y, nieprzeszukiwalne bez OCR, trudniejsze do edycji i często o niższej rozdzielczości niż źródło. Skanowanie dokumentu, który istnieje już cyfrowo, niemal zawsze jest złym ruchem.",
    "Właściwa zasada jest krótka. Skanuj papier, który nie ma cyfrowego źródła. Nie skanuj niczego, co masz już jako dokument Word, zrzut ekranu albo eksport do PDF. Pokusa, żeby wydrukować i zeskanować w celu „utrwalenia” dokumentu, jest zrozumiała, ale zwykle niepotrzebna – bezpośredni eksport do PDF robi to samo, tylko lepiej.",
    "Ten poradnik omawia, kiedy skanować, a kiedy nie. Większość z tego jest intuicyjna, gdy się to jasno powie; problem w tym, że pokusa, żeby zeskanować, często jest silniejsza niż faktyczna potrzeba.",
  ],
  steps: [
    {
      title: "Używaj zeskanowanego PDF, gdy jedynym źródłem jest papier",
      body: "Stare umowy, odręczne notatki, papierowe paragony, dokumenty przysłane pocztą, formularze podpisane odręcznie. Wszystko, co istnieje fizycznie i musi stać się cyfrowe. Skanuj do PDF telefonem albo skanerem płaskim tworzy czysty PDF.",
    },
    {
      title: "Nie skanuj dokumentów, które masz cyfrowo",
      body: "Jeśli masz dokument Word, źródłowy PDF albo eksport, użyj ich. Drukowanie, a potem skanowanie, traci wierność, powiększa plik i usuwa przeszukiwalność. Nie ma z tego żadnej korzyści.",
    },
    {
      title: "Nie skanuj, żeby „zablokować” dokument",
      body: "Ponowny eksport ze źródła do PDF utrwala treść. Skanowanie nie dodaje bezpieczeństwa; usuwa przeszukiwalność i jakość tekstu, nie utrudniając wcale zmiany pliku.",
    },
    {
      title: "Użyj OCR, jeśli skanujesz i potrzebujesz przeszukiwalności",
      body: "OCR zamienia zeskanowane obrazy tekstu w przeszukiwalny tekst pod spodem. Bez niego zeskanowane PDF-y to obrazki słów – czytelne, ale nieprzeszukiwalne.",
    },
    {
      title: "Kompresuj skany przed udostępnieniem",
      body: "Zeskanowane PDF-y to zwykle największe pliki PDF, z jakimi się spotkasz. Kompresuj PDF w przeglądarce znacząco je zmniejsza bez wyraźnej utraty jakości, zwłaszcza przy dokumentach czysto tekstowych.",
    },
    {
      title: "Skanuj w odpowiedniej rozdzielczości",
      body: "200–300 DPI dla dokumentów czytanych na ekranie. 300 DPI dla wszystkiego, co może zostać wydrukowane. 600 DPI to jakość fotograficzna, która marnuje miejsce przy tekście.",
    },
  ],
  tips: [
    "Większość momentów „muszę to zeskanować” okazuje się być „mam to już cyfrowo i zapomniałem”. Najpierw poszukaj źródła.",
    "Bezpośredni eksport do PDF jest czystszy niż zeskanowany wydruk pod każdym mierzalnym względem: ostrzejszy, mniejszy, przeszukiwalny, edytowalny.",
    "Skany telefonem dziś dorównują jakością skanerowi płaskiemu przy zwykłych dokumentach, dzięki wykrywaniu krawędzi i regulacji kontrastu.",
    "Skany z zastosowanym OCR są przeszukiwalne, ale nie idealnie odwzorowują tekst. Traktuj wynik OCR jako przybliżony, nie jako ostateczny.",
    "Nie skanuj, żeby świeży plik „wyglądał oficjalnie”. Format jest ten sam; nikogo nie obchodzi, czy plik został zeskanowany, czy wyeksportowany.",
  ],
  mobileNote:
    "Telefon to właściwe narzędzie do codziennego skanowania – aparat zawsze masz przy sobie, wykrywanie krawędzi daje czyste rezultaty, a gotowy PDF nadaje się do użytku od razu. Funkcja skanowania w aplikacji PDF Editor jest do tego zbudowana, z przechwytywaniem wielu stron i porządkowaniem na urządzeniu.",
  faq: [
    {
      q: "Czy powinienem zeskanować dokument, który mam jako plik Word?",
      a: "Nie. Wyeksportuj go bezpośrednio do PDF. Skanowanie traci rozdzielczość, powiększa plik i usuwa przeszukiwalność.",
    },
    {
      q: "Czy zeskanowany PDF jest bardziej „oficjalny” niż wyeksportowany?",
      a: "Nie. Oba są PDF-ami. O oficjalności decydują podpisy i treść, nie pochodzenie ze skanowania.",
    },
    {
      q: "Kiedy skanowanie naprawdę się przydaje?",
      a: "Gdy źródłem jest papier. Umowy przysłane pocztą, odręczne notatki, papierowe formularze z odręcznym pismem. Skanowanie to jedyny sposób, żeby to zdigitalizować.",
    },
    {
      q: "Czy powinienem stosować OCR do każdego skanu?",
      a: "Tak, jeśli Twoje narzędzie to obsługuje. Przeszukiwalne skany są dużo bardziej użyteczne na dłuższą metę, a OCR nie zmienia widocznego wyglądu.",
    },
    {
      q: "Jak duży powinien być zeskanowany PDF?",
      a: "Od kilkuset KB do kilku MB dla typowych dokumentów. Skany znacznie większe od tego skorzystają na kompresji.",
    },
  ],
  related: [
    { label: "Skanuj do PDF — skanowanie telefonem", path: "/scan-to-pdf" },
    { label: "Jak zeskanować dokumenty do PDF telefonem", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Jak poprawić jakość zeskanowanego PDF", path: "/guides/how-to-fix-scanned-pdf-quality" },
    { label: "PDF edytowalny czy PDF-obraz", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "Skanuj do PDF — skanowanie telefonem", path: "/scan-to-pdf" },
};

export default content;
