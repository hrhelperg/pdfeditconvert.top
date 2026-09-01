import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-font-issues",
  h1: "Jak naprawić problemy z czcionkami w PDF (brakujące, zastąpione, poplątane)",
  description:
    "Gdy PDF pokazuje złą czcionkę, kwadraciki zamiast znaków albo zastąpiony tekst, zwykle brakuje w nim osadzonej czcionki. Jak działa osadzanie czcionek i co zmienić przy eksporcie.",
  updated: "2026-05-29",
  intro: [
    "Gdy PDF pokazuje kwadraciki zamiast znaków, albo wszędzie złą czcionkę, albo dziwne odstępy, których nie było w oryginale, to problem z czcionką. PDF-y odwołują się do czcionek po nazwie; czytnik musi albo znaleźć tę czcionkę w systemie, albo mieć ją osadzoną wewnątrz pliku. Jeśli żadne z tego nie jest prawdą, widzisz zastąpienie – w najlepszym razie zbliżony odpowiednik, w najgorszym kwadraciki.",
    "Właściwą poprawką jest niemal zawsze ponowny eksport z osadzonymi czcionkami. Gdy czcionka jest osadzona, plik niesie ze sobą dane glifów i wygląda poprawnie wszędzie. Ceną jest nieco większy plik, ale przy większości czcionek różnica jest znikoma w porównaniu z samym dokumentem.",
    "Ten poradnik wyjaśnia, jak naprawdę działa osadzanie czcionek, przechodzi przez najczęstsze objawy i pokazuje poprawki – łącznie z sytuacją, gdy ponowny eksport nie jest możliwy i trzeba spłaszczyć plik do obrazów.",
  ],
  steps: [
    {
      title: "Potwierdź, że plik renderuje zastąpione czcionki",
      body: "Otwórz plik w dwóch różnych czytnikach. Jeśli oba pokazują tę samą złą czcionkę, czcionki nie są osadzone. Jeśli jeden czytnik jest poprawny, a drugi nie, to niewłaściwemu czytnikowi brakuje czcionki i ją zastępuje.",
    },
    {
      title: "Wyeksportuj ponownie z osadzonymi wszystkimi czcionkami",
      body: "W Wordzie, Pages, Docs i w większości narzędzi projektowych ustawienia eksportu PDF zawierają opcję „osadź wszystkie czcionki”. Włączenie jej dodaje dane czcionki do pliku i sprawia, że renderuje się spójnie wszędzie.",
    },
    {
      title: "Użyj wydruku do PDF jako rozwiązania awaryjnego",
      body: "Jeśli nie możesz przełączyć osadzania czcionek w aplikacji źródłowej, otwórz dokument w dowolnym czytniku, który wyświetla go poprawnie, i wydrukuj do PDF. Nowa kopia zapieka wyrenderowane glify jako raster – większy i nieprzeszukiwalny, ale niezawodny.",
    },
    {
      title: "Sprawdź, czy nie masz licencjonowanych czcionek, których nie da się osadzić",
      body: "Niektóre komercyjne czcionki mają ograniczenia osadzania. Aplikacja źródłowa Cię ostrzeże. Realistyczną poprawką jest zamiana na podobną czcionkę pozwalającą na osadzenie albo zrastrowanie dotkniętego tekstu do obrazów.",
    },
    {
      title: "Przekonwertuj na Word, popraw tekst, wyeksportuj ponownie",
      body: "Jeśli zastąpienie już poplątało tekst, a masz tylko PDF, PDF do Word wyciąga to, co da się odzyskać. Uporządkuj, ustaw czcionki, które masz, wyeksportuj ponownie do świeżego PDF-a.",
    },
    {
      title: "Spłaszcz do obrazów, gdy nic innego nie działa",
      body: "PDF do obrazów eksportuje każdą stronę jako PNG w wysokiej rozdzielczości. Jeśli złożysz je z powrotem narzędziem Obraz do PDF, wynik nie ma żywego tekstu – tylko obrazy – ale renderowanie czcionki jest już utrwalone dla każdego czytnika.",
    },
  ],
  tips: [
    "Nie używaj czcionek, których nie da się osadzić, w ważnych dokumentach – plik zawsze będzie podatny na zastąpienie.",
    "Czcionki internetowe i pobrane czcionki ozdobne najczęściej sprawiają problemy z osadzaniem. Czcionki systemowe (Arial, Times, Helvetica, Calibri) osadzają się bezproblemowo.",
    "Osadzanie czcionek jako „podzbioru” (tylko używane znaki) utrzymuje mały rozmiar pliku. Większość narzędzi eksportu domyślnie stosuje podzbiory i to właściwy wybór.",
    "Jeśli zły jest tylko jeden znak (na przykład ułamek albo symbol specjalny), czcionce brakuje tego glifu. Zamień znak źródłowy na odpowiednik Unicode.",
    "Po spłaszczeniu do obrazów spodziewaj się utraty kopiowania-wklejania i OCR. Sięgaj po tę drogę tylko wtedy, gdy wierność renderowania liczy się bardziej niż przeszukiwalność.",
  ],
  mobileNote:
    "Czytniki na telefonie często mają zainstalowanych mniej czcionek niż komputery, więc pliki bez osadzonych czcionek wyglądają najgorzej na urządzeniach mobilnych. Aplikacja PDF Editor pokazuje ostrzeżenia o zastąpionych czcionkach i pozwala ponownie wyeksportować dokumenty z zapieczonymi czcionkami, co utrzymuje spójny wygląd na iOS, Androidzie i czytnikach na komputerze.",
  faq: [
    {
      q: "Co dokładnie robi „osadzanie czcionek”?",
      a: "Pakuje dane glifów czcionki wewnątrz samego PDF-a, więc każdy czytnik może poprawnie wyrenderować tekst bez potrzeby lokalnie zainstalowanej czcionki.",
    },
    {
      q: "Dlaczego widzę kwadraciki zamiast liter?",
      a: "Czcionka nie jest zainstalowana w systemie i nie została osadzona. Czytnik nie może jej zastąpić, bo nie wie, jakie glify rysować, więc pokazuje kwadracik brakującego znaku.",
    },
    {
      q: "Czy mogę dodać czcionkę do PDF-a po eksporcie?",
      a: "Nie w czysty sposób. Ponowny eksport ze źródła to właściwa droga. Są narzędzia obiecujące osadzenie po fakcie, ale większość produkuje wadliwe pliki.",
    },
    {
      q: "Dlaczego mój wyeksportowany PDF jest większy, gdy osadzam czcionki?",
      a: "Bo dane czcionki są teraz w pliku. Wzrost jest zwykle niewielki, chyba że osadzasz wiele rodzin czcionek. Podzbiory (tylko używane znaki) utrzymują niski rozmiar.",
    },
    {
      q: "Czy kompresja usunie osadzone czcionki?",
      a: "Nie. Kompresja PDF-a celuje w obrazy, nie w tekst czy czcionki. Kompresowanie PDF-a z osadzonymi czcionkami go nie psuje.",
    },
  ],
  related: [
    { label: "PDF do Word — odzyskaj tekst z zastąpionych czcionek", path: "/pdf-to-word" },
    { label: "PDF do obrazów — spłaszcz jako ostateczność", path: "/pdf-to-images" },
    { label: "Jak naprawić problemy z formatowaniem PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Jak naprawić problemy z drukowaniem PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Konwerter PDF — Word, JPG, PNG i z powrotem", path: "/pdf-converter" },
};

export default content;
