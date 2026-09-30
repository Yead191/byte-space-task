"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { CourseDetail } from "@/types";

interface CourseReviewsTabProps {
  course: CourseDetail;
  initialRatingFilter?: string;
}

export function CourseReviewsTab({
  course,
  initialRatingFilter = "all",
}: CourseReviewsTabProps) {
  const [selectedFilter, setSelectedFilter] =
    useState<string>(initialRatingFilter);

  const filterOptions = [
    { id: "all", label: "All rating" },
    { id: "5", label: "★ 5" },
    { id: "4", label: "★ 4" },
    { id: "3", label: "★ 3" },
    { id: "2", label: "★ 2" },
    { id: "1", label: "★ 1" },
  ];

  const filteredReviews =
    selectedFilter === "all"
      ? course.reviews
      : course.reviews.filter((r) => r.rating === parseInt(selectedFilter, 10));

  return (
    <div className="space-y-8 sm:space-y-10 animate-fade-in-up">
      <div>
        <h3 className="font-heading font-semibold text-slate-900 text-xl sm:text-2xl mb-3">
          What Learners Are Saying
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Discover what our learners have to say about their experience with
          &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews
          and ratings from individuals who have embarked on the transformative
          journey of mastering digital asset creation.
        </p>
      </div>

      <div className="border border-slate-200 rounded-3xl sm:rounded-4xl p-5 sm:p-7 bg-white shadow-xs flex flex-col sm:flex-row items-center gap-6 sm:gap-10 max-w-2xl">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl bg-brand-lime flex flex-col items-center justify-center shrink-0 shadow-xs">
          <span className="text-xs font-semibold text-slate-800">Ratings</span>
          <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            {course.ratingsSummary.average}
          </span>
        </div>

        <div className="flex-1 w-full space-y-2">
          {course.ratingsSummary.distribution.map((item) => (
            <div
              key={item.stars}
              className="flex items-center gap-3 text-xs sm:text-sm"
            >
              <div className="flex-1 h-2 sm:h-2.5 bg-[#E4E4E7] rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-lime rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <div className="flex items-center gap-0.5 text-slate-800 shrink-0 w-20 justify-end">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < item.stars
                        ? "fill-slate-800 text-slate-800"
                        : "fill-slate-200 text-slate-200"
                    }`}
                  />
                ))}
              </div>

              <span className="text-slate-600 font-medium w-8 text-right shrink-0">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-heading font-semibold text-slate-900 text-base sm:text-lg mb-4">
          Individual Reviews:
        </h4>

        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6">
          {filterOptions.map((opt) => {
            const isSelected = selectedFilter === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 sm:px-4.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-brand-lime text-slate-950 shadow-xs"
                    : "bg-[#F4F4F5] text-slate-600 hover:text-slate-900 hover:bg-[#eaeaea]"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-4 sm:space-y-5">
          {filteredReviews.length === 0 ? (
            <div className="p-8 text-center border border-dashed border-slate-200 rounded-3xl text-slate-500 text-sm">
              No reviews found for this rating filter.
            </div>
          ) : (
            filteredReviews.map((review) => (
              <div
                key={review.id}
                className="border border-slate-200 rounded-[22px] sm:rounded-[28px] p-5 sm:p-6 bg-white shadow-xs hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                      <Image
                        src={review.avatar}
                        alt={review.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-heading font-semibold text-slate-900 text-sm sm:text-base leading-tight">
                        {review.author}
                      </h5>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] sm:text-xs text-slate-400 font-normal">
                    {review.date}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < review.rating
                          ? "fill-slate-800 text-slate-800"
                          : "fill-slate-200 text-slate-200"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
