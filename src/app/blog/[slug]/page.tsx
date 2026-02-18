import { client } from "@/lib/sanity";
import BlogPostView from "@/components/BlogPostView";
import MoreStories from "@/components/MoreStories";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    mainImage,
    body,
    _createdAt,
    "categoria": categories[0]->title
  }`;

  return await client.fetch(query);
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  if (!params?.slug) {
    return <div>No slug</div>;
  }

  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post no encontrado :(</div>;
  }

  return (
    <>
      <BlogPostView post={post} />
      <MoreStories currentSlug={params.slug} />
    </>
  );
}
