import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-merge-pdf-files",
  h1: "Telefonda veya Bilgisayarda PDF Dosyaları Nasıl Birleştirilir?",
  description:
    "Birden fazla PDF'i tek bir belgede topla. PDF Editor uygulamasıyla adım adım mobil iş akışı.",
  updated: "2026-05-11",
  intro: [
    "PDF'leri birleştirmek, küçük işletmelerin ve öğrencilerin en sık ihtiyaç duyduğu belge işlemlerinden biridir. İster bir muhasebeciye gidecek taranmış fişler olsun, ister bir teslim tarihi için bir araya getirilen araştırma makaleleri, ister destekleyici belgeleriyle birleştirilen bir teklif olsun — tek, derli toplu bir dosya göndermek beş ayrı ekle uğraşmaktan çok daha iyidir.",
    "Bu rehber, iPhone veya Android için PDF Editor uygulamasıyla telefonunda PDF'leri nasıl birleştireceğini gösteriyor. Akış her iki platformda da aynı: dosyaları ekle, istediğin sıraya sürükle ve tek bir birleşik PDF olarak dışa aktar. İşlemin tamamı genelde bir dakikadan kısa sürer.",
    "Bilgisayarda birleştirmeyi tercih edersen de aynı mantık çoğu modern PDF aracına uyar. Buradaki odak mobil akış, çünkü gerçek hayattaki birleştirmelerin çoğu tam olarak orada gerçekleşiyor — toplantılar arasında, müşteri ziyaretlerinde ya da yolda.",
  ],
  steps: [
    {
      title: "PDF Editor uygulamasını aç",
      body: "Uygulamayı başlat ve ana ekrandaki Birleştirme kutucuğuna dokun. Başlamak için hesap gerekmiyor.",
    },
    {
      title: "Birleştirmek istediğin dosyaları ekle",
      body: "+ düğmesine dokun. Her bir PDF'i Dosyalar, iCloud Drive, Google Drive, OneDrive'dan ya da başka bir uygulamadan paylaşarak ekle. Kaynakları istediğin gibi karıştırabilirsin.",
    },
    {
      title: "Sırayı yeniden düzenle",
      body: "Sıradaki herhangi bir öğeye uzun basıp doğru konuma sürükle. Sıradaki dizilim, son dosyadaki dizilim olacak. Birleştirmeden önce sırayı iki kez kontrol et.",
    },
    {
      title: "Yatay sayfaları döndür",
      body: "Bazı kaynak dosyalar yan taranmışsa, birleşik belgenin doğru okunması için etkilenen her öğenin yanındaki döndürme simgesine dokun.",
    },
    {
      title: "(İsteğe bağlı) Bir kapak sayfası ekle",
      body: "Tarih ve tek satırlık bir başlık içeren basit bir kapak sayfası eklemek için Kapak Ekle'ye dokun. Birleşik belge bir müşteriye gidecekse işe yarar.",
    },
    {
      title: "Birleştir'e dokun",
      body: "Uygulama tüm dosyaları tek bir PDF'te birleştirir ve incelemen için sonucu gösterir. Birleştirme cihaz üzerinde gerçekleşir, bu yüzden şifre korumalı kaynaklar bile gizli kalır.",
    },
    {
      title: "Birleşik dosyayı gözden geçir",
      body: "Sayfaların sırasında ve yönünde sorun olmadığından emin olmak için kaydır. Hızlıca doğrulamak için Sayfalar küçük resim görünümünü kullan.",
    },
    {
      title: "Kaydet veya paylaş",
      body: "Dosyalar'a kaydet, bir bulut sürücüsüne senkronize et ya da doğrudan e-posta, AirDrop veya herhangi bir mesajlaşma uygulaması üzerinden paylaş. Açıklayıcı bir dosya adı seç — dosya birinin gelen kutusunda belirdiğinde \"Sozlesme-ve-Ek-2026-05.pdf\", \"Document(3).pdf\"ten çok daha iyidir.",
    },
  ],
  tips: [
    "Birleşik belge dış bir alıcıya gidiyorsa bir kapak sayfası ekle — bu, paketin doğaçlama değil, bilinçli hazırlanmış hissettirmesini sağlar.",
    "Yan taranmış sayfaları birleştirmeden önce döndür, sonra değil — yönü sonradan düzeltmek tüm dosyayı yeniden dışa aktarmak demektir.",
    "Birleşik PDF e-postayla gönderilecekse, sonucu tipik 25 MB ek dosya sınırının altına indirmek için ardından Sıkıştır aracını kullan.",
    "Alıcının uzun bir belgenin ilgili kısmına doğrudan atlayabilmesi için Sayfalar görünümünden birleşik bölümleri yer imlerine ekle.",
    "Birleştirmenin doğru göründüğünü onaylayana kadar orijinal kaynak dosyaları sakla — orijinalleri aynı oturumda asla silme.",
  ],
  mobileNote:
    "Mobil birleştirme, taramaların ve dijital PDF'lerin bir araya getirilmesi gerektiğinde özellikle iyi çalışır — uygulama ikisini de tek bir sırada yönetir ve birleştirmeye eklemek için o anda yeni bir tarama yapabilirsin. Bu, bilgisayarda zahmetli bir işlemken telefonda tek dokunuşluk bir iş.",
  faq: [
    {
      q: "Birleştirebileceğim maksimum dosya sayısı var mı?",
      a: "Kesin bir sınır yok. Çok büyük gruplar (50+ dosya) eski telefonlarda daha uzun sürer ama uygulama gerçek hayattaki birleştirmeleri sorunsuz halleder. Performans sorunuyla karşılaşırsan işi iki birleştirmeye bölüp sonuçları birleştirebilirsin.",
    },
    {
      q: "Bir Word belgesini bir PDF ile birleştirebilir miyim?",
      a: "Evet, dolaylı olarak. Önce Dönüştürme kutucuğunu kullanarak Word belgesini PDF'e dönüştür, sonra sonucu diğer PDF'lerinle birlikte birleştirme sırasına ekle.",
    },
    {
      q: "Şifre korumalı kaynak dosyalarda ne olur?",
      a: "İstendiğinde şifreyi gir. Uygulama şifre çözmeyi yerel olarak halleder; birleşik çıktı korumasız bırakılabilir ya da seçtiğin bir şifreyle yeniden korunabilir.",
    },
    {
      q: "Birleştirdikten sonra orijinal biçimlendirme değişir mi?",
      a: "Hayır. Her kaynak sayfası tam olarak korunur. Sadece sayfa sırası değişir ve etraflarına bir kapsayıcı PDF oluşturulur.",
    },
    {
      q: "Bir birleştirmeyi geri alabilir miyim?",
      a: "Evet. PDF Böl özelliği herhangi bir PDF'i — birleşik ya da orijinal — tekrar ayrı sayfalara veya aralıklara böler. Orijinaller bir birleştirme sırasında asla değiştirilmez.",
    },
  ],
  related: [
    { label: "PDF Birleştir — ücretsiz, tarayıcında", path: "/merge-pdf" },
    { label: "PDF Böl — tarayıcında sayfa çıkar", path: "/split-pdf" },
    { label: "Tüm ücretsiz PDF araçları", path: "/pdf-tools" },
    {
      label: "Birleştirdikten sonra PDF nasıl sıkıştırılır",
      path: "/guides/how-to-compress-pdf",
    },
  ],
  parentHub: { label: "PDF Birleştir", path: "/merge-pdf" },
};

export default content;
