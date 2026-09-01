import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-so-large",
  h1: "Dlaczego mój PDF jest taki duży? Przyczyny i rozwiązania",
  description:
    "Prawdziwe powody, dla których PDF puchnie – skany, osadzone zdjęcia, czcionki i inne – oraz właściwe rozwiązanie dla każdego z nich, z darmowymi narzędziami w przeglądarce.",
  updated: "2026-05-23",
  intro: [
    "Dziesięciostronicowy dokument nie ma prawa ważyć 60 MB, a jednak pliki PDF puchną bez przerwy. Zanim sięgniesz po kompresor, warto zrozumieć, dlaczego plik urósł tak bardzo — bo właściwe rozwiązanie zależy od przyczyny, a złe może zniszczyć dokument, który wcale nie musiał być niszczony.",
    "Ten poradnik to krótka diagnoza. Przechodzi przez zwykłych winowajców rozdętego PDF-a, sposób rozpoznania, z którym masz do czynienia, i najskuteczniejszą reakcję na każdy z nich. Większość rozwiązań korzysta z darmowych narzędzi w przeglądarce na tej stronie, z których każde działa na Twoim urządzeniu bez przesyłania niczego.",
    "Na koniec będziesz wiedzieć, czy Twój plik potrzebuje kompresji, usunięcia stron, czy po prostu ponownego wyeksportowania ze źródła — i przestaniesz nawykowo nadmiernie kompresować dokumenty.",
  ],
  steps: [
    {
      title: "Najpierw podejrzewaj zeskanowane strony",
      body: "Skany to przyczyna numer jeden. Każda zeskanowana strona to obraz w pełnej rozdzielczości, więc kilka z nich przyćmiewa dokument tekstowy. Jeśli Twój PDF pochodzi ze skanera albo aparatu telefonu, to niemal na pewno powód.",
    },
    {
      title: "Sprawdź osadzone zdjęcia i grafiki",
      body: "Zdjęcia w wysokiej rozdzielczości, zrzuty ekranu i wykresy umieszczone w dokumencie niosą pełne dane pikselowe. Raport z kilkunastoma dużymi obrazami może być ogromny, nawet jeśli tekstu jest niewiele.",
    },
    {
      title: "Uwzględnij osadzone czcionki i zasoby projektowe",
      body: "Dokumenty osadzające kilka pełnych rodzin czcionek albo wyeksportowane z ciężkiego oprogramowania projektowego niosą dodatkową wagę w czcionkach i zasobach wektorowych, których treść wizualnie nie potrzebuje.",
    },
    {
      title: "Poszukaj pozostałej lub ukrytej treści",
      body: "Zduplikowane strony po niechlujnym scaleniu, puste wstawki ze skanera albo historia zmian mogą rozdymać plik. Usunięcie niepotrzebnych stron bywa najprostszym sposobem na zmniejszenie rozmiaru.",
    },
    {
      title: "Zastosuj pasujące rozwiązanie",
      body: "Przy skanach i zdjęciach skompresuj narzędziem Kompresuj PDF. Przy bałaganie usuń strony narzędziem Wyodrębnij strony PDF. Przy dokumencie tekstowym, który tajemniczo jest ogromny, wyeksportuj go ponownie z aplikacji źródłowej.",
    },
    {
      title: "Sprawdź rozmiar ponownie",
      body: "Potwierdź, że plik osiągnął pożądany rozmiar. Jeśli po skompresowaniu pliku pełnego skanów wciąż jest duży, kolejnym krokiem jest mocniejszy poziom albo podzielenie dokumentu.",
    },
  ],
  tips: [
    "Dopasuj rozwiązanie do przyczyny: kompresja pomaga plikom pełnym obrazów; prawie nic nie daje przy PDF-ie złożonym wyłącznie z tekstu, który jest duży z innego powodu.",
    "Dokument złożony wyłącznie z tekstu, który jest zaskakująco duży, zwykle ma osadzone czcionki albo ukryte obiekty — ponowny eksport z aplikacji źródłowej często zmniejsza go czyściej niż kompresja.",
    "Skanowanie w 600 DPI, gdy wystarczyłoby 200–300, to częsta, możliwa do uniknięcia przyczyna ogromnych plików. Obniż rozdzielczość skanowania u źródła dla dokumentów, które będziesz udostępniać.",
    "Usunięcie niepotrzebnych stron może zmniejszyć rozmiar bez dotykania jakości w ogóle — warto to sprawdzić przed kompresją.",
    "Nie kompresuj odruchowo. Jeśli plik ma już rozsądny rozmiar, kompresja tylko go degraduje bez realnej korzyści.",
  ],
  mobileNote:
    "Skany z telefonu to klasyczny winowajca — obrazy w wysokiej rozdzielczości zapisane jako PDF. Aplikacja PDF Editor pozwala skanować w rozsądnej rozdzielczości od samego początku i kompresować offline, więc dokumenty w ogóle nie puchną, a jeśli już, łatwo je zmniejszyć.",
  faq: [
    {
      q: "Co najczęściej powoduje, że PDF jest duży?",
      a: "Zeskanowane strony i osadzone zdjęcia. Każde z nich to obraz w pełnej rozdzielczości, więc kilka z nich waży wielokrotnie więcej niż długi dokument tekstowy.",
    },
    {
      q: "Dlaczego mój PDF złożony wyłącznie z tekstu wciąż jest duży?",
      a: "Prawdopodobnie osadzone czcionki, ukryte obiekty albo treść pozostała po edycjach i scalaniach. Ponowny eksport z aplikacji źródłowej albo usunięcie niepotrzebnych stron często pomaga bardziej niż kompresja.",
    },
    {
      q: "Czy kompresja zawsze zmniejszy mój plik?",
      a: "Nie. Kompresja celuje w dane obrazowe, więc pliki PDF pełne skanów i zdjęć mocno się zmniejszają, a te złożone wyłącznie z tekstu lub wektorów prawie się nie zmieniają. Jeśli plik tekstowy jest ogromny, przyczyna leży gdzie indziej.",
    },
    {
      q: "Czy usunięcie stron zmniejsza rozmiar?",
      a: "Tak, zwłaszcza jeśli usuwane strony to skany albo obrazy. Pozbycie się zbędnych elementów narzędziem Wyodrębnij strony PDF może zmniejszyć rozmiar bez wpływu na jakość tego, co zostaje.",
    },
    {
      q: "Jak sprawić, żeby skany nie były takie duże?",
      a: "Skanuj w 200–300 DPI zamiast 600 przy dokumentach, które będziesz udostępniać, a pliki od razu będą dużo mniejsze. Aplikacja PDF Editor pozwala z góry kontrolować jakość skanu.",
    },
  ],
  related: [
    {
      label: "Kompresuj PDF — zmniejsz pliki pełne obrazów",
      path: "/compress-pdf",
    },
    {
      label: "Wyodrębnij strony PDF — usuń zbędne elementy",
      path: "/extract-pdf-pages",
    },
    {
      label: "Jak skompresować zeskanowany PDF",
      path: "/guides/how-to-compress-scanned-pdf",
    },
    {
      label: "Najlepsze ustawienia kompresji PDF",
      path: "/guides/best-pdf-compression-settings",
    },
  ],
  parentHub: { label: "Kompresuj PDF", path: "/compress-pdf" },
};

export default content;
