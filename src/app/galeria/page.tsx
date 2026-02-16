import CategoryHeader from "@/components/CategoryHeader";
import LatestPosts from "@/components/LatestPosts";
import { Camera } from "phosphor-react";

export default function GaleriaPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFF5F7]">
      
      <CategoryHeader 
        title="GALERÍA"
        subtitle="Archivo Visual"
        description="Una colección de momentos congelados en el tiempo. Analógico, digital y todo lo que hay en el medio."
        icon={Camera} 
        gradient="from-purple-400 to-indigo-400" // Color diferente (Violeta para fotos)
      />

      <div className="pb-20">
         <LatestPosts />
      </div>

    </div>
  );
}