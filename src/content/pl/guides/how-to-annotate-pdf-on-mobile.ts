import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-annotate-pdf-on-mobile",
  h1: "Jak dodawać adnotacje do PDF na telefonie",
  description:
    "Zakreślaj, komentuj i rysuj na plikach PDF z telefonu lub tabletu. Narzędzia do adnotacji, na których naprawdę zależy, i jak zachować czytelność swoich notatek.",
  updated: "2026-05-23",
  intro: [
    "Adnotowanie PDF-a to sposób, w jaki zamieniasz dokument z czegoś, co czytasz, w coś, na co reagujesz – zakreślasz istotny zapis, zostawiasz komentarz dla współpracownika, obwodzisz błędną liczbę. Na telefonie lub tablecie, palcem albo rysikiem, często wychodzi to naturalniej niż przy biurku, bo zaznaczasz stronę tak, jak zrobiłbyś to na papierze.",
    "Ten poradnik pokazuje narzędzia do adnotacji warte poznania na telefonie za pomocą aplikacji PDF Editor: zakreślenia, komentarze, rysowanie odręczne i kształty. Działa na iPhonie i Androidzie, pracuje offline i trzyma dokument na Twoim urządzeniu.",
    "Celem nie jest pokrycie strony atramentem – to zostawienie notatek, które kolejna osoba (często Ty sam w przyszłości) rzeczywiście przeczyta i wykorzysta.",
  ],
  steps: [
    {
      title: "Otwórz PDF w aplikacji PDF Editor",
      body: "Zaimportuj dokument z Plików, Mail, Drive lub dowolnego menu udostępniania. Narzędzia do adnotacji znajdują się na pasku edycji.",
    },
    {
      title: "Zakreśl kluczowe fragmenty",
      body: "Wybierz zakreślacz, dobierz kolor i przeciągnij po tekście, który chcesz oznaczyć. Używaj kolorów świadomie – jeden kolor na jeden typ notatki czyta się dużo lepiej niż tęcza.",
    },
    {
      title: "Dodaj komentarze dla kontekstu",
      body: "Umieść komentarz-karteczkę tam, gdzie zakreślenie wymaga wyjaśnienia. Komentarze trzymają Twoje uzasadnienie przy odpowiednim miejscu, nie zaśmiecając samej strony.",
    },
    {
      title: "Rysuj i zakreślaj odręcznie",
      body: "Użyj narzędzia pióra, żeby obwieść liczbę, podkreślić linię albo naszkicować poprawkę. Rysik daje czystszą kreskę niż palec, jeśli go masz.",
    },
    {
      title: "Dodaj kształty lub strzałki tam, gdzie pomagają",
      body: "Strzałka wskazująca problem albo ramka wokół sekcji komunikuje szybciej niż słowa. Używaj ich oszczędnie, żeby faktycznie się wyróżniały.",
    },
    {
      title: "Zapisz i udostępnij opatrzoną notatkami kopię",
      body: "Wyeksportuj kopię z Twoimi adnotacjami i odeślij ją. Zachowaj czysty oryginał, jeśli w przyszłości będzie Ci potrzebna wersja bez oznaczeń.",
    },
  ],
  tips: [
    "Przypisz kolorom znaczenie – na przykład żółty do pytań, zielony do akceptacji – a Twoje oznaczenia staną się łatwe do przejrzenia, nie tylko ozdobne.",
    "Rysik (Apple Pencil lub S Pen) zmienia jakość odręcznych adnotacji. Jeśli go masz, odrzucanie dotyku dłoni i czułość na nacisk sprawiają, że przypomina to zaznaczanie na papierze.",
    "Komentarze biją upychanie notatek na marginesie. Rozwijają się po dotknięciu i pozostawiają stronę czytelną.",
    "Nie przesadzaj z adnotacjami. Strona zasypana atramentem jest tak samo bezużyteczna jak strona bez żadnych oznaczeń – zaznaczaj to, co ważne, nie wszystko.",
    "Zachowaj oryginał bez oznaczeń. Adnotacje są świetne do przeglądu, ale kolejna osoba weryfikująca może chcieć czystej kopii, żeby oznaczyć ją po swojemu.",
  ],
  mobileNote:
    "Adnotowanie to miejsce, w którym telefon lub tablet naprawdę biją biurko: oznaczasz stronę bezpośrednio, tak jak zrobiłbyś to na papierze. Aplikacja PDF Editor obsługuje zakreślenia, komentarze, rysowanie i kształty z obsługą rysika, wszystko offline i na urządzeniu – Twoje notatki nigdy nie opuszczają Twoich rąk.",
  faq: [
    {
      q: "Czym mogę adnotować PDF na telefonie?",
      a: "Zakreśleniami, komentarzami-karteczkami, odręcznymi kreskami piórem oraz kształtami, takimi jak strzałki i ramki. Aplikacja PDF Editor oferuje to wszystko na iPhonie i Androidzie.",
    },
    {
      q: "Czy potrzebuję rysika?",
      a: "Nie, palec wystarcza do zakreślania i podstawowych oznaczeń. Ale rysik czyni rysowanie odręczne znacznie czystszym, z odrzucaniem dotyku dłoni i czułością na nacisk na obsługiwanych tabletach.",
    },
    {
      q: "Czy moje adnotacje zostaną, jeśli wyślę plik?",
      a: "Tak. Wyeksportowane adnotacje są częścią PDF-a i pojawiają się u każdego, kto go otworzy. Zachowaj osobno czysty oryginał, jeśli potrzebna Ci będzie kopia bez oznaczeń.",
    },
    {
      q: "Czy moje adnotacje są gdzieś przesyłane?",
      a: "Nie. Aplikacja PDF Editor adnotuje na Twoim urządzeniu, więc Twoje notatki i dokument pozostają prywatne.",
    },
    {
      q: "Czy mogę później usunąć adnotacje?",
      a: "Tak, w aplikacji możesz edytować lub usuwać własne adnotacje przed eksportem. Zachowanie oryginału pozwala też zacząć od nowa.",
    },
  ],
  related: [
    { label: "Edytor PDF — adnotuj na telefonie", path: "/pdf-editor" },
    { label: "Jak wypełniać formularze PDF na telefonie", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Jak edytować PDF na iPhonie", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Najlepsze darmowe narzędzia PDF dla studentów", path: "/guides/best-pdf-tools-for-students" },
  ],
  parentHub: { label: "Edytor PDF", path: "/pdf-editor" },
};

export default content;
