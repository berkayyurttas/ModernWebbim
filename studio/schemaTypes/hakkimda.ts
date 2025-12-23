import { defineType, defineField } from 'sanity'

export const hakkimda = defineType({
  name: 'hakkimda',
  title: 'Hakkımda Bilgileri',
  type: 'document',
  fields: [
    defineField({
      name: 'adSoyad',
      title: 'Adın Soyadın',
      type: 'string',
    }),
    defineField({
      name: 'meslek',
      title: 'Mesleğin / Unvanın',
      type: 'string',
    }),
    defineField({
      name: 'ozgecmis',
      title: 'Özgeçmiş Yazısı',
      type: 'text',
    }),
    defineField({
      name: 'profilResmi',
      title: 'Profil Resmi',
      type: 'image',
      options: {
        hotspot: true,
        
      },
    }),
    // ... eski alanlar (ad, soyad, resim vs.) yukarıda kalsın ...

    defineField({
      name: 'email',
      title: 'E-posta Adresi',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'GitHub Linki',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn Linki',
      type: 'url',
    }),
    defineField({
      name: 'medium',
      title: 'Medium Linki',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Linki',
      type: 'url',
    }),
    defineField({
      name: 'cvDosyasi',
      title: 'CV Dosyası (PDF)',
      type: 'file', // Dosya yükleme alanı
    }),
  ],
})