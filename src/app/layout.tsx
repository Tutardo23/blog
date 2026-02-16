import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

// Importamos los componentes globales
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Catalina Martini · Diario Visual",
  description: "Lifestyle, Moda y Fotografía.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${bebas.variable}`}>
      <body className="relative min-h-screen flex flex-col justify-between selection:bg-pink-200 selection:text-pink-900 bg-[#FFF5F7]">
        
        {/* Navbar Flotante (Pastilla) */}
        <Navbar />

        {/* Contenido Principal */}
        <main className="flex-grow w-full relative z-10">
          {children}
        </main>

        {/* Footer con firma TORX */}
        <Footer />
        
      </body>
    </html>
  );
}