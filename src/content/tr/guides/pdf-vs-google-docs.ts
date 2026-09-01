import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-google-docs",
  h1: "PDF mi Google Docs mu? Hangisini Ne Zaman Kullanmalısın",
  description:
    "Google Docs iş birliği için, PDF teslimat için. Gerçekçi kullanım anları ve doğru zamanlarda ikisi arasında temiz dönüştürme yöntemi.",
  updated: "2026-05-29",
  intro: [
    "Google Docs ve PDF gerçekte rekabet etmiyor — bir belgenin yaşamının farklı aşamaları için var. Docs yazmak, iş birliği yapmak, gözden geçirmek, yorum yapmak içindir; PDF teslim etmek, kilitlemek, imzalamak, arşivlemek içindir. İkisini de gücünün dışında kullanmaya çalışmak, sürtünmenin geldiği yerdir.",
    "Tipik bir belge ikisinden de geçer: iş birliğinin gerçekleştiği yer olduğu için Docs'ta taslak hâline getirilir, sonra sürüm son hâlini alıp çalışma grubunun dışına çıktığında PDF olarak dışa aktarılır. Diğer yönde gitmek — bir PDF alıp düzenlemek için Docs'a aktarmak — işe yarar ama her zaman bir miktar sadakat kaybeder, bu yüzden bir yedek yöntemdir, rutin değil.",
    "Bu kılavuz aşamaya göre gerçekçi ne-zaman-neyi-kullanmalıyı, artı iki yön için dönüştürme mekaniğini anlatıyor. Doğru zamanda doğru formatı seç, sürtünme büyük ölçüde ortadan kalkar.",
  ],
  steps: [
    {
      title: "Belge yazılırken Google Docs kullan",
      body: "Çoklu yazar düzenleme, canlı imleçler, sürüm geçmişi, yorumlar. Docs bunların hepsini temiz şekilde halleder, PDF hiçbirini halletmez. Taslak hazırlama ve inceleme Docs'a aittir.",
    },
    {
      title: "Belge son hâlini aldığında ya da dışarı çıktığında PDF'e geç",
      body: "Bir belge bir müşteriye, bir düzenleyiciye, bir tedarikçiye ya da bir arşive gittiğinde, PDF yerleşimi ve içeriği kilitler. Doc düzenlenebilir kaynak olarak kalır; PDF teslim edilen belgedir.",
    },
    {
      title: "Docs'tan PDF'e temiz şekilde dışa aktar",
      body: "Dosya → İndir → PDF Belgesi. Varsa dışa aktarma ayarlarından yazı tiplerini göm. Ortaya çıkan PDF başlıkları, tabloları, görselleri ve biçimlendirmeyi korur.",
    },
    {
      title: "Zorunlu olduğunda PDF'i düzenlenebilire dönüştür",
      body: "Tarayıcındaki PDF'ten Word'e, bir PDF'ten metni çeker. Çıktı yaklaşıktır — yerleşim zarar görür, tablolar bozulabilir. Bunu düzenli bir iş akışı değil, bir kurtarma yolu olarak ele al.",
    },
    {
      title: "Google Docs'ta imzalama ve arşivleme yapma",
      body: "Docs'ta gerçek imza desteği yoktur ve sürüm geçmişi Google hesabına bağlıdır. İmzalı belgeler ve arşivler, yerel olarak ya da bilinçli bir kasada saklanan PDF'e aittir.",
    },
    {
      title: "Dosya formatını alıcıya göre eşleştir",
      body: "Müşteriler PDF bekler. Editörler Word ya da Docs bekler. İç ekipler iş birliği için Docs'u tercih edebilir. Alıcının gerçekten kullanacağı formatı gönder.",
    },
  ],
  tips: [
    "Bir müşteriye Google Docs bağlantısı paylaşma — Google hesabı olmayabilir, paylaşım izinleri seni şaşırtabilir ve belge onlar açtıktan sonra değişmeye devam edebilir.",
    "Docs'u PDF'e dönüştürürken sayfalamayı kontrol et — Docs'ta tek sayfa gibi görünen şey PDF'te bazen iki sayfaya taşar.",
    "Aldığın bir PDF'i, ağır düzenleme gerekmiyorsa Docs'ta “açma”. Dönüşüm biçimlendirmeyi kaybeder; orijinal PDF okuma ve paylaşım için daha temizdir.",
    "Ortak taslak hazırlama için Docs sürüm geçmişini kullan. PDF, teslimattaki anlık görüntüdür.",
    "Taslak sırasında Docs'u, teslimattan sonra PDF'i gerçeğin kaynağı olarak ele al.",
  ],
  mobileNote:
    "Taslak hazırlama masaüstünde gerçekleşse bile geç aşama PDF işinin çoğu telefonda olur. PDF Editor uygulaması, son PDF'in son dakika sıkıştırmasını, imzasını ve paylaşımını iOS ve Android'de halleder — “Docs bitti” ile “müşteride dosya var” arasındaki an için kullanışlı.",
  faq: [
    {
      q: "Her şeyi Google Docs'ta tutabilir miyim?",
      a: "İç iş birliği için evet. Dış teslimat için hayır — müşteriler PDF bekler ve Docs paylaşım izinleri beklemediğin şekillerde erişim sızdırabilir.",
    },
    {
      q: "PDF'ten Docs'a dönüşüm ne kadar iyi çalışır?",
      a: "Metin kurtarma için kabul edilebilir, yerleşim için zayıf. Metin genelde geçer; tablolar, sütunlar ve hassas biçimlendirme zarar görür. Sadece kaynağına sahip olmadığın bir PDF'i yeniden düzenlemen gerektiğinde kullan.",
    },
    {
      q: "Google Docs'ta mı yoksa PDF'te mi imzalamalıyım?",
      a: "PDF'te. Gerçek e-imzalar PDF'e temiz şekilde eklenir; Docs'un PDF imzalama araçlarıyla karşılaştırılabilir yerleşik imza desteği yoktur.",
    },
    {
      q: "Peki arşiv için Google Docs?",
      a: "Mümkün ama riskli — hesaplar değişebilir, Docs silinebilir ve format Google'ın hizmetine bağlıdır. PDF daha iyi bir arşiv formatıdır.",
    },
    {
      q: "Docs → PDF → Docs gidiş dönüşü yapabilir miyim?",
      a: "Mümkün ama kayıplı. Her dönüşüm sadakat kaybeder. Orijinal Doc'u düzenlenebilir kaynak olarak tut ve sadece zorunda kaldığında gidiş dönüş yap.",
    },
  ],
  related: [
    { label: "PDF Dönüştürücü — Word, JPG, PNG ve geri", path: "/pdf-converter" },
    { label: "PDF'ten Word'e — ağır düzenleme için dönüştür", path: "/pdf-to-word" },
    { label: "PDF mi DOCX mü — özellik karşılaştırması", path: "/guides/pdf-vs-docx" },
    { label: "İş belgelerinde PDF mi DOCX mü", path: "/guides/pdf-vs-docx-for-business" },
  ],
  parentHub: { label: "PDF Dönüştürücü — Word, JPG, PNG ve geri", path: "/pdf-converter" },
};

export default content;
