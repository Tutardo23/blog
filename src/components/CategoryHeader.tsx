"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkle, Circle } from "phosphor-react";

interface CategoryHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: any; // Icono opcional
  gradient: string; // Ej: "from-pink-400 to-rose-500"
}

export default function CategoryHeader({ title, subtitle, description, icon: Icon, gradient }: CategoryHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de entrada: El título sube y el fondo se expande
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".cat-bg", { scaleY: 0, opacity: 0, duration: 1.2, transformOrigin: "top" });
      tl.from(".cat-text", { y: 50, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.8");
      tl.from(".cat-icon", { scale: 0, rotation: -45, duration: 1, ease: "back.out(1.7)" }, "-=1");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full pt-32 pb-12 overflow-hidden">
      
      {/* Fondo Decorativo (Mancha de color gigante) */}
      <div className={`cat-bg absolute top-0 left-0 right-0 h-[80%] opacity-10 bg-gradient-to-b ${gradient} blur-[100px] pointer-events-none`} />

      <div className="container mx-auto max-w-5xl px-6 text-center relative z-10">
        
        {/* Badge / Subtítulo */}
        <div className="cat-text mb-4 flex items-center justify-center gap-2">
           <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${gradient}`} />
           <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#831843]/60">
             {subtitle}
           </span>
           <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${gradient}`} />
        </div>

        {/* Título Gigante */}
        <h1 className="cat-text font-bebas text-[5rem] md:text-[8rem] leading-[0.85] text-[#831843] tracking-tighter mb-6 relative inline-block">
          {title}
          {/* Icono Flotante decorativo */}
          {Icon && (
            <div className="cat-icon absolute -top-4 -right-8 md:-top-8 md:-right-16 text-[#DB2777]/20 rotate-12">
               <Icon size={100} weight="duotone" />
            </div>
          )}
        </h1>

        {/* Descripción de la Sección */}
        <div className="cat-text relative mx-auto max-w-xl">
           {/* Líneas decorativas */}
           <div className="absolute -left-8 top-0 bottom-0 w-[2px] bg-[#831843]/10 hidden md:block" />
           <div className="absolute -right-8 top-0 bottom-0 w-[2px] bg-[#831843]/10 hidden md:block" />
           
           <p className="text-lg font-medium leading-relaxed text-[#831843]/70 font-serif italic">
             "{description}"
           </p>
        </div>

      </div>
    </section>
  );
}