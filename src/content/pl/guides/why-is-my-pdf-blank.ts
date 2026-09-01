import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blank",
  h1: "Dlaczego mój PDF jest pusty? Prawdziwe przyczyny i jak go odzyskać",
  description:
    "Gdy PDF otwiera się z pustymi stronami, treść zwykle wciąż tam jest – tylko ukryta przez błąd renderowania, brakującą czcionkę albo błąd skanu. Jak ustalić, co się stało, i przywrócić dokument.",
  updated: "2026-05-29",
  intro: [
    "Otwarcie PDF-a i zobaczenie pustej strony budzi niepokój. Spodziewasz się tekstu, wykresów, podpisanych umów – a dostajesz nic. Dobra wiadomość jest taka, że treść niemal zawsze wciąż jest w pliku. Zła wiadomość jest taka, że przyczyna może być jedną z kilku rzeczy, a musisz ustalić, która, zanim to naprawisz.",
    "Puste PDF-y zwykle biorą się z błędu renderowania (Twój czytnik zakrztusił się na czymś konkretnym), błędu czcionki (tekst technicznie tam jest, ale wskazuje na glif, którego nikt nie potrafi narysować), błędu skanowania lub przechwytywania (źródło wyprodukowało puste strony) albo problemu z warstwową lub ukrytą treścią. W rzadkich przypadkach plik naprawdę jest pusty.",
    "Ten poradnik przechodzi przez diagnozy w kolejności, w jakiej najtaniej je sprawdzić, a potem kieruje Cię do właściwej poprawki. Większość pustych PDF-ów staje się znów czytelna dzięki ponownemu eksportowi albo zmianie czytnika.",
  ],
  steps: [
    {
      title: "Najpierw otwórz plik w innym czytniku",
      body: "Wypróbuj wbudowany czytnik Chrome, Podgląd na macOS albo czytnik mobilny. Jeśli któryś z nich pokazuje treść, wyizolowałeś problem do swojego pierwotnego czytnika – a plik jest w porządku.",
    },
    {
      title: "Sprawdź rozmiar pliku względem oczekiwań",
      body: "Naprawdę pusty PDF jest maleńki – kilka KB. PDF wyglądający na pusty, który ma kilka megabajtów, niemal na pewno ma w środku treść, która po prostu Ci się nie renderuje.",
    },
    {
      title: "Poszukaj flag zabezpieczeń lub uprawnień",
      body: "Niektóre PDF-y są eksportowane z flagą „widoku chronionego” albo podpisu, która powoduje, że niektóre czytniki ukrywają treść, dopóki nie zostanie przyznane pozwolenie. Zapisanie niechronionej kopii z bardziej permisywnego czytnika zwykle to rozwiązuje.",
    },
    {
      title: "Wyeksportuj plik ponownie przez wydruk do PDF",
      body: "Otwórz plik w dowolnym czytniku, który wyświetla treść, i użyj „Drukuj → Zapisz jako PDF” (albo Microsoft Print to PDF na Windows). To odbudowuje renderowanie strony i naprawia większość pustek związanych z czcionkami.",
    },
    {
      title: "Jeśli to skan, zeskanuj ponownie z innym ustawieniem",
      body: "Puste zeskanowane strony zwykle biorą się z podajnika, który pobrał dwie strony naraz, ustawienia kontrastu za jasnego albo skanu telefonem, który skupił się na niewłaściwej płaszczyźnie. Proces Skanuj do PDF z wykrywaniem krawędzi unika większości tych problemów.",
    },
    {
      title: "Wyodrębnij poszczególne strony jako obrazy, żeby potwierdzić",
      body: "PDF do obrazów może wyeksportować każdą stronę jako PNG w Twojej przeglądarce. Jeśli wyeksportowane pliki PNG pokazują treść, problemem jest Twój czytnik. Jeśli są naprawdę puste, strona w pliku jest pusta.",
    },
  ],
  tips: [
    "Pusty PDF, który ma kilka megabajtów, ma gdzieś treść – próbuj kolejnych czytników i ponownych eksportów, zanim uznasz, że jest stracona.",
    "Jasnoszary tekst na białym tle może wyglądać na „pusty” na ekranie telefonu w bezpośrednim słońcu. Zwiększ jasność albo odwróć kolory, zanim uznasz, że strona jest pusta.",
    "Pliki eksportowane z aplikacji o ograniczonej dostępności czasem osadzają wszystko w jednej warstwie, którą nowsze czytniki ignorują. Wydruk do PDF spłaszcza to.",
    "Jeśli dostałeś z powrotem umowę z pustymi stronami podpisu, osoba podpisująca prawdopodobnie miała narzędzie do podpisu, które nadpisało prawdziwe pola pustymi adnotacjami – poproś o ponownie podpisaną kopię od innej osoby podpisującej.",
    "Nie edytuj ani nie łącz dalej pliku o wadliwym renderowaniu, dopóki nie wiesz, dlaczego tak się dzieje. Budowanie na zepsutym renderowaniu daje jeszcze bardziej zepsuty plik.",
  ],
  mobileNote:
    "Czytniki na telefonie bywają bardziej rygorystyczne niż te na komputerze. Aplikacja PDF Editor korzysta z permisywnego silnika renderującego, który zwykle pokazuje treść, nawet gdy inne czytniki mobilne wyświetlają pustkę, i pozwala zapisać dokument z powrotem jako czystszą kopię.",
  faq: [
    {
      q: "Czy pusty PDF jest stracony na zawsze?",
      a: "Rzadko. Jeśli rozmiar pliku przekracza kilka KB, treść niemal na pewno wciąż tam jest – spróbuj innego czytnika, ponownego eksportu przez wydruk do PDF albo wyodrębnienia obrazów, żeby to potwierdzić.",
    },
    {
      q: "Dlaczego mój skaner czasem produkuje puste PDF-y?",
      a: "Najczęściej podajnik pobrał dwie strony sklejone razem i zarejestrował tylko drugą, albo kontrast był ustawiony za nisko. Ponowne skanowanie z automatycznym kontrastem zwykle to naprawia.",
    },
    {
      q: "Czy to może być problem z czcionką?",
      a: "Tak. Gdy PDF odwołuje się do czcionki, która nie jest osadzona, a Twój czytnik nie potrafi jej zastąpić, tekst znika, mimo że wciąż jest w pliku. Ponowny eksport osadza możliwą do użycia czcionkę.",
    },
    {
      q: "Czy kompresowanie lub łączenie pustego PDF-a straci treść?",
      a: "Może – obie operacje działają na tym, co widzi Twój czytnik. Nie przetwarzaj pliku o wadliwym renderowaniu, dopóki nie potwierdzisz, że treść faktycznie tam jest.",
    },
    {
      q: "Dlaczego wygląda na pusty w Acrobacie, a w Chrome jest w porządku?",
      a: "Różne parsowanie. Czytnik Chrome jest często najbardziej wyrozumiały; starsze wersje Acrobata są surowsze. Plik nie jest zepsuty – Twój czytnik jest.",
    },
  ],
  related: [
    { label: "PDF do obrazów — sprawdź, czy strony naprawdę nie są puste", path: "/pdf-to-images" },
    { label: "Skanuj do PDF — czyste ponowne skany bez pustych stron", path: "/scan-to-pdf" },
    { label: "Dlaczego mój PDF się nie otwiera?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Jak naprawić uszkodzony plik PDF", path: "/guides/how-to-fix-a-corrupted-pdf" },
  ],
  parentHub: { label: "Narzędzia PDF — darmowe, w przeglądarce", path: "/pdf-tools" },
};

export default content;
