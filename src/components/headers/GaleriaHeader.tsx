"use client"; // <--- ESTO ES LO QUE ARREGLA EL ERROR

import CategoryHeader from "@/components/CategoryHeader";
import { Camera } from "phosphor-react"; // Acá sí podemos importar iconos

export default function GaleriaHeader() {
  return (
    <CategoryHeader 
      title="GALERÍA"
      subtitle="Archivo Visual"
      description="Una colección de momentos congelados en el tiempo. Analógico, digital y todo lo que hay en el medio."
      icon={Camera} 
      gradient="from-purple-400 to-indigo-400"
    />
  );
}