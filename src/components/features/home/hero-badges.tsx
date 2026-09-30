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
      <div className="absolute left-2 sm:left-6 lg:left-40 top-[32%] sm:top-[28%] z-20 bg-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-xl border border-slate-100/90 text-left animate-fade-in-left delay-300 animate-float-card-left">
        <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">
          UI/UX Design
        </p>
        <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium mt-0.5">
          200 Courses &bull; 1000+ Students
        </p>
      </div>

      <div className="absolute right-2 sm:right-6 lg:right-16 top-[34%] sm:top-[36%] z-20 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-100/90 text-left min-w-32 sm:min-w-40 animate-fade-in-right delay-400 animate-float-card-right">
        <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500">
          Learning Progress
        </p>
        <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight my-0.5">
          55%
        </p>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
          <div className="bg-brand-lime h-full w-[55%] rounded-full" />
        </div>
      </div>

      <div className="absolute left-4 sm:left-12 lg:left-24 bottom-6 sm:bottom-12 z-20 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-100/90 text-left animate-fade-in-up delay-400">
        <p className="text-[11px] sm:text-xs font-bold text-slate-900">
          Happy Students
        </p>
        <div className="flex items-center gap-1 mt-0.5 mb-2">
          <span className="text-[10px] sm:text-[11px] font-bold text-slate-700">
            4.5 (240)
          </span>
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
        </div>
        <div className="flex items-center -space-x-1.5">
          {studentAvatars.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Enrolled student ${index + 1}`}
              width={28}
              height={28}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover"
            />
          ))}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-lime text-slate-950 text-[9px] sm:text-[10px] font-black flex items-center justify-center border-2 border-white shrink-0">
            2K+
          </div>
        </div>
      </div>
    </>
  );
}
