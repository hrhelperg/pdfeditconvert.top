import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "browser-based-pdf-tools-vs-upload-tools",
  h1: "Alat PDF Berbasis Browser atau Alat Berbasis Unggahan",
  description:
    "Tidak semua alat PDF “online” itu sama. Perbedaan antara alat yang berjalan di browser Anda dan yang mengunggah file Anda, serta cara membedakannya.",
  updated: "2026-05-23",
  intro: [
    "Dua alat PDF bisa terlihat identik — halaman web yang sama, kotak seret-dan-lepas yang sama, tombol unduh yang sama — tapi melakukan hal yang sepenuhnya berbeda pada file Anda. Yang satu memprosesnya langsung di dalam browser Anda, di perangkat Anda sendiri. Yang lain mengunggahnya ke server, mengerjakannya di sana, dan mengirim hasilnya kembali. Dari luar Anda sering tidak bisa membedakannya, tapi untuk apa pun yang sensitif, perbedaan itu menentukan segalanya.",
    "Panduan ini menjelaskan perbedaan tersebut, mengapa itu penting, dan cara mengetahui alat mana yang sedang Anda pakai. Alat-alat di situs ini adalah jenis pertama: berjalan di browser Anda dan file Anda tidak pernah meninggalkan perangkat Anda. Banyak layanan 'PDF online' populer adalah jenis kedua, bahkan ketika itu tidak dinyatakan dengan jelas.",
    "Bukan berarti alat berbasis unggahan itu tidak berguna — hanya saja Anda perlu tahu kepada siapa Anda menyerahkan dokumen Anda, dan memilih dengan sengaja.",
  ],
  steps: [
    {
      title: "Pahami arti sebenarnya dari 'berbasis browser'",
      body: "Alat berbasis browser sejati melakukan pemrosesan di dalam halaman itu sendiri memakai prosesor perangkat Anda. File Anda dibaca secara lokal dan tidak pernah dikirim — pekerjaannya terjadi di tempat file itu sudah berada.",
    },
    {
      title: "Pahami apa yang dilakukan alat berbasis unggahan",
      body: "Alat berbasis unggahan mengirim file Anda ke server jarak jauh, memprosesnya di sana, dan mengembalikan hasilnya. Dokumen Anda sebentar tinggal di infrastruktur milik orang lain, tunduk pada kebijakan retensi dan privasi mereka.",
    },
    {
      title: "Perhatikan tanda-tandanya",
      body: "Alat berbasis unggahan biasanya menampilkan bar kemajuan yang bergantung pada kecepatan internet Anda, bisa gagal saat offline, dan sering menyebutkan file 'dihapus setelah satu jam' — frasa yang hanya masuk akal kalau mereka memang punya file Anda sejak awal.",
    },
    {
      title: "Uji secara offline",
      body: "Buka alatnya, lalu matikan koneksi Anda dan coba pakai. Alat berbasis browser sejati tetap berfungsi; alat berbasis unggahan tidak bisa, karena tidak punya tempat untuk mengirim file-nya.",
    },
    {
      title: "Cocokkan pilihan dengan dokumennya",
      body: "Untuk file publik yang tidak sensitif, keduanya sama saja. Untuk kontrak, kartu identitas, laporan keuangan, dan pekerjaan klien, pilih alat berbasis browser agar dokumen tidak pernah meninggalkan perangkat Anda.",
    },
    {
      title: "Gunakan alat di perangkat untuk pekerjaan yang sensitif",
      body: "Alat-alat di situs ini — gabung, bagi, kompres, konversi, putar, dan lainnya — berjalan di browser Anda. Andalkan alat-alat ini saat privasi benar-benar penting.",
    },
  ],
  tips: [
    "'Online' tidak memberi tahu Anda apakah file diunggah. Pertanyaan sebenarnya adalah di mana pemrosesan terjadi — perangkat Anda, atau server mereka.",
    "Uji offline adalah pemeriksaan paling andal: alat berbasis browser tetap berfungsi dengan koneksi mati, alat berbasis unggahan tidak.",
    "'Kami menghapus file Anda setelah satu jam' hanya melegakan kalau Anda memang ingin file itu diunggah sejak awal. Alat yang tidak pernah mengunggah tidak punya apa pun untuk dihapus.",
    "Kecepatan adalah petunjuk: alat berbasis browser tidak punya waktu tunggu unggah atau unduh, jadi file besar sering lebih cepat diproses secara lokal daripada bolak-balik ke server.",
    "Alat berbasis unggahan bukan hal jahat — untuk selebaran publik, itu baik-baik saja. Hanya saja jangan serahkan kontrak atau kartu identitas ke sana tanpa berpikir dulu.",
  ],
  mobileNote:
    "Di mobile, alat berbasis unggahan juga menghabiskan kuota data Anda dan macet di koneksi yang lemah. Aplikasi PDF Editor memproses semuanya di perangkat dan bekerja sepenuhnya offline — jadi Anda bisa menggabungkan atau mengompres dokumen sensitif di kereta tanpa sinyal dan tidak ada yang meninggalkan HP Anda.",
  faq: [
    {
      q: "Apakah semua alat PDF online itu sama?",
      a: "Tidak. Sebagian memproses file Anda di browser di perangkat Anda; yang lain mengunggahnya ke server. Keduanya bisa terlihat identik, jadi perbedaannya mudah terlewat — tapi itu menentukan apakah dokumen Anda meninggalkan perangkat Anda atau tidak.",
    },
    {
      q: "Bagaimana saya tahu apakah sebuah alat mengunggah file saya?",
      a: "Coba secara offline. Alat berbasis browser tetap berfungsi dengan koneksi mati; alat berbasis unggahan tidak bisa, karena tidak punya tempat untuk mengirim file-nya. Alat berbasis unggahan juga cenderung menampilkan bar kemajuan yang bergantung pada jaringan.",
    },
    {
      q: "Apakah alat-alat di situs ini berbasis browser?",
      a: "Ya. Gabung, bagi, kompres, konversi, putar, dan lainnya berjalan di browser Anda memakai prosesor perangkat Anda. File Anda tidak pernah diunggah.",
    },
    {
      q: "Apakah pernah baik-baik saja memakai alat berbasis unggahan?",
      a: "Untuk dokumen publik yang tidak sensitif, ya. Kehati-hatian ini berlaku untuk kontrak, kartu identitas, laporan keuangan, dan pekerjaan klien, di mana alat berbasis browser menjaga file tetap di perangkat Anda.",
    },
    {
      q: "Mengapa alat berbasis browser kadang lebih cepat?",
      a: "Tidak ada waktu tunggu unggah atau unduh. File-nya sudah ada di perangkat Anda, jadi untuk dokumen besar, pemrosesan lokal sering mengalahkan bolak-balik ke server.",
    },
  ],
  related: [
    { label: "Semua alat PDF gratis — berbasis browser, tanpa unggahan", path: "/pdf-tools" },
    { label: "Alat PDF yang mengutamakan privasi", path: "/guides/privacy-first-pdf-tools" },
    { label: "Aplikasi PDF atau alat PDF online", path: "/compare/pdf-app-vs-online-pdf-tools" },
    { label: "Cara mengompres PDF online tanpa mengunggah", path: "/guides/how-to-compress-pdf-online" },
  ],
  parentHub: { label: "Semua alat PDF gratis", path: "/pdf-tools" },
};

export default content;
