import React from "react";
import Link from "next/link";

export function NotFoundView() {
  return (
    <section className="relative w-full bg-brand-blue min-h-[calc(100vh-80px)] lg:min-h-screen flex items-center justify-center pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 text-center overflow-hidden">
      {/* 96px grid layout background matching screenshot */}
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

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center justify-center py-6 sm:py-12">
        {/* Giant 404 Number on top */}
        <div className="select-none pointer-events-none animate-float-slow">
          <span
            className="font-extrabold text-[140px] sm:text-[220px] md:text-[300px] lg:text-[360px] xl:text-[400px] tracking-tight leading-none bg-linear-to-b from-brand-lime via-[#92C92C]/85 to-[#386D22]/40 bg-clip-text text-transparent block font-heading"
            aria-hidden="true"
          >
            404
          </span>
        </div>

        {/* Title placed directly at the bottom of 404, in 2 lines, font-semibold */}
        <div className="-mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 flex flex-col items-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold text-white tracking-tight leading-[1.12] font-heading animate-fade-in-up text-center">
            The page you are looking <br />
            for doesn&apos;t exist
          </h1>

          <p className="text-sm sm:text-base text-white/85 font-normal max-w-xl mx-auto mt-5 sm:mt-6 leading-relaxed animate-fade-in-up delay-150">
            Try to use a correct url or go back to homepage to start again
          </p>

          <div className="mt-6 sm:mt-8 animate-fade-in-up delay-200">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-brand-lime text-slate-950 font-bold px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base hover:bg-[#c3ea15] transition-all duration-300 shadow-xl hover:shadow-brand-lime/30 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
