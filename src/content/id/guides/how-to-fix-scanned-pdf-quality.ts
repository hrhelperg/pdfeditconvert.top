import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-scanned-pdf-quality",
  h1: "Cara Memperbaiki Kualitas PDF Hasil Pindaian (Menajamkan, Meluruskan, Mewarnai Ulang)",
  description:
    "PDF hasil pindaian bermasalah dengan cara yang bisa ditebak: miring, kontras pudar, latar belakang berbintik, file kebesaran. Penyesuaian sebelum memindai dan alat setelah memindai yang benar-benar merapikannya.",
  updated: "2026-05-29",
  intro: [
    "Hasil pindaian yang buruk merusak dokumen yang sebenarnya sederhana. Garis miring, kontras pudar, bintik debu yang tembus terlihat, ukuran file besar sekali — dan isi dokumennya jadi sulit dibaca atau tidak bisa dikompres lebih jauh. Bagian yang menjengkelkan adalah sebagian besar masalah itu berasal dari pengaturan, bukan dari PDF itu sendiri, dan menghindarinya saat menangkap jauh lebih mudah daripada memperbaikinya belakangan.",
    "Kalau Anda memang punya hasil pindaian buruk yang perlu diperbaiki, opsi realistisnya adalah: luruskan yang miring, potong yang bingkainya salah, turunkan sampel yang kebesaran, dan terima bahwa resolusi yang hilang saat menangkap tidak akan kembali. Sebagian alat pengolah gambar mengklaim bisa menajamkan; dalam praktiknya mereka membuat sesuatu terlihat berbeda, bukan lebih baik.",
    "Panduan ini memisahkan pencegahan (pindai dengan benar sejak awal) dari pemulihan (apa yang harus dilakukan dengan file yang sudah Anda punya). Pencegahan lebih penting.",
  ],
  steps: [
    {
      title: "Cegah kemiringan dengan memasukkan halaman dengan benar",
      body: "Pemindai dengan feeder otomatis miring saat halamannya tidak rata di baki. Pindaian HP miring saat Anda memiringkan kameranya. Keduanya bisa dihindari: ratakan halamannya, pegang HP sejajar dengan kertasnya, dan hasil pindaiannya akan keluar lurus.",
    },
    {
      title: "Atur resolusi pindaian ke 200–300 DPI untuk dokumen",
      body: "600 DPI setara kualitas foto dan menghasilkan file yang sangat besar tanpa manfaat pada halaman ketikan. 150 DPI terlalu rendah — teksnya jadi lembut. Rentang 200–300 adalah titik ideal untuk dokumen yang akan Anda bagikan, arsipkan, atau cetak.",
    },
    {
      title: "Pilih skala abu-abu atau hitam-putih daripada warna untuk teks",
      body: "Mode warna pada dokumen teks melipatgandakan ukuran file tiga kali dan memunculkan noise yang sulit dikompres. Skala abu-abu atau hitam-putih menghasilkan hasil pindaian yang lebih tajam, lebih kecil, dan lebih bersih untuk apa pun yang bukan foto atau grafik berwarna.",
    },
    {
      title: "Gunakan kontras otomatis dan potong otomatis kalau tersedia",
      body: "Sebagian besar aplikasi pemindai memiliki kontras otomatis dan deteksi tepi. Keduanya membuat perbedaan nyata: kontras menghilangkan kabut abu-abu, deteksi tepi memotong sesuai halaman sehingga marginnya bersih.",
    },
    {
      title: "Kompres dengan hati-hati pada hasil pindaian yang sudah ada",
      body: "Kalau PDF hasil pindaian sudah sangat besar, Kompres PDF di browser Anda bisa memperkecilnya secara drastis. Jangan pakai pengaturan ekstrem pada teks — bisa membuat karakternya berbintik. Kuat-tapi-tidak-ekstrem adalah pilihan yang aman.",
    },
    {
      title: "Putar halaman yang miring dengan Putar PDF",
      body: "Kalau hanya sebagian halaman yang menyamping atau terbalik, Putar PDF meluruskannya di tempat. Alat ini tidak bisa memperbaiki kemiringan sudut kecil, tapi menangani rotasi 90/180/270 yang paling sering dihasilkan kesalahan feeder.",
    },
  ],
  tips: [
    "Pencahayaan yang terang dan merata lebih penting daripada kualitas kamera pada pindaian HP. Pindaian HP dengan cahaya baik mengalahkan hasil pemindai kantor yang pencahayaannya buruk.",
    "Jangan memindai dengan warna DPI tinggi lalu mengompres keras. Pindai dengan pengaturan yang tepat sejak awal; file-nya jadi lebih kecil, lebih tajam, dan lebih cepat diolah.",
    "Latar belakang yang tembus terlihat (teks dari sisi belakang kertas tipis) adalah masalah kertas, bukan masalah pindaian. Gunakan selembar kertas gelap di belakang halamannya.",
    "Memindai ulang hampir selalu lebih cepat daripada memperbaiki. Kalau Anda masih punya kertasnya, perbaiki pindaiannya saat menangkap, bukan dengan mengolah gambarnya.",
    "Aplikasi pindaian HP yang menjanjikan 'peningkatan kualitas' sering menambahkan penajaman palsu yang terlihat lebih buruk saat diperiksa dari dekat. Hasil pindaian dasar yang bersih mengalahkan hasil olahan yang buruk.",
  ],
  mobileNote:
    "Pindaian HP bermasalah dengan cara yang bisa ditebak — sudut, cahaya, dan fokus semuanya di tangan pengguna. Alur pindai aplikasi PDF Editor memakai deteksi tepi waktu nyata dan penyesuaian kontras, sehingga setiap tangkapan mendekati hasil pemindai datar sejak percobaan pertama.",
  faq: [
    {
      q: "Mengapa PDF hasil pindaian saya begitu pudar?",
      a: "Kontrasnya diatur terlalu rendah saat menangkap. Pindai ulang dengan kontras otomatis aktif, atau dengan kecerahan/kontras disesuaikan manual. Pengolahan pascapindai hanya membantu sedikit.",
    },
    {
      q: "Bisakah saya menajamkan hasil pindaian yang buram?",
      a: "Hanya secara tampilan. Detail sungguhan yang hilang saat menangkap tidak bisa dipulihkan. Filter penajam mengubah tepi tapi tidak menambah informasi.",
    },
    {
      q: "Resolusi pindaian apa yang harus saya gunakan?",
      a: "200–300 DPI untuk dokumen. 300 kalau Anda mungkin akan mencetaknya. Apa pun yang lebih tinggi terbuang percuma pada teks dan hanya membuat file-nya membengkak.",
    },
    {
      q: "Haruskah saya memindai dengan warna atau skala abu-abu?",
      a: "Skala abu-abu atau hitam-putih untuk teks. Warna hanya untuk foto dan grafik berwarna. Skala abu-abu lebih tajam dan jauh lebih kecil.",
    },
    {
      q: "Mengapa ukuran file hasil pindaian saya besar sekali?",
      a: "Biasanya DPI yang terlalu tinggi ditambah mode warna. Kurangi keduanya saat menangkap, atau kompres file yang sudah ada. PDF hasil pindaian paling diuntungkan dari kompresi.",
    },
  ],
  related: [
    { label: "Pindai ke PDF — tangkapan bersih dengan deteksi tepi", path: "/scan-to-pdf" },
    { label: "Kompres PDF — perkecil hasil pindaian yang berat", path: "/compress-pdf" },
    { label: "Cara mengompres PDF hasil pindaian", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Mengapa PDF saya buram?", path: "/guides/why-is-my-pdf-blurry" },
  ],
  parentHub: { label: "Pindai ke PDF — pemindaian dengan kamera HP", path: "/scan-to-pdf" },
};

export default content;
