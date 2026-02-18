import { client } from "@/lib/sanity";
import BlogPostView from "@/components/BlogPostView";
import MoreStories from "@/components/MoreStories";

// 🔥 Genera los slugs para el build estático
export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`
  );

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

// 🔥 Query dinámica SIN $slug (evita error en build)
function getPostQuery(slug: string) {
  return `*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    mainImage,
    body,
    _createdAt,
    "categoria": categories[0]->title
  }`;
}

async function getPost(slug: string) {
  const query = getPostQuery(slug);
  return await client.fetch(query);
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

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
      <MoreStories currentSlug={params.slug} />
    </>
  );
}
