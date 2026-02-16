"use client";

import { Lightning } from "phosphor-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
        
        {/* Marca de Agua */}
        <div className="h-[1px] w-12 bg-[#831843]/20" />
        
        <p className="font-bebas text-xl text-[#831843]/40 tracking-wide">
          CATALINA MARTINI © 2026
        </p>

        {/* TU FIRMA TORX (Sutil pero presente) */}
        <div className="flex items-center gap-1.5 opacity-50 transition-opacity hover:opacity-100">
          <span className="text-[9px] font-bold uppercase tracking-wider text-[#831843]">
            Handcrafted by
          </span>
          <span className="flex items-center font-bebas text-sm tracking-wide text-[#831843]">
            TORX <Lightning size={12} weight="fill" className="text-[#DB2777] ml-0.5" />
          </span>
        </div>

      </div>
    </footer>
  );
}