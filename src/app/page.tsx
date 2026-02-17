export const dynamic = "force-dynamic";
import Hero from "@/components/Hero";
import AnalogStrip from "@/components/AnalogStrip"; // La tira de cine
import LatestPosts from "@/components/LatestPosts";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      
      {/* 1. Portada Diario (V4) */}
      <Hero />
      
      {/* 2. Separador Visual (Cinta de fotos) */}
      <AnalogStrip />

      {/* 3. Grid Editorial (Noticias Masonry) */}
      <LatestPosts /> 
      
    </div>
  );
}