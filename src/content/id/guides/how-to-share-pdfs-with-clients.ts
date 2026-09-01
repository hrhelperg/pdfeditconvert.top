import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdfs-with-clients",
  h1: "Cara Membagikan PDF kepada Klien (Secara Profesional dan Privat)",
  description:
    "Panduan singkat mengirim PDF ke klien: mengatur ukuran untuk email, pilihan kata sandi, memberi identitas merek pada file, dan memastikan file diterima, tanpa mengunggahnya ke pihak ketiga mana pun.",
  updated: "2026-05-29",
  intro: [
    "Cara Anda mengirim PDF ke klien mengungkap banyak hal tentang cara Anda bekerja. Lampiran 40 MB yang ditolak balik, nama file generik seperti 'Document (1).pdf', atau file yang terbuka dengan nama klien yang salah eja di bar judul — semuanya detail kecil, dan semuanya melekat di ingatan.",
    "Serah terima klien yang profesional sebagian besar soal beberapa kebiasaan: atur ukuran file dengan tepat, beri nama seperti hasil kirim sungguhan, beri identitas merek secara konsisten, lindungi dengan kata sandi kalau memang perlu, dan pastikan file diterima. Tidak satu pun dari ini butuh waktu lama begitu jadi rutinitas; bersama-sama, semuanya membuat file terasa sudah selesai dengan matang.",
    "Panduan ini adalah panduan singkat itu — apa yang harus dilakukan sebelum Anda menekan kirim, dan alat gratis mana yang menangani setiap langkah tanpa mengunggah apa pun yang sensitif ke server pihak ketiga.",
  ],
  steps: [
    {
      title: "Beri nama file untuk klien, bukan untuk Anda",
      body: "NamaKlien_NamaProyek_Proposal_2026-05-29.pdf itu jelas tanpa keraguan. 'final_v3_edited.pdf' itu pengakuan kekacauan. Penerima harus bisa mengenali file itu dari folder unduhannya sebulan kemudian.",
    },
    {
      title: "Atur metadata judul dokumen agar sesuai",
      body: "Judul tab PDF sering menampilkan nama file asli atau sisa dari Word. Ekspor ulang dari aplikasi sumbernya dengan judul metadata yang sudah diatur, atau gunakan editor PDF untuk mengaturnya. Detail kecil, hasil akhir yang profesional.",
    },
    {
      title: "Kompres untuk kotak masuk klien",
      body: "Sebagian portal klien membatasi 5 MB; sebagian besar sistem email 25 MB. Kompres PDF di browser Anda membuat hasil kirim yang khas masuk nyaman di bawah keduanya. Jadikan ini langkah terakhir, bukan pertama.",
    },
    {
      title: "Lindungi dengan kata sandi hanya saat memang penting",
      body: "Gunakan kata sandi untuk materi yang benar-benar sensitif — detail keuangan, informasi identitas pribadi, draf kontrak. Jangan lindungi proposalnya sendiri dengan kata sandi; hambatannya lebih besar daripada manfaat keamanannya.",
    },
    {
      title: "Kirim catatan pengantar yang mencantumkan isinya",
      body: "Satu kalimat singkat: 'Terlampir: proposal (12 halaman), ketentuan (3 halaman), harga (1 halaman).' Klien tahu apa yang mereka buka tanpa harus memindai file-nya dulu.",
    },
    {
      title: "Tindak lanjuti dengan konfirmasi penerimaan",
      body: "Anda bisa bertanya 'kabari saya kalau sudah diterima dengan jelas' di catatan pengantar, atau periksa lagi sehari kemudian. File memang bisa tersaring sebagai spam, terutama lampiran dengan kata sandi.",
    },
  ],
  tips: [
    "Beri watermark pada draf (DRAFT, INTERNAL) tapi tidak pernah pada versi final. Versi final seharusnya tidak butuh label.",
    "Cocokkan konvensi nama file Anda dengan yang dipakai klien kalau Anda bisa mengetahuinya — banyak klien perusahaan punya standar penamaan dokumen yang bisa Anda tiru.",
    "Hindari mengirim lebih dari tiga lampiran. Gabungkan yang memang berkaitan; kirim sisanya sebagai tindak lanjut kalau perlu.",
    "Kalau Anda butuh tanda tangan balik, tanda tangani bagian Anda dulu dan isi awal kolom tanda tangan untuk mereka. Ini kebaikan kecil yang membuatnya kembali lebih cepat.",
    "Uji file Anda di aplikasi pembaca baru sebelum mengirim — aplikasi pembaca Anda sendiri mungkin menampilkan tata letak yang tidak sama di tempat lain.",
  ],
  mobileNote:
    "Klien semakin sering membaca hasil kirim di HP terlebih dahulu. Aplikasi PDF Editor membiarkan Anda melihat pratinjau, mengompres, menandatangani, dan membagikan ulang PDF dari mobile, jadi revisi klien di menit-menit terakhir tidak harus menunggu Anda kembali ke kantor.",
  faq: [
    {
      q: "Apa kesalahan paling umum saat mengirim PDF ke klien?",
      a: "Nama file. 'Document (1).pdf' memberi kesan Anda tidak peduli. Nama yang deskriptif dengan proyek dan tanggal membuat file itu bisa ditemukan lagi nanti.",
    },
    {
      q: "Haruskah saya lindungi kata sandi semua yang saya kirim?",
      a: "Tidak. Sisakan kata sandi untuk konten yang benar-benar sensitif. Hasil kirim rutin tidak membutuhkannya, dan terlalu sering memakai kata sandi malah melatih klien mengabaikannya atau kehilangannya.",
    },
    {
      q: "Seberapa besar ukuran file yang diperbolehkan?",
      a: "Email membatasi 25 MB; banyak portal klien 5 MB. Kompres apa pun yang melebihi 5 MB kecuali Anda tahu klien menerima yang lebih besar. Lebih kecil selalu lebih aman.",
    },
    {
      q: "Haruskah saya mengirim beberapa PDF terpisah atau menggabungkannya?",
      a: "Gabungkan kalau memang berkaitan (proposal + ketentuan + harga). Pisahkan kalau memang hasil kirim yang berbeda. Tiga lampiran adalah batas praktis sebelum semuanya jadi kacau.",
    },
    {
      q: "Bolehkah memakai alat PDF online untuk pekerjaan klien?",
      a: "Hanya kalau alatnya berjalan secara lokal di browser Anda. Mengunggah dokumen klien yang sensitif ke server pihak ketiga adalah risiko nyata. Alat berbasis browser yang memproses di perangkat Anda sepenuhnya menghindari itu.",
    },
  ],
  related: [
    { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
    { label: "Kompres PDF — perkecil untuk portal klien", path: "/compress-pdf" },
    { label: "Cara menyiapkan PDF untuk keperluan bisnis", path: "/guides/how-to-prepare-pdf-for-business-use" },
    { label: "Cara membuat file PDF yang siap untuk klien", path: "/guides/how-to-create-client-ready-pdf-files" },
  ],
  parentHub: { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
};

export default content;
