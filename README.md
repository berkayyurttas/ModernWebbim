# 🚀 Berkay Yurttaş - Kişisel Portfolyo Web Sitesi

Bu proje, bir Yazılım Mühendisliği öğrencisi olarak projelerimi, deneyimlerimi ve yeteneklerimi sergilemek amacıyla geliştirdiğim **Full-Stack** kişisel web sitesidir.

Modern web teknolojileri kullanılarak tasarlanan site; **dinamik içerik yönetimi**, **karanlık/neon tema (Dark Mode)** ve **responsive (mobil uyumlu)** yapısıyla dikkat çekmektedir.

![Project Preview](https://via.placeholder.com/1000x500?text=Site+Onizlemesi+Eklenecek)
*(Not: Buraya sitenin ekran görüntüsünü ekleyebilirsin)*

## 🛠️ Kullanılan Teknolojiler

Bu proje iki ana bölümden oluşmaktadır: Frontend (Arayüz) ve Backend (CMS).

### Frontend (Web)
* **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
* **Dil:** [TypeScript](https://www.typescriptlang.org/)
* **Stil:** [Tailwind CSS](https://tailwindcss.com/)
* **İkonlar:** React Icons

### Backend (CMS)
* **İçerik Yönetim Sistemi:** [Sanity.io](https://www.sanity.io/)
* **Veri Dili:** GROQ (Graph-Relational Object Queries)

---

## ✨ Öne Çıkan Özellikler

* **🎨 Modern UI/UX:** Glassmorphism (Buzlu Cam) efektleri, neon ışıklandırmalar ve özel CSS animasyonları.
* **📱 Tamamen Responsive:** Mobil, tablet ve masaüstü cihazlarda kusursuz görünüm.
* **⚡ Dinamik Proje Yönetimi:** Projeler, GitHub linkleri ve görseller Sanity paneli üzerinden anlık olarak güncellenebilir.
* **Timeline Deneyim Akışı:** İş ve staj deneyimleri için özel tasarlanmış, zaman çizgisi (timeline) formatında gösterim.
* **🏷️ Kategorize Edilmiş Yetenekler:** Frontend, Backend ve Araçlar olarak ayrılmış yetenek kartları.
* **📜 Sertifika Vitrini:** Alınan eğitim ve sertifikaların sergilendiği özel alan.

---

## 📂 Proje Yapısı

Proje "Monorepo" mantığına benzer bir yapıda iki ana klasörden oluşur:

```bash
├── web/          # Next.js Frontend uygulaması
│   ├── app/      # Sayfalar (Home, Projeler, Deneyim vb.)
│   └── public/   # Statik dosyalar
│
└── studio/       # Sanity.io Backend/Yönetim Paneli
    ├── schemaTypes/ # Veritabanı şemaları (proje.ts, deneyim.ts vb.)
    └── sanity.config.ts
