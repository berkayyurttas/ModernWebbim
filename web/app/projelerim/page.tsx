import { createClient } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url';

// 1. Sanity Bağlantısı (Senin ID'n ile ayarlı)
const client = createClient({
  projectId: "syrsnfhh", 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Resim URL'sini oluşturucu
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return source ? builder.image(source).url() : "";
}

export default async function ProjelerimPage() {
  // 2. Verileri Çekiyoruz (Cache tutmasın ki yeni ekleyince hemen gelsin)
  const projects = await client.fetch(`
    *[_type == "proje"]{
      baslik,
      aciklama,
      resim,
      link
    }
  `, {}, { cache: 'no-store' });

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12">
      
      {/* Geri Dön Butonu */}
      <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2 mb-8 transition-colors">
        ← Ana Sayfaya Dön
      </Link>
      
      {/* Başlık */}
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Projelerim
      </h1>

      {/* Proje Kartları Izgarası (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Projeler burada döngüye girip listeleniyor */}
        {projects.length > 0 ? (
          projects.map((proje: any, index: number) => (
            <div key={index} className="group border border-gray-800 bg-gray-900/50 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300 flex flex-col">
              
              {/* Proje Resmi */}
              <div className="relative h-56 w-full overflow-hidden">
                {proje.resim ? (
                  <Image
                    src={urlFor(proje.resim)}
                    alt={proje.baslik}
                    fill
                    className="object-cover group-hover:opacity-80 transition-opacity"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                    Görsel Yok
                  </div>
                )}
              </div>

              {/* Yazı Alanı */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-3 text-white">{proje.baslik}</h2>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                  {proje.aciklama}
                </p>
                
                {proje.link && (
                  <a 
                    href={proje.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto block w-full text-center py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    İncele 🚀
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Henüz hiç proje eklenmemiş.</p>
        )}

      </div>
    </div>
  );
}