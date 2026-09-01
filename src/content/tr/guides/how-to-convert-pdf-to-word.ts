import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-word",
  h1: "PDF Word'e Nasıl Dönüştürülür? Ücretsiz, Tarayıcında",
  description:
    "PDF'teki metni tarayıcında düzenlenebilir bir Word belgesine aktar. Neyin sorunsuz dönüştüğü, neyin düzeltme istediği ve taramaların neden çalışmadığı.",
  updated: "2026-05-23",
  intro: [
    "\"Bir PDF'i Word'e dönüştürmek\" isteyen çoğu kişi aslında tek bir şey ister: metni, düzenleyebilecekleri bir belgede geri almak. Belki orijinal .docx çoktan kaybolmuştur, belki bir meslektaşın sana sadece PDF'i göndermiştir, ya da bir sözleşmeden birkaç maddeyi yeniden yazmadan almak istiyorsundur. Bu bir metin çıkarma işidir ve göründüğünden daha hızlıdır.",
    "Bu rehber, tamamen tarayıcında çalışan ücretsiz PDF'ten Word'e aracını kullanıyor — dosyan asla yüklenmez. Araç, PDF'in metin katmanını okur ve sana Word, Google Docs, Pages ya da LibreOffice'te açabileceğin bir .docx verir. Yapmadığı şey, orijinal yerleşimi piksel piksel yeniden oluşturmaktır — sonucun seni şaşırtmaması için bunu baştan bilmekte fayda var.",
    "Aşağıda pratik iş akışı, iyi dönüşen PDF türleri ve ya sonradan düzeltme yapman ya da tamamen farklı bir yaklaşıma başvurman gereken dürüst durumlar var.",
  ],
  steps: [
    {
      title: "PDF'ten Word'e aracını aç",
      body: "PDF'ten Word'e aracına git. Kurulacak bir şey yok, hesap yok — dönüştürücü tarayıcında açılır ve dosyayı kendi cihazında işler.",
    },
    {
      title: "PDF'ini ekle",
      body: "PDF'i bırakma alanına sürükle ya da seçmek için tıkla. Metin tabanlı bir PDF kullan — herhangi bir görüntüleyicide metnini seçip kopyalayabildiğin bir PDF. Metni seçmeye çalıştığında vurgulanmıyorsa, dosya bir taramadır ve dönüşmez (aşağıdaki sınırlamalara bak).",
    },
    {
      title: "Dönüşümü çalıştır",
      body: "Word'e Dönüştür'e tıkla. Araç, PDF'in metin katmanını gezer ve akan bir .docx olarak yeniden oluşturur. Tipik çok sayfalı bir belge için bu birkaç saniye sürer.",
    },
    {
      title: ".docx dosyasını indir",
      body: "Word dosyası otomatik olarak iner. Tercih ettiğin herhangi bir düzenleyicide aç — metin, özgürce yeniden yapılandırabileceğin düzenlenebilir paragraflar olarak gelir.",
    },
    {
      title: "Biçimlendirmeyi yeniden uygula",
      body: "Başlıklar, kalın yazı, sütunlar ve boşluklar genelde elle bir kontrol gerektirir. Başlıklarını düzenleyicinin başlık stilleriyle yeniden işaretle, tabloları geri getir ve belge yeniden senin olur.",
    },
    {
      title: "Gerekiyorsa görselleri yeniden ekle",
      body: "Metin çıkarma, görselleri taşımaz. Orijinalde ihtiyacın olan bir logo, grafik ya da fotoğraf varsa, kaynak PDF'ten geri ekle — gerekirse önce sayfayı görsel olarak dışa aktar.",
    },
  ],
  tips: [
    "Önce seçilebilirliği kontrol et: PDF'te metni vurgulayamıyorsan, bu taranmış bir görseldir ve metin çıkarma kullanışlı bir şey döndürmez.",
    "Basit, tek sütunlu belgeler (mektuplar, notlar, sade raporlar) en temiz şekilde dönüşür. Çok sütunlu ve dipnotlu, ağır tasarımlı PDF'ler tek bir okunabilir akış olarak çıkarılır ve düzeltmek isteyeceksin.",
    "Tabloların bozulmadan hayatta kalmasını bekleme — genelde metin dizileri olarak gelirler. Çıkarılan sürümle uğraşmak yerine önemli tabloları düzenleyicinde yeniden oluştur.",
    "Yeniden biçimlendirirken orijinal PDF'i yan yana açık tut. Kaynağa göz atmak, amaçlanan yapıyı tahmin etmekten çok daha hızlıdır.",
    "Sadece birkaç cümleye ihtiyacın varsa, tüm dosyayı dönüştürmek yerine bir PDF görüntüleyiciden doğrudan kopyala — dönüştürme, belgenin çoğuna ihtiyacın olduğunda içindir.",
  ],
  mobileNote:
    "Telefonundan mı çalışıyorsun? PDF Editor uygulaması belgeleri hareket halindeyken dönüştürür ve düzenler; tarayıcının aksine, taranmış sayfalarda metin tanıma da çalıştırabilir — aldığın PDF gerçekte dijital bir belge değil de bir çıktının fotoğrafıysa işe yarar.",
  faq: [
    {
      q: "Word dosyası tam olarak PDF gibi görünecek mi?",
      a: "Hayır, ve dürüst hiçbir araç bunu vaat etmemeli. Bu bir metin dönüşümüdür: yazı tipleri, sütunlar, tam boşluklar ve görseller yeniden üretilmez. Kelimeleri düzenlenebilir paragraflar olarak geri alırsın ve biçimlendirmeyi düzenleyicinde yeniden uygularsın.",
    },
    {
      q: "Metin bulunamadı diyor — sorun ne?",
      a: "PDF'in neredeyse kesinlikle bir tarama ya da metin katmanı olmayan, sadece görselden oluşan bir dosya. Tarayıcı araçları bir görselden metin okuyamaz. PDF Editor mobil uygulaması taramalarda metin tanıma çalıştırabilir, bu durumda izlenecek yol budur.",
    },
    {
      q: "Belgem bir sunucuya mı yükleniyor?",
      a: "Hayır. Çıkarma işlemi tarayıcında yerel olarak çalışır, bu yüzden PDF cihazından hiç çıkmaz. Bu, sözleşmeler ve diğer hassas dosyalar için kullanımını güvenli kılar.",
    },
    {
      q: "Hangi dosya formatını geri alıyorum?",
      a: "Microsoft Word, Google Docs, Apple Pages ve LibreOffice'te açılan standart bir .docx. Gerekirse daha sonra tekrar PDF olarak dışa aktarabilirsin.",
    },
    {
      q: "Düzenlemeyi bitirdiğimde tekrar PDF'e dönüştürebilir miyim?",
      a: "Evet — bitmiş .docx'ini temiz, paylaşılabilir bir PDF'e geri döndürmek için Word'den PDF'e aracını kullan.",
    },
  ],
  related: [
    { label: "PDF'ten Word'e — tarayıcında dönüştür", path: "/pdf-to-word" },
    { label: "Word'den PDF'e — ters dönüşüm", path: "/word-to-pdf" },
    { label: "Word PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF mi DOCX mü — hangi format kullanılmalı", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF Dönüştürücü", path: "/pdf-converter" },
};

export default content;
