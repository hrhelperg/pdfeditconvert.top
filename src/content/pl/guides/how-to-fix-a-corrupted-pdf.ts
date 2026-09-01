import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-a-corrupted-pdf",
  h1: "Jak naprawić uszkodzony plik PDF (co naprawdę działa)",
  description:
    "Większość „uszkodzonych” plików PDF wcale nie jest uszkodzona – to przerwane pobieranie, niedopasowanie czytnika albo niedokończony zapis. Uczciwa lista rozwiązań, które odzyskują plik, i moment, w którym plik jest naprawdę stracony.",
  updated: "2026-05-29",
  intro: [
    "Niemal każdy PDF nazywany „uszkodzonym” jest czymś mniej dramatycznym: pobieraniem, które się nie dokończyło, czytnikiem, który odmawia odczytania odrobinę nietypowego pliku, albo zapisem przerwanym, zanim plik został zamknięty. Prawdziwe uszkodzenie – gdy bajty w środku pliku są naprawdę zniszczone – zdarza się rzadziej, niż ludzie myślą, a gdy już się zdarzy, odzyskiwanie jest co najwyżej częściowe.",
    "Powód, dla którego to ma znaczenie, jest taki, że poprawki dla tych czterech przyczyn są zupełnie różne. Ponowne pobranie zajmuje sekundy; zmiana czytnika zajmuje sekundy; ponowny eksport zajmuje minutę; prawdziwe odzyskiwanie na poziomie bajtów to godziny pracy i często niemożliwe. Wiedza, do której kategorii pasuje Twój plik, oszczędza realny czas.",
    "Ten poradnik przechodzi przez diagnozy w kolejności od najtańszej, a potem wyjaśnia, co zrobić, gdy pliku nie da się odzyskać. Większość plików wraca do życia najpóźniej na trzecim kroku.",
  ],
  steps: [
    {
      title: "Pobierz lub odbierz plik ponownie",
      body: "Przerwane pobieranie wygląda z perspektywy czytnika identycznie jak uszkodzenie. Pobierz plik jeszcze raz. Jeśli druga kopia się otwiera, pierwsza była niekompletna. Sprawdź rozmiar w bajtach względem źródła, jeśli jest podany.",
    },
    {
      title: "Wypróbuj co najmniej dwa inne czytniki",
      body: "Przeglądarki, Podgląd, czytniki mobilne i aplikacje desktopowe obsługują PDF trochę inaczej. Plik, którego odmawia Acrobat, czasem otwiera się bez problemu w Chrome. Jeśli choćby jeden czytnik go odczyta, plik nie jest naprawdę zepsuty.",
    },
    {
      title: "Otwórz plik w dowolnym działającym czytniku i wyeksportuj ponownie",
      body: "Wydruk do PDF (macOS, Windows, Linux) albo „Zapisz jako PDF” z działającego czytnika odbudowuje strukturę pliku. Nowa kopia często otwiera się w czytnikach, które odrzuciły oryginał.",
    },
    {
      title: "Wyciągnij strony pojedynczo narzędziem PDF do obrazów",
      body: "Jeśli żaden czytnik nie renderuje całego pliku, ale niektóre pokazują część treści, wyeksportuj każdą stronę jako PNG przez PDF do obrazów. Możesz potem złożyć świeży PDF z tych plików PNG narzędziem Obraz do PDF – tracąc przeszukiwalność i edytowalność, ale ratując treść.",
    },
    {
      title: "Sprawdź nagłówek pliku w zwykłym edytorze",
      body: "Otwórz plik w TextEdit, Notatniku albo VS Code. Prawdziwy PDF zaczyna się od %PDF- z numerem wersji zaraz po. Jeśli pierwsze bajty są czymś innym, plik nie jest PDF-em – został przemianowany, błędnie oznaczony albo zastąpiony.",
    },
    {
      title: "Poproś źródło o świeżą kopię",
      body: "Jeśli nic nie odzyskuje pliku, źródło wciąż ma oryginał. Wyeksportuj ponownie z Worda, Google Docs albo czegokolwiek, co go stworzyło. To jedyna droga, która przywraca pełną jakość.",
    },
  ],
  tips: [
    "Nie edytuj ani nie łącz dalej pliku, który zachowuje się dziwnie. Wbudujesz zepsucie w nowy plik.",
    "Zachowaj zepsuty oryginał bezpiecznie przed jakąkolwiek próbą naprawy. Narzędzia naprawcze czasem nadpisują pliki, a zepsuty plik może zawierać częściową treść, którą byś stracił.",
    "Pliki, które zawodzą zaraz po przerwaniu zapisu (zanik zasilania, wymuszone zamknięcie w trakcie zapisywania), są często nie do uratowania – indeks strukturalny na końcu pliku nigdy nie został zapisany.",
    "Unikaj stron „naprawa PDF”, które obiecują cuda. Zwykle robią ten sam ponowny eksport przez wydruk do PDF, który możesz zrobić sam, a przy okazji przesyłają Twój plik.",
    "PDF-y odzyskane przez obrazy tracą cały prawdziwy tekst i przeszukiwalność. Sięgaj po tę drogę tylko dla plików, w których liczy się treść bardziej niż wierność pliku.",
  ],
  mobileNote:
    "Na telefonie zwykłą przyczyną „uszkodzonego” PDF-a jest niestabilne pobieranie przez sieć komórkową. Aplikacja PDF Editor przechowuje pliki lokalnie i pozwala ponownie pobrać i otworzyć plik, co usuwa problem obcięcia bez konieczności przechodzenia przez komputer.",
  faq: [
    {
      q: "Jaka jest najczęstsza przyczyna uszkodzonego PDF-a?",
      a: "Pobieranie, które się nie dokończyło. Plik jest technicznie niekompletny, nie uszkodzony, ale czytniki nie widzą różnicy. Ponowne pobranie naprawia większość przypadków.",
    },
    {
      q: "Czy istnieją prawdziwe narzędzia do naprawy PDF-ów?",
      a: "Niektóre komercyjne narzędzia twierdzą, że naprawiają, ale większość z tego, co robią, to ten sam ponowny eksport przez wydruk do PDF, który możesz zrobić sam za darmo. Prawdziwa naprawa strukturalna poważnie uszkodzonych PDF-ów to praca dla specjalisty.",
    },
    {
      q: "Czy kompresja pomoże uszkodzonemu PDF-owi?",
      a: "Tylko jeśli narzędzie do kompresji potrafi go odczytać. Jeśli Twój czytnik nie może go otworzyć, żaden kompresor też nie potrafi. Kompresja nie jest techniką naprawy.",
    },
    {
      q: "Dlaczego mój odzyskany plik traci pola formularza?",
      a: "Wydruk do PDF spłaszcza elementy interaktywne w statyczne piksele. Pola formularza, adnotacje i podpisy stają się obrazami. Jeśli ich potrzebujesz z powrotem, poproś źródło o nowy plik.",
    },
    {
      q: "Czy wyodrębnianie obrazów zawsze ratuje treść?",
      a: "Tylko jeśli jakikolwiek czytnik w ogóle potrafi wyrenderować strony. Jeśli plik jest nieczytelny wszędzie, nawet narzędzie do wyodrębniania obrazów zawiedzie.",
    },
  ],
  related: [
    { label: "PDF do obrazów — wyodrębnij strony do odzyskania", path: "/pdf-to-images" },
    { label: "Obraz do PDF — złóż strony ponownie po ratowaniu", path: "/image-to-pdf" },
    { label: "Dlaczego mój PDF się nie otwiera?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Dlaczego mój PDF jest pusty?", path: "/guides/why-is-my-pdf-blank" },
  ],
  parentHub: { label: "Narzędzia PDF — darmowe, w przeglądarce", path: "/pdf-tools" },
};

export default content;
