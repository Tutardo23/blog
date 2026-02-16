import { client } from "@/lib/sanity";
import PostGrid from "./PostGrid";      // Tu grilla de posts
import SectionHeader from "./SectionHeader"; // El título nuevo

// Función para buscar datos (Server Side)
async function getPosts() {
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
  const posts = await getPosts();

  return (
    <section className="relative w-full px-4 pb-24 pt-12">
      <div className="container mx-auto max-w-6xl pl-0 lg:pl-12">
        
        {/* 1. Usamos el Header visual (Cliente) */}
        <SectionHeader />

        {/* 2. Pasamos los datos a la Grilla (Cliente) */}
        <PostGrid posts={posts} />

      </div>
    </section>
  );
}