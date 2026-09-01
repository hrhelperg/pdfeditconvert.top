import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-study-materials-as-pdf",
  h1: "Ders Materyalleri PDF Olarak Nasıl Düzenlenir? (Klasör, İsimlendirme, Dizin)",
  description:
    "Ders PDF'leri hızlıca birikir. Dönem materyallerini ilk haftadan finallere kadar aranabilir tutan basit bir klasör, isimlendirme ve birleştirme kuralı.",
  updated: "2026-05-29",
  intro: [
    "Dönemin dördüncü haftasında indirilenler klasöründe “lecture7.pdf”, “final-version-2.pdf”, “Slides_v3_corrected.pdf” ve “Document.pdf” gibi adlar taşıyan elli PDF birikir. Onuncu haftada hiçbir şeyi bulamazsın. Final haftasında aynı dersi üç kez ararsın çünkü hangi dosyanın hangi sürümünde ihtiyacın olan slaydın olduğunu hatırlamazsın.",
    "Çözüm yazılım ya da uygulama değil — bir kuraldır. Kısa bir klasör yapısı, tutarlı bir dosya adı ve haftalık birleştirme alışkanlığı. Bu üçü yerine oturduğunda, iki ay sonra belirli bir dersi bulmak on beş dakika yerine beş saniye sürer.",
    "Bu kılavuz, bir dönem boyunca ayakta kalan kuralı anlatıyor: klasörlerin nasıl görünmesi gerektiği, dosya adlarının nasıl okunması gerektiği, ne zaman birleştirilmesi gerektiği ve dönem sonunda ne olacağı.",
  ],
  steps: [
    {
      title: "Ders başına üst düzey bir klasör kur",
      body: "/Dersler/[DersKodu]/. İçinde: /dersler/, /odevler/, /okumalar/, /sinavlar/. Dört klasör çoğu şeyi kapsar. İki seviyeden derine iç içe geçme.",
    },
    {
      title: "Dosya adı desenini standartlaştır",
      body: "HaftaN_BelgeTuru_YYYY-AA-GG.pdf. Yani Hafta3_Ders_2026-09-15.pdf, Odev2_Teslim_2026-09-20.pdf. Tarih sonda kronolojik sıralar; hafta önde konuya göre gruplar.",
    },
    {
      title: "Dosya başına değil, hafta başına birleştir",
      body: "Her hafta sonunda PDF Birleştir o haftanın ders notlarını, slaytlarını ve tahta fotoğraflarını tek bir Hafta3_Ders_Paketi_YYYY-AA-GG.pdf dosyasında toplar. Hafta başına tek dosya, sonradan bakmayı çok kolaylaştırır.",
    },
    {
      title: "Birleşik paketlere kapak sayfası ekle",
      body: "Yazılı bir kapak sayfası (ders, hafta, işlenen konular) paketi final zamanında kendini açıklar hâle getirir. On iki haftalık paketi göz gezdiren gelecekteki sen, şimdiki sana teşekkür edecek.",
    },
    {
      title: "Dönem sonunda arşivle",
      body: "Dönem bittiğinde /Dersler/[Ders]/ klasörünü /Arsiv/[Yil]/[Ders]/ altına taşı. Aktif klasörler ince kalır; arşivler sonradan ön koşul incelemesi için aranabilir.",
    },
    {
      title: "Aktif dosyaları değil, arşivleri sıkıştır",
      body: "Disk alanından tasarruf için arşivlenen materyali PDF Sıkıştır ile sıkıştır. Aktif çalışma dosyalarını sıkıştırma — dönem içinde okunabilirlik boyuttan daha önemlidir.",
    },
  ],
  tips: [
    "Tarihleri YYYY-AA-GG biçiminde kullan. Herhangi bir dosya tarayıcısında doğru sıralanır. 15/9/26 sıralanmaz.",
    "Çalışma materyallerine sürüm numarası koyma. Son ders, derstir; v2 hocanın yeniden yüklediği anlamına gelir.",
    "Sınav hazırlığını ayrı etiketle — /sinavlar/vize/ ve /sinavlar/final/. Bunlar haftalık gözden geçirmeden farklı bir çalışma modudur.",
    "Dersler arasında birleştirme yapma. Ders arası PDF'ler bulunmaz.",
    "Her ders klasöründe hangi alt klasörde ne olduğunu belirten tek satırlık bir README.txt tut. Bir dönem sonra materyale dönerken yardımcı olur.",
  ],
  mobileNote:
    "Çoğu çalışma PDF'i telefona gelir (ders portalı, hoca e-postası ya da kendi taraman üzerinden). PDF Editor uygulaması doğrudan mobilde yeniden adlandırmana, dosyalamana ve birleştirmene izin verir; böylece dosya İndirilenler'de birikmek yerine doğru yere gider.",
  faq: [
    {
      q: "Çalışma materyalleri için en iyi dosya adı biçimi nedir?",
      a: "HaftaN_BelgeTuru_YYYY-AA-GG.pdf. Hafta öneki konuya göre gruplar, belge türü içeriği netleştirir, ISO tarih kronolojik sıralar.",
    },
    {
      q: "Haftalık mı birleştirmeli yoksa dosyaları ayrı mı tutmalıyım?",
      a: "Haftalık birleştir. Ders başına hafta başına bir PDF doğru ayrıntı düzeyidir — hızlı yüklenecek kadar küçük, gözden geçirme için kendi başına yeterli olacak kadar büyük.",
    },
    {
      q: "Klasörler ne kadar derin olmalı?",
      a: "İki seviye. /Dersler/[Ders]/[tur]/. Bundan derini dosyaları kaybettirir.",
    },
    {
      q: "Ayrı bir arşiv klasörüne ihtiyacım var mı?",
      a: "Evet. Kapanan dönemleri /Dersler/ klasöründen çıkar, böylece aktif klasör taranabilir kalır.",
    },
    {
      q: "Peki bulut senkronizasyonu?",
      a: "/Dersler/ klasörünü en az bir bulut sürücüsüyle senkronize et. Final haftasında telefon-dizüstü bilgisayar erişimi önemlidir; senkronizasyon bunu halleder.",
    },
  ],
  related: [
    { label: "Öğrenciler için PDF — notlar ve çalışma kılavuzları", path: "/pdf-for-students" },
    { label: "PDF Birleştir — haftalık paketleri bir araya getir", path: "/merge-pdf" },
    { label: "PDF dosyaları nasıl düzenlenir", path: "/guides/how-to-organize-pdf-files" },
    { label: "Üniversite öğrencileri için PDF iş akışı", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "Öğrenciler için PDF — notlar, vurgulamalar, çalışma kılavuzları", path: "/pdf-for-students" },
};

export default content;
