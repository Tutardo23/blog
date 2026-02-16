"use client"; // <--- LA CLAVE

import CategoryHeader from "@/components/CategoryHeader";
import { Coffee } from "phosphor-react"; // Acá sí se puede

export default function LifestyleHeader() {
  return (
    <CategoryHeader 
      title="LIFESTYLE"
      subtitle="Rutinas & Bienestar"
      description="Pequeños rituales, recetas de café y consejos para vivir una vida más lenta y consciente."
      icon={Coffee} 
      gradient="from-pink-400 to-orange-300"
    />
  );
}