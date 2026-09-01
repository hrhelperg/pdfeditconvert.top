import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-png",
  h1: "Cara Mengonversi PDF ke PNG, Gambar Halaman yang Tajam dan Lossless",
  description:
    "Ekspor halaman PDF sebagai gambar PNG berkualitas tinggi di browser. Alasan PNG menjaga teks dan diagram tetap tajam, plus catatan soal skala dan transparansi.",
  updated: "2026-05-23",
  intro: [
    "Saat Anda butuh sebuah halaman PDF sebagai gambar dan halamannya penuh teks, tabel, atau diagram, PNG adalah format yang tepat untuk dituju. Formatnya lossless, jadi hurufnya tetap tajam alih-alih memburamkan tepi, perbedaannya jelas begitu Anda memperbesar sebuah faktur atau skema hasil konversi.",
    "Panduan ini memakai alat gratis PDF ke Gambar, yang me-render setiap halaman PDF sebagai gambar yang bisa diunduh di browser Anda, tanpa apa pun yang diunggah. PNG adalah salah satu dari dua format keluarannya, dan yang tepat dipilih kapan pun kejelasan lebih penting daripada ukuran file.",
    "Berikut ini: cara mendapatkan hasil paling tajam tanpa membuat filenya membengkak, kapan PNG layak dipilih dibanding JPG, dan yang perlu diingat soal gambar halaman secara umum.",
  ],
  steps: [
    {
      title: "Buka alat PDF ke Gambar",
      body: "Buka alat PDF ke Gambar. Alat ini me-render halaman secara lokal di browser Anda, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan PDF Anda",
      body: "Seret PDF-nya ke zona unggah atau klik untuk memilihnya. Alat ini menyiapkan setiap halaman untuk diekspor.",
    },
    {
      title: "Pilih PNG sebagai formatnya",
      body: "Pilih PNG. Formatnya lossless dan menjaga teks, tabel, serta gambar garis tetap tajam, pilihan tepat untuk dokumen, diagram, dan apa pun yang akan Anda perbesar.",
    },
    {
      title: "Atur skala untuk ketajaman",
      body: "Pilih skala: 2× tajam di sebagian besar layar, 3× ekstra tajam untuk cetak atau layar besar tapi menghasilkan file besar. Sesuaikan skalanya dengan cara gambar itu akan benar-benar dilihat.",
    },
    {
      title: "Ekspor halamannya",
      body: "Jalankan konversinya. Setiap halaman terunduh sebagai PNG tersendiri, siap disematkan ke dokumen, presentasi, atau halaman web.",
    },
    {
      title: "Gunakan halaman yang Anda butuhkan",
      body: "Simpan PNG yang Anda inginkan dan buang sisanya. Untuk PDF yang panjang, membaginya lebih dulu menyisakan lebih sedikit file untuk dikelola.",
    },
  ],
  tips: [
    "Pilih PNG dibanding JPG kapan pun halamannya berisi teks, tabel, atau garis tajam, kompresi JPG melembutkan tepi-tepi itu secara terlihat.",
    "File PNG lebih besar daripada JPG. Jika Anda mengekspor banyak halaman dan ukuran lebih penting daripada ketajaman, JPG adalah pilihan yang lebih praktis.",
    "Halaman PDF tidak punya transparansi, jadi PNG hasil ekspor tetap berada di atas latar putih solid meskipun PNG mendukung transparansi.",
    "Skala yang lebih tinggi tidak memperbaiki sumber berkualitas rendah. Jika PDF-nya sendiri berisi pindaian yang buram, PNG 3× hanya merender keburaman itu pada resolusi lebih tinggi.",
    "Gambar halaman tidak dapat dicari, tidak ada lapisan teks. Simpan PDF aslinya jika Anda perlu mencari atau menyalin kata-katanya nanti.",
  ],
  mobileNote:
    "Mengambil gambar halaman yang tajam dari sebuah PDF di HP berguna untuk slide, referensi desain, dan laporan bug. Aplikasi PDF Editor me-render halaman dengan akselerasi hardware dan membiarkan Anda menandai gambarnya sebelum berbagi, lebih cepat daripada mengirim filenya ke diri sendiri lewat email untuk dikerjakan nanti.",
  faq: [
    {
      q: "Kenapa pilih PNG daripada JPG?",
      a: "PNG bersifat lossless, jadi teks, tabel, dan diagram tetap tajam. JPG lebih kecil tapi melembutkan tepi halus. Untuk halaman dokumen yang akan Anda perbesar, PNG pilihan yang lebih baik.",
    },
    {
      q: "Apakah saya mendapat satu PNG per halaman?",
      a: "Ya. Setiap halaman dirender dan diunduh sebagai file PNG terpisah. Simpan yang Anda butuhkan dan buang sisanya.",
    },
    {
      q: "Apakah PDF saya diunggah ke suatu tempat?",
      a: "Tidak. Rendering terjadi sepenuhnya di browser Anda, jadi filenya tetap di perangkat Anda.",
    },
    {
      q: "Kenapa PNG saya begitu besar?",
      a: "PNG bersifat lossless dan skala tinggi melipatgandakan jumlah pikselnya. Turunkan skalanya atau beralih ke JPG jika ukuran file jadi masalah.",
    },
    {
      q: "Bisakah saya mengekspor PDF yang dilindungi kata sandi?",
      a: "Tidak di browser, file terenkripsi tidak bisa dirender. Hapus dulu kata sandinya, atau gunakan aplikasi mobile PDF Editor.",
    },
  ],
  related: [
    { label: "PDF ke Gambar — ekspor halaman di browser Anda", path: "/pdf-to-images" },
    { label: "Gambar ke PDF — proses sebaliknya", path: "/image-to-pdf" },
    { label: "Cara mengonversi PDF ke JPG", path: "/guides/how-to-convert-pdf-to-jpg" },
    { label: "Cara mengekstrak halaman dari PDF", path: "/guides/how-to-extract-pages-from-pdf" },
  ],
  parentHub: { label: "Konverter PDF", path: "/pdf-converter" },
};

export default content;
