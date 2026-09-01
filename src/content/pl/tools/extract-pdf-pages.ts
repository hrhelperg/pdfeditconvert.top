import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "extract-pdf-pages",
  hero: {
    eyebrow: "Wyodrębnij strony z PDF",
    h1: "Wyodrębnij strony z PDF — w przeglądarce.",
    highlight: "w przeglądarce",
    lead: "Dodaj PDF, wpisz strony lub zakresy, których potrzebujesz, i pobierz nowy PDF zawierający tylko te strony. Wszystko odbywa się na Twoim urządzeniu.",
  },
  privacyNote:
    "Twój plik jest przetwarzany lokalnie, w Twojej przeglądarce, i nie jest wysyłany na nasze serwery. Nic nie opuszcza Twojego urządzenia.",
  howTo: {
    heading: "Jak wyodrębnić strony z PDF",
    steps: [
      {
        title: "Dodaj swój PDF",
        body: "Przeciągnij i upuść PDF albo kliknij, aby go wybrać. Pokażemy Ci łączną liczbę stron.",
      },
      {
        title: "Wpisz strony",
        body: "Wpisz pojedyncze strony i zakresy, np. 1-3,5,8-10. Wybrana liczba aktualizuje się w miarę pisania.",
      },
      {
        title: "Wyodrębnij",
        body: "Kliknij Wyodrębnij strony. Nowy PDF zawierający tylko te strony jest budowany lokalnie.",
      },
      {
        title: "Pobierz",
        body: "Wyodrębniony PDF pobiera się automatycznie.",
      },
    ],
  },
  useCases: {
    heading: "Kiedy wyodrębnianie pomaga",
    items: [
      {
        title: "Udostępnij tylko to, co potrzebne",
        body: "Wyślij pojedynczy rozdział, sekcję albo podpisaną stronę zamiast całego dokumentu.",
      },
      {
        title: "Wyciągnij formularz lub paragon",
        body: "Weź jedną stronę wymaganą przez portal, nie ujawniając reszty.",
      },
      {
        title: "Wydziel rozdział",
        body: "Utwórz skoncentrowany PDF z długiego raportu lub książki do nauki albo przeglądu.",
      },
      {
        title: "Zbuduj niestandardowy pakiet",
        body: "Zmień kolejność wybranych stron, wpisując je w takiej kolejności, w jakiej ich potrzebujesz.",
      },
    ],
  },
  limitations: {
    heading: "Uczciwe ograniczenia",
    items: [
      {
        title: "PDF-y zabezpieczone hasłem",
        body: "Zaszyfrowanych plików nie można otworzyć w przeglądarce. Najpierw je odblokuj albo użyj aplikacji PDF Editor.",
      },
      {
        title: "Strony poza zakresem",
        body: "Numery stron powyżej długości dokumentu są ignorowane; jeśli nic prawidłowego nie zostanie wybrane, zobaczysz jasny komunikat o błędzie.",
      },
      {
        title: "Bardzo duże PDF-y",
        body: "Przeglądarce znacznie szybciej kończy się pamięć niż aplikacji natywnej. Dla ogromnych plików użyj aplikacji PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Podziel PDF", path: "/split-pdf" },
    { label: "Zmień kolejność stron PDF", path: "/reorder-pdf-pages" },
    { label: "Skompresuj PDF", path: "/compress-pdf" },
    { label: "Połącz pliki PDF", path: "/merge-pdf" },
  ],
  faq: [
    {
      q: "Czy moje pliki są wysyłane na serwer?",
      a: "Nie. Wyodrębnianie odbywa się w całości w Twojej przeglądarce. Twój plik nigdy nie opuszcza Twojego urządzenia.",
    },
    {
      q: "Jakie formaty stron mogę wpisać?",
      a: "Pojedyncze strony i zakresy oddzielone przecinkami: 1-3, 2,4,6 albo 1-2,5,8-10. Spacje są dozwolone.",
    },
    {
      q: "Co się stanie przy nieprawidłowym zakresie?",
      a: "Nieprawidłowe wartości są odrzucane z jasnym komunikatem; numery spoza zakresu są ignorowane. Jeśli nic prawidłowego nie zostanie, dowiesz się dlaczego.",
    },
    {
      q: "Czy mogę powtarzać lub zmieniać kolejność stron?",
      a: "Tak. Wypisz strony w takiej kolejności, w jakiej ich chcesz; powtórzenie strony powoduje, że pojawi się więcej niż raz.",
    },
    {
      q: "Czy wyodrębnianie zmienia jakość?",
      a: "Nie. Wybrane strony są kopiowane dokładnie takie, jakie są — tekst pozostaje zaznaczalny, a nic nie jest ponownie kompresowane.",
    },
  ],
  appCta: {
    heading: "Potrzebujesz narzędzi PDF w podróży?",
    sub: "PDF Editor na iPhone i Android wyodrębnia, dzieli i podpisuje pliki PDF prosto z telefonu.",
  },
};

export default content;
