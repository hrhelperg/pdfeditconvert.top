import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-rotate-pdf-pages",
  h1: "Jak obrócić strony w PDF (za darmo, bez przesyłania)",
  description:
    "Obróć wszystkie lub wybrane strony PDF o 90, 180 lub 270 stopni prosto w przeglądarce. Napraw poziome skany i strony do góry nogami, żeby dokument dało się normalnie czytać.",
  updated: "2026-05-23",
  intro: [
    "PDF, który otwiera się bokiem, to mała, ale uporczywa uciążliwość. Przechylasz głowę albo ciągle obracasz telefon, a strona obraca się razem z nim. Rozwiązaniem jest obrócenie samej strony, żeby była zapisana w pionie — wtedy czyta się ją poprawnie u każdego, na każdym urządzeniu, bez wykręcania szyi.",
    "Ten poradnik korzysta z darmowego narzędzia Obróć PDF, które obraca wszystkie lub wybrane strony o 90, 180 lub 270 stopni bezpośrednio w przeglądarce, bez przesyłania niczego na serwer. To właściwa naprawa zarówno wtedy, gdy błędna jest jedna strona, jak i wtedy, gdy cały dokument wyszedł ze skanera w poziomie.",
    "Obrót to trwała zmiana sposobu zapisu strony, więc pokażemy, jak zastosować go tylko do stron, które tego potrzebują, i jak potwierdzić wynik przed zapisem.",
  ],
  steps: [
    {
      title: "Otwórz narzędzie Obróć PDF",
      body: "Przejdź do narzędzia Obróć PDF w przeglądarce. Działa na Twoim urządzeniu — bez przesyłania, bez konta.",
    },
    {
      title: "Dodaj swój plik PDF",
      body: "Przeciągnij plik na pole docelowe albo kliknij, żeby go wybrać. Narzędzie pokazuje strony, dzięki czemu widzisz, które są źle ustawione.",
    },
    {
      title: "Zdecyduj, które strony obrócić",
      body: "Obróć wszystkie strony albo tylko te źle ustawione — na przykład pojedynczą poziomą tabelę w skądinąd pionowym raporcie. Zanotuj, które strony i w którą stronę.",
    },
    {
      title: "Wybierz kąt obrotu",
      body: "Wybierz 90° dla strony leżącej na boku, 180° dla strony do góry nogami albo 270° dla strony obróconej w drugą stronę. Zastosuj do wybranych stron.",
    },
    {
      title: "Sprawdź, czy każda strona stoi prosto",
      body: "Potwierdź, że poprawione strony czytają się teraz normalnie i że przypadkiem nie obróciłeś tych, które już były w porządku.",
    },
    {
      title: "Pobierz poprawiony PDF",
      body: "Wyeksportuj obrócony plik i zapisz go pod jasną nazwą. Oryginał pozostaje nietknięty, gdybyś musiał zacząć od nowa.",
    },
  ],
  tips: [
    "Obracaj tylko te strony, które są źle ustawione. Zastosowanie obrotu do całego dokumentu, w którym większość stron jest w porządku, tylko tworzy nowe problemy.",
    "Strony poziome — szerokie tabele, wykresy, arkusze kalkulacyjne wyeksportowane do PDF — często celowo mają taką orientację. Obracaj tylko wtedy, gdy treść jest faktycznie bokiem, a nie wtedy, gdy poprawnie jest szeroka.",
    "Jeśli strony są jednocześnie w złej kolejności i obrócone, najpierw popraw obrót, a potem kolejność — łatwiej ocenić sekwencję, gdy każda strona stoi prosto.",
    "Obrócenie stron przed scaleniem sprawia, że połączony dokument jest poprawny od początku, bez niespodzianek w postaci stron bokiem ukrytych w środku.",
    "Zachowaj oryginał. Jeśli obrócisz w złą stronę, szybciej zacząć od nowa z nietkniętego pliku, niż obracać w tę i z powrotem.",
  ],
  mobileNote:
    "Skany bokiem najczęściej zdarzają się na telefonie i tam też najszybciej się je naprawia. Aplikacja PDF Editor obraca strony jednym dotknięciem i działa offline, więc możesz wyprostować świeżo zeskanowany dokument, zanim jeszcze opuści urządzenie.",
  faq: [
    {
      q: "Czy mogę obrócić tylko jedną stronę?",
      a: "Tak. Zaznacz tylko te strony, które są źle ustawione, i obróć je, zostawiając resztę dokumentu bez zmian.",
    },
    {
      q: "Jaki obrót powinienem wybrać?",
      a: "90° dla strony leżącej na boku, 180° dla strony do góry nogami i 270° dla strony obróconej w przeciwną stronę. Wybierz kąt, który ustawi treść prosto.",
    },
    {
      q: "Czy obrót jest trwały?",
      a: "Zostaje zapisany w wyeksportowanym pliku, dzięki czemu strona czyta się prosto wszędzie. Twój oryginał pozostaje nietknięty, więc w razie potrzeby zawsze możesz powtórzyć operację.",
    },
    {
      q: "Czy mój PDF jest przesyłany?",
      a: "Nie. Obrót odbywa się w przeglądarce, na Twoim urządzeniu, więc plik go nie opuszcza.",
    },
    {
      q: "Mój skan jest bokiem i w złej kolejności — co najpierw?",
      a: "Najpierw obróć strony do pionu, a potem użyj narzędzia Zmień kolejność stron PDF, żeby naprawić kolejność. Ocena kolejności jest łatwiejsza, gdy wszystko stoi już prosto.",
    },
  ],
  related: [
    {
      label: "Obróć PDF — popraw orientację w przeglądarce",
      path: "/rotate-pdf",
    },
    {
      label: "Zmień kolejność stron PDF — napraw kolejność",
      path: "/reorder-pdf-pages",
    },
    {
      label: "Jak naprawić przekrzywione lub odwrócone strony PDF",
      path: "/guides/how-to-fix-sideways-pdf-pages",
    },
    {
      label: "Jak zmienić kolejność stron w PDF",
      path: "/guides/how-to-reorder-pdf-pages",
    },
  ],
  parentHub: { label: "Obróć PDF", path: "/rotate-pdf" },
};

export default content;
