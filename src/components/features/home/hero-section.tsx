import Image from "next/image";
import { HeroSearch } from "./hero-search";
import { HeroShapes } from "./hero-shapes";
import { HeroBadges } from "./hero-badges";

export function HeroSection() {
  return (
    <section className="relative w-full bg-brand-blue overflow-hidden pt-24 sm:pt-32 lg:pt-36 xl:pt-24 2xl:pt-48 pb-0 xl:h-screen xl:max-h-screen xl:flex xl:flex-col xl:justify-between">
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

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center xl:flex-1 xl:flex xl:flex-col xl:justify-between w-full">
        <div>
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-5xl 2xl:text-[72px] text-white tracking-tight leading-[1.12] mb-3 sm:mb-5 xl:mb-3 font-semibold">
              Get Access to Hundreds <br />
              Courses Available
            </h1>

            <p className="text-sm sm:text-base lg:text-[17px] xl:text-sm 2xl:text-base text-white/85 font-normal max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 xl:mb-4">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>

          <HeroSearch />
        </div>

        <div className="relative mx-auto w-full max-w-4xl flex items-end justify-center pt-2 xl:pt-0 xl:mt-auto">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-85 sm:w-140 md:w-170 lg:w-205 xl:w-155 2xl:w-185 pointer-events-none z-0">
            <Image
              src="/assets/hero/bg-ellipse.png"
              alt=""
              width={820}
              height={330}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <div className="relative z-10 w-72.5 sm:w-105 md:w-125 lg:w-140 xl:w-105 2xl:w-122.5 mx-auto animate-scale-in">
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
