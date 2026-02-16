import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { ArrowRight } from "phosphor-react";

// Busca 3 posts que NO sean el actual
async function getMoreStories(currentSlug: string) {
  const query = `
    *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
      title,
      slug,
      mainImage,
      publishedAt
    }
  `;
  return await client.fetch(query, { slug: currentSlug });
}

export default async function MoreStories({ currentSlug }: { currentSlug: string }) {
  const posts = await getMoreStories(currentSlug);

  if (!posts || posts.length === 0) return null;

  return (
    <section className="w-full border-t border-[#831843]/10 bg-white py-16">
      <div className="container mx-auto max-w-6xl px-6">
        
        <h3 className="mb-8 font-bebas text-4xl text-[#831843]">
          SEGUIR LEYENDO...
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link 
              key={post.slug.current} 
              href={`/blog/${post.slug.current}`}
              className="group flex flex-col gap-4"
            >
              {/* Foto */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Título */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DB2777]">
                  {new Date(post.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                </span>
                <h4 className="mt-1 font-bebas text-2xl leading-none text-[#831843] group-hover:underline decoration-pink-400 decoration-2 underline-offset-4">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}