import LatestPosts from "@/components/LatestPosts";
import { client } from "@/lib/sanity";

// Esto asegura que la galería siempre muestre lo último sin caché viejo
export const dynamic = "force-dynamic";

async function getPosts() {
  // Usamos la misma query que en la home para traer todo
  const query = `*[_type == "Post" || _type == "post"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    mainImage,
    "publishedAt": _createdAt,
    "categoria": categories[0]->title
  }`;
  return await client.fetch(query);
}

export default async function GaleriaPage() {
  // 1. Buscamos los posts en el servidor
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-[#FFF0F5] pt-32"> {/* Fondo rosa suave y espacio arriba */}
      
      {/* Título de la página */}
      <div className="container mx-auto px-6 mb-12 text-center">
         <span className="text-xs font-bold uppercase tracking-widest text-[#DB2777]">
            Archivo
         </span>
         <h1 className="font-bebas text-6xl md:text-8xl text-[#831843] mt-2">
            Galería de Historias
         </h1>
      </div>

      {/* 2. El contenido de Sanity (Ahora le pasamos los posts) */}
      <div className="pb-20">
         <LatestPosts posts={posts} /> {/* <--- ACÁ ESTABA EL ERROR, AHORA SÍ TIENE PROPS */}
      </div>

    </div>
  );
}