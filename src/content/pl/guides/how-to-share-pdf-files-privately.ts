import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-files-privately",
  h1: "Jak udostępniać pliki PDF prywatnie (bez przesyłania do obcych serwisów)",
  description:
    "Prywatny sposób udostępniania PDF nie prowadzi przez publiczną stronę z „narzędziami PDF”. Kanały, które zostawiają dokument tylko między Tobą a odbiorcą, z sensownymi ustawieniami domyślnymi.",
  updated: "2026-05-29",
  intro: [
    "Pierwsze, co robi wiele osób, gdy chce udostępnić komuś PDF, to przesłanie go do narzędzia obiecującego „prywatne” udostępnianie – a to narzędzie często okazuje się największym ryzykiem prywatności w całym łańcuchu. Darmowe serwisy do udostępniania plików zwykle przechowują pliki przez jakiś czas, czasem je indeksują i zależą od serwera, z którym nie masz żadnej relacji.",
    "Prywatne udostępnianie nie jest skomplikowane; chodzi o wybór właściwego kanału. Bezpośredni transfer (AirDrop, USB), komunikatory z szyfrowaniem end-to-end, zaszyfrowana poczta albo zabezpieczone hasłem pliki przesyłane zwykłym e-mailem. Każdy z tych sposobów sprawdza się w innej sytuacji. Żaden nie wymaga przesyłania pliku do obcego serwisu.",
    "Ten poradnik omawia realistyczne opcje według poziomu wrażliwości i sytuacji, z kompromisami każdej z nich. Celem są udostępnione dokumenty, które zostają między Tobą a odbiorcą, bez zbędnego pośrednika w postaci strony trzeciej.",
  ],
  steps: [
    {
      title: "Do transferu w tym samym pomieszczeniu użyj AirDrop lub lokalnego udostępniania",
      body: "iPhone do iPhone'a, iPhone do Maca: AirDrop. Android: Nearby Share. Ten sam Mac, ten sam komputer: lokalny AirDrop albo wspólny folder. Plik nigdy nie dotyka internetu.",
    },
    {
      title: "Dla zaufanych odbiorców użyj komunikatora z szyfrowaniem end-to-end",
      body: "Signal, WhatsApp (z zastrzeżeniami), iMessage między użytkownikami Apple. Sam transport jest zaszyfrowany; plik jest odszyfrowywany dopiero na urządzeniu odbiorcy. Platformy widzą metadane, nie treść.",
    },
    {
      title: "Dla plików o niskiej wrażliwości zwykły e-mail wystarczy",
      body: "Standardowy e-mail nie jest szyfrowany, ale w praktyce jest bezpieczny dla większości niewrażliwych dokumentów. Ryzykiem jest przechwycenie, które jest rzadkie w przypadku zwykłych dokumentów przechodzących przez dużych dostawców poczty.",
    },
    {
      title: "Dla wrażliwych plików wysyłanych zwykłym e-mailem, najpierw zabezpiecz hasłem",
      body: "Nałóż hasło na PDF przed dodaniem go jako załącznik. E-mail niesie plik; hasło przekaż innym kanałem (rozmowa telefoniczna, osobna wiadomość). Nawet jeśli e-mail zostanie przechwycony, plik pozostaje chroniony.",
    },
    {
      title: "Dla bardzo wrażliwych materiałów użyj zaszyfrowanej poczty lub bezpiecznej dostawy",
      body: "ProtonMail, Tutanota albo firmowa usługa bezpiecznego dostarczania dokumentów. Dodają realne szyfrowanie do samego kanału, eliminując krok z przekazywaniem hasła osobno.",
    },
    {
      title: "Unikaj przesyłania wrażliwych treści do darmowych serwisów udostępniania plików",
      body: "Darmowe narzędzia, które przesyłają Twój plik (kompresory, narzędzia do łączenia, dzielenia), trzymają go na swoim serwerze, choćby przez chwilę. Dla wrażliwych materiałów używaj narzędzi w przeglądarce, które przetwarzają plik lokalnie, zanim jeszcze zaczniesz go udostępniać.",
    },
  ],
  tips: [
    "Nie umieszczaj hasła w tym samym e-mailu co zabezpieczony nim plik. Sens hasła polega na obronie przed przechwyceniem e-maila.",
    "Potwierdź tożsamość odbiorcy przed udostępnieniem – ataki phishingowe czasem podszywają się pod klientów, żeby wyłudzić wrażliwe PDF-y.",
    "Przy powtarzającym się udostępnianiu temu samemu odbiorcy, ustalcie jeden kanał i trzymajcie się go. Wycieki zdarzają się właśnie przy zmianie kanału.",
    "Nie udostępniaj przez publiczne linki, chyba że link jest jednorazowego użytku. Trwałe linki mogą zostać odkryte albo udostępnione dalej.",
    "Po udostępnieniu usuń plik z każdego tymczasowego miejsca przechowywania (folder Pobrane, dysk roboczy). Im mniej kopii wrażliwego materiału, tym mniejszy obszar ryzyka.",
  ],
  mobileNote:
    "Większość prywatnego udostępniania zaczyna się dziś na telefonie. Aplikacja PDF Editor przygotowuje pliki (kompresja, podpis, hasło) lokalnie na iOS i Androidzie, a potem przekazuje je do AirDrop, Signal albo Twojej poczty – plik zostaje na telefonie przez cały etap przygotowania, a potem trafia bezpośrednio do odbiorcy.",
  faq: [
    {
      q: "Jaki jest najprostszy sposób prywatnego udostępniania?",
      a: "AirDrop albo Nearby Share, gdy jesteś blisko odbiorcy. Komunikator z szyfrowaniem end-to-end, gdy nie jesteś. Oba trzymają plik z dala od serwerów firm trzecich.",
    },
    {
      q: "Czy WhatsApp jest wystarczająco prywatny dla wrażliwych dokumentów?",
      a: "Szyfrowanie end-to-end chroni treść; WhatsApp widzi metadane (kto co komu wysłał). W większości przypadków to wystarczy; dla bardzo wrażliwych materiałów Signal jest czystszym wyborem.",
    },
    {
      q: "Czy powinienem używać serwisu z linkami do udostępniania plików?",
      a: "Tylko z jasnymi zobowiązaniami dotyczącymi przetwarzania danych i krótkim czasem przechowywania. Dla wrażliwych plików bezpośrednie kanały są bezpieczniejsze.",
    },
    {
      q: "Jak ochrona hasłem PDF-a wypada w porównaniu z szyfrowaniem kanału?",
      a: "Hasło PDF chroni sam plik; szyfrowanie kanału chroni transport. Oba mają wartość; chronią przed różnymi rodzajami ataków.",
    },
    {
      q: "Jaka jest najgorsza powszechna praktyka?",
      a: "Przesłanie wrażliwego PDF-a do darmowego narzędzia „konwertuj” albo „kompresuj”, a potem wysłanie wynikowego pliku mailem. To właśnie moment przesyłania jest tym, w którym dane wymykają się spod Twojej kontroli. Używaj narzędzi w przeglądarce, które nie przesyłają plików.",
    },
  ],
  related: [
    { label: "Bezpieczeństwo PDF — zabezpiecz hasłem i zaszyfruj", path: "/pdf-security" },
    { label: "Jak chronić wrażliwe pliki PDF", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Jak unikać przesyłania wrażliwych dokumentów", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
    { label: "Sposoby pracy z dokumentami stawiające na prywatność", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "Bezpieczeństwo PDF — zabezpiecz hasłem i zaszyfruj", path: "/pdf-security" },
};

export default content;
