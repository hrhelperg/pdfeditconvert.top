import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-iphone",
  h1: "Jak wypełniać formularze PDF na iPhonie (Pliki, Markup i aplikacje)",
  description:
    "Wypełniaj interaktywne i nieinteraktywne formularze PDF na iPhonie – za pomocą Plików i Markup albo dedykowanej aplikacji PDF. Kroki specyficzne dla iOS, droga przez menu udostępniania i miejsca, w których Markup zawodzi.",
  updated: "2026-06-01",
  intro: [
    "iPhone naprawdę dobrze radzi sobie z formularzami PDF, gdy już znasz dwie drogi dostępne w iOS. Wbudowana droga korzysta z aplikacji Pliki i Markup, które potrafią wypełnić nieinteraktywne formularze i w razie potrzeby dodać podpis. Bardziej rozbudowana droga to dedykowana aplikacja PDF, która wykrywa pola interaktywne, poprawnie wpisuje w nie tekst i eksportuje czystą, uzupełnioną kopię – lepsza w chwili, gdy formularz to więcej niż parę linii.",
    "To szczegóły specyficzne dla iOS najczęściej sprawiają problem: formularz otwarty z podglądu w Mail często nie pokazuje swoich pól, menu udostępniania to sposób na przenoszenie formularza między aplikacjami, a Markup traktuje wszystko jak nieinteraktywną stronę, nawet gdy istnieją prawdziwe pola. Znajomość tych osobliwości zamienia wypełnianie formularza na iPhonie w zadanie na 30 sekund.",
    "Ten poradnik obejmuje obie drogi – natywne podejście przez Pliki i Markup z jego uczciwymi ograniczeniami oraz aplikację PDF Editor do formularzy interaktywnych – żebyś mógł wybrać właściwą do formularza, który masz przed sobą.",
  ],
  steps: [
    {
      title: "Wyprowadź formularz z podglądu w Mail",
      body: "Jeśli formularz przyszedł mailem, dotknij, żeby najpierw zapisać go w Plikach, albo otwórz go przez menu udostępniania w porządnej aplikacji PDF. Szybki podgląd w Mail często ignoruje pola formularza, dlatego pisanie tam wydaje się niemożliwe.",
    },
    {
      title: "Wypróbuj Pliki i Markup przy nieinteraktywnych formularzach",
      body: "Otwórz PDF w Plikach i dotknij pióra Markup. Możesz dodać pola tekstowe i podpis w dowolnym miejscu strony – w porządku przy formularzach nieinteraktywnych i szybkich wypełnieniach, choć Markup nie wejdzie w prawdziwe pola interaktywne.",
    },
    {
      title: "Użyj aplikacji PDF przy polach interaktywnych",
      body: "Przy formularzach z prawdziwymi polami otwórz plik w aplikacji PDF Editor. Wykrywa pola, więc możesz dotknąć i pisać, zaznaczać pola wyboru i schludnie przechodzić między polami.",
    },
    {
      title: "Obsłuż nieinteraktywne formularze, umieszczając tekst",
      body: "Kiedy formularz nie ma pól, użyj narzędzia tekstowego w aplikacji, żeby umieścić odpowiedzi dokładnie na każdej linii. Powiększ obraz dwoma palcami, żeby tekst trafił precyzyjnie, a nie unosił się nad linią.",
    },
    {
      title: "Podpisz i wyeksportuj przez menu udostępniania",
      body: "Dodaj podpis w miejscu na to przeznaczonym, a potem wyeksportuj uzupełnioną kopię i wyślij ją prosto z menu udostępniania – do Mail, Wiadomości albo z powrotem do osoby, która ją wysłała.",
    },
  ],
  tips: [
    "Jeśli nie możesz pisać w formularzu na iPhonie, niemal zawsze jesteś w podglądzie Mail – najpierw zapisz w Plikach albo otwórz w aplikacji PDF.",
    "Markup świetnie sprawdza się do szybkiego podpisu albo nieinteraktywnego formularza, ale nie wypełni prawdziwych pól interaktywnych tak jak dedykowana aplikacja.",
    "Powiększ obraz przed umieszczeniem tekstu na nieinteraktywnym formularzu; kciuki są niedokładne, a powiększony tekst trafia dokładnie na linię.",
    "Zachowaj pusty oryginał w Plikach, żebyś mógł następnym razem wypełnić świeżą kopię zamiast edytować starą.",
    "iOS dobrze radzi sobie z HEIC i PDF, ale zachowanie formularzy wciąż różni się między aplikacjami – dedykowana aplikacja PDF jest najbardziej spójna.",
  ],
  mobileNote:
    "Aplikacja PDF Editor na iPhone'a wykrywa pola interaktywne tam, gdzie istnieją, i pozwala umieszczać tekst i znaczniki na nieinteraktywnych formularzach tam, gdzie ich nie ma, a potem podpisać i wyeksportować – wszystko na urządzeniu, więc dane osobowe z formularza nigdzie nie trafiają. To droga omijająca ślepe zaułki podglądu Mail.",
  faq: [
    {
      q: "Dlaczego nie mogę pisać w formularzu PDF na moim iPhonie?",
      a: "Najprawdopodobniej oglądasz go w podglądzie Mail, który ignoruje pola formularza. Zapisz plik w Plikach albo otwórz go w dedykowanej aplikacji PDF, a pola się aktywują. W formularzach nieinteraktywnych trzeba zamiast tego umieścić tekst na wierzchu.",
    },
    {
      q: "Czy mogę wypełnić formularz PDF wbudowanym narzędziem Markup?",
      a: "Tak, przy nieinteraktywnych formularzach i szybkich wypełnieniach – Markup dodaje tekst i podpis w dowolnym miejscu strony. Ale traktuje formularz jak nieinteraktywny obraz, więc nie wejdzie w prawdziwe pola interaktywne. Do tego użyj aplikacji PDF.",
    },
    {
      q: "Jak wypełnić zeskanowany formularz na iPhonie?",
      a: "Zeskanowany formularz jest nieinteraktywny, więc umieść własny tekst i znaczniki na stronie za pomocą Markup albo aplikacji PDF Editor, a potem wyeksportuj. Nie ma pól, w które można by pisać.",
    },
    {
      q: "Czy wypełnianie formularza na iPhonie jest prywatne?",
      a: "Z aplikacją PDF Editor formularz jest wypełniany na urządzeniu, więc wpisywane dane nigdzie nie trafiają. Markup też działa lokalnie. Narzędzia do wypełniania w przeglądarce mogą przesyłać plik na serwer.",
    },
    {
      q: "Jak odesłać uzupełniony formularz?",
      a: "Wyeksportuj uzupełnioną kopię i użyj menu udostępniania iOS, żeby wysłać ją przez Mail, Wiadomości albo dowolną aplikację. Utrwal ją najpierw, jeśli chcesz zablokować odpowiedzi.",
    },
  ],
  related: [
    {
      label: "Jak wypełnić formularz PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Jak wypełniać formularze PDF na Androidzie",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Jak podpisać PDF na iPhonie",
      path: "/guides/how-to-sign-pdf-on-iphone",
    },
    {
      label: "Najlepsza aplikacja do formularzy PDF na iPhone'a",
      path: "/guides/best-pdf-form-app-for-iphone",
    },
    { label: "Sposób pracy z formularzami PDF na telefonie", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formularze PDF", path: "/pdf-forms" },
};

export default content;
