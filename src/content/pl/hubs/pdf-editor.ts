import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-editor",
  hero: {
    eyebrow: "PDF Editor",
    h1: "Edytuj pliki PDF gdziekolwiek, na dowolnym telefonie.",
    highlight: "PDF",
    lead: "Poprawiaj tekst, zamieniaj obrazy, zmieniaj kolejność stron i podpisuj dokumenty — bezpośrednio na iPhonie lub Androidzie. PDF Editor zamienia telefon w prawdziwy edytor dokumentów, a nie tylko w przeglądarkę.",
    primaryCta: { label: "Otwórz aplikację", href: SITE.app.appStore },
  },
  problem: {
    heading: "Dlaczego edytowanie plików PDF zawsze sprawiało kłopoty",
    paragraphs: [
      "Pliki PDF zostały zaprojektowane tak, by wyglądać identycznie wszędzie — i właśnie to sprawia, że tak trudno je edytować. Większość aplikacji na telefonie pozwala tylko je przeglądać albo dodawać adnotacje. W chwili, gdy trzeba poprawić literówkę, zmienić nazwisko albo przenieść stronę, jesteś odsyłany z powrotem do komputera albo proszony o przesłanie pliku na przypadkową stronę internetową.",
      "Takie strony typu „prześlij i miej nadzieję\" to prawdziwy problem dla prywatności. Przechowują Twój plik godzinami, często działają wolno, a Ty nie masz pewności, co robią z wrażliwymi umowami, fakturami czy skanami dokumentów tożsamości. Efekt? Większość ludzi robi zrzut ekranu fragmentu do poprawienia, edytuje go jak zwykły obraz i wysyła mailem wersję, która wygląda gorzej niż oryginał.",
      "Natywny edytor mobilny rozwiązuje ten problem bez kompromisów. Zmiany zachodzą na urządzeniu. Oryginalny układ zostaje zachowany. Wynik możesz wysłać mailem minutę po rozpoczęciu pracy — bez przesyłania czegokolwiek na serwer obcej firmy.",
    ],
  },
  features: {
    heading: "Co naprawdę możesz zrobić",
    items: [
      {
        icon: "Type",
        title: "Edytuj tekst w miejscu",
        body: "Poprawiaj literówki, zmieniaj imiona i nazwiska, aktualizuj daty — bez naruszania układu strony. Działa w plikach PDF zawierających tekst.",
      },
      {
        icon: "ImagePlus",
        title: "Wstawiaj i zamieniaj obrazy",
        body: "Dodaj nowe logo lub zdjęcie. Zmieniaj rozmiar i pozycję, nie opuszczając strony.",
      },
      {
        icon: "Move",
        title: "Zmieniaj kolejność stron",
        body: "Przeciągaj miniatury, aby zmienić kolejność. Usuwaj strony, duplikuj je lub wstawiaj nową, pustą stronę.",
      },
      {
        icon: "Pencil",
        title: "Podpisy i inicjały",
        body: "Dodaj prawdziwy odręczny podpis albo podpis pisany. Umieść go w dowolnym miejscu jednym dotknięciem.",
      },
      {
        icon: "Highlighter",
        title: "Zaznaczenia i wyróżnienia",
        body: "Podkreślaj, wyróżniaj, przekreślaj. Dodawaj odręczne notatki lub komentarze.",
      },
      {
        icon: "FileText",
        title: "Wypełniaj formularze",
        body: "Dotknij pola, aby je wypełnić. Zapisz uzupełniony formularz jako nowy plik PDF.",
      },
    ],
  },
  steps: {
    heading: "Jak edytować plik PDF na telefonie",
    items: [
      {
        title: "Otwórz aplikację PDF Editor",
        body: "Uruchom aplikację z ekranu głównego. Na początek nie jest potrzebne konto.",
      },
      {
        title: "Wybierz plik PDF, który chcesz edytować",
        body: "Zaimportuj go z Plików, iCloud Drive, Google Drive lub z poczty e-mail. Możesz też po prostu dotknąć pliku PDF w dowolnym miejscu i wybrać PDF Editor jako aplikację do otwarcia.",
      },
      {
        title: "Dotknij fragmentu, który chcesz zmienić",
        body: "Dotknij akapitu, aby edytować tekst, obrazu, aby go zamienić, albo miniatury strony, aby zmienić kolejność.",
      },
      {
        title: "Wprowadź zmiany",
        body: "Zmiany widać na stronie w czasie rzeczywistym. Uszczypnij ekran, aby przybliżyć i pracować precyzyjnie. Cofanie i ponawianie działają tak, jak się tego spodziewasz.",
      },
      {
        title: "Zapisz wynik",
        body: "Zapisz zmiany w oryginale, jako nową kopię albo udostępnij bezpośrednio przez Mail, AirDrop lub dowolną aplikację do wiadomości.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Edytowanie w ruchu",
    body: "Większość poprawek w plikach PDF robi się w najgorszym możliwym momencie — pięć minut przed spotkaniem, w pociągu, między zajęciami. Edytor stworzony przede wszystkim z myślą o telefonie pozwala poprawić źle zapisane nazwisko w umowie w drodze do biura albo złożyć podpis na wycenie w przerwie na kawę. Bez laptopa, bez komputera stacjonarnego, bez czekania, aż wrócisz do domu.",
  },
  faq: [
    {
      q: "Czy aplikacja PDF Editor jest bezpłatna?",
      a: "Tak. Podstawowa edycja — tekst, obrazy, zmiana kolejności stron, podpisy i eksport — jest bezpłatna. Część zaawansowanych funkcji odblokowuje uaktualnienie do wersji Pro.",
    },
    {
      q: "Czy działa offline?",
      a: "Tak. Edycja odbywa się w całości na urządzeniu. Połączenie z internetem jest potrzebne tylko wtedy, gdy pobierasz pliki z chmury albo udostępniasz je przez usługi online.",
    },
    {
      q: "Czy mogę edytować zeskanowane pliki PDF?",
      a: "Zeskanowane pliki PDF są technicznie obrazami. Nadal możesz dodawać adnotacje, podpisywać je i zmieniać kolejność stron. Edycja samego tekstu wymaga najpierw OCR, który aplikacja potrafi uruchomić na większości dokumentów.",
    },
    {
      q: "Czy istnieją limity rozmiaru pliku?",
      a: "Nie ma sztucznego limitu. Bardzo duże pliki PDF (setki MB ze złożoną grafiką) mogą działać wolniej na starszych telefonach, ale aplikacja została zbudowana do obsługi realnych dokumentów.",
    },
    {
      q: "Czy moje zmiany zepsują oryginalny układ?",
      a: "Nie. Zmiany wprowadzane są w miejscu. Czcionki, marginesy i istniejące formatowanie pozostają nienaruszone w plikach PDF zawierających tekst.",
    },
    {
      q: "Czy mogę eksportować do Word?",
      a: "Tak. Edytowany plik PDF możesz przekonwertować do Word lub innych formatów w tej samej aplikacji.",
    },
  ],
  related: [
    {
      label: "Jak edytować plik PDF na iPhonie",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    {
      label: "Jak edytować plik PDF na Androidzie",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Podpisywanie PDF na telefonie", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Edytuj pliki PDF na telefonie w kilka sekund.",
    sub: "Bezpłatnie na iOS i Androidzie. Na start nie jest potrzebne konto.",
  },
};

export default content;
