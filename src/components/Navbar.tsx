"use client";

import Link from "next/link";
import { List, InstagramLogo, House, Camera, Heart } from "phosphor-react";

export default function Navbar() {
  return (
    // 'sticky top-0' hace que la barra ocupe espacio real (no se superpone) y se quede pegada al bajar.
    <header className="sticky top-0 z-[100] w-full border-b border-[#831843]/5 bg-[#FFF5F7]/80 backdrop-blur-md">
      
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* IZQUIERDA: Marca Simple */}
        <Link href="/" className="group flex flex-col">
          <span className="font-bebas text-3xl tracking-wide text-[#831843] transition-colors group-hover:text-[#DB2777]">
            CATALINA A.M.
          </span>
        </Link>

        {/* CENTRO: Navegación (Solo Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/" text="Journal" />
          <NavLink href="/galeria" text="Galería" />
          <NavLink href="/about" text="Sobre Mí" />
        </nav>

        {/* DERECHA: Íconos Esenciales */}
        <div className="flex items-center gap-6">
          
          {/* Solo Instagram (El único relevante) */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            className="text-[#831843] transition-transform hover:scale-110 hover:text-[#DB2777]"
          >
            <InstagramLogo size={22} weight="bold" />
          </a>

          {/* Menú Mobile (Hamburguesa) */}
          <button className="md:hidden text-[#831843]">
            <List size={26} weight="bold" />
          </button>
        </div>

      </div>
    </header>
  );
}

// Link con efecto de subrayado
function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link 
      href={href} 
      className="relative text-xs font-bold uppercase tracking-[0.15em] text-[#831843] hover:text-[#DB2777] transition-colors group"
    >
      {text}
      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#DB2777] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}