import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-scanned-pdf-quality",
  h1: "Jak poprawić jakość zeskanowanego PDF (wyostrzanie, prostowanie, kolor)",
  description:
    "Zeskanowane pliki PDF psują się w przewidywalny sposób: przekrzywienie, wyblakły kontrast, poplamione tło, zbyt duże pliki. Ustawienia przed skanowaniem i narzędzia po nim, które naprawdę to porządkują.",
  updated: "2026-05-29",
  intro: [
    "Zły skan psuje skądinąd prosty dokument. Krzywe linie, wyblakły kontrast, przebijające plamki kurzu, ogromny rozmiar pliku – a dokument w środku jest trudny do przeczytania albo niemożliwy do dalszej kompresji. Denerwujące jest to, że większość tych problemów bierze się z ustawień, nie z samego PDF-a, a uniknięcie ich przy przechwytywaniu jest dużo łatwiejsze niż naprawianie ich później.",
    "Gdy już masz zły skan do naprawy, realistyczne opcje to: wyprostować to, co krzywe, przyciąć to, co źle ujęte, zmniejszyć rozdzielczość tego, co ponadwymiarowe, i zaakceptować, że rozdzielczość stracona przy przechwytywaniu nie wróci. Niektóre narzędzia do przetwarzania obrazu obiecują wyostrzanie; w praktyce sprawiają, że rzeczy wyglądają inaczej, nie lepiej.",
    "Ten poradnik rozdziela zapobieganie (zeskanuj to dobrze za pierwszym razem) od odzyskiwania (co zrobić z plikiem, który już masz). Zapobieganie jest ważniejsze.",
  ],
  steps: [
    {
      title: "Zapobiegaj przekrzywieniu, prawidłowo podając strony",
      body: "Skanery z automatycznymi podajnikami przekrzywiają, gdy strony nie leżą prosto w tacce. Skany telefonem przekrzywiają, gdy przechylisz aparat. Obu da się uniknąć: wyrównaj stronę, trzymaj telefon równolegle do papieru, a skan wyjdzie prosto.",
    },
    {
      title: "Ustaw rozdzielczość skanowania na 200–300 DPI do dokumentów",
      body: "600 DPI to jakość fotograficzna i daje ogromne pliki bez żadnej korzyści przy zwykłej pisanej stronie. 150 DPI to za mało – tekst robi się miękki. Zakres 200–300 to złoty środek dla dokumentów, które udostępnisz, zarchiwizujesz lub wydrukujesz.",
    },
    {
      title: "Wybierz odcienie szarości albo czerń-biel zamiast koloru dla tekstu",
      body: "Tryb kolorowy na dokumencie tekstowym potraja rozmiar pliku i wprowadza szum, który słabo się kompresuje. Odcienie szarości albo czerń-biel dają ostrzejsze, mniejsze, czystsze skany dla wszystkiego, co nie jest zdjęciem ani kolorową grafiką.",
    },
    {
      title: "Używaj automatycznego kontrastu i automatycznego przycinania, jeśli są dostępne",
      body: "Większość aplikacji do skanowania ma automatyczny kontrast i wykrywanie krawędzi. Oba robią realną różnicę: kontrast usuwa szarą mgłę, wykrywanie krawędzi przycina do strony, więc marginesy są czyste.",
    },
    {
      title: "Ostrożnie kompresuj już istniejące skany",
      body: "Jeśli zeskanowany PDF jest już ogromny, Kompresuj PDF w Twojej przeglądarce może drastycznie go zmniejszyć. Nie ustawiaj ekstremalnego poziomu na tekście – może zpikselować znaki. Mocny, ale nie ekstremalny to bezpieczny wybór.",
    },
    {
      title: "Obróć przekrzywione strony narzędziem Obróć PDF",
      body: "Jeśli tylko kilka stron jest bokiem albo odwróconych, Obróć PDF prostuje je na miejscu. Nie naprawi drobnego przekrzywienia kątowego, ale poradzi sobie z obrotami o 90/180/270 stopni, które daje większość błędów podajnika.",
    },
  ],
  tips: [
    "Jasne, równomierne oświetlenie ma większe znaczenie niż jakość aparatu przy skanach telefonem. Dobrze oświetlony skan telefonem bije wynik słabo oświetlonego skanera biurowego.",
    "Nie skanuj w wysokim DPI i kolorze, a potem mocno kompresuj. Skanuj od razu we właściwych ustawieniach; plik jest mniejszy, ostrzejszy i szybszy w obsłudze.",
    "Przebijające się tło (tekst z odwrotnej strony cienkiego papieru) to problem papieru, nie skanu. Użyj kartki ciemnego papieru za stroną.",
    "Ponowne skanowanie jest niemal zawsze szybsze niż naprawianie. Jeśli masz papier, popraw skan przy przechwytywaniu, zamiast przetwarzać obraz.",
    "Aplikacje do skanowania telefonem obiecujące „ulepszenie” często dodają fałszywe wyostrzanie, które przy bliższym oglądzie wygląda gorzej. Czysty bazowy skan bije przetworzony zły.",
  ],
  mobileNote:
    "Skany telefonem psują się w przewidywalny sposób – kąt, światło i ostrość są w rękach użytkownika. Proces skanowania w aplikacji PDF Editor korzysta z wykrywania krawędzi w czasie rzeczywistym i dostrajania kontrastu, więc każde ujęcie za pierwszym razem wychodzi bliżej wyniku ze skanera płaskiego.",
  faq: [
    {
      q: "Dlaczego mój zeskanowany PDF jest tak wyblakły?",
      a: "Kontrast był ustawiony za nisko przy przechwytywaniu. Zeskanuj ponownie z włączonym automatycznym kontrastem albo z ręcznie ustawioną jasnością/kontrastem. Obróbka po fakcie pomaga tylko nieznacznie.",
    },
    {
      q: "Czy mogę wyostrzyć rozmyty skan?",
      a: "Tylko pozornie. Prawdziwy szczegół stracony przy przechwytywaniu nie da się odzyskać. Filtry wyostrzające zmieniają krawędzie, ale nie dodają informacji.",
    },
    {
      q: "Jakiej rozdzielczości skanowania powinienem użyć?",
      a: "200–300 DPI do dokumentów. 300, jeśli możesz drukować. Wszystko powyżej to marnotrawstwo przy tekście i tylko powiększa plik.",
    },
    {
      q: "Czy powinienem skanować w kolorze, czy w odcieniach szarości?",
      a: "Odcienie szarości albo czerń-biel do tekstu. Kolor tylko do zdjęć i kolorowych grafik. Odcienie szarości są ostrzejsze i dużo mniejsze.",
    },
    {
      q: "Dlaczego moje skany mają tak duży rozmiar pliku?",
      a: "Zwykle za wysokie DPI plus tryb kolorowy. Zmniejsz oba przy przechwytywaniu albo skompresuj istniejący plik. Zeskanowane PDF-y najbardziej zyskują na kompresji.",
    },
  ],
  related: [
    { label: "Skanuj do PDF — czyste przechwytywanie z wykrywaniem krawędzi", path: "/scan-to-pdf" },
    { label: "Kompresuj PDF — zmniejsz duże skany", path: "/compress-pdf" },
    { label: "Jak skompresować zeskanowany PDF", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Dlaczego mój PDF jest rozmyty?", path: "/guides/why-is-my-pdf-blurry" },
  ],
  parentHub: { label: "Skanuj do PDF — skanowanie aparatem telefonu", path: "/scan-to-pdf" },
};

export default content;
