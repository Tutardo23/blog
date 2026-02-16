import { client } from "@/lib/sanity";
import BlogPostView from "@/components/BlogPostView"; // El diseño de la nota
import MoreStories from "@/components/MoreStories";   // Las recomendaciones de abajo

// 1. ESTA ES LA FUNCIÓN QUE FALTABA (Busca el post actual)
async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      body,
      publishedAt,
      "categoria": categories[0]->title
    }
  `;
  const post = await client.fetch(query, { slug });
  return post;
}

// 2. LA PÁGINA COMPLETA
export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Buscamos los datos usando la función de arriba
  const post = await getPost(params.slug);

  // Si no existe, mostramos error
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#831843] bg-[#FFF5F7]">
        <p className="font-bebas text-3xl">Post no encontrado :(</p>
      </div>
    );
  }

  return (
    <> 
      {/* A. La Nota Principal (Visual) */}
      <BlogPostView post={post} />

      {/* B. Sección "Seguir Leyendo" (Sugerencias) */}
      <MoreStories currentSlug={params.slug} />
    </>
  );
}