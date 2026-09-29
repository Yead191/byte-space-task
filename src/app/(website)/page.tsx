import React from "react";
import { HeroSection } from "@/components/features/home/hero-section";
import { TrustedLogos } from "@/components/features/home/trusted-logos";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted Logos Ribbon */}
      <TrustedLogos />
      {/* Discover Your Passion Preview Section */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="blue"
            className="mb-4 font-bold text-xs uppercase tracking-wider"
          >
            Explore Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
            Explore top-rated courses across technology, design, marketing, and
            business. Start learning from industry leaders today.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto mb-12">
            {[
              "All Courses",
              "Design",
              "Coding & Software",
              "Marketing",
              "Business",
              "Audio & Music",
              "Data Science",
              "Photography",
            ].map((category, i) => (
              <button
                key={category}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  i === 0
                    ? "bg-brand-lime text-slate-950 shadow-md shadow-brand-lime/20 scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
