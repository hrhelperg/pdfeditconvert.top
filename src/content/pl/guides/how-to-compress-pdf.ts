import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "Jak skompresować PDF (bez utraty jakości)",
  description:
    "Zmniejsz rozmiar pliku PDF do wysyłki mailem lub przesłania na portal bez utraty jakości. Samouczek przyjazny telefonom, z aplikacją PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Każdy serwis pocztowy wciąż ma limit załączników. Gmail ogranicza je do 25 MB. Outlook napotyka ścianę przy około 20 MB. Slack i większość komunikatorów też przestaje przyjmować pliki powyżej mniej więcej 25 MB. Prawdziwe PDF-y — oferty ze zdjęciami, zeskanowane umowy, raporty z wykresami — z łatwością przekraczają te limity.",
    "Są dwa sposoby na zmniejszenie PDF-a. Zły sposób to wydruk do PDF przy niższej jakości, który trwale pogarsza tekst i podpisy. Właściwy sposób to ponowna kompresja obrazów i przekodowanie czcionek wewnątrz pliku — tekst zostaje ostry, a rozmiar pliku spada o 60–90%.",
    "Ten poradnik pokazuje właściwy sposób z użyciem aplikacji PDF Editor na iPhonie lub Androidzie. Kroki są takie same na obu platformach. Na koniec będziesz mieć plik wystarczająco mały, żeby go wysłać, a jednocześnie wyglądający identycznie jak oryginał przy dowolnym powiększeniu.",
  ],
  steps: [
    {
      title: "Otwórz aplikację PDF Editor",
      body: "Uruchom aplikację z ekranu głównego telefonu. Dotknij kafelka Kompresuj na ekranie głównym aplikacji.",
    },
    {
      title: "Dodaj plik PDF",
      body: "Dotknij Dodaj plik. Wybierz z Plików / iCloud (iPhone) albo przez selektor plików (Android). Możesz też udostępnić PDF z dowolnej aplikacji do PDF Editor.",
    },
    {
      title: "Wybierz poziom jakości",
      body: "Trzy gotowe ustawienia pokrywają niemal każdy przypadek. Zrównoważony sprawdza się w większości plików. Wybierz Mały dla plików, które wyślesz mailem lub prześlesz na portal. Wybierz Wysoki, gdy wynik ma być gotowy do druku.",
    },
    {
      title: "Zobacz podgląd skompresowanego wyniku",
      body: "Dotknij Podgląd. Aplikacja pokazuje rozmiar oryginału i skompresowanego pliku obok siebie, a także miniatury pierwszych kilku stron. Przybliż widok, żeby sprawdzić ostrość tekstu.",
    },
    {
      title: "Porównaj z oryginałem",
      body: "Przełączaj się między oryginalnymi a skompresowanymi stronami. Jeśli coś wygląda gorzej (rzadkość przy ustawieniu Zrównoważony), spróbuj innego poziomu.",
    },
    {
      title: "Zapisz lub udostępnij",
      body: "Zapisz skompresowany plik pod nową nazwą (żeby oryginał pozostał nietknięty) albo udostępnij go od razu mailem, przez Drive lub dowolny komunikator.",
    },
  ],
  tips: [
    "Jeśli plik składa się głównie ze zeskanowanych stron, ustawienie Mały może dać redukcję powyżej 90% bez widocznej utraty jakości.",
    "W plikach PDF złożonych głównie z tekstu zyski z kompresji są mniejsze (10–30%) — taki plik jest już dość wydajny.",
    "Podzielenie ogromnego PDF-a przed kompresją przyspiesza działanie na starszych telefonach i daje więcej elastyczności przy wysyłce.",
    "Zawsze zachowaj oryginał, dopóki nie potwierdzisz, że skompresowany plik wygląda dobrze — po kompresji oryginalna jakość przepada bezpowrotnie.",
    "Skompresowane pliki PDF zachowują przeszukiwalny tekst i podpisy. Kompresja dotyczy obrazów i tabel czcionek, a nie warstwy treści.",
  ],
  mobileNote:
    "Kompresja odbywa się w całości na urządzeniu. Możesz skompresować poufną umowę w samolocie, w trybie samolotowym, a żaden bajt pliku nie opuści Twojego telefonu.",
  faq: [
    {
      q: "O ile zmniejszy się mój PDF?",
      a: "Pliki PDF pełne obrazów lub zeskanowane zwykle kurczą się o 60–90%. Pliki złożone głównie z tekstu zmniejszają się mniej, zwykle o 10–30%. Aplikacja pokazuje dokładny rozmiar przed i po.",
    },
    {
      q: "Czy obrazy staną się rozmyte?",
      a: "Ustawienia Zrównoważony i Wysoki zachowują ostre obrazy przy normalnym powiększeniu. Mały stosuje silniejszą kompresję obrazów — w sam raz do maila, ale przy dużym przybliżeniu zauważysz lekkie zmiękczenie.",
    },
    {
      q: "Czy mogę skompresować PDF zabezpieczony hasłem?",
      a: "Tak, po podaniu hasła. Aplikacja zajmuje się odszyfrowaniem, kompresuje treść, a przy zapisie może ponownie nałożyć zabezpieczenie.",
    },
    {
      q: "Jaka jest różnica między kompresją a spakowaniem do ZIP?",
      a: "Spakowanie do ZIP umieszcza PDF w innym kontenerze, ale rzadko go zmniejsza — pliki PDF już same w sobie korzystają z wewnętrznej kompresji. Prawdziwa kompresja PDF przepisuje obrazy i czcionki wewnątrz pliku i to jedyny sposób na realną oszczędność miejsca.",
    },
    {
      q: "Czy mogę skompresować kilka plików PDF naraz?",
      a: "Tak. Dodaj kilka plików w jednej sesji, a aplikacja przetworzy je jeden po drugim, stosując do każdego to samo ustawienie.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — pełny przegląd", path: "/compress-pdf" },
    { label: "PDF Converter", path: "/pdf-converter" },
    {
      label: "Jak połączyć pliki PDF",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "Kompresuj PDF", path: "/compress-pdf" },
};

export default content;
