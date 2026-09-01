import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-client-intake-forms",
  h1: "Jak wysyłać formularze zgłoszeniowe dla klientów (porządnie i prywatnie)",
  description:
    "Zbierz dane nowego klienta za jednym razem, bez bałaganu. Jak wysłać formularz zgłoszeniowy PDF tak, żeby łatwo się go wypełniało, wracał kompletny i chronił prywatność danych klienta.",
  updated: "2026-06-01",
  intro: [
    "Formularz zgłoszeniowy to często pierwsza prawdziwa interakcja, jaką wielu klientów ma z Twoim sposobem pracy, więc warto zrobić go dobrze. Zrobiony dobrze, jeden formularz zgłoszeniowy PDF zbiera wszystko, czego potrzebujesz na start – dane kontaktowe, szczegóły projektu, preferencje – za jednym razem, bez wymiany wiadomości w stylu „czy możesz mi jeszcze wysłać…”. Zrobiony źle, wraca wypełniony do połowy i nadaje niedbały ton.",
    "Mechanika jest prosta, ale szczegóły mają znaczenie: formularz musi być łatwy do wypełnienia na telefonie (gdzie większość klientów go otworzy), musi wrócić kompletny i w formacie nadającym się do użycia, a ponieważ zawiera dane osobowe, nie powinien po drodze przechodzić przez przypadkową publiczną stronę.",
    "Ten poradnik przechodzi przez przygotowanie formularza zgłoszeniowego, wysłanie go tak, żeby klienci faktycznie mogli go uzupełnić, i porządne zbieranie odpowiedzi – wersję praktyczną, a nie teoretyczną.",
  ],
  steps: [
    {
      title: "Zbuduj formularz zgłoszeniowy, który pyta tylko o to, co potrzebne",
      body: "Każde dodatkowe pole obniża wskaźnik ukończenia. Pytaj o to, czego naprawdę potrzebujesz na start, grupuj logicznie i zostaw prawdziwe miejsce na odpowiedzi. Trzymaj pusty wzorzec, którego używasz ponownie dla każdego nowego klienta.",
    },
    {
      title: "Wyślij pusty formularz, nie utrwalony",
      body: "Załącz PDF do wypełnienia bezpośrednio albo udostępnij go przez dysk, którego używa klient. Nie utrwalaj pustego formularza – to usuwa pola. Dodaj jednozdaniową notatkę o tym, jak go wypełnić i odesłać.",
    },
    {
      title: "Spraw, żeby wypełnianie na telefonie było bezwysiłkowe",
      body: "Powiedz klientom, że mogą uzupełnić formularz w aplikacji PDF – dotykać pól albo dodawać tekst na nieinteraktywnym formularzu – podpisać, jeśli trzeba, i wyeksportować. Większość zrobi to na telefonie, więc wygładź tę drogę.",
    },
    {
      title: "Poproś o utrwaloną kopię z powrotem",
      body: "Poproś o zapisany albo utrwalony PDF, a nie zdjęcie. Utrwalone formularze czytają się spójnie, nie da się ich wyczyścić i od razu trafiają do teczki klienta.",
    },
    {
      title: "Zarchiwizuj i potwierdź odbiór",
      body: "Zmień nazwę odesłanego formularza według klienta i daty, przechowuj go razem z dokumentacją tego klienta i wyślij krótkie potwierdzenie. Zrób jedno przypomnienie, jeśli formularz wróci z pustymi wymaganymi polami.",
    },
  ],
  tips: [
    "Krótsze formularze zgłoszeniowe są częściej uzupełniane; usuń każde pole, które nie jest naprawdę potrzebne na start.",
    "Ponieważ formularze zgłoszeniowe zawierają dane osobowe, preferuj bezpośrednie załączniki albo prywatny dysk zamiast publicznych usług „wypełnij online”.",
    "Wielokrotny pusty wzorzec oznacza, że każdy nowy klient dostaje czysty, identyczny formularz bez pozostałości po poprzednim.",
    "Poleć konkretną aplikację PDF w swojej notatce, żeby klienci na telefonach nie utknęli w podglądzie e-maila, w którym nie da się pisać.",
    "Trzymaj się spójnego schematu nazywania plików, żeby formularz zgłoszeniowy danego klienta zawsze łatwo było później odnaleźć.",
  ],
  mobileNote:
    "Klienci mogą uzupełnić Twój formularz zgłoszeniowy na telefonie za pomocą aplikacji PDF Editor – wypełniając pola albo dodając tekst do nieinteraktywnego formularza, podpisując i eksportując utrwaloną kopię, żeby odesłać ją od razu. Działa na urządzeniu, więc dane osobowe, które wpisują, nigdzie po drodze do Ciebie nie trafiają.",
  faq: [
    {
      q: "Jak wysłać formularz zgłoszeniowy dla klienta jako PDF?",
      a: "Załącz PDF do wypełnienia bezpośrednio do maila albo udostępnij go przez dysk, którego używa klient, bez utrwalania pustego formularza. Dodaj krótką notatkę o wypełnieniu go w aplikacji PDF i odesłaniu uzupełnionej kopii.",
    },
    {
      q: "Dlaczego mój formularz zgłoszeniowy wraca pusty albo wypełniony do połowy?",
      a: "Klienci często otwierają go w podglądzie e-maila ignorującym pola, albo formularz pyta o zbyt wiele. Poleć aplikację PDF, usuń zbędne pola i poproś o utrwaloną kopię z powrotem.",
    },
    {
      q: "Jak zachować prywatność danych klienta przy zbieraniu formularzy zgłoszeniowych?",
      a: "Wysyłaj i odbieraj formularz jako bezpośredni załącznik albo przez prywatny dysk, a nie publiczną stronę do wypełniania. Aplikacja PDF Editor wypełnia dane na urządzeniu, więc dane klienta nigdzie nie trafiają.",
    },
    {
      q: "Czy formularze zgłoszeniowe powinny być interaktywne czy nieinteraktywne?",
      a: "Interaktywny jest schludniejszy, jeśli potrafisz go zbudować, ale czysty nieinteraktywny szablon działa wszędzie. Oba są w porządku, o ile pola są jasno opisane i mają wystarczająco miejsca.",
    },
    {
      q: "Jak utrzymać porządek w odesłanych formularzach zgłoszeniowych?",
      a: "Zmieniaj nazwę każdego według klienta i daty, przechowuj go razem z dokumentacją tego klienta i trzymaj pusty wzorzec osobno, żeby każdy nowy klient dostał świeżą kopię.",
    },
  ],
  related: [
    {
      label: "Formularze PDF dla małych firm",
      path: "/guides/pdf-forms-for-small-business",
    },
    {
      label: "Sposoby zbierania dokumentów za pomocą PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Jak udostępnić formularz PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Jak udostępniać PDF klientom",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "Formularze PDF", path: "/pdf-forms" },
};

export default content;
