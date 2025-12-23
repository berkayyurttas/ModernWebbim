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
      name: 'aciklama',
      title: 'Kısa Açıklama',
      type: 'text',
    }),
    defineField({
      name: 'resim',
      title: 'Proje Görseli',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'link',
      title: 'Proje Linki (GitHub/Web)',
      type: 'url',
    }),
  ],
})