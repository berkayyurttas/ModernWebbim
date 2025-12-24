import { createClient } from "next-sanity";
import Link from "next/link";

const client = createClient({
  projectId: "syrsnfhh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// SENİN İSTEDİĞİN ÖZEL RENKLER
const OZEL_RENKLER: any = {
  'c#':         '#22c55e', // Yeşil
  'data':       '#eab308', // Sarı
  'istatistik': '#ef4444', // Kırmızı
  'javascript': '#22c55e', // Yeşil
  'next.js':    '#a855f7', // Mor
  'python':     '#3b82f6', // Mavi
};

const VARSAYILAN_RENK = '#6b7280'; // Gri

export default async function YeteneklerPage() {
  const skills = await client.fetch(`
    *[_type == "yetenek"] | order(yuzde desc) {
      yetenekAdi,
      yuzde
    }
  `, {}, { cache: 'no-store' });

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12 flex flex-col items-center">
      
      {/* Geri Dön Butonu */}
      <div className="w-full max-w-4xl mb-12">
        <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
          ← Ana Sayfaya Dön
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        Teknik Yetenekler
      </h1>

      {/* LİSTE ALANI */}
      <div className="w-full max-w-4xl flex flex-col gap-6">
        
        {skills.map((skill: any, index: number) => {
          const isimKucuk = skill.yetenekAdi.toLowerCase().trim();
          const renk = OZEL_RENKLER[isimKucuk] || VARSAYILAN_RENK;

          return (
            <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              
              {/* Üst Kısım: İsim ve Yüzde */}
              <div className="flex justify-between items-end mb-3">
                <span className="text-xl font-bold text-white tracking-wide">
                  {skill.yetenekAdi}
                </span>
                <span className="text-lg font-mono font-bold" style={{ color: renk }}>
                  %{skill.yuzde}
                </span>
              </div>

              {/* Alt Kısım: Gri Çubuk */}
              <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                {/* Renkli Doluluk */}
                <div 
                  className="h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  style={{ 
                    width: `${skill.yuzde}%`, 
                    backgroundColor: renk 
                  }}
                ></div>
              </div>

            </div>
          );
        })}

        {skills.length === 0 && (
          <p className="text-gray-500 text-center">Henüz yetenek verisi yok.</p>
        )}

      </div>
    </div>
  );
}