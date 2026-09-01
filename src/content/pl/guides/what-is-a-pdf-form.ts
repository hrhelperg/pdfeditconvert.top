import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "what-is-a-pdf-form",
  h1: "Czym jest formularz PDF? Formularze interaktywne i nieinteraktywne",
  description:
    "Formularz PDF to dokument stworzony do zbierania odpowiedzi – czasem z prawdziwymi polami, w które wpisujesz tekst, a czasem jako formularz nieinteraktywny, czyli w praktyce obraz strony, na którym się tylko pisze. Co to oznacza i jak to rozpoznać.",
  updated: "2026-06-01",
  intro: [
    "Formularz PDF to każdy plik PDF stworzony po to, by zebrać informacje od osoby, która go otwiera: podanie o pracę, dokument podatkowy, zgoda albo karta rezerwacji. Formularz od zwykłego PDF-a odróżnia intencja – oczekuje się od Ciebie dopisania odpowiedzi, a nie tylko przeczytania treści. Problem w tym, że dwa formularze mogą wyglądać na ekranie identycznie, a zachowywać się zupełnie inaczej, gdy próbujesz je wypełnić.",
    "Wszystko sprowadza się do tego, czy formularz ma pola interaktywne. Formularz interaktywny ma pola, które twórca wbudował w plik – dotykasz jednego i pojawia się kursor gotowy do pisania. Formularz nieinteraktywny ich nie ma; to w praktyce obraz formularza, często skan papierowego oryginału, na którym linie i etykiety są częścią obrazu, a nie aktywnymi obszarami. Oba są formularzami i oba da się wypełnić, ale wymagają innego podejścia.",
    "Rozpoznanie, z którym typem masz do czynienia, zajmuje dwie sekundy i oszczędza sporo frustracji. Ten poradnik wyjaśnia, czym naprawdę jest formularz PDF, jakie dwa typy spotkasz i jak je odróżnić, zanim zaczniesz wypełniać.",
  ],
  steps: [
    {
      title: "Rozpoznaj, że formularz jest zrobiony do wypełnienia",
      body: "W przeciwieństwie do raportu czy umowy, które tylko czytasz, formularz ma puste miejsca czekające na odpowiedzi – linie na imię i nazwisko, pola wyboru, miejsca na podpis. To właśnie ta intencja czyni z niego formularz, niezależnie od tego, jak powstał.",
    },
    {
      title: "Rozpoznaj formularz interaktywny",
      body: "Otwórz PDF i dotknij lub kliknij miejsce, gdzie powinna trafić odpowiedź. Jeśli pojawi się kursor tekstowy, pole się podświetli albo pole wyboru się zaznaczy, formularz ma pola interaktywne celowo dodane przez twórcę.",
    },
    {
      title: "Rozpoznaj formularz nieinteraktywny",
      body: "Jeśli dotknięcie pustego miejsca nic nie daje – brak kursora, brak podświetlenia – formularz jest nieinteraktywny. Linie i etykiety są zapisane w obrazie strony, więc nie ma w co bezpośrednio wpisywać tekstu.",
    },
    {
      title: "Sprawdź, jak formularz powstał",
      body: "Formularze wyeksportowane z programu do projektowania formularzy zwykle są interaktywne. Formularze wydrukowane, podpisane ręcznie, a potem zeskanowane niemal zawsze są nieinteraktywne. Znajomość pochodzenia pozwala przewidzieć typ.",
    },
    {
      title: "Wybierz właściwy sposób wypełniania",
      body: "Formularze interaktywne: dotknij i pisz. Formularze nieinteraktywne: dodaj własne pola tekstowe i znaczniki na stronie. Pełnoprawny edytor PDF obsługuje oba przypadki w tym samym pliku.",
    },
  ],
  tips: [
    "Najszybszy test to dotknięcie pustej linii. Jeśli pojawia się kursor – formularz jest interaktywny; jeśli nic się nie dzieje – jest nieinteraktywny.",
    "Formularz może być interaktywny tylko częściowo: niektóre pola są prawdziwe, innych brakuje. Wypełnij te prawdziwe, a resztę uzupełnij tekstem ręcznie.",
    "Formularze interaktywne łatwiej wypełnić schludnie, ale nieinteraktywne są równie wygodne w obsłudze – po prostu sam ustawiasz tekst.",
    "Jeśli projektujesz formularz dla innych, zrób go interaktywnym tam, gdzie to możliwe – znacznie ułatwia to wypełnianie odbiorcy.",
    "Wygląd formularza może się różnić między czytnikami PDF, więc pole, które na Twoim telefonie wygląda tak, na czyimś komputerze może wyglądać nieco inaczej.",
  ],
  mobileNote:
    "Na telefonie aplikacja PDF Editor sprawdza, czy formularz ma pola interaktywne, zaraz po jego otwarciu: tam, gdzie istnieją, dotykasz i piszesz; tam, gdzie ich nie ma, umieszczasz tekst i znaczniki w dowolnym miejscu strony. W obu przypadkach możesz podpisać i wyeksportować wypełnioną kopię bez drukowania czegokolwiek.",
  faq: [
    {
      q: "Czy każdy PDF jest formularzem?",
      a: "Nie. PDF liczy się jako formularz tylko wtedy, gdy ma zbierać odpowiedzi – pola, pola wyboru, linie na podpis. Raport czy artykuł to PDF, ale nie formularz.",
    },
    {
      q: "Jak sprawdzić, czy mój formularz PDF jest interaktywny, czy nieinteraktywny?",
      a: "Dotknij lub kliknij puste miejsce, gdzie powinna trafić odpowiedź. Jeśli pojawi się kursor i możesz pisać, jest interaktywny. Jeśli nic się nie dzieje, to formularz nieinteraktywny i dodajesz tekst na wierzchu.",
    },
    {
      q: "Czy mogę wypełnić nieinteraktywny formularz PDF?",
      a: "Tak. Formularz nieinteraktywny nie ma pól, ale za pomocą edytora PDF możesz umieścić własny tekst i znaczniki w dowolnym miejscu strony, a potem wyeksportować wypełniony plik.",
    },
    {
      q: "Dlaczego ktoś wysyłałby formularz nieinteraktywny zamiast interaktywnego?",
      a: "Zwykle dlatego, że formularz zaczynał jako papier i został zeskanowany, albo narzędzie, którym go stworzono, nie dodaje pól. To nie błąd – po prostu wymaga nieco innej metody wypełniania.",
    },
    {
      q: "Czy formularze interaktywne są zawsze lepsze?",
      a: "Łatwiej je wypełnić i wyglądają schludniej, ale mogą też korzystać z funkcji, których nie obsługuje każdy czytnik. Dobrze zrobiony formularz nieinteraktywny działa niezawodnie wszędzie, nawet jeśli wymaga trochę więcej pracy przy wypełnianiu.",
    },
  ],
  related: [
    {
      label: "PDF edytowalny czy PDF do wypełnienia",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    { label: "Jak działają formularze PDF", path: "/guides/how-pdf-forms-work" },
    {
      label: "Jak wypełnić formularz PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "PDF edytowalny czy PDF-obraz",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
  ],
  parentHub: { label: "Formularze PDF", path: "/pdf-forms" },
};

export default content;
