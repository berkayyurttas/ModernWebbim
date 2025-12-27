import { createClient } from "next-sanity";
import Link from "next/link";
import SertifikaGaleri from "./SertifikaGaleri"; // Az önce oluşturduğumuz dosya

const client = createClient({
  projectId: "syrsnfhh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export default async function SertifikalarPage() {
  // Veriyi Çek
  const certificates = await client.fetch(`
    *[_type == "sertifika"] | order(tarih desc) {
      baslik,
      kurum,
      tarih,
      "gorsel": resim.asset->url, 
      link
    }
  `, {}, { cache: 'no-store' });

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 flex flex-col items-center">
      
      {/* Geri Dön */}
      <div className="w-full max-w-6xl mb-12">
       <Link href="/" className="absolute top-10 left-10 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
         ← Ana Sayfaya Dön
      </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        Sertifikalarım & Başarılar 📜
      </h1>

      {/* GALERİ BİLEŞENİNİ ÇAĞIR */}
      <div className="w-full max-w-6xl">
        <SertifikaGaleri certificates={certificates} />

        {certificates.length === 0 && (
          <p className="text-gray-500 text-center mt-10">Henüz sertifika verisi yok.</p>
        )}
      </div>

    </div>
  );
}