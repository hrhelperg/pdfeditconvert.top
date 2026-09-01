import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx",
  h1: "PDF mi DOCX mü? Hangi Formatı Kullanmalısın",
  description:
    "DOCX yerine ne zaman PDF seçmelisin, ne zaman tam tersi? Düzenlenebilirlik, görünüm bütünlüğü, imza ve paylaşım açısından net karşılaştırma.",
  updated: "2026-05-11",
  intro: [
    "PDF ve DOCX farklı sorunları çözer. PDF, her cihazda aynı görünen, kilitli ve yazdırılabilir bir formattır. DOCX ise Word, Google Docs ya da herhangi bir ofis paketine sahip herkesin yeniden şekillendirebileceği, yeniden stillendirebileceği ve yeniden biçimlendirebileceği düzenlenebilir bir çalışma formatıdır.",
    "Her iş için doğru formatı seçmek, insanların her ikisiyle de ilişkilendirdiği baş ağrılarının çoğunu önler. Son haline gelmiş bir sözleşmeyi DOCX olarak göndermek, kazara düzenlemelere davetiye çıkarır. Çalışma halindeki bir taslağı PDF olarak göndermek ise incelemeyi zorlaştırır. Bu seçim estetik değil — belgenin ne için olduğuyla ilgili.",
    "Bu rehber, sözleşmeler, taslaklar, faturalar, raporlar ve küçük işletmelerle bireylerin her hafta uğraştığı belge türlerinden somut örneklerle, hangi formatın ne zaman kazandığını ayrıntılı olarak ele alıyor.",
  ],
  steps: [
    {
      title: "Belge son haliyse PDF kullan",
      body: "Sözleşmeler, imzalı anlaşmalar, faturalar, broşürler, müşterilere ya da paydaşlara giden raporlar. Alıcının tam olarak senin gördüğünü görmesi gereken ve fark ettirmeden düzenleyememesi gereken her şey.",
    },
    {
      title: "Belge hâlâ yazılıyorsa DOCX kullan",
      body: "Taslaklar, iş birliğine dayalı belgeler, incelemedeki her şey, tekrar kullanılıp değiştirilecek şablonlar. Yorumlar ve değişiklikleri izleme sadece DOCX'te düzgün çalışır — formatın tüm amacı budur.",
    },
    {
      title: "Arşivleme için PDF kullan",
      body: "PDF'ler uzun süreli saklama için tasarlanmıştır. Format 10 yıl sonra da aynı şekilde görüntülenir. DOCX dosyaları Word sürümleri ve işletim sistemleri arasında sinsice bozulabilir — çalışma belgeleri için sorun değil, arşivler için risklidir.",
    },
    {
      title: "İçeriğin çıkarılması gerekiyorsa DOCX kullan",
      body: "Metni başka bir araca aktarmak, bir bölümü blog yazısı için yeniden kullanmak, farklı bir üslupla yeniden yazmak — bunların hepsi, içeriğin zaten yapılandırılmış ve düzenlenebilir olduğu DOCX'ten daha kolaydır.",
    },
    {
      title: "Gerektiğinde ikisi arasında dönüştür",
      body: "İyi PDF araçları, metin tabanlı belgeler için her iki yönde de yüksek doğrulukla dönüştürür. Alışılagelmiş iş akışı: DOCX'te düzenle, dışarıya paylaşırken PDF olarak dışa aktar. PDF al, içeriği yeniden kullanman gerekiyorsa DOCX'e dönüştür.",
    },
    {
      title: "Tanımadığın birinden alıyorsan PDF kullan",
      body: "DOCX dosyaları, güvenlik riski oluşturan makrolar ve gömülü nesneler içerebilir. Güvenilmeyen kaynaklardan açmak için PDF'ler daha güvenlidir, yine de PDF okuyucunu güncel tutmalısın.",
    },
  ],
  tips: [
    "Değişikliklere davetiye çıkarmıyorsan, taslak bir sözleşmeyi asla DOCX olarak dış bir tarafa gönderme — sen fark etmeden düzenleyebilirler ve farkları ancak dikkatlice karşılaştırırsan görebilirsin.",
    "Son haline gelmiş bir faturayı asla DOCX olarak gönderme — düzenlenemez olmalı. Her seferinde doğru seçim PDF'tir.",
    "Bir alıcı \"düzenlenebilir PDF\" isterse, genelde DOCX'i kastediyordur. Varsaymadan önce sor, sonra dönüştür.",
    "İmzalı PDF'ler PDF olarak kalmalı. DOCX'e geri dönüştürmek imzayı kaldırır.",
    "Form alanları içeren belgeler için genelde PDF daha iyi seçimdir — DOCX form alanları hantaldır ve düzenleyiciler arasında tutarsızdır.",
  ],
  mobileNote:
    "Mobilde DOCX'i düzgün görüntülemek için Word, Google Docs ya da başka bir ofis uygulaması gerekir. PDF ise iOS ve Android'de yerleşik görüntüleyicilerle doğrudan açılır. Sadece bu bile PDF'i çoğu paylaşılan belge için doğru seçim yapar — alıcının okumak için bir şey kurmasına gerek kalmaz.",
  faq: [
    {
      q: "Dönüştürmeden doğrudan bir PDF'i düzenleyebilir miyim?",
      a: "Evet, düzgün bir PDF düzenleyiciyle. PDF düzenleme, DOCX düzenlemeye göre daha sınırlıdır — büyük yeniden yazımlar için değil, düzeltmeler, imzalar ve küçük değişiklikler için tasarlanmıştır. Kapsamlı düzenlemeler için önce DOCX'e dönüştürmek genelde daha mantıklıdır.",
    },
    {
      q: "Hangi format daha küçük dosyalar üretir?",
      a: "İçeriğe bağlı. Metin ağırlıklı DOCX genelde eşdeğer PDF'ten daha küçüktür. İyi sıkıştırılmış görsel ağırlıklı PDF'ler ise DOCX'ten daha küçük olabilir, çünkü PDF'in görsel sıkıştırması daha esnektir.",
    },
    {
      q: "Yazı tiplerim dönüşümden sağ çıkar mı?",
      a: "Çoğunlukla evet. Bir yazı tipi hedef cihazda yoksa, otomatik olarak benzer biriyle değiştirilir. Görünür değişimi en aza indirmek için yaygın yazı tiplerine (Inter, Helvetica, Calibri, Arial) bağlı kal.",
    },
    {
      q: "PDF/A normal PDF'ten farklı mı?",
      a: "Evet. PDF/A, tüm yazı tiplerini gömen ve harici bağımlılıklara izin vermeyen, katı bir arşivleme alt kümesidir. Bazı devlet ve hukuk arşivleri tarafından zorunlu tutulur. Standart PDF geri kalan neredeyse her şey için işe yarar.",
    },
    {
      q: "DOCX bir imza içerebilir mi?",
      a: "Bir imzanın görselini içerebilir, ama bu imzanın kriptografik geçerliliği yoktur. PDF'ler ise imzayı belgeye bağlayan gerçek dijital imzaları destekler. Yasal olarak imzalanması gereken her şey için doğru format PDF'tir.",
    },
  ],
  related: [
    { label: "PDF veya DOCX — kapsamlı karşılaştırma", path: "/compare/pdf-vs-docx" },
    { label: "PDF Dönüştürücü", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
  parentHub: { label: "PDF Dönüştürücü", path: "/pdf-converter" },
};

export default content;
