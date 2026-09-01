import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-rotate-pdf-pages",
  h1: "Cara Memutar Halaman PDF (Gratis, Tanpa Unggah)",
  description:
    "Putar semua atau halaman pilihan PDF sebesar 90, 180, atau 270 derajat di browser. Perbaiki hasil pindaian mendatar dan halaman terbalik agar dokumen terbaca dengan benar.",
  updated: "2026-05-23",
  intro: [
    "PDF yang terbuka miring adalah gangguan kecil tapi terus-menerus. Anda memiringkan kepala, atau terus memutar HP dan halamannya ikut berputar. Perbaikannya adalah memutar halamannya sendiri supaya tersimpan dalam posisi tegak, setelah itu terbaca dengan benar untuk semua orang, di perangkat mana pun, tanpa ada yang perlu menekuk leher.",
    "Panduan ini memakai alat gratis Putar PDF, yang memutar semua atau halaman pilihan sebesar 90, 180, atau 270 derajat, langsung di browser Anda tanpa apa pun yang diunggah. Ini perbaikan yang tepat baik saat satu halaman saja yang salah atau seluruh dokumen keluar dari pemindai dalam posisi mendatar.",
    "Memutar adalah perubahan permanen pada cara halaman itu tersimpan, jadi kita akan membahas cara menerapkannya hanya pada halaman yang membutuhkannya dan memastikan hasilnya sebelum Anda menyimpan.",
  ],
  steps: [
    {
      title: "Buka alat Putar PDF",
      body: "Buka alat Putar PDF di browser Anda. Alat ini berjalan di perangkat Anda, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan PDF Anda",
      body: "Seret filenya ke zona unggah atau klik untuk memilihnya. Alat ini menampilkan halamannya agar Anda bisa melihat mana yang salah.",
    },
    {
      title: "Tentukan halaman mana yang perlu diputar",
      body: "Putar setiap halaman, atau hanya yang salah saja, misalnya satu tabel mendatar di tengah laporan yang selebihnya tegak. Catat halaman mana dan ke arah mana.",
    },
    {
      title: "Pilih besaran putarannya",
      body: "Pilih 90° untuk halaman yang miring ke samping, 180° untuk halaman terbalik, atau 270° untuk yang berputar ke arah lain. Terapkan pada halaman pilihan Anda.",
    },
    {
      title: "Periksa setiap halaman sudah tegak",
      body: "Pastikan halaman yang sudah diperbaiki kini terbaca normal dan Anda tidak sengaja memutar halaman yang sebenarnya sudah benar.",
    },
    {
      title: "Unduh PDF yang sudah diperbaiki",
      body: "Ekspor file hasil putaran dan simpan dengan nama yang jelas. Aslinya tetap tidak tersentuh jika Anda perlu mengulang dari awal.",
    },
  ],
  tips: [
    "Putar hanya halaman yang salah. Menerapkan putaran menyeluruh pada dokumen yang sebagian besar halamannya sudah benar hanya menciptakan masalah baru.",
    "Halaman mendatar, tabel lebar, grafik, spreadsheet yang diekspor ke PDF, sering memang dimaksudkan mendatar. Putar hanya jika kontennya benar-benar miring, bukan jika memang seharusnya lebar.",
    "Jika halaman sekaligus salah urutan dan berputar, perbaiki putarannya dulu, baru urutkan ulang, lebih mudah menilai urutan saat setiap halaman sudah tegak.",
    "Memutar sebelum menggabungkan berarti dokumen gabungannya sudah benar sejak awal, tanpa kejutan halaman miring yang terkubur di tengah.",
    "Simpan aslinya. Jika Anda memutar ke arah yang salah, lebih cepat mengulang dari file yang belum tersentuh daripada memutar bolak-balik.",
  ],
  mobileNote:
    "Hasil pindaian yang miring paling sering terjadi di HP, dan di situ pula paling cepat diperbaiki. Aplikasi PDF Editor memutar halaman dengan satu ketukan dan bekerja offline, jadi Anda bisa meluruskan dokumen yang baru dipindai sebelum meninggalkan perangkat sama sekali.",
  faq: [
    {
      q: "Bisakah saya memutar hanya satu halaman?",
      a: "Bisa. Pilih hanya halaman yang salah dan putar itu saja, biarkan sisa dokumen apa adanya.",
    },
    {
      q: "Putaran mana yang harus saya pilih?",
      a: "90° untuk halaman yang miring ke samping, 180° untuk halaman terbalik, dan 270° untuk yang berputar ke arah sebaliknya. Pilih besaran yang membuat kontennya tegak.",
    },
    {
      q: "Apakah putarannya permanen?",
      a: "Tersimpan ke dalam file hasil ekspor sehingga halamannya terbaca tegak di mana saja. Aslinya tetap tidak tersentuh, jadi Anda selalu bisa mengulanginya jika perlu.",
    },
    {
      q: "Apakah PDF saya diunggah?",
      a: "Tidak. Pemutaran berjalan di browser Anda, di perangkat Anda, jadi filenya tidak pernah meninggalkannya.",
    },
    {
      q: "Hasil pindaian saya miring dan urutannya salah, mana dulu?",
      a: "Putar halamannya tegak dulu, lalu gunakan alat Urutkan Ulang Halaman PDF untuk memperbaiki urutannya. Menilai urutan lebih mudah begitu semuanya sudah dalam posisi yang benar.",
    },
  ],
  related: [
    { label: "Putar PDF — perbaiki orientasi di browser Anda", path: "/rotate-pdf" },
    { label: "Urutkan Ulang Halaman PDF — perbaiki urutannya", path: "/reorder-pdf-pages" },
    { label: "Cara memperbaiki halaman PDF yang miring", path: "/guides/how-to-fix-sideways-pdf-pages" },
    { label: "Cara mengurutkan ulang halaman PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Putar PDF", path: "/rotate-pdf" },
};

export default content;
