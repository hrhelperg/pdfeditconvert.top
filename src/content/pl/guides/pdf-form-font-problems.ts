import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-font-problems",
  h1: "Problemy z czcionką w formularzu PDF (autoskalowanie, ucinanie, zamiana)",
  description:
    "Tekst w polu jest za duży, za mały albo sam się zmniejsza w trakcie pisania? Dziwactwa czcionek typowe dla pól formularza – autoskalowanie, zamiana, ucinanie – i jak uzyskać czyste, czytelne odpowiedzi.",
  updated: "2026-06-01",
  intro: [
    "Pola formularza mają własne zachowanie czcionek, oddzielone od reszty PDF-a, i to produkuje konkretny zestaw bólów głowy. Tekst kurczący się, im więcej piszesz, odpowiedzi wyglądające na ogromne w jednym polu i maleńkie w kolejnym, znaki ucięte u góry albo u dołu pola, albo inna czcionka niż etykiety formularza. To dziwactwa czcionek w polach formularza, nie ogólne problemy czcionek PDF – i większość z nich dotyczy tego, jak pole zostało skonfigurowane.",
    "Największym winowajcą jest autoskalowanie. Wiele pól jest skonfigurowanych tak, żeby automatycznie zmniejszać tekst, żeby dłuższe odpowiedzi wciąż się mieściły, dlatego Twój tekst robi się mniejszy im więcej piszesz. Inne problemy biorą się z braku osadzonej czcionki pola, przez co w niektórych czytnikach jest ona zastępowana, albo z pola po prostu za krótkiego na swój rozmiar czcionki, co ucina znaki.",
    "Ten poradnik omawia problemy czcionek specyficzne dla pól formularza, jak rozpoznać każdy z nich i co zmienić, żeby uzyskać czytelne, spójne odpowiedzi. Problemy z czcionkami w całym dokumencie, a nie w jego polach, omawia szerzej ogólny poradnik o czcionkach PDF.",
  ],
  steps: [
    {
      title: "Rozpoznaj kurczenie przez autoskalowanie",
      body: "Jeśli tekst pola robi się mniejszy w miarę dodawania znaków, pole używa autoskalowania, żeby wszystko się zmieściło. To zamierzone, ale może sprawić, że długie odpowiedzi będą maleńkie. Trzymaj odpowiedzi zwięzłe albo, jeśli kontrolujesz formularz, ustaw stały rozmiar.",
    },
    {
      title: "Napraw niespójne rozmiary między polami",
      body: "Odpowiedzi wyglądające na duże w jednym polu i małe w innym zwykle oznaczają, że każde pole ma ustawiony inny rozmiar czcionki. Jeśli to Twój formularz, ustandaryzuj rozmiar czcionki pól, żeby każda odpowiedź pasowała.",
    },
    {
      title: "Zajmij się uciętymi znakami",
      body: "Jeśli litery są ucięte u góry albo u dołu, pole jest za krótkie na swój rozmiar czcionki. Powiększ pole albo zmniejsz rozmiar czcionki (w formularzu, który kontrolujesz), albo zaakceptuj mniejszy rozmiar, wypełniając ten, którego nie kontrolujesz.",
    },
    {
      title: "Obsłuż zastąpione czcionki",
      body: "Jeśli tekst pola pokazuje się w innej czcionce niż oczekiwana, zamierzona czcionka nie jest osadzona i czytnik zastąpił ją inną. Osadzenie czcionki pola przy tworzeniu formularza utrzymuje ją spójną między czytnikami.",
    },
    {
      title: "Utrwal, żeby zablokować wygląd",
      body: "Gdy Twoje odpowiedzi wyglądają dobrze, utrwal formularz. Utrwalanie ustala tekst pól na stronie, więc jego rozmiar i czcionka wyświetlają się tak samo wszędzie, niezależnie od czytnika odbiorcy.",
    },
  ],
  tips: [
    "Autoskalowanie to zwykły powód, dla którego tekst pola kurczy się w trakcie pisania – zwięzłe odpowiedzi pozostają czytelne, albo ustaw stały rozmiar w formularzach, które budujesz.",
    "Jeśli projektujesz formularz, ustandaryzuj rozmiary czcionek pól, żeby odpowiedzi nie wyszły jako zbiór dużych i małych.",
    "Ucięte znaki oznaczają, że pole jest za krótkie na swoją czcionkę; zmień rozmiar pola albo czcionki w formularzu, który kontrolujesz.",
    "Utrwal przed wysłaniem, żeby czcionki i rozmiary Twoich pól nie mogły się przesunąć na ekranie odbiorcy.",
    "Wygląd pól może się różnić między czytnikami, więc stały, osadzony, utrwalony wynik jest najbardziej spójny.",
  ],
  mobileNote:
    "Na telefonie aplikacja PDF Editor pozwala umieścić tekst na formularzach nieinteraktywnych w wybranym przez Ciebie rozmiarze, całkowicie omijając autoskalowanie pól, i utrwalić wynik, żeby czcionka i rozmiar zostały zablokowane. Przy polach interaktywnych trzymanie odpowiedzi zwięzłych unika automatycznego kurczenia, które utrudnia czytanie długich wpisów.",
  faq: [
    {
      q: "Dlaczego tekst w moim formularzu kurczy się w trakcie pisania?",
      a: "Pole używa autoskalowania, które zmniejsza tekst, żeby dłuższe odpowiedzi wciąż się mieściły. To zamierzone zachowanie. Trzymaj odpowiedzi zwięzłe, żeby zostały czytelne, albo ustaw stały rozmiar czcionki, jeśli kontrolujesz formularz.",
    },
    {
      q: "Dlaczego moje odpowiedzi pojawiają się w różnych rozmiarach?",
      a: "Prawdopodobnie każde pole ma ustawiony własny rozmiar czcionki. W formularzu, który sam zbudowałeś, ustandaryzuj rozmiar czcionki pól, żeby każda odpowiedź pasowała. W formularzu, którego nie stworzyłeś, rozmiary są zaszyte w polach.",
    },
    {
      q: "Dlaczego znaki w moich polach formularza są ucięte?",
      a: "Pole jest za krótkie na swój rozmiar czcionki, co ucina litery. Powiększ pole albo zmniejsz rozmiar czcionki w formularzu, który kontrolujesz, albo użyj mniejszego rozmiaru, wypełniając ten, którego nie kontrolujesz.",
    },
    {
      q: "Dlaczego czcionka pola wygląda inaczej niż etykiety?",
      a: "Zamierzona czcionka pola nie jest osadzona, więc Twój czytnik zastąpił ją inną. Osadzenie czcionki pola przy tworzeniu formularza utrzymuje ją spójną między różnymi czytnikami.",
    },
    {
      q: "Czym różni się to od ogólnych problemów z czcionkami PDF?",
      a: "To dotyczy czcionek wewnątrz pól formularza – autoskalowania, rozmiaru na poziomie pola, ucinania. Ogólny poradnik o czcionkach PDF omawia brakujące albo zastąpione czcionki w całym dokumencie.",
    },
  ],
  related: [
    {
      label: "Jak naprawić problemy z czcionkami w PDF",
      path: "/guides/how-to-fix-pdf-font-issues",
    },
    {
      label: "Problemy z formatowaniem formularza PDF",
      path: "/guides/pdf-form-formatting-issues",
    },
    { label: "Dobre praktyki formularzy PDF", path: "/guides/pdf-form-best-practices" },
    { label: "Napraw błędy formularza PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formularze PDF", path: "/pdf-forms" },
};

export default content;
