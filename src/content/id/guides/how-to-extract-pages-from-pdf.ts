import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-extract-pages-from-pdf",
  h1: "Cara Mengekstrak Halaman dari PDF (Gratis, Tanpa Unggah)",
  description:
    "Tarik halaman atau rentang tertentu dari PDF ke file baru, di browser. Cocok untuk mengirim hanya halaman yang dibutuhkan orang lain.",
  updated: "2026-05-23",
  intro: [
    "Mengekstrak halaman adalah jawaban untuk kebutuhan yang sangat spesifik: seseorang hanya butuh sebagian dari dokumen, bukan keseluruhannya. Bank butuh halaman 3, formulirnya butuh halaman tanda tangan, tinjauan proposal hanya menyangkut bagian harga. Meneruskan seluruh file 40 halaman dan bilang \"lihat halaman 12\" itu malas, dan untuk apa pun yang sensitif, ceroboh.",
    "Panduan ini memakai alat gratis Ekstrak Halaman PDF, yang membiarkan Anda memilih halaman yang Anda inginkan dan menyimpannya sebagai PDF yang benar-benar baru, semuanya di browser Anda, tanpa apa pun yang diunggah. Aslinya tetap tidak tersentuh; Anda hanya mendapatkan file bersih yang berisi persis apa yang Anda pilih.",
    "Ini salah satu operasi PDF paling berguna justru karena juga berfungsi sebagai alat privasi: Anda mengirim persis halaman yang dibutuhkan dan tidak ada yang lain.",
  ],
  steps: [
    {
      title: "Buka alat Ekstrak Halaman PDF",
      body: "Buka alat Ekstrak Halaman PDF di browser Anda. Alat ini berjalan sepenuhnya di perangkat Anda, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan PDF Anda",
      body: "Seret filenya ke zona unggah atau klik untuk memilihnya. Alat ini memuat jumlah halamannya agar Anda bisa memilih dengan presisi.",
    },
    {
      title: "Pilih halaman yang Anda inginkan",
      body: "Masukkan halaman tersendiri atau rentang, misalnya 3, lalu 8–10. Hanya halaman yang Anda daftarkan yang berakhir di file baru.",
    },
    {
      title: "Buat PDF barunya",
      body: "Jalankan ekstraksinya. Alat ini membangun PDF baru yang hanya berisi halaman terpilih Anda, dalam urutan yang Anda tentukan.",
    },
    {
      title: "Unduh dan beri nama",
      body: "Simpan file hasil ekstraksi dengan nama yang menjelaskan isinya, \"Halaman-tanda-tangan.pdf\" atau \"Bagian-harga.pdf\".",
    },
    {
      title: "Konfirmasi sebelum dikirim",
      body: "Buka PDF barunya dan periksa apakah isinya hanya halaman yang dimaksud. Ini saat yang tepat menangkap salah nomor halaman sebelum sampai ke orang lain.",
    },
  ],
  tips: [
    "Ekstrak saat Anda ingin mengumpulkan beberapa halaman ke satu file baru; bagi saat Anda ingin memecah dokumen menjadi beberapa file. Cocokkan alatnya dengan tujuannya.",
    "Mengekstrak adalah kemenangan privasi yang diam-diam, mengirim hanya halaman yang relevan berarti tidak ada bagian lain dari dokumen yang terekspos tanpa sengaja.",
    "Periksa ulang nomor halaman berdasarkan dokumennya, bukan indeks penampil PDF, halaman sampul dan sisipan bisa menggeser hitungannya satu angka.",
    "Aslinya tidak pernah diubah, jadi Anda bisa mengekstrak kumpulan halaman yang berbeda dari file yang sama sesering yang Anda butuhkan.",
    "Untuk membuang halaman dan menyimpan sisanya, ekstrak halaman yang ingin Anda simpan, itu cara paling bersih untuk membuang beberapa halaman yang tidak diinginkan.",
  ],
  mobileNote:
    "Perlu mengirim balik hanya halaman yang sudah ditandatangani dari HP Anda? Aplikasi PDF Editor mengekstrak dan membagikan halaman tertentu dalam beberapa ketukan, offline, jadi halaman yang tepat terkirim tanpa meneruskan seluruh file rahasianya.",
  faq: [
    {
      q: "Apa bedanya mengekstrak dengan membagi?",
      a: "Mengekstrak mengumpulkan halaman yang Anda pilih ke satu file baru. Membagi memecah PDF menjadi beberapa file terpisah. Gunakan ekstrak untuk mengumpulkan halaman tertentu, bagi untuk memecah dokumen.",
    },
    {
      q: "Bisakah saya memilih halaman yang tidak berurutan?",
      a: "Bisa. Daftarkan halaman tersendiri dan rentang bersamaan, seperti 1, 4, 9–12, dan PDF barunya berisi persis halaman-halaman itu dalam urutan tersebut.",
    },
    {
      q: "Apakah mengekstrak mengubah aslinya?",
      a: "Tidak. PDF sumbernya dibiarkan utuh; alat ini membuat file baru. Anda bisa menjalankan ekstraksi sebanyak yang Anda mau dari aslinya yang sama.",
    },
    {
      q: "Apakah file saya diunggah?",
      a: "Tidak. Ekstraksi berjalan di browser Anda, di perangkat Anda, jadi dokumen rahasia tetap privat.",
    },
    {
      q: "Bagaimana cara membuang halaman alih-alih menyimpannya?",
      a: "Ekstrak halaman yang ingin Anda simpan, yang tidak diinginkan begitu saja tidak ikut disertakan. Itu cara paling sederhana untuk membuang beberapa halaman dari PDF.",
    },
  ],
  related: [
    { label: "Ekstrak Halaman PDF — tarik halaman di browser Anda", path: "/extract-pdf-pages" },
    { label: "Bagi PDF — pecah file berdasarkan rentang", path: "/split-pdf" },
    { label: "Cara membagi PDF menjadi file terpisah", path: "/guides/how-to-split-pdf-files" },
    { label: "Cara menghapus halaman yang tidak diinginkan dari PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Ekstrak Halaman PDF", path: "/extract-pdf-pages" },
};

export default content;
