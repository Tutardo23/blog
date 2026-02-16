import LifestyleHeader from "@/components/headers/LifestyleHeader"; // El nuevo componente
import LatestPosts from "@/components/LatestPosts"; // El de los datos

export default function LifestylePage() {
  return (
    <div className="min-h-screen w-full bg-[#FFF5F7]">
      
      {/* 1. Usamos el Wrapper Visual */}
      <LifestyleHeader />

      {/* 2. El contenido de Sanity */}
      <div className="pb-20">
         <LatestPosts />
      </div>

    </div>
  );
}