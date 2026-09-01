import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reorder-pdf-pages",
  h1: "Cara Mengurutkan Ulang Halaman PDF (Gratis, di Browser)",
  description:
    "Susun ulang halaman PDF ke urutan yang benar, di browser. Perbaiki hasil pindaian yang terbalik atau file gabungan yang urutannya berantakan.",
  updated: "2026-05-23",
  intro: [
    "Halaman berakhir dalam urutan yang salah lebih sering daripada yang Anda kira. Pengumpan dokumen menarik satu tumpukan dan memindainya dari belakang ke depan. Sebuah penggabungan menyatukan dua file tapi dalam urutan yang salah. Lampiran yang seharusnya ada di akhir malah mendarat di tengah. Apa pun penyebabnya, perbaikannya sama: susun ulang halamannya sampai dokumennya terbaca sebagaimana mestinya.",
    "Panduan ini memakai alat gratis Urutkan Ulang Halaman PDF, yang menampilkan pratinjau setiap halaman dan membiarkan Anda memindahkannya dengan kontrol sederhana, langsung di browser Anda, tidak ada yang diunggah. Anda melihat miniaturnya, menyusunnya ke tempat yang benar, dan mengunduh file yang sudah diperbaiki.",
    "Ini operasi kecil dengan dampak besar: dokumen dengan urutan yang benar terbaca disengaja, sementara yang urutannya salah membuat semuanya terlihat ceroboh.",
  ],
  steps: [
    {
      title: "Buka alat Urutkan Ulang Halaman PDF",
      body: "Buka alat Urutkan Ulang Halaman PDF di browser Anda. Alat ini berjalan di perangkat Anda, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan PDF Anda",
      body: "Seret filenya ke zona unggah atau klik untuk memilihnya. Alat ini merender miniatur setiap halaman agar Anda bisa melihat urutan sekarang sekilas.",
    },
    {
      title: "Kenali halaman yang salah tempat",
      body: "Amati miniaturnya untuk mencari halaman yang terbalik, salah tempat, atau ganda. Mengetahui urutan yang ditargetkan sebelum mulai membuat proses pemindahannya cepat.",
    },
    {
      title: "Pindahkan halaman ke urutan yang benar",
      body: "Gunakan kontrolnya untuk menggeser setiap halaman ke posisi yang tepat. Kerjakan dari depan dokumen menuju belakang agar posisinya tetap dapat diprediksi.",
    },
    {
      title: "Tinjau urutan barunya",
      body: "Baca ulang miniaturnya dari atas ke bawah sekali lagi. Urutan yang ditampilkan adalah urutan yang akan Anda dapatkan di filenya.",
    },
    {
      title: "Unduh PDF yang sudah diperbaiki",
      body: "Ekspor file dengan urutan barunya dan simpan dengan nama yang jelas. Simpan aslinya sampai Anda memastikan urutan barunya sudah benar.",
    },
  ],
  tips: [
    "Jika seluruh hasil pindaian terbalik, mengurutkan ulang memperbaiki urutannya, tapi halaman yang miring adalah masalah rotasi, yang ditangani alat Putar PDF.",
    "Urutkan ulang sebelum mengompres atau mengonversi. Lebih mudah membenarkan strukturnya lebih dulu, baru menjalankan operasi yang lebih berat pada dokumen yang sudah jadi.",
    "Kerjakan dari depan ke belakang saat memindahkan halaman supaya setiap pemindahan tidak mengacaukan posisi yang sudah Anda atur.",
    "Untuk dokumen yang menggabungkan beberapa sumber, urutkan ulang tepat setelah digabungkan selagi struktur yang dimaksud masih segar di ingatan Anda.",
    "Simpan file aslinya. Jika pengurutan ulang salah, jauh lebih cepat memulai lagi dari sumber yang belum tersentuh.",
  ],
  mobileNote:
    "Mengurutkan ulang di HP adalah pekerjaan menyeret miniatur, dan aplikasi PDF Editor membuatnya terasa nyata: tekan, seret, lepas, selesai, offline dan tanpa mengunggah filenya. Berguna tepat setelah memindai, saat halaman sering butuh disusun ulang dengan cepat.",
  faq: [
    {
      q: "Bisakah saya memperbaiki hasil pindaian yang urutannya terbalik?",
      a: "Bisa. Mengurutkan ulang membiarkan Anda membalik urutannya sehingga halaman yang terakhir dipindai kembali ke depan. Jika halamannya juga berputar, perbaiki orientasinya dengan alat Putar PDF.",
    },
    {
      q: "Apakah mengurutkan ulang mengubah konten halamannya?",
      a: "Tidak. Hanya urutannya yang berubah, konten dan orientasi setiap halaman tetap persis seperti sebelumnya.",
    },
    {
      q: "Apakah PDF saya diunggah?",
      a: "Tidak. Pengurutan ulang berjalan di browser Anda, di perangkat Anda, jadi filenya tetap privat.",
    },
    {
      q: "Bisakah saya menghapus halaman sambil mengurutkan ulang?",
      a: "Mengurutkan ulang hanya soal urutan. Untuk membuang halaman, ekstrak halaman yang ingin Anda simpan dengan alat Ekstrak Halaman PDF, yang menyisakan halaman yang tidak diinginkan di luar.",
    },
    {
      q: "Apakah file aslinya akan terpengaruh?",
      a: "Tidak. Alat ini menghasilkan PDF baru dengan urutan yang sudah diperbaiki dan membiarkan sumbernya tidak tersentuh, jadi Anda bisa mencoba lagi dari aslinya jika perlu.",
    },
  ],
  related: [
    { label: "Urutkan Ulang Halaman PDF — susun ulang di browser Anda", path: "/reorder-pdf-pages" },
    { label: "Putar PDF — perbaiki halaman yang miring", path: "/rotate-pdf" },
    { label: "Cara merapikan file PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Cara menggabungkan file PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Urutkan Ulang Halaman PDF", path: "/reorder-pdf-pages" },
};

export default content;
