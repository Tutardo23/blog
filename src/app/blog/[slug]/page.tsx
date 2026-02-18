import { client } from "@/lib/sanity";
import BlogPostView from "@/components/BlogPostView";
import MoreStories from "@/components/MoreStories";

export const dynamic = "force-dynamic"; // 🔥 Esto evita problemas de build

const query = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    body,
    _createdAt,
    "categoria": categories[0]->title
  }
`;

async function getPost(slug: string) {
  return await client.fetch(query, { slug });
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
