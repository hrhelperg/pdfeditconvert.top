import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-for-business-use",
  h1: "Cara Menyiapkan PDF untuk Keperluan Bisnis (Daftar Periksa Perapian)",
  description:
    "Sebelum PDF keluar dari kantor: rapikan draf, periksa penomoran halaman, perbaiki orientasi, sematkan font, dan perkecil ukuran file. Daftar periksa sebelum mengirim untuk dokumen yang mewakili bisnis Anda.",
  updated: "2026-05-29",
  intro: [
    "PDF yang keluar dari bisnis Anda adalah duta kecil. File ini membawa nama Anda, identitas merek Anda, pilihan tipografi Anda — dan terlalu sering, nama file asli seperti 'Untitled Document (4).pdf' dari siapa pun yang memulainya minggu lalu. Perbedaan antara PDF amatir dan PDF profesional jarang dramatis, tapi hampir selalu terlihat sekilas.",
    "Menyiapkan PDF untuk keperluan bisnis bukan satu transformasi tunggal; ini daftar periksa singkat. Rapikan draf, atur nomor halaman yang benar, perbaiki orientasi, pastikan font tersemat, beri label yang bersih, kompres secara wajar, atur nama file yang berguna. Setiap langkah hanya butuh beberapa detik, semuanya hanya butuh semenit, dan dokumennya terlihat seperti Anda memang sengaja melakukannya.",
    "Panduan ini membahas daftar periksa itu dalam urutan yang menangkap masalah paling banyak lebih dulu — cara yang akan Anda lakukan untuk hasil kirim sungguhan di Selasa sore yang sungguhan.",
  ],
  steps: [
    {
      title: "Buang halaman yang tidak terpakai atau masih draf",
      body: "Ekstrak Halaman PDF hanya menyimpan halaman yang benar-benar ingin Anda kirim. Lembar sampul yang masih placeholder, halaman terima kasih kosong, lampiran lama — semuanya harus dikeluarkan dari versi final.",
    },
    {
      title: "Pastikan urutan halaman dan penomorannya",
      body: "Urutkan Ulang Halaman PDF kalau ada yang tidak berurutan setelah penggabungan atau revisi. Periksa nomor halaman yang terlihat cocok dengan urutannya — pembaca cepat menyadari penomoran yang tidak cocok.",
    },
    {
      title: "Perbaiki orientasi",
      body: "Halaman lebar (spreadsheet, grafik) sebaiknya lanskap; yang lainnya tegak. Putar PDF meluruskan hasil pindaian atau impor yang masuk menyamping. Dokumen dengan orientasi campur aduk terasa berantakan bahkan saat sebenarnya tidak.",
    },
    {
      title: "Pastikan font-nya tersemat",
      body: "Font yang tidak tersemat akan digantikan di sisi pembaca, kadang dengan buruk. Ekspor ulang dari sumbernya dengan 'sematkan semua font' diaktifkan, atau cetak-ke-PDF untuk meratakan render-nya.",
    },
    {
      title: "Atur judul file di metadata",
      body: "Teks yang ditampilkan di tab browser dan bar judul aplikasi pembaca sering berbeda dari nama file-nya. Atur keduanya dengan sengaja — klien menyadari saat tab 'Proposal' menampilkan 'Untitled.docx'.",
    },
    {
      title: "Kompres dan beri nama untuk pengiriman",
      body: "Kompres PDF membuat file-nya masuk batas mail dan portal yang umum. Ganti nama menjadi NamaKlien_JenisDokumen_YYYY-MM-DD.pdf agar penerima bisa mengenali file-nya dari folder unduhan mereka setahun kemudian.",
    },
  ],
  tips: [
    "Telusuri dokumennya sekali pada zoom 100% sebelum mengirim. Mata Anda menangkap hal tak terduga yang terlewat saat menggulir.",
    "Tambahkan watermark pada draf, tapi jangan pernah pada versi final — ketiadaan watermark itulah tandanya ini versi final.",
    "Hapus metadata lama. Aplikasi PDF Editor dan ekspor ulang keduanya membiarkan Anda mengganti nama penulis, perusahaan, dan riwayat edit yang mungkin bocor dari draf.",
    "Kalau dokumennya punya kolom formulir untuk diisi, uji di perangkat yang akan Anda kirimi. Banyak kolom berfungsi di Acrobat tapi tidak di browser.",
    "Lihat pratinjau cetak dokumennya sekali lagi terakhir kali. Kalau tercetak salah, penerima akan menghadapi masalah yang sama.",
  ],
  mobileNote:
    "Perapian di menit-menit terakhir — memperbaiki hasil pindaian yang menyamping, membuang halaman draf yang tersasar, mengompres ulang untuk batas email — lebih sering terjadi di HP daripada yang orang akui. Aplikasi PDF Editor menangani semua ini secara offline sehingga hasil kirimnya tetap bersih bahkan dari Wi-Fi kedai kopi.",
  faq: [
    {
      q: "Langkah mana yang paling sering terlewat?",
      a: "Mengatur metadata. Nama file dan judul dokumen yang tampil di tab dan header aplikasi pembaca sering merupakan sisa dari proses membuat draf. Perbaiki keduanya sebelum mengirim.",
    },
    {
      q: "Seberapa penting kompresi?",
      a: "Sangat penting saat penerima memakai portal yang ketat atau koneksi yang lambat. Kurang penting untuk berbagi internal yang santai. Jadikan kompresi sebagai default — hampir tidak pernah merugikan.",
    },
    {
      q: "Haruskah saya menyematkan font di setiap PDF?",
      a: "Untuk apa pun yang dilihat klien, ya. Untuk draf internal di mana semua orang punya font yang sama terinstal, kurang kritis. Biaya penyematannya kecil.",
    },
    {
      q: "Haruskah saya selalu menyertakan nomor halaman?",
      a: "Pada hasil kirim multihalaman, ya. Pada dokumen satu halaman, tidak. Nomor halaman membantu pembaca bernavigasi dan memastikan kelengkapannya.",
    },
    {
      q: "Apakah ada alat yang melakukan semuanya dalam satu langkah?",
      a: "Tidak, dan itu memang disengaja — setiap langkah adalah pilihan yang sengaja, bukan transformasi otomatis. Alat berbasis browser di situs ini membiarkan Anda melakukan setiap langkah dalam hitungan detik tanpa membundelnya menjadi kotak hitam.",
    },
  ],
  related: [
    { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
    { label: "Ekstrak Halaman PDF — rapikan hasil kirim final", path: "/extract-pdf-pages" },
    { label: "Cara membagikan PDF kepada klien", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Cara menyiapkan PDF sebelum berbagi", path: "/guides/how-to-prepare-pdf-before-sharing" },
  ],
  parentHub: { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
};

export default content;
