import { client } from "@/lib/sanity";
import BlogPostView from "@/components/BlogPostView";
import MoreStories from "@/components/MoreStories";

const query = `*[_type == "post" && slug.current == $slug][0]{title, mainImage, body, _createdAt, "categoria": categories[0]->title}`;

// 🔥 ESTO ES LO QUE FALTABA
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

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
    return <div>No encontrado</div>;
  }

  return (
    <>
      <BlogPostView post={post} />
      <MoreStories currentSlug={params.slug} />
    </>
  );
}
