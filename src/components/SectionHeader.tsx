"use client"; // <--- Esto permite usar Phosphor Icons

import { Sparkle } from "phosphor-react";

export default function SectionHeader() {
  return (
    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        {/* Ahora sí: El icono real de Phosphor */}
        <div className="flex items-center gap-2 text-[#DB2777] mb-2">
           <Sparkle weight="fill" size={20} />
           <span className="text-xs font-bold uppercase tracking-[0.2em]">Journal</span>
        </div>
        <h2 className="font-bebas text-6xl text-[#831843] leading-none">
          HISTORIAS <br /> RECIENTES
        </h2>
      </div>
    </div>
  );
}