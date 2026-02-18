import { client } from "@/lib/sanity";
import BlogPostView from "@/components/BlogPostView";
import MoreStories from "@/components/MoreStories";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  const query = `*[(_type == "post" || _type == "Post") && slug.current == $slug][0]{
    title,
    mainImage,
    body,
    _createdAt,
    "categoria": categories[0]->title
  }`;
  return await client.fetch(query, { slug });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>; // Definido como Promesa para Next 15
}) {
  const { slug } = await params; // Esperamos la resolución del slug

  if (!slug || slug === "undefined") {
    return <div className="py-20 text-center font-bebas text-3xl">Link no válido</div>;
  }

  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-bebas text-4xl text-[#831843]">Post no encontrado</h1>
        <p className="mt-4 font-serif italic text-[#831843]/60">
          Asegurate de generar el Slug y darle a Publish en Sanity.
        </p>
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