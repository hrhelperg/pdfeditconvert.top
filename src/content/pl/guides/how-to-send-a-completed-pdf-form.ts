import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-a-completed-pdf-form",
  h1: "Jak wysłać wypełniony formularz PDF (utrwalić i dostarczyć)",
  description:
    "Wypełniłeś formularz – teraz odeślij go porządnie. Jak utrwalić dane pól, żeby odpowiedzi nie dało się już zmienić, jak dołączyć plik we właściwy sposób i upewnić się, że dotarł bez utraty danych.",
  updated: "2026-06-01",
  intro: [
    "Wypełnienie formularza to tylko połowa zadania; odesłanie go w całości do nadawcy to druga połowa. To jest droga powrotna – uzupełniłeś formularz, który ktoś Ci przysłał, i teraz musisz go dostarczyć tak, żeby Twoje odpowiedzi dotarły dokładnie takie, jakie wpisałeś, żeby nie dało się ich przypadkowo wyczyścić, i żeby trafiły w formacie, który odbiorca faktycznie może otworzyć.",
    "Dwie rzeczy zwykle idą tu nie tak: odpowiedzi znikające po drodze (bo dane pól nie zostały zapisane ani utrwalone) i pliki docierające jako niewygodne zdjęcia ekranu. Obu można uniknąć za pomocą paru celowych kroków przed wciśnięciem wyślij. Utrwalony załącznik PDF niemal zawsze jest właściwą odpowiedzią.",
    "Ten poradnik omawia przygotowanie wypełnionego formularza, wybór sposobu jego wysłania oraz drobne potwierdzenia, które oszczędzą Ci serii maili typu „formularz wrócił pusty”.",
  ],
  steps: [
    {
      title: "Wykonaj ostateczne sprawdzenie każdej odpowiedzi",
      body: "Przejrzyj jeszcze raz cały formularz w poszukiwaniu pustych wymaganych pól, daty i podpisu. Zauważenie brakującego pola teraz jest dużo tańsze niż wtedy, gdy formularz wróci do Ciebie odrzucony.",
    },
    {
      title: "Zapisz wypełnioną kopię poprawnie",
      body: "Wyeksportuj lub zapisz tak, żeby wartości pól zostały wpisane do pliku. Jeśli Twoje odpowiedzi nie przetrwają zamknięcia i ponownego otwarcia, narzędzie tylko wydrukowało – przełącz się na takie, które zapisuje dane formularza.",
    },
    {
      title: "Utrwal, żeby zablokować odpowiedzi",
      body: "Utrwal wypełniony formularz przed wysłaniem. To łączy Twoje odpowiedzi ze stroną, więc czytnik odbiorcy nie może ich edytować ani wyczyścić, i wyświetlają się tak samo wszędzie.",
    },
    {
      title: "Dołącz PDF bezpośrednio",
      body: "Wyślij utrwalony PDF jako zwykły załącznik e-mail albo prześlij go na portal wskazany przez nadawcę. Unikaj wysyłania zrzutu ekranu albo zdjęcia formularza, chyba że dokładnie o to poproszono.",
    },
    {
      title: "Potwierdź i zachowaj kopię",
      body: "Odnotuj, że wysłałeś formularz, i zachowaj własną kopię uzupełnionego pliku. Jeśli trafia na portal, sprawdź, czy pojawia się potwierdzenie na ekranie albo mailem, że przesłanie się powiodło.",
    },
  ],
  tips: [
    "Utrwalanie to najlepszy pojedynczy nawyk przy odsyłaniu formularzy – gwarantuje, że Twoje odpowiedzi pojawią się u odbiorcy.",
    "Nadaj plikowi użyteczną nazwę, na przykład „kowalski-podanie-wypelnione.pdf”, żeby odbiorca mógł go zarchiwizować bez zmiany nazwy.",
    "Jeśli portal odrzuca plik z powodu rozmiaru, skompresuj go zamiast wypełniać odpowiedzi od nowa – treść pozostaje nienaruszona.",
    "Zachowaj własną wypełnioną kopię; jeśli pojawi się spór albo konieczność uzupełnienia, będziesz potrzebować dokładnie tej wersji, którą wysłałeś.",
    "Wymagania urzędów i firm są różne, więc kieruj się konkretnymi instrukcjami wysyłki podanymi przez nadawcę ponad tymi ogólnymi krokami.",
  ],
  mobileNote:
    "Na telefonie aplikacja PDF Editor eksportuje utrwaloną, uzupełnioną kopię, którą możesz wysłać prosto z menu udostępniania – mailem, na portal albo wiadomością – z odpowiedziami zablokowanymi na stronie. Działa na urządzeniu, więc dane osobowe z formularza zostają prywatne podczas wysyłki.",
  faq: [
    {
      q: "Jak upewnić się, że moje odpowiedzi nie znikną, gdy wysyłam formularz?",
      a: "Zapisz tak, żeby wartości pól zostały wpisane do pliku, a potem utrwal formularz przed wysłaniem. Utrwalanie łączy Twoje odpowiedzi ze stroną, więc nie da się ich wyczyścić i wyświetlają się tak samo w każdym czytniku.",
    },
    {
      q: "Czy powinienem utrwalić wypełniony formularz przed wysłaniem go mailem?",
      a: "Tak, niemal zawsze. Kiedy skończysz edycję, utrwalenie blokuje odpowiedzi i uniemożliwia czytnikowi odbiorcy ich zgubienie albo zmianę.",
    },
    {
      q: "Czy mogę wysłać zdjęcie wypełnionego formularza?",
      a: "Tylko jeśli dokładnie o to poproszono. Utrwalony PDF jest czystszy, czytelniejszy i łatwiejszy do zarchiwizowania. Zdjęcia ekranów czy wydruków często docierają przekrzywione albo w niskiej jakości.",
    },
    {
      q: "Co zrobić, jeśli portal do przesyłania odrzuca mój formularz?",
      a: "Zwykle to limit rozmiaru albo formatu. Skompresuj PDF albo sprawdź akceptowane formaty – nie musisz wypełniać go od nowa. Treść pozostaje taka sama po kompresji.",
    },
    {
      q: "Czy powinienem zachować kopię tego, co wysłałem?",
      a: "Tak. Zachowaj własną uzupełnioną kopię na wypadek dodatkowych pytań albo prośby o ponowne złożenie, żebyś mógł odesłać dokładnie tę wersję, którą przesłałeś.",
    },
  ],
  related: [
    {
      label: "Jak zapisać wypełniony formularz PDF",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    {
      label: "Jak wypełnić formularz PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Jak udostępnić formularz PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Błędy przy wysyłaniu formularza PDF",
      path: "/guides/pdf-form-submission-errors",
    },
  ],
  parentHub: { label: "Formularze PDF", path: "/pdf-forms" },
};

export default content;
