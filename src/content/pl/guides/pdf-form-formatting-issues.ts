import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-formatting-issues",
  h1: "Problemy z formatowaniem formularza PDF (wyrównanie i przepełnienie)",
  description:
    "Pola są źle wyrównane, odpowiedzi wychodzą poza obszar, formularz wygląda inaczej na czyimś ekranie? Problemy z układem formularza, które różnią się między czytnikami, i jak uzyskać spójny wynik.",
  updated: "2026-06-01",
  intro: [
    "Formularz może wyglądać idealnie na Twoim ekranie, a dotrzeć wyglądający źle na czyimś innym – pola przesunięte poza swoje linie, odpowiedzi wylewające się poza swoje pola, pola wyboru źle wyrównane, cały układ subtelnie przesunięty. Ponieważ pola formularza są rysowane przez każdy czytnik z osobna, a nie zapisane na stałe w stronie, ich dokładny wygląd może się różnić, i to jest źródło większości skarg na formatowanie formularzy.",
    "To coś innego niż ogólne problemy z formatowaniem PDF, które zwykle wynikają z marginesów i odstępów dokumentu źródłowego. Problemy z formatowaniem formularza dotyczą warstwy pól: jak pola siedzą względem strony, jak odpowiedzi mieszczą się w ich wnętrzu i jak spójnie to się renderuje w różnych aplikacjach. Rozwiązania są odpowiednio specyficzne dla formularzy.",
    "Ten poradnik omawia częste problemy z układem formularzy, dlaczego się zdarzają, i jedno najbardziej niezawodne lekarstwo – utrwalenie – które sprawia, że formularz wygląda tak samo wszędzie.",
  ],
  steps: [
    {
      title: "Potwierdź, że to różnica między czytnikami",
      body: "Otwórz formularz w dwóch różnych aplikacjach PDF. Jeśli układ się przesuwa między nimi, problemem jest renderowanie pól, nie plik – każdy czytnik rysuje pola nieco inaczej.",
    },
    {
      title: "Napraw odpowiedzi wylewające się poza pola",
      body: "Jeśli tekst wychodzi poza krawędź pola, pole jest za małe albo odpowiedź za długa. W formularzu, który kontrolujesz, powiększ pole; wypełniając formularz, trzymaj odpowiedzi w widocznym miejscu albo korzystaj z autoskalowania.",
    },
    {
      title: "Wyrównaj pola przesunięte poza swoje linie",
      body: "Pola dryfujące nad albo pod swoimi etykietami zwykle oznaczają, że pozycje pól nie pasują do strony pod spodem. Jeśli to Twój formularz, przesuń pola; jeśli nie, umieszczenie tekstu na wierzchu może być bardziej niezawodne niż walka ze źle wyrównanym polem.",
    },
    {
      title: "Utrwal dla spójnego wyniku",
      body: "Utrwalanie łączy pola ze stroną, ustalając ich pozycję i wygląd. Po utrwaleniu formularz wygląda identycznie w każdym czytniku – najbardziej niezawodne lekarstwo na zmienny układ.",
    },
    {
      title: "Preferuj nieinteraktywny szablon, gdy spójność ma kluczowe znaczenie",
      body: "Jeśli formularz musi wyglądać tak samo dla wszystkich, dobrze zaprojektowany nieinteraktywny szablon (bez warstwy pól interaktywnych) całkowicie omija różnice w renderowaniu między czytnikami.",
    },
  ],
  tips: [
    "Otwórz formularz w dwóch aplikacjach, żeby potwierdzić, że problem z układem to renderowanie czytnika, a nie uszkodzony plik.",
    "Utrwalanie to najbardziej niezawodne rozwiązanie – blokuje pozycje i wygląd pól na stronie dla każdego czytnika.",
    "Wypełniając formularz ze źle wyrównanymi polami, umieszczenie tekstu na wierzchu może trafić precyzyjniej niż walka z polem.",
    "Jeśli budujesz formularz, który musi wyglądać identycznie wszędzie, nieinteraktywny szablon omija różnice w renderowaniu pól.",
    "Wygląd formularza może się z założenia różnić między czytnikami PDF, więc „na ich ekranie wygląda źle” zwykle oznacza renderowanie, nie uszkodzenie.",
  ],
  mobileNote:
    "Aplikacja PDF Editor pozwala utrwalić uzupełniony formularz, żeby jego układ był ustalony przed wysłaniem, więc nie przesunie się na ekranie odbiorcy. W formularzach z niewygodnymi polami możesz też umieścić tekst precyzyjnie na stronie i utrwalić – spójny wynik na dowolnym urządzeniu.",
  faq: [
    {
      q: "Dlaczego mój formularz PDF wygląda inaczej na czyimś ekranie?",
      a: "Pola formularza są rysowane przez każdy czytnik z osobna, więc ich pozycja i wygląd mogą się różnić między aplikacjami. Utrwalenie formularza łączy pola ze stroną, więc wygląda identycznie wszędzie.",
    },
    {
      q: "Dlaczego moje odpowiedzi wychodzą poza pola?",
      a: "Pole jest za małe na odpowiedź, albo odpowiedź jest za długa. Powiększ pole w formularzu, który kontrolujesz, trzymaj odpowiedzi w widocznym miejscu, albo polegaj na autoskalowaniu, żeby się zmieściły.",
    },
    {
      q: "Jak naprawić pola przesunięte poza swoje linie?",
      a: "Pozycje pól nie pasują do strony pod spodem. Przesuń pola, jeśli to Twój formularz; jeśli nie, umieszczenie tekstu bezpośrednio na stronie może być bardziej niezawodne niż źle wyrównane pole.",
    },
    {
      q: "Jaki jest najbardziej niezawodny sposób, żeby układ formularza był spójny?",
      a: "Utrwal go. Utrwalanie ustala wygląd pól na stronie, więc renderuje się tak samo w każdym czytniku. Dla formularzy, które budujesz, nieinteraktywny szablon unika tego problemu od samego początku.",
    },
    {
      q: "Czym różni się to od ogólnych problemów z formatowaniem PDF?",
      a: "To dotyczy warstwy pól – wyrównania, przepełnienia, renderowania czytnika. Ogólne problemy z formatowaniem PDF zwykle wynikają z marginesów i odstępów dokumentu źródłowego, a nie jego pól formularza.",
    },
  ],
  related: [
    {
      label: "Jak naprawić problemy z formatowaniem PDF",
      path: "/guides/how-to-fix-pdf-formatting-problems",
    },
    {
      label: "Problemy z czcionką w formularzu PDF",
      path: "/guides/pdf-form-font-problems",
    },
    {
      label: "Problemy z kompatybilnością formularzy PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Dobre praktyki formularzy PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Formularze PDF", path: "/pdf-forms" },
};

export default content;
