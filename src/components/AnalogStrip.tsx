"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Camera, Sparkle } from "phosphor-react";

export default function AnalogStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación infinita hacia la izquierda
      gsap.to(".film-track", {
        xPercent: -50, // Mueve la mitad del contenido (que está duplicado)
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, stripRef);

    return () => ctx.revert();
  }, []);

  // Datos simulados (Fotos placeholder)
  const moments = [
    { type: "photo", color: "bg-rose-100" },
    { type: "text", content: "COFFEE FIRST" },
    { type: "photo", color: "bg-purple-100" },
    { type: "photo", color: "bg-orange-100" },
    { type: "text", content: "SLOW LIVING" },
    { type: "photo", color: "bg-blue-100" },
  ];

  return (
    <section className="relative w-full overflow-hidden py-12 bg-white/50 backdrop-blur-sm border-y border-[#831843]/5">
      
      {/* Etiqueta */}
      <div className="absolute left-1/2 top-4 -translate-x-1/2 flex items-center gap-2 text-[#831843]/40 z-10">
        <Camera weight="fill" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Camera Roll · Feb 26</span>
      </div>

      <div ref={stripRef} className="flex w-fit items-center gap-8 py-8 pl-8">
        {/* Renderizamos DOBLE para el loop infinito */}
        {[...moments, ...moments, ...moments].map((item, i) => (
          <div key={i} className="film-track flex items-center shrink-0">
            
            {item.type === "photo" ? (
              // FOTO TIPO POLAROID
              <div className={`h-40 w-32 rotate-2 rounded-lg p-2 shadow-lg ring-1 ring-black/5 bg-white transition-transform hover:scale-110 hover:z-10 hover:-rotate-2 ${item.color}`}>
                 <div className="h-full w-full bg-black/5 rounded-sm" /> {/* Placeholder imagen */}
              </div>
            ) : (
              // TEXTO DECORATIVO
              <div className="flex items-center gap-4 px-4">
                 <Sparkle className="text-[#DB2777]" weight="fill" />
                 <span className="font-bebas text-4xl text-[#831843]/20 whitespace-nowrap">
                   {item.content}
                 </span>
              </div>
            )}
            
            {/* Perforaciones de película */}
            <div className="ml-8 flex flex-col gap-2">
               <div className="h-2 w-2 rounded-full bg-[#831843]/10" />
               <div className="h-2 w-2 rounded-full bg-[#831843]/10" />
               <div className="h-2 w-2 rounded-full bg-[#831843]/10" />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}