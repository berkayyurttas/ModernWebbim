

import { createClient } from "next-sanity";
import Link from "next/link";

const client = createClient({
  projectId: "syrsnfhh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export default async function DeneyimPage() {
  const experiences = await client.fetch(`
    *[_type == "deneyim"] | order(baslangic desc) {
      pozisyon,
      sirket,
      baslangic,
      bitis,
      suan,
      aciklama,
      teknolojiler
    }
  `, {}, { cache: 'no-store' });

  return (
    // ANA KAPLAYICI: Projeler sayfasıyla aynı padding (pt-8 px-4 md:px-8)
    <div className="min-h-screen w-full bg-black text-white pt-8 px-4 md:px-8 flex flex-col items-center relative overflow-hidden">
      
      {/* Arka Plan Neon Efektleri */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[120px] pointer-events-none"></div>

      {/* --- ÜST BAR (Link Alanı) --- */}
      {/* DÜZELTME BURADA: max-w-4xl yerine max-w-6xl yaptık. Artık Projeler sayfasıyla aynı hizada solda duracak. */}
      <div className="w-full max-w-6xl z-10 mb-8">
         <Link href="/" className="absolute top-10 left-10 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
         ← Ana Sayfaya Dön
      </Link>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg z-10">
        Kariyer Yolculuğum
      </h1>

      {/* --- İÇERİK ALANI --- */}
      {/* İçeriği yine max-w-4xl tutuyoruz ki Timeline çok yayvan durmasın, estetik görünsün */}
      <div className="w-full max-w-4xl relative z-10 pb-20">
        
        {/* SOL TARAFTAKİ NEON ÇİZGİ */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-900 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>

        <div className="space-y-16">
          {experiences.map((exp: any, index: number) => (
            <div key={index} className="relative pl-12 md:pl-24 group">
              
              {/* Çizgi Üzerindeki Parlayan Nokta */}
              <div className="absolute left-[10px] md:left-[26px] top-8 w-6 h-6 rounded-full bg-black border-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)] z-20 group-hover:scale-125 group-hover:border-white transition-all duration-300"></div>

              {/* KART TASARIMI */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/40 hover:-translate-y-2 transition-all duration-500">
                
                {/* Başlık Alanı */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-gray-800 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.pozisyon}
                    </h3>
                    <div className="text-lg font-medium text-purple-400 mt-1">
                      @ {exp.sirket}
                    </div>
                  </div>

                  {/* Tarih Kutusu */}
                  <div className="bg-black px-4 py-2 rounded-lg border border-gray-700 text-sm font-mono text-cyan-100 shadow-inner whitespace-nowrap">
                    {exp.baslangic} — {exp.suan ? <span className="text-green-500 font-bold animate-pulse">Halen</span> : exp.bitis}
                  </div>
                </div>

                {/* Açıklama */}
                <p className="text-gray-300 mb-6 leading-relaxed text-base">
                  {exp.aciklama}
                </p>

                {/* Teknoloji Etiketleri */}
                {exp.teknolojiler && (
                  <div className="flex flex-wrap gap-2">
                    {exp.teknolojiler.map((tech: string, i: number) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-md text-xs font-bold bg-gray-800 border border-gray-700 text-cyan-200 hover:bg-cyan-900 hover:text-white transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}