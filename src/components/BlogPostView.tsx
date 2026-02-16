"use client"; // <--- ESTO SOLUCIONA EL ERROR

import Link from "next/link";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { ArrowLeft, CalendarBlank, Tag, Sparkle } from "phosphor-react";
import { urlFor } from "@/lib/sanity";

// Configuración de estilos del texto (Marcador Felpa)
const myPortableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 font-serif text-xl leading-relaxed text-[#831843]/80">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 mb-6 font-bebas text-5xl text-[#831843]">
        {children}
      </h2>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <span className="relative inline-block px-1 mx-1 font-bold text-[#831843] z-10">
        <span className="absolute inset-0 bg-[#F472B6]/40 -skew-y-2 rounded-sm -z-10" />
        {children}
      </span>
    ),
    link: ({ children, value }) => (
      <a href={value.href} className="text-[#DB2777] underline decoration-wavy underline-offset-4 hover:text-[#831843]">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="relative my-10 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-[#831843]/10">
         <Image
           src={urlFor(value).url()}
           alt="Foto del post"
           fill
           className="object-cover"
         />
      </div>
    ),
  },
};

// Este componente recibe el "post" como propiedad
export default function BlogPostView({ post }: { post: any }) {
  return (
    <article className="min-h-screen w-full bg-[#FFF5F7] pb-20">
      
      {/* HEADER DE LA NOTA */}
      <div className="relative h-[60vh] w-full">
        {post.mainImage ? (
          <Image 
            src={urlFor(post.mainImage).url()} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority 
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-pink-200 to-[#FFF5F7]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF5F7] via-[#FFF5F7]/20 to-transparent" />
        
        <Link href="/" className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#831843] hover:bg-white transition-all shadow-sm">
           <ArrowLeft size={16} weight="bold" /> Volver
        </Link>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container mx-auto max-w-3xl px-6 -mt-32 relative z-10">
        
        <div className="rounded-[3rem] bg-white/80 backdrop-blur-xl shadow-xl ring-1 ring-white p-8 md:p-12 mb-10 text-center">
           <div className="flex justify-center gap-4 mb-6">
              {post.categoria && (
                <span className="flex items-center gap-1.5 rounded-full bg-[#FFE4E6] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#DB2777]">
                  <Tag size={12} weight="fill" /> {post.categoria}
                </span>
              )}
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#831843]/60">
                 <CalendarBlank size={12} weight="fill" />
                 {new Date(post.publishedAt).toLocaleDateString('es-AR', { dateStyle: 'long' })}
              </span>
           </div>

           <h1 className="font-bebas text-6xl md:text-8xl text-[#831843] leading-[0.85]">
             {post.title}
           </h1>
        </div>

        <div className="prose-lg">
           <PortableText value={post.body} components={myPortableTextComponents} />
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-[#DB2777]/40">
           <div className="h-px w-12 bg-current" />
           <Sparkle weight="fill" size={16} />
           <div className="h-px w-12 bg-current" />
        </div>

      </div>
    </article>
  );
}