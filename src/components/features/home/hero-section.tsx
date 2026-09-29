"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Sparkles, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";

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
    <section className="relative w-full bg-[#003BE2] overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32">
      {/* Decorative Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Decorative Glowing Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md border border-white/20 shadow-xs">
            <Sparkles className="w-4 h-4 text-brand-lime animate-pulse" />
            <span>Over 500+ New Industry Courses Added This Month</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Get Access to Hundreds <br className="hidden sm:inline" />
            <span className="relative inline-block">
              Courses Available
              <svg
                className="absolute -bottom-2 left-0 w-full text-brand-lime h-3"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q50,20 100,10"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Unlock your potential with expert-led courses and learn at your own pace with ByteSpace.
          </p>
        </div>

        {/* Floating Capsule Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-xl mx-auto mb-14 animate-fade-in-up delay-150"
        >
          <div className="relative flex items-center bg-white p-2 rounded-full shadow-2xl border-2 border-white/20 transition-all focus-within:ring-4 focus-within:ring-brand-lime/50">
            <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
            <Input
              type="text"
              placeholder="Search for courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 shadow-none focus-visible:ring-0 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base px-3 bg-transparent h-12"
            />
            <Button
              type="submit"
              variant="default"
              className="bg-brand-lime text-slate-950 font-bold hover:bg-[#c3ea15] rounded-full px-7 h-11 text-sm shadow-md transition-transform active:scale-95"
            >
              Search
            </Button>
          </div>
        </form>

        {/* Center Graphic & Floating Badges */}
        <div className="relative max-w-3xl mx-auto mt-4">
          {/* Floating Shape 1: Lime Pill / Ring (Left) */}
          <div className="absolute -left-6 sm:-left-16 top-12 z-10 hidden sm:block animate-float-slow">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[10px] border-brand-lime shadow-lg" />
          </div>

          {/* Floating Shape 2: White Cone/Triangle (Top Right) */}
          <div className="absolute -right-4 sm:-right-12 top-6 z-10 hidden sm:block animate-float-reverse">
            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-white border-r-[20px] border-r-transparent drop-shadow-lg transform rotate-12" />
          </div>

          {/* Floating Shape 3: Lime Squiggle (Bottom Left) */}
          <div className="absolute left-2 -bottom-6 z-10 hidden sm:block animate-pulse-scale">
            <svg className="w-16 h-16 text-brand-lime" viewBox="0 0 100 100" fill="currentColor">
              <path d="M10 50 Q 30 20, 50 50 T 90 50" stroke="currentColor" strokeWidth="16" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          {/* Main Visual Circle & Card Container */}
          <div className="relative mx-auto w-full max-w-lg aspect-square sm:aspect-[4/3] flex items-center justify-center">
            {/* Giant Lime Accent Backdrop Circle */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-lime shadow-2xl shadow-brand-lime/30 animate-scale-in" />

            {/* Student Avatar Visual (Representing Graphic) */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 bg-slate-900/10">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Student learning online"
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Floating Card Left: Explore Courses Badge */}
            <div className="absolute left-0 sm:-left-12 top-10 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 text-left animate-fade-in-left delay-300 animate-float-card-left">
              <div className="flex -space-x-2 overflow-hidden">
                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" fallback="U1" />
                <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" fallback="U2" />
                <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" fallback="U3" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Explore Courses</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-extrabold text-slate-800">4.9</span>
                  <span className="text-[10px] text-slate-500 font-medium">(12k+ enrolled)</span>
                </div>
              </div>
            </div>

            {/* Floating Card Right: Growing Page 55% */}
            <div className="absolute right-0 sm:-right-10 top-16 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-100 text-left min-w-[170px] animate-fade-in-right delay-400 animate-float-card-right">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-semibold text-slate-500">Growing progress</span>
                <TrendingUp className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="text-2xl font-black text-slate-900 tracking-tight">
                55%
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                <div className="bg-brand-blue h-full w-[55%] rounded-full transition-all duration-1000 ease-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

