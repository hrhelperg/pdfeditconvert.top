import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-iphone",
  h1: "Jak edytować PDF na iPhonie (poradnik 2026)",
  description:
    "Edytuj tekst, dodawaj obrazy i zmieniaj kolejność stron PDF prosto na iPhonie. Instrukcja krok po kroku z aplikacją PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Edycja PDF-a na iPhonie kiedyś oznaczała przesyłanie pliku na stronę, której ledwo ufałeś, logowanie się na Macu albo zrobienie zrzutu ekranu potrzebnego fragmentu i wklejenie go z powrotem jako obraz. W 2026 roku żadne z tych rozwiązań nie jest już potrzebne. Dzięki odpowiedniej natywnej aplikacji możesz edytować tekst, zamieniać obrazy, zmieniać kolejność stron, wypełniać formularze i podpisywać dokumenty — wszystko na telefonie, w mniej niż minutę.",
    "Ten poradnik krok po kroku pokazuje, gdzie dotknąć w aplikacji PDF Editor. Te same schematy działają na iPadzie i w większości nowoczesnych edytorów PDF, więc te kroki przydadzą się nawet, jeśli kiedyś zmienisz narzędzie. Potrzebujesz iOS 16 lub nowszego oraz zainstalowanej z App Store aplikacji PDF Editor.",
    "Pokażemy, jak otworzyć PDF z dowolnego źródła (Pliki, Mail, iCloud Drive, Google Drive), edytować jego zawartość i wyeksportować wynik. Każdy krok mówi, co zrobić, a nie dlaczego — ale jeśli któryś krok wygląda na ekranie niejasno, w sekcji z poradami na końcu znajdziesz szybkie rozwiązania.",
  ],
  steps: [
    {
      title: "Zainstaluj i otwórz PDF Editor",
      body: "Pobierz ją z App Store, a potem otwórz aplikację. Do rozpoczęcia edycji nie jest potrzebne żadne konto.",
    },
    {
      title: "Dodaj plik PDF",
      body: "Dotknij przycisku + na ekranie głównym. Wybierz źródło — Pliki, iCloud Drive, rolkę aparatu albo „Przeglądaj”, żeby znaleźć foldery Google Drive / OneDrive. Możesz też otworzyć dowolny PDF z Maila lub Safari i wybrać „Otwórz w PDF Editor” z menu udostępniania.",
    },
    {
      title: "Edytuj tekst bezpośrednio na stronie",
      body: "Dotknij akapitu lub słowa. Pojawi się niebieskie zaznaczenie. Edytuj bezpośrednio w polu tekstowym, które się otworzy. Aplikacja zachowuje oryginalną czcionkę, rozmiar i kolor, dzięki czemu układ strony pozostaje nienaruszony.",
    },
    {
      title: "Zamień lub dodaj obraz",
      body: "Dotknij istniejącego obrazu, żeby zamienić go na inny z rolki aparatu. Możesz też dotknąć narzędzia do obrazów i umieścić nowy obraz w dowolnym miejscu strony. Przeciągnij rogi, żeby zmienić rozmiar.",
    },
    {
      title: "Zmień kolejność, usuń lub zduplikuj strony",
      body: "Dotknij ikony stron, żeby otworzyć siatkę miniatur. Przytrzymaj dowolną stronę, żeby ją przesunąć. Dotknij miniatury, żeby ją zduplikować lub usunąć.",
    },
    {
      title: "Podpisz dokument",
      body: "Dotknij narzędzia Podpis, narysuj swój podpis (albo użyj zapisanego) i umieść go we właściwym miejscu. Podpis jest zwykłym obiektem PDF, więc możesz go przesunąć lub zmienić jego rozmiar po umieszczeniu.",
    },
    {
      title: "Wypełnij pola formularza",
      body: "Jeśli PDF ma pola formularza, dotknij każdego z nich, żeby je wypełnić. Aplikacja automatycznie rozpoznaje typ pola — tekstowe, pole wyboru, lista rozwijana — i pokazuje odpowiednią klawiaturę.",
    },
    {
      title: "Zapisz i udostępnij",
      body: "Dotknij Gotowe. Wybierz „Zapisz”, żeby nadpisać oryginał, albo „Zapisz jako”, żeby zachować oba pliki. Menu udostępniania pozwoli Ci wysłać dokument przez Mail, Wiadomości, AirDrop lub dowolną zainstalowaną aplikację.",
    },
  ],
  tips: [
    "Rozsuń palce, żeby przybliżyć widok przed edycją drobnego tekstu — znacznie poprawia to precyzję.",
    "Dotknij słowa dwukrotnie, żeby zaznaczyć tylko to słowo; trzykrotnie, żeby zaznaczyć cały wiersz.",
    "Użyj Apple Pencil na iPadzie — podpisy wychodzą wyraźnie gładsze niż rysowane palcem.",
    "Włącz integrację z Plikami w Ustawieniach iOS → PDF Editor, żeby aplikacja pojawiała się w każdym menu udostępniania.",
    "Przytrzymaj strzałkę cofania na ekranie edycji, żeby cofnąć kilka ostatnich zmian naraz, jeśli zwykłe cofnij nie wystarcza.",
  ],
  mobileNote:
    "Integracja z Plikami w iOS ma znaczenie: włącz ją w Ustawieniach, żeby PDF Editor pojawiał się w menu udostępniania każdej innej aplikacji. Wtedy edycja PDF-a otrzymanego w Mailu czy Slacku to jedno dotknięcie.",
  faq: [
    {
      q: "Czy mogę edytować zeskanowany PDF na iPhonie?",
      a: "Możesz dodawać adnotacje, podpisywać i zmieniać kolejność stron. Żeby edytować sam tekst na zeskanowanej stronie, najpierw uruchom OCR — aplikacja robi to w kilka sekund.",
    },
    {
      q: "Czy aplikacja jest bezpłatna?",
      a: "Tak, do codziennej edycji. Niektóre zaawansowane funkcje odblokowuje uaktualnienie do wersji Pro.",
    },
    {
      q: "Czy działa z Apple Pencil?",
      a: "Tak. Pencil sprawdza się przy podpisach, odręcznych notatkach i zakreśleniach — wyraźnie lepiej niż dotyk palcem.",
    },
    {
      q: "Czy mogę edytować PDF zabezpieczony hasłem?",
      a: "Podaj hasło, gdy pojawi się prośba przy otwieraniu. Po odblokowaniu edycja działa normalnie. Przy zapisie możesz ponownie nałożyć hasło.",
    },
    {
      q: "Gdzie trafia edytowany plik?",
      a: "Tam, gdzie go zapiszesz: w Plikach, iCloud Drive, Google Drive, bibliotece zdjęć albo bezpośrednio w szkicu maila.",
    },
  ],
  related: [
    { label: "PDF Editor — pełny przegląd", path: "/pdf-editor" },
    {
      label: "Jak edytować PDF na Androidzie",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Jak podpisać PDF na telefonie", path: "/sign-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
