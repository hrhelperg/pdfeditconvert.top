import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-upload-errors",
  h1: "Jak naprawić błędy przesyłania PDF na portal (za duży, odrzucony, zawieszony)",
  description:
    "Portale odrzucają pliki PDF z kilku powodów: rozmiar, liczba stron, sztywność formatu albo niestabilne przesyłanie. Jak rozpoznać, który z nich Cię dotyczy, i sprawić, żeby plik został zaakceptowany za następnym razem.",
  updated: "2026-05-29",
  intro: [
    "Portale do przesyłania plików są bardziej rygorystyczne niż poczta e-mail. Wiele odrzuca wszystko powyżej 5 MB, niektóre powyżej 2 MB, niektóre odmawiają plików wielostronicowych, a jeszcze inne po cichu zawodzą przy wszystkim, co nie jest w pełni zgodne z PDF/A. Komunikaty o błędach, które pokazują, rzadko są konkretne – „plik zbyt duży”, „nieprawidłowy format”, „przesyłanie nie powiodło się” – a większość z nich znaczy coś innego, niż mówi.",
    "Prawdziwe przyczyny to zwykle jedna z czterech: plik przekracza limit portalu, wewnętrzny format pliku jest niestandardowy, Twoje połączenie zawiodło w trakcie przesyłania, albo portal oczekuje konkretnej odmiany PDF-a (PDF/A, pojedyncza strona, niska wersja). Każda ma inną poprawkę, a właściwa poprawka zależy od tego, która to.",
    "Ten poradnik przechodzi przez diagnozy według objawu i pokazuje, jak naprawić każdą w przeglądarce. Większość nieudanych przesyłek udaje się za drugim razem, gdy zajmiesz się prawdziwą przyczyną.",
  ],
  steps: [
    {
      title: "Odczytaj komunikat o błędzie dosłownie",
      body: "„Plik przekracza limit rozmiaru” oznacza kompresję. „Nieprawidłowy plik” oznacza format. „Przesyłanie nie powiodło się” zwykle oznacza sieć. Traktuj słowa jako pierwszy dowód, nawet gdy są zwięzłe.",
    },
    {
      title: "Skompresuj mocno, jeśli problemem jest rozmiar",
      body: "Kompresuj PDF w przeglądarce znacząco zmniejsza pliki, zwłaszcza te pełne skanów. Wypróbuj najpierw najsilniejszą kompresję; jeśli jakość spada za bardzo, cofnij się o jeden poziom. Niektóre portale mają limit 2 MB – większość kompresorów sprowadza typowy dokument wyraźnie poniżej tego.",
    },
    {
      title: "Podziel duży wielostronicowy PDF, jeśli trzeba",
      body: "Jeśli portal akceptuje wiele mniejszych plików, ale odrzuca jeden duży, Podziel PDF albo Wyodrębnij strony PDF pozwala rozbić plik na sekcje. Ponumeruj części wyraźnie w nazwie pliku, żeby odbiorca mógł je z powrotem połączyć.",
    },
    {
      title: "Wyeksportuj ponownie do standardowego PDF, jeśli format jest odrzucany",
      body: "Niektóre portale akceptują tylko pliki zapisane jako PDF 1.4 albo PDF/A. Najprostszą poprawką jest otwarcie pliku w dowolnym czytniku i wydruk do PDF – wynikowa kopia jest prosta, standardowa i zwykle akceptowana.",
    },
    {
      title: "Sprawdź liczbę stron i wymiary",
      body: "Portale rządowe i edukacyjne czasem ograniczają liczbę stron albo rozmiar papieru. Jeśli portal wymienia wymagania, dopasuj się do nich: tylko Letter albo A4, brak stron ponadwymiarowych, brak przezroczystych teł. Wyodrębnij strony PDF usuwa wszystko, co przekracza limit.",
    },
    {
      title: "Spróbuj ponownie na stabilnym połączeniu",
      body: "Utrata Wi-Fi w trakcie przesyłania wygląda tak samo jak odrzucenie. Zmień sieć albo spróbuj na innym połączeniu, zanim uznasz, że problemem jest sam plik.",
    },
  ],
  tips: [
    "Kompresuj przed podziałem. Skompresowany pojedynczy plik często mieści się w limicie; jeśli nadal nie, podziel skompresowaną kopię.",
    "Unikaj szyfrowania albo zabezpieczania hasłem przy przesyłaniu na portale – wiele blokuje zabezpieczone pliki, nawet jeśli akceptuje samą treść.",
    "Uważaj na ukryte limity znaków w nazwach plików. Niektóre portale odrzucają nazwy ze spacjami, akcentami czy interpunkcją.",
    "Jeśli portal akceptuje JPG, ale odrzuca PDF, możesz wyeksportować strony PDF do obrazów narzędziem PDF do obrazów i przesłać je – przydatne przy wymaganiach obejmujących tylko obrazy, jak przesyłanie dowodu tożsamości.",
    "Zawsze potwierdź, że udane przesłanie faktycznie się zakończyło (niektóre portale zawodzą po cichu). Odśwież stronę potwierdzenia i szukaj potwierdzenia, nie tylko braku błędu.",
  ],
  mobileNote:
    "Przesyłanie z telefonu zawodzi częściej niż z laptopa po prostu dlatego, że połączenie częściej się urywa. Aplikacja PDF Editor kompresuje i dzieli pliki offline, więc sam krok przesyłania jest krótki – mniejszy plik przesyła się szybciej i przetrwa niestabilną sieć.",
  faq: [
    {
      q: "Do jakiego rozmiaru ograniczają pliki najczęściej portale?",
      a: "Typowe limity to 2 MB, 5 MB i 10 MB. Portale rządowe i akademickie bywają najbardziej rygorystyczne; portale komercyjne są bardziej wyrozumiałe. Sprawdź sekcję pomocy portalu, jeśli nie jest to podane od razu.",
    },
    {
      q: "Czy kompresja zawsze rozwiązuje odrzucenie z powodu rozmiaru?",
      a: "Zwykle tak, zwłaszcza przy plikach pełnych skanów. 30-megabajtowy skan często kompresuje się czysto poniżej 5 MB. Pliki tylko tekstowe, które już są małe, nie skompresują się dużo bardziej.",
    },
    {
      q: "Dlaczego portal odrzuca mój plik jako „nieprawidłowy”?",
      a: "Albo plik naprawdę nie jest PDF-em (niektóre pobrania są błędnie nazwane), albo korzysta z funkcji PDF, których nie obsługuje parser portalu. Ponowny eksport przez wydruk do PDF daje bazową kopię, która niemal zawsze jest akceptowana.",
    },
    {
      q: "Czy mogę obejść limit rozmiaru, pakując plik do ZIP?",
      a: "Prawie nigdy. Portale ograniczające PDF-y zwykle ograniczają też całkowity rozmiar przesyłki i całkowicie odrzucają archiwa ZIP. Skompresowanie samego PDF-a to właściwa droga.",
    },
    {
      q: "Co, jeśli portal chce konkretnie PDF/A?",
      a: "PDF/A to odmiana archiwalna. Microsoft Word i Google Docs mogą eksportować bezpośrednio do niej. W innym wypadku otwórz plik, wydrukuj do PDF i sprawdź opcje eksportu pod kątem ustawienia zgodnego z A.",
    },
  ],
  related: [
    { label: "Kompresuj PDF — zmniejsz, by zmieścić się w limicie portalu", path: "/compress-pdf" },
    { label: "Podziel PDF — rozbij duże pliki na akceptowane części", path: "/split-pdf" },
    { label: "Jak zmniejszyć PDF przed przesłaniem na portal", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
    { label: "Jak zmniejszyć rozmiar PDF do wysyłki mailem", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Kompresuj PDF — zmniejsz rozmiar w przeglądarce", path: "/compress-pdf" },
};

export default content;
