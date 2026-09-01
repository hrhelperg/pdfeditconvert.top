import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "PDF dla firm",
    h1: "Sposoby pracy z PDF dla małych zespołów.",
    highlight: "małych zespołów",
    lead: "Umowy, faktury, wyceny, podpisane porozumienia, zeskanowane paragony — wszystkie dokumenty, na których działa mała firma, obsługiwane z telefonu, bez licencji na stanowisko czy korporacyjnego SaaS.",
    primaryCta: { label: "Otwórz aplikację", href: SITE.app.appStore },
  },
  problem: {
    heading: "Dlaczego małe zespoły wciąż zmagają się z plikami PDF",
    paragraphs: [
      "Małe firmy żyją plikami PDF. Wyceny wychodzą jako PDF, umowy wracają podpisane jako PDF, faktury to PDF, paragony skanuje się do PDF, umowy o zachowaniu poufności to PDF. A mimo to narzędzia, które je obsługują, są albo wycenione jak dla korporacji, albo działają w przeglądarce i są zawodne.",
      "Oprogramowanie PDF klasy enterprise zakłada, że masz dział IT i proces zakupowy. Darmowe narzędzia webowe zakładają, że nie masz nic przeciwko przesyłaniu umów klientów na serwer obcej firmy. Żaden z tych modeli nie pasuje do pięcioosobowej agencji, freelancera ani małej firmy internetowej, która musi szybko obsługiwać dokumenty, bez biurokracji.",
      "Natywny zestaw narzędzi PDF, stworzony przede wszystkim z myślą o telefonie, lepiej pasuje do małych zespołów. Bez licencji na stanowiska do zarządzania, bez kolejek przesyłania do koordynowania, bez miesięcznych opłat za narzędzie używane kilka razy w tygodniu. Każdy członek zespołu instaluje aplikację na telefonie i jest produktywny od pierwszego dnia.",
    ],
  },
  features: {
    heading: "Operacje, na których zależy małym zespołom",
    items: [
      {
        icon: "FileSignature",
        title: "Wycena → umowa → podpis",
        body: "Wyślij wycenę w PDF, odbierz podpisaną akceptację, zapisz wynik. Cały cykl mieści się w telefonie.",
      },
      {
        icon: "Receipt",
        title: "Skanowanie paragonów przy kasie",
        body: "Skanuj papierowe paragony od razu, gdy je dostaniesz. Automatyczne nazywanie i OCR sprawiają, że są gotowe do wprowadzenia do narzędzia księgowego.",
      },
      {
        icon: "ShieldCheck",
        title: "Chroń wrażliwe dokumenty",
        body: "Zabezpiecz hasłem umowy, pliki PDF z listami płac i kopie umów o zachowaniu poufności, zanim udostępnisz je na zewnątrz. AES-256, na urządzeniu.",
      },
      {
        icon: "Combine",
        title: "Łącz i dziel materiały końcowe",
        body: "Scal wycenę z zakresem prac; podziel długi eksport na poszczególnych klientów. Obie operacje wymagają trzech dotknięć.",
      },
      {
        icon: "Wand",
        title: "Szybkie poprawki bez laptopa",
        body: "Popraw literówkę w wycenie, zaktualizuj datę na fakturze, zamień logo w broszurze — wszystko z telefonu.",
      },
      {
        icon: "Globe",
        title: "Działa z chmurą, której już używasz",
        body: "Drive, iCloud, OneDrive, Dropbox — aplikacja odczytuje i zapisuje pliki tam, gdzie Twój zespół już je przechowuje.",
      },
    ],
  },
  steps: {
    heading: "Typowy sposób pracy małej firmy",
    items: [
      {
        title: "Odbierz zapytanie",
        body: "Klient prosi o wycenę. Przygotowujesz ją w swoim narzędziu do fakturowania i eksportujesz do PDF.",
      },
      {
        title: "Podpisz i opatrz datą",
        body: "Otwórz plik PDF w PDF Editor, podpisz zapisanym podpisem, dodaj datę.",
      },
      {
        title: "Wyślij mailem lub przez wiadomość",
        body: "Udostępnij podpisaną wycenę bezpośrednio z aplikacji przez menu udostępniania e-mail albo narzędzie do wiadomości używane w Twoim zespole.",
      },
      {
        title: "Odbierz wersję kontrasygnowaną",
        body: "Gdy klient ją odeśle, otwórz plik, zarchiwizuj go w chmurze i zabezpiecz hasłem, jeśli zawiera wrażliwe warunki.",
      },
      {
        title: "Wygeneruj fakturę i połącz ją z umową",
        body: "Wyeksportuj fakturę z narzędzia księgowego, a następnie użyj funkcji Scal, aby połączyć fakturę i podpisaną umowę w jeden uporządkowany plik archiwalny PDF.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Prowadzenie firmy z telefonu",
    body: "Duża część pracy dokumentowej w małej firmie odbywa się między innymi zajęciami — u klienta, w taksówce, między odbieraniem dzieci ze szkoły. Aplikacja stworzona z myślą o telefonie oznacza, że sposób pracy nie zależy od siedzenia przy biurku. Umowy, na które kiedyś trzeba było czekać do wieczornej sesji przy laptopie, teraz wychodzą w tej samej godzinie, w której zostały poproszone.",
  },
  faq: [
    {
      q: "Czy aplikacja nadaje się dla zespołu liczącego 5-20 osób?",
      a: "Tak, dla poszczególnych osób w małym zespole — każda instaluje aplikację na swoim telefonie. Nie ma centralnej konsoli administracyjnej; to narzędzie działające per urządzenie. Dla większych organizacji odpowiedniejszy może być system zarządzania dokumentami klasy enterprise.",
    },
    {
      q: "Czy mogę jej używać do umów wiążących prawnie?",
      a: "Większość jurysdykcji akceptuje podpisane pliki PDF w przypadku standardowych umów biznesowych. Zarówno unijne rozporządzenie eIDAS, jak i amerykańska ustawa ESIGN Act uznają podpisy elektroniczne. W przypadku umów o wysokiej wartości, regulowanych lub transgranicznych sprawdź lokalne przepisy i rozważ kwalifikowany podpis elektroniczny.",
    },
    {
      q: "Czy integruje się z narzędziami księgowymi?",
      a: "PDF Editor tworzy standardowe pliki PDF, które akceptuje każde narzędzie księgowe (Xero, QuickBooks, FreeAgent, Pleo itp.). Nie jest potrzebna żadna specjalna integracja — wystarczy zapisać plik PDF w chmurze, a narzędzie księgowe go pobierze.",
    },
    {
      q: "Jak zachować prywatność plików klientów?",
      a: "Wszystkie operacje odbywają się na urządzeniu. Pliki opuszczają telefon tylko wtedy, gdy sam je udostępnisz. Zabezpiecz hasłem szczególnie wrażliwe dokumenty, zanim udostępnisz je na zewnątrz.",
    },
    {
      q: "A co ze śladem kontrolnym (audit trail)?",
      a: "Podpisane pliki PDF zawierają metadane podpisu (znacznik czasu, imię i nazwisko podpisującego). W branżach regulowanych, wymagających pełnego śladu kontrolnego, uzupełnij to o dedykowaną platformę podpisu elektronicznego — PDF Editor obsługuje codzienne umowy biznesowe, a nie regulowane procesy.",
    },
  ],
  related: [
    { label: "Bezpieczeństwo i szyfrowanie PDF", path: "/pdf-security" },
    {
      label: "Bezpieczne sposoby pracy z PDF dla firm",
      path: "/guides/secure-pdf-workflows-for-business",
    },
    { label: "Podpisywanie PDF na telefonie", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Zarządzaj dokumentami z telefonu.",
    sub: "Bezpłatnie w codziennym użytku biznesowym. Bez licencji na stanowisko.",
  },
};

export default content;
