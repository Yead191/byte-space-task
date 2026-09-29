import React from "react";

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
            <div
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in-up flex items-center gap-2 text-slate-500 font-bold text-lg sm:text-xl tracking-tight grayscale hover:grayscale-0 hover:text-secondary transition-all cursor-pointer hover:scale-105 duration-200"
            >
              <span>{logo.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

