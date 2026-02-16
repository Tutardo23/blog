import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"; // Ojo acá

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, 
});

// CAMBIO CLAVE: Usamos la función directa
const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}