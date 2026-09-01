import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-images-for-sharing-documents",
  h1: "PDF czy obrazy do udostępniania dokumentów (JPG, PNG, HEIC)",
  description:
    "Kiedy JPG, PNG lub HEIC dokumentu to zły wybór – i co sprawia, że PDF jest właściwym formatem do wszystkiego poza szybkim zrzutem ekranu.",
  updated: "2026-05-29",
  intro: [
    "Zaskakująco duża część pracy firmowej i szkolnej jest wysyłana jako pliki graficzne – zdjęcia JPG umów, zdjęcia HEIC materiałów, zrzuty ekranu PNG paragonów. Wydaje się to szybsze niż stworzenie PDF-a, telefon ułatwia tę drogę, a odbiorca zwykle wciąż potrafi to przeczytać. Ale obrazy dokumentów to zły format dla niemal każdego prawdziwego sposobu pracy z dokumentami.",
    "PDF-y i obrazy dokumentów służą różnym celom. PDF-y są wielostronicowe, przeszukiwalne, nadają się do druku, podpisu, archiwizacji i nie psują się przy obrocie. Obrazy są jednostronicowe, nieprzeszukiwalne, często mają ogromny rozmiar pliku i często wychodzą rozmyte, bokiem albo w złych kolorach. Do wszystkiego poza jednym, szybkim udostępnieniem PDF-y sprawdzają się lepiej.",
    "Ten poradnik wyjaśnia dlaczego, kiedy podejście „obraz zamiast dokumentu” faktycznie się sprawdza (czasem tak), i prostą ścieżkę konwersji, gdy chcesz wersję PDF.",
  ],
  steps: [
    {
      title: "Rozpoznaj, kiedy obraz dokumentu to zły wybór",
      body: "Wielostronicowy dokument: zły format. Dokument, który trzeba wydrukować: zły format. Dokument, który musi być przeszukiwalny: zły format. Wszystko formalne, co trafi do teczki z dokumentami: zły format.",
    },
    {
      title: "Rozpoznaj nieliczne przypadki, w których obraz jest w porządku",
      body: "Jednostronicowe, ulotne, nieformalne. Szybkie zdjęcie paragonu do znajomego, zrzut ekranu strony z potwierdzeniem, zdjęcie odręcznej notatki dla samego siebie. Obraz jest właściwym formatem, gdy to jeszcze tak naprawdę nie jest dokument.",
    },
    {
      title: "Skonwertuj narzędziem Obraz do PDF, gdy udostępnienie staje się dokumentem",
      body: "Obraz do PDF łączy pliki JPG, PNG i WebP w PDF w Twojej przeglądarce. Obraz może później stać się przeszukiwalny po zastosowaniu OCR; zostaje jednym plikiem zamiast wielu.",
    },
    {
      title: "Użyj właściwego narzędzia dla danego źródła",
      body: "Zdjęcia → Obraz do PDF. Zeskanowane strony → Skanuj do PDF. Dokument Word/Pages → Word do PDF. Każdy format źródłowy ma swoją najczystszą ścieżkę konwersji.",
    },
    {
      title: "Osobno zajmij się HEIC z iPhone'a",
      body: "iPhone domyślnie zapisuje w HEIC, którego nie każdy odbiorca potrafi otworzyć. Skonwertuj HEIC → JPG → PDF albo użyj narzędzia, które obsługuje HEIC bezpośrednio. Funkcja skanowania w aplikacji PDF Editor obsługuje HEIC natywnie.",
    },
    {
      title: "Kompresuj z rozwagą",
      body: "Skorzystaj z Kompresuj PDF, jeśli wynikowy plik jest ogromny. Konwersje ze zdjęcia do PDF dziedziczą rozdzielczość zdjęcia, która często jest większa, niż dokument tego wymaga.",
    },
  ],
  tips: [
    "JPG pionowego dokumentu zrobiony telefonem to zły format. Obróć telefon albo użyj aplikacji do skanowania – wynik jest dużo bardziej czytelny.",
    "Zrzuty ekranu PNG konwertują się do PDF czysto, ale zdjęcia JPG papierowych dokumentów zwykle lepiej najpierw przepuścić przez aplikację do skanowania z wykrywaniem krawędzi.",
    "Nie wysyłaj wielu plików JPG jako wielostronicowego dokumentu. Połącz je w jeden PDF; w wątku z wieloma załącznikami odbiorcy gubią kolejność.",
    "HEIC to domyślny format iOS, ale wiele portali internetowych i klientów poczty go odrzuca. Skonwertuj przed udostępnieniem, jeśli nie znasz konfiguracji odbiorcy.",
    "Zdjęcia ekranu laptopa to najgorszy przypadek – mora, odblaski, niska rozdzielczość. Użyj funkcji eksportu do PDF zamiast fotografować ekran.",
  ],
  mobileNote:
    "To na telefonach najczęściej pojawia się błąd „obraz zamiast dokumentu”. Funkcja skanowania w aplikacji PDF Editor od razu wykrywa strony i tworzy czyste PDF-y, więc szybkie udostępnienie od razu staje się właściwym dokumentem, bez dodatkowego kroku konwersji.",
  faq: [
    {
      q: "Dlaczego zdjęcie dokumentu jest gorsze niż PDF?",
      a: "Zdjęcia są jednostronicowe, często przekrzywione, nieprzeszukiwalne, mogą mieć ogromny rozmiar pliku, a problemy z obrotem czy formatem ukrywają treść. PDF rozwiązuje wszystkie te problemy.",
    },
    {
      q: "Czy JPG bywa akceptowalny dla dokumentu?",
      a: "Przy jednostronicowych, nieformalnych udostępnieniach – tak, szybki paragon do znajomego, zrzut ekranu do współpracownika. Przy czymkolwiek formalnym albo wielostronicowym – nie.",
    },
    {
      q: "A co z HEIC?",
      a: "Domyślny format iPhone'a, ale nie wszędzie obsługiwany. Skonwertuj do JPG albo PDF przed udostępnieniem, jeśli odbiorca nie korzysta z urządzeń Apple.",
    },
    {
      q: "Jak połączyć wiele zdjęć w jeden PDF?",
      a: "Obraz do PDF łączy pliki JPG, PNG i WebP w jeden PDF w Twojej przeglądarce. Ustal kolejność przed dodaniem plików; wynikowy PDF ją zachowuje.",
    },
    {
      q: "Czy PDF zwiększy rozmiar pliku?",
      a: "Zależy od źródła. JPG dokumentu → PDF bez ponownej kompresji ma podobny rozmiar. Kompresuj PDF zmniejsza go w razie potrzeby.",
    },
  ],
  related: [
    { label: "Obraz do PDF — połącz zdjęcia w jeden plik", path: "/image-to-pdf" },
    { label: "PDF czy JPG dla dokumentów", path: "/guides/pdf-vs-jpg-for-documents" },
    { label: "Jak przekonwertować JPG do PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Jak przekonwertować zdjęcia do PDF na iPhonie", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Obraz do PDF — połącz zdjęcia w PDF", path: "/image-to-pdf" },
};

export default content;
