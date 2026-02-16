import { client } from "@/lib/sanity";
import BlogPostView from "@/components/BlogPostView"; // <--- Importamos el componente visual nuevo

// Función para buscar datos (Server Side)
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

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center text-[#831843] bg-[#FFF5F7]">
      <p className="font-bebas text-3xl">Post no encontrado :(</p>
    </div>
  );

  // Le pasamos los datos al componente visual (Cliente)
  return <BlogPostView post={post} />;
}