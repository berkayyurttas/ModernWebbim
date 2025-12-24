import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'deneyim',
  title: 'Deneyimlerim / Kariyer',
  type: 'document',
  fields: [
    defineField({
      name: 'pozisyon',
      title: 'Pozisyon / Ünvan (Örn: Backend Stajyeri)',
      type: 'string',
    }),
    defineField({
      name: 'sirket',
      title: 'Şirket / Kurum Adı',
      type: 'string',
    }),
    defineField({
      name: 'baslangic',
      title: 'Başlangıç Tarihi',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' }
    }),
    defineField({
      name: 'bitis',
      title: 'Bitiş Tarihi (Halen çalışıyorsan boş bırak)',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' }
    }),
    defineField({
      name: 'suan',
      title: 'Halen burada çalışıyorum',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'aciklama',
      title: 'Neler Yaptın? (Kısa özet)',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'teknolojiler',
      title: 'Kullanılan Teknolojiler',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }),
  ],
})