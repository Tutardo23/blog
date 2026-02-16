import { client } from "@/lib/sanity";
import PostGrid from "./PostGrid";
import SectionHeader from "./SectionHeader";

// Traemos TODO (sin límite, ordenado por lo más nuevo)
async function getAllPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      publishedAt,
      "categoria": categories[0]->title
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function LatestPosts() {
  const posts = await getAllPosts();

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