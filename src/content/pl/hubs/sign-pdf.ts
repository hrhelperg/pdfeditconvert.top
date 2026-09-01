import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "sign-pdf",
  hero: {
    eyebrow: "Podpisywanie PDF",
    h1: "Podpisuj pliki PDF z telefonu w kilka sekund.",
    highlight: "kilka sekund",
    lead: "Dodaj prawdziwy odręczny podpis, podpis pisany albo inicjały do dowolnego pliku PDF. Umieść go, zmień rozmiar i wyeksportuj — bez drukowania, skanowania czy wysyłania sobie pliku mailem.",
    primaryCta: { label: "Otwórz aplikację", href: SITE.app.appStore },
  },
  problem: {
    heading: "Dlaczego drukowanie i skanowanie w końcu odchodzi do lamusa",
    paragraphs: [
      "Stara rutyna podpisywania — wydrukuj plik PDF, podpisz go, zeskanuj, odeślij mailem — jakimś cudem przetrwała aż do 2026 roku. Większość firm akceptuje podpisy elektroniczne, ale wiele umów wciąż przychodzi z dopiskiem „proszę podpisać i odesłać\", jakby każdy miał w domu drukarkę i skaner.",
      "Publiczne usługi podpisu elektronicznego rozwiązują część problemu, ale wprowadzają logowanie, przesyłanie dokumentu na serwer, zarządzanie kontem i płatne plany. Dla jednego podpisu na jednym dokumencie to przesada, która dodaje zbędne opóźnienie.",
      "Natywny proces podpisywania na telefonie jest dokładnie tak duży, jak trzeba: otwórz plik PDF, narysuj lub wpisz podpis, umieść go, wyślij. Cała sekwencja zajmuje mniej niż minutę i działa bez konta, w samolocie albo na parkingu.",
    ],
  },
  features: {
    heading: "Podpisuj w sposób dopasowany do dokumentu",
    items: [
      {
        icon: "Pencil",
        title: "Podpis odręczny",
        body: "Rysuj palcem albo rysikiem. Zapisz raz, korzystaj z niego w każdym kolejnym dokumencie.",
      },
      {
        icon: "Type",
        title: "Podpis pisany",
        body: "Wpisz swoje imię i nazwisko i wybierz czcionkę w stylu odręcznym, aby uzyskać czytelny, elegancki podpis.",
      },
      {
        icon: "User",
        title: "Pieczątka z inicjałami",
        body: "Zapisz inicjały osobno na dokumenty, które wymagają ich na każdej stronie.",
      },
      {
        icon: "Calendar",
        title: "Znaczniki daty",
        body: "Wstaw datę jednym dotknięciem obok podpisu, gdy umowa tego wymaga.",
      },
      {
        icon: "Users",
        title: "Obieg z wieloma podpisującymi",
        body: "Przekazuj plik PDF między podpisującymi przez menu udostępniania. Każdy podpis zostaje na swoim miejscu.",
      },
      {
        icon: "ShieldCheck",
        title: "Eksport z informacjami kontrolnymi",
        body: "Podpisana kopia zawiera znacznik czasu i metadane podpisu przydatne do dokumentacji.",
      },
    ],
  },
  steps: {
    heading: "Jak podpisać plik PDF na telefonie",
    items: [
      {
        title: "Otwórz plik PDF",
        body: "Zaimportuj dokument do aplikacji PDF Editor z Plików, poczty e-mail albo dowolnej aplikacji do udostępniania.",
      },
      {
        title: "Dotknij narzędzia Podpisz",
        body: "Znajdziesz je na pasku narzędzi edycji. Wybierz podpis odręczny, pisany albo inicjały.",
      },
      {
        title: "Narysuj lub wpisz swój podpis",
        body: "Tylko za pierwszym razem — podpis zostaje zapisany do wykorzystania w przyszłości. W każdej chwili możesz go edytować lub zastąpić w Ustawieniach.",
      },
      {
        title: "Umieść i zmień rozmiar",
        body: "Przeciągnij podpis w odpowiednie miejsce. Zmień rozmiar za pomocą uchwytów w rogach. W razie potrzeby dodaj datę.",
      },
      {
        title: "Wyeksportuj podpisaną kopię",
        body: "Zapisz zmiany w oryginale albo jako nową kopię. Udostępnij bezpośrednio przez Mail lub dowolną aplikację do wiadomości.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Podpisywanie bez zakłócania dnia",
    body: "Podpis rzadko jest wąskim gardłem — jest nim czas potrzebny na znalezienie drukarki. Podpisywanie na telefonie oznacza, że umowa wraca do drugiej strony w ciągu godziny, a nie dnia. Szczególnie przydatne dla freelancerów, właścicieli małych firm i każdego, kto pracuje z dala od biurka.",
  },
  faq: [
    {
      q: "Czy podpis elektroniczny ma moc prawną?",
      a: "W większości jurysdykcji tak — w przypadku większości dokumentów biznesowych. Zarówno unijne rozporządzenie eIDAS, jak i amerykańska ustawa ESIGN Act uznają podpisy elektroniczne. W przypadku dokumentów o wysokiej wartości lub istotnych prawnie sprawdź lokalne przepisy i rozważ kwalifikowany podpis elektroniczny.",
    },
    {
      q: "Czy mój podpis będzie przechowywany na serwerze?",
      a: "Nie. Zapisane podpisy pozostają na Twoim urządzeniu. Są nakładane na dokumenty lokalnie i nigdy nie są przesyłane do naszej infrastruktury.",
    },
    {
      q: "Czy wiele osób może podpisać ten sam plik PDF?",
      a: "Tak. Przekazuj plik między podpisującymi przez menu udostępniania, AirDrop, e-mail albo dowolną aplikację do wiadomości. Każdy podpis jest dodawany i zapisywany na swoim miejscu.",
    },
    {
      q: "Co jeśli plik PDF ma pola podpisu?",
      a: "Aplikacja wykrywa istniejące pola podpisu i pozwala dotknąć bezpośrednio w nie. Twój podpis automatycznie dopasowuje się do odpowiedniego rozmiaru i pozycji.",
    },
    {
      q: "Czy mogę używać Apple Pencil lub S Pen?",
      a: "Tak. Oba dają płynniejsze pociągnięcia niż podpisywanie palcem, co robi realną różnicę w umowach przechodzących wizualną weryfikację.",
    },
  ],
  related: [
    {
      label: "Krok po kroku: jak podpisać plik PDF na telefonie",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "Chroń podpisane pliki PDF hasłem", path: "/pdf-security" },
    { label: "Sposoby pracy dla freelancerów", path: "/use-cases/freelancers" },
  ],
  appCta: {
    heading: "Podpisuj pliki PDF z dowolnego miejsca.",
    sub: "Bezpłatnie na iOS i Androidzie. Konto nie jest wymagane.",
  },
};

export default content;
