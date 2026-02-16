import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "wrubiu1d", // <--- ¡Acá pusimos tu ID real!
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // false para ver los cambios al toque
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}