import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-from-phone",
  h1: "Jak udostępnić PDF z telefonu",
  description:
    "Udostępnij PDF z iPhone'a lub Androida we właściwy sposób – mailem, przez AirDrop, wiadomość lub link – i dowiedz się, jak dopasować rozmiar i przygotować plik, żeby faktycznie dotarł.",
  updated: "2026-05-23",
  intro: [
    "Udostępnienie PDF-a z telefonu to czynność na jedno dotknięcie – dopóki nią nie przestaje być: plik jest za duży na maila, odbiorca nie może otworzyć linku, albo zbyt późno orientujesz się, że wysłałeś wersję ze stroną, która nie powinna trafić na zewnątrz. Zrobienie tego dobrze zależy mniej od przycisku udostępniania, a bardziej od wyboru kanału i przygotowania pliku, zanim go dotkniesz.",
    "Ten poradnik pokazuje główne sposoby udostępniania z iPhone'a lub telefonu z Androidem – mail, AirDrop albo Nearby Share, aplikacje do wiadomości i linki do chmury – oraz kiedy każdy z nich jest właściwym wyborem. Pokazuje też szybkie przygotowanie, które zapobiega odbiciu udostępnienia albo wstydliwej sytuacji.",
    "Cały sens telefonu to wysyłanie rzeczy skądkolwiek jesteś. Odrobina staranności zamienia to z dotknięcia na chybił trafił w dokument, który niezawodnie dociera, ma odpowiedni rozmiar i nie ma niczego dodatkowego w środku.",
  ],
  steps: [
    {
      title: "Przygotuj plik, zanim go udostępnisz",
      body: "Potwierdź, że to właściwa wersja, usuń strony, które nie powinny wyjść na zewnątrz, i sprawdź, czy ma sensowny rozmiar. Trzydzieści sekund tutaj zapobiega większości wpadek.",
    },
    {
      title: "Otwórz menu udostępniania",
      body: "Dotknij Udostępnij na PDF-ie – z Plików, aplikacji mailowej albo aplikacji PDF Editor. Zarówno iOS, jak i Android pokazują stąd każdy istotny kanał.",
    },
    {
      title: "Mail do formalnych dokumentów",
      body: "Załącz do maila, gdy zależy Ci na śladzie korespondencji – umowy, faktury, wnioski. Pamiętaj o limicie około 25 MB; skompresuj najpierw, jeśli plik jest ciężki.",
    },
    {
      title: "AirDrop lub Nearby Share dla kogoś w pobliżu",
      body: "Wysyłasz do urządzenia w tym samym pomieszczeniu? AirDrop (iPhone) lub Nearby Share (Android) przenosi plik bezpośrednio, szybko, bez limitu rozmiaru i bez potrzeby internetu.",
    },
    {
      title: "Aplikacje do wiadomości do szybkich, nieformalnych wysyłek",
      body: "WhatsApp, Wiadomości i podobne sprawdzają się do luźnych wysyłek, ale niektóre ponownie kompresują lub ograniczają pliki. Do wszystkiego, co musi dotrzeć bez zmian, wybierz mail albo link.",
    },
    {
      title: "Link do chmury do dużych lub wieloodbiorczych udostępnień",
      body: "Przy dużym pliku albo szerokim gronie odbiorców udostępnij link z dysku w chmurze, który kontrolujesz. To omija limity rozmiaru i pozwala później cofnąć dostęp.",
    },
  ],
  tips: [
    "Skompresuj przed udostępnieniem, jeśli plik jest pełen skanów – odbity mail to gorszy wynik niż nieco mniejszy plik.",
    "Sprawdź strony, zanim dotkniesz udostępnij. Najczęstszym błędem jest wysłanie wersji z wewnętrzną notatką albo stroną przeznaczoną dla kogoś innego.",
    "AirDrop i Nearby Share to niedocenieni bohaterowie udostępniania w tym samym miejscu: natychmiastowe, bez limitu rozmiaru, bez internetu, bez przesyłania niczego.",
    "Aplikacje do wiadomości potrafią po cichu ponownie skompresować dokumenty. Przy plikach, gdzie liczy się jakość lub wierność, użyj zamiast tego maila lub linku do chmury.",
    "Przy wrażliwych dokumentach udostępnianych przez link użyj serwisu, któremu ufasz, i wyłącz dostęp, gdy odbiorca już ma plik.",
  ],
  mobileNote:
    "Aplikacja PDF Editor udostępnia bezpośrednio z menu udostępniania po przygotowaniu pliku – skompresuj, usuń stronę, podpisz – dzięki czemu dokument, który opuszcza Twój telefon, to dokładnie ten, który zamierzałeś wysłać, w rozmiarze, który dotrze. Wszystko przed udostępnieniem dzieje się na urządzeniu.",
  faq: [
    {
      q: "Jaki jest najlepszy sposób na udostępnienie PDF-a z telefonu?",
      a: "Zależy od odbiorcy: mail do formalnych dokumentów, AirDrop lub Nearby Share dla kogoś w pobliżu, aplikacje do wiadomości do szybkich nieformalnych wysyłek, a link do chmury do dużych plików lub wielu odbiorców.",
    },
    {
      q: "Dlaczego mój PDF nie chce wysłać się mailem?",
      a: "Prawdopodobnie przekracza limit załącznika około 25 MB, zwykle dlatego, że jest pełen skanów. Najpierw go skompresuj albo zamiast tego udostępnij link do chmury.",
    },
    {
      q: "Czy aplikacje do wiadomości zmieniają mój PDF?",
      a: "Niektóre ponownie kompresują lub ograniczają załączniki, co może wpłynąć na jakość. Do dokumentów, które muszą dotrzeć dokładnie takie, jakie wysłano, użyj maila lub linku do chmury zamiast czatu.",
    },
    {
      q: "Czy AirDrop lub Nearby Share są prywatne?",
      a: "Tak – plik przenosi się bezpośrednio między urządzeniami, bez przechodzenia przez serwer czy internet, co czyni je dobrym wyborem do wrażliwych dokumentów udostępnianych osobiście.",
    },
    {
      q: "Jak uniknąć udostępnienia niewłaściwych stron?",
      a: "Przejrzyj dokument przed dotknięciem udostępnij i usuń strony, które nie powinny wyjść na zewnątrz. Zobacz poradnik o przygotowaniu PDF-a przed udostępnieniem, żeby poznać pełną checklistę przed wysyłką.",
    },
  ],
  related: [
    { label: "Edytor PDF — przygotuj i udostępnij na telefonie", path: "/pdf-editor" },
    { label: "Jak przygotować PDF przed udostępnieniem", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Jak wysłać duży plik PDF", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Jak zmniejszyć PDF na Androidzie", path: "/guides/how-to-make-pdf-smaller-on-android" },
  ],
  parentHub: { label: "Edytor PDF", path: "/pdf-editor" },
};

export default content;
