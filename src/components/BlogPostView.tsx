"use client";

import { useState } from "react";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { motion, AnimatePresence } from "framer-motion";
import Scribble from "./Scribble";
// CAMBIO: Usamos 'Camera' en lugar de 'Images' para evitar el error
import { ArrowDownRight, CaretLeft, CaretRight, Camera } from "phosphor-react";

// CONFIGURACIÓN DEL TEXTO (Felpa Rosa)
const myPortableTextComponents = {
  marks: {
    strong: ({ children }: any) => (
      <Scribble color="#FBCFE8">
        <span className="font-bold text-[#831843]">{children}</span>
      </Scribble>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="mb-6 leading-loose text-[#4A4A4A] text-lg font-serif">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="mt-8 mb-4 font-bebas text-4xl text-[#9D174D] border-b-2 border-[#FBCFE8] inline-block">{children}</h2>
    ),
  }
};

export default function BlogPostView({ post }: { post: any }) {
  // Configuración del Carrusel
  // Si en el futuro tenés una galería real, cambiá esto por: post.gallery || [post.mainImage]
  const images = [post.mainImage]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <article className="min-h-screen relative overflow-hidden bg-[#FFF0F5]">
      
      {/* --- JARDÍN DE FONDO (AHORA SÍ, LLENO DE COSAS) --- */}
      
      {/* 1. Flor Gigante Arriba Derecha (SVG) */}
      <svg className="absolute -top-20 -right-20 w-[600px] h-[600px] text-[#FBCFE8] opacity-60 pointer-events-none animate-pulse duration-[5000ms]" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 50 C20 0 0 20 50 50 C80 0 100 20 50 50 C20 80 0 60 50 50 C80 80 100 60 50 50 Z" />
      </svg>

      {/* 2. Flor Gigante Abajo Izquierda (SVG) */}
      <svg className="absolute bottom-0 left-0 w-[500px] h-[500px] text-[#FCE7F3] opacity-80 pointer-events-none translate-y-1/4 -translate-x-1/4" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 50 Q30 10 10 30 T50 50 Q70 10 90 30 T50 50 Q30 90 10 70 T50 50 Q70 90 90 70 T50 50 Z" />
      </svg>

      {/* 3. Ramas Decorativas al costado del texto */}
      <svg className="absolute top-1/4 left-0 w-64 h-64 text-[#DB2777] opacity-10 pointer-events-none -translate-x-1/2" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
         <path d="M50,100 Q80,50 50,0 M50,50 Q20,20 0,30 M50,70 Q80,80 100,60" />
      </svg>

      {/* 4. Flor Flotante Centro */}
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#FBCFE8] rounded-full blur-[60px] opacity-60 pointer-events-none" />

      
      {/* --- CONTENIDO --- */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <motion.div 
            className="lg:col-span-7 flex flex-col order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Categoría */}
            <div className="mb-6 flex items-center gap-4">
              <span className="bg-[#DB2777] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg transform -rotate-2">
                {post.categoria || "Diario"}
              </span>
              <div className="h-px flex-grow bg-[#DB2777]/20" />
            </div>

            {/* Título */}
            <h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-[#831843] mb-8 drop-shadow-sm">
              {post.title}
            </h1>

            {/* Fecha */}
            <div className="flex items-center gap-2 mb-10 text-[#9D174D] font-serif italic text-lg bg-white/50 inline-block px-4 py-2 rounded-lg backdrop-blur-sm border border-white">
              <ArrowDownRight size={24} />
              <span>
                {new Date(post.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            {/* Cuerpo del Texto */}
            <div className="prose prose-xl prose-pink max-w-none bg-white/70 p-8 rounded-[2rem] shadow-sm backdrop-blur-md border border-white relative overflow-hidden">
              {/* Decoración interna del papel */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FBCFE8]/50 to-transparent rounded-bl-[4rem]" />
              <PortableText value={post.body} components={myPortableTextComponents} />
            </div>
          </motion.div>


          {/* COLUMNA DERECHA: CARRUSEL (Estilo Polaroid) */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full group"
            >
              <div className="relative aspect-[3/4] w-full bg-white p-3 rounded-[2rem] shadow-2xl border-4 border-white rotate-2 transition-transform duration-500 hover:rotate-0">
                
                {/* Marco de Imagen */}
                <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] bg-gray-100">
                  <AnimatePresence mode="wait">
                    {images[currentIndex] && (
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                         <Image
                            src={urlFor(images[currentIndex]).url()}
                            alt="Galería"
                            fill
                            className="object-cover"
                            priority
                          />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Icono de Cámara (CORREGIDO) */}
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur text-white p-2 rounded-full z-10">
                    <Camera size={24} weight="fill" />
                  </div>
                </div>

                {/* Flechas de Control (Solo si hay más de 1 foto) */}
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 hover:bg-white text-[#831843] p-3 rounded-full shadow-lg transition-all z-20 hover:scale-110"
                    >
                      <CaretLeft size={24} weight="bold" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 hover:bg-white text-[#831843] p-3 rounded-full shadow-lg transition-all z-20 hover:scale-110"
                    >
                      <CaretRight size={24} weight="bold" />
                    </button>
                    
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-2 rounded-full transition-all shadow-sm ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50 w-2'}`} 
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Papeles decorativos detrás de la polaroid (Efecto "Apilado") */}
              <div className="absolute -z-10 top-2 -right-2 w-full h-full bg-[#FBCFE8] rounded-[2rem] -rotate-2 border border-white" />
              <div className="absolute -z-20 top-4 -right-4 w-full h-full bg-[#FCE7F3] rounded-[2rem] -rotate-4 border border-white" />

            </motion.div>
          </div>

        </div>
      </div>
    </article>
  );
}