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
    <div className="min-h-screen bg-black text-white p-8 md:p-16 flex flex-col items-center relative overflow-hidden">
      
      {/* Arka Plan Efekti */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none"></div>

      {/* Geri Dön */}
      <div className="w-full max-w-5xl mb-12 z-10">
        <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
          ← Ana Sayfaya Dön
        </Link>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-20 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text z-10 drop-shadow-lg">
        Kariyer Yolculuğum
      </h1>

      {/* KARTLAR LİSTESİ */}
      <div className="w-full max-w-4xl relative z-10 space-y-12">
        
        {/* Dikey Çizgi */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-purple-800 rounded-full"></div>

        {experiences.map((exp: any, index: number) => (
          <div key={index} className="relative pl-12 md:pl-20 group">
            
            {/* Nokta */}
            <div className="absolute left-[11px] md:left-[27px] top-8 w-5 h-5 rounded-full bg-black border-4 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] group-hover:scale-125 transition-all z-20"></div>

            {/* KUTU (Buzlu Cam) */}
            <div className="relative bg-gray-900/80 backdrop-blur-md border border-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/50 transition-all hover:-translate-y-2">
              
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4 border-b border-gray-700 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.pozisyon}
                  </h3>
                  <div className="text-lg text-gray-300">
                    <span className="text-purple-400">@</span> {exp.sirket}
                  </div>
                </div>

                <div className="bg-black/50 px-4 py-2 rounded-lg border border-gray-600 text-sm font-mono text-gray-300">
                  {exp.baslangic} — {exp.suan ? <span className="text-green-400 font-bold">Halen</span> : exp.bitis}
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {exp.aciklama}
              </p>

              {exp.teknolojiler && (
                <div className="flex flex-wrap gap-2">
                  {exp.teknolojiler.map((tech: string, i: number) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-bold bg-blue-900/30 border border-blue-500/30 text-cyan-200">
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
  );
}