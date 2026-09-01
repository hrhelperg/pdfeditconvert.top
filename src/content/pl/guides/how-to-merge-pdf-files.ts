import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-merge-pdf-files",
  h1: "Jak połączyć pliki PDF na telefonie i komputerze",
  description:
    "Połącz wiele plików PDF w jeden dokument. Sposób pracy krok po kroku na telefonie z aplikacją PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Łączenie plików PDF to jedna z najczęstszych operacji na dokumentach, jakich potrzebuje mała firma czy student. Niezależnie od tego, czy chodzi o zeskanowane paragony trafiające do księgowego, prace naukowe zbierane na termin, czy ofertę zszywaną z dokumentami towarzyszącymi — wysłanie jednego uporządkowanego pliku bije żonglowanie pięcioma załącznikami.",
    "Ten poradnik pokazuje, jak scalić pliki PDF na telefonie za pomocą aplikacji PDF Editor na iPhone'a lub Androida. Sposób pracy jest taki sam na obu platformach: dodaj pliki, przeciągnij je w wybranej kolejności i wyeksportuj jeden połączony PDF. Cała operacja zwykle zajmuje mniej niż minutę.",
    "Jeśli wolisz łączyć pliki na komputerze, te same zasady sprawdzają się w większości nowoczesnych narzędzi PDF. Tutaj skupiamy się na telefonie, bo to właśnie tam odbywa się większość łączenia plików w praktyce — między spotkaniami, u klienta albo w podróży.",
  ],
  steps: [
    {
      title: "Otwórz aplikację PDF Editor",
      body: "Uruchom aplikację i dotknij kafelka Scal na ekranie głównym. Do rozpoczęcia nie jest potrzebne żadne konto.",
    },
    {
      title: "Dodaj pliki, które chcesz połączyć",
      body: "Dotknij przycisku +. Dodaj każdy PDF z Plików, iCloud Drive, Google Drive, OneDrive albo udostępniając go z dowolnej innej aplikacji. Możesz dowolnie mieszać źródła.",
    },
    {
      title: "Zmień kolejność w kolejce",
      body: "Przytrzymaj dowolny element w kolejce i przeciągnij go na właściwe miejsce. Kolejność w kolejce to kolejność w gotowym pliku. Sprawdź ją dwa razy przed scaleniem.",
    },
    {
      title: "Obróć strony w poziomie",
      body: "Jeśli któryś z plików źródłowych został zeskanowany bokiem, dotknij ikony obrotu przy danym elemencie, żeby połączony dokument dało się normalnie przeczytać.",
    },
    {
      title: "(Opcjonalnie) Dodaj stronę tytułową",
      body: "Dotknij Dodaj okładkę, żeby wstawić prostą stronę tytułową z datą i jednolinijkowym nagłówkiem. Przydaje się, gdy połączony dokument trafia do klienta.",
    },
    {
      title: "Dotknij Scal",
      body: "Aplikacja łączy wszystkie pliki w jeden PDF i pokazuje wynik do sprawdzenia. Scalanie odbywa się na urządzeniu, więc nawet zabezpieczone hasłem pliki źródłowe pozostają prywatne.",
    },
    {
      title: "Sprawdź połączony plik",
      body: "Przewiń dokument, żeby upewnić się, że strony są w dobrej kolejności i mają właściwą orientację. Skorzystaj z widoku miniatur Strony, żeby szybko to zweryfikować.",
    },
    {
      title: "Zapisz lub udostępnij",
      body: "Zapisz w Plikach, zsynchronizuj z dyskiem w chmurze albo udostępnij od razu mailem, przez AirDrop lub dowolny komunikator. Wybierz opisową nazwę pliku — „Umowa-z-Aneksem-2026-05.pdf” jest lepsze niż „Dokument(3).pdf”, gdy plik trafi do czyjejś skrzynki.",
    },
  ],
  tips: [
    "Dodaj stronę tytułową, gdy połączony dokument trafia do odbiorcy z zewnątrz — dzięki temu cały zestaw wygląda na przemyślany, a nie zaimprowizowany.",
    "Obróć strony zeskanowane bokiem przed scalaniem, a nie po nim — poprawianie orientacji później oznacza ponowny eksport całego pliku.",
    "Jeśli połączony PDF ma trafić na maila, użyj potem narzędzia Kompresuj, żeby wynik zmieścił się w typowym limicie załączników 25 MB.",
    "Oznacz zakładkami połączone sekcje w widoku Strony, żeby odbiorca mógł przejść od razu do istotnej części dłuższego dokumentu.",
    "Zachowaj oryginalne pliki źródłowe, dopóki nie potwierdzisz, że scalenie wyszło dobrze — nigdy nie usuwaj oryginałów w tej samej sesji.",
  ],
  mobileNote:
    "Łączenie plików na telefonie sprawdza się szczególnie dobrze, gdy trzeba połączyć skany z cyfrowymi PDF-ami — aplikacja obsługuje oba typy w jednej kolejce, a nowy skan możesz zrobić na miejscu i od razu dodać do scalania. Na komputerze to niewygodna operacja, a na telefonie to jedno dotknięcie.",
  faq: [
    {
      q: "Czy jest limit liczby plików, które mogę połączyć?",
      a: "Nie ma sztywnego limitu. Bardzo duże partie (50+ plików) zajmują więcej czasu na starszych telefonach, ale aplikacja bez problemu radzi sobie z typowym scalaniem. Jeśli napotkasz problemy z wydajnością, podziel zadanie na dwa scalenia i połącz wyniki.",
    },
    {
      q: "Czy mogę połączyć dokument Word z plikiem PDF?",
      a: "Tak, pośrednio. Najpierw przekonwertuj dokument Word do PDF za pomocą kafelka Konwertuj, a potem dodaj wynik do kolejki scalania razem z innymi plikami PDF.",
    },
    {
      q: "Co się dzieje z zabezpieczonymi hasłem plikami źródłowymi?",
      a: "Podaj hasło, gdy pojawi się o nie prośba. Aplikacja zajmuje się odszyfrowaniem lokalnie; wynikowy plik można zostawić bez zabezpieczenia albo ponownie zabezpieczyć wybranym hasłem.",
    },
    {
      q: "Czy oryginalne formatowanie zmieni się po scaleniu?",
      a: "Nie. Każda strona źródłowa jest zachowana dokładnie tak, jak była. Zmienia się tylko kolejność stron, wokół których budowany jest jeden plik PDF.",
    },
    {
      q: "Czy mogę cofnąć scalenie?",
      a: "Tak. Funkcja Podziel PDF rozbija dowolny plik PDF — połączony czy oryginalny — z powrotem na pojedyncze strony lub zakresy. Oryginały nigdy nie są modyfikowane podczas scalania.",
    },
  ],
  related: [
    { label: "Połącz PDF — za darmo, w przeglądarce", path: "/merge-pdf" },
    {
      label: "Podziel PDF — wyodrębniaj strony w przeglądarce",
      path: "/split-pdf",
    },
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
    {
      label: "Jak skompresować PDF po scaleniu",
      path: "/guides/how-to-compress-pdf",
    },
  ],
  parentHub: { label: "Połącz PDF", path: "/merge-pdf" },
};

export default content;
