import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "freelancers",
  h1: "Serbest Çalışanlar için PDF Editor",
  description:
    "Serbest çalışanların sevdiği iş akışları: teklifler, imzalı sözleşmeler ve faturalar — hepsi telefondan.",
  intro: [
    "Serbest çalışanlar iş operasyonlarının çoğunu telefondan yürütür. Ofis yok, BT departmanı yok, paylaşılan yazıcı yok. Kurumsal bir ekibe üç uygulama ve bir e-imza aboneliği gerektiren aynı PDF iş akışının, burada genellikle tek bir uygulamada, hızlıca, faturalanabilir saatler arasında gerçekleşmesi gerekir.",
    "Araçla boğuşarak geçen her dakika, faturalandırdığın işe harcanmayan bir dakikadır. Sorunsuzca çalışan bir PDF düzenleyici — yükleme olmadan, hesap oluşturmadan, haftada iki kez kullanılan bir araç için aylık ücret olmadan — aylar içinde kendini geri ödeyen o sessiz yatırımlardan biridir.",
    "Bunlar, serbest çalışan yaşam tarzını telefondan sürdürülebilir kılan somut işlemlerdir — hızlı, özel ve abonelik yükü olmadan.",
  ],
  workflows: [
    {
      title: "Düzgün bir teklifi PDF olarak gönder",
      body: "Teklifini Notion, Pages ya da Google Docs'tan PDF olarak dışa aktar. İmzala, e-postaya ekle, gönder. Alıcı tam olarak göstermek istediğini görür.",
    },
    {
      title: "Müşteri anlaşmalarını telefondan imzala",
      body: "İmzanı bir kez çiz, sonraki her sözleşmede yeniden kullan. Artık “bilgisayarımın başına geçince sana dönerim” yok.",
    },
    {
      title: "Harcadıkça gider fişlerini tara",
      body: "Kahve toplantısı, taksi yolculuğu, ekipman alımı — o an tara. Ortaya çıkan PDF'ler aranabilir ve muhasebe yazılımıyla uyumludur.",
    },
    {
      title: "Her zaman PDF olarak faturala",
      body: "Hangi faturalama aracını kullanırsan kullan, göndermeden önce PDF olarak dışa aktar. Düzenleme riskini azaltır ve DOCX'ten daha profesyonel görünür.",
    },
    {
      title: "Teslimatları devir için tek dosyada topla",
      body: "Bir projeyi kapatırken nihai brifingi, imzalı anlaşmayı ve destekleyici araştırmayı tek bir arşiv PDF'inde birleştir.",
    },
  ],
  appPitch:
    "PDF Editor, serbest çalışanın sessiz iş atıdır — tasarım ya da faturalama araçlarının yerini almaz, sadece belge katmanını zahmetsiz hale getirir. Ücretsiz, yerel, cihaz üzerinde. iOS ve Android'de mevcuttur.",
  related: [
    { label: "Telefonda PDF imzala", path: "/sign-pdf" },
    { label: "İşletmeler için PDF iş akışları", path: "/pdf-for-business" },
    { label: "Kullanım senaryoları — uzaktan çalışma", path: "/use-cases/remote-work" },
  ],
};

export default content;
