import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";

/**
 * Polish route manifest for the guide library.
 *
 * Slugs follow Polish search phrasing — infinitive/imperative form
 * ("jak-skompresowac-pdf") matching how a Polish user actually searches,
 * ASCII-normalized per §6. Terminology policy:
 * docs/localization/pl-terminology.md.
 */
export const PL_GUIDE_ROUTES: readonly LocaleRouteEntry[] = [
  {
    id: "guides/how-to-edit-pdf-on-iphone",
    slug: "poradniki/jak-edytowac-pdf-na-iphonie",
    title: "Jak edytować PDF na iPhonie (poradnik 2026)",
    description:
      "Edytuj tekst, dodawaj obrazy i zmieniaj kolejność stron PDF prosto na iPhonie. Instrukcja krok po kroku z aplikacją PDF Editor.",
  },
  {
    id: "guides/how-to-edit-pdf-on-android",
    slug: "poradniki/jak-edytowac-pdf-na-androidzie",
    title: "Jak edytować PDF na Androidzie (poradnik 2026)",
    description:
      "Edytuj pliki PDF na Androidzie: zmieniaj tekst, wstawiaj strony i podpisuj dokumenty. Jasna instrukcja krok po kroku z aplikacją PDF Editor.",
  },
  {
    id: "guides/how-to-compress-pdf",
    slug: "poradniki/jak-skompresowac-pdf",
    title: "Jak skompresować PDF (bez utraty jakości)",
    description:
      "Zmniejsz rozmiar pliku PDF do wysyłki mailem lub przesłania na portal bez utraty jakości. Samouczek przyjazny telefonom, z aplikacją PDF Editor.",
  },
  {
    id: "guides/how-to-merge-pdf-files",
    slug: "poradniki/jak-polaczyc-pliki-pdf",
    title: "Jak połączyć pliki PDF na telefonie i komputerze",
    description:
      "Połącz wiele plików PDF w jeden dokument. Sposób pracy krok po kroku na telefonie z aplikacją PDF Editor.",
  },
  {
    id: "guides/how-to-sign-pdf-on-phone",
    slug: "poradniki/jak-podpisac-pdf-na-telefonie",
    title: "Jak podpisać PDF na telefonie",
    description:
      "Dodawaj prawnie ważne podpisy elektroniczne do plików PDF z iPhone'a lub Androida. Praktyczny poradnik z aplikacją PDF Editor.",
  },
  {
    id: "guides/how-to-scan-documents-to-pdf",
    slug: "poradniki/jak-skanowac-dokumenty-do-pdf",
    title: "Jak skanować dokumenty do PDF telefonem",
    description:
      "Skanuj wielostronicowe dokumenty aparatem telefonu i zamień je w czyste pliki PDF. Sposób pracy na telefonie z wykrywaniem krawędzi i OCR.",
  },
  {
    id: "guides/best-pdf-app-for-students",
    slug: "poradniki/najlepsza-aplikacja-pdf-dla-studentow",
    title: "Najlepsza aplikacja PDF dla studentów (2026)",
    description:
      "Czego studenci naprawdę potrzebują od aplikacji PDF: notatek, zakreśleń, podpisów i darmowych konwersji. Uczciwe kryteria oceny.",
  },
  {
    id: "guides/best-pdf-app-for-business",
    slug: "poradniki/najlepsza-aplikacja-pdf-dla-firm",
    title: "Najlepsza aplikacja PDF dla firm (2026)",
    description:
      "Czego małe zespoły powinny szukać w aplikacji PDF: podpisów, umów, bezpieczeństwa i współpracy na telefonie.",
  },
  {
    id: "guides/pdf-vs-docx",
    slug: "poradniki/pdf-czy-docx",
    title: "PDF czy DOCX — którego formatu użyć?",
    description:
      "Kiedy wybrać PDF zamiast DOCX i odwrotnie. Jasne porównanie edytowalności, wierności, podpisywania i udostępniania.",
  },
  {
    id: "guides/how-to-protect-pdf-file",
    slug: "poradniki/jak-zabezpieczyc-pdf-haslem",
    title: "Jak zabezpieczyć plik PDF hasłem",
    description:
      "Dodaj ochronę hasłem i szyfrowanie do pliku PDF na telefonie lub komputerze. Praktyczny poradnik z aplikacją PDF Editor.",
  },
  {
    id: "guides/how-to-convert-pdf-to-word",
    slug: "poradniki/jak-przekonwertowac-pdf-do-word",
    title: "Jak przekonwertować PDF do Word — za darmo, w przeglądarce",
    description:
      "Wyciągnij tekst z PDF do edytowalnego dokumentu Word prosto w przeglądarce. Co konwertuje się bez zarzutu, co wymaga poprawek i kiedy skan się nie sprawdzi.",
  },
  {
    id: "guides/how-to-convert-word-to-pdf",
    slug: "poradniki/jak-przekonwertowac-word-do-pdf",
    title: "Jak przekonwertować Word do PDF — za darmo, bez przesyłania",
    description:
      "Zamień plik .docx lub .txt w czysty PDF gotowy do wysłania, prosto w przeglądarce. Dlaczego PDF to właściwy format do wysyłki i co sprawdzić przed eksportem.",
  },
  {
    id: "guides/how-to-convert-jpg-to-pdf",
    slug: "poradniki/jak-przekonwertowac-jpg-do-pdf",
    title: "Jak przekonwertować JPG do PDF — za darmo, z obrazu do dokumentu",
    description:
      "Połącz jedno lub wiele zdjęć JPG w jeden plik PDF prosto w przeglądarce. Najlepsze dla paragonów, dowodów i sfotografowanych dokumentów – z uczciwymi uwagami o jakości i formacie HEIC z iPhone'a.",
  },
  {
    id: "guides/how-to-convert-png-to-pdf",
    slug: "poradniki/jak-przekonwertowac-png-do-pdf",
    title: "Jak przekonwertować PNG do PDF — ostre zrzuty ekranu i grafiki",
    description:
      "Zamień zrzuty ekranu, diagramy i grafiki PNG w jeden plik PDF prosto w przeglądarce. Dlaczego PNG zachowuje ostry tekst i co dzieje się z przezroczystością.",
  },
  {
    id: "guides/how-to-convert-webp-to-pdf",
    slug: "poradniki/jak-przekonwertowac-webp-do-pdf",
    title: "Jak przekonwertować WebP do PDF — obrazy z internetu w dokument",
    description:
      "Zamień obrazy WebP zapisane z internetu w jeden plik PDF prosto w przeglądarce. Dlaczego inne aplikacje odrzucają WebP i jak konwersja rozwiązuje problem kompatybilności.",
  },
  {
    id: "guides/how-to-convert-pdf-to-jpg",
    slug: "poradniki/jak-przekonwertowac-pdf-do-jpg",
    title: "Jak przekonwertować PDF do JPG — eksportuj strony jako obrazy",
    description:
      "Eksportuj strony PDF jako obrazy JPG prosto w przeglądarce. Kiedy JPG jest lepszym wyborem niż PNG, jak skala wpływa na jakość i kiedy podgląd obrazu wygrywa z PDF-em.",
  },
  {
    id: "guides/how-to-convert-pdf-to-png",
    slug: "poradniki/jak-przekonwertowac-pdf-do-png",
    title: "Jak przekonwertować PDF do PNG — ostre obrazy stron bez utraty jakości",
    description:
      "Eksportuj strony PDF jako obrazy PNG w wysokiej jakości prosto w przeglądarce. Dlaczego PNG zachowuje ostry tekst i diagramy, plus uwagi o skali i przezroczystości.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-iphone",
    slug: "poradniki/jak-przekonwertowac-zdjecia-do-pdf-na-iphonie",
    title: "Jak przekonwertować zdjęcia do PDF na iPhonie (problem z HEIC)",
    description:
      "Zamień zdjęcia z iPhone'a w jeden plik PDF – z uwzględnieniem problemu z formatem HEIC, który wielu zaskakuje. Droga przez przeglądarkę i szybsza droga przez aplikację.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-android",
    slug: "poradniki/jak-przekonwertowac-zdjecia-do-pdf-na-androidzie",
    title: "Jak przekonwertować zdjęcia do PDF na Androidzie",
    description:
      "Zamień zdjęcia z Androida w jeden plik PDF za pomocą narzędzia w przeglądarce lub wbudowanej funkcji drukowania do PDF. Plus szybszy sposób pracy w aplikacji ze skanowaniem.",
  },
  {
    id: "guides/how-to-convert-scanned-documents-to-pdf",
    slug: "poradniki/jak-przekonwertowac-zeskanowane-dokumenty-do-pdf",
    title: "Jak przekonwertować zeskanowane dokumenty do PDF",
    description:
      "Masz już obrazy ze skanera lub zdjęcia papierowych dokumentów? Połącz je w jeden plik PDF prosto w przeglądarce – plus wyjaśnienie, co robi OCR i dlaczego skany go potrzebują, by były przeszukiwalne.",
  },
  {
    id: "guides/how-to-split-pdf-files",
    slug: "poradniki/jak-podzielic-pdf-na-osobne-pliki",
    title: "Jak podzielić PDF na osobne pliki (za darmo)",
    description:
      "Podziel duży plik PDF na mniejsze pliki według zakresu stron, prosto w przeglądarce. Kiedy dzielić, a kiedy wyodrębniać, i jak zachować bezpieczeństwo oryginałów.",
  },
  {
    id: "guides/how-to-extract-pages-from-pdf",
    slug: "poradniki/jak-wyodrebnic-strony-z-pdf",
    title: "Jak wyodrębnić strony z PDF (za darmo, bez przesyłania)",
    description:
      "Wyciągnij konkretne strony lub zakresy z PDF do nowego pliku, prosto w przeglądarce. Idealne, gdy komuś trzeba wysłać tylko wybrane strony.",
  },
  {
    id: "guides/how-to-reorder-pdf-pages",
    slug: "poradniki/jak-zmienic-kolejnosc-stron-w-pdf",
    title: "Jak zmienić kolejność stron w PDF (za darmo, w przeglądarce)",
    description:
      "Ułóż strony PDF we właściwej kolejności prosto w przeglądarce. Napraw skany, które wyszły w złej kolejności, lub połączone pliki, które wylądowały w bałaganie.",
  },
  {
    id: "guides/how-to-rotate-pdf-pages",
    slug: "poradniki/jak-obrocic-strony-w-pdf",
    title: "Jak obrócić strony w PDF (za darmo, bez przesyłania)",
    description:
      "Obróć wszystkie lub wybrane strony PDF o 90, 180 lub 270 stopni prosto w przeglądarce. Napraw poziome skany i strony do góry nogami, żeby dokument dało się normalnie czytać.",
  },
  {
    id: "guides/how-to-add-watermark-to-pdf",
    slug: "poradniki/jak-dodac-znak-wodny-do-pdf",
    title: "Jak dodać znak wodny do PDF (za darmo)",
    description:
      "Nanieś tekst, na przykład WERSJA ROBOCZA lub POUFNE, na każdą stronę PDF prosto w przeglądarce. Co znak wodny naprawdę chroni, a czego nie – wyjaśnione uczciwie.",
  },
  {
    id: "guides/how-to-remove-unwanted-pages-from-pdf",
    slug: "poradniki/jak-usunac-niepotrzebne-strony-z-pdf",
    title: "Jak usunąć niepotrzebne strony z PDF",
    description:
      "Pozbądź się pustych stron, stron tytułowych czy zbędnych sekcji z PDF prosto w przeglądarce, zachowując tylko te strony, które są potrzebne. Czyste pliki, prywatny proces.",
  },
  {
    id: "guides/how-to-organize-pdf-files",
    slug: "poradniki/jak-uporzadkowac-pliki-pdf",
    title: "Jak uporządkować pliki PDF — praktyczny sposób pracy",
    description:
      "Zaprowadź porządek w chaotycznych plikach PDF: połącz powiązane pliki, zmień kolejność stron, usuń zbędne elementy i nadaj wszystkiemu sensowne nazwy. Powtarzalny sposób pracy z darmowymi narzędziami w przeglądarce.",
  },
  {
    id: "guides/how-to-prepare-pdf-before-sharing",
    slug: "poradniki/jak-przygotowac-pdf-przed-udostepnieniem",
    title: "Jak przygotować PDF przed udostępnieniem (checklista)",
    description:
      "Checklista przed wysłaniem pliku PDF: usuń zbędne strony, popraw orientację, zmniejsz rozmiar i oznacz wersje robocze. Wyślij czysty, odpowiednio duży i przemyślany dokument.",
  },
  {
    id: "guides/how-to-fix-sideways-pdf-pages",
    slug: "poradniki/jak-naprawic-przekrzywione-strony-pdf",
    title: "Jak naprawić przekrzywione lub odwrócone strony PDF",
    description:
      "Na stałe wyprostuj strony PDF, które otwierają się bokiem lub do góry nogami, prosto w przeglądarce. Dlaczego obracanie ekranu nie pomaga i co naprawdę rozwiązuje ten problem.",
  },
  {
    id: "guides/how-to-compress-pdf-online",
    slug: "poradniki/jak-skompresowac-pdf-online-bez-przesylania",
    title: "Jak skompresować PDF online bez przesyłania go na serwer",
    description:
      "Zmniejsz PDF prosto w przeglądarce – bez przesyłania, bez konta. Czym kompresja na urządzeniu różni się od typowych narzędzi online i jaki jest kompromis jakościowy.",
  },
  {
    id: "guides/how-to-reduce-pdf-file-size-for-email",
    slug: "poradniki/jak-zmniejszyc-pdf-do-wysylki-mailem",
    title: "Jak zmniejszyć rozmiar PDF do wysyłki mailem",
    description:
      "Sprowadź PDF poniżej limitów załączników w Gmailu i Outlooku. Prawdziwe limity, dlaczego skany je przekraczają i jak zmniejszyć plik, żeby dało się go wysłać.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-iphone",
    slug: "poradniki/jak-zmniejszyc-pdf-na-iphonie",
    title: "Jak zmniejszyć PDF na iPhonie",
    description:
      "Zmniejsz PDF na iPhonie za pomocą narzędzia w przeglądarce lub aplikacji PDF Editor. Dlaczego skany z iPhone'a robią się ogromne i jak sprowadzić je poniżej limitów wysyłki.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-android",
    slug: "poradniki/jak-zmniejszyc-pdf-na-androidzie",
    title: "Jak zmniejszyć PDF na Androidzie",
    description:
      "Skompresuj PDF na dowolnym telefonie z Androidem za pomocą narzędzia w przeglądarce, które nie wymaga instalacji, lub aplikacji PDF Editor. Sprowadź skany poniżej limitów maila i portali.",
  },
  {
    id: "guides/why-is-my-pdf-so-large",
    slug: "poradniki/dlaczego-moj-pdf-jest-taki-duzy",
    title: "Dlaczego mój PDF jest taki duży? Przyczyny i rozwiązania",
    description:
      "Prawdziwe powody, dla których PDF puchnie – skany, osadzone zdjęcia, czcionki i inne – oraz właściwe rozwiązanie dla każdego z nich, z darmowymi narzędziami w przeglądarce.",
  },
  {
    id: "guides/compress-pdf-without-losing-too-much-quality",
    slug: "poradniki/kompresja-pdf-bez-utraty-jakosci",
    title: "Jak skompresować PDF bez utraty zbyt dużej jakości",
    description:
      "Znajdź złoty środek między rozmiarem pliku a jakością. Jak poziomy kompresji zamieniają szczegóły na mniejszy rozmiar i jak wybrać najlżejszy, który wciąż się sprawdza.",
  },
  {
    id: "guides/how-to-compress-scanned-pdf",
    slug: "poradniki/jak-skompresowac-zeskanowany-pdf",
    title: "Jak skompresować zeskanowany PDF (duże oszczędności)",
    description:
      "Zeskanowane pliki PDF najłatwiej się zmniejsza i to one najbardziej zawyżają rozmiar. Jak skompresować je drastycznie i co dzieje się z przeszukiwalnym tekstem.",
  },
  {
    id: "guides/best-pdf-compression-settings",
    slug: "poradniki/najlepsze-ustawienia-kompresji-pdf",
    title: "Najlepsze ustawienia kompresji PDF — przewodnik decyzyjny",
    description:
      "Jaki poziom kompresji do maila, druku, archiwizacji czy internetu? Praktyczna tabela dopasowująca ustawienia do celu, z uczciwymi kompromisami.",
  },
  {
    id: "guides/how-to-send-large-pdf-files",
    slug: "poradniki/jak-wyslac-duzy-plik-pdf",
    title: "Jak wysłać duży plik PDF (5 sprawdzonych sposobów)",
    description:
      "Pięć sprawdzonych sposobów na wysłanie PDF-a zbyt dużego na maila – kompresja, dzielenie, linki do chmury i inne – oraz jak wybrać między nimi.",
  },
  {
    id: "guides/how-to-reduce-pdf-size-before-uploading",
    slug: "poradniki/jak-zmniejszyc-pdf-przed-przeslaniem",
    title: "Jak zmniejszyć PDF przed przesłaniem na portal",
    description:
      "Portale do przesyłania plików odrzucają duże pliki ostrzej niż poczta e-mail. Jak sprowadzić PDF poniżej ciasnych limitów portalu bez utraty czytelności, którą tam sprawdzają.",
  },
  {
    id: "guides/how-to-sign-pdf-on-iphone",
    slug: "poradniki/jak-podpisac-pdf-na-iphonie",
    title: "Jak podpisać PDF na iPhonie (poradnik 2026)",
    description:
      "Podpisz PDF na iPhonie za pomocą Markup lub aplikacji PDF Editor. Ograniczenia natywnej drogi i kiedy dedykowana aplikacja lepiej sprawdza się do podpisywania.",
  },
  {
    id: "guides/how-to-sign-pdf-on-android",
    slug: "poradniki/jak-podpisac-pdf-na-androidzie",
    title: "Jak podpisać PDF na Androidzie (poradnik 2026)",
    description:
      "Podpisz PDF na Androidzie, gdzie nie ma jednego uniwersalnego wbudowanego narzędzia do podpisu. Niezawodna droga przez aplikację, różne opcje zależne od producenta i podstawy prawne.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-phone",
    slug: "poradniki/jak-wypelniac-formularze-pdf-na-telefonie",
    title: "Jak wypełniać formularze PDF na telefonie",
    description:
      "Wypełniaj formularze PDF na iPhonie lub Androidzie, niezależnie od tego, czy mają prawdziwe pola formularza, czy są nieinteraktywnym skanem. Dotknij i pisz, dodawaj pola tekstowe i podpisuj w jednym miejscu.",
  },
  {
    id: "guides/how-to-annotate-pdf-on-mobile",
    slug: "poradniki/jak-dodawac-adnotacje-do-pdf-na-telefonie",
    title: "Jak dodawać adnotacje do PDF na telefonie",
    description:
      "Zakreślaj, komentuj i rysuj na plikach PDF z telefonu lub tabletu. Narzędzia do adnotacji, na których naprawdę zależy, i jak zachować czytelność swoich notatek.",
  },
  {
    id: "guides/how-to-manage-pdfs-on-phone",
    slug: "poradniki/jak-zarzadzac-plikami-pdf-na-telefonie",
    title: "Jak zarządzać plikami PDF na telefonie",
    description:
      "Nie dopuść, żeby pliki PDF na telefonie zamieniły się w bałagan: zmieniaj nazwy, porządkuj w folderach, synchronizuj z chmurą i zwalniaj miejsce. Praktyczna rutyna porządkowa.",
  },
  {
    id: "guides/how-to-create-pdf-from-camera",
    slug: "poradniki/jak-utworzyc-pdf-ze-zdjecia-z-aparatu",
    title: "Jak utworzyć PDF ze zdjęcia z aparatu",
    description:
      "Zamień zdjęcie z aparatu w plik PDF – i dowiedz się, dlaczego właściwy skan bije zwykłe zdjęcie. Szybkie ujęcie do paragonów i tablic, skanowanie do dokumentów.",
  },
  {
    id: "guides/how-to-share-pdf-from-phone",
    slug: "poradniki/jak-udostepnic-pdf-z-telefonu",
    title: "Jak udostępnić PDF z telefonu",
    description:
      "Udostępnij PDF z iPhone'a lub Androida we właściwy sposób – mailem, przez AirDrop, wiadomość lub link – i dowiedz się, jak dopasować rozmiar i przygotować plik, żeby faktycznie dotarł.",
  },
  {
    id: "guides/best-pdf-tools-for-students",
    slug: "poradniki/najlepsze-narzedzia-pdf-dla-studentow",
    title: "Najlepsze darmowe narzędzia PDF dla studentów (2026)",
    description:
      "Darmowe narzędzia PDF bez rejestracji, które pokrywają realne zadania studentów – łączenie lektur, kompresowanie prac do oddania, konwersję i adnotacje – bez płatnego muru.",
  },
  {
    id: "guides/best-pdf-workflow-for-freelancers",
    slug: "poradniki/najlepszy-sposob-pracy-z-pdf-dla-freelancerow",
    title: "Najlepszy sposób pracy z PDF dla freelancerów",
    description:
      "Powtarzalny sposób pracy z PDF dla freelancerów: wysłana oferta, podpisana umowa, wystawiona faktura. Darmowe narzędzia i aplikacja mobilna, które utrzymują tempo i prywatność.",
  },
  {
    id: "guides/best-pdf-tools-for-small-business",
    slug: "poradniki/najlepsze-narzedzia-pdf-dla-malych-firm",
    title: "Najlepsze darmowe narzędzia PDF dla małych firm",
    description:
      "Prowadź faktury, umowy i dokumentację na darmowych, prywatnych narzędziach PDF – bez abonamentu na każdego pracownika. Które narzędzie do jakiego zadania i gdzie pasuje aplikacja.",
  },
  {
    id: "guides/pdf-vs-jpg-for-documents",
    slug: "poradniki/pdf-czy-jpg-dla-dokumentow",
    title: "PDF czy JPG dla dokumentów — przestań wysyłać zdjęcia",
    description:
      "Dlaczego zdjęcie dokumentu w formacie JPG to zła rzecz do wysłania, kiedy PDF jest właściwym wyborem i jak przekonwertować zdjęcie w prawdziwy dokument.",
  },
  {
    id: "guides/when-to-use-pdf-instead-of-docx",
    slug: "poradniki/kiedy-wyslac-pdf-zamiast-docx",
    title: "Kiedy wysłać PDF zamiast DOCX (checklista)",
    description:
      "Masz dokument Word – czy powinieneś wysłać go jako PDF? Szybka checklista momentów, w których PDF to trafny wybór, i jak dokonać konwersji.",
  },
  {
    id: "guides/browser-based-pdf-tools-vs-upload-tools",
    slug: "poradniki/narzedzia-pdf-w-przegladarce-a-z-przesylaniem",
    title: "Narzędzia PDF w przeglądarce a narzędzia z przesyłaniem plików",
    description:
      "Nie wszystkie narzędzia PDF „online” są takie same. Różnica między narzędziami, które działają w Twojej przeglądarce, a tymi, które przesyłają Twój plik na serwer – i jak je odróżnić.",
  },
  {
    id: "guides/privacy-first-pdf-tools",
    slug: "poradniki/narzedzia-pdf-stawiajace-na-prywatnosc",
    title: "Narzędzia PDF stawiające na prywatność — dokumenty zostają na urządzeniu",
    description:
      "Pliki PDF przechowują niektóre z Twoich najbardziej wrażliwych danych. Jak pracować z nimi bez przesyłania czegokolwiek i co naprawdę oznacza „prywatność na pierwszym miejscu”.",
  },
  {
    id: "guides/common-pdf-mistakes-to-avoid",
    slug: "poradniki/czeste-bledy-z-pdf",
    title: "Częste błędy przy pracy z PDF, których warto unikać",
    description:
      "Błędy z PDF, które marnują czas albo wyciekają informacje – zbyt mocna kompresja, wysyłanie zdjęć zamiast dokumentów, przesyłanie wrażliwych plików, zapominanie o stronach – i jak ich uniknąć.",
  },
  {
    id: "guides/why-wont-my-pdf-open",
    slug: "poradniki/dlaczego-moj-pdf-sie-nie-otwiera",
    title: "Dlaczego mój PDF się nie otwiera? Przyczyny i praktyczne rozwiązania",
    description:
      "PDF, który nie chce się otworzyć, to niemal zawsze jedna z pięciu przyczyn. Jak rozpoznać uszkodzone pobieranie, blokadę hasłem, błąd czytnika czy stary plik – i co naprawia każdą z nich.",
  },
  {
    id: "guides/why-is-my-pdf-blank",
    slug: "poradniki/dlaczego-moj-pdf-jest-pusty",
    title: "Dlaczego mój PDF jest pusty? Prawdziwe przyczyny i jak go odzyskać",
    description:
      "Gdy PDF otwiera się z pustymi stronami, treść zwykle wciąż tam jest – tylko ukryta przez błąd renderowania, brakującą czcionkę albo błąd skanu. Jak ustalić, co się stało, i przywrócić dokument.",
  },
  {
    id: "guides/why-cant-i-edit-a-pdf",
    slug: "poradniki/dlaczego-nie-moge-edytowac-pdf",
    title: "Dlaczego nie mogę edytować tego PDF? Prawdziwe przyczyny",
    description:
      "PDF został zaprojektowany tak, by opierać się edycji, ale kilka konkretnych rzeczy – skany, flagi zabezpieczeń, ograniczenia czytnika – sprawia, że niektóre pliki są trudniejsze od innych. Co blokuje Twój plik i co naprawdę pomaga.",
  },
  {
    id: "guides/why-is-my-pdf-blurry",
    slug: "poradniki/dlaczego-moj-pdf-jest-rozmyty",
    title: "Dlaczego mój PDF jest rozmyty? Rozdzielczość, kompresja i skanowanie",
    description:
      "Rozmyte pliki PDF biorą się z niskiej rozdzielczości skanu, zbyt agresywnej kompresji lub nieudanego eksportu – nie z samego formatu. Jak rozpoznać, z którą przyczyną masz do czynienia, i jak odzyskać ostrość.",
  },
  {
    id: "guides/how-to-fix-a-corrupted-pdf",
    slug: "poradniki/jak-naprawic-uszkodzony-plik-pdf",
    title: "Jak naprawić uszkodzony plik PDF (co naprawdę działa)",
    description:
      "Większość „uszkodzonych” plików PDF wcale nie jest uszkodzona – to przerwane pobieranie, niedopasowanie czytnika albo niedokończony zapis. Uczciwa lista rozwiązań, które odzyskują plik, i moment, w którym plik jest naprawdę stracony.",
  },
  {
    id: "guides/how-to-fix-pdf-printing-issues",
    slug: "poradniki/jak-naprawic-problemy-z-drukowaniem-pdf",
    title: "Jak naprawić problemy z drukowaniem PDF (ucięte strony, zła skala, brakujący tekst)",
    description:
      "Gdy PDF drukuje się przycięty, w złej skali albo z brakującym tekstem, rozwiązanie zależy od objawu. Krótka tabela łącząca każdy problem z druku z właściwym ustawieniem lub poprawką przed wydrukiem.",
  },
  {
    id: "guides/how-to-fix-pdf-upload-errors",
    slug: "poradniki/jak-naprawic-bledy-przesylania-pdf",
    title: "Jak naprawić błędy przesyłania PDF na portal (za duży, odrzucony, zawieszony)",
    description:
      "Portale odrzucają pliki PDF z kilku powodów: rozmiar, liczba stron, sztywność formatu albo niestabilne przesyłanie. Jak rozpoznać, który z nich Cię dotyczy, i sprawić, żeby plik został zaakceptowany za następnym razem.",
  },
  {
    id: "guides/how-to-fix-pdf-formatting-problems",
    slug: "poradniki/jak-naprawic-problemy-z-formatowaniem-pdf",
    title: "Jak naprawić problemy z formatowaniem PDF (zawijanie tekstu, marginesy, odstępy)",
    description:
      "Gdy układ PDF wygląda na zepsuty – tekst się przelewa, marginesy nie zgadzają się, odstępy są pomieszane – rozwiązanie zwykle leży w dokumencie źródłowym, nie w samym PDF. Najczystszy sposób na dobrze wyglądający eksport.",
  },
  {
    id: "guides/how-to-fix-scanned-pdf-quality",
    slug: "poradniki/jak-poprawic-jakosc-zeskanowanego-pdf",
    title: "Jak poprawić jakość zeskanowanego PDF (wyostrzanie, prostowanie, kolor)",
    description:
      "Zeskanowane pliki PDF psują się w przewidywalny sposób: przekrzywienie, wyblakły kontrast, poplamione tło, zbyt duże pliki. Ustawienia przed skanowaniem i narzędzia po nim, które naprawdę to porządkują.",
  },
  {
    id: "guides/how-to-fix-pdf-font-issues",
    slug: "poradniki/jak-naprawic-problemy-z-czcionkami-w-pdf",
    title: "Jak naprawić problemy z czcionkami w PDF (brakujące, zastąpione, poplątane)",
    description:
      "Gdy PDF pokazuje złą czcionkę, kwadraciki zamiast znaków albo zastąpiony tekst, zwykle brakuje w nim osadzonej czcionki. Jak działa osadzanie czcionek i co zmienić przy eksporcie.",
  },
  {
    id: "guides/best-pdf-tools-for-remote-work",
    slug: "poradniki/najlepsze-narzedzia-pdf-do-pracy-zdalnej",
    title: "Najlepsze narzędzia PDF do pracy zdalnej (za darmo, w przeglądarce)",
    description:
      "Narzędzia PDF, które sprawdzają się, gdy Twoim biurem jest laptop i telefon – podpisuj, kompresuj, łącz, skanuj, udostępniaj – wszystko bez instalacji i licencji na pracownika.",
  },
  {
    id: "guides/best-pdf-tools-for-office-documents",
    slug: "poradniki/najlepsze-narzedzia-pdf-do-dokumentow-biurowych",
    title: "Najlepsze narzędzia PDF do dokumentów biurowych (Word, Excel, raporty)",
    description:
      "Zestaw narzędzi PDF, którego naprawdę potrzebuje praca biurowa: czyste konwersje Word↔PDF w obie strony, łączenie wielu dokumentów, zmiana kolejności stron i niezawodna kompresja do załączników mailowych.",
  },
  {
    id: "guides/best-pdf-workflow-for-teams",
    slug: "poradniki/najlepszy-sposob-pracy-z-pdf-w-zespole",
    title: "Najlepszy sposób pracy z PDF w zespole (wspólne pliki, recenzje, akceptacje)",
    description:
      "Jak małe zespoły przekazują dokumenty bez płatnych abonamentów PDF: powtarzalny proces przekazywania wersji roboczych, recenzji i podpisanych akceptacji z darmowymi narzędziami w przeglądarce.",
  },
  {
    id: "guides/how-to-share-pdfs-with-clients",
    slug: "poradniki/jak-udostepniac-pdf-klientom",
    title: "Jak udostępniać PDF klientom (profesjonalnie i prywatnie)",
    description:
      "Krótki plan działania na wysyłkę PDF do klientów – dopasowanie rozmiaru do maila, wybór hasła, oznaczenie pliku marką, potwierdzenie odbioru – bez przesyłania czegokolwiek do zewnętrznych serwisów.",
  },
  {
    id: "guides/how-to-prepare-pdf-for-business-use",
    slug: "poradniki/jak-przygotowac-pdf-do-uzytku-biznesowego",
    title: "Jak przygotować PDF do użytku biznesowego (checklista porządkowa)",
    description:
      "Zanim PDF opuści biuro: usuń wersje robocze, sprawdź numerację stron, popraw orientację, osadź czcionki i zmniejsz plik. Checklista przed wysyłką dla dokumentów reprezentujących Twoją firmę.",
  },
  {
    id: "guides/how-to-send-contracts-as-pdf",
    slug: "poradniki/jak-wysylac-umowy-w-pdf",
    title: "Jak wysyłać umowy w PDF (podpisz, zablokuj, dostarcz)",
    description:
      "Umowy wymagają bardziej rygorystycznego sposobu pracy z PDF: zablokowania treści, dodania podpisu, oznaczenia wersji roboczych znakiem wodnym i przygotowania ostatecznego pliku, który druga strona może podpisać bez zbędnej wymiany wiadomości.",
  },
  {
    id: "guides/how-to-organize-work-documents-as-pdf",
    slug: "poradniki/jak-organizowac-dokumenty-firmowe-w-pdf",
    title: "Jak organizować dokumenty firmowe w PDF (foldery, nazwy, wersje)",
    description:
      "Praktyczna konwencja nazewnictwa i folderów dla firmowych plików PDF – wycen, briefów, materiałów końcowych, archiwów – która eliminuje chaos wersji i pozwala każdemu szybko wszystko znaleźć.",
  },
  {
    id: "guides/how-to-manage-invoices-as-pdf",
    slug: "poradniki/jak-zarzadzac-fakturami-w-pdf",
    title: "Jak zarządzać fakturami w PDF (wystawianie, śledzenie, archiwizacja)",
    description:
      "Sposób pracy z fakturami w PDF, który nie wymaga oprogramowania księgowego: generuj, numeruj, wysyłaj, śledź i archiwizuj – wyłącznie za pomocą darmowych narzędzi w przeglądarce i uporządkowanego systemu folderów.",
  },
  {
    id: "guides/how-to-create-client-ready-pdf-files",
    slug: "poradniki/jak-tworzyc-pliki-pdf-gotowe-dla-klienta",
    title: "Jak tworzyć pliki PDF gotowe dla klienta (dopracowane, zgodne z marką)",
    description:
      "Co odróżnia PDF do użytku wewnętrznego od tego gotowego dla klienta: strona tytułowa, numeracja stron, identyfikacja marki, rozmiar pliku, nazwa pliku. Szybkie szlify, które sprawiają, że dokument wygląda na ukończony.",
  },
  {
    id: "guides/pdf-workflows-for-small-business",
    slug: "poradniki/sposoby-pracy-z-pdf-dla-malych-firm",
    title: "Sposoby pracy z PDF dla małych firm (wyceny, umowy, dokumentacja)",
    description:
      "Jak mała firma prowadzi obieg dokumentów w PDF – wysłane wyceny, podpisane umowy, zarchiwizowana dokumentacja – bez kupowania stosu abonamentów tylko do tego celu.",
  },
  {
    id: "guides/pdf-workflows-for-consultants",
    slug: "poradniki/sposoby-pracy-z-pdf-dla-konsultantow",
    title: "Sposoby pracy z PDF dla konsultantów (oferty, raporty, faktury)",
    description:
      "Rytm pracy konsultanta z PDF: oferty, które zamykają sprzedaż, raporty czytelne na telefonie, faktury gotowe w kilka sekund. Narzędzia w przeglądarce, które utrzymują wszystko lekkie.",
  },
  {
    id: "guides/pdf-workflows-for-agencies",
    slug: "poradniki/sposoby-pracy-z-pdf-dla-agencji",
    title: "Sposoby pracy z PDF dla agencji (prezentacje, briefy, akceptacje)",
    description:
      "Łańcuch dokumentów PDF w agencji – prezentacje ofertowe, briefy kreatywne, akceptacje klientów, materiały końcowe – utrzymany w szybkim i przewidywalnym tempie dzięki darmowym, prywatnym narzędziom w przeglądarce.",
  },
  {
    id: "guides/how-to-submit-homework-as-pdf",
    slug: "poradniki/jak-oddac-prace-domowa-w-pdf",
    title: "Jak oddać pracę domową w PDF (bez dramatów z portalem)",
    description:
      "Portale szkolne odrzucają prace domowe z przewidywalnych powodów – rozmiar pliku, liczba stron, format. Najprostsza droga od gotowego zadania do zaakceptowanego pliku PDF.",
  },
  {
    id: "guides/how-to-scan-notes-to-pdf",
    slug: "poradniki/jak-zeskanowac-notatki-do-pdf",
    title: "Jak zeskanować odręczne notatki do PDF (czytelne, przeszukiwalne)",
    description:
      "Zamień strony odręcznych notatek z wykładu w czyste, wielostronicowe pliki PDF za pomocą aparatu w telefonie. Ustawienia, które dają czytelne skany już za pierwszym razem.",
  },
  {
    id: "guides/how-to-compress-pdf-for-school-portals",
    slug: "poradniki/jak-skompresowac-pdf-na-portale-szkolne",
    title: "Jak skompresować PDF na potrzeby portali szkolnych (surowe limity)",
    description:
      "Portale szkolne i uczelniane ograniczają rozmiar plików PDF ostrzej niż poczta e-mail. Jak skompresować zadanie tak, by zmieściło się w limicie, nie niszcząc czytelności, którą sprawdza prowadzący.",
  },
  {
    id: "guides/how-to-convert-lecture-notes-to-pdf",
    slug: "poradniki/jak-przekonwertowac-notatki-z-wykladu-do-pdf",
    title: "Jak przekonwertować notatki z wykładu do PDF (Word, zdjęcia, slajdy)",
    description:
      "Notatki z wykładu przychodzą w każdym możliwym formacie – dokument Word, prezentacja, zrzut ekranu, zdjęcie tablicy. Jak zamienić każdy z nich w jeden czytelny PDF bez utraty struktury.",
  },
  {
    id: "guides/how-to-organize-study-materials-as-pdf",
    slug: "poradniki/jak-uporzadkowac-materialy-do-nauki-w-pdf",
    title: "Jak uporządkować materiały do nauki w PDF (foldery, nazewnictwo, indeks)",
    description:
      "Pliki PDF z zajęć szybko się piętrzą. Prosta konwencja folderów, nazewnictwa i łączenia plików, która utrzymuje materiały z całego semestru przeszukiwalne od pierwszego tygodnia aż po sesję.",
  },
  {
    id: "guides/how-to-share-study-notes-as-pdf",
    slug: "poradniki/jak-udostepniac-notatki-do-nauki-w-pdf",
    title: "Jak udostępniać notatki do nauki w PDF (grupa, czat grupowy, chmura)",
    description:
      "Udostępniaj notatki grupie do nauki bez utraty formatowania czy kontroli wersji. Nawyki pracy z PDF, które nie pozwalają wspólnej nauce zamienić się w chaos zrzutów ekranu.",
  },
  {
    id: "guides/how-to-edit-class-documents-as-pdf",
    slug: "poradniki/jak-edytowac-dokumenty-szkolne-w-pdf",
    title: "Jak edytować dokumenty szkolne w PDF (adnotacje, zakreślanie, podpis)",
    description:
      "Materiały z zajęć, zestawy zadań i zgody rodziców często przychodzą jako pliki PDF. Jak je oznaczyć, wypełnić i odesłać bez drukowania – wszystko na telefonie lub laptopie.",
  },
  {
    id: "guides/pdf-workflow-for-university-students",
    slug: "poradniki/sposob-pracy-z-pdf-dla-studentow",
    title: "Sposób pracy z PDF dla studentów (notatki, zadania, oddawanie prac)",
    description:
      "Rytm pracy z PDF na cały semestr, który przetrwa sesję: zeskanowane notatki z wykładów, oddane zadania, udostępnione materiały do nauki. Wszystko w przeglądarce i za darmo.",
  },
  {
    id: "guides/how-to-create-digital-study-pdfs",
    slug: "poradniki/jak-tworzyc-cyfrowe-materialy-do-nauki-w-pdf",
    title: "Jak tworzyć cyfrowe materiały do nauki w PDF (fiszki, podsumowania, zestawy)",
    description:
      "Zbuduj własne pliki PDF do nauki z notatek, slajdów i zakreśleń – przeszukiwalne, przenośne, gotowe do adnotacji na tablecie. Struktura, dzięki której naprawdę przydadzą się w czasie egzaminu.",
  },
  {
    id: "guides/are-online-pdf-tools-safe",
    slug: "poradniki/czy-narzedzia-pdf-online-sa-bezpieczne",
    title: "Czy narzędzia PDF online są bezpieczne? Uczciwe spojrzenie na ryzyko",
    description:
      "Większość narzędzi PDF „online” przesyła Twój plik na serwer. Niektóre tego nie robią. Prawdziwe ryzyko, kategorie narzędzi, które inaczej traktują dane, i jak je od siebie odróżnić.",
  },
  {
    id: "guides/how-to-protect-sensitive-pdf-files",
    slug: "poradniki/jak-chronic-wrazliwe-pliki-pdf",
    title: "Jak chronić wrażliwe pliki PDF (przechowywanie, udostępnianie, cykl życia)",
    description:
      "Wrażliwe pliki PDF wymagają ochrony w trzech momentach: podczas przechowywania, podczas udostępniania i po tym, jak odbiorca skończy z nich korzystać. Praktyczny sposób pracy obejmujący wszystkie trzy.",
  },
  {
    id: "guides/how-to-share-pdf-files-privately",
    slug: "poradniki/jak-udostepniac-pliki-pdf-prywatnie",
    title: "Jak udostępniać pliki PDF prywatnie (bez przesyłania do obcych serwisów)",
    description:
      "Prywatny sposób udostępniania PDF nie prowadzi przez publiczną stronę z „narzędziami PDF”. Kanały, które zostawiają dokument tylko między Tobą a odbiorcą, z sensownymi ustawieniami domyślnymi.",
  },
  {
    id: "guides/privacy-first-document-workflows",
    slug: "poradniki/sposoby-pracy-z-dokumentami-stawiajace-na-prywatnosc",
    title: "Sposoby pracy z dokumentami stawiające na prywatność (od początku do końca bez przesyłania)",
    description:
      "Cały sposób pracy z dokumentami – przechwytywanie, edycja, podpis, wysyłka, archiwizacja – który utrzymuje pliki na Twoich urządzeniach i z dala od serwerów firm trzecich. Realistyczny kształt i konkretne narzędzia.",
  },
  {
    id: "guides/local-browser-pdf-processing-explained",
    slug: "poradniki/lokalne-przetwarzanie-pdf-w-przegladarce",
    title: "Lokalne przetwarzanie PDF w przeglądarce, wyjaśnione (jak to naprawdę działa)",
    description:
      "Jak narzędzie PDF może działać w przeglądarce, nie wysyłając Twojego pliku nigdzie indziej. Technologia, kompromisy i jak sprawdzić, czy narzędzie naprawdę działa lokalnie.",
  },
  {
    id: "guides/do-online-pdf-tools-store-files",
    slug: "poradniki/czy-narzedzia-pdf-online-przechowuja-pliki",
    title: "Czy narzędzia PDF online przechowują Twoje pliki? Co sprawdzić",
    description:
      "Niektóre narzędzia PDF online usuwają przesłane pliki natychmiast, inne trzymają je godzinami, a jeszcze inne bezterminowo. Jak szybko przeczytać politykę prywatności i na co zwracać uwagę.",
  },
  {
    id: "guides/how-to-avoid-uploading-sensitive-documents",
    slug: "poradniki/jak-unikac-przesylania-wrazliwych-dokumentow",
    title: "Jak unikać przesyłania wrażliwych dokumentów (praktyczne alternatywy)",
    description:
      "Gdy jakiś proces kusi, żeby przesłać wrażliwy PDF na serwer, niemal zawsze istnieje alternatywa działająca wyłącznie lokalnie. Kategorie zadań i narzędzie bez przesyłania dla każdej z nich.",
  },
  {
    id: "guides/secure-pdf-workflows-for-business",
    slug: "poradniki/bezpieczne-sposoby-pracy-z-pdf-dla-firm",
    title: "Bezpieczne sposoby pracy z PDF dla firm (bez stosu narzędzi enterprise)",
    description:
      "Mała firma nie potrzebuje certyfikowanego skarbca PDF klasy SOC2, żeby działać bezpiecznie. Realistyczny fundament – szyfrowane przechowywanie, podpisane przesyłki, lokalne przetwarzanie – który odpowiada rzeczywistemu ryzyku.",
  },
  {
    id: "guides/browser-based-document-processing-benefits",
    slug: "poradniki/zalety-przetwarzania-dokumentow-w-przegladarce",
    title: "Zalety przetwarzania dokumentów w przeglądarce (szybkość, prywatność, koszt)",
    description:
      "Dlaczego przetwarzanie plików PDF w przeglądarce zmienia rachunek szybkości, prywatności i kosztu w porównaniu z tradycyjnymi narzędziami chmurowymi, i gdzie naprawdę leżą granice lokalnego przetwarzania.",
  },
  {
    id: "guides/pdf-vs-google-docs",
    slug: "poradniki/pdf-czy-google-docs",
    title: "PDF czy Google Docs — kiedy używać którego (edycja, udostępnianie, blokowanie)",
    description:
      "Google Docs służy do współpracy, PDF do dostarczania gotowego dokumentu. Realistyczne wskazówki, kiedy używać którego, i jak czysto konwertować między nimi we właściwych momentach.",
  },
  {
    id: "guides/pdf-vs-docx-for-business",
    slug: "poradniki/pdf-czy-docx-w-firmie",
    title: "PDF czy DOCX w firmie (umowy, raporty, dystrybucja)",
    description:
      "Dlaczego dokumenty firmowe niemal zawsze trafiają do odbiorcy jako PDF, ale funkcjonują na co dzień jako DOCX. Właściwe narzędzie na każdym etapie życia umowy, raportu czy faktury.",
  },
  {
    id: "guides/pdf-vs-images-for-sharing-documents",
    slug: "poradniki/pdf-czy-obrazy-do-udostepniania-dokumentow",
    title: "PDF czy obrazy do udostępniania dokumentów (JPG, PNG, HEIC)",
    description:
      "Kiedy JPG, PNG lub HEIC dokumentu to zły wybór – i co sprawia, że PDF jest właściwym formatem do wszystkiego poza szybkim zrzutem ekranu.",
  },
  {
    id: "guides/pdf-vs-png",
    slug: "poradniki/pdf-czy-png",
    title: "PDF czy PNG — dokumenty wielostronicowe kontra pojedyncze ostre obrazy",
    description:
      "PDF wygrywa przy dokumentach wielostronicowych, PNG przy pojedynczych, ostrych obrazach z przezroczystym tłem. Jasne zasady i konwersja między nimi.",
  },
  {
    id: "guides/best-format-for-sharing-documents",
    slug: "poradniki/najlepszy-format-do-udostepniania-dokumentow",
    title: "Najlepszy format do udostępniania dokumentów (PDF, DOCX, obrazy)",
    description:
      "Kiedy PDF jest właściwym formatem do udostępnienia, kiedy nie jest, i jak realistyczne alternatywy (DOCX, obrazy, HTML, Markdown) wypadają w codziennych sytuacjach.",
  },
  {
    id: "guides/why-pdf-is-still-popular",
    slug: "poradniki/dlaczego-pdf-wciaz-jest-popularny",
    title: "Dlaczego PDF wciąż jest domyślnym formatem dokumentów w 2026 roku",
    description:
      "Po dekadach PDF nadal dominuje w udostępnianiu dokumentów. Powody, dla których się utrzymał – wierność, uniwersalność, możliwość podpisu, przyjazność dla archiwizacji – i miejsca, w których jest podatny.",
  },
  {
    id: "guides/when-to-use-scanned-pdf",
    slug: "poradniki/kiedy-uzywac-zeskanowanego-pdf",
    title: "Kiedy używać zeskanowanego PDF (a kiedy nie)",
    description:
      "Zeskanowane pliki PDF rozwiązują konkretny problem – zamianę papieru na cyfrę. Są też większe, mniej przeszukiwalne i trudniejsze do edycji. Kiedy ten kompromis się opłaca.",
  },
  {
    id: "guides/editable-pdf-vs-flat-pdf",
    slug: "poradniki/pdf-edytowalny-czy-pdf-obraz",
    title: "PDF edytowalny czy PDF-obraz — na czym naprawdę polega różnica",
    description:
      "Niektóre pliki PDF mają prawdziwy, zaznaczalny tekst i edytowalną strukturę; inne to po prostu obrazy stron bez żadnej warstwy tekstowej. Jak rozpoznać, który masz, i kiedy który się sprawdza.",
  },
  {
    id: "guides/best-free-pdf-tools",
    slug: "poradniki/najlepsze-darmowe-narzedzia-pdf",
    title: "Najlepsze darmowe narzędzia PDF w 2026 roku (uczciwy wybór, bez rejestracji)",
    description:
      "Darmowe narzędzia PDF, które naprawdę warto znać – do kompresji, łączenia, podpisywania, konwersji i skanowania – wybrane za rzeczywistą jakość i prywatność, a nie za liczbę reklam czy długość wersji próbnej.",
  },
  {
    id: "guides/free-browser-based-pdf-tools",
    slug: "poradniki/darmowe-narzedzia-pdf-w-przegladarce",
    title: "Darmowe narzędzia PDF w przeglądarce (bez instalacji, bez przesyłania)",
    description:
      "Narzędzia PDF, które działają w całości w Twojej przeglądarce – bez instalacji, bez konta, bez przesyłania plików. Co jest dostępne, co obejmuje i jak sprawdzić, że naprawdę działają lokalnie.",
  },
  {
    id: "guides/best-pdf-tools-without-upload",
    slug: "poradniki/najlepsze-narzedzia-pdf-bez-przesylania",
    title: "Najlepsze narzędzia PDF bez przesyłania plików (pliki zostają na urządzeniu)",
    description:
      "Gdy nie chcesz, żeby Twój PDF opuszczał urządzenie, to są narzędzia, które pracują lokalnie. Kompresja, łączenie, konwersja – wszystko z plikami pozostającymi na Twoim komputerze.",
  },
  {
    id: "guides/best-private-pdf-tools",
    slug: "poradniki/najlepsze-prywatne-narzedzia-pdf",
    title: "Najlepsze prywatne narzędzia PDF (gdy poufność naprawdę się liczy)",
    description:
      "Do umów, dokumentów finansowych i innych wrażliwych plików PDF – to są narzędzia, które szanują prywatność dzięki samej konstrukcji, a nie tylko deklaracji w regulaminie.",
  },
  {
    id: "guides/free-pdf-tools-for-iphone",
    slug: "poradniki/darmowe-narzedzia-pdf-na-iphone",
    title: "Darmowe narzędzia PDF na iPhone'a (przeglądarka i aplikacje)",
    description:
      "Darmowe narzędzia PDF na iPhone'a, które naprawdę działają bez abonamentu – kompresja, podpis, skanowanie, konwersja. Opcje w przeglądarce oraz aplikacja PDF Editor do pracy offline.",
  },
  {
    id: "guides/free-pdf-tools-for-android",
    slug: "poradniki/darmowe-narzedzia-pdf-na-androida",
    title: "Darmowe narzędzia PDF na Androida (przeglądarka i aplikacje)",
    description:
      "Darmowe narzędzia PDF na Androida wybrane pod codzienne zadania – kompresja, podpis, skanowanie, konwersja. Rozwiązania w przeglądarce mobilnej oraz aplikacja PDF Editor do użytku offline.",
  },
  {
    id: "guides/what-is-a-pdf-form",
    slug: "poradniki/czym-jest-formularz-pdf",
    title: "Czym jest formularz PDF? Formularze interaktywne i nieinteraktywne",
    description:
      "Formularz PDF to dokument stworzony do zbierania odpowiedzi – czasem z prawdziwymi polami, w które wpisujesz tekst, a czasem jako formularz nieinteraktywny, czyli w praktyce obraz strony, na którym się tylko pisze. Co to oznacza i jak to rozpoznać.",
  },
  {
    id: "guides/editable-pdf-vs-fillable-pdf",
    slug: "poradniki/pdf-edytowalny-czy-do-wypelnienia",
    title: "PDF edytowalny czy PDF do wypełnienia — na czym polega różnica?",
    description:
      "Edycja PDF zmienia jego treść; wypełnianie PDF oznacza wpisywanie odpowiedzi w polach formularza. Dlaczego to dwa różne zadania i którego z nich faktycznie potrzebujesz.",
  },
  {
    id: "guides/how-pdf-forms-work",
    slug: "poradniki/jak-dzialaja-formularze-pdf",
    title: "Jak działają formularze PDF — pola, AcroForm i nieinteraktywne skany",
    description:
      "Pod maską formularz PDF to albo zestaw interaktywnych pól nałożonych na stronę, albo obraz bez żadnych pól – formularz nieinteraktywny. Jak zbudowany jest jeden i drugi typ i dlaczego ma to znaczenie przy wypełnianiu.",
  },
  {
    id: "guides/can-you-edit-a-pdf-form",
    slug: "poradniki/czy-mozna-edytowac-formularz-pdf",
    title: "Czy można edytować formularz PDF? Co można zmienić, a czego nie",
    description:
      "Edycja pytań w formularzu PDF to co innego niż jego wypełnianie. Co da się zmienić, co jest zablokowane i jak zmodyfikować formularz, który masz tylko jako gotowy plik PDF.",
  },
  {
    id: "guides/how-to-fill-out-a-pdf-form",
    slug: "poradniki/jak-wypelnic-formularz-pdf",
    title: "Jak wypełnić formularz PDF (interaktywny lub nieinteraktywny)",
    description:
      "Wypełnij dowolny formularz PDF, niezależnie od tego, czy ma prawdziwe pola, czy jest nieinteraktywnym skanem, na którym piszesz. Kompletna instrukcja na komputer i telefon, wraz z podpisywaniem i zapisywaniem.",
  },
  {
    id: "guides/how-to-save-a-filled-pdf-form",
    slug: "poradniki/jak-zapisac-wypelniony-formularz-pdf",
    title: "Jak zapisać wypełniony formularz PDF, żeby odpowiedzi zostały",
    description:
      "Wypełniasz formularz, a potem odpowiedzi znikają? Jak niezawodnie zapisać dane formularza, dlaczego niektóre czytniki tego nie robią i kiedy utrwalić dane pól przed wysłaniem.",
  },
  {
    id: "guides/why-cant-i-type-in-a-pdf-form",
    slug: "poradniki/dlaczego-nie-moge-pisac-w-formularzu-pdf",
    title: "Dlaczego nie mogę pisać w formularzu PDF? Przyczyny i rozwiązania",
    description:
      "Klikasz w pole i nic się nie dzieje. Trzy najczęstsze przyczyny – formularz nieinteraktywny, zły czytnik albo zablokowany plik – i dokładnie co zrobić w każdym z tych przypadków.",
  },
  {
    id: "guides/how-to-create-a-fillable-pdf",
    slug: "poradniki/jak-stworzyc-pdf-do-wypelniania",
    title: "Jak stworzyć PDF do wypełniania — uczciwe opcje i ograniczenia",
    description:
      "Co naprawdę jest potrzebne, żeby stworzyć PDF, który inni będą mogli wypełnić – interaktywne pola albo prosty nieinteraktywny szablon – i które podejście pasuje do narzędzi, którymi dysponujesz.",
  },
  {
    id: "guides/how-to-share-a-pdf-form",
    slug: "poradniki/jak-udostepnic-formularz-pdf-do-wypelnienia",
    title: "Jak udostępnić formularz PDF do wypełnienia przez innych",
    description:
      "Wysłanie pustego formularza do wypełnienia to co innego niż wysłanie gotowego dokumentu. Jak udostępnić formularz tak, żeby odbiorcy faktycznie mogli go wypełnić, i jak zebrać wyniki.",
  },
  {
    id: "guides/how-to-print-a-filled-pdf-form",
    slug: "poradniki/jak-wydrukowac-wypelniony-formularz-pdf",
    title: "Jak wydrukować wypełniony formularz PDF z widocznymi odpowiedziami",
    description:
      "Wydrukowałeś formularz, a pola wyszły puste? Dlaczego wpisane wartości czasem się nie drukują i jak uzyskać czystą papierową kopię z każdą widoczną odpowiedzią.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-iphone",
    slug: "poradniki/jak-wypelniac-formularze-pdf-na-iphonie",
    title: "Jak wypełniać formularze PDF na iPhonie (Pliki, Markup i aplikacje)",
    description:
      "Wypełniaj interaktywne i nieinteraktywne formularze PDF na iPhonie – za pomocą Plików i Markup albo dedykowanej aplikacji PDF. Kroki specyficzne dla iOS, droga przez menu udostępniania i miejsca, w których Markup zawodzi.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-android",
    slug: "poradniki/jak-wypelniac-formularze-pdf-na-androidzie",
    title: "Jak wypełniać formularze PDF na Androidzie (dowolny telefon)",
    description:
      "Wypełniaj interaktywne i nieinteraktywne formularze PDF na Androidzie. Dlaczego wbudowana przeglądarka plików często nie pozwala pisać, niezawodna droga przez aplikację i jak różnice między producentami wpływają na formularze.",
  },
  {
    id: "guides/how-to-send-a-completed-pdf-form",
    slug: "poradniki/jak-wyslac-wypelniony-formularz-pdf",
    title: "Jak wysłać wypełniony formularz PDF (utrwalić i dostarczyć)",
    description:
      "Wypełniłeś formularz – teraz odeślij go porządnie. Jak utrwalić dane pól, żeby odpowiedzi nie dało się już zmienić, jak dołączyć plik we właściwy sposób i upewnić się, że dotarł bez utraty danych.",
  },
  {
    id: "guides/how-to-fill-government-pdf-forms-on-phone",
    slug: "poradniki/jak-wypelniac-urzedowe-formularze-pdf-na-telefonie",
    title: "Jak wypełniać urzędowe formularze PDF na telefonie",
    description:
      "Formularze urzędowe to często nieinteraktywne skany o sztywnym formacie. Jak wypełnić je na telefonie, poradzić sobie z niewygodnymi polami i trzymać się instrukcji samego urzędu.",
  },
  {
    id: "guides/mobile-pdf-form-workflow",
    slug: "poradniki/sposob-pracy-z-formularzami-pdf-na-telefonie",
    title: "Sposób pracy z formularzami PDF na telefonie (od odbioru do wysyłki)",
    description:
      "Powtarzalna rutyna dla formularzy skupiona na telefonie: odbierz, otwórz we właściwej aplikacji, wypełnij, podpisz, utrwal dane pól, wyślij. Kompletny proces bez potrzeby użycia komputera.",
  },
  {
    id: "guides/best-pdf-form-app-for-iphone",
    slug: "poradniki/najlepsza-aplikacja-do-formularzy-pdf-na-iphone",
    title: "Najlepsza aplikacja do formularzy PDF na iPhone'a (na co zwrócić uwagę)",
    description:
      "Co naprawdę liczy się w aplikacji do formularzy PDF na iPhonie – wykrywanie pól, dopisywanie tekstu na formularzach nieinteraktywnych, podpis, prywatność na urządzeniu – i jak ocenić aplikację pod kątem własnych formularzy.",
  },
  {
    id: "guides/best-pdf-form-app-for-android",
    slug: "poradniki/najlepsza-aplikacja-do-formularzy-pdf-na-androida",
    title: "Najlepsza aplikacja do formularzy PDF na Androida (jak wybrać)",
    description:
      "Jak wybrać aplikację do formularzy PDF na Androida: wykrywanie pól, dopisywanie tekstu na formularzach nieinteraktywnych i prywatność na urządzeniu – oraz dlaczego dedykowana aplikacja bije domyślną przeglądarkę plików przy formularzach.",
  },
  {
    id: "guides/pdf-forms-for-small-business",
    slug: "poradniki/formularze-pdf-dla-malych-firm",
    title: "Formularze PDF dla małych firm (zgłoszenia, zamówienia, kadry)",
    description:
      "Codzienne formularze, na których działa mała firma – zgłoszenia klientów, zamówienia, rezerwacje, proste sprawy kadrowe – oraz jak je wypełniać, zbierać i zarządzać nimi jako plikami PDF bez kupowania platformy do formularzy.",
  },
  {
    id: "guides/how-to-send-client-intake-forms",
    slug: "poradniki/jak-wysylac-formularze-zgloszeniowe-dla-klientow",
    title: "Jak wysyłać formularze zgłoszeniowe dla klientów (porządnie i prywatnie)",
    description:
      "Zbierz dane nowego klienta za jednym razem, bez bałaganu. Jak wysłać formularz zgłoszeniowy PDF tak, żeby łatwo się go wypełniało, wracał kompletny i chronił prywatność danych klienta.",
  },
  {
    id: "guides/how-to-use-pdf-forms-for-contracts",
    slug: "poradniki/jak-wykorzystac-formularze-pdf-w-umowach",
    title: "Jak wykorzystać formularze PDF w umowach (pola i podpis)",
    description:
      "Zamień umowę w PDF do wypełnienia: pola na imiona i nazwiska, daty i inicjały, miejsce na podpis oraz krok utrwalenia danych, dzięki któremu podpisanej wersji nie da się już zmienić. Z uczciwie opisanymi ograniczeniami.",
  },
  {
    id: "guides/how-to-manage-pdf-application-forms",
    slug: "poradniki/jak-zarzadzac-formularzami-zgloszeniowymi-w-pdf",
    title: "Jak zarządzać formularzami zgłoszeniowymi w PDF (zbieranie i ocena)",
    description:
      "Dostajesz zgłoszenia jako pliki PDF? Jak je zbierać, oceniać, porównywać i archiwizować, nie gubiąc się w nich – prosty system do obsługi stosu wypełnionych formularzy.",
  },
  {
    id: "guides/pdf-forms-for-consultants",
    slug: "poradniki/formularze-pdf-dla-konsultantow",
    title: "Formularze PDF dla konsultantów (ankiety i zakres współpracy)",
    description:
      "Ankiety wstępne, arkusze do ustalania zakresu współpracy i formularze opinii – strona „formularzowa” konsultingu, obsługiwana jako wypełnialne pliki PDF, które klienci mogą uzupełnić na dowolnym urządzeniu.",
  },
  {
    id: "guides/pdf-forms-for-agencies",
    slug: "poradniki/formularze-pdf-dla-agencji",
    title: "Formularze PDF dla agencji (wdrażanie klientów, briefy, akceptacje)",
    description:
      "Pakiety wdrożeniowe dla klientów, formularze briefów kreatywnych i arkusze akceptacji – formularze z wieloma uczestnikami, na których działają agencje, obsługiwane jako wypełnialne pliki PDF dostępne dla każdego.",
  },
  {
    id: "guides/pdf-forms-for-freelancers",
    slug: "poradniki/formularze-pdf-dla-freelancerow",
    title: "Formularze PDF dla freelancerów (zgłoszenia, umowy, zaliczki)",
    description:
      "Zgłoszenie projektu, proste umowy o świadczenie usług i zgody na zaliczkę – skromny zestaw wypełnialnych formularzy PDF, którego potrzebuje freelancer, bez abonamentu i bez przesyłania czegokolwiek.",
  },
  {
    id: "guides/document-collection-workflows-with-pdf",
    slug: "poradniki/sposoby-zbierania-dokumentow-za-pomoca-pdf",
    title: "Sposoby zbierania dokumentów za pomocą PDF",
    description:
      "Zbierasz od klientów pliki i podpisane formularze? Zbuduj powtarzalny proces zbierania dokumentów w PDF – checklistę, spójne formaty i uporządkowany sposób śledzenia tego, czego wciąż brakuje.",
  },
  {
    id: "guides/pdf-form-best-practices",
    slug: "poradniki/dobre-praktyki-formularzy-pdf",
    title: "Dobre praktyki formularzy PDF (formularze, które ludzie kończą wypełniać)",
    description:
      "Projektuj formularze, które ludzie faktycznie kończą wypełniać: jasne etykiety, prawdziwe odstępy, sensowne pola, wyraźne miejsce na podpis i krok utrwalenia danych. Praktyczne zasady dla twórców i osób wysyłających formularze.",
  },
  {
    id: "guides/pdf-form-not-working",
    slug: "poradniki/formularz-pdf-nie-dziala",
    title: "Formularz PDF nie działa? Diagnoza i rozwiązania",
    description:
      "Formularz PDF, który sprawia problemy, zwykle ma jedną z kilku typowych przyczyn. Szybka diagnoza, która pomoże ustalić, z którą masz do czynienia – brakujące pola, brak możliwości pisania, brak zapisu, tryb tylko do odczytu – i gdzie to naprawić.",
  },
  {
    id: "guides/pdf-form-fields-missing",
    slug: "poradniki/brakuje-pol-w-formularzu-pdf",
    title: "Brakuje pól w formularzu PDF? Przyczyny i jak je przywrócić",
    description:
      "Otworzyłeś formularz, a pól nie ma? Dlaczego interaktywne pola znikają w niektórych czytnikach, jak je przywrócić i co zrobić, gdy tak naprawdę nigdy ich tam nie było.",
  },
  {
    id: "guides/why-pdf-form-wont-save",
    slug: "poradniki/dlaczego-formularz-pdf-sie-nie-zapisuje",
    title: "Dlaczego formularz PDF się nie zapisuje? I jak to naprawić",
    description:
      "Wypełniłeś formularz, a odpowiedzi znikają po ponownym otwarciu? Dlaczego niektóre czytniki tylko drukują dane pól zamiast je zapisywać, oraz niezawodne sposoby na to, żeby Twoje odpowiedzi zostały.",
  },
  {
    id: "guides/why-pdf-form-is-read-only",
    slug: "poradniki/dlaczego-formularz-pdf-jest-tylko-do-odczytu",
    title: "Dlaczego formularz PDF jest tylko do odczytu? I co z tym zrobić",
    description:
      "Twój formularz otwiera się zablokowany i wyszarzony? Dlaczego formularze bywają ustawione tylko do odczytu, jak odróżnić celowe zabezpieczenie od dziwactwa czytnika, i uczciwe opcje, żeby mimo wszystko go wypełnić.",
  },
  {
    id: "guides/pdf-form-not-printing-correctly",
    slug: "poradniki/formularz-pdf-zle-sie-drukuje",
    title: "Formularz PDF źle się drukuje? Napraw puste pola",
    description:
      "Formularz drukuje się z pustymi polami, przesuniętym tekstem albo ucinanymi krawędziami? Problemy z drukiem typowe dla formularzy – zwłaszcza brakujące wartości pól – i ustawienia, które naprawiają każdy z nich.",
  },
  {
    id: "guides/pdf-form-font-problems",
    slug: "poradniki/problemy-z-czcionka-w-formularzu-pdf",
    title: "Problemy z czcionką w formularzu PDF (autoskalowanie, ucinanie, zamiana)",
    description:
      "Tekst w polu jest za duży, za mały albo sam się zmniejsza w trakcie pisania? Dziwactwa czcionek typowe dla pól formularza – autoskalowanie, zamiana, ucinanie – i jak uzyskać czyste, czytelne odpowiedzi.",
  },
  {
    id: "guides/pdf-form-formatting-issues",
    slug: "poradniki/problemy-z-formatowaniem-formularza-pdf",
    title: "Problemy z formatowaniem formularza PDF (wyrównanie i przepełnienie)",
    description:
      "Pola są źle wyrównane, odpowiedzi wychodzą poza obszar, formularz wygląda inaczej na czyimś ekranie? Problemy z układem formularza, które różnią się między czytnikami, i jak uzyskać spójny wynik.",
  },
  {
    id: "guides/pdf-form-submission-errors",
    slug: "poradniki/bledy-przy-wysylaniu-formularza-pdf",
    title: "Błędy przy wysyłaniu formularza PDF (gdy przycisk wyślij zawodzi)",
    description:
      "Przycisk wysyłania formularza zawodzi albo nic nie robi? Dlaczego wbudowane przyciski wysyłania zależą od serwera wystawcy formularza, co oznaczają błędy, i niezawodny ręczny sposób na wysłanie formularza mimo wszystko.",
  },
  {
    id: "guides/pdf-form-compatibility-problems",
    slug: "poradniki/problemy-z-kompatybilnoscia-formularzy-pdf",
    title: "Problemy z kompatybilnością formularzy PDF (XFA i formularze dynamiczne)",
    description:
      "Formularz, który otwiera się w jednym programie, a psuje w innym, zwykle korzysta z funkcji, których nie obsługuje każdy czytnik. Jak rozpoznać formularze dynamiczne, co powoduje niezgodność i jakie masz opcje.",
  },
  {
    id: "guides/fix-pdf-form-errors",
    slug: "poradniki/napraw-bledy-formularza-pdf",
    title: "Napraw błędy formularza PDF — szybka checklista pierwszej pomocy",
    description:
      "Uniwersalne kroki pierwszej pomocy dla formularza PDF, który sprawia problemy: zmień czytnik, pobierz plik ponownie, zaktualizuj aplikację, dopisz tekst na wierzchu, utrwal dane pól. Wypróbuj je, zanim zaczniesz szukać konkretnej przyczyny.",
  },
];
