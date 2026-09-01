import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-jpg",
  h1: "Jak przekonwertować PDF do JPG — eksportuj strony jako obrazy",
  description:
    "Eksportuj strony PDF jako obrazy JPG prosto w przeglądarce. Kiedy JPG jest lepszym wyborem niż PNG, jak skala wpływa na jakość i kiedy podgląd obrazu wygrywa z PDF-em.",
  updated: "2026-05-23",
  intro: [
    "Czasem PDF to niewłaściwy kontener. Chcesz wrzucić pojedynczą stronę do wiadomości na Slacku, gdzie wyświetli się w podglądzie, wkleić wykres do slajdu albo opublikować stronę tam, gdzie akceptowane są tylko obrazy. Do tego wszystkiego potrzebujesz stron jako JPG, a nie jako PDF.",
    "Ten poradnik korzysta z darmowego narzędzia PDF do obrazów, które renderuje każdą stronę PDF-a jako obraz do pobrania, w całości w przeglądarce, bez przesyłania niczego na serwer. JPG to jeden z dwóch oferowanych formatów i jest właściwym wyborem, gdy rozmiar pliku liczy się bardziej niż brzytwo ostry tekst.",
    "Omówimy, jak wybrać skalę (która kontroluje ostrość), kiedy JPG wygrywa z PNG, oraz ograniczenie, o którym warto pamiętać: JPG strony to płaski obrazek, a nie dokument.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie PDF do obrazów",
      body: "Przejdź do narzędzia PDF do obrazów w przeglądarce. Renderuje strony lokalnie na Twoim urządzeniu — bez przesyłania, bez potrzeby konta.",
    },
    {
      title: "Dodaj swój plik PDF",
      body: "Przeciągnij pojedynczy plik PDF na pole docelowe albo kliknij, żeby go wybrać. Narzędzie odczytuje każdą stronę, żeby móc wyeksportować je jako obrazy.",
    },
    {
      title: "Wybierz JPG jako format",
      body: "Wybierz JPG. Daje mniejsze pliki niż PNG i jest właściwym wyborem do zdjęć, zrzutów całej strony i wszędzie tam, gdzie rozmiar pliku liczy się bardziej niż idealnie ostry tekst.",
    },
    {
      title: "Ustaw skalę",
      body: "Skala kontroluje, w ilu pikselach renderuje się każda strona. 2× jest ostre na większości ekranów; zejdź do 1,5×, żeby zmniejszyć pliki, albo idź do 3×, gdy potrzebujesz bardzo ostrego wyniku i nie przeszkadza Ci rozmiar.",
    },
    {
      title: "Wyeksportuj strony",
      body: "Uruchom konwersję. Każda strona pobiera się jako osobny plik JPG, gotowy do wrzucenia w wiadomość, prezentację albo formularz przesyłania.",
    },
    {
      title: "Wybierz stronę, której potrzebujesz",
      body: "Jeśli potrzebowałeś tylko jednej strony, weź ten JPG, a resztę usuń. Przy długim PDF-ie wcześniejsze podzielenie go oznacza mniej obrazów do przejrzenia.",
    },
  ],
  tips: [
    "Wybierz JPG, gdy strona jest pełna zdjęć albo optymalizujesz pod kątem rozmiaru; wybierz PNG, gdy strona to głównie tekst albo grafika liniowa, która musi pozostać ostra.",
    "Wyższa skala oznacza ostrzejsze obrazy i większe pliki. Nie ma sensu wybierać 3×, jeśli obraz zawsze będzie oglądany w małym rozmiarze.",
    "JPG strony nie ma warstwy tekstowej — słów nie da się wyszukać, zaznaczyć ani skopiować. Zachowaj oryginalny PDF, jeśli tekst będzie jeszcze potrzebny.",
    "Bardzo duże pliki PDF przy wysokiej skali mogą wyczerpać pamięć przeglądarki. Jeśli narzędzie ma trudności, zejdź do skali 1,5× albo najpierw podziel PDF.",
    "Plików PDF zabezpieczonych hasłem nie da się wyrenderować w przeglądarce. Najpierw usuń hasło albo użyj aplikacji PDF Editor.",
  ],
  mobileNote:
    "Na telefonie eksportowanie strony jako obrazu często służy udostępnianiu: podglądy obrazów wyświetlają się bezpośrednio w czatach, podczas gdy załącznik PDF pozostaje tylko ikoną. Aplikacja PDF Editor renderuje i eksportuje strony błyskawicznie dzięki akceleracji sprzętowej, a potem przekazuje je prosto do menu udostępniania.",
  faq: [
    {
      q: "JPG czy PNG — co wyeksportować?",
      a: "JPG do mniejszych plików i stron pełnych zdjęć; PNG, gdy strona to głównie tekst albo diagramy, które muszą pozostać ostre. Kompresja JPG zmiękcza drobne krawędzie, co zauważysz na druku.",
    },
    {
      q: "Czy dostanę jeden obraz na stronę?",
      a: "Tak. Każda strona PDF-a jest renderowana i pobierana jako osobny plik JPG. Jeśli potrzebujesz tylko jednej strony, zachowaj ten plik, a resztę odrzuć.",
    },
    {
      q: "Czy mój PDF jest przesyłany?",
      a: "Nie. Renderowanie odbywa się w całości w przeglądarce, więc plik nie opuszcza Twojego urządzenia.",
    },
    {
      q: "Czy mogę później wyszukać tekst w JPG-u?",
      a: "Nie. Przekonwertowana strona to płaski obraz bez warstwy tekstowej. Żeby zachować przeszukiwalny tekst, zatrzymaj oryginalny PDF.",
    },
    {
      q: "Co robi ustawienie skali?",
      a: "Ustala, ile pikseli obrazu renderuje się na punkt PDF-a. 2× wygląda ostro na większości ekranów; 3× jest bardzo ostre, ale daje duże pliki.",
    },
  ],
  related: [
    {
      label: "PDF do obrazów — eksportuj strony w przeglądarce",
      path: "/pdf-to-images",
    },
    { label: "Obraz do PDF — konwersja odwrotna", path: "/image-to-pdf" },
    {
      label: "Jak przekonwertować PDF do PNG",
      path: "/guides/how-to-convert-pdf-to-png",
    },
    {
      label: "Jak podzielić PDF na osobne pliki",
      path: "/guides/how-to-split-pdf-files",
    },
  ],
  parentHub: { label: "PDF Converter", path: "/pdf-converter" },
};

export default content;
