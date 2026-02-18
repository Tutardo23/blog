"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { motion } from "framer-motion";

export default function PostGrid({ posts }: { posts: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }} // Efecto cascada
        >
          <Link href={`/blog/${post.slug}`} className="group block">
            {/* Contenedor Imagen con efecto Zoom */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              
              {/* Overlay rosa al hacer hover */}
              <div className="absolute inset-0 bg-[#DB2777] opacity-0 transition-opacity duration-300 group-hover:opacity-20 mix-blend-multiply" />
            </div>

            {/* Texto */}
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DB2777] mb-2">
                {post.categoria}
              </span>
              
              <h3 className="font-bebas text-4xl text-[#831843] group-hover:text-[#DB2777] transition-colors">
                {post.title}
              </h3>
              
              {/* Línea animada al hacer hover */}
              <div className="h-[2px] w-0 bg-[#DB2777] transition-all duration-300 group-hover:w-full mt-2" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}