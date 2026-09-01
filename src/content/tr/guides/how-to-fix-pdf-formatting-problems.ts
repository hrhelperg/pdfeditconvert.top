import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-formatting-problems",
  h1: "PDF Biçimlendirme Sorunları Nasıl Çözülür? (Satır Kayması, Kenar Boşluğu, Boşluklar)",
  description:
    "Bir PDF'in yerleşimi bozuk göründüğünde — metin kayıyor, kenar boşlukları yanlış, boşluklar karışmış — çözüm genelde PDF'te değil kaynak belgede bulunur. İyi görünen bir dışa aktarma için en temiz yöntem.",
  updated: "2026-05-29",
  intro: [
    "Kötü PDF biçimlendirmesi neredeyse her zaman dışa aktarma anına kadar izlenebilir. PDF'in kendisi hiçbir şeyi yeniden akıtmaz — sayfayı kaydedildiği anda olduğu şekilde tam olarak kilitler. Yani boşluk yanlışsa, kenar boşlukları kaymışsa ya da tablo sayfalar arasında bölünmüşse, kaynak dosya o sonucu zaten üretiyordu.",
    "Çözüm neredeyse her zaman kaynağa geri dönmektir — Word, Pages, Google Docs, tasarım aracı — yerleşimi ayarlamak ve yeniden dışa aktarmaktır. Kaynak senin değilse bu can sıkıcıdır, ama en temiz yoldur. Alternatifler — Word'e dönüştürmek, PDF'i doğrudan düzenlemek ya da farklı bir görüntüleyiciyle “düzeltmek” — her biri orijinalin sahip olduğu bir şeyi kaybeder.",
    "Bu rehber yaygın biçimlendirme belirtilerini ve her biri için gerçekçi çözümü ele alıyor, ilk seferinde temiz PDF'ler üreten iş akışları dahil.",
  ],
  steps: [
    {
      title: "İçerik mi yoksa render sorunu mu olduğunu belirle",
      body: "PDF'i iki farklı görüntüleyicide aç. İkisi de aynı bozuk yerleşimi gösteriyorsa, dosya sorunun kaynağıdır. Biri doğru render ediyorsa, bir biçimlendirme sorunu değil, bir görüntüleyici sorunu var demektir.",
    },
    {
      title: "Yerleşimi PDF'te değil kaynak belgede düzelt",
      body: "Word, Pages ya da Docs dosyasını aç, kenar boşluklarını, boşluğu ya da tabloyu düzelt, ardından PDF'e yeniden dışa aktar. Düzeltilmiş kaynak doğrudan düzeltilmiş bir PDF üretir. Yerleşimi yamalamak için bir PDF'i düzenlemek formata karşı savaşmaktır.",
    },
    {
      title: "Kağıt boyutunu açıkça belirterek yeniden dışa aktar",
      body: "Otomatik sığdırma ayarları genelde sürprizler üretir. Dışa aktarmadan önce kaynak uygulamada kağıt boyutunu (Letter ya da A4), kenar boşluklarını (1 inç ya da 25 mm) ve yönü açıkça ayarla.",
    },
    {
      title: "Sadece ağır metin yeniden yazımları için Word'e dönüştür",
      body: "Tarayıcındaki PDF'ten Word'e, metni yeniden düzenlemek için dışarı çeker. Dönüştürme bir miktar yerleşim kaybettirir — bunu metin düzenlemeyi geri kazanmanın bedeli olarak kabul et. Temizledikten sonra, paylaşım için PDF'e yeniden dışa aktar.",
    },
    {
      title: "Yapısal düzeltmeler için sayfa düzeyindeki araçları kullan",
      body: "Sadece bazı sayfalar yanlışsa — sırası bozuk bir tarama, tekrarlanan bir kapak, yan yatmış bir ek — PDF Sayfalarını Yeniden Sırala, PDF Sayfalarını Çıkar ve PDF Döndür, metin biçimlendirmesine dokunmadan yapıyı düzeltir.",
    },
    {
      title: "Paylaşmadan önce PDF'e yeniden dışa aktar",
      body: "Yerleşim kaynakta düzeltildikten sonra, mevcut bir PDF'i yeniden kaydetmek yerine taze bir dışa aktarma yap. En temiz dışa aktarma doğrudan belgeyi oluşturan uygulamadan gelir.",
    },
  ],
  tips: [
    "Word ya da Pages'teki yazdırma önizlemesi, PDF'in göstereceği aynı sayfa sonu davranışını gösterir. Bozuk sonları dışa aktarmadan önce düzelt, sonra değil.",
    "Beceriksizce bölünen tablolar, kaynaktaki bir paragraf biçimlendirme sorunudur, bir PDF sorunu değil. Bir başlık satırını içeriğine bağlamak için “sonrakiyle birlikte tut” kullan.",
    "Düzenlemek için bir PDF'i Word'de açma — Word onu dönüştürür, genelde kötü şekilde. Elindeyse orijinal kaynağı kullan, yoksa sadece o zaman PDF'ten Word'e kullan.",
    "Web'den yapıştırılan içerik genelde arka plan biçimlendirmesi getirir. PDF'te sürpriz kenarlıklar ve renklerden kaçınmak için dışa aktarmadan önce onu temizle (düz metin olarak yapıştır).",
    "Sadece PDF'in varsa ve kaynağa dönemiyorsan, yerleşim temizliğinin kısmi olacağını kabul et. Okuyucunun ilk fark edeceği değişikliklere öncelik ver.",
  ],
  mobileNote:
    "Mobil PDF biçimlendirme sorunları genelde masaüstünde yapılıp yanlış hedef kağıtla dışa aktarılan belgelerden gelir. PDF Editor uygulaması, telefonda sayfaları döndürmeni, yeniden sıralamanı ve kırpmanı sağlar — kaynağı düzeltemesen bile yapısal sorunları temizlemek için kullanışlıdır.",
  faq: [
    {
      q: "PDF'im neden Word sürümünden farklı görünüyor?",
      a: "Genelde dışa aktarma sırasındaki yazı tipleri, kağıt boyutu ya da yazdırma alanı ayarları yüzünden. Açık kağıt boyutu ve gömülü yazı tipleriyle yeniden dışa aktarmak, kaynakla eşleşen bir PDF üretir.",
    },
    {
      q: "Boşluğu düzeltmek için bir PDF'teki metni düzenleyebilir miyim?",
      a: "Tek tek karakterleri ve kelimeleri düzenleyebilirsin, ama paragrafları yeniden akıtmak zordur çünkü PDF'ler metni konumlandırılmış bloklar olarak ele alır. Mümkünse kaynakta düzelt.",
    },
    {
      q: "Dönüştürdüğüm PDF'ten Word'e neden bozuk görünüyor?",
      a: "PDF'ler yerleşimi kodlar, akışı değil. Dönüştürme onları tekrar akışa çevirir ama yapısal ipuçları kaybolur. Dönüştürülmüş bir dosyada gerçek bir temizlik yapmayı bekle.",
    },
    {
      q: "Tablolarım sayfalar arasında neden beceriksizce bölünüyor?",
      a: "Neredeyse her zaman kaynaktaki bir paragraf biçimlendirme sorunu. Word'deki “sonrakiyle birlikte tut” ve “sayfalar arasında bölme” ayarları çoğu bölünmeyi dışa aktarmadan önce düzeltir.",
    },
    {
      q: "Sıkıştırma biçimlendirmeyi etkiler mi?",
      a: "Hayır. Sıkıştırma görsellere dokunur, yerleşime değil. Sıkıştırılmış bir PDF orijinaliyle aynı biçimlendirmeye sahiptir — sadece gömülü görseller daha küçüktür.",
    },
  ],
  related: [
    { label: "PDF'ten Word'e — ağır metin düzeltmeleri için dönüştür", path: "/pdf-to-word" },
    { label: "Word'den PDF'e — temizce yeniden dışa aktar", path: "/word-to-pdf" },
    { label: "PDF Yazı Tipi Sorunları Nasıl Çözülür? (Eksik, Değiştirilmiş, Bozuk)", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "PDF Yazdırma Sorunları Nasıl Çözülür? (Kesilen Sayfa, Yanlış Boyut, Eksik Metin)", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "PDF Dönüştürücü", path: "/pdf-converter" },
};

export default content;
