import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-sign-pdf-on-phone",
  h1: "Jak podpisać PDF na telefonie",
  description:
    "Dodawaj prawnie ważne podpisy elektroniczne do plików PDF z iPhone'a lub Androida. Praktyczny poradnik z aplikacją PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Drukowanie PDF-a tylko po to, żeby go podpisać i zeskanować z powrotem, to anachronizm. Większość jurysdykcji akceptuje podpisy elektroniczne dla zwykłych umów biznesowych, NDA, ofert i potwierdzeń. Twój telefon w zupełności wystarczy, żeby stworzyć czysty, prawnie użyteczny podpis w mniej niż minutę.",
    "Ten poradnik pokazuje, jak podpisać PDF na iPhonie lub Androidzie za pomocą aplikacji PDF Editor. Zapisany podpis możesz wykorzystywać przy każdym kolejnym dokumencie — rysujesz go tylko raz. Potem podpisanie dowolnej umowy to cztery dotknięcia: otwórz, dotknij Podpis, umieść, wyeksportuj.",
    "Omówimy też sytuacje, w których podpisywanie na telefonie jest *lepsze* niż przy biurku: umowy, które muszą wrócić szybko, podpisywanie w podróży i procesy z wieloma sygnatariuszami przekazującymi sobie dokument między telefonami. Na koniec będziesz mieć zapisany podpis gotowy do użycia przy każdym kolejnym dokumencie.",
  ],
  steps: [
    {
      title: "Otwórz PDF",
      body: "Dodaj dokument do aplikacji PDF Editor przez Pliki, dysk w chmurze, maila lub dowolną aplikację do udostępniania. Proces podpisywania działa niezależnie od tego, skąd pochodzi PDF.",
    },
    {
      title: "Dotknij narzędzia Podpis",
      body: "Znajdziesz je na pasku narzędzi edycji. Wybierz podpis odręczny, pisany albo inicjały. Narzędzie automatycznie wykrywa istniejące pola podpisu, jeśli PDF został przygotowany do podpisania.",
    },
    {
      title: "Narysuj lub wpisz podpis",
      body: "Tylko za pierwszym razem. Użyj palca, Apple Pencil albo S Pen. Wynik zapisuje się na Twoim urządzeniu. W każdej chwili możesz go edytować lub zamienić w Ustawieniach.",
    },
    {
      title: "Umieść podpis",
      body: "Przeciągnij go we właściwe miejsce na stronie. Zmień rozmiar, ciągnąc za uchwyty w rogach. Podpis staje się zwykłym obiektem PDF, więc możesz go przesunąć po umieszczeniu.",
    },
    {
      title: "W razie potrzeby dodaj datę i inicjały",
      body: "Wiele umów wymaga daty obok podpisu i inicjałów na każdej stronie. Datownik dodawany jednym dotknięciem i zapisany wariant inicjałów pokrywają obie te sytuacje.",
    },
    {
      title: "Wyeksportuj podpisaną kopię",
      body: "Zapisz jako nowy plik (zalecane — zachowaj niepodpisany oryginał) albo nadpisz istniejący. Wyeksportowany PDF zawiera metadane podpisu przydatne do celów archiwizacyjnych. Udostępnij mailem, przez AirDrop, Drive albo dowolny komunikator.",
    },
  ],
  tips: [
    "Użyj rysika zamiast palca, gdy dokument będzie poddawany wizualnej ocenie. Czystsza kreska robi realną różnicę w umowach trafiających do klientów.",
    "Zapisz podpis raz i wykorzystuj go przy każdym kolejnym dokumencie — aplikacja przechowuje go lokalnie na Twoim urządzeniu, nigdy nie przesyłając go dalej.",
    "Do rutynowych wewnętrznych potwierdzeń użyj podpisu pisanego, a do umów zewnętrznych — odręcznego.",
    "Do szczególnie wrażliwych podpisanych dokumentów zastosuj hasło przed udostępnieniem — narzędzie Zabezpiecz uruchamiasz po podpisaniu.",
    "Trzymaj niepodpisany oryginał PDF w folderze obok podpisanej wersji. Jeśli druga strona poprosi o „czystą” kopię albo będziesz musiał podpisać dokument ponownie z poprawkami, będziesz go mieć pod ręką.",
  ],
  mobileNote:
    "Podpisywanie na telefonie oznacza, że umowa wraca do drugiej strony w ciągu godziny — czasem w kilka minut. Ta przewaga szybkości ma szczególne znaczenie, gdy pracujesz poza biurkiem: u klienta, między spotkaniami albo w podróży. Cały proces od otrzymania umowy do odesłania jej podpisanej mieści się spokojnie w przerwie na kawę.",
  faq: [
    {
      q: "Czy podpis elektroniczny jest prawnie ważny?",
      a: "W większości jurysdykcji tak, przy zwykłych umowach biznesowych. Unijne rozporządzenie eIDAS i amerykańska ustawa ESIGN uznają standardowe podpisy elektroniczne. Przy dokumentach o wysokiej wartości lub regulowanych prawnie sprawdź lokalne przepisy — może być wymagany kwalifikowany podpis elektroniczny, czyli inny, bardziej sformalizowany proces.",
    },
    {
      q: "Czy kilka osób może podpisać ten sam PDF?",
      a: "Tak. Przekazuj plik między sygnatariuszami przez menu udostępniania, AirDrop, maila lub dowolny komunikator. Każdy podpis jest dodawany na miejscu, a poprzednie podpisy pozostają nienaruszone. Gotowy plik pokazuje podpisy wszystkich osób we właściwych miejscach.",
    },
    {
      q: "Czy podpis będzie wyglądał gładko na ekranie telefonu?",
      a: "Na nowoczesnych telefonach tak. Rysik daje wyraźnie gładszą kreskę niż palec, co ma znaczenie przy umowach poddawanych wizualnej ocenie. Przy rutynowych potwierdzeniach podpis palcem jest w zupełności akceptowalny.",
    },
    {
      q: "Czy mój podpis jest gdzieś przechowywany na serwerze?",
      a: "Nie. Zapisane podpisy istnieją wyłącznie na Twoim urządzeniu. Są nanoszone na dokumenty lokalnie i nigdy nie są przesyłane do naszej infrastruktury ani żadnej trzeciej strony.",
    },
    {
      q: "Co jeśli PDF ma już gotowe pola podpisu?",
      a: "Aplikacja wykrywa istniejące pola podpisu w formularzu i pozwala dotknąć ich bezpośrednio. Twój podpis automatycznie dopasowuje się do właściwego rozmiaru i pozycji — bez ręcznego zmieniania rozmiaru.",
    },
  ],
  related: [
    { label: "Podpisz PDF — pełny przegląd", path: "/sign-pdf" },
    {
      label: "Zabezpiecz podpisane PDF-y hasłem",
      path: "/guides/how-to-protect-pdf-file",
    },
    {
      label: "Jak edytować PDF na iPhonie",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
  ],
  parentHub: { label: "Podpisz PDF", path: "/sign-pdf" },
};

export default content;
