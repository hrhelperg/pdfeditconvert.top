import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-notes-to-pdf",
  h1: "Jak zeskanować odręczne notatki do PDF (czytelne, przeszukiwalne)",
  description:
    "Zamień strony odręcznych notatek z wykładu w czyste, wielostronicowe pliki PDF za pomocą aparatu w telefonie. Ustawienia, które dają czytelne skany już za pierwszym razem.",
  updated: "2026-05-29",
  intro: [
    "Odręczne notatki z wykładu wciąż są najszybszym sposobem na zapisanie zajęć, a mimo to większość studentów zostawia je na papierze zamiast je digitalizować – bo skany zwykle wychodzą kiepsko. Przekrzywione strony, wyblakłe, szare skany, rozdęte rozmiary plików i czas potrzebny na przerobienie tych nieudanych. Zsumowane przez cały semestr, to właśnie dlatego notatki zostają w zeszycie.",
    "Uzyskanie czystych skanów telefonem to głównie kwestia techniki i ustawień, a nie samej aplikacji. Równomierne światło, prosta kadrówka, włączony kontrast, skala szarości zamiast koloru, i wykrywanie krawędzi, jeśli narzędzie to oferuje. Dobrze uchwycona strona bardziej przypomina skan ze skanera płaskiego niż zwykłe zdjęcie.",
    "Ten poradnik prowadzi przez całą technikę od początku do końca – warunki w pokoju, które dają dobre skany, podejście do pojedynczej strony, sposób pracy przy wielu stronach i co zrobić z gotowym PDF-em. Zakłada, że masz telefon i chcesz uzyskać czysty, wielostronicowy PDF bez kupowania skanera.",
  ],
  steps: [
    {
      title: "Ułóż stronę na kontrastowym tle",
      body: "Liniowana kartka na ciemnym blacie. Zwykła biała na ciemnej tkaninie. Cokolwiek, co sprawi, że krawędź strony będzie wyraźna dla aparatu i automatycznego kadrowania. Unikaj odblasków; równomierne światło jest lepsze niż jasne.",
    },
    {
      title: "Trzymaj telefon równolegle do strony",
      body: "Aparat powinien znajdować się dokładnie nad stroną, nie pod kątem. Przekrzywienie powoduje zniekształcenie perspektywiczne, które automatyczna korekcja potrafi poprawić, ale nigdy tak dobrze jak proste ujęcie.",
    },
    {
      title: "Użyj aplikacji do skanowania z wykrywaniem krawędzi",
      body: "Skanuj do PDF albo funkcja skanowania w aplikacji PDF Editor wykrywa krawędź strony i przycina ją automatycznie. Zwykłe zdjęcie telefonem tego nie robi; aplikacja do skanowania daje efekt zbliżony do skanera płaskiego.",
    },
    {
      title: "Przełącz na tryb skali szarości lub czarno-biały",
      body: "Kolorowe skany czarnego atramentu na białym papierze są większe, bardziej zaszumione i mniej ostre. Skala szarości daje ostrzejsze, mniejsze i bardziej czytelne skany. Tryb czarno-biały jest jeszcze mniejszy, ale mniej elastyczny później.",
    },
    {
      title: "Zeskanuj każdą stronę, potem połącz",
      body: "Skanowanie wielostronicowe przechwytuje kolejne strony i automatycznie łączy je w jeden PDF. Jeśli skanowałeś oddzielnie, Połącz PDF scali je w odpowiedniej kolejności.",
    },
    {
      title: "Przytnij, obróć i uporządkuj na koniec",
      body: "Zmień kolejność stron PDF, jeśli któraś strona wyszła nie po kolei. Obróć PDF przy zdjęciach zrobionych bokiem. Poświęć minutę na porządki – przyszły Ty podziękuje obecnemu Tobie.",
    },
  ],
  tips: [
    "Zrób wszystkie skany, zanim zaczniesz porządkować – ciągłe przełączanie się między trybami zabija tempo pracy.",
    "Jeśli światło jest nierówne, pojedyncza biała kartka trzymana nad stroną jako reflektor drastycznie poprawia kontrast.",
    "Nie kadruj zbyt ciasno. Pozostawienie niewielkiego marginesu wokół krawędzi strony sprawia, że dokument wygląda mniej amatorsko.",
    "Skompresuj gotowy PDF przed zarchiwizowaniem. Notatki złożone głównie ze skanów są duże; skompresowaną wersję łatwiej później udostępnić.",
    "Dodaj stronę tytułową (napisaną na komputerze, z nazwą zajęć i datą) przed połączeniem. Zbiór sam się opisuje w Twoim archiwum.",
  ],
  mobileNote:
    "Skanowanie notatek to jedna z tych rzeczy, w których telefon naprawdę bije skaner płaski przy codziennym użyciu. Funkcja skanowania w aplikacji PDF Editor działa w całości na telefonie – przechwytywanie, wykrywanie krawędzi, kontrast, łączenie wielu stron – i tworzy czysty PDF bez przelotu przez jakikolwiek serwer.",
  faq: [
    {
      q: "Czy zeskanowane odręczne notatki będą przeszukiwalne?",
      a: "Tylko jeśli narzędzie uruchomi na nich OCR – zamieniając obraz pisma odręcznego w przeszukiwalny tekst. OCR dla pisma odręcznego jest mniej niezawodny niż dla druku; jakość zależy od charakteru pisma i samego skanu.",
    },
    {
      q: "Jakie ustawienie aparatu jest najlepsze do skanowania notatek?",
      a: "Użyj trybu skali szarości lub czarno-białego w aplikacji do skanowania z automatycznym kontrastem. Nie polegaj na standardowej aplikacji aparatu – jej zdjęcia są większe, mają mniejszy kontrast i trudniej się je czyta.",
    },
    {
      q: "Ile stron skanować podczas jednej sesji?",
      a: "Tyle, ile napisałeś przy jednym podejściu. Skanowanie co tydzień albo po każdym wykładzie jest łatwiejsze niż pozwolenie, żeby zaległości urosły przez cały semestr.",
    },
    {
      q: "Czy powinienem skanować w kolorze?",
      a: "Tylko jeśli Twoje notatki wykorzystują kolor (zakreślacze, diagramy). W innym wypadku skala szarości lub czerń i biel dają ostrzejszy i mniejszy plik.",
    },
    {
      q: "Co jeśli strona jest pogięta albo poplamiona?",
      a: "Automatyczny kontrast poradzi sobie z większością śladów zużycia papieru. Mocne zagięcia zwykle jednak przebijają się na skanie; rozważ ponowne zdjęcie albo zaakceptuj to jako materiał wyłącznie do własnej nauki.",
    },
  ],
  related: [
    { label: "Skanuj do PDF — skanowanie telefonem z wykrywaniem krawędzi", path: "/scan-to-pdf" },
    { label: "Połącz PDF — scal wielostronicowe skany", path: "/merge-pdf" },
    { label: "Jak zeskanować dokumenty do PDF telefonem", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Sposób pracy z PDF dla studentów", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "Skanuj do PDF — skanowanie telefonem", path: "/scan-to-pdf" },
};

export default content;
