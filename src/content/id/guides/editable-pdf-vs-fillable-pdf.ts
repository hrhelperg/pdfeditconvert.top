import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-fillable-pdf",
  h1: "PDF yang Bisa Diedit atau Formulir PDF yang Bisa Diisi, Apa Bedanya?",
  description:
    "Mengedit PDF mengubah isinya, mengisi formulir PDF berarti memasukkan jawaban ke kolom formulir. Alasan keduanya adalah pekerjaan yang berbeda, dan mana yang benar-benar Anda butuhkan.",
  updated: "2026-06-01",
  intro: [
    "“Bisa diedit” dan “bisa diisi” kedengarannya sama, dan orang sering memakainya bergantian, padahal keduanya menggambarkan dua pekerjaan yang berbeda. Mengedit PDF berarti mengubah dokumen itu sendiri: mengganti kalimat, mengganti logo, memindahkan paragraf. Mengisi PDF berarti membiarkan dokumen tetap seperti niat pembuatnya dan hanya memasukkan jawaban ke tempat yang sudah disediakan. Formulir dibuat untuk diisi, bukan diedit.",
    "Perbedaan ini penting karena alat dan izin yang dipakai berbeda. PDF yang bisa diedit memungkinkan Anda mengubah isi dasarnya. PDF yang bisa diisi sengaja membatasi Anda hanya pada kolom formulirnya, sehingga pertanyaan dan tata letaknya tetap sementara Anda mengisi jawaban. Banyak formulir memang sengaja dibuat tidak bisa diedit, pembuatnya ingin setiap salinan menanyakan hal yang sama di tempat yang sama.",
    "Ada satu istilah lagi yang membuat semuanya makin membingungkan, “berupa gambar”, yang berbicara soal apakah teks PDF itu asli atau hanya gambar. Panduan ini berfokus pada perbandingan bisa diedit dengan bisa diisi: apa arti masing-masing, kapan Anda butuh yang mana, dan cara mengetahui apa yang diizinkan sebuah file.",
  ],
  steps: [
    {
      title: "Definisikan mengedit: mengubah dokumen",
      body: "Mengedit mengubah isi yang dibuat penulisnya, teks, gambar, urutan halaman. Anda mengedit PDF misalnya untuk memperbaiki salah ketik pada kontrak atau memperbarui harga pada brosur. Ini mengubah apa yang dikatakan dokumen itu.",
    },
    {
      title: "Definisikan mengisi: menjawab di dalam kolom",
      body: "Mengisi membiarkan dokumen tetap utuh dan hanya menambahkan jawaban Anda ke kolom atau ruang yang sudah ditentukan. Anda mengisi formulir lamaran; Anda tidak menulis ulang pertanyaannya.",
    },
    {
      title: "Periksa apakah file bisa diisi",
      body: "Ketuk di tempat jawaban seharusnya diisi. Kursor atau kotak yang tersorot berarti formulir bisa diisi lewat kolom interaktif. Jika tidak ada kolom, Anda tetap bisa menambahkan teks di atasnya, pengisian manual, bukan yang bawaan.",
    },
    {
      title: "Periksa apakah file bisa diedit",
      body: "Coba pilih satu baris teks asli dokumen. Jika teksnya terseleksi dan editor PDF mengizinkan Anda mengubahnya, berarti isinya bisa diedit. Halaman hasil pindaian dan file yang diamankan biasanya menolak cara ini.",
    },
    {
      title: "Sesuaikan alat dengan tugasnya",
      body: "Perlu mengubah isi dokumen? Gunakan editor PDF. Perlu menyelesaikan formulir yang dikirim orang lain? Gunakan pengisian formulir, ketuk kolomnya atau tempatkan teks di tempat jawaban seharusnya berada, lalu ekspor.",
    },
  ],
  tips: [
    "Sebuah file bisa saja bisa diisi tapi tidak bisa diedit: Anda bisa menjawab kolomnya, tapi tidak bisa mengubah pertanyaannya. Ini memang sengaja dirancang begitu untuk sebagian besar formulir.",
    "Jika formulir menanyakan sesuatu yang tidak bisa Anda jawab dalam ruang yang tersedia, jangan mencoba mengedit formulirnya, tambahkan catatan penjelas di tempat yang diizinkan, atau tanyakan ke pengirimnya.",
    "Mengedit jawaban formulir yang sudah jadi masih mungkin dilakukan nanti jika Anda menyimpan salinan yang masih bisa diedit, tapi versi yang sudah dikunci atau dipindai jauh lebih sulit diubah.",
    "Saat Anda yang membuat formulirnya, tentukan sejak awal: apakah Anda ingin orang lain mengisinya (kunci isinya, tambahkan kolom) atau berkolaborasi mengerjakannya bersama (biarkan tetap bisa diedit)?",
    "Sebagian PDF memakai pengaturan keamanan yang memblokir pengeditan tapi tetap mengizinkan pengisian formulir, kombinasi yang memang disengaja, bukan cacat.",
  ],
  mobileNote:
    "Aplikasi PDF Editor menangani kedua pekerjaan ini di HP: edit teks dan gambar dokumen saat Anda perlu mengubah isinya, atau ketuk kolom formulir, dan tempatkan teks pada formulir non-interaktif, saat Anda hanya perlu mengisinya. Aplikasi ini otomatis mendeteksi kolom interaktif dan menjaga semuanya tetap di perangkat.",
  faq: [
    {
      q: "Apakah PDF yang bisa diisi sama dengan PDF yang bisa diedit?",
      a: "Tidak. Bisa diisi berarti Anda bisa memasukkan jawaban ke kolom formulir tanpa mengubah dokumennya. Bisa diedit berarti Anda bisa mengubah isi dokumen itu sendiri. Formulir biasanya bisa diisi tapi sengaja dibuat tidak bisa diedit.",
    },
    {
      q: "Bisakah sebuah PDF bisa diedit sekaligus bisa diisi?",
      a: "Bisa, jika pengaturan keamanannya mengizinkan keduanya. Tapi banyak formulir dikunci agar pertanyaan dan tata letaknya tidak bisa diubah, sementara kolomnya tetap menerima jawaban.",
    },
    {
      q: "Saya tidak bisa mengedit pertanyaan pada formulir, apakah ini rusak?",
      a: "Hampir pasti tidak. Formulir memang umumnya dilindungi agar setiap salinannya menanyakan hal yang sama. Anda dimaksudkan untuk mengisi kolomnya, bukan menulis ulang formulirnya.",
    },
    {
      q: "Mana yang saya butuhkan untuk menyelesaikan lamaran yang dikirim orang lain ke saya?",
      a: "Mengisi, bukan mengedit. Masukkan jawaban Anda ke kolomnya atau tempatkan teks di halaman jika formulirnya non-interaktif, lalu tanda tangani dan ekspor. Anda seharusnya tidak perlu mengubah formulirnya sendiri.",
    },
    {
      q: "Apa bedanya ini dengan perbandingan bisa diedit dan berupa gambar?",
      a: "Bisa diedit dibanding berupa gambar berbicara soal apakah teks PDF itu asli atau hanya gambar. Bisa diedit dibanding bisa diisi berbicara soal apakah Anda mengubah dokumennya atau sekadar menjawabnya. Keduanya berkaitan tapi merupakan pertanyaan yang terpisah.",
    },
  ],
  related: [
    { label: "Apa itu formulir PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "PDF yang bisa diedit atau PDF berupa gambar", path: "/guides/editable-pdf-vs-flat-pdf" },
    { label: "Apakah formulir PDF bisa diedit?", path: "/guides/can-you-edit-a-pdf-form" },
    { label: "PDF Editor — edit dan isi", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
