import { createClient } from "next-sanity";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaInstagram, FaEnvelope, FaFileDownload, FaArrowLeft } from "react-icons/fa";

const client = createClient({
  projectId: "syrsnfhh", // ANA SAYFADAKİ ID'NİN AYNISI
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function getData() {
  const query = `*[_type == "hakkimda"][0]{
    email,
    github,
    linkedin,
    medium,
    instagram,
    "cvUrl": cvDosyasi.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Iletisim() {
  const data = await getData();

  if (!data) return <div className="p-10 text-white">Veri yüklenemedi.</div>;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative">
      <Link href="/" className="absolute top-10 left-10 flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <FaArrowLeft /> Ana Sayfaya Dön
      </Link>

      <div className="max-w-2xl w-full bg-zinc-900 border border-gray-800 p-10 rounded-3xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Benimle İletişime Geç
        </h1>
        
        <div className="grid gap-4">
          {data.email && (
            <a href={`mailto:${data.email}`} className="flex items-center justify-center gap-3 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all">
              <FaEnvelope className="text-yellow-400 text-xl" /> <span className="text-lg">{data.email}</span>
            </a>
          )}
          {data.github && (
            <a href={data.github} target="_blank" className="flex items-center justify-center gap-3 p-4 bg-gray-800 rounded-xl hover:bg-black transition-all">
              <FaGithub className="text-white text-xl" /> <span className="text-lg">GitHub</span>
            </a>
          )}
          {data.linkedin && (
            <a href={data.linkedin} target="_blank" className="flex items-center justify-center gap-3 p-4 bg-gray-800 rounded-xl hover:bg-blue-700 transition-all">
              <FaLinkedin className="text-blue-400 text-xl" /> <span className="text-lg">LinkedIn</span>
            </a>
          )}
          {data.cvUrl && (
            <a href={`${data.cvUrl}?dl=`} className="mt-6 flex items-center justify-center gap-3 p-4 bg-green-600 rounded-xl hover:bg-green-700 transition-all font-bold text-white">
              <FaFileDownload className="text-xl" /> <span>CV İndir</span>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}