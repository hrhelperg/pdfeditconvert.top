import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-jpg",
  h1: "Cara Mengonversi PDF ke JPG, Ekspor Halaman sebagai Gambar",
  description:
    "Ekspor halaman PDF sebagai gambar JPG di browser. Kapan JPG jadi pilihan tepat dibanding PNG, bagaimana skala memengaruhi kualitas, dan kapan pratinjau gambar lebih unggul dari PDF.",
  updated: "2026-05-23",
  intro: [
    "Kadang PDF adalah wadah yang salah. Anda ingin menaruh satu halaman ke pesan Slack agar tampil sebagai pratinjau inline, menempelkan sebuah grafik ke slide, atau memposting halaman ke tempat yang hanya menerima gambar. Untuk semua itu, Anda butuh halamannya sebagai JPG, bukan PDF.",
    "Panduan ini memakai alat gratis PDF ke Gambar, yang me-render setiap halaman PDF sebagai gambar yang bisa diunduh, sepenuhnya di browser Anda tanpa apa pun yang diunggah. JPG adalah salah satu dari dua format yang ditawarkannya, dan menjadi pilihan tepat saat ukuran file lebih penting daripada teks yang sangat tajam.",
    "Kita akan membahas cara memilih skala (yang mengontrol ketajaman), kapan JPG mengalahkan PNG, dan batasan yang perlu diingat: JPG dari sebuah halaman adalah gambar datar, bukan dokumen.",
  ],
  steps: [
    {
      title: "Buka alat PDF ke Gambar",
      body: "Buka alat PDF ke Gambar di browser Anda. Alat ini me-render halaman secara lokal di perangkat Anda, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan PDF Anda",
      body: "Seret satu PDF ke zona unggah atau klik untuk memilihnya. Alat ini membaca setiap halaman agar bisa mengekspornya sebagai gambar.",
    },
    {
      title: "Pilih JPG sebagai formatnya",
      body: "Pilih JPG. Formatnya menghasilkan file lebih kecil daripada PNG dan menjadi pilihan tepat untuk foto, tangkapan layar satu halaman penuh, dan di mana pun ukuran file lebih penting daripada teks yang sempurna tajam.",
    },
    {
      title: "Atur skalanya",
      body: "Skala mengontrol berapa banyak piksel setiap halaman dirender. 2× tajam di sebagian besar layar; turun ke 1,5× untuk file lebih kecil, atau naik ke 3× saat Anda butuh hasil yang sangat tajam dan tidak keberatan dengan ukurannya.",
    },
    {
      title: "Ekspor halamannya",
      body: "Jalankan konversinya. Setiap halaman terunduh sebagai file JPG tersendiri, siap ditaruh ke pesan, presentasi, atau formulir unggahan.",
    },
    {
      title: "Ambil halaman yang Anda butuhkan",
      body: "Jika Anda hanya butuh satu halaman, ambil JPG itu dan hapus sisanya. Untuk PDF yang panjang, membaginya terlebih dahulu berarti lebih sedikit gambar yang perlu disortir.",
    },
  ],
  tips: [
    "Pilih JPG saat halamannya penuh foto atau Anda mengoptimalkan untuk ukuran; pilih PNG saat halamannya sebagian besar teks atau gambar garis yang harus tetap tajam.",
    "Skala yang lebih tinggi berarti gambar lebih tajam dan file lebih besar. Tidak ada untungnya memakai 3× jika gambarnya hanya akan dilihat dalam ukuran kecil.",
    "JPG dari sebuah halaman tidak punya lapisan teks, kata-katanya tidak bisa dicari, dipilih, atau disalin. Simpan PDF aslinya jika Anda akan membutuhkan teksnya lagi.",
    "PDF yang sangat besar pada skala tinggi bisa menghabiskan memori browser. Jika alatnya kesulitan, turunkan ke skala 1,5× atau bagi PDF-nya lebih dulu.",
    "PDF yang dilindungi kata sandi tidak bisa dirender di browser. Hapus dulu kata sandinya, atau gunakan aplikasi PDF Editor.",
  ],
  mobileNote:
    "Di HP, mengekspor halaman sebagai gambar sering soal berbagi: pratinjau gambar muncul inline di obrolan, sementara lampiran PDF cuma nongkrong di sana sebagai ikon. Aplikasi PDF Editor me-render dan mengekspor halaman secara instan dengan akselerasi hardware, lalu langsung meneruskannya ke menu bagikan.",
  faq: [
    {
      q: "JPG atau PNG, mana yang sebaiknya saya ekspor?",
      a: "JPG untuk file lebih kecil dan halaman yang penuh foto; PNG saat halamannya sebagian besar teks atau diagram yang harus tetap tajam. Kompresi JPG melembutkan tepi halus, yang akan terlihat pada huruf.",
    },
    {
      q: "Apakah saya mendapat satu gambar per halaman?",
      a: "Ya. Setiap halaman PDF dirender dan diunduh sebagai JPG terpisah. Jika Anda hanya butuh satu halaman, simpan file itu dan buang yang lain.",
    },
    {
      q: "Apakah PDF saya diunggah?",
      a: "Tidak. Rendering berjalan sepenuhnya di browser Anda, jadi filenya tidak pernah meninggalkan perangkat Anda.",
    },
    {
      q: "Bisakah saya mencari teks di JPG-nya nanti?",
      a: "Tidak. Halaman yang dikonversi adalah gambar datar tanpa lapisan teks. Untuk menjaga teks tetap dapat dicari, simpan PDF aslinya.",
    },
    {
      q: "Fungsi pengaturan skala itu apa?",
      a: "Pengaturan ini menentukan berapa piksel gambar dirender per titik PDF. 2× terlihat tajam di sebagian besar layar; 3× sangat tajam tapi menghasilkan file besar.",
    },
  ],
  related: [
    { label: "PDF ke Gambar — ekspor halaman di browser Anda", path: "/pdf-to-images" },
    { label: "Gambar ke PDF — proses sebaliknya", path: "/image-to-pdf" },
    { label: "Cara mengonversi PDF ke PNG", path: "/guides/how-to-convert-pdf-to-png" },
    { label: "Cara membagi PDF menjadi file terpisah", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "Konverter PDF", path: "/pdf-converter" },
};

export default content;
