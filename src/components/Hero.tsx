"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDownRight, FlowerLotus, Butterfly, StarFour, ScribbleLoop } from "phosphor-react";

export default function HeroV4() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. La Cabecera se "dibuja" (Líneas divisorias)
      tl.from(".divider-line", {
        scaleX: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
      });

      // 2. El Nombre Gigante sube
      tl.from(".masthead-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        skewY: 5,
      }, "-=1");

      // 3. La Foto y el Contenido aparecen
      tl.from(".content-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      }, "-=0.5");

      // 4. Elementos Flotantes (Mariposas y Flores - Suaves)
      gsap.to(".floating-element", {
        y: "random(-15, 15)",
        rotation: "random(-10, 10)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 1.5, from: "random" }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden px-4 pt-4 pb-12 md:px-8"
    >
      {/* --- FONDO: TEXTURA DE PAPEL + LUZ ROSA --- */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#FFF5F7]"></div>
        {/* Manchas de acuarela muy sutiles */}
        <div className="absolute top-0 right-0 h-[50vh] w-[50vh] bg-[#FBCFE8]/40 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 h-[60vh] w-[60vh] bg-[#F472B6]/30 blur-[100px] rounded-full mix-blend-multiply" />
        {/* Ruido de papel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-soft-light" />
      </div>

      {/* --- ELEMENTOS DECORATIVOS FLOTANTES --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="floating-element absolute top-[18%] right-[5%] text-[#DB2777]/20">
            <FlowerLotus size={160} weight="duotone" />
         </div>
         <div className="floating-element absolute bottom-[10%] left-[2%] text-[#831843]/10 rotate-12">
            <Butterfly size={100} weight="fill" />
         </div>
      </div>

      {/* --- CONTENEDOR PRINCIPAL (El "Diario") --- */}
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col h-full">

        {/* 1. MASTHEAD (Cabecera del Diario) */}
        <header className="mb-8 md:mb-12 pt-8">
          
          {/* Top Bar (Datos) */}
          <div className="content-reveal flex items-center justify-between border-b-2 border-[#831843] pb-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#831843]">
            <div className="flex items-center gap-2">
              <StarFour weight="fill" className="text-[#DB2777]" />
              <span>Vol. 01 — 2026</span>
            </div>
            <div className="hidden md:block">Tucumán, Argentina</div>
            <div>Edición Personal</div>
          </div>

          {/* TITULO GIGANTE (Nombre) */}
          <div className="relative overflow-hidden py-2 md:py-6 text-center">
            <h1 className="masthead-title font-bebas text-[14vw] leading-[0.8] text-[#831843] tracking-tighter scale-y-110">
              CATA AGU MARTININI
            </h1>
          </div>

          {/* Bottom Bar (Lineas dobles) */}
          <div className="divider-line h-[1px] w-full bg-[#831843] opacity-30 mb-1"></div>
          <div className="divider-line h-[4px] w-full bg-[#831843]"></div>
        </header>

        {/* 2. LAYOUT DE CONTENIDO (Estilo Portada) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* COLUMNA IZQ: La "Nota de Tapa" (Texto) */}
          <div className="lg:col-span-4 flex flex-col gap-6 pt-4">
            
            <div className="content-reveal inline-flex items-center gap-2 self-start rounded-full border border-[#DB2777]/30 bg-white/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#DB2777] backdrop-blur-sm">
              <ScribbleLoop size={14} weight="bold" />
              <span>Pensamientos de Hoy</span>
            </div>

            <h2 className="content-reveal font-bebas text-5xl md:text-6xl text-[#831843] leading-[0.9]">
              LA BELLEZA DE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB2777] to-[#F472B6]">
                LO COTIDIANO
              </span>
            </h2>

            <p className="content-reveal text-lg font-medium leading-relaxed text-[#831843]/80 font-serif italic">
              "Este espacio es un intento de capturar los momentos que usualmente se escapan. Un archivo vivo de mis días, mis gustos y mi evolución."
            </p>

            <div className="content-reveal mt-4 flex flex-col gap-4 border-l-2 border-[#DB2777]/20 pl-6">
              <p className="text-sm uppercase tracking-widest text-[#831843]/50 font-bold">En esta edición:</p>
              <ul className="space-y-2 text-sm font-semibold text-[#831843]">
                <li className="flex items-center gap-2 hover:text-[#DB2777] cursor-pointer transition-colors">
                  <ArrowDownRight /> Mis favoritos de Febrero
                </li>
                <li className="flex items-center gap-2 hover:text-[#DB2777] cursor-pointer transition-colors">
                  <ArrowDownRight /> Playlist para crear
                </li>
                <li className="flex items-center gap-2 hover:text-[#DB2777] cursor-pointer transition-colors">
                  <ArrowDownRight /> Viajes: El norte argentino
                </li>
              </ul>
            </div>

          </div>

          {/* COLUMNA CENTRAL/DER: La "Foto Principal" (Glass Frame) */}
          <div className="lg:col-span-8 relative">
            
            {/* El Marco de Cristal */}
            <div className="content-reveal group relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-white p-3 shadow-2xl shadow-pink-900/10 rotate-1 transition-transform duration-700 hover:rotate-0">
              
              {/* Imagen Placeholder */}
              <div className="relative h-full w-full overflow-hidden bg-slate-200 filter contrast-[1.05] grayscale-[20%] transition-all duration-700 group-hover:grayscale-0">
                 {/* Aquí va <Image src={cataPhoto} ... /> */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#FBCFE8] to-[#E5E7EB] opacity-50"></div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <span className="font-bebas text-9xl text-white mix-blend-overlay">2026</span>
                 </div>
              </div>

              {/* Sticker Decorativo (Glass) */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/30 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-center animate-spin-slow">
                 <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text fill="#831843" fontSize="13" fontWeight="bold" letterSpacing="1px">
                      <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                        CATALINA • DIARIO PERSONAL •
                      </textPath>
                    </text>
                 </svg>
                 <FlowerLotus size={24} weight="fill" className="absolute text-[#DB2777]" />
              </div>

            </div>

            {/* Texto de Pie de Foto */}
            <div className="content-reveal mt-4 flex justify-end">
               <p className="text-[10px] font-bold uppercase tracking-widest text-[#831843]/40">
                 Foto por: @cataagu · Tucumán
               </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}