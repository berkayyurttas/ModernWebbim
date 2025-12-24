import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sertifika',
  title: 'Sertifikalarım',
  type: 'document',
  fields: [
    defineField({
      name: 'baslik',
      title: 'Sertifika Adı (Örn: İleri Python)',
      type: 'string',
    }),
    defineField({
      name: 'kurum',
      title: 'Veren Kurum (Örn: BTK Akademi, Udemy, Coursera)',
      type: 'string',
    }),
    defineField({
      name: 'tarih',
      title: 'Alınma Tarihi',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM', // Sadece Yıl ve Ay görünmesi yeterli
      }
    }),
    defineField({
      name: 'resim',
      title: 'Sertifika Görseli (Varsa)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Sertifika Doğrulama Linki (Varsa)',
      type: 'url',
    }),
  ],
})