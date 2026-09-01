import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "remote-work",
  h1: "PDF Editor untuk Kerja Jarak Jauh",
  description:
    "Kelola dokumen saat bepergian: pindai, tanda tangani, dan bagikan PDF dari perangkat apa pun, di mana pun Anda berada.",
  intro: [
    "Kerja jarak jauh memisahkan kantor dari pekerjaan Anda. Sisi minusnya, operasi dokumen yang dulu dilakukan di printer, pemindai, atau drive bersama sekarang harus dilakukan di perangkat apa pun yang sedang Anda pakai — sering kali di kereta, di kafe, atau di lokasi klien. Editor PDF native untuk HP menutup celah itu.",
    "Standar minimal untuk alat kerja jarak jauh adalah: berfungsi di WiFi yang tidak stabil, berfungsi offline saat diperlukan, tidak mengharuskan Anda mengunggah dokumen sensitif ke pihak ketiga, dan berfungsi di perangkat apa pun yang sedang Anda pakai. PDF Editor memenuhi keempatnya karena semua operasi berat berjalan langsung di perangkat.",
    "Berikut ini alur kerja spesifik yang mengubah HP menjadi kantor dokumen portabel — tanpa bergantung pada meja kerja tertentu, negara tertentu, atau koneksi internet tertentu.",
  ],
  workflows: [
    {
      title: "Tanda tangani dokumen saat bepergian",
      body: "Tanda tangani kontrak di pesawat atau kereta. Tanda tangannya tersimpan di perangkat; filenya terenkripsi saat disimpan.",
    },
    {
      title: "Pindai saat Anda tidak punya pemindai",
      body: "Kamar hotel, pusat konferensi, kantor klien — kamera HP ditambah koreksi otomatis sudah cukup baik untuk dokumen bisnis apa pun.",
    },
    {
      title: "Gabungkan file untuk serah terima jarak jauh",
      body: "Gabungkan dokumen yang dibutuhkan rekan kerja Anda menjadi satu PDF, bagikan lewat Drive atau Slack, selesai.",
    },
    {
      title: "Kompres sebelum mengunggah di jaringan lambat",
      body: "WiFi hotel membuat lampiran besar jadi menyiksa. Kompres dulu, baru unggah, hemat satu jam.",
    },
    {
      title: "Perbaiki hal-hal kecil tanpa perlu menyalakan laptop",
      body: "Salah ketik di draf, tanggal yang salah di penawaran harga — perbaiki dari HP dalam 60 detik lalu lanjutkan.",
    },
  ],
  appPitch:
    "PDF Editor cocok secara alami dengan stack kerja jarak jauh lainnya — Drive, iCloud, Notion, Slack, Linear, GitHub. Inilah lapisan yang menangani operasi dokumen tanpa mengharuskan Anda punya meja kerja atau koneksi yang stabil.",
  related: [
    { label: "PDF untuk Bisnis", path: "/pdf-for-business" },
    { label: "Kasus penggunaan — pekerja lepas", path: "/use-cases/freelancers" },
    { label: "Pindai ke PDF", path: "/scan-to-pdf" },
  ],
};

export default content;
