import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-class-documents-as-pdf",
  h1: "Jak edytować dokumenty szkolne w PDF (adnotacje, zakreślanie, podpis)",
  description:
    "Materiały z zajęć, zestawy zadań i zgody rodziców często przychodzą jako pliki PDF. Jak je oznaczyć, wypełnić i odesłać bez drukowania – wszystko na telefonie lub laptopie.",
  updated: "2026-05-29",
  intro: [
    "Dokumenty z zajęć dziś najczęściej przychodzą właśnie jako PDF, częściej niż w jakimkolwiek innym formacie. Materiały do zakreślenia, zestawy zadań do wypełnienia, zgody do podpisania i odesłania, sylabusy do przejrzenia. Kusi, żeby wszystko wydrukować, wypełnić ręcznie i zeskanować z powrotem. To działa, ale jest wolne i daje gorszy efekt niż edycja PDF-a bezpośrednio.",
    "Nowoczesna edycja PDF dobrze radzi sobie ze wszystkimi czterema przypadkami: zakreślanie i adnotacje do czytania, wypełnianie formularzy do zadań i zgód, podpisy do zezwoleń oraz zmiany strukturalne, gdy trzeba dodać stronę. Większość z tego da się zrobić w karcie przeglądarki albo w aplikacji mobilnej bez płacenia za oprogramowanie.",
    "Ten poradnik omawia każdy przypadek – jakie jest właściwe narzędzie, co robi, a czego nie, i jak odesłać czystą, wypełnioną kopię. Zakłada, że nie chcesz niczego drukować, jeśli nie musisz.",
  ],
  steps: [
    {
      title: "Do czytania i adnotacji: zakreślaj i komentuj",
      body: "Większość czytników PDF (i aplikacja PDF Editor) obsługuje zakreślanie, podkreślanie i komentarze w formie karteczek. Używaj ich do aktywnego czytania; adnotacje zostają w pliku i przetrwają udostępnianie.",
    },
    {
      title: "Do prawdziwych pól formularza: dotknij i wypełnij",
      body: "PDF-y zaprojektowane jako formularze mają prawdziwe, interaktywne pola. Dotknij każdego, wpisz tekst, przejdź do następnego. Efekt wygląda identycznie jak praca wydrukowana i wypełniona na maszynie.",
    },
    {
      title: "Dla PDF-ów nieinteraktywnych (bez pól formularza): dodaj pola tekstowe",
      body: "Zeskanowane materiały bez prawdziwych pól wymagają nałożenia pól tekstowych na puste miejsca. Aplikacja PDF Editor to obsługuje; efekt wygląda schludniej niż odręczne odpowiedzi na wydruku.",
    },
    {
      title: "Do podpisów: Podpisz PDF",
      body: "Podpisz PDF pozwala narysować lub wpisać podpis bezpośrednio na formularzu. Do zgód i zezwoleń odręczny podpis to właściwy wybór.",
    },
    {
      title: "Do dodawania stron: łączenie",
      body: "Jeśli Twoja odpowiedź jest dłuższa niż miejsce przewidziane na materiale, Połącz PDF pozwala dołączyć dodatkowe strony. Zachowaj właściwą kolejność; oryginalne strony pozostają nienaruszone.",
    },
    {
      title: "Zapisz jako nowy plik, nie nadpisuj oryginału",
      body: "Zapisz wypełnioną wersję pod nową nazwą (Material3_Wypelniony_Nazwisko.pdf). Pusty oryginał zostaje nietknięty na wypadek, gdybyś musiał go powtórzyć albo udostępnić koledze z grupy.",
    },
  ],
  tips: [
    "Najpierw sprawdź, czy PDF ma prawdziwe pola formularza. Jeśli dotknięcie pustej linii otwiera kursor do pisania, to prawdziwy formularz. Jeśli nic się nie dzieje, potrzebujesz nakładki z polami tekstowymi.",
    "Używaj spójnego rozmiaru tekstu dla wpisywanych odpowiedzi – dopasuj go do rozmiaru tekstu w dokumencie, jeśli da się to ocenić.",
    "Nie drukuj, żeby wypełnić, chyba że to absolutnie konieczne. Zeskanowana z powrotem wersja zawsze jest mniej czytelna niż wypełniona cyfrowo.",
    "Zapisz plik przed podpisaniem. Podpis zwykle utrwala część pliku; wersja sprzed podpisu jest tą edytowalną.",
    "Potwierdź wypełnione formularze, eksportując je potem do PDF – niektóre narzędzia zapisują stan wypełnialny osobno, a wyeksportowany PDF utrwala Twoje odpowiedzi.",
  ],
  mobileNote:
    "Wiele dokumentów z zajęć przychodzi na telefon i musi tą samą drogą wrócić. Aplikacja PDF Editor obsługuje adnotacje, wypełnianie formularzy, podpis i łączenie na iOS i Androidzie, więc materiał nie musi czekać na dostęp do laptopa, żeby wrócić wypełniony.",
  faq: [
    {
      q: "Czy mogę edytować PDF w przeglądarce?",
      a: "W ograniczonym zakresie tak – wypełnianie formularzy i adnotacje działają w wielu przeglądarkach. Do edycji tekstu i zmian strukturalnych prawdziwy edytor (w przeglądarce lub jako aplikacja) daje więcej możliwości.",
    },
    {
      q: "Dlaczego mój materiał nie ma prawdziwych pól formularza?",
      a: "Albo prowadzący wyeksportował go bez włączenia pól, albo plik jest skanem. Użyj nakładki z polami tekstowymi na pustych liniach.",
    },
    {
      q: "Czy podpisane PDF-y są akceptowane w formularzach szkolnych?",
      a: "Coraz częściej tak. Niektóre formularze prawne (konkretne zgody wymagane prawem w niektórych jurysdykcjach) wciąż mogą wymagać podpisu odręcznego – sprawdź instrukcję na formularzu.",
    },
    {
      q: "Czy zawsze powinienem zapisywać jako nowy plik?",
      a: "Przy pracach szkolnych – tak. Zachowanie pustego oryginału pozwala powtórzyć próbę albo udostępnić plik bez ponownego pobierania.",
    },
    {
      q: "Jak dodać stronę do PDF-a, który wypełniam?",
      a: "Napisz dodatkową treść jako osobny PDF, a potem połącz je narzędziem Połącz PDF. Umieść dodaną stronę tam, gdzie logicznie powinna się znaleźć.",
    },
  ],
  related: [
    { label: "Edytor PDF — edytuj tekst i obrazy na telefonie", path: "/pdf-editor" },
    { label: "Podpisz PDF — dodaj podpis elektroniczny", path: "/sign-pdf" },
    { label: "Jak wypełniać formularze PDF na telefonie", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Jak dodawać adnotacje do PDF na telefonie", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "Edytor PDF — edytuj tekst, obrazy i strony", path: "/pdf-editor" },
};

export default content;
