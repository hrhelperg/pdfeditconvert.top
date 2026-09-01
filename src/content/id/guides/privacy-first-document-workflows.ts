import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-document-workflows",
  h1: "Alur Kerja Dokumen yang Mengutamakan Privasi (Tanpa Unggah dari Awal sampai Akhir)",
  description:
    "Alur kerja dokumen yang utuh, mulai dari menangkap, mengedit, menandatangani, mengirim, hingga mengarsipkan, yang menjaga file tetap di perangkat Anda dan jauh dari server pihak ketiga. Bentuk yang realistis dan alat-alatnya.",
  updated: "2026-05-29",
  intro: [
    "Sebagian besar alur kerja dokumen bocor. Anda memindai kertas sensitif dengan satu aplikasi, mengunggahnya untuk dikompres ke sebuah situs web, mengirimnya lewat email melalui alat 'peningkatan' pihak ketiga, dan berakhir dengan tiga atau empat server yang menyimpan salinan dari sesuatu yang Anda kira tetap milik Anda sendiri. Setiap langkahnya memang praktis; tapi biaya privasi kumulatifnya besar dan tidak terlihat.",
    "Alur kerja yang mengutamakan privasi bukan berarti menolak alat-alat modern — ini soal memilih alat yang tidak memindahkan file Anda ke mana-mana. Penangkapan gambar terjadi di kamera Anda. Kompresi dan pengeditan terjadi di browser Anda. Penandatanganan terjadi di aplikasi di HP Anda. Transfer terjadi lewat saluran yang Anda percayai. Pada titik mana pun, dokumen itu tidak pernah tersimpan di server orang asing.",
    "Panduan ini menjelaskan bentuk alur kerja dari awal sampai akhir, alat yang cocok untuk setiap langkahnya, dan di mana pemrosesan lokal benar-benar belum bisa mencakupnya (jumlahnya lebih sedikit daripada yang dikira kebanyakan orang). Ini adalah alur kerja yang mengutamakan privasi secara realistis, bukan yang bersifat mutlak.",
  ],
  steps: [
    {
      title: "Menangkap: pindai secara lokal dengan HP Anda",
      body: "Pindai ke PDF di HP Anda menjalankan kamera dan deteksi halaman langsung di perangkat. Tidak ada unggahan, tidak ada pemrosesan cloud. PDF yang Anda hasilkan dimulai dan tetap berada secara lokal sampai Anda memutuskan untuk membagikannya.",
    },
    {
      title: "Edit dan rapikan di tab browser",
      body: "Kompres PDF, Urutkan Ulang Halaman PDF, Ekstrak Halaman PDF, Putar PDF, Tambah Watermark ke PDF — semuanya berjalan di browser. Filenya dibaca oleh JavaScript di perangkat Anda; server tidak pernah melihat isinya.",
    },
    {
      title: "Tanda tangani dengan tanda tangan asli, secara lokal",
      body: "Tanda Tangan PDF atau aplikasi PDF Editor menangkap tanda tangan yang digambar langsung di perangkat Anda dan menyematkannya ke dalam file. Tidak ada platform tanda tangan pihak ketiga yang melihat dokumen itu.",
    },
    {
      title: "Bagikan lewat saluran yang tepercaya",
      body: "AirDrop, Signal, email terenkripsi, pesan terenkripsi ujung ke ujung. Saluran itu mengenkripsi proses pengirimannya; penerima menerima file tanpa melewati perantara yang bisa membacanya.",
    },
    {
      title: "Arsipkan di penyimpanan terenkripsi",
      body: "Drive lokal dengan enkripsi disk penuh, atau cadangan cloud zero-knowledge. Jangan menyimpan PDF sensitif di penyimpanan cloud biasa — itu artinya sebuah server membaca file Anda.",
    },
    {
      title: "Audit dan hapus secara terjadwal",
      body: "Periksa PDF sensitif Anda setiap kuartal. Hapus yang sudah tidak Anda butuhkan lagi. Setiap file sensitif yang tersimpan adalah risiko kecil yang terus berlanjut; mengurangi jumlahnya berarti mengurangi paparan risikonya.",
    },
  ],
  tips: [
    "Menangkap, mengedit, dan menandatangani semuanya bisa dilakukan di satu perangkat saja. Semakin sedikit perpindahan antar perangkat, semakin kecil celah kebocorannya.",
    "Verifikasi apakah alat 'berbasis browser' benar-benar berjalan secara lokal sebelum mempercayainya. Tab network di devtools adalah cara pengecekan paling cepat.",
    "Enkripsi PDF sensitif dengan kata sandi bahkan saat membagikannya lewat saluran yang sudah terenkripsi. Perlindungan berlapis itu penting.",
    "Hindari layanan berbagi file berbasis 'kirim tautan' untuk materi sensitif. Tautan itu hanyalah pegangan di sisi server; filenya tetap tersimpan di disk milik orang lain.",
    "Jangan mencetak PDF sensitif kecuali benar-benar perlu. Antrean pencetakan dan kertasnya sendiri adalah salinan tambahan yang harus Anda lacak.",
  ],
  mobileNote:
    "Alur kerja yang mengutamakan privasi lebih mudah dilakukan di HP daripada yang dikira kebanyakan orang. Aplikasi PDF Editor menangani penangkapan, pengeditan, tanda tangan, dan berbagi secara lokal di iOS dan Android, sehingga dokumen sensitif bisa berpindah dari kertas sampai ke penerima tanpa pernah menyentuh server pihak ketiga.",
  faq: [
    {
      q: "Bisakah alur kerja sungguhan benar-benar tetap lokal?",
      a: "Untuk sebagian besar langkahnya, ya. Menangkap, mengompres, mengedit, menandatangani, dan transfer biasa semuanya bisa dilakukan tanpa unggahan. Sebagian operasi (OCR berkualitas tinggi, penyensoran tingkat lanjut) kadang membutuhkan bantuan server; pilih alat-alat itu dengan cermat jika Anda memerlukannya.",
    },
    {
      q: "Bukankah semua ini berlebihan?",
      a: "Tidak, untuk materi yang sensitif. Alur kerja yang mengunggah ke mana-mana dulu berfungsi baik saat dokumen belum terlalu sensitif dan kebocoran data jarang terjadi. Keduanya sudah berubah sekarang. Alur kerja yang mengutamakan privasi membutuhkan waktu yang sama begitu sudah menjadi kebiasaan.",
    },
    {
      q: "Bagaimana saya tahu sebuah alat browser benar-benar berjalan lokal?",
      a: "Buka devtools, tab network, tambahkan sebuah file. Jika Anda tidak melihat unggahan keluar yang besar, berarti pemrosesannya lokal. Alat-alat di situs ini mengikuti pola itu.",
    },
    {
      q: "Bagaimana dengan cadangan (backup)?",
      a: "Cadangan cloud zero-knowledge (penyedia layanan tidak bisa membaca file Anda) tidak masalah. Cadangan cloud biasa untuk PDF sensitif tidak privat — penyedia layanan bisa membaca semuanya.",
    },
    {
      q: "Di mana alur kerja ini bisa gagal?",
      a: "Di dua tempat: saat sebuah alur kerja mengharuskan platform berbayar tertentu (industri yang diatur regulasi ketat), dan saat penerima memakai alur kerja yang mengunggah di sisi mereka. Privasi bergantung pada kedua belah pihak.",
    },
  ],
  related: [
    { label: "PDF tools — berbasis browser, tanpa unggah", path: "/pdf-tools" },
    { label: "Alat PDF yang mengutamakan privasi", path: "/guides/privacy-first-pdf-tools" },
    { label: "Cara kerja pemrosesan PDF lokal di browser, dijelaskan", path: "/guides/local-browser-pdf-processing-explained" },
    { label: "Manfaat pemrosesan dokumen berbasis browser", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "PDF tools — gratis, berbasis browser", path: "/pdf-tools" },
};

export default content;
