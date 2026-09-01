import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-private-pdf-tools",
  h1: "Alat PDF Privat Terbaik (Saat Kerahasiaan Benar-Benar Penting)",
  description:
    "Untuk kontrak, catatan keuangan, dan PDF sensitif lainnya, inilah alat-alat yang menghormati privasi lewat cara kerjanya, bukan sekadar lewat kebijakan yang tertulis.",
  updated: "2026-05-29",
  intro: [
    "'Privat' dipakai untuk alat PDF seperti cara kata 'alami' dipakai untuk label makanan — berlebihan dan sering kali tidak akurat. Banyak alat mengklaim privasi dalam teksnya sementara tetap mengunggah setiap file ke server mereka dan memprosesnya di sana. Privasinya lalu bergantung pada kebijakan: 'kami tidak menyimpan file Anda lebih dari satu jam'. Itu lebih baik daripada tidak ada sama sekali, tapi tetap bergantung pada kebijakan itu ditepati, yang bergantung pada perusahaannya menepati janji, dan itu bukan jaminan yang kuat untuk materi yang benar-benar sensitif.",
    "Alat PDF yang privat — yang benar-benar privat — bersifat privat berdasarkan arsitekturnya. File Anda sama sekali tidak sampai ke server mereka. Pemrosesannya terjadi di browser Anda atau di aplikasi lokal di HP Anda. Privasi bukanlah kebijakan; itu adalah sifat struktural. Itulah standar yang layak dituntut dari sebuah alat saat filenya benar-benar penting.",
    "Panduan ini mendaftar pilihan yang privat untuk tugas PDF yang umum. Arsitekturnya adalah standarnya; sisanya mengikuti dari situ.",
  ],
  steps: [
    {
      title: "Untuk kompresi file sensitif: Kompres PDF di browser",
      body: "Kompres PDF di browser Anda mengecilkan file secara lokal. Rekening koran bank, hasil pindaian identitas, dan kontrak yang sensitif dikompres tanpa pernah meninggalkan perangkat Anda. Verifikasi dengan devtools — tidak ada POST keluar saat Anda menambahkan file.",
    },
    {
      title: "Untuk menggabungkan file sensitif: Gabungkan PDF di browser",
      body: "Gabungkan PDF menyatukan kontrak, lampiran bukti, atau berkas bertanda tangan secara lokal. File gabungannya dihasilkan dalam memori browser; komponen-komponennya tetap berada di perangkat Anda sepanjang proses.",
    },
    {
      title: "Untuk mengekstrak halaman tertentu untuk dibagikan: Ekstrak Halaman PDF",
      body: "Jika Anda hanya perlu mengirim halaman tertentu dari sebuah dokumen sensitif, Ekstrak Halaman PDF menghasilkan PDF baru berisi hanya halaman-halaman itu — secara lokal, di browser Anda.",
    },
    {
      title: "Untuk penghapusan halaman ala penyensoran: Ekstrak atau Urutkan Ulang",
      body: "Penyensoran teks yang sesungguhnya adalah tugas khusus; jika Anda menghapus seluruh halaman atau menggantinya dengan pengganti, alat tingkat halaman di browser Anda sudah cukup mengerjakannya tanpa membuka isinya ke server mana pun.",
    },
    {
      title: "Untuk menandatangani kontrak: Tanda Tangan PDF atau aplikasi PDF Editor",
      body: "Tanda Tangan PDF di browser atau aplikasi PDF Editor di HP menjaga kontrak tetap berada di perangkat Anda sepanjang proses penandatanganan. Tidak ada platform tanda tangan elektronik yang melihat dokumen itu.",
    },
    {
      title: "Untuk arsip privat: penyimpanan lokal terenkripsi",
      body: "Setelah diproses, arsipkan PDF sensitif di penyimpanan terenkripsi — FileVault, BitLocker, drive eksternal terenkripsi, atau cadangan cloud zero-knowledge. Pemrosesan lokal tidak ada artinya jika penyimpanan arsipnya tidak terenkripsi.",
    },
  ],
  tips: [
    "Privasi berdasarkan arsitektur lebih unggul daripada privasi berdasarkan kebijakan. Arsitekturnya bisa diverifikasi; kebijakannya bergantung pada kepercayaan.",
    "Tab network di devtools adalah langkah verifikasinya. Jika Anda tidak bisa memverifikasinya, jangan percaya.",
    "Jangan menerima pendaftaran akun untuk alat yang benar-benar privat — akun itu sendiri adalah data yang tadinya tidak akan dimiliki alatnya.",
    "Alat privat di HP seharusnya berfungsi secara offline. Jika aplikasi 'privat' membutuhkan jaringan terus-menerus, pertanyakan alasannya.",
    "Gabungkan alat privat dengan saluran privat. Memproses secara privat lalu mengirim hasilnya lewat email tanpa enkripsi menghilangkan tujuannya.",
  ],
  mobileNote:
    "Di HP, aplikasi PDF Editor adalah pilihan yang privat — semua pemrosesan terjadi langsung di perangkat, tanpa unggahan, tanpa akun. Berguna untuk kontrak dan hasil pindaian sensitif saat HP adalah perangkat yang paling alami dipakai, tapi filenya sebaiknya tidak melewati server siapa pun.",
  faq: [
    {
      q: "Apa yang membuat sebuah alat PDF benar-benar privat?",
      a: "Arsitekturnya — filenya sama sekali tidak sampai ke server alat itu. Kebijakan retensi yang dinyatakan lebih lemah karena bergantung pada perusahaan menepati komitmennya.",
    },
    {
      q: "Apakah alat 'privat' berbayar lebih baik daripada yang gratis?",
      a: "Belum tentu. Alat gratis yang berjalan di browser Anda punya privasi arsitektural yang sama dengan alat berbayar tanpa unggah. Alat berbayar unggul pada fitur tingkat lanjut (alur kerja yang diatur regulasi, e-discovery), bukan pada privasi dasarnya.",
    },
    {
      q: "Bisakah saya memverifikasi privasinya sendiri?",
      a: "Bisa — devtools browser, tab network. Jatuhkan sebuah file, amati permintaan keluarnya. Tidak ada unggahan file yang terlihat berarti memang tidak ada unggahan yang terjadi.",
    },
    {
      q: "Bagaimana dengan enkripsi ujung ke ujung?",
      a: "Berguna untuk berbagi, tidak membantu saat pemrosesan. Jika sebuah alat perlu membaca file Anda untuk memprosesnya, enkripsi saat pengiriman tidak ada artinya — server tetap melihat isinya.",
    },
    {
      q: "Apa sikap privasi paling kuat untuk PDF sensitif?",
      a: "Proses secara lokal dengan alat berbasis browser atau aplikasi lokal. Arsipkan di penyimpanan terenkripsi. Bagikan lewat saluran terenkripsi ujung ke ujung. Setiap lapisan menutupi celah serangan yang berbeda.",
    },
  ],
  related: [
    { label: "PDF Security — lindungi dengan kata sandi dan enkripsi", path: "/pdf-security" },
    { label: "PDF tools — berbasis browser, tanpa unggah", path: "/pdf-tools" },
    { label: "Alat PDF yang mengutamakan privasi", path: "/guides/privacy-first-pdf-tools" },
    { label: "Cara melindungi file PDF yang sensitif", path: "/guides/how-to-protect-sensitive-pdf-files" },
  ],
  parentHub: { label: "PDF tools — gratis, berbasis browser", path: "/pdf-tools" },
};

export default content;
