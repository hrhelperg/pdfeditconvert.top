import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx",
  h1: "PDF atau DOCX — Format Mana yang Sebaiknya Anda Pakai?",
  description:
    "Kapan sebaiknya memilih PDF daripada DOCX, dan sebaliknya. Perbandingan jelas soal kemudahan edit, akurasi tampilan, tanda tangan, dan berbagi file.",
  updated: "2026-05-11",
  intro: [
    "PDF dan DOCX menyelesaikan masalah yang berbeda. PDF adalah format yang terkunci dan siap cetak, tampilannya identik di setiap perangkat. DOCX adalah format kerja yang bisa diedit, bisa dibentuk ulang, distilkan ulang, dan diformat ulang oleh siapa pun yang punya Word, Google Docs, atau aplikasi office apa pun.",
    "Memilih format yang tepat untuk setiap keperluan menghindarkan sebagian besar pusing kepala yang sering dikaitkan dengan keduanya. Mengirim kontrak final sebagai DOCX mengundang perubahan yang tidak disengaja. Mengirim draf yang masih dikerjakan sebagai PDF membuat proses tinjauan jadi merepotkan. Pilihan ini bukan soal estetika, tapi soal untuk apa dokumen itu dipakai.",
    "Panduan ini menjabarkan kapan masing-masing format lebih unggul, lengkap dengan contoh konkret dari kontrak, draf, faktur, laporan, dan jenis dokumen yang dihadapi bisnis kecil serta perorangan setiap minggu.",
  ],
  steps: [
    {
      title: "Gunakan PDF saat dokumennya final",
      body: "Kontrak, perjanjian yang sudah ditandatangani, faktur, brosur, laporan yang dikirim ke klien atau pemangku kepentingan. Apa pun yang penerimanya harus melihat persis apa yang Anda lihat, dan tidak boleh mengeditnya tanpa sepengetahuan Anda.",
    },
    {
      title: "Gunakan DOCX saat dokumennya masih ditulis",
      body: "Draf, dokumen kolaboratif, apa pun yang masih ditinjau, template yang akan dipakai ulang dan disesuaikan. Komentar dan pelacakan perubahan hanya benar-benar berfungsi di DOCX, itulah inti dari format ini.",
    },
    {
      title: "Gunakan PDF untuk pengarsipan",
      body: "PDF dirancang untuk penyimpanan jangka panjang. Formatnya tampil sama persis 10 tahun ke depan. File DOCX bisa rusak secara halus di antara versi Word dan sistem operasi yang berbeda, ini masih wajar untuk dokumen kerja, tapi berisiko untuk arsip.",
    },
    {
      title: "Gunakan DOCX saat kontennya perlu diekstrak",
      body: "Mengambil teks ke alat lain, menggunakan ulang satu bagian untuk artikel blog, menulis ulang dengan gaya berbeda, semua ini lebih mudah dari DOCX di mana kontennya sudah terstruktur dan bisa diedit.",
    },
    {
      title: "Konversi di antara keduanya sesuai kebutuhan",
      body: "Alat PDF yang bagus mengonversi di kedua arah dengan akurasi tinggi untuk dokumen berbasis teks. Alur kerja yang umum: edit di DOCX, ekspor ke PDF saat dibagikan ke luar. Terima PDF, konversi ke DOCX jika Anda perlu menggunakan ulang kontennya.",
    },
    {
      title: "Gunakan PDF saat menerima dari orang yang tidak Anda kenal",
      body: "File DOCX bisa berisi makro dan objek tersemat yang menghadirkan risiko keamanan. PDF lebih aman dibuka dari sumber yang tidak dipercaya, meski Anda tetap harus menjaga aplikasi pembaca PDF Anda tetap diperbarui.",
    },
  ],
  tips: [
    "Jangan pernah mengirim draf kontrak sebagai DOCX ke pihak eksternal kecuali Anda memang mengundang perubahan, mereka bisa mengeditnya tanpa sepengetahuan Anda, dan Anda hanya akan melihat perbedaannya jika membandingkan dengan cermat.",
    "Jangan pernah mengirim faktur final sebagai DOCX, seharusnya tidak bisa diedit. PDF adalah pilihan yang tepat setiap saat.",
    "Jika penerima meminta \"PDF yang bisa diedit\", biasanya maksudnya DOCX. Tanyakan dulu sebelum berasumsi, lalu konversi.",
    "PDF dengan tanda tangan sebaiknya tetap PDF. Mengonversinya kembali ke DOCX menghapus tanda tangannya.",
    "Untuk dokumen dengan kolom formulir, PDF biasanya pilihan yang lebih baik, kolom formulir di DOCX sering canggung dan tidak konsisten antar aplikasi editor.",
  ],
  mobileNote:
    "Di HP, DOCX membutuhkan Word, Google Docs, atau aplikasi office lain untuk ditampilkan dengan benar. PDF terbuka secara native di iOS dan Android dengan penampil bawaan. Hal itu saja sudah membuat PDF pilihan tepat untuk sebagian besar dokumen yang dibagikan, penerima Anda tidak perlu memasang apa pun untuk membacanya.",
  faq: [
    {
      q: "Bisakah saya mengedit PDF langsung tanpa mengonversinya?",
      a: "Bisa, dengan editor PDF yang tepat. Mengedit PDF lebih terbatas dibanding mengedit DOCX, dirancang untuk perbaikan, tanda tangan, dan perubahan kecil, bukan untuk penulisan ulang besar-besaran. Untuk pengeditan yang substansial, mengonversi ke DOCX terlebih dahulu biasanya lebih masuk akal.",
    },
    {
      q: "Format mana yang menghasilkan file lebih kecil?",
      a: "Tergantung isinya. DOCX yang penuh teks biasanya lebih kecil daripada PDF yang setara. PDF yang penuh gambar bisa lebih kecil dari DOCX jika dikompres dengan baik, karena kompresi gambar di PDF lebih fleksibel.",
    },
    {
      q: "Apakah font saya akan bertahan setelah konversi?",
      a: "Sebagian besar ya. Jika sebuah font tidak tersedia di perangkat tujuan, font serupa otomatis menggantikannya. Tetap gunakan font umum (Inter, Helvetica, Calibri, Arial) untuk meminimalkan penggantian yang terlihat.",
    },
    {
      q: "Apakah PDF/A berbeda dari PDF biasa?",
      a: "Ya. PDF/A adalah subset arsip yang ketat, menyematkan semua font dan tidak mengizinkan ketergantungan eksternal. Dibutuhkan oleh sebagian arsip pemerintah dan hukum. PDF standar cukup untuk hampir semua kebutuhan lain.",
    },
    {
      q: "Bisakah DOCX berisi tanda tangan?",
      a: "Bisa berisi gambar tanda tangan, tapi tanda tangan itu tidak punya validitas kriptografis. PDF mendukung tanda tangan digital sungguhan yang mengikat tanda tangan ke dokumen. Untuk apa pun yang perlu ditandatangani secara hukum, PDF adalah format yang tepat.",
    },
  ],
  related: [
    { label: "PDF atau DOCX — perbandingan lengkap", path: "/compare/pdf-vs-docx" },
    { label: "Konverter PDF", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
  parentHub: { label: "Konverter PDF", path: "/pdf-converter" },
};

export default content;
