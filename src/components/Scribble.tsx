"use client";

import { motion } from "framer-motion";

export default function Scribble({ children, color = "#F472B6" }: { children: React.ReactNode, color?: string }) {
  return (
    <span className="relative inline-block z-10 mx-1">
      <span className="relative z-20 text-inherit">{children}</span>
      <svg
        className="absolute inset-0 -z-10 h-full w-full top-1 left-0 scale-110 opacity-60"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 Q50,40 100,60" 
          fill="transparent"
          stroke={color}
          strokeWidth="60"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "circOut" }}
        />
      </svg>
    </span>
  );
}