import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'yetenek',
  title: 'Yetenekler & İstatistikler',
  type: 'document',
  fields: [
    defineField({
      name: 'yetenekAdi',
      title: 'Yetenek Adı (Örn: Python, İngilizce)',
      type: 'string',
    }),
    defineField({
      name: 'yuzde',
      title: 'Bilgi Seviyesi (%0 - %100 arası sayı)',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'renk',
      title: 'Renk (Opsiyonel)',
      type: 'string',
      options: {
        list: [
          { title: 'Mor', value: 'bg-purple-600' },
          { title: 'Mavi', value: 'bg-blue-600' },
          { title: 'Yeşil', value: 'bg-green-600' },
          { title: 'Kırmızı', value: 'bg-red-600' },
          { title: 'Sarı', value: 'bg-yellow-500' },
        ],
      },
      initialValue: 'bg-purple-600' // Seçilmezse varsayılan mor olsun
    }),
  ],
})