import GaleriaHeader from "@/components/headers/GaleriaHeader"; // El componente visual nuevo
import LatestPosts from "@/components/LatestPosts"; // El componente de servidor (datos)

export default function GaleriaPage() {
  return (
    <div className="min-h-screen w-full bg-[#FFF5F7]">
      
      {/* 1. Usamos el Wrapper Visual (Cliente) */}
      <GaleriaHeader />

      {/* 2. El contenido de Sanity (Servidor) */}
      <div className="pb-20">
         <LatestPosts />
      </div>

    </div>
  );
}