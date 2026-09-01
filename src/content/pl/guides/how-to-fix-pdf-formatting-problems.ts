import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-formatting-problems",
  h1: "Jak naprawić problemy z formatowaniem PDF (zawijanie tekstu, marginesy, odstępy)",
  description:
    "Gdy układ PDF wygląda na zepsuty – tekst się przelewa, marginesy nie zgadzają się, odstępy są pomieszane – rozwiązanie zwykle leży w dokumencie źródłowym, nie w samym PDF. Najczystszy sposób na dobrze wyglądający eksport.",
  updated: "2026-05-29",
  intro: [
    "Złe formatowanie PDF-a niemal zawsze sięga wstecz do momentu eksportu. Sam PDF niczego nie przelewa na nowo – zamyka stronę dokładnie taką, jaka była w momencie zapisu. Więc jeśli odstępy są złe, marginesy nie pasują albo tabela rozjechała się na kolejne strony, plik źródłowy już produkował ten wynik.",
    "Poprawka niemal zawsze polega na powrocie do źródła – Word, Pages, Google Docs, narzędzie projektowe – poprawieniu układu i ponownym eksporcie. To frustrujące, gdy źródło nie jest Twoje, ale to najczystsza droga. Alternatywy – konwersja na Word, edycja PDF-a bezpośrednio albo „naprawa” innym czytnikiem – każda traci coś, co miał oryginał.",
    "Ten poradnik przechodzi przez częste objawy formatowania i realistyczną poprawkę dla każdego, łącznie ze sposobami pracy, które od razu dają czyste PDF-y.",
  ],
  steps: [
    {
      title: "Ustal, czy to problem treści, czy renderowania",
      body: "Otwórz PDF w dwóch różnych czytnikach. Jeśli oba pokazują ten sam zepsuty układ, plik jest źródłem problemu. Jeśli jeden renderuje poprawnie, masz problem z czytnikiem, nie z formatowaniem.",
    },
    {
      title: "Napraw układ w dokumencie źródłowym, nie w PDF-ie",
      body: "Otwórz plik Word, Pages albo Docs, popraw marginesy, odstępy albo tabelę, a potem wyeksportuj ponownie do PDF. Naprawione źródło od razu daje naprawiony PDF. Edycja PDF-a, żeby połatać układ, walczy z formatem.",
    },
    {
      title: "Wyeksportuj ponownie z jawnym rozmiarem papieru",
      body: "Ustawienia automatycznego dopasowania często dają niespodzianki. Ustaw jawnie rozmiar papieru (Letter albo A4), marginesy (1 cal albo 25 mm) i orientację w aplikacji źródłowej przed eksportem.",
    },
    {
      title: "Konwertuj na Word tylko do gruntownego przepisania tekstu",
      body: "PDF do Word w Twojej przeglądarce wyciąga tekst do ponownej edycji. Konwersja traci część układu – zaakceptuj to jako cenę odzyskania edycji tekstu. Po porządkach wyeksportuj ponownie do PDF, żeby udostępnić.",
    },
    {
      title: "Użyj narzędzi na poziomie stron do poprawek strukturalnych",
      body: "Jeśli tylko niektóre strony są nie tak – skan w złej kolejności, zduplikowana okładka, odwrócona wstawka – Zmień kolejność stron PDF, Wyodrębnij strony PDF i Obróć PDF naprawiają strukturę bez dotykania formatowania tekstu.",
    },
    {
      title: "Wyeksportuj ponownie do PDF przed udostępnieniem",
      body: "Gdy układ jest już naprawiony w źródle, eksportuj od nowa, zamiast ponownie zapisywać istniejący PDF. Najczystszy eksport pochodzi bezpośrednio z aplikacji, która stworzyła dokument.",
    },
  ],
  tips: [
    "Podgląd wydruku w Wordzie czy Pages pokazuje takie samo zachowanie podziału stron, jakie będzie miał PDF. Napraw złe podziały przed eksportem, nie po nim.",
    "Tabele, które dzielą się niezgrabnie, to problem formatowania akapitu w źródle, nie problem PDF-a. Użyj „zachowaj z następnym”, żeby związać wiersz nagłówka z jego treścią.",
    "Nie otwieraj PDF-a w Wordzie do edycji – Word go konwertuje, często kiepsko. Użyj oryginalnego źródła, jeśli je masz, albo PDF do Word tylko wtedy, gdy go nie masz.",
    "Wklejona treść z internetu często przynosi ze sobą formatowanie tła. Usuń je przed eksportem (wklej jako zwykły tekst), żeby uniknąć niespodziewanych ramek i kolorów w PDF-ie.",
    "Jeśli masz tylko PDF i nie możesz wrócić do źródła, zaakceptuj, że porządkowanie układu będzie częściowe. Priorytetyzuj zmiany, które czytelnik zauważy najpierw.",
  ],
  mobileNote:
    "Problemy z formatowaniem PDF-ów na telefonie często biorą się z dokumentów stworzonych na komputerze i wyeksportowanych pod niewłaściwy docelowy papier. Aplikacja PDF Editor pozwala obrócić, zmienić kolejność i przyciąć strony na telefonie – przydatne do porządkowania problemów strukturalnych, nawet gdy nie możesz naprawić źródła.",
  faq: [
    {
      q: "Dlaczego mój PDF wygląda inaczej niż wersja w Wordzie?",
      a: "Zwykle przez czcionki, rozmiar papieru albo ustawienia obszaru druku podczas eksportu. Ponowny eksport z jawnym rozmiarem papieru i osadzonymi czcionkami daje PDF zgodny ze źródłem.",
    },
    {
      q: "Czy mogę edytować tekst w PDF-ie, żeby naprawić odstępy?",
      a: "Możesz edytować pojedyncze znaki i słowa, ale przelewanie akapitów na nowo jest trudne, bo PDF-y traktują tekst jako pozycjonowane bloki. Napraw w źródle, jeśli to możliwe.",
    },
    {
      q: "Dlaczego mój przekonwertowany PDF na Word wygląda zepsuty?",
      a: "PDF-y kodują układ, nie przepływ. Konwersja przywraca przepływ, ale sygnały strukturalne znikają. Spodziewaj się prawdziwych porządków na przekonwertowanym pliku.",
    },
    {
      q: "Dlaczego moje tabele dzielą się niezgrabnie na strony?",
      a: "Niemal zawsze to problem formatowania akapitu w źródle. Ustawienia „zachowaj z następnym” i „nie dziel na strony” w Wordzie naprawiają większość podziałów przed eksportem.",
    },
    {
      q: "Czy kompresja wpływa na formatowanie?",
      a: "Nie. Kompresja dotyka obrazów, nie układu. Skompresowany PDF ma takie samo formatowanie jak oryginał – po prostu mniejsze osadzone obrazy.",
    },
  ],
  related: [
    { label: "PDF do Word — konwertuj do gruntownych poprawek tekstu", path: "/pdf-to-word" },
    { label: "Word do PDF — wyeksportuj ponownie na czysto", path: "/word-to-pdf" },
    { label: "Jak naprawić problemy z czcionkami w PDF", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "Jak naprawić problemy z drukowaniem PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Konwerter PDF — Word, JPG, PNG i z powrotem", path: "/pdf-converter" },
};

export default content;
