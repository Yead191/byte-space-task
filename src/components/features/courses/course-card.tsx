import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Course } from "@/types";

interface CourseCardProps {
  course: Course;
  priority?: boolean;
}

const DEFAULT_AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
];

export function CourseCard({ course, priority = false }: CourseCardProps) {
  const avatars =
    course.studentAvatars && course.studentAvatars.length >= 4
      ? course.studentAvatars.slice(0, 4)
      : DEFAULT_AVATARS;

  return (
    <Link
      href={`/courses/${course.slug || course.id}`}
      className="bg-white rounded-4xl p-4 sm:p-4.5 border border-[#E5E7EB] hover:shadow-xl hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
    >
      {/* Thumbnail with floating frosted meta pills */}
      <div className="relative aspect-16/10 w-full rounded-[22px] overflow-hidden bg-slate-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />

        {/* 3 Floating Pill Badges */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-1.5 sm:gap-2">
          <div className="bg-white/50 backdrop-blur-md text-[#3F3F46] text-[11px] sm:text-xs font-medium px-3 sm:px-3.5 py-1.5 rounded-full shadow-xs whitespace-nowrap">
            {course.lessonsCount} Lessons
          </div>
          <div className="bg-white/50 backdrop-blur-md text-[#3F3F46] text-[11px] sm:text-xs font-medium px-3 sm:px-3.5 py-1.5 rounded-full shadow-xs whitespace-nowrap">
            {course.duration}
          </div>
          <div className="bg-white/50 backdrop-blur-md text-[#3F3F46] text-[11px] sm:text-xs font-medium px-3 sm:px-3.5 py-1.5 rounded-full shadow-xs whitespace-nowrap">
            {course.commentsCount} Comments
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="pt-4 px-1 pb-1 flex flex-col flex-1 justify-between">
        {/* Title, Rating & Instructor */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3
              title={course.title}
              className="text-slate-950 font-bold text-lg sm:text-[19px] tracking-tight line-clamp-1 group-hover:text-brand-blue transition-colors font-heading"
            >
              {course.title}
            </h3>

            <div className="flex items-center gap-1.5 shrink-0 text-[#71717A] font-medium text-base">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="w-4 h-4 fill-[#CBD5E1] text-[#CBD5E1] stroke-none" />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#71717A] mt-1">
            by{" "}
            <span className="text-[#0B44C4] font-medium group-hover:underline">
              {course.instructor}
            </span>
          </p>
        </div>

        {/* Level & Enrolled Student Avatars */}
        <div className="mt-4 sm:mt-5 flex items-center justify-start gap-2">
          {/* Level Pill with 3-bar indicator */}
          <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#F4F4F5] text-[#3F3F46] text-xs sm:text-[13px] font-medium">
            <svg
              className="w-3.5 h-3.5 text-[#3F3F46] shrink-0"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <rect x="2" y="9" width="2.5" height="5" rx="1.2" />
              <rect x="6.75" y="4" width="2.5" height="10" rx="1.2" />
              <rect x="11.5" y="7" width="2.5" height="7" rx="1.2" />
            </svg>
            {course.level}
          </span>

          {/* Overlapping Avatars + Lime Count Badge */}
          <div className="flex items-center -space-x-2">
            {avatars.map((avatar, idx) => (
              <div
                key={idx}
                className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white shadow-xs"
              >
                <Image
                  src={avatar}
                  alt="Student"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-lime text-slate-950 text-[11px] sm:text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs shrink-0">
              {course.enrolledCount || "26+"}
            </div>
          </div>
        </div>

        {/* Price & Duration */}
        <div className="mt-4 sm:mt-5 flex items-baseline">
          <span className="text-[#0B44C4] font-extrabold text-2xl tracking-tight leading-none">
            ${course.price}
          </span>
          <span className="text-[#71717A] text-xs sm:text-[13px] font-normal ml-1">
            /{course.period || "lifetime"}
          </span>
        </div>
      </div>
    </Link>
  );
}
