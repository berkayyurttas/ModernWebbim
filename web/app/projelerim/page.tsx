import { createClient } from "next-sanity";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: "syrsnfhh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return source ? builder.image(source).url() : "";
}

export default async function ProjelerPage() {
  const projects = await client.fetch(`
    *[_type == "proje"] {
      baslik,
      ozet,
      resim,
      githubLink,
      canliLink
    }
  `, {}, { cache: 'no-store' });

  return (
    // DEĞİŞİKLİK 1: pt-24 md:pt-32 yaparak sayfayı iyice aşağıya indirdik.
    <div className="min-h-screen w-full bg-black text-white pt-24 md:pt-32 px-4 md:px-8 flex flex-col items-center relative overflow-hidden">
      
      {/* Arka Plan Dekorasyon */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      {/* Geri Dön Butonu */}
      <div className="w-full max-w-6xl z-10 mb-8">
         <Link href="/" className="absolute top-10 left-10 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
         ← Ana Sayfaya Dön
      </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg z-10">
        
      </h1>

      {/* --- PROJE KARTLARI --- */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 pb-20">
        
        {projects.map((proje: any, index: number) => (
          <div 
            key={index} 
            className="group h-full bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col relative"
          >
            
            {/* 1. Proje Görseli */}
            {/* DEĞİŞİKLİK 2: h-48 yerine h-40 yaptık. Resimler artık daha kısa ve kibar. */}
            <div className="relative h-40 w-full overflow-hidden bg-gray-800 border-b border-gray-800">
              
              {/* Resim Üstü Etiket */}
              {proje.githubLink && (
                <a 
                  href={proje.githubLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="absolute top-3 right-3 z-20 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-lg flex items-center gap-1 hover:bg-white hover:text-black transition-all cursor-pointer hover:scale-105"
                >
              
                </a>
              )}

              {proje.resim ? (
                <img 
                  src={urlFor(proje.resim)} 
                  alt={proje.baslik} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600 font-mono text-xs">
                  Görsel Yok
                </div>
              )}
            </div>

            {/* 2. Kart İçeriği */}
            <div className="p-6 flex flex-col flex-grow">
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-1">
                {proje.baslik}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                {proje.ozet}
              </p>

              {/* Alt Kısım */}
              <div className="mt-auto pt-4 border-t border-gray-800/50">
                
                <div className="flex gap-3">
                   {proje.githubLink && (
                    <a 
                      href={proje.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 text-white text-sm font-bold py-2 rounded-lg border border-gray-700 hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      <span>👾</span> GitHub
                    </a>
                   )}
                   
                   {proje.canliLink && (
                    <a 
                      href={proje.canliLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 text-green-400 text-sm font-bold py-2 rounded-lg border border-gray-700 hover:bg-green-500 hover:text-black hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      <span>🚀</span> Canlı
                    </a>
                   )}
                </div>

              </div>

            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="col-span-full text-center py-20 text-gray-500">
            Henüz proje eklenmemiş.
          </div>
        )}

      </div>
    </div>
  );
}