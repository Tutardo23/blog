import CategoryHeader from "@/components/CategoryHeader";
import LatestPosts from "@/components/LatestPosts"; // Reutilizamos tu grilla
import { Coffee, Heart } from "phosphor-react";

export default function LifestylePage() {
  return (
    <div className="min-h-screen w-full bg-[#FFF5F7]">
      
      {/* 1. EL HEADER DE LA SECCIÓN */}
      <CategoryHeader 
        title="LIFESTYLE"
        subtitle="Rutinas & Bienestar"
        description="Pequeños rituales, recetas de café y consejos para vivir una vida más lenta y consciente."
        icon={Coffee} // Icono temático
        gradient="from-pink-400 to-orange-300" // Color temático (Rosa/Naranja para Lifestyle)
      />

      {/* 2. EL CONTENIDO (Grilla) */}
      {/* NOTA PARA MATI: 
         Cuando tengamos Sanity, acá le pasaremos un "filtro" al componente LatestPosts
         para que solo muestre cosas de 'lifestyle'.
         Por ahora, muestra todo el mock data.
      */}
      <div className="pb-20">
         <LatestPosts />
      </div>

    </div>
  );
}