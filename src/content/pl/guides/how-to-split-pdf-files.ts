import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-split-pdf-files",
  h1: "Jak podzielić PDF na osobne pliki (za darmo)",
  description:
    "Podziel duży plik PDF na mniejsze pliki według zakresu stron, prosto w przeglądarce. Kiedy dzielić, a kiedy wyodrębniać, i jak zachować bezpieczeństwo oryginałów.",
  updated: "2026-05-23",
  intro: [
    "Dzielenie PDF-a robisz wtedy, gdy jeden plik próbuje być kilkoma dokumentami naraz: zeskanowana paczka, która w rzeczywistości jest umową z załącznikami, 200-stronicowy raport, z którego potrzebujesz tylko jednego rozdziału, albo scalona partia, która musi wrócić do obiegu jako osobne pliki. Zamiast wysyłać całość i prosić ludzi, żeby znaleźli swoją część, dzielisz go.",
    "Ten poradnik korzysta z darmowego narzędzia Podziel PDF, które dzieli PDF według zakresu stron bezpośrednio w przeglądarce — nic nie jest przesyłane na serwer. To szybki, prywatny sposób na zamianę jednego pliku w mniejsze części, których faktycznie potrzebujesz wysłać albo przechować.",
    "Wyjaśnimy też częste źródło zamieszania: różnicę między dzieleniem PDF-a a wyodrębnianiem stron, bo właściwe narzędzie zależy od tego, co chcesz w efekcie uzyskać.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie Podziel PDF",
      body: "Przejdź do narzędzia Podziel PDF w przeglądarce. Działa na Twoim urządzeniu — bez przesyłania, bez konta.",
    },
    {
      title: "Dodaj swój plik PDF",
      body: "Przeciągnij plik na pole docelowe albo kliknij, żeby go wybrać. Narzędzie odczytuje liczbę stron, dzięki czemu możesz podzielić go według zakresu.",
    },
    {
      title: "Zdecyduj, gdzie dokument się dzieli",
      body: "Spójrz na numery stron i wyznacz granice — na przykład strony 1–10 to umowa, a 11–24 to załącznik. Zaplanuj zakresy przed podziałem.",
    },
    {
      title: "Wpisz zakres stron do wydzielenia",
      body: "Podaj zakres, który ma stać się osobnym plikiem. Powtórz dla każdej sekcji, którą musisz oddzielić.",
    },
    {
      title: "Pobierz każdą część",
      body: "Narzędzie tworzy nowy plik PDF dla wybranego zakresu. Zapisz każdy pod jasną nazwą odpowiadającą danej sekcji.",
    },
    {
      title: "Zachowaj oryginał w nienaruszonym stanie",
      body: "Dzielenie nie modyfikuje źródła — Twój oryginalny PDF pozostaje w całości na urządzeniu. Zachowaj go, dopóki nie potwierdzisz, że każdy podział wyszedł dobrze.",
    },
  ],
  tips: [
    "Dziel, gdy chcesz uzyskać kilka osobnych dokumentów; wyodrębniaj, gdy chcesz wyciągnąć kilka stron do jednego nowego pliku. Brzmią podobnie, ale dają różne wyniki.",
    "Zanotuj granice stron, zanim zaczniesz. Dzielenie długiego raportu idzie dużo szybciej, gdy już wiesz, że metodologia zaczyna się na stronie 31.",
    "Nadawaj podzielonym plikom nazwy odpowiadające treści, a nie zakresowi — „Zalacznik-B.pdf” jest bardziej użyteczne dla odbiorcy niż „strony-25-40.pdf”.",
    "Wcześniejsze podzielenie ogromnego PDF-a przyspiesza też inne operacje: skompresowanie albo skonwertowanie 15-stronicowej sekcji jest łatwiejsze niż zmaganie się z całym 300-stronicowym plikiem.",
    "Plików PDF zabezpieczonych hasłem nie da się przetworzyć w przeglądarce. Najpierw usuń hasło albo użyj aplikacji PDF Editor, która obsługuje zabezpieczone pliki.",
  ],
  mobileNote:
    "Na telefonie dzielenie często służy wysłaniu właściwego fragmentu właściwej osobie, gdziekolwiek jesteś. Aplikacja PDF Editor dzieli, wyodrębnia i udostępnia w kilka dotknięć i działa offline — przydatne, gdy jesteś na miejscu i musisz odesłać tylko podpisane strony.",
  faq: [
    {
      q: "Jaka jest różnica między dzieleniem a wyodrębnianiem?",
      a: "Dzielenie rozbija jeden PDF na kilka osobnych plików według zakresu. Wyodrębnianie wyciąga wybrane strony do jednego nowego pliku. Użyj dzielenia, żeby podzielić dokument, a wyodrębniania, żeby zebrać konkretne strony.",
    },
    {
      q: "Czy dzielenie zmienia mój oryginalny plik?",
      a: "Nie. Plik źródłowy PDF pozostaje nietknięty — narzędzie tworzy nowe pliki dla wybranych zakresów. Zachowaj oryginał, dopóki nie sprawdzisz wyników.",
    },
    {
      q: "Czy mój PDF jest przesyłany?",
      a: "Nie. Dzielenie odbywa się w przeglądarce, na Twoim urządzeniu, więc plik go nie opuszcza — bezpiecznie przy umowach i poufnych raportach.",
    },
    {
      q: "Na ile części mogę podzielić PDF?",
      a: "Na tyle, ile potrzebujesz — powtórz wybór zakresu dla każdej sekcji. Bardzo duże pliki PDF mogą obciążyć pamięć przeglądarki — w takim przypadku lepszym wyborem jest aplikacja PDF Editor.",
    },
    {
      q: "Czy mogę podzielić PDF zabezpieczony hasłem?",
      a: "Nie w przeglądarce. Najpierw usuń hasło albo użyj mobilnej aplikacji PDF Editor, która potrafi otwierać zabezpieczone pliki.",
    },
  ],
  related: [
    { label: "Podziel PDF — dziel plik w przeglądarce", path: "/split-pdf" },
    {
      label: "Wyodrębnij strony PDF — wyciągnij strony do nowego pliku",
      path: "/extract-pdf-pages",
    },
    {
      label: "Jak wyodrębnić strony z PDF",
      path: "/guides/how-to-extract-pages-from-pdf",
    },
    {
      label: "Jak połączyć pliki PDF",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "Podziel PDF", path: "/split-pdf" },
};

export default content;
