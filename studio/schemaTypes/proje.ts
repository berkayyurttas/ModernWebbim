import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'proje',
  title: 'Projelerim',
  type: 'document',
  fields: [
    defineField({
      name: 'baslik',
      title: 'Proje Başlığı',
      type: 'string',
    }),
    defineField({
      name: 'ozet',
      title: 'Kısa Açıklama (Neler yaptın?)',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'resim',
      title: 'Proje Görseli (Kapak)',
      type: 'image',
      options: {
        hotspot: true, // Resmin odak noktasını seçebilmek için
      },
    }),
    defineField({
      name: 'teknolojiler',
      title: 'Kullanılan Teknolojiler (Örn: Python, Next.js, AI)',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Repo Linki',
      type: 'url',
    }),
    defineField({
      name: 'canliLink',
      title: 'Canlı Proje Linki (Web sitesi varsa)',
      type: 'url',
    }),
  ],
})