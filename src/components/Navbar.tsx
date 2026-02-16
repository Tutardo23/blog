"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { List, InstagramLogo, X, ArrowUpRight, BookOpen, User, Archive } from "phosphor-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Bloqueo de scroll para evitar que la página se mueva de fondo
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header className="sticky top-0 z-[1000] h-20 w-full border-b border-[#831843]/10 bg-[#FFF5F7]/90 backdrop-blur-xl">
        <div className="container mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col" onClick={closeMenu}>
            <span className="font-bebas text-3xl tracking-wide text-[#831843]">
              CATALINA A.M.
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#DB2777]">
              Diario Personal
            </span>
          </Link>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            <NavLink href="/" text="El Diario" />
            <NavLink href="/about" text="Sobre Mí" />
          </nav>

          {/* Derecha */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" className="hidden sm:block text-[#831843]/50 hover:text-[#DB2777]">
              <InstagramLogo size={22} />
            </a>
            
            {/* BOTÓN HAMBURGUESA (Solo se ve si el menú está CERRADO) */}
            {!isOpen && (
              <button 
                onClick={toggleMenu} 
                className="flex items-center gap-2 rounded-full bg-[#831843] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white md:hidden"
              >
                Menú <List size={18} weight="bold" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* --- MENÚ OVERLAY FULL SCREEN --- */}
      <div 
        className={`
          fixed inset-0 z-[2000] flex flex-col bg-[#FFF5F7] transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"}
        `}
      >
        {/* Cabecera Interna del Menú (Para el botón de Cerrar) */}
        <div className="flex h-20 w-full items-center justify-between px-6 border-b border-[#831843]/5">
           <span className="font-bebas text-xl text-[#831843]/40 tracking-widest uppercase">Navegación</span>
           <button 
             onClick={closeMenu} 
             className="flex items-center gap-2 rounded-full bg-[#DB2777] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg"
           >
             Cerrar <X size={18} weight="bold" />
           </button>
        </div>

        {/* Contenido del Menú */}
        <div className="flex flex-col md:flex-row h-full overflow-y-auto">
          
          {/* LADO IZQUIERDO: Links Principales */}
          <div className="flex flex-col justify-center p-10 md:w-1/2 border-b md:border-b-0 md:border-r border-[#831843]/5">
            <nav className="flex flex-col gap-6">
              <MobileLink href="/" text="El Diario" icon={BookOpen} onClick={closeMenu} />
              <MobileLink href="/about" text="Sobre Mí" icon={User} onClick={closeMenu} />
            </nav>
          </div>

          {/* LADO DERECHO: Explorar (A dónde ir) */}
          <div className="flex flex-col justify-center p-10 md:w-1/2 bg-[#831843]/5">
            <div className="mb-6 flex items-center gap-2 text-[#DB2777]">
              <Archive size={18} weight="fill" />
              <span className="text-xs font-bold uppercase tracking-widest">Explorar el Archivo</span>
            </div>
            
            <div className="flex flex-col gap-4">
              <Link href="/" onClick={closeMenu} className="group flex items-center justify-between border-b border-[#831843]/10 pb-2">
                <span className="font-serif italic text-[#831843]/70 transition-colors group-hover:text-[#DB2777]">Ver todos los posteos</span>
                <ArrowUpRight className="text-[#831843]/20" />
              </Link>
              <Link href="/" onClick={closeMenu} className="group flex items-center justify-between border-b border-[#831843]/10 pb-2">
                <span className="font-serif italic text-[#831843]/70 transition-colors group-hover:text-[#DB2777]">Momentos destacados</span>
                <ArrowUpRight className="text-[#831843]/20" />
              </Link>
            </div>

            <div className="mt-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#831843]/30">Social</span>
              <div className="mt-4 flex gap-4">
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-[#831843]/10 text-[#831843]">
                  <InstagramLogo size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

// Subcomponente: Link Desktop
function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="text-xs font-bold uppercase tracking-[0.2em] text-[#831843] hover:text-[#DB2777] transition-all relative group">
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#DB2777] transition-all group-hover:w-full" />
    </Link>
  );
}

// Subcomponente: Link Mobile Pro
function MobileLink({ href, text, icon: Icon, onClick }: any) {
  return (
    <Link href={href} onClick={onClick} className="group flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#831843]/5 text-[#831843] transition-colors group-hover:bg-[#DB2777] group-hover:text-white">
        <Icon size={24} />
      </div>
      <span className="font-bebas text-5xl text-[#831843] uppercase transition-colors group-hover:text-[#DB2777]">
        {text}
      </span>
    </Link>
  );
}