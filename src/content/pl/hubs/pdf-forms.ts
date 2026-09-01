import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-forms",
  hero: {
    eyebrow: "Formularze PDF",
    h1: "Wypełniaj, podpisuj i zarządzaj formularzami PDF gdziekolwiek.",
    highlight: "formularzami PDF",
    lead: "Formularze podatkowe, wnioski, karty zgłoszeniowe, formularze zgody — większość z nich przychodzi jako pliki PDF. Dowiedz się, jak naprawdę działają formularze PDF, jak wypełniać te interaktywne i nieinteraktywne oraz jak rozwiązywać typowe problemy — wszystko bez drukowania choćby jednej strony.",
    primaryCta: { label: "Otwórz aplikację", href: SITE.app.appStore },
  },
  problem: {
    heading: "Dlaczego formularze PDF sprawiają kłopoty",
    paragraphs: [
      "Formularz PDF wygląda na jedną rzecz, a często jest dwiema. Niektóre są interaktywne — ich twórca dodał prawdziwe pola, które można dotknąć i w które można wpisywać tekst. Inne są nieinteraktywne — zeskanowany albo wydrukowany, a potem zapisany formularz bez żadnych pól, na którym trzeba samodzielnie umieścić własny tekst. Te dwa typy zachowują się zupełnie inaczej, a większość frustracji związanej z formularzami bierze się z niewiedzy, z którym typem ma się do czynienia.",
      "Do tego formularze psocą w sposób, w jaki nie psocą zwykłe pliki PDF. Pola znikają w niewłaściwej przeglądarce, wpisane odpowiedzi nie chcą się zapisać, formularz otwiera się tylko do odczytu albo wpisane wartości nie pojawiają się przy druku. Żadna z tych sytuacji nie oznacza, że formularz jest zepsuty — to przewidywalne problemy z przewidywalnymi rozwiązaniami, gdy tylko wiadomo, co dzieje się pod spodem.",
      "Ten hub zbiera wszystko w jednym miejscu: podstawy działania formularzy, instrukcję krok po kroku wypełniania ich na komputerze lub telefonie, sposoby pracy biznesowej przy zbieraniu informacji od klientów oraz zestaw rozwiązywania problemów na wypadek, gdy formularz nie współpracuje. Wygląd i zachowanie formularzy mogą się różnić między przeglądarkami PDF, dlatego przewodniki są szczere co do tego, co działa wszędzie, a co zależy od narzędzia, w którym otwierany jest plik.",
    ],
  },
  features: {
    heading: "Co możesz zrobić z formularzami PDF",
    items: [
      {
        icon: "FileText",
        title: "Wypełniaj pola interaktywne",
        body: "Dotknij prawdziwego pola formularza i wpisz tekst. Przechodź między polami, zaznaczaj pola wyboru i wybieraj z list rozwijanych tam, gdzie twórca formularza je przewidział.",
      },
      {
        icon: "TextCursorInput",
        title: "Uzupełniaj formularze nieinteraktywne",
        body: "Brak pól? Umieść własny tekst i znaki zaznaczenia w dowolnym miejscu strony — dokładnie tam, gdzie na zeskanowanym lub wydrukowanym formularzu powinna znaleźć się dana odpowiedź.",
      },
      {
        icon: "PenLine",
        title: "Podpisuj tam, gdzie trzeba",
        body: "Dodaj podpis pisany albo odręczny w miejscu przeznaczonym na podpis, niezależnie od tego, czy jest to pole interaktywne, czy tylko linia na formularzu nieinteraktywnym.",
      },
      {
        icon: "Save",
        title: "Zapisz uzupełnioną kopię",
        body: "Wyeksportuj gotową wersję, którą od razu możesz odesłać, i zachowaj pusty oryginał na następny raz.",
      },
      {
        icon: "Lock",
        title: "Utrwal przed wysłaniem",
        body: "Zablokuj swoje odpowiedzi na stałe na stronie, aby nie mogły zostać zmienione ani przypadkowo wyczyszczone przez przeglądarkę odbiorcy.",
      },
      {
        icon: "Smartphone",
        title: "Zrób to wszystko z telefonu",
        body: "Formularze przychodzą mailem i tą samą drogą wracają — wypełnianie i podpisywanie na telefonie to jedno z najbardziej autentycznie mobilnych zadań związanych z PDF.",
      },
    ],
  },
  steps: {
    heading: "Wypełnianie formularza PDF od początku do końca",
    items: [
      {
        title: "Otwórz formularz i sprawdź jego typ",
        body: "Otwórz plik PDF i dotknij miejsca, gdzie powinna znaleźć się odpowiedź. Jeśli pojawi się kursor, formularz ma pola interaktywne. Jeśli nic się nie stanie, to formularz nieinteraktywny i tekst trzeba dodać samodzielnie na wierzchu.",
      },
      {
        title: "Wypełnij pola",
        body: "W formularzach interaktywnych dotykaj i wpisuj tekst, przechodząc między polami. W formularzach nieinteraktywnych użyj narzędzia tekstowego, aby precyzyjnie umieścić odpowiedzi na każdej linii.",
      },
      {
        title: "Zajmij się polami wyboru, datami i podpisami",
        body: "Zaznacz pola wyboru albo umieść znacznik, dodaj datę tam, gdzie jest wymagana, i użyj narzędzia podpisu w każdym miejscu przeznaczonym na podpis.",
      },
      {
        title: "Sprawdź każde wymagane pole",
        body: "Przejrzyj ponownie cały formularz w poszukiwaniu pustych pól. Odrzucony formularz przez jedną brakującą datę kosztuje więcej czasu, niż zajęłoby jego sprawdzenie.",
      },
      {
        title: "Zapisz, utrwal i wyślij",
        body: "Wyeksportuj uzupełnioną kopię, utrwal ją, aby odpowiedzi zostały zablokowane, i odeślij mailem albo prześlij dalej. Zachowaj pusty oryginał.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Formularze na telefonie",
    body: "Formularz trafia do skrzynki, gdy nie ma Cię przy biurku. Dzięki telefonowi można go otworzyć, wypełnić pola albo dodać tekst do nieinteraktywnego skanu, podpisać i odesłać, zanim jeszcze znajdzie się krzesło — bez drukarki, bez skanera, bez czekania na powrót do domu. Aplikacja PDF Editor wykrywa pola interaktywne tam, gdzie istnieją, pozwala umieścić tekst i znaczniki w dowolnym miejscu tam, gdzie ich nie ma, i zachowuje dane osobowe z formularza na Twoim urządzeniu.",
  },
  faq: [
    {
      q: "Czym różni się interaktywny formularz PDF od nieinteraktywnego?",
      a: "Formularz interaktywny ma pola wbudowane przez jego twórcę — dotknięcie jednego z nich pokazuje kursor, w który można wpisywać tekst. Formularz nieinteraktywny to w praktyce obraz strony, na którym się tylko pisze — nie ma na nim żadnych pól, więc tekst trzeba dodać samodzielnie na wierzchu. Oba typy da się wypełnić, wymagają tylko nieco innego podejścia.",
    },
    {
      q: "Czy muszę wydrukować formularz PDF, żeby go wypełnić?",
      a: "Prawie nigdy. Zarówno formularze interaktywne, jak i nieinteraktywne można wypełnić cyfrowo — wpisując tekst w pola albo umieszczając go na stronie, a potem podpisując i eksportując. Drukowanie ma sens tylko wtedy, gdy odbiorca wyraźnie wymaga odręcznego podpisu na papierze.",
    },
    {
      q: "Dlaczego w niektórych formularzach PDF nie da się nic wpisać?",
      a: "Zwykle chodzi o jedno z trzech: formularz jest nieinteraktywny (nie ma pól, w które można wpisywać), używana przeglądarka nie obsługuje pól formularzy, albo formularz jest tylko do odczytu bądź zabezpieczony. Przewodniki rozwiązywania problemów w tym hubie omawiają każdą z tych przyczyn.",
    },
    {
      q: "Czy wypełniony formularz będzie wyglądał tak samo u odbiorcy?",
      a: "Zwykle tak, ale nie zawsze — wygląd formularzy może różnić się między przeglądarkami PDF. Utrwalenie uzupełnionego formularza przed wysłaniem blokuje odpowiedzi na stałe na stronie, dzięki czemu wyświetlają się tak samo, niezależnie od tego, gdzie zostanie on otwarty.",
    },
    {
      q: "Czy wypełnianie formularza online jest prywatne?",
      a: "To zależy od narzędzia. Aplikacja PDF Editor wypełnia formularze na Twoim urządzeniu, więc wpisywane dane osobowe nigdzie nie są przesyłane. Narzędzia działające w przeglądarce, które pracują lokalnie, również zachowują plik na Twoim urządzeniu.",
    },
  ],
  related: [
    { label: "Czym jest formularz PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Jak wypełnić formularz PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Jak stworzyć wypełnialny plik PDF",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Formularz PDF nie działa? Zacznij tutaj",
      path: "/guides/pdf-form-not-working",
    },
    { label: "PDF Editor — wypełniaj i podpisuj na telefonie", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Wypełniaj i podpisuj formularze PDF na telefonie.",
    sub: "Bezpłatnie na iOS i Androidzie. Nic nie trzeba przesyłać.",
  },
};

export default content;
