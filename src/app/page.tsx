import Hero from "@/components/Hero";
import AnalogStrip from "@/components/AnalogStrip";
import LatestPosts from "@/components/LatestPosts";
import { client } from "@/lib/sanity";

export const dynamic = "force-dynamic";

async function getPosts() {
  // Buscamos tanto 'Post' como 'post' por seguridad y aplanamos el slug
  const query = `*[_type == "Post" || _type == "post"] | order(_createdAt desc) {
    title,
    "slug": slug.current, 
    mainImage,
    "publishedAt": _createdAt,
    "categoria": categories[0]->title
  }`;
  
  // Usamos el cliente configurado con el dataset 'a-blog'
  return await client.fetch(query);
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="w-full overflow-hidden bg-[#FFF5F7]">
      <Hero />
      <AnalogStrip />
      {/* Ahora le pasamos los posts y ya no tira error de TypeScript */}
      <LatestPosts posts={posts} /> 
    </main>
  );
}