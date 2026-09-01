import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-phone",
  h1: "Jak wypełniać formularze PDF na telefonie",
  description:
    "Wypełniaj formularze PDF na iPhonie lub Androidzie, niezależnie od tego, czy mają prawdziwe pola formularza, czy są nieinteraktywnym skanem. Dotknij i pisz, dodawaj pola tekstowe i podpisuj w jednym miejscu.",
  updated: "2026-05-23",
  intro: [
    "Formularze PDF występują w dwóch odmianach, a to, którą masz, decyduje o sposobie wypełniania. Niektóre są interaktywne – dotykasz pole i piszesz, z gotowymi ramkami, które przygotował twórca formularza. Inne są nieinteraktywne: zeskanowany albo wydrukowany i potem zamieniony na PDF formularz bez żadnych pól, na którym musisz sam nałożyć tekst. Oba da się doskonale wypełnić na telefonie – wymagają tylko nieco innego podejścia.",
    "Ten poradnik pokazuje wypełnianie obu rodzajów na iPhonie i Androidzie za pomocą aplikacji PDF Editor, która wykrywa pola interaktywne tam, gdzie istnieją, i pozwala umieścić tekst oraz znaczniki wyboru w dowolnym miejscu, gdy ich nie ma. Wiele formularzy wymaga też podpisu, który ta sama aplikacja obsługuje w jednym przebiegu.",
    "Efektem jest wypełniony formularz, który możesz od razu odesłać – bez drukowania, bez skanowania, bez szukania sprawnej drukarki w najgorszym możliwym momencie.",
  ],
  steps: [
    {
      title: "Otwórz formularz w aplikacji PDF Editor",
      body: "Zaimportuj PDF z Plików, Mail, Drive lub dowolnego menu udostępniania. Aplikacja sprawdza, czy formularz ma pola interaktywne.",
    },
    {
      title: "Jeśli ma pola, dotknij i pisz",
      body: "Formularze interaktywne pozwalają dotknąć bezpośrednio każdego pola i pisać. Przechodź między polami przez tabulator lub przewijanie i dotykaj pól wyboru, żeby je zaznaczyć.",
    },
    {
      title: "Jeśli jest nieinteraktywny, dodaj własny tekst",
      body: "Przy zeskanowanym lub pozbawionym pól formularzu użyj narzędzia tekstowego, żeby umieścić tekst tam, gdzie należy każda odpowiedź. Dopasuj rozmiar i pozycję, żeby ładnie leżał na linii.",
    },
    {
      title: "Obsłuż pola wyboru i daty",
      body: "Umieść znacznik wyboru lub X na polach do zaznaczenia i dodaj datę tam, gdzie jest wymagana. W formularzach nieinteraktywnych to po prostu obiekty tekstowe lub znaczniki, które sam pozycjonujesz.",
    },
    {
      title: "Podpisz, jeśli formularz tego wymaga",
      body: "Użyj narzędzia Podpis, żeby dodać zapisany podpis w polu podpisu – ten sam sposób pracy, niezależnie od tego, czy formularz jest interaktywny, czy nieinteraktywny.",
    },
    {
      title: "Wyeksportuj i wyślij",
      body: "Zapisz wypełnioną kopię jako nowy plik i odeślij ją mailem lub dowolną aplikacją. Zachowaj pusty oryginał na wypadek, gdybyś musiał wypełnić go ponownie.",
    },
  ],
  tips: [
    "Sprawdź najpierw, czy pola są interaktywne – dotknij miejsca, gdzie powinna trafić odpowiedź. Jeśli pojawi się kursor, pisz; jeśli nic się nie dzieje, to formularz nieinteraktywny i sam dodajesz tekst na wierzchu.",
    "W formularzach nieinteraktywnych powiększ widok przed umieszczeniem tekstu, żeby wylądował dokładnie na linii, a nie unosił się nad nią lub pod nią.",
    "Zachowaj pustą kopię formularzy, które wypełniasz wielokrotnie. Wypełnienie świeżego oryginału jest czystsze niż edycja poprzednich odpowiedzi.",
    "Wypełniaj i podpisuj w tej samej sesji, żeby nie musieć eksportować, ponownie otwierać i wszystkiego umieszczać od nowa – aplikacja zamyka to w jednym przebiegu.",
    "Sprawdź wymagane pola przed wysłaniem. Formularz odrzucony przez brakującą datę marnuje więcej czasu, niż zajęłaby taka kontrola.",
  ],
  mobileNote:
    "Wypełnianie formularzy to jedno z najbardziej naturalnie mobilnych zadań związanych z PDF-em – formularz przychodzi mailem i tak samo wraca. Aplikacja PDF Editor wypełnia formularze interaktywne i nieinteraktywne, dodaje Twój podpis i eksportuje gotową kopię, wszystko na urządzeniu, bez przesyłania niczego.",
  faq: [
    {
      q: "Jak poznać, czy formularz PDF jest interaktywny?",
      a: "Dotknij miejsca, gdzie powinna trafić odpowiedź. Jeśli pojawi się kursor tekstowy i możesz pisać, ma pola interaktywne. Jeśli nic się nie dzieje, to formularz nieinteraktywny i sam dodajesz tekst na wierzchu.",
    },
    {
      q: "Czy mogę wypełnić zeskanowany formularz bez pól?",
      a: "Tak. Użyj narzędzia tekstowego, żeby umieścić odpowiedzi bezpośrednio na stronie, i dodaj znaczniki wyboru tam, gdzie trzeba. Aplikacja traktuje je jak obiekty, które sam pozycjonujesz.",
    },
    {
      q: "Czy mogę podpisać formularz w tej samej aplikacji?",
      a: "Tak. Narzędzie Podpis dodaje zapisany podpis w tej samej sesji, więc wypełniasz i podpisujesz bez zmiany aplikacji.",
    },
    {
      q: "Czy wypełniony formularz jest gdziekolwiek przesyłany?",
      a: "Nie. Aplikacja PDF Editor wypełnia formularze na Twoim urządzeniu, więc zawarte w nich dane osobowe pozostają prywatne.",
    },
    {
      q: "Czy mogę ponownie użyć formularza, który wypełniam często?",
      a: "Zachowaj pusty oryginał i za każdym razem wypełniaj świeżą kopię. To czystsze rozwiązanie niż edycja wcześniej uzupełnionej wersji.",
    },
  ],
  related: [
    { label: "Edytor PDF — edytuj i wypełniaj na telefonie", path: "/pdf-editor" },
    { label: "Jak podpisać PDF na telefonie", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Jak dodawać adnotacje do PDF na telefonie", path: "/guides/how-to-annotate-pdf-on-mobile" },
    { label: "Jak edytować PDF na iPhonie", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Edytor PDF", path: "/pdf-editor" },
};

export default content;
