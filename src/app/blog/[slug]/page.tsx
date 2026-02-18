import { client } from "@/lib/sanity";
import BlogPostView from "@/components/BlogPostView";
import MoreStories from "@/components/MoreStories";

// Función para buscar el post actual
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{title, mainImage, body, _createdAt, "categoria": categories[0]->title}`;
  
  const post = await client.fetch(query, { slug });
  return post;
}

// Página completa
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#831843] bg-[#FFF5F7]">
        <p className="font-bebas text-3xl">Post no encontrado :(</p>
      </div>
    );
  }

  return (
    <>
      <BlogPostView post={post} />
      <MoreStories currentSlug={slug} />
    </>
  );
}
