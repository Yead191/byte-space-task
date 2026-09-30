import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function CourseDetailsSkeleton() {
  return (
    <div className="relative w-full bg-white min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-130 sm:h-145 lg:h-157.5 xl:h-162.5 bg-brand-blue overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
          }}
        />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-137.5 h-137.5 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-28 xl:pt-32 pb-20 sm:pb-28">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 sm:mb-7 lg:mb-8">
          <div className="space-y-3 max-w-3xl w-full">
            <Skeleton className="h-9 sm:h-10 w-4/5 max-w-xl rounded-xl bg-white/25" />
            <Skeleton className="h-4 sm:h-5 w-3/5 max-w-md rounded-lg bg-white/20" />
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <Skeleton className="h-4 w-28 rounded-md bg-white/20" />
              <Skeleton className="h-7 w-24 rounded-full bg-white/30" />
              <Skeleton className="h-7 w-32 rounded-full bg-white/30" />
              <Skeleton className="h-7 w-28 rounded-full bg-white/30" />
            </div>
          </div>

          <div className="shrink-0 pt-0.5">
            <Skeleton className="h-9 w-22 rounded-full bg-white/25" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-8 flex flex-col">
            <div className="w-full mb-10 sm:mb-12">
              <div className="w-full max-w-160 lg:max-w-165 xl:max-w-175 aspect-[1.55/1] max-h-85 sm:max-h-95 lg:max-h-97.5 xl:max-h-105 rounded-3xl sm:rounded-4xl overflow-hidden bg-white/15 backdrop-blur-xs border border-white/20 shadow-2xl flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/25 border border-white/30 shadow-lg" />
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 py-2 mb-6 sm:mb-8">
              <Skeleton className="h-9 w-20 rounded-full bg-slate-200/80" />
              <Skeleton className="h-9 w-20 rounded-full bg-slate-100" />
              <Skeleton className="h-9 w-22 rounded-full bg-slate-100" />
            </div>

            <div className="w-full space-y-8 sm:space-y-10">
              <div>
                <Skeleton className="h-7 w-36 rounded-lg bg-slate-200 mb-4" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full rounded-md bg-slate-100" />
                  <Skeleton className="h-4 w-11/12 rounded-md bg-slate-100" />
                  <Skeleton className="h-4 w-4/5 rounded-md bg-slate-100" />
                  <Skeleton className="h-4 w-full rounded-md bg-slate-100 mt-4" />
                  <Skeleton className="h-4 w-5/6 rounded-md bg-slate-100" />
                </div>
              </div>

              <div>
                <Skeleton className="h-6 w-32 rounded-lg bg-slate-200 mb-4" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton
                      key={i}
                      className="aspect-4/3 rounded-2xl sm:rounded-[20px] bg-slate-100"
                    />
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-6 w-28 rounded-lg bg-slate-200 mb-4" />
                <div className="space-y-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Skeleton className="w-5 h-5 rounded-full bg-slate-200 shrink-0" />
                      <Skeleton className="h-4 w-48 sm:w-64 rounded-md bg-slate-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 w-full z-20">
            <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-7 xl:p-8 shadow-xl border border-slate-200/80 w-full flex flex-col">
              <Skeleton className="h-7 w-52 rounded-lg bg-slate-200 mb-5" />

              <div className="space-y-3.5 mb-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 flex-1">
                      <Skeleton className="h-4 w-4 rounded-md bg-slate-200" />
                      <Skeleton className="h-4 w-3/4 rounded-md bg-slate-100" />
                    </div>
                    <Skeleton className="h-4 w-12 rounded-md bg-slate-100" />
                  </div>
                ))}
              </div>

              <Skeleton className="h-3.5 w-24 rounded-md bg-slate-100 mb-4" />
              <Skeleton className="h-4 w-4/5 rounded-md bg-slate-100 mb-6" />

              <div className="flex items-baseline gap-2 mb-6">
                <Skeleton className="h-9 w-20 rounded-lg bg-slate-200" />
                <Skeleton className="h-4 w-14 rounded-md bg-slate-100" />
              </div>

              <Skeleton className="h-12 w-full rounded-full bg-slate-200 mb-7" />

              <Skeleton className="h-5 w-40 rounded-md bg-slate-200 mb-4" />
              <div className="space-y-3 mb-7">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Skeleton className="w-5 h-5 rounded-md bg-slate-200 shrink-0" />
                    <Skeleton className="h-4 w-40 rounded-md bg-slate-100" />
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 mb-6" />

              <div className="flex items-center gap-3.5 mb-4">
                <Skeleton className="w-13 h-13 rounded-full bg-slate-200 shrink-0" />
                <div className="space-y-1.5 flex-1">
                  <Skeleton className="h-4 w-32 rounded-md bg-slate-200" />
                  <Skeleton className="h-3 w-24 rounded-md bg-slate-100" />
                </div>
              </div>

              <Skeleton className="h-3.5 w-4/5 rounded-md bg-slate-100 mb-5" />
              <Skeleton className="h-9 w-32 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
