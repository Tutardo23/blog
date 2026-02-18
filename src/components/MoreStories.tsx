import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

async function getMorePosts() {
  const query = `*[_type == "Post" || _type == "post"] | order(_createdAt desc)[0...6] {
    title,
    "slug": slug.current,
    mainImage,
    "categoria": categories[0]->title
  }`;
  return await client.fetch(query);
}

export default async function MoreStories({ currentSlug }: { currentSlug: string }) {
  const posts = await getMorePosts();
  if (!posts || posts.length === 0) return null;

  return (
    <div className="relative w-full z-20">
      
      {/* TRANSICIÓN: Borde de Papel Rasgado (Blanco) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
        <svg
            className="relative block w-[calc(100%+2px)] h-[40px] md:h-[60px]"
            fill="#FFFFFF"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>


      <section className="bg-white pb-16 pt-8 border-b-[20px] border-white">
        <div className="container mx-auto px-6">
          
          {/* Encabezado */}
          <div className="flex items-center justify-between mb-8">
             <h2 className="font-bebas text-4xl text-[#831843]">
               Más historias
             </h2>
             
             {/* Indicador visual de scroll para móvil (SVG Manual para evitar error) */}
             <div className="md:hidden flex items-center gap-1 text-xs text-[#DB2777] font-bold uppercase tracking-widest animate-pulse">
                Desliza 
                {/* Flecha SVG manual */}
                <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
             </div>
          </div>

          {/* CARRUSEL SWIPE */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
            
            {posts.map((post: any) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`} 
                className="
                  group relative block flex-shrink-0 snap-center
                  w-[85vw] md:w-auto
                "
              >
                {/* Tarjeta */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50 mb-4 shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                   {post.mainImage && (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                   )}
                   {/* Etiqueta sobre la imagen */}
                   <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-[#DB2777]">
                      {post.categoria || "Blog"}
                   </div>
                </div>
                
                {/* Título */}
                <h3 className="font-bebas text-2xl leading-none text-[#4A4A4A] group-hover:text-[#831843] transition-colors line-clamp-2 pl-1">
                  {post.title}
                </h3>
              </Link>
            ))}

            {/* Espaciador final para móvil */}
            <div className="w-4 flex-shrink-0 md:hidden" />
          </div>

        </div>
      </section>
    </div>
  );
}