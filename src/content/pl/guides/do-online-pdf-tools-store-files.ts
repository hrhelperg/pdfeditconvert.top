import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "do-online-pdf-tools-store-files",
  h1: "Czy narzędzia PDF online przechowują Twoje pliki? Co sprawdzić",
  description:
    "Niektóre narzędzia PDF online usuwają przesłane pliki natychmiast, inne trzymają je godzinami, a jeszcze inne bezterminowo. Jak szybko przeczytać politykę prywatności i na co zwracać uwagę.",
  updated: "2026-05-29",
  intro: [
    "Gdy darmowe narzędzie PDF prosi Cię o przesłanie pliku, uczciwe pytanie brzmi: co dzieje się z tym plikiem potem? Odpowiedź bywa bardzo różna. Niektóre narzędzia usuwają przesłany plik natychmiast po zakończeniu konwersji. Inne trzymają go godzinę „dla Twojej wygody”. Jeszcze inne przechowują go dłużej, posługując się niejasnym sformułowaniem o „ulepszaniu usługi”. Niektóre wykorzystują go do trenowania modeli, o czym nawet nie wiesz.",
    "Odpowiedź powinna zawierać polityka prywatności, ale ta bywa długa, często niejasna, a czasem nieaktualna. Celowana lektura zajmuje minutę i mówi Ci to, co naprawdę musisz wiedzieć. A przy plikach na tyle wrażliwych, że przechowywanie ma znaczenie, bezpieczniejszym ruchem jest wybór narzędzia, które w ogóle nie przesyła pliku.",
    "Ten poradnik prowadzi przez szybką lekturę polityki prywatności, wyjaśnia, jakich wzorców szukać, i wskazuje bezpieczniejszą alternatywę, gdy problemem jest samo przesyłanie.",
  ],
  steps: [
    {
      title: "Znajdź politykę i przejdź od razu do przechowywania danych",
      body: "Politykę prywatności zwykle linkuje stopka strony. Wyszukaj na stronie (Ctrl-F) słów „przechowujemy”, „usuwamy”, „zapisujemy”, „przechowywanie”. Te słowa prowadzą prosto do sekcji o przechowywaniu danych.",
    },
    {
      title: "Przeczytaj konkretne liczby dotyczące przechowywania",
      body: "„Pliki są usuwane w ciągu godziny” jest konkretne i uspokajające. „Usuwamy pliki, gdy nie są już potrzebne” jest niejasne i może znaczyć wszystko. Liczą się konkretne, liczbowe zobowiązania; intencje nie.",
    },
    {
      title: "Sprawdź, co jest przechowywane poza samym plikiem",
      body: "Metadane (nazwa pliku, rozmiar, typ, adres IP) zwykle są przechowywane dłużej niż treść pliku. W większości przypadków przechowywanie metadanych jest do przyjęcia; przy bardzo wrażliwej pracy nawet to jest sygnałem ostrzegawczym.",
    },
    {
      title: "Poszukaj klauzul o wykorzystaniu danych do trenowania",
      body: "Niektóre darmowe narzędzia zastrzegają sobie prawo do wykorzystania przesłanych plików do ulepszania usługi albo trenowania modeli. Wyszukaj słów „ulepszać”, „trenować”, „analityka”. Jeśli je znajdziesz, traktuj to jako poważniejszy sygnał ostrzegawczy przy wrażliwej treści.",
    },
    {
      title: "Sprawdź sekcję o udostępnianiu stronom trzecim",
      body: "Nawet jeśli narzędzie nie zachowuje Twojego pliku, może udostępniać go dostawcom hostingu, podwykonawcom albo dostawcom analityki. Każdy z nich to kolejna strona z dostępem do pliku. Szukaj słów „dostawcy usług”, „podwykonawcy”, „strony trzecie”.",
    },
    {
      title: "Przy czymkolwiek wrażliwym wybieraj domyślnie przetwarzanie lokalne",
      body: "Jeśli narzędzie działa w Twojej przeglądarce bez przesyłania pliku (zweryfikuj to narzędziami deweloperskimi), pytanie o przechowywanie w ogóle nie ma sensu – nie ma czego przechowywać. Wybieraj tę ścieżkę, gdy przechowywanie pliku ma znaczenie.",
    },
  ],
  tips: [
    "Darmowe + niejasne przechowywanie + niejasne strony trzecie = unikaj przy wrażliwych plikach. To połączenie o najwyższym ryzyku.",
    "Nawet czysta polityka przechowywania nie jest gwarancją. Wycieki z serwerów się zdarzają. Jedyną opcją zerowego ryzyka jest nieprzesyłanie pliku.",
    "Traktuj przesłane pliki jako narażone na wykorzystanie w każdym celu, którego nie możesz sprawdzić. Jeśli nie opublikowałbyś danego pliku publicznie, zastanów się dwa razy nad jego przesłaniem.",
    "Jeśli musisz przesłać plik, najpierw zabezpiecz go hasłem. Narzędzie zobaczy zaszyfrowany blok danych; szyfrowanie chroni treść.",
    "Nie ufaj bezkrytycznie deklaracjom „nie przechowujemy danych” – zapisy polityki prywatności i rzeczywiste działanie mogą się rozjeżdżać.",
  ],
  mobileNote:
    "Aplikacje mobilne często mają osobne polityki prywatności w sklepie z aplikacjami albo w ustawieniach. Aplikacja PDF Editor przetwarza pliki lokalnie i w ogóle ich nie przesyła, więc kwestia przechowywania w ogóle nie ma zastosowania. Do pracy z wrażliwymi materiałami na telefonie wyłącznie lokalne przetwarzanie to najczystszy domyślny wybór.",
  faq: [
    {
      q: "Jak długo większość narzędzi PDF online przechowuje pliki?",
      a: "Bardzo różnie: od minut do bezterminowo. Duże komercyjne narzędzia zwykle usuwają pliki w ciągu godziny; mniejsze i darmowe narzędzia są niekonsekwentne. Czytaj politykę prywatności każdego narzędzia z osobna.",
    },
    {
      q: "Czy krótkie przechowywanie jest wystarczająco bezpieczne?",
      a: "Zależy od pliku. Dla zwykłych dokumentów godzina jest w porządku. Dla naprawdę wrażliwych materiałów każde przechowywanie stanowi realne okno ryzyka.",
    },
    {
      q: "A co z usuniętymi plikami — czy naprawdę znikają?",
      a: "Zwykle tak, z aktywnego magazynu danych, ale kopie zapasowe i repliki mogą przechowywać kopie dłużej. Naprawdę bezpieczne usunięcie jest technicznie trudniejsze, niż się wydaje.",
    },
    {
      q: "Czy darmowe narzędzia zawsze przechowują dłużej niż płatne?",
      a: "To raczej tendencja niż reguła. Niektóre darmowe narzędzia mają czystą politykę przechowywania; niektóre płatne mają zaskakujące klauzule. Przeczytaj politykę jednych i drugich.",
    },
    {
      q: "Jaka jest najbezpieczniejsza droga dla wrażliwego PDF-a?",
      a: "Narzędzia w przeglądarce, które przetwarzają plik lokalnie (bez przesyłania). Jeśli musisz go przesłać, najpierw zabezpiecz hasłem i wybierz narzędzie z jasnymi zobowiązaniami dotyczącymi usuwania danych.",
    },
  ],
  related: [
    { label: "Narzędzia PDF — działają w przeglądarce, bez przesyłania", path: "/pdf-tools" },
    { label: "Czy narzędzia PDF online są bezpieczne?", path: "/guides/are-online-pdf-tools-safe" },
    { label: "Narzędzia PDF w przeglądarce a narzędzia z przesyłaniem", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Jak unikać przesyłania wrażliwych dokumentów", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Narzędzia PDF — darmowe, w przeglądarce", path: "/pdf-tools" },
};

export default content;
