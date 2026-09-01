import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-docx",
  h1: "PDF veya DOCX — Özellik Özellik Karşılaştırma",
  description:
    "PDF ve DOCX'i düzenleme kolaylığı, görünüm bütünlüğü, imza, güvenlik ve paylaşım açısından karşılaştır. İşine uygun doğru formatı seç.",
  intro: [
    "PDF ve DOCX, çoğu belgenin sonunda dönüştüğü iki formattır. İkisinin de bir işi vardır — ve herhangi bir görev için doğru olanı seçmek, insanların genel olarak belgelerle ilişkilendirdiği biçimlendirme ve paylaşım sorunlarının çoğunu ortadan kaldırır.",
    "Bu karşılaştırma akademik değil, pratiktir. Her satır, iki formatın standart belgelerinde nasıl tanımlandığını değil, gerçek dünya iş akışlarında nasıl davrandığını yansıtır. Her iki formatı da yoğun kullanmaya başladığın ilk ay içinde fark edeceğin şeylere odaklanıyoruz.",
    "Kısacası: belge tamamlanmışsa, okuyucu için aynı görünmesi gerekiyorsa ya da bir imza içeriyorsa PDF kazanır. Belge hâlâ çalışan bir taslaksa, birden fazla kişi onu inceliyorsa ya da içeriği başka bir yerde yeniden kullanmak istiyorsan DOCX kazanır. Çoğu belge, yaşamının farklı aşamalarında her iki formata da dokunur.",
  ],
  leftLabel: "PDF",
  rightLabel: "DOCX",
  rows: [
    { feature: "Piksel kusursuz yerleşim", left: "evet", right: "hayır" },
    { feature: "Kolay metin düzenleme", left: "Sınırlı", right: "evet" },
    { feature: "Evrensel görüntüleme", left: "evet", right: "hayır" },
    { feature: "Değişiklik takibi ve yorumlar", left: "Sınırlı", right: "evet" },
    { feature: "Şifre koruması (AES-256)", left: "evet", right: "evet" },
    { feature: "10 yıl sonra güvenilir görüntüleme", left: "evet", right: "hayır" },
    { feature: "Ek uygulama olmadan mobilde görüntüleme", left: "evet", right: "hayır" },
    { feature: "Form alanları", left: "evet", right: "Sınırlı" },
    { feature: "Yerleşik imza desteği", left: "evet", right: "Eklenti" },
  ],
  whenLeft: [
    "Belge tamamlanmış ve düzenlenmemeli",
    "Her cihazda aynı görünmesi gerekiyor",
    "Alıcının Microsoft Word'ü olmayabilir",
    "Belge yıllarca arşivlenecek",
    "Yazdırılabilir, imzaya hazır bir format gerekiyor",
  ],
  whenRight: [
    "Belge hâlâ hazırlanıyor",
    "Birden fazla kişi inceliyor ya da birlikte yazıyor",
    "Değişiklik takibi ve yorumlar önemli",
    "İçeriği yeniden kullanman ya da yeniden biçimlendirmen gerekiyor",
    "Belge bir şablona dönüşecek",
  ],
  faq: [
    {
      q: "PDF ve DOCX arasında dönüştürebilir miyim?",
      a: "Evet. İyi PDF araçları, metin tabanlı belgeler için yüksek doğrulukla her iki yönde de dönüştürür.",
    },
    {
      q: "Hangi format daha güvenli?",
      a: "İkisi de AES-256 şifrelemeyi destekler. Güvenliği belirleyen format değil, şifre ve onu nasıl paylaştığındır.",
    },
    {
      q: "Yazı tiplerim dönüşümden sağlam çıkar mı?",
      a: "Çoğunlukla. Hedef cihazda bir yazı tipi yoksa benzer bir tanesiyle değiştirilir. Değişimi en aza indirmek için yaygın yazı tiplerine (Calibri, Inter, Helvetica) bağlı kal.",
    },
  ],
  related: [
    { label: "PDF veya DOCX kılavuzu", path: "/guides/pdf-vs-docx" },
    { label: "PDF Dönüştürücü", path: "/pdf-converter" },
    { label: "PDF Düzenleyici", path: "/pdf-editor" },
  ],
};

export default content;
