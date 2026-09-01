import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-split-pdf-files",
  h1: "Cara Membagi PDF Menjadi File Terpisah (Gratis)",
  description:
    "Pecah satu PDF besar menjadi file-file lebih kecil berdasarkan rentang halaman, di browser. Kapan sebaiknya membagi dan kapan sebaiknya mengekstrak, plus cara menjaga file asli tetap aman.",
  updated: "2026-05-23",
  intro: [
    "Membagi PDF adalah yang Anda lakukan saat satu file sebenarnya mencoba menjadi beberapa dokumen sekaligus: bundel hasil pindaian yang sebenarnya sebuah kontrak plus lampirannya, laporan 200 halaman yang Anda hanya butuh satu babnya, atau kumpulan hasil gabungan yang harus dikirim balik sebagai file-file terpisah. Daripada mengirim semuanya dan meminta orang mencari bagian mereka sendiri, Anda membaginya.",
    "Panduan ini memakai alat gratis Bagi PDF, yang membagi PDF berdasarkan rentang halaman langsung di browser Anda, tidak ada yang diunggah. Ini cara yang cepat dan privat untuk mengubah satu file menjadi potongan-potongan lebih kecil yang benar-benar perlu Anda kirim atau simpan.",
    "Kita juga akan meluruskan satu kebingungan umum: perbedaan antara membagi PDF dan mengekstrak halaman, karena alat yang tepat tergantung pada hasil akhir yang Anda inginkan.",
  ],
  steps: [
    {
      title: "Buka alat Bagi PDF",
      body: "Buka alat Bagi PDF di browser Anda. Alat ini berjalan di perangkat Anda, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan PDF Anda",
      body: "Seret filenya ke zona unggah atau klik untuk memilihnya. Alat ini membaca jumlah halamannya agar Anda bisa membagi berdasarkan rentang.",
    },
    {
      title: "Tentukan di mana dokumennya harus terbagi",
      body: "Lihat nomor halamannya dan kenali batasannya, misalnya, halaman 1–10 adalah kontraknya, 11–24 lampirannya. Rencanakan rentangnya sebelum membagi.",
    },
    {
      title: "Masukkan rentang halaman yang ingin dibagi",
      body: "Tentukan rentang yang Anda inginkan sebagai file tersendiri. Ulangi untuk setiap bagian yang perlu Anda pisahkan.",
    },
    {
      title: "Unduh setiap bagiannya",
      body: "Alat ini menghasilkan PDF baru untuk rentang yang Anda pilih. Simpan masing-masing dengan nama yang jelas dan spesifik per bagian.",
    },
    {
      title: "Jaga file aslinya tetap utuh",
      body: "Membagi tidak mengubah sumbernya, PDF asli Anda tetap utuh di perangkat. Simpan itu sampai Anda memastikan setiap hasil pembagian sudah benar.",
    },
  ],
  tips: [
    "Bagi saat Anda ingin beberapa dokumen terpisah; ekstrak saat Anda ingin menarik beberapa halaman ke satu file baru. Terdengar mirip tapi hasilnya berbeda.",
    "Catat batas-batas halamannya sebelum mulai. Membagi laporan yang panjang jauh lebih cepat jika Anda sudah tahu bahwa metodologinya dimulai di halaman 31.",
    "Beri nama setiap file hasil pembagian sesuai isinya, bukan rentangnya, \"Lampiran-B.pdf\" lebih berguna bagi penerima daripada \"halaman-25-40.pdf\".",
    "Membagi PDF yang besar terlebih dahulu juga membuat operasi lain lebih cepat: mengompres atau mengonversi bagian 15 halaman lebih ringan daripada bergulat dengan file 300 halaman penuh.",
    "PDF yang dilindungi kata sandi tidak bisa diproses di browser. Hapus dulu kata sandinya, atau gunakan aplikasi PDF Editor, yang mendukung file terlindungi.",
  ],
  mobileNote:
    "Di HP, membagi sering soal mengirim potongan yang tepat ke orang yang tepat dari mana pun Anda berada. Aplikasi PDF Editor membagi, mengekstrak, dan membagikan dalam beberapa ketukan, dan bekerja offline, berguna saat Anda sedang di lokasi dan perlu mengirim balik hanya halaman yang sudah ditandatangani.",
  faq: [
    {
      q: "Apa bedanya membagi dengan mengekstrak?",
      a: "Membagi memecah satu PDF menjadi beberapa file terpisah berdasarkan rentang. Mengekstrak menarik halaman terpilih ke satu file baru. Gunakan bagi untuk memecah dokumen, ekstrak untuk mengumpulkan halaman tertentu.",
    },
    {
      q: "Apakah membagi mengubah file asli saya?",
      a: "Tidak. PDF sumbernya tidak tersentuh, alat ini membuat file baru untuk rentang yang Anda pilih. Simpan aslinya sampai Anda memeriksa hasilnya.",
    },
    {
      q: "Apakah PDF saya diunggah?",
      a: "Tidak. Pembagian berjalan di browser Anda, di perangkat Anda, jadi filenya tidak pernah meninggalkannya, aman untuk kontrak dan laporan rahasia.",
    },
    {
      q: "Berapa banyak potongan yang bisa saya hasilkan dari satu PDF?",
      a: "Sebanyak yang Anda butuhkan, ulangi pemilihan rentang untuk setiap bagian. PDF yang sangat besar bisa membebani memori browser, dalam hal ini aplikasi PDF Editor pilihan yang lebih baik.",
    },
    {
      q: "Bisakah saya membagi PDF yang dilindungi kata sandi?",
      a: "Tidak di browser. Hapus dulu kata sandinya, atau gunakan aplikasi mobile PDF Editor, yang bisa membuka file terlindungi.",
    },
  ],
  related: [
    { label: "Bagi PDF — pecah file di browser Anda", path: "/split-pdf" },
    { label: "Ekstrak Halaman PDF — tarik halaman ke file baru", path: "/extract-pdf-pages" },
    { label: "Cara mengekstrak halaman dari PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Cara menggabungkan file PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Bagi PDF", path: "/split-pdf" },
};

export default content;
