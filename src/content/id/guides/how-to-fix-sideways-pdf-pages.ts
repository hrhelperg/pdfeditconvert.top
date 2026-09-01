import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-sideways-pdf-pages",
  h1: "Cara Memperbaiki Halaman PDF yang Miring atau Terbalik",
  description:
    "Luruskan halaman PDF yang terbuka miring atau terbalik secara permanen, di browser. Alasan memutar layar tidak membantu, dan yang benar-benar memperbaikinya.",
  updated: "2026-05-23",
  intro: [
    "Anda membuka sebuah PDF dan satu halaman terbaring miring. Anda memutarnya di penampil, terlihat baik-baik saja, lalu Anda mengirimnya, dan penerima melihatnya miring lagi. Itulah jebakannya: memutar di sebuah penampil sering hanya mengubah cara Anda melihatnya, bukan cara halaman itu tersimpan. Untuk memperbaikinya bagi semua orang, Anda harus memutar halamannya sendiri dan menyimpan perubahannya.",
    "Panduan ini melakukan persis itu dengan alat gratis Putar PDF, yang memutar halaman sebesar 90, 180, atau 270 derajat dan mengunci perbaikannya ke dalam file baru, semuanya di browser Anda tanpa apa pun yang diunggah. Baik satu halaman saja yang salah atau seluruh hasil pindaian keluar dalam posisi mendatar, ini perbaikan yang permanen.",
    "Kita juga akan membahas kenapa halaman berakhir miring sejak awal, supaya Anda bisa mencegahnya di sumbernya, biasanya sebuah pemindai atau HP yang dipegang dengan arah yang salah.",
  ],
  steps: [
    {
      title: "Buka alat Putar PDF",
      body: "Buka alat Putar PDF di browser Anda. Alat ini menyimpan putarannya langsung ke dalam file itu sendiri, jadi perbaikannya melekat untuk setiap penampil, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan PDF-nya",
      body: "Seret filenya ke zona unggah atau klik untuk memilihnya. Alat ini menampilkan halamannya agar Anda bisa melihat mana yang miring atau terbalik.",
    },
    {
      title: "Temukan halaman yang bermasalah",
      body: "Catat halaman mana yang salah dan seberapa jauh salahnya, seperempat putaran, setengah putaran. Pada hasil pindaian yang panjang bisa jadi setiap halaman; pada sebuah laporan, mungkin hanya satu tabel lebar.",
    },
    {
      title: "Putar sampai tegak",
      body: "Terapkan 90° pada halaman yang miring ke samping, 180° pada halaman terbalik, atau 270° pada yang berputar ke arah lain, sampai kontennya terbaca normal.",
    },
    {
      title: "Verifikasi, lalu unduh",
      body: "Pastikan setiap halaman yang diperbaiki sudah tegak dan Anda tidak mengganggu halaman yang sebenarnya sudah benar, lalu ekspor PDF yang sudah diperbaiki.",
    },
    {
      title: "Perbaiki dari sumbernya lain kali",
      body: "Halaman yang miring biasanya berasal dari pemindai yang memasukkan halaman secara mendatar atau HP yang dipegang dengan arah salah. Menyesuaikan orientasi pindaian atau cara Anda memegang HP mencegah masalah ini terulang.",
    },
  ],
  tips: [
    "Memutar di penampil PDF sering hanya mengubah tampilan Anda, bukan file yang tersimpan, itulah kenapa halamannya kembali terlihat miring bagi penerima. Menyimpan salinan yang sudah diputar adalah yang benar-benar memperbaikinya.",
    "Putar hanya halaman yang benar-benar salah. Tabel mendatar yang memang lebar (spreadsheet, sebuah grafik) memang dimaksudkan begitu; memutarnya justru membuat lebih buruk.",
    "Jika seluruh hasil pindaian mendatar, satu putaran 90° yang diterapkan ke semua halaman biasanya langsung membenarkan semuanya sekaligus.",
    "Perbaiki putarannya sebelum mengurutkan ulang atau menggabungkan, jauh lebih mudah menilai urutan dan menggabungkan dokumen saat setiap halaman sudah tegak.",
    "Simpan aslinya. Memutar berlebihan mudah terjadi; mengulang dari file yang belum tersentuh lebih cepat daripada memutar bolak-balik.",
  ],
  mobileNote:
    "Halaman yang miring hampir selalu berasal dari HP, dan di situ pula tempat paling cepat memperbaikinya. Aplikasi PDF Editor memutar halaman dengan satu ketukan dan menyimpan perbaikannya ke dalam file, offline, jadi dokumen yang baru dipindai sudah tegak sebelum meninggalkan tangan Anda.",
  faq: [
    {
      q: "Kenapa halamannya terlihat sudah benar bagi saya tapi miring bagi orang lain?",
      a: "Memutar di sebuah penampil biasanya hanya mengubah tampilan di layar Anda, bukan cara halaman itu tersimpan. Untuk memperbaikinya bagi semua orang, putar halamannya dan simpan sebagai file baru, itulah yang dilakukan alat Putar PDF.",
    },
    {
      q: "Berapa banyak saya harus memutarnya?",
      a: "90° untuk halaman yang miring ke samping, 180° untuk yang terbalik, 270° untuk yang berputar ke arah sebaliknya. Pilih besaran yang membuat kontennya tegak.",
    },
    {
      q: "Apakah memperbaiki rotasi akan menurunkan kualitas?",
      a: "Tidak. Memutar hanya mengubah orientasi; konten dan resolusi halamannya tidak berubah.",
    },
    {
      q: "Apakah file saya diunggah?",
      a: "Tidak. Rotasinya berjalan di browser Anda, di perangkat Anda, jadi filenya tetap privat.",
    },
    {
      q: "Bagaimana cara mencegah halaman terpindai miring?",
      a: "Atur pemindai Anda untuk mendeteksi atau menyesuaikan orientasi halaman, atau pegang HP Anda supaya halamannya mengisi bingkai secara tegak. Memperbaikinya saat menangkap gambar menghemat langkah pemutaran nanti.",
    },
  ],
  related: [
    { label: "Putar PDF — luruskan halaman di browser Anda", path: "/rotate-pdf" },
    { label: "Cara memutar halaman PDF", path: "/guides/how-to-rotate-pdf-pages" },
    { label: "Cara memindai dokumen ke PDF dengan HP", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Cara mengurutkan ulang halaman PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Putar PDF", path: "/rotate-pdf" },
};

export default content;
