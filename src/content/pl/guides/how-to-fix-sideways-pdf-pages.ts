import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-sideways-pdf-pages",
  h1: "Jak naprawić przekrzywione lub odwrócone strony PDF",
  description:
    "Na stałe wyprostuj strony PDF, które otwierają się bokiem lub do góry nogami, prosto w przeglądarce. Dlaczego obracanie ekranu nie pomaga i co naprawdę rozwiązuje ten problem.",
  updated: "2026-05-23",
  intro: [
    "Otwierasz PDF-a i jedna strona leży na boku. Obracasz ją w przeglądarce, wygląda dobrze — a potem wysyłasz plik i odbiorca znów widzi ją bokiem. Na tym polega pułapka: obrót w przeglądarce zwykle zmienia tylko to, jak Ty to widzisz, a nie sposób, w jaki strona jest zapisana. Żeby naprawić to dla wszystkich, musisz obrócić samą stronę i zapisać zmianę.",
    "Ten poradnik robi dokładnie to za pomocą darmowego narzędzia Obróć PDF, które obraca strony o 90, 180 lub 270 stopni i zapisuje poprawkę na stałe w nowym pliku, wszystko w przeglądarce, bez przesyłania niczego na serwer. Bez względu na to, czy błędna jest jedna strona, czy cały skan wyszedł w poziomie, to trwałe rozwiązanie.",
    "Wyjaśnimy też, dlaczego strony w ogóle wychodzą bokiem, żebyś mógł zapobiec temu u źródła — zwykle winny jest skaner albo źle trzymany telefon.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie Obróć PDF",
      body: "Przejdź do narzędzia Obróć PDF w przeglądarce. Zapisuje obrót bezpośrednio w pliku, więc poprawka utrzymuje się u każdego odbiorcy — bez przesyłania, bez konta.",
    },
    {
      title: "Dodaj plik PDF",
      body: "Przeciągnij plik na pole docelowe albo kliknij, żeby go wybrać. Narzędzie pokazuje strony, dzięki czemu widzisz, które są bokiem albo do góry nogami.",
    },
    {
      title: "Znajdź dotknięte strony",
      body: "Zanotuj, które strony są błędne i o ile są przesunięte — ćwierć obrotu, pół obrotu. W długim skanie to może być każda strona; w raporcie może to być tylko jedna szeroka tabela.",
    },
    {
      title: "Obróć do pionu",
      body: "Zastosuj 90° do strony leżącej na boku, 180° do strony do góry nogami albo 270° do strony obróconej w drugą stronę, aż treść będzie czytać się normalnie.",
    },
    {
      title: "Sprawdź, a potem pobierz",
      body: "Potwierdź, że każda poprawiona strona stoi prosto i że nie naruszyłeś stron, które już były w porządku, a potem wyeksportuj poprawiony PDF.",
    },
    {
      title: "Napraw to u źródła następnym razem",
      body: "Strony bokiem zwykle biorą się ze skanera podającego strony w poziomie albo z telefonu trzymanego w złej pozycji. Dostosowanie orientacji skanowania albo sposobu trzymania telefonu zapobiega powtórzeniu się problemu.",
    },
  ],
  tips: [
    "Obrót w przeglądarce PDF często zmienia tylko Twój widok, a nie zapisany plik — dlatego odbiorca znów widzi stronę bokiem. Naprawia to dopiero zapisanie obróconej kopii.",
    "Obracaj tylko strony, które są rzeczywiście błędne. Prawidłowo szeroka tabela w poziomie (arkusz kalkulacyjny, wykres) ma taką orientację celowo; obrócenie jej tylko pogarsza sprawę.",
    "Jeśli cały skan jest w poziomie, pojedynczy obrót o 90° zastosowany do wszystkich stron zwykle naprawia sprawę za jednym razem.",
    "Popraw obrót, zanim zmienisz kolejność albo scalisz pliki — dużo łatwiej ocenić sekwencję i łączyć dokumenty, gdy każda strona stoi prosto.",
    "Zachowaj oryginał. Łatwo przesadzić z obracaniem; szybciej zacząć od nietkniętego pliku, niż obracać w tę i z powrotem.",
  ],
  mobileNote:
    "Strony bokiem niemal zawsze biorą początek na telefonie, i to tam najszybciej się je naprawia. Aplikacja PDF Editor obraca strony jednym dotknięciem i zapisuje poprawkę w pliku, offline — więc świeżo zeskanowany dokument stoi prosto, zanim jeszcze opuści Twoje ręce.",
  faq: [
    {
      q: "Dlaczego u mnie strona wygląda na naprawioną, a u innych jest bokiem?",
      a: "Obrót w przeglądarce zwykle zmienia tylko Twój widok na ekranie, a nie sposób zapisu strony. Żeby naprawić to dla wszystkich, obróć stronę i zapisz nowy plik — właśnie to robi narzędzie Obróć PDF.",
    },
    {
      q: "O ile powinienem obrócić?",
      a: "90° dla strony na boku, 180° dla strony do góry nogami, 270° dla strony obróconej w przeciwną stronę. Wybierz kąt, który ustawi treść prosto.",
    },
    {
      q: "Czy poprawienie obrotu obniży jakość?",
      a: "Nie. Obrót zmienia tylko orientację; treść strony i rozdzielczość pozostają bez zmian.",
    },
    {
      q: "Czy mój plik jest przesyłany?",
      a: "Nie. Obrót odbywa się w przeglądarce, na Twoim urządzeniu, więc plik pozostaje prywatny.",
    },
    {
      q: "Jak sprawić, żeby strony nie skanowały się bokiem?",
      a: "Ustaw skaner tak, żeby wykrywał albo dopasowywał orientację strony, albo trzymaj telefon tak, żeby strona wypełniała kadr w pionie. Naprawienie tego przy uchwyceniu oszczędza późniejszy krok obracania.",
    },
  ],
  related: [
    {
      label: "Obróć PDF — prostuj strony w przeglądarce",
      path: "/rotate-pdf",
    },
    {
      label: "Jak obrócić strony w PDF",
      path: "/guides/how-to-rotate-pdf-pages",
    },
    {
      label: "Jak skanować dokumenty do PDF telefonem",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    {
      label: "Jak zmienić kolejność stron w PDF",
      path: "/guides/how-to-reorder-pdf-pages",
    },
  ],
  parentHub: { label: "Obróć PDF", path: "/rotate-pdf" },
};

export default content;
