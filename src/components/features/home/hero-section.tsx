import React from "react";
import Image from "next/image";
import { HeroSearch } from "./hero-search";
import { HeroShapes } from "./hero-shapes";
import { HeroBadges } from "./hero-badges";

export function HeroSection() {
  return (
    <section className="relative w-full bg-brand-blue overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-0">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
        }}
      />

      <HeroShapes />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-white tracking-tight leading-[1.12] mb-5">
            Get Access to Hundreds <br />
            Courses Available
          </h1>

          <p className="text-sm sm:text-base lg:text-[17px] text-white/85 font-normal max-w-2xl mx-auto leading-relaxed mb-9">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        <HeroSearch />

        <div className="relative mx-auto w-full max-w-4xl flex items-end justify-center pt-4">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-85 sm:w-140 md:w-170 lg:w-205 pointer-events-none z-0">
            <Image
              src="/assets/hero/bg-ellipse.png"
              alt=""
              width={820}
              height={330}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <div className="relative z-10 w-72.5 sm:w-105 md:w-125 lg:w-140 mx-auto animate-scale-in">
            <Image
              src="/assets/hero/hero-man.png"
              alt="Happy student with headphones and laptop"
              width={560}
              height={500}
              className="w-full h-auto object-contain mx-auto select-none pointer-events-none"
              priority
            />
          </div>

          <HeroBadges />
        </div>
      </div>
    </section>
  );
}
