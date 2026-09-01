import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-word-to-pdf",
  h1: "Cara Mengonversi Word ke PDF, Gratis Tanpa Unggah",
  description:
    "Ubah file .docx atau .txt menjadi PDF yang rapi dan siap dibagikan di browser. Alasan PDF adalah format yang tepat untuk dikirim, dan yang perlu diperiksa sebelum mengekspor.",
  updated: "2026-05-23",
  intro: [
    "Mengirim dokumen Word ke orang di luar lingkungan kerja Anda sendiri adalah taruhan kecil. Mereka mungkin membukanya di versi Word yang berbeda, di Google Docs, atau di HP tanpa aplikasi office sama sekali, dan tata letak yang sudah Anda susun dengan hati-hati bisa bergeser, berubah alirannya, atau bahkan menolak untuk terbuka. Mengonversi ke PDF menghilangkan taruhan itu. PDF terlihat sama di mana pun dan tidak bisa diedit secara tidak sengaja.",
    "Panduan ini membahas cara mengubah file .docx atau .txt menjadi PDF memakai alat gratis Word ke PDF, yang berjalan di browser Anda tanpa apa pun yang diunggah. Ini langkah yang tepat setiap kali sebuah dokumen sudah selesai dan akan dikirim ke orang lain: penawaran, surat lamaran, faktur, formulir yang sudah ditandatangani, laporan untuk klien.",
    "Kita juga akan membahas beberapa hal yang layak diperiksa sebelum Anda mengekspor, supaya PDF yang Anda kirim benar-benar yang Anda maksudkan untuk dikirim.",
  ],
  steps: [
    {
      title: "Selesaikan dulu pengeditan di Word",
      body: "PDF adalah sebuah rekaman, bukan dokumen kerja. Lakukan setiap perubahan yang Anda inginkan di Word, Google Docs, atau Pages sebelum dikonversi, memperbaiki salah ketik setelah diekspor berarti harus mengonversi ulang.",
    },
    {
      title: "Buka alat Word ke PDF",
      body: "Buka alat Word ke PDF di browser Anda. Tidak ada yang perlu dipasang dan tidak perlu mendaftar; konversinya terjadi di perangkat Anda.",
    },
    {
      title: "Tambahkan file .docx atau .txt Anda",
      body: "Seret file ke zona unggah atau klik untuk memilihnya. File .txt biasa juga bisa dikonversi, berguna untuk mengubah catatan atau log menjadi dokumen yang rapi.",
    },
    {
      title: "Konversi dan unduh",
      body: "Klik \"Konversi ke PDF\". Alat ini me-render dokumen Anda dan PDF-nya otomatis terunduh, siap dilampirkan atau diunggah.",
    },
    {
      title: "Buka PDF-nya dan periksa ulang",
      body: "Selalu buka hasilnya sebelum dikirim. Pastikan pemisahan halaman jatuh di tempat yang masuk akal, judul-judul berada di posisi yang Anda harapkan, dan tidak ada yang terpotong di margin.",
    },
    {
      title: "Ubah namanya jadi sesuatu yang deskriptif",
      body: "\"Faktur-Acme-2026-05.pdf\" memberi tahu penerima apa yang mereka lihat; \"Document1.pdf\" tidak. Nama file yang jelas juga membantu ditemukan lagi lewat pencarian nanti.",
    },
  ],
  tips: [
    "Tetap gunakan font umum (Calibri, Arial, Times New Roman, Inter). Font yang tidak umum bisa digantikan saat konversi dan menggeser tata letak Anda.",
    "Jika dokumen Anda bergantung pada ukuran halaman tertentu, atur di Word sebelum dikonversi, jangan berharap alatnya menebak.",
    "Mengonversi ke PDF tidak mengenkripsi atau mengunci file dari penyalinan, itu hanya menghentikan pengeditan yang tidak disengaja. Untuk perlindungan sungguhan, tambahkan kata sandi secara terpisah.",
    "Fitur Word yang rumit seperti komentar tersemat, pelacakan perubahan, dan makro bukan bagian dari PDF. Terima atau hapus dulu pelacakan perubahan supaya tidak muncul di hasilnya.",
    "Untuk dokumen yang akan Anda edit lagi nanti, simpan .docx-nya. PDF adalah salinan untuk dikirim, bukan file utama Anda.",
  ],
  mobileNote:
    "Perlu mengirim dokumen yang sudah selesai dari HP? Aplikasi PDF Editor mengubah dokumen menjadi PDF, menandatanganinya, dan membagikannya langsung lewat menu bagikan, berguna saat sebuah kontrak harus dikirim balik sebelum Anda sempat mendekati meja kerja.",
  faq: [
    {
      q: "Apakah format saya akan bertahan setelah konversi?",
      a: "Untuk dokumen biasa dengan font umum, ya, itulah inti dari PDF. Satu hal yang perlu diperhatikan adalah font yang tidak umum, yang mungkin digantikan. Buka PDF-nya dan periksa sebelum mengirim.",
    },
    {
      q: "Bisakah saya mengonversi file .txt juga?",
      a: "Bisa. File teks biasa terkonversi menjadi PDF yang bersih dan terbaca, cara cepat membuat catatan, log, atau data hasil ekspor jadi presentabel.",
    },
    {
      q: "Apakah dokumen saya diunggah ke suatu tempat?",
      a: "Tidak. Konversinya berjalan di browser Anda, di perangkat Anda sendiri, jadi filenya tidak pernah meninggalkannya. Itu penting untuk kontrak, faktur, dan apa pun yang berisi data pribadi.",
    },
    {
      q: "Apakah mengonversi ke PDF melindungi dokumennya?",
      a: "Ini mencegah pengeditan yang tidak disengaja dan menjaga tata letak tetap tetap, tapi bukan enkripsi. Jika Anda perlu mencegah file dibuka atau disalin, tambahkan kata sandi, konversi saja tidak cukup.",
    },
    {
      q: "Bisakah saya mengedit PDF-nya setelah itu?",
      a: "PDF cocok untuk perbaikan dan tanda tangan, bukan penulisan ulang besar-besaran. Jika Anda perlu membuat perubahan besar, edit .docx aslinya dan ekspor ulang, atau konversi PDF-nya kembali ke Word.",
    },
  ],
  related: [
    { label: "Word ke PDF — konversi di browser Anda", path: "/word-to-pdf" },
    { label: "PDF ke Word — konversi sebaliknya", path: "/pdf-to-word" },
    { label: "Cara mengonversi PDF ke Word", path: "/guides/how-to-convert-pdf-to-word" },
    { label: "Kapan menggunakan PDF daripada DOCX", path: "/guides/when-to-use-pdf-instead-of-docx" },
  ],
  parentHub: { label: "Konverter PDF", path: "/pdf-converter" },
};

export default content;
