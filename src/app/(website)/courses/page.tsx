import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { getCourses } from "@/data/courses";
import { CourseCard } from "@/components/features/courses/course-card";
import { CoursesSearchHero } from "@/components/features/courses/courses-search-hero";
import { CoursesFilterBar } from "@/components/features/courses/courses-filter-bar";
import { CoursesPagination } from "@/components/features/courses/courses-pagination";
import {
  SearchHeroSkeleton,
  FilterBarSkeleton,
  PaginationSkeleton,
} from "@/components/features/courses/courses-skeletons";

export const metadata: Metadata = {
  title: "Courses - ByteSpace",
  description:
    "Find your next course on ByteSpace. Explore topics in Design, Technology, Business, and more.",
};

interface CoursesPageProps {
  searchParams: Promise<{
    query?: string;
    category?: string;
    level?: string;
    sort?: string;
    page?: string;
  }>;
}

const COURSES_PER_PAGE = 9;

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.query || "";
  const category = resolvedParams.category || "";
  const level = resolvedParams.level || "";
  const sort = resolvedParams.sort || "relevance";
  const page = parseInt(resolvedParams.page || "1", 10) || 1;

  const {
    courses,
    total,
    totalPages,
    page: currentPage,
  } = await getCourses({
    query,
    category,
    level,
    sort,
    page,
    pageSize: COURSES_PER_PAGE,
  });

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Top Search Hero Section */}
      <Suspense fallback={<SearchHeroSkeleton />}>
        <CoursesSearchHero
          initialQuery={query}
          initialCategory={category || "Courses"}
        />
      </Suspense>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Filters Bar & Category Pills */}
        <Suspense fallback={<FilterBarSkeleton />}>
          <CoursesFilterBar
            currentCategory={category}
            currentLevel={level}
            currentSort={sort}
          />
        </Suspense>

        {/* Search feedback when query active */}
        {query && (
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing results for{" "}
              <span className="font-semibold text-slate-900">
                &quot;{query}&quot;
              </span>{" "}
              ({total} courses found)
            </p>
            <Link
              href="/courses"
              className="text-xs font-semibold text-brand-blue hover:underline"
            >
              Clear search
            </Link>
          </div>
        )}

        {/* Courses Grid */}
        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {courses.map((course, idx) => (
              <CourseCard key={course.id} course={course} priority={idx < 6} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              No courses found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              We couldn&apos;t find any courses matching your filters. Try
              adjusting your search term or resetting your category selections.
            </p>
            <Link
              href="/courses"
              className="px-6 py-2.5 rounded-full bg-brand-lime text-slate-950 font-bold text-sm hover:bg-[#c3ea15] transition-all shadow-xs"
            >
              Reset all filters
            </Link>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Suspense fallback={<PaginationSkeleton />}>
            <CoursesPagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
}
