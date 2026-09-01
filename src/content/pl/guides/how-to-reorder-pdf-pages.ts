import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reorder-pdf-pages",
  h1: "Jak zmienić kolejność stron w PDF (za darmo, w przeglądarce)",
  description:
    "Ułóż strony PDF we właściwej kolejności prosto w przeglądarce. Napraw skany, które wyszły w złej kolejności, lub połączone pliki, które wylądowały w bałaganie.",
  updated: "2026-05-23",
  intro: [
    "Strony trafiają w złej kolejności częściej, niż mogłoby się wydawać. Podajnik dokumentów pobiera stos i skanuje go od tyłu. Scalanie łączy dwa pliki, ale w złej kolejności. Załącznik, który powinien być na końcu, ląduje w środku. Bez względu na przyczynę naprawa jest ta sama: ułóż strony na nowo, aż dokument będzie czytał się tak, jak powinien.",
    "Ten poradnik korzysta z darmowego narzędzia Zmień kolejność stron PDF, które pokazuje podgląd każdej strony i pozwala je przesuwać za pomocą prostych kontrolek, bezpośrednio w przeglądarce — nic nie jest przesyłane na serwer. Widzisz miniatury, przekładasz je na właściwe miejsce i pobierasz poprawiony plik.",
    "To niewielka operacja o nieproporcjonalnie dużym efekcie: dokument we właściwej kolejności sprawia wrażenie przemyślanego, a ten w złej kolejności sprawia, że całość wygląda niechlujnie.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie Zmień kolejność stron PDF",
      body: "Przejdź do narzędzia Zmień kolejność stron PDF w przeglądarce. Działa na Twoim urządzeniu — bez przesyłania, bez konta.",
    },
    {
      title: "Dodaj swój plik PDF",
      body: "Przeciągnij plik na pole docelowe albo kliknij, żeby go wybrać. Narzędzie renderuje miniaturę każdej strony, dzięki czemu od razu widzisz obecną kolejność.",
    },
    {
      title: "Znajdź to, co jest nie na miejscu",
      body: "Przejrzyj miniatury pod kątem stron odwróconych, źle umieszczonych albo zduplikowanych. Znajomość docelowej kolejności, zanim zaczniesz, przyspiesza przekładanie.",
    },
    {
      title: "Przenieś strony we właściwą kolejność",
      body: "Użyj kontrolek, żeby przesunąć każdą stronę na właściwą pozycję. Pracuj od początku dokumentu w stronę końca, żeby pozycje pozostały przewidywalne.",
    },
    {
      title: "Sprawdź nową kolejność",
      body: "Przejrzyj miniatury jeszcze raz od góry do dołu. Pokazana kolejność to kolejność, którą dostaniesz w pliku.",
    },
    {
      title: "Pobierz poprawiony PDF",
      body: "Wyeksportuj plik z nową kolejnością i zapisz go pod jasną nazwą. Zachowaj oryginał, dopóki nie potwierdzisz, że nowa kolejność jest poprawna.",
    },
  ],
  tips: [
    "Jeśli cały skan wyszedł odwrócony, zmiana kolejności naprawia sekwencję — ale strona bokiem to problem obrotu, którym zajmuje się narzędzie Obróć PDF.",
    "Zmień kolejność, zanim skompresujesz albo skonwertujesz plik. Łatwiej najpierw poprawić strukturę, a potem uruchomić cięższe operacje na gotowym dokumencie.",
    "Przesuwaj strony od początku do końca, żeby każdy kolejny ruch nie mieszał już ustawionych pozycji.",
    "Przy dokumentach łączących kilka źródeł zmień kolejność zaraz po scaleniu, dopóki zamierzona struktura jest jeszcze świeża w pamięci.",
    "Zachowaj oryginalny plik. Jeśli zmiana kolejności się nie uda, dużo szybciej zacząć od nowa z nietkniętego źródła.",
  ],
  mobileNote:
    "Zmiana kolejności na telefonie to przeciąganie miniatur, a aplikacja PDF Editor sprawia, że jest to dotykowe: naciśnij, przeciągnij, upuść, gotowe — offline i bez przesyłania pliku. Przydatne zaraz po skanowaniu, gdy strony często wymagają szybkiego przetasowania.",
  faq: [
    {
      q: "Czy mogę naprawić skan, który wyszedł w odwrotnej kolejności?",
      a: "Tak. Zmiana kolejności pozwala odwrócić sekwencję, żeby ostatnio zeskanowana strona wróciła na początek. Jeśli strony są też obrócone, popraw orientację narzędziem Obróć PDF.",
    },
    {
      q: "Czy zmiana kolejności zmienia treść stron?",
      a: "Nie. Zmienia się tylko sekwencja — treść i orientacja każdej strony pozostają dokładnie takie, jakie były.",
    },
    {
      q: "Czy mój PDF jest przesyłany?",
      a: "Nie. Zmiana kolejności odbywa się w przeglądarce, na Twoim urządzeniu, więc plik pozostaje prywatny.",
    },
    {
      q: "Czy mogę usuwać strony podczas zmiany kolejności?",
      a: "Zmiana kolejności dotyczy tylko sekwencji. Żeby usunąć strony, wyodrębnij te, które chcesz zachować, za pomocą narzędzia Wyodrębnij strony PDF — niepotrzebne strony po prostu pominiesz.",
    },
    {
      q: "Czy oryginalny plik zostanie naruszony?",
      a: "Nie. Narzędzie tworzy nowy plik PDF z poprawioną kolejnością, a Twoje źródło pozostaje nietknięte, więc w razie potrzeby możesz spróbować ponownie od oryginału.",
    },
  ],
  related: [
    {
      label: "Zmień kolejność stron PDF — układaj strony w przeglądarce",
      path: "/reorder-pdf-pages",
    },
    { label: "Obróć PDF — napraw strony bokiem", path: "/rotate-pdf" },
    {
      label: "Jak uporządkować pliki PDF",
      path: "/guides/how-to-organize-pdf-files",
    },
    {
      label: "Jak połączyć pliki PDF",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "Zmień kolejność stron PDF", path: "/reorder-pdf-pages" },
};

export default content;
