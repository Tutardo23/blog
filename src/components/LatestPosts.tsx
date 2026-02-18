import PostGrid from "./PostGrid";
import SectionHeader from "./SectionHeader";

// Definimos qué tipo de datos esperamos recibir
interface LatestPostsProps {
  posts: any[];
}

// Eliminamos el fetch de aquí adentro porque ahora lo hace el padre (page.tsx)
export default function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section className="relative w-full px-4 pb-24 pt-12 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Título General */}
        <div className="mb-12 border-b border-[#831843]/10 pb-6">
           <SectionHeader /> 
           <p className="mt-4 max-w-2xl text-lg text-[#831843]/60 font-serif italic">
             "Un espacio sin etiquetas. Aquí encontrarás todo lo que pasa por mi mente y mi lente."
           </p>
        </div>

        {/* El Feed con los datos que llegan por props */}
        <PostGrid posts={posts} />

        {/* Mensaje final */}
        <div className="mt-20 text-center">
           <span className="text-xs font-bold uppercase tracking-widest text-[#831843]/30">
             Fin de las historias por hoy
           </span>
        </div>

      </div>
    </section>
  );
}