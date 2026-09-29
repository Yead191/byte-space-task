"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Course } from "@/types";
import { CourseCard } from "@/components/features/courses/course-card";

interface FeaturedCoursesSectionProps {
  initialCourses: Course[];
}

const CATEGORY_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

export function FeaturedCoursesSection({
  initialCourses,
}: FeaturedCoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Featured");

  const filteredCourses = useMemo(() => {
    if (selectedCategory === "Featured") {
      return initialCourses.slice(0, 6);
    }
    const filtered = initialCourses.filter(
      (c) => c.category.toLowerCase() === selectedCategory.toLowerCase(),
    );
    // If fewer than 6, fallback to mix to ensure consistent UI grid
    if (filtered.length === 0) {
      return initialCourses.slice(0, 6);
    }
    return filtered.slice(0, 6);
  }, [initialCourses, selectedCategory]);

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15] font-heading">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-3xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Filter Pills in 3 rows exactly matching screenshot */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {CATEGORY_ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
            >
              {row.map((category) => {
                const isSelected = selectedCategory === category;
                const isMore = category === "+ More";

                if (isMore) {
                  return (
                    <Link
                      key={category}
                      href="/courses"
                      className="px-3 py-2 text-xs sm:text-sm font-semibold text-secondary hover:underline transition-colors"
                    >
                      {category}
                    </Link>
                  );
                }

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-brand-lime text-slate-950 font-bold shadow-xs hover:bg-[#c3ea15]"
                        : "bg-[#F4F4F6] text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {filteredCourses?.map((course, idx) => (
            <CourseCard key={course.id} course={course} priority={idx < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
