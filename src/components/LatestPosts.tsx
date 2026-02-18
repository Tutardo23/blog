import { client } from "@/lib/sanity";
import PostGrid from "./PostGrid";
import SectionHeader from "./SectionHeader";

// Traemos TODO (sin límite, ordenado por lo más nuevo)
async function getPosts() {
  // Esta consulta es simple: solo pide título y slug si es que existe
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    mainImage,
    publishedAt
  }`;
  
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error al traer posts:", error);
    return [];
  }
}
export default async function LatestPosts() {
  const posts = await getPosts();

  return (
    <section className="relative w-full px-4 pb-24 pt-12 min-h-screen">
      <div className="container mx-auto max-w-7xl"> {/* Ancho máximo más grande */}
        
        {/* Título General */}
        <div className="mb-12 border-b border-[#831843]/10 pb-6">
           <SectionHeader /> 
           <p className="mt-4 max-w-2xl text-lg text-[#831843]/60 font-serif italic">
             "Un espacio sin etiquetas. Aquí encontrarás todo lo que pasa por mi mente y mi lente."
           </p>
        </div>

        {/* El Feed Infinito */}
        <PostGrid posts={posts} />

        {/* Mensaje final sutil cuando no hay más */}
        <div className="mt-20 text-center">
           <span className="text-xs font-bold uppercase tracking-widest text-[#831843]/30">
             Fin de las historias por hoy
           </span>
        </div>

      </div>
    </section>
  );
}