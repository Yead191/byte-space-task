"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseVideoPlayerProps {
  videoUrl: string;
  posterImage?: string;
  courseTitle: string;
  className?: string;
}

export function CourseVideoPlayer({
  videoUrl,
  posterImage = "/assets/course/thumnail.png",
  courseTitle,
  className,
}: CourseVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartPlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-3xl sm:rounded-4xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl group flex items-center justify-center",
        className || "aspect-16/10 sm:aspect-16/9"
      )}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterImage}
        controls={isPlaying}
        playsInline
        preload="metadata"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isPlaying
            ? "opacity-100"
            : "opacity-0 absolute inset-0 pointer-events-none"
        }`}
      />

      {!isPlaying && (
        <div
          onClick={handleStartPlay}
          className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleStartPlay();
            }
          }}
          aria-label={`Play preview for ${courseTitle}`}
        >
          <Image
            src={posterImage}
            alt={courseTitle}
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-103"
          />

          <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/45 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/65">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1 transition-transform group-hover:scale-105" />
          </div>
        </div>
      )}
    </div>
  );
}
