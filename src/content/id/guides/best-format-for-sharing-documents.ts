import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-format-for-sharing-documents",
  h1: "Format Terbaik untuk Membagikan Dokumen (PDF, DOCX, Gambar Dibandingkan)",
  description:
    "Kapan PDF adalah format yang tepat untuk dibagikan, kapan bukan, dan cara alternatif realistisnya (DOCX, gambar, HTML, Markdown) benar-benar dibandingkan pada skenario sehari-hari.",
  updated: "2026-05-29",
  intro: [
    "Tidak ada satu format terbaik untuk membagikan dokumen — yang ada adalah format terbaik untuk setiap jenis situasi berbagi. PDF tepat sebagian besar waktu, tapi tidak selalu. DOCX tepat untuk dokumen yang akan diedit. Gambar tepat untuk visual tunggal. HTML tepat untuk web. Markdown tepat untuk teks polos dengan struktur ringan. Masing-masing unggul di satu hal dan terasa canggung di tempat lain.",
    "Cara yang tepat untuk memutuskan adalah memikirkan apa yang akan dilakukan penerima dengan file itu. Membaca dan menyimpan? PDF. Mengedit? DOCX. Melihat di web? HTML. Mengutip dalam obrolan? Markdown. Melihat satu gambar? PNG atau JPG. Memaksa setiap kali berbagi lewat PDF memang praktis, tapi menimbulkan hambatan saat penerimanya sebenarnya ingin mengedit.",
    "Panduan ini menjelaskan pilihannya skenario demi skenario. Tujuannya adalah mengirim format yang akan benar-benar dipakai penerima, bukan format yang paling mudah Anda buat.",
  ],
  steps: [
    {
      title: "Jika mereka akan membaca dan mengarsipkan, kirim PDF",
      body: "Tata letak terkunci, identik di setiap perangkat, dapat ditandatangani, dapat diarsipkan. PDF adalah pilihan default untuk dokumen yang dibagikan dan pilihan yang tepat sebagian besar waktu.",
    },
    {
      title: "Jika mereka akan mengedit, kirim DOCX atau Google Docs",
      body: "Pengeditan sungguhan terjadi di DOCX atau Docs. Mengirim PDF saat penerimanya akan mengedit memaksa mereka mengonversinya kembali — mereka hanya akan mendapatkan perkiraan dari apa yang Anda kirim.",
    },
    {
      title: "Jika mereka akan melihatnya di web, kirim tautan atau HTML",
      body: "Halaman web tampil di browser tanpa perlu diunduh. Untuk konten yang memang ditujukan untuk web, HTML lebih unggul daripada PDF.",
    },
    {
      title: "Jika isinya teks polos dengan struktur ringan, kirim Markdown",
      body: "Catatan, konten teknis, dokumentasi ringan. Markdown terbaca sebagai teks di konteks apa pun dan tampil rapi di tempat yang mendukungnya.",
    },
    {
      title: "Jika isinya satu gambar, kirim PNG atau JPG",
      body: "Gambar tunggal, tanpa teks di baliknya, tanpa halaman yang perlu dikelola. PNG untuk yang tajam/transparan, JPG untuk foto. Membungkusnya dalam PDF hanya menambah lapisan yang tidak perlu.",
    },
    {
      title: "Pilih PDF sebagai default saat jawabannya tidak jelas",
      body: "Saat Anda tidak bisa menebak apa yang akan dilakukan penerima dengan file itu, PDF adalah pilihan cadangan yang paling aman. Bisa dibaca siapa saja, tidak berubah setelah dikirim, dan bisa dikonversi ke format lain jika diperlukan.",
    },
  ],
  tips: [
    "Tanyakan pada penerima apakah mereka perlu mengedit. Jawabannya menentukan format yang tepat.",
    "Jangan mengirim PDF dan DOCX sekaligus kecuali diminta. Itu memberi kesan Anda ragu-ragu.",
    "Konten multihalaman dalam format apa pun selain PDF biasanya adalah pilihan yang salah.",
    "Alat internal (obrolan, wiki, platform dokumen) sering punya format bawaan yang lebih unggul dibanding PDF dalam konteksnya. Jangan secara refleks mengekspor ke PDF untuk berbagi internal.",
    "Jika ragu soal formatnya, kirim saja PDF — penerima bisa mengonversinya sendiri jika mereka perlu.",
  ],
  mobileNote:
    "HP kini menerima sebagian besar dokumen yang dibagikan, dan PDF bekerja paling baik di layar kecil karena tata letaknya terkunci. Aplikasi PDF Editor membaca, menandatangani, dan membagikan PDF di iOS dan Android tanpa kejutan soal bagaimana file itu akan terlihat di setiap perangkat.",
  faq: [
    {
      q: "Apakah PDF benar-benar pilihan default terbaik?",
      a: "Untuk membagikan dokumen yang sudah selesai, ya. Untuk draf kerja, DOCX lebih baik. Untuk gambar tunggal, PNG atau JPG. Pilih berdasarkan apa yang akan dilakukan penerimanya.",
    },
    {
      q: "Kapan DOCX lebih baik daripada PDF?",
      a: "Saat penerimanya akan mengedit dokumen itu. PDF sulit diedit; DOCX mudah. Jangan membuat mereka harus mengonversinya.",
    },
    {
      q: "Perlukah saya mengirim keduanya?",
      a: "Hanya jika diminta secara eksplisit. Mengirim dua format memberi kesan Anda tidak yakin format mana yang diinginkan penerima, dan mereka jadi harus memilih sendiri.",
    },
    {
      q: "Bagaimana dengan tautan dokumen cloud?",
      a: "Berguna untuk dokumen kolaboratif (Docs, Sheets). Untuk berbagi satu arah dokumen yang sudah selesai, unduhan lebih sederhana dibanding mengatur izin tautan.",
    },
    {
      q: "Apakah perangkat penerima berpengaruh?",
      a: "Sedikit — perangkat lama mungkin tidak bisa membuka fitur DOCX yang lebih baru. PDF adalah format yang paling kompatibel secara universal.",
    },
  ],
  related: [
    { label: "PDF tools — daftar lengkap alat dalam browser", path: "/pdf-tools" },
    { label: "PDF dibanding DOCX — perbandingan fitur", path: "/guides/pdf-vs-docx" },
    { label: "PDF atau Google Docs", path: "/guides/pdf-vs-google-docs" },
    { label: "PDF atau gambar untuk membagikan dokumen", path: "/guides/pdf-vs-images-for-sharing-documents" },
  ],
  parentHub: { label: "PDF tools — gratis, berbasis browser", path: "/pdf-tools" },
};

export default content;
