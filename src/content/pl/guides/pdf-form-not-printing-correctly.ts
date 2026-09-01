import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-printing-correctly",
  h1: "Formularz PDF źle się drukuje? Napraw puste pola",
  description:
    "Formularz drukuje się z pustymi polami, przesuniętym tekstem albo ucinanymi krawędziami? Problemy z drukiem typowe dla formularzy – zwłaszcza brakujące wartości pól – i ustawienia, które naprawiają każdy z nich.",
  updated: "2026-06-01",
  intro: [
    "Formularze drukują się źle w sposób, jakiego nie znają zwykłe pliki PDF. Najczęstszy i najbardziej zaskakujący to wypełnione pola wychodzące puste – uzupełniłeś wszystko na ekranie, a papier pokazuje tylko pusty formularz. Zaraz za tym są tekst pól przesuwający się poza swoją linię, pola wyboru, które się nie drukują, i krawędzie, które są ucinane. Każdy ma konkretną, naprawialną przyczynę zakorzenioną w tym, że pola formularza drukują się inaczej niż treść strony.",
    "Główny problem – puste pola na papierze – dzieje się, bo wypełnione odpowiedzi żyją w warstwie pól formularza, a niektóre ścieżki druku całkowicie pomijają tę warstwę. Rozwiązaniem jest albo ustawienie druku uwzględniające pola formularza, albo utrwalenie formularza, żeby odpowiedzi stały się częścią strony. Pozostałe problemy dotyczą skali i renderowania pól, każdy z własnym ustawieniem.",
    "Ten poradnik skupia się na problemach z drukiem specyficznych dla formularzy. Ogólniejsze problemy z drukowaniem PDF, jak złe rozmiary stron w dowolnym dokumencie, omawia szerszy poradnik o drukowaniu.",
  ],
  steps: [
    {
      title: "Napraw puste pola: drukuj wartości pól albo utrwal",
      body: "Jeśli wypełnione pola drukują się puste, włącz opcję drukowania pól formularza (czasem „dokument i oznaczenia”), albo najpierw utrwal formularz, żeby odpowiedzi wtopiły się w stronę i zawsze się drukowały.",
    },
    {
      title: "Napraw przesunięty tekst pól",
      body: "Jeśli tekst pola drukuje się w złym miejscu albo złą czcionką, czytnik renderuje pola inaczej do druku. Utrwalenie blokuje wygląd widoczny na ekranie, więc drukuje się tak samo.",
    },
    {
      title: "Napraw brakujące pola wyboru i znaczniki",
      body: "Znaczniki znikające na papierze to ten sam problem warstwy pól co pusty tekst. Ustawienie drukowania pól formularza albo krok utrwalenia przywraca je razem z resztą Twoich odpowiedzi.",
    },
    {
      title: "Napraw ucięte krawędzie",
      body: "Ustaw skalę na „dopasuj” albo 100% zamiast własnego powiększenia i dopasuj rozmiar papieru do formularza. To problem skali, osobny od problemu z warstwą pól, ale częsty przy gęstych formularzach.",
    },
    {
      title: "Wydrukuj jedną stronę, żeby potwierdzić",
      body: "Po zmianie ustawień wydrukuj najpierw jedną stronę. Potwierdź, że odpowiedzi, wyrównanie i marginesy wyglądają dobrze, zanim zdecydujesz się na cały wielostronicowy formularz na papierze.",
    },
  ],
  tips: [
    "Utrwalenie przed drukiem to uniwersalne rozwiązanie pustych albo przesuniętych pól – utrwalony formularz drukuje swoje odpowiedzi wszędzie bez specjalnego ustawienia.",
    "Jeśli odpowiedzi widać na ekranie, ale nie na papierze, to ustawienie druku, nie plik – szukaj opcji pól formularza.",
    "Problemy ze skalą i rozmiarem papieru są osobne od problemu pustych pól; napraw je „dopasuj”/100% i pasującym papierem.",
    "Zeskanowane, nieinteraktywne formularze nie mają problemu pustych pól, bo ich odpowiedzi są już częścią strony.",
    "Nazwy opcji druku różnią się między aplikacjami i drukarkami, więc szukaj czegokolwiek wspominającego pola formularza, oznaczenia albo komentarze.",
  ],
  mobileNote:
    "Skróty druku na telefonie mogą gubić wartości pól tak samo jak te na komputerze. W aplikacji PDF Editor utrwal wypełniony formularz przed wydrukowaniem albo udostępnieniem do drukarki, żeby każda odpowiedź została wtopiona w stronę i drukowała się niezawodnie.",
  faq: [
    {
      q: "Dlaczego mój formularz drukuje się z pustymi polami?",
      a: "Wypełnione odpowiedzi są w warstwie pól formularza, a Twoja ścieżka druku ją pomija. Włącz opcję drukowania pól formularza albo utrwal formularz, żeby odpowiedzi stały się częścią strony i zawsze się drukowały.",
    },
    {
      q: "Dlaczego tekst pola drukuje się w złym miejscu albo złą czcionką?",
      a: "Czytnik renderuje pola inaczej do druku. Najpierw utrwal formularz – utrwalanie ustala wygląd na taki, jaki widzisz na ekranie, więc drukuje się identycznie.",
    },
    {
      q: "Moje znaczniki się nie drukują – dlaczego?",
      a: "Ta sama przyczyna co pusty tekst: pola wyboru są częścią warstwy pól. Ustawienie drukowania pól formularza albo krok utrwalenia drukuje je razem z resztą Twoich odpowiedzi.",
    },
    {
      q: "Dlaczego mój wydrukowany formularz jest ucięty na krawędziach?",
      a: "To niedopasowanie skali albo rozmiaru papieru, nie problem pól. Ustaw skalę na dopasuj albo 100% i dopasuj rozmiar papieru do rozmiaru strony formularza.",
    },
    {
      q: "Czym różni się to od ogólnych problemów z drukowaniem PDF?",
      a: "Ten poradnik dotyczy problemów specyficznych dla formularzy – głównie pustych wartości pól. Ogólny poradnik o drukowaniu PDF obsługuje problemy na poziomie całego dokumentu, jak złe rozmiary i przycinanie w dowolnym pliku PDF.",
    },
  ],
  related: [
    {
      label: "Jak wydrukować wypełniony formularz PDF",
      path: "/guides/how-to-print-a-filled-pdf-form",
    },
    {
      label: "Jak naprawić problemy z drukowaniem PDF",
      path: "/guides/how-to-fix-pdf-printing-issues",
    },
    { label: "Formularz PDF nie działa", path: "/guides/pdf-form-not-working" },
    { label: "Napraw błędy formularza PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formularze PDF", path: "/pdf-forms" },
};

export default content;
