"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { COURSE_CATEGORIES } from "@/data/courses";

interface CoursesSearchHeroProps {
  initialQuery?: string;
  initialCategory?: string;
}

export function CoursesSearchHero({
  initialQuery = "",
  initialCategory = "Courses",
}: CoursesSearchHeroProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);
  const [selectedLabel, setSelectedLabel] = useState(
    initialCategory &&
      initialCategory !== "Featured" &&
      initialCategory !== "All"
      ? initialCategory
      : "Courses",
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (query.trim()) {
      params.set("query", query.trim());
    } else {
      params.delete("query");
    }
    params.set("page", "1");
    router.push(`/courses?${params.toString()}`);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedLabel(
      category === "All" || category === "Featured" ? "Courses" : category,
    );
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All" || category === "Featured") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    params.set("page", "1");
    router.push(`/courses?${params.toString()}`);
  };

  return (
    <section className="relative w-full bg-brand-blue pt-32 pb-16 sm:pt-36 sm:pb-20 px-4 text-center overflow-hidden">
      {/* Background grid layout matching home hero */}
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

      <div className="relative max-w-4xl mx-auto z-10">
        <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-white tracking-tight font-heading mb-6 sm:mb-8">
          Find Your Next Course
        </h1>

        {/* Search bar matching screenshot */}
        <form
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto flex items-center bg-white rounded-full p-1.5 sm:p-2 shadow-2xl transition-all focus-within:ring-4 focus-within:ring-white/30"
        >
          <div className="flex items-center flex-1 pl-4 sm:pl-5 min-w-0">
            <Search className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent border-0 text-slate-900  text-sm sm:text-base focus:outline-none"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="bg-brand-lime text-slate-950 font-bold px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm hover:bg-[#c3ea15] transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
              >
                <span>{selectedLabel}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-white border border-slate-100 shadow-xl rounded-2xl p-1 z-50"
            >
              <DropdownMenuItem
                onClick={() => handleCategorySelect("All")}
                className="rounded-xl px-3 py-2 text-xs font-semibold cursor-pointer hover:bg-slate-50"
              >
                All Courses
              </DropdownMenuItem>
              {COURSE_CATEGORIES.filter((c) => c !== "Featured").map(
                (category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="rounded-xl px-3 py-2 text-xs font-medium cursor-pointer hover:bg-slate-50"
                  >
                    {category}
                  </DropdownMenuItem>
                ),
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </form>
      </div>
    </section>
  );
}
