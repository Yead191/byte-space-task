import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function SearchHeroSkeleton() {
  return (
    <div className="relative w-full bg-brand-blue pt-32 pb-16 sm:pt-36 sm:pb-20 px-4 text-center overflow-hidden">
      <div className="relative max-w-4xl mx-auto flex flex-col items-center">
        <Skeleton className="h-10 w-72 sm:w-96 rounded-xl bg-white/20 mb-8" />
        <Skeleton className="h-14 w-full max-w-2xl rounded-full bg-white/30" />
      </div>
    </div>
  );
}

export function FilterBarSkeleton() {
  return (
    <div className="w-full space-y-4 mb-8 sm:mb-10">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-20 rounded-full bg-slate-100" />
          <Skeleton className="h-9 w-24 rounded-full bg-slate-100" />
          <Skeleton className="h-9 w-28 rounded-full bg-slate-100" />
        </div>
        <Skeleton className="h-9 w-32 rounded-full bg-slate-100" />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-24 rounded-full bg-slate-100" />
        ))}
      </div>
    </div>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="bg-white rounded-4xl p-4 sm:p-4.5 border border-[#E5E7EB] flex flex-col justify-between">
      <Skeleton className="relative aspect-16/10 w-full rounded-[22px] bg-slate-100" />
      <div className="pt-4 px-1 pb-1 flex flex-col flex-1 justify-between gap-4">
        <div>
          <div className="flex items-center justify-between gap-2">
            <Skeleton className="h-6 w-3/4 rounded-lg bg-slate-100" />
            <Skeleton className="h-5 w-10 rounded-md bg-slate-100" />
          </div>
          <Skeleton className="h-4 w-1/3 rounded-md bg-slate-100 mt-2" />
        </div>
        <div className="flex items-center justify-between gap-2 mt-4">
          <Skeleton className="h-8 w-24 rounded-full bg-slate-100" />
          <Skeleton className="h-8 w-28 rounded-full bg-slate-100" />
        </div>
        <Skeleton className="h-7 w-20 rounded-md bg-slate-100 mt-4" />
      </div>
    </div>
  );
}

export function CoursesGridSkeleton({ count = 9 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function PaginationSkeleton() {
  return (
    <div className="flex items-center justify-center gap-2 pt-12 pb-16">
      <Skeleton className="w-10 h-10 rounded-full bg-slate-100" />
      <div className="flex items-center gap-1.5 px-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-10 h-10 rounded-full bg-slate-100" />
        ))}
      </div>
      <Skeleton className="w-10 h-10 rounded-full bg-slate-100" />
    </div>
  );
}
