import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx-for-business",
  h1: "İş Belgelerinde PDF mi DOCX mü? (Sözleşme, Rapor, Dağıtım)",
  description:
    "İş belgelerinin neredeyse her zaman PDF olarak gönderilip DOCX olarak yaşamasının nedeni. Bir sözleşmenin, raporun ya da faturanın yaşam döngüsünün her aşamasında doğru araç.",
  updated: "2026-05-29",
  intro: [
    "İş belgelerinin oldukça öngörülebilir bir yaşam döngüsü vardır. Word'de (DOCX) taslak hâline getirilir, Word'de gözden geçirilir ve düzenlenir, Word'de son hâlini alır, sonra teslimat, imza, arşiv ve dağıtım için PDF olarak dışa aktarılır. Aynı dosya farklı aşamalarda iki formatta var olur ve yanlış aşamada yanlış formatı kullanmak, sürtünmenin çoğunun geldiği yerdir.",
    "DOCX çalışma formatıdır çünkü düzenlenebilir, iş birliğine uygundur ve değişiklikleri iyi izler. PDF teslimat formatıdır çünkü yerleşimi kilitler, her cihazda aynı görünür, e-imzaları destekler ve arşivlenmiş iş belgeleri için evrensel standarttır.",
    "Bu kılavuz yaşam döngüsünü aşama aşama anlatıyor — hangi formatın ne zaman kullanılacağı, aralarında temiz şekilde nasıl geçileceği ve işletmelerin yanlış anda yanlış format göndererek yaptığı yaygın hatalar.",
  ],
  steps: [
    {
      title: "Düzenlemenin gerçekleştiği yerde DOCX ile taslak hazırla",
      body: "Microsoft Word, Google Docs (DOCX dışa aktarımı), Pages → DOCX. Format gerçek düzenlemeyi, yorumları, değişiklik izlemeyi, çoklu yazar işini destekler. Bazı araçlar taklit etse de PDF desteklemez.",
    },
    {
      title: "Sözleşmeleri değişiklik izlemeli DOCX'te müzakere et",
      body: "Sözleşme kırmızı çizgileri DOCX'e aittir. Alıcı taraf ne değiştirdiğini görür, her birine yorum yapar ve bir karşı teklif üretir. PDF kırmızı çizgi araçları var ama daha yavaş ve daha az iş birlikçi.",
    },
    {
      title: "Sürüm son hâlini aldığında PDF'e dışa aktar",
      body: "Tarayıcındaki Word'den PDF'e, gömülü yazı tipleri ve sabit yerleşimle temiz bir dışa aktarma üretir. Bu, müşteriye giden, imzalanan ve arşivde yaşayan sürümdür.",
    },
    {
      title: "PDF olarak imzala ve teslim et",
      body: "İmzalar DOCX'e değil PDF'e eklenir. PDF İmzala ya da PDF Editor uygulaması kilitli PDF üzerinde imzayı yakalar; DOCX kaynağı düzenlenebilir kayıt olarak kalır.",
    },
    {
      title: "PDF'i arşivle, DOCX'i sakla",
      body: "PDF, teslim edilen/imzalanan şeyin kanonik kaydıdır. DOCX, ileride ilgili bir belge üretmen gerekirse saklanır. İkisinin de bir yeri var; birbirine karıştırma.",
    },
    {
      title: "PDF'i DOCX'e sadece zorunda kaldığında geri dönüştür",
      body: "PDF'ten Word'e, kaynağın olmadığında PDF'ten metni kurtarır. Çıktı yaklaşıktır — yerleşim temizliği bekle. Bunu iş akışı değil yedek olarak ele al.",
    },
  ],
  tips: [
    "Müşteri açıkça istemediği sürece DOCX'i gönderme. Anlaşmanın üzerinde olduğu şey PDF sürümüdür; DOCX senin çalışma kaynağın.",
    "Değişiklikleri sadece DOCX'te izle. PDF not alma araçları var ama gerçek değişiklik izlemenin yerini tutmaz.",
    "PDF dışa aktarımında yazı tiplerini göm. Müşterinin makinesinde farklı görünen bir PDF profesyonel görünmez.",
    "PDF'i e-posta ya da portal yüklemesi için sıkıştır. DOCX kaynağının sıkıştırmaya ihtiyacı yok; küçüktür. PDF genelde ihtiyaç duyar.",
    "İki formatı da proje klasöründe tut. PDF /final/'da, DOCX /taslaklar/ ya da /kaynak/'ta.",
  ],
  mobileNote:
    "Telefonlar genelde geç aşama iş PDF anlarını halleder — bir sözleşme imzala, bir raporu sıkıştır, sonu gönder. PDF Editor uygulaması bunların hepsini iOS ve Android'de halleder, daha önce gerçekleşen masaüstü DOCX işini tamamlar.",
  faq: [
    {
      q: "Neden her şey için PDF kullanmıyoruz?",
      a: "PDF gerçek düzenlemeyi, değişiklik izlemeyi ya da çoklu yazar iş birliğini desteklemez. Taslak hazırlama için DOCX gerçekten daha iyidir.",
    },
    {
      q: "Neden teslimat için de DOCX kullanmıyoruz?",
      a: "DOCX sürümler ve cihazlar arasında farklı görünür. Müşteriler senin amaçladığından farklı yerleşimler görür. PDF görünümü kilitler.",
    },
    {
      q: "Sözleşmeler PDF olarak mı yoksa DOCX olarak mı gönderilmeli?",
      a: "Son sözleşmeler: imzalı PDF. Müzakere taslakları: değişiklik izlemeli DOCX. Farklı aşamalarda farklı araçlar.",
    },
    {
      q: "Peki arşivler — DOCX mi PDF mi?",
      a: "PDF, teslim edilenin ya da imzalananın kaydı olarak. Referans için DOCX'i de sakla ama kanonik arşiv kopyası PDF'tir.",
    },
    {
      q: "PDF'ten Word'e ne zaman mantıklı olur?",
      a: "Bir PDF'i düzenlemen gerektiğinde ve kaynağına sahip olmadığında. Yerleşim temizliği bekle; dönüşüm yaklaşıktır.",
    },
  ],
  related: [
    { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
    { label: "Word'den PDF'e — dağıtım için temiz dışa aktarmalar", path: "/word-to-pdf" },
    { label: "PDF'ten Word'e — düzenlenebilir metni kurtar", path: "/pdf-to-word" },
    { label: "PDF mi DOCX mü — tam özellik karşılaştırması", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "İşletmeler için PDF — sözleşmeler ve iş akışları", path: "/pdf-for-business" },
};

export default content;
