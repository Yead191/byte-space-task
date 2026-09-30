import React from "react";
import Link from "next/link";

interface CourseTabNavProps {
  currentTab: string;
  courseSlug: string;
}

export function CourseTabNav({ currentTab, courseSlug }: CourseTabNavProps) {
  // Normalize currentTab: "lesson" and "lessons" map to lessons
  const normalized = currentTab.toLowerCase().trim();
  const activeTab =
    normalized === "lesson" || normalized === "lessons"
      ? "lessons"
      : normalized === "reviews"
        ? "reviews"
        : "about";

  const tabs = [
    { id: "about", label: "About", queryValue: "about" },
    { id: "lessons", label: "Lesson", queryValue: "lessons" },
    { id: "reviews", label: "Reviews", queryValue: "reviews" },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3 py-2 select-none">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <Link
            key={tab.id}
            href={`/courses/${courseSlug}?tab=${tab.queryValue}`}
            scroll={false}
            replace={true}
            className={`px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-brand-lime text-slate-950 shadow-xs hover:bg-[#cbf11d]"
                : "bg-[#F4F4F5] text-slate-600 hover:text-slate-900 hover:bg-[#ebebee]"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
