import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-images-for-sharing-documents",
  h1: "PDF atau Gambar untuk Membagikan Dokumen (JPG, PNG, HEIC)",
  description:
    "Kapan JPG, PNG, atau HEIC dari sebuah dokumen adalah pilihan yang salah, dan apa yang membuat PDF format yang tepat untuk lebih dari sekadar tangkapan layar cepat.",
  updated: "2026-05-29",
  intro: [
    "Cukup mengejutkan berapa banyak pekerjaan bisnis dan sekolah yang dikirim sebagai file gambar — JPG dari kontrak, foto HEIC dari handout, tangkapan layar PNG dari struk. Rasanya lebih cepat daripada membuat PDF, HP membuatnya mudah, dan penerimanya biasanya masih bisa membacanya. Tapi gambar dari sebuah dokumen adalah format yang salah untuk hampir semua alur kerja dokumen yang sesungguhnya.",
    "PDF dan gambar dokumen melayani tujuan yang berbeda. PDF bersifat multihalaman, dapat dicari, dapat dicetak, dapat ditandatangani, dapat diarsipkan, dan tidak rusak saat diputar. Gambar bersifat satu halaman, tidak dapat dicari, sering berukuran sangat besar, dan sering kali hasilnya buram, miring, atau warnanya tidak tepat. Untuk apa pun di luar berbagi cepat sekali pakai, PDF melakukan pekerjaan itu jauh lebih baik.",
    "Panduan ini menjelaskan alasannya, kapan pendekatan gambar-sebagai-dokumen sebenarnya masih berfungsi (memang ada kalanya), dan jalur konversi sederhana saat Anda menginginkan versi PDF-nya.",
  ],
  steps: [
    {
      title: "Kenali kapan gambar dari sebuah dokumen adalah pilihan yang salah",
      body: "Dokumen multihalaman: format yang salah. Dokumen yang perlu dicetak: format yang salah. Dokumen yang perlu bisa dicari: format yang salah. Apa pun yang bersifat formal dan akan disimpan sebagai berkas: format yang salah.",
    },
    {
      title: "Kenali sekumpulan kecil kasus di mana gambar masih boleh dipakai",
      body: "Satu halaman, sementara, santai. Foto cepat struk untuk teman, tangkapan layar halaman konfirmasi, jepretan catatan tulisan tangan untuk diri sendiri. Gambar adalah format yang tepat saat isinya belum benar-benar menjadi sebuah dokumen.",
    },
    {
      title: "Konversikan dengan Gambar ke PDF saat yang dibagikan menjadi sebuah dokumen",
      body: "Gambar ke PDF menggabungkan JPG, PNG, dan WebP menjadi PDF di browser Anda. Gambarnya bisa menjadi dapat dicari nantinya jika melalui OCR; dan tetap menjadi satu file, bukan banyak file terpisah.",
    },
    {
      title: "Gunakan alat yang tepat sesuai sumbernya",
      body: "Foto → Gambar ke PDF. Halaman hasil pindaian → Pindai ke PDF. Dokumen Word/Pages → Word ke PDF. Setiap format sumber punya jalur konversi yang paling bersih.",
    },
    {
      title: "Tangani HEIC dari iPhone secara khusus",
      body: "iPhone secara default memakai HEIC, yang tidak bisa dibuka semua penerima. Konversikan HEIC → JPG → PDF, atau gunakan alat yang menangani HEIC secara langsung. Fitur pemindaian di aplikasi PDF Editor menangani HEIC secara native.",
    },
    {
      title: "Kompres dengan cermat",
      body: "Kompres PDF jika file hasilnya sangat besar. Konversi foto-ke-PDF mewarisi resolusi fotonya, yang sering kali lebih besar dari yang dibutuhkan untuk sebuah dokumen.",
    },
  ],
  tips: [
    "JPG dari dokumen berorientasi potret di HP adalah format yang salah. Putar HP-nya atau gunakan aplikasi pemindai — hasilnya jauh lebih mudah dibaca.",
    "Tangkapan layar PNG bisa dikonversi ke PDF dengan bersih, tapi foto JPG dari dokumen kertas biasanya lebih baik melewati aplikasi pemindai untuk deteksi tepi.",
    "Jangan mengirim banyak JPG sebagai dokumen multihalaman. Gabungkan menjadi satu PDF; penerima mudah kehilangan jejak di utas dengan banyak lampiran.",
    "HEIC adalah default di iOS tapi ditolak oleh banyak portal web dan klien email. Konversikan sebelum membagikan jika Anda tidak tahu perangkat penerimanya.",
    "Foto layar laptop adalah kasus terburuk — moire, silau, resolusi rendah. Gunakan fitur ekspor PDF daripada memotret layarnya.",
  ],
  mobileNote:
    "HP adalah tempat paling sering terjadinya kesalahan gambar-sebagai-dokumen. Fitur pemindaian di aplikasi PDF Editor mendeteksi halaman dan langsung menghasilkan PDF yang bersih sejak awal, sehingga berbagi cepat langsung menjadi dokumen yang layak tanpa langkah konversi tambahan.",
  faq: [
    {
      q: "Kenapa foto dari sebuah dokumen lebih buruk daripada PDF?",
      a: "Foto bersifat satu halaman, sering miring, tidak bisa dicari, bisa berukuran sangat besar, dan masalah rotasi/format bisa menyembunyikan isinya. PDF menyelesaikan semua masalah itu.",
    },
    {
      q: "Apakah JPG pernah bisa diterima untuk sebuah dokumen?",
      a: "Untuk berbagi santai satu halaman, bisa — struk cepat untuk teman, tangkapan layar untuk kolega. Untuk apa pun yang formal atau multihalaman, tidak.",
    },
    {
      q: "Bagaimana dengan HEIC?",
      a: "Format default iPhone, tapi tidak didukung secara universal. Konversikan ke JPG atau PDF sebelum membagikan jika penerimanya tidak memakai perangkat Apple.",
    },
    {
      q: "Bagaimana cara menggabungkan banyak foto menjadi satu PDF?",
      a: "Gambar ke PDF menggabungkan JPG, PNG, dan WebP menjadi satu PDF di browser Anda. Tentukan urutannya sebelum menambahkan; PDF hasilnya akan mempertahankan urutan itu.",
    },
    {
      q: "Apakah PDF akan membuat file menjadi lebih besar?",
      a: "Tergantung sumbernya. JPG dari sebuah dokumen → PDF tanpa kompresi ulang ukurannya kurang lebih sama. Kompres PDF bisa mengecilkannya jika diperlukan.",
    },
  ],
  related: [
    { label: "Gambar ke PDF — gabungkan foto menjadi satu file", path: "/image-to-pdf" },
    { label: "PDF dibanding JPG untuk dokumen", path: "/guides/pdf-vs-jpg-for-documents" },
    { label: "Cara mengonversi JPG ke PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Cara mengonversi foto ke PDF di iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Gambar ke PDF — gabungkan foto menjadi PDF", path: "/image-to-pdf" },
};

export default content;
