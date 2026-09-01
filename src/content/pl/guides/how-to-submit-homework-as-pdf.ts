import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-submit-homework-as-pdf",
  h1: "Jak oddać pracę domową w PDF (bez dramatów z portalem)",
  description:
    "Portale szkolne odrzucają prace domowe z przewidywalnych powodów – rozmiar pliku, liczba stron, format. Najprostsza droga od gotowego zadania do zaakceptowanego pliku PDF.",
  updated: "2026-05-29",
  intro: [
    "Dwie minuty przed terminem to najgorszy moment, żeby odkryć, że portal szkolny odrzuca Twoją pracę domową. Błąd zwykle jest ogólnikowy – „nieprawidłowy plik”, „przesyłanie nie powiodło się”, „plik za duży” – a prawdziwa przyczyna to zwykle jedna z czterech przewidywalnych rzeczy: plik przekracza limit rozmiaru, format nie do końca odpowiada temu, czego oczekuje portal, liczba stron przekracza limit, albo zdjęcie zrobione telefonem tak naprawdę jeszcze nie jest plikiem PDF.",
    "Rozwiązanie w każdym przypadku jest krótkie i można je wykonać z telefonu lub laptopa, w karcie przeglądarki, bez przesyłania niczego do zewnętrznej firmy. Sztuka polega na tym, żeby wiedzieć, czego portal naprawdę oczekuje, i za pierwszym razem stworzyć dokładnie taki plik.",
    "Ten poradnik prowadzi przez całą drogę od gotowego zadania do zaakceptowanego PDF-a – łącznie z tym, jak poprawnie obsłużyć skany odręcznej pracy, zestawy zadań i prace w formatach mieszanych, np. „dokument Word plus trzy odręczne strony”.",
  ],
  steps: [
    {
      title: "Sprawdź rzeczywiste wymagania portalu",
      body: "Większość portali szkolnych gdzieś podaje limit – zwykle 5–25 MB, czasem maksymalną liczbę stron, sporadycznie konkretnie format PDF/A. Sprawdź to przed przesłaniem, a nie dopiero po odrzuceniu.",
    },
    {
      title: "Najpierw przekonwertuj wszystkie części do PDF",
      body: "Dokument Word → Word do PDF. Odręczne strony → Skanuj do PDF na telefonie. Zrzuty ekranu lub zdjęcia tablicy → Obraz do PDF. Wszystko staje się plikiem PDF, zanim zrobisz cokolwiek dalej.",
    },
    {
      title: "Połącz wszystko w jeden plik w kolejności oddawania",
      body: "Połącz PDF scala pracę pisaną na komputerze, zeskanowaną pracę i wszelkie adnotacje w jeden uporządkowany plik. Osoba oceniająca woli jeden plik zamiast trzech.",
    },
    {
      title: "Sprawdź orientację i kolejność",
      body: "Zmień kolejność stron PDF, jeśli po połączeniu coś wypadło z sekwencji. Obróć PDF, jeśli skan wyszedł bokiem. Osoba oceniająca nie powinna musieć ręcznie obracać pracy, żeby ją przeczytać.",
    },
    {
      title: "Skompresuj, by zmieścić się w limicie portalu",
      body: "Kompresuj PDF w przeglądarce zmniejsza plik. Ciężkie skany chudną drastycznie; treść pisana na komputerze prawie się nie zmienia. Celuj w wynik wyraźnie poniżej limitu portalu, z niewielkim zapasem.",
    },
    {
      title: "Nazwij plik tak, jak wymaga tego zajęcia",
      body: "Wiele zajęć określa konwencję nazewnictwa: Nazwisko_Imie_Zadanie3.pdf. Trzymaj się jej dokładnie. Zła nazwa może kosztować punkty albo namieszać przy segregowaniu prac.",
    },
  ],
  tips: [
    "Nie oddawaj dokumentów Word na portalu, który akceptuje PDF. Word wyświetla się inaczej na komputerze osoby oceniającej; PDF utrwala wygląd pracy.",
    "Skany odręcznej pracy powinny być czarno-białe lub w skali szarości, nie kolorowe. Wychodzą mniejsze, ostrzejsze i czytelniejsze.",
    "Kompresuj mocno ciężkie skany, a nie pracę pisaną na komputerze. Strony pisane komputerowo nie kompresują się mocno; skany owszem.",
    "Przetestuj przesłanie wersji roboczej, żeby przed terminem upewnić się, że portal akceptuje Twój plik.",
    "Zapisz oddany plik również lokalnie. Kopie z portalu nie zawsze da się później odzyskać, a może zajść potrzeba wrócenia do tego, co dokładnie oddałeś.",
  ],
  mobileNote:
    "Oddawanie prac wyłącznie z telefonu to dziś normalka. Aplikacja PDF Editor obsługuje cały łańcuch na telefonie – zeskanuj odręczne strony, połącz z pracą pisaną na komputerze, skompresuj, nazwij, gotowe do przesłania – bez konieczności przesiadki na laptopa.",
  faq: [
    {
      q: "Jaki rozmiar akceptuje większość portali szkolnych?",
      a: "Zwykle 5–25 MB. Niektóre portale szkół podstawowych i średnich mają limit 2 MB. Portale uczelniane są bardziej wyrozumiałe. Sprawdź wymagania konkretnych zajęć.",
    },
    {
      q: "Czy mogę oddać pracę w Wordzie zamiast w PDF?",
      a: "Tylko jeśli portal wyraźnie to dopuszcza. Większość wymaga konkretnie PDF, żeby utrwalić formatowanie; oddanie pracy w Wordzie może kosztować punkty albo zostać automatycznie odrzucone.",
    },
    {
      q: "Czy muszę połączyć wszystko w jeden plik?",
      a: "Tak, chyba że portal obsługuje przesyłanie wielu plików naraz. Osoby oceniające wolą jeden plik; wiele portali i tak akceptuje tylko jeden.",
    },
    {
      q: "Jaki jest najczęstszy powód odrzucenia pracy?",
      a: "Rozmiar pliku. Skany szybko przekraczają limity portalu. Skompresuj plik przed oddaniem, a problem w większości przypadków znika.",
    },
    {
      q: "Czy mogę przesłać pracę z telefonu?",
      a: "Tak. Większość nowoczesnych portali szkolnych działa w mobilnych przeglądarkach i przyjmuje pliki PDF z menu udostępniania. Narzędzia na telefonie pokrywają cały łańcuch działań.",
    },
  ],
  related: [
    { label: "PDF dla studentów — notatki i materiały do nauki", path: "/pdf-for-students" },
    { label: "Skanuj do PDF — przechwytuj odręczne strony", path: "/scan-to-pdf" },
    { label: "Jak skompresować PDF na potrzeby portali szkolnych", path: "/guides/how-to-compress-pdf-for-school-portals" },
    { label: "Jak zeskanować odręczne notatki do PDF", path: "/guides/how-to-scan-notes-to-pdf" },
  ],
  parentHub: { label: "PDF dla studentów — notatki, zakreślenia i materiały do nauki", path: "/pdf-for-students" },
};

export default content;
