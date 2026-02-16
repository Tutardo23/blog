"use client"; // <--- ESTO ES LA CLAVE. Le dice a Next.js que esto es para el navegador.

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkle } from "phosphor-react";
import { urlFor } from "@/lib/sanity"; // Importamos solo el constructor de url

// Definimos qué forma tienen los datos que vamos a recibir
interface Post {
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  categoria: string;
}

export default function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug.current}
          href={`/blog/${post.slug.current}`}
          className="group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-[#831843]/5 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-1 aspect-square"
        >
          {/* IMAGEN REAL */}
          {post.mainImage && (
            <div className="absolute inset-0">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#831843]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80" />
            </div>
          )}

          {/* CONTENIDO */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
            <div className="flex justify-between items-start">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-2 text-center min-w-[3.5rem]">
                <span className="font-bebas text-2xl leading-none">
                  {new Date(post.publishedAt).getDate()}
                </span>
                <span className="block text-[9px] font-bold uppercase tracking-wider">
                   {new Date(post.publishedAt).toLocaleString('es-ES', { month: 'short' })}
                </span>
              </div>
            </div>

            <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
              {post.categoria && (
                <div className="inline-block px-2 py-0.5 mb-2 rounded bg-[#DB2777] text-[10px] font-bold uppercase tracking-widest">
                  {post.categoria}
                </div>
              )}
              <h3 className="font-bebas text-3xl leading-[0.9] mb-2 drop-shadow-md">
                {post.title}
              </h3>
              
              {/* Botón flecha decorativo */}
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowUpRight size={24} weight="bold" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}