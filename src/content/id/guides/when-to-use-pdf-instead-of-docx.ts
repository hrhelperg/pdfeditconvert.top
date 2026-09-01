import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-pdf-instead-of-docx",
  h1: "Kapan Menggunakan PDF Daripada DOCX (Daftar Periksa)",
  description:
    "Anda punya dokumen Word, apakah sebaiknya dikirim sebagai PDF saja? Daftar periksa singkat momen-momen PDF adalah pilihan yang tepat, dan cara mengonversinya.",
  updated: "2026-05-23",
  intro: [
    "Anda sudah menyelesaikan sebuah dokumen di Word, dan sekarang ada satu keputusan kecil: kirim .docx-nya apa adanya, atau konversi dulu ke PDF? Mudah saja memakai apa pun yang ada di depan Anda, tapi pilihan yang salah punya konsekuensi — tata letak yang berantakan di layar orang lain, harga yang diam-diam diedit klien, draf yang dikira final. Panduan ini membahas cara mengenali momen-momen ketika PDF jelas pilihan yang lebih baik untuk dikirim.",
    "Alih-alih perbandingan format yang luas, ini daftar periksa keputusan yang terfokus: sekumpulan sinyal yang berarti \"konversi ke PDF sebelum mengirim.\" Kalau tidak satu pun berlaku, DOCX Anda sudah baik-baik saja apa adanya. Kalau salah satu berlaku, alat gratis Word ke PDF mengonversinya di perangkat Anda dalam hitungan detik.",
    "Jalankan daftar periksa ini beberapa kali dan itu akan jadi insting — Anda akan langsung tahu apakah sebuah dokumen sebaiknya keluar sebagai Word atau sebagai PDF.",
  ],
  steps: [
    {
      title: "Apakah dokumennya sudah final?",
      body: "Kalau sudah selesai dan tidak dimaksudkan untuk diedit — surat yang sudah ditandatangani, laporan yang sudah selesai, sebuah pengajuan — kirim PDF. DOCX mengundang perubahan yang tidak Anda inginkan begitu dokumen sudah final.",
    },
    {
      title: "Apakah tata letaknya harus tetap persis seperti dirancang?",
      body: "Brosur, CV, apa pun yang jarak dan fontnya penting sebaiknya dikirim sebagai PDF. DOCX bisa berubah tata letaknya di versi Word yang berbeda atau di Google Docs, merusak tata letak yang sudah Anda susun cermat.",
    },
    {
      title: "Bisakah penerima mengeditnya sampai merugikan Anda?",
      body: "Penawaran, faktur, kontrak — di mana pun sebuah angka atau ketentuan bisa diubah — sebaiknya berupa PDF. Ini mencegah pengeditan tanpa sengaja dan menjaga catatan tetap dari apa yang Anda kirim.",
    },
    {
      title: "Mungkinkah mereka tidak punya Word?",
      body: "PDF terbuka secara native di setiap HP, tablet, dan komputer. Kalau Anda tidak yakin penerima punya aplikasi perkantoran, PDF menjamin mereka bisa membacanya tanpa harus menginstal apa pun.",
    },
    {
      title: "Apakah dokumennya akan masuk arsip?",
      body: "Untuk penyimpanan jangka panjang, PDF tampil sama persis sepuluh tahun kemudian; DOCX bisa bergeser antarversi Word. Arsipkan sebagai PDF, simpan DOCX sebagai file asli yang bisa diedit.",
    },
    {
      title: "Kalau jawabannya ya untuk salah satu, konversi",
      body: "Buka alat Word ke PDF, tambahkan .docx Anda, dan unduh PDF-nya — di perangkat Anda, tanpa ada yang diunggah. Simpan file Word asli untuk pengeditan di masa depan.",
    },
  ],
  tips: [
    "Pertahankan DOCX kalau dokumennya masih dikerjakan, butuh komentar atau lacak perubahan, atau penerima memang dimaksudkan untuk mengeditnya. PDF untuk dokumen yang sudah final dan tetap.",
    "Selalu pertahankan file .docx yang bisa diedit. PDF adalah salinan yang dikirim; file Word adalah file asli Anda untuk revisi berikutnya.",
    "Terima atau hapus lacak perubahan sebelum mengonversi, atau bisa jadi muncul di PDF untuk dilihat semua orang.",
    "Mengonversi ke PDF mengunci tata letak tapi tidak mengenkripsi file-nya. Kalau butuh perlindungan sesungguhnya, tambahkan kata sandi sebagai langkah terpisah.",
    "Kalau penerima meminta 'PDF yang bisa diedit', biasanya maksudnya DOCX — periksa dulu sebelum berasumsi, lalu kirim yang tepat.",
  ],
  mobileNote:
    "Keputusan untuk mengirim PDF sering muncul saat Anda jauh dari meja kerja, ketika dokumen yang sudah selesai perlu dikirim sekarang juga. Aplikasi PDF Editor mengonversi dan mengirim dari HP Anda, jadi Anda bisa mengunci dokumen dan mengirimnya lewat email tanpa perlu menunggu kembali ke komputer.",
  faq: [
    {
      q: "Kapan sebaiknya saya mengirim PDF daripada file Word?",
      a: "Saat dokumennya sudah final, tata letaknya harus tetap, penerima bisa mengeditnya sampai merugikan Anda, mereka mungkin tidak punya Word, atau dokumennya akan masuk arsip. Salah satu dari itu berarti konversi ke PDF.",
    },
    {
      q: "Kapan lebih baik mempertahankan DOCX?",
      a: "Saat dokumennya masih ditulis, butuh komentar atau lacak perubahan, atau penerima memang dimaksudkan untuk mengeditnya. DOCX adalah format kerja; PDF adalah format yang sudah selesai.",
    },
    {
      q: "Apakah mengonversi Word ke PDF akan mengubah tata letak saya?",
      a: "Untuk dokumen dengan font umum, tidak — itulah inti dari PDF. Perhatikan hanya font yang tidak umum, yang bisa digantikan. Buka PDF-nya dan periksa sebelum mengirim.",
    },
    {
      q: "Apakah mengirim PDF melindungi dokumennya?",
      a: "Ini mencegah pengeditan tanpa sengaja dan mengunci tata letaknya, tapi bukan enkripsi. Untuk perlindungan sesungguhnya dari membuka atau menyalin, tambahkan kata sandi secara terpisah.",
    },
    {
      q: "Di mana saya bisa melihat perbandingan PDF dan DOCX yang lebih lengkap?",
      a: "Lihat panduan dan perbandingan PDF atau DOCX untuk gambaran yang lebih luas tentang bagaimana kedua format ini berbeda dalam hal pengeditan, kesetiaan tampilan, dan penandatanganan.",
    },
  ],
  related: [
    { label: "Word ke PDF — konversi di browser Anda", path: "/word-to-pdf" },
    { label: "PDF atau DOCX — format mana yang harus dipakai", path: "/guides/pdf-vs-docx" },
    { label: "Cara mengonversi Word ke PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF atau DOCX — perbandingan fitur", path: "/compare/pdf-vs-docx" },
  ],
  parentHub: { label: "Konverter PDF", path: "/pdf-converter" },
};

export default content;
