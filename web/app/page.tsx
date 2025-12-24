import { createClient } from "next-sanity";
import Image from "next/image";
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

export default async function Home() {
  const data = await client.fetch(`
    *[_type == "hakkimda"][0]{
      adSoyad,
      meslek,
      ozgecmis,
      profilResmi
    }
  `, {}, { cache: 'no-store' });

  if (!data) return <div className="p-20 text-white text-center">Veri yok...</div>;

  const profilePicUrl = data.profilResmi ? urlFor(data.profilResmi) : null;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* SOL TARAF: Yazılar */}
        <div className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1">
          <h2 className="text-xl text-gray-400 font-medium tracking-wide uppercase">
            Merhaba, Ben
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {data.adSoyad}
          </h1>

          <h3 className="text-2xl md:text-3xl text-gray-300 font-semibold">
            {data.meslek}
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            {data.ozgecmis}
          </p>

          {/* BUTONLAR (5 ADET) */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
            
            {/* 1. İLETİŞİM */}
            <Link href="/iletisim" className="w-fit px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white font-medium hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap">
              <span>✉️</span> İletişime Geç
            </Link>

            {/* 2. PROJELERİM */}
           <Link href="/projelerim" className="w-fit px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white font-medium hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap">
              <span>💻</span> Projelerim
            </Link>
            {/* 3. YETENEKLERİM */}
            <Link href="/yetenekler" className="w-fit px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white font-medium hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap">
              <span>📊</span> Yeteneklerim
            </Link>
            {/* 4. SERTİFİKALARIM */}
            <Link href="/sertifikalar" className="w-fit px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white font-medium hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap">
              <span>📜</span> Sertifikalarım
            </Link>
            {/* 5. DENEYİMLERİM */}
            <Link href="/deneyim" className="w-fit px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white font-medium hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap">
              <span>💼</span> Deneyimlerim
            </Link>

          </div>
        </div>

        {/* SAĞ TARAF: Resim */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl shadow-purple-900/50">
            {profilePicUrl && (
              <Image
                src={profilePicUrl}
                alt={data.adSoyad}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>

      </div>
    </main>
  );
}