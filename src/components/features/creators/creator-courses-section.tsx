"use client";

import React, { useState } from "react";
import { Filter, BarChart2, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { Course } from "@/types";
import { CourseCard } from "@/components/features/courses/course-card";

interface CreatorCoursesSectionProps {
  courses: Course[];
}

export function CreatorCoursesSection({ courses }: CreatorCoursesSectionProps) {
  const [selectedSort, setSelectedSort] = useState("relevant");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const filteredCourses = courses.filter((c) => {
    if (!selectedLevel) return true;
    return c.level.toLowerCase() === selectedLevel.toLowerCase();
  });

  return (
    <section className="relative z-10 w-full bg-white pt-8 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-1">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium transition-colors shadow-xs cursor-pointer"
            >
              <Filter className="w-3.5 h-3.5 text-slate-600 stroke-2" />
              <span>Filter</span>
            </button>

            <button
              type="button"
              onClick={() =>
                setSelectedLevel((prev) =>
                  prev === "Beginner" ? null : "Beginner",
                )
              }
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors shadow-xs cursor-pointer ${
                selectedLevel
                  ? "border-brand-blue bg-brand-blue/5 text-brand-blue"
                  : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5 stroke-2" />
              <span>Level</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium transition-colors shadow-xs cursor-pointer"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-slate-600 stroke-2" />
              <span>Category</span>
            </button>
          </div>

          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium transition-colors shadow-xs cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-600 stroke-2" />
              <span>Most relevant</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredCourses.map((course, idx) => (
            <CourseCard
              key={course.id || idx}
              course={course}
              priority={idx < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
