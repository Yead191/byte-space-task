"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Logoipsum 1", icon: "❖ Logoipsum" },
  { name: "Logoipsum 2", icon: "✦ Logoipsum" },
  { name: "Logoipsum 3", icon: "⬡ Logoipsum" },
  { name: "Logoipsum 4", icon: "◈ Logoipsum" },
  { name: "Logoipsum 5", icon: "❂ Logoipsum" },
];

export function TrustedLogos() {
  return (
    <div className="w-full bg-white border-b border-slate-100 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest font-semibold text-slate-400 mb-6">
          Trusted by top institutions & over 100,000+ ambitious learners
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-20 opacity-70 hover:opacity-100 transition-opacity">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-2 text-slate-500 font-bold text-lg sm:text-xl tracking-tight grayscale hover:grayscale-0 hover:text-secondary transition-all cursor-pointer"
            >
              <span>{logo.icon}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
