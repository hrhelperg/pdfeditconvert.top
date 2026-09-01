import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "Kompresuj PDF",
    h1: "Zmniejsz rozmiar PDF — w przeglądarce.",
    highlight: "w przeglądarce",
    lead: "Zmniejsz rozmiar pliku PDF, aby zmieścił się w limitach załączników e-mail i formularzy. Wybierz poziom kompresji, zobacz dokładnie, ile zaoszczędziłeś, i pobierz plik — Twój plik nigdy nie opuszcza Twojego urządzenia.",
  },
  privacyNote:
    "Twój plik jest przetwarzany lokalnie, w Twojej przeglądarce, i nie jest wysyłany na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak skompresować PDF",
    steps: [
      {
        title: "Dodaj swój PDF",
        body: "Przeciągnij i upuść plik PDF na stronę albo kliknij, aby wybrać go ze swojego urządzenia.",
      },
      {
        title: "Wybierz poziom",
        body: "Niski zachowuje najwięcej szczegółów; Zalecany równoważy rozmiar i jakość; Mocny daje najmniejszy plik.",
      },
      {
        title: "Skompresuj",
        body: "Kliknij Skompresuj PDF. Strony są renderowane i kodowane ponownie lokalnie, w Twojej przeglądarce.",
      },
      {
        title: "Pobierz",
        body: "Porównaj rozmiar przed i po oraz procent redukcji, a następnie pobierz lżejszy plik.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy kompresja pomaga najbardziej",
    items: [
      {
        title: "Limity rozmiaru wiadomości e-mail",
        body: "Zmieść zeskanowaną umowę lub broszurę w limicie załącznika 10 MB lub 25 MB.",
      },
      {
        title: "Formularze i portale do przesyłania plików",
        body: "Portale urzędowe i kadrowe często odrzucają pliki powyżej kilku megabajtów — to rozwiązuje ten problem.",
      },
      {
        title: "Zeskanowane dokumenty",
        body: "Skany z telefonu są ogromne. PDF-y pełne obrazów drastycznie się zmniejszają przy mocnej kompresji.",
      },
      {
        title: "Przechowywanie i udostępnianie",
        body: "Utrzymuj lekkie archiwa i spraw, by linki pobierały się szybciej u odbiorcy.",
      },
    ],
  },
  limitations: {
    heading: "Uczciwe ograniczenia",
    items: [
      {
        title: "Tekst staje się obrazem",
        body: "Kompresja renderuje każdą stronę na nowo jako obraz, więc w wyniku tekst nie jest już zaznaczalny ani przeszukiwalny. Zachowaj oryginał, jeśli potrzebujesz tej funkcji.",
      },
      {
        title: "PDF-y z samym tekstem prawie się nie zmniejszają",
        body: "Jeśli PDF składa się głównie z tekstu lub grafiki wektorowej, niewiele da się skompresować — w takim przypadku zachowujemy Twój oryginalny plik zamiast zwracać większy.",
      },
      {
        title: "Bardzo duże lub zablokowane PDF-y",
        body: "Przeglądarce znacznie szybciej kończy się pamięć niż aplikacji natywnej. Pliki PDF zabezpieczone hasłem nie mogą być przetwarzane w przeglądarce — użyj aplikacji PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Połącz PDF", path: "/merge-pdf" },
    { label: "Podziel PDF", path: "/split-pdf" },
    { label: "Wyodrębnij strony z PDF", path: "/extract-pdf-pages" },
    { label: "Wszystkie darmowe narzędzia PDF", path: "/pdf-tools" },
    { label: "Poradnik: jak skompresować PDF", path: "/guides/how-to-compress-pdf" },
  ],
  faq: [
    {
      q: "Czy mój plik jest wysyłany na serwer?",
      a: "Nie. Kompresja działa w całości w Twojej przeglądarce, wykorzystując procesor Twojego urządzenia. Twój plik nigdy nie opuszcza Twojego urządzenia.",
    },
    {
      q: "O ile zmniejszy się mój PDF?",
      a: "Zależy od zawartości. Zeskanowane PDF-y pełne obrazów często zmniejszają się o 50–90%. PDF-y z samym tekstem mogą się w ogóle nie zmniejszyć — w takim przypadku zachowujemy Twój oryginał.",
    },
    {
      q: "Czy jakość się pogorszy?",
      a: "Tak, nieco — to kompresja stratna. Niższe poziomy zachowują więcej szczegółów. Nigdy nie obiecujemy „braku utraty jakości” — wybierz poziom, który wygląda dla Ciebie akceptowalnie.",
    },
    {
      q: "Dlaczego tekst nie jest już zaznaczalny po kompresji?",
      a: "Aby uzyskać realną oszczędność miejsca w przeglądarce, każda strona jest zamieniana na obraz. Jeśli potrzebujesz zaznaczalnego tekstu, zachowaj oryginał lub użyj lżejszego poziomu.",
    },
    {
      q: "Czy mogę skompresować PDF zabezpieczony hasłem?",
      a: "Nie w przeglądarce. Najpierw usuń hasło albo użyj aplikacji PDF Editor, która obsługuje pliki zabezpieczone.",
    },
  ],
  appCta: {
    heading: "Potrzebujesz narzędzi PDF w podróży?",
    sub: "PDF Editor na iPhone i Android kompresuje, podpisuje i udostępnia Twoje pliki PDF prosto z telefonu.",
  },
};

export default content;
