"use client";

import { useState } from "react";

export default function SertifikaGaleri({ certificates }: { certificates: any[] }) {
  const [seciliResim, setSeciliResim] = useState<string | null>(null);

  return (
    <>
      {/* KARTLARIN LİSTESİ */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert: any, index: number) => (
          <div 
            key={index} 
            className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-gray-600 transition-all flex flex-col justify-between group shadow-lg hover:shadow-blue-900/10"
          >
            <div>
              <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider block mb-2">
                {cert.kurum}
              </span>
              <h2 className="text-xl font-bold text-white mb-1">
                {cert.baslik}
              </h2>
              <span className="text-gray-500 text-sm font-mono block mb-6">
                {cert.tarih}
              </span>
            </div>

            {/* BUTON ALANI */}
            <div className="flex gap-3 mt-auto">
              
              {/* 1. Resmi Göster Butonu (MAVİ YAPILDI 🔵) */}
              {cert.gorsel && (
                <button
                  onClick={() => setSeciliResim(cert.gorsel)}
                  className="flex-1 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 hover:scale-[1.02] transition-all text-sm shadow-lg shadow-blue-900/50"
                >
                  Sertifikayı Gör 
                </button>
              )}

              {/* 2. Doğrulama Linki */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 text-gray-400 py-2 px-3 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors"
                  title="Doğrulama Linkine Git"
                >
                  🔗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL (POP-UP) PENCERE --- */}
      {seciliResim && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
          onClick={() => setSeciliResim(null)} // Herhangi bir yere basınca kapanır
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            
            <p className="text-gray-400 mb-2 text-sm animate-pulse">
              Kapatmak için herhangi bir yere tıklayın
            </p>

            {/* Büyük Resim */}
            <img 
              src={seciliResim} 
              alt="Sertifika Detay" 
              className="w-auto h-auto max-h-[80vh] object-contain rounded-lg border-2 border-gray-800 shadow-2xl hover:scale-[1.01] transition-transform"
            />

            <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
              Kapat ✕
            </button>
            
          </div>
        </div>
      )}
    </>
  );
}