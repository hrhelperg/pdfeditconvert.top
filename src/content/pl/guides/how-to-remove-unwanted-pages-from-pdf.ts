import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-remove-unwanted-pages-from-pdf",
  h1: "Jak usunąć niepotrzebne strony z PDF",
  description:
    "Pozbądź się pustych stron, stron tytułowych czy zbędnych sekcji z PDF prosto w przeglądarce, zachowując tylko te strony, które są potrzebne. Czyste pliki, prywatny proces.",
  updated: "2026-05-23",
  intro: [
    "Wiele plików PDF przychodzi ze stronami, których nie chcesz: strona tytułowa faksu, pusta strona dorzucona przez skaner, załącznik z regulaminem, o który nikt nie prosił, albo zduplikowane strony po niechlujnym scaleniu. Wysłanie dokumentu z takim bałaganem wygląda niedbale, a czasem ujawnia informacje, którymi wolałbyś się nie dzielić.",
    "Najczystszy sposób na usunięcie stron w przeglądarce to zachowanie tych, których chcesz. Ten poradnik korzysta z darmowego narzędzia Wyodrębnij strony PDF: zamiast usuwać niepotrzebne strony jedna po drugiej, podajesz strony, które chcesz zachować, a wszystko inne po prostu nie trafia do nowego pliku. Działa w całości na Twoim urządzeniu — nic nie jest przesyłane na serwer.",
    "Wynikiem jest uporządkowany PDF zawierający tylko te strony, które powinny się w nim znaleźć, a Twój oryginał pozostaje nietknięty na wypadek, gdybyś pomylił numer strony.",
  ],
  steps: [
    {
      title: "Określ strony do usunięcia",
      body: "Otwórz PDF i zanotuj, które strony są niepotrzebne — pustą stronę 2, stronę tytułową, duplikat na końcu. Potem ustal, które strony chcesz zachować.",
    },
    {
      title: "Otwórz narzędzie Wyodrębnij strony PDF",
      body: "Przejdź do narzędzia Wyodrębnij strony PDF w przeglądarce. Działa na Twoim urządzeniu — bez przesyłania, bez konta.",
    },
    {
      title: "Dodaj swój plik PDF",
      body: "Przeciągnij plik na pole docelowe albo kliknij, żeby go wybrać. Narzędzie wczytuje liczbę stron, dzięki czemu możesz być precyzyjny.",
    },
    {
      title: "Podaj strony, które chcesz zachować",
      body: "Podaj strony i zakresy do zachowania — na przykład 1, 3–7, 9. Niepotrzebne strony nie są wymienione, więc nie znajdą się w wyniku.",
    },
    {
      title: "Utwórz uporządkowany PDF",
      body: "Uruchom wyodrębnianie. Narzędzie buduje nowy plik zawierający tylko zachowane strony, w kolejności.",
    },
    {
      title: "Sprawdź i zapisz",
      body: "Otwórz nowy PDF, potwierdź, że niepotrzebne strony zniknęły i nic ważnego nie zniknęło razem z nimi, a potem zapisz go pod jasną nazwą.",
    },
  ],
  tips: [
    "Usuwanie stron przez zachowanie reszty to niezawodna metoda w przeglądarce — opisujesz, czego chcesz, a nie co usunąć, co pozwala uniknąć pomyłek o jedną stronę.",
    "Uważaj na puste strony ze skanerów. Podajnik dokumentów często wstawia pustą stronę między dwustronnymi oryginałami — to najłatwiej przeoczyć przy usuwaniu.",
    "Usunięcie strony to też krok w stronę prywatności. Wewnętrzne notatki, ceny, których nie chciałeś udostępniać, albo dane poprzedniego odbiorcy mogą kryć się na stronach, których nie musisz wysyłać.",
    "Sprawdź numery stron w samym dokumencie. Strona tytułowa może przesunąć liczenie, więc „strona 5” w Twojej głowie może być stroną 6 w pliku.",
    "Zachowaj oryginał. Jeśli przypadkiem usuniesz potrzebną stronę, nietknięte źródło jest pod ręką, żeby zacząć od nowa.",
  ],
  mobileNote:
    "Przycięcie zbędnej strony przed przekazaniem dokumentu z telefonu to kilka dotknięć w aplikacji PDF Editor, która usuwa strony bezpośrednio i działa offline — dzięki czemu strona tytułowa albo pusta strona nigdy nie trafi do wysyłanej kopii.",
  faq: [
    {
      q: "Jak usunąć strony za pomocą narzędzia w przeglądarce?",
      a: "Zachowaj potrzebne strony za pomocą narzędzia Wyodrębnij strony PDF. Podając tylko strony do zachowania, sprawiasz, że niepotrzebne nie trafiają do nowego pliku — czysty sposób na usunięcie stron bez kroku usuwania.",
    },
    {
      q: "Czy mój oryginalny plik zostanie zmieniony?",
      a: "Nie. Narzędzie tworzy nowy PDF i zostawia źródło nietknięte, więc pomyłkę łatwo cofnąć, zaczynając od nowa.",
    },
    {
      q: "Czy plik jest gdziekolwiek przesyłany?",
      a: "Nie. Wszystko odbywa się w przeglądarce, na Twoim urządzeniu, co ma znaczenie, gdy usuwane strony zawierają wrażliwe informacje.",
    },
    {
      q: "Czy mogę usunąć strony niekolejne?",
      a: "Tak. Zachowaj mieszankę pojedynczych stron i zakresów, na przykład 1, 4, 8–10, a każda niewymieniona strona zostanie pominięta.",
    },
    {
      q: "A co jeśli wolę usuwać strony bezpośrednio?",
      a: "Mobilna aplikacja PDF Editor pozwala dotknąć i usunąć konkretne strony, co niektórym wydaje się bardziej intuicyjne niż podejście „zachowaj, czego chcesz”.",
    },
  ],
  related: [
    {
      label: "Wyodrębnij strony PDF — zachowaj tylko to, co potrzebne",
      path: "/extract-pdf-pages",
    },
    { label: "Podziel PDF — dziel plik według zakresu", path: "/split-pdf" },
    {
      label: "Jak wyodrębnić strony z PDF",
      path: "/guides/how-to-extract-pages-from-pdf",
    },
    {
      label: "Jak uporządkować pliki PDF",
      path: "/guides/how-to-organize-pdf-files",
    },
  ],
  parentHub: { label: "Wyodrębnij strony PDF", path: "/extract-pdf-pages" },
};

export default content;
