import React from "react";
import { BarChart2, Star, Users } from "lucide-react";
import { CourseDetail } from "@/types";
import { CourseVideoPlayer } from "./course-video-player";
import { CourseSidebarCard } from "./course-sidebar-card";
import { CourseHeroShareButton } from "./course-hero-share-button";
import { CourseTabNav } from "./course-tab-nav";
import { CourseAboutTab } from "./course-about-tab";
import { CourseLessonsTab } from "./course-lessons-tab";
import { CourseReviewsTab } from "./course-reviews-tab";

interface CourseDetailsViewProps {
  course: CourseDetail;
  activeTab?: string;
  ratingFilter?: string;
}

export function CourseDetailsView({
  course,
  activeTab = "about",
  ratingFilter = "all",
}: CourseDetailsViewProps) {
  const normalized = (activeTab || "about").toLowerCase().trim();
  const currentTab =
    normalized === "lesson" || normalized === "lessons"
      ? "lessons"
      : normalized === "reviews"
        ? "reviews"
        : "about";

  return (
    <div className="relative w-full bg-white">
      <section className="relative z-20 w-full bg-brand-blue pt-24 sm:pt-28 lg:pt-28 xl:pt-32 pb-8 sm:pb-10 lg:pb-10">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
          }}
        />

        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-137.5 h-137.5 bg-white/5 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 sm:mb-7 lg:mb-8">
            <div className="space-y-2 lg:space-y-2.5 max-w-4xl min-w-0">
              <h1 className="font-heading font-semibold text-white text-xl sm:text-2xl lg:text-[32px] xl:text-[36px] tracking-tight leading-tight whitespace-normal lg:whitespace-nowrap">
                {course.title}
              </h1>

              <p className="text-white/90 text-xs sm:text-sm lg:text-sm xl:text-base font-normal leading-relaxed">
                {course.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-0.5 sm:pt-1">
                <span className="text-[11px] sm:text-xs text-white/80 font-normal">
                  by{" "}
                  <span className="font-semibold text-white capitalize">
                    {course.instructor}
                  </span>
                </span>

                <div className="inline-flex items-center gap-1.5 bg-white text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                  <BarChart2 className="w-3.5 h-3.5 text-brand-blue stroke-[2.5]" />
                  <span>{course.level}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-white text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-[#eab308] text-[#eab308]" />
                  <span>
                    {course.rating} ({course.reviewCount} reviews)
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-white text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                  <Users className="w-3.5 h-3.5 text-brand-blue stroke-[2.5]" />
                  <span>{course.studentsCount}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 pt-0.5">
              <CourseHeroShareButton />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start">
            <div className="lg:col-span-7 xl:col-span-8 w-full flex items-start">
              <CourseVideoPlayer
                videoUrl={course.videoUrl}
                posterImage={course.videoThumbnail}
                courseTitle={course.title}
                className="w-full max-w-160 lg:max-w-165 xl:max-w-175 aspect-[1.55/1] max-h-85 sm:max-h-95 lg:max-h-97.5 xl:max-h-105 rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl"
              />
            </div>

            <div className="lg:col-span-5 xl:col-span-4 w-full relative z-30">
              <div className="lg:absolute lg:top-0 lg:left-0 lg:w-full">
                <CourseSidebarCard course={course} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-white pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start">
            <div className="lg:col-span-7 xl:col-span-8 w-full">
              <div className="mb-6 sm:mb-8">
                <CourseTabNav
                  currentTab={currentTab}
                  courseSlug={course.slug}
                />
              </div>

              <div className="w-full">
                {currentTab === "about" && <CourseAboutTab course={course} />}
                {currentTab === "lessons" && (
                  <CourseLessonsTab course={course} />
                )}
                {currentTab === "reviews" && (
                  <CourseReviewsTab
                    course={course}
                    initialRatingFilter={ratingFilter}
                  />
                )}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5 xl:col-span-4 pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
