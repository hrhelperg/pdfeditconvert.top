import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-pdf-forms-work",
  h1: "Jak działają formularze PDF — pola, AcroForm i nieinteraktywne skany",
  description:
    "Pod maską formularz PDF to albo zestaw interaktywnych pól nałożonych na stronę, albo obraz bez żadnych pól – formularz nieinteraktywny. Jak zbudowany jest jeden i drugi typ i dlaczego ma to znaczenie przy wypełnianiu.",
  updated: "2026-06-01",
  intro: [
    "Warto zrozumieć, co naprawdę dzieje się wewnątrz formularza PDF, bo to wyjaśnia niemal każdy dziwny przypadek, na jaki się natkniesz. Strona PDF to stały układ – tekst, linie i obrazy umieszczone w dokładnych współrzędnych. Formularz dodaje osobną warstwę na tym układzie: pola interaktywne, z których każde to małe pole wiedzące, że jest polem tekstowym, polem wyboru, listą rozwijaną albo obszarem na podpis.",
    "Kiedy formularz ma tę warstwę pól, Twój czytnik PDF rysuje edytowalne pola dokładnie tam, gdzie umieścił je twórca. Wpisujesz tekst, a czytnik zapisuje go w polu, zamiast wypalać go na stronie. Ta separacja jest powodem, dla którego wypełnione odpowiedzi czasem da się wyczyścić, edytować albo nie zapisać – żyją w warstwie pól, nie na samej stronie, dopóki ich nie utrwalisz.",
    "Formularze nieinteraktywne całkowicie pomijają warstwę pól. To po prostu obraz strony, więc nie ma nic interaktywnego, w co można by wpisywać tekst; sam dodajesz na wierzchu własne obiekty tekstowe. Ten poradnik pokazuje, jak zbudowane są oba typy, co robi utrwalanie i dlaczego ten sam formularz może zachowywać się inaczej w różnych aplikacjach.",
  ],
  steps: [
    {
      title: "Warstwa strony: stała i ostateczna",
      body: "Każdy PDF ma warstwę strony z tekstem i grafiką przypiętymi do dokładnych pozycji. To dzięki niej PDF wygląda identycznie wszędzie. W formularzu nieinteraktywnym linie pytań i etykiety żyją w całości tutaj.",
    },
    {
      title: "Warstwa pól: interaktywna, na wierzchu",
      body: "Formularze interaktywne dodają nad stroną warstwę pól formularza – pola tekstowe, pola wyboru, przyciski opcji, listy rozwijane, pola podpisu. Każde pole ma nazwę i typ, który rozpoznaje czytnik.",
    },
    {
      title: "Wypełnianie: dane trafiają do pól",
      body: "Kiedy piszesz w polu interaktywnym, Twoja odpowiedź jest przechowywana w tym polu, a nie łączona ze stroną. Dlatego możesz ją wyczyścić i wpisać ponownie, i dlatego inny czytnik może pokazać ją nieco inaczej.",
    },
    {
      title: "Zapisywanie: zachowanie wartości pól",
      body: "Zapisanie wypełnionego formularza zapisuje wartości pól wewnątrz pliku. Niektóre podstawowe czytniki pozwalają tylko drukować, nie zapisywać danych – to klasyczny powód, dla którego wypełnione odpowiedzi znikają po ponownym otwarciu pliku.",
    },
    {
      title: "Utrwalanie: łączenie pól ze stroną",
      body: "Utrwalanie wtapia wartości pól w warstwę strony, zamieniając je w trwałą zawartość strony. Po utrwaleniu odpowiedzi nie da się już edytować ani wyczyścić – przydatne tuż przed odesłaniem formularza.",
    },
  ],
  tips: [
    "Wyobraź sobie formularz interaktywny jako przezroczystą kartkę z edytowalnymi polami położoną na wydrukowanej stronie. Utrwalanie przykleja tę kartkę na stałe.",
    "Ponieważ wartości pól są oddzielone od strony, ten sam formularz może wyglądać nieco inaczej w różnych czytnikach – czcionki i rozmiary pól nie zawsze są identyczne.",
    "Jeśli odpowiedzi wciąż znikają, warstwa pól nie jest zapisywana. Użyj narzędzia, które zapisuje wartości pól w pliku, albo utrwal dane przed zamknięciem.",
    "Niektóre zaawansowane formularze (często nazywane XFA lub formularzami dynamicznymi) mają bardziej złożoną strukturę, której wiele czytników nie obsługuje w pełni – to one najczęściej sprawiają kłopoty.",
    "Formularze nieinteraktywne w ogóle nie mają warstwy pól, więc nigdy nie tracą danych tak jak interaktywne – dodany przez Ciebie tekst po prostu zostaje na stronie.",
  ],
  mobileNote:
    "Aplikacja PDF Editor odczytuje warstwę pól formularza zaraz po jego otwarciu, więc pola interaktywne są od razu gotowe do dotknięcia. W formularzach nieinteraktywnych bez warstwy pól pozwala dodać tekst i znaczniki bezpośrednio na stronie, a potem wyeksportować plik – możesz też utrwalić wynik, żeby Twoje odpowiedzi zostały zablokowane przed wysłaniem.",
  faq: [
    {
      q: "Z czego zbudowane są pola formularza PDF?",
      a: "To warstwa interaktywnych obiektów – pól tekstowych, pól wyboru, przycisków opcji, list rozwijanych i pól podpisu – umieszczonych nad stałym układem strony, każdy z nazwą i typem, który rozpoznaje czytnik.",
    },
    {
      q: "Dlaczego moje wypełnione odpowiedzi czasem znikają?",
      a: "Wartości pól są przechowywane osobno od strony. Jeśli Twój czytnik tylko drukuje zamiast zapisywać dane, albo nie zapisujesz poprawnie, warstwa pól nie zostaje zapisana w pliku i odpowiedzi się gubią.",
    },
    {
      q: "Co znaczy utrwalić formularz PDF?",
      a: "Utrwalanie łączy wartości pól bezpośrednio ze stroną, czyniąc je trwałymi. Formularz przestaje być edytowalny, ale odpowiedzi będą wyświetlać się i drukować spójnie wszędzie.",
    },
    {
      q: "Czym jest AcroForm?",
      a: "AcroForm to standardowy, szeroko obsługiwany rodzaj interaktywnego formularza PDF. Istnieje też bardziej złożony typ dynamiczny (XFA), z którym wiele czytników radzi sobie słabo, dlatego niektóre formularze działają tylko w konkretnym oprogramowaniu.",
    },
    {
      q: "Dlaczego ten sam formularz wygląda inaczej w dwóch aplikacjach?",
      a: "Ponieważ każdy czytnik sam rysuje warstwę pól. Wygląd formularza może się różnić między czytnikami PDF, zwłaszcza czcionka i rozmiar pól. Utrwalenie przed udostępnieniem pozwala uniknąć niespodzianek.",
    },
  ],
  related: [
    { label: "Czym jest formularz PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Jak zapisać wypełniony formularz PDF",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Problemy z kompatybilnością formularzy PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "PDF Editor — wypełniaj na telefonie", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formularze PDF", path: "/pdf-forms" },
};

export default content;
