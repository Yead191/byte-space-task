"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CoursesPaginationProps {
  currentPage: number;
  totalPages: number;
}

export function CoursesPagination({
  currentPage,
  totalPages,
}: CoursesPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`/courses?${params.toString()}`);
  };

  // Generate page numbers to display (up to 5 pages)
  const displayPages = Array.from(
    { length: Math.min(5, Math.max(totalPages, 5)) },
    (_, i) => i + 1
  );

  return (
    <nav 
      aria-label="Courses Pagination" 
      className="flex items-center justify-center gap-2 pt-12 pb-16"
    >
      {/* Previous Page Button */}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-slate-400 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Number Buttons */}
      <div className="flex items-center gap-1 sm:gap-1.5 px-2">
        {displayPages.map((pageNum) => {
          const isActive = pageNum === currentPage;
          return (
            <button
              key={pageNum}
              type="button"
              onClick={() => handlePageChange(pageNum)}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center ${
                isActive
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Page Button */}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-slate-400 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
