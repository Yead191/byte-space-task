"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  ArrowUpDown,
  Check,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { COURSE_CATEGORIES } from "@/data/courses";

const SEARCH_PAGE_PILLS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

const SORT_OPTIONS = [
  { label: "Most Relevant", value: "relevance" },
  { label: "Highest Rated", value: "rating" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
  { label: "Most Lessons", value: "lessons" },
];

interface CoursesFilterBarProps {
  currentCategory?: string;
  currentLevel?: string;
  currentSort?: string;
}

export function CoursesFilterBar({
  currentCategory = "Featured",
  currentLevel = "All",
  currentSort = "relevance",
}: CoursesFilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (
      !value ||
      value === "All" ||
      (key === "category" && value === "Featured")
    ) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.set("page", "1");
    router.push(`/courses?${params.toString()}`);
  };

  const activeCategory = currentCategory || "Featured";
  const activeSortLabel =
    SORT_OPTIONS.find((s) => s.value === currentSort)?.label || "Most Relevant";

  return (
    <div className="w-full space-y-4 mb-8 sm:mb-10">
      {/* Top Filter & Sorting Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 ">
        {/* Left Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Main Filter Toggle */}
          <button
            type="button"
            onClick={() => {
              // Reset all filters
              const params = new URLSearchParams();
              const q = searchParams.get("query");
              if (q) params.set("query", q);
              router.push(`/courses?${params.toString()}`);
            }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-600" />
            <span>Filter</span>
          </button>

          {/* Level Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer ${
                  currentLevel && currentLevel !== "All"
                    ? "border-brand-blue bg-blue-50/50 text-brand-blue"
                    : "border-slate-200 text-slate-700 bg-white hover:bg-slate-50"
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5 text-slate-600" />
                <span>
                  {currentLevel && currentLevel !== "All"
                    ? currentLevel
                    : "Level"}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-40 bg-white border border-slate-100 shadow-xl rounded-2xl p-1 z-50"
            >
              {LEVELS.map((lvl) => (
                <DropdownMenuItem
                  key={lvl}
                  onClick={() => updateParam("level", lvl)}
                  className="rounded-xl px-3 py-2 text-xs font-medium cursor-pointer flex items-center justify-between hover:bg-slate-50"
                >
                  <span>{lvl === "All" ? "All Levels" : lvl}</span>
                  {currentLevel === lvl && (
                    <Check className="w-3.5 h-3.5 text-brand-blue" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Category Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer ${
                  currentCategory && currentCategory !== "Featured"
                    ? "border-brand-blue bg-blue-50/50 text-brand-blue"
                    : "border-slate-200 text-slate-700 bg-white hover:bg-slate-50"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-slate-600" />
                <span>
                  {currentCategory && currentCategory !== "Featured"
                    ? currentCategory
                    : "Category"}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-48 bg-white border border-slate-100 shadow-xl rounded-2xl p-1 z-50 max-h-64 overflow-y-auto"
            >
              <DropdownMenuItem
                onClick={() => updateParam("category", "Featured")}
                className="rounded-xl px-3 py-2 text-xs font-semibold cursor-pointer hover:bg-slate-50"
              >
                All Categories
              </DropdownMenuItem>
              {COURSE_CATEGORIES.filter((c) => c !== "Featured").map((cat) => (
                <DropdownMenuItem
                  key={cat}
                  onClick={() => updateParam("category", cat)}
                  className="rounded-xl px-3 py-2 text-xs font-medium cursor-pointer flex items-center justify-between hover:bg-slate-50"
                >
                  <span>{cat}</span>
                  {currentCategory === cat && (
                    <Check className="w-3.5 h-3.5 text-brand-blue" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Sort Dropdown */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
              >
                <span>{activeSortLabel}</span>
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-white border border-slate-100 shadow-xl rounded-2xl p-1 z-50"
            >
              {SORT_OPTIONS.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onClick={() => updateParam("sort", opt.value)}
                  className="rounded-xl px-3 py-2 text-xs font-medium cursor-pointer flex items-center justify-between hover:bg-slate-50"
                >
                  <span>{opt.label}</span>
                  {currentSort === opt.value && (
                    <Check className="w-3.5 h-3.5 text-brand-blue" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Category Pills Row */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {SEARCH_PAGE_PILLS.map((cat) => {
          const isSelected =
            (cat === "Featured" &&
              (!currentCategory || currentCategory === "Featured")) ||
            activeCategory.toLowerCase() === cat.toLowerCase();

          return (
            <button
              key={cat}
              onClick={() => updateParam("category", cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-brand-lime text-slate-950 font-bold shadow-xs hover:bg-[#c3ea15]"
                  : "bg-[#F4F4F6] text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
