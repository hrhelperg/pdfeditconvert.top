import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-android",
  h1: "Jak edytować PDF na Androidzie (poradnik 2026)",
  description:
    "Edytuj pliki PDF na Androidzie: zmieniaj tekst, wstawiaj strony i podpisuj dokumenty. Jasna instrukcja krok po kroku z aplikacją PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Android całkiem nieźle radzi sobie z PDF-ami od razu po instalacji — ale tylko przy przeglądaniu. Gdy tylko trzeba poprawić literówkę, zamienić obraz albo zmienić kolejność stron, wbudowana przeglądarka plików osiąga swój limit, a typowym obejściem jest przesłanie pliku na jakąś stronę internetową. Jest szybszy sposób: natywny edytor działający na telefonie.",
    "Ten poradnik korzysta z aplikacji PDF Editor na Androidzie. Ten sam sposób pracy działa na tabletach i Chromebookach z uruchomionym środowiskiem Android. Potrzebujesz Androida 9 lub nowszego. Większość kroków jest identyczna jak w wersji na iPhone'a, ale Storage Access Framework Androida zmienia sposób importowania i zapisywania plików.",
    "Każdy krok pokazuje, gdzie dotknąć, wraz z drobnymi różnicami między telefonami a tabletami. Tam, gdzie Android różni się od iOS — wybór plików, integracja z Drive, przycisk wstecz — zaznaczymy to osobno.",
  ],
  steps: [
    {
      title: "Zainstaluj PDF Editor z Google Play",
      body: "Wyszukaj „PDF Editor” i wybierz aplikację wydaną przez hrhelperg. Zainstaluj i otwórz. Konto nie jest wymagane.",
    },
    {
      title: "Otwórz PDF",
      body: "Dotknij przycisku + na ekranie głównym. Pojawi się okno Storage Access Framework Androida — wybierz PDF z Plików, Google Drive, OneDrive, Dropboxa lub innego podłączonego dostawcy chmury. Możesz też dotknąć pliku PDF w Gmailu lub dowolnej aplikacji i wybrać PDF Editor jako program otwierający.",
    },
    {
      title: "Edytuj tekst",
      body: "Dotknij akapitu. Pojawi się niebieskie pole edycji. Wpisz tekst, żeby zastąpić lub wstawić treść. Aplikacja zachowuje istniejącą czcionkę i kolor, więc układ się nie rozpada.",
    },
    {
      title: "Zamień obraz",
      body: "Dotknij obrazu, żeby go zaznaczyć. Dotknij ikony zamiany i wybierz zamiennik z galerii lub plików. Przeciągnij rogi, żeby zmienić rozmiar bez zniekształcania proporcji.",
    },
    {
      title: "Wstaw nową stronę",
      body: "Dotknij ikony stron, żeby zobaczyć miniatury. Użyj przycisku + między miniaturami, żeby wstawić pustą stronę albo dodać obraz jako nową stronę.",
    },
    {
      title: "Wypełnij pola formularza",
      body: "Pliki PDF z polami interaktywnymi podświetlają się automatycznie. Dotknij pola, wpisz tekst i dotknij Gotowe. Klawiatura dopasowuje się do typu pola (tekst, liczba, data).",
    },
    {
      title: "Podpisz dokument",
      body: "Dotknij narzędzia Podpis, narysuj podpis palcem lub rysikiem i umieść go na stronie. Zapisz go do wykorzystania w przyszłości — nie będziesz musiał rysować go ponownie.",
    },
    {
      title: "Zapisz jako nowy plik",
      body: "Dotknij Gotowe, a potem „Zapisz jako”, żeby zachować zarówno oryginał, jak i edytowaną kopię. Selektor plików Androida pozwala zapisać dokument w Plikach, na Drive albo u dowolnego podłączonego dostawcy chmury.",
    },
  ],
  tips: [
    "Na dużych tabletach włącz podzielony ekran i ustaw dwa pliki PDF obok siebie, żeby szybko je porównywać.",
    "Jeśli masz S Pen, przełącz tryb wprowadzania na „Tylko rysik” w trybie edycji — dzięki temu odrzucanie dłoni działa dużo lepiej.",
    "Nadawaj plikom opisowe nazwy przed zapisem — „Umowa-podpisana-2026-05-11.pdf” jest dużo bardziej użyteczne niż „Dokument(1).pdf”, kiedy później czegoś szukasz.",
    "Przypnij PDF Editor do menu udostępniania, przytrzymując go po pierwszym użyciu — następnym razem pojawi się na samej górze.",
    "Jeśli edycja działa wolno na starszym urządzeniu, zamknij inne aplikacje w tle — renderowanie PDF-a korzysta z dostępnej pamięci RAM.",
  ],
  mobileNote:
    "Storage Access Framework Androida to właściwy sposób otwierania plików — daje trwały dostęp bez kopiowania pliku do pamięci samej aplikacji. Oznacza to, że zmiany zapisują się bezpośrednio z powrotem na Drive czy OneDrive, a nie do duplikatu.",
  faq: [
    {
      q: "Czy działa na starszych wersjach Androida?",
      a: "Oficjalnie od Androida 9 wzwyż. Starsze urządzenia mogą zainstalować aplikację, ale nie dostaną najnowszych funkcji (ulepszonego OCR, filtrów skanowania).",
    },
    {
      q: "Czy mogę otwierać pliki PDF zabezpieczone hasłem?",
      a: "Tak. Podaj hasło, gdy pojawi się o nie prośba. Aplikacja przechowuje dokument w postaci zaszyfrowanej podczas edycji i na życzenie ponownie go szyfruje przy zapisie.",
    },
    {
      q: "A co z integracją z Google Drive?",
      a: "Otwieraj i zapisuj pliki bezpośrednio z Drive przez systemowy selektor plików. Zmiany zapisane z powrotem na Drive nadpisują oryginał (albo zapisują się jako nowy plik — zależnie od wyboru).",
    },
    {
      q: "Czy zmiany zsynchronizują się z komputerem?",
      a: "Jeśli zapiszesz plik u dostawcy chmury (Drive, OneDrive, Dropbox), edytowany plik zsynchronizuje się automatycznie z innymi urządzeniami. Zapisy tylko lokalne zostają na telefonie.",
    },
    {
      q: "Czy działa offline?",
      a: "Tak. Edycja odbywa się w całości na urządzeniu. Synchronizacja z chmurą uruchamia się dopiero przy zapisie do lokalizacji w chmurze.",
    },
  ],
  related: [
    { label: "PDF Editor — pełny przegląd", path: "/pdf-editor" },
    {
      label: "Jak edytować PDF na iPhonie",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "Jak skompresować PDF", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
