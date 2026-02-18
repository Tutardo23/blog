import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "wrubiu1d", // Tu ID real
  dataset: "production", // Asumimos que es production
  apiVersion: "2024-01-01",
  useCdn: false, // ESTO ES CLAVE: False para que no guarde memoria vieja
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}