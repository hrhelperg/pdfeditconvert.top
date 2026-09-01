import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdfs-with-clients",
  h1: "Jak udostępniać PDF klientom (profesjonalnie i prywatnie)",
  description:
    "Krótki plan działania na wysyłkę PDF do klientów – dopasowanie rozmiaru do maila, wybór hasła, oznaczenie pliku marką, potwierdzenie odbioru – bez przesyłania czegokolwiek do zewnętrznych serwisów.",
  updated: "2026-05-29",
  intro: [
    "Sposób, w jaki wysyłasz PDF do klienta, mówi zaskakująco dużo o tym, jak pracujesz. Załącznik 40 MB, który się odbija, ogólna nazwa pliku w stylu „Dokument (1).pdf” albo plik, który otwiera się z błędnie zapisanym imieniem klienta w pasku tytułu – to drobne szczegóły, a wszystkie zapadają w pamięć.",
    "Profesjonalne przekazanie klientowi to głównie garstka nawyków: dopasuj odpowiednio rozmiar pliku, nazwij go jak gotowy produkt, oznacz spójnie marką, zabezpiecz hasłem, gdy to uzasadnione, i potwierdź odbiór. Żaden z nich nie zajmuje dużo czasu, gdy stanie się rutyną; razem sprawiają, że plik czuje się skończony.",
    "Ten poradnik to właśnie taki krótki plan działania – co zrobić, zanim naciśniesz wyślij, i które darmowe narzędzia obsługują każdy krok bez przesyłania niczego wrażliwego na serwer firmy trzeciej.",
  ],
  steps: [
    {
      title: "Nazwij plik dla klienta, nie dla siebie",
      body: "NazwaKlienta_NazwaProjektu_Oferta_2026-05-29.pdf jest jednoznaczna. „final_v3_edited.pdf” to przyznanie się do winy. Odbiorca powinien móc rozpoznać plik w swoim folderze pobranych miesiąc później.",
    },
    {
      title: "Ustaw pasujące metadane tytułu dokumentu",
      body: "Tytuły kart PDF często pokazują oryginalną nazwę pliku albo pozostałość z Worda. Wyeksportuj ponownie z aplikacji źródłowej z ustawionym tytułem metadanych albo użyj edytora PDF, żeby go ustawić. Drobny szczegół, profesjonalne wykończenie.",
    },
    {
      title: "Skompresuj pod skrzynkę klienta",
      body: "Niektóre portale klienckie mają limit 5 MB; większość systemów mailowych 25. Kompresuj PDF w Twojej przeglądarce sprowadza typowy gotowy produkt wygodnie poniżej obu wartości. Zrób to ostatnim krokiem, nie pierwszym.",
    },
    {
      title: "Zabezpiecz hasłem tylko wtedy, gdy to ma znaczenie",
      body: "Używaj haseł do naprawdę wrażliwych materiałów – szczegółów finansowych, danych osobowych, wersji roboczych umów. Nie zabezpieczaj hasłem samej oferty; utrudnienie przeważa nad korzyścią z bezpieczeństwa.",
    },
    {
      title: "Wyślij notatkę przewodnią z listą zawartości",
      body: "Jedno krótkie zdanie: „W załączniku: oferta (12 stron), warunki (3 strony), wycena (1 strona)”. Klient wie, co otwiera, bez wcześniejszego przeglądania pliku.",
    },
    {
      title: "Dopilnuj potwierdzenia odbioru",
      body: "Albo poproś w notatce przewodniej „daj znać, czy dotarło czytelnie”, albo sprawdź dzień później. Pliki naprawdę bywają filtrowane jako spam, zwłaszcza załączniki z hasłami.",
    },
  ],
  tips: [
    "Oznacz wersje robocze znakiem wodnym (WERSJA ROBOCZA, WEWNĘTRZNE), ale nigdy wersji ostatecznej. Ostateczna nie powinna potrzebować etykiety.",
    "Dopasuj swoją konwencję nazewnictwa do tej, której używa klient, jeśli potrafisz ją rozpoznać – wiele firmowych klientów ma standard nazewnictwa dokumentów, który możesz odzwierciedlić.",
    "Unikaj wysyłania więcej niż trzech załączników. Połącz to, co pasuje razem; resztę wyślij jako uzupełnienie, jeśli trzeba.",
    "Jeśli potrzebujesz podpisu z powrotem, najpierw podpisz swoją część i wstępnie przygotuj pole podpisu dla drugiej strony. To mały gest uprzejmości, który wraca szybciej.",
    "Przetestuj swój plik na świeżym czytniku przed wysłaniem – Twój własny czytnik może pokazywać układy, których inni nie zobaczą.",
  ],
  mobileNote:
    "Klienci coraz częściej czytają gotowe produkty najpierw na telefonie. Aplikacja PDF Editor pozwala podejrzeć, skompresować, podpisać i ponownie udostępnić PDF-y z telefonu, więc rewizja klienta w ostatniej chwili nie musi czekać, aż wrócisz do biura.",
  faq: [
    {
      q: "Jaki jest najczęstszy błąd przy wysyłaniu PDF-ów klientom?",
      a: "Nazwa pliku. „Dokument (1).pdf” mówi klientowi, że Ci nie zależy. Opisowa nazwa z projektem i datą sprawia, że plik da się znaleźć później.",
    },
    {
      q: "Czy powinienem zabezpieczać hasłem wszystko, co wysyłam?",
      a: "Nie. Zarezerwuj hasła dla naprawdę wrażliwej treści. Rutynowe gotowe produkty ich nie potrzebują, a nadużywanie haseł uczy klientów, żeby je ignorować albo gubić.",
    },
    {
      q: "Jak duży może być plik?",
      a: "Mail ma limit 25 MB; wiele portali klienckich 5. Kompresuj wszystko powyżej 5 MB, chyba że wiesz, że klient akceptuje większe. Mniejszy jest zawsze bezpieczniejszy.",
    },
    {
      q: "Czy powinienem wysyłać kilka PDF-ów, czy je łączyć?",
      a: "Łącz, gdy naprawdę do siebie pasują (oferta + warunki + wycena). Trzymaj osobno, gdy to naprawdę różne gotowe produkty. Trzy załączniki to praktyczny limit, zanim rzeczy zaczną się gubić.",
    },
    {
      q: "Czy w porządku jest używać narzędzi PDF online do pracy z klientem?",
      a: "Tylko jeśli działają lokalnie w Twojej przeglądarce. Przesłanie wrażliwego dokumentu klienta na serwer firmy trzeciej to realne ryzyko. Narzędzia działające w przeglądarce, przetwarzające na Twoim urządzeniu, całkowicie tego unikają.",
    },
  ],
  related: [
    { label: "PDF dla firm — umowy i sposoby pracy", path: "/pdf-for-business" },
    { label: "Kompresuj PDF — zmniejsz pod portale klienckie", path: "/compress-pdf" },
    { label: "Jak przygotować PDF do użytku biznesowego", path: "/guides/how-to-prepare-pdf-for-business-use" },
    { label: "Jak tworzyć pliki PDF gotowe dla klienta", path: "/guides/how-to-create-client-ready-pdf-files" },
  ],
  parentHub: { label: "PDF dla firm — umowy i sposoby pracy", path: "/pdf-for-business" },
};

export default content;
