"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Star } from "lucide-react";

export function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative w-full bg-brand-blue overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-0">
      {/* Precision Background Grid Pattern matching Figma */}
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

      {/* =========================================================================
          3D Floating Assets (Positioned to match Figma Screenshot)
         ========================================================================= */}

      {/* 1. Left-Top: Lime Coil (left-top.svg) */}
      <div className="absolute -left-10 sm:-left-8 lg:-left-4 top-16 sm:top-24 w-32 sm:w-48 lg:w-64 z-10 pointer-events-none animate-float-slow">
        <Image
          src="/assets/hero/left-top.svg"
          alt="Decorative Lime Coil"
          width={266}
          height={387}
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* 2. Left-Middle: White Squiggle (left-middle.svg) */}
      <div className="absolute left-4 sm:left-14 lg:left-24 top-[44%] sm:top-[42%] w-20 sm:w-28 lg:w-36 z-10 pointer-events-none animate-pulse-scale">
        <Image
          src="/assets/hero/left-middle.svg"
          alt="Decorative White Squiggle"
          width={177}
          height={176}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* 3. Left-Bottom: White Torus (left-bottom.svg) */}
      <div className="absolute -left-10 sm:-left-8 lg:left-2 bottom-4 sm:bottom-8 lg:bottom-12 w-40 sm:w-56 lg:w-72 z-10 pointer-events-none animate-float-reverse">
        <Image
          src="/assets/hero/left-bottom.svg"
          alt="Decorative White Torus"
          width={346}
          height={343}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 4. Right-Top: 3D Lime Cylinder */}
      <div className="absolute -right-8 sm:-right-6 lg:-right-2 top-14 sm:top-20 w-36 sm:w-52 lg:w-64 z-10 pointer-events-none animate-float-slow">
        <svg
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl transform rotate-[15deg]"
        >
          <defs>
            <linearGradient id="cylinderBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C4EE15" />
              <stop offset="40%" stopColor="#D4FB20" />
              <stop offset="80%" stopColor="#E2FF4A" />
              <stop offset="100%" stopColor="#A8CE08" />
            </linearGradient>
            <linearGradient
              id="cylinderCap"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#E8FF66" />
              <stop offset="100%" stopColor="#C4EE15" />
            </linearGradient>
          </defs>
          {/* Cylinder 3D body */}
          <path
            d="M 30,50 L 30,170 C 30,205 170,205 170,170 L 170,50 Z"
            fill="url(#cylinderBody)"
          />
          {/* Top Ellipse Cap */}
          <ellipse cx="100" cy="50" rx="70" ry="32" fill="url(#cylinderCap)" />
          {/* Bottom curve rim */}
          <ellipse
            cx="100"
            cy="170"
            rx="70"
            ry="32"
            fill="none"
            stroke="#9DBD08"
            strokeWidth="3"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* 5. Right-Middle: 3D White Pyramid / Tetrahedron */}
      <div className="absolute right-6 sm:right-16 lg:right-28 top-[42%] sm:top-[40%] w-24 sm:w-36 lg:w-44 z-10 pointer-events-none animate-float-reverse">
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl transform rotate-[-8deg]"
        >
          <defs>
            <linearGradient id="pyrFront" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="pyrSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="pyrBottom" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
          </defs>
          {/* Facet 1 */}
          <polygon points="80,15 20,125 95,145" fill="url(#pyrFront)" />
          {/* Facet 2 */}
          <polygon points="80,15 95,145 150,95" fill="url(#pyrSide)" />
          {/* Bottom shadow base */}
          <polygon
            points="20,125 95,145 150,95"
            fill="url(#pyrBottom)"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* 6. Right-Bottom: 3D White Vertical Squiggle */}
      <div className="absolute right-2 sm:right-8 lg:right-14 bottom-4 sm:bottom-8 lg:bottom-12 w-24 sm:w-36 lg:w-44 z-10 pointer-events-none animate-pulse-scale">
        <div className="transform rotate-90 scale-x-[-1]">
          <Image
            src="/assets/hero/left-middle.svg"
            alt="Decorative White Spring"
            width={177}
            height={176}
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* =========================================================================
          Hero Content (Headline, Subtitle, Search)
         ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
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

        {/* Capsule Search Bar and Search Button */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto mb-10 sm:mb-14 animate-fade-in-up delay-150"
        >
          {/* Search Pill Input */}
          <div className="w-full sm:w-auto flex items-center bg-white px-5 py-3 rounded-full shadow-xl border border-white/20 transition-all focus-within:ring-4 focus-within:ring-brand-lime/40">
            <Search className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-0 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none w-full sm:w-64 md:w-72"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-brand-lime text-slate-950 font-bold px-8 py-3 rounded-full text-sm hover:bg-[#c3ea15] transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* =========================================================================
            Center Visual Stage: Lime Arch + Hero Man + 3 Floating Badges
           ========================================================================= */}
        <div className="relative mx-auto w-full max-w-4xl flex items-end justify-center pt-4">
          {/* Lime Green Ellipse / Arch Backdrop */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[560px] md:w-[680px] lg:w-[820px] pointer-events-none z-0">
            <Image
              src="/assets/hero/bg-ellipse.png"
              alt="Lime background arch"
              width={820}
              height={330}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Hero Student Image */}
          <div className="relative z-10 w-[290px] sm:w-[420px] md:w-[500px] lg:w-[560px] mx-auto animate-scale-in">
            <Image
              src="/assets/hero/hero-man.png"
              alt="Happy student with headphones and laptop"
              width={560}
              height={500}
              className="w-full h-auto object-contain mx-auto select-none pointer-events-none"
              priority
            />
          </div>

          {/* Badge 1 (Left): "UI/UX Design" */}
          <div className="absolute left-2 sm:left-6 lg:left-14 top-[32%] sm:top-[34%] z-20 bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl border border-slate-100/90 text-left animate-fade-in-left delay-300 animate-float-card-left">
            <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
              UI/UX Design
            </p>
            <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          {/* Badge 2 (Right): "Learning Progress 55%" */}
          <div className="absolute right-2 sm:right-6 lg:right-16 top-[34%] sm:top-[36%] z-20 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100/90 text-left min-w-[150px] sm:min-w-[190px] animate-fade-in-right delay-400 animate-float-card-right">
            <p className="text-[11px] sm:text-xs font-semibold text-slate-500">
              Learning Progress
            </p>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight my-0.5 sm:my-1">
              55%
            </p>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-1 sm:mt-1.5">
              <div className="bg-brand-lime h-full w-[55%] rounded-full" />
            </div>
          </div>

          {/* Badge 3 (Bottom-Left): "Happy Students" with Avatars */}
          <div className="absolute left-4 sm:left-12 lg:left-24 bottom-6 sm:bottom-12 z-20 bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-100/90 text-left animate-fade-in-up delay-400">
            <p className="text-xs font-bold text-slate-900">Happy Students</p>
            <div className="flex items-center gap-1.5 mt-0.5 mb-2.5">
              <span className="text-xs font-bold text-slate-700">
                4.5 (240)
              </span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <div className="flex items-center -space-x-2">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces"
                alt="Student 1"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces"
                alt="Student 2"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&h=80&fit=crop&crop=faces"
                alt="Student 3"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces"
                alt="Student 4"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces"
                alt="Student 5"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-lime text-slate-950 text-[10px] sm:text-xs font-black flex items-center justify-center border-2 border-white shrink-0">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
