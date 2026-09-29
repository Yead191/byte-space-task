import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces",
];

export function HeroBadges() {
  return (
    <>
      <div className="absolute left-2 sm:left-6 lg:left-14 top-[32%] sm:top-[34%] z-20 bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl border border-slate-100/90 text-left animate-fade-in-left delay-300 animate-float-card-left">
        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
          UI/UX Design
        </p>
        <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
          200 Courses &bull; 1000+ Students
        </p>
      </div>

      <div className="absolute right-2 sm:right-6 lg:right-16 top-[34%] sm:top-[36%] z-20 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100/90 text-left min-w-37.5 sm:min-w-47.5 animate-fade-in-right delay-400 animate-float-card-right">
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

      <div className="absolute left-4 sm:left-12 lg:left-24 bottom-6 sm:bottom-12 z-20 bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-100/90 text-left animate-fade-in-up delay-400">
        <p className="text-xs font-bold text-slate-900">Happy Students</p>
        <div className="flex items-center gap-1.5 mt-0.5 mb-2.5">
          <span className="text-xs font-bold text-slate-700">4.5 (240)</span>
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        </div>
        <div className="flex items-center -space-x-2">
          {studentAvatars.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Enrolled student ${index + 1}`}
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
            />
          ))}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-lime text-slate-950 text-[10px] sm:text-xs font-black flex items-center justify-center border-2 border-white shrink-0">
            2K+
          </div>
        </div>
      </div>
    </>
  );
}
