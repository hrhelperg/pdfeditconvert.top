import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-wont-my-pdf-open",
  h1: "Dlaczego mój PDF się nie otwiera? Przyczyny i praktyczne rozwiązania",
  description:
    "PDF, który nie chce się otworzyć, to niemal zawsze jedna z pięciu przyczyn. Jak rozpoznać uszkodzone pobieranie, blokadę hasłem, błąd czytnika czy stary plik – i co naprawia każdą z nich.",
  updated: "2026-05-29",
  intro: [
    "Klikasz dwukrotnie PDF i nic się nie dzieje. Albo czytnik pokazuje błąd, zawiesza się, albo wyskakuje okno z hasłem, którego się nie spodziewałeś. PDF-y sprawiają wrażenie, że po prostu powinny działać, i przez większość czasu tak jest – więc gdy któryś nie działa, warto znać krótką listę powodów.",
    "Za upartym PDF-em stoi tak naprawdę garstka przyczyn: pobieranie było niekompletne, plik jest zabezpieczony hasłem, czytnik nie pasuje do wersji PDF-a, plik powstał w wyniku wadliwego eksportu, albo to format, który tylko wygląda jak PDF. Każda z nich ma konkretne, powtarzalne rozwiązanie.",
    "Ten poradnik przechodzi przez diagnozy jedna po drugiej, w kolejności, w jakiej warto je sprawdzać, z właściwym narzędziem do każdej. Większość poprawek polega na rozpoznaniu, z którym problemem masz do czynienia, nie na nauce jakiejś zaawansowanej sztuczki.",
  ],
  steps: [
    {
      title: "Zanim zrobisz cokolwiek innego, pobierz plik ponownie",
      body: "Przerwane pobieranie to zdecydowanie najczęstszy powód, dla którego PDF się nie otwiera. Ponowne pobranie pliku naprawia to w kilka sekund. Jeśli nadal zawodzi, rozmiar pliku zgadza się ze źródłem, a źródło nadal go wczytuje – wykluczyłeś uszkodzone pobieranie.",
    },
    {
      title: "Sprawdź, czy plik jest zabezpieczony hasłem",
      body: "Niektóre czytniki pokazują ogólny błąd zamiast pytania o hasło. Jeśli plik pochodzi z banku, pracodawcy albo dostawcy usług prawnych, zakładaj, że jest hasło. Pierwotny nadawca będzie je znał.",
    },
    {
      title: "Wypróbuj inny czytnik PDF",
      body: "Przeglądarki, Podgląd na macOS, Adobe Acrobat i czytniki mobilne wszystkie parsują PDF-y odrobinę inaczej. Plik, którego jeden czytnik odmawia otworzyć, często otwiera się bez problemu w innym. Jeśli karta przeglądarki działa, a aplikacja na komputerze nie, patrzysz na niedopasowanie wersji czytnika, nie na uszkodzony plik.",
    },
    {
      title: "Sprawdź faktyczny typ pliku",
      body: "Pliki przychodzące mailem albo z czatu czasem mają rozszerzenie .pdf, ale w rzeczywistości są plikiem .docx, .html, obrazem albo archiwum ZIP. Otwarcie w zwykłym edytorze tekstu ujawnia pierwsze kilka bajtów. Prawdziwy PDF zaczyna się od %PDF-. Cokolwiek innego oznacza, że trzeba zmienić nazwę albo poprosić o plik ponownie.",
    },
    {
      title: "Napraw przez ponowny eksport",
      body: "Jeśli plik jest w rzeczywistości poprawny, ale uszkodzony w subtelny sposób, otwarcie go w czytniku, który wciąż potrafi go wyświetlić, i wydrukowanie do PDF albo ponowny eksport często daje czystą kopię. Niektóre zniekształcone obiekty zostają przepisane, a nowy plik otwiera się wszędzie.",
    },
    {
      title: "Zmniejsz jego rozmiar, jeśli ograniczeniem jest pamięć",
      body: "Na starszych telefonach bardzo duże pliki PDF pełne skanów mogą w ogóle nie chcieć się otworzyć. Kompresuj PDF w przeglądarce zmniejsza plik na miejscu; skompresowana kopia otwiera się tam, gdzie oryginał nie chciał.",
    },
  ],
  tips: [
    "Porównaj rozmiar pobranego pliku z tym, co podał nadawca. Niezgodność wskazuje wprost na przerwane pobieranie.",
    "Jeśli przeglądarka otwiera PDF, a Twoja aplikacja na komputerze nie, na razie ustaw otwieranie w przeglądarce – nic nie tracisz i idziesz dalej.",
    "Plik, który otwiera się na telefonie, ale zawodzi na laptopie (albo odwrotnie), to zwykle kwestia wersji czytnika, nie uszkodzony plik. Wybierz czytnik, który działa.",
    "Gdy załączone do maila pliki PDF stale zawodzą, spróbuj pobrać je z interfejsu poczty w przeglądarce zamiast z aplikacji desktopowej – aplikacje czasem obcinają duże załączniki.",
    "Zachowaj oryginały przed próbami naprawy przez ponowny eksport. Zły ponowny eksport może zgubić pola formularza albo adnotacje, które oryginał zachowywał.",
  ],
  mobileNote:
    "Na telefonie najczęstszym winowajcą jest niepełne pobieranie przez niestabilną sieć komórkową. Aplikacja PDF Editor przechowuje pliki lokalnie i pozwala ponownie pobrać i otworzyć duże pliki PDF bez polegania na buforowaniu przeglądarki, gdzie najczęściej dochodzi do obcięcia.",
  faq: [
    {
      q: "Dlaczego mój PDF pokazuje, że jest uszkodzony, skoro nadawca twierdzi, że jest w porządku?",
      a: "Niemal zawsze to częściowe pobieranie. Pobierz plik ponownie; sprawdź, czy rozmiar w bajtach zgadza się z tym, co udostępnił nadawca. Jeśli nowa kopia się otwiera, oryginalna kopia była niekompletna.",
    },
    {
      q: "Mój czytnik prosi o hasło, którego nie mam. Co teraz?",
      a: "Tylko pierwotny nadawca może je udostępnić. Nie ma bezpiecznego sposobu, żeby obejść prawdziwe hasło PDF-a po stronie odbiorcy, a narzędzi, które to obiecują, należy unikać.",
    },
    {
      q: "Dlaczego otwiera się w Chrome, ale nie w Acrobacie?",
      a: "Starsze czytniki na komputer mogą nie obsługiwać nowszych funkcji PDF-a. Albo zostań przy czytniku, który działa, albo ponownie wyeksportuj plik przez krok wydruku do PDF, żeby uzyskać zgodną kopię.",
    },
    {
      q: "Czy istnieje narzędzie, które po prostu „naprawia” zepsute PDF-y?",
      a: "Czasami – przepuszczenie pliku przez ponowny eksport (otwórz, wydrukuj do PDF, zapisz) porządkuje drobne problemy strukturalne. Ale poważnie uszkodzone PDF-y zwykle da się już tylko odpuścić.",
    },
    {
      q: "Czy kompresja pomaga przy plikach, które się nie otwierają?",
      a: "Tylko jeśli przyczyną jest pamięć: ogromne PDF-y pełne skanów czasem zawodzą na starszych telefonach. Kompresuj PDF sprowadza je do rozmiaru wystarczająco małego, by się wczytały. Nie naprawi to strukturalnie uszkodzonego pliku.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — zmniejsz duże pliki, które się nie otwierają", path: "/compress-pdf" },
    { label: "Narzędzia PDF — pełna lista poprawek w przeglądarce", path: "/pdf-tools" },
    { label: "Jak naprawić uszkodzony plik PDF", path: "/guides/how-to-fix-a-corrupted-pdf" },
    { label: "Jak naprawić problemy z formatowaniem PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
  ],
  parentHub: { label: "Narzędzia PDF — darmowe, w przeglądarce", path: "/pdf-tools" },
};

export default content;
