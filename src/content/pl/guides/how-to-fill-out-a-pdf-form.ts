import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-out-a-pdf-form",
  h1: "Jak wypełnić formularz PDF (interaktywny lub nieinteraktywny)",
  description:
    "Wypełnij dowolny formularz PDF, niezależnie od tego, czy ma prawdziwe pola, czy jest nieinteraktywnym skanem, na którym piszesz. Kompletna instrukcja na komputer i telefon, wraz z podpisywaniem i zapisywaniem.",
  updated: "2026-06-01",
  intro: [
    "Wypełnianie formularza PDF jest proste, gdy już wiesz, z którym z dwóch typów masz do czynienia. Formularz interaktywny ma pola, które dotykasz i w które wpisujesz tekst; formularz nieinteraktywny to obraz strony, na którym sam umieszczasz tekst. Większość formularzy jest jednego z tych dwóch typów, czasem mieszanką, a oba da się uzupełnić cyfrowo, nie dotykając drukarki.",
    "To jest kompletna instrukcja – główny materiał na ten temat, obejmujący zarówno przypadek interaktywny, jak i nieinteraktywny, na komputerze i telefonie. Mechanika jest za każdym razem taka sama: umieść odpowiedzi na stronie, obsłuż pola wyboru i daty, podpisz, jeśli wymagane, a potem zapisz czystą kopię i zachowaj pusty oryginał.",
    "Jeśli zależy Ci konkretnie na krokach dla telefonu, poradniki mobilne wchodzą głębiej w iPhone'a i Androida. Tutaj celem jest uniwersalna metoda działająca niezależnie od urządzenia, z uczciwymi uwagami o tym, gdzie formularze mogą sprawiać kłopot.",
  ],
  steps: [
    {
      title: "Otwórz formularz i wykonaj test dotknięcia",
      body: "Otwórz PDF i kliknij lub dotknij miejsca, gdzie powinna trafić pierwsza odpowiedź. Kursor lub podświetlone pole oznacza pola interaktywne; brak reakcji oznacza, że formularz jest nieinteraktywny i sam dodasz tekst.",
    },
    {
      title: "Wypełnij pola interaktywne, wpisując tekst",
      body: "Dotknij pola i pisz. Użyj Tab lub przewijania, żeby przechodzić między polami, kliknij pola wyboru, żeby je zaznaczyć, i otwórz listy rozwijane, żeby wybrać dostępne opcje. Idź od góry do dołu, żeby żadnego nie pominąć.",
    },
    {
      title: "Wypełnij formularze nieinteraktywne za pomocą pól tekstowych",
      body: "W formularzu bez pól użyj narzędzia tekstowego, żeby umieścić odpowiedź na każdej linii. Najpierw przybliż widok, żeby tekst trafił dokładnie na linię, a nie unosił się nad nią lub pod nią.",
    },
    {
      title: "Obsłuż pola wyboru, daty i wybory",
      body: "Zaznaczaj interaktywne pola wyboru bezpośrednio; w formularzach nieinteraktywnych umieść znacznik albo X. Dodaj daty tam, gdzie wymagane, dopasowując format pokazany w formularzu (dzień-miesiąc-rok albo miesiąc-dzień-rok).",
    },
    {
      title: "Podpisz, jeśli formularz tego wymaga",
      body: "Użyj narzędzia podpisu, żeby dodać wpisany lub odręczny podpis w miejscu na podpis. Ten sam krok działa niezależnie od tego, czy pole podpisu jest interaktywne, czy to tylko wydrukowana linia.",
    },
    {
      title: "Zapisz wypełnioną kopię i zachowaj oryginał",
      body: "Wyeksportuj gotową wersję jako nowy plik, opcjonalnie ją utrwalając, żeby odpowiedzi zostały zablokowane. Zachowaj pusty oryginał, żebyś mógł wypełnić świeżą kopię następnym razem.",
    },
  ],
  tips: [
    "Zawsze zachowuj pusty oryginał nietknięty – ponowne wypełnienie czystej kopii jest schludniejsze niż edycja poprzednich odpowiedzi.",
    "W formularzach nieinteraktywnych ustaw spójny rozmiar tekstu, żeby każda odpowiedź wyglądała jednolicie, a nie jak zbiór różnych czcionek.",
    "Sprawdź wymagane pola przed wysłaniem; formularz odesłany z powodu jednego brakującego pola marnuje więcej czasu niż ostatnia weryfikacja.",
    "Jeśli pole nie przyjmuje pisania, formularz może być nieinteraktywny albo zablokowany – przełącz się na umieszczanie tekstu na wierzchu albo zajrzyj do poradników rozwiązywania problemów.",
    "Utrwal formularz przed wysłaniem, jeśli chcesz, żeby odpowiedzi wyświetlały się tak samo u każdego odbiorcy.",
  ],
  mobileNote:
    "Aplikacja PDF Editor wypełnia zarówno formularze interaktywne, jak i nieinteraktywne na iPhonie i Androidzie: wykrywa prawdziwe pola tam, gdzie istnieją, i pozwala umieścić tekst i znaczniki w dowolnym miejscu, gdy ich nie ma. Podpisz w tej samej sesji i wyeksportuj wypełnioną kopię – wszystko na urządzeniu, bez wysyłania czegokolwiek.",
  faq: [
    {
      q: "Jak wypełnić formularz PDF, który nie ma pól?",
      a: "Użyj narzędzia tekstowego w edytorze PDF, żeby umieścić odpowiedzi bezpośrednio na stronie, dodaj znaczniki tam, gdzie trzeba, a potem wyeksportuj plik. Formularz jest nieinteraktywny, więc kładziesz tekst na wierzchu zamiast wpisywać go w pola.",
    },
    {
      q: "Czy mogę wypełnić formularz PDF za darmo?",
      a: "Tak. Darmowe narzędzia w przeglądarce i na telefonie wypełniają zarówno formularze interaktywne, jak i nieinteraktywne. Aplikacja PDF Editor obsługuje wypełnianie i podpisywanie bez konta.",
    },
    {
      q: "Czy muszę wydrukować formularz, żeby go wypełnić?",
      a: "Prawie nigdy. Oba typy formularzy da się uzupełnić na ekranie i odesłać cyfrowo. Drukuj tylko wtedy, gdy odbiorca konkretnie wymaga podpisanej ręcznie kopii papierowej.",
    },
    {
      q: "Dlaczego formularz nie pozwala mi pisać?",
      a: "Zwykle jest nieinteraktywny (bez pól), otwarty w czytniku, który nie obsługuje pól, albo zablokowany. Spróbuj umieścić tekst na wierzchu, przełącz się na narzędzie obsługujące formularze albo sprawdź poradniki rozwiązywania problemów.",
    },
    {
      q: "Jak upewnić się, że moje odpowiedzi się nie skasują?",
      a: "Zapisuj narzędziem, które zapisuje wartości pól w pliku, i utrwal formularz przed wysłaniem, żeby odpowiedzi trwale połączyły się ze stroną.",
    },
  ],
  related: [
    { label: "Czym jest formularz PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Jak wypełniać formularze PDF na iPhonie",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Jak wypełniać formularze PDF na Androidzie",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Jak zapisać wypełniony formularz PDF",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "Dobre praktyki formularzy PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Formularze PDF", path: "/pdf-forms" },
};

export default content;
